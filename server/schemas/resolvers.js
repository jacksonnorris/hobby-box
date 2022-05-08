const { AuthenticationError } = require('apollo-server-express');
const { User, Box, Order } = require('../models');
const { signToken } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },
    user: async (parent, args) => {
      return User.findOne({ _id: args.id });
    },
    username: async (parent, args) => {
      return User.findOne({ username: args.username });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    orders: async () => {
      return Order.find();
    },
    boxes: async (parent, args) => {
      return Box.find();
    },
    box: async (parent, args) => {
      return Box.findOne({ _id: args.id });
    },
    checkout: async (parent, args, context) => {
      // This snippet allows us to use the base URL to fetch images (not necessary for Project 3)
      const url = new URL(context.headers.referer).origin;

      // Create new instance of order with associated products passed into products array
      const order = new Order({ products: args.products });

      // This array is for collecting prices and quantity of each product
      const line_items = [];

      // Populating product data for order screen
      const { products } = await order.populate('products');

      // This loop creates the line items for each product using name, description, and image properties
      for (let i = 0; i < products.length; i++) {
        const product = await stripe.products.create({
          name: products[i].name,
          description: products[i].description,
          images: [`${products[i].images[0]}`]
        });
        // This portion of the loop uses product's price property to create price association to single line items
        const price = await stripe.prices.create({
          product: product.id,
          unit_amount: products[i].price * 100,
          currency: 'usd',
        });
        // Adds each price and quantity to the line_items array
        line_items.push({
          price: price.id,
          quantity: 1
        });
      }

      // This complies information from the loop of products and creates the checkout page
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items,
        mode: 'payment',
        success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${url}/`
      });

      return { session: session.id };
    }
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      console.log('User', user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, { new: true });
      }
      throw new AuthenticationError('No user found.');
    },
    // Need to remove Orders tied to User
    removeUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findOneAndRemove(context.user._id, args, { new: true });
      }
      throw new AuthenticationError('No user found.');
    },
    addOrder: async (parent, { products }, context) => {
      if (context.user) {
        const order = new Order({ products });

        await User.findByIdAndUpdate(context.user._id, { $push: { orders: order } });

        return order;
      }
      throw new AuthenticationError('Something went wrong!');
    },
    updateOrder: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, { new: true });
      }
      throw new AuthenticationError('No order found.');
    },
  }
};

module.exports = resolvers;

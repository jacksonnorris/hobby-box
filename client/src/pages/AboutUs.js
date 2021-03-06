import React, { useState } from 'react';


const AboutUs = () => {
  const [isOpen, setIsOpen] = useState(null);

  return (
    <main>
      <div className='aboutUsHeroImage'></div>
      <div className="flex-row justify-center">
        <div className='welcome'>
          <h2 className='home-header'> We are an open book. Take a look below for frequently asked questions.</h2>
        </div>
      </div>
      <div id="accordion-collapse" data-accordion="collapse">
        <div className='container mx-auto px-4 my-8'>
          {/* Question 1 */}
          <h2 id="accordion-collapse-heading-1">
            <button onClick={() => setIsOpen(1)} id="aboutUsHeader" type="button" className="flex justify-between items-center p-5 w-full font-medium text-left text-black rounded-t-xl border border-b-0 border-gray-200 focus:ring-4 focus:ring-black-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
              <span className='text-xl'>What is HobbyBox?</span>
              <svg data-accordion-icon className="w-6 h-6 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>
          </h2>
          {isOpen === 1 && <div id="accordion-collapse-body-1" className="" aria-labelledby="accordion-collapse-heading-1">
            <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
              <p className="mb-2 text-gray-500 dark:text-gray-400">We provide the necessary sets of supplies needed to bring your passionate hobby pursuit to practice. Boredom  will no longer be a thing, manifest your interests and ideas into <strong>EXISTENCE</strong> with Hobby Box! You have the option to select from 6 different hobby categories. Select your favorite category or get a little crazy and try out a new one to discover a new Hobby! Let us help so you can think outside the Box!</p>
            </div>
          </div>}
          {/* Question 2 */}
          <h2 id="accordion-collapse-heading-2">
            <button onClick={() => setIsOpen(2)} id="aboutUsHeader" type="button" className="flex justify-between items-center p-5 w-full font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-black-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-2" aria-expanded="false" aria-controls="accordion-collapse-body-2">
              <span className='text-xl'>How it Works?</span>
              <svg data-accordion-icon className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>
          </h2>
          {isOpen === 2 && <div id="accordion-collapse-body-2" className=" " aria-labelledby="accordion-collapse-heading-2">
            <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                There are 6 categories to select from so you can dabble and explore a new hobby or stick with your favorite hobby category. Each month, each box will contain new mystery products. This keeps it fresh and exciting allowing you to try new things. Purchase at your own pace each month so you can switch out between the different categories and explore new hobbies.
              </p>
            </div>
          </div>}
          {/* Question 3 */}
          <h2 id="accordion-collapse-heading-3">
            <button onClick={() => setIsOpen(3)} id="aboutUsHeader" type="button" className="flex justify-between items-center p-5 w-full font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
              <span className='text-xl'>What will be in my box?</span>
              <svg data-accordion-icon className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>
          </h2>
          {isOpen === 3 && <div id="accordion-collapse-body-3" className=" " aria-labelledby="accordion-collapse-heading-3">
            <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                We partner with different vendors to source fresh and new items each month.</p>
              <p className="mb-2 text-gray-500 dark:text-gray-400">Examples of what you might receive in each box:</p>
              <ul className="pl-5 list-disc text-gray-500 dark:text-gray-400">
                <li><strong>Keyboards:</strong> parts, components, and tools that every mechanical keyboard lover will love to use! </li>
                <li><strong>Dungeons & Dragons:</strong> dice sets to mini figures and even to game maps that can bring your game to life! </li>
                <li><strong>Arts & Crafts:</strong> DIY kits for knitting, painting, jewlery design. etc. to make your Pintrest ideas come true! </li>
                <li><strong>Gardening:</strong> live plants, seeds and gardening tools to bring life to your home! </li>
                <li><strong>Books:</strong> books from different genres that you can suggest to you book club! </li>
                <li><strong>Beer/Wine:</strong> beer brewing kits, tools for beer and wine, samples or full size bottles to try! </li>
              </ul>
            </div>
          </div>}
          {/* Question 4 */}
          <h2 id="accordion-collapse-heading-4">
            <button onClick={() => setIsOpen(4)} id="aboutUsHeader" type="button" className="flex justify-between items-center p-5 w-full font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-4" aria-expanded="true" aria-controls="accordion-collapse-body-4">
              <span className='text-xl'>How long will shipping take?</span>
              <svg data-accordion-icon className="w-6 h-6 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>
          </h2>
          {isOpen === 4 && <div id="accordion-collapse-body-4" className=" " aria-labelledby="accordion-collapse-heading-4">
            <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                The Hobby Boxes will be shipped via FedEx and take 5-10 business days depending on the location. Currently we are only shipping within the United States.
              </p>
            </div>
          </div>}
          {/* Question 5 */}
          <h2 id="accordion-collapse-heading-5">
            <button onClick={() => setIsOpen(5)} id="aboutUsHeader" type="button" className="flex justify-between items-center p-5 w-full font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-5" aria-expanded="false" aria-controls="accordion-collapse-body-5">
              <span className='text-xl'>I have an issue, who can I contact?</span>
              <svg data-accordion-icon className="w-6 h-6 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>
          </h2>
          {isOpen === 5 && <div id="accordion-collapse-body-5" className=" " aria-labelledby="accordion-collapse-heading-5">
            <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                You can call our customer service number 1-800-462-2929 everyday between 8am EST - 8pm EST. One of our customer service reps can assist you with any issues or questions you may have.
              </p>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                You can also email us at hobbybox@hobbybox.com
              </p>
            </div>
          </div>}
        </div>
      </div>
    </main>
  )
};

export default AboutUs;

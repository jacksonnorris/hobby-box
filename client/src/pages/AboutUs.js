// Node Modules
import React from 'react';
// import React, { useState } from 'react';
import './AboutUs.css';

// const Accordion = () => {
//   const [activeIndex, setActiveIndex] = useState(1);

const AboutUs = () => {
  return (
 <>
<div id="accordion-collapse" data-accordion="collapse">
  <h2 id="accordion-collapse-heading-1">
    <button
      type="button"
      className="flex justify-between items-center p-5 w-full font-medium text-left text-gray-500 rounded-t-xl border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
      data-accordion-target="#accordion-collapse-body-1"
      aria-expanded="true"
      aria-controls="accordion-collapse-body-1"
    >
      <span>What is Flowbite?</span>
      <svg
        data-accordion-icon=""
        className="w-6 h-6 rotate-180 shrink-0"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  </h2>
  <div
    id="accordion-collapse-body-1"
    className="hidden"
    aria-labelledby="accordion-collapse-heading-1"
  >
    <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
      <p className="mb-2 text-gray-500 dark:text-gray-400">
        Flowbite is an open-source library of interactive components built on
        top of Tailwind CSS including buttons, dropdowns, modals, navbars, and
        more.
      </p>
      <p className="text-gray-500 dark:text-gray-400">
        Check out this guide to learn how to{" "}
        <a
          href="https://flowbite.com/docs/getting-started/introduction/"
          className="text-blue-600 dark:text-blue-500 hover:underline"
        >
          get started
        </a>{" "}
        and start developing websites even faster with components on top of
        Tailwind CSS.
      </p>
    </div>
  </div>
  <h2 id="accordion-collapse-heading-2">
    <button
      type="button"
      className="flex justify-between items-center p-5 w-full font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
      data-accordion-target="#accordion-collapse-body-2"
      aria-expanded="false"
      aria-controls="accordion-collapse-body-2"
    >
      <span>Is there a Figma file available?</span>
      <svg
        data-accordion-icon=""
        className="w-6 h-6 shrink-0"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  </h2>
  <div
    id="accordion-collapse-body-2"
    className="hidden"
    aria-labelledby="accordion-collapse-heading-2"
  >
    <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
      <p className="mb-2 text-gray-500 dark:text-gray-400">
        Flowbite is first conceptualized and designed using the Figma software
        so everything you see in the library has a design equivalent in our
        Figma file.
      </p>
      <p className="text-gray-500 dark:text-gray-400">
        Check out the{" "}
        <a
          href="https://flowbite.com/figma/"
          className="text-blue-600 dark:text-blue-500 hover:underline"
        >
          Figma design system
        </a>{" "}
        based on the utility classes from Tailwind CSS and components from
        Flowbite.
      </p>
    </div>
  </div>
  <h2 id="accordion-collapse-heading-3">
    <button
      type="button"
      className="flex justify-between items-center p-5 w-full font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
      data-accordion-target="#accordion-collapse-body-3"
      aria-expanded="false"
      aria-controls="accordion-collapse-body-3"
    >
      <span>What are the differences between Flowbite and Tailwind UI?</span>
      <svg
        data-accordion-icon=""
        className="w-6 h-6 shrink-0"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  </h2>
  <div
    id="accordion-collapse-body-3"
    className="hidden"
    aria-labelledby="accordion-collapse-heading-3"
  >
    <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
      <p className="mb-2 text-gray-500 dark:text-gray-400">
        The main difference is that the core components from Flowbite are open
        source under the MIT license, whereas Tailwind UI is a paid product.
        Another difference is that Flowbite relies on smaller and standalone
        components, whereas Tailwind UI offers sections of pages.
      </p>
      <p className="mb-2 text-gray-500 dark:text-gray-400">
        However, we actually recommend using both Flowbite, Flowbite Pro, and
        even Tailwind UI as there is no technical reason stopping you from using
        the best of two worlds.
      </p>
      <p className="mb-2 text-gray-500 dark:text-gray-400">
        Learn more about these technologies:
      </p>
      <ul className="pl-5 list-disc text-gray-500 dark:text-gray-400">
        <li>
          <a
            href="https://flowbite.com/pro/"
            className="text-blue-600 dark:text-blue-500 hover:underline"
          >
            Flowbite Pro
          </a>
        </li>
        <li>
          <a
            href="https://tailwindui.com/"
            rel="nofollow"
            className="text-blue-600 dark:text-blue-500 hover:underline"
          >
            Tailwind UI
          </a>
        </li>
      </ul>
    </div>
  </div>
</div>
</> 



// *********actual content below, don't delete **********************

    // <>
    //   <div className="accordion" id="accordionExample">
    //     {/* Question #1 */}
    //     <div className="accordion-item bg-white border border-gray-200">
    //       <h2 className="accordion-header mb-0" id="headingOne">
    //         <button
    //           className="
    //             accordion-button
    //             relative
    //             flex
    //             items-center
    //             w-full
    //             py-4
    //             px-5
    //             text-base text-gray-800 text-left
    //             bg-white
    //             border-0
    //             rounded-none
    //             transition
    //             focus:outline-none
    //           "
    //           type="button"
    //           data-bs-toggle="collapse"
    //           data-bs-target="#collapseOne"
    //           aria-expanded="true"
    //           aria-controls="collapseOne"
    //         >
    //         </button>
    //           What is Hobby Box?
    //       </h2>
    //       <div
    //         id="collapseOne"
    //         className="accordion-collapse collapse show"
    //         aria-labelledby="headingOne"
    //         data-bs-parent="#accordionExample"
    //       >
    //         <div className="accordion-body py-4 px-5">
    //           We provide the necessary sets of supplies needed to bring your passionate pursuit to practice, but we assist in choosing the pathway to becoming an expert! Manifest your interests and ideas into <strong>EXISTENCE</strong> with the click of a button. Choose the tier that best meshes with YOUR schedule and interests so that you don't overwhelm yourself with new things to do. Being a newbie can be intimidating. Let us help so you can think outside the Box!
    //         </div>
    //       </div>
    //     </div>
    //     {/* Question #2 */}
    //     <div className="accordion-item bg-white border border-gray-200">
    //       <h2 className="accordion-header mb-0" id="headingTwo">
    //         <button
    //           className="
    //             accordion-button
    //             collapsed
    //             relative
    //             flex
    //             items-center
    //             w-full
    //             py-4
    //             px-5
    //             text-base text-gray-800 text-left
    //             bg-white
    //             border-0
    //             rounded-none
    //             transition
    //             focus:outline-none
    //           "
    //           type="button"
    //           data-bs-toggle="collapse"
    //           data-bs-target="#collapseTwo"
    //           aria-expanded="false"
    //           aria-controls="collapseTwo"
    //         >
    //           <strong>How it Works?</strong>
    //         </button>
    //       </h2>
    //       <div
    //         id="collapseTwo"
    //         className="accordion-collapse collapse"
    //         aria-labelledby="headingTwo"
    //         data-bs-parent="#accordionExample"
    //       >
    //         <div className="accordion-body py-4 px-5">
    //           Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab cumque est voluptas dolor, aliquid tenetur hic vitae ea explicabo? Laudantium numquam maxime nihil dicta iure officiis itaque odio molestiae quibusdam!
    //         </div>
    //       </div>
    //     </div>
    //     {/* Question #3 */}
    //     <div className="accordion-item bg-white border border-gray-200">
    //       <h2 className="accordion-header mb-0" id="headingThree">
    //         <button
    //           className="
    //             accordion-button
    //             collapsed
    //             relative
    //             flex
    //             items-center
    //             w-full
    //             py-4
    //             px-5
    //             text-base text-gray-800 text-left
    //             bg-white
    //             border-0
    //             rounded-none
    //             transition
    //             focus:outline-none
    //           "
    //           type="button"
    //           data-bs-toggle="collapse"
    //           data-bs-target="#collapseThree"
    //           aria-expanded="false"
    //           aria-controls="collapseThree"
    //         >
    //           <strong>What will be in my box?</strong>
    //         </button>
    //       </h2>
    //       <div
    //         id="collapseThree"
    //         className="accordion-collapse collapse"
    //         aria-labelledby="headingThree"
    //         data-bs-parent="#accordionExample"
    //       >
    //         <div className="accordion-body py-4 px-5">
    //           Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum sed eveniet, delectus laborum exercitationem quisquam, deserunt quaerat sit incidunt repellat voluptate fuga. Laboriosam, tempora? Beatae modi quidem nam voluptatem eum.
    //         </div>
    //       </div>
    //     </div>
    //     {/* Question #4 */}
    //     <div className="accordion-item bg-white border border-gray-200">
    //       <h2 className="accordion-header mb-0" id="headingOne">
    //         <button
    //           className="
    //             accordion-button
    //             relative
    //             flex
    //             items-center
    //             w-full
    //             py-4
    //             px-5
    //             text-base text-gray-800 text-left
    //             bg-white
    //             border-0
    //             rounded-none
    //             transition
    //             focus:outline-none
    //           "
    //           type="button"
    //           data-bs-toggle="collapse"
    //           data-bs-target="#collapseOne"
    //           aria-expanded="true"
    //           aria-controls="collapseOne"
    //         >
    //           <strong>How do the subscriptions work?</strong>
    //         </button>
    //       </h2>
    //       <div
    //         id="collapseOne"
    //         className="accordion-collapse collapse show"
    //         aria-labelledby="headingOne"
    //         data-bs-parent="#accordionExample"
    //       >
    //         <div className="accordion-body py-4 px-5">
    //           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam dolore, similique a minus voluptatem voluptate repellendus enim itaque deserunt temporibus, beatae blanditiis aliquam earum totam facere ea vel, repudiandae modi.
    //         </div>
    //       </div>
    //     </div>
    //     {/* Question #5 */}
    //     <div className="accordion-item bg-white border border-gray-200">
    //       <h2 className="accordion-header mb-0" id="headingOne">
    //         <button
    //           className="
    //             accordion-button
    //             relative
    //             flex
    //             items-center
    //             w-full
    //             py-4
    //             px-5
    //             text-base text-gray-800 text-left
    //             bg-white
    //             border-0
    //             rounded-none
    //             transition
    //             focus:outline-none
    //           "
    //           type="button"
    //           data-bs-toggle="collapse"
    //           data-bs-target="#collapseOne"
    //           aria-expanded="true"
    //           aria-controls="collapseOne"
    //         >
    //           <strong>How long will shipping take?</strong>
    //         </button>
    //       </h2>
    //       <div
    //         id="collapseOne"
    //         className="accordion-collapse collapse show"
    //         aria-labelledby="headingOne"
    //         data-bs-parent="#accordionExample"
    //       >
    //         <div className="accordion-body py-4 px-5">
    //           Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis eveniet dignissimos, debitis eos ratione autem, assumenda modi amet deleniti tenetur molestias vitae natus quia! Repellendus, ab? Ad blanditiis nostrum consequatur!
    //         </div>
    //       </div>
    //     </div>
    //     {/* Question #6 */}
    //     <div className="accordion-item bg-white border border-gray-200">
    //       <h2 className="accordion-header mb-0" id="headingOne">
    //         <button
    //           className="
    //             accordion-button
    //             relative
    //             flex
    //             items-center
    //             w-full
    //             py-4
    //             px-5
    //             text-base text-gray-800 text-left
    //             bg-white
    //             border-0
    //             rounded-none
    //             transition
    //             focus:outline-none
    //           "
    //           type="button"
    //           data-bs-toggle="collapse"
    //           data-bs-target="#collapseOne"
    //           aria-expanded="true"
    //           aria-controls="collapseOne"
    //         >
    //           <strong>I have an issue, who can I contact?</strong>
    //         </button>
    //       </h2>
    //       <div
    //         id="collapseOne"
    //         className="accordion-collapse collapse show"
    //         aria-labelledby="headingOne"
    //         data-bs-parent="#accordionExample"
    //       >
    //         <div className="accordion-body py-4 px-5">
    //           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime ad recusandae nulla qui eligendi porro quibusdam omnis repellendus optio! Architecto, illum veniam magni consequatur saepe adipisci fugit. Similique, cumque quia.
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </>
  );
};

export default AboutUs;

import React from 'react';
import { IoImages } from "react-icons/io5";

function Productivity() {
  return (
    <div className="flex flex-col gap-2 m-2">
      {/* Start A Project Box and Image Box */}
      <div className="flex flex-col md:flex-row gap-2">
        <div className="w-3/4 p-6 overflow-hidden bg-white shadow-lg rounded-xl">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="flex items-center justify-start flex-grow w-full">
              <div className="flex flex-col items-start mb-4">
                <span className="text-gray-700 text-xl font-bold">
                  Start A Project
                </span>
                <span className="text-sm font-light text-gray-400">
                  Let's get you started with your new project
                </span>
              </div>
            </div>
          </div>
          <div>
            <label htmlFor="projectName" className="mt-4 mb-2 text-lg text-gray-800">
              Enter your Project Name
            </label>
            <input type="text" id="projectName" className="w-full px-3 py-2 mb-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" />
          </div>
          <div>
            <label htmlFor="description" className="mt-4 mb-2 text-lg text-gray-800">
              Enter Description
            </label>
            <input type="text" id="description" className="w-full px-3 py-2 mb-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" />
          </div>
          <div>
            <label htmlFor="deadline" className="mt-4 mb-2 text-lg text-gray-800">
              Deadline
            </label>
            <input type="date" id="deadline" className="w-full px-3 py-2 mb-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" />
          </div>
          <button type="button" className="mt-4 py-2 px-4 bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-28 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg">
            Submit
          </button>
        </div>
        <div className="w-1/4 p-6 overflow-hidden bg-white shadow-lg rounded-xl">
          <div className="flex flex-col items-center justify-center h-full">
            <label htmlFor="image" className="border-dashed border-2 border-gray-400 rounded-lg p-6 text-center cursor-pointer">
              <input type="file" id="image" className="hidden" />
              <IoImages className="text-gray-700 text-6xl mx-auto" />
              <p className='text-sm font-light text-gray-400'>Click here to upload an Image</p>
            </label>
          </div>
        </div>
      </div>

      {/* Upload Documents Box and Collaborate Box */}
      <div className="flex flex-col md:flex-row gap-2 w-full">
        <div className="w-2/4 p-4 h-fit overflow-hidden bg-white shadow-lg rounded-xl">
          <div className="flex flex-col justify-center h-full">
            <span className="text-gray-700 text-xl font-bold">
              Upload Documents to Chat With
            </span>
            <span className="text-sm font-light text-gray-400 mb-14">
                  Add Documents or links
            </span>
            <input type="file" id="documentUpload" className="hidden" />
            <label htmlFor="documentUpload" className="border-2 border-gray-400 rounded-lg p-2 text-center cursor-pointer mb-4">
              Upload Files
            </label>
            <div className="flex flex-row gap-2">
              <input type="text" placeholder="Add links" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" />
              <button type="button" className="p-2 w-20 bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg">
                Submit
              </button>
            </div>
          </div>
        </div>
        <div className="w-full h-fit p-6 overflow-hidden bg-white shadow-lg rounded-xl">
          <div className="flex flex-col justify-center h-full">
            <span className="text-gray-700 text-xl font-bold">
              Collaborate
            </span>
            <span className="text-sm font-light text-gray-400 mb-2">
                  Talk to Like-minded people
            </span>
            <div className="w-full px-3 py-2 mb-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 h-20"></div>
            <div className='flex flex-row gap-2'>
              <textarea placeholder="Enter your message" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" rows="1"></textarea>
              <button type="button" className="py-2 px-4 bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-20 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Productivity;

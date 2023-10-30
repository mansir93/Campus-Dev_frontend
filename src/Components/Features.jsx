import React from 'react';
import { UserGroupIcon, CPUChipIcon, BriefcaseIcon, ChevronRightIcon } from '../Assets/Heroicons';

const Features = () => {

  return (
    <div>
      <div className="bg-white w-full block md:flex p-4">
        <div className="text-left p-4 md:w-1/3">
          <h4 className="font-semibold text-blue-500">
            <UserGroupIcon />
            Connect and Collaborate</h4>
          <p className="text-blue-gray-700">Our social media app facilitates conections among colleagues regardless of their institute.
            <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium shadow rounded py-1.5 px-2.5 text-center block mt-3">
              Learn More <ChevronRightIcon />
            </button>
          </p>
        </div>
        <div className="text-left p-4 md:w-1/3">
          <h4 className="font-semibold text-blue-500">
            <CPUChipIcon />
            Smart Study Companion</h4>
          <p className="text-blue-gray-700">Our chatbot assistant aids with your studies and queries.
            <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium shadow rounded py-1.5 px-2.5 text-center block mt-3">
              Learn More <ChevronRightIcon />
            </button>
          </p>
        </div>
        <div className="text-left p-4 md:w-1/3">
          <h4 className="font-semibold text-blue-500">
            <BriefcaseIcon />
            Career Opportunities at Your Fingertips</h4>
          <p className="text-blue-gray-700">Our job portal connects you find internships, part-time jobs and full-time positions as well.
            <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium shadow rounded py-1.5 px-2.5 text-center block mt-3">
              Learn More <ChevronRightIcon />
            </button>
          </p>
        </div>
      </div>
    </div >
  );
};

export default Features;
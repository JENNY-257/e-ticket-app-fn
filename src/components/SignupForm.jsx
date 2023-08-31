import React from 'react';
import AuthenticationPopup from './AuthenticationPopup'; // Adjust the path accordingly

const SignupForm = ({ isOpen, onRequestClose }) => {
  return (
    <AuthenticationPopup isOpen={isOpen} onRequestClose={onRequestClose} title="Create Account">
      <form className="flex flex-col w-[800px] h-[300px]">
        <input type="text" placeholder="Full Name" className=" w-[300px] border border-gray-300 rounded-md py-3 px-4 mb-3" />
        <input type="email" placeholder="Email" className="mb-3 w-[300px] border border-gray-300 rounded-md py-3 px-4" />
        <input type="password" placeholder="Password" className="mb-3 w-[300px] border border-gray-300 rounded-md py-3 px-4" />
        <button className="bg-gray-600 border-gray-500 text-white  rounded-md hover:bg-gray-900 w-[300px] py-3 px-4">
          Sign Up
        </button>
      </form>
    </AuthenticationPopup>
  );
};

export default SignupForm;

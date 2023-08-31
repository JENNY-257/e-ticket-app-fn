import React from 'react';
import AuthenticationPopup from './AuthenticationPopup'; // Adjust the path accordingly

const LoginForm = ({ isOpen, onRequestClose }) => {
  return (
    <AuthenticationPopup isOpen={isOpen} onRequestClose={onRequestClose} title="Please login">
      <form className="flex flex-col w-[800px] h-[300px]">
        <input
          type="email"
          placeholder="Email"
          className="w-[300px] border border-gray-300 rounded-md py-3 px-4 mb-3"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-[300px] border border-gray-300 rounded-md py-3 px-4 mb-3"
        />
        <button className="bg-gray-600 border-gray-500 text-white  rounded-md hover:bg-gray-900 w-[300px] py-3 px-4">
          Login
        </button>
        <p className="text-gray-500 text-[20px] ml-[80px] mt-[50px]">
          <a href="/forgot-password" className="underline">
            Forgot Password?
          </a>
        </p>
      </form>
    </AuthenticationPopup>
  );
};

export default LoginForm;

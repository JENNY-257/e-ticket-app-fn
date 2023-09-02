import React from 'react';
import  { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signupUser } from '../redux/authSilce.js';
import AuthenticationPopup from './AuthenticationPopup'; // Adjust the path accordingly

const SignupForm = ({ isOpen, onRequestClose }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signupUser(formData));
  };
  return (
    <AuthenticationPopup isOpen={isOpen} onRequestClose={onRequestClose} title="Create Account">
      <form  onSubmit={handleSubmit} className="flex flex-col w-[800px] h-[300px]">
        <input  onChange={handleChange} type="text"
         placeholder="Full Name"
         id="name"
        name="name"  className=" w-[300px] border border-gray-300 rounded-md py-3 px-4 mb-3" />
        <input  onChange={handleChange} type="email" placeholder="Email" 
            id="email"
            name="email"
          className="mb-3 w-[300px] border border-gray-300 rounded-md py-3 px-4" />
        <input  onChange={handleChange} type="password" placeholder="Password"
            id="password"
            name="password"
    
         className="mb-3 w-[300px] border border-gray-300 rounded-md py-3 px-4" />
        <button className="bg-gray-600 border-gray-500 text-white  rounded-md hover:bg-gray-900 w-[300px] py-3 px-4">
          Sign Up
        </button>
      </form>
    </AuthenticationPopup>
  );
};

export default SignupForm;

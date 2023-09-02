import  { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../redux/authSilce.js';
import AuthenticationPopup from './AuthenticationPopup'; // Adjust the path accordingly

const LoginForm = ({ isOpen, onRequestClose }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(formData));
  };

 
  return (
    <AuthenticationPopup isOpen={isOpen} onRequestClose={onRequestClose} title="Please login">
      <form onSubmit={handleSubmit} className="flex flex-col w-[800px] h-[300px]">
        <input
        onChange={handleChange}
          type="email"
          id="email"
            name="email"
          placeholder="Email"
          className="w-[300px] border border-gray-300 rounded-md py-3 px-4 mb-3"
        />
        <input onChange={handleChange}
          type="password"
          id="password"
          name="password"
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

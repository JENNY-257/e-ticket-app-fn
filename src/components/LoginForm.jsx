import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../redux/authSilce.js';
import AuthenticationPopup from './AuthenticationPopup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useFormik } from 'formik';
import { loginValidationSchema } from '../validations/userValidation.js';

const LoginForm = ({ isOpen, onRequestClose }) => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginValidationSchema, // Use your login validation schema here
    onSubmit: async (values) => {
      try {
        await dispatch(loginUser(values));
        toast.success('Login successful!', {
          position: 'top-right',
          autoClose: 5000,
        })
        formik.resetForm();
        onRequestClose();
      } catch (error) {
        toast.error(error.message, {
          position: 'top-right',
          autoClose: 5000,
        });
      }
    },
  });

  return (
    <>
      <ToastContainer /> {/* Toastify container */}
      <AuthenticationPopup isOpen={isOpen} onRequestClose={onRequestClose} title="Please login">
        <form onSubmit={formik.handleSubmit} className="flex flex-col w-[800px] h-[300px]">
          <input
            onChange={formik.handleChange}
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            className="w-[300px] border border-gray-300 rounded-md py-3 px-4 mb-3"
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div style={{ color: 'red' }}>{formik.errors.email}</div>
          ) : null}
          <input
            onChange={formik.handleChange}
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            className="w-[300px] border border-gray-300 rounded-md py-3 px-4 mb-3"
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <div style={{ color: 'red' }}>{formik.errors.password}</div>
          ) : null}
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
    </>
  );
};

export default LoginForm;

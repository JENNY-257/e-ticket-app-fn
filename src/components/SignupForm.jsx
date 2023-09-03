import React from 'react';
import { useDispatch } from 'react-redux';
import { signupUser } from '../redux/authSilce.js';
import AuthenticationPopup from './AuthenticationPopup';
import { useFormik } from 'formik';
import { signupValidationSchema } from '../validations/userValidation.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignupForm = ({ isOpen, onRequestClose }) => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: signupValidationSchema,
    onSubmit: async (values) => {
      try {
        await dispatch(signupUser(values));
        toast.success('Registration successful!', {
          position: 'top-right',
          autoClose: 5000, 
        });
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
      <AuthenticationPopup isOpen={isOpen} onRequestClose={onRequestClose} title="Create Account">
        <form onSubmit={formik.handleSubmit} className="flex flex-col w-[800px] h-[300px]">
          <input
            type="text"
            id="name"
            name="name"
            className="w-[300px] border border-gray-300 rounded-md py-3 px-4 mb-3"
            placeholder="Name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <div style={{ color: 'red' }}>{formik.errors.name}</div>
          ) : null}
          <input
            type="email"
            id="email"
            name="email"
            className="mb-3 w-[300px] border border-gray-300 rounded-md py-3 px-4"
            placeholder="Email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div style={{ color: 'red' }}>{formik.errors.email}</div>
          ) : null}
          <input
            type="password"
            id="password"
            name="password"
            className="mb-3 w-[300px] border border-gray-300 rounded-md py-3 px-4"
            placeholder="Password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <div style={{ color: 'red' }}>{formik.errors.password}</div>
          ) : null}
          <button
            type="submit"
            className="bg-gray-600 border-gray-500 text-white rounded-md hover:bg-gray-900 w-[300px] py-3 px-4"
          >
            Sign Up
          </button>
        </form>
      </AuthenticationPopup>
    </>
  );
};

export default SignupForm;

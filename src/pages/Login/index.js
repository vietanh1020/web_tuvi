import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Login = () => {
    // Validation schema using Yup
    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email address').required('Email is required'),
        password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    });

    // Initial values for the form
    const initialValues = {
        email: '',
        password: '',
    };

    // Form submission handler
    const onSubmit = (values, { setSubmitting, resetForm }) => {
        console.log('Login form data:', values);
        setTimeout(() => {
            alert('Login successful!');
            setSubmitting(false);
            resetForm();
        }, 1000);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 bg-white rounded shadow-md">
                <h1 className="mb-6 text-2xl font-bold text-center text-gray-700">Login</h1>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                    {({ isSubmitting }) => (
                        <Form>
                            <div className="mb-4">
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-600">
                                    Email
                                </label>
                                <Field
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="w-full px-4 py-2 text-gray-700 bg-gray-100 border rounded focus:outline-none focus:ring focus:ring-blue-300"
                                />
                                <ErrorMessage name="email" component="div" className="mt-1 text-sm text-red-500" />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-600">
                                    Password
                                </label>
                                <Field
                                    type="password"
                                    name="password"
                                    id="password"
                                    className="w-full px-4 py-2 text-gray-700 bg-gray-100 border rounded focus:outline-none focus:ring focus:ring-blue-300"
                                />
                                <ErrorMessage name="password" component="div" className="mt-1 text-sm text-red-500" />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 disabled:bg-gray-400 focus:outline-none"
                            >
                                {isSubmitting ? 'Logging in...' : 'Login'}
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default Login;

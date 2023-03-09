import React, { useState, useEffect } from "react";
import Forminput from "../components/Forminput";
const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
}; 
// const {isMember} = initialState;
function Register() {
  const [values, setvalues] = useState(initialState);
  const handleChange = (e) => {
    console.log(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  };
  return (
    <>
      <section class="bg-gray-50">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a
            href="#"
            class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <img
              class="w-8 h-8 mr-2"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
              alt="logo"
            />
            Flowbite
          </a>
          <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Create and account
              </h1>
              <form class="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div>
                  <Forminput type="text" name="Name" value={values.name} handleChange={handleChange}/>
                </div>
                <div>
                <Forminput type="email" name="Email" value={values.email} handleChange={handleChange}/>
                </div>
                <div>
                <Forminput type="password" name="Password" value={values.password} handleChange={handleChange}/>
                </div>
                <button
                  type="submit"
                  class="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                {!values.isMember ? `Create account` : `Login`} 
                </button>
                {!values.isMember ? (<p class="text-sm font-light text-gray-500 dark:text-gray-400">
                  Already have an account?
                </p>) : (
                    <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                    Not a member yet?
                  </p>
                )
                }
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Register;

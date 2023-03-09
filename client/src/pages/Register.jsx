import React, { useState } from "react";
import Forminput from "../components/Forminput";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

function Register() {
  const [values, setValues] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  return (
    <>
      <section className="bg-gray-50">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <h2 className="flex items-center mb-6 text-2xl font-bold text-blue-600 dark:text-white">FullStack-Project</h2>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                {values.isMember ? "Login" : "Create an Account"}
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                {!values.isMember && (
                  <div>
                    <Forminput
                      type="text"
                      name="Name"
                      value={values.name}
                      handleChange={handleChange}
                      label="Name"
                    />
                  </div>
                )}
                <div>
                  <Forminput
                    type="email"
                    name="Email"
                    value={values.email}
                    handleChange={handleChange}
                    label="Email"
                  />
                </div>
                <div>
                  <Forminput
                    type="password"
                    name="Password"
                    value={values.password}
                    handleChange={handleChange}
                    label="Password"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  {values.isMember ? "Login" : "Create Account"}
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  {values.isMember ? "Not a member yet?" : "Already have an account?"}{" "}
                  <button
                    onClick={toggleMember}
                    className="bg-blue-600 font-light rounded-md text-white p-2 text-custom"
                  >
                    {values.isMember ? "Create an account" : "Login"}
                  </button>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Register;

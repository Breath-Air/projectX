import React from 'react'
import { GoogleLogin } from 'react-google-login';

function Register() {

    // const onSuccess = (res) => {
    //     console.log("Login Successfull!!! Current User", res.profileObhj);
    // }

    // const onFailure = (res) => {
    //     console.log("Login Failed!!! res:", res);
    // }

    const responseGoogle = (response) => {
        // Handle the Google sign-in response here
        console.log(response);
    };


    return (
        <div className=' overflow-y-hidden '>
            <div className="min-h-screen flex items-center justify-center bg-white font-roboto overflow-y-hidden">
                <div className="bg-white p-8 mb-[4rem] rounded-md w-96">
                    <h2 className="text-[2rem] flex justify-center font-semibold mb-[4rem]">Create an Account</h2>
                    <div className=' grid gap-9'>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-[1rem] font-medium text-gray-600">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="form-input w-full h-[2rem] border-b-2 border-gray-400 focus:outline-none focus:border-blue-600 font-bold text-[0.9rem] font-poppins"
                                placeholder="you@example.com"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block font-medium text-gray-600 text-[1rem] ">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="form-input w-full h-[2rem] border-b-2 border-gray-400 focus:border-blue-600 focus:outline-none font-bold text-[0.9rem] font-poppins"
                                placeholder="********"
                            />
                        </div>
                        <div className="bg-white flex justify-center rounded-md w-full">
                            {/* Other form elements here */}
                            <GoogleLogin
                                className='w-full'
                                clientId="628885139737-57as8j4q2nnkikqlc9n57ia5fdc6pfau.apps.googleusercontent.com"
                                buttonText="Sign in with Google"
                                onSuccess={responseGoogle}
                                onFailure={responseGoogle}
                                cookiePolicy={'single_host_origin'}
                            />
                        </div>
                        <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600">
                            Sign Up
                        </button>
                    </div>
                    <p className="mt-4 flex justify-center text-gray-600 text-sm">
                        Already have an account? <a href="#">Log in</a>
                    </p>
                </div>
            </div>
        </div>

    )
}

export default Register

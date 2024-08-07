import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return <>
  <div className='w-full h-screen'>
    <img className="hidden sm:block absolute w-full h-full object-cover" src="https://assets.nflxext.com/ffe/siteui/vlv3/826348c2-cdcb-42a0-bc11-a788478ba5a2/72369a9b-98ff-44f5-9f01-4e14ea4a59bb/CZ-en-20240729-POP_SIGNUP_TWO_WEEKS-perspective_WEB_5b08eb4c-2c6b-4e2b-8901-7a4b216ab30d_large.jpg" alt="/" />
    <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
      <div className='fixed w-full px-4 py-24 z-50'>
        <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
          <div className='max-w-[320px] mx-auto py-16'>
            <h1 className='text-3xl font-bold'>Sign Up</h1>
              <form className='w-full flex flex-col py-4'>
                <input className='py-3 my-2 bg-gray-700 rounded' type="email" placeholder='Email' autoComplete='email' />
                <input className='py-3 my-2 bg-gray-700 rounded' type="password" placeholder='Password' autoComplete='current-password'/>
                <button className='bg-red-600 py-3 my-6 rounded font-bold'>Sign Up</button>
                <div className='flex justify-between items-center text-sm text-gray-500'>
                    <p><input className='mr-2' type="checkbox" />Remember me</p>
                    <p>Need Help?</p>
                </div>
                <p className='py-7'>
                    <span className='text-gray-500'>
                        Already Subscribed to Netflix?
                    </span>{" "}
                    <Link to="/login">
                    
                    </Link>
                    Sign In</p>
              </form>
          </div>
        </div>
      </div>
    </div>
  </>
}

export default Signup
import React from 'react'
import SavedShows from './SavedShows'

const Account = () => {
  return (
    <>
    <div className='w-full text-white'>
        <img className="w-full h-[400px] object-cover" src="https://assets.nflxext.com/ffe/siteui/vlv3/826348c2-cdcb-42a0-bc11-a788478ba5a2/72369a9b-98ff-44f5-9f01-4e14ea4a59bb/CZ-en-20240729-POP_SIGNUP_TWO_WEEKS-perspective_WEB_5b08eb4c-2c6b-4e2b-8901-7a4b216ab30d_large.jpg" alt="/" />
    <div className='bg-black/60 fixed top-0 left-0 w-full h-[550px]'></div>
    <div className='absolute top-[20%] p-4 md:p-8'>
        <h1 className='text-3xl md:text-5xl font-bold'>My Shows</h1>
    </div>
    </div>
    <SavedShows />
    </>
  )
}

export default Account
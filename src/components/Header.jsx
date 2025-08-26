import React from 'react'
import Button from './Button'

const Header = () => {
  return (
    <header className='mt-4 '>
        <div className='text-center  bg-gray-100  py-6'>
        <h2 className='text-6xl font-bold mt-6 '>iPhone</h2>
        <h3 className='text-3xl font-semibold mt-3'>Meet the iPhone 16 family</h3>
        <Button/>
        <h3 className='mt-6 text-transparent w-80 mx-auto bg-clip-text text-2xl font-semibold  bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-600bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-600'>Built for Apple inteligence</h3>
        
        <div className=" h-96 bg-cover bg-top bg-gray-100 mix-blend-multiply" style={{ backgroundImage: 'url(https://www.apple.com/v/iphone/home/cd/images/meta/iphone__kqge21l9n26q_og.png)'}}>

        </div>
        </div>

        <div className='text-center bg-blue-100 py-6 mt-2'>
        <h2 className='text-6xl font-bold mt-7'>MacBook Air</h2>
        <h3 className='text-3xl font-semibold mt-3'>Sky blue color.</h3>
        <h3 className='text-3xl font-semibold mt-3'>Sky high performance.</h3>
        <Button/>
        
        
        <div className=" h-80 w-30  bg-contain bg-no-repeat bg-center bg-blue-100 bg-blend-darken bg-[url('https://techtoro.io/image/cache/catalog/Blogs/macbook%20m4%20news/mac-air-m4-1920x1080.jpg')]" >
  
        </div>
        <div>
<h3 className=' text-transparent w-80 mx-auto bg-clip-text text-2xl font-semibold  bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-600bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-600'>Built for Apple inteligence</h3>
        </div>
        </div>
       
    </header>
  )
}

export default Header
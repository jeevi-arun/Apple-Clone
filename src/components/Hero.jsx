import React from 'react'
import { FaApple, FaRupeeSign } from 'react-icons/fa'
import Button from './Button'

const Hero = () => {
    const items =[
        {
            img:"data:image/jpeg;base64,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",
            new:"New",
            name:"Mac Studio",
            des:"M4 Max. Choose your superpower",
            prize:" 214,500"
        },
        {
            img:"data:image/jpeg;base64,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",
            new:"New",
            name:"iPad",
            des:"Lovable.Drawable. Magical",
            prize:" 34,500"
        },
        
         {
            img:"data:image/jpeg;base64,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",
            new:"New",
            name:"Apple Watch series 10",
            des:"Thinstant classic.",
            prize:" 46,900"
        },
        {
            img:"data:image/jpeg;base64,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",
            new:"New",
            name:"Airpods 4",
            des:"Iconic. Now supersonic",
            prize:" 12,900"
        },
        // {
        //     img:"",
        //     new:"New",
        //     name:"iPad",
        //     des:"Lovable.Drawable. Magical",
        //     prize:" 214,500"
        // },
        // {
        //     img:"",
        //     new:"New",
        //     name:"iPad",
        //     des:"Lovable.Drawable. Magical",
        //     prize:" 214,500"
        // },
        // {
        //     img:"",
        //     new:"New",
        //     name:"iPad",
        //     des:"Lovable.Drawable. Magical",
        //     prize:" 214,500"
        // },
         
    ]
  return (
    
    <section className='p-3 text-center'>
        

<div className=" bg-gray-100 p-9">
      <video
        className="w-full h-80 rounded-lg "
        autoPlay
        muted
        loop
      >
        <source src="/ipad.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>

    {/* Image section */}
<div className='flex gap-3 m-3 flex-wrap md:flex-nowrap '>
    {/* Image 1 */}

    <div className='text-center bg-black py-6  text-white w-full md:w-1/2'>
            <h2 className='text-5xl font-bold mt-7'>iPad</h2>
            <h3 className='text-xl font-semibold mt-3'>Touch, draw and type on one magical device</h3>
            
            <Button/>
             <div>
    <h3 className=' mt-4 text-transparent w-80 mx-auto bg-clip-text text-2xl font-semibold  bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-600bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-600'>Built for Apple inteligence</h3>
            </div>
            
            
            <div className=" h-80 w-full  bg-contain bg-no-repeat bg-center bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1KhgpmU-3bndgTsdh-qcVb8m9QAVwSw9n0g&s')]" >
      
            </div>
           
            </div>

            {/* Image2 */}

            
            
            
            <div className=" w-full md:w-1/2  bg-cover bg-center opacity-80 bg-[url('https://helios-i.mashable.com/imagery/articles/02CGd4RXcECYQWHqfGMJ7wx/hero-image.fill.size_1200x675.v1731524418.png')]" >
      <div className='text-center mt-80 py-6  text-white z-10'>
            <h2 className='text-3xl font-bold mt-7 md:text-5xl'>Apple intelligence</h2>
            <h3 className='text-xl font-semibold mt-3'>Point. Shoot. Cook with visual inteligence</h3>
            
            <button className='bg-white text-black py-2 px-5 rounded-3xl mr-4 mt-3 hover:bg-blue-800'>Watch the Clip</button>
            <button className=' py-2 px-12 rounded-3xl border border-white mt-2 hover:bg-blue-400'>Learn more</button>
            
            </div>
           
            </div>
            </div>

            {/* Image 3 */}
            <div className='flex gap-3 m-3 flex-wrap md:flex-nowrap'>
                <div className='text-center bg-black py-6  text-white w-full md:w-1/2'>
            <h2 className='text-5xl font-bold mt-7'>MacBook Pro</h2>
            <h3 className='text-xl font-semibold mt-3'>A work of smart</h3>
            
            <Button/>
             
            
            
            <div className=" h-80 w-full  bg-contain bg-no-repeat bg-center bg-[url('https://images.unsplash.com/photo-1588053631229-d04fd47cf0ad?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]" >
      
            </div>
            <div>
    <h3 className=' mt-1 text-transparent w-80 mx-auto bg-clip-text text-2xl font-semibold  bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-600bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-600'>Built for Apple inteligence</h3>
            </div>
           
            </div>


            {/* Image 4 */}
             
                
            
            
            
      
      <div className=" h-96  w-full md:w-1/2  bg-contain  bg-top bg-[url('https://helios-i.mashable.com/imagery/articles/02EjMY2Tgd8tJurnYztGtGQ/hero-image.fill.size_1248x702.v1668192902.png')]" >
            <div className='text-center bg-black py-7 mt-48 md:mt-96 text-white  '>
            <h2 className='text-5xl font-bold '>Airpods Pro2</h2>
            <h3 className='text-xl font-semibold mt-3'>Now with a hearing aid feature</h3>
            
            <Button/>
            </div>
           
            </div>
            </div>
            
            {/* Image 5 */}
             <div className='flex gap-3 m-3 flex-wrap md:flex-nowrap '>
                <div className='text-center bg-gray-200 py-6 text-black  w-full md:w-1/2'>
            <h2 className='text-5xl font-bold mt-7 flex items-center justify-center'><FaApple></FaApple>Trade In</h2>
            <h3 className='text-xl font-semibold mt-3'>Get $160 - $600 in credit when you trade in iPhone 12 or higher</h3>
            
            <button className='bg-blue-400 text-white py-2 px-5 rounded-3xl mr-4 mt-3 hover:bg-blue-800'>Get your estimate</button>
             
            
            
            <div className=" h-80 w-full bg-gray-200 bg-blend-darken bg-contain bg-no-repeat bg-center bg-[url('https://akm-img-a-in.tosshub.com/indiatoday/images/media_bank/202308/iphone-15-pro-maxjpg-142552-16x9.jpg?VersionId=0N2UeL6wJCkv6XGpCQgIpAOB7L2iF76b&size=690:388')]" >
      
            </div>
           
           
            </div>


            {/* Image 6 */}
             
                
            
            
            
      
     <div className='text-center bg-gray-200 py-6  text-black  w-full md:w-1/2'>
            <h2 className='text-5xl font-bold mt-7 flex items-center justify-center'><FaApple></FaApple>Card</h2>
            <h3 className='text-xl font-semibold mt-3'>Get upto 3% daily cashback with every purchase</h3>
            
            <button className='bg-blue-400 text-white py-2 px-5 rounded-3xl mr-4 mt-3 hover:bg-blue-800'>Apply now</button>
             
            
            
            <div className=" h-80 w-full bg-gray-200 bg-blend-darken bg-contain bg-no-repeat bg-center bg-[url('https://akm-img-a-in.tosshub.com/indiatoday/images/story/201903/Apple_Card.jpeg?VersionId=F1CHd8JvV_bvT2Ne5sw4e8aBL8glSQiP')]" >
      
            </div>
            
           
            </div>
            </div>


            {/* Items */}
            <h2 className='font-bold text-2xl'>See what's New</h2>
        <div className='flex  md:gap-4 mt-3 flex-wrap md:flex-nowrap'>
        {
            items.map(item =>(
                <div className=' w-1/2 md:1/4 shadow-xl mx-auto p-3 my-5 hover:scale-105'>
            <img src={item.img} className='h-64 '></img>
            <p className='text-red-600'>{item.new}</p>
            <h3 className='text-xl font-semibold mt-2'>{item.name}</h3>
            <h5 className=' mt-2 text-gray-800'>{item.des}</h5>
            <p className='flex items-center justify-center mt-2'><FaRupeeSign></FaRupeeSign>{item.prize}</p>
            <Button/>
        </div>
        

            ))
            
        }
        
</div>


        
            

    
    </section>
  )
}

export default Hero
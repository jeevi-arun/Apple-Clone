import React from 'react'
import {FaCopyright}from "react-icons/fa"

const Footer = () => {

    const paras =[
        {
         des:"1. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore, totam modi! Voluptas harum fuga delectus. Ipsum aliquam odit provident alias deserunt odio doloremque voluptatem soluta maiores minima! Alias, labore quis!"
        },
         {
         des:"2. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore, totam modi! Voluptas harum fuga delectus. Ipsum aliquam odit provident alias deserunt odio doloremque voluptatem soluta maiores minima! Alias, labore quis!"
        },
         {
         des:"3. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore, totam modi! Voluptas harum fuga delectus. Ipsum aliquam odit provident alias deserunt odio doloremque voluptatem soluta maiores minima! Alias, labore quis!"
        },
         {
         des:"4. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore, totam modi! Voluptas harum fuga delectus. Ipsum aliquam odit provident alias deserunt odio doloremque voluptatem soluta maiores minima! Alias, labore quis!"
        },
         {
         des:"5. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore, totam modi! Voluptas harum fuga delectus. Ipsum aliquam odit provident alias deserunt odio doloremque voluptatem soluta maiores minima! Alias, labore quis!"
        },
         {
         des:"6. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore, totam modi! Voluptas harum fuga delectus. Ipsum aliquam odit provident alias deserunt odio doloremque voluptatem soluta maiores minima! Alias, labore quis!"
        },
       
    ];

    const links =[
        {
            title:"Shop & learn",
            topic1:"Store",
            topic2:"mac",
            topic3:"iPad",
            topic4:"iPhone",
            topic5:"Watch",
            topic6:"Accessories"
            
        },
         {
            title:"Account",
               topic1:"Manage account",
            topic2:"Apple store account",
            topic3:"icloud.com",
             topic4:"iPhone",
            topic5:"Watch",
            topic6:"Accessories"
            
        },
         {
            title:"Apple store",
             topic1:"Find a store",
            topic2:"Genius bar",
            topic3:"Today at Apple",
            topic4:"Apple camp",
            topic5:"Ways to buy",
            topic6:"Order status"
            
        },
         {
            title:"Entertainment",
             topic1:"Apple one",
            topic2:"Apple TV+",
            topic3:"Apple music",
            topic4:"Apple Books",
            topic5:"Apple Arcade",
            topic6:"App Store"
            
        },
         {
            title:"About",
             topic1:"Newsroom",
            topic2:"Investors",
            topic3:"Events",
            topic4:"Ethics &Compliance",
            topic5:"Career opportunities",
            topic6:"Contact Apple"
            
        },

     ]

    
  return (
    <footer className='px-1 md:px-44 my-6 bg-gray-100 py-4'>
        <div>
        {
            paras.map(para =>(
                <p className='my-1'>{para.des}</p>

            ))
        }
        </div>

        <hr className='my-4 border border-black'></hr>
        <div className='flex mt-4 justify-between text-xs '>
        {
            links.map(link =>(
                <div >
                
        
        <h6 className='font-semibold'>{link.title}</h6>
        
            <p className='mt-2 hover:underline hover:cursor-pointer '>{link.topic1}</p>
            <p className='mt-2 hover:underline hover:cursor-pointer '>{link.topic2}</p>
            <p className='mt-2 hover:underline hover:cursor-pointer'>{link.topic3}</p>
            <p className='mt-2 hover:underline hover:cursor-pointer'>{link.topic4}</p>
            <p className='mt-2 hover:underline hover:cursor-pointer'>{link.topic5}</p>
            <p className='mt-2 hover:underline hover:cursor-pointer'>{link.topic6}</p>
            
        
        </div>

    

            ))
        } 
    
    </div>

    <p className='mt-6 text-xs'>More ways to shop: <a className='text-blue-700 underline'>Find an Apple store</a> or <a className='text-blue-700 underline'>other retailers</a> near you</p>
    <hr className='my-4 border border-black'></hr>
<div className='flex justify-between flex-wrap '>
    <p className='flex items-center gap-1'>Copyright <FaCopyright></FaCopyright> 2025. Apple Inc. All rights reserved. </p>
    <p>Privacy Policy | Terms of use |Sales and refunds | Site Map</p>
    </div>
    </footer>
  )
}

export default Footer
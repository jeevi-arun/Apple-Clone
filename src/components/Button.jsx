import React from 'react'

const Button = () => {
    const learnMore =[
        {
            name :"Learn More"
        }
    ];

    const buy =[
        {  name: "Buy"}
       
    ]
  return (
    <div>
        {
            learnMore.map(learn =>(
<button className='bg-blue-400 text-white py-2 px-5 rounded-3xl mr-4 mt-3 hover:bg-blue-800'>{learn.name}</button>
            ))
        }
        {
            buy.map(shop =>(
                 <button className=' py-2 px-12 rounded-3xl border border-blue-400 mt-2 hover:bg-blue-400'>{shop.name}</button>
                
            ))
        }
        
       
    </div>
  )
}

export default Button
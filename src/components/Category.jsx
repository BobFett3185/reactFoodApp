import React from 'react'
import {categories} from '../data/data.js'

const Category = () => {
  return (
    <div className = 'max-w-[1640px] m-auto px-4 py-12'>
        <h1 className = "text-orange-600 font-bold text-4xl text-center"> Top Rated Categories</h1>
        {/* categories*/}
        <div className = "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-4">
            {categories.map((item,index) => (
                <div key={index} className = "bg-gray-100 rounded-lg p-4 flex flex-col items-center">
                    <h2 className = "sm:text-lg font-bold">{item.name}</h2>
                    <img className = "w-20" src={item.image} alt={item.name} />
                    
                </div>
            ))} 

        </div>



    </div>
  )
}

export default Category

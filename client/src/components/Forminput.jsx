import React from 'react'

function Forminput({name,type,value,handleChange,lableText}) {
  return (
    <>
           <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white' htmlFor={name}>{lableText || name}</label>
           <input placeholder={name} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type={type} value={value} name={name} onChange={handleChange}/>
    </>
  )
}

export default Forminput
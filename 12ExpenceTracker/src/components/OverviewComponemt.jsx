import React from 'react'

function OverviewComponemt({toggle,setToggle, income, expense}) {
    const bal = income - expense;
    return (
        <div className='container flex justify-center items-center mb-24'>
            <h1 className='Balance font-bold'>
                Balance <span className=' font-bold'>₹{bal}</span>
            </h1>
            <button className='AddBtn cursor-pointer bg-blue-600 text-red-400 px-7 py-20 text-base border-none uppercase rounded-3xl' onClick={() => setToggle(!toggle)}>
                {toggle?"cancel":"Add"}
            </button>
        </div>
    )
}

export default OverviewComponemt

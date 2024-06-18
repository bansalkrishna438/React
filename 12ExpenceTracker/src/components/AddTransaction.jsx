import React from 'react'
import { useState } from 'react'

function AddTransaction({setToggle, AddTransaction}) {
    const [amount,setAmount] = useState("")
    const [details,setDetails] = useState("")
    const [transType, setTransType]=useState("expense")

    const AddTranstionData = () =>{
        AddTransaction({
            amount:Number(amount),
            details,
            transType,
            id: Date.now(),
        });
        setToggle();
    };
    return (
        <div className='container'>
            <input type="number" placeholder='Enter Amount' value={amount} onChange={(e) => setAmount(e.target.value)} className='Input w-100 px-14 py-16 rounded-sm mx-5 my-0 border-red-100' />
            <input type="text" placeholder='Enter Details' value={details} onChange={(e) => setDetails(e.target.value)} className='Input w-100 px-14 py-16 rounded-sm mx-5 my-0 border-red-100' />
            <div className='radioContainer'>
                <div className='radioBtn'>
                    <input type="radio" id='expense' name='type' value={"expense"} checked={transType === "expense"} onChange={(e) => setTransType(e.target.value)} />
                    <Label htmlFor ="expense">Income</Label>
                </div>
                <div className='radioBtn'>
                    <input type="radio" id='income' name='type' value={"income"} checked={transType === "income"} onChange={(e) => setTransType(e.target.value)} />
                    <Label htmlFor ="income">Income</Label>
                </div>
            </div>
            <button className='submitBtn' onClick={AddTranstionData}>Add Transaction</button>
        </div>
    )
}

export default AddTransaction;

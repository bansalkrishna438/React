import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import OverviewComponemt from './OverviewComponemt'
import TransactionContainer from './TransactionContainer'
import AddTransaction from './AddTransaction'

function Tracker() {
    const [toggle,setToggle] = useState(false)
    const [transaction,setTransactions] = useState([])
    const [expense, setExpense] = useState(0)
    const [income,setIncome] = useState(0)

    const AddTransactions = (payload) =>{
        const transactionArray = [...transaction];
        transactionArray.push(payload);
        setTransactions(transactionArray);
    }
    const removeTransaction =(id) =>{
        const updatedTransactions = transaction.filter((transaction) => transaction.id !== id);
        setTransactions(updatedTransactions);
    }
    const calculateTransactions = () =>{
        let exp = 0;
        let inc = 0;

        transaction.map((i) =>{
            i.transType === "expense"
            ?(exp = exp +i.amount)
            :(inc = inc +i.amount)
        })
        setExpense(exp);
        setIncome(inc)
    }

    useEffect(() => {
        calculateTransactions();
    },[transaction])

    return (
        <>
        <div className='container flex columns-1 w-600 max-w-100 bg-white px-28 py-16 border-amber-400 border-r-4 m-10'>
            <div className='THeading text-m text-center mb-20 text-red-500'>Expence Tutorial</div>
            <h1 className='Heading text-sky-300 text-center space-x-3 mb-25'>Expense Tracker</h1>
                <OverviewComponemt
                toggle = {toggle}
                setToggle = {setToggle}
                expense = {expense}
                income = {income}/>

                {toggle &&(
                   <AddTransaction
                   setToggle = {setToggle}
                    AddTransaction ={AddTransactions}/>
                )}
            <div className='TransactionDetails flex justify-center items-center space-x-1 mb-24'>
                <div className='ExpenseBox flex-1 border-black border-r-2 px-10 py-20 bg-white'>Expense <span className='font-bold text-red-600 block'>₹{expense}</span></div>
                <div className='Income Box flex-1 border-black border-r-2 px-10 py-20 bg-white'>Income <span className='font-bold text-green-600 block'>₹{income}</span></div>
            </div>

            <TransactionContainer
            transaction = {transaction}
            removeTransaction = {removeTransaction}
            />
        </div>
        
        </>
    )
}

export default Tracker

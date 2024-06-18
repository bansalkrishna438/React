import React from 'react'

function TransactionItem({transaction,removeTransaction}) {
    return (
        <div className={`Item flex justify-center items-center bg-yellow-50 rounded-md px-10 py-20 border-r-4${(props) => (props.isExpense?"red":"green")} mb-10 cursor-pointer`} isExpense={transaction?.transType === 'expense'}>
            <span>{transaction.details}</span>
            <span>₹{transaction.amount}</span>
            <button className='RemoveButton bg-slate-600 text-white border-none px-5 py-10 rounded-md cursor-pointer' onClick={() => removeTransaction(transaction.id)}>
                Remove
            </button>
        </div>
    )
}

export default TransactionItem

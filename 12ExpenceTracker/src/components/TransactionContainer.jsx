import React,{ useEffect,useState } from 'react'
import TransactionItem from "./TransactionItem"; 

function TransactionContainer({transactions, removeTransaction}) {
    const [searchInput, setSearchInput] = useState("")
    const [filteredTransactions , setFilteredTransactions] = useState(transactions)

    const filteredData = (searchInput) =>{
        if(!searchInput || !searchInput.trim().length){
            setFilteredTransactions(transactions);
            return
        }
        let filtered = [... filteredTransactions];
        filtered = filtered.filter(
            (item) =>
                item.details.toLowerCase().includes(searchInput.toLowerCase().trim())
        );
        setFilteredTransactions(filtered);
    }
    useEffect(() => { 
        filteredData(searchInput);
    },[transactions,searchInput])
    return (
        <div className='Container'>
            <h2 className='Heading text-lg font-bold'>Transaction</h2>
            <input className='SearchInput w-full px-14 py-20 outline-none rounded-sm mx-5 my-0 border-b-4 bg-slate-500 mb-24' type="text" placeholder='Search here' value={searchInput} onChange={(e) => setSearchInput(e.target.value)} />
            <TransactionItem>
                {filteredTransactions?.length ? (
                    filteredTransactions.map((transaction) =>(
                        <TransactionItem>
                            transaction = {transation}
                            key = {transaction.id}
                            removeTransaction = {removeTransaction}
                        </TransactionItem>
                    ))
                ):(
                    <p>No transaction</p>
                )}
            </TransactionItem>
        </div>
    )
}

export default TransactionContainer

import React, { useState } from 'react';

function Index({selectedFriend,amountToBeAdded, setAmountToBeAdded,spliBillName,friends,setFriends,splitBillInfoHandler }) {
console.log(selectedFriend,"split")
 
  // try

  

  const [totalBill, setTotalBill] = useState(0);
  const [myExpense, setMyExpense] = useState(0);
  const [billPaidBy, setBillPaidBy] = useState("You");
  // Ensure totalBill and myExpense are treated as numbers for calculation
  const otherExpense = parseFloat(totalBill || 0) - parseFloat(myExpense || 0);
  const expense = billPaidBy === "You" ? otherExpense : -otherExpense;

  const SplitBillHandler = () => {
    // console.log(selectedFriend,"==>split bill name")  working fine
    console.log(friends)

    const selectedFriend2 = friends.find(friend => friend.name === selectedFriend);
  
    if (selectedFriend2) {

      

      // If the friend exists, log the selected friend's details
      // console.log(selectedFriend2.name,"ye raha");
      // console.log(selectedFriend2.image,"ye raha");
      // console.log(selectedFriend2.amount,"ye raha");

      // console.log(selectedFriend2.id,"-->slected ki id",selectedFriend2.name,selectedFriend2.image,otherExpense,"--->amount to be added");

      splitBillInfoHandler(selectedFriend2.id,expense)
       
      setTotalBill(0);
      setMyExpense(0);
      setBillPaidBy("You");

    } else {
      // If no matching friend is found
      console.log(`Friend with name ${selectedFriend2} not found`);
    }
  };

  return (
    <div className='space-y-4 bg-[#fff4e6] w-[90%] rounded-md h-[70%] max-sm:w-full max-sm:h-full max-sm:p-2 p-6 '>
      <div className='flex text-4xl font-bold'>
        <h1 className='max-sm:text-2xl'>Split a bill with {selectedFriend}</h1>
      </div>

      <div className='flex justify-between'>
        <h1>💰 Bill value</h1>
        <input
          type="text" // Changed to 'number' to allow only numerical input
          value={totalBill}
          onChange={(e) => setTotalBill(parseFloat(e.target.value) || 0)}
          className="w-[30%] max-sm:w-[30%] text-sm px-2 text-gray-700 border border-[#ffa94d] rounded-md py-1"
        />
      </div>

      <div className='flex justify-between'>
        <h1>🧍‍♀️ Your expense</h1>
        <input
          type="text" // Changed to 'number' to allow only numerical input
          value={myExpense}
          onChange={(e) => setMyExpense(parseFloat(e.target.value) || 0)}
          className="w-[30%] max-sm:w-[30%]  text-sm px-2 text-gray-700 border border-[#ffa94d] rounded-md py-1"
        />
      </div>

      <div className='flex justify-between'>
        <h1>👫 {selectedFriend} expense</h1>
        <input
          type="number"
          value={otherExpense}
          readOnly
          className="w-[30%] max-sm:w-[30%] text-sm px-2 text-gray-700 border border-[#ffa94d] rounded-md py-1"
        />
      </div>

      <div className='flex justify-between'>
        <h1>🤑 Who is paying the bill</h1>
        <select onChange={(e) => setBillPaidBy(e.target.value)} className='w-[20%] max-sm:w-[30%] text-sm bg-white px-2 text-gray-700 border border-[#ffa94d] rounded-md py-1'>
          <option value="you">You</option>
          <option value={selectedFriend}>{selectedFriend}</option>
        </select>
      </div>

      <div className='flex justify-end'>
        <button
          className='bg-[#ffa94d] p-1 text-sm rounded-md font-semi-bold px-4 font-semibold'
          onClick={SplitBillHandler}
        >
          Split bill
        </button>
      </div>
    </div>
  );
}

export default Index;
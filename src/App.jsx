import './App.css'
import { useState } from 'react'
import FriendsSection from './Components/Friends/Friends'
import AddFriendSection from './Components/AddFriends/AddFriends'
import SplitBill from './Components/splitBill/SplitBill'

export default function App() {

  const [addFriendSection, setAddFriendSection] = useState(true)
  const [splitBillSection, setSplitBillSection] = useState(false)
  const [splitBillName, setSplitBillName] = useState(null)
  const [amountToBeAdded, setAmountToBeAdded] = useState(0)

  const [friends, setFriends] = useState([
    {
      id: 1,
      name: 'Sufiyan',
      image: 'https://goldenglobes.com/wp-content/uploads/2023/10/17-tomcruiseag.jpg',
      amount: -10,
    },
    {
      id: 2,
      name: 'Aqib',
      image: 'https://www.hollywoodreporter.com/wp-content/uploads/2024/08/Shah-Rukh-Khan-Final-Getty-H-2024.jpg',
      amount: 20,
    },
    {
      id: 3,
      name: 'Tanzeel',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5a1cz0f8VSGYxRUezjSB7FGoP3r9idEAP5w&s',
      amount: 0,
    }
  ])

  const addItem = (newItem) => {
   setFriends([...friends, newItem])
  }

  // funtion to manage split bill section information
  const splitBillInfoHandler = (id,otherExpense) => {
    // Create a new array with the updated object
    const updatedFriends = friends.map(item => {
      // Find the object to update
      if (item.id === id) {
        // Return a new object with the updated value
        return { ...item, amount: item.amount + otherExpense };
      }
      // Return the other objects unchanged
      return item;
    });

    // Update the state with the new array
    setFriends(updatedFriends);
  };
  

  
  return (
    <>
      {/* main */}
      <div className=" h-screen w-full flex flex-col justify-center items-center text-[#3d4146] ">
        {/* container */}
            <div className='w-[80%] h-[90%]  flex max-sm:flex max-sm:flex-col max-sm:w-full max-sm:h-full max-sm:p-2 '>
                  {/* left */}
                  <div className='w-[50%]  h-full flex-col space-y-5  p-4 px-24 pt-12 max-sm:w-full max-sm:p-0'> 
                      {/* friends */}
                      <FriendsSection friends={friends} setFriends={setFriends} setSplitBillSection={setSplitBillSection} setSplitBillName={setSplitBillName} splitBillSection={splitBillSection} amountToBeAdded={amountToBeAdded} splitBillName={splitBillName}  />

                      {/* Addfriends */}
                      <AddFriendSection addFriendSection={addFriendSection} setAddFriendSection={setAddFriendSection} addItem={addItem} />

                  </div>
                  {/* right */}
                  <div className='w-[50%] h-full  flex justify-center items-start pt-12 max-sm:w-full max-sm:p-0'> 
                      {/* <SplitBill Component /> */}
                      {splitBillSection===false ? null : <SplitBill selectedFriend={splitBillName} amountToBeAdded={amountToBeAdded} setAmountToBeAdded={setAmountToBeAdded} friends={friends} setFriends={setFriends} splitBillInfoHandler={splitBillInfoHandler} />}
                  </div>
            </div>
     </div>
    </>
  )
}
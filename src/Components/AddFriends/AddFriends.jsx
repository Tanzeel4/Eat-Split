import React from "react";
import { useState } from "react";

function AddFriends({ addItem }) {
  const [addFriendSection, setAddFriendSection] = useState(true);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [amount, setAmount] = useState(0);

  const handleAddFriend = () => {
    const id =crypto.randomUUID();
    const newItem = { name: name, image: image, amount: amount, id: id };
    addItem(newItem);
  };

  return (
    <div className="flex flex-col w-full justify-end items-center">
      {/* <button className='bg-[#ffa94d] p-1 text-sm rounded-md font-semi-bold'>Add Friend</button> */}
      {/* <h1>friend name:</h1>
                         <input type="text" className='w-[50%]' />

                         <h1>image url</h1>
                         <input type="text" className='w-[50%]' />

                         <div className='w-full flex-col flex justify-end  items-end gap-2'>
                         <button className='bg-[#ffa94d] p-1 text-sm rounded-md font-semi-bold'>Add </button>
                         <button className='bg-[#ffa94d] p-1 text-sm rounded-md font-semi-bold'>Close</button>
                         </div> */}

      {addFriendSection ? (
       <div className="w-full flex justify-end max-sm:my-5 my-6">
         <button
          className='bg-[#ffa94d] p-1 text-sm rounded-md font-semi-bold px-4 font-semibold'
          onClick={() => setAddFriendSection(false)}
        >
          Add Friend
        </button>
       </div>
      ) : (
        <div className="bg-[#fff4e6] space-y-3 w-full rounded-md p-1 max-sm:my-5 my-6 ">
          <div className="flex w-full  justify-between items-center">
          <h1 className="text-lg">👩‍👩‍👦Friend Name:</h1>
          <input
          placeholder="john Doe"
            type="text"
           className="w-[50%] max-sm:w-[40%] text-sm px-2 text-gray-700 border border-[#ffa94d] rounded-md py-1 "
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          </div>

          <div className="flex w-full  justify-between items-center">
          <h1 className="text-lg">🏞️Image url:</h1>
          <input
          placeholder="john Doe.png"
            type="text"
            className="w-[50%] text-sm px-2 text-gray-700 border border-[#ffa94d] rounded-md py-1 "
            onChange={(e) => setImage(e.target.value)}
            value={image}
          />
          </div>

          <div className="w-full flex-col flex justify-end  items-end gap-2">
            <button
             className=' w-1/2 bg-[#ffa94d] p-1 text-sm rounded-md font-semi-bold px-4 font-semibold'
              onClick={() => handleAddFriend()}
            >
              Add{" "}
            </button>

            <button
             className='bg-[#ffa94d] p-1 text-sm rounded-md font-semi-bold px-4 font-semibold'
              onClick={() => setAddFriendSection(true)}
            >
              Close
            </button>

          </div>
        </div>
      )}
    </div>
  );
}

export default AddFriends;
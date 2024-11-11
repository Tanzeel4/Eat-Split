import { useState } from "react";

// Parent component
function Index({friends, setFriends, setSplitBillSection, setSplitBillName,splitBillSection,amountToBeAdded, setAmountToBeAdded,splitBillName}) {
const [selectedFriend, setSelectedFriend] = useState(null);
  return (
   <>
   {friends.map((frnd, index) => (
        <Friends
         detail={frnd} 
         key={index} 
         setSplitBillSection={setSplitBillSection} 
         setSplitBillName={setSplitBillName}
        splitBillSection={splitBillSection}
        amountToBeAdded={amountToBeAdded} 
        setAmountToBeAdded={setAmountToBeAdded} />
        
      ))}
   </>
  )
}
export default Index;




// Child COponent
 export function Friends ({detail, setSplitBillSection, setSplitBillName, splitBillSection, amountToBeAdded, setAmountToBeAdded,splitBillName}) {

// funtion to manage split bill section information
  const SplitBillHandler = () => {
    setSplitBillSection(true)
    // console.log(splitBillSection)
    setSplitBillName(detail.name)
  }



return(
  <div className='w-full h-10  '>
    {/* friend-1 */}
     <div className='w-full  flex gap-5 bg-[#fff4e6] justify-between items-center p-1 rounded-md max-sm:gap-0'>
         
       <div className="flex gap-5">
       <div className="flex justify-center items-center">
          <img src={detail.image} alt="" className='size-10 rounded-3xl' />
        </div>
          
          
        <div className='text-start'>
          <h3 className='text-lg font-bold'>{detail.name}</h3>

          {/* <p className='text-sm '>{detail.amount}</p> */}
          {detail.amount < 0 && (
        <p className="text-sm text-red-700" key={Index}>
          You owe {detail.name} {Math.abs(detail.amount+amountToBeAdded)}£
        </p>
      )}

      {detail.amount > 0 && (
        <p className="text-sm text-green-700" key={Index}>
          {detail.name} owes you {detail.amount+amountToBeAdded}£
        </p>
      )}

      {detail.amount === 0 && (
        <p className="text-sm text-gray-700" key={Index}>
          {detail.name} and you are even
        </p>
      )}


        </div>
       </div>

        <button className='bg-[#ffa94d] p-1 text-sm rounded-md font-semi-bold px-4 font-semibold' onClick={()=>SplitBillHandler()}>Select</button>

        {/* {splitBillSection ? (<button className='bg-[#ffa94d] p-1 text-sm rounded-md font-semi-bold px-4 font-semibold' onClick={()=>SplitBillHandler()}>Select</button>) : (<button className='bg-[#ffa94d] p-1 text-sm rounded-md font-semi-bold px-4 font-semibold' onClick={()=>SplitBillCloseHandler()}>Close</button>)} */}

     </div>
  </div>
)
}
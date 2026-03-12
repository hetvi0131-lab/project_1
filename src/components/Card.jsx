// import{Search, UserPlus} from "lucide-react";

// const Card = (props) => {
//     console.log(props);
//   return (
//     <>
//     <div className="Card bg-white w-full h-auto max-w-md rounded-lg border-none shadow-2xl my-5 mx-6 py-4 px-6">
//         <div className="flex items-start justify-between">
//             <img src={props?.data?.photo} alt="img" 
//             className="w-24 h-24 rounded-full object-cover drop-shadow-2xl"/>
//         <div className="icon flex items-center gap-5">
//             <div className="bg-gray-300 inline-block rounded-xl text-center p-2"><Search className="font-bold"/></div>
//             <div className="bg-blue-200 inline-block rounded-xl p-2 text-center"><UserPlus className="text-clue-500 font-bold"/></div>
//         </div>
//         </div>
//         <div className="content pt-2">
//             <h2 className="text-2xl font-bold mt-2">{props.data.name}</h2>
//             <p className="text-md text-gray-400 font-semibold my-1">{props?.data?.username}</p>

//             <p className="text-md my-2">{props?.data?.bio}</p>

//         </div>
//         <div className="other flex justify-between items-center">
//             <p className="text-gray-400"><span className="text-black font-medium">{props?.data?.points}</span> point</p>
//             <p className="text-gray-400"><span className="text-black font-medium">{props?.data?.friends}</span> friends</p>
//             <p className="text-gray-400">{props?.data?.joined_at} </p>
//         </div>
//     </div>
//     </>
//   )
// }

// export default Card


import{Save, UserPlus} from "lucide-react";

const Card = (props) => {
    console.log(props);
  return (
    <>
    <div className="Card bg-white w-75 h-85 max-w-md rounded-lg border-none shadow-2xl my-5 mx-6 py-4 px-6">
        <div className="flex items-start justify-between">
            <img src={props?.data?.company_logo} alt="img" 
            className="w-10 h-10 rounded-full object-cover drop-shadow-2xl"/>
        <div className="icon flex items-right gap-5 pt-2">
            <div className="bg-gray-100 inline-block rounded-xl text-right h-8 w-20 mx-2 "><Save className="font-bold"/>save</div>
            {/* <div className="bg-blue-200 inline-block rounded-xl p-2 text-center"><UserPlus className="text-clue-500 font-bold"/></div> */}
        </div>
        </div>
        <div className="content pt-2">
            <p className="text-gray-400 my-2"><span className="text-black font-medium ">{props?.data?.company_name}</span> {props?.data?.posted}</p>
            <h2 className="text-2xl font-bold mt-2">{props.data.job_title}</h2>
           

            <p className="text-md my-2">{props?.data?.bio}</p>

        </div>
        <div className="other flex items-right gap-5 ">
            <p className="text-gray-400 bg-gray-100 inline-block rounded-xl text-center p-0.5 h-7 "><span className="text-black font-medium ">{props?.data?.job_type}</span> </p>
            <p className="text-gray-400  bg-gray-100 inline-block rounded-xl text-center p-0.5 h-7"><span className="text-black font-medium">{props?.data?.experience_level}</span></p>
        </div>
    </div>
    
    </>
  )
}

export default Card
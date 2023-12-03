"use client";

 import Image from "next/image";
 import { useRouter } from "next/navigation";
 import { FaPlay } from "react-icons/fa";

// import useAuthModal from "@/hooks/useAuthModal";
// import { useUser } from "@/hooks/useUser";

// interface ListItemProps {
//   image: string;
//   name: string;
//   href: string;
// }

// const ListItem: React.FC<ListItemProps> = ({
//   image,
//   name,
//   href,
// }) => {
//   const router = useRouter();
//   const authModal = useAuthModal();
//   const { user } = useUser();
  
//   const onClick = () => {
//     if (!user) {
//       return authModal.onOpen();
//     }

//     router.push(href);
//   };

//   return ( 
//     <button
//       onClick={onClick}
//       className="
//         relative 
//         group 
//         flex 
//         items-center 
//         rounded-md 
//         overflow-hidden 
//         gap-x-4 
//         bg-neutral-100/10 
//         cursor-pointer 
//         hover:bg-neutral-100/20 
//         transition 
//         pr-4
//       "
//     >
//       <div className="relative min-h-[64px] min-w-[64px]">
//         <Image
//           className="object-cover"
//           src={image}
//           fill
//           alt="Image"
//         />
//       </div>
//       <p className="font-medium truncate py-5">
//         {name}
//       </p>
//       <div 
//         className="
//           absolute 
//           transition 
//           opacity-0 
//           rounded-full 
//           flex 
//           items-center 
//           justify-center 
//           bg-green-500 
//           p-4 
//           drop-shadow-md 
//           right-5
//           group-hover:opacity-100 
//           hover:scale-110
//         "
//       >
//         <FaPlay className="text-black" />
//       </div>
//     </button>
//    );
// }
 
// export default ListItem;

import React from 'react'

interface ListItemProps{
   image:string,
   name:string,
   href:string

}
const ListItem:React.FC<ListItemProps> = ({image,name,href}) => {
    const handlerClick = ()=>{

    }
  return (
    <button onClick={handlerClick} className='
     relative rounded-lg group 
     flex flex-row items-center transition
     overflow-hidden gap-x-2
      pr-4 cursor-pointer 
      bg-neutral-100/10 
      hover:bg-neutral-100/20
     
    '>
       <div className="h-[64px] w-[64px] relative">
          <Image  src={image} fill className="object-cover"  alt="liked songs"/>
       </div>
       <p className="font-medium truncate py-5 mr-10"> {name}</p>
       <div className="
         absolute rounded-full opacity-0 
         group-hover:opacity-100 bg-green-500
         hover:scale-110 right-1 drop-shadow-md p-4
         flex justify-center items-center transition
       ">
          <FaPlay className="text-black"/>
       </div>
    </button>
  )
}

export default ListItem
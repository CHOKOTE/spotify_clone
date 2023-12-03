"use client";

// import { twMerge } from "tailwind-merge";
// import { RxCaretLeft, RxCaretRight } from "react-icons/rx";

// import { FaUserAlt } from "react-icons/fa";
// import { useSupabaseClient } from '@supabase/auth-helpers-react';
// import { toast } from "react-hot-toast";
// import { HiHome } from "react-icons/hi";
// import { BiSearch } from "react-icons/bi";

// import useAuthModal from "@/hooks/useAuthModal";
// import { useUser } from "@/hooks/useUser";
// import usePlayer from "@/hooks/usePlayer";

// import Button from "./Button";

// interface HeaderProps {
//   children: React.ReactNode;
//   className?: string;
// }

// const Header: React.FC<HeaderProps> = ({
//   children,
//   className,
// }) => {
//   const player = usePlayer();
//   const router = useRouter();
//   const authModal = useAuthModal();

//   const supabaseClient = useSupabaseClient();
//   const { user } = useUser();

//   const handleLogout = async () => {
//     const { error } = await supabaseClient.auth.signOut();
//     player.reset();
//     router.refresh();

//     if (error) {
//       toast.error(error.message);
//     }
//   }

//   return (
//     <div
//       className={twMerge(`
//         h-fit 
//         bg-gradient-to-b 
//         from-emerald-800 
//         p-6
//         `,
//         className
//       )}>
//       <div className="w-full mb-4 flex items-center justify-between">
//         <div className="hidden md:flex gap-x-2 items-center">
//           <button 
//             onClick={() => router.back()} 
//             className="
//               rounded-full 
//               bg-black 
//               flex 
//               items-center 
//               justify-center 
//               cursor-pointer 
//               hover:opacity-75 
//               transition
//             "
//           >
//             <RxCaretLeft className="text-white" size={35} />
//           </button>
//           <button 
//             onClick={() => router.forward()} 
//             className="
//               rounded-full 
//               bg-black 
//               flex 
//               items-center 
//               justify-center 
//               cursor-pointer 
//               hover:opacity-75 
//               transition
//             "
//           >
//             <RxCaretRight className="text-white" size={35} />
//           </button>
//         </div>
//         <div className="flex md:hidden gap-x-2 items-center">
//           <button 
//             onClick={() => router.push('/')} 
//             className="
//               rounded-full 
//               p-2 
//               bg-white 
//               flex 
//               items-center 
//               justify-center 
//               cursor-pointer 
//               hover:opacity-75 
//               transition
//             "
//           >
//             <HiHome className="text-black" size={20} />
//           </button>
//           <button 
//             onClick={() => router.push('/search')} 
//             className="
//               rounded-full 
//               p-2 
//               bg-white 
//               flex 
//               items-center 
//               justify-center 
//               cursor-pointer 
//               hover:opacity-75 
//               transition
//             "
//           >
//             <BiSearch className="text-black" size={20} />
//           </button>
//         </div>
//         <div className="flex justify-between items-center gap-x-4">
//           {user ? (
//             <div className="flex gap-x-4 items-center">
//               <Button 
//                 onClick={handleLogout} 
//                 className="bg-white px-6 py-2"
//               >
//                 Logout
//               </Button>
//               <Button 
//                 onClick={() => router.push('/account')} 
//                 className="bg-white"
//               >
//                 <FaUserAlt />
//               </Button>
//             </div>
//           ) : (
//             <>
//               <div>
//                 <Button 
//                   onClick={authModal.onOpen} 
//                   className="
//                     bg-transparent 
//                     text-neutral-300 
//                     font-medium
//                   "
//                 >
//                   Sign up
//                 </Button>
//               </div>
//               <div>
//                 <Button 
//                   onClick={authModal.onOpen} 
//                   className="bg-white px-6 py-2"
//                 >
//                   Log in
//                 </Button>
//               </div>
//             </>
//           )}
//         </div>
//       </div>
//       {children}
//     </div>
//   );
// }

// export default Header;
import { useRouter } from "next/navigation";
import React from 'react'
import { twMerge } from 'tailwind-merge'
import Button from './Button'
import { RxCaretLeft } from 'react-icons/rx';
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";


const Header = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  const router = useRouter()
  const user = true;
  return (
    <div className={twMerge(`h-fit bg-gradient-to-b from-emerald-800 p-6 `, className)}>
      <div className='flex justify-between items-center'>
        <div className=' justify-center items-center gap-1 flex '>
          <div className=' justify-center items-center gap-1 md:flex hidden'>
            <button onClick={() => router.back()} className='rounded-full
              bg-black  w-8 h-8 cursor-pointert
               hover:opacity-75 transition
               flex items-center justify-center
               
               '

            >
              <RxCaretLeft size={26} className='text-white' />
            </button>
            <button onClick={() => router.forward()} className='rounded-full bg-black cursor-pointer 
             hover:opacity-75 transition  w-8 h-8 flex items-center justify-center'>
              <RxCaretLeft size={26} className='text-white' />
            </button>
          </div>
          <div className=" md:hidden flex justify-center items-center gap-1 ">
            <button onClick={() => router.push('/')} className="rounded-full bg-black  cursor-pointert 
             w-8 h-8 flex items-center transition hover:opacity-75 justify-center">
              <HiHome className="text-white" size={20} />
            </button>
            <button onClick={() => router.push('/search')} className="rounded-full bg-black  cursor-pointert 
             w-8 h-8 hover:opacity-75 transition flex items-center justify-center">
              <BiSearch className="text-white" size={20} />
            </button>
          </div>
        </div>
        {
          user ? <>
            <div>
            <Button className=" bg-transparent 
                      text-neutral-300 
                       font-medium">
              Sign Up
            </Button>
            </div>

          </> : <>
             <div>
             <Button className="bg-white rounded-full">
              Log In
            </Button>
             </div>

          </>

        }
      </div>


      {children}
    </div>
  )
}

export default Header
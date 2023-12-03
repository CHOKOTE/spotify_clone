 "use client";

// import { HiHome } from "react-icons/hi";
// import { BiSearch } from "react-icons/bi";
// import { twMerge } from "tailwind-merge";
// import { usePathname } from "next/navigation";

// import { Song } from "@/types";
// import usePlayer from "@/hooks/usePlayer";

// import SidebarItem from "./SidebarItem";
// import Box from "./Box";
// import Library from "./Library";
// import { useMemo } from "react";

// interface SidebarProps {
//   children: React.ReactNode;
//   songs: Song[];
// }

// const Sidebar = ({ children, songs }: SidebarProps) => {
//   const pathname = usePathname();
//   const player = usePlayer();

//   const routes = useMemo(() => [
//     {
//       icon: HiHome,
//       label: 'Home',
//       active: pathname !== '/search',
//       href: '/'
//     },
//     {
//       icon: BiSearch,
//       label: 'Search',
//       href: '/search',
//       active: pathname === '/search'
//     },
//   ], [pathname]);

//   return (
//     <div 
//       className={twMerge(`
//         flex 
//         h-full
//         `,
//         player.activeId && 'h-[calc(100%-80px)]'
//       )}
//     >
//       <div 
//         className="
//           hidden 
//           md:flex 
//           flex-col 
//           gap-y-2 
//           bg-black 
//           h-full 
//           w-[300px] 
//           p-2
//         "
//       >
//         <Box>
//           <div className="flex flex-col gap-y-4 px-5 py-4">
//             {routes.map((item) => (
//               <SidebarItem key={item.label} {...item} />
//             ))}
//           </div>
//         </Box>
//         <Box className="overflow-y-auto h-full">
//           <Library songs={songs} />
//         </Box>
//       </div>
//       <main className="h-full flex-1 overflow-y-auto py-2">
//         {children}
//       </main>
//     </div>
//   );
// }

// export default Sidebar;

import { usePathname } from 'next/navigation';
import React, { useMemo } from 'react'
import { BiSearch } from 'react-icons/bi';
import { HiHome } from 'react-icons/hi';
import Box from './Box';
import SidebarItem from './SidebarItem';
import { loadDefaultErrorComponents } from 'next/dist/server/load-components';
import Library from './Library';

const Sidebar = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const route = useMemo(() => [
    {
      Icon: HiHome,
      href: '/',
      active: pathname !== '/search',
      label: 'Home'

    },
    {
      Icon: BiSearch,
      href: '/search',
      active: pathname === '/search',
      label: 'Search'

    }
  ], [pathname])
  return (
    <div className='flex h-full gap-5 overflow-hidden overflow-x-hidden'>
      <div className='w-[300px] hidden md:flex h-full flex-col gap-y-1'>
        <Box className='p-2 m-2 h-auto'>
           {route.map((item,i)=>{
            return <SidebarItem key={i} active={item.active} icon={item.Icon} label={item.label} href={item.href}/>
           })}
        </Box>
        <Box className='h-full p-2 m-2 overflow-y-auto'>
          <Library/>
        </Box>
      </div>
      <main className='h-full  overflow-auto py-2 w-full'>
         {children}
      </main>
    </div>
  )
}

export default Sidebar

'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Tabs } from '@mantine/core';
type Item = {
   label: string
   icon: any
   to: string
}

type Props = {
   items: Array<Item>
}

export default function TabNavigation({ items }: Props) {
   const pathname = usePathname();

   return (
      <div className="fixed bottom-0 left-0 z-50 w-full h-12 bg-white border-t border-gray-200  ">
         <div className="grid h-full max-w-lg grid-cols-5 mx-auto font-medium">

            {items.map(({ icon: ReactIcon, label, to }) => {
               const isSelected = pathname.includes(to);
               return (
                  <Link href={to}>
                     <button
                        type="button"
                        className={`${isSelected ? "" : ''} inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 group`}
                     >
                        <ReactIcon />
                        <span className="text-sm text-gray-500 group-hover:text-blue-600 ">{label}</span>
                     </button>
                  </Link>
               )
            })}
         </div>
      </div>
   )
}
"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {FiMonitor} from 'react-icons/fi'
import {AiFillTag} from 'react-icons/ai'
import {GoChecklist} from  'react-icons/go'
import {BsCart4} from 'react-icons/bs'
import {AiFillSetting} from 'react-icons/ai'

type Props = {}

const Navbar = (props: Props) => {

   const currentPage = usePathname();

  return (
    <div className='navbg text-gray-200 flex flex-col gap-5 md:w-56 text-sm font-semibold  xl:w-72'>
         <Link href={'/'} className='text-3xl py-5 text-white mx-auto'>
           <span> Bloomy</span>
           </Link>
        <Link href={'/'} className={`navitems hover:shad ${currentPage === '/' ? 'active' : ''}`}>
            <FiMonitor className='icon'/>
           <span> Dashboard</span></Link>
        <Link href={'/Product-page'} className={`navitems hover:shad ${currentPage === '/Product-page' ? 'active' : ''}`}>
           <AiFillTag className='icon'/>
            <span className='px-4'>Products</span>
            </Link>
        <Link href={'/Categories-page'} className={`navitems hover:shad ${currentPage === '/Categories-page' ? 'active' : ''}`} >
           <GoChecklist className='icon'/>
            <span className='px-4'>Categories</span>
        </Link>
        <Link href={'/Order-page'} className={`navitems hover:shad ${currentPage === '/Order-page' ? 'active' : ''}`}>
            <BsCart4 className='icon'/>
            <span className='px-4'>Orders</span></Link>
        <Link href={'/Settings-page'} className={`navitems hover:shad ${currentPage === '/Settings-page' ? 'active' : ''}`}>
            <AiFillSetting className='icon'/>
           <span className='px-4'> Settings</span></Link>
    </div>
  )
}

export default Navbar
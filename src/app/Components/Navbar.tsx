'use client'
import {Menu, SquareX} from "lucide-react";
import Link from "next/link";
import React, {useState, useEffect} from "react";
import {ThemeToggle} from "@/app/Components/Theme";


const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [loaded, setLoaded] = useState(false);
    useEffect(()=>{
        if(showMenu){
            document.body.classList.add('overflow-hidden');
        }else{
            document.body.classList.remove('overflow-hidden');
        }
        return ()=>{
            document.body.classList.remove('overflow-hidden');
        }
    }, [showMenu])
    useEffect(()=>{
        const timer = setTimeout(()=>{
            setLoaded(true);
        }, 10)
        return ()=>{
            clearTimeout(timer);
        }
    }, [])

    interface SpnProps {
        txt: string;
        cName: string;
    }

    const Spn: React.FC<SpnProps> = ({txt, cName}) => {
        return (<span className={cName}>{txt}</span>);
    }

    const Logo: React.FC = () => {
        return (
            <p className='flex justify-center cursor-pointer hover:bg-gray-900 rounded p-2'>
                <Spn txt='{' cName='text-gray-500 text-3xl font-bold'/>
                <Spn txt='S' cName='text-white text-4xl font-bold'/>
                <Spn txt='}' cName='text-gray-500 text-3xl font-bold'/>
            </p>
        )
    }

    return (
        <div
            className={`nav-bar flex items-center justify-between p-3 border-b border-gray-800 sticky left-0 top-0 z-10 bg-black 
             transform transition-all duration-700 ease-out
             ${loaded ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
            {/*//'flex justify-between items-center  '>*/}
            <div><Logo/></div>

            <div className='p-2 sm:hidden ' onClick={() => {
                setShowMenu(!showMenu);
            }}>
                <Menu size={35}/>
            </div>

            <div
                className={`
                fixed h-screen p-3 bg-black top-0  w-11/12 border-l border-gray-800 duration-300 ease-in ${showMenu ? 'right-0' : '-right-12/12'} 
                sm:relative sm:flex sm:justify-center sm:gap-8 sm:h-auto sm:w-auto sm:border-l-0 sm:right-0`}>
                <div className=' w-max pb-3 sm:hidden'><Logo/></div>
                <div className={'w-full border-b  border-gray-800 sm:hidden'}></div>
                <div className='absolute right-0 top-0 m-6  sm:hidden' onClick={()=>setShowMenu(false)}><SquareX color={'rgb(129, 140, 248)'} size={'35'}/></div>
                <div className='pb-10 pl-3 pt-5 font-bold hover:bg-gray-900 rounded cursor-pointer active:gray-700 sm:pb-3 sm:pl-3 sm:pt-3 sm:p-3'><Link href='/' onClick={()=>setShowMenu(!showMenu)}>Home</Link></div>
                <div className='pb-10 pl-3 font-bold hover:bg-gray-900 rounded cursor-pointer active:gray-700 sm:pb-3 sm:pl-3 sm:pt-3 sm:p-3'><Link href='/projects' onClick={()=>setShowMenu(!showMenu)}>Projects</Link></div>
                <div className='pb-10 pl-3 font-bold hover:bg-gray-900 rounded cursor-pointer active:gray-700 sm:pb-3 sm:pl-3 sm:pt-3 sm:p-3'><Link href='/contact' onClick={()=>setShowMenu(!showMenu)}>Contact</Link></div>
                <ThemeToggle/>
            </div>
        </div>
    )
}

export default Navbar;
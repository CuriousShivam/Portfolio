'use client'
import {Menu, SquareX} from "lucide-react";
import Link from "next/link";
import React, {useState, useEffect} from "react";
import {ThemeToggle} from "@/app/Components/Theme";
import {useTheme} from "next-themes";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [loaded, setLoaded] = useState(false);
    const {theme} = useTheme();
    const [timer, setTimer] = useState(true);
    useEffect(() => {

            if (showMenu) {
                document.body.classList.add('overflow-hidden');
            } else {
                document.body.classList.remove('overflow-hidden');
            }

        return () => {
            document.body.classList.remove('overflow-hidden');

        }
    }, [showMenu])

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoaded(true);
        }, 10)
        return () => {
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
            <p className={`flex justify-center cursor-pointer hover:bg-gray-900 rounded p-2 text-black hover:text-white  dark:text-white `}>
                <Spn txt='{' cName='text-gray-500 text-3xl font-bold'/>
                <Spn txt='S'
                     cName={` text-4xl font-bold `}/>
                <Spn txt='}' cName='text-gray-500 text-3xl font-bold'/>
            </p>
        )
    }

    return (
        <div
            className={` p-1 nav-bar flex items-center justify-between  sm:px-5 md:px-24 lg:px-42 border-b border-gray-800 sticky left-0 top-0 z-10
             transform transition-all duration-200  
             ${timer ? ' overflow-hidden ' : ' w-full '} sm:overflow-auto
             ${loaded ? ' translate-y-0  ' : ' -translate-y-10/12  '}
             bg-white text-black dark:bg-black dark:text-white 
             `}>
            <div><Logo/></div>

            <div className='p-2 sm:hidden ' onClick={() => {
                setShowMenu(!showMenu);
                setTimer(false)
            }}>
                <Menu size={35}/>
            </div>

            <div
                className={`
                absolute h-screen p-3 inline-block 
                top-0  w-11/12 border-l border-gray-800 
                ${showMenu ? theme === 'light' ? ' duration-300 ease-in right-0 bg-white h-full ' : ' dark:duration-300 dark:ease-in dark:right-0 dark:bg-black  ' : ' -right-12/12  duration-300 ease-in'} 
                sm:relative sm:flex sm:justify-center sm:gap-8 sm:h-auto sm:w-auto sm:border-l-0 sm:right-0`}>
                <div className=' w-max pb-3 sm:hidden '><Logo/></div>
                <div className={'w-full border-b  border-gray-800 sm:hidden'}></div>
                <div className='absolute right-0 top-0 m-6  sm:hidden' onClick={() => {
                    setShowMenu(false);
                    setTimeout(() => setTimer(true), 200)
                }}><SquareX
                    color={'rgb(129, 140, 248)'} size={'35'}/></div>

                <Link href='/' onClick={() => {
                    if(window.innerWidth <=640) {
                        console.log("Inner Width" , window.innerWidth)
                        setShowMenu(!showMenu)
                    }
                }}>
                    <div
                        className={`group pb-10 pl-3 pt-5 font-bold hover:bg-gray-900 rounded cursor-pointer active:gray-700 sm:pb-3 sm:pl-3 sm:pt-3 sm:p-3 hover:text-white `}>
                        Home
                    </div>
                </Link>
                <Link href='/projects' onClick={() => setShowMenu(!showMenu)}>
                    <div
                        className={`pb-10 pl-3 font-bold hover:bg-gray-900 rounded cursor-pointer active:gray-700 sm:pb-3 sm:pl-3 sm:pt-3 sm:p-3 hover:text-white `}>
                        Projects
                    </div>
                </Link>
                <Link href='/contact' onClick={() => setShowMenu(!showMenu)}>
                    <div
                        className={`pb-10 pl-3 font-bold hover:bg-gray-900 rounded cursor-pointer active:gray-700 sm:pb-3 sm:pl-3 sm:pt-3 sm:p-3 hover:text-white`}>
                        Contact
                    </div>
                </Link>

                <ThemeToggle/>
            </div>
        </div>
    )
}

export default Navbar;
// import Image from "next/image";
'use client'
import {useTheme} from 'next-themes';
import Image from 'next/image';
import {useState, useEffect} from 'react';
import {Github, Linkedin, Mail} from 'lucide-react'
import {motion} from 'framer-motion';
import Footer from './Components/Footer'

export default function Main() {
    const {theme} = useTheme();
    console.log(theme)
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null; // or return a loading placeholder
    }

    return (
        <>
            <div
                className={` sm:px-5 md:px-24 lg:px-42 relative pt-10 sm:pt-20 px-10 ${theme === 'light' ? ' bg-white text-black ' : ''}`}>

                {/*Quick Intro*/}
                <motion.div className={`selection:bg-transparent`}>
                    <div className={`relative `}>
                        <Image
                            src="/26432.svg"
                            width={180}
                            height={180}
                            alt="Decorative Image"
                            className={`absolute top-[-4%] sm:-top-[5%] left-[-3%] z-[1] ${theme === 'light' ? ' invert-93 ' : ' invert-15 '}`}
                        />
                        <div className={`font-sans z-[9] bg-transparent relative ${theme === 'light' ? "  " : ''}`}>
                            <p className={`text-emerald-500  font-bold text-3xl sm:text-4xl `}>Hey there!,
                                I&apos;m-</p>
                            <p className={`text-6xl sm:text-9xl font-bold ${theme === 'light' ? " text-gray-700 " : ''} `}>Shivam
                                Sah.</p>
                        </div>

                        <h3 className={`text-4xl mt-10 font-sans font-bold sm:w-9/12 w-11/12 ${theme === 'light' ? " text-gray-700 " : ''}`}>
                            <span>Software Engineer.</span>
                            <span className={`text-gray-400`}> A developer with an interest in Computer Science.</span>
                        </h3>

                        <p className={`text-2xl text-gray-500 mt-10 font-bold `}>
                            🚀 Specializing in full-stack web application development using
                        </p>
                    </div>

                    {/*Quick Tech Stack*/}
                    <div className={`flex gap-4 mt-5 my-10 justify-start`}>
                        <div
                            className={`relative flex items-center  p-1 rounded group hover:cursor-pointer  shadow-[inset_0px_0px_5px_1px_rgba(87,_150,_94,_0.82)] `}>
                            <Image src='/icons8-next.js.svg' width={50}
                                   height={50}
                                   className={`border drop-shadow-emerald-600 hover:drop-shadow-emerald-300 drop-shadow-2xl `}
                                   alt={'Next Js'}/>
                            <span
                                className={` left-1/2 -translate-x-1/2 absolute -top-[10%] invisible group-hover:visible group-hover:-top-[55%] transition-all   bg-white text-black font-bold text-nowrap px-2 py-1 border-2 border-amber-50 rounded-2xl text-sm shadow-[inset_0px_0px_5px_1px_rgba(232,221,211,1)]`}> <i>Next JS</i></span>
                        </div>

                        <div
                            className={`relative flex items-center  p-1 py-2 rounded group hover:cursor-pointer  shadow-[inset_0px_0px_5px_1px_rgba(89,191,255,0.89)] `}>
                            <Image src='/react.svg' width={50}
                                   height={50}
                                   className={`border drop-shadow-indigo-300 hover:drop-shadow-indigo-200 drop-shadow-xl `}
                                   alt={'React Js'}/>
                            <span
                                className={`left-1/2 -translate-x-1/2 absolute -top-[10%] invisible group-hover:visible group-hover:-top-[55%] transition-all   bg-white text-black font-bold text-nowrap px-2 py-1 border-2 border-amber-50 rounded-2xl text-sm shadow-[inset_0px_0px_5px_1px_rgba(232,221,211,1)]`}> <i>React Js</i></span>
                        </div>

                        <div
                            className={`relative flex items-center  p-1 rounded group hover:cursor-pointer  shadow-[inset_0px_0px_5px_1px_rgba(140,179,115,.99)] `}>
                            <Image src='/icons8-mongo-db-48.png' width={50}
                                   height={50}
                                   className={`border drop-shadow-green-600 hover:drop-shadow-green-400 drop-shadow-xl `}
                                   alt={'Mongo DB'}/>
                            <span
                                className={`left-1/2 -translate-x-1/2 absolute -top-[10%] invisible group-hover:visible group-hover:-top-[55%] transition-all   bg-white text-black font-bold text-nowrap px-2 py-1 border-2 border-amber-50 rounded-2xl text-sm shadow-[inset_0px_0px_5px_1px_rgba(232,221,211,1)]`}> <i> Mongo DB</i></span>
                        </div>

                        <div
                            className={`relative flex items-center  p-1  rounded group hover:cursor-pointer  shadow-[inset_0px_0px_5px_1px_rgba(201,201,200,0.99)] `}>
                            <Image src='/icons8-express-js-50.png' width={50}
                                   height={50}
                                   className={`invert-50 p-2 border drop-shadow-[rgba(250,250,250,0.70)] hover:drop-shadow-[rgba(250,251,251,1)] drop-shadow-lg `}
                                   alt={'Express Js'}/>
                            <span
                                className={`left-1/2 -translate-x-1/2 absolute -top-[10%] invisible group-hover:visible group-hover:-top-[55%] transition-all   bg-white text-black font-bold text-nowrap px-2 py-1 border-2 border-amber-50 rounded-2xl text-sm shadow-[inset_0px_0px_5px_1px_rgba(232,221,211,1)]`}> <i>Express Js</i></span>
                        </div>

                        <div
                            className={`relative flex items-center  p-1 rounded group hover:cursor-pointer  shadow-[inset_0px_0px_5px_2px_rgba(87,_150,_94,_0.89)] `}>
                            <Image src='/icons8-node-js-48.png' width={50}
                                   height={50}
                                   className={`invert-10 p-2 border drop-shadow-green-600 hover:drop-shadow-green-300 drop-shadow-xl `}
                                   alt={'Node Js'}/>
                            <span
                                className={` left-1/2 -translate-x-1/2 absolute -top-[10%] invisible group-hover:visible group-hover:-top-[55%] transition-all   bg-white text-black font-bold text-nowrap px-2 py-1 border-2 border-amber-50 rounded-2xl text-sm shadow-[inset_0px_0px_5px_1px_rgba(232,221,211,1)]`}> <i>Node JS</i></span>
                        </div>

                    </div>


                    {/*About me section*/}
                    <motion.div className={`mt-30 `}
                                initial={{opacity: 0, y: 50}}
                                whileInView={{opacity: 1, y: 0}}
                                transition={{duration: 0.6, ease: "easeOut"}}
                                viewport={{once: true}}

                    >
                        <h1 className={`text-2xl font-bold ${theme === "light" ? ' text-gray-700' : ''} `}>⚡ About
                            Me</h1>
                        <div className={`flex flex-col-reverse items-center sm:flex-row  gap-4 sm:justify-between`}>
                            <div className={`sm:w-2/4 font-bold`}>
                                <p className={`text-gray-500 mt-3`}>
                                    I’m Shivam Kumar Sah, a web developer passionate about building and learning through
                                    real
                                    projects. I enjoy exploring how things work — from frontend design to backend logic
                                    —
                                    and
                                    often
                                    integrate third-party APIs and services to extend functionality.
                                </p>
                                <p className={`text-gray-500 mt-3`}>
                                    I’m always curious about improving my code, understanding best practices, and
                                    learning
                                    how
                                    to
                                    write cleaner, more scalable applications. Every project is a chance to pick up
                                    something
                                    new,
                                    and I’m excited to keep growing as a developer.
                                </p>
                            </div>
                            <motion.div initial={{opacity: 0, x: 50}}
                                        whileInView={{opacity: 1, x: 0}}
                                        transition={{duration: 0.6, ease: "easeOut"}}
                                        viewport={{once: true}}
                            >
                                <Image src={'/user-profile.png'} alt={'user'} width={150} height={400}
                                       className={`invert-90 w-[200px] h-[200px] sm:mr-30 mt-3 `}/>
                            </motion.div>

                        </div>
                    </motion.div>


                </motion.div>

                <div className={'flex flex-col items-center justify-center py-30 min-h-10/12 text-center'}>
                    <h1 className={` font-bold text-5xl  text-black dark:text-white `}>Keep In
                        Touch.
                    </h1>
                    <p className={'text-gray-500 mt-3'}>I&apos;m currently specializing in <span
                        className={` text-emerald-500`}>Front-end Development.</span></p>
                    <p className={'text-gray-500 '}> Feel free to get in touch and talk more about your projects.</p>


                    {/*Social Links*/}
                    <div className={`mt-5 mb-10 flex gap-2 justify-start `}>
                        <a
                            href="https://github.com/CuriousShivam"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-nowrap p-2 flex gap-1 items-center font-bold rounded border border-gray-500 hover:bg-gray-800  text-white hover:border-black"
                        >
                            <Github color={'#10B981'}/>
                        </a>

                        <a
                            href="https://www.linkedin.com/in/shivamsah05/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-nowrap p-2 flex gap-1 items-center font-bold rounded border border-gray-500 hover:bg-gray-800  text-white hover:border-black"
                        >
                            <Linkedin color={'#10B981'}/>
                        </a>

                        <a
                            href="mailto:shivam.sah2023t@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-nowrap p-2 flex gap-1 items-center font-bold rounded border border-gray-500 hover:bg-gray-800  text-white hover:border-black"
                        >
                            <Mail color={'#10B981'}/>
                        </a>
                    </div>
                </div>
                <Footer/>

            </div>
        </>
    );
}

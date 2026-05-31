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
                            className={`relative flex items-center  p-1 rounded group hover:cursor-pointer  shadow-[inset_0px_0px_5px_2px_rgba(87,_150,_94,_0.89)] `}>
                            <Image src='https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png' width={50}
                                   height={50}
                                   className={`invert-10 p-2 border drop-shadow-green-600 hover:drop-shadow-green-300 drop-shadow-xl `}
                                   alt={'Javascript'}/>
                            <span
                                className={` left-1/2 -translate-x-1/2 absolute -top-[10%] invisible group-hover:visible group-hover:-top-[55%] transition-all   bg-white text-black font-bold text-nowrap px-2 py-1 border-2 border-amber-50 rounded-2xl text-sm shadow-[inset_0px_0px_5px_1px_rgba(232,221,211,1)]`}> <i>Javascript</i></span>
                        </div>


                        <div
                            className={`relative flex items-center  p-1 py-2 rounded group hover:cursor-pointer  shadow-[inset_0px_0px_5px_1px_rgba(89,191,255,0.89)] `}>
                            <span className={"w-12 "}>
                            <svg className={"block mx-auto"} xmlns="http://www.w3.org/2000/svg" width="39" height="39" viewBox="0 0 32 32"><path fill="#5382A1" d="M11.622 24.74s-1.264.748.9.998c2.626.308 3.968.264 6.854-.308 0 0 .76.484 1.82.9-6.49 2.802-14.674-.16-9.574-1.59zm-.826-3.924s-1.43 1.056.748 1.278c2.782.308 4.97.33 8.76-.44 0 0 .528.54 1.353.836-7.81 2.296-16.5.176-10.86-1.672zm15.92 6.81s.924.77-.99 1.39c-3.702 1.176-15.41 1.486-18.67.044-.99-.528 1.012-.792 1.694-.88.66-.11 1.034-.11 1.034-.11-1.2-.836-7.7 1.65-3.31 2.37 11.99 1.97 21.83-.88 20.24-2.81zM12.2 17.03s-5.456 1.302-1.936 1.77c1.497.22 4.466.176 7.227-.088 2.264-.264 4.532-.814 4.532-.814s-.792.352-1.376.748c-5.566 1.464-16.32.792-13.23-.726 2.61-1.28 4.795-.88 4.795-.88zm11.22 6.292c5.63-2.93 3.034-5.74 1.232-5.366-.44.088-.638.176-.638.176s.166-.264.484-.374c3.568-1.258 6.314 3.724-1.17 5.696 0 0 .088-.088.088-.132zm-10.296 8.87c5.412.352 13.728-.198 13.904-2.788 0 0-.374.99-4.466 1.766-4.62.88-10.33.78-13.728.22 0 0 .7.572 4.29.792z"></path><path fill="#E76F00" d="M18.996 1s3.014 3.036-2.858 7.7c-4.708 3.748-1.076 5.894 0 8.338-2.744-2.478-4.774-4.664-3.414-6.692 1.996-2.97 7.53-4.422 6.272-9.346zm-1.576 14.026c1.464 1.68-.374 3.19-.374 3.19s3.702-1.92 2-4.312c-1.584-2.222-2.804-3.326 3.79-7.106 0 0-10.374 2.596-5.412 8.228z"></path></svg>
                            </span>
                            <span
                                className={`left-1/2 -translate-x-1/2 absolute -top-[10%] invisible group-hover:visible group-hover:-top-[55%] transition-all   bg-white text-black font-bold text-nowrap px-2 py-1 border-2 border-amber-50 rounded-2xl text-sm shadow-[inset_0px_0px_5px_1px_rgba(232,221,211,1)]`}> <i>Java</i></span>
                        </div>

                        <div
                            className={`relative flex items-center  p-1 rounded group hover:cursor-pointer  shadow-[inset_0px_0px_5px_2px_rgba(87,_150,_94,_0.89)] `}>
                            <Image src='/icons8-node-js-48.png' width={50}
                                   height={50}
                                   className={`invert-10 p-2 border drop-shadow-green-600 hover:drop-shadow-green-300 drop-shadow-xl `}
                                   alt={'NodeJs'}/>
                            <span
                                className={` left-1/2 -translate-x-1/2 absolute -top-[10%] invisible group-hover:visible group-hover:-top-[55%] transition-all   bg-white text-black font-bold text-nowrap px-2 py-1 border-2 border-amber-50 rounded-2xl text-sm shadow-[inset_0px_0px_5px_1px_rgba(232,221,211,1)]`}> <i>Node JS</i></span>
                        </div>

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

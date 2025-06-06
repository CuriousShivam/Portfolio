  // import Image from "next/image";
'use client'
  import {useTheme} from 'next-themes';

export default function Main() {
  const {theme} = useTheme();
  return (
    <>
    <div className={`relative  p-10 ${theme === 'light' ? " bg-white " : '' }`}>
      <p className={`text-green-500 font-bold text-3xl sm:text-4xl font-sans `}>Hey there!, I'm-</p>
      <p className={`text-6xl sm:text-9xl font-bold font-sans ${theme === 'light' ? " text-gray-700 " : '' } `}>Shivam Sah.</p>
    </div>
    </>
  );
}

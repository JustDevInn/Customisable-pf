import React from 'react';
import {MdNightsStay, MdWbSunny} from 'react-icons/md';

const Header = ({darkMode, setDarkMode}) => {
  return (
   <header className="bg-zinc-200 dark:bg-gray-900 text-gray-900 dark:text-white sticky top-0">
    <nav className="flex justify-between items-center p-5">
        <h1 className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-lime-950">MMVMT</h1>

        <div onClick={() => setDarkMode(!darkMode)}>
        {
            darkMode ? 
            (
            <MdNightsStay className="text-2xl cursor-pointer"/>
            )
            :
            (
            <MdWbSunny className="text-2xl cursor-pointer"/>
            )
        }
        </div>
    </nav>
   </header>
  )
}

export default Header;
import { useState } from 'react';
import { HiMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';

import logo from '../../images/logo.png';


import React, { useContext } from "react"; //
import { TransactionContext } from '../context/TransactionContext';///

// Simple component for the navbar items 
const NavbarItem = ({ title, classProps }) => { 
    return (
        <li className={`mx-4 cursor-pointer ${classProps}`}> 
            {title}
        </li>
    );
}

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false); {/* State that indicates whether the mobile navigation bar is currently open or not*/}
    const { currentAccount, connectWallet } = useContext(TransactionContext); ///

    return (
        <nav className='w-full flex md:justify-center justify-between items-center p-4'> 
            <div className='md:flex-[0.5] flex-initial justify-center items-center'> 
                <img src={logo} alt="logo" className='w-32 cursor-pointer' /> 
            </div>
            <ul className='text-white md:flex hidden list-none flex-row justify-between items-center flex-initial'>
                {/* Dynamic block with an array of the navbar items where in each iteration 
                    we provide a key equal to the item + index to make it really unique
                */}
                {["Market", "Exchange", "Tutorials", "Wallets"].map((item, index) => ( 
                    <NavbarItem key={item + index} title={item} />
                ))}

                {!currentAccount && (
                    <li className='bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]'
                    onClick={connectWallet}>
                    Login
                </li>
                )}
                 
            </ul>
            
            {/* Navigation bar for mobile devices*/}
            <div className='flex relative'>
                {/* AiOutLineClose = closes the menu
                    HiMenuAlt4 = opens the menu */}
                {toggleMenu
                    ? <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(false)}/>
                    : <HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />
                }
                {/* The code below of this, is going to execute only when the toggle menu is set to true */}
                {toggleMenu && (
                        <ul className='z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
                        flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in'>
                            <li className='text-xl w-full my-2'>
                                <AiOutlineClose onClick={() => setToggleMenu(false)} />
                            </li>
                            {["Market", "Exchange", "Tutorials", "Wallets"].map((item, index) => (
                                <NavbarItem key={item + index} title={item} classProps="my-2 text.lg" />
                            ))}
                        </ul>
                )}
            </div>
       </nav>
    );
}

export default Navbar;
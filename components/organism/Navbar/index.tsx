import { useState } from "react";

const Navbar = () => {
    const [toggle, setToogle] = useState(false)
    return(
        <nav className="w-full max-w-[1316px] bg-white mt-5 top-0">
            <div className="flex font-libre justify-between">
                <div className="flex items-center sm">
                    <h5 className="text-black-semi font-bold text-2xl md:text-3xl cursor-pointer sm:mr-8 z-20"><span className="bg-black text-white pt-4 pl-4">Nu</span>ntium</h5>
                    <ul className="hidden sm:flex gap-8 text-lg md:text-xl font-bold">
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">Tags</a>
                        </li>
                        <li>
                            <a href="#">About</a>
                        </li>
                    </ul>
                </div>
                <div className="hidden sm:flex items-center">
                    <svg className="cursor-pointer sm:block hidden" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.75 23.75C19.2728 23.75 23.75 19.2728 23.75 13.75C23.75 8.22715 19.2728 3.75 13.75 3.75C8.22715 3.75 3.75 8.22715 3.75 13.75C3.75 19.2728 8.22715 23.75 13.75 23.75Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M26.25 26.25L20.8125 20.8125" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <button className="border-2 border-black px-8 md:px-10 rounded-xl py-2 md:py-3 ml-5 hidden sm:block hover:bg-black hover:text-white transition duration-500">Login</button>
                </div>
                <svg className="cursor-pointer sm:hidden" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.75 23.75C19.2728 23.75 23.75 19.2728 23.75 13.75C23.75 8.22715 19.2728 3.75 13.75 3.75C8.22715 3.75 3.75 8.22715 3.75 13.75C3.75 19.2728 8.22715 23.75 13.75 23.75Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M26.25 26.25L20.8125 20.8125" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <div onClick={() => setToogle(!toggle)} className="pr-3 h-[20px] flex flex-col justify-between cursor-pointer z-20 sm:hidden">
                    <div className={`w-[28px] h-[4px] transition first-line duration-500 bg-black ${toggle && "first-line-check"}`}></div>
                    <div className={`w-[28px] h-[4px] transition duration-500 bg-black ${toggle && "opacity-0 transform scale-0"}`}></div>
                    <div className={`w-[28px] h-[4px] transition fourth-line duration-500 bg-black ${toggle && "fourth-line-check"}`}></div>
                </div>
                <div className={`w-screen h-screen absolute right-0 top-0 bg-white pt-20 transition duration-500 ${!toggle && "-translate-y-full"}`}>
                    <ul className="flex h-full flex-col items-center justify-evenly font-bold text-lg">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Tags</a></li>
                        <li><a href="#">About</a></li>
                        <button  className="border-2 border-black px-8 rounded-xl py-2">Login</button>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
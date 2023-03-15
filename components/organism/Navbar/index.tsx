import Link from 'next/link'
import { useRouter } from 'next/router'
import { useRef, useState } from 'react'
import Search from "../../../public/assets/Search"

const Navbar = () => {
  const [toggle, setToogle] = useState(false)

  const router = useRouter()

  const inputRef = useRef<HTMLInputElement>(null)
  
  return (
    <nav className="top-0 mt-5 w-full max-w-[1316px] bg-white">
      <div className="flex justify-between font-libre">
        <div className="sm flex items-center">
          <Link href="/">
            <h5 className="z-20 cursor-pointer text-2xl font-bold text-black-semi sm:mr-8 md:text-3xl">
              <span className="bg-black pt-4 pl-4 text-white">Nu</span>ntium
            </h5>
          </Link>
          <ul className="hidden gap-8 text-lg sm:flex md:text-xl">
            <li className={router.pathname === "/" ? "font-bold" : "font-normal"}>
              <Link href="/">Home</Link>
            </li>
            <li className={router.pathname === "/tags" ? "font-bold" : "font-normal"}>
              <Link href="/tags">Tags</Link>
            </li>
            <li className={router.pathname === "/about" ? "font-bold" : "font-normal"}>
              <Link href="/about">About</Link>
            </li>
          </ul>
        </div>
        <div className="hidden items-center sm:flex">
          <div className="flex items-center py-2 lg:px-2 rounded-[10px] focus-within:outline-2 focus-within:outline focus-within:outline-black gap-1">
            <input ref={inputRef} className="outline-none" type="text" />
            <button onClick={() => inputRef.current?.focus()}>
              <Search />
            </button>
          </div>
        </div>
        <svg
          className="cursor-pointer sm:hidden"
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.75 23.75C19.2728 23.75 23.75 19.2728 23.75 13.75C23.75 8.22715 19.2728 3.75 13.75 3.75C8.22715 3.75 3.75 8.22715 3.75 13.75C3.75 19.2728 8.22715 23.75 13.75 23.75Z"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M26.25 26.25L20.8125 20.8125"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div
          onClick={() => setToogle(!toggle)}
          className="z-20 flex h-[20px] cursor-pointer flex-col justify-between pr-3 sm:hidden"
        >
          <div
            className={`first-line h-[4px] w-[28px] bg-black transition duration-500 ${
              toggle && 'first-line-check'
            }`}
          ></div>
          <div
            className={`h-[4px] w-[28px] bg-black transition duration-500 ${
              toggle && 'scale-0 transform opacity-0'
            }`}
          ></div>
          <div
            className={`fourth-line h-[4px] w-[28px] bg-black transition duration-500 ${
              toggle && 'fourth-line-check'
            }`}
          ></div>
        </div>
        <div
          className={`absolute right-0 top-0 h-screen w-screen bg-white pt-20 transition duration-500 ${
            !toggle && '-translate-y-full'
          }`}
        >
          <ul className="flex h-full flex-col items-center justify-evenly text-lg">
            <li className={router.pathname === "/" ? "font-bold" : "font-normal"}>
              <a href="/">Home</a>
            </li>
            <li className={router.pathname === "/tags" ? "font-bold" : "font-normal"}>
              <a href="/tags">Tags</a>
            </li>
            <li className={router.pathname === "/about" ? "font-bold" : "font-normal"}>
              <a href="/about">About</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

import React from "react";
import Image from "next/image";
import { isExpressionWithTypeArguments } from "typescript";
import logo_batela from "../Images/logo_batela.png";
import { IoIosArrowDown } from "react-icons/io";
import { BsSearch } from "react-icons/bs";
import Link from "next/link";

export default function NavBar() {
  return (
    <header className=" border-y h-20 flex fixed z-10 w-full bg-white/90 ">
      <div className=" w-32 items-center flex justify-center flex-col ">
        <Link href="Accueil">
        <Image className=" w-16 h-16 p-2 cursor-pointer" src={logo_batela} />
        </Link>
      </div>
      <div className=" flex justify-center w-125 space-x-24">
        <div className="  w-auto	text-center flex">
          <ul className=" flex ml-16 space-x-8  justify-center items-center font-medium ">
           <Link href="#about"><li className=" focus:text-purple-600 hover:text-purple-600 cursor-pointer">À propos</li></Link> 
            <Link href="AllQuestionsCard"><li className=" focus:text-purple-600 hover:text-purple-600 cursor-pointer">Questions</li></Link>
            <li className=" focus:text-purple-600 hover:text-purple-600 cursor-pointer">Contact</li>
          </ul>
        </div>

        <div className=" w-auto items-center flex justify-center space-x-7">
          <Link href="Domaines">
          <button
            type="button"
            className=" p-3 px-7 h-10 focus:outline-none border-2 text-black border-purple-700 hover:text-white bg-white hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-xs py-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
          >
            Domaines
          </button>
          </Link>
          <Link href="AllQuestionsCard">
          <button
            type="button"
            className=" w-44 h-10 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-xs py-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
          >
            Rejoignez la communauté
          </button>
          </Link>
        </div>
      </div>
    </header>
  );
}

{
  /* <div className="  w-48 items-center flex justify-center	 flex-col">
        <form className=" w-40 ">
          <label
            for="default-search"
            class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div class="relative ">
            <div className=" absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <BsSearch />
            </div>
            <input
              type="search"
              id="default-search"
              className=" h-9 block w-full pl-10  text-sm text-gray-900 border border-gray-300 rounded bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search"
              required
            />
          </div>
        </form>
      </div> */
}

//   <div class="flex justify-center bg-red-400">
//   <div>
//     <div class="relative" data-te-dropdown-ref>

//       <ul
//         class="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
//         aria-labelledby="dropdownMenuButton1"
//         data-te-dropdown-menu-ref
//       >
//         <li>
//           <a
//             class="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
//             href="#"
//             data-te-dropdown-item-ref
//           >
//             Action
//           </a>
//         </li>
//         <li>
//           <a
//             class="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
//             href="#"
//             data-te-dropdown-item-ref
//           >
//             Another action
//           </a>
//         </li>
//         <li>
//           <a
//             class="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
//             href="#"
//             data-te-dropdown-item-ref
//           >
//             Something else here
//           </a>
//         </li>
//       </ul>
//     </div>
//   </div>
// </div>

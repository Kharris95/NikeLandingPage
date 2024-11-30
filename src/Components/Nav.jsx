import { TbShoppingBag } from "react-icons/tb"; 
import NikeLogo from "../assets/nike-logo.svg?react";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
const ROUTES =["Home","About","Services","Pricing","Contact"];
export function Nav({ onClickShoppingBtn }) {
    const [isMobileMenuShown , setIsMobileMenuShown] = 
    useState(false);
    return (
     <nav className="flex relative z-10 flex-wrap justify-between items-center">
        {/*Nike Logo*/}
        <a href="">
        <NikeLogo className="h-20 w-20"/>
        </a>
        {/*Burger Icon*/}
        <button onClick = { () => setIsMobileMenuShown(!isMobileMenuShown) } className= "lg:hidden p-2 focus:ring-2 focus:ring-gray-200 rounded-lg hover:bg-gray-100">
        <RxHamburgerMenu size={25}/>
        </button>
        {/*menu dropdown*/}
        <div className={`${ isMobileMenuShown ? "" : "hidden"} w-full lg:w-auto lg:block `}>
            <ul className= "lg:space-x-8 bg-gray-50 lg:bg-transparent flex flex-col lg:flex-row text-lg border border-gray-100 lg:border-none rounded-3xl p-4">
                {ROUTES.map((route,i) => {
                    return<li className={`lg:hover:text-blue-500 lg:hover:bg-transparent rounded cursor-pointer px-3 py-2 ${i===0 ? "lg:bg-transparent bg-blue-500 lg:text-blue-500 text-white":"hover:bg-gray-100"} ${(i===3 || i==4) && "lg:text-white"}`} key={route}>{route}</li>;
                })}
                <li>

                </li>
            </ul>

        </div>
        {/*cart button*/}
        <div onClick={onClickShoppingBtn}
        className="btn-press-anim fixed left-4 bottom-4 lg:static lg:mr-8">        
        <div className="flex-center h-12 w-12 cursor-pointer rounded-full bg-white shadow-md">
        <TbShoppingBag />
        </div>
        </div>
     </nav>
  );
  }
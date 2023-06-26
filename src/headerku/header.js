import React from 'react';
import logo from '../assets/image 1.png'

function PermiasHeader(){
    return (


        <div>
            
            <div className={"fixed max-h-100 w-full z-10 backdrop-blur-xl bg-white bg-opacity-30  "} >
                <ul className={"flex item-center items-stretch justify-between overflow-x-auto shrink-0 grow-0 "}>
                <div className={"flex  flex-row w-24 shrink-0 "}><a href='/'> <img src={logo} className={"object-cover w-30 p-5 overflow-x-hidden"}/> </a> </div>
                    <li className={"w-1/24 shrink"}></li>
                    <li className={"w-1/6 pt-7 pr-3 text-cardinal hover:text-gold"}><a href='/NewStu'>Welcome</a> </li>
                    <li className={"w-1/6 pt-7 text-cardinal  hover:text-gold"}><a href='/Board'>Board</a> </li>
                    <li className={"w-1/6 pt-7 text-cardinal  hover:text-gold"}><a href='/Alumni'>Alumni</a> </li>
                    <li className={"w-1/6 pt-7 text-cardinal  hover:text-gold"}><a href='/Ames'>Ames</a></li>
                    
                </ul>

            </div>
        </div>

    
    );
}
export default PermiasHeader
import React, { Component } from 'react';
import { Route } from 'react-router';

import PermiasHeader from '../headerku/header';
import topblob from '../assets/topWave.png';
import member1 from '../assets/member1.png';
import member2 from '../assets/member2.png';
import member3 from '../assets/member3.png';
import member4 from '../assets/ member4.png'

import alumniPhoto from '../assets/president.png';
import groupPhoto from '../assets/GroupPhoto.png';
import batik from '../assets/image 10.png';
import background from '../assets/wallpaper1.png';


function board(){
    return(
            <div>
                <PermiasHeader/>
            <div>

                <div>
                    <div style={{ backgroundImage: `url(${background})`}} className={"lg:w-full w-fit h-screen bg-cover bg-center bg-fixed "}>
                    <div className={"w-fit flex flex-row h-screen py-16"}>
                        <ul className={"w-fit py-32"}>
                            <div className={"w-64 px-8 m-[6vw] bg-white bg-opacity-25 backdrop-blur-xl rounded-xl"}>
                                <a  href='https://www.linkedin.com/in/nicholas-wang-abb258151/'> 
                                    <img src={member1} alt='member 1' className={"w-48 py-8"} img/>
                                    <div className={"w-48 text-gold text-2xl"}> Vania uli anjayani</div>
                                    <div className={"w-48 text-xl"}> Title</div>
                                    <div className={"w-48 pb-8"}> Hari ini aku ketemu wong</div>
                            
                                </a>
                            </div> 
                        </ul>
                        <ul className={"w-fit py-32"}>
                            <div className={"w-64 px-8 m-[6vw] bg-white bg-opacity-25 backdrop-blur-xl rounded-xl"}>
                                <a  href='https://www.linkedin.com/in/nicholas-wang-abb258151/'> 
                                    <img src={member1} alt='member 1' className={"w-48 py-8"} img/>
                                    <div className={"w-48 text-gold text-2xl"}> Vania uli anjayani</div>
                                    <div className={"w-48 text-xl"}> Title</div>
                                    <div className={"w-48 pb-8"}> Hari ini aku ketemu wong</div>
                            
                                </a>
                            </div> 
                        </ul>
                        <ul className={"w-fit py-32"}>
                            <div className={"w-64 px-8 m-[6vw] bg-white bg-opacity-25 backdrop-blur-xl rounded-xl"}>
                                <a  href='https://www.linkedin.com/in/nicholas-wang-abb258151/'> 
                                    <img src={member1} alt='member 1' className={"w-48 py-8"} img/>
                                    <div className={"w-48 text-gold text-2xl"}> Vania uli anjayani</div>
                                    <div className={"w-48 text-xl"}> Title</div>
                                    <div className={"w-48 pb-8"}> Hari ini aku ketemu wong</div>
                            
                                </a>
                            </div> 
                        </ul>
                        <ul className={"w-fit py-32"}>
                            <div className={"w-64 px-8 m-[6vw] bg-white bg-opacity-25 backdrop-blur-xl rounded-xl"}>
                                <a  href='https://www.linkedin.com/in/nicholas-wang-abb258151/'> 
                                    <img src={member1} alt='member 1' className={"w-48 py-8"} img/>
                                    <div className={"w-48 text-gold text-2xl"}> Vania uli anjayani</div>
                                    <div className={"w-48 text-xl"}> Title</div>
                                    <div className={"w-48 pb-8"}> Hari ini aku ketemu wong</div>
                            
                                </a>
                            </div> 
                        </ul>

                    </div>
                    <img src={topblob} className={"absolute bottom-[0px] w-full bg-opacity-0"}/>
                    </div>

                </div>

                <div className={"overscroll-x-none w-full"}>
                    copyright permias Ames
                </div>


            </div>

            </div>
            );
}
export default board
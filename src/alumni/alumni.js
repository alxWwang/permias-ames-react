import React, { Component } from 'react';
import PermiasHeader from '../headerku/header';

import alumniPhoto from '../assets/president.png';
import groupPhoto from '../assets/GroupPhoto.png';
import topblob from '../assets/topWave.png';
import batik from '../assets/image 10.png';
import background from '../assets/wallpaper1.png';




function alum(){
    return(
            <div>
                <PermiasHeader/>
                <div className={"w-full"}>
                <div>
                    <div style={{ backgroundImage: `url(${background})`, width:'100%'}} className={" static h-screen bg-cover bg-no-repeat bg-center bg-fixed"}>

                    <h1 className={'absolute text-7xl bottom-52 left-10 text-gold text-left w-8'}> Welcome Back Alum!</h1>
                    <img src={topblob} className={"absolute bottom-[0px] w-full bg-opacity-0"}/>
                    </div>

                </div>
                <div/>

                <div>
                    <div className={"flow-root my-32 px-12 p-24 py-5 p-8 bg-batik bg-contain"} >
                        <img src={alumniPhoto} style={{width:'350px'}} className={"w-1/2 float-left pl-10 p-12 px-24 "} />
                        <h1 className={"pr-10 py-12 text-left items-center"} style={{fontSize:'4vh'}}> “Aku anak Indonesia, Sehat dan kuat, karena mamah memberi sakatonik abc” - Alumni suru bilang sesuatu terus dikasi foto </h1>
                    </div>
                </div>

                <div className={"flex flex-col mx-100 w-auto"}> 
                    <div className={"text-7xl text-gold pb-8"} >Keep in touch!!</div>

                    <div className={"flex flex-col items-center"}> 
                        <input style={{backgroundColor:"#D9D9D9", borderRadius:'10px'}} className={"w-2/3 max-w-lg py-4 my-4"}type={'email'} placeholder='Name'></input>
                        <input style={{backgroundColor:"#D9D9D9", borderRadius:'10px'}} className={"w-2/3 max-w-lg py-4 my-4"}type={'text'} placeholder='Email'></input>
                        <input style={{backgroundColor:"#D9D9D9", borderRadius:'10px'}} className={"w-2/3 max-w-lg py-4 my-4"}type={'text'} placeholder='Term of Entry'></input>
                        <button style={{backgroundColor:"#9C1717", borderRadius:'10px'}} className={" p-4 max-w-lg my-4 mx-24"} type={'submit'} >submit</button>

                    </div>

                    

                </div>



                

                

                <div className={"flow-root py-12"}>
                    copyright permias Ames
                </div>


            </div>

            </div>
            );
}
export default alum
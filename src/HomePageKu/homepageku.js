import React, { Component } from 'react';
import PermiasHeader from '../headerku/header';

import president from '../assets/president.png';
import groupPhoto from '../assets/GroupPhoto.png';
import topblob from '../assets/topWave.png';
import batik from '../assets/image 10.png';
import background from '../assets/wallpaper1.png';
import vecTop from '../assets/VectorTop.png';
import vecBot from '../assets/VectorBot.png';



function home(){
    return(
            <div>
                <PermiasHeader/>
            <div>
                
                <div>
                    <div style={{ backgroundImage: `url(${background})`, width:'100%'}} className={"static h-screen bg-cover bg-no-repeat bg-center bg-fixed"}>

                        <h1 className={'absolute text-7xl bottom-52 left-10 text-white text-opacity-75 text-left w-8'}>Permias Ames</h1>


                        <img src={topblob} className={"absolute bottom-0 w-full bg-opacity-0"}/>
                    </div>

                </div>


                <div className={"lg:px-16 md:px-5 sm:-px-0"}>
                    <div className={"flow-root w-full min-h-fit p-8 py-32"}>
                        <h1 className={"w-1/2 float-left text-3xl pr-10 text-left text-cardinal"}> Universitas ini sangat bagus aku suka universitas ini</h1>
                        <p className={"w-1/2 text-right float-right border-l-4 text-2xl object-fit pl-10"}> Tujuan permias adalah untuk ada permias biar bisa jadi permias di tempat ada permias  </p>
                    </div>
                </div>


                <div className={"flow-root w-full p-24 pb-5 p-8 bg-contain bg-batik"} >
                        <img src={groupPhoto} style={{width:'400px', borderRadius:'60px'}} className={"w-1/2 float-right pl-10 p-12 rounded"} />
                        <h1 className={"pr-10 py-12 text-left items-center"} style={{fontSize:'2vh'}}> “Aku anak Indonesia, Sehat dan kuat, karena mamah memberi sakatonik abc” - Alumni suru bilang sesuatu terus dikasi foto </h1>
                        
                 </div>
                


                <div className={"lg:px-16 md:px-5 sm:-px-0"}>
                    <div className={"flow-root w-full pt-16 p-8 "}>
                        <h1 className={" text-left text-3xl py-8 text-cardinal"} > Vision</h1>
                        <p style={{borderColor:'#9C1717'}} className={" text-left text-2xl pr-24 border-r-8"} >"Our vision is to empower Indonesian students in the United States with the knowledge,
                            skills, and network to become future leaders and agents of change who contribute to Indonesia's
                            development and global society. We strive to create a dynamic and inclusive community that embraces diversity,
                            fosters personal growth, and promotes Indonesian culture, values, and heritage."</p>
                        <h1 className={" text-right text-3xl py-8 text-gold"} > Mission </h1> 
                        <p style={{borderColor: '#F1BE48'}} className={" text-right text-2xl pl-24 border-l-8"}>"Our mission is to serve as a platform for Indonesian students in the United States to enhance their
                            academic, professional, and personal development by providing a supportive community, resources, and opportunities.
                            We aim to promote Indonesian culture, traditions, and values to the wider public through cultural events, social activities, and educational programs.
                            We also strive to foster collaboration and networking among Indonesian students, alumni,
                            and other organizations in the United States to create a strong and sustainable Indonesian student community."</p>
                    </div>

                </div>


                <img src={vecTop} className={"w-full"}/> 
                <div className={"flow-root w-full min-h-fit p-8 bg-cover bg-no-repeat"} style={{ backgroundColor:"#9C1717"}}> 
                                   
                    <div className={"w-full flow-root"}>
                        <img src={groupPhoto} style={{width:'500px'}} className={"float-right p-16"} />
                        <h1  className={" pr-10 text-left p-16 "}  style={{fontSize:'3vh' , color:'white'}}>
                        Semua kata rindu mu semakin membuatku tak berdaya menahan rasa ingin jumpa a aa. percayalah padaku aku pun rindu kamu kuakan pulang melepas semua kerinduan yang terpendam.</h1>
                        
                    </div>
                    <div className={" w-full flow-root"}>
                        <img src={president} style={{width:'400px'}}className={"float-left p-16"} />
                        <h1  className={"text-right pl-10 p-16"}  style={{fontSize:'3vh', color:'white'}}>
                        Semua kata rindu mu semakin membuatku tak berdaya menahan rasa ingin jumpa a aa. percayalah padaku aku pun rindu kamu kuakan pulang melepas semua kerinduan yang terpendam.</h1>
                        
                    </div>
                </div>
                <img src={vecBot} className={"w-full"}/>
                


                <div className={"flow-root pb-12"}>
                    copyright permias Ames
                </div>


            </div>

            </div>
            );
}
export default home
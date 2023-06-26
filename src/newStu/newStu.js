import React, { Component } from 'react';
import PermiasHeader from '../headerku/header';

import alumniPhoto from '../assets/president.png';
import groupPhoto from '../assets/GroupPhoto.png';
import topblob from '../assets/topWave.png';
import batik from '../assets/image 10.png';
import background from '../assets/wallpaper1.png';



function newStu(){
    function sendEmail(e){
        e.preventDefault();
        console.log("anjay bisa")



    }



    return(
            <div style={{marginTop: 0}}>
                <PermiasHeader/>
            <div>
            <div style={{ backgroundImage: `url(${background})`, width:'100%', height:'100vh'}} className={"static bg-cover bg-no-repeat bg-center bg-fixed w-screen"}>
                <div className={"h-screen flex flex-col items-center justify-center"}>
                    <div className={"lg:md-12"}>
                        <h1 className={"float text-5xl md:text-7xl float-left text-gold text-left md:w-[400px] p-12"}  > Reach out to us!!</h1>

                        <form onSubmit={sendEmail} className={"relative float float-left flex flex-col items-center bg-white px-12 bg-opacity-25 backdrop-blur-xl px-8 md:px-12 mx-12 py-5 w-64 md:w-80 rounded-xl"}> 
                            <input style={{backgroundColor:"#D9D9D9", borderRadius:'10px'}} className={"w-full max-w-lg py-4 my-2"} name='name' placeholder='Name'></input>
                            <input style={{backgroundColor:"#D9D9D9", borderRadius:'10px'}} className={"w-full max-w-lg py-4 my-2"} name='email' placeholder='Email'></input>
                            <input style={{backgroundColor:"#D9D9D9", borderRadius:'10px'}} className={"w-full max-w-lg py-4 my-2"} name='term' placeholder='Term of Entry'></input>
                            <button style={{backgroundColor:"#9C1717", borderRadius:'10px'}} className={" p-4 max-w-lg my-4 mx-24"} type={'submit'} onClick={sendEmail} >Submit</button>

                        </form>
                    </div>

                </div>

                <img src={topblob} className={"absolute bottom-[0px] w-full bg-opacity-0"}/>
            </div>






                <div className={" p-8"}>
                    <h1 className={"text-gold text-left text-4xl"} > Congratulations!</h1>
                    <p className={" text-left text-xl py-10"} >We know that making a decision to study abroad can be pretty hard
                    Therefore, we want to help you by giving you information that is based on our experience here in ISU.   
                    In the conjunction of this information, ISSO (International Students and Scholars Office) 
                    has a better and more thorough checklist, 
                    which we would strongly encourage you to read.</p>

                    <h1 className={"text-gold text-left text-4xl"} > Visa</h1>
                    <p className={" text-left text-xl py-10"}>
                    US Visa is important for you to get into the States 
                    legally.Remember this before applying for a VISA ISSO
                        <ol>
                            <li>For students: Get your SEVIS done,you would need the receipt during your interview/VISA Process</li>
                            <li>Financeproof</li>   
                        </ol>

                    <p className={" text-left text-xl py-10"}>
                        Tips: Always, have your Passport, I-20 around when you are at a port of entry.
                        For current students: Before going travelling outside the States, there is a travel advisory seminar in the Iowa State University that I would recommend you to go. You should also check your I-20 and get a travel signature if necessary
                        For more questions, ISSO would be the best source for you to clarify your doubts. View ISSO Website</p>
                    
                    </p>
                    
                    <h1 className={"text-gold text-left text-4xl"} > Iowa State University</h1>
                    <p className={" text-left text-xl py-10"}>For students, there would be an online check-in that you need to do during your orientation week.
                        ISSO website is for international students and I would recommend you to read it thoroughly because it contains most of the important message for incoming international students.
                        For general information of ISU, visit ISU website</p>

                    <h1 className={"text-gold text-left text-4xl"}> Cyride</h1>
                    <p className={" text-left text-xl py-10"} >"As a student in ISU, you will have free access to Cyride. 
                        Cyride is a transporation system that is well maintained by the city of Ames.
                        For further information of its schedule, visit its website.</p>
                   
                </div>

                <div id='copyrightStu'>
                    copyright permias Ames
                </div>


            </div>
            </div>
            );
}
export default newStu
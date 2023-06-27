import React, { useState } from 'react'
import SpeakEasyNav from './SpeakEasyNav'
import speak_easy from './png/speak easy page-20.jpg'
import call_video from './png/speak easy page-17.jpg'
import likely_text from './png/speak easy page-16.jpg'
import rating from './png/speak easy page-21.jpg'
import { AccoedingAPi } from './AccordionAPi'
import bottom_content_img from './png/speak easy page-15.jpg'
import Accordion from './Accordion'


const FirstPage = () => {
    const [data ,setData]=useState(AccoedingAPi)
    return (
        <div className='first_page'>
            <SpeakEasyNav />
            <main>
                <div class="top_content">
                    <img src={speak_easy} alt="speak easy" className="speak_easy" />
                    <img src={call_video} alt="call video" className="call_video" />

                </div>
                <div class="middle_content">

                    <img src={likely_text} alt="text" className="likely_text" />
                </div>
                <div class="bottom_content">
                    <img src={rating} alt="rating" id="rating" className="ratingClass" />
                    <div class="question_container">
                       {data.map((element)=>{
                        return(<>
                        <Accordion {...element}/>
                        </>)
                       })}
                        {/* <div class="question_body" >
                            <div class="question" id="questionId">
                                <img src={plus} alt="plus" className="plus" id="plusId" />


                                <p class="question_para">How it works?</p>
                            </div>
                            <div class="answer" id="answerId">
                                <p class="answer_para">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>
                        <div class="question_body" >

                            <div class="question" id="questionId"  >
                                <img src={plus} alt="plus" className="plus" id="plusId" />


                                <p class="question_para">Benefits of Speak-easy.</p>
                            </div>
                            <div class="answer" id="answerId">
                                <p class="answer_para">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div> */}
                    </div>
                    <img src={bottom_content_img} alt="blank video" id="black_video" className="bottom_content_img" />
                </div>
            </main>
        </div>
    )
}

export default FirstPage
import plus from './png/speak easy page-22.jpg'
import minimize from './png/minimize.png'
import { useState } from 'react'
const Accordion = ({id,answer,question}) => {
    const [show, setShow] = useState(true)
    return (
        <>
       
            <div className="question_body" key={id}>
                <div className="question" id="questionId" onClick={() => {
                    setShow(!show)
                }}>{show?<img src={plus} alt="plus" className="plus" id="plusId" />
                : <img src={minimize} alt="minimize" className="minimize" id="minimizeId"/>}
                    
                   
                    <p className="question_para">{question}</p>
                </div>
                <div className="answer" id="answerId">
                    {!show &&<p className="answer_para">{answer}</p>}
                    
                </div>
            </div>
        </>
    )
}

export default Accordion
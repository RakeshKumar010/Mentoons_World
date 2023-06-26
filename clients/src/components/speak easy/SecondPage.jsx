import header_img from './png/speak easy page-11.jpg'
import standard from './png/speak easy page-06.jpg'
import basic from './png/speak easy page-05.jpg'
import premium from './png/speak easy page-07.jpg'
const SecondPage = () => {
  return (
    <>
        <div class="second_page">
        <header>
            {/* <img src="./png/speak easy page-11.jpg" alt="headerImg" class="header_img"> */}
            <img src={header_img} alt="headerImg" class="header_img"/>
        </header>
        <div class="plan_card_container">
            {/* <img src="./png/speak easy page-05.jpg" alt="basic"> */}
            <img src={basic} alt="basic" />
            {/* <img src="./png/speak easy page-06.jpg" alt="standard"> */}
            <img src={standard} alt="standard" />
            {/* <img src="./png/speak easy page-07.jpg" alt="premium"> */}
            <img src={premium} alt="premium" />
        </div>
    </div>
    </>
  )
}

export default SecondPage
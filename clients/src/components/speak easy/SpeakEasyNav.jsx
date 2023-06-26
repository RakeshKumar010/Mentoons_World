import Logo from './png/speak easy page-18.jpg'
// import Logo from '.'

const SpeakEasyNav = () => {
  return (
    <>
          <nav>
                <img src={Logo} alt="logo" className="logo"/>
            <ul class="route_list">
                <li><a href="/">Home</a></li>
                <li><a href="/comics">COMICS</a></li>
                <li><a href="/join">JOIN US</a></li>
            </ul>
        </nav>
    </>
  )
}

export default SpeakEasyNav
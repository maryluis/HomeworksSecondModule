import './App.css';
import './style/black.css';
import './style/brends.css';
import './style/footer.css';
import './style/portfolio.css';
import './style/second_table.css';
import './style/seo.css';
import './style/services.css';

import logo from './images/logo.svg';
import arrow from './images/arrow.svg';
import arrow2 from './images/arrow2.svg';
import notches from './images/notches.svg';
import brends1 from './images/brends/1.png';
import brends2 from './images/brends/2.png';
import brends3 from './images/brends/3.png';
import brends4 from './images/brends/4.png';
import portfolio1 from './images/portfolio/1.png';
import portfolio2 from './images/portfolio/2.png';
import portfolio3 from './images/portfolio/3.png';
import services1 from './images/table1/1.png';
import services2 from './images/table1/2.png';
import services3 from './images/table1/3.png';
import services4 from './images/table1/4.png';
import services5 from './images/table1/5.png';
import services6 from './images/table1/6.png';
import services7 from './images/table1/7.png';
import chat from './images/chat.svg';
import fb from './images/footer/fb.svg';
import i from './images/footer/in.svg';

const Nav = () =>
<div className="nav">
  <a href="">Services</a>
  <a href="">Portfolio</a>
  <a href="">About</a>
  <a href="">Contact</a>
</div>
const Tittle = ({tittle}) =>
  <div className="main_sections_tittle">
    <img src={notches} alt="" />
    <span>{tittle}</span>
  </div>
const Services = ({imgUrl, tittle, description}) =>
  <a href="">
    <div className="table-cell">
       <img className="table_image" src={imgUrl} alt="" />
          <div className="table_icon">
            <h3>{tittle} </h3>
              <div className="about">{description}
              </div>
              <div className="learn_more">
                <span className="learn_text">Learn More
                </span>
                <img src={arrow2} alt="" />
              </div>
              <div className="underline_big">
                <div className="underline_small">
                </div>
              </div>
          </div>
      </div>
    </a>
const Portfolio = ({imgUrl}) =>
  <div className="portfolio_content">
    <div className="portfolio_content_main">
      <img src={imgUrl} alt="" />
        <div className="portfolio_content_main_text">
          <span className="landing">Landing Page</span>
          <span className="portfolio_content_name">
            Project Name
          </span>
        </div>
    </div>
      <div className="portfolio_content_bottom">
        <span>Создаем прибыльные интернет-магазины, маркетплейсы</span>
        <img src={arrow2} />
      </div>
  </div>
  const Second_table = ({how_many, What}) =>
    <div className="table-cell">
      <div className="left"> {how_many}</div>
        <div className="right">
          <span className="table_right_top">{What}</span>
          <span className="table_right_bottom">Создаем прибыльные интернет-магазины, маркетплейсы</span>
        </div>
    </div>
const App = () =>
<body>
<header>
    <div className="top">
        <div className="header_left">
            <div className="logo">
                <img  className="logotipe" src={logo} alt="logo" />
            </div>
        </div>
        <div className="header_left_nav">
            <Nav/>
            <div className="little_line"></div>
            <div className="discus">
                <a href="">Discus Your Idea</a>
            </div>
        </div>
        <div className="header_right">
            <div className="mail">
                <a href="">hello@digitfactor.com</a>
            </div>
            <div className="menu">
                <div className="menu_ordinary">
                    <a href="">Menu</a>
                </div>
                <div className="burger-menu">
                    <a href="">
                        <div></div>
                        <div></div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</header>

<main>
    <div className="header_background_image">
        <div className="header_center">
            <div className="header_center_input">
                <div className="welcome">
                    <div className="notches">
                        <img src={notches} alt="" />
                    </div>
                    <span>Welcome to Digit Factor</span>
                </div>
                <div className="tittle">Creative Web Production from Ukraine</div>
                <div className="header_center_bottom">
                    <a className= "button" href="">
                        <span className="text">Discus Your Idea</span>
                        <span className="after"><span>Discus Your Idea</span></span>
                    </a>
                    <img src="./images/arrow2.svg" alt="" />
                </div>
            </div>
        </div>
        <div className="header_bottom">
                <a href="#services" className="header_bottom_left">
                    <span className="scroll">Scroll down</span>
                    <img src={arrow} alt="arrow" />
                </a>
                <div className="header_bottom_right">
                    <div className="small_circle">
                        <img src={chat} alt="" />
                    </div>
                </div>

        </div>
    </div>
    <div className="main_sections">
        <div className="services" id="services">
            <div className="main_sections_tittle">
                <Tittle tittle="Services" />
            </div>
            <div className="table">
                <div className="table-row">
                  <Services imgUrl={services1} tittle="Engineering Service" description="Software Development / Software Testing / Solutions Architecture / Business Analysis / Operations Support " />
                  <Services imgUrl={services2} tittle="Internet of Things" description="Intelligent Mobility / Predictive Maintenance / Smart Manufacturing "/>
                </div>
                <div className="table-row">
                  <Services imgUrl={services3} tittle="Extended Reality XR" description="VR / MR / AR" />
                  <Services imgUrl={services4} tittle="AL & ML " description="Artificial Intelligence / Intelligent Automation / Advanced Analytics" />
                </div>
                <div className="table-row">
                <Services imgUrl={services5} tittle="Big data & Analytics " description="BI & Augmented Analytics / Enterprise Data Platforms / Data Strategy and Governance " />
                <Services imgUrl={services6} tittle="Blockchain" description="Создаем прибыльные интернет-магазины, маркетплейсы и агрегаторы" />
                </div>
                <div className="table-row">
                <Services imgUrl={services7} tittle="Game Art Production" description="Concept art, UI, illustration / 3D models and environments / VXT and animations " />
                    <a className="services_last">
                        <div className="table-cell">
                        </div>
                    </a>
                </div>
            </div>
        </div>
        <div className="portfolio">
            <div className="portfolio_top">
              <Tittle tittle="Portfolio" />
                <span className="portfolio_top_description">Здесь будет какой-то текст который расскажет о услугах</span>
            </div>
            <div className="portfolio_nav">
              <Portfolio imgUrl={portfolio1} />
              <Portfolio imgUrl={portfolio2} />
              <Portfolio imgUrl={portfolio3} />
            </div>
            <a  className="all_progects" href="">
                <span>All progects</span>
            </a>
        </div>
        <div className="second_table">
            <div className="table-row">
              <Second_table how_many="2+" What="Years" />
              <Second_table how_many="40+" What="Progect" />
            </div>
            <div className="table-row">
              <Second_table how_many="10+" What="Experts" />
              <Second_table how_many="40+" What="Progect" />
            </div>
        </div>
        <div className="brends">
            <div className="portfolio_top">
              <Tittle tittle="Clients" />
                <span className="portfolio_top_description">Здесь будет какой-то текст который расскажет о услугах</span>
            </div>
            <div className="brends_picture">
                <div className="brends_logo"><img src={brends1} /></div>
                <div className="brends_logo"><img src={brends2} /></div>
                <div className="brends_logo"><img src={brends3} /></div>
                <div className="brends_logo"><img src={brends4} /></div>
            </div>
        </div>
        <div className="seo">
            <h4>Seo text</h4>
            <span className="about">
                is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </span>
            <a href="" className="seo_bottom">
                <span>Read more</span>
                <img src="./images/seo/Path.png" alt="" />
            </a>
        </div>
    </div>
</main>
<footer>
    <div className="footer_input">
        <div className="logo">
            <img  className="logotipe" src={logo} alt="logo" />
        </div>
        <span className="guarantee">© 2019 Creative Web Production from Ukraine. Digit Factor. All rights reserved</span>
        <div className="post">
            <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.72764 4.31536C1.95534 4.47441 2.6417 4.9468 3.78677 5.73229C4.93187 6.51777 5.80909 7.12257 6.41848 7.54673C6.48543 7.59322 6.62767 7.69429 6.84527 7.85007C7.0629 8.00596 7.24374 8.13192 7.38763 8.22801C7.53163 8.32406 7.70571 8.43182 7.91005 8.5511C8.11431 8.67028 8.30686 8.75992 8.48766 8.81927C8.6685 8.8791 8.83589 8.90874 8.98989 8.90874H8.99998H9.01011C9.16411 8.90874 9.33157 8.87906 9.51241 8.81927C9.69314 8.75992 9.88586 8.67017 10.09 8.5511C10.2941 8.43168 10.4682 8.32403 10.6122 8.22801C10.7562 8.13192 10.9369 8.00596 11.1546 7.85007C11.3722 7.69415 11.5146 7.59322 11.5816 7.54673C12.1975 7.12257 13.7646 6.04534 16.2824 4.31515C16.7712 3.97722 17.1796 3.56947 17.5077 3.09217C17.836 2.61508 18 2.11458 18 1.59096C18 1.15339 17.8408 0.778832 17.5227 0.467306C17.2046 0.155711 16.8279 0 16.3928 0H1.60707C1.09148 0 0.694701 0.172323 0.4168 0.516969C0.138933 0.861685 0 1.29256 0 1.80957C0 2.22718 0.184212 2.67972 0.552461 3.16691C0.920675 3.65413 1.31253 4.03699 1.72764 4.31536ZM16.9954 5.37918C14.7992 6.85065 13.1316 7.99422 11.9933 8.80965C11.6116 9.08795 11.302 9.3052 11.0642 9.46088C10.8264 9.61666 10.5102 9.77575 10.115 9.93808C9.71998 10.1006 9.35184 10.1817 9.01026 10.1817H9.00002H8.98992C8.64841 10.1817 8.28006 10.1006 7.88503 9.93808C7.49001 9.77575 7.17355 9.61666 6.93583 9.46088C6.69817 9.3052 6.38843 9.08795 6.00678 8.80965C5.10271 8.15345 3.43868 7.0098 1.01461 5.37918C0.632817 5.12745 0.294648 4.83891 0 4.51415V12.4089C0 12.8466 0.157298 13.221 0.47207 13.5326C0.786772 13.8442 1.16519 14 1.60718 14H16.3929C16.8348 14 17.2132 13.8442 17.5279 13.5326C17.8428 13.2209 18 12.8467 18 12.4089V4.51415C17.712 4.83219 17.3773 5.12073 16.9954 5.37918Z" fill="white"/>
            </svg>
            <a href="">contact@digitfactor.com</a>
        </div>
        <div className="fb">
            <a href="">
                <img src={fb} alt="" />
            </a>
            <a href="">
                <img src={i} alt="" />
            </a>                     
        </div>
    </div>
</footer>
</body>
  


export default App;

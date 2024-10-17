// import { SiJrgroup } from "react-icons/si";
import './Style/Home.css'
import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact } from 'react-icons/fa'; // استيراد الأيقونات
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // استيراد ملفات التنسيق الافتراضية
import firstimg from './firstimg.jpeg'
import secondimg from './secimg.jpeg'
import three from './secondimg.png'
import { FaLinkedin, FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { Helmet } from 'react-helmet';


export default function Home(){
    const navigate = useNavigate();
    const handleTemplatsClick = () => {
        navigate('/Templats');
    }
    const handleInterClick = () => {
        navigate('/Interactive');
    }
    const handleBooksClick= () => {
        navigate('/Books');
    }

    return (
        <div>

        <Helmet>
            <title>eCode JR</title>
            <meta name="description" content="Code JR is a platform dedicated to providing free, ready-to-use, interactive web templates designed to meet the
            needs of web developers at all levels. We offer a wide range of customizable templates that help you kickstart your projects quickly and efficiently.
            With easy-to-use, pre-built interactive codes, you can save time and effort in developing attractive and responsive user interfaces. Whether you're a
            beginner or an experienced professional, Code JR provides the tools you need to create modern and innovative websites without the hassle. We also offer
            a variety of free resources to enhance your development experience. Enjoy a smooth user experience and take advantage of the available ready-made
            templates and interactive codes to speed up your projects today."/>
            <meta name="keywords" content="free templates, interactive codes, web development, responsive templates, code snippets, frontend, free code, html css javascript react" />
            <link rel="canonical" href="https://www.ecodejr.com" />
        </Helmet>


        <div className="homeCom">




        <Carousel
        showThumbs={false} // إخفاء الصور المصغرة
        infiniteLoop // يجعل الشرائح تدور بشكل لا نهائي
        autoPlay // لتشغيل العرض تلقائياً
        showStatus={false} // إخفاء الحالة (عدد الشرائح)
        interval={4000} // تغيير الصور كل -- ثوانٍ
        transitionTime={700} // مدة الانتقال بين الصور
        >
        <div>
            <img src={firstimg} alt=""/>
        </div>
        <div>
            <img src={secondimg} alt=""/>
        </div>
        <div>
            <img src={three}  alt=""/>
        </div>
    </Carousel>






        </div>
            
            <div className="tem">
                <h1 className="h1Home">Templates</h1>
                <p className="pHome">save time with our free responsive  Templates</p>


                <div className="Tbox">
                    <div className="container">

                        <div className="left-box">
                            <div className="imgT">
                                <button
                                onClick={handleTemplatsClick}
                                className="btn">
                                    <div>Show Now</div>
                                </button>
                            </div>
                        </div>

                        <div className="right-box">
                            <div>Get templates designed to save time and effort, easy to customize, and suitable for any project</div>
                        </div>

                    </div>
                </div>

            </div>

<br/>

            <div className="tem">
                <h1 className="h1Home">Interactive Codes</h1>
                <p className="pHome">You can now easily use, experiment and change any interactive code</p>


                <div className="Tbox">
                    <div className="container">

                        <div className="left-box">
                            <div className="imgIC">
                                <button
                                onClick={handleInterClick}
                                className="btn">
                                    <div>Get Started</div>
                                </button>
                            </div>
                        </div>

                        <div className="right-box">
                            <div>Discover a wide range of interactive codes, And use it now in your project</div>
                        </div>

                    </div>
                </div>

<br/>
<div className="tem">
                <h1 className="h1Home">Books</h1>
                <p className="pHome">The most important books that any web developer may need</p>


                <div className="Tbox">
                    <div className="container">

                        <div className="left-box">
                            <div className="imgB">
                                <button
                                onClick={handleBooksClick}
                                className="btn">
                                    <div>Read Now</div>
                                </button>
                            </div>
                        </div>

                        <div className="right-box">
                            <div>Remember that it is important to review your information from basic and official books</div>
                        </div>

                    </div>
                </div>

            </div>

            </div>

            <div className="leftSection">
                {/* أيقونات HTML, CSS, JS, React */}
                <div className="iconsContainer">
                    <FaHtml5 size={80} color="#E44D26" />
                    <FaCss3Alt size={80} color="#1572B6" />
                    <FaJsSquare size={80} color="#F7DF1E" />
                    <FaReact size={80} color="#61DAFB" />
                </div>
            </div>


            <div className="why-codejr-container">
                <h1 className="why-codejr-title">Why Code JR?</h1>
                <div className="reasons-container">
                    <div className="reason-box">
                    <h2>Abundant Templates</h2>
                    <p>Code JR offers a vast collection of essential templates for front-end development, making it easy to kickstart your projects.</p>
                        </div>
                        <div className="reason-box">
                            <h2>Free and User-Friendly</h2>
                            <p>The majority of resources on Code JR are free and easy to navigate, ensuring a smooth experience for developers of all levels.</p>
                        </div>
                        <div className="reason-box">
                            <h2>Reliable Resource</h2>
                            <p>Code JR is a trusted platform, serving as an important hub for front-end developers looking for quality resources.</p>
                        </div>
                </div>
            </div>

            <br/><br/>


            <footer className="footer">
                <div className="c">
                ©2024 Code JR
                </div>
                <div className="icons-social">
                    <a href="https://www.linkedin.com/in/ashraf-nael-3a801a331/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="is"/>
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=100077751202379"  target="_blank" rel="noopener noreferrer">
                    <FaFacebookSquare className="is"/>
                    </a>
                    <a href="https://www.instagram.com/codej_r/"  target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="is"/>
                    </a>
                </div>
            </footer>






        </div>
    )
}
import React, { useRef, useEffect } from 'react';
import { IoMenu, IoClose } from "react-icons/io5";
import './Style/Sidebar.css';
import { FaLinkedin, FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
    const sidebarRef = useRef();
    const menuIconRef = useRef(); // مرجع لأيقونة الـ menu

    const handleClickOutside = (event) => {
        // تحقق مما إذا كان النقر خارج الـ sidebar أو الـ menu-icon
        if (
            sidebarRef.current &&
            !sidebarRef.current.contains(event.target) &&
            menuIconRef.current &&
            !menuIconRef.current.contains(event.target) &&
            isSidebarOpen
        ) {
            toggleSidebar(); // أغلق الـ sidebar
        }
    };

    useEffect(() => {
        // أضف مستمع للنقر في المستند
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            // أزل المستمع عند فك التركيب
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isSidebarOpen]); // أضف isSidebarOpen كاعتماد

    return (
        <>
            {/* زر فتح/إغلاق السايد بار */}
            <div ref={menuIconRef} className="menu-icon" onClick={toggleSidebar}>
                {/* الأيقونة تتغير بناءً على حالة الـ sidebar */}
                {isSidebarOpen ? <IoClose /> : <IoMenu />}
            </div>

            {/* السايد بار */}
            <div ref={sidebarRef} className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
                <ul>
                    <Link to='/'><li>Home</li></Link>
                    <Link to='/Templats'><li>Templates</li></Link>
                    <Link to='/Interactive'><li>Interactive codes</li></Link>
                    <Link to='/Books'><li>Books</li></Link>
                </ul>
                <div className="social-links">
                <a href="https://www.linkedin.com/in/ashraf-nael-3a801a331/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=100077751202379"  target="_blank" rel="noopener noreferrer">
                    <FaFacebookSquare/>
                    </a>
                    <a href="https://www.instagram.com/codej_r/"  target="_blank" rel="noopener noreferrer">
                    <FaInstagram/>
                    </a>
                </div>
            </div>
        </>
    );
};

export default Sidebar;

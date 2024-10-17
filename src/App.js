import React, { useEffect, useRef, useState } from 'react';
import { IoClose, IoSearch } from "react-icons/io5";
import { SiJrgroup } from "react-icons/si";
import { Route, BrowserRouter as Router, Routes, useLocation, Link } from 'react-router-dom'; // إضافة Link هنا
import Sidebar from './Sidebar';
import './Style/App.css';
import Back from './Back';
import Home from './Home';
import Interactive from './Interactive';
import Newbtn from './InterBoxes/Newbtn';
import Templats from './Templats';
import Tomato from './TemBoxes/Tomato';
import TapBar from './InterBoxes/TapBar';
import HoverBtn from './InterBoxes/HoverBtn';
import Books from './Books';
import Wlogin from './InterBoxes/Wlogin';
import TomLogin from './InterBoxes/TomLogin';
import Logintem from './TemBoxes/Logintem';




function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const toggleSearchBar = () => {
    setIsSearchOpen(!isSearchOpen);
  };



  return (
    <Router>
      <Header isSearchOpen={isSearchOpen} setIsSearchOpen={setIsSearchOpen} searchTerm={searchTerm} handleSearchChange={handleSearchChange} />
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      <Routes>


        <Route path='/' element={<Home />} />
        <Route path='/TemBoxes/Tomato' element={<Tomato name={'Tomato'} Image={require('./TemBoxes/tomato.png')}/>} />
        <Route path='/TemBoxes/Logintem' element={<Logintem name={'Login T'} Image={require('./TemBoxes/logintem.png')}/>} />



        <Route path='/InterBoxes/TapBar' element={<TapBar />} />
        <Route path='/InterBoxes/Newbtn' element={<Newbtn />} />
        <Route path='/InterBoxes/HoverBtn' element={<HoverBtn />} />
        <Route path='/InterBoxes/Wlogin' element={<Wlogin />} />
        <Route path='/InterBoxes/TomLogin' element={<TomLogin />} />

        <Route path='/Templats' element={<Templats searchTerm={searchTerm} />} />
        <Route path='/Interactive' element={<Interactive searchTerm={searchTerm} />} />

        <Route path='/Books' element={<Books />} />


      </Routes>

      <Back />
    </Router>
  );
}

const Header = ({ isSearchOpen, setIsSearchOpen, searchTerm, handleSearchChange }) => {
  const location = useLocation();
  const searchInputRef = useRef(null);

  useEffect(() => {
    if (location.pathname === '/') {
      setIsSearchOpen(false);
    }
  }, [location, setIsSearchOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchInputRef.current &&
        !searchInputRef.current.contains(event.target) &&
        !event.target.closest('.searchBtn')
      ) {
        setIsSearchOpen(false); // إغلاق حقل البحث عند الضغط خارجه
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [searchInputRef]);

  const handleSearchButtonClick = () => {
    setIsSearchOpen(true); // اجعل حقل البحث مفتوحًا
  };

  return (
    <header className='header'>
      <div className='inHeader'>
        <div>
          <SiJrgroup className='logo' />
        </div>

        {(location.pathname === '/Templats' || location.pathname === '/Interactive') && (
          <div className='search-container'>
            {isSearchOpen ? (
              <>
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                  className="searchBar"
                />
              </>
            ) : (
              <button className='searchBtn' onClick={handleSearchButtonClick}>
                <IoSearch />
              </button>
            )}
          </div>
        )}
        
      </div>
    </header>
  );
};


export default App;

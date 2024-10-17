import { useNavigate, useLocation } from 'react-router-dom';
import { IoArrowBackCircle } from "react-icons/io5";
import './Style/App.css'

function Back() {
const navigate = useNavigate();
const location = useLocation();

  // تأكد أنك لست في الصفحة الرئيسية
if (location.pathname === '/') {
    return null; // لا تعرض الزر في الصفحة الرئيسية
}

return (
    <button
    className='backbtn'
    onClick={() => navigate(-1)}>
    <IoArrowBackCircle />
    </button>
);
}



export default Back;

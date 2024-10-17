import './Style/inside.css';
import { Link } from 'react-router-dom';



export default function Templats({ searchTerm }) {
    const boxes = [
        { name: 'Tomato', image: require('./TemBoxes/tomato.png'),Link: '/TemBoxes/Tomato' },
        { name: 'Login TR', image: require('./TemBoxes/logintem.png'),Link: '/TemBoxes/Logintem' },

    ];

    // تصفية الصناديق بناءً على مصطلح البحث
    const filteredBoxes = boxes.filter(box =>
        box.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <h1 className='subject'>Templates</h1>
            <div className='templatsPage'>
                <div className='boxOnTem'>
                    {filteredBoxes.map((box, index) => (
                        <Link to={box.Link} key={index}>
                        <Box name={box.name} image={box.image} />
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
}

// مكون Box
function Box({ name, image }) {
    return (
        <div className='box'>
            <div className='image' style={{ backgroundImage: `url(${image})` }}></div>
            <h5>{name}</h5>
        </div>
    );
}

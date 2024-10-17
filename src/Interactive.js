import React from 'react';
import { Link } from 'react-router-dom';
import './Style/inside.css';

export default function Interactive({ searchTerm }) {
    const boxes = [
        { name: 'New btn', image: require('./InterBoxes/newbtn.png'), link: '/InterBoxes/Newbtn' },
        { name: 'Tap Bar', image: require('./InterBoxes/tapbar.png'), link: '/InterBoxes/TapBar' },
        { name: 'Hover btn', image: require('./InterBoxes/hoverbtn.png'), link: '/InterBoxes/HoverBtn' },
        { name: 'Login S', image: require('./InterBoxes/wlogin.png'), link: '/InterBoxes/Wlogin' },
        { name: 'Login T', image: require('./InterBoxes/tomlogin.png'), link: '/InterBoxes/TomLogin' },
    ];

    // تصفية الصناديق بناءً على مصطلح البحث
    const filteredBoxes = boxes.filter(box =>
        box.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <h1 className='subject'>Interactive Code</h1>

            <div className='InterPage'>
                <div className='boxOnTem'>
                    {filteredBoxes.length > 0 ? (
                        filteredBoxes.map((box, index) => (
                            <div key={index}>
                                <Link to={box.link}>
                                    <Box
                                        name={box.name}
                                        image={box.image}
                                    />
                                </Link>
                            </div>
                        ))
                    ) : (
                        <h2> </h2>
                    )}
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

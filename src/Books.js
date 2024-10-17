import './Style/inside.css';
import { Link } from 'react-router-dom';

export default function Books({ searchTerm = '' }) {
    const boxes = [
        { name: 'HTML', image: require('./TheBooks/hhhtml.png'), pdf: require('./TheBooks/html.pdf') },
        { name: 'JavaScript', image: require('./TheBooks/jjjs.png'), pdf: require('./TheBooks/js.pdf') },
        { name: 'CSS', image: require('./TheBooks/cccss.png'), pdf: require('./TheBooks/css.pdf') },
        { name: 'GIT', image: require('./TheBooks/gggit.png'), pdf: require('./TheBooks/git.pdf') },
        { name: 'TextBook', image: require('./TheBooks/ttte.png'), pdf: require('./TheBooks/textbook.pdf') },
        
    ];

    // تصفية الصناديق بناءً على مصطلح البحث
    const filteredBoxes = boxes.filter(box =>
        box.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <h1 className='subject'>Books</h1>
            <div className='templatsPage'>
                <div className='boxOnTem'>
                    {filteredBoxes.map((box, index) => (
                        <a href={box.pdf} key={index} target="_blank" rel="noopener noreferrer" >
                            <Box name={box.name} image={box.image} />
                        </a>
                    ))}
                </div>
            </div>
        </>
    );
}

// مكون Box
function Box({ name, image }) {
    return (
        <div className='boxBooks'>
            <div className='image' style={{ backgroundImage: `url(${image})` }}></div>
            <h5>{name}</h5>
        </div>
    );
}

import React, { useState } from 'react';
import './OnIcBox.css';


    const TomLogin = () => {
        const [htmlCode, setHtmlCode] = useState(`
        <div class="big-box-login">
        <input class="user-inbox" type="text" placeholder="USERNAME" >
        <input class="pass-inbox" type="password" placeholder="PASSWORD">
        <input class="btn-inbox" value="Log in" type="button">
        <input class="btn-inbox-dont" value=" Don't have an account?" type="button">
        </div>>
        `);
        const [cssCode, setCssCode] = useState(`
    body{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background-size: cover;
    }
    html, body{
        height: 100%;
        margin: 0;
        overflow: hidden;
    }

    .big-box-login{
        width: 270px;
        height: 280px;
        background: rgba(255, 99, 71, 0.806);
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 20px;
        z-index: 99;
        box-shadow: 6px 11px 16px rgba(223, 172, 163, 0.13);
        transition: .4s;
    }
    .user-inbox{
        width: 240px;
        height: 50px;
        background: white;
        position: absolute;
        top: 10%;
        left: 5%;
        border: none;
        border-radius: 20px;
        box-shadow: 0 11px 6px rgba(12, 12, 12, 0.467);
        text-align: center;
        font-size: 22px;
        /* transition: .3s; */
    }
    .user-inbox:focus {
        outline: none;
        /* border-color: black; */
    }
    .pass-inbox{
        width: 240px;
        height: 50px;
        background: white;
        position: absolute;
        top: 35%;
        left: 5%;
        border: none;
        border-radius: 20px;
        box-shadow: 0 11px 6px rgba(12, 12, 12, 0.467);
        text-align: center;
        font-size: 22px;
        /* transition: .3s; */
    }
    .pass-inbox:focus{
        outline: none;
    }
    .btn-inbox{
        width: 180px;
        height: 40px;
        background: white;
        position: absolute;
        top: 59%;
        left: 18%;
        border: none;
        border-radius: 20px;
        box-shadow: 0 11px 6px rgba(12, 12, 12, 0.467);
        text-align: center;
        font-size: 24px;
        font-weight: bold;
        color: rgba(0, 0, 0, 0.861);
        cursor: pointer;
        transition: .3s ease;
    }
    .btn-inbox:hover{
        cursor: pointer;
        transform: scale(1.08);
        transform-origin: center;
    }
    .btn-inbox-dont{
        width: 155px;
        height: 30px;
        background: white;
        position: absolute;
        top: 79%;
        left: 23%;
        border: none;
        border-radius: 20px;
        box-shadow: 0 11px 6px rgba(12, 12, 12, 0.467);
        text-align: center;
        font-size: 12px;
        /* font-weight: bold; */
        color: rgba(0, 0, 0, 0.861);
        cursor: pointer;
        transition: .3s ease;
    }
    .btn-inbox-dont:hover{
        cursor: pointer;
        transform: scale(1.08);
        transform-origin: center;
    }
        `);

    // لنسخ الكود
        const handleCopyCode = () => {
        const fullCode = `
            <html>
                <style>${cssCode}</style>
                <body>${htmlCode}</body>
            </html>
        `;
        navigator.clipboard.writeText(fullCode);
        // alert('copied');
    };

    // لتنزيل الكود الكامل
    const handleDownloadCode = () => {
        const fullCode = `
        <html>
            <style>${cssCode}</style>
            <body>${htmlCode}</body>
        </html>
        `;
        const blob = new Blob([fullCode], { type: 'text/html' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'full_code.html';
        link.click();
    };

    // لعرض النتيجة
    const renderResult = () => {
        const srcDoc = `
        <html>
            <style>${cssCode}</style>
            <body>${htmlCode}</body>
        </html>
        `;
        return srcDoc;
    };

    return (
        <div className='all'>
        

        {/* صناديق الأكواد */}
        <div className='aall'>
            <div style={{ flex: 1 }}>
            <h3 className='hthree'>HTML</h3>
            <textarea
                value={htmlCode}
                onChange={(e) => setHtmlCode(e.target.value)} className='textarea'
            />
            </div>

            <div style={{ flex: 1 }}>
            <h3 className='hthree'>CSS</h3>
            <textarea
                value={cssCode}
                onChange={(e) => setCssCode(e.target.value)}
                style={{
                width: '100%',
                height: '150px',
                padding: '10px',
                borderRadius: '8px',
                border: '1px solid #ccc',
                fontFamily: 'monospace',
                }}
            />
            </div>
        </div>

        {/* أزرار نسخ وتنزيل الكود */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
            <button onClick={handleCopyCode} className='btnOfIc'>
            Copy
            </button>
            <button onClick={handleDownloadCode}  className='btnOfIc'>
            download
            </button>
        </div>

        {/* عرض النتيجة */}
        <div style={{ marginBottom: '40px' }}>
            <h3 className='hthree'>Result</h3>
            <iframe
            title="output"
            srcDoc={renderResult()}
            className='result'
            />
        </div>
        </div>
    );
    };

export default TomLogin;

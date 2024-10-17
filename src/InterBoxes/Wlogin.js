import React, { useState } from 'react';
import './OnIcBox.css';


    const Wlogin = () => {
        const [htmlCode, setHtmlCode] = useState(`
    <div class="login-box">
    <h2>Login</h2>
    <form>
        <div class="user-box">
        <input type="text" name="" required="">
        <label>Username</label>
        </div>
        <div class="user-box">
        <input type="password" name="" required="">
        <label>Password</label>
        </div>
    </form>
    </div>
        `);
        const [cssCode, setCssCode] = useState(`
    html {
    height: 100%;
    background: #fff;
    }

    .login-box {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 400px;
    padding: 40px;
    transform: translate(-50%, -50%);
    background: rgba(0,0,0,.5);
    box-sizing: border-box;
    box-shadow: 0 15px 25px rgba(0,0,0,.6);
    border-radius: 10px;
    }

    .login-box h2 {
    margin: 0 0 30px;
    padding: 0;
    color: #fff;
    text-align: center;
    }

    .login-box .user-box {
    position: relative;
    }

    .login-box .user-box input {
    width: 100%;
    padding: 10px 0;
    font-size: 16px;
    color: #fff;
    margin-bottom: 30px;
    border: none;
    border-bottom: 1px solid #fff;
    outline: none;
    background: transparent;
    }
    .login-box .user-box label {
    position: absolute;
    top:0;
    left: 0;
    padding: 10px 0;
    font-size: 16px;
    color: #fff;
    pointer-events: none;
    transition: .5s;
    }

    .login-box .user-box input:focus ~ label,
    .login-box .user-box input:valid ~ label {
    top: -20px;
    left: 0;
    color: #03e9f4;
    font-size: 12px;
    }

    .login-box form a {
    position: relative;
    display: inline-block;
    padding: 10px 20px;
    color: #03e9f4;
    font-size: 16px;
    text-decoration: none;
    text-transform: uppercase;
    overflow: hidden;
    transition: .5s;
    margin-top: 40px;
    letter-spacing: 4px
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

export default Wlogin;

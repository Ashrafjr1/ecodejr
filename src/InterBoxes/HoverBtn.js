import React, { useState } from 'react';
import './OnIcBox.css';


    const HoverBtn = () => {
        const [htmlCode, setHtmlCode] = useState(`
<div class="wrapper">
  <div class="outer">
    <button>Hover Me</button>
    <span></span>
    <span></span>
  </div>
</div>
        `);
        const [cssCode, setCssCode] = useState(`
body {
  background-color: black;
  display: flex;
  height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;
}

.outer {
  height: 60px;
  width: 200px;
  border-radius: 40px;
  background: linear-gradient(#14ffe9, #ffeb3b, #ff00e0);
  position: relative;
}

button,
span {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 50px;
  width: 190px;
  border-radius: 30px;
  border: none;
}

button {
  background-color: black;
  color: white;
  z-index: 10;
  transition: all 0.5s ease;
}

button:focus {
  border: none;
  outline: none;
}

span {
  background: inherit;
}

.outer span:nth-child(1) {
  filter: blur(7px);
}
.outer span:nth-child(2) {
  filter: blur(14px);
}
.outer:hover {
  animation: glow 1s linear infinite;
}

.outer:hover button {
  letter-spacing: 2px;
}

@keyframes glow {
  0% {
    filter: hue-rotate(10deg);
  }

  100% {
    filter: hue-rotate(360deg);
  }
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

export default HoverBtn;

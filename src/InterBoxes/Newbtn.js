import React, { useState } from 'react';
import './OnIcBox.css';


    const CodeEditor = () => {
        const [htmlCode, setHtmlCode] = useState(`
            <div class="container">
            <button class="btn" role="button" popovertarget="btn-popover">
            <span class="btn-inner">
                <span class="btn-content">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 30 30">
                    <path fill="currentColor" fill-rule="evenodd" d="M1.816 2.925C0 5.138 0 8.425 0 15c0 6.575 0 9.862 1.816 12.075.332.405.704.777 1.109 1.11C5.138 30 8.425 30 15 30c6.575 0 9.862 0 12.075-1.816a8.005 8.005 0 0 0 1.11-1.109C30 24.862 30 21.575 30 15c0-6.575 0-9.862-1.816-12.075a8.002 8.002 0 0 0-1.109-1.11C24.862 0 21.575 0 15 0 8.425 0 5.138 0 2.925 1.816a8 8 0 0 0-1.11 1.109ZM16.25 6a1.25 1.25 0 1 0-2.5 0v7.75H6a1.25 1.25 0 1 0 0 2.5h7.75V24a1.25 1.25 0 1 0 2.5 0v-7.75H24a1.25 1.25 0 1 0 0-2.5h-7.75V6Z" clip-rule="evenodd" />
                </svg>
        
                <span class="btn-label">New</span>
        
                </span>
        
                <span class="btn-caret">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" class="size-6" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
                </span>
            </span>
            </button>
        
            <div class="positioned-notice" id="btn-popover" popover>
            <div class="inner-notice">
                <ul>

                <li>test</li>
                </ul>
            </div>
            </div>
        
        </div>
        `);
        const [cssCode, setCssCode] = useState(`
        /* Root variables */
        :root {
            --scene-background: #101217;
            --main-hue: 259deg;
            --btn-radius: 14px;
            --padding: 8px;
        }
        
        *,*:before,*:after {
            box-sizing: border-box;
        }
        
        
        [popovertarget="btn-popover"] {
            anchor-name: --anchor-el;
        }
        
        /* Reset and base styles */
        html,
        body {
            padding: 0;
            margin: 0;
            height: 100%;
            width: 100%;
            overflow: hidden;
        }
        
        body {
            background: var(--scene-background);
            display: grid;
            place-items: center;
            font-family: sans-serif;
        }
        
        /* Custom properties */
        @property --glow {
            syntax: "<percentage>";
            inherits: false;
            initial-value: 60%;
        }
        
        @property --tsy {
            syntax: "<length>";
            inherits: false;
            initial-value: 0px;
        }
        
        @property --light {
            syntax: "<percentage>";
            inherits: false;
            initial-value: 75%;
        }
        
        @property --inner-light {
            syntax: "<percentage>";
            inherits: false;
            initial-value: 54%;
        }
        
        @property --icon-rotation {
            syntax: "<angle>";
            inherits: false;
            initial-value: 0deg;
        }
        
        /* Button styles */
        .container {
            --btn-inner-background: hsl(var(--main-hue) 89% var(--inner-light));
        }
        button {
            --btn-background: linear-gradient(
            to bottom right,
            hsl(var(--main-hue) 100% var(--light)),
            hsl(var(--main-hue) 100% 69%),
            hsl(var(--main-hue) 100% var(--light))
            );
            --btn-shadow: color-mix(
            in hsl,
            hsl(var(--main-hue) 96% var(--glow)),
            black 60%
            );
            --icon-color: color-mix(
            in hsl,
            var(--btn-inner-background),
            color-mix(in hsl, blue, white 80%) 65%
            );
        
            anchor-name: --anchor-el;
            display: flex;
            border-radius: var(--btn-radius);
            border: 0;
            color: white;
            overflow: hidden;
            padding: 1px;
            background: var(--btn-background);
            box-shadow: 0 3px 5px black, 0 8px 24px var(--btn-shadow);
            cursor: pointer;
            -webkit-font-smoothing: antialiased;
            transform: translateY(var(--tsy));
        
            transition: --glow 0.2s ease, --tsy 0.2s ease, --light 0.2s ease,
            --icon-rotation 0.2s ease, box-shadow 0.2s ease;
        }
        
        button svg {
            color: var(--icon-color);
        }
        
        button .btn-inner {
            background: var(--btn-inner-background);
            height: 48px;
            border-radius: var(--btn-radius);
            display: flex;
            box-shadow: inset 0 0 12px hsl(var(--main-hue) 100% 65%);
        }
        
        button .btn-content {
            display: flex;
            align-items: center;
            padding-inline: 18px;
            font-size: 18px;
        }
        
        button .btn-content svg {
            width: 18px;
            margin-right: 10px;
        }
        
        button .btn-caret {
            display: flex;
            justify-content: center;
            align-items: center;
            border-left: 1px solid rgb(255 255 255 / 10%);
            width: 36px;
            height: 100%;
        }
        
        button .btn-caret svg {
            width: 18px;
            height: 18px;
            rotate: var(--icon-rotation);
            transition: rotate 0.2s ease;
        }
        
        button:hover {
            --glow: 80%;
            --light: 90%;
            --inner-light: 80%;
            box-shadow: 0 2px 2px black, 0 14px 32px var(--btn-shadow);
        }
        
        button:hover .btn-inner {
            background: hsl(var(--main-hue) 89% var(--inner-light));
        }
        
        button:active {
            --tsy: 2px;
            --glow: 70%;
            --light: 80%;
            --inner-light: 70%;
            box-shadow: 0 1px 1px black, 0 8px 16px var(--btn-shadow);
        }
        
        button:active .btn-caret svg,
        .container:has(:popover-open) .btn-caret svg {
            rotate: 180deg;
        }
        
        .positioned-notice {
            color: white;
            padding: 0;
            border: 1px solid hsl(var(--main-hue) 100% 69%);
            background: linear-gradient(
            to bottom right,
            hsl(var(--main-hue) 100% var(--light)),
            hsl(var(--main-hue) 100% 49%),
            hsl(var(--main-hue) 100% var(--light))
            );
            border-radius: var(--btn-radius);
        position: absolute;
            max-height: calc(anchor-size(block) * 2.5);
            /* max-width: 300px; */
            overflow: auto;
            width: max-content;
            margin: 0 0 0 var(--padding);
            text-align: center;
            position-anchor: --anchor-el;
            inset: auto;
            left: anchor(--anchor-el right);
            top: anchor(--anchor-el top);
            position-try-fallbacks: --bottom;
        }
        
        @position-try --bottom {
            margin: var(--padding) 0 0 0;
            
            left: anchor(--anchor-el left);
            top: anchor(--anchor-el bottom);
        }
        
        .positioned-notice a {
            color: inherit;
            text-decoration: none;
            border-bottom: 1px dashed white;
        }
        
        .positioned-notice .inner-notice {
            position: relative;
            overflow: hidden;
            border-radius: var(--btn-radius);
            background: var(--btn-inner-background);
            width: 300px;
        }
        
        .positioned-notice .inner-notice ul {
            margin: 0;
            padding: 0;
            display: flex;
            flex-direction: column;
        }
        
        .positioned-notice .inner-notice ul li {
            text-overflow: ellipsis;
            width: fit-content;
            overflow: hidden;
            white-space: nowrap;
            padding: 1em;
            border-bottom: 1px solid rgb(255 255 255 / 10%);
        }

        
        /* Popover animation */
        /* @starting-style {
            [popover]:popover-open {
            opacity: 0;
            transform: scale(0);
            filter: blur(12px)
            }
        } */
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

export default CodeEditor;

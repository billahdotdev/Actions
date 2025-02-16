import React, { useState, useEffect } from 'react';
import '../styles/Project2.css';

const LetsCode = () => {
    const [showCode, setShowCode] = useState(false);
    const [codeText] = useState(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f0f0f0;
        }
        header {
            background-color: #333;
            color: #fff;
            padding: 10px;
            text-align: center;
        }
        main {
            padding: 20px;
        }
    </style>
</head>
<body>
    <header>
        <h1>Welcome to My Website</h1>
    </header>
    <main>
        <p>This is a basic HTML and CSS boilerplate.</p>
    </main>
</body>
</html>`);

    const [codeIndex, setCodeIndex] = useState(0);
    const [typingInterval, setTypingInterval] = useState(null);

    const typeCode = () => {
        if (codeIndex < codeText.length) {
            setCodeIndex((prev) => prev + 1);
        } else {
            clearInterval(typingInterval);
        }
    };

    const handleToggle = () => {
        setShowCode(!showCode);
        if (!showCode) {
            setCodeIndex(0);
            const interval = setInterval(typeCode, 50);
            setTypingInterval(interval);
        } else {
            clearInterval(typingInterval);
        }
    };

    useEffect(() => {
        return () => {
            if (typingInterval) clearInterval(typingInterval);
        };
    }, [typingInterval]);

    return (
        <div className="lets-code-component-container">
            <button className="lets-code-toggle-button" onClick={handleToggle}>
                {showCode
                    ? '😀 Luckily, we are not in the 90s!'
                    : 'How were 90s Website codes written?'}
            </button>
            {showCode && (
                <div className="lets-code-code-area">
                    <span
                        className="lets-code-close-button"
                        onClick={handleToggle}
                        aria-label="Close code view"
                    >
                        ×
                    </span>
                    <pre>{codeText.substring(0, codeIndex)}</pre>
                </div>
            )}
        </div>
    );
};

export default LetsCode;

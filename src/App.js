import React, { useState } from 'react';

function App() {
    const [text, setText] = useState('');
    const [result, setResult] = useState('');

    const findFirstUniqueChar = (text) => {
        const words = text.split(' ');
        const charMap = new Map();

        for (let word of words) {
            for (let char of word) {
                if (charMap.has(char)) {
                    charMap.set(char, charMap.get(char) + 1);
                } else {
                    charMap.set(char, 1);
                }
            }
        }

        for (let [char, count] of charMap) {
            if (count === 1) {
                return char;
            }
        }

        return 'No unique character found';
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const result = findFirstUniqueChar(text);
        setResult(result);
    };

    return (
        <div>
            <h1>Unique Character Finder</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Text:
                    <input type="text" value={text} onChange={(event) => setText(event.target.value)} />
                </label>
                <button type="submit">Find Unique Character</button>
            </form>
            <p>Result: {result}</p>
        </div>
    );
}

export {App};






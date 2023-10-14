import React, { useState } from 'react';

function Button(props){
    const [count, setCount] = useState(0); 

    const incrementCount = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={incrementCount}>CLICK! 🚀</button>
        </div>
    );
}

export default Button;
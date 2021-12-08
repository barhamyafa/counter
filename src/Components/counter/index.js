/* General Couner Component with ability to pass initialCount and maxAllowed
   values from parent with getting them default values if not passing these values
    Also  ability to disable button with condition , eg: can't increase when the count
    arrive the max value
*/

import React, { useState } from "react";
import Button from '../Button/index';
import './style.css';

const Counter = ({ initialCount, maxAllowedCount }) => {
    // Set the initial count state to one
    // if not passing initial count property from parent

    const [count, setCount] = useState(initialCount);
    return (
        <div>
            <div className="counter-wrapper">
                <Button
                    handleClick={() => setCount(count - 1)}
                    isDisabled={count === initialCount}
                >
                    -
                </Button>
                <span className="counter-value">{count}</span>
                <Button
                    handleClick={() => setCount(count + 1)}
                    isDisabled={count === maxAllowedCount}
                >
                    +
                </Button>
            </div>
        </div>
    )
}

// Defule Values of Props if the client not passing them

Counter.defaultProps = {
    initialCount: 1,
    maxAllowedCount: 1000
}

export default Counter;
import React, { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0)

    return (
        <div style={{ flex: 1 }}>
            <div
                style={{
                    alignItems: "center",
                    justifyContent: "center",
                    padding: 60,
                    textAlign: "center"
                }}
            >
                <button
                    style={{
                        padding: 16,
                        backgroundColor: "orangered",
                        borderRadius: 10,
                    }}
                    onClick={() => setCount(count + 1)}>Click to increment</button>

                <button
                    style={{
                        padding: 16,
                        backgroundColor: "yellow",
                        borderRadius: 10,
                    }}
                    onClick={() => setCount(count - 1)}>Click to decrement</button>
                <p style={{ alignSelf: 'center' }}>{count}</p>
            </div>
        </div>
    )
}

export default Counter;
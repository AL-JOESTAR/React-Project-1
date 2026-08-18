import { useState } from "react"

export default function Test () {
    const [isOpen1, setIsOpen1] = useState(false)
    return (
        <>
        <h2>helo world</h2>

        <button onClick={() => setIsOpen1((open) => !open)}>
            {isOpen1 ? '-' : '+'}
        </button>
        </>
    )
}
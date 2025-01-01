import React from 'react'

function Button(props) {
    const { text, func } = props;

    return (
        <button onClick={func} className='px-8 py-4 mx-auto rounded-md border-2 border-blue-400 bg-gradient-slate-950 blueShadow duration-200'>
            <p>{text}</p>
        </button>
    )
}

export default Button
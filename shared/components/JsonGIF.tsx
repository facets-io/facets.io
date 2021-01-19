import React from 'react'
import Lottie from 'react-lottie';

export default function ({animationData, isStopped= false, isPaused= false, style= {
            borderRadius: "3rem",
            overflow:"hidden"
        },
        options = {
            loop: true,
            autoplay: true,
            rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice'
        }
    }}
) {
    const defaultOptions = {
        ...options, animationData
    };

    return <div style={style}>
        <Lottie options={defaultOptions}
                isStopped={isStopped}
                isPaused={isPaused}/>
    </div>

}
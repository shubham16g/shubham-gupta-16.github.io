
import React, { useState } from 'react'
import Lottie from 'react-lottie-player'

import s1 from '../assets/lottie/s_1.json'
import s2 from '../assets/lottie/s_2.json'
import s3 from '../assets/lottie/s_3.json'

export const SplashScreen = ({duration}) => {
    const [visible, setVisible] = useState(true);
    const [s2State, setS2State] = useState(false);
    const [s3State, setS3State] = useState(false);

    setTimeout(() => {
        setS2State(true);
    }, 800);

    setTimeout(() => {
        setS3State(true);
    }, 450);

    setTimeout(() => {
        setVisible(false);
    }, duration - 400);

    const style = { width: 250, height: 150, position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }

    return (
        <div style={{ background:'#001122', transition:'400ms', opacity: visible ? '1' : '0', position: 'fixed', height: '100vh', width: '100vw', zIndex: 1000 }}>
            <Lottie
                loop={false}
                animationData={s1}
                play
                style={style}
            />
            <Lottie
                loop={false}
                animationData={s2}
                play={s2State}
                style={style}
            />
            <Lottie
                loop={false}
                animationData={s3}
                play={s3State}
                style={style}
            />
        </div>
    )
}

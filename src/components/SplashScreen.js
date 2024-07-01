
import React, { useState } from 'react'
import Lottie from 'react-lottie-player'
import '../css/splash_screen.css'


import s1 from '../assets/lottie/s_1.json'
import s2 from '../assets/lottie/s_2.json'
import s3 from '../assets/lottie/s_3.json'

export const SplashScreen = ({visible}) => {
    const [s2State, setS2State] = useState(false);
    const [s3State, setS3State] = useState(false);

    setTimeout(() => {
        setS2State(true);
    }, 800);

    setTimeout(() => {
        setS3State(true);
    }, 450);



    const style= {width: 250}

    return (
        <div className={'splash-container magic' + (visible ? '' : ' hidden')}>
            <header style={{ opacity: 0, height: '100vh', width: '100vw'}}></header>
            <Lottie
                loop={false}
                style={style}
                animationData={s1}
                play
                className='lottie-splash-logo'
            />
            <Lottie
                loop={false}
                style={style}
                animationData={s2}
                play={s2State}
                className='lottie-splash-logo'
            />
            <Lottie
                loop={false}
                style={style}
                animationData={s3}
                play={s3State}
                className='lottie-splash-logo'
            />
        </div>
    )
}

import React from 'react'

import loader from "../images/loader.gif";

export default function Loading({visible}) {
    return (
        //   <div></div>
        <div className="dialog-body" style={{
            zIndex: 1000,
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            transition: 'all 0.2s ease',
            backgroundColor: 'rgba(255, 255, 255, 0.5)',
            visibility: visible ? 'visible' : 'hidden',
            opacity: visible ? 1 : 0
        }}>
            <div>
                <div style={{
                    width: '150px',
                    height: '80px',
                    backgroundImage: `url(${loader})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center center',
                    backgroundSize: 'contain'
                }}></div>
            </div>
        </div>
    )
}

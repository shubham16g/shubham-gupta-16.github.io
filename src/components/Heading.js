import React from 'react'

import '../css/heading.css'

export default function Heading({ title, isCenter }) {
    return (
        <div className="page-container c-head">

            <span className={isCenter ? 'c-title center' : 'c-title cut-right'}>{title}</span>

            {/* if ($forwardArrow != null) {
                <a href="'.$forwardArrow. '" className="c-arrow c-forward">
                    <i className="fa fa-arrow-right" aria-hidden="true"></i >
                </a >
            } */}
            {/* <i className="material-icons" style="font-size:36px;">arrow_forward</i> */}

            {/* if ($backwardArrow != null) {
                <a href="'.$backwardArrow. '" className="c-arrow c-backward"><i className="fa fa-arrow-right" aria-hidden="true"></i></a>
            } */}
        </div>
    )
}

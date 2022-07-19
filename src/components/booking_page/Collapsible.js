import React, {useState, useRef} from 'react'

export default function Collapsible({ title, children, initialState }) {
    const [collapsed, setCollapsed] = useState(initialState);
    const cRef = useRef()
    return (
        <>
            <div className={collapsed ? 'collapsible' : 'collapsible active'} onClick={()=>{setCollapsed(c=> !c)}}>
                <h4>{title}</h4>
                <i className="fa fa-angle-down" aria-hidden="true" />
            </div>
            <div className="content" ref={cRef} style={collapsed ? {} : { overflow: 'visible', maxHeight: cRef.current?.scrollHeight ?? '100%' }}>
                {children}
            </div>
        </>
    )
}

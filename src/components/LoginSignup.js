import React, { useState, useRef } from 'react'
import { useAuth } from '../contexts/AuthContext'
import '../css/authpopup.css'

export default function LoginSignup({ visible, onClose, onLoading }) {

    const [isLogin, setLogin] = useState(true)
    const { signup, login } = useAuth()
    
    const emailRef = useRef()
    const passwordRef = useRef()
    async function handleLogIn(e) {
        e.preventDefault()
        onLoading(true)
        try {
            await login(emailRef.current.value, passwordRef.current.value)    
            onLoading(false)
            onClose()
        } catch (error) {
            onLoading(false)
            alert(error.message)
        }
    }

    const nameRef_s = useRef()
    const emailRef_s = useRef()
    const passwordRef_s = useRef()

    async function handleSignUp(e) {
        e.preventDefault()
        onLoading(true)
        try {
            await signup(nameRef_s.current.value, emailRef_s.current.value, passwordRef_s.current.value)
            onLoading(false)
            onClose()
        } catch (error) {
            onLoading(false)
            alert(error.message)
        }
    }

    return (
        <div id="auth" className={visible ? '' : 'hidden'} >
            <div>
                <div>
                    <div id="auth-area">
                        <div className="auth-header">
                            <span className={isLogin ? 'signInToggleBtn active' : 'signInToggleBtn'} onClick={() => { setLogin(true) }}>Sign In</span>
                            <span className={isLogin ? 'signUpToggleBtn' : 'signUpToggleBtn active'} onClick={() => { setLogin(false) }}>Sign Up</span>
                        </div>
                        <form onSubmit={handleLogIn} id="sign-in-form" name="sign-in-form" className="main-form" style={!isLogin ? { display: 'none', opacity: 0 } : {}}>
                            <div className="form-input sign-in-input-mobile">
                                <label>Email</label>
                                    <input type="email" ref={emailRef} name="mobile" placeholder="" autoComplete="off" maxLength="100" required />
                            </div>
                            <div className="form-input sign-in-input-password">
                                <label>Password</label>
                                <input type="password" ref={passwordRef} name="password" placeholder="" autoComplete="off" maxLength="16" required />
                            </div>
                            <span className="forget-password">Forget Password?</span>
                            <button className="submit b-btn hard" >Sign In</button>
                        </form>
                        <form onSubmit={handleSignUp} id="sign-up-form" name="sign-up-form" className="main-form" style={isLogin ? { display: 'none', opacity: 0 } : {}}>
                            <div className="form-input sign-up-input-name">
                                <label>Name</label>
                                <input type="name" ref={nameRef_s} name="name" placeholder="" autoComplete="off" maxLength="24" required />
                            </div>
                            <div className="form-input sign-up-input-mobile">
                                <label>Email</label>
                                    <input type="email" ref={emailRef_s} name="mobile" placeholder="" autoComplete="off" maxLength="100" required />
                            </div>
                            <div className="form-input sign-up-input-password">
                                <label>Password</label>
                                <input type="password" ref={passwordRef_s} name="password" placeholder="" autoComplete="off" maxLength="16" required />
                            </div>
                            <button className="submit b-btn hard">Sign Up</button>
                        </form>
                    </div>
                    <span onClick={onClose} className="a-close-btn" id="auth-close"><i className="fa fa-times" aria-hidden="true"></i></span>
                </div>
            </div>
        </div>
    )
}

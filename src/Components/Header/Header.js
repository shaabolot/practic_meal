import React from 'react'
import st from "./Header.module.css"
import Logo from "../../Assets/logo.png"

const Header = () => {
    return (
        <div className={st.navbar}>
            <div className="container">
                <div className={st.navbar_content}>
                <img width={290} height={40} src={Logo} alt="" />
                <form className={st.form_control}>
                <input type="text" placeholder='Search' />
                <button type='submit'>Send</button>
                </form>
                </div>
            </div>
        </div>
    )
}

export default Header
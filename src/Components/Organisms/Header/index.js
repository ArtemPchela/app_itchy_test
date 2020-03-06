import React, {Component} from "react";
import {Link} from "react-router-dom";
import links from "../../../links";
import styles from "./style.module.scss";
import Nav from "../../Molecules/Nav";
import NavMobile from "../../Molecules/NavMobile";



class Header extends Component {
    render() {
        return (
            <header className={`${styles.header}`}>
            {/*    <div className={`${styles.header_nav_wrapper}`}>*/}
                    <div className={`${styles.header__logo}`}>
                        <Link className={`${styles.header__logo_text}`} to="/">
                            itchy
                        </Link>
                    </div>
                    <Nav links={links}/>
                    <NavMobile links={links}/>
                {/*</div>*/}
            </header>
        )
    }
}

export default Header;


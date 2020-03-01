import React, {Component} from "react";
import {Link} from "react-router-dom";
import links from "../../../links";
import styles from "./style.module.scss";
import Nav from "../../Molecules/Nav";
import phone from "../../../images/phone@3x.png"


class Header extends Component {
    render() {
        return (
            <header className={`${styles.header}`}>
                <div className={`${styles.header__nav_wrapper}`}>
                    <div className={`${styles.header__logo}`}>
                        <Link className={`${styles.header__logo_text}`} to="/">
                            itchy
                        </Link>
                    </div>
                    <Nav links={links}/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-7 col-12">
                            <div className={`${styles.content_intro}`}>
                                <h2 className={`${styles.content_intro_title}`}>Ditch the Itch</h2>
                                <p className={`${styles.content_intro_title_text}`}>Helping you with psoriasis and
                                    eczema</p>
                            </div>
                        </div>
                        <div className="col-md-5 col-12 d-none d-md-block">
                            <div className={`${styles.phone_wrapper}`}>
                                <img src={phone} className={`${styles.phone_img}`} alt="phone"/>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

        )
    }
}

export default Header;


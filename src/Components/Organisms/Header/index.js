import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import links from "../../../links";
import styles from "./style.module.scss";
import Nav from "../../Molecules/Nav";
import NavMobile from "../../Molecules/NavMobile";

export default function Header() {

    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', checkScroll);
        return () => window.removeEventListener('scroll', checkScroll)
    }, []);

    const checkScroll = () => {
        if (window.pageYOffset > 50) {
            setScroll(true);
        } else {
            setScroll(false);
        }
    };

    return (
        <header className={`${styles.header} ${scroll ? styles.header_visible : ''}`}>
            <div className={`${styles.header__logo}`}>
                <Link className={`${styles.header__logo_text}`} to="/">
                    itchy
                </Link>
            </div>
            <Nav links={links}/>
            <NavMobile links={links}/>
        </header>
    )
}



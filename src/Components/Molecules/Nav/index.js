import React from "react";
import styles from "./style.module.scss";
import {Link} from "react-router-dom";

export default function Nav({links}) {
    return(
        <nav className={`${styles.nav} d-none d-md-block`}>
            {links.map(element =>
                <Link to={element.href}
                      key={element.href}
                      url={element.href}
                      className={`${styles.nav_item}`}>
                    {element.title}
                </Link>)
            }
        </nav>
    )
}

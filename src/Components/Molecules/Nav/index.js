import React from "react";
import styles from "./style.module.scss";
import {Link} from "react-router-dom";

export default function Nav({links}) {
    return(
        <nav className={`${styles.nav}`}>
            {links.map(element =>
                <Link to=""
                      key={element.href}
                      url={element.href}
                      className={`${styles.nav_item}`}>
                    {element.title}
                </Link>)
            }
        </nav>
    )
}

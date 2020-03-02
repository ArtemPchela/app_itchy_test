import React from "react";
import NavMobile from "../Molecules/NavMobile";
import Nav from "../Molecules/Nav";
import Time from "../Molecules/Time";
import links from "../../links";
import styles from "./style.module.scss";
import {Link} from "react-router-dom";

export default class About extends React.Component {
        render() {
            return(
                <div>
                <div className={`${styles.wrapper_nav}`}>
                    <Link className={`${styles.wrapper_logo_text}`} to="/">
                        itchy
                    </Link>
                    <Nav  links={links}/>
                    <NavMobile links={links}/>
                </div>
                    <div className={`${styles.time_wrapper}`}>
                        <Time />
                    </div>
                </div>
            )
        }
}

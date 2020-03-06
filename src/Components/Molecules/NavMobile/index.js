import React, {Component} from "react";
import styles from "./style.module.scss";
import {Link} from "react-router-dom";
import burgerClose from './burgerImg/burgerClose.png';
import burger from './burgerImg/burger.svg';


class NavMobile extends Component {
    constructor(props) {
        super(props);
        this.state = {headerCallapse: false, position: 0, isMobileNavOpen: false}
    }

    mobileOpenHandler = () => {
        this.setState({
            isMobileNavOpen: !this.state.isMobileNavOpen
        })
    };

    render() {
        const {links} = this.props;
        return (
            <div className={`${styles.mobile_nav}`}>
                    <div className={`${styles.mobile_menu} ${this.state.isMobileNavOpen ? styles.open : ""}`}>
                        <div className={`${styles.mobile_close_icon_wrapper}`}>
                            <div onClick={this.mobileOpenHandler}>
                                <img
                                    src={burgerClose}
                                    width="25" alt=""/>
                            </div>
                        </div>
                        <div className={`${styles.mobile_links_wrapper}`}>
                            <nav className={`${styles.nav_mobile}`}>
                                {links.map(element =>
                                    <Link to={element.href}
                                          key={element.href}
                                          url={element.href}
                                          className={`${styles.nav_item_mobile}`}>
                                        {element.title}
                                    </Link>)
                                }
                            </nav>

                        </div>
                    </div>
                    <div className={`${styles.mobile_nav_wrapper}`}>
                        <div className={`${styles.mobile_nav_main}`}>
                            <div className={`${styles.mobile_logo_wrapper}`}>
                                <div className={`${styles.logo} ${styles.mobile}`}>
                                    <Link to="/">
                                        itchy
                                    </Link>
                                </div>
                            </div>
                            <div className={`${styles.mobile_menu_icon_open}`} onClick={this.mobileOpenHandler}>
                                <img
                                    src={burger}
                                    width="25" alt=""/>
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}

export default NavMobile;

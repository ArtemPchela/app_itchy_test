import React, {Component} from "react";
import styles from "./style.module.scss";
import man1 from "../../../images/placeholder @3x.png";
import man2 from "../../../images/placeholder @3x.png";

class Content extends Component {
    render() {
        return (
            <main className={`${styles.main}`}>
                <div className={`${styles.main_background}`}>
                </div>
                <div className={`${styles.main_background_footer}`}>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-12">
                            <div className={`${styles.main_image_wrapper} ${styles.main_image_wrapper_primary}`}>
                                <img src={man1} className={`${styles.main_image}`} alt=""/>
                            </div>
                        </div>
                        <div className="col-md-6 col-12">
                            <div className={`${styles.main_text} ${styles.main_text_primary}`}>
                                <h3 className={`${styles.main_text_heading}`}>Daily help and support</h3>
                                <p className={`${styles.main_text_intro}`}>Lorem ipsum dolor sit amet, consetetur sadipscing
                                    elitr,
                                    sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                                    sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-12">
                            <div className={`${styles.main_image_wrapper} ${styles.main_image_wrapper_secondary}`}>
                                <img src={man2} className={`${styles.main_image}`} alt=""/>
                            </div>
                        </div>
                        <div className="col-md-6 col-12 order-first">
                            <div className={`${styles.main_text} ${styles.main_text_secondary}`}>
                                <h3 className={`${styles.main_text_heading}`}>Motivation every moment</h3>
                                <p className={`${styles.main_text_intro}`}>Lorem ipsum dolor sit amet, consetetur sadipscing
                                    elitr,
                                    sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                                    sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}

export default Content;

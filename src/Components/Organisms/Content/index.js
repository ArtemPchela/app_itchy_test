import React, {Component} from "react";
import styles from "./style.module.scss";
import man1 from "../../../images/placeholder @3x.png";
import man2 from "../../../images/placeholder @3x.png";
import background from "../../../images/background@3x.png";

class Content extends Component {
    render() {
        return (
            <section className={`${styles.content}`}>
                <div className={`${styles.content_background}`}>
                    <img src={background} className={`${styles.content_background_top}`} alt='back'/>
                    <div className={`${styles.content_background_bottom}`}/>
                </div>
                <div className="container">
                    <div className={`${styles.content_row}`}>
                        <div className={`${styles.content_image_wrapper} ${styles.content_image_wrapper_primary}`}>
                            <img src={man1} className={`${styles.content_image}`} alt=""/>
                        </div>
                        <div className={`${styles.content_text} ${styles.content_text_primary}`}>
                            <h3 className={`${styles.content_text_heading}`}>Daily help and support</h3>
                            <p className={`${styles.content_text_intro}`}>Lorem ipsum dolor sit amet, consetetur
                                sadipscing
                                elitr,
                                sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                                sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
                            </p>
                        </div>

                        <div className={`${styles.content_image_wrapper} ${styles.content_image_wrapper_secondary}`}>
                            <img src={man2} className={`${styles.content_image}`} alt=""/>
                        </div>
                        <div className={`${styles.content_text} ${styles.content_text_secondary}`}>
                            <h3 className={`${styles.content_text_heading}`}>Motivation every moment</h3>
                            <p className={`${styles.content_text_intro}`}>Lorem ipsum dolor sit amet, consetetur
                                sadipscing
                                elitr,
                                sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                                sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Content;

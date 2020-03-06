import React, {Component} from "react";
import styles from "./style.module.scss";
import man1 from "../../../images/placeholder @3x.png";
import man2 from "../../../images/placeholder @3x.png";

class Content extends Component {
    render() {
        return (
            <div className={`${styles.content}`}>
                <div className={`${styles.content_background}`}/>
                <div className={`${styles.content_image_wrapper} ${styles.content_image_wrapper_primary}`}>
                    <img src={man1} className={`${styles.content_image}`} alt=""/>
                </div>
                <div className={`${styles.content_text} ${styles.content_text_primary}`}>
                    <h3 className={`${styles.content_text_heading}`}>Daily help and support</h3>
                    <p className={`${styles.content_text_intro}`}>Lorem ipsum dolor sit amet, consetetur sadipscing
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
                    <p className={`${styles.content_text_intro}`}>Lorem ipsum dolor sit amet, consetetur sadipscing
                        elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
                    </p>
                </div>
            </div>
        )
    }
}

export default Content;

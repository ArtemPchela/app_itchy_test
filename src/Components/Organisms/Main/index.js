import React, {Component} from 'react';
import styles from './style.module.scss';
import phone from "../../../images/phone@3x.png";


class Main extends Component {
    render() {
        return (
            <main className={`${styles.main}`}>
                <div className="container">
                    <div className={`${styles.main_wrapper}`}>
                        <div className={`${styles.main_intro}`}>
                            <h2 className={`${styles.main_intro_title}`}>Ditch the Itch</h2>
                            <p className={`${styles.main_intro_title_text}`}>Helping you with psoriasis and
                                eczema</p>
                        </div>
                        <div className={`${styles.phone_wrapper}`}>
                            <img src={phone} className={`${styles.phone_img}`} alt="phone"/>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default Main;

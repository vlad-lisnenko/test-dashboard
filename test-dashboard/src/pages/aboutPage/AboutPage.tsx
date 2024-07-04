import React from "react";
import styles from "./About.module.css";

const AboutPage: React.FC = () => {
    return (
        <div>
            <h1>About</h1>
            <p>Welcome to the about page! Explore the app to see more features.</p>
            <img className={styles.image}
                 src={"https://www.freeiconspng.com/thumbs/about-us-icon/information-about-us-icon-16.png"}
                 alt={"about"}/>
        </div>
    );
};

export default AboutPage;

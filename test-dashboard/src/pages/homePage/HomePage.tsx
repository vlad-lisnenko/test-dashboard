import React from "react";
import styles from "./Home.module.css";

const HomePage: React.FC = () => {
    return (
        <div>
            <h1>Home</h1>
            <p>Welcome to the test app! This application demonstrates the execution of a test task.</p>
            <img className={styles.image}
                 src={"https://procherk.info/images/news/1120192/7e8f5acd0821107631e62de042b1601a.jpg"}
                 alt={"statistic"}/>
        </div>
    );
};

export default HomePage;

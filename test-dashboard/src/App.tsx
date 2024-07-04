import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import styles from "./app.module.css";

function App() {
  return (
    <div className={styles.body}>
      <Navbar />
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
}

export default App;

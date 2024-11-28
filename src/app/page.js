import styles from "./page.module.css";
import Header from "./components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import ToolsPlatform from "./components/ToolsPlatform"; 
export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <ToolsPlatform
        headingText="Our Tools Platform" 
      />
    </div>
  );
}

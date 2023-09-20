import IgniteLogo from "../assets/feed-logo.svg";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={IgniteLogo} alt="Logotipo do Ignite" />
    </header>
  );
}

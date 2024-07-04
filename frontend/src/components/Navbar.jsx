import { Link } from "react-router-dom";

import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.navbarContainer}>
      <ul className={styles.navbarContents}>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/company/:id">
          <li>Entreprise</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
      </ul>
      <form>
        <input type="text" placeholder="Recherche" />
      </form>
      <button className={styles.navbarButton} type="submit">
        Login
      </button>
      <button type="submit">S'inscrire</button>
    </div>
  );
}

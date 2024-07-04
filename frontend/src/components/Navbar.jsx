import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.navbarContainer}>
      <ul>
        <li>Home</li>
        <li>Entreprise</li>
        <li>Contact</li>
      </ul>
      <form>
        <input type="text" />
      </form>
      <button type="submit">Login</button>
      <button type="submit">S'inscrire</button>
    </div>
  );
}

import { Form } from "react-router-dom";
import { useState } from "react";
import styles from "../Contact/formulaire.module.css";

function Connexion() {
  const [values, setValues] = useState({
    prenom: "",
    nom: "",
    email: "",
    numero: "",
    password: "",
  });

  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  };

  return (
    <div className={styles.inscriptionContent}>
      <h2>Join our community</h2>
      <p>Sign in or Create a new accont with us.</p>
      <Form
        method="post"
        className={styles.inscriptionForm}
        onSubmit={handleSubmit}
      >
        <label htmlFor="email" className={styles.rowFormRow} />
        <div className={styles.pseudoInput}>
          <input
            className={styles.inputText}
            type="email"
            placeholder="taro.mail@gmail.com"
            name="email"
            value={values.email}
            onChange={handleInput}
          />
        </div>
        <label htmlFor="commentaire" className={styles.rowFormRow} />
        <div className={styles.pseudoInput}>
          <input
            className={styles.inputText}
            type="password"
            placeholder="********"
            name="password"
            value={values.password}
            onChange={handleInput}
          />
        </div>
        <button className={styles.buttonSubmit} type="submit">
          <p className={styles.inscriptionButton}>Se connecter</p>
        </button>
      </Form>
    </div>
  );
}

export default Connexion;

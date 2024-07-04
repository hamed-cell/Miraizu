import { Form } from "react-router-dom";
import { useState } from "react";
import styles from "../Contact/formulaire.module.css";

function Inscription() {
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
        <label htmlFor="prenom" className={styles.rowFormRow} />

        <div className={styles.pseudoInput}>
          <input
            className={styles.inputText}
            type="text"
            placeholder="Username"
            name="prenom"
            value={values.prenom}
            onChange={handleInput}
          />
        </div>
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
        <label htmlFor="numero" className={styles.rowFormRow} />
        <div className={styles.pseudoInput}>
          <input
            className={styles.inputText}
            type="numero"
            placeholder="12345678"
            name="numero"
            value={values.numero}
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
          <p className={styles.inscriptionButton}>S'inscire</p>
        </button>
      </Form>
    </div>
  );
}

export default Inscription;

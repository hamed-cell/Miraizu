import { Form } from "react-router-dom";
import { useState } from "react";
import styles from "./formulaire.module.css";
import Location from "../../assets/location.png";
import Phone from "../../assets/phone.png";
import Email from "../../assets/mail.png";
import Twitter from "../../assets/twitter.png";
import Instagram from "../../assets/instagram.png";
import Discord from "../../assets/discord.png";

export default function Formulaire() {
  const [values, setValues] = useState({
    prenom: "",
    nom: "",
    email: "",
    password: "",
    message: "",
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
    <div>
      <div className={styles.formulaireContact}>
        <h3>Informations de contact</h3>
        <p>
          Vous êtes un professsionnel et vous souhaitez appraitre sur notre sute
          ?
        </p>
        <img src={Phone} alt="phone logo" />
        <p>+10123456 789</p>
        <img src={Email} alt="email logo" />
        <p>miraizu@gmail.com</p>
        <img src={Location} alt="location logo" />
        <p>132 dartmouth street Boston,Massachusetts 02156 United States</p>
        <div className={styles.imageContainer}>
          <img src={Twitter} alt="twitter logo" />
          <img src={Instagram} alt="instagram logo" />
          <img src={Discord} alt="discord logo" />
        </div>
      </div>

      <Form
        method="post"
        className={styles.contactForm}
        onSubmit={handleSubmit}
      >
        <label htmlFor="prènom" className={styles.rowFormRow}>
          <p className={styles.titleForm}>Prènom</p>
        </label>
        <div className={styles.pseudoInput}>
          <input
            className={styles.textInput}
            type="text"
            placeholder="Taro"
            name="prenom"
            value={values.prenom}
            onChange={handleInput}
          />
        </div>
        <label htmlFor="nom" className={styles.rowFormRow}>
          <p className={styles.titleForm}>Nom</p>
        </label>
        <div className={styles.pseudoInput}>
          <input
            className={styles.textInput}
            type="text"
            placeholder="miraizu"
            name="nom"
            value={values.nom}
            onChange={handleInput}
          />
        </div>
        <label htmlFor="email" className={styles.rowFormRow}>
          <p className={styles.titleForm}>Adresse email</p>
        </label>
        <div className={styles.pseudoInput}>
          <input
            type="email"
            placeholder="taro.mail@gmail.com"
            name="email"
            value={values.email}
            onChange={handleInput}
          />
        </div>
        <label htmlFor="numero" className={styles.rowFormRow}>
          <p className={styles.titleForm}>Numéro de téléphone</p>
        </label>
        <div className={styles.pseudoInput}>
          <input
            type="numero"
            placeholder="12345678"
            name="numero"
            value={values.numero}
            onChange={handleInput}
          />
        </div>
        <label htmlFor="commentaire" className={styles.rowFormRow}>
          <p className={styles.titleForm}>commentaire</p>
        </label>
        <div className={styles.pseudoInput}>
          <input
            type="text"
            placeholder="saisissez votre message"
            name="message"
            value={values.message}
            onChange={handleInput}
          />
        </div>
        <div className={styles.contactButton}>
          <button className={styles.buttonSubmit} type="submit">
            <p className={styles.inscriptionButton}>Envoyer votre message</p>
          </button>
        </div>
      </Form>
    </div>
  );
}

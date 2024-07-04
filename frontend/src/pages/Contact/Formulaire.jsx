import { Form } from "react-router-dom";
import { useState } from "react";
import styles from "./formulaire.css";
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
    numero: "",
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
    <div className={styles.container}>
      <div className={styles.contactInfo}>
        <h2>Informations de contact</h2>
        <p>Vous êtes un professionnel et vous souhaitez apparaître sur notre site ?</p>
        <div className={styles.contactDetail}>
          <img src={Phone} alt="Phone" />
          <p>+10123456 789</p>
        </div>
        <div className={styles.contactDetail}>
          <img src={Email} alt="Email" />
          <p>miraizu@gmail.com</p>
        </div>
        <div className={styles.contactDetail}>
          <img src={Location} alt="Location" />
          <p>132 Dartmouth Street, Boston, Massachusetts 02156, United States</p>
        </div>
        <div className={styles.socialIcons}>
          <img src={Twitter} alt="Twitter" />
          <img src={Instagram} alt="Instagram" />
          <img src={Discord} alt="Discord" />
        </div>
      </div>

      <Form method="post" className={styles.contactForm} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="prenom" className={styles.formLabel}>Prénom</label>
          <input
            className={styles.formInput}
            type="text"
            placeholder="Taro"
            name="prenom"
            value={values.prenom}
            onChange={handleInput}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="nom" className={styles.formLabel}>Nom</label>
          <input
            className={styles.formInput}
            type="text"
            placeholder="Miraizu"
            name="nom"
            value={values.nom}
            onChange={handleInput}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.formLabel}>Adresse email</label>
          <input
            className={styles.formInput}
            type="email"
            placeholder="taro.mail@gmail.com"
            name="email"
            value={values.email}
            onChange={handleInput}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="numero" className={styles.formLabel}>Numéro de téléphone</label>
          <input
            className={styles.formInput}
            type="text"
            placeholder="12345678"
            name="numero"
            value={values.numero}
            onChange={handleInput}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="commentaire" className={styles.formLabel}>Commentaire</label>
          <textarea
            className={styles.formTextarea}
            placeholder="Saisissez votre message"
            name="message"
            value={values.message}
            onChange={handleInput}
          />
        </div>
        <button className={styles.buttonSubmit} type="submit">
          Envoyer votre message
        </button>
      </Form>
    </div>
  );
}

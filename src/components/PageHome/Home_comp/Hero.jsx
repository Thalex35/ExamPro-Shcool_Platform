import "../Home_style/Hero.css";
import second from "../../../assets/second.jpeg";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-imj">
        <h1>Preparez-vous aux examens d'Etat avec confiance</h1>
        <p>
          Accedez a des milliers de questions d'examen, des ressources
          <br />
          d'etude completes et des tests pratiques pour maximiser vos
          <br />
          chances de reussite.
        </p>
        <button className="btn_Begin">Commencer maintenant</button>
        <button className="btn_Explore">Explorer Les ressources</button>
      </div>
      <img src={second} alt="school"></img>
    </section>
  );
}

import "../Home_style/Hero.css";
import second from "../../../assets/second.jpg";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-imj">
        <h1>Preparez-vous aux examens d'Etat avec confiance</h1>
        <p>
          Accedez a des milliers de questions d'examen, des ressources d'etude
          completes et des tests pratiques pour maximiser vos chances de
          reussite.
        </p>
        <div className="btns">
          <button className="btn_Begin">Commencer maintenant</button>
          <button className="btn_Explore">Explorer Les ressources</button>
        </div>
      </div>
      <img src={second} alt="school"></img>
    </section>
  );
}

/* eslint-disable react/no-unescaped-entities */
import ProfilePic from '../../assets/img/Foto_Nilze.jpg';
import Footer from '../../components/Footer/index.jsx';
import Header from '../../components/Header/Index.jsx';
import '../../styles/Button.css';
import '../../styles/Home.css';
import '../../styles/AboutUs.css';

function AboutUs() {
  return (
    <div className="containerAboutUs">
      <section className="sectionHome">
        <Header />
      </section>
      <div className="ower">
        <img src={ProfilePic} alt="Foto de perfil" />
        <h1>Nilze Druziani</h1>
        <p>Psicóloga e Personal Coach</p>
      </div>

      <div className="divider" />

      <section className="sectionAboutUs">
        <h1>Uma breve descrição sobre meu espaço!</h1>
        <p>
          Nilze Druziani
          <br />
          Mentora de Ampliação da Consciência Formada em Psicologia, Personal ,
          Profissional e Health Coaching, Professora de Yoga e Meditação. Ajudo
          as pessoas trazerem a tona a sua melhor versão, entrar em comunhão com
          seu corpo, desengavetar seus sonhos e reascender o seu brilho pessoal,
          te empoderando, encorajando e motivando a reescrever sua história a
          partir de suas próprias escolhas.
        </p>
      </section>
      <Footer />
    </div>
  );
}

export default AboutUs;

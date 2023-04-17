/* eslint-disable react/no-unescaped-entities */
import ProfilePic from "../../assets/img/Foto_Nilze.jpg";
import Footer from "../../components/Footer/index.jsx";
import Header from "../../components/Header/Index.jsx";
import "../../styles/Button.css";
import "../../styles/Home.css";
import "../../styles/AboutUs.css";

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
          Psicóloga Nilze Druziani - Mentoria e Coaching para Desenvolvimento
          Profissional e Pessoal, através do autoconhecimento e ampliação da
          consciência desvendar a sua melhor versão, entrar em comunhão com seu
          corpo e reascender o seu brilho pessoal, te empoderando a se tornar o
          escritor, diretor e o protagonista da sua história (porque o script
          que você segue hoje não foi você que escreveu) você pode reescrever a
          sua vida, para alcançar o sucesso com plenitude. Você sempre tem
          escolha e não ter escolha, também é uma escolha.
        </p>
      </section>
      <Footer />
    </div>
  );
}

export default AboutUs;

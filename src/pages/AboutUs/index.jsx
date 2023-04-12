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
      <section className="sectionAboutUs">
        <h1>Uma breve descrição sobre meu espaço!</h1>
        <p>
          Formada em Psicologia e Licenciatura Plena desde 2001 pela
          UNIMEP-Universidade Metodista de Piracicaba. Personal e Professional
          Coaching pela SBC-Sociedade Brasileira de Coaching. Instrutora de Yoga
          pelo Instituto de Yogaterapia de Campinas-SP. Fazer terapia hoje em
          dia é um investimento pessoal em você, para seu auto desenvolvimento.
          Modismo à parte, cuidar do corpo (soma) é bom, mas cuidar da mente
          também tem sua importância. Nosso sistema hormonal está diretamente
          subordinado ao nosso sistema emocional de modo que quando ficamos à
          mercê de nossas emoções, com pouco autoconhecimento e domínio mental
          ficamos vulneráveis as descargas hormonais que são lançadas em nossa
          corrente sanguíneas e quem sofre as conseqüências é o corpo físico.
          Isso significa queda de nossa energia vital, baixa imunidade,
          estresse... O estresse é o principal fator no"envelhecimento precoce",
          e ele pode ser controlado quando equilibramos nosso sistema emocional
          e nossos processos mentais através do autoconhecimento, quando
          passamos a nos relacionar melhor com nós mesmos e com nosso entorno. A
          finalidade da Psicoterapia é promover um autoconhecimento e
          desenvolver domínio, controle da mente e das emoções para emitirmos
          respostas mais adequadas e produtivas nas situações cotidianas e
          especialmente quando estamos sob pressão, isso quer dizer, deixar de
          ser reativo e passar a ser pró-ativo. Quando fazemos psicoterapia
          fazemos uma faxina nas memórias emocionais, pegamos todos aqueles
          conteúdos mal resolvidos, como mágoas, rancores, sentimentos
          limitantes e inúteis e damos a eles novos significados, novos rumos. A
          psicoterapia é um processo lindo, que traz o melhor de você à tona, à
          existência, por aqui e agora. Proporcionando a tão procurada qualidade
          de vida, que se manifesta quando encontramos o equilíbrio entre corpo,
          mente e espírito. Quando alcançamos esse estado, o estado de SER, nos
          tornamos mais autênticos e nossa vida passa a ter propósitos mais
          elevados, então, conhecemos a verdadeira felicidade. O processo
          Psicoterapêutico é um caminho que leva a auto transformação e
          aprimoramento. Venha desvendar sua melhor versão !
        </p>
      </section>
      <Footer />
    </div>
  );
}

export default AboutUs;

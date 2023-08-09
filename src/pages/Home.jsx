/* eslint-disable react/jsx-key */
import { useState, useEffect } from 'react';
import Header from '../components/Header/Index.jsx';
import Footer from '../components/Footer/index.jsx';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../styles/Button.css';
import '../styles/Home.css';

function Home() {
  const [selectedSection, setSelectedSection] = useState('');
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSectionSelect = (section) => {
    setSelectedSection(section);
  };

  const carousel = [
    <div className="carousel">
      <h2>Aulas de Yoga</h2>
      <p>
        O Hathayoga é o mais terapêutico dos Yogas. É a mais poderosa ferramenta
        de autoconhecimento e auto desenvolvimento, através da comunhão com o
        corpo, por Meio de suas posturas psicofisicas melhora o equilíbrio
        emocional, a autoconfiança, eleva a autoestima. Para o Yoga o corpo é
        uma ferramenta de desenvolvimento do espírito e no corpo habita a
        Verdade Absoluta, pois o Samadhi, o Nirvana e a Iluminação sempre vira
        de dentro pra fora .
      </p>
    </div>,
    <div className="carousel">
      <h2>TERAPIA BARRAS DE ACCESS</h2>
      <p>
        é um tipo de terapia quântica, que através do acesso energético promove
        o equilíbrio entre os hemisférios cerebrais e entre o corpo e a mente,
        utilizando-se de uma técnica baseada na digito-puntura em 32 pontos
        específicos da cabeça, os toques sutis e irão impulsionar a dissipação
        de cargas eletromagnéticas liberando traumas, crenças e bloqueios
        armazenados nessas barras e proporcionando mais consciência, clareza
        mental, lucidez, calma e paz
      </p>
    </div>,
    <div className="carousel">
      <h2>Massagem keiraku beauty</h2>
      <p>
        Massagem vigorosa com técnica japonesa baseada na acupuntura, revigora,
        drena, desintoxica, desbloqueia os meridianos de energia restaurando o
        fluxo energético do corpo e relaxa
      </p>
    </div>,
    <div className="carousel">
      <h2>Psicoterapia</h2>
      <p>
        baseada na PSICOLOGIA HUMANISTA, com tendência teórica voltada à
        filosofia e considera que toda pessoa tem potencialidades para o
        crescimento e desenvolvimento naturais. Com o foco de empoderar o
        cliente a descobrir seu EU REAL, criando um ambiente acolhedor e
        empático em que o ser humano possa se desenvolver na direção em que ele
        escolher e para que ele possa manifestar e ser realmente quem é, através
        do autoconhecimento, da ampliação da consciência e compreensão da Física
        e Mecânica Quântica. E assim ajudar o paciente resolver seus sintomas e
        dores emocionais.
      </p>
    </div>
  ];

  return (
    <div className="containerHome">
      <section className="sectionHome">
        <Header />
      </section>
      <section className="hero">
        <div className="heroLeftContent">
          <div className="overlay">
            <h1>
              Seja bem vindo ao site do <br />{' '}
              <span>Espaço consciência Zen</span>
            </h1>

            <p>
              Bem-vindo Ser Infinito! Conheça um pouco sobre nosso trabalho e
              serviços que oferecemos. Nosso foco é proporcionar a ampliação das
              consciências , através do autoconhecimento. Aqui buscamos
              autenticidade , isto é , empoderamos as pessoas para que tragam à
              tona seu EU REAL, cultivando vida interior, comunhão com o corpo e
              autorresponsabilidade para quem quer ter autonomia e se tornar seu
              próprio mestre.
            </p>

            <a href="/aulas">
              <button className="btnNavigate">Conheça mais</button>
            </a>
          </div>
        </div>

        <div className="heroRightContent" />
      </section>

      <div className="containerCourses">
        <div className="coursesHeader">
          <div className="coursesHeaderLeft">
            <h3>
              Comece agora!
              <br /> Invista em seu Autoconhecimento e desenvolvimento.
            </h3>
          </div>
          <div className="coursesHeaderRight">
            <a
              href="https://wa.me/+ 19991965025"
              className="btnSchedule"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa fa-whatsapp" /> Agende sua aula
            </a>
          </div>
        </div>

        {windowSize.width > 768 ? (
          <nav className="coursesNavBar">
            <ul>
              <li
                className={selectedSection === 'yoga' ? 'active' : ''}
                onMouseEnter={() => handleSectionSelect('yoga')}
                onMouseLeave={() => handleSectionSelect('')}
              >
                Aulas de Yoga
                <div className="section">
                  <h2>Aulas de Yoga</h2>
                  <p>
                    O Hathayoga é a ferramenta mais poderosa de
                    autoconhecimento, transformação e aprimoramento pessoal.
                    Através de suas posturas psico-físicas melhora o equilíbrio
                    emocional, diminui estresse e ansiedade , eleva sua
                    autonomia e a autoestima .
                  </p>
                </div>
              </li>
              <li
                className={selectedSection === 'barra' ? 'active' : ''}
                onMouseEnter={() => handleSectionSelect('barra')}
                onMouseLeave={() => handleSectionSelect('')}
              >
                Barra Access
                <div className="section">
                  <h2>BARRAS DE ACCESS</h2>
                  <p>
                    Promove o equilíbrio energético entre os hemisférios
                    cerebrais , acalmando a mente, eliminando excessos de
                    pensamentos, trazendo lucidez, calma , clareza mental e
                    melhorando o seu sono, aumentando o bem-estar.
                  </p>
                </div>
              </li>
              <li
                className={selectedSection === 'massagem' ? 'active' : ''}
                onMouseEnter={() => handleSectionSelect('massagem')}
                onMouseLeave={() => handleSectionSelect('')}
              >
                Massagem keiraku beauty
                <div className="section">
                  <h2>Massagem keiraku beauty</h2>
                  <p>
                    Massagem que promove um detox físico , mental e emocional,
                    baseada na digito-puntura e usando um mix de manobras de
                    várias técnicas de massagens , relaxa, drena , desbloqueia e
                    aumenta o fluxo do seu CHI.
                  </p>
                </div>
              </li>
              <li
                className={selectedSection === 'psicoterapia' ? 'active' : ''}
                onMouseEnter={() => handleSectionSelect('psicoterapia')}
                onMouseLeave={() => handleSectionSelect('')}
              >
                Psicoterapia
                <div className="section">
                  <h2>Psicoterapia</h2>
                  <p>
                    Como um caminho para o autoconhecimento, aprimoramento, uma
                    forma de entrar em contato com toda sua luz e toda sua
                    sombra, conhecer suas emoções, potencialidades e limitações,
                    quebrar crenças, preconceitos e paradigmas. Manifestar o seu
                    EU REAL e seu brilho único pessoal .
                  </p>
                </div>
              </li>
            </ul>
          </nav>
        ) : (
          <Carousel
            className="carousel"
            autoPlay={true}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
            showIndicators={false}
            showArrows={false}
            interval={5000}
          >
            {carousel}
          </Carousel>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Home;

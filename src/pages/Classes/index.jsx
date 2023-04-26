import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import BarraTerapy from '../../assets/img/barra_terapy.jpeg';
import BarraRoom from '../../assets/img/barra_room.jpeg';
import LotusPose from '../../assets/img/lotus_pose.jpeg';
import YogaClass from '../../assets/img/yoga_class.jpeg';
import YogaStudent from '../../assets/img/yoga_student.jpeg';
import Footer from '../../components/Footer/index.jsx';
import Header from '../../components/Header/Index.jsx';
import '../../styles/Classes.css';

function AboutUs() {
  return (
    <>
      <div className="containerClasses">
        <Header />
        <section className="sectionClasses">
          <div className="carouselYoga">
            <div className="containerTexts">
              <h1 className="titleClasses">Aulas de Yoga</h1>
              <p className="textClasses">
                Nossas aulas de yoga são realizadas em um ambiente tranquilo e
                aconchegante, com uma equipe de profissionais qualificados e
                experientes. As aulas são realizadas em grupo, com duração de 1
                hora , e são divididas em 3 etapas: aquecimento, prática e
                relaxamento.
              </p>
            </div>

            <Carousel
              className="carouselYoga"
              infiniteLoop
              showThumbs={false}
              showStatus={false}
              showIndicators={true}
              showArrows={false}
              dynamicHeight={true}
            >
              <div>
                <img src={YogaStudent} alt="banner" />
              </div>
              <div>
                <img src={LotusPose} alt="Pose de lotus" />
              </div>
              <div>
                <img src={YogaClass} alt="Aula de Yoga" />
              </div>
            </Carousel>
          </div>

          <div className="carouselBarra">
            <div className="containerTexts">
              <h1 className="titleClasses">Barra de access</h1>
              <p className="textClasses">
                A barra de access é uma terapia corporal que permite que você e
                seu corpo comecem a desprender-se dos pensamentos, ideias,
                condicionamentos, emoções, atitudes e crenças limitantes que
                você tenha registrado sobre qualquer situação ou experiência.
                Conheça mais sobre você e seu corpo, e comece a criar a vida que
                você deseja.
              </p>
            </div>
            <Carousel
              className="carouselBarra"
              infiniteLoop
              showThumbs={false}
              showStatus={false}
              showIndicators={true}
              showArrows={false}
              dynamicHeight={true}
            >
              <div>
                <img src={BarraTerapy} alt="Seção de Barra" />
              </div>
              <div>
                <img src={BarraRoom} alt="Sala do Barra" />
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1598901986949-f593ff2a31a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1197&q=80"
                  alt="Pose de Yoga"
                />
              </div>
            </Carousel>
          </div>

          <div className="carouselMassage">
            <div className="containerTexts">
              <h1 className="titleClasses">Massagem keiraku beauty</h1>
              <p className="textClasses">
                A massagem keiraku beauty é uma técnica de massagem japonesa que
                utiliza os pontos de acupuntura para estimular a circulação
                sanguínea e linfática, promovendo a eliminação de toxinas e
                auxiliando na redução do inchaço e da celulite. Além disso, a
                massagem keiraku beauty também ajuda a reduzir o estresse e a
                ansiedade, melhorando o bem-estar e a qualidade de vida. Venha
                conhecer!
              </p>
            </div>
            <Carousel
              className="carouselMassage"
              infiniteLoop
              showThumbs={false}
              showStatus={false}
              showIndicators={true}
              showArrows={false}
              swipeable={true}
              dynamicHeight={true}
            >
              <div>
                <img
                  src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1197&q=80"
                  alt="Massagem"
                />
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1598901865264-4f5f30954532?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1197&q=80"
                  alt="Massagem"
                />
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1542848284-8afa78a08ccb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1197&q=80"
                  alt="Massagem"
                />
              </div>
            </Carousel>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}

export default AboutUs;

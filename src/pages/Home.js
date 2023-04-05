import '../styles/Home.css';
import '../styles/Button.css';
import Header from '../components/Header/Index.jsx';
import WppLogo from '../assets/img/png_wpp.png';

function Home() {
  return (
    <div className='containerHome'>
      <section className='sectionHome'>
        <Header />
      </section>
      <section className='hero'>
        <div className='heroLeftContent'>
          <h1>
            Seja bem vindo ao site de <br /> <span>Espaço  Zen Hatha Yoga</span>
          </h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quae quod voluptas quidem voluptates quibusdam voluptatibus, quos, doloremque, nemo q uae quod voluptas quidem voluptates quibusdam voluptatibus, quos, doloremque, nemo
            quae quod voluptas quidem voluptates quibusdam voluptatibus, quos, doloremque, nemo
          </p>

          <button className='btnNavigate'>Conheça mais</button>
        </div>
        <div className='heroRightContent'>
          <h1>
            Aulas de Yoga
          </h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quae quod voluptas quidem voluptates quibusdam voluptatibus, quos, doloremque, nemo quae quod voluptas quidem voluptates quibusdam voluptatibus, quos, doloremque, nemo
            quae quod voluptas quidem voluptates quibusdam voluptatibus, quos, doloremque, nemo
          </p>
          <a href={'https://wa.me/+55(19)98831-9510'} target='_blank' rel="noreferrer" >
            <img className='wppContact' src={WppLogo} alt='Logo do WhatsApp' />
          </a>
        </div>
      </section>
    </div>
  );
}

export default Home;

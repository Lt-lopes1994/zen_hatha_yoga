import { useState } from 'react';
import Header from '../components/Header/Index.jsx';
import '../styles/Button.css';
import '../styles/Home.css';

function Home() {
  const [selectedSection, setSelectedSection] = useState('');
  const [selectedSectionNotClasses, setSelectedSectionNotClasses] = useState('');

  const handleSectionSelect = (section) => {
    setSelectedSection(section);
  };


  return (
    <div className='containerHome'>
      <section className='sectionHome'>
        <Header />
      </section>
      <section className='hero'>
        <div className='heroLeftContent'>
          <div className='overlay'>
            <h1>
              Seja bem vindo ao site de <br /> <span>Espaço  Zen Hatha Yoga</span>
            </h1>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quae quod voluptas quidem voluptates quibusdam voluptatibus, quos, doloremque, nemo q uae quod voluptas quidem voluptates quibusdam voluptatibus, quos, doloremque, nemo
              quae quod voluptas quidem voluptates quibusdam voluptatibus, quos, doloremque, nemo
            </p>

            <button className='btnNavigate'>Conheça mais</button>
          </div>
        </div>

        <div className='heroRightContent' />

      </section>

      <div className="container">
        <nav>
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quae quod voluptas quidem voluptates quibusdam
                  voluptatibus, quos, doloremque, nemo quae quod voluptas quidem voluptates quibusdam voluptatibus, quos,
                  doloremque, nemo quae quod voluptas quidem voluptates quibusdam voluptatibus, quos, doloremque, nemo
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
                <h2>Barra Access</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quae quod voluptas quidem voluptates quibusdam
                  voluptatibus, quos, doloremque, nemo quae quod voluptas quidem voluptates quibusdam voluptatibus, quos,
                  doloremque, nemo quae quod voluptas quidem voluptates quibusdam voluptatibus, quos, doloremque, nemo
                </p>
              </div>
            </li>
            <li
              className={selectedSection === 'massagem' ? 'active' : ''}
              onMouseEnter={() => handleSectionSelect('massagem')}
              onMouseLeave={() => handleSectionSelect('')}
            >
              Massagem
              <div className="section">
                <h2>Massagem</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quae quod voluptas quidem voluptates quibusdam
                  voluptatibus, quos, doloremque, nemo quae quod voluptas quidem voluptates quibusdam voluptatibus, quos,
                  doloremque, nemo quae quod voluptas quidem voluptates quibusdam voluptatibus, quos, doloremque, nemo
                </p>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Home;

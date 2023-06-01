/* eslint-disable jsx-a11y/anchor-is-valid */
import '../../styles/Footer.css';

const Footer = () => {
  const socialContent = [
    {
      id: 1,
      liveLink: 'https://www.facebook.com/nilzecoach',
      icon: 'fa-facebook'
    },
    {
      id: 2,
      liveLink: 'https://www.instagram.com/nilzeterapias/',
      icon: 'fa-instagram'
    },
    {
      id: 3,
      liveLink: 'https://youtube.com/@espacoconscienciazen',
      icon: 'fa-youtube'
    }
  ];

  return (
    <div className="containerFooter">
      <div className="aboutUs">
        <h3>Sobre nós : </h3>
        Um espaço para você que quer se reconectar com sua essência, se
        redescobrir e se atualizar através do alinhamento entre seu corpo, sua
        mente e sua essência divina seu EU VERDADEIRO.
      </div>
      <div className="social">
        <h3>Redes Sociais : </h3>
        <p>Conecte-se com a gente!</p>
        <p>
          Siga-nos nas redes sociais e fique por dentro de todas as novidades.
        </p>
        <div className="socialIcons">
          <ul style={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}>
            {socialContent.map((item) => (
              <li key={item.id}>
                <a
                  href={item.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className={`fa ${item.icon}`} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="contact">
        <h3>Contato : </h3>
        <ul>
          <li>
            <i className="fa fa-map-marker" />
            <span>Endereço : </span>
            Av: DR Angelo Simões, 707 - Vila Marieta, Campinas - SP, 13041-150
          </li>
          <li>
            <i className="fa fa-phone" />
            <span>Telefone : </span>
            (19) 99196-5025
          </li>
          <li>
            <i className="fa fa-envelope" />
            <span>Email : </span>
            espacozen.hathayoga@gmail.com
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;

/* eslint-disable jsx-a11y/anchor-is-valid */
import "../../styles/Footer.css";

const Footer = () => {
  const socialContent = [
    { id: 1, liveLink: "https://www.facebook.com/", icon: "fa-facebook" },
    { id: 2, liveLink: "https://www.twitter.com/", icon: "fa-twitter" },
    { id: 3, liveLink: "https://www.instagram.com/", icon: "fa-instagram" },
    { id: 4, liveLink: "https://www.pinterest.com/", icon: "fa-pinterest" },
    { id: 5, liveLink: "https://www.dribbble.com/", icon: "fa-dribbble" }
  ];

  return (
    <div className="containerFooter">
      <div className="aboutUs">
        <h3>Sobre nós : </h3>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
        distinctio soluta ab unde officia, corrupti, perspiciatis quo
        accusantium dicta officiis dolor iste ad veniam eligendi vero dolore
        placeat eveniet dolorem!
      </div>
      <div className="social">
        <h3>Redes Sociais : </h3>
        <ul style={{ display: "flex", flex: "row", gap: "15px" }}>
          {socialContent.map((item) => (
            <li key={item.id}>
              <a href={item.liveLink} target="_blank" rel="noopener noreferrer">
                <i className={`fa ${item.icon}`} />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="contact">
        <h3>Contato : </h3>
        <ul>
          <li>
            <i className="fa fa-map-marker" />
            <span>Endereço : </span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
            distinctio soluta ab unde officia, corrupti, perspiciatis quo
            accusantium dicta officiis dolor iste ad veniam eligendi vero dolore
            placeat eveniet dolorem!
          </li>
          <li>
            <i className="fa fa-phone" />
            <span>Telefone : </span>
            (11) 99999-9999
          </li>
          <li>
            <i className="fa fa-envelope" />
            <span>Email : </span>
            fakemail.com.br
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;

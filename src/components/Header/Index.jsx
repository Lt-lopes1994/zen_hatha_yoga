/* eslint-disable jsx-a11y/anchor-is-valid */

import Logo from '../../assets/img/Logo_novo_Nilze.jpg';
import '../../styles/Header.css';

function Header() {
  return (
    <header className="containerHeader">
      <img src={Logo} alt="Logo" />
      <h1>Espaço Consciência Zen</h1>

      <nav>
        <ul className="navHeader">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/sobreNos">Sobre</a>
          </li>
          <li>
            <a href="#">Contato</a>
          </li>
          <li>
            <a href="#">Cursos</a>
          </li>
          <li>
            <a href="/aulas">Aulas</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

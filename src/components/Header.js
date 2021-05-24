import logo from '../images/logo.svg';

function Header() {
    return (
      <header className='header page__position-center page__header'>
        <a href="/index" target="_self" className="header__link">
          <img src={logo} alt="Место Россия" className="header__logo" />
        </a>
      </header>
    );
}

export default Header;

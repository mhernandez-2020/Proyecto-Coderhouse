const NavbarComponent = () => {
  return (
    <>
      <nav>
        <ul class="menu">
          <h3 class="logo">MH</h3>
          <li class="item"><a href="#">PRODUCTOS</a>
            <ul class="submenu">
              <li><a href="#">Registradora</a></li>
              <li><a href="#">CPU</a></li>
              <li><a href="#">Lectores</a></li>
            </ul>
          </li>
          <li class="item"><a href="#">SOLUCIONES</a></li>
          <li class="item"><a href="#">SERVICIOS</a></li>
          <li class="item"><a href="#">CONTACTO</a></li>
          <li class="item button"><a href="#">Log In</a></li>
          <li class="item button secondary"><a href="#">Sign Up</a></li>
        </ul>
      </nav>
    </>
  );
};

export default NavbarComponent;

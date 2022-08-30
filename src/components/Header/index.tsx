import { Container, Content } from "./styles";
import { useState } from "react";

export function Header() {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener('scroll', changeBackground);

  return(
      <Container>
          <Content className={navbar ? 'navbar active' : 'navbar'}>
              <a href="#home" >Home</a>
              <a href="#about">About</a>
              <a href="#projects">Projects</a>
          </Content>
      </Container>
  );
}
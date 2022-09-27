import { Container, Content, ActionBar, Emoji } from "./styles";
import { useState } from "react";
import { Link } from "react-router-dom";
import boniImg from "../../assets/boni-computer.webp"

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
              <ActionBar>
                <Link to="/" >Home</Link>
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
              </ActionBar>
              <Emoji>
                <img src={boniImg} alt="boni-emoji"></img>
              </Emoji>
          </Content>
      </Container>
  );
}
import { Container, Content, ActionBar, Emoji, MenuContentStyled } from "./styles";
import { useState } from "react";
import { Link } from "react-router-dom";
import boniImg from "../../assets/boni-computer.webp"
import menu from "../../assets/menu.svg"

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

  function showMenu() {
    const btn = document.getElementById('button-hamburger') as HTMLButtonElement;
    const menu = document.getElementById('menu') as HTMLElement;
    if (btn.onclick) {
      menu.classList.add('responsive');
    } 
  }
    
  return(
      <Container>
          <Content className={navbar ? 'navbar active' : 'navbar'}>

            <MenuContentStyled>
              <button
                id="button-hamburger"
                type="button"
                onClick={showMenu}>
                <img src={menu} alt="hamburger" width="35px"/>
              </button>
            </MenuContentStyled>

              <ActionBar id="menu">
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
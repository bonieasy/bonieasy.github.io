import { Container, Contents, Texts, Image, Icons } from "./styles";
import photoImg from "../../assets/photo.png"
import githubImg from "../../assets/github.svg"
import linkedinImg from "../../assets/linkedin.svg"

export function Content() {
    return(
        <Container id="home">
            <Contents>
                <Texts>
                    <p>Hey! I'm Boni</p>
                    <p>Happy to have you on my page!</p>
                    <p>I'm web developer student, based in Berlin and at the moment I'm dedicating my time to learning more about ReacJS.</p>
                    
                </Texts>
                <Image>
                    <img src={photoImg} alt="profile"></img>
                </Image>
            </Contents>
            <Icons>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/bonieasy"><img src={githubImg} alt="Github-logo" /></a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/ariele-bonifacio/"><img src={linkedinImg} alt="Linkedin-logo" /></a>
            </Icons>
        </Container>
    );
}
import { Container, Contents, Texts, Image, Icons } from "./styles";
import photoImg from "../../assets/photo.png"
import githubImg from "../../assets/github.svg"
import linkedinImg from "../../assets/linkedin.svg"

export function Content() {
    return(
        <Container id="home">
            <Contents>
                <Texts>
                    <p>Hey! I'm Ariele Bonifacio</p>
                    <p>Front-End Developer Junior, based in Berlin</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, dignissimos. Nam dicta autem quia dolorum corporis neque omnis. Eaque nostrum, labore excepturi nihil voluptate non tenetur saepe corrupti eligendi ex.</p>
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
import { Container, Content } from "./styles";
import fileImg from "../../assets/file.svg";
import Pdf from "../../assets/ariele.pdf";

export function About () {
    return(
    <Container>
        <Content id="about">
            <h1>About me</h1>
            <p>
                I'm graduated in System Development and  UX Design and now I'm studying web development technologies.
            </p>
            <p>
                My goals are to become a front-end developer and working with agile teams and help to create long-lasting business relationships.
            </p>
            <a href={Pdf} target="_blank" rel="noreferrer">
                <img src={fileImg} alt="icon-file"/>
                See my Resume
            </a>
        </Content>
    </Container>
    );
}
import { Container, Content } from "./styles";
import fileImg from "../../assets/file.svg";
import Pdf from "../../assets/ariele.pdf";

export function About () {
    return(
    <Container>
        <Content id="about">
            <h1>About me</h1>
            <p>
                My name is Ariele Bonifacio and for a number of years I've dedicated my career to customer support, and now I am working on building user-friendly applications. 
                
            </p>
            <p>I'm graduated in System Development and  UX Design and now I'm studying web development technologies, like HTML, CSS, JavaScript and ReactJS.</p>
            

            <p>
                My professional goal is to become a better developer every day.
            </p>
            
            <a href={Pdf} target="_blank" rel="noreferrer">
                <img src={fileImg} alt="icon-file"/>
                See my Resume
            </a>
        </Content>
    </Container>
    );
}

import { Container, Carousel } from "./styles";
import photo1 from "../../assets/project-1.png";
import photo2 from "../../assets/project-2.png";
import photo3 from "../../assets/project-3.png";

export function Projects () {
    return(

        <Container>
            <h1>Projects</h1>

            <Carousel>
                <div>
                <img src={photo1} alt="project-1"></img>
                </div>

                <div>
                <img src={photo2} alt="project-2"></img>
                </div>

                <div>
                <img src={photo3} alt="project-3"></img>
                </div>

            </Carousel>
        </Container>
    );
}
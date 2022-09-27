import { Container, Slider } from "./styles";
import photo1 from "../../assets/project-1.png";
import photo2 from "../../assets/project-2.png";
import photo3 from "../../assets/project-3.png";

export function Projects () {
    return(

        <Container>
            <h1>Projects</h1>

            <Slider id="projects">
                <div className="card">
                    <figure><img className="image" src={photo1} alt="project-1"></img></figure>

                    <div className="elements">
                        <label>Reveal your destiny</label>
                        <div className="icons">
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/bonieasy/RevealDestiny">Github</a>
                            <a target="_blank" rel="noopener noreferrer" href="https://bonieasy.github.io/RevealDestiny/">View Demo</a>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <figure><img className="image" src={photo2} alt="project-2"></img></figure>

                    <div className="elements">
                        <label>Login page using Google</label>
                        <div className="icons">
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/bonieasy/Login-Helper">Github</a>
                            <a target="_blank" rel="noopener noreferrer" href="https://bonieasy.github.io/Login-Helper/">View Demo</a>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <figure><img className="image" src={photo3} alt="project-3"></img></figure>

                    <div className="elements">
                        <label>Age validation</label>
                        <div className="icons">
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/bonieasy/Age">Github</a>
                            <a target="_blank" rel="noopener noreferrer" href="https://bonieasy.github.io/Age">View Demo</a>
                        </div>
                    </div>
                </div>

            </Slider>
        </Container>
    );
}
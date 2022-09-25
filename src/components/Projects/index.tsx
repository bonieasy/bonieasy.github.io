import { Container, Slider } from "./styles";
import photo1 from "../../assets/project-1.png";
import photo2 from "../../assets/project-2.png";
import photo3 from "../../assets/project-3.png";
import github from "../../assets/github-circle.svg";
import hand from "../../assets/hand.svg";

export function Projects () {
    return(

        <Container>
            <h1>Projects</h1>

            <Slider id="projects">
                <div className="card">
                    <figure><img className="image" src={photo1} alt="project-1"></img></figure>

                    <div className="elements">
                        <label>Simple system that can reveal your destiny, just type your question and your destiny will be revealed.</label>
                        <div className="icons">
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/bonieasy/RevealDestiny"><img src={github} alt="Github-logo" /></a>
                            <a target="_blank" rel="noopener noreferrer" href="https://bonieasy.github.io/RevealDestiny/"><img src={hand} alt="click-to-see" /></a>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <figure><img className="image" src={photo2} alt="project-2"></img></figure>

                    <div className="elements">
                        <label>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo cupiditate esse doloribus a autem maxime atque deserunt sequi quisquam ipsa debitis obcaecati mollitia nesciunt, quasi dolores iure labore sint non!</label>
                        <div className="icons">
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/bonieasy/Login-Helper"><img src={github} alt="Github-logo" /></a>
                            <a target="_blank" rel="noopener noreferrer" href="https://bonieasy.github.io/Login-Helper/"><img src={hand} alt="click-to-see" /></a>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <figure><img className="image" src={photo3} alt="project-3"></img></figure>

                    <div className="elements">
                        <label>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo cupiditate esse doloribus a autem maxime atque deserunt sequi quisquam ipsa debitis obcaecati mollitia nesciunt, quasi dolores iure labore sint non!</label>
                        <div className="icons">
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/bonieasy/Ignite_Lab_Event_Plataform"><img src={github} alt="Github-logo" /></a>
                            <a target="_blank" rel="noopener noreferrer" href="https://bonieasy.github.io/Ignite_Lab_Event_Plataform/"><img src={hand} alt="click-to-see" /></a>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <figure><img className="image" src={photo1} alt="project-1"></img></figure>

                    <div className="elements">
                        <label>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo cupiditate esse doloribus a autem maxime atque deserunt sequi quisquam ipsa debitis obcaecati mollitia nesciunt, quasi dolores iure labore sint non!</label>
                        <div className="icons">
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/bonieasy/RevealDestiny"><img src={github} alt="Github-logo" /></a>
                            <a target="_blank" rel="noopener noreferrer" href="https://bonieasy.github.io/RevealDestiny/"><img src={hand} alt="click-to-see" /></a>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <figure><img className="image" src={photo1} alt="project-1"></img></figure>

                    <div className="elements">
                        <label>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo cupiditate esse doloribus a autem maxime atque deserunt sequi quisquam ipsa debitis obcaecati mollitia nesciunt, quasi dolores iure labore sint non!</label>
                        <div className="icons">
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/bonieasy/RevealDestiny"><img src={github} alt="Github-logo" /></a>
                            <a target="_blank" rel="noopener noreferrer" href="https://bonieasy.github.io/RevealDestiny/"><img src={hand} alt="click-to-see" /></a>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <figure><img className="image" src={photo1} alt="project-1"></img></figure>

                    <div className="elements">
                        <label>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo cupiditate esse doloribus a autem maxime atque deserunt sequi quisquam ipsa debitis obcaecati mollitia nesciunt, quasi dolores iure labore sint non!</label>
                        <div className="icons">
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/bonieasy/RevealDestiny"><img src={github} alt="Github-logo" /></a>
                            <a target="_blank" rel="noopener noreferrer" href="https://bonieasy.github.io/RevealDestiny/"><img src={hand} alt="click-to-see" /></a>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <figure><img className="image" src={photo2} alt="project-2"></img></figure>
                </div>

            </Slider>
        </Container>
    );
}
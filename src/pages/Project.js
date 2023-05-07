import { useParams } from "react-router-dom";
import BtnGitHub from "../components/btnGitHub/BtnGitHub";
import { projects } from "../helpers/projectList";

const Project = () => {

const {id} = useParams();
const project = projects [id];

  return (<main class="section">
    <div class="container">
        <div class="project-details">

            <h1 class="title-1">{project.title} </h1>

            <img src={project.img} alt={project.title} class="project-details__cover"/>

            <div class="project-details__desc">
                <p>Skills: JavaScript, ReactJS, Redux, HTML, CSS, Sass, Git {project.skills}</p>
            </div>

            {project.gitHubLink && (
              <BtnGitHub link="https://gitlab.com/"/>  
            )}
        </div>
    </div>
</main> );
}
 
export default Project;
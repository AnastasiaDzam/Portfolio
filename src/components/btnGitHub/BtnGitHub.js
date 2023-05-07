import "./style.css"
import gitHubIcon from "./gitHub-black.svg";

function BtnGitHub ({Link}) {
  return (
          <a href={Link} target="_blank" rel="noreferrer" className="btn-outline">
            <img src={gitHubIcon} alt="" />
            GitLub repo
          </a>
  );
}

export default BtnGitHub;
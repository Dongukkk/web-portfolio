import './ProjectCard.css';

function ProjectCard({ title, schedule, teamNum, tech, role, summary, videoUrl }) {
    return (
        <div className="project-card-main">
            <div className="project-card-title">{title}</div>
            <div className="project-card-div">
                <div className="project-card-left">
                    <div className="project-card-video">
                        {videoUrl && (
                            <video autoPlay loop muted playesInline src={videoUrl} controls>
                                Your browser does not support the video tag.
                            </video>
                        )}
                    </div>
                </div>
                <div className="project-card-right">
                    <div className="project-card-info">
                        <span className="project-card-label">기간: </span>{schedule}
                    </div>
                    <div className="project-card-info">
                        <span className="project-card-label">기술 스택: </span>{tech}
                    </div>
                    <div className="project-card-info">
                        <span className="project-card-label">역할: </span>{role}
                    </div>
                    {teamNum && (
                        <div className="project-card-info">
                            <span className="project-card-label">팀원 수: </span>{teamNum}명
                        </div>
                    )}
                    <div className="project-card-info">
                        <span className="project-card-label">요약: </span>{summary}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;
import './ProjectCard.css';

function ProjectCard({ title, serviceName, schedule, teamNum, tech, role, summary, videoUrl, link }) {

    const techArray = tech.split(',').map(item => item.trim());

    const linkArray = link.split(',').map(item => item.trim());
    
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
                    <div className='project-card-info-group'>
                        <div className="project-card-service">{serviceName}</div>
                        <div className="project-card-info">
                            <span className="project-card-label">기간: </span>{schedule}
                        </div>
                        <div className="project-card-info">
                            <span className="project-card-label">기술 스택: </span>
                            <div className="project-card-tech-icons">
                                {techArray.map((techName, index) => (
                                <span key={index} className="project-card-tech-icon">
                                    {techName}
                                </span>)
                                )}
                            </div>
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
                    <div className='project-card-bottom'>
                        <div className="project-card-link-label">관련 링크</div>
                        <div className='project-card-link'>
                            <div className='project-card-link-icons'>
                                {linkArray.map((linkUrl, index) => {
                                    let icon;
                                    if (linkUrl.includes('github.com')) {
                                        icon = 'GitHub';
                                    } else if (linkUrl.includes('youtube.com') || linkUrl.includes('youtu.be')) {
                                        icon = 'youtube';
                                    } else if (linkUrl.includes('notion.site')) {
                                        icon = 'notion';
                                    } else {
                                        icon = 'default';
                                    }

                                    const iconSrc = `${process.env.PUBLIC_URL}/image/icon/${icon}.png`;

                                    return (
                                        <a href={linkUrl} target="_blank" rel="noopener noreferrer" key={index}>
                                            <img src={iconSrc} alt={`${icon} icon`} className="project-card-link-icon" />
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;
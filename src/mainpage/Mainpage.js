import './Mainpage.css';
import ProjectCard from "../components/ProjectCard";

function Mainpage() {
    const projects = [
        {
            id: 1,
            title: '1차 프로젝트) 식단/운동/컨디션 기록 등을 제공하는 사용자 건강 관리 서비스 시스템',
            serviceName:'FitShare',
            schedule: '2025.05.28~2025.06.13',
            teamNum: 4,
            tech: 'React, JavaScript, HTML, CSS',
            role: '팀장(기획, 개발, 관리), 프론트엔드 개발 (100%)',
            summary: '운동 초심자들이 쉽게 운동 가이드를 얻을 수 있는 정보 공유 커뮤니티 FitShare를 제작했습니다. ' 
            +'운동 페이지를 메인으로 구현하고 로그인 기능, 메인화면을 비롯한 여러 페이지의 제작을 돕고 페이지 연결과 깃 관리를 담당했습니다.',
            videoUrl: 'https://dongukkk.github.io/web-portfolio/video/project/FitShare.mp4',
            link: 'https://github.com/Dongukkk/fitshare'
        },
        {
            id: 2,
            title: '2차 프로젝트) 프로젝트 소규모 기업 및 팀 단위 사용자들을 위한 일정/할일 통합 관리 웹 서비스',
            serviceName:'BizBoard',
            schedule: '2025.07.28~2025.08.14',
            teamNum: 5,
            tech: 'js, jsp, java, spring, mybatis, oracle, apache tomcat',
            role: '팀장(기획, 개발, 관리), 풀스택 개발',
            summary: '소규모 단위의 팀에서 쉽게 프로젝트를 관리할 수 있는 BizBoard를 제작했습니다. FullCalendar를 메인으로 구현하고, 간트 차트를 제외한 모든 백엔드 부분의 개발과 데이터 연결, 깃 관리를 담당했습니다.',
            videoUrl: 'https://dongukkk.github.io/web-portfolio/video/project/BizBoard.mp4',
            link: 'https://github.com/Dongukkk/BizBoard'
        },
        {
            id: 3,
            title: '3차 프로젝트) 지역 음식점 정보 공유 및 리뷰 서비스 시스템',
            serviceName:'MyPlate',
            schedule: '2025.08.21~2025.09.12',
            teamNum: 3,
            tech: 'HTML,CSS,JS,React, Spring, Eclipse, Git, Github, Notion, OracleDB, Mybatis',
            role: '팀장(기획, 개발, 관리), 풀스택 개발',
            summary: ' 식당 지도/리뷰 관리 기능을 통해 혼밥러와 복지카드 사용자들이 쉽게 정보를 얻을 수 있는 서비스 MyPlate를 제작했습니다. 식당 페이지를 메인으로 구현하였으며 관리자 페이지와 로그인을 제외한 모든 백엔드 부분의 개발과 데이터 연결, 깃 관리를 담당했습니다.',
            videoUrl: 'https://dongukkk.github.io/web-portfolio/video/project/MyPlate.mp4',
            link: 'https://github.com/Dongukkk/My-Plate'
        }
    ];

    return (
        <div className="mainpage-container">
            <h1 className="main-title">김동욱's web-portfolio</h1>
            <h2 className="sub-title">휴먼교육센터 (2025.03.31 ~ 2025.09.19)</h2>
            <div>
                {projects.map(project => (
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        serviceName={project.serviceName}
                        schedule={project.schedule}
                        teamNum={project.teamNum}
                        tech={project.tech}
                        role={project.role}
                        summary={project.summary}
                        videoUrl={project.videoUrl}
                        link={project.link}
                    />
                ))}
            </div>
        </div>
    );
}
export default Mainpage;
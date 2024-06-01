// Projects.js
import React from 'react';
import styled from 'styled-components';

const ProjectsContainer = styled.div`
  background-color: #121212;
  color: #ffffff;
  padding: 80px 20px;
  text-align: center;
`;

const ProjectsHeader = styled.h2`
  font-size: 2.5em;
  margin-bottom: 30px;
  background: linear-gradient(90deg, #ff8a00, #e52e71);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  letter-spacing: 2px;
  font-weight: 700;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 40px;
`;

const ProjectCard = styled.div`
  background-color: #1f1f1f;
  border-radius: 10px;
  padding: 20px;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.5em;
  margin-bottom: 10px;
`;

const ProjectDescription = styled.p`
  font-size: 1em;
  color: #b8b8b8;
`;

const ProjectLink = styled.a`
  display: inline-block;
  margin-top: 15px;
  font-size: 1em;
  color: #ff8a00;
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: border-bottom 0.3s;

  &:hover {
    border-bottom: 1px solid #ff8a00;
  }
`;

const Projects = () => {
  const projects = [
    {
      title: 'Industry Project',
      description: 'Worked on a complex project for a client in the finance industry. The project involved building a secure web application with features like real-time data processing and analytics.',
      link: '#',
    },
    {
      title: 'Personal Project',
      description: 'Developed a personal project, a task management app, using React and Firebase. The app helps users manage their daily tasks with features like reminders, deadlines, and progress tracking.',
      link: '#',
    },
  ];

  return (
    <ProjectsContainer>
      <ProjectsHeader>My Projects</ProjectsHeader>
      <ProjectsGrid>
        {projects.map((project, index) => (
          <ProjectCard key={index}>
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>
            <ProjectLink href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </ProjectLink>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsContainer>
  );
};

export {Projects};

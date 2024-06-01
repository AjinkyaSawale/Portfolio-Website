// Skills.js
import React from 'react';
import styled from 'styled-components';

const SkillsContainer = styled.div`
  background-color: #121212;
  color: #ffffff;
  padding: 80px 20px;
  text-align: center;
`;

const SkillsHeader = styled.h2`
  font-size: 2.5em;
  margin-bottom: 30px;
  background: linear-gradient(90deg, #ff8a00, #e52e71);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  letter-spacing: 2px;
  font-weight: 700;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
  margin-top: 40px;
`;

const SkillCard = styled.div`
  background-color: #1f1f1f;
  border-radius: 10px;
  padding: 20px;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

const SkillIcon = styled.div`
  font-size: 3em;
  margin-bottom: 10px;
`;

const SkillName = styled.div`
  font-size: 1.2em;
  font-weight: 500;
`;

const Skills = () => {
  const skillList = [
    { name: 'HTML', icon: '📄' },
    { name: 'CSS', icon: '🎨' },
    { name: 'JavaScript', icon: '💻' },
    { name: 'React', icon: '⚛️' },
    { name: 'jQuery', icon: '💡' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'Tailwind CSS', icon: '🌬️' },
    { name: 'Bootstrap', icon: '🅱️' },
    { name: 'Figma', icon: '🎨' },
    { name: 'SDLC', icon: '🔄' },
    { name: 'Python', icon: '🐍' },
  ];

  return (
    <SkillsContainer>
      <SkillsHeader>My Skills</SkillsHeader>
      <SkillsGrid>
        {skillList.map((skill, index) => (
          <SkillCard key={index}>
            <SkillIcon>{skill.icon}</SkillIcon>
            <SkillName>{skill.name}</SkillName>
          </SkillCard>
        ))}
      </SkillsGrid>
    </SkillsContainer>
  );
};

export {Skills};

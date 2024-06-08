// ContactMe.js
import React from 'react';
import styled from 'styled-components';
import navIcon1 from '../src/assets/img/nav-icon1.svg'; // LinkedIn icon
import navIcon3 from '../src/assets/img/envelope-regular-light.svg'; // Email icon

const ContactContainer = styled.div`
  background-color: #121212;
  color: #ffffff;
  padding: 40px 20px;
  text-align: center;
  border-radius: 10px;
  max-width: 500px;
  margin: 40px auto;
`;

const ContactHeader = styled.h2`
  font-size: 2.5em;
  margin-bottom: 30px;
  background: linear-gradient(90deg, #ff8a00, #e52e71);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  letter-spacing: 2px;
  font-weight: 700;
`;

const ContactInfo = styled.div`
  font-size: 1.2em;
  line-height: 1.5;
`;

const ContactLink = styled.a`
  color: #ff8a00;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const IconsContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const IconLink = styled.a`
  display: inline-block;
  width: 40px;
  height: 40px;

  img {
    width: 100%;
    height: 100%;
  }
`;

const Footer = () => {
  return (
    <ContactContainer>
      <ContactHeader>Contact Me</ContactHeader>
      <ContactInfo>
        <p>Phone: <ContactLink href="tel:+919145073817">9145073817</ContactLink></p>
        <p>Email: <ContactLink href="mailto:ajinkyasawale.work@gmail.com">ajinkyasawale.work@gmail.com</ContactLink></p>
      </ContactInfo>
      <IconsContainer>
        <IconLink href="https://www.linkedin.com/in/ajinkya-sawale/" target="_blank" rel="noopener noreferrer">
          <img src={navIcon1} alt="LinkedIn" />
        </IconLink>
        <IconLink href="mailto:ajinkyasawale.work@gmail.com">
          <img src={navIcon3} alt="Email" />
        </IconLink>
      </IconsContainer>
    </ContactContainer>
  );
};

export { Footer };

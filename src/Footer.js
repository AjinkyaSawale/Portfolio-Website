// Footer.js
import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #121212;
  color: #ffffff;
  padding: 40px 0;
  text-align: center;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const FooterHeader = styled.h3`
  font-size: 2em;
  margin-bottom: 20px;
  font-weight: 700;
`;

const ContactInfo = styled.p`
  font-size: 1.2em;
  margin: 5px 0;
`;

const SocialLinks = styled.div`
  margin-top: 20px;
`;

const SocialLink = styled.a`
  margin: 0 10px;
  color: #ffffff;
  font-size: 1.5em;
  transition: color 0.3s;

  &:hover {
    color: #ff8a00;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterHeader>Contact Me</FooterHeader>
        <ContactInfo>
          Phone: <a href="tel:+919145073817">9145073817</a>
        </ContactInfo>
        <ContactInfo>
          Email:{" "}
          <a href="mailto:ajinkyasawale.work@gmail.com">
            ajinkyasawale.work@gmail.com
          </a>
        </ContactInfo>
        <SocialLinks>
          <SocialLink
            href="https://www.linkedin.com/in/your-linkedin-profile"
            target="_blank"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin"></i>
          </SocialLink>
          <SocialLink
            href="https://github.com/your-github-profile"
            target="_blank"
            aria-label="GitHub"
          >
            <i className="fab fa-github"></i>
          </SocialLink>
          <SocialLink
            href="https://twitter.com/your-twitter-profile"
            target="_blank"
            aria-label="Twitter"
          >
            <i className="fab fa-twitter"></i>
          </SocialLink>
        </SocialLinks>
      </FooterContent>
    </FooterContainer>
  );
};

export { Footer };

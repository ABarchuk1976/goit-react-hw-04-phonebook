import { StyledSection, SectionTitle } from './Section.styled';

const Section = ({ title, children }) => (
  <StyledSection>
    <SectionTitle>{title}</SectionTitle>
    {children}
  </StyledSection>
);

export default Section;

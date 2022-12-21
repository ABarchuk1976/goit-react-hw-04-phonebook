import { StyledSection, SectionTitle } from './Section.styled';

const Section = ({ title, children }) => (
  <StyledSection>
    <SectionTitle title={title} />
    {children}
  </StyledSection>
);

export default Section;

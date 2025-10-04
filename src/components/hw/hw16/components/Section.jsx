import { SectionWrapper, Title } from "../Style/Section.js";

export const Section = ({ title, children }) => {
  return (
    <SectionWrapper>
      <Title>{title}</Title>
      {children}
    </SectionWrapper>
  );
};

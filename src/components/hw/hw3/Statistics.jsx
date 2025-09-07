import { Section, Title, StatList, Item, Label, Percentage } from "./Style/Statistics";

export const Statistics = ({ stats }) => (
  <Section>
    <Title>Upload stats</Title>

    <StatList>
      {stats.map((stat) => (
        <Item key={stat.id}>
          <Label>{stat.label}</Label>
          <Percentage>{stat.percentage}%</Percentage>
        </Item>
      ))}
    </StatList>
  </Section>
);

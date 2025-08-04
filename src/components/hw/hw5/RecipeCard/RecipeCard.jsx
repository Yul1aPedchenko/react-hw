import {
  Card,
  Img,
  Title,
  InfoList,
  InfoItem,
  LabelWrap,
  Label,
} from "../Styles/RecipeCard";
import { IoMdAlarm } from "react-icons/io";
import { HiOutlineChartPie } from "react-icons/hi2";
import { IoStatsChartOutline } from "react-icons/io5";
export const RecipeCard = ({ recipe }) => {
  const levels = [
    { label: "Easy", value: 0 },
    { label: "Medium", value: 1 },
    { label: "Hard", value: 3 },
  ];
  return (
    <>
      <Card>
        <Img src={recipe.image} alt={recipe.title}></Img>
        <Title>{recipe.title}</Title>
        <InfoList>
          <InfoItem>
            <IoMdAlarm /> {recipe.time}
          </InfoItem>
          <InfoItem>
            <HiOutlineChartPie /> {recipe.servings}
          </InfoItem>
          <InfoItem>
            <IoStatsChartOutline /> {recipe.calories}
          </InfoItem>
        </InfoList>
        <LabelWrap>
          {levels.map(({ label, value }) => (
            <Label
              key={value}
              active={value === recipe.difficulty}
              level={value}
            >
              {label}
            </Label>
          ))}
        </LabelWrap>
      </Card>
    </>
  );
};

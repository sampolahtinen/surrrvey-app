import React from "react";
import {
  SurveyListContainer,
  Title,
  TagLine,
  Survey,
  Separator
} from "./SurveyList.styles";
import { SurveyListProps } from "./types";
import { useTrail } from "react-spring";
import { Link } from "react-router-dom";

const SurveyList: React.FC<SurveyListProps> = ({ surveys }) => {
  const config = { mass: 1, tension: 2000, friction: 200 };
  const trail = useTrail(surveys.length, {
    config,
    opacity: 1,
    from: { opacity: 0 }
  });
  return (
    <SurveyListContainer className="survey-list">
      {trail.map(({ opacity }, index) => (
        <Survey
          key={index}
          style={{ opacity }}
          to={`/surveys/${surveys[index].id}`}
        >
          <Title>{surveys[index].title}</Title>
          <Separator />
          <TagLine>{surveys[index].tagline}</TagLine>
        </Survey>
      ))}
    </SurveyListContainer>
  );
};

export default SurveyList;

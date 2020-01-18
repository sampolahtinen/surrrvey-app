import React, { FC } from "react";
import SurveyList from "../../components/SurveyList";
import { useFetch } from "../../hooks/useFetch";
import { getSurveyDetails } from "../../api/surveys";
import Layout from "../../components/Layout/Layout";
import { SurveyDetailsPageProps } from "./types";

const SurveyDetailsPage: FC<SurveyDetailsPageProps> = ({ match }) => {
  const id = match.params.id;
  const [loading, { survey }, error] = useFetch(getSurveyDetails, id);
  console.log(survey);
  return (
    <Layout>
      <div className="surveys-page">
        {/* //TODO: create loading component */}
        {loading && <span>Loading</span>}
        {!loading && (
          <>
            <h1 style={{ textDecoration: "underline" }}>{survey.title}</h1>
            <h2 style={{ textDecoration: "underline" }}>{survey.tagline}</h2>
          </>
        )}
        {!error && <span>{error}</span>}
      </div>
    </Layout>
  );
};

export default SurveyDetailsPage;

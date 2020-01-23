import React, { FC } from "react";
import SurveyList from "../../components/SurveyList";
import { useFetch } from "../../hooks/useFetch";
import { getAllSurveys } from "../../api/surveys";
import Layout from "../../components/Layout/Layout";

const SurveysPage: FC = () => {
  const [loading, response, error] = useFetch(getAllSurveys);
  return (
    <Layout>
      <div className="surveys-page">
        <h1 style={{ textDecoration: "underline" }}>Surveys</h1>
        {/* Displaying loading component here would damage the UX */}
        {!loading && <SurveyList surveys={response.surveys} />}
        {!error && <span>{error}</span>}
      </div>
    </Layout>
  );
};

export default SurveysPage;

import React, { FC, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { getSurveyDetails, postSurveyCompletion } from "../../api/surveys";
import Layout from "../../components/Layout/Layout";
import { SurveyDetailsPageProps, FormStatus } from "./types";
import { FlexWrapper } from "./SurveyDetailsPage.styles";
import SurveyForm from "../../components/SurveyForm";

const SurveyDetailsPage: FC<SurveyDetailsPageProps> = ({ match }) => {
  const id = match.params.id;
  const [loading, { survey }, error] = useFetch(getSurveyDetails, id);
  const [formStatus, setFormStatus] = useState<FormStatus>({
    status: "",
    isCompleted: false,
    error: ""
  });
  const postCompletion = async (formData: any) => {
    try {
      const response = await postSurveyCompletion(id, formData);
      setFormStatus({
        ...formStatus,
        status: response.data.status,
        isCompleted: true
      });
    } catch (error) {
      setFormStatus({
        ...formStatus,
        error
      });
    }
  };
  return (
    <Layout>
      <FlexWrapper className="survey-deytails-page">
        {/* //TODO: create loading component */}
        {loading && <span>Loading</span>}
        {!loading && (
          <>
            <SurveyForm
              title={survey.title}
              subtitle={survey.tagline}
              questions={survey.questions}
              onSubmit={postCompletion}
              isCompleted={formStatus.isCompleted}
            />
          </>
        )}
        {!error && <span>{error}</span>}
      </FlexWrapper>
    </Layout>
  );
};

export default SurveyDetailsPage;

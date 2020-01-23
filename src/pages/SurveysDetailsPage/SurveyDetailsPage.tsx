import React, { FC, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import whyDidYouRender from "@welldone-software/why-did-you-render";
import { getSurveyDetails, postSurveyCompletion } from "../../api/surveys";
import Layout from "../../components/Layout/Layout";
import { SurveyDetailsPageProps, FormStatus } from "./types";
import { FlexWrapper } from "./SurveyDetailsPage.styles";
import SurveyForm from "../../components/SurveyForm";
import Loading from "../../components/Loading";

whyDidYouRender(React);

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
        {loading ? (
          <Loading>Loading</Loading>
        ) : (
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
        {error && <span>{error}</span>}
      </FlexWrapper>
    </Layout>
  );
};

SurveyDetailsPage.whyDidYouRender = true;

export default SurveyDetailsPage;

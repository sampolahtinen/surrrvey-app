import React from "react";
import { Switch, Route } from "react-router";
import LandingPage from "../pages/LandingPage/LandingPage";
import SurveysPage from "../pages/SurveyPage";
import SurveyDetailsPage from "../pages/SurveysDetailsPage";

const App: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/surveys" component={SurveysPage} />
      <Route path="/surveys/:id" component={SurveyDetailsPage} />
    </Switch>
  );
};

export default App;

import React from "react";
import { Switch, Route, useLocation } from "react-router";
import Layout from "../components/Layout/Layout";
import LandingPage from "../pages/LandingPage/LandingPage";
import SurveysPage from "../pages/SurveyPage";
import { useTransition, animated } from "react-spring";
import SurveyDetailsPage from "../pages/SurveysDetailsPage";

const App: React.FC = () => {
  const location = useLocation();
  const transitions = useTransition(location, location => location.pathname, {
    from: { opacity: 0, transform: "translate3d(0,-100%,0)" },
    enter: { opacity: 1, transform: "translate3d(0,0,0)" },
    leave: { opacity: 0, transform: "translate3d(0,50%,0)" }
  });

  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/surveys" component={SurveysPage} />
      <Route path="/surveys/:id" component={SurveyDetailsPage} />
    </Switch>
    // <>
    //   {transitions.map(({ item: location, props, key }) => (
    //     <animated.div key={key} style={props}>
    //       <Switch location={location}>
    //         <Route exact path="/" component={LandingPage} />
    //         <Route exact path="/surveys" component={SurveysPage} />
    //         {/* <Route exact path="/surveys/:id" component={SurveyPage} /> */}
    //       </Switch>
    //     </animated.div>
    //   ))}
    // </>
  );
};

export default App;

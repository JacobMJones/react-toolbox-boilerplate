import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import * as ROUTES from "../../Constants/routes";
import Homepage from "../../Pages/HomePage";
import OtherPage from "../../Pages/Other";


function RouterComponent() {
  return (
    <React.Fragment>
      <Router>
        <div>
          <Route exact path={ROUTES.Homepage} component={Homepage} />
          <Route path={ROUTES.OtherPage} component={OtherPage}/>
        </div>
      </Router>
    </React.Fragment>
  );
}
export default RouterComponent;

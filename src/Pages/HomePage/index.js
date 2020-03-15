import React, { useState, useEffect } from "react";
import LinkButton from "../../Components/LinkButton";
import {useStateValue} from "../../State/StateProvider";
import {Link} from "react-router-dom";
import LocalStorage from "../../Components/LocalStorage"
import {
  Body,
  SectionA,
  SectionB,
  SectionC,
  SectionD,
  Header,
  Button
} from "./styles";

import data from "../../Data/mock.json";


function Homepage() {

  //Global State
  const [{ globalCounter }, counterDispatch] = useStateValue();
  const [{ userData }, userDataDispatch] = useStateValue();
  
  //Local State
  const [localCounter, setLocalCounter] = useState(0);

  //LocalStorage, data stays on refresh, stored in component state, not global
  const [storedCount, setStoredCount] = LocalStorage(
    'myValueInLocalStorage'
  );

  //demonstrate with simple weather fetch
  useEffect(() => { }, []);

  return (
    <Body>
      <Header>Hello {userData.name !== 'Unknown' && userData.name} </Header>
      <SectionA>
        <Button onClick={() => { setStoredCount(localCounter + 1); setLocalCounter(localCounter + 1) }}>Local State</Button>
        <p> Counter in local state</p>
        <p>{localCounter}</p>
        <p> Stored in localStorage, persists on refresh</p>
        <p>{storedCount} </p>
      </SectionA>
      <SectionB>
        <Button
          onClick={() =>
            counterDispatch({
              type: "changeCounter",
              newGlobalCounter: globalCounter + 1
            })
          }
        >
          Global State
        </Button>
        <p>Counter in global state provided through Context API</p>

        <p>{globalCounter}</p>
      </SectionB>

      <SectionC>
        <LinkButton label={"Form Page"} to={"other-page"} />
        <p>
          This link button is its own component. <br />
          It uses a react router's useHistory to change the url.
        </p>
        <p>
          This is a standard url link{" "}
          <Link to="/other-page">Form Example Page</Link>
        </p>
      </SectionC>
      <SectionD>
        <p>Description Here</p>
      </SectionD>
    </Body>
  );
}

export default Homepage;

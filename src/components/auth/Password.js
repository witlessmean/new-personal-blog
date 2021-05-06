import { useState } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

const StyledForm = styled.form`
  position: relative;
`;

const Password = ({history}) => {
  
  const [passwordState, setPasswordState] = useState("");

  const onInputChange = (e) => {
    e.persist();
    setPasswordState(e.target.value);
  };

  const passwordSubmit = (e) => {
    e.preventDefault();
    history.push("/admin-page");
  };

  return (
    
    <StyledForm onSubmit={passwordSubmit}>
      <label htmlFor="password">password</label>
      <input
        type="password"
        name="password"
        id="password"
        placeholder="password"
        onChange={onInputChange}
        value={passwordState}
      />
      <button type="submit">submit</button>
    </StyledForm>
    
  );
};

export default withRouter(Password);

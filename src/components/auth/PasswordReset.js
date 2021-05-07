import { useState } from "react";
import { withRouter } from "react-router-dom";
import { schema } from "../../utils/validation";
import { v4 as uuidv4 } from 'uuid'
import styled from "styled-components";

const StyledForm = styled.form`
  position: relative;
`;

const StyledValidationError = styled.p`
  color: red;
  font-weight: bolder;
`;

const PasswordReset = ({ history }) => {
  const [passwordResetState, setPasswordResetState] = useState({
    initialPW: "",
    checkPW: "",
  });

  const [err, setErr] = useState(false);
  const [validateErr, setValidateErr] = useState(false);

  const onInputChange = (e) => {
    e.persist();
    const state = {
      ...passwordResetState,
      [e.target.name]: e.target.value,
    };
    setPasswordResetState(state);
  };

  const passwordResetSubmit = (e) => {
    e.preventDefault();
    const validated = schema.validate(passwordResetState.initialPW, { list: true });
    setValidateErr(validated);
    if (passwordResetState.initialPW === passwordResetState.checkPW) {
      history.push("/admin-page");
      setErr(false);
    } else {
      setErr(true);
    }
  };

  return (
    <>
      <StyledForm onSubmit={passwordResetSubmit}>
        <label htmlFor="passwordReset">Reset Password</label>
        <input
          type="password"
          name="initialPW"
          id="passwordReset"
          placeholder="reset password"
          onChange={onInputChange}
          value={passwordResetState.initialPW}
        />
        <label htmlFor="passwordResetCheck">Re-enter Password</label>
        <input
          type="password"
          name="checkPW"
          id="passwordResetCheck"
          placeholder="re-enter password"
          onChange={onInputChange}
          value={passwordResetState.checkPW}
        />
        {err && (
          <StyledValidationError>
            Both Password Fields Must Match
          </StyledValidationError>
        )}
        {validateErr && validateErr.map((err) => {
         return <StyledValidationError key={uuidv4()}>Passwords require {err}</StyledValidationError>
        })}
        <button type="submit">submit</button>
      </StyledForm>
    </>
  );
};

export default withRouter(PasswordReset);

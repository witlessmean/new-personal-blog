import { useState, useEffect, useRef, useCallback } from "react";
import { withRouter } from "react-router-dom";
import { schema } from "../../utils/validation";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
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
    checkedPW: "",
  });
  const [errMatch, setErrMatch] = useState(false);
  const [validateErr, setValidateErr] = useState([]);
  const [pwChange, setPwChange] = useState(false);
  const [showErrs, setShowErrs] = useState(false);

  const onInputChange = (e) => {
    e.persist();
    const state = {
      ...passwordResetState,
      [e.target.name]: e.target.value,
    };
    setPasswordResetState(state);
  };

  useEffect(() => {
    setValidateErr(
      schema.validate(passwordResetState.initialPW, { list: true })
    );

    return () => {};
  }, [passwordResetState.initialPW]);

  const passwordResetSubmit = (e) => {
    e.preventDefault();

    if (passwordResetState.initialPW !== passwordResetState.checkedPW) {
      setErrMatch(true);
    } else if (validateErr.length >= 1) {
      setShowErrs(true);
      setErrMatch(false);
    } else {
      setShowErrs(false);
      setErrMatch(false);
      setPwChange(true);
    }
  };

  useEffect(() => {
    pwChange && history.push("/admin-page");
    return () => {};
  }, [pwChange]);

  useEffect(() => {
    const abortController = new AbortController();

    axios
      .post(
        "http://localhost:8080/admin-page/password-reset",
        {
          initialPW: passwordResetState.initialPW,
          checkedPW: passwordResetState.checkedPW,
          pwChange: pwChange,
        },
        { signal: abortController.signal }
      )
      .then((result) => {
        //console.log(result)
      })
      .catch((err) => {
        console.error(err);
      });

    return () => {
      abortController.abort();
    };
  }, [pwChange]);

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

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
          ref={inputRef}
        />
        <label htmlFor="passwordResetCheck">Re-enter Password</label>
        <input
          type="password"
          name="checkedPW"
          id="passwordResetCheck"
          placeholder="re-enter password"
          onChange={onInputChange}
          value={passwordResetState.checkedPW}
        />
        {errMatch && (
          <StyledValidationError>
            Both Password Fields Must Match
          </StyledValidationError>
        )}
        {showErrs &&
          validateErr.map((err) => {
            return (
              <StyledValidationError key={uuidv4()}>
                Passwords require {err}
              </StyledValidationError>
            );
          })}
        <button type="submit">submit</button>
      </StyledForm>
    </>
  );
};

export default withRouter(PasswordReset);

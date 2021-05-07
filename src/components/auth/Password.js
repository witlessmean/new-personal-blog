import { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import axios from 'axios'
import styled from "styled-components";


const StyledForm = styled.form`
  position: relative;
`;

const StyledValidationError = styled.p`
  color: red;
  font-weight: bolder;
`;

const Password = ({history}) => {
  
  const [passwordState, setPasswordState] = useState("");
  const [responseState, setResponseState] = useState("");
  const [err, setErr] = useState(false)

  const onInputChange = (e) => {
    e.persist();
    setPasswordState(e.target.value);
  };

  const passwordSubmit = (e) => {
    e.preventDefault();
      if(responseState === 'success'){
        history.push('/admin-page');
        setErr(false);
        setPasswordState("");
      }else{
        history.push('/admin-password');
        setErr(true);
        setPasswordState("");
      }
   };

  useEffect(() => {
  const abortController = new AbortController();
  
  axios.post("http://localhost:8080/admin-password", {password: passwordState}, { signal: abortController.signal } ).then((result) => {
    const resultData = result.data
    console.log(resultData)
  setResponseState(resultData); 
  }).catch((err) => {
    console.error(err)
  })
  return () => {
    abortController.abort()
  }
}, [passwordState]);



  return (
    <>
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
      {err && <StyledValidationError>Incorrect Password</StyledValidationError> }
    </StyledForm>
    </>
  );
};

export default withRouter(Password);


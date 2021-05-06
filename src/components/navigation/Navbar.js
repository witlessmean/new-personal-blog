import styled from "styled-components";
import { CustomAdminButton } from "../buttons/AdminButton";
import { withRouter } from "react-router-dom";

const StyledNavBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 9vh;
  background-color: #151515;
  opacity: 0.85;
  -webkit-box-shadow: 0 2px 10px rgba(0, 0, 0, 1);
  -moz-box-shadow: 0 2px 10px rgba(0, 0, 0, 1);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 1);
  position: sticky;
  top: 0;
  z-index: 1;
`;

const Navbar = ({location}) => {
  return (
    <StyledNavBar>
      {location.pathname === "/" ? (
        <CustomAdminButton to="/admin-password"> admin </CustomAdminButton>
      ) : (
        <CustomAdminButton to="/"> Home </CustomAdminButton>
      )}
    </StyledNavBar>
  );
};

export default withRouter(Navbar);

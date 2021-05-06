import styled from "styled-components";
import { Link } from "react-router-dom";

export const CustomAdminButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  width: 6rem;
  font-size: 1.6rem;
  font-weight: 900;
  color: #fff;
  background-color: #cc1d34;
  cursor: pointer;
  margin: 1vw;
  height: 4rem;
  text-align: center;
  border: none;
  border-radius: 8px;
  -moz-transition: all 0.4s ease-in-out;
  -o-transition: all 0.4s ease-in-out;
  -webkit-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
  &:hover {
    background-position: 100% 0;
    -moz-transition: all 0.4s ease-in-out;
    -o-transition: all 0.4s ease-in-out;
    -webkit-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
    &:focus {
      outline: none;
    }
    background-image: linear-gradient(
      to right,
      #eb3941,
      #f15e64,
      #e14e53,
      #e2373f
    );
    box-shadow: 0 5px 15px rgba(242, 97, 103, 0.4);
  }
`;

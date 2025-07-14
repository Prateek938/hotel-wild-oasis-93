import styled from "styled-components";
import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

//to align spinner on whole page
const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  //1. load authenticated user
  const { user, isLoading, isAuthenticated } = useUser();

  //2. if there is NO auth user,redirect to the /login
  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate("/login");
      //so to not send user to login when they are loading lol,as they are still not
      //authenticated while loading in to the app
    },
    [isAuthenticated, isLoading, navigate]
  );

  //3. while loading, show a spinner
  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  //4. if there IS a user,render the app

  if (isAuthenticated) return children;
}

export default ProtectedRoute;

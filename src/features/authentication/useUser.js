import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/apiAuth";

//used to store user data in cache if they were already in session
//so no need to download user data each time when necessary
export function useUser() {
  const { isLoading, data: user } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });

  return { isLoading, user, isAuthenticated: user?.role === "authenticated" };
  //if user ka role is authenticated then isAuthenticated is returned true for
  //for protected route
}

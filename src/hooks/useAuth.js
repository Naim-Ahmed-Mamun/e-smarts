import { useContext } from "react";
import { GetContext } from "../context/ContextProvider";

const useAuth = () => {
    const auth = useContext(GetContext)
    return auth.authContext
}
export default useAuth;
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const isLoggedIn = useSelector(
    (state: RootState) => state.account.isLoggedIn
  );
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    } else {
      navigate("/");
    }
  }, [isLoggedIn]);

  return <div>NotFound</div>;
};

export default NotFound;

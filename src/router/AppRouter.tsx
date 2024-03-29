import Dashboard from "@/pages/Dashboard";
import NotFound from "@/pages/NotFound";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import LoginRouter from "./LoginRouter";
const AppRouter = () => {
  const isLoggedIn = useSelector(
    (state: RootState) => state.account.isLoggedIn
  );
  if (!isLoggedIn) {
    return <LoginRouter />;
  }
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;

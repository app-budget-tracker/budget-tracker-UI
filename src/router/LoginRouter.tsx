import Login from "@/pages/Login";
import NotFound from "@/pages/NotFound";
import { Route, Routes } from "react-router-dom";

const LoginRouter = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default LoginRouter;

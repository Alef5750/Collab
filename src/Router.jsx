import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./components/Home";
import SignupOrLogin from "./components/SignupOrLogin";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/login" element={<SignupOrLogin />} />
      </Route>
    </Routes>
  );
}

import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./components/Home";
import Login from "./components/Login";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  );
}

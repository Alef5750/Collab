import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./components/Home";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

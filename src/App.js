import { Route, Routes } from "react-router-dom";
import AuthenticationScreen from "./screens/AuthenticationScreen";
import Header from "./components/Header";

export default function App() {
  return (
    <div className="App screen-container">
      <Header type={true} />
      <Routes>
        <Route path="/" element={<AuthenticationScreen />} />
        <Route path="/auth" element={<AuthenticationScreen />} />
      </Routes>
    </div>
  )
}
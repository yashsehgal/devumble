import { Route, Routes } from "react-router-dom";
import AuthenticationScreen from "./screens/AuthenticationScreen";
import Header from "./components/Header";
import ProfileCustomization from "./screens/ProfileCustomization";
import Landing from "./screens/Landing";

export default function App() {
  return (
    <div className="App screen-container">
      <Header type={false} />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<AuthenticationScreen />} />
        <Route path="/create-profile" element={<ProfileCustomization />} />
      </Routes>
    </div>
  )
}
import "./shaders/community.css";
import { KageLandingPage } from "./shaders/landing-pages/LandingPages";

export default function App() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
      }}
    >
      <KageLandingPage />
    </div>
  );
}

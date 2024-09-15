import "./App.css";
import ZoomImage from "./zoom-image/ZoomImage";
import sampleImagePath from "@/assets/sample2.png";

function App() {
  return (
    <div>
      <ZoomImage src={sampleImagePath} width={100} height={100} />
    </div>
  );
}

export default App;

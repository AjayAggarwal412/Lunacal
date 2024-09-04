import { useState } from "react";
import "./App.css";
import TopHalf from "./components/TopHalf";
import BottomHalf from "./components/BottomHalf";

function App() {
  const [images, setImages] = useState([
    require("./components/icons/image.jpeg"), // Placeholder image
    require("./components/icons/image.jpeg"), // Placeholder image
    require("./components/icons/image.jpeg"), // Placeholder image
  ]);
  const [uploadedImages, setUploadedImages] = useState([]);

  const handleImageUpload = (event) => {
    const files = event.target.files;
    if (files.length > 0) {
      const newImages = [];
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();
        reader.onloadend = () => {
          newImages.push(reader.result);
          if (newImages.length === files.length) {
            setUploadedImages((prevImages) => [...newImages, ...prevImages]);
          }
        };
        reader.readAsDataURL(file);
      }
    }
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/2"></div>

      <div className="w-1/2 p-2 flex flex-col">
        <TopHalf />
        <div className="w-5/6 mx-auto border-t-4 border-black mt-2 mb-2 rounded-3xl"></div>
        <BottomHalf
          images={images}
          uploadedImages={uploadedImages}
          handleImageUpload={handleImageUpload}
        />
        <div className="w-5/6 mx-auto border-t-4 border-black mb-4 rounded-3xl"></div>
      </div>
    </div>
  );
}

export default App;

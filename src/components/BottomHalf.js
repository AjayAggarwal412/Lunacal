import ImageUploader from "./ImageUploader";
import ImageGrid from "./ImageGrid";

const BottomHalf = ({ images, uploadedImages, handleImageUpload }) => (
  <div
    className="flex-1 flex flex-col bg-customGray rounded-2xl m-4 relative"
    style={{
      boxShadow: "5.67px 5.67px 3.78px 0px #00000066",
    }}
  >
    <img
      src={require("./icons/question.png")}
      alt="Bottom Left Image"
      className="absolute top-5 left-3 w-6 h-6"
    />

    <div className="flex items-center justify-between p-4">
      <button className="text-white bg-tabColor py-4 px-8 rounded-xl text-[20px] font-medium ml-9">
        Gallery
      </button>
      <div className="flex items-center space-x-2">
        <ImageUploader handleImageUpload={handleImageUpload} />
        <div className="flex items-center space-x-6 mt-1">
          <button
            className="text-white bg-gray-700 font-semibold py-3 px-3 ml-6 rounded-full"
            style={{
              background:
                "linear-gradient(139.14deg, #303439 12.4%, #161718 94.96%)",
              boxShadow:
                "6px 6px 40px 2px #101213, -4px -4px 20px -5px #96BEE7",
            }}
          >
            <img
              src={require("./icons/back.png")}
              alt="Left Arrow"
              className="w-5 h-5"
            />
          </button>
          <button
            className="text-white bg-gray-700 font-semibold py-3 px-3 rounded-full"
            style={{
              background:
                "linear-gradient(139.14deg, #303439 12.4%, #161718 94.96%)",
              boxShadow:
                "6px 6px 40px 2px #101213, -4px -4px 20px -5px #96BEE7",
            }}
          >
            <img
              src={require("./icons/next.png")}
              alt="Right Arrow"
              className="w-5 h-5"
            />
          </button>
        </div>
      </div>
    </div>

    <ImageGrid images={images} />
    {uploadedImages.length > 0 && (
      <div className="grid grid-cols-3 gap-4 mt-8 ml-14 mb-5">
        {uploadedImages.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Uploaded Image ${index + 1}`}
            className="image w-[190px] h-[179px] object-cover rounded-[24px] filter grayscale hover:filter-none transition-all"
          />
        ))}
      </div>
    )}
  </div>
);

export default BottomHalf;

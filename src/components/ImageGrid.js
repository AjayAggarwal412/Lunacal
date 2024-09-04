const ImageGrid = ({ images }) => (
  <div className="relative flex justify-center items-center mt-8 space-x-8 mb-5">
    <img
      src={require("./icons/more.png")}
      alt="More Image"
      className="absolute top-5 left-3 w-6 h-8"
    />

    {images.map((src, index) => (
      <img
        key={index}
        src={src}
        alt={`Image ${index + 1}`}
        className="image w-[190px] h-[179px] object-cover rounded-[24px] filter grayscale hover:filter-none transition-all"
      />
    ))}
  </div>
);

export default ImageGrid;

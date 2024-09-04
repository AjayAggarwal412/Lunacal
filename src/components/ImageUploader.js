const ImageUploader = ({ handleImageUpload }) => (
  <>
    <input
      type="file"
      id="fileUpload"
      accept="image/*"
      onChange={handleImageUpload}
      multiple
      style={{ display: "none" }}
    />
    <label
      htmlFor="fileUpload"
      className="text-white bg-tabColor font-extrabold py-4 px-6 rounded-full text-[12px] mr-4 cursor-pointer"
      style={{
        boxShadow: `
            0px 3.26px 3.26px 0px #FFFFFF26 inset,   
            0px 0px 48.91px 0px #FFFFFF0D inset,     
            9px 10px 7.1px 0px #00000066,           
            -0.5px -0.5px 6.9px 0px #FFFFFF40        
          `,
      }}
    >
      + ADD IMAGE
    </label>
  </>
);

export default ImageUploader;

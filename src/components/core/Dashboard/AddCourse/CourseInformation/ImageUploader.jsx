import React, { useState } from "react";

const ImageUploader = ({ setImage }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && (file.type === "image/png" || file.type === "image/jpeg" || file.type === "video/mp4")) {
      setSelectedFile(file);
      const url = URL.createObjectURL(file);
      setImageUrl(url);

      // Pass the selected image file to the parent component using the callback function
      setImage(file);
    } else {
      alert("Please upload a valid PNG or JPEG file.");
    }
  };

  return (
    
      
      <div className="flex items-center justify-center w-full">
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            {imageUrl ? (
              <img
                src={imageUrl}
                alt="Selected file"
                className="w-20 h-20 mb-4 object-cover"
              />
            ) : (
              <svg
                className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
            )}
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold">Click to upload</span> or drag and
              drop
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              PNG or JPEG (MAX. 800x400px)
            </p>
          </div>
          <input
            id="dropzone-file"
            type="file"
            accept=".png, .jpg, .mp4"
            onChange={handleFileChange}
            className="hidden"
          />
        </label>
        {selectedFile && (
          <div className="mt-4">
            <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">
              Selected File:
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {selectedFile.name}
            </p>
          </div>
        )}
      </div>
  );
};

export default ImageUploader;

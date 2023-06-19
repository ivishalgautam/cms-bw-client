import React from "react";

const FilesDetails = ({ formData }) => {
  function handleFileChange(e) {
    const files = e.target.files;
    for (let i = 0; i < files.length; i++) {
      formData.append("files", files[i]);
    }
    console.log(files);
  }
  return (
    <div className="w-full">
      <h2 className="text-2xl capitalize">files details</h2>
      <div className="mt-3 grid grid-cols-3 gap-5">
        {/* file content */}
        <div className="form-group input-container">
          <label htmlFor="file">Files</label>
          <input
            type="file"
            id="file"
            name="files"
            className="custom-file-input"
            // placeholder="Select files"
            onChange={handleFileChange}
            multiple
          />
        </div>
      </div>
    </div>
  );
};

export default FilesDetails;

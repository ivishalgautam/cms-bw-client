import React from "react";

const FilesDetails = ({ formData }) => {
  function handleFileChange(e) {
    const files = e.target.files;
    for (let i = 0; i < files.length; i++) {
      const originalFileName = files[i].name;
      const trimmedName = originalFileName.trim().replace(/\s+/g, "_");
      console.log(trimmedName);
      formData.append("files", files[i], trimmedName);
    }
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
            className="block w-full text-sm text-slate-500 file:mr-4 file:rounded-full file:border-0 file:bg-violet-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-primary hover:file:bg-violet-100"
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

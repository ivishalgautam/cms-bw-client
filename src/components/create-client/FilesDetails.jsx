import React from "react";
import { useDispatch } from "react-redux";
import {
  setFileContentType,
  setFileData,
  setFileName,
} from "../../store/features/inputSlice";

const FilesDetails = () => {
  const dispatch = useDispatch();

  function handleFileChange(e) {
    const files = e.target.files;
    if (files.length > 0) {
      const formData = new FormData();
      for (let i = 0; i < files.length; i++) {
        formData.append("files", files[i]);
      }
      console.log(formData.get("files"));
      dispatch(setFileName(formData.get("files").name));
      dispatch(
        setFileData({
          name: formData.get("files").name,
          size: formData.get("files").size,
          lastModified: formData.get("files").lastModified,
        })
      );
      dispatch(setFileContentType(formData.get("files").type));
    }
  }
  return (
    <div className="w-full">
      <h2 className="text-2xl capitalize">files details</h2>
      <div className="grid grid-cols-3 gap-5 mt-3">
        {/* file content */}
        <div className="form-group input-container">
          <label htmlFor="file">Files</label>
          <input
            type="file"
            id="file"
            name="file"
            className="form-input"
            placeholder="Select files"
            onChange={handleFileChange}
          />
        </div>
      </div>
    </div>
  );
};

export default FilesDetails;

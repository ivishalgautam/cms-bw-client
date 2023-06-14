import React from "react";
import { useDispatch } from "react-redux";
import {
  setFacebookPass,
  setFacebookPath,
  setFacebookUsername,
  setInstagramPass,
  setInstagramPath,
  setInstagramUsername,
  setLinkedInPass,
  setLinkedInPath,
  setLinkedInUsername,
  setTwitterPass,
  setTwitterPath,
  setTwitterUsername,
} from "../../store/features/inputSlice";

const SocialsDetails = () => {
  const dispatch = useDispatch();
  return (
    <div className="w-full">
      <h2 className="text-2xl capitalize">client details</h2>
      <div className="mt-3 grid grid-cols-2 gap-5">
        {/* facebook */}
        <div className="form-group input-container">
          <label>Facebook</label>
          <input
            type="text"
            id="facebook_username"
            name="facebook_username"
            className="form-input"
            placeholder="Username"
            onChange={(e) => dispatch(setFacebookUsername(e.target.value))}
          />
          <input
            type="text"
            id="facebook_pass"
            name="facebook_pass"
            className="form-input"
            placeholder="Password"
            onChange={(e) => dispatch(setFacebookPass(e.target.value))}
          />
          <input
            type="url"
            id="facebook_path"
            name="facebook_path"
            className="form-input"
            placeholder="Enter profile url"
            onChange={(e) => dispatch(setFacebookPath(e.target.value))}
          />
        </div>

        {/* instagram */}
        <div className="form-group input-container">
          <label>Instagram</label>
          <input
            type="text"
            id="instagram_username"
            name="instagram_username"
            className="form-input"
            placeholder="Username"
            onChange={(e) => dispatch(setInstagramUsername(e.target.value))}
          />
          <input
            type="text"
            id="instagram_pass"
            name="instagram_pass"
            className="form-input"
            placeholder="Password"
            onChange={(e) => dispatch(setInstagramPass(e.target.value))}
          />
          <input
            type="url"
            id="instagram_path"
            name="instagram_path"
            className="form-input"
            placeholder="Enter profile url"
            onChange={(e) => dispatch(setInstagramPath(e.target.value))}
          />
        </div>

        {/* lnkedin */}
        <div className="form-group input-container">
          <label>LinkedIn</label>
          <input
            type="text"
            id="linkedin_username"
            name="linkedin_username"
            className="form-input"
            placeholder="Username"
            onChange={(e) => dispatch(setLinkedInUsername(e.target.value))}
          />
          <input
            type="text"
            id="linkedin_pass"
            name="linkedin_pass"
            className="form-input"
            placeholder="Password"
            onChange={(e) => dispatch(setLinkedInPass(e.target.value))}
          />
          <input
            type="url"
            id="linked_path"
            name="linked_path"
            className="form-input"
            placeholder="Enter profile url"
            onChange={(e) => dispatch(setLinkedInPath(e.target.value))}
          />
        </div>

        {/* twitter */}
        <div className="form-group input-container">
          <label>Twitter</label>
          <input
            type="text"
            id="twitter_username"
            name="twitter_username"
            className="form-input"
            placeholder="Username"
            onChange={(e) => dispatch(setTwitterUsername(e.target.value))}
          />
          <input
            type="text"
            id="twitter_pass"
            name="twitter_pass"
            className="form-input"
            placeholder="Password"
            onChange={(e) => dispatch(setTwitterPass(e.target.value))}
          />
          <input
            type="url"
            id="twitter_path"
            name="twitter_path"
            className="form-input"
            placeholder="Enter profile url"
            onChange={(e) => dispatch(setTwitterPath(e.target.value))}
          />
        </div>
      </div>
    </div>
  );
};

export default SocialsDetails;

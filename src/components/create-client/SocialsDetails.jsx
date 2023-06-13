import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setFacebookPass,
  setFacebookUsername,
  setInstagramPass,
  setInstagramUsername,
  setLinkedInPass,
  setLinkedInUsername,
  setTwitterPass,
  setTwitterUsername,
} from "../../store/features/inputSlice";

const SocialsDetails = () => {
  const dispatch = useDispatch();
  return (
    <div className="w-full">
      <h2 className="text-2xl capitalize">client details</h2>
      <div className="grid grid-cols-2 gap-5 mt-3">
        {/* facebook */}
        <div className="form-group input-container">
          <p>Facebook</p>
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
        </div>

        {/* instagram */}
        <div className="form-group input-container">
          <p>Instagram</p>
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
        </div>

        {/* lnkedin */}
        <div className="form-group input-container">
          <label htmlFor="facebook">LinkedIn</label>
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
            id="facebook_pass"
            name="facebook_pass"
            className="form-input"
            placeholder="Password"
            onChange={(e) => dispatch(setLinkedInPass(e.target.value))}
          />
        </div>
        {/* twitter */}
        <div className="form-group input-container">
          <label htmlFor="facebook">Twitter</label>
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
        </div>
      </div>
    </div>
  );
};

export default SocialsDetails;

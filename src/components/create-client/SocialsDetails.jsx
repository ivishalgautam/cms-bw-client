import React from "react";
import { useDispatch } from "react-redux";
import { setFieldValue } from "../../store/features/inputSlice";

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
            onChange={(e) =>
              dispatch(
                setFieldValue({
                  field: "facebookUsername",
                  value: e.target.value,
                })
              )
            }
          />
          <input
            type="text"
            id="facebook_pass"
            name="facebook_pass"
            className="form-input"
            placeholder="Password"
            onChange={(e) =>
              dispatch(
                setFieldValue({
                  field: "facebookPass",
                  value: e.target.value,
                })
              )
            }
          />
          <input
            type="url"
            id="facebook_path"
            name="facebook_path"
            className="form-input"
            placeholder="Enter profile url"
            onChange={(e) =>
              dispatch(
                setFieldValue({
                  field: "facebookPath",
                  value: e.target.value,
                })
              )
            }
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
            onChange={(e) =>
              dispatch(
                setFieldValue({
                  field: "instaUsername",
                  value: e.target.value,
                })
              )
            }
          />
          <input
            type="text"
            id="instagram_pass"
            name="instagram_pass"
            className="form-input"
            placeholder="Password"
            onChange={(e) =>
              dispatch(
                setFieldValue({
                  field: "instaPass",
                  value: e.target.value,
                })
              )
            }
          />
          <input
            type="url"
            id="instagram_path"
            name="instagram_path"
            className="form-input"
            placeholder="Enter profile url"
            onChange={(e) =>
              dispatch(
                setFieldValue({
                  field: "instaPath",
                  value: e.target.value,
                })
              )
            }
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
            onChange={(e) =>
              dispatch(
                setFieldValue({
                  field: "linkedInUsername",
                  value: e.target.value,
                })
              )
            }
          />
          <input
            type="text"
            id="linkedin_pass"
            name="linkedin_pass"
            className="form-input"
            placeholder="Password"
            onChange={(e) =>
              dispatch(
                setFieldValue({
                  field: "linkedInPass",
                  value: e.target.value,
                })
              )
            }
          />
          <input
            type="url"
            id="linked_path"
            name="linked_path"
            className="form-input"
            placeholder="Enter profile url"
            onChange={(e) =>
              dispatch(
                setFieldValue({
                  field: "linkedInPath",
                  value: e.target.value,
                })
              )
            }
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
            onChange={(e) =>
              dispatch(
                setFieldValue({
                  field: "twitterUsername",
                  value: e.target.value,
                })
              )
            }
          />
          <input
            type="text"
            id="twitter_pass"
            name="twitter_pass"
            className="form-input"
            placeholder="Password"
            onChange={(e) =>
              dispatch(
                setFieldValue({
                  field: "twitterPass",
                  value: e.target.value,
                })
              )
            }
          />
          <input
            type="url"
            id="twitter_path"
            name="twitter_path"
            className="form-input"
            placeholder="Enter profile url"
            onChange={(e) =>
              dispatch(
                setFieldValue({
                  field: "twitterPath",
                  value: e.target.value,
                })
              )
            }
          />
        </div>
      </div>
    </div>
  );
};

export default SocialsDetails;

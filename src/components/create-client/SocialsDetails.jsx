import React from "react";
import { useDispatch } from "react-redux";
import { setFieldValue } from "../../store/features/input/inputSlice";

const SocialsDetails = () => {
  const dispatch = useDispatch();
  return (
    <div className="w-full">
      <h2 className="text-2xl capitalize">client details</h2>
      <div className="mt-3 grid grid-cols-2 gap-5">
        <div>
          {/* facebook */}
          <p>Facebook</p>
          <div className="space-y-2">
            {/* username */}
            <div className="form-group input-container relative">
              <input
                type="text"
                id="facebook_username"
                name="facebook_username"
                className="form-input peer"
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
              <label htmlFor="facebook_username" className="form-label">
                Username
              </label>
            </div>

            {/* password */}
            <div className="form-group input-container relative">
              <input
                type="text"
                id="facebook_pass"
                name="facebook_pass"
                className="form-input peer"
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
              <label htmlFor="facebook_pass" className="form-label">
                Password
              </label>
            </div>

            {/* profile link */}
            <div className="form-group input-container relative">
              <input
                type="url"
                id="facebook_path"
                name="facebook_path"
                className="form-input peer"
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
              <label htmlFor="facebook_path" className="form-label">
                Profile Link
              </label>
            </div>
          </div>
        </div>

        {/* instagram */}
        <div>
          <p>Instagram</p>
          <div className="space-y-2">
            {/* Username */}
            <div className="form-group input-container relative">
              <input
                type="text"
                id="instagram_username"
                name="instagram_username"
                className="form-input peer"
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
              <label htmlFor="instagram_username" className="form-label">
                Username
              </label>
            </div>

            {/* password */}
            <div className="form-group input-container relative">
              <input
                type="text"
                id="instagram_pass"
                name="instagram_pass"
                className="form-input peer"
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
              <label htmlFor="instagram_pass" className="form-label">
                Password
              </label>
            </div>

            {/* profile link */}
            <div className="form-group input-container relative">
              <input
                type="url"
                id="instagram_path"
                name="instagram_path"
                className="form-input peer"
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
              <label htmlFor="instagram_path" className="form-label">
                Profile link
              </label>
            </div>
          </div>
        </div>

        {/* lnkedin */}
        <div>
          <p>LinkedIn</p>
          <div className="space-y-2">
            {/* Username */}
            <div className="form-group input-container relative">
              <input
                type="text"
                id="linkedin_username"
                name="linkedin_username"
                className="form-input peer"
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
              <label htmlFor="linkedin_username" className="form-label">
                Username
              </label>
            </div>

            {/* password */}
            <div className="form-group input-container relative">
              <input
                type="text"
                id="linkedin_pass"
                name="linkedin_pass"
                className="form-input peer"
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
              <label htmlFor="linkedin_pass" className="form-label">
                Password
              </label>
            </div>

            {/* profile link */}
            <div className="form-group input-container relative">
              <input
                type="url"
                id="linkedin_path"
                name="linkedin_path"
                className="form-input peer"
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
              <label htmlFor="linkedin_path" className="form-label">
                Profile link
              </label>
            </div>
          </div>
        </div>

        {/* twitter */}
        <div>
          <label>Twitter</label>
          <div className="space-y-2">
            {/* username */}
            <div className="form-group input-container relative">
              <input
                type="text"
                id="twitter_username"
                name="twitter_username"
                className="form-input peer"
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
              <label htmlFor="twitter_username" className="form-label">
                Username
              </label>
            </div>

            {/* password */}
            <div className="form-group input-container relative">
              <input
                type="text"
                id="twitter_pass"
                name="twitter_pass"
                className="form-input peer"
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
              <label htmlFor="twitter_pass" className="form-label">
                Password
              </label>
            </div>

            {/* profile link */}
            <div className="form-group input-container relative">
              <input
                type="url"
                id="twitter_path"
                name="twitter_path"
                className="form-input peer"
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
              <label htmlFor="twitter_path" className="form-label">
                Profile link
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialsDetails;

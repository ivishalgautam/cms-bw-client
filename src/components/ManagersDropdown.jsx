import React, { useEffect, useMemo, useState } from "react";
import Multiselect from "multiselect-react-dropdown";
import { useDispatch, useSelector } from "react-redux";
import { getClients } from "../store/clientSlice";
import { publicRequest } from "../requesMethods";
import { setFieldValue } from "../store/features/inputSlice";

const ManagersDropdown = () => {
  const { proManagers } = useSelector((store) => store.inputVal);
  const dispatch = useDispatch();
  const [options, setOptions] = useState([]);
  const [selectManagers, setSelectManagers] = useState([]);
  useEffect(() => {
    dispatch(getClients());
    (async () => {
      const resp = await publicRequest.get("/project-manager");
      setOptions(resp.data);
    })();
  }, []);

  const onSelect = (selectedList) => {
    setSelectManagers(selectedList);
    const ids = selectedList.map((item) => item._id);
    dispatch(setFieldValue({ field: "proManagers", value: ids }));
  };

  const onRemove = (selectedList) => {
    setSelectManagers(selectedList);
    const ids = selectedList.map((item) => item._id);
    dispatch(setFieldValue({ field: "proManagers", value: ids }));
  };
  return (
    <Multiselect
      options={options}
      displayValue="name"
      onSelect={onSelect}
      onRemove={onRemove}
      selectedValues={selectManagers}
      className="w-full capitalize"
      placeholder="Select managers"
      style={{
        chips: {
          background: "#6366f1",
          borderRadius: "9999px",
        },
      }}
    />
  );
};

export default ManagersDropdown;

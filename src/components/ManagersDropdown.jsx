import React, { useEffect, useMemo, useState } from "react";
import Multiselect from "multiselect-react-dropdown";
import { useDispatch, useSelector } from "react-redux";
import { getClients } from "../store/features/client/clientSlice";
import { publicRequest } from "../requesMethods";
import { setFieldValue } from "../store/features/input/inputSlice";
import { setSelectedManagers } from "../store/features/manager/managerSlice";

const ManagersDropdown = () => {
  const dispatch = useDispatch();
  const [options, setOptions] = useState([]);
  const { selectedManagers } = useSelector((store) => store.managers);
  // const [selectManagers, setSelectManagers] = useState([]);
  // console.log(selectedManagers);
  useEffect(() => {
    dispatch(getClients());
    (async () => {
      const resp = await publicRequest.get("/project-manager");
      setOptions(resp.data);
    })();
  }, []);

  const onSelect = (selectedList) => {
    dispatch(setSelectedManagers(selectedList));
    console.log(selectedList);
    const ids = selectedList.map((item) => item._id);
    dispatch(setFieldValue({ field: "proManagers", value: ids }));
  };

  const onRemove = (selectedList) => {
    dispatch(setSelectedManagers(selectedList));
    console.log(selectedList);
    const ids = selectedList.map((item) => item._id);
    dispatch(setFieldValue({ field: "proManagers", value: ids }));
  };
  return (
    <Multiselect
      options={options}
      displayValue="name"
      onSelect={onSelect}
      onRemove={onRemove}
      selectedValues={selectedManagers}
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

const [managers, setManagers] = useState([]);
const [selectManagers, setSelectManagers] = useState([]);
console.log(clients);
useEffect(() => {
  dispatch(getClients());
  (async () => {
    const resp = await publicRequest.get("/project-manager");
    setManagers(resp.data);
  })();
}, []);

{
  /* project managers */
}
<div>
  <h2 className="text-2xl capitalize">project managers</h2>
  <div className="grid grid-cols-3 gap-5 mt-5">
    <div className="form-group input-container">
      <label
        html="project_managers"
        className="block mb-2 text-sm font-medium text-gray-900 "
      >
        Select an option
      </label>
      <select
        id="project_managers"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
        onChange={(e) => {
          const selectedValue = e.target.value;
          if (selectedValue !== "") {
            setSelectManagers((prev) => {
              if (!prev.includes(selectedValue)) {
                return [...prev, selectedValue];
              }
              return prev;
            });
          }
        }}
      >
        <option value="">Choose a manager</option>
        {managers?.map((item) => {
          return (
            <option value={item._id} key={item._id}>
              {item.name}
            </option>
          );
        })}
      </select>
      <ul className="flex items-center justify-start gap-2 mt-3">
        {managers
          .filter((manager) => selectManagers.includes(manager._id))
          .map((manager) => {
            return (
              <li className="py-1 px-3 rounded-full bg-primary hover:bg-primary-dark text-sm text-white font-bold">
                {manager.name}
              </li>
            );
          })}
      </ul>
    </div>
  </div>
</div>;

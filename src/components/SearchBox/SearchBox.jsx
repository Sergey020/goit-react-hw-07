import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleInputChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <>
      <p>Find contacts by name</p>
      <input type="text" value={filter} onChange={handleInputChange} />
    </>
  );
};

export default SearchBox;

import { useParams } from "react-router-dom";

const SearchPage = () => {
  const { city } = useParams();
  return <span>SearchPage {city}</span>;
};

export default SearchPage;

import { useNavigate } from "react-router-dom";
import Menu from "./Menu";
import SearchBar from "./SearchBar";

const Header = () => {
  const navigate = useNavigate();
  const jap = "<JAP/>";
  return (
    <header className="navbar">
      <h1 clasname="logo-title" onClick={() => navigate(`/`)}>
        {jap} e-commerce{" "}
      </h1>
      <SearchBar />
      <Menu />
    </header>
  );
};
export default Header;

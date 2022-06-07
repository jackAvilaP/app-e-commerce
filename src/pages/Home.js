import { CategoriesProducts, FilterProducts } from "../components/index";
import Products from "./Products";
//https://app.moqups.com/2NKlaf2ciVULUbpj2vWGwFIGISslUI5z/edit/page/ad68006a5 plantilla
const Home = () => {
  return (
    <div className="grid-container">
      <section className="asidebar">
        <CategoriesProducts />
        <FilterProducts />
      </section>
      <main className="main">
        <Products />
      </main>
      {/*<section className="featured">section1</section>
      <section className="others">section2</section>
      <footer className="footer">footer</footer>*/}
    </div>
  );
};

export default Home;
import Home from "../components/Home";
import Navbar from "../components/Navbar";
import SlideItem from "../components/SlideItem";
import TopProducts from "../components/TopProducts";
import Aboutsection from "../components/Aboutsection";
import NewProducts from "../components/NewProducts";
import Category from "../components/Category";
import Shopbygender from "../components/Shopbygender";
import Findoutmore from "../components/Findoutmore";
import Footersection from "../components/Footersection";
import "./Web.css";

const Web = () => {
  return (
    <div className="web">
      <Home />
      <Navbar />
      <section className="web-inner">
        <div className="frame-parent">
          <SlideItem />
          <TopProducts />
          <Aboutsection />
          <NewProducts />
          <div className="frame-wrapper">
            <div className="frame-group">
              <div className="shop-by-category-wrapper">
                <h1 className="shop-by-category">Shop by category</h1>
              </div>
              <div className="browse-through-your">
                Browse through your favourite categories. We've got them all!
              </div>
            </div>
          </div>
          <Category />
          <div className="frame-container">
            <div className="frame-div">
              <div className="shop-by-gender-wrapper">
                <h1 className="shop-by-gender">Shop by Gender</h1>
              </div>
              <div className="explore-our-latest">
                Explore our latest designs curated just for you!
              </div>
            </div>
          </div>
          <div className="grid-system">
            <Shopbygender iconSet="/07102022-2352@2x.png" women="Women" />
            <Shopbygender
              iconSet="/07102022-2353@2x.png"
              women="Men"
              propPadding="0rem var(--padding-3xl) 0rem var(--padding-5xl)"
              propMinWidth="2.375rem"
            />
            <Shopbygender
              iconSet="/07102022-2353-1@2x.png"
              women="kids"
              propPadding="0rem var(--padding-6xl) 0rem var(--padding-3xl)"
              propMinWidth="2.375rem"
            />
          </div>
        </div>
      </section>
      <Findoutmore />
      <img className="image-editor-icon" alt="" src="/image-editor@2x.png" />
      <Footersection />
      <div className="filter-tree">
        <img
          className="filter-tree-child"
          loading="lazy"
          alt=""
          src="/vector-31.svg"
        />
        <div className="connection-hub">
          <div className="jewelery-empire-company-container">
            <p className="jewelery-empire-company">
              @ 2023 Jewelery empire company limited. All right reserved.
            </p>
            <p className="tearm-conditions">{`Tearm & conditions  |  Privacy policy`}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Web;

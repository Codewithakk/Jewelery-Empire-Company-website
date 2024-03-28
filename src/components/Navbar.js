import "./Navbar.css";

const Navbar = () => {
  return (
    <section className="frame-section">
      {/* <div className="rectangle-wrapper">
        <div className="frame-item" />
      </div> */}
      <div className="slider">
        <div className="slider-child" />
        <div className="vector-wrapper">
          <img
            className="vector-icon"
            loading="lazy"
            alt=""
            src="/vector.svg"
          />
        </div>
        <div className="pngegg-18-1-wrapper">
          <img
            className="pngegg-18-1"
            loading="lazy"
            alt=""
            src="/pngegg-18-1@2x.png"
          />
        </div>
        <img className="vector-icon1" alt="" src="/vector-11.svg" />
        <div className="slider-inner">
          <div className="frame-parent3">
            <div className="frame-wrapper2">
              <div className="new-collection-dimond-parent">
                <h1 className="new-collection-dimond-container">
                  <span>{`NEW COLLECTION `}</span>
                  <span className="dimond">“dimond”</span>
                </h1>
                <div className="lorem-ipsum-dolor">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet integer lorem amet arcu egestas congue. Rhoncus scelerisque mi, ac sed lacus aliquam at tortor. Risus nulla massa ut vitae phasellus dictum. Lacus feugiat mollis aenean ac. Cursus in at sagittis vivamus consequat. `}</div>
                <button className="find-out-more-parent">
                  <div className="find-out-more">Find out more</div>
                  <div className="frame-inner" />
                </button>
              </div>
            </div>
            <img
              className="group-icon"
              loading="lazy"
              alt=""
              src="/group-7.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;

import GroupComponent from "./GroupComponent";
import "./Category.css";

const Category = () => {
  return (
    <div className="color-palette">
      <div className="rectangle-parent3">
        <div className="frame-child21" />
        <img
          className="image-processor-icon"
          loading="lazy"
          alt=""
          src="/07102022-1332@2x.png"
        />
        <div className="interactivity-designer">
          <div className="proximity-sensing">
            <div className="earring">{`Earring `}</div>
            <div className="explore1">{`Explore  >`}</div>
          </div>
        </div>
      </div>
      <div className="rectangle-parent4">
        <div className="frame-child22" />
        <img
          className="icon1"
          loading="lazy"
          alt=""
          src="/07102022-1416@2x.png"
        />
        <div className="frame-wrapper8">
          <div className="gold-earring-parent">
            <div className="gold-earring">{`Gold Earring `}</div>
            <div className="explore-container">
              <div className="explore2">{`Explore  >`}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="rectangle-parent5">
        <div className="frame-child23" />
        <img className="icon2" alt="" src="/07102022-1444@2x.png" />
        <div className="frame-wrapper9">
          <div className="wedding-ring-parent">
            <div className="wedding-ring">Wedding Ring</div>
            <div className="explore-frame">
              <div className="explore3">{`Explore  >`}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="rectangle-parent6">
        <div className="frame-child24" />
        <img
          className="icon3"
          loading="lazy"
          alt=""
          src="/07102022-2307@2x.png"
        />
        <div className="frame-wrapper10">
          <div className="gold-neckless-parent">
            <div className="gold-neckless">Gold Neckless</div>
            <div className="explore-wrapper1">
              <div className="explore4">{`Explore  >`}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="rectangle-parent7">
        <div className="frame-child25" />
        <img className="icon4" alt="" src="/07102022-2324@2x.png" />
        <div className="frame-wrapper11">
          <div className="bracelets-parent">
            <div className="bracelets2">Bracelets</div>
            <div className="explore-wrapper2">
              <div className="explore5">{`Explore  >`}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="rectangle-parent8">
        <div className="frame-child26" />
        <img
          className="icon5"
          loading="lazy"
          alt=""
          src="/07102022-2313@2x.png"
        />
        <div className="frame-wrapper12">
          <div className="neckwear-parent">
            <div className="neckwear">Neckwear</div>
            <div className="explore-wrapper3">
              <div className="explore6">{`Explore  >`}</div>
            </div>
          </div>
        </div>
      </div>
      <GroupComponent
        animationBuilder="/animation-builder@2x.png"
        nosePin="Nose Pin"
      />
      <div className="rectangle-parent9">
        <div className="frame-child27" />
        <img
          className="icon6"
          loading="lazy"
          alt=""
          src="/07102022-2325@2x.png"
        />
        <div className="smart-alignment">
          <div className="dimond-necklace">Dimond Necklace</div>
        </div>
        <div className="smart-alignment1">
          <div className="explore7">{`Explore  >`}</div>
        </div>
      </div>
      <GroupComponent
        animationBuilder="/07102022-2341-1@2x.png"
        nosePin="Gold Coins"
        propPadding="var(--padding-12xs) 0rem var(--padding-smi)"
        propPadding1="0rem var(--padding-12xs) 0rem 0rem"
        propHeight="13.438rem"
        propAlignSelf="unset"
        propPadding2="0rem var(--padding-57xl) 0rem var(--padding-59xl)"
        propMinWidth="4.563rem"
        propPadding3="0rem var(--padding-sm) 0rem var(--padding-xs)"
      />
      <div className="rectangle-parent10">
        <div className="frame-child28" />
        <img
          className="icon7"
          loading="lazy"
          alt=""
          src="/07102022-1333@2x.png"
        />
        <div className="frame-wrapper13">
          <div className="new-earrings-parent">
            <div className="new-earrings">New Earrings</div>
            <div className="explore-wrapper4">
              <div className="explore8">{`Explore  >`}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;

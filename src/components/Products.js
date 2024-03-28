import { useMemo } from "react";
import "./Products.css";

const Products = ({
  pngegg201,
  rs124000,
  star4,
  graphCreator,
  propPadding,
  propGap,
  propPadding1,
  propHeight,
  propWidth,
  propMinWidth,
}) => {
  const groupDivStyle = useMemo(() => {
    return {
      padding: propPadding,
      gap: propGap,
    };
  }, [propPadding, propGap]);

  const frameDivStyle = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  const pngegg201Style = useMemo(() => {
    return {
      height: propHeight,
      width: propWidth,
    };
  }, [propHeight, propWidth]);

  const rs124000Style = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className="group-div" style={groupDivStyle}>
      <div className="frame-child3" />
      <div className="pngegg-20-1-wrapper" style={frameDivStyle}>
        <img
          className="pngegg-20-1"
          loading="lazy"
          alt=""
          src={pngegg201}
          style={pngegg201Style}
        />
      </div>
      <div className="earring-necklace-jewellery-cha-wrapper">
        <div className="earring-necklace-jewellery">
          Earring Necklace Jewellery Chain Gemstone
        </div>
      </div>
      <div className="parallel-processor1">
        <div className="series-processor">
          <div className="rs-124000" style={rs124000Style}>
            {rs124000}
          </div>
        </div>
        <div className="tree-processor">
          <img
            className="flow-chart-processor"
            alt=""
            src="/flow-chart-processor.svg"
          />
          <img
            className="tree-processor-child"
            alt=""
            src="/flow-chart-processor.svg"
          />
          <img
            className="tree-processor-item"
            alt=""
            src="/flow-chart-processor.svg"
          />
          <img className="tree-processor-inner" alt="" src={star4} />
          <img className="graph-creator-icon" alt="" src={graphCreator} />
        </div>
      </div>
    </div>
  );
};

export default Products;

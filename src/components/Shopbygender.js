import { useMemo } from "react";
import "./Shopbygender.css";

const Shopbygender = ({ iconSet, women, propPadding, propMinWidth }) => {
  const styleGuideStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const womenStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className="rectangle-parent11">
      <div className="frame-child29" />
      <img className="icon-set" loading="lazy" alt="" src={iconSet} />
      <div className="style-guide" style={styleGuideStyle}>
        <div className="template-manager">
          <div className="women" style={womenStyle}>
            {women}
          </div>
          <div className="path-builder">
            <div className="explore-more">{`Explore More >`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shopbygender;

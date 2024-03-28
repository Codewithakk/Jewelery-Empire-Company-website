import { useMemo } from "react";
import "./GroupComponent.css";

const GroupComponent = ({
  animationBuilder,
  nosePin,
  propPadding,
  propPadding1,
  propHeight,
  propAlignSelf,
  propPadding2,
  propMinWidth,
  propPadding3,
}) => {
  const groupDiv1Style = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const frameDiv1Style = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  const animationBuilderIconStyle = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const frameDiv2Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      padding: propPadding2,
    };
  }, [propAlignSelf, propPadding2]);

  const nosePinStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const frameDiv3Style = useMemo(() => {
    return {
      padding: propPadding3,
    };
  }, [propPadding3]);

  return (
    <div className="rectangle-parent2" style={groupDiv1Style}>
      <div className="frame-child20" />
      <div className="parent" style={frameDiv1Style}>
        <img className="icon" alt="" src="/07102022-1333@2x.png" />
        <img
          className="animation-builder-icon"
          alt=""
          src={animationBuilder}
          style={animationBuilderIconStyle}
        />
      </div>
      <div className="frame-wrapper7" style={frameDiv2Style}>
        <div className="nose-pin-parent">
          <div className="nose-pin" style={nosePinStyle}>
            {nosePin}
          </div>
          <div className="explore-wrapper" style={frameDiv3Style}>
            <div className="explore">{`Explore  >`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent;

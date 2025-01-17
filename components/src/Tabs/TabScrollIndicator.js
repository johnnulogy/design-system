import styled from "styled-components";
import React from "react";
import PropTypes from "prop-types";
import theme from "../theme";
import { Icon } from "../Icon";

const TabScrollIndicatorButton = styled.button(({ side, width }) => ({
  position: "absolute",
  color: theme.colors.black,
  top: 0,
  bottom: 0,
  left: side === "left" ? 0 : undefined,
  right: side === "right" ? 0 : undefined,
  height: width,
  width,
  background: theme.colors.white,
  opacity: 0.8,
  zIndex: theme.zIndex.tabsScollIndicator,
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  fontWeight: theme.fontWeights.medium,
  textDecoration: "none",
  verticalAlign: "middle",
  lineHeight: theme.lineHeights.base,
  backgroundColor: theme.colors.white,
  border: `0px solid`,
  margin: theme.space.none,
  cursor: "pointer",
  "&:hover": {
    backgroundColor: theme.colors.lightBlue
  },
  "&:focus": {
    outline: "none"
  },
  "&:active": {},
  "&:disabled": {
    opacity: ".5"
  }
}));

function preventFocusMovement(e) {
  e.preventDefault();
}

class TabScrollIndicator extends React.PureComponent {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { onClick, side } = this.props;

    onClick(side);
  }

  render() {
    const { side } = this.props;

    return (
      <TabScrollIndicatorButton
        {...this.props}
        tabIndex={-1}
        onClick={this.handleClick}
        onMouseDown={preventFocusMovement}
        side={side}
      >
        <Icon icon={side === "right" ? "rightArrow" : "leftArrow"} />
      </TabScrollIndicatorButton>
    );
  }
}

TabScrollIndicator.propTypes = {
  onClick: PropTypes.func,
  side: PropTypes.oneOf(["left", "right"]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

TabScrollIndicator.defaultProps = {
  onClick: () => {},
  side: "left",
  width: 40
};

export default TabScrollIndicator;

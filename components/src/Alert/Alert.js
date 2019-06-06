import React from "react";
import PropTypes from "prop-types";
import { Box } from "../Box";
import { Icon } from "../Icon";
import { Flex } from "../Flex";
import { Text } from "../Type";
import theme from "../theme";

const alertColours = {
  danger: {
    borderColor: theme.colors.red,
    backgroundColor: theme.colors.lightRed
  },
  informational: {
    borderColor: theme.colors.blue,
    backgroundColor: theme.colors.lightBlue
  },
  success: {
    borderColor: theme.colors.green,
    backgroundColor: theme.colors.lightGreen
  },
  warning: {
    borderColor: theme.colors.yellow,
    backgroundColor: theme.colors.lightYellow
  }
};

const Alert = props => {
  const alertColour = alertColours[props.type];

  return (
    <Box
      bg={alertColour.backgroundColor}
      p="x2"
      minWidth="304px"
      borderWidth="4"
      borderStyle="solid"
      borderColor="red"
      borderRadius={theme.radii.medium}
      borderLeft={`${theme.space.half} solid ${alertColour.borderColor}`}
    >
      <Flex>
        {props.type == "danger" && <Icon icon="error" mr="x1" color={alertColour.borderColor} />}
        {props.type == "success" && <Icon icon="check" mr="x1" color={alertColour.borderColor} />}
        <Box mr="auto">
          {props.title && <Text fontWeight="bold">{props.title}</Text>}
          {props.children}
        </Box>
        {props.isCloseable && <Icon icon="close" color="darkGrey" size="16" />}
      </Flex>
    </Box>
  );
};

Alert.propTypes = {
  children: PropTypes.node.isRequired,
  isCloseable: PropTypes.node.isCloseable,
  title: PropTypes.string,
  type: PropTypes.oneOf(["danger", "success", "warning"])
};

Alert.defaultProps = {
  isCloseable: false,
  title: null,
  type: "informational"
};

export default Alert;

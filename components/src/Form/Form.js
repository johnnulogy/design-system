import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import theme from "../theme";
import { SectionTitle } from "../Type/Headings";
import Box from "../Box/Box";
import FormSection from "./FormSection";
import Field from "../Field/Field";

const BaseForm = ({
  title,
  children,
  ...props
}) => (
  <Box { ...props }>
    <SectionTitle>{ title }</SectionTitle>
    { children }
  </Box>
);

const Form = styled(BaseForm)`
  ${SectionTitle} {
    margin-bottom: ${props => (props.title ? theme.space[6] : '0')};
  }
  ${Field} {
    margin-bottom: ${theme.space[4]};
    &:last-child {
      margin-bottom: 0;
    }
  }
  ${FormSection} {
    margin-bottom: ${theme.space[6]};
    &:last-child {
      margin-bottom: 0;
    }
  }
`

Form.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

Form.defaultProps = {
  children: [],
};

export default Form;

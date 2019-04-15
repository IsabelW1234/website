import React from "react"
import PropTypes from "prop-types"

import BackgroundStyled from "./styled/BackgroundStyled"

const Background = ({ children }) => (
  <BackgroundStyled>{children}</BackgroundStyled>
)

export default Background

Background.propTypes = {
  caption: PropTypes.string,
  children: PropTypes.any,
}

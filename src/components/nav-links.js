import React from 'react'

import PropTypes from 'prop-types'

import './nav-links.css'

const NavLinks = (props) => {
  return (
    <div className="nav-links-links">
      <span className="navLink">{props.Link}</span>
      <span className="navLink">{props.Link1}</span>
      <span className="navLink">{props.Link2}</span>
    </div>
  )
}

NavLinks.defaultProps = {
  Link1: 'services',
  Link: 'work',
  Link2: 'contact',
}

NavLinks.propTypes = {
  Link1: PropTypes.string,
  Link: PropTypes.string,
  Link2: PropTypes.string,
}

export default NavLinks

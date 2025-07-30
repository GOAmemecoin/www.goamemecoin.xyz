import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './tokenomics.css'

const Tokenomics = (props) => {
  return (
    <div className="tokenomics-container thq-section-padding">
      <div className="tokenomics-max-width thq-section-max-width">
        <div className="tokenomics-content thq-flex-column">
          <ul className="tokenomics-ul thq-flex-column">
            <li className="list-item thq-flex-column">
              <h2 id="Токеномика" className="tokenomics-heading1 thq-heading-2">
                {props.heading1 ?? (
                  <Fragment>
                    <span className="tokenomics-text2">
                      <span>{/*locale-text_c7WYRH*/}</span>
                    </span>
                  </Fragment>
                )}
              </h2>
              <p className="tokenomics-content1 thq-body-small">
                {props.content1 ?? (
                  <Fragment>
                    <span className="tokenomics-text1">
                      <span>{/*locale-text_C_fCZj*/}</span>
                    </span>
                  </Fragment>
                )}
              </p>
            </li>
            <li className="list-item"></li>
            <li className="list-item"></li>
            <li className="list-item"></li>
            <li className="list-item"></li>
            <li className="list-item"></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

Tokenomics.defaultProps = {
  content1: undefined,
  heading1: undefined,
}

Tokenomics.propTypes = {
  content1: PropTypes.element,
  heading1: PropTypes.element,
}

export default Tokenomics

import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './ecosystem.css'

const Ecosystem = (props) => {
  return (
    <div
      className={`ecosystem-container thq-section-padding ${props.rootClassName} `}
    >
      <div className="ecosystem-max-width thq-section-max-width">
        <div className="ecosystem-content thq-flex-column">
          <ul className="ecosystem-ul thq-flex-column">
            <li className="ecosystem-li1 list-item thq-flex-column">
              <h2 className="ecosystem-heading1 thq-heading-2">
                {props.heading1 ?? (
                  <Fragment>
                    <span className="ecosystem-text1">
                      <span>{/*locale-text_4MTwh3*/}</span>
                    </span>
                  </Fragment>
                )}
              </h2>
              <p className="ecosystem-content1 thq-body-small">
                {props.content1 ?? (
                  <Fragment>
                    <span className="ecosystem-text2">
                      <span>{/*locale-text_l_A4PC*/}</span>
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

Ecosystem.defaultProps = {
  heading1: undefined,
  rootClassName: '',
  content1: undefined,
}

Ecosystem.propTypes = {
  heading1: PropTypes.element,
  rootClassName: PropTypes.string,
  content1: PropTypes.element,
}

export default Ecosystem

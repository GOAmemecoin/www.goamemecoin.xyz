import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './roadmap.css'

const Roadmap = (props) => {
  return (
    <div
      className={`roadmap-container thq-section-padding ${props.rootClassName} `}
    >
      <div className="roadmap-max-width thq-section-max-width">
        <div className="roadmap-content thq-flex-column">
          <ul className="roadmap-ul thq-flex-column">
            <li className="list-item thq-flex-column">
              <h2 className="roadmap-heading1 thq-heading-2">
                {props.heading1 ?? (
                  <Fragment>
                    <span className="roadmap-text1">
                      <span>{/*locale-text_LiHbXb*/}</span>
                    </span>
                  </Fragment>
                )}
              </h2>
              <p className="roadmap-content1 thq-body-small">
                {props.content1 ?? (
                  <Fragment>
                    <span className="roadmap-text2">
                      <span>{/*locale-text_SBSWPB*/}</span>
                    </span>
                  </Fragment>
                )}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

Roadmap.defaultProps = {
  heading1: undefined,
  content1: undefined,
  rootClassName: '',
}

Roadmap.propTypes = {
  heading1: PropTypes.element,
  content1: PropTypes.element,
  rootClassName: PropTypes.string,
}

export default Roadmap

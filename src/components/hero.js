import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './hero.css'

const Hero = (props) => {
  return (
    <div className="hero-header1 thq-section-padding">
      <b className="hero-heading1 thq-heading-1">
        {props.heading1 ?? (
          <Fragment>
            <span className="hero-text3">
              <span>{/*locale-text_Md5KPa*/}</span>
            </span>
          </Fragment>
        )}
      </b>
      <div className="hero-container1">
        <div className="hero-container2">
          <div className="hero-container3"></div>
        </div>
        <div className="hero-container4"></div>
      </div>
      <p id="описание" className="hero-content1 thq-body-large">
        {props.content1 ?? (
          <Fragment>
            <span className="hero-text1">
              <span>{/*locale-text_mdFKbO*/}</span>
            </span>
          </Fragment>
        )}
      </p>
      <img
        alt={props.imageAlt1}
        src={props.imageSrc1}
        className="hero-image1"
      />
      <div className="hero-container5">
        <div className="hero-container6">
          <div className="hero-container7">
            <div className="hero-container8">
              <div className="hero-actions">
                <a
                  href="https://solscan.io/token/EGPA8sfeeKXstx1h3jVoheyMKbkcmtXKgGbPdetsXNK8"
                  id="View on Solana"
                  name="View on Solana"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="hero-button thq-button-filled"
                >
                  <span className="hero-action1 thq-body-small">
                    {props.action1 ?? (
                      <Fragment>
                        <span className="hero-text2">
                          <span>{/*locale-text_9WEZPf*/}</span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        id="logo"
        alt={props.imageAlt}
        src={props.imageSrc}
        className="hero-image2"
      />
    </div>
  )
}

Hero.defaultProps = {
  content1: undefined,
  action1: undefined,
  imageAlt: 'image',
  heading1: undefined,
  imageAlt1: 'image',
  imageSrc: '/g2-200h.png',
  imageSrc1: 'https://play.teleporthq.io/static/svg/placeholders/no-image.svg',
}

Hero.propTypes = {
  content1: PropTypes.element,
  action1: PropTypes.element,
  imageAlt: PropTypes.string,
  heading1: PropTypes.element,
  imageAlt1: PropTypes.string,
  imageSrc: PropTypes.string,
  imageSrc1: PropTypes.string,
}

export default Hero

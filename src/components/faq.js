import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './faq.css'

const FAQ = (props) => {
  return (
    <div className={`faqfaq9 thq-section-padding ${props.rootClassName} `}>
      <div className="faq-max-width thq-section-max-width">
        <div className="faq-section-title thq-flex-column">
          <h2 className="faq-text10 thq-heading-2">
            {props.heading1 ?? (
              <Fragment>
                <span className="faq-text32">
                  <span>{/*locale-text_h9fKdE*/}</span>
                </span>
              </Fragment>
            )}
          </h2>
        </div>
        <div className="thq-flex-column faq-content10">
          <div className="faq-row10">
            <div className="thq-divider-horizontal"></div>
            <div className="faq-content11">
              <p className="faq-faq1-question1 thq-body-large">
                {props.faq1Question ?? (
                  <Fragment>
                    <span className="faq-text21">
                      <span>{/*locale-text_VWLU37*/}</span>
                    </span>
                  </Fragment>
                )}
              </p>
              <span className="faq-faq1-answer1 thq-body-small">
                {props.faq1Answer ?? (
                  <Fragment>
                    <span className="faq-text17">
                      <span>{/*locale-text_1V8kTJ*/}</span>
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div className="faq-row11">
            <div className="thq-divider-horizontal"></div>
            <div className="faq-content12">
              <p className="faq-faq2-question1 thq-body-large">
                {props.faq2Question ?? (
                  <Fragment>
                    <span className="faq-text16">
                      <span>{/*locale-text_lKP4u0*/}</span>
                    </span>
                  </Fragment>
                )}
              </p>
              <span className="faq-faq2-answer1 thq-body-small">
                {props.faq2Answer ?? (
                  <Fragment>
                    <span className="faq-text25">
                      <span>{/*locale-text_z4WMgI*/}</span>
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div className="faq-row12">
            <div className="thq-divider-horizontal"></div>
            <div className="faq-content13">
              <p className="faq-faq3-question1 thq-body-large">
                {props.faq3Question ?? (
                  <Fragment>
                    <span className="faq-text24">
                      <span>{/*locale-text_Y8STI9*/}</span>
                    </span>
                  </Fragment>
                )}
              </p>
              <span className="faq-faq3-answer1 thq-body-small">
                {props.faq3Answer ?? (
                  <Fragment>
                    <span className="faq-text22">
                      <span>{/*locale-text_WynVD3*/}</span>
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div className="faq-row13">
            <div className="thq-divider-horizontal"></div>
            <div className="faq-content14">
              <p className="faq-faq4-question1 thq-body-large">
                {props.faq4Question ?? (
                  <Fragment>
                    <span className="faq-text28">
                      <span>{/*locale-text_m6V0ph*/}</span>
                    </span>
                  </Fragment>
                )}
              </p>
              <span className="faq-faq4-answer1 thq-body-small">
                {props.faq4Answer ?? (
                  <Fragment>
                    <span className="faq-text29">
                      <span>{/*locale-text_pYj8PH*/}</span>
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
        <div className="thq-flex-column faq-content15">
          <div className="faq-row14">
            <div className="thq-divider-horizontal"></div>
            <div className="faq-content16">
              <p className="faq-faq1-question2 thq-body-large">
                {props.faq1Question1 ?? (
                  <Fragment>
                    <span className="faq-text31">
                      <span>{/*locale-text_Kndm1n*/}</span>
                    </span>
                  </Fragment>
                )}
              </p>
              <span className="faq-faq1-answer2 thq-body-small">
                {props.faq1Answer1 ?? (
                  <Fragment>
                    <span className="faq-text19">
                      <span>{/*locale-text_njXpCt*/}</span>
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div className="faq-row15">
            <div className="thq-divider-horizontal"></div>
            <div className="faq-content17">
              <p className="faq-faq2-question2 thq-body-large">
                {props.faq2Question1 ?? (
                  <Fragment>
                    <span className="faq-text13">
                      <span>{/*locale-text_RQe-28*/}</span>
                    </span>
                  </Fragment>
                )}
              </p>
              <span className="faq-faq2-answer2 thq-body-small">
                {props.faq2Answer1 ?? (
                  <Fragment>
                    <span className="faq-text14">
                      <span>{/*locale-text_V7ZI21*/}</span>
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div className="faq-row16">
            <div className="thq-divider-horizontal"></div>
            <div className="faq-content18">
              <p className="faq-faq3-question2 thq-body-large">
                {props.faq3Question1 ?? (
                  <Fragment>
                    <span className="faq-text27">
                      <span>{/*locale-text_UMkRc8*/}</span>
                    </span>
                  </Fragment>
                )}
              </p>
              <span className="faq-faq3-answer2 thq-body-small">
                {props.faq3Answer1 ?? (
                  <Fragment>
                    <span className="faq-text30">
                      <span>{/*locale-text_46t3Cv*/}</span>
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div className="faq-row17">
            <div className="thq-divider-horizontal"></div>
            <div className="faq-content19">
              <p className="faq-faq4-question2 thq-body-large">
                {props.faq4Question1 ?? (
                  <Fragment>
                    <span className="faq-text26">
                      <span>{/*locale-text_2FuawY*/}</span>
                    </span>
                  </Fragment>
                )}
              </p>
              <span className="faq-faq4-answer2 thq-body-small">
                {props.faq4Answer1 ?? (
                  <Fragment>
                    <span className="faq-text23">
                      <span>{/*locale-text_qBeGM5*/}</span>
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
        <div className="thq-flex-column">
          <div className="faq-row18">
            <div className="thq-divider-horizontal"></div>
            <div className="faq-content21">
              <p className="faq-faq1-question3 thq-body-large">
                {props.faq1Question11 ?? (
                  <Fragment>
                    <span className="faq-text12">
                      <span>{/*locale-text__4OsjI*/}</span>
                    </span>
                  </Fragment>
                )}
              </p>
              <span className="faq-faq1-answer3 thq-body-small">
                {props.faq1Answer11 ?? (
                  <Fragment>
                    <span className="faq-text15">
                      <span>{/*locale-text_WCfWek*/}</span>
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div className="faq-row19">
            <div className="thq-divider-horizontal"></div>
          </div>
        </div>
        <div className="thq-flex-column">
          <div className="faq-content23">
            <h2 className="thq-heading-2 faq-text11">
              {props.heading2 ?? (
                <Fragment>
                  <span className="faq-text18">
                    <span>{/*locale-text_PnOe1I*/}</span>
                  </span>
                </Fragment>
              )}
            </h2>
          </div>
          <div className="faq-container">
            <a
              href="mailto:info@goamemecoin.xyz?subject="
              className="faq-button thq-button-outline"
            >
              <span className="thq-body-small">
                {props.action ?? (
                  <Fragment>
                    <span className="faq-text20">
                      <span>{/*locale-text_9jwcTN*/}</span>
                    </span>
                  </Fragment>
                )}
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

FAQ.defaultProps = {
  faq1Question11: undefined,
  faq2Question1: undefined,
  faq2Answer1: undefined,
  faq1Answer11: undefined,
  faq2Question: undefined,
  faq1Answer: undefined,
  heading2: undefined,
  faq1Answer1: undefined,
  action: undefined,
  faq1Question: undefined,
  faq3Answer: undefined,
  faq4Answer1: undefined,
  faq3Question: undefined,
  faq2Answer: undefined,
  faq4Question1: undefined,
  faq3Question1: undefined,
  faq4Question: undefined,
  faq4Answer: undefined,
  faq3Answer1: undefined,
  faq1Question1: undefined,
  rootClassName: '',
  heading1: undefined,
}

FAQ.propTypes = {
  faq1Question11: PropTypes.element,
  faq2Question1: PropTypes.element,
  faq2Answer1: PropTypes.element,
  faq1Answer11: PropTypes.element,
  faq2Question: PropTypes.element,
  faq1Answer: PropTypes.element,
  heading2: PropTypes.element,
  faq1Answer1: PropTypes.element,
  action: PropTypes.element,
  faq1Question: PropTypes.element,
  faq3Answer: PropTypes.element,
  faq4Answer1: PropTypes.element,
  faq3Question: PropTypes.element,
  faq2Answer: PropTypes.element,
  faq4Question1: PropTypes.element,
  faq3Question1: PropTypes.element,
  faq4Question: PropTypes.element,
  faq4Answer: PropTypes.element,
  faq3Answer1: PropTypes.element,
  faq1Question1: PropTypes.element,
  rootClassName: PropTypes.string,
  heading1: PropTypes.element,
}

export default FAQ

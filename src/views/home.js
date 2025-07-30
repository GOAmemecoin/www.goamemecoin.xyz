import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Hero from '../components/hero'
import Tokenomics from '../components/tokenomics'
import Roadmap from '../components/roadmap'
import Ecosystem from '../components/ecosystem'
import FAQ from '../components/faq'
import Whitepaper from '../components/whitepaper'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>www.goamemecoin.xyz</title>
        <meta property="og:title" content="www.goamemecoin.xyz" />
      </Helmet>
      <Hero
        action1={
          <Fragment>
            <span className="home-text10">
              <span>{/*locale-text_44efNH*/}</span>
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text11">
              <span>{/*locale-text__KqHDp*/}</span>
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text12">
              <span>{/*locale-text_yUCmaZ*/}</span>
            </span>
          </Fragment>
        }
        image1Src="/g58-200h.png"
      ></Hero>
      <Tokenomics
        content1={
          <Fragment>
            <span className="home-text13">
              <span>{/*locale-text_CnB0_B*/}</span>
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text14">
              <span>{/*locale-text_OvszTc*/}</span>
            </span>
          </Fragment>
        }
      ></Tokenomics>
      <Roadmap
        content1={
          <Fragment>
            <span className="home-text15">
              <span>{/*locale-text_kflXij*/}</span>
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text16">
              <span>{/*locale-text_Ekh-SK*/}</span>
            </span>
          </Fragment>
        }
        rootClassName="roadmaproot-class-name1"
      ></Roadmap>
      <Ecosystem
        content1={
          <Fragment>
            <span className="home-text17">
              <span>{/*locale-text_H4T1Ai*/}</span>
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text18">
              <span>{/*locale-text_4GwZuQ*/}</span>
            </span>
          </Fragment>
        }
        rootClassName="ecosystemroot-class-name"
      ></Ecosystem>
      <FAQ
        action={
          <Fragment>
            <span className="home-text19">
              <span>{/*locale-text_d1ccfI*/}</span>
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text20">
              <span>{/*locale-text_CfQnx8*/}</span>
            </span>
          </Fragment>
        }
        heading2={
          <Fragment>
            <span className="home-text21">
              <span>{/*locale-text_OVSvUe*/}</span>
            </span>
          </Fragment>
        }
        faq1Answer={
          <Fragment>
            <span className="home-text22">
              <span>{/*locale-text_q21KIn*/}</span>
            </span>
          </Fragment>
        }
        faq2Answer={
          <Fragment>
            <span className="home-text23">
              <span>{/*locale-text__8DVqc*/}</span>
            </span>
          </Fragment>
        }
        faq3Answer={
          <Fragment>
            <span className="home-text24">
              <span>{/*locale-text_-U5mtZ*/}</span>
            </span>
          </Fragment>
        }
        faq4Answer={
          <Fragment>
            <span className="home-text25">
              <span>{/*locale-text_ZOi0Fh*/}</span>
            </span>
          </Fragment>
        }
        faq1Answer1={
          <Fragment>
            <span className="home-text26">
              <span>{/*locale-text_BcIdYN*/}</span>
            </span>
          </Fragment>
        }
        faq2Answer1={
          <Fragment>
            <span className="home-text27">
              <span>{/*locale-text_Jp6UEK*/}</span>
            </span>
          </Fragment>
        }
        faq3Answer1={
          <Fragment>
            <span className="home-text28">
              <span>{/*locale-text_tfhZV6*/}</span>
            </span>
          </Fragment>
        }
        faq4Answer1={
          <Fragment>
            <span className="home-text29">
              <span>{/*locale-text_jOmaBY*/}</span>
            </span>
          </Fragment>
        }
        faq1Answer11={
          <Fragment>
            <span className="home-text30">
              <span>{/*locale-text_QccT4D*/}</span>
            </span>
          </Fragment>
        }
        faq1Question={
          <Fragment>
            <span className="home-text31">
              <span>{/*locale-text_O6QFMT*/}</span>
            </span>
          </Fragment>
        }
        faq2Question={
          <Fragment>
            <span className="home-text32">
              <span>{/*locale-text_EZ0p9A*/}</span>
            </span>
          </Fragment>
        }
        faq3Question={
          <Fragment>
            <span className="home-text33">
              <span>{/*locale-text_k2NjhJ*/}</span>
            </span>
          </Fragment>
        }
        faq4Question={
          <Fragment>
            <span className="home-text34">
              <span>{/*locale-text_Nsm_19*/}</span>
            </span>
          </Fragment>
        }
        faq1Question1={
          <Fragment>
            <span className="home-text35">
              <span>{/*locale-text_jbJxOh*/}</span>
            </span>
          </Fragment>
        }
        faq2Question1={
          <Fragment>
            <span className="home-text36">
              <span>{/*locale-text_wQbSbN*/}</span>
            </span>
          </Fragment>
        }
        faq3Question1={
          <Fragment>
            <span className="home-text37">
              <span>{/*locale-text_-uxfLD*/}</span>
            </span>
          </Fragment>
        }
        faq4Question1={
          <Fragment>
            <span className="home-text38">
              <span>{/*locale-text_4A--1j*/}</span>
            </span>
          </Fragment>
        }
        rootClassName="fa-qroot-class-name"
        faq1Question11={
          <Fragment>
            <span className="home-text39">
              <span>{/*locale-text_JrGo3E*/}</span>
            </span>
          </Fragment>
        }
      ></FAQ>
      <Whitepaper
        content1={
          <Fragment>
            <span className="home-text40">
              <span>{/*locale-text_zLifem*/}</span>
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text41">
              <span>{/*locale-text_qs-7g6*/}</span>
            </span>
          </Fragment>
        }
        rootClassName="whitepaperroot-class-name"
      ></Whitepaper>
      <Footer rootClassName="footerroot-class-name1"></Footer>
      <Link to="/" className="home-navlink">
        <img alt="image" src="/g581-200h.png" className="home-image" />
      </Link>
    </div>
  )
}

export default Home

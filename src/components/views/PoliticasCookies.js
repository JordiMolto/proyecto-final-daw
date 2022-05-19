import React, { Component } from 'react'
import CookiePolytics from '../../imgs/cookie_polytics.png'
import '../css/Polytics.css'
import FooterComp from '../layouts/FooterComp'

export default class PoliticasCookies extends Component {
  render() {
    return (
      <div className='polytics'>
        <div className='bannerRow'>
        <img src={CookiePolytics} className="" alt="Cookie Polytics banner" />
        </div>

        <div className='containerPolytics'>
          <p>blabalsdfasñdfsañkjfñaslfblabalsdfasñdfsañkjfñaslfblabalsdfasñdfsañkjfñaslfblabalsdfasñdfsañkjfñaslfblabalsdfasñdfsañkjfñaslfblabalsdfasñdfsañkjfñaslfblabalsdfasñdfsañkjfñaslfblabalsdfasñdfsañkjfñaslfblabalsdfasñdfsañkjfñaslfblabalsdfasñdfsañkjfñaslfblabalsdfasñdfsañkjfñaslfblabalsdfasñdfsañkjfñaslfblabalsdfasñdfsañkjfñaslf</p>
        </div>
        <FooterComp></FooterComp>
      </div>

    )
  }
}

import React, { Component } from 'react'
import PrivatePolytics from '../../imgs/privacy_polytics.jpg'
import '../css/Polytics.css'
import FooterComp from '../layouts/FooterComp'

export default class AvisoLegal extends Component {
  render() {
    return (
      <div className='polytics'>
        <div className='bannerRow'>
        <img src={PrivatePolytics} className="" alt="Cookie Polytics banner" />
        </div>

        <div className='containerPolytics'>
          <p>blabalsdfasñdfsañkjfñaslfblabalsdfasñdfsañkjfñaslfblabalsdfasñdfsañkjfñaslfblabalsdfasñdfsañkjfñaslfblabalsdfasñdfsañkjfñaslfblabalsdfasñdfsañkjfñaslfblabalsdfasñdfsañkjfñaslfblabalsdfasñdfsañkjfñaslfblabalsdfasñdfsañkjfñaslfblabalsdfasñdfsañkjfñaslfblabalsdfasñdfsañkjfñaslfblabalsdfasñdfsañkjfñaslfblabalsdfasñdfsañkjfñaslf</p>
        </div>
        <FooterComp></FooterComp>
      </div>
    )
  }
}
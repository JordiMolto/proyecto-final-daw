import React, { Component } from 'react'
import '../css/Plans.css'
import PlanCard from '../section/PlanCard'

export default class Plans extends Component {

  render() {

    return (
      <>
        <div id='id_plans' className="container-fluid">
          <div className="container">

            <PlanCard ></PlanCard>

          </div>
        </div>
      </>
    )
  }
}

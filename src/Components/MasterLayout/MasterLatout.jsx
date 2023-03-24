import React, { Component, Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'

export default class MasterLatout extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <Outlet />
        <Footer />
      </Fragment>
    )
  }
}

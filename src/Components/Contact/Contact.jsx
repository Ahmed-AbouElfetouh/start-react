import React, { Component, Fragment } from 'react';
import style from './Contact.module.css';

export default class Contact extends Component {
  render() {
    return (
      <Fragment>
        <section className={style.contact}>
          <div className='head mb-5'>
            <h2 className='color_black'>CONTACT ME</h2>
            <i className={`fa-solid fa-star fa-xl color_black`}></i>
          </div>
          <form>
            <input type='text' placeholder='Name'></input>
            <input type='email' placeholder='Email Address'></input>
            <input type='text' placeholder='Phone Number'></input>
            <textarea placeholder='Message'></textarea>
            <button className=''>Send</button>
          </form>
        </section>
      </Fragment>
    )
  }
}

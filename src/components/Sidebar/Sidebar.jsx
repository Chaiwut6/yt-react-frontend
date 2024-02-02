import React from 'react'
import './Sidebar.css'
function Sidebar() {
  return (
    <section id ="side">
      <div className="-side-pmr">
        <a href="!#">
        <div className="-item">
          <img src="https://via.placeholder.com/24x24" alt="" />
          <div className="-text">หน้าแรก</div>
        </div>
        </a>
        <a href="!#">
        <div className="-item">
          <img src="https://via.placeholder.com/24x24" alt="" />
          <div className="-text">Shots</div>
        </div>
        </a>
        <a href="!#">
        <div className="-item">
          <img src="https://via.placeholder.com/24x24" alt="" />
          <div className="-text">การติดตาม</div>
        </div>
        </a>
      </div>
    </section>
  )
}

export default Sidebar
import React from 'react'
import Mydropdown from './Mydropdown'

function Appheader(props) {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Pricing  {props.xyz}</a>
            </li>

            <li class="nav-item">
              <a class="nav-link disabled" aria-disabled="true">{props.menu.name}</a>
            </li>
          </ul>
            <Mydropdown login={props.xyz} drop={props.menu} sms={props.myfunc}></Mydropdown>
        </div>
      </div>
    </nav>
  )
}

export default Appheader
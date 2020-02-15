import React from 'react'
import "./sing.scss";

import SingIn from '../../components/sing-in/SingIn'
import SingUp from '../../components/sing-up/SingUp'

export default function Sing() {
  return (
    <div className="sing">
      <SingIn/>
      <SingUp/>
    </div>
  )
}

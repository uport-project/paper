import React from 'react'
import './Identity.css'
import FrontCard from './FrontCard'
import AddressCard from './AddressCard'
import SecretCard from './SecretCard'
import Card from './Card'

const Identity = ({identity}) => (
  <div className="Identity">
    <FrontCard claims={identity.claims} cert={identity.cert} did={identity.did} />
    <SecretCard privateKey={identity.privateKey} did={identity.did} />
  </div>
)

export default Identity;

import React from 'react'
import './Identity.css'
import FrontCard from './FrontCard'
import AddressCard from './AddressCard'
import SecretCard from './SecretCard'

const Identity = ({identity}) => (
  <div className="Identity">
    <FrontCard claims={identity.claims} cert={identity.cert} did={identity.did} />
    <AddressCard did={identity.did} address={identity.address} />
    <SecretCard mnemonic={identity.mnemonic} seed={identity.seed} />
  </div>
)

export default Identity;

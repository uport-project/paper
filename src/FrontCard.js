import React from 'react'
import './Identity.css'
import Card from './Card'
import QrCode from 'qrcode.react'

const FrontCard = ({claims, cert, did}) => (
  <Card did={did}>
    <QrCode size={170} value={`me.uport:add?attestations=${cert}`} />
    <section className="Bio">
      <img src={claims.image} alt='avatar'/>
      <div><strong>{claims.firstName} {claims.lastName}</strong></div>
      <div><strong>DOB</strong> {claims.dob}</div>
      <div><strong>Country</strong> {claims.country}</div>
    </section>
  </Card>
)
export default FrontCard

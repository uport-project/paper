import React from 'react'
import './Identity.css'
import Card from './Card'
import QrCode from 'qrcode.react'

const AddressCard = ({address, did}) => (
  <Card did={did}>
    <QrCode value={`ethereum:${address}`} />
    <div className="address">{address}</div>
  </Card>
)
export default AddressCard;

import React from 'react'
import './Identity.css'
import Card from './Card'
import QrCode from 'qrcode.react'

const AddressCard = ({address}) => (
  <Card did={address} className="address">
    <QrCode size={170} value={`ethereum:${address}`} />
    <section className="Blurb" style={{fontSize: 8}}>
      <h3>Ethereum Address</h3>
      <p>
        You can use this address to receive Ethereum and ERC-20 tokens. To redeem them you can use wwww.myetherwallet.com using the seed phrase on the next page.
      </p>
    </section>

  </Card>
)
export default AddressCard;

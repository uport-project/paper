import React from 'react'
import './Card.css'
import QrCode from 'qrcode.react'

const SecretCard = props => (
  <div className="Card Secret">
    <QrCode size={100} value={props.seed} />
    <div class="Seed">
    {props.mnemonic}
    </div>
     <section class="Blurb">
      <p>
        This QR code and seed phrase contains the only copy of your private key for controlling your identity.
      </p>
    </section>
  </div>
)
export default SecretCard;

import React from 'react'
import './Card.css'
import QrCode from 'qrcode.react'

const SecretCard = props => (
  <div className="Card" style={{width:  '53.98mm'}}>
    <QrCode size={100} value={props.seed} />
    <div class="Seed">
    {props.mnemonic}
    </div>
     <section class="Blurb">
      <h3>Please keep this safe</h3>
      <p>
        This QR code contains the only copy of your private key for controlling your identity. If anyone scans it they can take control of your identity.
      </p>
      <p>
        By scanning this QR code when signing up with your uPort app you can take full control of your identity.
      </p>
    </section>
  </div>
)
export default SecretCard;

import React from 'react'
import './Card.css'
import Card from './Card'
import QrCode from 'qrcode.react'

const SecretCard = props => (
  <Card did={props.did} style="width: 202;">
    <QrCode size={186} value={props.privateKey} />
    {props.full 
    ? <section class="Blurb">
      <h3>Please keep this safe</h3>
      <p>
        This QR code contains the only copy of your private key for controlling your identity. If anyone scans it they can take control of your identity.
      </p>
      <p>
        By scanning this QR code when signing up with your uPort app you can take full control of your identity.
      </p>
    </section>
    : null}
    
  </Card>
)
export default SecretCard;

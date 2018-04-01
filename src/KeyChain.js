import { ec as EC } from 'elliptic'
import { toEthereumAddress } from 'did-jwt/src/Digest'
import { createJWT, SimpleSigner } from 'did-jwt'
import faker from 'faker'
const secp256k1 = new EC('secp256k1')

const issuer = '2oeXufHGDpU51bfKBsZDdu7Je9weJ3r7sVG'
const signer = SimpleSigner('c818c2665a8023102e430ef3b442f1915ed8dc3abcaffbc51c5394f03fc609e2')

export async function createIdentity () {
  const kp = secp256k1.genKeyPair()
  const publicKey = kp.getPublic('hex')
  const privateKey = kp.getPublic('hex')
  const address = toEthereumAddress(publicKey)
  const did = `did:ethr:${address}`
  const claims = {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    country: faker.address.countryCode(),
    dob: faker.date.past().toLocaleString('en-US', {year: 'numeric', day: 'numeric', month: 'numeric'})
  }
  const cert = await createJWT({sub: did, claim: {wideIdCertificate: claims}}, {issuer, signer})
  claims.image = faker.image.avatar()
  // console.log({publicKey, privateKey, address, did, claims, cert})
  return {publicKey, privateKey, address, did, claims, cert}
}
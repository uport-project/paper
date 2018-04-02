import { ec as EC } from 'elliptic'
import { toEthereumAddress } from 'did-jwt/src/Digest'
import { createJWT, SimpleSigner } from 'did-jwt'
import faker from 'faker'
import HDKey from 'hdkey'
import bip39 from 'bip39'

const secp256k1 = new EC('secp256k1')

const issuer = '2oeXufHGDpU51bfKBsZDdu7Je9weJ3r7sVG'
const signer = SimpleSigner('c818c2665a8023102e430ef3b442f1915ed8dc3abcaffbc51c5394f03fc609e2')

const paymentPath = `m/44'/60'/0'/0/0`
const idPath = `m/7696500'/0'/0'/0'`

export function fakeClaims () {
  return {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    country: faker.address.countryCode(),
    dob: faker.date.past().toLocaleString('en-US', {year: 'numeric', day: 'numeric', month: 'numeric'}),
    image: faker.image.avatar()
  }
}

export function genKeyPair (hdkey, path) {
  const derived = hdkey.derive(path)
  console.log(derived)
  const privateKey = secp256k1.keyFromPrivate(derived.privateKey)
  const publicKey = privateKey.getPublic('hex')
  console.log(publicKey.toString('hex'))
  // const privateKey =derived.privateKey.toString('hex')
  return toEthereumAddress(publicKey)
}
export async function createIdentity (claims) {
  const mnemonic = bip39.generateMnemonic()
  console.log(mnemonic)
  const entropy = bip39.mnemonicToEntropy(mnemonic)
  const seed = bip39.mnemonicToSeed(mnemonic)
  const hdkey = HDKey.fromMasterSeed(seed)
  const address = genKeyPair(hdkey, paymentPath)
  const idAddress = genKeyPair(hdkey, idPath)
  const did = `did:ethr:${idAddress}`
  const cert = await createJWT({sub: did, claim: {wideIdCertificate: claims}}, {issuer, signer})
  // console.log({publicKey, privateKey, address, did, claims, cert})
  // console.log({did, claims, cert, address, mnemonic, entropy, seed: seed.toString('hex')})
  return {did, claims, cert, address, mnemonic, entropy, seed: seed.toString('hex')}
}
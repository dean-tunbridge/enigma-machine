import { useState } from 'react'

const messageEncode = {
  a: 0,
  b: 1,
  c: 2,
  d: 3,
  e: 4,
  f: 5,
  g: 6,
  h: 7,
  i: 8,
  j: 9,
  k: 10,
  l: 11,
  m: 12,
  n: 13,
  o: 14,
  p: 15,
  q: 16,
  r: 17,
  s: 18,
  t: 19,
  u: 20,
  v: 21,
  w: 22,
  x: 23,
  y: 24,
  z: 25,
}

const rotorOne = {
  0: 17,
  1: 4,
  2: 22,
  3: 8,
  4: 1,
  5: 19,
  6: 12,
  7: 5,
  8: 24,
  9: 14,
  10: 0,
  11: 20,
  12: 11,
  13: 6,
  14: 15,
  15: 23,
  16: 21,
  17: 10,
  18: 25,
  19: 7,
  20: 18,
  21: 9,
  22: 2,
  23: 16,
  24: 3,
  25: 13,
  // _: '_',
}
const rotorTwo = {
  0: 6,
  1: 20,
  2: 9,
  3: 15,
  4: 3,
  5: 18,
  6: 13,
  7: 22,
  8: 2,
  9: 11,
  10: 7,
  11: 24,
  12: 4,
  13: 12,
  14: 0,
  15: 17,
  16: 21,
  17: 10,
  18: 25,
  19: 5,
  20: 23,
  21: 8,
  22: 14,
  23: 19,
  24: 1,
  25: 16,
  // _: '_',
}

const rotorThree = {
  0: 25,
  1: 8,
  2: 14,
  3: 0,
  4: 16,
  5: 22,
  6: 7,
  7: 4,
  8: 23,
  9: 19,
  10: 2,
  11: 13,
  12: 11,
  13: 5,
  14: 18,
  15: 20,
  16: 1,
  17: 10,
  18: 21,
  19: 3,
  20: 15,
  21: 6,
  22: 9,
  23: 24,
  24: 12,
  25: 17,
  // _: '_',
}

const encodedMessage = {
  0: 'a',
  1: 'b',
  2: 'c',
  3: 'd',
  4: 'e',
  5: 'f',
  6: 'g',
  7: 'h',
  8: 'i',
  9: 'j',
  10: 'k',
  11: 'l',
  12: 'm',
  13: 'n',
  14: 'o',
  15: 'p',
  16: 'q',
  17: 'r',
  18: 's',
  19: 't',
  20: 'u',
  21: 'v',
  22: 'w',
  23: 'x',
  24: 'y',
  25: 'z',
  // _: '_',
}

function DecodeEnigma() {
  // -- STATE -- //
  const [message, setMessage] = useState('')

  function updateMessage(newMessage) {
    setMessage(newMessage)
  }
  let rotor1State = 0
  let rotor2State = 0
  let rotor3State = 0
  let rotorLength = 26

  // -- DECRYPTING -- //

  const messageObj = Object.entries(messageEncode).map(([key, value]) => [
    value,
    key,
  ])
  const rotorOneObj = Object.entries(rotorOne).map(([key, value]) => [
    value,
    key,
  ])
  const rotorTwoObj = Object.entries(rotorTwo).map(([key, value]) => [
    value,
    key,
  ])
  const rotorThreeObj = Object.entries(rotorThree).map(([key, value]) => [
    value,
    key,
  ])
  const encodeObj = Object.entries(encodedMessage).map(([key, value]) => [
    value,
    key,
  ])

  const messageEncodeReverse = Object.fromEntries(messageObj)
  const rotorOneReverse = Object.fromEntries(rotorOneObj)
  const rotorTwoReverse = Object.fromEntries(rotorTwoObj)
  const rotorThreeReverse = Object.fromEntries(rotorThreeObj)
  const encodedMessageReverse = Object.fromEntries(encodeObj)

  let split = message.split('')
  let firstDecode = split.map((input) => encodedMessageReverse[input])
  // Reverse rotorThree encoding
  let rotorThreeDecode = firstDecode.map((input) => {
    let stepThree = rotorThreeReverse[(input - rotor3State) % rotorLength]
    return stepThree
  })

  // Reverse rotorTwo encoding
  let rotorTwoDecode = rotorThreeDecode.map((input) => {
    let stepTwo = rotorTwoReverse[(input - rotor2State) % rotorLength]
    return stepTwo
  })

  // Reverse rotorOne encoding
  let rotorOneDecode = rotorTwoDecode.map((input) => {
    let stepOne = rotorOneReverse[(input - rotor1State) % rotorLength]
    rotor1State = (rotor1State - 1 + rotorLength) % rotorLength
    rotor2State =
      rotor1State === rotorLength - 1
        ? (rotor2State - 1 + rotorLength) % rotorLength
        : rotor2State
    rotor3State =
      rotor2State === rotorLength - 1 && rotor1State === rotorLength - 1
        ? (rotor3State - 1 + rotorLength) % rotorLength
        : rotor3State
    return stepOne
  })

  let completeDecode = rotorOneDecode.map(
    (input) => messageEncodeReverse[input]
  )

  // console.log(message)
  // console.log(rotorThreeDecode)
  // console.log(rotorTwoDecode)
  // console.log(rotorTwoDecode)
  // console.log(rotorOneDecode)
  // console.log(completeDecode)

  return (
    <>
      <div className="main-div">
        <h1 className="heading">ENCRYPTID</h1>
        <div className="sections-container">
          <div className="encryption-flex">
            <h2 className="real-enigma">
              Real logic from a real Enigma machine
            </h2>
            {/* <h4>{message}</h4> */}

            <input
              type="text"
              value={message}
              onChange={(e) => updateMessage(e.target.value)}
            />
            <h4 className="encoded-heading">entering machine</h4>
            <p className="encoded-numbers">{rotorThreeDecode}</p>
            <h4 className="encoded-heading">decode third rotor</h4>
            <p className="encoded-numbers">{rotorTwoDecode}</p>
            <h4 className="encoded-heading">decode second rotor</h4>
            <p className="encoded-numbers">{rotorTwoDecode}</p>
            <h4 className="encoded-heading">decode first rotor</h4>
            <p className="encoded-numbers">{rotorOneDecode}</p>

            <h3>Your encrypted message: {completeDecode}</h3>
          </div>
        </div>
      </div>
    </>
  )
}

export default DecodeEnigma

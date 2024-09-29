import './App.css'
import { useState } from 'react'

function App() {
  const messageEncode = {
    a: 17,
    b: 4,
    c: 22,
    d: 8,
    e: 1,
    f: 19,
    g: 12,
    h: 5,
    i: 24,
    j: 14,
    k: 0,
    l: 20,
    m: 11,
    n: 6,
    o: 15,
    p: 23,
    q: 21,
    r: 10,
    s: 25,
    t: 7,
    u: 18,
    v: 9,
    w: 2,
    x: 16,
    y: 3,
    z: 13,
    ' ': '_',
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
    _: '_',
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
    _: '_',
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
    _: '_',
  }

  const rotorFour = {
    0: 23,
    1: 7,
    2: 14,
    3: 19,
    4: 11,
    5: 21,
    6: 4,
    7: 17,
    8: 2,
    9: 8,
    10: 20,
    11: 13,
    12: 6,
    13: 22,
    14: 25,
    15: 1,
    16: 12,
    17: 9,
    18: 16,
    19: 18,
    20: 3,
    21: 15,
    22: 24,
    23: 10,
    24: 5,
    25: 0,
    _: '_',
  }

  const rotorFive = {
    0: 8,
    1: 20,
    2: 14,
    3: 23,
    4: 5,
    5: 18,
    6: 11,
    7: 1,
    8: 22,
    9: 12,
    10: 3,
    11: 25,
    12: 17,
    13: 7,
    14: 4,
    15: 19,
    16: 0,
    17: 13,
    18: 16,
    19: 21,
    20: 9,
    21: 6,
    22: 24,
    23: 2,
    24: 10,
    25: 15,
    _: '_',
  }

  const rotorSix = {
    0: 13,
    1: 6,
    2: 21,
    3: 4,
    4: 19,
    5: 25,
    6: 9,
    7: 15,
    8: 8,
    9: 12,
    10: 23,
    11: 3,
    12: 0,
    13: 22,
    14: 18,
    15: 1,
    16: 16,
    17: 10,
    18: 7,
    19: 2,
    20: 24,
    21: 5,
    22: 14,
    23: 11,
    24: 20,
    25: 17,
    _: '_',
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
    _: '_',
  }

  // -- STATE -- //
  const [message, setMessage] = useState('')
  function updateMessage(newMessage) {
    setMessage(newMessage)
  }

  // // DECRYPTING STATE LOGIC WILL GO HERE //
  const [decode, setDecode] = useState('')
  function updateDecode(newDecode) {
    setDecode(newDecode)
  }

  // -- ENCRYPTING -- //

  let split = message.split('')
  let firstEncode = split.map((input) => messageEncode[input])
  let rotorOneEncode = firstEncode.map((input) => rotorOne[input])
  let rotorTwoEncode = rotorOneEncode.map((input) => rotorTwo[input])
  let rotorThreeEncode = rotorTwoEncode.map((input) => rotorThree[input])
  let rotorFourEncode = rotorThreeEncode.map((input) => rotorFour[input])
  let rotorFiveEncode = rotorFourEncode.map((input) => rotorFive[input])
  let rotorSixEncode = rotorFiveEncode.map((input) => rotorSix[input])
  let completeEncode = rotorSixEncode.map((input) => encodedMessage[input])

  console.log('initial message', message)
  console.log('first encode', firstEncode)
  console.log('rotor one', rotorOneEncode)
  console.log('rotor two', rotorTwoEncode)
  console.log('rotor three', rotorThreeEncode)
  console.log('rotor four', rotorFourEncode)
  console.log('rotor five', rotorFiveEncode)
  console.log('rotor six', rotorSixEncode)
  console.log('complete encode', completeEncode)

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
  const rotorFourObj = Object.entries(rotorFour).map(([key, value]) => [
    value,
    key,
  ])
  const rotorFiveObj = Object.entries(rotorFive).map(([key, value]) => [
    value,
    key,
  ])
  const rotorSixObj = Object.entries(rotorSix).map(([key, value]) => [
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
  const rotorFourReverse = Object.fromEntries(rotorFourObj)
  const rotorFiveReverse = Object.fromEntries(rotorFiveObj)
  const rotorSixReverse = Object.fromEntries(rotorSixObj)
  const encodedMessageReverse = Object.fromEntries(encodeObj)

  // DECODING FORM LOGIC WILL GO HERE //

  let decodeEncodedMessage = [...decode].map(
    (input) => encodedMessageReverse[input]
  )
  let decodeRotorSix = decodeEncodedMessage.map(
    (input) => rotorSixReverse[input]
  )
  let decodeRotorFive = decodeRotorSix.map((input) => rotorFiveReverse[input])
  let decodeRotorFour = decodeRotorFive.map((input) => rotorFourReverse[input])
  let decodeRotorThree = decodeRotorFour.map(
    (input) => rotorThreeReverse[input]
  )
  let decodeRotorTwo = decodeRotorThree.map((input) => rotorTwoReverse[input])
  let decodeRotorOne = decodeRotorTwo.map((input) => rotorOneReverse[input])
  let decodeMessageEncode = decodeRotorOne.map(
    (input) => messageEncodeReverse[input]
  )
  let decodeMessage = decodeMessageEncode.join('')

  console.log('decode rotor three', decodeRotorThree)
  console.log('decode rotor two', decodeRotorTwo)
  console.log('decode rotor one', decodeRotorOne)
  console.log('decode message', decodeMessage)

  return (
    <>
      <div className="main-div">
        <h1 className="heading">ENCRYPTID</h1>
        <div className="sections-container">
          <div className="encryption-flex">
            <h2>Encrypting message</h2>
            {/* <h4>{message}</h4> */}

            <input
              type="text"
              value={message}
              onChange={(e) => updateMessage(e.target.value)}
            />
            <h4 className="encoded-heading">entering machine</h4>
            <p className="encoded-numbers">{firstEncode}</p>
            <h4 className="encoded-heading">entering first rotor</h4>
            <p className="encoded-numbers">{rotorOneEncode}</p>
            <h4 className="encoded-heading">entering second rotor</h4>
            <p className="encoded-numbers">{rotorTwoEncode}</p>
            <h4 className="encoded-heading">entering third rotor</h4>
            <p className="encoded-numbers">{rotorThreeEncode}</p>
            <h4 className="encoded-heading">entering fourth rotor</h4>
            <p className="encoded-numbers">{rotorFourEncode}</p>
            <h4 className="encoded-heading">entering fifth rotor</h4>
            <p className="encoded-numbers">{rotorFiveEncode}</p>
            <h4 className="encoded-heading">entering sixth rotor</h4>
            <p className="encoded-numbers">{rotorSixEncode}</p>
            <h3>Your encrypted message: {completeEncode}</h3>
          </div>

          <div className="decryption-flex">
            <h2>Decrypting message</h2>

            <input
              type="text"
              value={decode}
              onChange={(e) => updateDecode(e.target.value)}
            />
            <h4 className="encoded-heading">
              Encrypted message sent back into the machine
            </h4>
            <p className="encoded-numbers">{decodeEncodedMessage}</p>
            <h4 className="encoded-heading">reverse pairs in rotor six</h4>
            <p className="encoded-numbers">{decodeRotorSix}</p>
            <h4 className="encoded-heading">reverse pairs in rotor five</h4>
            <p className="encoded-numbers">{decodeRotorFive}</p>
            <h4 className="encoded-heading">reverse pairs in rotor four</h4>
            <p className="encoded-numbers">{decodeRotorFour}</p>
            <h4 className="encoded-heading">reverse pairs in rotor three</h4>
            <p className="encoded-numbers">{decodeRotorThree}</p>
            <h4 className="encoded-heading">reverse pairs in rotor two</h4>
            <p className="encoded-numbers">{decodeRotorTwo}</p>
            <h4 className="encoded-heading">reverse pairs in rotor one</h4>
            <p className="encoded-numbers">{decodeRotorOne}</p>
            <h3>Your decrypted message: {decodeMessage}</h3>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

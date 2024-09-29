import React from 'react'
import { useState } from 'react'

function Decrypt() {
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

  // --  CRYPTID ROTOR ORDER -- //

  const rotorOrder = {
    bigfoot: [
      encodedMessageReverse,
      rotorOneReverse,
      rotorTwoReverse,
      rotorThreeReverse,
      rotorFourReverse,
      rotorFiveReverse,
      rotorSixReverse,
      messageEncodeReverse,
    ],
    nessie: [
      encodedMessageReverse,
      rotorSixReverse,
      rotorFiveReverse,
      rotorFourReverse,
      rotorThreeReverse,
      rotorTwoReverse,
      rotorOneReverse,
      messageEncodeReverse,
    ],
    mothman: [
      encodedMessageReverse,
      rotorFourReverse,
      rotorFiveReverse,
      rotorSixReverse,
      rotorThreeReverse,
      rotorTwoReverse,
      rotorOneReverse,
      messageEncodeReverse,
    ],
    chupacabra: [
      encodedMessageReverse,
      rotorTwoReverse,
      rotorFourReverse,
      rotorSixReverse,
      rotorOneReverse,
      rotorThreeReverse,
      rotorFiveReverse,
      messageEncodeReverse,
    ],
  }

  // -- USE STATE -- //
  const [cryptid, setCryptid] = useState('bigfoot')
  const [order, setOrder] = useState([])
  const [message, setMessage] = useState('')
  const [submitted, isSubmitted] = useState(false)

  // -- EVENT HANDLERS -- //
  function handleChange(event) {
    setCryptid(event.target.value)
    isSubmitted(false)
  }

  function handleSubmit(e) {
    e.preventDefault()
    let selectedOrder = rotorOrder[cryptid]
    setOrder(selectedOrder)
    isSubmitted(true)
    console.log(cryptid)
    // console.log(order)
  }

  function updateMessage(newMessage) {
    setMessage(newMessage)
  }
  // -- DECRYPTING -- //

  let firstDecode = [...message].map((input) => encodedMessageReverse[input])
  let rotorOneDecode = firstDecode.map((input) => order[6][input])
  let rotorTwoDecode = rotorOneDecode.map((input) => order[5][input])
  let rotorThreeDecode = rotorTwoDecode.map((input) => order[4][input])
  let rotorFourDecode = rotorThreeDecode.map((input) => order[3][input])
  let rotorFiveDecode = rotorFourDecode.map((input) => order[2][input])
  let rotorSixDecode = rotorFiveDecode.map((input) => order[1][input])
  let completeDecode = rotorSixDecode.map(
    (input) => messageEncodeReverse[input]
  )

  return (
    <>
      <div className="main-div">
        {/* <h1 className="heading">ENCRYPTID</h1> */}
        <div className="sections-container">
          <div className="decryption-flex">
            <h2 className="component-inner-title">Decrypting message</h2>
            <form onSubmit={handleSubmit}>
              <label>
                <h4 className="encoded-heading">
                  Enter the super secret password:
                </h4>
                <select value={cryptid} onChange={handleChange}>
                  <option value="bigfoot">Bigfoot</option>
                  <option value="nessie">Loch Ness Monster</option>
                  <option value="mothman">Mothman</option>
                  <option value="chupacabra">Chupacabra</option>
                </select>
              </label>
              <input type="submit" value="Select" />
            </form>
            {submitted && <h3> Your selection is {cryptid}</h3>}
            {submitted && (
              <input
                type="text"
                value={message}
                onChange={(e) => updateMessage(e.target.value)}
              />
            )}
            <h4 className="encoded-heading">
              Encrypted message sent back into the machine
            </h4>
            <p className="encoded-numbers">
              {firstDecode}
              <br />
            </p>
            <h4 className="encoded-heading">reverse pairs in rotor six</h4>
            <p className="encoded-numbers">
              {rotorOneDecode}
              <br />
            </p>
            <h4 className="encoded-heading">reverse pairs in rotor five</h4>
            <p className="encoded-numbers">
              {rotorTwoDecode}
              <br />
            </p>
            <h4 className="encoded-heading">reverse pairs in rotor four</h4>
            <p className="encoded-numbers">
              {rotorThreeDecode}
              <br />
            </p>
            <h4 className="encoded-heading">reverse pairs in rotor three</h4>
            <p className="encoded-numbers">
              {rotorFourDecode}
              <br />
            </p>
            <h4 className="encoded-heading">reverse pairs in rotor two</h4>
            <p className="encoded-numbers">
              {rotorFiveDecode}
              <br />
            </p>
            <h4 className="encoded-heading">reverse pairs in rotor one</h4>
            <p className="encoded-numbers">
              {rotorSixDecode}
              <br />
            </p>
            <h3 className="encrypted-message">
              Your {submitted && `${cryptid}`} decrypted message:{' '}
              {completeDecode}
            </h3>
          </div>
        </div>
      </div>
    </>
  )
}

export default Decrypt

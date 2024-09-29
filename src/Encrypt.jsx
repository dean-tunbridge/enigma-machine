import { useState } from 'react'

function Encrypt() {
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

  // --  CRYPTID ROTOR ORDER -- //

  const rotorOrder = {
    bigfoot: [
      messageEncode,
      rotorOne,
      rotorTwo,
      rotorThree,
      rotorFour,
      rotorFive,
      rotorSix,
      encodedMessage,
    ],
    nessie: [
      messageEncode,
      rotorSix,
      rotorFive,
      rotorFour,
      rotorThree,
      rotorTwo,
      rotorOne,
      encodedMessage,
    ],
    mothman: [
      messageEncode,
      rotorFour,
      rotorFive,
      rotorSix,
      rotorThree,
      rotorTwo,
      rotorOne,
      encodedMessage,
    ],
    chupacabra: [
      messageEncode,
      rotorTwo,
      rotorFour,
      rotorSix,
      rotorOne,
      rotorThree,
      rotorFive,
      encodedMessage,
    ],
  }

  // -- USE STATE -- //
  const [order, setOrder] = useState([])
  const [message, setMessage] = useState('')
  const [cryptid, setCryptid] = useState('bigfoot')
  const [submitted, isSubmitted] = useState(false)

  function updateMessage(newMessage) {
    setMessage(newMessage)
  }

  // -- DROP DOWN MENU -- //

  function handleChange(event) {
    setCryptid(event.target.value)
    isSubmitted(false)
  }

  function handleSubmit(e) {
    e.preventDefault()
    let selectedOrder = rotorOrder[cryptid] || []
    setOrder(selectedOrder)
    isSubmitted(true)
    console.log(cryptid)
    // console.log(order)
  }

  // -- ENCRYPTING -- //
  let split = message.split('')
  let firstEncode = split.map((input) => order[0][input])
  let rotorOneEncode = firstEncode.map((input) => order[1][input])
  let rotorTwoEncode = rotorOneEncode.map((input) => order[2][input])
  let rotorThreeEncode = rotorTwoEncode.map((input) => order[3][input])
  let rotorFourEncode = rotorThreeEncode.map((input) => order[4][input])
  let rotorFiveEncode = rotorFourEncode.map((input) => order[5][input])
  let rotorSixEncode = rotorFiveEncode.map((input) => order[6][input])
  let completeEncode = rotorSixEncode.map((input) => order[7][input])

  return (
    <>
      <div className="main-div">
        {/* <h1 className="heading">ENCRYPTID</h1> */}
        <div className="sections-container">
          <div className="encryption-flex">
            <h2 className="component-inner-title">Encrypting message</h2>
            <form className="form" onSubmit={handleSubmit}>
              <label>
                <h4 className="encoded-heading">
                  Pick a super secret password:
                </h4>
                <select
                  className="encoded-numbers"
                  value={cryptid}
                  onChange={handleChange}>
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
            <h4 className="encoded-heading">entering machine</h4>
            <p className="encoded-numbers">
              {firstEncode}
              <br />
            </p>
            <h4 className="encoded-heading">entering first rotor</h4>
            <p className="encoded-numbers">
              {rotorOneEncode}
              <br />
            </p>
            <h4 className="encoded-heading">entering second rotor</h4>
            <p className="encoded-numbers">
              {rotorTwoEncode}
              <br />
            </p>
            <h4 className="encoded-heading">entering third rotor</h4>
            <p className="encoded-numbers">
              {rotorThreeEncode}
              <br />
            </p>
            <h4 className="encoded-heading">entering fourth rotor</h4>
            <p className="encoded-numbers">
              {rotorFourEncode}
              <br />
            </p>
            <h4 className="encoded-heading">entering fifth rotor</h4>
            <p className="encoded-numbers">
              {rotorFiveEncode}
              <br />
            </p>
            <h4 className="encoded-heading">entering sixth rotor</h4>
            <p className="encoded-numbers">
              {rotorSixEncode}
              <br />
            </p>
            <h3 className="encrypted-message">
              Your {submitted && `${cryptid}`} encrypted message:{' '}
              {completeEncode}
            </h3>
          </div>
        </div>
      </div>
    </>
  )
}

export default Encrypt

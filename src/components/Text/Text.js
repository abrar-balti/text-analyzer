import React, { useState } from 'react'

export default function Text() {
  const [text, setText] = useState('');
  //handle uppercase
  const upperCase = () => {
    const upperText = text.toLocaleUpperCase();
    setText(upperText)
  }

  //handle lowercase
  const lowerCase = () => {
    const lowerText = text.toLocaleLowerCase();
    setText(lowerText)
  }
  //handle the textarea state on change
  const handleChange = (event) => {
    setText(event.target.value)
  }
  return (
    <>
      <div className=''>
        <h1>Text Analyzer</h1>
        <p>Enter the text to analyze!</p>
        <div className="input-group">
          <textarea className="form-control  " rows="8" aria-label="With textarea" value={text} onChange={handleChange} placeholder='Your text goes here....'></textarea>
        </div>
        <button className='btn btn-primary my-3 ' onClick={upperCase}>Convert To Uppercase</button>
        <button className='btn btn-primary my-2 ' onClick={lowerCase}>Convert To Lowercase</button>
      </div>

      <div className='my-5'>
        <h2>Your Text Summary</h2>
     
        <p>Your text contains <strong>{text.split(' ').length}</strong> Words and <strong>{text.length}</strong> Characters</p>
        <p>It will take<strong> {0.008 *text.split(' ').length}</strong> Minutes to read</p>
 
        <h2 className='my-3'>Text Preview</h2>
        <div className='preview'>
        <p>{text}</p>
        </div>
      </div>
    </>
  )
}

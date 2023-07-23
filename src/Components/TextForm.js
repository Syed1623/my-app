import React, {useState}  from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) 
{
    const [text, setText] = useState('Enter your text here');

    const handleup=()=>{
        let newText=text.toUpperCase();
        setText(newText);
    }

    const handlelow = ()=>{
        let newText=text.toLowerCase();
        setText(newText);
    }

    const clear = ()=>{
        setText('');
    }
    
    const handleonchange = (event)=>
    {
        setText(event.target.value)
    }
    
    function countCharacters(text) {
        const trimmedtext = text.trim(" ");
        let characterCount = trimmedtext.length;
        if(trimmedtext===" "){
            characterCount--;
        }
        return characterCount;
    }
    
    return (
    <>
        <div className='container' style={{backgroundColor:props.Mode==='light'?'white':'rgb(32,32,32)'}}>
            <h1 style={{color: props.Mode==='light'?'black':'white'}}>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleonchange}  style={{color: props.Mode==='light'?'black':'white',backgroundColor:props.Mode==='light'?'white':'rgb(32,32,32)'}} id="myBox" rows="6"></textarea>
            </div>
            <button className="btn btn-primary mx-2 my-2" onClick={handleup}>uppercase</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handlelow}>lowercase</button>
            <button className="btn btn-primary mx-2 my-2" onClick={clear}>clear</button>
        </div>

        <div className="container my-2" style={{backgroundColor:props.Mode==='light'?'white':'rgb(32,32,32)'}} >
            <h1 style={{color: props.Mode==='light'?'black':'white'}}>your text summary</h1>
            <p style={{color: props.Mode==='light'?'black':'white'}}>{text.split(" ").length} words and {countCharacters(text)} characters</p>
            <p style={{color: props.Mode==='light'?'black':'white'}}>{text.split(" ").length/200} Characters per minute</p>

        <h1 style={{color: props.Mode==='light'?'black':'white'}}>Preview</h1>
            <div className="myBox" style={{backgroundColor:props.Mode==='light'?'white':'rgb(32,32,32)'}}>
                <p style={{color: props.Mode==='light'?'black':'white'}}>{text}</p>
            </div>
        </div>
    </>
  )
}

TextForm.propTypes= {
    heading: PropTypes.string
}

TextForm.defaultProps = {
    heading: 'Enter heading here'
}
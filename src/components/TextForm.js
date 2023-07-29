import React, { useState } from "react";


export default function TextForm(props) {
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleUpClick = () => {
    let upCaseText = text.toUpperCase();
    setText(upCaseText);
    props.showAlert("Converted to UpperCase!✌","danger");
  };
  
  const handleLwClick = () => {
    let lCaseText = text.toLowerCase();
    setText(lCaseText);
    props.showAlert("Converted to LowerCase!👏","primary");
  };

  const clrClick = () => {
    let lCaseText = '';
    setText(lCaseText);
    props.showAlert("Cleared Everything!😢","success");
  };
  

  const handleCopy=()=>{
    var text = document.getElementById('mybox');
    text.select();
    text.setSelectionRange(0,9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard!😉","success");
  }

  const ExtraSpaces=()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed Extra Spaces!👌","success");
  }

  const [text, setText] = useState("");

  const [myStyle,setmyStyle] = useState({
    color:'white',
    border: '1px solid grey',
    backgroundColor:'black'
  })

  const [btntext,setBtnText] = useState('Enable Light Mode')

  const toggleStyle = () =>{
    if(myStyle.color === 'white'){
      setmyStyle({
        color:'black',
        border: '1px solid black',
        backgroundColor:'white'
      })
      setBtnText('Enable Dark Mode')
    }
    else{
      setmyStyle({
        color:'white',
        border: '1px solid white',
        backgroundColor:'black'
      })
      setBtnText('Enable Light Mode')
    }
  }

  return (
    <>
      <div className="container" style={{color:props.mode === 'dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          style={{backgroundColor:props.mode === 'dark'?'#042743':'white',color:props.mode === 'dark'?'white':'#042743'}}
          id="mybox"
          rows="10"
        ></textarea>
        <button className="btn btn-primary my-5 " onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary my-5 mx-5" onClick={handleLwClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary my-5" style={{padding: "5px 50px 4px 50px"}} onClick={clrClick}>
          Clear Text
        </button>
        <button className="btn btn-primary my-5 mx-5" style={{padding: "5px 50px 4px 50px"}} onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary my-5" onClick={ExtraSpaces}>
         Remove Extra Spaces
        </button>
      <div className="Container">
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p>
        <h2 style={{ color: "red" }}>Preview</h2>
        <p>{text}</p>
      </div>

      <div id="accordion" >
        <div className="card" style={myStyle} >
          <div className="card-header" id="headingOne">
            <h5 className="mb-0">
              <button
                className="btn btn-link"
                data-toggle="collapse"
                data-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Collapsible Group Item #1
              </button>
            </h5>
          </div>

          <div
            id="collapseOne" 
            className="collapse show"
            aria-labelledby="headingOne"
            data-parent="#accordion"
          >
            <div className="card-body" style={myStyle}>
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. 3 wolf moon officia aute, non
              cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
              laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
              on it squid single-origin coffee nulla assumenda shoreditch et.
              Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
              nesciunt sapiente ea proident. Ad vegan excepteur butcher vice
              lomo. Leggings occaecat craft beer farm-to-table, raw denim
              aesthetic synth nesciunt you probably haven't heard of them
              accusamus labore sustainable VHS.
            </div>
          </div>
        </div>
        <div className="card" style={myStyle}>
          <div className="card-header" id="headingTwo">
            <h5 className="mb-0">
              <button
                className="btn btn-link collapsed"
                data-toggle="collapse"
                data-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Collapsible Group Item #2
              </button>
            </h5>
          </div>
          <div
            id="collapseTwo"
            className="collapse"  
            aria-labelledby="headingTwo"
            data-parent="#accordion"
            >
            <div className="card-body" style={myStyle}> 
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. 3 wolf moon officia aute, non
              cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
              laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
              on it squid single-origin coffee nulla assumenda shoreditch et.
              Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
              nesciunt sapiente ea proident. Ad vegan excepteur butcher vice
              lomo. Leggings occaecat craft beer farm-to-table, raw denim
              aesthetic synth nesciunt you probably haven't heard of them
              accusamus labore sustainable VHS.
            </div>
          </div>
        </div>
        <div className="card" style={myStyle}>
          <div className="card-header"  id="headingThree">
            <h5 className="mb-0">
              <button
                className="btn btn-link collapsed"
                data-toggle="collapse"
                data-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
                >
                Collapsible Group Item #3
              </button>
            </h5>
          </div>
          <div
            id="collapseThree"
            className="collapse"
            aria-labelledby="headingThree"
            data-parent="#accordion"
            >
            <div className="card-body" style={myStyle}>
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. 3 wolf moon officia aute, non
              cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
              laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
              on it squid single-origin coffee nulla assumenda shoreditch et.
              Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
              nesciunt sapiente ea proident. Ad vegan excepteur butcher vice
              lomo. Leggings occaecat craft beer farm-to-table, raw denim
              aesthetic synth nesciunt you probably haven't heard of them
              accusamus labore sustainable VHS.
            </div>
          </div>
        </div>
        <div className="container my-5 style={{color:props.mode === 'dark'?'white':'black'}}">
          <button onClick={toggleStyle} className="btn btn-primary mx-5">
            {btntext}
          </button>
        </div>
      </div>
    </div>
    </>
  );
}

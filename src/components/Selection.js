import React, {useState} from 'react';
import '../styles/Child.css';

const Selection = (props) => {
  const { applyColor } = props
  const [backgroundcolor, setBackgroundColor] = useState({ backgroundColor: "" });

  const handleClick = () => {
    setBackgroundColor({backgroundColor: applyColor.background});
  };

  return (
    <div className='fix-box' data-testid={applyColor.background} style={backgroundcolor} onClick={handleClick} >
        <center>Selection</center>
    </div>
  )
}
export default Selection;

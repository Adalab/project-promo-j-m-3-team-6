import React from 'react';
import Logo from '../../images/Logo-Gryffincode.png';


const PhotoUser = (props) => {
  let photo = props.photo;
  return (
    <div
      className={'preview__card--picture'}
      style={backgroundImage: `url(${Logo})`}>
      <canvas
        id="canvas"
        className="hiddenCanvas"
        width="220"
        height="200"
      ></canvas>
    </div>
//<div
//className={'preview__card--picture'}
//style={
  //darkModeValue !== false   && photo === defaultImage  
    //? { backgroundImage: `url(${defaultImageDarkMode})` }
    //: { backgroundImage: `url(${photo})` }
//}
//>
  );
};
export default PhotoUser;
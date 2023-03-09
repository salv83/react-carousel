import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';

const Carousel = (props) => {
  const {delay, children} = props;
  const [slideIndex, setSlideIndex]= useState(0);
  const [slide, setSlide]= useState([]);

  const next = () =>{
    if(children){
      let newCurrentIndex = slideIndex
      if (slideIndex === children.length - 1) newCurrentIndex = 0
      else newCurrentIndex += 1
      setSlideIndex(newCurrentIndex);
      setSlide(children[newCurrentIndex]);
    }
  }

  const previous = () =>{
    if(children){
      let newCurrentIndex = slideIndex
      if (slideIndex === 0) newCurrentIndex = children.length - 1
      else newCurrentIndex -= 1
      setSlideIndex(newCurrentIndex);
      setSlide(children[newCurrentIndex]);
    }
  }
  
  useEffect(() => {
      const timer = setTimeout(() => {
        next();
      },delay);
      return () => clearTimeout(timer);
  },[slideIndex]);

return(  
        <div className="carousel">
          <div className="carousel-content">
            {!children && <div>Nothing to display</div>}
            {children && children.length > 1 && <div>{ slide }</div>}
          </div>
          {children && children.length > 1 && 
                <div className="carousel-console">
                    <Button variant="contained" style={{minWidth: '120px'}} onClick={previous}>Previous</Button>
                    <Button variant="contained" style={{minWidth: '120px'}} onClick={next}>Next</Button>
                </div>
          }
        </div>
)}

export default Carousel
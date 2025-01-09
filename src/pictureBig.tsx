"use client"
import styled from "styled-components";

const PictureComponent = styled.div`
  width: 100vw;
  height: 50vh; 
  min-height:300px;
  background-image: url('/images/palestra.jpeg');
  background-size: cover;
  background-position:center 40%;
  background-repeat: no-repeat;
  cursor:pointer;

 @media (max-width: 768px) {
    height:20vh;
     min-height:200px;
}
`


const PictureBig: React.FunctionComponent = () => {
    return (
 <>
 <PictureComponent/>
 </>
    );
}

export default PictureBig;
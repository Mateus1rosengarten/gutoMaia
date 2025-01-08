"use client"
import styled from "styled-components";

const PictureComponent = styled.div`
  width: 100vw;
  height: 55vh; 
  min-height:300px;
  background-image: url('/images/palestra.jpeg');
  background-size: cover;
  background-position:center 40%;
  background-repeat: no-repeat;
  cursor:pointer;

 @media (max-width: 768px) {
    height:30vh;
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
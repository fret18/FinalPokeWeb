import styled from 'styled-components';


//container
export const Container = styled.div`
  width: 25rem;
  height: 25rem;
  background: none;
  perspective: 800px;
`;

export const FlipCard = styled.div`
  background-color: transparent;
  width: 250px;
  height: 250px;
  perspective: 1000px;
  position: absolute;
  perspective: 800;
  -webkit-perspective:800;
`;

//card
export const Card = styled.div`
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: all 0.8s ease;
  border: 5px solid black;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
`;

export const FlipCardInner = styled.div`
  height: 100%;
  width: 100%;
  transform-style: preserve-3d;
  --webkit-transform-style:preserve-3d;
  position: relative;
  transition: all 2s ease;
  text-align: center;
`;

export const Hover = styled.div`
 &:hover {
  transform: rotateY(180deg);
}`;

//dont need
export const FlipcardFrontandBack = styled.div` 
position: absolute;
width: 100%;
height: 100%;
backface-visibility: hidden;
-webkit-backface-visiblity:hidden;
`;

//Front
export const Front = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: transparent;
  backface-visibility: hidden;
  overflow: hidden;
  -webkit-backface-visibility: hidden;
  background-size: 190px;
  background-repeat: no-repeat;
  background-position: bottom;
`;

export const FlipcardFront = styled.div` 
background-color: #bbb;
color: black;
`;

//Back
export const Back = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background: transparent;
  transform: rotateY(180deg);
  overflow: hidden;
  -webkit-backface-visibility: hidden;
  background-image: linear-gradient(#2fbcc5, #302271);
`;

export const FlipcardBack = styled.div` 
  position: relative; 
  transform: rotateY(180deg);
  background-color: #2980b9;
  color: white;
  `;


/*</style>
</head>
<body>
<h1>Card Flip with Text</h1>
<h3>Hover over the image below:</h3>
<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src="img_avatar.png" alt="Avatar" style="width:300px;height:300px;">
    </div>
    <div class="flip-card-back">
      <h1>John Doe</h1> 
      <p>Architect & Engineer</p> 
      <p>We love that guy</p>
    </div>
  </div>
</div>
</body>
</html>*/

import styled from 'styled-components';

 export const ItemDetails = styled.div`
  padding: 10px;
` 
 export const ItemWrapper = styled.div`
  -webkit-column-break-inside: avoid;
  -moz-column-break-inside: avoid;
  column-break-inside: avoid;
  margin-bottom: 15px;
  box-shadow: 0 0 0.5rem rgba(0,0,0,.2);

  @media only screen and (min-width: 768px){
   width: 240px;
  }
 `
 export const ItemVideo = styled.video`
  width: 100%;
  border: 3px solid white;

  @media only screen and (min-width: 768px){
   width: 240px;
  }
 `

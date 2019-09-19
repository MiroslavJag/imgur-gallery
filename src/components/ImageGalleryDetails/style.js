import styled from 'styled-components';

 export const DetailsWrapper = styled.div`
  padding-top: 90px; 
  margin: 0 auto;
  width: 50%;
  display: flex;
  flex-direction: column;
  text-align: center;
 `

 export const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
 `
 export const Title = styled.div`
  font-size: 30px;
  background-color: white;
 `
 export const Info = styled.div`
  display: flex;
  height: 55px;
  background-color: white;
   p {
    margin: 20px;
   }
  `
  export const Image = styled.img`
   border: 5px solid white;
  `
  
  export const Icon = styled.img`
   height: 20px;
   margin-top: 20px;
  `

  export const ScoreWrapper = styled.div`
   flex: 1;
   display: flex;
   margin-left: 10px;

    p {
     margin: 20px 10px;
    }
  `

  export const VoteWrapper = styled.div`
   flex: 1;
   display: flex;
   justify-content: flex-end;

    p {
      margin: 20px 10px;
     }
  `

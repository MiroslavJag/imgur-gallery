import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  height: 70px;
 -webkit-box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
 -moz-box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
 box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
 position: fixed;
 width: 100%;
 background-color: white;
 text-align: center;
 z-index: 1;

 h2, p {
  margin: 0;
 }

 h2 {
  padding-top: 7px;
  color: #0c6eef;
 }
}
`
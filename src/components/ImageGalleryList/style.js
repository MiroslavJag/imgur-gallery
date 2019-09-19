import styled from 'styled-components';

export const ListWrapper = styled.div`
  justify-content: center;
  text-align: center;
  max-width: 80rem;
  width: 100%;
  margin: 0 auto; 
  padding-top: 90px;
`

export const SpinnerWrapper = styled.div`
  justify-content: center;
  padding-top: 50px;
  display: flex;
  flex: 1;
  justify-content: center;
`
export const GalleryListWrapper = styled.div`
  max-width: 1400px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const GalleryList = styled.div`
  -webkit-column-count: 1;
  -webkit-column-gap: 10px;
  -webkit-column-fill: auto;
  -moz-column-count: 1;
  -moz-column-gap: 10px;
  -moz-column-fill: auto;
  column-count: 1;
  column-gap: 10px;
  column-fill: auto;
  align-content: center;
  margin: 10px;

  @media only screen and (min-width: 768px) and (max-width: 1399px){
    column-count: 3;
    margin: 5px;
  }

  @media only screen and (min-width: 1400px) {
    column-count: 4;
    margin: 5px;
  }
`

export const FilterSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 20px 0 30px;
`
export const CategorySection = styled.div`
  display: flex;
  justify-content: center;
`
export const DependencySection = styled.div`
  justify-content: center;
`
export const Sections = styled.div`
  display: flex;
  flex-direction: row;
`
export const SectionButton = styled.div`
    width: 100px;
    border-radius: 7px;
    height: 40px;
    font-size: larger;
    font-weight: bold;
    color: white;
    line-height: 40px;
    margin: 0 10px;
    background-color: grey;
    cursor: pointer;

    :after {
      background:olive;
    }
`
export const ShowDependency = styled.div`
    margin-top: 20px;
    border-top: 1px solid grey;
    padding-top: 20px;
    display: flex;
    justify-content: center;
`

//-- switch viral toggle --//
export const CheckBoxWrapper = styled.div`
  position: relative;

  span {
    vertical-align: super;
    font-size: large;
    margin-left: 7px;
  }
`
export const CheckBoxLabel = styled.label`
  position: absolute;
  margin-left: -42px;
  width: 42px;
  height: 26px;
  border-radius: 15px;
  background: #bebebe;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`
export const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;
  &:checked + ${CheckBoxLabel} {
    background: #0c6eef;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 21px;
      transition: 0.2s;
    }
  }
`
//-- select sort -- //
export const Select = styled.select`
  width: 150px;
  height: 35px;
  background: white;
  color: gray;
  padding-left: 5px;
  font-size: 14px;
  border: none;
  margin-left: 10px;
  border: solid 1px lightgrey;
  font-size: large;
  text-transform: capitalize;
  cursor: pointer;

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
    cursor: pointer;
  }
`;

//-- Buttons Section -- //
export const SectionLabel = styled.label`
  margin: 0 15px;
`

export const SectionInput = styled.input`
  height: 25px;
  width: 25px;
  
  &:checked  {
    background: #0c6eef;
    border: 1px solid #db7290;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 12px;
      height: 12px;
      margin: 5px;
      box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.1);
      background: #0c6eef;
    }
  }
`

export const SectionText = styled.span`
  font-size: larger;
  font-weight: bold;
  vertical-align: super;
  margin-left: 5px;
  text-transform: capitalize;
`
  
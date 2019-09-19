import React,{Component} from 'react'
import { connect } from 'react-redux';
import * as actions from '../../store/actions';
import {SpinnerWrapper, CheckBoxWrapper, CheckBoxLabel, CheckBox, Select, Sections, FilterSection, 
  GalleryList, GalleryListWrapper, ListWrapper, SectionLabel, SectionInput, SectionText, CategorySection, 
  DependencySection, ShowDependency} from './style'
import { MetroSpinner } from "react-spinners-kit";
import {GALLERY_TYPE, GALLERY_SORT} from '../consts'
import {sortValues, windowValues, sectionValues} from '../mappings'
import ImageGalleryItem from '../ImageGalleryItem'
import styled from 'styled-components';

export const SectionButton = styled.button`
    width: 100px;
    border-radius: 7px;
    height: 40px;
    font-size: larger;
    font-weight: bold;
    color: white;
    line-height: 40px;
    margin: 0 10px;
    background-color: ${props => props.background};
    cursor: pointer;
`

export class ImageGalleryList extends Component {
  state = {
    galleryType: GALLERY_TYPE.HOT,
    gallerySort: GALLERY_SORT.VIRAL,
    viral: true,
    sectionValue: GALLERY_TYPE.HOT
  }
  componentDidMount() {
    //Get initial data from Redux
    this.props.getGallery(this.state.galleryType, this.state.gallerySort, null, null);
  }

  //Get gallery data based on gallery type and showViral atribute
  getGalleryData = (galleryType, viral, changeEvent) => {
    this.setState({galleryType: galleryType, viral: viral, sectionValue: changeEvent ? changeEvent.target.value : this.state.sectionValue})
    const showViral = galleryType === GALLERY_TYPE.USER ? viral : null
    this.props.getGallery(galleryType, this.checkSortData(galleryType), null, showViral )
  }

  //Get gallery data based on sort value
  sortData = (value) => {
    this.setState({gallerySort: value})
    const showViral = this.state.galleryType === GALLERY_TYPE.USER ? this.state.viral : null
    this.props.getGallery(this.state.galleryType, value, null, showViral)
  }

  //Check if sort value is 'rising' and not selected 'User' section, set sort value to 'viral' (default)
  checkSortData = (galleryType) => {
    if (this.state.gallerySort === GALLERY_SORT.RISING && galleryType !== GALLERY_TYPE.USER) {
      this.setState({gallerySort: GALLERY_SORT.VIRAL})
      return GALLERY_SORT.VIRAL
    } else {
      return this.state.gallerySort
    }
  }

  //Get gallery data based on window property
  sortDataWindow = (window) => {
    this.props.getGallery(this.state.galleryType, this.state.gallerySort, window, null)
  }

  render() {
    //Show all items inside the response data 
    const content = this.props.initData ?
     this.props.initData.map(item=> {
       return <ImageGalleryItem gallery={item} key={item.id}/>
     })
     :
    //Show Spinner when data is rendering
    <SpinnerWrapper>
      <MetroSpinner
        size={50}
        color="#0c6eef"
        loading={true}/>
    </SpinnerWrapper>
    
    
    //Map values for section, sort and window category from mappings.js
    const mapValues = (values) => values.map((item, index) => {
      if (values === sectionValues) {
        return (
          <SectionLabel key={index}>
            <SectionInput type={'radio'} value={item.value} 
              checked={this.state.sectionValue === item.value} 
              onChange={(event) => this.getGalleryData(item.value, this.state.viral, event)} />
            <SectionText>{item.value}</SectionText>
          </SectionLabel>
        )
      } else {
        return item.value === GALLERY_SORT.RISING && this.state.galleryType !== GALLERY_TYPE.USER 
          ? <option disabled value={item.value} key={index}>{item.value}</option> 
          : <option value={item.value} key={index}>{item.value}</option> 
      }
    }) 

    //Show element 'Select Window' if 'Top' section is selected
    const selectWindow = this.state.galleryType === GALLERY_TYPE.TOP ?
      <ShowDependency>
        <Select onChange={e => this.sortDataWindow(e.target.value)}>
          {mapValues(windowValues)}
        </Select>
      </ShowDependency> :
      null
 

    //Show viral toggle element if 'User' section is selected
    const showViral = this.state.galleryType === GALLERY_TYPE.USER ?
    <ShowDependency>
      <CheckBoxWrapper>
        <CheckBox id="checkbox" type="checkbox" 
          onChange={() => this.getGalleryData(this.state.galleryType, !this.state.viral)}
          defaultChecked={this.state.viral} />
        <CheckBoxLabel htmlFor="checkbox" />
        <span>Show viral images</span>
      </CheckBoxWrapper>
    </ShowDependency> :
      null  

    return (
      <ListWrapper>
        <FilterSection>
          <CategorySection>
            <Select onChange={e => this.sortData(e.target.value)} value={this.state.gallerySort}>
                {mapValues(sortValues)}
            </Select>
            <Sections>
              {mapValues(sectionValues)}
            </Sections>
          </CategorySection>
          <DependencySection>
            {selectWindow}
            {showViral}
          </DependencySection>
        </FilterSection>
        <GalleryListWrapper>
          <GalleryList>
            {content}
          </GalleryList>
        </GalleryListWrapper>
      </ListWrapper>
    )
  }
}

//Get state from the redux
const mapStateToProps = state => {
    return {
        initData: state.galleryData
    };
}

//Dispatch the action for initial data
const mapDispatchToProps = dispatch => {
    return {
        getGallery: (galleryType, gallerySort, galleryWindow, viral) => dispatch(actions.getGalleryData(galleryType, gallerySort, galleryWindow, viral))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageGalleryList);

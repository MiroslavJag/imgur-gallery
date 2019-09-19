import React from 'react'
import {DetailsWrapper, InfoSection, Title, Info, Icon, ScoreWrapper, VoteWrapper, Image} from './style'
import star from '../../assets/icons/star.svg'
import upArrow from '../../assets/icons/up-arrow.svg'
import downArrow from '../../assets/icons/down-arrow.svg'

type Props = {
 gallery: Object
}

export const ImageGalleryItem = (props: Props) => {
 const {images, title, description, upvotes, downvotes, score} = props.location.state.params
 
 const image = images ? images.map((item, index) => {
  return item.type === 'video/mp4' ? (
   <div key={index}>
      <video controls>
       <source src={item.mp4} type={item.type} />
       Your browser does not support the video tag.
      </video>
   </div>
  ) : <Image src={item.link} alt={'someImage'} key={index}/>
 }) :null


 return (
  <DetailsWrapper>
  <InfoSection>
   <Title>{title}</Title>
   <Info>
    <ScoreWrapper>
     <Icon src={star}/>
     <p>{score}</p>
    </ScoreWrapper>
    <VoteWrapper>
     <Icon src={upArrow}/>
     <p>{upvotes}</p>
     <Icon src={downArrow}/>
     <p>{downvotes}</p>
    </VoteWrapper>
   </Info>
  </InfoSection>
   {image}
   <h3>{description}</h3>
  </DetailsWrapper>
 )
}

export default ImageGalleryItem
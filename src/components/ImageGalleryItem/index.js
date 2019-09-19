import React from 'react'
import { Link } from 'react-router-dom'
import {ItemWrapper, ItemVideo} from './style'
import styled from 'styled-components';

export const ItemImage = styled.div`
  background: ${props => `url(${props.background})`};
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  height: 300px;
  width: 100%;
  border: 3px solid white;

  @media only screen and (min-width: 450px){
   height: 500px;
  }

  @media only screen and (min-width: 768px){
   height: 300px;
  }
 `

type Props = {
 gallery: Object
}

export const ImageGalleryItem = (props: Props) => {
 const firstItem = props.gallery.images ? props.gallery.images[0] : null
 const content = firstItem ? 
   firstItem.type === 'video/mp4' ? (
    <>
     <ItemVideo controls>
      <source src={firstItem.mp4} type={firstItem.type} />
      Your browser does not support the video tag.
     </ItemVideo>
    </>
   ) : <ItemImage background={firstItem.link}/>
  : null

  const params = {
   images: props.gallery.images,
   title: props.gallery.title,
   description: props.gallery.description,
   upvotes: props.gallery.ups,
   downvotes: props.gallery.downs,
   score: props.gallery.score
  }

 return (
  <ItemWrapper>
   <Link to={{ pathname: `/gallery/${props.gallery.id}`, state:{params} }}>
    {content}
   </Link>
  </ItemWrapper>
 )
}

export default ImageGalleryItem
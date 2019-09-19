import * as actionTypes from './actionTypes';

export const getGalleryData = (galleryType, gallerySort, galleryWindow, viral) => {
  return {
      type: actionTypes.GET_GALLERY_DATA,
      galleryType: galleryType,
      gallerySort: gallerySort,
      galleryWindow: galleryWindow,
      viral: viral
  };
}

export const setGalleryData = (value) => {
  return {
      type: actionTypes.SET_GALLERY_DATA,
      galleryData: value
  };
};

export const setErorr = ( ) => {
  return {
      type: actionTypes.SET_ERROR
  };
};



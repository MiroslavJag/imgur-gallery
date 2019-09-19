import * as actionTypes from '../actions/actionTypes';

export const initialState = {
  galleryData: null,
  error: false
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
      case actionTypes.SET_GALLERY_DATA:
        return {
          ...state,
          galleryData: action.galleryData,
          error: false
        }
      default:
        return state;
    }
}

export default reducer;

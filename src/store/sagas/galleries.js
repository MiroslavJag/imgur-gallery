import { put } from "redux-saga/effects";
import axios from 'axios';
import * as actions from '../actions';
import {API_URL, CLIENT_ID} from '../../components/consts'

export function* initGallerySaga(action) {
  const window = action.galleryWindow ? `/${action.galleryWindow}` : ''
  const showViral = action.viral !==null ? `?showViral=${action.viral}` : ''
  try {
    const response = yield axios({
      method: 'get',
      url: `${API_URL}${action.galleryType}/${action.gallerySort}${window}.json${showViral}`,
      headers: { 'Authorization': 'Client-ID ' + CLIENT_ID }
      })
    yield put(actions.setGalleryData(response.data.data));
  } catch (error) {
    yield put(actions.setErorr());
  }
}


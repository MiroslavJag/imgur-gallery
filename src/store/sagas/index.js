import { takeEvery } from "redux-saga/effects";
import * as actionTypes from "../actions/actionTypes";
import { initGallerySaga } from "./galleries";

export function* watchGallery() {
  yield takeEvery(actionTypes.GET_GALLERY_DATA, initGallerySaga);
}

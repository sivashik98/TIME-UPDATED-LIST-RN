import { all } from 'redux-saga/effects';

import news from './sagas/news';
import profile from './sagas/profile';
import post from './sagas/post';

export default function* rootSaga() {
  yield all([news(), profile(), post()]);
}

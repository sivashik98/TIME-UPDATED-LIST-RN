import { all, call, delay, put, takeLatest } from 'redux-saga/effects';
import { Alert } from 'react-native';

import { FETCH_POST, REFRESH_DATA } from '../../constants/post';
import {
  fetchPostFail,
  fetchPostSuccess,
  refreshDataFail,
  refreshDataSuccess,
} from '../../actions/post';

import { fetchHelper } from '../../../helpers/fetch';
import { IPost } from '../../../models/post';
import { config } from '../../../../config';

function* fetchPostWorker({ payload }) {
  const { id } = payload;
  const path = `/posts/${id}`;

  try {
    const post = yield call(fetchHelper<IPost>(path));

    yield delay(config.queryDelay);

    yield put(fetchPostSuccess(post));
  } catch (e) {
    yield put(fetchPostFail());

    Alert.alert('Error fetching post');
  }
}

function* refreshDataWorker({ payload }) {
  const { id } = payload;
  const postPath = `/posts/${id}`;

  try {
    const post = yield call(fetchHelper<IPost>(postPath));

    yield delay(config.queryDelay);

    yield put(refreshDataSuccess({ post }));
  } catch (e) {
    yield put(refreshDataFail());

    Alert.alert('Error refreshing data');
  }
}

export default function* restaurantSaga() {
  yield all([
    takeLatest(FETCH_POST, fetchPostWorker),
    takeLatest(REFRESH_DATA, refreshDataWorker),
  ]);
}

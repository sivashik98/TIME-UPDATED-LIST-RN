import { all, call, delay, put, takeLatest } from 'redux-saga/effects';
import { Alert } from 'react-native';

import { FETCH_NEWS, REFRESH_DATA } from '../../constants/news';
import {
  fetchNewsFail,
  fetchNewsSuccess,
  refreshDataFail,
  refreshDataSuccess,
} from '../../actions/news';
import { fetchHelper } from '../../../helpers/fetch';
import { IPost } from '../../../models/post';
import { config } from '../../../../config';

function* fetchNewsWorker({}) {
  const path = '/posts?_start=0&_limit=25';

  console.log('fetch news');

  try {
    const news = yield call(fetchHelper<IPost[]>(path));

    yield delay(config.queryDelay);

    yield put(fetchNewsSuccess(news));
  } catch (e) {
    yield put(fetchNewsFail());

    Alert.alert('Error fetching news');
  }
}

function* refreshDataWorker({}) {
  const newsPath = '/posts?_start=0&_limit=25';

  console.log('update news');

  try {
    const news = yield call(fetchHelper<IPost[]>(newsPath));

    yield delay(config.queryDelay);

    yield put(refreshDataSuccess({ news }));
  } catch (e) {
    yield put(refreshDataFail());

    Alert.alert('Error refreshing data');
  }
}

export default function* newsSaga() {
  yield all([
    takeLatest(FETCH_NEWS, fetchNewsWorker),
    takeLatest(REFRESH_DATA, refreshDataWorker),
  ]);
}

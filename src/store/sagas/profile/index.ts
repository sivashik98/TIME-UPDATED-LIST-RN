import { all, call, delay, put, takeLatest } from 'redux-saga/effects';
import { Alert } from 'react-native';

import { fetchHelper } from '../../../helpers/fetch';
import { FETCH_USER, REFRESH_DATA } from '../../constants/profile';
import {
  fetchUserFail,
  fetchUserSuccess,
  refreshDataFail,
  refreshDataSuccess,
} from '../../actions/profile';
import { IUser } from '../../../models/user';
import { config } from '../../../../config';

function* fetchUserWorker({}) {
  const path = '/users/1';

  try {
    const user = yield call(fetchHelper<IUser>(path));

    yield delay(config.queryDelay);

    yield put(fetchUserSuccess(user));
  } catch (e) {
    yield put(fetchUserFail());

    Alert.alert('Error fetching user');
  }
}

function* refreshDataWorker({}) {
  const userPath = '/users/1';

  try {
    const user = yield call(fetchHelper<IUser>(userPath));

    yield delay(config.queryDelay);

    yield put(refreshDataSuccess({ user }));
  } catch (e) {
    yield put(refreshDataFail());

    Alert.alert('Error refreshing data');
  }
}

export default function* profileSaga() {
  yield all([
    takeLatest(FETCH_USER, fetchUserWorker),
    takeLatest(REFRESH_DATA, refreshDataWorker),
  ]);
}

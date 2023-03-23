import {
  FETCH_USER,
  FETCH_USER_FAIL,
  FETCH_USER_SUCCESS,
  REFRESH_DATA,
  REFRESH_DATA_FAIL,
  REFRESH_DATA_SUCCESS,
} from '../../constants/profile';
import { IUser } from '../../../models/user';

export const fetchUser = () => ({
  type: FETCH_USER,
  payload: {},
});

export const fetchUserSuccess = (user: IUser) => ({
  type: FETCH_USER_SUCCESS,
  payload: { user },
});

export const fetchUserFail = () => ({
  type: FETCH_USER_FAIL,
  payload: {},
});

export const refreshData = () => ({
  type: REFRESH_DATA,
  payload: {},
});

export const refreshDataSuccess = (data: {}) => ({
  type: REFRESH_DATA_SUCCESS,
  payload: { data },
});

export const refreshDataFail = () => ({
  type: REFRESH_DATA_FAIL,
  payload: {},
});

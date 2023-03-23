import {
  FETCH_USER,
  FETCH_USER_FAIL,
  FETCH_USER_SUCCESS,
  REFRESH_DATA,
  REFRESH_DATA_FAIL,
  REFRESH_DATA_SUCCESS,
} from '../../constants/profile';
import { IUser } from '../../../models/user';

interface IProfileState {
  isFetchingUser: boolean;
  isRefreshing: boolean;
  user: IUser | {};
}

const initialState: IProfileState = {
  isFetchingUser: true,
  isRefreshing: false,
  user: {},
};

const profileReducer = (state = initialState, action) => {
  if (action.type === FETCH_USER) {
    return {
      ...state,
      isFetchingUser: true,
    };
  }

  if (action.type === FETCH_USER_SUCCESS) {
    return {
      ...state,
      isFetchingUser: false,
      user: action.payload.user,
    };
  }

  if (action.type === FETCH_USER_FAIL) {
    return { ...state, isFetchingUser: false };
  }

  if (action.type === REFRESH_DATA) {
    return {
      ...state,
      isRefreshing: true,
    };
  }

  if (action.type === REFRESH_DATA_SUCCESS) {
    return {
      ...state,
      ...action.payload.data,
      isRefreshing: false,
    };
  }

  if (action.type === REFRESH_DATA_FAIL) {
    return { ...state, isRefreshing: false };
  }

  return state;
};

export default profileReducer;

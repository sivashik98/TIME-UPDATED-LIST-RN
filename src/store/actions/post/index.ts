import {
  FETCH_POST,
  FETCH_POST_FAIL,
  FETCH_POST_SUCCESS,
  REFRESH_DATA,
  REFRESH_DATA_FAIL,
  REFRESH_DATA_SUCCESS,
} from '../../constants/post';
import { IPost } from '../../../models/post';

export const fetchPost = (id: number) => ({
  type: FETCH_POST,
  payload: { id },
});

export const fetchPostSuccess = (post: IPost) => ({
  type: FETCH_POST_SUCCESS,
  payload: { post },
});

export const fetchPostFail = () => ({
  type: FETCH_POST_FAIL,
  payload: {},
});

export const refreshData = (id: number) => ({
  type: REFRESH_DATA,
  payload: { id },
});

export const refreshDataSuccess = (data: {}) => ({
  type: REFRESH_DATA_SUCCESS,
  payload: { data },
});

export const refreshDataFail = () => ({
  type: REFRESH_DATA_FAIL,
  payload: {},
});

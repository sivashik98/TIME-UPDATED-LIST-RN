import {
  FETCH_NEWS,
  FETCH_NEWS_FAIL,
  FETCH_NEWS_SUCCESS,
  REFRESH_DATA,
  REFRESH_DATA_FAIL,
  REFRESH_DATA_SUCCESS,
} from '../../constants/news';
import { IPost } from '../../../models/post';

export const fetchNews = () => ({
  type: FETCH_NEWS,
  payload: {},
});

export const fetchNewsSuccess = (news: IPost[]) => ({
  type: FETCH_NEWS_SUCCESS,
  payload: { news },
});

export const fetchNewsFail = () => ({
  type: FETCH_NEWS_FAIL,
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

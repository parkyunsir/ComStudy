import client from './client';

export const allRestaurant = () =>
  client.get(`/restaurant/list`);

export const listRankStar = () =>
  client.get(`/restaurant/list/rank/star`);

export const listRankLike = () =>
  client.get(`/restaurant/list/rank/like`);

export const listRankReview = () =>
  client.get(`/restaurant/list/rank/review`);

export const sortRankType = ({sort, typeId}) =>
  client.get(`/restaurant/list/sort/${sort}?type_id=${typeId}`);

export const listType = () =>
  client.get('/rtype/all');
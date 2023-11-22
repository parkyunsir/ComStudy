import client from './client';

export const restaurantReviews = rstId =>
  client.get(`/restaurant/${rstId}/reviews`);

export const restaurantDetail = rstId =>
  client.get(`/restaurant/detail/${rstId}`);

export const rtype = typeId =>
  client.get(`/rtype/${typeId}`);

export const search = word =>
  client.get(`/restaurant/search/${word}`);

export const likeNum = rstId =>
  client.get(`/restaurant/likes/list/${rstId}`);
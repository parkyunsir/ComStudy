import client from './client';

export const myLikes = email =>
  client.get(`/student/likes/${email}`);

export const myReviews = email =>
  client.get(`/reviews/${email}`);

export const restaurantReviews = rstId =>
  client.get(`/restaurant/${rstId}/reviews`);

export const restaurantDetail = rstId =>
  client.get(`/restaurant/detail/${rstId}`);
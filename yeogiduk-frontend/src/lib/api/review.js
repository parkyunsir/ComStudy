import client from './client';

export const postReview = ({viewId, rstId, email, content, date, star, files}) =>
  client.post(`/restaurant/${rstId}/reviews`, {viewId, rstId, email, content, date, star, files});

export const getReviewImages = ({viewId}) =>
  client.get(`/image/show/${viewId}`);
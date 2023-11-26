import client from './client';

export const postReview = ({rstId, email, content, star, images}) =>
  client.post(`/restaurant/${rstId}/reviews`, {email, content, star, images});

export const getReviewImages = ({viewId}) =>
  client.get(`/image/show/${viewId}`);
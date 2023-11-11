import instance from './instance';

export const addPlogging = async body => {
  return await instance.post('/members/ploggings', body);
};

export const getSinglePloggingInfo = async ploggingId => {
  const response = await instance.get(`/members/ploggings/${ploggindId}`);
  return response.data;
};

export const getTrashcanList = async () => {
  const response = await instance.get('/trashcan');
  return response.data;
};

export const addNewTrashcan = async body => {
  return await instance.post('/trashcan', body);
};

export const deleteTrashcan = async trashcanId => {
  return await instance.delete('/trashcan', { trashcanId });
};

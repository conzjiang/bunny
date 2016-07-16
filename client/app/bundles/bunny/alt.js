import Alt from 'alt';

const deserialize = (data) => (
  typeof data === 'string' ? JSON.parse(data) : data
);

export default new Alt({ deserialize });

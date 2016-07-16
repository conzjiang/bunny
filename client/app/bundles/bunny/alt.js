import Alt from 'alt';

const onDeserialize = (data) => (
  typeof data === 'string' ? JSON.parse(data) : data
);

export default new Alt({ onDeserialize });

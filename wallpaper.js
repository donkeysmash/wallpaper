import request from 'request';

// TODO grab them from a config
const API_KEY = process.env.PIXABAY_API_KEY || '5394529-2a907f9e189a17b2c4ac0e2ab';
const API_URL = process.env.API_URL || 'https://pixabay.com/api';
const API_TIMEOUT = 500;

export function fetchSrcUrl() {
  let reqOptions = {
    uri: API_URL,
    qs: {
      key: API_KEY,
      q: 'yellow'
    },
    timeout: API_TIMEOUT,
    json: true
  };
  return new Promise((resolve, reject) =>{
    request.get(reqOptions, (err, res) => {
      if (err) return reject(err);
      if (!res.body) return reject({err: 'cannot find body'});
      resolve(getRandomItem(res.body.hits));
    });
  });
}

function getRandomItem(items) {
  let min = 0;
  let max = items.length;
  let i = Math.floor(Math.random() * (max - min)) + min;
  return items[i];
}

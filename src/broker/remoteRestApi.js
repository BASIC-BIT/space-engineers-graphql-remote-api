const config = require('config');
const hmacsha1 = require('hmacsha1');
const uuidv4 = require('uuid/v4');
const fetch = require('node-fetch');
const base64 = require('base-64');

const secretKey = config.get('remoteApiSecretKey');
const host = config.get('remoteApiHost');
const port = config.get('remoteApiPort');

function getUrl(path) {
  return `http://${host}:${port}/vrageremote/${path}`;
}

async function query(path, {
  method = 'GET',
  headers = {},
  text = true,
} = {}) {
  const nOnce = uuidv4();
  const date = new Date().toISOString();
  const value = `/vrageremote/${path}\r\n${nOnce}\r\n${date}\r\n`;

  const hash = hmacsha1(base64.decode(secretKey), value);

  const authorizationHeader = `${nOnce}:${hash}`;

  const response = await fetch(getUrl(path), {
    method,
    headers: {
      ...headers,
      'Authorization': authorizationHeader,
      'Date': date,
      'Content-Type': text ? 'text/plain' : 'application/json',
      'Accept': text ? 'text/plain' : 'application/json',
    },
  });

  if (text) {
    return await response.text();
  } else {
    const responseValue = await response.json();
    return {
      ...responseValue.data,
      meta: responseValue.meta,
    };
  }
}

export {
  query,
};

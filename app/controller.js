'use strict';

exports.get = function(params) {
  // Return new Promise
  return new Promise((resolve, reject) => {

    if(params.hello)
      resolve(({hello: params.hello}));
    else {
      reject(new Error('No parameter definded'));
    }

  });
};
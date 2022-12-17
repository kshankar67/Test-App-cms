// import fetch from 'node-fetch';
const fetch = require('node-fetch')

exports.handler = async (event, context) => {
	var redirectUrl=decodeURIComponent(event.queryStringParameters.url.replace('.html','').replace('/net/',''));
if (event.queryStringParameters.fbclid) {
    return {
      statusCode: 301,
      headers: {
        'cache-control': 'public, max-age=0, must-revalidate',
        location: redirectUrl
      }
    }
  } else if(event.headers.referer && event.headers.referer.includes('facebook')){
	   return {
      statusCode: 301,
      headers: {
        'cache-control': 'public, max-age=0, must-revalidate',
        location: redirectUrl
      }
    }
  } else {
    var url = event.queryStringParameters.url || 'https://zeptha.netlify.app/first-animal-you-see.html';
  return new Promise((resolve, reject) => {
    fetch(url)
    .then(res => {
      if (res.ok) { // res.status >= 200 && res.status < 300
        return res.text();
      } else {
        resolve({ statusCode: res.status || 500, body: res.statusText })
      };
    })
    .then(data =>{
      const response = {
        statusCode: 200,
        //headers: { 'content-type': 'application/json' },
        body: data
      }
      resolve(response);
    })
    .catch(err => {
      console.log(err)
      resolve({ statusCode: err.statusCode || 500, body: err.message })
    })
  })
  }
	
}
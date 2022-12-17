// import fetch from 'node-fetch';
const fetch = require('node-fetch')

exports.handler = async (event, context) => {
	
	var redirectUrl = event.rawQuery;
	
	if(redirectUrl && redirectUrl.includes('.html')){
		redirectUrl = redirectUrl.replace('.html','')
	}
	if(redirectUrl && redirectUrl.includes('/net/')){
		redirectUrl=redirectUrl.replace('/net/','');
	}
	if(redirectUrl && redirectUrl.includes('slug=')){
		redirectUrl=redirectUrl.replace('slug=','');
	}
	redirectUrl = decodeURIComponent(redirectUrl);
	if(redirectUrl && !redirectUrl.includes('https://zeptha.com/')){
		redirectUrl= 'https://zeptha.com/' + redirectUrl;
	}
	
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
	var slug = event.queryStringParameters.slug;
	slug = slug.split('?')[0];
	slug = slug.replace('/','')
    var url = 'https://zeptha.com/net/' + slug + '.html';
	
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
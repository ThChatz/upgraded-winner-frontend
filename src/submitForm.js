import {request, get} from 'axios';

const submitHandler = (method, url, opts={}) =>
      (event) => {
	  event.preventDefault();
	  const formData = new FormData(event.currentTarget);
	  const entries = {};
	  for (let [k, v] of formData.entries()) {
	      entries[k] = v;
	  }
	  console.log(entries)
	  return requestWithCsrf(method, url, opts)(entries)
      }

const submitHandlerMultipart = (method, url) =>
      (event) => {
	  event.preventDefault();
	  const formData = new FormData(event.currentTarget);
	  const entries = {};
	  for (let [k, v] of formData.entries()) {
	      entries[k] = v;
	  }
	  
	  return get("/anti-forgery-token")
	      .then((resp) => resp.data.token)
	      .then((tok) => request({method: method,
				     url: url,
				     data: formData,
				     withCredentials: true,
				     headers: {"X-CSRF-TOKEN": tok}}))
	      .catch((x) => console.log(x));
      }


const requestWithCsrf = (method, url, opts={}) =>
      (body) =>
      get("/anti-forgery-token")
      .then((resp) => resp.data.token)
      .then((tok) => ({ method: method,
		       url: url,
		       data: {"__anti-forgery-token": tok, ...body},
		       withCredentials: true, ...opts}))
      .then((x) => request(x))
      .catch((x) => {console.log(x); return x});
      

export {submitHandler, submitHandlerMultipart, requestWithCsrf}; 

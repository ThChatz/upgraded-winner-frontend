import {request, get} from 'axios';

const submitHandler = (method, url) =>
      (event) => {
	  event.preventDefault();
	  const formData = new FormData(event.currentTarget);
	  const entries = {};
	  for (let [k, v] of formData.entries()) {
	      entries[k] = v;
	  }
	  
	  requestWithCsrf(method, url)(entries);
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


const requestWithCsrf = (method, url) =>
      (body) =>
      get("/anti-forgery-token")
      .then((resp) => resp.data.token)
      .then((tok) => ({ method: method,
		       url: url,
		       data: {"__anti-forgery-token": tok, ...body},
		       withCredentials: true}))
      .then((x) => request(x))
      .catch((x) => console.log(x));
      

export {submitHandler, submitHandlerMultipart, requestWithCsrf}; 

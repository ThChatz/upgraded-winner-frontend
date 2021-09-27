import {request, get} from 'axios';

const submitHandler = (method, url, opts={}) =>
      (event) => {
	  event.preventDefault();
	  const formData = new FormData(event.currentTarget);
	  const entries = {};
	  let typed_re = /(bool|int)\(([a-zA-Z\-_]+)\)/;
	  let untyped_re = /[a-zA-Z\-_]+/;
	  for (let [k, v] of formData.entries()) {
	      var typed_match = k.match(typed_re);
	      var untyped_match = k.match(untyped_re);
	      
	      if(typed_match != null) {
		  if(typed_match[1] === "int") {
		      entries[typed_match[2]] = parseInt(v);
		  } else if(typed_match[1] === "bool") {
		      entries[typed_match[2]] = !(v === "false");
		  }
	      } else if(untyped_match != null) {
		  entries[k] = v;
	      }
	  }
	  console.log(entries)
	  return requestWithCsrf(method, url, opts)(entries)
      }

const submitHandlerMultipart = (method, url) =>
      (event) => {
	  console.log(process.env.REACT_APP_API_ROOT);
	  event.preventDefault();
	  const formData = new FormData(event.currentTarget);
	  const entries = {};
	  for (let [k, v] of formData.entries()) {
	      entries[k] = v;
	  }
	  
	  return get(process.env.REACT_APP_API_ROOT+"/anti-forgery-token")
	      .then((resp) => resp.data.token)
	      .then((tok) => request({method: method,
				     url: process.env.REACT_APP_API_ROOT+url,
				     data: formData,
				     withCredentials: true,
				     headers: {"X-CSRF-TOKEN": tok}}))
	      .catch((x) => console.log(x));
      }


const requestWithCsrf = (method, url, opts={}) =>
      (body) =>
      get(proces.env.REACT_APP_API_ROOT+"/anti-forgery-token")
      .then((resp) => resp.data.token)
      .then((tok) => ({ method: method,
		       url: process.env.REACT_APP_API_ROOT+url,
		       data: {"__anti-forgery-token": tok, ...body},
		       withCredentials: true, ...opts}))
      .then((x) => request(x))
	  
      

export {submitHandler, submitHandlerMultipart, requestWithCsrf}; 

export default {
  onSuccess: function (request) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return request;
  },
  onError: function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
};

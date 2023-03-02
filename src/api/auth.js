function getSessionState({ status }) {
  if (status !== 200) {
  }
  switch (status) {
    case 200:
      console.log("success");
      // break;
      break;
    case 401:
      console.log("auth request");

      break;
    default:
      break;
  }
}
let onRequest = function (config) {
  // Do something before request is sent
  console.log(config);
  // getSessionState(config);

  return config;
};

// api
// .post("/auth", { data: auth })
// .then(onAuth)
// .catch((e) => console.log(e))
// .finally((data) => {
//   if (data) {
//     console.log("finnaly:", data.access_token);
//     process.env.access_token = data.access_token;
//     localStorage.setItem("access_token", data);
//   } else {
//   }
// });

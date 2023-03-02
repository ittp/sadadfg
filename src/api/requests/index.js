// let local_token = localStorage.getItem("access_token");

// if (access_token) {
//   console.log("session active");
//   console.log(access_token);
// } else {
// }

// api.interceptors.request.use(
//   function (config) {
//     // Do something before request is sent
//     console.log(config);
//     getSessionState(config);

//     return config;

//     function getSessionState({ status }) {
//       if (status !== 200) {

//       }
//         switch (status) {
//           case 200:
//             console.log("success");
//             // break;
//             break;
//           case 401:
//             console.log("auth request");

//             break;
//           default:
//             break;
//         }
//     }
//   },
//   function (error) {
//     // Do something with request error
//     console.log("error: ", error);
//     return Promise.reject(error);
//   }
// );

// // Add a response interceptor
// api.interceptors.response.use(

// );

// if (!access_token) {
//   console.log("Access token not found");
//   if (process.env.secret && process.env.login) {
//     console.log("Auth secrets found");
//     authRequest();
//   } else {
//     console.log("Ero");
//   }

//   // Authorization: "Bearer " + process.env.TOKEN
// } else {
//   console.log("access token fount");
// }

// function authRequest() {
//   let auth = { login: process.env.login, security_token: process.env.secret };

//   const onAuth = (response) => {
//     let { data, status, headers } = response;
//     if (status === 200) {
//     } else {
//       console.log(status, data, headers);
//     }
//   };
//   api
//     .post("/auth", { data: auth })
//     .then(onAuth)
//     .catch((e) => console.log(e))
//     .finally((data) => {
//       if (data) {
//         console.log("finnaly:", data.access_token);
//         process.env.access_token = data.access_token;
//         localStorage.setItem("access_token", data);
//       } else {
//       }
//     });
// }

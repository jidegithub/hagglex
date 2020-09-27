export default function ({ store, app, redirect, route }) {
  const hasToken = Boolean(app.$apolloHelpers.getToken());
  // If token expired, redirect to login page
  if (!hasToken) {
    console.log("No apollo token, so not logged in, redirect to login page");
    return redirect("/");
  }
}
// If token expired, redirect to login page and there is user, redirected to login
// if (!hasToken || store.getters["currentUser"] === null) {
//   console.log("No apollo token, so not logged in, redirect to login page");
//   return redirect("/");
// }

// export default function ({ store, redirect }) {
//   //  If the user is not authenticated redirect to home page
//   if (!store.getters["Authenticated"]) return redirect("/");
// }


export default function ({ store, app, redirect, route }) {
  const hasToken = Boolean(app.$apolloHelpers.getToken());

  // If token expired, redirect to login page
  if (!hasToken) {
    console.log("No apollo token, so not logged in, redirect to login page");
    return redirect("/");
  }
}

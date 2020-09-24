export default function ({ store, redirect }) {
  // console.log(process.client, store.getters["isLoggedIn"])
  if (process.client && !store.getters["isLoggedIn"]) return redirect("/");
}
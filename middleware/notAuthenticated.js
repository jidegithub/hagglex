export default function ({ store, redirect }) {
  // If the user is authenticated redirect to home page
  console.log(store.getters["Authenticated"])
  if (store.getters["Authenticated"]) return redirect("/home");
}
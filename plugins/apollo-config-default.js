export default (context) => {
  return {
    httpEndpoint: process.env.BASE_ENDPOINT

    /*
     * For permanent authentication provide `getAuth` function.
     * The string returned will be used in all requests as authorization header
     */
    // getAuth: () => 'Bearer my-static-token',
  };
}
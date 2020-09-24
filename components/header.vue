<template>
  <div id="navigation-bar">
    <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Profile</a></li>
        <li><a @click="logout">Log Out</a></li>
        <a href="#" id="menu-icon"></a>
      </ul>
    </nav>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "header-nav",
  methods: {
    ...mapActions(["logout"]),
  },
};
</script>

<style lang="scss">
nav {
  ul {
    text-align: center;
    list-style-type: none;
    list-style-type: none;
    margin: 0;
    padding: 15px;
    li {
      display: inline;
      font-family: "Fira Sans", sans-serif;
      font-size: 17px;
      a {
        color: #f2f2f2;
        text-decoration: none;
        padding: 14px;
        &:hover {
          background-color: #111;
        }
      }
    }
  }
}
</style>
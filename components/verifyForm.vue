<template>
  <div class="grid align__item">
    <div class="register">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="site__logo"
        width="56"
        height="84"
        viewBox="77.7 214.9 274.7 412"
      >
        <defs>
          <linearGradient id="a" x1="0%" y1="0%" y2="0%">
            <stop offset="0%" stop-color="#8ceabb" />
            <stop offset="100%" stop-color="#378f7b" />
          </linearGradient>
        </defs>
        <path
          fill="url(#a)"
          d="M215 214.9c-83.6 123.5-137.3 200.8-137.3 275.9 0 75.2 61.4 136.1 137.3 136.1s137.3-60.9 137.3-136.1c0-75.1-53.7-152.4-137.3-275.9z"
        />
      </svg>
      <h4 v-if="notificationMsg">{{ notificationMsg }}</h4>
      <p>enter the code sent to your inbox</p>
      <h2 class="title">hagglex</h2>

      <form @submit.prevent="VerifyCode" action="" method="post" class="form">
        <div class="form__field">
          <input
            type="text"
            placeholder="enter code"
            name="email"
            v-model.number="code"
          />
        </div>

        <div class="form__field">
          <input type="submit" value="Submit" />
        </div>
      </form>
      <div>
        <p>
          Resent Verification Code?
          <a @click="resendVerificationCode" href="#">Resend</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "verifyform",
  data() {
    return {
      code: "",
      notificationMsg: "",
      loading: false,
      error: "",
      currentUser: "",
    };
  },
  computed: {
    ...mapGetters(["userData"]),
  },

  methods: {
    ...mapActions(["logout"]),
    VerifyCode() {
      this.$apollo
        .mutate({
          mutation: gql`
            mutation($data: VerifyUserInput) {
              verifyUser(data: $data) {
                user {
                  id
                  email
                  phonenumber
                  phoneNumberDetails {
                    phoneNumber
                    callingCode
                    flag
                  }
                  referralCode
                  username
                  kycStatus
                  active
                }
                token
              }
            }
          `,
          variables: {
            data: {
              code: this.code,
            },
          },
        })
        .then((response) => {
          this.notificationMsg = "verification successful";
          setTimeout(() => {
            this.logout();
          }, 900);
          console.log(response);
          // if (response.data.data.verifyUser.user.active) {

          // this.$router.push("/");
          // }
        })
        .catch((err) => {
          console.log(err.message);
        });
    },
    resendVerificationCode() {
      if (this.userData) {
        this.$apollo
          .query({
            query: gql`
              query($data: EmailInput) {
                resendVerificationCode(data: $data)
              }
            `,
            variables: {
              data: {
                email: this.userData.user.email,
              },
            },
          })
          .then((response) => {
            const { resendVerificationCode } = response.data;
            if (resendVerificationCode) {
              this.notificationMsg = "verification code sent";
              console.log(response);
            }
          })
          .catch((err) => {
            console.log(err.message);
          });
      }
    },
  },
};
</script>

<style lang="scss">
.align {
  align-items: center;
  display: flex;
  flex-direction: row;

  &__item {
    &--start {
      align-self: flex-start;
    }

    &--end {
      align-self: flex-end;
    }
  }
}

.site {
  &__main {
  }

  &__logo {
    margin-bottom: 2rem;
  }
}

$input-placeholder-color: #7e8ba3;

input {
  border: 0;
  font: inherit;

  &::placeholder {
    color: $input-placeholder-color;
  }
}

.form {
  &__field {
    margin-bottom: 1rem;
  }

  input {
    outline: 0;
    padding: 0.5rem 1rem;
  }
}

$grid-max-width: 25rem;
$grid-width: 100%;

.grid {
  margin: 0 auto;
  max-width: $grid-max-width;
  width: $grid-width;
}

h2 {
  font-size: 2.75rem;
  font-weight: 100;
  margin: 0 0 1rem;
  text-transform: uppercase;
}

svg {
  height: auto;
  max-width: 100%;
  vertical-align: middle;
}

$link-color: #7e8ba3;

a {
  color: $link-color;
}

.register {
  box-shadow: 0 0 250px #000;
  text-align: center;
  padding: 4rem 2rem;

  input {
    border: 1px solid #242c37;
    border-radius: 999px;
    background-color: transparent;
    text-align: center;

    &[type="submit"] {
      background-image: linear-gradient(160deg, #8ceabb 0%, #378f7b 100%);
      color: #fff;
      margin-bottom: 6rem;
      width: 100%;
    }
  }
}
</style>
<!-- 
	This is the sign in page, it uses the dashboard layout in: 
	"./layouts/Default.vue" .
 -->

<template >
  <div class="sign-in" style="height: 75vh">
    <a-row type="flex" :gutter="24" justify="space-around" align="center">
      <!-- Sign In Form Column -->
      <div style="width: 100vw; display: flex; justify-content: center">
        <a-col :span="24" :md="12" :lg="6" :xl="6" class="col-form mt-4">
          <a-card>
            <h3 class="mb-15 text-center text-primary mt-4">dshfood</h3>
            <h5 class="font-regular text-center text-muted">
              Entrez le numero de téléphone et le mot de passe pour se connecter
            </h5>

            <!-- Sign In Form -->
            <a-form
              id="components-form-demo-normal-login"
              :form="form"
              class="login-form mt-4"
              @submit="LoginSubmit"
              :hideRequiredMark="true"
            >
              <a-form-item class="mb-10" label="Numero de téléphone" :colon="false">
                <a-input
                  v-decorator="[
                    'telephone',
                    {
                      rules: [
                        { required: true, message: 'Please input your numero de téléphone!' },
                      ],
                    },
                  ]"
                  type="number"
                  placeholder="Numero de téléphone"
                />
              </a-form-item>
              <a-form-item class="mb-5" label="Mot de passe" :colon="false">
                <a-input
                  v-decorator="[
                    'password',
                    {
                      rules: [
                        {
                          required: true,
                          message: 'Please input your password!',
                        },
                      ],
                    },
                  ]"
                  type="password"
                  placeholder="Mot de passe"
                />
              </a-form-item>
              <a-form-item>
                <a-button
                  type="primary"
                  block
                  html-type="submit"
                  class="login-form-button"
                >
                  CONNEXION
                </a-button>
              </a-form-item>
            </a-form>
          </a-card>
          <!-- / Sign In Form -->
        </a-col>
      </div>

      <!-- Sign In Image Column -->
    </a-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
      callback: process.env.VUE_APP_API_BASE_URL,
    };
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: "normal_login" });
  },
  methods: {
    ShowAlert(type, title, description) {
      this.$notification[type]({
        message: title,
        description: description,
      });
    },
    // Handles input validation after submission.
    LoginSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        console.log(values)
        if (!err) {
          let headers = new Headers({'Access-Control-Allow-Origin': '*'});
          this.$http.post(`${this.callback}/auth/admin/login`, values, headers).then(
            (response) => {
              let session = localStorage;

              console.log(response);
              if (response.body.status == 200) {
                session.setItem(
                  "token",
                  `Bearer ${response.body.adminInfo.token}`
                );
                session.setItem("id", response.body.adminInfo.admin.id);
                session.setItem("username", `${response.body.adminInfo.admin.nom} ${response.body.adminInfo.admin.prenoms}`);
                session.setItem("code_secret", response.body.adminInfo.admin.codeSecret);
                session.setItem("infoAdmin", JSON.stringify(response.body.adminInfo.admin) );

                this.$router.push({ name: "Dashboard" });
              } else {
                this.ShowAlert("error", "Erreur", response.body.message);
              }
            },
            (response) => {
              if (response) {
                this.ShowAlert("error", "Erreur", "Erreur lors de la requete");
              }
            }
          );
        } else {
          this.ShowAlert(
            "warning",
            "Erreur",
            "Veillez remplir tous les champs"
          );
        }
      });
    },
  },
};
</script>

<style lang="scss">
body {
  background-color: #ffffff;
}
</style>
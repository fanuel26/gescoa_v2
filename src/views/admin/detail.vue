<!-- 
	This is the billing page, it uses the dashboard layout in: 
	"./layouts/Dashboard.vue" .
 -->

<template>
  <div>
    <a-row type="flex" :gutter="24">
      <!-- Billing Information Column -->
      <a-col :span="24" :md="16" class="mb-24">
        <a-card
          :bordered="false"
          class="header-solid h-full"
          :bodyStyle="{ paddingTop: 0, paddingBottom: '16px' }"
        >
          <div class="text-right" style="margin-bottom: 10px">
            <a-button @click="$router.go(-1)">Retour</a-button>
          </div>
          <template #title>
            <h6 class="font-semibold m-0">Information du administrateur</h6>
          </template>
          <a-row :gutter="[24, 24]">
            <a-col :span="24">
              <a-card :bordered="false" class="card-billing-info">
                <div class="col-info">
                  <a-descriptions :title="new Date(admin.createdAt).toLocaleString()" :column="2">
                    <a-descriptions-item label="Nom">
                      {{ admin.nom }}
                    </a-descriptions-item>
                    <a-descriptions-item label="Prenom">
                      {{ admin.prenoms }}
                    </a-descriptions-item>
                    <a-descriptions-item label="Adresse email">
                      {{ admin.email }}
                    </a-descriptions-item>
                    <a-descriptions-item label="Numero de téléphone">
                      {{ admin.telephone }}
                    </a-descriptions-item>
                    <a-descriptions-item label="Code secret">
                      {{ admin.codeSecret }}
                    </a-descriptions-item>
                  </a-descriptions>
                </div>
              </a-card>
            </a-col>

            <a-col :span="24">
              <a-card :bordered="false">
                <template #title>Definir les rôles</template>

                <a-form
                  id="components-form-demo-normal-login"
                  :form="form_role"
                  class="login-form"
                  @submit="roleSubmit"
                  :hideRequiredMark="true"
                >
                  <a-row :gutter="24">
                    
                    <a-col :span="8">
                      <div class="d-flex">
                        <a-switch
                          checked-children=""
                          un-checked-children=""
                          :checked="state.produit"
                          v-model="state.produit"
                        />
                        <p class="mx-2">Produit</p>
                      </div>
                    </a-col>
                    <a-col :span="8">
                      <div class="d-flex">
                        <a-switch
                          checked-children=""
                          un-checked-children=""
                          :checked="state.client"
                          v-model="state.client"
                        />
                        <p class="mx-2">Client</p>
                      </div>
                    </a-col>
                    <a-col :span="8">
                      <div class="d-flex">
                        <a-switch
                          checked-children=""
                          un-checked-children=""
                          :checked="state.collecteur"
                          v-model="state.collecteur"
                        />
                        <p class="mx-2">Agent collecteur</p>
                      </div>
                    </a-col>
                    <a-col :span="8">
                      <div class="d-flex">
                        <a-switch
                          checked-children=""
                          un-checked-children=""
                          :checked="state.livreur"
                          v-model="state.livreur"
                        />
                        <p class="mx-2">Agent livreur</p>
                      </div>
                    </a-col>
                    <a-col :span="8">
                      <div class="d-flex">
                        <a-switch
                          checked-children=""
                          un-checked-children=""
                          :checked="state.agence"
                          v-model="state.agence"
                        />
                        <p class="mx-2">Agences</p>
                      </div>
                    </a-col>

                    <a-col :span="8">
                      <div class="d-flex">
                        <a-switch
                          checked-children=""
                          un-checked-children=""
                          :checked="state.chef"
                          v-model="state.chef"
                        />
                        <p class="mx-2">Chef agence</p>
                      </div>
                    </a-col>
                    <a-col :span="8">
                      <div class="d-flex">
                        <a-switch
                          checked-children=""
                          un-checked-children=""
                          :checked="state.admin"
                          v-model="state.admin"
                        />
                        <p class="mx-2">Administration</p>
                      </div>
                    </a-col>
                    <a-col :span="8">
                      <div class="d-flex">
                        <a-switch
                          checked-children=""
                          un-checked-children=""
                          :checked="state.ville"
                          v-model="state.ville"
                        />
                        <p class="mx-2">Deploiement ville</p>
                      </div>
                    </a-col>
                    <a-col :span="8">
                      <div class="d-flex">
                        <a-switch
                          checked-children=""
                          un-checked-children=""
                          :checked="state.controlleur"
                          v-model="state.controlleur"
                        />
                        <p class="mx-2">Controlleur</p>
                      </div>
                    </a-col>
                    <a-col :span="8">
                      <div class="d-flex">
                        <a-switch
                          checked-children=""
                          un-checked-children=""
                          :checked="state.etat"
                          v-model="state.etat"
                        />
                        <p class="mx-2">Etat carnet</p>
                      </div>
                    </a-col>
                    <a-col :span="8">
                      <div class="d-flex">
                        <a-switch
                          checked-children=""
                          un-checked-children=""
                          :checked="state.parametre"
                          v-model="state.parametre"
                        />
                        <p class="mx-2">Parametre Carnet</p>
                      </div>
                    </a-col>
                  </a-row>

                  <a-col :span="24">
                    <div class="mb-4 text-right">
                      <a-button
                        type="primary"
                        html-type="submit"
                        class="login-form-button"
                      >
                        Valider
                      </a-button>
                    </div>
                  </a-col>
                </a-form>
              </a-card>
            </a-col>
          </a-row>
          <a-col :span="24" :md="24" class="mb-24">
            <!--<a-card
              :bordered="false"
              class="header-solid h-full"
              :bodyStyle="{ paddingTop: 0, paddingBottom: '16px' }"
            >
              <template #title>
                <h6 class="font-semibold m-0">Statistique du administrateur</h6>
              </template>
            </a-card>-->
          </a-col>
        </a-card>
      </a-col>
      <!-- Billing Information Column -->

      <!-- Your Transactions Column -->
      <a-col :span="8" :md="8" class="mb-24">
        <a-card
          :bordered="false"
          class="header-solid h-full"
          :bodyStyle="{ paddingTop: '16px', paddingBottom: '16px' }"
        >
          <template>
            <h6 class="font-semibold m-0">Generer code secret</h6>
          </template>
          <a-form
            id="components-form-demo-normal-login"
            :form="form_code_secret"
            class="login-form"
            @submit="codeSubmit"
            :hideRequiredMark="true"
          >
            <a-form-item class="" label="Code secret generer" :colon="false">
              <a-input
                v-decorator="[
                  'code_secret_new',
                  {
                    initialValue: code_secret,
                    rules: [
                      {
                        required: true,
                        message: 'Code secret generer incorrect!',
                      },
                    ],
                  },
                ]"
                disabled
                type="text"
                placeholder="Code secret"
              />
            </a-form-item>

            <a-form-item class="" label="Code secret" :colon="false">
              <a-input
                v-decorator="[
                  'code_secret',
                  {
                    rules: [
                      {
                        required: true,
                        message: 'Code secret incorrect!',
                      },
                    ],
                  },
                ]"
                type="text"
                placeholder="Code secret"
              />
            </a-form-item>

            <div class="mb-4 text-right">
              <a-button
                type="primary"
                html-type="submit"
                class="login-form-button"
              >
                Generer
              </a-button>
            </div>
          </a-form>
          <template>
            <h6 class="font-semibold m-0">Generer mot de passe</h6>
          </template>
          <a-form
            id="components-form-demo-normal-login"
            :form="form_password"
            class="login-form"
            @submit="passwordSubmit"
            :hideRequiredMark="true"
          >
            <a-form-item class="" label="Mot de passe generer" :colon="false">
              <a-input
                v-decorator="[
                  'password',
                  {
                    initialValue: password,
                    rules: [
                      {
                        required: true,
                        message: 'Mot de passe generer incorrect!',
                      },
                    ],
                  },
                ]"
                disabled
                type="text"
                placeholder="Mot de passe"
              />
            </a-form-item>

            <a-form-item class="" label="Code secret" :colon="false">
              <a-input
                v-decorator="[
                  'code_secret',
                  {
                    rules: [
                      {
                        required: true,
                        message: 'Code secret incorrect!',
                      },
                    ],
                  },
                ]"
                type="text"
                placeholder="Code secret"
              />
            </a-form-item>
            <div class="mb-4 text-right">
              <a-button
                type="primary"
                html-type="submit"
                class="login-form-button"
              >
                Generer
              </a-button>
            </div>
          </a-form>
          <template>
            <h6 class="font-semibold m-0">Deconnectez l'administrateur</h6>
          </template>
          <a-form
            id="components-form-demo-normal-login"
            :form="form_disconnect"
            class="login-form"
            @submit="disconnectSubmit"
            :hideRequiredMark="true"
          >
            <a-form-item class="" label="Code secret" :colon="false">
              <a-input
                v-decorator="[
                  'code_secret',
                  {
                    rules: [
                      {
                        required: true,
                        message: 'Code secret incorrect!',
                      },
                    ],
                  },
                ]"
                type="text"
                placeholder="Code secret"
              />
            </a-form-item>
            <div class="mb-4 text-right">
              <a-button
                type="danger"
                html-type="submit"
                class="login-form-button"
              >
                Deconnexion
              </a-button>
            </div>
          </a-form>
        </a-card>
      </a-col>
      <!-- / Your Transactions Column -->
    </a-row>
  </div>
</template>

<script>
import CardCredit from "../../components/Cards/CardCredit";
import WidgetSalary from "../../components/Widgets/WidgetSalary";
import CardPaymentMethods from "../../components/Cards/CardPaymentMethods";
import CardInvoices from "../../components/Cards/CardInvoices";
import CardBillingInfo from "../../components/Cards/CardBillingInfo";
import CardTransactions from "../../components/Cards/CardTransactions";
import WidgetCounter from "../../components/Widgets/WidgetCounter";

export default {
  components: {
    CardCredit,
    WidgetSalary,
    CardPaymentMethods,
    CardInvoices,
    CardBillingInfo,
    CardTransactions,
    WidgetCounter,
  },

  beforeCreate() {
    this.form_code_secret = this.$form.createForm(this, {
      name: "normal_login",
    });
    this.form_password = this.$form.createForm(this, { name: "normal_login" });
    this.form_role = this.$form.createForm(this, { name: "normal_login" });
    this.form_disconnect = this.$form.createForm(this, {
      name: "normal_login",
    });
  },

  data() {
    return {
      
      callback: process.env.VUE_APP_API_BASE_URL,
      token_admin: null,
      admin: {},
      state: {},

      code_secret: null,
      password: null,
    };
  },

  mounted() {
    this.password = `DSHFOOD@${Math.floor(
      Math.random() * (9999 - 1000) + 1000
    )}`;

    this.code_secret = Math.floor(Math.random() * (9999 - 1000) + 1000);

    this.detailadmin();
  },

  methods: {
    showAlert(type, title, description) {
      this.$notification[type]({
        message: title,
        description: description,
      });
    },

    detailadmin() {
      let session = localStorage;
      this.token_admin = session.getItem("token");

      let headers = { headers: { Authorization: this.token_admin } };

      this.$http.get(`${this.callback}/admin/all`, headers).then(
        (response) => {
          let data = response.body.admins;

          for (let i = 0; i < data.length; i++) {
            if (data[i].id == this.$route.params.id) {
              console.log(data[i]);
              this.admin = data[i];
              if (data[i].menu) {
                this.state = JSON.parse(data[i].menu);
              } else {
                this.state = {
                  produit: true,
                  client: true,
                  collecteur: true,
                  livreur: true,
                  agence: true,
                  chef: true,
                  admin: true,
                  ville: true,
                  controlleur: true,
                  etat: true,
                  parametre: true,
                };
              }

              console.log(this.state)
            }
          }
        },
        (response) => {
          this.showAlert("error", "Erreur", response.body.message);
        }
      );
    },

    codeSubmit(e) {
      e.preventDefault();
      this.form_code_secret.validateFields((err, values) => {
        if (!err) {
          console.log(values);
          if (values.code_secret == localStorage.getItem("code_secret")) {
            let session = localStorage;
            this.token_admin = session.getItem("token");

            let headers = { headers: { Authorization: this.token_admin } };

            let data_param = {
              code_secret: this.admin.code_secret,
              newcode_secret: values.code_secret_new,
            };

            this.$http
              .post(
                `${this.callback}/gest/admin/change/code-secret/${this.$route.params.id}`,
                data_param,
                headers
              )
              .then(
                (response) => {
                  let data = response.body;
                  console.log(data);

                  if (data.status == true) {
                    this.showAlert(
                      "success",
                      "Success",
                      `Code secret générer avec success! Code secret: ${values.code_secret_new}`
                    );
                    this.detailadmin();

                    this.code_secret = Math.floor(
                      Math.random() * (9999 - 1000) + 1000
                    );
                  } else {
                    this.showAlert("danger", "Erreur", data.message);
                  }
                },
                (response) => {
                  this.showAlert("danger", "Erreur", response.body.message);
                }
              );
          } else {
            this.showAlert("error", "Erreur", "Code secret incorrect");
          }
        } else {
          console.log(err);
        }
      });
    },

    passwordSubmit(e) {
      e.preventDefault();
      this.form_password.validateFields((err, values) => {
        if (!err) {
          console.log(values);
          if (values.code_secret == localStorage.getItem("code_secret")) {
            let session = localStorage;
            this.token_admin = session.getItem("token");

            let headers = { headers: { Authorization: this.token_admin } };

            this.$http
              .post(
                `${this.callback}/gest/admin/${this.$route.params.id}/password/change/token`,
                {},
                headers
              )
              .then(
                (response) => {
                  let data = response.body.data;

                  console.log(data);
                  let token_password = data;

                  let headers = { headers: { Authorization: token_password } };

                  let data_param = {
                    newpassword: values.password,
                  };

                  this.$http
                    .post(
                      `${this.callback}/gest/admin/${this.$route.params.id}/password/change/operation`,
                      data_param,
                      headers
                    )
                    .then(
                      (response) => {
                        let data = response.body;
                        console.log(data);

                        if (data.status == true) {
                          this.showAlert(
                            "success",
                            "Success",
                            `Mot de passe generer avec succes! Mot de passe: ${values.password}`
                          );
                          this.password = `DSHFOOD@${Math.floor(
                            Math.random() * (9999 - 1000) + 1000
                          )}`;
                        } else {
                          this.showAlert("error", "Erreur", data.message);
                        }
                      },
                      (response) => {
                        this.showAlert(
                          "error",
                          "Erreur",
                          response.body.message
                        );
                      }
                    );
                },
                (response) => {
                  this.showAlert("error", "Erreur", response.body.message);
                }
              );
          } else {
            this.showAlert("error", "Erreur", "Code secret incorrect");
          }
        } else {
          console.log("error");
        }
      });
    },

    disconnectSubmit(e) {
      e.preventDefault();
      this.form_disconnect.validateFields((err, values) => {
        if (!err) {
          if (values.code_secret == localStorage.getItem("code_secret")) {
            let session = localStorage;
            this.token_admin = session.getItem("token");

            let headers = { headers: { Authorization: this.token_admin } };

            this.$http
              .post(
                `${this.callback}/gest/admin/disconnect/${this.$route.params.id}`,
                {},
                headers
              )
              .then(
                (response) => {
                  let data = response.body;
                  console.log(data);

                  if (data) {
                    this.showAlert(
                      "success",
                      "Success",
                      "Agent admin deconneter avec success"
                    );
                  }
                },
                (response) => {
                  this.showAlert("error", "Erreur", response.body.message);
                }
              );
          } else {
            this.showAlert("error", "Erreur", "Code secret incorrect");
          }
        }
      });
    },

    roleSubmit(e) {
      e.preventDefault();

      console.log(this.state);
      let session = localStorage;
      this.token_admin = session.getItem("token");

      let headers = { headers: { Authorization: this.token_admin } };

      this.$http
        .put(
          `${this.callback}/admin/updateMenuAdmin`,
          { admin: this.$route.params.id, menu: `${JSON.stringify(this.state)}` },
          headers
        )
        .then(
          (response) => {
            let data = response.body;

            console.log(data)

            if (data.status == 200) {
              this.showAlert("success", "Success", "Role definit avec success");
              this.detailadmin();
            }
          },
          (response) => {
            this.showAlert("error", "Erreur", response.body.message);
          }
        );
    },
  },
};
</script>

<style lang="scss">
</style>
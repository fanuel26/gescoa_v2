<template>
  <div>
    <a-row :gutter="24">
      <a-col :span="24" :lg="12" :xl="6" class="mb-24" v-for="(stat, index) in stats" :key="index">
        <!-- Widget 1 Card -->
        <WidgetCounter :title="stat.title" :value="stat.value" :prefix="stat.prefix" :suffix="stat.suffix"
          :icon="stat.icon" :status="stat.status"></WidgetCounter>
        <!-- / Widget 1 Card -->
      </a-col>
    </a-row>

    <a-row :gutter="24">
      <a-col :span="12" :lg="12" :xl="24" class="mb-24">
        <a-card class="card card-body border-0">
          <div class="mb-4 text-right">
            <a-input-search v-model="value" placeholder="Recherche ici" style="width: 300px" @change="onSearch" />
            <router-link :to="{ name: 'Produit_classement'}">
              <a-button type="primary" style="margin-left: 20px">
                Classement produit
              </a-button>
            </router-link>
            <a-button type="primary" style="margin-left: 20px" @click="showModal">
              Créer un produit
            </a-button>
          </div>

          <a-modal :width="width" title="Creer un produit" :visible="visible" :confirm-loading="confirmLoading"
            @ok="handleOk" @cancel="handleCancel">
            <a-form id="components-form-demo-normal-login" :form="form" class="login-form" @submit="produitSubmit"
              :hideRequiredMark="true">
              <a-row type="flex" :gutter="24">
                <!-- Billing Information Column -->
                <a-col :span="12" :md="12" class="">
                  <a-form-item class="" label="Nom du produit" :colon="false">
                    <a-input v-decorator="[
                      'libelle',
                      {
                        rules: [
                          {
                            required: true,
                            message: 'Nom du produit est vide!',
                          },
                        ],
                      },
                    ]" type="text" placeholder="Nom produit" />
                  </a-form-item>
                </a-col>

                <a-col :span="12" :md="12" class="">
                  <a-form-item class="" label="Montant du produit" :colon="false">
                    <a-input v-decorator="[
                      'montant',
                      {
                        rules: [
                          {
                            required: true,
                            message: 'Montant du produit est vide!',
                          },
                        ],
                      },
                    ]" type="text" placeholder="Montant produit" />
                  </a-form-item>
                </a-col>

                <a-col :span="12" :md="12" class="">
                  <a-form-item class="" label="Code secret" :colon="false">
                    <a-input v-decorator="[
                      'code_secret',
                      {
                        rules: [
                          {
                            required: true,
                            message: 'Code secret est vide!',
                          },
                        ],
                      },
                    ]" type="number" placeholder="Code secret" />
                  </a-form-item>
                </a-col>
              </a-row>
            </a-form>
          </a-modal>
          <a-table :columns="columns" :data-source="data" :pagination="true">
            <template slot="operation" slot-scope="text, record">
              <div class="d-flex">
                <router-link :to="{ name: 'Produit_detail', params: { id: record.key } }"><a-button type="primary"
                   style="margin-right: 10px" size="small">Detail</a-button>
                </router-link>

                <a-popconfirm v-if="record.etat == false"
                  title="Etes vous Sûr de bloquer?"
                  @confirm="() => deleteProduit(record.key, record.etat)"
                  ><a-button type="danger" size="small">Bloquer</a-button>
                </a-popconfirm>
                
                <a-popconfirm v-if="record.etat == true"
                  title="Etes vous Sûr de debloquer?"
                  @confirm="() => deleteProduit(record.key, record.etat)"
                  ><a-button type="success" size="small">Debloquer</a-button>
                </a-popconfirm>
              </div>
            </template>
          </a-table>

          <!-- <div class="d-flex justify-content-between align-items-center mt-4">
            <div>
              <p>Page {{ page }}/{{ total_page }}</p>
            </div>
            <div>
              <a-button style="margin-left: 10px" @click="preview()" v-if="page > 1"> Retour </a-button>
              <a-button style="margin-left: 10px" @click="next()" v-if="page != total_page"> Suivant </a-button>
            </div>
          </div> -->
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>
// Counter Widgets
import WidgetCounter from "../../components/Widgets/WidgetCounter";

export default {
  components: {
    WidgetCounter,
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: "normal_login" });
  },
  data() {
    return {
      callback: process.env.VUE_APP_API_BASE_URL,
      token_admin: null,
      stats: [],
      width: 1000,
      columns: [],
      data: [],
      row: 5,
      page: 1,
      total_page: 0,
      value: null,
      buttonText: "Détail",
      visible: false,
      confirmLoading: false,
    };
  },
  mounted() {
    this.stats = [
      {
        title: "Nombre de produit",
        value: 0,
        prefix: "",
        suffix: "",
        icon: `<svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M8.43338 7.41784C8.58818 7.31464 8.77939 7.2224 9 7.15101L9.00001 8.84899C8.77939 8.7776 8.58818 8.68536 8.43338 8.58216C8.06927 8.33942 8 8.1139 8 8C8 7.8861 8.06927 7.66058 8.43338 7.41784Z" fill="#111827"/>
							<path d="M11 12.849L11 11.151C11.2206 11.2224 11.4118 11.3146 11.5666 11.4178C11.9308 11.6606 12 11.8861 12 12C12 12.1139 11.9308 12.3394 11.5666 12.5822C11.4118 12.6854 11.2206 12.7776 11 12.849Z" fill="#111827"/>
							<path fill-rule="evenodd" clip-rule="evenodd" d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM11 5C11 4.44772 10.5523 4 10 4C9.44772 4 9 4.44772 9 5V5.09199C8.3784 5.20873 7.80348 5.43407 7.32398 5.75374C6.6023 6.23485 6 7.00933 6 8C6 8.99067 6.6023 9.76515 7.32398 10.2463C7.80348 10.5659 8.37841 10.7913 9.00001 10.908L9.00002 12.8492C8.60902 12.7223 8.31917 12.5319 8.15667 12.3446C7.79471 11.9275 7.16313 11.8827 6.74599 12.2447C6.32885 12.6067 6.28411 13.2382 6.64607 13.6554C7.20855 14.3036 8.05956 14.7308 9 14.9076L9 15C8.99999 15.5523 9.44769 16 9.99998 16C10.5523 16 11 15.5523 11 15L11 14.908C11.6216 14.7913 12.1965 14.5659 12.676 14.2463C13.3977 13.7651 14 12.9907 14 12C14 11.0093 13.3977 10.2348 12.676 9.75373C12.1965 9.43407 11.6216 9.20873 11 9.09199L11 7.15075C11.391 7.27771 11.6808 7.4681 11.8434 7.65538C12.2053 8.07252 12.8369 8.11726 13.254 7.7553C13.6712 7.39335 13.7159 6.76176 13.354 6.34462C12.7915 5.69637 11.9405 5.26915 11 5.09236V5Z" fill="#111827"/>
						</svg>`,
      },
    ];

    this.columns = [
      {
        title: "Date de creation",
        dataIndex: "createdAt",
        key: "createdAt",
        scopedSlots: { customRender: "name" },
      },
      {
        title: "Libelle produit",
        dataIndex: "libelle",
        key: "libelle",
      },
      {
        title: "Montant (FCFA)",
        dataIndex: "montant",
        key: "montant",
      },
      {
        title: "Etat",
        dataIndex: "etat",
        key: "etat",
      },
      {
        title: "Action",
        key: "Action",
        scopedSlots: { customRender: "operation" },
      },
    ];

    this.listeProduit();
  },
  methods: {
    showAlert(type, title, description) {
      this.$notification[type]({
        message: title,
        description: description,
      });
    },

    listeProduit() {
      let session = localStorage;
      this.token_admin = session.getItem("token");

      let headers = { headers: { Authorization: this.token_admin } };

      this.$http.get(`${this.callback}/type-carnet/allByAdmin`, headers).then(
        (response) => {
          let data = response.body.typeCarnets.typeCarnets;

          this.stats[0].value = data.length;

          this.data = [];
          console.log(data);
          for (let i = data.length - 1; i >= 0; i--) {
            this.data.push({
              key: data[i].id,
              createdAt: new Date(data[i].createdAt).toLocaleString(),
              libelle: data[i].libelle,
              montant: data[i].montant,
              etat: data[i].isBlocked,
            });
          }
        },
        (response) => {
          this.showAlert("error", "Error", response.body.message);
        }
      );
    },

    next() {
      let session = localStorage;
      this.token_admin = session.getItem("token");

      let headers = { headers: { Authorization: this.token_admin } };
      this.page += 1;
      this.$http
        .post(
          `${this.callback}/produit/list?row=${this.row}&page=${this.page}`,
          {},
          headers
        )
        .then(
          (response) => {
            let d = response.body.data;

            let data = Object.keys(d).map(function (key) {
              return d[key];
            });
            this.data = [];
            console.log(data);
            for (let i = data.length - 1; i >= 0; i--) {
              this.data.push({
                key: data[i].id,
                createdAt: new Date(data[i].createdAt).toLocaleString(),
                libelle: data[i].libelle,
              });
            }
          },
          (response) => {
            this.showAlert("error", "Error", response.body.message);
          }
        );
    },

    preview() {
      let session = localStorage;
      this.token_admin = session.getItem("token");

      let headers = { headers: { Authorization: this.token_admin } };
      this.page -= 1;
      this.$http
        .post(
          `${this.callback}/produit/list?row=${this.row}&page=${this.page}`,
          {},
          headers
        )
        .then(
          (response) => {
            let d = response.body.data;

            let data = Object.keys(d).map(function (key) {
              return d[key];
            });
            this.data = [];
            console.log(data);
            for (let i = data.length - 1; i >= 0; i--) {
              this.data.push({
                key: data[i].id,
                createdAt: new Date(data[i].createdAt).toLocaleString(),
                libelle: data[i].libelle,
              });
            }
          },
          (response) => {
            this.showAlert("error", "Error", response.body.message);
          }
        );
    },

    onSearch() {
      let session = localStorage;
      this.token_admin = session.getItem("token");

      let headers = { headers: { Authorization: this.token_admin } };

      this.$http
        .post(
          `${this.callback}/produit/list?row=${this.row}&page=1&search=${this.value}`,
          {},
          headers
        )
        .then(
          (response) => {
            let data = response.body.data;

            this.stats[0].value = data.length;
            this.data = [];
            console.log(data);
            for (let i = data.length - 1; i >= 0; i--) {
              this.data.push({
                key: data[i].id,
                createdAt: new Date(data[i].createdAt).toLocaleString(),
                libelle: data[i].libelle,
              });
            }
          },
          (response) => {
            this.showAlert("error", "Error", response.body.message);
          }
        );
    },

    showModal() {
      this.visible = true;
    },

    handleOk(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          if (values.code_secret == localStorage.getItem("code_secret")) {
            console.log(values);
            this.confirmLoading = true;
            this.produitSubmit(values);
            setTimeout(() => {
              this.confirmLoading = false;
              this.visible = false;
              this.form.resetFields();
            }, 1500);
          } else {
            this.showAlert("error", "Erreur", "Code secret incorrect");
          }
        } else {
          console.log("error");
        }
      });
    },
    handleCancel(e) {
      console.log("Clicked cancel button");
      this.confirmLoading = false;
      this.visible = false;
    },

    produitSubmit(data) {
      let session = localStorage;
      this.token_admin = session.getItem("token");
      let headers = { headers: { Authorization: this.token_admin } };

      let data_create = {
        libelle: data.libelle,
        montant: parseInt(data.montant),
      };

      this.$http
        .post(`${this.callback}/type-carnet/create`, data_create, headers)
        .then(
          (response) => {
            console.log(response);
            this.showAlert("success", "Success", "Produit creer avec success");

            this.form.resetFields();
            this.listeProduit();
          },
          (response) => {
            this.showAlert("error", "Error", response.body.message);
          }
        );
    },

    deleteProduit(id, etat) {
      let session = localStorage;
      this.token_admin = session.getItem("token");
      let headers = { headers: { Authorization: this.token_admin } };

      this.$http
        .put(`${this.callback}/type-carnet/toggleBlockTypeCarnet`, {typeCarnet : id, isBlocked : etat == true ? false : true}, headers)
        .then(
          (response) => {
            if (response) {
              this.showAlert(
                "success",
                "Success",
                "Operation effectuer avec success"
              );
              this.listeProduit();
            }
          },
          (response) => {
            if (response) {
              this.showAlert(
                "error",
                "Erreur",
                "Erreur lors de l'operation"
              );
            }
          }
        );
    },
  },
};
</script>
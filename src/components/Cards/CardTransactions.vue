<template>
  <!-- Your Transactions Card -->
  <a-card :bordered="false" class="header-solid h-full" :bodyStyle="{ paddingTop: 0, paddingBottom: '16px' }">
    <template #title>
      <h6 class="font-semibold m-0">Liste des carnets clients</h6>
    </template>
    <a-list class="transactions-list" item-layout="horizontal" :split="false" :data-source="data">
      <a-list-item slot="renderItem" slot-scope="item">
        <template>
          <a-list-item-meta :title="item.uuid" :description="`Mise: ${item.mise} Fcfa | Jour: ${item.nbrCotisation} / ${item.typeMise == 31 ? 'Mois' : item.typeMise == 7 ? 'Hebdo' : 'Quin'}`">
            <a-avatar size="small" v-if="item.isSuspend == false" slot="avatar" style="background-color: #edf9e7">
              <svg width="10" height="10" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="fill-success" fill-rule="evenodd" clip-rule="evenodd"
                  d="M10 3C10.5523 3 11 3.44772 11 4V9H16C16.5523 9 17 9.44772 17 10C17 10.5523 16.5523 11 16 11H11V16C11 16.5523 10.5523 17 10 17C9.44772 17 9 16.5523 9 16V11H4C3.44772 11 3 10.5523 3 10C3 9.44771 3.44772 9 4 9L9 9V4C9 3.44772 9.44772 3 10 3Z" />
              </svg>
            </a-avatar>
            <a-avatar size="small" v-if="item.isSuspend == true" slot="avatar" style="background-color: #fffce7">
              <strong class="text-warning"> ! </strong>
            </a-avatar>
          </a-list-item-meta>
          <div>
            <div class="amount">
              <span class="text-danger">
                {{ item.mise * item.nbrCotisation }} Fcfa
              </span>
            </div>

            <a-button size="small" class="mx-2" @click="showModal(item)">Detail</a-button>

            <!-- <a-button size="small" @click="confirm(item.id)">Action</a-button> -->

            <a-drawer title="Actions" placement="right" :closable="false" :visible="visible">
              <a-card>
                <h6>Suspendre le carnet</h6>
                <a-form ref="formRef" :form="form" class="login-form" @submit="onSubmit">
                  <a-form-item label="Motif de suspension" name="desc">
                    <a-textarea v-decorator="[
                      'motif',
                      {
                        rules: [
                          {
                            required: true,
                            message: 'Motif est vide!',
                          },
                        ],
                      },
                    ]" placeholder="Motif" />
                  </a-form-item>
                  <a-form-item class="text-right">
                    <a-button type="primary" @click="onSubmit" style="margin-left: 10px">Suspendre</a-button>
                  </a-form-item>
                </a-form>
              </a-card>
              <div class="my-4" v-if="state == false">
                <a-card>
                  <p>
                    <small>
                      Supprimer la derniere cotisation
                    </small>
                  </p>
                  <p>
                    <small>Somme: <strong>{{ data_suppr.montant }} Fcfa</strong></small><br>
                    <small>Nbr cotisation: <strong>{{ data_suppr.nbrCotisation }}</strong></small><br>
                    <small>Mise du jour: <strong>{{ data_suppr.mise }} Fcfa</strong></small><br>
                  </p>
                  <a-popconfirm title="Voulez vous vraiment supprimer la dernière cotisation?" ok-text="Oui! Supprimer"
                    cancel-text="Non" @confirm="delete_cotisation()" @cancel="cancel">
                    <a-button type="danger" v-if="status == true">Supprimer la cotisation</a-button>
                  </a-popconfirm>
                </a-card>
              </div>
              <a-button class="my-4" @click="resetForm">Fermer</a-button>
            </a-drawer>
          </div>
        </template>
      </a-list-item>
    </a-list>

    <a-modal :visible="visible_m" width="1000px" title="Liste des cotisations" @ok="handleOk" @cancel="handleCancel">
      <a-table :columns="columns" :data-source="data_f"></a-table>
    </a-modal>
  </a-card>
  <!-- / Your Transactions Card -->
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: "normal_login" });
  },
  data() {
    return {
      callback: process.env.VUE_APP_API_BASE_URL,
      token_admin: null,
      motif: null,
      visible: false,
      id: null,
      status: false,
      visible_m: false,
      state: false,
      columns: [],
      data_f: [],
      data_suppr: {},
    };
  },

  mounted() {
    this.columns = [
      {
        title: "Date de creation",
        dataIndex: "createdAt",
        key: "createdAt",
        scopedSlots: { customRender: "name" },
      },
      {
        title: "Nombre cotisé",
        dataIndex: "nbr",
        key: "nbr",
      },
      {
        title: "Mise unitaire (Fcfa)",
        dataIndex: "mise",
        key: "mise",
      },
      {
        title: "Total cotisation (Fcfa)",
        dataIndex: "total",
        key: "total",
      },
    ];
  },
  methods: {
    showAlert(type, title, description) {
      this.$notification[type]({
        message: title,
        description: description,
      });
    },

    confirm(id) {
      this.id = id;

      let session = localStorage;
      this.token_admin = session.getItem("token");

      let headers = { headers: { Authorization: this.token_admin } };

      this.$http
        .post(
          `${this.callback}/cotisation/delete/last-info/${this.id}`,
          {},
          headers
        )
        .then(
          (response) => {
            console.log(response.body);
            if (response) {
              this.status = response.body.status;
              if (this.status == false) {
                this.showAlert("warning", "Warning", response.body.message);
                this.visible = true;
                this.state = false;
              } else {
                this.data_suppr = response.body.data;
                console.log(this.data_suppr)
                this.visible = true;
                this.state = false;
              }
            }
          },
          (response) => {
            this.showAlert("error", "Erreur", response.body.message);
          }
        );
    },

    cancel(e) {
      console.log(e);
    },

    resetForm() {
      this.form.resetFields();
      this.visible = false;
    },

    onSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          let session = localStorage;
          this.token_admin = session.getItem("token");

          let headers = { headers: { Authorization: this.token_admin } };

          this.$http
            .post(
              `${this.callback}/carnet/exemplaire/change/state/${this.id}`,
              values,
              headers
            )
            .then(
              (response) => {
                if (response) {
                  this.showAlert(
                    "success",
                    "Success",
                    "Operation effectuer avec success"
                  );
                }
              },
              (response) => {
                this.showAlert("error", "Erreur", response.body.message);
              }
            );
        } else {
          this.showAlert("error", "Erreur", "Veillez mettre la motif");
        }
      });
    },

    delete_cotisation() {
      let session = localStorage;
      this.token_admin = session.getItem("token");
      let headers = { headers: { Authorization: this.token_admin } };

      this.$http
        .post(`${this.callback}/cotisation/delete/last/${this.id}`, {}, headers)
        .then(
          (response) => {
            if (response.body.status == true) {
              this.showAlert("success", "Success", response.body.message);
              this.state = false;
            } else {
              this.showAlert("error", "Erreur", response.body.message);
            }
          },
          (response) => {
            this.showAlert("error", "Erreur", response.body.message);
          }
        );
    },

    showModal(data) {
      this.data_f = [];

      console.log(data)
      let session = localStorage;
      this.token_admin = session.getItem("token");

      let headers = { headers: { Authorization: this.token_admin } };

      this.$http
        .get(
          `${this.callback}/cotisation/all/byCarnet/forAgent/${data.id}`,
          headers
        )
        .then(
          (response) => {
            let data = response.body.cotisations;

            console.log(data)
            for (let i = 0; i < data.length; i++) {
              this.data_f.push({
                createdAt: new Date(data[i].createdAt).toLocaleString(),
                nbr: data[i].nbrCotisation,
                mise: data[i].coutUnitaire,
                total: data[i].total
              })
            }
            this.visible_m = true;
          });
    },

    handleOk() {
      console.log("fermer");
      this.visible_m = false;
    },

    handleCancel(e) {
      this.visible_m = false;
    },
  },
};
</script>
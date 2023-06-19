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
          <div class="text-right" style="margin-bottom: 10px;">
            <!-- <router-link
              :to="{ name: 'Agence_depot', params: { id: agence.id } }"
              ><a-button type="primary" class="mx-2"
                >Liste des versements</a-button
              ></router-link
            > -->
            <a-button style="margin-left: 10px" @click="$router.go(-1)">Retour</a-button>
          </div>

          <template #title>
            <h6 class="font-semibold m-0">Information de l'agence</h6>
          </template>

          <a-row :gutter="[24, 24]">
            <a-col :span="24">
              <a-card :bordered="false" class="card-billing-info">
                <div class="col-info">
                  <a-descriptions
                    :title="
                      'Date de création: ' +
                      new Date(agence.createdAt).toLocaleString()
                    "
                    :column="2"
                  >
                    <a-descriptions-item label="Nom">
                      {{ agence.libelle }}
                    </a-descriptions-item>
                    <a-descriptions-item label="Ville">
                      {{ agence.ville.libelle }}
                    </a-descriptions-item>
                  </a-descriptions>
                </div>
              </a-card>
            </a-col>
          </a-row>
          <a-col :span="24" :md="24" class="mb-24">
            <a-card
              :bordered="false"
              class="header-solid h-full"
              :bodyStyle="{ paddingTop: 0, paddingBottom: '16px' }"
            >
              <template #title>
                <h6 class="font-semibold m-0">Statistique de l'agence</h6>
              </template>
              <a-row :gutter="24">
                <a-col
                  :span="12"
                  :lg="12"
                  :xl="12"
                  class="mb-24"
                  v-for="(stat, index) in stats"
                  :key="index"
                >
                  <!-- Widget 1 Card -->
                  <WidgetCounter
                    :title="stat.title"
                    :value="stat.value"
                    :prefix="stat.prefix"
                    :suffix="stat.suffix"
                    :icon="stat.icon"
                    :status="stat.status"
                  ></WidgetCounter>
                  <!-- / Widget 1 Card -->
                </a-col>
              </a-row>
            </a-card>
          </a-col>

          <a-col :span="24" :md="24" class="mb-24">
            <!-- <a-card
              :bordered="false"
              class="header-solid h-full"
              :bodyStyle="{ paddingTop: 0, paddingBottom: '16px' }"
            >
              <template #title>
                <h6 class="font-semibold m-0">
                  Liste des collecteurs affectés
                </h6>
              </template>
              <a-table :columns="columns" :data-source="data">
                <template slot="operation" slot-scope="text, record">
                  <router-link
                    class="mx-2"
                    :to="{
                      name: 'Collecteur_detail',
                      params: { id: record.key },
                    }"
                    ><a-button type="primary" size="small"
                      >Détail</a-button
                    ></router-link
                  >
                </template>
              </a-table>
            </a-card> -->
          </a-col>
        </a-card>
      </a-col>
      <!-- Billing Information Column -->

      <!-- Your Transactions Column -->
      <a-col :span="8" :md="8" class="mb-24">
          <!--  affectation d'un collecteur -->
          <!-- <template>
            <h6 class="font-semibold m-0">Affecter un agent collecteur</h6>
          </template>
          <a-form
            id="components-form-demo-normal-login"
            :form="formAffect"
            class="affect-form"
            @submit="affectSubmit"
            :hideRequiredMark="true"
          >
            <a-form-item label="Selectionnez l'agent">
              <a-select
                placeholder="Selectionnez le collecteur"
                v-decorator="[
                  'collecteur',
                  {
                    rules: [
                      {
                        required: true,
                        message: 'Collecteur est vide!',
                      },
                    ],
                  },
                ]"
              >
                <a-select-option
                  v-for="(collecteur, index) in collecteurs_not_affect"
                  :key="index"
                  :value="collecteur.id"
                >
                  {{ collecteur.nom }} {{ collecteur.prenom }}
                </a-select-option>
              </a-select>
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
                type="number"
                placeholder="Code secret"
              />
            </a-form-item>
            <div class="mb-4 text-right">
              <a-button
                type="primary"
                html-type="submit"
                class="login-form-button"
              >
                Affecter
              </a-button>
            </div>
          </a-form> -->
          <!-- end collecteur affect -->

          <!-- affectation agent superviseur -->
          <!-- <template>
            <h6 class="font-semibold m-0">Affecter un agent superviseur</h6>
          </template>
          <a-form
            id="components-form-demo-normal-login"
            :form="formSuperviseurAffect"
            class="affect-form"
            @submit="agentSuperviseurSubmit"
            :hideRequiredMark="true"
          >
            <a-form-item label="Selectionnez l'agent">
              <a-select
                placeholder="Selectionnez le superviseur"
                v-decorator="[
                  'superviseur',
                  {
                    rules: [
                      {
                        required: true,
                        message: 'Superviseur est vide!',
                      },
                    ],
                  },
                ]"
              >
                <a-select-option
                  v-for="(collecteur, index) in superviseurs"
                  :key="index"
                  :value="collecteur.id"
                >
                  {{ collecteur.nom }} {{ collecteur.prenom }}
                </a-select-option>
              </a-select>
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
                type="number"
                placeholder="Code secret"
              />
            </a-form-item>
            <div class="mb-4 text-right">
              <a-button
                type="primary"
                html-type="submit"
                class="login-form-button"
              >
                Affecter
              </a-button>
            </div>
          </a-form> -->

          <!-- end affectation superviseur -->

          <!-- affectation livreur -->
          <!-- <template>
            <h6 class="font-semibold m-0">Affecter un agent livreur</h6>
          </template>
          <a-form
            id="components-form-demo-normal-login"
            :form="formLivreurAffect"
            class="affect-form"
            @submit="agentLivreurSubmit"
            :hideRequiredMark="true"
          >
            <a-form-item label="Selectionnez l'agent">
              <a-select
                placeholder="Selectionnez le livreur"
                v-decorator="[
                  'livreur',
                  {
                    rules: [
                      {
                        required: true,
                        message: 'Livreur est vide!',
                      },
                    ],
                  },
                ]"
              >
                <a-select-option
                  v-for="(collecteur, index) in livreurs"
                  :key="index"
                  :value="collecteur.id"
                >
                  {{ collecteur.nom }} {{ collecteur.prenom }}
                </a-select-option>
              </a-select>
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
                type="number"
                placeholder="Code secret"
              />
            </a-form-item>
            <div class="mb-4 text-right">
              <a-button
                type="primary"
                html-type="submit"
                class="login-form-button"
              >
                Affecter
              </a-button>
            </div>
          </a-form> -->

          <!-- end affectation livreur -->

          <!-- affectation gerant -->
          <!-- <template>
            <h6 class="font-semibold m-0">Affecter un caissier</h6>
          </template>
          <a-form
            id="components-form-demo-normal-login"
            :form="formCaissier"
            class="login-form"
            @submit="agentCaissierSubmit"
            :hideRequiredMark="true"
          >
            <a-form-item label="Selectionnez le caissier">
              <a-select
                placeholder="Selectionnez le caissier"
                v-decorator="[
                  'caissier',
                  {
                    rules: [
                      {
                        required: true,
                        message: 'Caissier est vide!',
                      },
                    ],
                  },
                ]"
              >
                <a-select-option
                  v-for="(collecteur, index) in caissiers"
                  :key="index"
                  :value="collecteur.id"
                >
                  {{ collecteur.nom }} {{ collecteur.prenom }} - (+228)
                  {{ collecteur.numero }}
                </a-select-option>
              </a-select>
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
                Affecter
              </a-button>
            </div>
          </a-form> -->
      </a-col>
      <!-- / Your Transactions Column -->

      <!-- <a-col :span="24" :md="24" class="mb-24">
        <a-card
          :bordered="false"
          class="header-solid h-full"
          :bodyStyle="{ paddingTop: 0, paddingBottom: '16px' }"
        >
          <template #title>
            <h6 class="font-semibold m-0">Liste des caissiers affectés</h6>
          </template>
          <a-table :columns="columns" :data-source="data_c">
            <template slot="operation" slot-scope="text, record">
              <router-link
                class="mx-2"
                :to="{
                  name: 'Caissier_detail',
                  params: { id: record.key },
                }"
                ><a-button type="primary" size="small"
                  >Détail</a-button
                ></router-link
              >
            </template>
          </a-table>
        </a-card>
      </a-col> -->
    </a-row>
  </div>
</template>

<script>
import CardCredit from "../../components/Cards/CardCredit";
import WidgetSalary from "../../components/Widgets/WidgetSalary";
import CardPaymentMethods from "../../components/Cards/CardPaymentMethods";
import CardInvoices from "../../components/Cards/CardInvoices";
import CardBillingInfo from "../../components/Cards/CardBillingInfo";
import CardTransactions from "../../components/Cards/CardGerantListe";
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
    this.formCaissier = this.$form.createForm(this, {
      name: "affect_caissier",
    });
    this.formAffect = this.$form.createForm(this, {
      name: "affect_collecteur",
    });
    this.formSuperviseurAffect = this.$form.createForm(this, {
      name: "affect_collecteur",
    });
    this.formLivreurAffect = this.$form.createForm(this, {
      name: "affect_collecteur",
    });
  },
  data() {
    return {
      callback: process.env.VUE_APP_API_BASE_URL,
      token_admin: null,
      visible: false,
      confirmLoading: false,
      collecteurs: [],
      collecteurs_not_affect: [],
      superviseurs: [],
      livreurs: [],
      caissiers: [],
      columns: [],
      data: [],
      data_c: [],
      stats: [],
      transactionsData: [],
      agence: {},
      ville: null,
      quartier: null,
      depot: 0,
      depot_p: 0,
      password: null,
    };
  },
  mounted() {
    this.password = `dshfood@${Math.floor(
      Math.random() * (9999 - 1000) + 1000
    )}`;

    this.stats = [
      {
        title: "Nombre de depot",
        value: 0,
        prefix: "",
        suffix: "",
        icon: `<svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M8.43338 7.41784C8.58818 7.31464 8.77939 7.2224 9 7.15101L9.00001 8.84899C8.77939 8.7776 8.58818 8.68536 8.43338 8.58216C8.06927 8.33942 8 8.1139 8 8C8 7.8861 8.06927 7.66058 8.43338 7.41784Z" fill="#111827"/>
							<path d="M11 12.849L11 11.151C11.2206 11.2224 11.4118 11.3146 11.5666 11.4178C11.9308 11.6606 12 11.8861 12 12C12 12.1139 11.9308 12.3394 11.5666 12.5822C11.4118 12.6854 11.2206 12.7776 11 12.849Z" fill="#111827"/>
							<path fill-rule="evenodd" clip-rule="evenodd" d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM11 5C11 4.44772 10.5523 4 10 4C9.44772 4 9 4.44772 9 5V5.09199C8.3784 5.20873 7.80348 5.43407 7.32398 5.75374C6.6023 6.23485 6 7.00933 6 8C6 8.99067 6.6023 9.76515 7.32398 10.2463C7.80348 10.5659 8.37841 10.7913 9.00001 10.908L9.00002 12.8492C8.60902 12.7223 8.31917 12.5319 8.15667 12.3446C7.79471 11.9275 7.16313 11.8827 6.74599 12.2447C6.32885 12.6067 6.28411 13.2382 6.64607 13.6554C7.20855 14.3036 8.05956 14.7308 9 14.9076L9 15C8.99999 15.5523 9.44769 16 9.99998 16C10.5523 16 11 15.5523 11 15L11 14.908C11.6216 14.7913 12.1965 14.5659 12.676 14.2463C13.3977 13.7651 14 12.9907 14 12C14 11.0093 13.3977 10.2348 12.676 9.75373C12.1965 9.43407 11.6216 9.20873 11 9.09199L11 7.15075C11.391 7.27771 11.6808 7.4681 11.8434 7.65538C12.2053 8.07252 12.8369 8.11726 13.254 7.7553C13.6712 7.39335 13.7159 6.76176 13.354 6.34462C12.7915 5.69637 11.9405 5.26915 11 5.09236V5Z" fill="#111827"/>
						</svg>`,
      },
      {
        title: "Nombre total de collecteur",
        value: 0,
        prefix: "",
        suffix: "",
        icon: `<svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M8.43338 7.41784C8.58818 7.31464 8.77939 7.2224 9 7.15101L9.00001 8.84899C8.77939 8.7776 8.58818 8.68536 8.43338 8.58216C8.06927 8.33942 8 8.1139 8 8C8 7.8861 8.06927 7.66058 8.43338 7.41784Z" fill="#111827"/>
							<path d="M11 12.849L11 11.151C11.2206 11.2224 11.4118 11.3146 11.5666 11.4178C11.9308 11.6606 12 11.8861 12 12C12 12.1139 11.9308 12.3394 11.5666 12.5822C11.4118 12.6854 11.2206 12.7776 11 12.849Z" fill="#111827"/>
							<path fill-rule="evenodd" clip-rule="evenodd" d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM11 5C11 4.44772 10.5523 4 10 4C9.44772 4 9 4.44772 9 5V5.09199C8.3784 5.20873 7.80348 5.43407 7.32398 5.75374C6.6023 6.23485 6 7.00933 6 8C6 8.99067 6.6023 9.76515 7.32398 10.2463C7.80348 10.5659 8.37841 10.7913 9.00001 10.908L9.00002 12.8492C8.60902 12.7223 8.31917 12.5319 8.15667 12.3446C7.79471 11.9275 7.16313 11.8827 6.74599 12.2447C6.32885 12.6067 6.28411 13.2382 6.64607 13.6554C7.20855 14.3036 8.05956 14.7308 9 14.9076L9 15C8.99999 15.5523 9.44769 16 9.99998 16C10.5523 16 11 15.5523 11 15L11 14.908C11.6216 14.7913 12.1965 14.5659 12.676 14.2463C13.3977 13.7651 14 12.9907 14 12C14 11.0093 13.3977 10.2348 12.676 9.75373C12.1965 9.43407 11.6216 9.20873 11 9.09199L11 7.15075C11.391 7.27771 11.6808 7.4681 11.8434 7.65538C12.2053 8.07252 12.8369 8.11726 13.254 7.7553C13.6712 7.39335 13.7159 6.76176 13.354 6.34462C12.7915 5.69637 11.9405 5.26915 11 5.09236V5Z" fill="#111827"/>
						</svg>`,
      },
      {
        title: "Nombre total de caissier",
        value: 0,
        prefix: "",
        suffix: "",
        icon: `<svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M8.43338 7.41784C8.58818 7.31464 8.77939 7.2224 9 7.15101L9.00001 8.84899C8.77939 8.7776 8.58818 8.68536 8.43338 8.58216C8.06927 8.33942 8 8.1139 8 8C8 7.8861 8.06927 7.66058 8.43338 7.41784Z" fill="#111827"/>
							<path d="M11 12.849L11 11.151C11.2206 11.2224 11.4118 11.3146 11.5666 11.4178C11.9308 11.6606 12 11.8861 12 12C12 12.1139 11.9308 12.3394 11.5666 12.5822C11.4118 12.6854 11.2206 12.7776 11 12.849Z" fill="#111827"/>
							<path fill-rule="evenodd" clip-rule="evenodd" d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM11 5C11 4.44772 10.5523 4 10 4C9.44772 4 9 4.44772 9 5V5.09199C8.3784 5.20873 7.80348 5.43407 7.32398 5.75374C6.6023 6.23485 6 7.00933 6 8C6 8.99067 6.6023 9.76515 7.32398 10.2463C7.80348 10.5659 8.37841 10.7913 9.00001 10.908L9.00002 12.8492C8.60902 12.7223 8.31917 12.5319 8.15667 12.3446C7.79471 11.9275 7.16313 11.8827 6.74599 12.2447C6.32885 12.6067 6.28411 13.2382 6.64607 13.6554C7.20855 14.3036 8.05956 14.7308 9 14.9076L9 15C8.99999 15.5523 9.44769 16 9.99998 16C10.5523 16 11 15.5523 11 15L11 14.908C11.6216 14.7913 12.1965 14.5659 12.676 14.2463C13.3977 13.7651 14 12.9907 14 12C14 11.0093 13.3977 10.2348 12.676 9.75373C12.1965 9.43407 11.6216 9.20873 11 9.09199L11 7.15075C11.391 7.27771 11.6808 7.4681 11.8434 7.65538C12.2053 8.07252 12.8369 8.11726 13.254 7.7553C13.6712 7.39335 13.7159 6.76176 13.354 6.34462C12.7915 5.69637 11.9405 5.26915 11 5.09236V5Z" fill="#111827"/>
						</svg>`,
      },
      {
        title: "Sommes collectées",
        value: 0,
        prefix: "",
        suffix: "Fcfa",
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
        title: "Nom/Prénom collecteur",
        dataIndex: "nom",
        key: "nom",
      },
      {
        title: "Numéro de téléphone",
        dataIndex: "numero",
        key: "numero",
      },
      {
        title: "Action",
        key: "Action",
        scopedSlots: { customRender: "operation" },
      },
    ];

    this.detailAgence();
    // this.listeCollecteur();
    // this.listeCaissier();
    // this.listeLivreur();
    // this.listeSuperviseur();
  },

  methods: {
    showAlert(type, title, description) {
      this.$notification[type]({
        message: title,
        description: description,
      });
    },

    detailAgence() {
      let session = localStorage;
      this.token_admin = session.getItem("token");
      this.type = session.getItem("type");

      let headers = { headers: { Authorization: this.token_admin } };

      // ${this.$route.params.id}

      this.$http
        .get(
          `${this.callback}/agence/all`,
          {},
          headers
        )
        .then(
          (response) => {
            let data = response.body.agences;
            console.log(data)
            
            for (let i = 0; i < data.length; i++) {
              this.agence = data[i];
              // this.ville = data[i].quartier.ville.libelle;
              // this.quartier = data[i].quartier.libelle;
            }
          },
          (response) => {
            this.showAlert("error", "Erreur", response.body.message);
          }
        );
    },

    listeCollecteur() {
      let session = localStorage;
      this.token_admin = session.getItem("token");

      let headers = { headers: { Authorization: this.token_admin } };

      this.$http
        .post(`${this.callback}/agent_collecteur/list?all=true`, {}, headers)
        .then(
          (response) => {
            let data = response.body.data;
            this.collecteurs = data;
            this.collecteurs_not_affect = data;

            console.log(this.collecteurs_not_affect);
          },
          (response) => {
            this.showAlert("error", "Error", response.body.message);
          }
        );
    },

    listeSuperviseur() {
      let session = localStorage;
      this.token_admin = session.getItem("token");

      let headers = { headers: { Authorization: this.token_admin } };

      this.$http
        .post(`${this.callback}/agent/superviseur/list`, {}, headers)
        .then(
          (response) => {
            let data = response.body.data;
            this.superviseurs = data;
          },
          (response) => {
            this.showAlert("error", "Error", response.body.message);
          }
        );
    },

    listeLivreur() {
      let session = localStorage;
      this.token_admin = session.getItem("token");

      let headers = { headers: { Authorization: this.token_admin } };

      this.$http.post(`${this.callback}/livreur/list`, {}, headers).then(
        (response) => {
          let data = response.body.data;
          this.livreurs = data;
        },
        (response) => {
          this.showAlert("error", "Error", response.body.message);
        }
      );
    },

    listeCaissier() {
      let session = localStorage;
      this.token_admin = session.getItem("token");

      let headers = { headers: { Authorization: this.token_admin } };

      this.$http.post(`${this.callback}/agent/list`, {}, headers).then(
        (response) => {
          let data = response.body.data;
          console.log("data ------ caissier")
          console.log(data)
          console.log("data ------- caissier")
          this.caissiers = data;
        },
        (response) => {
          this.showAlert("error", "Error", response.body.message);
        }
      );
    },

    affectSubmit(e) {
      e.preventDefault();
      this.formAffect.validateFields((err, values) => {
        if (!err) {
          if (values.code_secret == localStorage.getItem("code_secret")) {
            let session = localStorage;
            this.token_admin = session.getItem("token");

            let headers = { headers: { Authorization: this.token_admin } };

            this.$http
              .post(
                `${this.callback}/agence/affectation/agence/${this.$route.params.id}/collecteur/${values.collecteur}`,
                {},
                headers
              )
              .then(
                (response) => {
                  if (response) {
                    this.showAlert(
                      "success",
                      "Success",
                      "Affectation effectuer avec success"
                    );

                    this.formAffect.resetFields();
                    this.detailAgence();
                    this.listeCollecteur();
                  }
                },
                (response) => {
                  this.showAlert("error", "Error", response.body.message);
                }
              );
          } else {
            this.showAlert("error", "Erreur", "Code secret incorrect");
          }
        }
      });
    },

    agentCaissierSubmit(e) {
      e.preventDefault();
      this.formCaissier.validateFields((err, values) => {
        if (!err) {
          if (values.code_secret == localStorage.getItem("code_secret")) {
            let session = localStorage;
            this.token_admin = session.getItem("token");

            let headers = { headers: { Authorization: this.token_admin } };

            this.$http
              .post(
                `${this.callback}/agence/affectation/agence/${this.$route.params.id}/gerant/${values.caissier}`,
                {},
                headers
              )
              .then(
                (response) => {
                  if (response) {
                    this.showAlert(
                      "success",
                      "Success",
                      "Affectation effectuer avec success"
                    );
                    this.formCaissier.resetFields();
                    this.detailAgence();
                  }
                },
                (response) => {
                  this.showAlert("error", "Error", response.body.message);
                }
              );
          } else {
            this.showAlert("error", "Erreur", "Code secret incorrect");
          }
        }
      });
    },

    agentSuperviseurSubmit(e) {
      e.preventDefault();
      this.formSuperviseurAffect.validateFields((err, values) => {
        if (!err) {
          if (values.code_secret == localStorage.getItem("code_secret")) {
            let session = localStorage;
            this.token_admin = session.getItem("token");

            let headers = { headers: { Authorization: this.token_admin } };

            this.$http
              .post(
                `${this.callback}/agence/affectation/agence/${this.$route.params.id}/gerant/${values.superviseur}`,
                {},
                headers
              )
              .then(
                (response) => {
                  if (response) {
                    this.showAlert(
                      "success",
                      "Success",
                      "Affectation effectuer avec success"
                    );
                    this.formCaissier.resetFields();
                    this.detailAgence();
                  }
                },
                (response) => {
                  this.showAlert("error", "Error", response.body.message);
                }
              );
          } else {
            this.showAlert("error", "Erreur", "Code secret incorrect");
          }
        }
      });
    },

    agentLivreurSubmit(e) {
      e.preventDefault();
      this.formLivreurAffect.validateFields((err, values) => {
        if (!err) {
          if (values.code_secret == localStorage.getItem("code_secret")) {
            let session = localStorage;
            this.token_admin = session.getItem("token");

            let headers = { headers: { Authorization: this.token_admin } };

            this.$http
              .post(
                `${this.callback}/agence/affectation/agence/${this.$route.params.id}/gerant/${values.livreur}`,
                {},
                headers
              )
              .then(
                (response) => {
                  if (response) {
                    this.showAlert(
                      "success",
                      "Success",
                      "Affectation effectuer avec success"
                    );
                    this.formCaissier.resetFields();
                    this.detailAgence();
                  }
                },
                (response) => {
                  this.showAlert("error", "Error", response.body.message);
                }
              );
          } else {
            this.showAlert("error", "Erreur", "Code secret incorrect");
          }
        }
      });
    },
  },
};
</script>

<style lang="scss">
</style>
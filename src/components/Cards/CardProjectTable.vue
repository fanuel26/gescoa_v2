<template>
  <!-- Projects Table Card -->
  <a-card
    :bordered="false"
    class="header-solid h-full"
    :bodyStyle="{ padding: 0 }"
  >
    <template #title>
      <a-row type="flex" align="middle">
        <a-col :span="24" :md="24">
          <h6>Classement des meilleurs collecteurs</h6>
          <h5 v-if="state == 1">par mises collectées</h5>
          <h5 v-if="state == 2">par carnets vendus</h5>
          <h5 v-if="state == 3">par clients</h5>
        </a-col>
      </a-row>
      <a-row type="flex" align="middle">
        <a-col
          :span="24"
          :md="24"
          style="display: flex; align-items: center; justify-content: end"
        >
          <a-button
            style="background-color: #ffc20e; color: #fff !important"
            class="mx-2"
            @click="changeState(1)"
          >
            Par somme cotisé
          </a-button>
          <a-button type="primary" style="margin-left: 10px;" @click="changeState(2)">
            Par carnets vendus
          </a-button>
          <!-- <a-button
            style="background-color: #268e5e; color: #fff !important"
            class="mx-2"
            @click="changeState(3)"
          >
            Par clients créés</a-button
          > -->
        </a-col>
      </a-row>
    </template>
    <a-table
      :columns="columns"
      :data-source="data"
      :pagination="true"
      v-if="state == 1"
    >
      <template slot="completion" slot-scope="completion">
        <span class="font-bold text-muted text-sm">{{
          completion.label ? completion.label : completion
        }}</span>
      </template>
      <template slot="action" slot-scope="text, record">
        <h5 class="text-warning font-weight-bold">{{ record.somme }}</h5>
      </template>
    </a-table>
    <a-table
      :columns="columns_c"
      :data-source="data_c"
      :pagination="true"
      v-if="state == 2"
    >
      <template slot="completion" slot-scope="completion">
        <span class="font-bold text-muted text-sm">{{
          completion.label ? completion.label : completion
        }}</span>
        <!--<a-progress :percent="completion.value ? completion.value : completion" :show-info="false" size="small" :status="completion.status ? completion.status : 'normal'" />-->
      </template>
      <template slot="action" slot-scope="text, record">
        <h5 class="text-primary font-weight-bold">{{ record.carnet_vendu }}</h5>
      </template>
    </a-table>
    <!-- <a-table
      :columns="columns_cli"
      :data-source="data_cli"
      :pagination="true"
      v-if="state == 3"
    >
      <template slot="completion" slot-scope="completion">
        <span class="font-bold text-muted text-sm">{{
          completion.label ? completion.label : completion
        }}</span>
      </template>

      <template slot="action" slot-scope="text, record">
        <h5 class="text-success font-weight-bold">{{ record.client }}</h5>
      </template>
    </a-table> -->
  </a-card>
  <!-- / Projects Table Card -->
</template>

<script>
export default {
  props: {
    columns: {
      type: Array,
      default: () => [],
    },
    columns_c: {
      type: Array,
      default: () => [],
    },
    columns_cli: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
			callback: process.env.VUE_APP_API_BASE_URL,
			token_admin: null,
      // Active button for the "Projects" table's card header radio button group.
      projectHeaderBtns: "all",
      state: 1,
      data: [],
      data_c: []
    };
  },

  mounted() {
    this.classementCollecteur()
  },

  methods: {
    changeState(nbr) {
      this.state = nbr;
    },

    
		classementCollecteur() {
			let session = localStorage;
			this.token_admin = session.getItem("token");

			let headers = { headers: { Authorization: this.token_admin } };

			console.log("coucou")
			this.$http
				.get(`${this.callback}/statistic/classement/collecteur/byTopCarnetSeller`, headers)
				.then((response) => {
					let data = response.body;

          console.log(data)

					if (data.status == 200) {
						let dt = data.topCollecteurByCarnetSell

						for (let i = 0; i < dt.length; i++) {
							console.log(dt[i]._id);
							this.data_c.push({
								key: dt[i]._id.id,
								nom: `${dt[i]._id.nom} ${dt[i]._id.prenoms}`,
								numero: dt[i]._id.telephone,
								frais: dt[i].sommeTotalCotiser,
								somme: dt[i].sommeTotalCotiser,
								agence: dt[i]._id.agence[0].libelle,
								carnet_vendu: dt[i]._id.__v,
								client: dt[i]._id.nbr_cli,
							});
						}
					}
				})


			this.$http
				.get(`${this.callback}/statistic/classement/collecteur/byTopSommeTotalCotisation`, headers)
				.then((response) => {
					let data = response.body;

					console.log(data);

					if (data.status == 200) {
						let dt = data.topCollecteurByCotisations
						console.log(dt)
						for (let i = 0; i < dt.length; i++) {
							this.data.push({
								key: dt[i]._id.id,
								nom: `${dt[i]._id.nom} ${dt[i]._id.prenoms}`,
								numero: dt[i]._id.telephone,
								frais: dt[i].sommeTotalCotiser,
								somme: dt[i].sommeTotalCotiser,
								agence: dt[i]._id.agence[0].libelle,
								carnet_vendu: dt[i]._id.__v,
								client: dt[i]._id.nbr_cli,
							});
						}

					}

				})
		},
  },
};
</script>
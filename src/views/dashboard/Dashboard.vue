<!-- 
	This is the dashboard page, it uses the dashboard layout in: 
	"./layouts/Dashboard.vue" .
 -->

<template>
	<div>
		<!-- Counter Widgets -->
		<a-row :gutter="24">
			<a-col :xs="24" :sm="24" :md="12" :lg="8" class="mb-24" v-for="(stat, index) in stats" :key="index">
				<!-- Widget 1 Card -->
				<WidgetCounter :title="stat.title" :value="stat.value" :prefix="stat.prefix" :suffix="stat.suffix"
					:icon="stat.icon" :status="stat.status"></WidgetCounter>
				<!-- / Widget 1 Card -->
			</a-col>
		</a-row>
		<!-- / Counter Widgets -->

		<!-- Charts -->
		<a-row :gutter="24" type="flex" align="stretch">
			<a-col :span="24" :lg="12" class="mb-24">
				<a-card :bordered="false" class="header-solid h-full" style="height: 500px; overflow-y: auto;"
					:bodyStyle="{ paddingTop: '12px' }">
					<template #title>
						<div class="d-flex justify-content-between align-items-start">
							<h6>Collecteurs gros miseur unique <strong style="color: #1890ff">( {{ nb_dataCollecteur_actif
							}}
									)</strong></h6>
						</div>
					</template>
					<a-timeline>
						<a-timeline-item v-for="dc in dataCollecteur_actif" :key="dc" color="green">
							{{ dc._id.nom }} {{ dc._id.prenoms }}
							<p><strong style="color: #000">{{ dc.nbrCotisation }}</strong> mises | <strong
									style="color: #000">{{ dc.montantCotisation }}</strong> Fcfa </p>
						</a-timeline-item>
					</a-timeline>
					<!-- 
					<div class="d-flex justify-content-center align-items-center" style="height: 300px;" v-if="load">
						<a-spin v-if="load" size="large" tip="Chargement..." />
					</div> -->
				</a-card>
			</a-col>

			<a-col :span="24" :lg="12" class="mb-24">
				<a-card :bordered="false" class="header-solid h-full" :bodyStyle="{ paddingTop: '12px' }">
					<template #title>
						<h6>Produit les plus vendus</h6>
						<p></p>
					</template>
					<a-timeline>
						<a-timeline-item v-for="dc in dataCarnet" :key="dc" color="green">
							{{ dc._id.libelle }}
							<p>{{ dc.totalCarnetVendu }} ventes | {{ dc._id.montant }} Fcfa </p>
						</a-timeline-item>
					</a-timeline>
					<div class="d-flex justify-content-end">
						<router-link :to="{ name: 'Classement_carnet' }">
							<a-button type="primary" size="small">Voire plus</a-button>
						</router-link>
					</div>
				</a-card>
			</a-col>
		</a-row>
		<!-- / Charts -->


		<a-row :gutter="24" type="flex" align="stretch">
			<a-col :span="24" :lg="24" class="mb-24">
				<a-card :bordered="false" class="header-solid h-full" style="height: 500px; overflow-y: auto;"
					:bodyStyle="{ paddingTop: '12px' }">
					<template #title>
						<div class="d-flex justify-content-between align-items-start">
							<h6>Collecteurs inactif du jour</h6>
						</div>
					</template>


					<a-table :columns="columns" :data-source="data" :pagination="true" style="margin-top: 20px">
						<template slot="etat" slot-scope="text, record">
							<span v-if="record.etat == true" class="text-success">Online</span>
							<span v-if="record.etat == false" class="text-danger">Offline</span>
						</template>
					</a-table>
				</a-card>
			</a-col>
		</a-row>

		<a-modal :width="width" title="Deversement encour dans les agences" :visible="visible" @cancel="handleCancel"
			:confirm-loading="confirmLoading" @ok="handleOk">
			<a-row type="flex" :gutter="24">
				<!-- Billing Information Column -->
				<a-col :span="24" :md="24" class="mt-4 d-flex justify-content-center" v-if="load_m == true">
					<a-spin size="large" />
				</a-col>
				<a-col :span="24" :md="24" class="mt-4" v-if="load_m == false">
					<p class="text-center">Deversement encour:</p>
					<a-card :bordered="false" class="card-billing-info d-flex justify-content-center">
						<h3 class="text-center">{{ somme_deverse }} Fcfa</h3>
					</a-card>
				</a-col>
			</a-row>
		</a-modal>
		<!-- / Table & Timeline -->

		<!-- Table & Timeline -->
		<a-row :gutter="24" type="flex" align="stretch">
			<!-- Table -->
			<a-col :span="24" :lg="24" class="mb-24">
				<!-- Projects Table Card -->
				<CardProjectTable :data="dataCollecteur" :columns="columnCollecteur" :data_c="dataCollecteur_c"
					:columns_c="columnCollecteur_c" :data_cli="dataCollecteur_cli" :columns_cli="columnCollecteur_cli">
				</CardProjectTable>
				<!-- / Projects Table Card -->
			</a-col>
			<!-- / Table -->

			<!-- / Timeline -->
		</a-row>
		<!-- / Table & Timeline -->

	</div>
</template>
  
<script>
// Bar chart for "Active Users" card.
import CardBarChart from "../../components/Cards/CardBarChart";

// Line chart for "Sales Overview" card.
import CardLineChart from "../../components/Cards/CardLineChart";

// Counter Widgets
import WidgetCounter from "../../components/Widgets/WidgetCounter";

// "Projects" table component.
import CardProjectTable from "../../components/Cards/CardProjectTable";

// Order History card component.
import CardOrderHistory from "../../components/Cards/CardOrderHistory";

// Information card 1.
import CardInfo from "../../components/Cards/CardInfo";

// Information card 2.
import CardInfo2 from "../../components/Cards/CardInfo2";

export default {
	components: {
		CardBarChart,
		CardLineChart,
		WidgetCounter,
		CardProjectTable,
		CardOrderHistory,
		CardInfo,
		CardInfo2,
	},
	data() {
		return {
			callback: process.env.VUE_APP_API_BASE_URL,
			columns: [],
			data: [],
			data_d: [],
			token_admin: null,
			dataCollecteur: null,
			columnCollecteur: null,
			dataCollecteur_c: null,
			columnCollecteur_c: null,
			dataCollecteur_cli: null,
			dataCollecteur_vente_jour: null,
			columnCollecteur_cli: null,
			columnsCarnet: null,
			dataCarnets: null,
			ville: null,
			agence: null,
			villes: null,
			Agences: null,
			dataCarnetsVilles: null,
			dataCarnetsAgences: null,
			dataCarnet: null,
			stats: [],
			width: 500,
			timelineReverse: false,
			type: null,
			i: 0,
			dataC: 0,
			dataCollecteur_inactif: null,
			dataCollecteur_actif: null,
			nb_dataCollecteur_inactif: 0,
			nb_dataCollecteur_actif: 0,
			somme_deverse: 0,
			confirmLoading: false,
			load: false,
			load_m: false,
			visible: false
		};
	},

	mounted() {
		let t = localStorage.getItem("type");

		console.log(t);
		if (t == null) {
			this.type = {
				carnet: false,
				epargne: false,
				pret: false,
				produit: false,
				client: false,
				collecteur: false,
				superviseur: false,
				livreur: false,
				agence: false,
				chef: false,
				admin: false,
				ville: false,
				launship: false,
				dashboard: false,
				iAgence: 0,
				niv: 0
			};
		} else {
			this.type = JSON.parse(t);
		}

		this.columnsCarnet = [
			{
				title: "Nom du carnet",
				dataIndex: "libelle",
				key: "libelle",
			},
			{
				title: "Nombre mois",
				dataIndex: "nbr_mois",
				key: "nbr_mois",
			},
			{
				title: "Prix par jour (Fcfa)",
				dataIndex: "prix_jour",
				key: "prix_jour",
			},
			{
				title: "Nombre de cotisation",
				dataIndex: "nbr_cot",
				key: "nbr_cot",
			},
			{
				title: "Nom client",
				dataIndex: "nom_client",
				key: "nom_client",
			},
			{
				title: "Numero client",
				dataIndex: "numero_client",
				key: "numero_client",
			},
		];

		this.columnCollecteur = [
			{
				title: "Nom",
				dataIndex: "nom",
				key: "nom",
			},
			{
				title: "Numéro de téléphone",
				dataIndex: "numero",
				key: "numero",
			},
			{
				title: "Somme collectée (Fcfa)",
				dataIndex: "somme",
				key: "somme",
				scopedSlots: { customRender: "action" },
			},
			{
				title: "Agence",
				dataIndex: "agence",
				key: "agence",
			},
		];

		this.columnCollecteur_c = [
			{
				title: "Nom",
				dataIndex: "nom",
				key: "nom",
			},
			{
				title: "Numéro de téléphone",
				dataIndex: "numero",
				key: "numero",
			},
			{
				title: "Carnet vendus",
				dataIndex: "carnet_vendu",
				key: "carnet_vendu",

				scopedSlots: { customRender: "action" },
			},
			{
				title: "Agence",
				dataIndex: "agence",
				key: "agence",
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
				title: "Agence",
				dataIndex: "agence",
				key: "agence",
			},
			{
				title: "Etat",
				dataIndex: "etat",
				key: "etat",
				scopedSlots: { customRender: "etat" },
			},
		];

		this.columnCollecteur_cli = [
			{
				title: "Nom",
				dataIndex: "nom",
				key: "nom",
			},
			{
				title: "Numéro de téléphone",
				dataIndex: "numero",
				key: "numero",
			},
			{
				title: "Nombre clients",
				dataIndex: "client",
				key: "client",

				scopedSlots: { customRender: "action" },
			},
			{
				title: "Agence",
				dataIndex: "agence",
				key: "agence",
			},
		];

		this.stats = [
			{
				title: "Nombre de client total",
				value: 0,
				prefix: "",
				suffix: "",
				icon: `
						  <svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
							  <path d="M9 6C9 7.65685 7.65685 9 6 9C4.34315 9 3 7.65685 3 6C3 4.34315 4.34315 3 6 3C7.65685 3 9 4.34315 9 6Z" fill="#111827"/>
							  <path d="M17 6C17 7.65685 15.6569 9 14 9C12.3431 9 11 7.65685 11 6C11 4.34315 12.3431 3 14 3C15.6569 3 17 4.34315 17 6Z" fill="#111827"/>
							  <path d="M12.9291 17C12.9758 16.6734 13 16.3395 13 16C13 14.3648 12.4393 12.8606 11.4998 11.6691C12.2352 11.2435 13.0892 11 14 11C16.7614 11 19 13.2386 19 16V17H12.9291Z" fill="#111827"/>
							  <path d="M6 11C8.76142 11 11 13.2386 11 16V17H1V16C1 13.2386 3.23858 11 6 11Z" fill="#111827"/>
						  </svg>`,
			},
			{
				title: "Nombre de carnets vendus",
				value: 0,
				prefix: "",
				suffix: "",
				icon: `
						  <svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
							  <path fill-rule="evenodd" clip-rule="evenodd" d="M10 2C7.79086 2 6 3.79086 6 6V7H5C4.49046 7 4.06239 7.38314 4.00612 7.88957L3.00612 16.8896C2.97471 17.1723 3.06518 17.455 3.25488 17.6669C3.44458 17.8789 3.71556 18 4 18H16C16.2844 18 16.5554 17.8789 16.7451 17.6669C16.9348 17.455 17.0253 17.1723 16.9939 16.8896L15.9939 7.88957C15.9376 7.38314 15.5096 7 15 7H14V6C14 3.79086 12.2091 2 10 2ZM12 7V6C12 4.89543 11.1046 4 10 4C8.89543 4 8 4.89543 8 6V7H12ZM6 10C6 9.44772 6.44772 9 7 9C7.55228 9 8 9.44772 8 10C8 10.5523 7.55228 11 7 11C6.44772 11 6 10.5523 6 10ZM13 9C12.4477 9 12 9.44772 12 10C12 10.5523 12.4477 11 13 11C13.5523 11 14 10.5523 14 10C14 9.44772 13.5523 9 13 9Z" fill="#111827"/>
						  </svg>`,
			},
			{
				title: "Cumule total de cotisations",
				value: 0,
				prefix: "",
				suffix: "",
				icon: `
						  <svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
							  <path fill-rule="evenodd" clip-rule="evenodd" d="M10 2C7.79086 2 6 3.79086 6 6V7H5C4.49046 7 4.06239 7.38314 4.00612 7.88957L3.00612 16.8896C2.97471 17.1723 3.06518 17.455 3.25488 17.6669C3.44458 17.8789 3.71556 18 4 18H16C16.2844 18 16.5554 17.8789 16.7451 17.6669C16.9348 17.455 17.0253 17.1723 16.9939 16.8896L15.9939 7.88957C15.9376 7.38314 15.5096 7 15 7H14V6C14 3.79086 12.2091 2 10 2ZM12 7V6C12 4.89543 11.1046 4 10 4C8.89543 4 8 4.89543 8 6V7H12ZM6 10C6 9.44772 6.44772 9 7 9C7.55228 9 8 9.44772 8 10C8 10.5523 7.55228 11 7 11C6.44772 11 6 10.5523 6 10ZM13 9C12.4477 9 12 9.44772 12 10C12 10.5523 12.4477 11 13 11C13.5523 11 14 10.5523 14 10C14 9.44772 13.5523 9 13 9Z" fill="#111827"/>
						  </svg>`,
			},
			{
				title: "Deversement global du jour",
				value: 0,
				prefix: "",
				suffix: "Fcfa",
				icon: `
						  <svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
							  <path fill-rule="evenodd" clip-rule="evenodd" d="M10 2C7.79086 2 6 3.79086 6 6V7H5C4.49046 7 4.06239 7.38314 4.00612 7.88957L3.00612 16.8896C2.97471 17.1723 3.06518 17.455 3.25488 17.6669C3.44458 17.8789 3.71556 18 4 18H16C16.2844 18 16.5554 17.8789 16.7451 17.6669C16.9348 17.455 17.0253 17.1723 16.9939 16.8896L15.9939 7.88957C15.9376 7.38314 15.5096 7 15 7H14V6C14 3.79086 12.2091 2 10 2ZM12 7V6C12 4.89543 11.1046 4 10 4C8.89543 4 8 4.89543 8 6V7H12ZM6 10C6 9.44772 6.44772 9 7 9C7.55228 9 8 9.44772 8 10C8 10.5523 7.55228 11 7 11C6.44772 11 6 10.5523 6 10ZM13 9C12.4477 9 12 9.44772 12 10C12 10.5523 12.4477 11 13 11C13.5523 11 14 10.5523 14 10C14 9.44772 13.5523 9 13 9Z" fill="#111827"/>
						  </svg>`,
			},
			{
				title: "Deversement global",
				value: 0,
				prefix: "",
				suffix: "Fcfa",
				icon: `
						  <svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
							  <path fill-rule="evenodd" clip-rule="evenodd" d="M10 2C7.79086 2 6 3.79086 6 6V7H5C4.49046 7 4.06239 7.38314 4.00612 7.88957L3.00612 16.8896C2.97471 17.1723 3.06518 17.455 3.25488 17.6669C3.44458 17.8789 3.71556 18 4 18H16C16.2844 18 16.5554 17.8789 16.7451 17.6669C16.9348 17.455 17.0253 17.1723 16.9939 16.8896L15.9939 7.88957C15.9376 7.38314 15.5096 7 15 7H14V6C14 3.79086 12.2091 2 10 2ZM12 7V6C12 4.89543 11.1046 4 10 4C8.89543 4 8 4.89543 8 6V7H12ZM6 10C6 9.44772 6.44772 9 7 9C7.55228 9 8 9.44772 8 10C8 10.5523 7.55228 11 7 11C6.44772 11 6 10.5523 6 10ZM13 9C12.4477 9 12 9.44772 12 10C12 10.5523 12.4477 11 13 11C13.5523 11 14 10.5523 14 10C14 9.44772 13.5523 9 13 9Z" fill="#111827"/>
						  </svg>`,
			},
			{
				title: "Collectes globale en cours",
				value: 0,
				prefix: "",
				suffix: "Fcfa",
				icon: `
						  <svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
							  <path fill-rule="evenodd" clip-rule="evenodd" d="M10 2C7.79086 2 6 3.79086 6 6V7H5C4.49046 7 4.06239 7.38314 4.00612 7.88957L3.00612 16.8896C2.97471 17.1723 3.06518 17.455 3.25488 17.6669C3.44458 17.8789 3.71556 18 4 18H16C16.2844 18 16.5554 17.8789 16.7451 17.6669C16.9348 17.455 17.0253 17.1723 16.9939 16.8896L15.9939 7.88957C15.9376 7.38314 15.5096 7 15 7H14V6C14 3.79086 12.2091 2 10 2ZM12 7V6C12 4.89543 11.1046 4 10 4C8.89543 4 8 4.89543 8 6V7H12ZM6 10C6 9.44772 6.44772 9 7 9C7.55228 9 8 9.44772 8 10C8 10.5523 7.55228 11 7 11C6.44772 11 6 10.5523 6 10ZM13 9C12.4477 9 12 9.44772 12 10C12 10.5523 12.4477 11 13 11C13.5523 11 14 10.5523 14 10C14 9.44772 13.5523 9 13 9Z" fill="#111827"/>
						  </svg>`,
			},
			{
				title: "Cotisation unique du jour",
				value: 0,
				prefix: "",
				suffix: "",
				icon: `
					<svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fill-rule="evenodd" clip-rule="evenodd" d="M10 2C7.79086 2 6 3.79086 6 6V7H5C4.49046 7 4.06239 7.38314 4.00612 7.88957L3.00612 16.8896C2.97471 17.1723 3.06518 17.455 3.25488 17.6669C3.44458 17.8789 3.71556 18 4 18H16C16.2844 18 16.5554 17.8789 16.7451 17.6669C16.9348 17.455 17.0253 17.1723 16.9939 16.8896L15.9939 7.88957C15.9376 7.38314 15.5096 7 15 7H14V6C14 3.79086 12.2091 2 10 2ZM12 7V6C12 4.89543 11.1046 4 10 4C8.89543 4 8 4.89543 8 6V7H12ZM6 10C6 9.44772 6.44772 9 7 9C7.55228 9 8 9.44772 8 10C8 10.5523 7.55228 11 7 11C6.44772 11 6 10.5523 6 10ZM13 9C12.4477 9 12 9.44772 12 10C12 10.5523 12.4477 11 13 11C13.5523 11 14 10.5523 14 10C14 9.44772 13.5523 9 13 9Z" fill="#111827"/>
					</svg>`,
			},
			{
				title: "Nombre carnet suspendus",
				value: 0,
				prefix: "",
				suffix: "",
				icon: `
						  <svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
							  <path fill-rule="evenodd" clip-rule="evenodd" d="M10 2C7.79086 2 6 3.79086 6 6V7H5C4.49046 7 4.06239 7.38314 4.00612 7.88957L3.00612 16.8896C2.97471 17.1723 3.06518 17.455 3.25488 17.6669C3.44458 17.8789 3.71556 18 4 18H16C16.2844 18 16.5554 17.8789 16.7451 17.6669C16.9348 17.455 17.0253 17.1723 16.9939 16.8896L15.9939 7.88957C15.9376 7.38314 15.5096 7 15 7H14V6C14 3.79086 12.2091 2 10 2ZM12 7V6C12 4.89543 11.1046 4 10 4C8.89543 4 8 4.89543 8 6V7H12ZM6 10C6 9.44772 6.44772 9 7 9C7.55228 9 8 9.44772 8 10C8 10.5523 7.55228 11 7 11C6.44772 11 6 10.5523 6 10ZM13 9C12.4477 9 12 9.44772 12 10C12 10.5523 12.4477 11 13 11C13.5523 11 14 10.5523 14 10C14 9.44772 13.5523 9 13 9Z" fill="#111827"/>
						  </svg>`,
			},
			{
				title: "Carnet vendu du jour",
				value: 0,
				prefix: "",
				suffix: "",
				icon: `
						  <svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
							  <path fill-rule="evenodd" clip-rule="evenodd" d="M10 2C7.79086 2 6 3.79086 6 6V7H5C4.49046 7 4.06239 7.38314 4.00612 7.88957L3.00612 16.8896C2.97471 17.1723 3.06518 17.455 3.25488 17.6669C3.44458 17.8789 3.71556 18 4 18H16C16.2844 18 16.5554 17.8789 16.7451 17.6669C16.9348 17.455 17.0253 17.1723 16.9939 16.8896L15.9939 7.88957C15.9376 7.38314 15.5096 7 15 7H14V6C14 3.79086 12.2091 2 10 2ZM12 7V6C12 4.89543 11.1046 4 10 4C8.89543 4 8 4.89543 8 6V7H12ZM6 10C6 9.44772 6.44772 9 7 9C7.55228 9 8 9.44772 8 10C8 10.5523 7.55228 11 7 11C6.44772 11 6 10.5523 6 10ZM13 9C12.4477 9 12 9.44772 12 10C12 10.5523 12.4477 11 13 11C13.5523 11 14 10.5523 14 10C14 9.44772 13.5523 9 13 9Z" fill="#111827"/>
						  </svg>`,
			},

			{
				title: "Nombre de collecteurs",
				value: 0,
				prefix: "",
				suffix: "",
				icon: `
						  <svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
							  <path fill-rule="evenodd" clip-rule="evenodd" d="M10 2C7.79086 2 6 3.79086 6 6V7H5C4.49046 7 4.06239 7.38314 4.00612 7.88957L3.00612 16.8896C2.97471 17.1723 3.06518 17.455 3.25488 17.6669C3.44458 17.8789 3.71556 18 4 18H16C16.2844 18 16.5554 17.8789 16.7451 17.6669C16.9348 17.455 17.0253 17.1723 16.9939 16.8896L15.9939 7.88957C15.9376 7.38314 15.5096 7 15 7H14V6C14 3.79086 12.2091 2 10 2ZM12 7V6C12 4.89543 11.1046 4 10 4C8.89543 4 8 4.89543 8 6V7H12ZM6 10C6 9.44772 6.44772 9 7 9C7.55228 9 8 9.44772 8 10C8 10.5523 7.55228 11 7 11C6.44772 11 6 10.5523 6 10ZM13 9C12.4477 9 12 9.44772 12 10C12 10.5523 12.4477 11 13 11C13.5523 11 14 10.5523 14 10C14 9.44772 13.5523 9 13 9Z" fill="#111827"/>
						  </svg>`,
			},
			{
				title: "Nombre d'agences",
				value: 0,
				prefix: "",
				suffix: "",
				icon: `
						  <svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
							  <path fill-rule="evenodd" clip-rule="evenodd" d="M10 2C7.79086 2 6 3.79086 6 6V7H5C4.49046 7 4.06239 7.38314 4.00612 7.88957L3.00612 16.8896C2.97471 17.1723 3.06518 17.455 3.25488 17.6669C3.44458 17.8789 3.71556 18 4 18H16C16.2844 18 16.5554 17.8789 16.7451 17.6669C16.9348 17.455 17.0253 17.1723 16.9939 16.8896L15.9939 7.88957C15.9376 7.38314 15.5096 7 15 7H14V6C14 3.79086 12.2091 2 10 2ZM12 7V6C12 4.89543 11.1046 4 10 4C8.89543 4 8 4.89543 8 6V7H12ZM6 10C6 9.44772 6.44772 9 7 9C7.55228 9 8 9.44772 8 10C8 10.5523 7.55228 11 7 11C6.44772 11 6 10.5523 6 10ZM13 9C12.4477 9 12 9.44772 12 10C12 10.5523 12.4477 11 13 11C13.5523 11 14 10.5523 14 10C14 9.44772 13.5523 9 13 9Z" fill="#111827"/>
						  </svg>`,
			},
			{
				title: "Total de ventes",
				value: 0,
				prefix: "",
				suffix: "Fcfa",
				icon: `
						  <svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
							  <path fill-rule="evenodd" clip-rule="evenodd" d="M10 2C7.79086 2 6 3.79086 6 6V7H5C4.49046 7 4.06239 7.38314 4.00612 7.88957L3.00612 16.8896C2.97471 17.1723 3.06518 17.455 3.25488 17.6669C3.44458 17.8789 3.71556 18 4 18H16C16.2844 18 16.5554 17.8789 16.7451 17.6669C16.9348 17.455 17.0253 17.1723 16.9939 16.8896L15.9939 7.88957C15.9376 7.38314 15.5096 7 15 7H14V6C14 3.79086 12.2091 2 10 2ZM12 7V6C12 4.89543 11.1046 4 10 4C8.89543 4 8 4.89543 8 6V7H12ZM6 10C6 9.44772 6.44772 9 7 9C7.55228 9 8 9.44772 8 10C8 10.5523 7.55228 11 7 11C6.44772 11 6 10.5523 6 10ZM13 9C12.4477 9 12 9.44772 12 10C12 10.5523 12.4477 11 13 11C13.5523 11 14 10.5523 14 10C14 9.44772 13.5523 9 13 9Z" fill="#111827"/>
						  </svg>`,
			},
		];

		this.listeCollecteur();
		this.statistique();
		//   this.listeVille();
		//   this.listeAgence();
		// this.classementCollecteur();
		this.classementCarnet();
	},

	methods: {
		listeVille() {
			let session = localStorage;
			this.token_admin = session.getItem("token");

			let headers = { headers: { Authorization: this.token_admin } };

			this.$http.post(`${this.callback}/ville/liste`, {}, headers).then(
				(response) => {
					let data = response.body.data;

					this.villes = data;
				},
				(response) => {
					this.showAlert("error", "Erreur", response.body.message);
				}
			);
		},

		listeAgence() {
			let session = localStorage;
			this.token_admin = session.getItem("token");

			let headers = { headers: { Authorization: this.token_admin } };

			this.$http.post(`${this.callback}/agence/list?all=true`, {}, headers).then(
				(response) => {
					let data = response.body.data;

					console.log(data)

					this.Agences = data

					this.iAgence = 0
					// this.launchAgenceClassement(this.iAgence, data)

					setTimeout(() => {
						console.log(this.Agences)
					}, 10000);
				},
				(response) => {
					this.showAlert("error", "Error", response.body.message);
				}
			);
		},

		launchAgenceClassement(id, data) {

			let session = localStorage;
			this.token_admin = session.getItem("token");

			let headers = { headers: { Authorization: this.token_admin } };
			console.log(data)
			this.$http.post(`${this.callback}/agence/${data[id].id}/collecteur`,
				{},
				headers
			)
				.then(
					(response) => {
						let dt = response.body.data;
						this.getSomDeversionOfListColelcteur(dt, id, data.length, data)


					},
					(response) => {
						this.showAlert("error", "Erreur", response.body.message);
					}
				);
		},

		getSomDeversionOfListColelcteur(data, id, nbrFinal, dataAgence) {
			this.Agences[id].totalDevers = 0
			for (let i = 0; i < data.length; i++) {
				this.Agences[id].totalDevers += data[i].total_cotisation
			}
			if (id < nbrFinal) {
				setTimeout(() => {
					console.log(this.Agences[id])
					this.iAgence += 1
					this.launchAgenceClassement(this.iAgence, dataAgence)
				}, 100);
			}
		},


		statistique() {
			let session = localStorage;
			this.token_admin = session.getItem("token");

			let headers = { headers: { Authorization: this.token_admin } };

			this.$http
				.get(`${this.callback}/statistic/global`, headers)
				.then((response) => {
					let data = response.body.globaStatistic;

					console.log(data)

					this.stats[0].value = data.totalClients;
					this.stats[1].value = data.totalCarnetVendu;
					this.stats[2].value = data.totalCotisations;
					this.stats[3].value = data.montantDeversementsDuJour;
					this.stats[4].value = data.totalDeversements;
					this.stats[5].value = data.MontantCotisationsDuJour;
					this.stats[6].value = data.totalCotisationsDuJour;
					this.stats[7].value = data.totalCarnetsSuspendu;
					this.stats[8].value = data.totalCarnetVenduJour;
					this.stats[8].value = data.totalCarnetVenduJour;
					this.stats[11].value = data.montantTotalCotisations;

				});

			this.$http
				.get(`${this.callback}/collecteur/allByAdmin`, headers)
				.then((response) => {
					let data = response.body.collecteurs;

					this.stats[9].value = data.length;
					console.log(data)
				});


			this.$http
				.get(`${this.callback}/agence/all`, headers)
				.then((response) => {
					let data = response.body.agences;

					this.stats[10].value = data.length;
					console.log(data)
				});
		},

		listeCarnet(id) {
			// alert(id)
			let session = localStorage;
			this.token_admin = session.getItem("token");

			let headers = { headers: { Authorization: this.token_admin } };


			this.$http
				.post(`${this.callback}/classement/carnet/ville/${id}`, {}, headers)
				.then((response) => {
					let data = response.body.data;
					// this.stats[5].value = data.length;

					console.log(data)
					this.dataCarnetsVilles = [];
					for (let i = 0; i < 10; i++) {
						this.dataCarnetsVilles.push(data[i]);
						this.dataCarnetsVilles = this.dataCarnetsVilles.filter(value => value.vendu > 0 ? value : null)
					}
				});
		},

		listeCarnetAgence(id) {
			console.log(id)
			let session = localStorage;
			this.token_admin = session.getItem("token");

			let headers = { headers: { Authorization: this.token_admin } };


			this.$http
				.post(`${this.callback}/classement/carnet/agence/${id}`, {}, headers)
				.then((response) => {
					let data = response.body.data;
					// this.stats[5].value = data.length;

					console.log(data)
					this.dataCarnetsAgences = [];
					for (let i = 0; i < 10; i++) {
						this.dataCarnetsAgences.push(data[i]);
					}
				});
		},

		classementCarnet() {
			let session = localStorage;
			this.token_admin = session.getItem("token");

			let headers = { headers: { Authorization: this.token_admin } };

			this.$http
				.get(`${this.callback}/statistic/classement/typeCarnetsByBestSell`, headers)
				.then((response) => {
					let data = response.body.topTypeCarnetsByBestSell;

					console.log(data);
					this.dataCarnet = [];
					for (let i = 0; i < 10; i++) {
						if (data[i] != null) {
							console.log(data[i])
							this.dataCarnet.push(data[i]);
						}
					}
				});
		},

		listeCollecteur() {
			let session = localStorage;
			this.token_admin = session.getItem("token");

			let headers = { headers: { Authorization: this.token_admin } };

			this.$http
				.get(
					`${this.callback}/collecteur/allByAdmin`,
					headers
				)
				.then(
					(response) => {
						let data = response.body.collecteurs;

						console.log(response.body);
						this.data_d = [];
						for (let i = 0; i < data.length; i++) {
							this.data_d.push({
								key: data[i].id,
								createdAt: new Date(data[i].createdAt).toLocaleString(),
								nom: `${data[i].nom} ${data[i].prenoms}`,
								numero: `(+228) ${data[i].telephone}`,
								agence: data[i].agence.libelle,
								isActive: data[i].isActive,
								etat: data[i].isLogin,
							});

							this.data_s = this.data;
						}


						this.relanchCollecter();
					},
					(response) => {
						this.showAlert("error", "Error", response.body.message);
					}
				);
		},

		relanchCollecter() {
			// statistic/classement/collecteur/topCotisationByCollecteurForDay
			let session = localStorage;
			this.token_admin = session.getItem("token");

			let headers = { headers: { Authorization: this.token_admin } };

			this.$http
				.get(`${this.callback}/statistic/classement/collecteur/topCotisationByCollecteurForDay`, headers)
				.then(
					(response) => {
						let data = response.body.topCotisationByCollecteurDay;

						console.log(data)
						console.log(this.data_d)

						this.nb_dataCollecteur_actif = data.length
						this.dataCollecteur_actif = data

						let dt = this.data_d
						for (let i = 0; i < dt.length; i++) {
							for (let y = 0; y < data.length; y++) {
								if (dt[i].key != data[i]._id._id) {
									this.data.push({
										key: dt[i].id,
										createdAt: new Date(dt[i].createdAt).toLocaleString(),
										nom: `${dt[i].nom} ${dt[i].prenoms}`,
										numero: `(+228) ${dt[i].telephone}`,
										agence: dt[i].agence.libelle,
										isActive: dt[i].isActive,
										etat: dt[i].isLogin,
									})
								}
							}
						}
					},
					(response) => {
						this.showAlert("error", "Erreur", response.body.message);
					}
				);
		},

		showModal(idAgence) {
			this.load_m = true;
			this.visible = true;
			let session = localStorage;
			this.token_admin = session.getItem("token");

			let headers = { headers: { Authorization: this.token_admin } };

			this.$http.post(`${this.callback}/transaction/agence/${idAgence}/0`, {}, headers).then(
				(response) => {
					let data = response.body.data;
					console.log(data)
					this.somme_deverse = 0
					for (let i = 0; i < data.length; i++) {
						let date_list = new Date(data[i].created_at)
						let date = new Date()
						if (date_list.getDate() == date.getDate() && date_list.getMonth() == date.getMonth() && date_list.getFullYear() == date.getFullYear()) {
							console.log(" ------- date --------------------")
							console.log(date_list)
							console.log(date_list.getDate() + "/" + date_list.getMonth() + "/" + date_list.getFullYear())
							console.log(date)
							console.log(date.getDate() + "/" + date_list.getMonth() + "/" + date_list.getFullYear())
							console.log(" ------- date --------------------")
							this.somme_deverse += data[i].montant
						}
					}
					setTimeout(() => {
						this.load_m = false
					}, 1000);
				},
				(response) => {
					this.showAlert("error", "Erreur", response.body.message);
				}
			);
		},


		handleOk(e) {
			this.visible = false;
		},

		handleCancel(e) {
			this.visible = false;
		},

	},
};
</script>
  
  
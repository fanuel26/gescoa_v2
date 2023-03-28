<template>
	<!-- Active Users Card -->
	<a-card :bordered="false" class="dashboard-bar-chart">
		<chart-bar :height="220" :data="barChartData"></chart-bar>
		<div class="card-title">
			<h6>Statistique des agences</h6>
			<a-timeline>
				<a-timeline-item v-for="dc in agences" :key="dc" color="red">
					{{ dc.nom_agc }} {{ dc.numero }}
					<p><strong style="color: #000">{{ 15000 }}</strong> Fcfa deversé</p>
				</a-timeline-item>
			</a-timeline>
		</div>
		<div class="card-content">
			<!-- <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, adipisci!.</p> -->
		</div>
	</a-card>
	<!-- Active Users Card -->
</template>

<script>

// Bar chart for "Active Users" card.
import ChartBar from '../Charts/ChartBar';

export default ({
	components: {
		ChartBar,
	},
	data() {
		return {
			callback: process.env.VUE_APP_API_BASE_URL,
			token_admin: null,
			// Data for bar chart.
			barChartData: {
				labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09"],
				datasets: [{
					label: "Sales",
					backgroundColor: '#fff',
					borderWidth: 0,
					borderSkipped: false,
					borderRadius: 6,
					data: [850, 600, 500, 620, 900, 500, 900, 630, 900],
					maxBarThickness: 20,
				},],
			},
			agences: []
		}
	},

	mounted() {
		alert('is zooo 1')
		listAgence()
	},

	methodes: {
		listAgence() {
			let session = localStorage;
			this.token_admin = session.getItem("token");

			let headers = { headers: { Authorization: this.token_admin } };

			this.$http.post(`${this.callback}/agence/list?all=true`, {}, headers).then(
				(response) => {
					let data = response.body.data;

					alert("is zooo")
					console.log(data)

					this.agences = data
				},
				(response) => {
					this.showAlert("error", "Error", response.body.message);
				}
			);
		}
	}
})

</script>
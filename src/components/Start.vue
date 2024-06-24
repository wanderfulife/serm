<template>
	<div class="container">

		<div id="enqueteur" v-if="level === 0">
			<h2>Prénom enqueteur :</h2>
			<input class="form-control" type="text" v-model="ENQUETEUR" />
			<button v-if="ENQUETEUR" @click="next" class="btn-next">Suivant</button>
		</div>

		<div v-if="level === 1">
			<button @click="startSurvey" class="btn-next">COMMENCER QUESTIONNAIRE</button>
		</div>

		<div id="q1" v-if="level === 2">
			<h2> Questionnaire </h2>
			<select v-model="Q1" class="form-control">
				<option v-for="option in q1" :key="option.id" :value="option.output">
					{{ option.text }}
				</option>
			</select>
			<button v-if="Q1" @click="next" class="btn-next">Suivant</button>
			<button @click="back" class="btn-return">retour</button>
		</div>

		<div id="q2" v-if="level === 3">
			<h2>De quelle commune venez-vous ?</h2>
			<div>
				<CommuneSelector v-model="Q2" />
			</div>
			<div v-if="Q2 === 'TOURS - 37261'">
				<h2>Precisez le quartier</h2>
				<select v-model="Q2qt" class="form-control">
					<option v-for="option in tours" :key="option.id" :value="option.output">
						{{ option.text }}
					</option>
				</select>
			</div>
			<div v-if="Q2 === 'ORLEANS - 45234'">
				<h2>Precisez le quartier</h2>
				<select v-model="Q2qo" class="form-control">
					<option v-for="option in orleans" :key="option.id" :value="option.output">
						{{ option.text }}
					</option>
				</select>
			</div>
			<button v-if="Q2" @click="next" class="btn-next">Suivant</button>
			<button @click="back" class="btn-return">retour</button>
		</div>

		<div id="q3" v-if="level === 4">
			<h2>Ce lieu est-il …. ? </h2>
			<select v-model="Q3" class="form-control">
				<option v-for="option in motif" :key="option.id" :value="option.output">
					{{ option.text }}
				</option>
			</select>
			<input v-if="Q3 === 8" class="form-control" type="text" v-model="Q3_DETAIL" placeholder="Precisions">
			<button v-if="Q3" @click="next" class="btn-next">Suivant</button>
			<button @click="back" class="btn-return">retour</button>
		</div>

		<div id="q4" v-if="level === 5">
			<h2>Par quel mode de transport principal êtes-vous arrivés à la gare SNCF (ou routière) ? </h2>
			<select v-model="Q4" class="form-control">
				<option v-for="option in mode" :key="option.id" :value="option.output">
					{{ option.text }}
				</option>
			</select>
			<input v-if="Q4 === 9" class="form-control" type="text" v-model="Q4_DETAIL" placeholder="Precisions">
			<button v-if="Q4" @click="next" class="btn-next">Suivant</button>
			<button @click="back" class="btn-return">retour</button>
		</div>

		<div id="q5" v-if="level === 6">
			<h2>Pour ce trajet en train, quelle sera votre gare de descente ?</h2>
			<div>
				<GareSelector v-model="Q5" />
			</div>
			<h2>Ou</h2>
			<br>
			<h2>Pour ce trajet en car, quelle sera votre arret de descente ?</h2>
			<input class="form-control" type="text" v-model="Q5" placeholder="Arret Remi">
			<button v-if="Q5" @click="next" class="btn-next">Suivant</button>
			<button @click="back" class="btn-return">retour</button>
		</div>

		<div id="q6" v-if="level === 7">
			<h2>Ce lieu est-il …. ? </h2>
			<select v-model="Q6" class="form-control">
				<option v-for="option in motif" :key="option.id" :value="option.output">
					{{ option.text }}
				</option>
			</select>
			<input v-if="Q6 === 8" class="form-control" type="text" v-model="Q6_DETAIL" placeholder="Precisions">
			<button v-if="Q6" @click="next" class="btn-next">Suivant</button>
			<button @click="back" class="btn-return">retour</button>
		</div>

		<div id="q7" v-if="level === 8">
			<h2>Quelle est votre destination finale à la descente du train (car) ?</h2>
			<div>
				<CommuneSelector v-model="Q7" />
			</div>
			<div v-if="Q7 === 'TOURS - 37261'">
				<h2>Precisez le quartier</h2>
				<select v-model="Q7qt" class="form-control">
					<option v-for="option in tours" :key="option.id" :value="option.output">
						{{ option.text }}
					</option>
				</select>
			</div>
			<div v-if="Q7 === 'ORLEANS - 45234'">
				<h2>Precisez le quartier</h2>
				<select v-model="Q7qo" class="form-control">
					<option v-for="option in orleans" :key="option.id" :value="option.output">
						{{ option.text }}
					</option>
				</select>
			</div>
			<button v-if="Q7" @click="next" class="btn-next">Suivant</button>
			<button @click="back" class="btn-return">retour</button>
		</div>

		<div id="q8" v-if="level === 9">
			<h2>Par quel mode de transport allez-vous quittez la gare SNCF (ou routière) ?</h2>
			<select v-model="Q8" class="form-control">
				<option v-for="option in mode" :key="option.id" :value="option.output">
					{{ option.text }}
				</option>
			</select>
			<input v-if="Q8 === 9" class="form-control" type="text" v-model="Q8_DETAIL" placeholder="Precisions">
			<button v-if="Q8" @click="next" class="btn-next">Suivant</button>
			<button @click="back" class="btn-return">retour</button>
		</div>

		<div id="q9" v-if="level === 10">
			<h1>A quelle fréquence faites-vous le même trajet qu'aujourd'hui ? </h1>
			<select v-model="Q9" class="form-control">
				<option v-for="option in frequence" :key="option.id" :value="option.output">
					{{ option.text }}
				</option>
			</select>
			<input v-if="Q9 === 8" class="form-control" type="text" v-model="Q9_DETAIL" placeholder="Precisions">
			<button v-if="Q9" @click="next" class="btn-next">Suivant</button>
			<button @click="back" class="btn-return">retour</button>
		</div>

		<div id="q10" v-if="level === 11">
			<h1>Quelle est votre titre de transport ?</h1>
			<select v-model="Q10" class="form-control">
				<option v-for="option in titre" :key="option.id" :value="option.output">
					{{ option.text }}
				</option>
			</select>
			<button v-if="Q10" @click="next" class="btn-next">Suivant</button>
			<button @click="back" class="btn-return">retour</button>
		</div>

		<div id="q11" v-if="level === 12">
			<h1>Sur quel type de support ?</h1>
			<select v-model="Q11" class="form-control">
				<option v-for="option in support" :key="option.id" :value="option.output">
					{{ option.text }}
				</option>
			</select>
			<button v-if="Q11" @click="next" class="btn-next">Suivant</button>
			<button @click="back" class="btn-return">retour</button>
		</div>

		<div id="q12" v-if="level === 13">
			<h1>L'interviewé avait-il un(e) vélo/trottinette/mono roue ?</h1>
			<select v-model="Q12" class="form-control">
				<option v-for="option in q12" :key="option.id" :value="option.output">
					{{ option.text }}
				</option>
			</select>
			<button v-if="Q12" @click="next" class="btn-next">Suivant</button>
			<button @click="back" class="btn-return">retour</button>
		</div>

		<div id="q13" v-if="level === 14">
			<h1>Noter le numéro du quai</h1>
			<input class="form-control" type="text" v-model="Q13" placeholder="Precisions">
			<button v-if="Q13" @click="next" class="btn-next">Suivant</button>
			<button @click="back" class="btn-return">retour</button>
		</div>

		<div id="q14" v-if="level === 15">
			<h1>Noter le numéro du train/car </h1>
			<input class="form-control" type="text" v-model="Q14" placeholder="Precisions">
			<button v-if="Q14" @click="next" class="btn-next">Suivant</button>
			<button @click="back" class="btn-return">retour</button>
		</div>

		<div>
			<button @click="submitSurvey" class="btn-next">FINIR QUESTIONNAIRE</button>
			<button @click="back" class="btn-return">retour</button>
		</div>
		<img class="logo" src="../assets/Alycelogo.webp" alt="Logo Alyce">

		<button class="btn-fin" @click="downloadData">download DATA</button>

	</div>
	<div>
		<span style="margin-left: 10px;">Nombre de questionnaires : {{ docCount }}</span>
	</div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { q1, motif, mode, frequence, titre, support, tours, orleans, q12 } from "./reponses";
import GareSelector from "./GareSelector.vue";
import CommuneSelector from './CommuneSelector.vue';
import { db } from "../firebaseConfig";
import { collection, getDocs, addDoc } from "firebase/firestore";
import * as XLSX from "xlsx";

const docCount = ref(0);
const surveyCollectionRef = collection(db, "Serm");
const level = ref(0);
const startDate = ref('');
const ENQUETEUR = ref('');
const Q1 = ref('');
const Q2 = ref('');
const Q2qt = ref('');
const Q2qo = ref('');
const Q3 = ref('');
const Q3_DETAIL = ref('');
const Q4 = ref('');
const Q4_DETAIL = ref('');
const Q5 = ref('');
const Q6 = ref('');
const Q6_DETAIL = ref('');
const Q7 = ref('');
const Q7qt = ref('');
const Q7qo = ref('');
const Q8 = ref('');
const Q9 = ref('');
const Q9_DETAIL = ref('');
const Q10 = ref('');
const Q11 = ref('');
const Q12 = ref('');
const Q13 = ref('');
const Q14 = ref('');



const startSurvey = () => {
	startDate.value = new Date().toLocaleTimeString("fr-FR").slice(0, 8);
	level.value++;
}


const next = () => {
	level.value++;
	console.log(level.value)
}

const back = () => {
	level.value--;
}


const getDocCount = async () => {
	try {
		const querySnapshot = await getDocs(surveyCollectionRef);
		docCount.value = querySnapshot.size;
	} catch (error) {
		console.error("Error getting document count:", error);
	}
};

onMounted(getDocCount);

const submitSurvey = async () => {
	await addDoc(surveyCollectionRef, {
		HEURE_DEBUT: startDate.value,
		DATE: new Date().toLocaleDateString("fr-FR").replace(/\//g, "-"),
		JOUR: new Date().toLocaleDateString("fr-FR", { weekday: 'long' }),
		ENQUETEUR: ENQUETEUR.value,
		HEURE_FIN: new Date().toLocaleTimeString("fr-FR").slice(0, 8),
		Q1: Q1.value,
		Q2: Q2.value,
		Q2qt: Q2qt.value,
		Q2qo: Q2qo.value,
		Q3: Q3.value,
		Q3_DETAIL: Q3_DETAIL.value,
		Q4: Q4.value,
		Q4_DETAIL: Q4_DETAIL.value,
		Q5: Q5.value,
		Q6: Q6.value,
		Q6_DETAIL: Q6_DETAIL.value,
		Q7: Q7.value,
		Q7qt: Q7qt.value,
		Q7qo: Q7qo.value,
		Q8: Q8.value,
		Q9: Q9.value,
		Q9_DETAIL: Q9_DETAIL.value,
		Q10: Q10.value,
		Q11: Q11.value,
		Q12: Q12.value,
		Q13: Q13.value,
		Q14: Q14.value,

	});
	level.value = 1;
	startDate.value = "";
	getDocCount();
	Q1.value = "";
	Q2.value = "";
	Q2qt.value = "";
	Q2qo.value = "";
	Q3.value = "";
	Q3_DETAIL.value = "";
	Q4.value = "";
	Q4_DETAIL.value = "";
	Q5.value = "";
	Q6.value = "";
	Q6_DETAIL.value = "";
	Q7.value = "";
	Q7qt.value = "";
	Q7qo.value = "";
	Q8.value = "";
	Q9.value = "";
	Q9_DETAIL.value = "";
	Q10.value = "";
	Q11.value = "";
	Q12.value = "";
	Q13.value = "";
	Q14.value = "";
};

const downloadData = async () => {
	try {
		const querySnapshot = await getDocs(surveyCollectionRef);
		let data = [];
		let maxWidths = {}; // Object to keep track of maximum width for each column

		// Define your headers // MODIFICATION SUR L'EXCEL
		const headers = {
			ID_questionnaire: "ID_questionnaire",
			ENQUETEUR: "ENQUETEUR",
			DATE: "DATE",
			JOUR: "JOUR",
			HEURE_DEBUT: "HEURE_DEBUT",
			HEURE_FIN: "HEURE_FIN",
			Q1: "Q1",
			Q2: "Q2",
			Q2qt: "Q2qt",
			Q2qo: "Q2qo",
			Q3: "Q3",
			Q3_DETAIL: "Q3_DETAIL",
			Q4: "Q4",
			Q4_DETAIL: "Q4_DETAIL",
			Q5: "Q5",
			Q6: "Q6",
			Q6_DETAIL: "Q6_DETAIL",
			Q7: "Q7",
			Q7qt: "Q7qt",
			Q7qo: "Q7qo",
			Q8: "Q8",
			Q9: "Q9",
			Q9_DETAIL: "Q9_DETAIL",
			Q10: "Q10",
			Q11: "Q11",
			Q12: "Q12",
			Q13: "Q13",
			Q14: "Q14",
		};

		// Initialize maxWidths with header lengths
		Object.keys(headers).forEach((key) => {
			maxWidths[key] = headers[key].length;
		});

		querySnapshot.forEach((doc) => {
			let docData = doc.data();
			let mappedData = {
				ID_questionnaire: doc.id,
				ENQUETEUR: docData.ENQUETEUR || "",
				DATE: docData.DATE || "",
				JOUR: docData.JOUR || "",
				HEURE_DEBUT: docData.HEURE_DEBUT || "",
				HEURE_FIN: docData.HEURE_FIN || "",
				Q1: docData.Q1 || "",
				Q2: docData.Q2 || "",
				Q2qt: docData.Q2qt || "",
				Q2qo: docData.Q2qo || "",
				Q3: docData.Q3 || "",
				Q3_DETAIL: docData.Q3_DETAIL || "",
				Q4: docData.Q4 || "",
				Q4_DETAIL: docData.Q4_DETAIL || "",
				Q5: docData.Q5 || "",
				Q6: docData.Q6 || "",
				Q6_DETAIL: docData.Q6_DETAIL || "",
				Q7: docData.Q7 || "",
				Q7qt: docData.Q7qt || "",
				Q7qo: docData.Q7qo || "",
				Q8: docData.Q8 || "",
				Q9: docData.Q9 || "",
				Q9_DETAIL: docData.Q9_DETAIL || "",
				Q10: docData.Q10 || "",
				Q11: docData.Q11 || "",
				Q12: docData.Q12 || "",
				Q13: docData.Q13 || "",
				Q14: docData.Q14 || "",
			};
			data.push(mappedData);
			// Update maxWidths for each key in mappedData
			Object.keys(mappedData).forEach((key) => {
				const valueLength = mappedData[key].toString().length;
				maxWidths[key] = Math.max(maxWidths[key], valueLength);
			});
		});
		// Convert data to a worksheet
		const worksheet = XLSX.utils.json_to_sheet(data, {
			header: Object.keys(headers),
			skipHeader: false,
		});
		// Set the widths for each column
		worksheet["!cols"] = Object.keys(maxWidths).map((key) => ({
			wch: maxWidths[key] + 2 // +2 for a little extra padding
		}));
		const workbook = XLSX.utils.book_new();
		XLSX.utils.book_append_sheet(workbook, worksheet, "Data"); ``
		// Export the workbook to a .xlsx file
		XLSX.writeFile(workbook, "Serm.xlsx");
	} catch (error) {
		console.error("Error downloading data: ", error);
	}
};

</script>

<style>
body {
	background-color: #2a3b63;
}

.logo {
	padding: 10%;
	height: 3em;
}

h1 {
	text-align: center;
	color: #4caf50;
	font-size: 18px;
}

h2 {
	color: white;
	font-size: 16px;
}

.english {
	color: cyan;
}

.container {
	background-color: #2a3b63;
	color: white;
	padding: 5% 0;
	width: 75%;
	margin: auto;
}

.btn-next {
	width: 100%;
	background-color: green;
	color: white;
	padding: 20px 20px;
	margin-top: 20%;
	border: none;
	border-radius: 5px;
	cursor: pointer;
}


.btn-fin {
	width: 100%;
	background-color: #4c4faf;
	color: white;
	padding: 20px 20px;
	margin-top: 5%;
	border: none;
	border-radius: 5px;
	cursor: pointer;
}

.btn-return {
	width: 100%;
	background-color: #898989;
	color: white;
	padding: 20px 20px;
	margin-top: 5%;
	border: none;
	border-radius: 5px;
	cursor: pointer;
}

.btn-return:hover {
	background-color: #839684;
}

.commune-dropdown {
	/* Style your dropdown list here */
	list-style-type: none;
	padding: 0;
	margin: 0;
	border: 1px solid #ccc;
	border-radius: 4px;
	max-height: 200px;
	overflow-y: auto;
}

.form-control {
	width: 100%;
	border-radius: 5px;
	border: 1px solid white;
	background-color: #333;
	color: white;
	text-transform: uppercase;
	font-weight: bolder;
}

input.form-control {
	width: 93%;
}

.commune-dropdown li {
	padding: 5px 10px;
	cursor: pointer;
}

*:focus {
	outline: none;
}

.commune-dropdown li:hover {
	background-color: #f0f0f0;
}

input,
select,
button {
	font-size: 16px;
	padding: 10px;
}
</style>

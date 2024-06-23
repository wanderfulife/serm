const q3 = [
	{ id: 1, output: 1, text: "Montèe" },
	{ id: 2, output: 2, text: "Descente" },
];

const motif = [
	{ id: 1, output: 1, text: "Votre domicile" },
	{ id: 2, output: 2, text: "Votre lieu de travail habituel" },
	{ id: 3, output: 3, text: "Un lieu de rendez-vous professionnel" },
	{ id: 4, output: 4, text: "Votre établissement scolaire, université" },
	{ id: 5, output: 5, text: "Un lieu d'achats, courses, …" },
	{ id: 6, output: 6, text: "Un rendez-vous administratif, médical" },
	{ id: 7, output: 7, text: "Un lieu de loisirs" },
	{ id: 8, output: 8, text: "Autre préciser" },
];

const mode = [
	{ id: 1, output: 1, text: "à pied exclusivement" },
	{ id: 2, output: 2, text: "en bus/car" },
	{ id: 3, output: 3, text: "en voiture conducteur" },
	{
		id: 4,
		output: 4,
		text: "en voiture passager (dans une voiture stationnée en gare - covoiturage)",
	},
	{
		id: 5,
		output: 5,
		text: "en voiture passager (dans une voiture non stationnée en gare - dépose)",
	},
	{ id: 6, output: 6, text: "en vélo" },
	{ id: 7, output: 7, text: "en deux-roues motorisés" },
	{ id: 8, output: 8, text: "en train" },
	{ id: 9, output: 9, text: "Autre : Précisez" },
];

const frequence = [
	{ id: 1, output: 1, text: "Tous les jours de la semaine" },
	{ id: 2, output: 2, text: "Tous les jours sauf le week-end" },
	{ id: 3, output: 3, text: "2/3 fois par semaine" },
	{ id: 4, output: 4, text: "1 fois par semaine" },
	{ id: 5, output: 5, text: "1 fois par mois" },
	{ id: 6, output: 6, text: "Moins d'une fois par mois" },
	{ id: 7, output: 7, text: "Rarement" },
	{ id: 8, output: 8, text: "Autre préciser" },
];

const titre = [
	{
		id: 1,
		output: 1,
		text: "Abonnement de train TER (Rémi ou Aléop)",
	},
	{ id: 2, output: 2, text: "Abonnement TGV" },
	{ id: 3, output: 3, text: "Abonnement de car Rémi" },
	{ id: 4, output: 4, text: "Abonnement de transport urbain" },
	{ id: 5, output: 5, text: "Autres abonnements" },
	{ id: 6, output: 6, text: "Billet de train Rémi (avec ou sans réduction)" },
	{
		id: 7,
		output: 7,
		text: "Billet de car Rémi (avec ou sans réduction) ou carnet de 10 voyages",
	},
	{
		id: 8,
		output: 8,
		text: "Ticket de transport urbain ou carte 10 voyages urbain",
	},
	{ id: 9, output: 9, text: "Autres titres" },
	{ id: 10, output: 10, text: "Pas de titre" },
];

const support = [
	{ id: 1, output: 1, text: "Carte billettique JVMalin" },
	{ id: 2, output: 2, text: "Support papier" },
	{ id: 3, output: 3, text: "Application/téléphone" },
	{ id: 4, output: 4, text: "Autre" },
];


export { q3, motif, mode, frequence, titre, support };

Donations = new Mongo.Collection("donations");

Donations.attachSchema({
	amount: {
		type: Number,
		label: "Donation amount"
	}
})
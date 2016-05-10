NeedTypes = new Mongo.Collection("needTypes");

NeedTypes.attachSchema({
	title: {
		type: String,
		label: "Need Type Title"
	}
})
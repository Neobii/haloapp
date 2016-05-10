Donations = new Mongo.Collection("donations");

Donations.helpers({
  user() {
    return Meteor.users.findOne({_id: this.userId});
  },
  need() {
    return Needs.findOne({_id: this.needId});
  }
})

Donations.attachSchema({
	amount: {
		type: Number,
		label: "Donation amount"
	},
  needId: {
    type: String,
    label: "Need Id",
    autoform: {
      options(){
        let n = Needs.find({});
        return [];
      }
    }
  },
  userId: {
    type: String,
    label: "User Id",
    autoValue() {
      if(this.isInsert){
        return this.userId || "test";
      }
    }
  }
})
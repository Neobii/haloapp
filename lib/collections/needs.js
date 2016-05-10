Needs = new Mongo.Collection("needs");

Needs.helpers({
  percentFunded() {
    let totalDonationAmount = 100;
    return (totalDonationAmount / this.needAmount) * 100;
  },
  prettifyDate() {
    //put date formatting in
    return this.date;
  },
  needType() {
    return NeedTypes.findOne({_id: this.needTypeId})
  },
  user() {
    return Meteor.users.findOne({_id: this.userId});
  }
})

Needs.attachSchema(new SimpleSchema({
  needAmount: {
  	type: Number,
  	label:"Need Amount",
  	min:1
  },
  title: {
  	type: String,
  	label:"Title",
  	max:100
  },
  date: {
  	type: Date,
  	label:"date",
    autoValue() {
      if(this.isInsert){
        return new Date();
      }
    }
  },
  description: {
  	type: String,
  	label:"Description",
  	max:150
  },
  userId: {
    type:String,
    label:"User Id",
    autoValue() {
      if(this.isInsert){
        return this.userId;
      }
    },
    optional: true
  },
  needTypeId: {
    type: String,
    label: "NeedType",
    autoform: {
      options() {
        let ntOptions = [];
        NeedTypes.find({}).forEach(function(nt){
          //console.log(nt.title);
          ntOptions.push({label: nt.title, value: nt._id});
        })
        return ntOptions;
      }
    }
  }
}));
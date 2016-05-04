Needs = new Mongo.Collection("needs");

Needs.attachSchema(new SimpleSchema({
     needAmount:{
    	type:Number,
    	label:"Need Amount",
    	min:1
  },
     title:{
    	type:String,
    	label:"Title",
    	max:100
  },
     date:{
    	type:Number,
    	label:"date",
    	optional:true
  },
  description:{
    	type:String,
    	label:"Description",
    	max:150
  },
  userId:{
      type:String,
      label:"Names"
  }
}));
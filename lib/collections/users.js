UserSchema = {};

DonorSchema = new SimpleSchema({
  needTypeId: {
    type: String,
    label: "Hardship type"
  }
});

RecipientSchemaPage1 = new SimpleSchema({
  creditCardInfo: {
    type: String,
    label: "CC INFO"
  }
})

GeneralProfileSignup = new SimpleSchema({
  gender: {
    type: String,
    label: "Gender",
    autoform: {
      options: function(){
        return [{label: "Male", value: "m"},{label: "Female", value: "f"}];
      }
    },
    optional: true
  },
  children: {
    type: [Object],
    type: "children"
  },
  "children.$.age": {
    type: Number,
    type: "child age"
  },
  ethnicity: {
    type: String,
    label: "Ethnicity",
    autoform: {
      options: function(){
        return [
          {label: "Caucasian", value:"Caucasian"},
          {label: "AfricanAmerican", value: "African-American"},
          {label: "Hispanic", value:"Hispanic"}
        ];
      },
    },
  },
  howDidYouHearAboutUs: {
    type: String,
    autoform: {
      options: function(){
        return [
          {label: "aPerson", value: "A Person"},
          {label: "internet", value: "Internet"}, 
          {label: "phoneCall", value: "phoneCall"}
        ];
      },
    }
  },
  country: {
    type: String,
    autoform: {
      options: function(){
        return [
          {label: "unitedStates", value: "United States"},
          {label: "canada", value: "Canada"},
          {label: "mexico", value: "Mexico"}
        ];
      },
    }
  },
  state: {
    type: String,
    autoform: {
      options: function(){
        return [
         {label: "texas", value: "Texas"},
         {label: "utah", value: "Utah"}
         {label: "colorado", value: "Colorado"}
        ];
      },
    }
  },
  city: {
    type: String,
    autoform: {
      options: function(){
        return [
        {label: "newYork", value: "New York"},
        {label: "austin", value: "Austin"},
        {label: "dallas", value: "Dallas"}
        ];
      },
    }
  },
  ageRange: {
    type: [String]
    label: "ageRange",
    autoform: {
      options: function(){
        return [
        {label: "All", value: "All"},
        {label: "18-24", value: "18-24"},
        {label: "25-34", value: "25-34"},
        {label: "35-44", value: "35-44"},
        {label: "45-54", value: "45-54"},
        {label: "55-64", value: "55-64"},
        {label: "65-74", value: "65-74"},
        {label: "75+", value: "75+"},
        ];
      },
    }
  },
}) 

RecipientSchema = new SimpleSchema([RecipientSchemaPage1, RecipientSchemaPage2]);

UserSchema.profile = new SimpleSchema([GeneralProfileSignup, {
  profilePicId: {
    type: String,
    label: "Profile Pic",
    autoform:{
      afFieldInput: {
        type: 'fileUpload',
        collection: 'Images',
        label: 'Choose file'
      }
    },
    optional: true
  },
  bio: {
    type: String,
    label: "My Bio",
    optional: true
  },

}]);

UserSchema.user = new SimpleSchema({
  profile: {
    type: UserSchema.profile,
    defaultValue: {}
  },
  isModerator: {
    type: Boolean,
    label: "User is a moderator",
    defaultValue: false
  },
  isApproved: {
    type: Boolean,
    label: "User is approved",
    defaultValue: false
  },
  userType: {
  	type: String,
  	label: "User Type",
    optional: true
  },
  donorProfile: {
  	type: DonorSchema,
  	label: "Donor Profile",
  	optional: true
  },
  recipientProfile: {
  	type: RecipientSchema,
  	label: "Recipent Profile",
  	optional: true
  },
  emails: {
      type: [Object],
      // this must be optional if you also use other login services like facebook,
      // but if you use only accounts-password, then it can be required
      optional: true
  },
  "emails.$.address": {
      type: String,
      regEx: SimpleSchema.RegEx.Email
  },
  "emails.$.verified": {
      type: Boolean
  },
  createdAt: {
    type: Date
  },
  roles: {
    type: [Object],
    optional: true,
    blackbox: true
  },
  username: {
    type: String,
    label: "Username",
    optional: true
  },
  services: {
    type: Object,
    optional: true,
    blackbox: true
  },
  status: {
  	type: Object,
    optional: true,
  	blackbox: true
  }
});

Meteor.users.attachSchema(UserSchema.user);
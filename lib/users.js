UserSchema = {};

DonorSchema = new SimpleSchema({});

RecipientSchema = new SimpleSchema({});

UserSchema.profile = new SimpleSchema({
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
});

UserSchema.user = new SimpleSchema({
  profile: {
    type: UserSchema.profile,
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
  	label: "User Type"
  },
  donorProfile: {
  	type: DonorSchema,
  	label: "Donor Profile",
  	optional: true
  },
  donorProfile: {
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
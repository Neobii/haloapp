recipientRegistration = new Mongo.Collection("recipientRegistration")



Template.recipientRegisterView.helpers({
  steps: function() {
    return [{
      id: 'firstName',
      title: '*First Name',
      schema: UserFormPage1,
      formId: "insrt-contact"
    }, {
      id: 'lastName',
      title: '*Last Name',
      schema: UserFormPage1,
      formId: "insrt-contact"
    },  {
      id: 'Address',
      title: '*Address',
      schema: UserFormPage1,
      formId: "insert-contact"
    }, {
      id: 'City',
      title: 'Values',
      schema: UserFormPage1,
      formId: "*City"
    }, {
      id: 'State',
      title: '*State',
      schema: UserFormPage1,
      formId: "State"
    }, {
      id: 'Zip Code',
      title: '*Zip Code',
      schema: UserFormPage1,
      formId: "Values"
    }, {
    id: 'Country',
      title: '*Country',
      schema: UserFormPage1,
      formId: "Country"
    }, {
    id: 'PrimaryPhone',
      title: '*PrimaryPhone',
      schema: UserFormPage1,
      formId: "Value"
    }, {
    id: 'Email',
      title: '*Email',
      schema: UserFormPage1,
      formId: "Email"
    },{
    id: 'Date of Birth',
      title: 'Date of Birth',
      schema: UserFormPage2,
      formId: "Value"
    },{
    id: 'Marital Status',
      title: 'Marital Status',
      schema: UserFormPage2,
      formId: "Marital Status"
    },{
    id: 'Number of Children',
      title: '*Number of Children',
      schema: UserFormPage2,
      formId: "insert-number"
    },{
    id: 'Their ages',
      title: '*Their ages',
      schema: UserFormPage1,
      formId: "age-number"
    },{
    id: 'Ethnicity',
      title: '*Ethnicity',
      schema: UserFormPage2,
      formId: "Ethnicity"
    },{
    id: 'How did you hear about us?',
      title: '*Email',
      schema: UserFormPage2,
      formId: "Email"
    },{
    id: 'Hardship Type',
      title: '*Hardship Type',
      schema: UserFormPage3,
      formId: "Hardship Type"
    },{
    id: 'Country',
      title: '*Country',
      schema: UserFormPage3,
      formId: "Value"
    },{
    id: 'State',
      title: '*State',
      schema: UserFormPage3,
      formId: "State"
    },{
    id: 'City',
      title: '*City',
      schema: UserFormPage3,
      formId: "City"
    },{
    id: 'Age Range',
      title: '*Age Range',
      schema: UserFormPage3,
      formId: "Value"
    },{
    id: 'Marital Status',
      title: '*Marital Status',
      schema: UserFormPage3,
      formId: "Marital Status"
    },{
    id: 'Gender',
      title: '*Gender',
      schema: UserFormPage3,
      formId: "Gender"
    },{
    id: 'Children',
      title: '*Children',
      schema: UserFormPage1,
      formId: "Children"
    },{
    id: 'Dollar Amount',
      title: '*Dollar Amount',
      schema: UserFormPage1,
      formId: "insert-number"
    },{
  }
     ]
}});
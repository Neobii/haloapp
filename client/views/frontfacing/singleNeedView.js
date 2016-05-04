Template.singleNeedView.helpers({
	getNeed() {
		return Needs.findOne({_id: FlowRouter && FlowRouter.getParam("_id")});
	}
})
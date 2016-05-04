/*Template.slideNav.events({
	
});*/

Template.slideNav.helpers({
	navIsOpen() {
		return (Session.get("sideNavOpen"))?"transform: translateX(0px);":"";
	}
})

Template.slideNav.events({
	"click [data-action='close-nav']"() {
		Session.set("sideNavOpen", false)
	}
})
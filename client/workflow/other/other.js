 Template.other.rendered = function(){
        $("#tti").hide();
       /*"click #ttiLabel" : function(e,t){

    $("#tti").toggle();
  }
  */ 
 };


Template.other.events({
	
  "click #ttiLabel":function(event, template){

    template.$("#tti").toggle();
  }
});


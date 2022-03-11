
// Immediately-Invoked Function expression
(function() {
    //backbone dev model
    var Dev = Backbone.Model.extend({
        idAttribute: "devId",
        validate: function(attrs) {
            if (!attrs.name)
                return "The developer must have a name set";
            if (!attrs.job_title)
                return "The developer must have a job title, or n/a";
            if (!attrs.company)
                return "value expected, even if unemployed";
        }
    });
    
    //backbone dev collection
    var Devs = Backbone.Collection.extend({
        model: dev
    });
    
    //two devs on this project
    
    devs.add(new Dev({
        name: "Bryce Martin",
        job_title: "Web Developer",
        company: "TTP Solutions"
    }));
    
    devs.add(new Dev({
        name: "Nick Ehrhart",
        job_title: "Web Developer",
        company: "TTP Solutions"
    }));
})();

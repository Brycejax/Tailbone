
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
        model: Dev
    });
    
    //two devs on this project
    
    var developers = new Devs([
        new Dev ({
            name:"Bryce Martin",
            job_title: "Web Developer",
            company: "TTP Solutions"
        }),
        new Dev ({
            name: "Nick Ehrhart",
            job_title: "Web Developer",
            company: "TTP Solutions"
        })
    ]);

    //dev view
    var DevView = Backbone.View.extend({
        render: function() {
            var template = _.template($("#devTemplate").html())
            var html = template(this.model.toJSON());
            this.$el.html(html);

            return this;
        }
    });

    var DevsView = Backbone.View.extend({
        render: function() {
            var self = this;
            this.model.each(function(dev) {
                var devview = new DevView({model: dev});
                self.$el.append(devview.render().$el)
            });
        }
    });

    var template = new DevsView({ el: ".container", model: developers });
    template.render();
})();

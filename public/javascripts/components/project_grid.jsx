var React = require('react');

ProjectGrid = React.createClass({

  getInitialState: function(){
    return {
      projectIdeas: [{
        name: "Project One",
        icon: "fa fa-bar-chart fa-5x fa-border",
        isFirstinRow: true
      }]
    }
  },

  render: function() {
    var ideas = this.state.projectIdeas.map(function(idea, index) {
      openRow = closeRow = null;
      if (idea.isFirstinRow) {
        // These needs to be a new react class
        openRow = <div className="row">
        closeRow = </div>
      }

      return (
        <div className="col-md-4">
          <h3 className="text-center" key={index}>{idea.name}</h3>
          
          <div className="text-center">
            <i className={idea.icon}></i>
          </div>
        </div>
      )
    });

    return (
<div className="row">
  {ideas}
</div>
    )
  }
});


module.exports = ProjectGrid
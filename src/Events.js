var Events = {
  on: function(item, func){
    if(this.events === undefined)
      {this.events = {}};
    if(this.events[item]===undefined)
    {this.events[item] = []};
    this.events[item].push(func);
  },
  trigger: function(event){
    for (i=0; i<this.events[event].length; i+=1) {
        this.events[event][i]();
    }
  }
};

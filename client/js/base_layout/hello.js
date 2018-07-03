import { Template } from 'meteor/templating';

import './../../html/main.html';


Template.hello.helpers({

    data: function () {
      this.data = Interface.readHelloData(this.node);
      return this;
    }
  });
  
  Template.hello.events({
    'click .btn-1'() {
    Interface.doSomething()
    },
  });
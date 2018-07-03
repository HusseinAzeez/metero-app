Interface = (function Interface() {
    var frontend_tracker = new Tracker.Dependency;
    var frontend_data = 'initial data';
    var _readHelloData = function () {
        frontend_tracker.depend();
        // alert('This is a lot of data!');
        return frontend_data;
    };

    var _doSomething = function () {
        Meteor.call("doSomething", function (error, result) {
           frontend_data = result
            frontend_tracker.changed()
          });
    };
    
    return {
        readHelloData: _readHelloData,
        doSomething: _doSomething
    }
})();
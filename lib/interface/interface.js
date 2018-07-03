Interface = (function Interface() {
    let frontend_tracker = new Tracker.Dependency;
    let frontend_data = 'Initial Data';

    let _readHelloData = function () {
        frontend_tracker.depend();
        return frontend_data;
    };

    let _doSomething = function () {
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
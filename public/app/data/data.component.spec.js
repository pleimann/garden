/* tslint:disable:no-unused-variable */
System.register(['@angular/core/testing', './data.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var testing_1, data_component_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (data_component_1_1) {
                data_component_1 = data_component_1_1;
            }],
        execute: function() {
            testing_1.describe('Component: Data', function () {
                testing_1.it('should create an instance', function () {
                    var component = new data_component_1.DataComponent();
                    testing_1.expect(component).toBeTruthy();
                });
            });
        }
    }
});
//# sourceMappingURL=/app/data/data.component.spec.js.map
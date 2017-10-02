(function(){
    var app = angular.module('store-directives', []);

    
    app.directive("productTabs", function() {
      return {
        restrict: "E",
        templateUrl: "gemas-tabs.html",
        controller: function() {
          this.tab = 1;

          this.isSet = function(checkTab) {
            return this.tab === checkTab;
          };

          this.setTab = function(activeTab) {
            this.tab = activeTab;
          };
        },
        controllerAs: "tab"
      };
    });

    
  })();
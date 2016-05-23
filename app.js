var CodeTest = angular.module('CodeTest', []);

CodeTest.controller('CodeTestCtrl', [ function () {
	var vm = this;
	vm.list = [];
	

	vm.count = function(repeat) {
		for(i =1; i<=repeat; i++) {
			if((i%3 === 0) && (i%5 === 0)) {
				vm.list.push("CameronSean");
			}
			else if (i%3 === 0) {
				vm.list.push("Cameron");
			}
			else if (i%5 === 0) {
				vm.list.push("Sean");
			}
			else {
				vm.list.push(i);
			}
		}
	};
	activate = function() {
		vm.count(100)
	}
	activate();
	
	console.log(vm.list);
}]);
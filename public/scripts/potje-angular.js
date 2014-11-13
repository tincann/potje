//potje-angular
angular.module('potjeApp', [])
  .controller('PotjeController', ['$scope', function($scope) {
    $scope.People = [
      // {id:"0",text:'Henk de Vries', status:false},
      // {id:"1",text:'Dirk Thierens', status:false}
  	];
 	
 	$scope.nameText ='';

  $scope.addPerson = function() {
    $scope.nameText = $('#addPersonField').val();
    if($scope.nameText!='') {
    	$scope.People.push({id:$scope.People.length+1,text:$scope.nameText, accountNumber:false});
    	$scope.nameText = '';
    	$('#addPersonButton').removeClass('btn-primary');
    } 
    // else {
    	// toastr.error("Je moet een naam invullen voordat je een persoon kan toevoegen");
    // }
  };

  $scope.remaining = function() {
    var count = 0;
    angular.forEach($scope.People, function(todo) {
      count += todo.done ? 0 : 1;
    });
    return count;
  };

  $scope.archive = function() {
    var oldPeople = $scope.People;
    $scope.People = [];
    angular.forEach(oldTodos, function(todo) {
      if (!todo.done) $scope.todos.push(todo);
    });
  };


}]);
//potje-angular
angular.module('potjeApp', [])
  .controller('PotjeController', ['$scope', function($scope) {
    $scope.People = [
      {text:'Henk de Vries', status:false},
      {text:'Dirk Thierens', status:false}];
 
    $scope.addTodo = function() {
      $scope.People.push({text:$scope.todoText, accountNumber:false});
      $scope.todoText = '';
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
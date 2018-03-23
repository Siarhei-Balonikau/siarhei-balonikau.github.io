var app = angular.module('toDoApp', ['ngRoute', 'ngResource']);

app.config(function ($routeProvider) {   
    $routeProvider.when('/', {
        templateUrl: './todo.html',
        controller: 'routingController'
    }).when('/add', {
        templateUrl: './addTodo.html',
        controller: 'routingController'
    }).when('/edit/:task', {
        templateUrl: './editTodo.html',
        controller: 'routingController'
    }).otherwise({
        redirectTo: "/"
    });
});

app.factory("todoFactory", function($resource){
    return $resource('./todo.json', {}, {
      'query': { method: 'GET', isArray:true }
    });
});

app.factory("todoControlFactory", function(todoFactory){
    var taskList = [];
    
    return {
        getTasks: function getTasks() {
             return taskList;
        },
        
        addTasks: function addTask(tasks){
            var result = taskList.concat(tasks); 
            for (var i = 0; i < result.length; i++) {
              taskList.push(result[i]);
            }
        },
        
        addTask: function addTask(text){
            taskList.push(
              {
                name: text,
                date: new Date(),
                done: false
              }
            );
        },
        
        removeTask: function removeTask(task){
            taskList.splice(taskList.indexOf(task), 1)
        },
        
        doneTask: function doneTask(task){
            taskList[taskList.indexOf(task)].done = true;
        },
        
        changeTaskName: function changeTaskName(task, name){
            taskList[taskList.indexOf(task)].name = name;
        },
    };
});

app.factory("filterFactory", function(){
    var filters = {
      lastDays: 0,
      letter: '',
      date: ''
    };
    
    return {
        getLastDays: function getLastDays() {
          return filters.lastDays;
        },
        
        setLastDays: function setLastDays(days) {
          filters.lastDays = days;
        },
        
        getLetter: function getLetter() {
          return filters.letter;
        },
        
        setLetter: function setLetter(letter) {
          filters.letter = letter;
        },
        
        getDate: function getDate() {
          return filters.date;
        },
        
        setDate: function setDate(date) {
          filters.date = date;
        },
    };
});

app.controller("routingController", function ($scope, $routeParams, $location) {
    $scope.changingTask = $routeParams.task;
});

app.controller('toDoController', ['$scope', 'todoControlFactory', 'todoFactory', 'filterFactory', function ($scope, todoControlFactory, todoFactory, filterFactory) {
    $scope.tasks = todoControlFactory.getTasks();
    
    var tasksPromise = todoFactory.query();
    tasksPromise.$promise.then(function(data) {
      todoControlFactory.addTasks(data);
    });
  
    $scope.filterLastDays = filterFactory.getLastDays();
    $scope.filterLetter = filterFactory.getLetter();
    $scope.filterDate = filterFactory.getDate();
    $scope.newTaskName = '';
    $scope.changingTask;

    $scope.doneTask = function (task) {
        todoControlFactory.doneTask(task);
    };

    $scope.removeTask = function (task) {
        todoControlFactory.removeTask(task);
    }
    
    $scope.setLastDays = function () {
        filterFactory.setLastDays($scope.filterLastDays);
    };
    
    $scope.setLetter = function () {
        if ($scope.filterLetter.length > 1) {
          $scope.filterLetter = $scope.filterLetter.slice(-1);
        }
        
        filterFactory.setLetter($scope.filterLetter);
    };
    
    $scope.setDate = function () {
        filterFactory.setDate($scope.filterDate);
    };
}]);

app.controller('toDoAddController', ['$scope', 'todoFactory', 'todoControlFactory', function ($scope, todoFactory, todoControlFactory) {
    $scope.addTask = function () {
        todoControlFactory.addTask($scope.newTaskName)
        $scope.newTaskName = '';
    };
}]);

app.controller('toDoChangeController', ['$scope', 'todoControlFactory', function ($scope, todoControlFactory) {
  $scope.tasks = todoControlFactory.getTasks();
  var changingTask;
  $scope.tasks.forEach(function(values, item){
    if (values.id == $scope.changingTask) {
      changingTask = values;
    }
  });
  $scope.changeName = changingTask.name;

  $scope.changeTaskName = function () {
      todoControlFactory.changeTaskName(changingTask, $scope.changeName);
  };
}]);

app.filter('filterByLastDays', function () {
  return function (items, filter) {
    if (filter != 0) {
      var filtered = [];
      var filterLastDays = new Date();
      filterLastDays.setDate(filterLastDays.getDate()-filter);
      
      for (var i = 0; i < items.length; i++) {
        if (new Date(items[i].date) > filterLastDays) {
          filtered.push(items[i]);
        }
      }
      return filtered;
    } else {
      return items;
    }
  };
});

app.filter('filterByLetter', function () {
  return function (items, filter) {
    if (filter.length > 0) {
      var filtered = [];
      
      for (var i = 0; i < items.length; i++) {
        if (items[i].name.indexOf(filter.toUpperCase(), 0) !== -1) {
          filtered.push(items[i]);
        }
      }
      
      return filtered;
    }
    
    return items;
  };
});

app.filter('filterByDate', function () {
  return function (items, filter) {
    if (filter) {
      var filtered = [];
      var filterDate = new Date(filter);
      filterDate.setHours(0, 0, 0, 0);
      
      for (var i = 0; i < items.length; i++) {
        var currentDate = new Date(items[i].date);
        currentDate.setHours(0, 0, 0, 0);

        if (currentDate.getTime() === filterDate.getTime()) {
          filtered.push(items[i]);
        }
      }
      
      return filtered;
    }
    
    return items;
  };
});
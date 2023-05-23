// script.js

// Define the 'cookieMonster' module and inject the 'ngCookies' dependency
angular.module('cookieMonster', ['ngCookies']);

// Controller for the 'proj1create.html' page
angular.module('cookieMonster').controller('CreateController', function($scope, $cookies, $window) {
  $scope.submitForm = function() {
    // Retrieve form data
    var firstName = $scope.firstName;
    var lastName = $scope.lastName;
    var email = $scope.email;
    var password = $scope.password;
    var address1 = $scope.address1;
    var city = $scope.city;
    var state = $scope.state;

    // Store form data in cookies
    $cookies.put('firstName', firstName);
    $cookies.put('lastName', lastName);
    $cookies.put('email', email);
    $cookies.put('password', password);
    $cookies.put('address1', address1);
    $cookies.put('city', city);
    $cookies.put('state', state);

    // Redirect to the account details page
    $window.location.href = 'proj1accountdetails.html';
  };
});

// Controller for the 'proj1accountdetails.html' page
angular.module('cookieMonster').controller('AccountDetailsController', function($scope, $cookies) {
  $scope.firstName = $cookies.get('firstName');
  $scope.lastName = $cookies.get('lastName');
  $scope.email = $cookies.get('email');
  $scope.password = $cookies.get('password');
  $scope.address1 = $cookies.get('address1');
  $scope.city = $cookies.get('city');
  $scope.state = $cookies.get('state');
});

// Controller for the 'authentication.html' page
angular.module('cookieMonster').controller('AuthenticationController', function($scope, $window, $cookies) {
  $scope.login = function() {
    // Retrieve the entered email and password
    var enteredEmail = $scope.email;
    var enteredPassword = $scope.password;

    // Retrieve the stored email and password from cookies
    var storedEmail = $cookies.get('email');
    var storedPassword = $cookies.get('password');

    // Compare the entered and stored credentials
    if (enteredEmail === storedEmail && enteredPassword === storedPassword) {
      // Redirect the user to the account details page upon successful login
      $window.location.href = 'proj1accountdetails.html';
    } else {
      // Display login failed message
      $scope.loginFailed = true;
    }
  };
});

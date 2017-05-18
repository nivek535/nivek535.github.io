var app = angular.module('personalPage', []);

app.controller('ChernController', ['$scope', '$anchorScroll', '$location', function($scope, $anchorScroll, $location) {
  
  $scope.displayVideo = 'false';
  $scope.displayPhoto = 'false';
  
  $scope.homePage = 'true';
  $scope.theCorner = 'false';
  $scope.thirtyFiveMM = 'false';
  $scope.twentyFourP = 'false';
  $scope.etc = 'false';

  $scope.videos = [
    'https://www.youtube.com/embed/EEC0kCHrRho',
    'https://www.youtube.com/embed/YJ0I4KZpimY',
    'https://www.youtube.com/embed/my4E6gpGqio',
    'https://www.youtube.com/embed/uo8rNcr55Bg'
  ]
  
  $scope.images = [
  'http://res.cloudinary.com/ddthkwohq/image/upload/e_grayscale/v1492580869/DSC05995_mo90a5.jpg',
  'http://res.cloudinary.com/ddthkwohq/image/upload/e_grayscale/v1492580901/DSC05139_wkf4gw.jpg',
  'http://res.cloudinary.com/ddthkwohq/image/upload/e_grayscale/v1492580891/DSC06007_j5ukqw.jpg'
  ];
  
  $scope.currVideo;
  $scope.currImage;
  
  $scope.setCurrentImage = function(location){
    console.log('in here');
    $scope.displayPhoto = 'true';
    $scope.currImage = $scope.images[location];
  }
  
  $scope.setCurrentVideo = function(link){
    $scope.currVideo = 'https://www.youtube.com/embed/EEC0kCHrRho';
    document.getElementById('myIframe').src = $scope.videos[link];
  }
  
  $scope.endImage = function(){
    $scope.displayPhoto = 'false';
  }

  $scope.endVideo = function(){
    $scope.changeDisplayVideo('false');
    document.getElementById('myIframe').src = '';
  }
  
  // $scope.scroll = function(location){
  //   $location.hash(location);
  //   $anchorScroll.yOffset = 100;
  //   $anchorScroll();
  // };
  $scope.endImage = function(){
     $scope.scroll('thirtyFiveMM');
  }
  
  $scope.scroll = function(location){
    $location.hash(location);
    $anchorScroll();
    
    switch(location){
      case 'theCorner':
         $scope.homePage = 'false';
         $scope.theCorner = 'true';
         $scope.thirtyFiveMM = 'false';
         $scope.twentyFourP = 'false';
         $scope.etc = 'false';
        break;
      case 'thirtyFiveMM':
         $scope.homePage = 'false';
         $scope.theCorner = 'false';
         $scope.thirtyFiveMM = 'true';
         $scope.twentyFourP = 'false';
         $scope.etc = 'false';
        break;
      case 'twentyFourP':
         $scope.homePage = 'false';
         $scope.theCorner = 'false';
         $scope.thirtyFiveMM = 'false';
         $scope.twentyFourP = 'true';
         $scope.etc = 'false';
        break;
       case 'etcClass':
         $scope.homePage = 'false';
         $scope.theCorner = 'false';
         $scope.thirtyFiveMM = 'false';
         $scope.twentyFourP = 'false';
         $scope.etc = 'true';
        break;
        case 'homePage':
         $scope.homePage = 'true';
         $scope.theCorner = 'false';
         $scope.thirtyFiveMM = 'false';
         $scope.twentyFourP = 'false';
         $scope.etc = 'false';
        break;
     }
    
    
  };
  
  $scope.changeDisplayVideo = function(parameter){
    $scope.displayVideo = parameter;
  };
  
}]);
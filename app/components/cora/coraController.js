webApp.controller('coraController', ['$scope', 'localStorageService', function($scope, localStorageService) {
    $scope.header = 'Cora Cam';
    $scope.message = 'Baby Cora nursery cam';
    $scope.pageClass = 'cora-home';
    
    
    $scope.video = angular.element($(".img-stream"))[0];
    $scope.settings = {};
    $scope.settings.videoOrientation = 0;
    saveSettings();
    
    $scope.fullscreen = function() {
        if (screenfull.enabled) {
            screenfull.request($scope.video);
        }
    };
    
    $scope.rotate = function(change) {
        $scope.settings.videoOrientation += change;
        
        if ($scope.settings.videoOrientation < 0)
            $scope.settings.videoOrientation = 3;
        else if ($scope.settings.videoOrientation > 3)
            $scope.settings.videoOrientation = 0;

        setOrientation($scope.settings.videoOrientation);
        saveSettings();
    }

    function setOrientation(orientation) {
        $($scope.video).removeClass('rotate90').removeClass('rotate180').removeClass('rotate270');
        if (orientation === 1)
            $($scope.video).addClass('rotate90');
        else if (orientation === 2)
            $($scope.video).addClass('rotate180');
        else if (orientation === 3)
            $($scope.video).addClass('rotate270');
    }

    function saveSettings() {
        var settingsJson = angular.toJson($scope.settings);
        localStorageService.set('coraSettings', settingsJson);
    }

    function loadSettings() {
        $scope.settings = angular.fromJson(localStorageService.get('coraSettings'));

        setOrientation($scope.settings.videoOrientation);
    }

    loadSettings();
}]);

webApp.directive('mjpegstream', function() {
    return function(scope, element, attrs) {
        
        element.bind('load', function(e) {
            var _this = this;
            $(this).parent().prev('.error').hide();
            $('.stream_container').show();
            
            //Reload image every 100 ms
            /*setTimeout(function() {
                    _this.src = _this.src.substring(0, (_this.src.lastIndexOf("t=")+2))+(new Date()).getTime()
                }, 10)*/
                
        });
        
        element.bind("error" , function(e) { 
            var _this = this;
            
            $(this).parent().prev('.error').show();
            $('.stream_container').hide();
            
            //Retry on error every 5 seconds
            setTimeout(function() {
                    _this.src = _this.src.substring(0, (_this.src.lastIndexOf("t=")+2))+(new Date()).getTime()
                }, 5000);
                
        });
    }
});
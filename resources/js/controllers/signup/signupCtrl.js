'use strict';

// register controller
app.controller('signupCtrl', ["$scope","$rootScope",'$state','$auth','$localStorage','sweetalert',
    function ($scope,$rootScope,$state,$auth,$localStorage,sweetalert) {
        $scope.error = false;
        $scope.proceed = false;
        $scope.user = {};
    
    }]);

app.directive('pwCheck', [function () {
    return {
      require: 'ngModel',
      link: function (scope, elem, attrs, ctrl) {
        var firstPassword = '#' + attrs.pwCheck;
        elem.add(firstPassword).on('keyup', function () {
          scope.$apply(function () {
              if(elem.val()===$(firstPassword).val()){
                  scope.proceed = true;
                  scope.error = false;
              }else{
                  scope.error = true;
                  scope.proceed = false;
              }
//            var v = elem.val()===$(firstPassword).val();
//            ctrl.$setValidity('pwmatch', v);
          });
        });
      }
    };
  }]);
  app.directive('registerform', [function () {
    return {
      restrict: "A",
      link: function (scope, elem, attrs) {
        //jQuery time
        var current_fs, next_fs, previous_fs; //fieldsets
        var left, opacity, scale; //fieldset properties which we will animate
        var animating; //flag to prevent quick multi-click glitches
    
        $(".next").click(function(){
            if(animating) return false;
            animating = true;	
            current_fs = $(this).parent();
            next_fs = $(this).parent().next();
	
            //activate next step on progressbar using the index of next_fs
            $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
	
            //show the next fieldset
            next_fs.show(); 
            //hide the current fieldset with style   
            current_fs.animate({opacity: 0}, {
             step: function(now, mx) {
                    //as the opacity of current_fs reduces to 0 - stored in "now"
                    //1. scale current_fs down to 80%
                    scale = 1 - (1 - now) * 0.2;
                    //2. bring next_fs from the right(50%)
                    left = (now * 50)+"%";
                    //3. increase opacity of next_fs to 1 as it moves in
                    opacity = 1 - now;
                    current_fs.css({
                        'transform': 'scale('+scale+')'
                      });
                    next_fs.css({'left': left, 'opacity': opacity});
		}, 
		duration: 800, 
		complete: function(){
			current_fs.hide();
			animating = false;
		},
		//this comes from the custom easing plugin
		easing: 'easeInOutBack'
            });
        });//end next
        $(".previous").click(function () {
                    if (animating)
                        return false;
                    animating = true;
                    current_fs = $(this).parent();
                    previous_fs = $(this).parent().prev();
                    //de-activate current step on progressbar
                    $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
                    //show the previous fieldset
                    previous_fs.show();
                    //hide the current fieldset with style
                    current_fs.animate({opacity: 0}, {
                        step: function (now, mx) {
                            //as the opacity of current_fs reduces to 0 - stored in "now"
                            //1. scale previous_fs from 80% to 100%
                            scale = 0.8 + (1 - now) * 0.2;
                            //2. take current_fs to the right(50%) - from 0%
                            left = ((1 - now) * 50) + "%";
                            //3. increase opacity of previous_fs to 1 as it moves in
                            opacity = 1 - now;
                            current_fs.css({'left': left});
                            previous_fs.css({'transform': 'scale(' + scale + ')', 'opacity': opacity});
                        },
                        duration: 800,
                        complete: function () {
                            current_fs.hide();
                            animating = false;
                        },
                        //this comes from the custom easing plugin
                        easing: 'easeInOutBack'
                    });
                });
      
      }
    };
  }]);
app.directive('submitform', [function () {
        return {
            restrict: "A",
            link: function (scope, elem, attrs) {
                $(".submit").click(function () {
                    return false;
                });
            }
        };
    }]);
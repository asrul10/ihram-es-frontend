angular
	.module('app', ['ui.router', 'ngclipboard'])
	.run(metaTags)
	.factory('mainService', mainService)
    .factory('packetsService', packetsService)
	.factory('jamaahService', jamaahService)
	.factory('navService', navService)
	.service('anchorSmoothScroll', smoothScroll);

function metaTags() {
	console.log("app run");
}

// var services = 'http://localhost:8080';
var services = "//" + window.location.hostname + ":" + window.location.port;

/**
 * Service Home Page
 */
function mainService($http) {
	var objServices = {};
	var content = 'home';

	objServices.getData = function(content) {
		return $http({
			method: 'GET',
			cache: true,
			url: services + '/front/data?content=' + content
		});
	};

	return objServices;
}

/**
 * Service Packets
 */
function packetsService($http) {
	var objServices = {};
	var page = 0;
	var sort = 1;
	var date = '';
	var id = null;

	objServices.getData = function(page, sort, date, id) {
		var filter = 'sort=' + sort + '&date=' + date;
		if (id) {
			filter = filter + '&id=' + id;
		}
		var url = services + '/front/packet?' + filter;
		if (page) {
			url = services + '/front/packet?page=' + page + '&' + filter;
		}

		return $http({
			method: 'GET',
			url: url
		});
	};

	return objServices;
}

function jamaahService($http) {
    var objServices = {};

    objServices.postData = function(data) {
        return $http({
            method: 'POST',
            url: services + '/front/savePotensial',
            data: data
        });
    };

    return objServices;
}

/**
 * Service Navbar
 */
function navService($http) {
	var objServices = {};
	var active = 0;

	objServices.getData = function(active) {
		var navbar = [
			{'name': 'Home', 'active': false, 'url': '/home'},
			{'name': 'Profil Biro', 'active': false, 'url': '/profile'}
		];
		navbar[active].active = true;
		return navbar;
	};

	return objServices;
}

function smoothScroll() {
    this.scrollTo = function(eID) {
        // This scrolling function 
        // is from http://www.itnewb.com/tutorial/Creating-the-Smooth-Scroll-Effect-with-JavaScript
        var startY = currentYPosition();
        var stopY = elmYPosition(eID);
        var distance = stopY > startY ? stopY - startY : startY - stopY;
        if (distance < 100) {
            scrollTo(0, stopY);
            return;
        }
        var speed = Math.round(distance / 100);
        if (speed >= 20) speed = 20;
        var step = Math.round(distance / 25);
        var leapY = stopY > startY ? startY + step : startY - step;
        var timer = 0;
        if (stopY > startY) {
            for (var i = startY; i < stopY; i += step) {
                setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
                // console.log(leapY);
                leapY += step;
                if (leapY > stopY) leapY = stopY;
                timer++;
            }
            return;
        }
        for (var j = startY; j > stopY; j -= step) {
            setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
            leapY -= step;
            if (leapY < stopY) leapY = stopY;
            timer++;
        }

        function currentYPosition() {
            // Firefox, Chrome, Opera, Safari
            if (self.pageYOffset) return self.pageYOffset;
            // Internet Explorer 6 - standards mode
            if (document.documentElement && document.documentElement.scrollTop)
                return document.documentElement.scrollTop;
            // Internet Explorer 6, 7 and 8
            if (document.body.scrollTop) return document.body.scrollTop;
            return 0;
        }

        function elmYPosition(eID) {
            var elm = document.getElementById(eID);
            var y = elm.offsetTop;
            var node = elm;
            while (node.offsetParent && node.offsetParent != document.body) {
                node = node.offsetParent;
                y += node.offsetTop;
            }
            return y;
        }
    };
}

String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.split(search).join(replacement);
};
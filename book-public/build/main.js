(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* CTA CSS */\r\n.cta-padding35 {\r\n  padding: 35px 0 35px;\r\n  background-color: #b40028;\r\n  color:#fff;\r\n}\r\n/* Buttons */\r\n.site-btn {\r\n  font-size: 14px;\r\n  padding: 13px 30px;\r\n  border-radius: 5px;\r\n  border: 1px solid #b40028 ;\r\n  min-width: 200px;\r\n  display: inline-block;\r\n  text-align: center;\r\n  position: relative;\r\n  z-index: 1;\r\n  color: #b40028 ;\r\n  background-color:transparent;\r\n  transition: all .25s ease-in-out;\r\n  margin: 10px 0px 10px 0px;\r\n\r\n}\r\n.site-btn:hover {\r\n  background: #b40028 ;\r\n  border: 1px solid #fff;\r\n  font-weight:700px;\r\n\r\n\r\n}\r\n/* Footer */\r\n.footer {\r\n  position: relative;\r\n  background-color: #fff;\r\n  color: #707070;\r\n  padding: 55px 0 40px;\r\n}\r\n.footer h5 {\r\n  font-size: 18px;\r\n  font-weight: 700;\r\n  font-family: 'Open Sans', sans-serif;\r\n  color: #707070;\r\n  position: relative;\r\n  padding-bottom: 16px;\r\n}\r\n.footer h5:after {\r\n  content: '';\r\n  display: block;\r\n  margin: 5px 0 0;\r\n  width: 40%;\r\n  height: 1px;\r\n  background-color: #fff;\r\n}\r\n.footer ul {\r\n  list-style: none;\r\n  line-height: 2.2em;\r\n  padding-left:0px;\r\n}\r\n.footer ul a {\r\n  color:#707070;;\r\n}\r\n.footer ul a:hover {\r\n  color:#274abb;;\r\n  text-decoration:none;\r\n}\r\n/*footer bottom */\r\n.footer-bottom {\r\n  padding-top: 5px;\r\n  padding-bottom: 15px;\r\n  border-top: 1px solid rgba(0,0,0,0.09);\r\n  background: #fff;\r\n\r\n}\r\n.copyright-text p {\r\n  color: #707070;\r\n  margin-top: 18px;\r\n  margin-bottom: 0;\r\n  font-size:12px;\r\n}\r\n.team-content {\r\n  padding: 0px 15px 15px 15px;\r\n}\r\n.border-team {\r\n  border-bottom:1px solid #e2e2e2;\r\n  margin-bottom:10px;\r\n}\r\n.team-img:hover {\r\n  background:#f5f5f5;\r\n\r\n}\r\n/* Social Icons */\r\n.social-icons{\r\n\r\n  margin: 0;\r\n  padding: 0;\r\n  font-size : 10px;\r\n}\r\n.social {\r\n  margin:7px 7px 7px 0px;\r\n  color:#232323;\r\n}\r\n#social-fb:hover {\r\n  color: #3B5998;\r\n  transition:all .25s;\r\n}\r\n#social-tw:hover {\r\n  color: #4099FF;\r\n  transition:all .25s;\r\n}\r\n#social-gp:hover {\r\n  color: #d34836;\r\n  transition:all .25s;\r\n}\r\n#social-em:hover {\r\n  color: #f39c12;\r\n  transition:all .25s;\r\n}\r\n/* Site Heading */\r\n.site-heading h3{\r\n  font-size : 40px;\r\n  margin-bottom: 15px;\r\n  font-weight: 600;\r\n}\r\n.border {\r\n  background: #e1e1e1;\r\n  height: 1px;\r\n  width: 25%;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  margin-bottom: 45px;\r\n}\r\n.paddingTB60 {\r\n  padding-top:60px;\r\n  padding-bottom:60px;\r\n}\r\n.image-aboutus-banner {\r\n  background: linear-gradient(rgba(0,0,0,.7), rgba(0,0,0,.7)), url(\"https://images.pexels.com/photos/673649/pexels-photo-673649.jpeg?w=940&h=650&auto=compress&cs=tinysrgb\");\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  background-position: center center;\r\n  color: #fff;\r\n  padding-top: 110px;\r\n  padding-bottom:110px;\r\n}\r\n.image-aboutus-sm-banner {\r\n  background: linear-gradient(rgba(0,0,0,.7), rgba(0,0,0,.7)), url(\"https://images.pexels.com/photos/631008/pexels-photo-631008.jpeg?w=940&h=650&auto=compress&cs=tinysrgb\");\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  background-position: center center;\r\n  color: #fff;\r\n  padding-top: 30px;\r\n  padding-bottom:30px;\r\n}\r\n.lg-text {\r\n  font-size:52px;\r\n  font-weight: 600;\r\n  text-transform: none;\r\n  color:#fff;\r\n}\r\n.image-aboutus-para {\r\n  color:#fff;\r\n}\r\n/* font CSS */\r\nbody {\r\n  font-family: 'Roboto';\r\n  line-height: 24px;\r\n  letter-spacing: 0.5px;\r\n  font-weight: 400;\r\n  font-style: normal;\r\n  color: #494949;\r\n  font-size: 16px;\r\n}\r\na:hover {\r\n  color: #465cff;\r\n}\r\nh1 {\r\n  font-size: 35px;\r\n  line-height: 40px;\r\n  letter-spacing: 0px;\r\n  font-weight: 600;\r\n  color: #000;\r\n}\r\nh2 {\r\n  font-size: 30px;\r\n  line-height: 40px;\r\n  letter-spacing: 0px;\r\n  font-weight: 600;\r\n  color: #000;\r\n}\r\nh3 {\r\n  line-height: 26px;\r\n  font-size: 20px;\r\n  letter-spacing: 0px;\r\n  font-weight: 600;\r\n  font-style: normal;\r\n  color: #000;\r\n}\r\nh4 { font-size: 19px;\r\n  letter-spacing: 0px;\r\n  font-weight: 600;\r\n  font-style: normal;\r\n  color: #000;\r\n}\r\np {\r\n  font-weight: 400;\r\n  font-style: normal;\r\n  color: #494949;\r\n}\r\na {\r\n  color: #494949;\r\n}\r\n.capital {\r\n  text-transform:uppercase;\r\n}\r\ni {\r\n  font-style: normal;\r\n  font-size: 42px;\r\n  text-align: center;\r\n  line-height: 64px;\r\n}\r\n/* Breadcum bar */\r\n.bread-bar {\r\n  background: #f9f9f9;\r\n  box-shadow: 0 1px 2px rgba(0,0,0,.1);\r\n  min-height: 40px;\r\n  height: auto;\r\n  position: relative;\r\n  z-index: 555;\r\n}\r\n.breadcrumb {\r\n  background: none;\r\n  margin: 0;\r\n  font-weight: 300;\r\n  padding-left: 0;\r\n  font-size: 13px;\r\n}\r\n.breadcrumb a {\r\n  color: #999;\r\n}\r\n.breadcrumb > .active {\r\n  color: #666;\r\n}\r\n.breadcrumb > li + li::before {\r\n  content: \"\\203A\";\r\n  color: #999;\r\n  padding: 0 8px;\r\n}\r\n.container{\r\n  font-size: larger;\r\n  font-family: \"Berlin Sans FB\";\r\n}\r\n/* Navigation */\r\n.navbar-default {\r\n  background-color: #011034;\r\n  border-color: #011034;\r\n  padding: 10px 0px 10px 0;\r\n  letter-spacing:1px;\r\n  font-weight:800;\r\n  text-transform: uppercase;\r\n  webkit-box-shadow: 0 2px 5px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12);\r\n  -ms-box-shadow: 0 2px 5px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12);\r\n  -o-box-shadow: 0 2px 5px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12);\r\n  box-shadow: 0 2px 5px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12);\r\n}\r\n.navbar-default {\r\n  background-color: #011034;\r\n  border-color: #011034;\r\n}\r\n.navbar-default .navbar-brand {\r\n  color: #ffffff;\r\n}\r\n.navbar-default .navbar-brand:hover,\r\n.navbar-default .navbar-brand:focus {\r\n  color: #b40028;\r\n}\r\n.navbar-default .navbar-text {\r\n  color: #ffffff;\r\n}\r\n.navbar-default .navbar-nav > li > a {\r\n  color: #ffffff;\r\n}\r\n.navbar-default .navbar-nav > li > a:hover,\r\n.navbar-default .navbar-nav > li > a:focus {\r\n  color: #b40028;\r\n}\r\n.navbar-default .navbar-nav > li > .dropdown-menu {\r\n  background-color: #011034;\r\n}\r\n.navbar-default .navbar-nav > li > .dropdown-menu > li > a {\r\n  color: #ffffff;\r\n}\r\n.navbar-default .navbar-nav > li > .dropdown-menu > li > a:hover,\r\n.navbar-default .navbar-nav > li > .dropdown-menu > li > a:focus {\r\n  color: #b40028;\r\n  background-color: #011034;\r\n}\r\n.navbar-default .navbar-nav > li > .dropdown-menu > li.divider {\r\n  background-color: #011034;\r\n}\r\n.navbar-default .navbar-nav .open .dropdown-menu > .active > a,\r\n.navbar-default .navbar-nav .open .dropdown-menu > .active > a:hover,\r\n.navbar-default .navbar-nav .open .dropdown-menu > .active > a:focus {\r\n  color: #b40028;\r\n  background-color: #011034;\r\n}\r\n.navbar-default .navbar-nav > .active > a,\r\n.navbar-default .navbar-nav > .active > a:hover,\r\n.navbar-default .navbar-nav > .active > a:focus {\r\n  color: #b40028;\r\n  background-color: #011034;\r\n}\r\n.navbar-default .navbar-nav > .open > a,\r\n.navbar-default .navbar-nav > .open > a:hover,\r\n.navbar-default .navbar-nav > .open > a:focus {\r\n  color: #b40028;\r\n  background-color: #011034;\r\n}\r\n.navbar-default .navbar-toggle {\r\n  border-color: #011034;\r\n}\r\n.navbar-default .navbar-toggle:hover,\r\n.navbar-default .navbar-toggle:focus {\r\n  background-color: #011034;\r\n}\r\n.navbar-default .navbar-toggle .icon-bar {\r\n  background-color: #ffffff;\r\n}\r\n.navbar-default .navbar-collapse,\r\n.navbar-default .navbar-form {\r\n  border-color: #ffffff;\r\n}\r\n.navbar-default .navbar-link {\r\n  color: #ffffff;\r\n}\r\n.navbar-default .navbar-link:hover {\r\n  color: #b40028;\r\n}\r\n@media (max-width: 767px) {\r\n  .navbar-default .navbar-nav .open .dropdown-menu > li > a {\r\n    color: #ffffff;\r\n  }\r\n  .navbar-default .navbar-nav .open .dropdown-menu > li > a:hover,\r\n  .navbar-default .navbar-nav .open .dropdown-menu > li > a:focus {\r\n    color: #b40028;\r\n  }\r\n  .navbar-default .navbar-nav .open .dropdown-menu > .active > a,\r\n  .navbar-default .navbar-nav .open .dropdown-menu > .active > a:hover,\r\n  .navbar-default .navbar-nav .open .dropdown-menu > .active > a:focus {\r\n    color: #b40028;\r\n    background-color: #011034;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZO0FBQ1o7RUFDRSxvQkFBb0I7RUFDcEIseUJBQXlCO0VBQ3pCLFVBQVU7QUFDWjtBQUNBLFlBQVk7QUFDWjtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLDBCQUEwQjtFQUMxQixnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGVBQWU7RUFDZiw0QkFBNEI7RUFDNUIsZ0NBQWdDO0VBQ2hDLHlCQUF5Qjs7QUFFM0I7QUFDQTtFQUNFLG9CQUFvQjtFQUNwQixzQkFBc0I7RUFDdEIsaUJBQWlCOzs7QUFHbkI7QUFFQSxXQUFXO0FBQ1g7RUFDRSxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLGNBQWM7RUFDZCxvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsb0NBQW9DO0VBQ3BDLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLGVBQWU7RUFDZixVQUFVO0VBQ1YsV0FBVztFQUNYLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UsYUFBYTtFQUNiLG9CQUFvQjtBQUN0QjtBQUNBLGlCQUFpQjtBQUNqQjtFQUNFLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsc0NBQXNDO0VBQ3RDLGdCQUFnQjs7QUFFbEI7QUFDQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7QUFHQTtFQUNFLDJCQUEyQjtBQUM3QjtBQUNBO0VBQ0UsK0JBQStCO0VBQy9CLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0Usa0JBQWtCOztBQUVwQjtBQUVBLGlCQUFpQjtBQUVqQjs7RUFFRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLGFBQWE7QUFDZjtBQUdBO0VBQ0UsY0FBYztFQUNkLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsY0FBYztFQUNkLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsY0FBYztFQUNkLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsY0FBYztFQUNkLG1CQUFtQjtBQUNyQjtBQUdBLGlCQUFpQjtBQUNqQjtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsMEtBQTBLO0VBQzFLLDRCQUE0QjtFQUM1QixzQkFBc0I7RUFDdEIsa0NBQWtDO0VBQ2xDLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsb0JBQW9CO0FBQ3RCO0FBRUE7RUFDRSwwS0FBMEs7RUFDMUssNEJBQTRCO0VBQzVCLHNCQUFzQjtFQUN0QixrQ0FBa0M7RUFDbEMsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLFVBQVU7QUFDWjtBQUNBO0VBQ0UsVUFBVTtBQUNaO0FBR0EsYUFBYTtBQUNiO0VBQ0UscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFDYjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFDYjtBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7QUFDQSxLQUFLLGVBQWU7RUFDbEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsV0FBVztBQUNiO0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7QUFHQTtFQUNFLGNBQWM7QUFDaEI7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjtBQUdBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25CO0FBRUEsaUJBQWlCO0FBQ2pCO0VBQ0UsbUJBQW1CO0VBQ25CLG9DQUFvQztFQUNwQyxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixTQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxjQUFjO0FBQ2hCO0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsNkJBQTZCO0FBQy9CO0FBZ0JBLGVBQWU7QUFDZjtFQUNFLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsd0JBQXdCO0VBQ3hCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLDJFQUEyRTtFQUUzRSx3RUFBd0U7RUFDeEUsdUVBQXVFO0VBQ3ZFLG9FQUFvRTtBQUN0RTtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBOztFQUVFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTs7RUFFRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTs7RUFFRSxjQUFjO0VBQ2QseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQTs7O0VBR0UsY0FBYztFQUNkLHlCQUF5QjtBQUMzQjtBQUNBOzs7RUFHRSxjQUFjO0VBQ2QseUJBQXlCO0FBQzNCO0FBQ0E7OztFQUdFLGNBQWM7RUFDZCx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLHFCQUFxQjtBQUN2QjtBQUNBOztFQUVFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7O0VBRUUscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBRUE7RUFDRTtJQUNFLGNBQWM7RUFDaEI7RUFDQTs7SUFFRSxjQUFjO0VBQ2hCO0VBQ0E7OztJQUdFLGNBQWM7SUFDZCx5QkFBeUI7RUFDM0I7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBDVEEgQ1NTICovXHJcbi5jdGEtcGFkZGluZzM1IHtcclxuICBwYWRkaW5nOiAzNXB4IDAgMzVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjQwMDI4O1xyXG4gIGNvbG9yOiNmZmY7XHJcbn1cclxuLyogQnV0dG9ucyAqL1xyXG4uc2l0ZS1idG4ge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBwYWRkaW5nOiAxM3B4IDMwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNiNDAwMjggO1xyXG4gIG1pbi13aWR0aDogMjAwcHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMTtcclxuICBjb2xvcjogI2I0MDAyOCA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtcclxuICB0cmFuc2l0aW9uOiBhbGwgLjI1cyBlYXNlLWluLW91dDtcclxuICBtYXJnaW46IDEwcHggMHB4IDEwcHggMHB4O1xyXG5cclxufVxyXG4uc2l0ZS1idG46aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICNiNDAwMjggO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XHJcbiAgZm9udC13ZWlnaHQ6NzAwcHg7XHJcblxyXG5cclxufVxyXG5cclxuLyogRm9vdGVyICovXHJcbi5mb290ZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGNvbG9yOiAjNzA3MDcwO1xyXG4gIHBhZGRpbmc6IDU1cHggMCA0MHB4O1xyXG59XHJcbi5mb290ZXIgaDUge1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICBjb2xvcjogIzcwNzA3MDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcGFkZGluZy1ib3R0b206IDE2cHg7XHJcbn1cclxuLmZvb3RlciBoNTphZnRlciB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luOiA1cHggMCAwO1xyXG4gIHdpZHRoOiA0MCU7XHJcbiAgaGVpZ2h0OiAxcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxufVxyXG4uZm9vdGVyIHVsIHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIGxpbmUtaGVpZ2h0OiAyLjJlbTtcclxuICBwYWRkaW5nLWxlZnQ6MHB4O1xyXG59XHJcbi5mb290ZXIgdWwgYSB7XHJcbiAgY29sb3I6IzcwNzA3MDs7XHJcbn1cclxuLmZvb3RlciB1bCBhOmhvdmVyIHtcclxuICBjb2xvcjojMjc0YWJiOztcclxuICB0ZXh0LWRlY29yYXRpb246bm9uZTtcclxufVxyXG4vKmZvb3RlciBib3R0b20gKi9cclxuLmZvb3Rlci1ib3R0b20ge1xyXG4gIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwwLDAsMC4wOSk7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuXHJcbn1cclxuLmNvcHlyaWdodC10ZXh0IHAge1xyXG4gIGNvbG9yOiAjNzA3MDcwO1xyXG4gIG1hcmdpbi10b3A6IDE4cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxuICBmb250LXNpemU6MTJweDtcclxufVxyXG5cclxuXHJcbi50ZWFtLWNvbnRlbnQge1xyXG4gIHBhZGRpbmc6IDBweCAxNXB4IDE1cHggMTVweDtcclxufVxyXG4uYm9yZGVyLXRlYW0ge1xyXG4gIGJvcmRlci1ib3R0b206MXB4IHNvbGlkICNlMmUyZTI7XHJcbiAgbWFyZ2luLWJvdHRvbToxMHB4O1xyXG59XHJcbi50ZWFtLWltZzpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDojZjVmNWY1O1xyXG5cclxufVxyXG5cclxuLyogU29jaWFsIEljb25zICovXHJcblxyXG4uc29jaWFsLWljb25ze1xyXG5cclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBmb250LXNpemUgOiAxMHB4O1xyXG59XHJcbi5zb2NpYWwge1xyXG4gIG1hcmdpbjo3cHggN3B4IDdweCAwcHg7XHJcbiAgY29sb3I6IzIzMjMyMztcclxufVxyXG5cclxuXHJcbiNzb2NpYWwtZmI6aG92ZXIge1xyXG4gIGNvbG9yOiAjM0I1OTk4O1xyXG4gIHRyYW5zaXRpb246YWxsIC4yNXM7XHJcbn1cclxuI3NvY2lhbC10dzpob3ZlciB7XHJcbiAgY29sb3I6ICM0MDk5RkY7XHJcbiAgdHJhbnNpdGlvbjphbGwgLjI1cztcclxufVxyXG4jc29jaWFsLWdwOmhvdmVyIHtcclxuICBjb2xvcjogI2QzNDgzNjtcclxuICB0cmFuc2l0aW9uOmFsbCAuMjVzO1xyXG59XHJcbiNzb2NpYWwtZW06aG92ZXIge1xyXG4gIGNvbG9yOiAjZjM5YzEyO1xyXG4gIHRyYW5zaXRpb246YWxsIC4yNXM7XHJcbn1cclxuXHJcblxyXG4vKiBTaXRlIEhlYWRpbmcgKi9cclxuLnNpdGUtaGVhZGluZyBoM3tcclxuICBmb250LXNpemUgOiA0MHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG4uYm9yZGVyIHtcclxuICBiYWNrZ3JvdW5kOiAjZTFlMWUxO1xyXG4gIGhlaWdodDogMXB4O1xyXG4gIHdpZHRoOiAyNSU7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbi1ib3R0b206IDQ1cHg7XHJcbn1cclxuXHJcbi5wYWRkaW5nVEI2MCB7XHJcbiAgcGFkZGluZy10b3A6NjBweDtcclxuICBwYWRkaW5nLWJvdHRvbTo2MHB4O1xyXG59XHJcblxyXG4uaW1hZ2UtYWJvdXR1cy1iYW5uZXIge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsMCwwLC43KSwgcmdiYSgwLDAsMCwuNykpLCB1cmwoXCJodHRwczovL2ltYWdlcy5wZXhlbHMuY29tL3Bob3Rvcy82NzM2NDkvcGV4ZWxzLXBob3RvLTY3MzY0OS5qcGVnP3c9OTQwJmg9NjUwJmF1dG89Y29tcHJlc3MmY3M9dGlueXNyZ2JcIik7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgcGFkZGluZy10b3A6IDExMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOjExMHB4O1xyXG59XHJcblxyXG4uaW1hZ2UtYWJvdXR1cy1zbS1iYW5uZXIge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsMCwwLC43KSwgcmdiYSgwLDAsMCwuNykpLCB1cmwoXCJodHRwczovL2ltYWdlcy5wZXhlbHMuY29tL3Bob3Rvcy82MzEwMDgvcGV4ZWxzLXBob3RvLTYzMTAwOC5qcGVnP3c9OTQwJmg9NjUwJmF1dG89Y29tcHJlc3MmY3M9dGlueXNyZ2JcIik7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206MzBweDtcclxufVxyXG4ubGctdGV4dCB7XHJcbiAgZm9udC1zaXplOjUycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICBjb2xvcjojZmZmO1xyXG59XHJcbi5pbWFnZS1hYm91dHVzLXBhcmEge1xyXG4gIGNvbG9yOiNmZmY7XHJcbn1cclxuXHJcblxyXG4vKiBmb250IENTUyAqL1xyXG5ib2R5IHtcclxuICBmb250LWZhbWlseTogJ1JvYm90byc7XHJcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGNvbG9yOiAjNDk0OTQ5O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuYTpob3ZlciB7XHJcbiAgY29sb3I6ICM0NjVjZmY7XHJcbn1cclxuXHJcbmgxIHtcclxuICBmb250LXNpemU6IDM1cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDBweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiAjMDAwO1xyXG59XHJcbmgyIHtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDBweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiAjMDAwO1xyXG59XHJcblxyXG5oMyB7XHJcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgY29sb3I6ICMwMDA7XHJcbn1cclxuaDQgeyBmb250LXNpemU6IDE5cHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDBweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBjb2xvcjogIzAwMDtcclxufVxyXG5cclxucCB7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgY29sb3I6ICM0OTQ5NDk7XHJcbn1cclxuXHJcblxyXG5hIHtcclxuICBjb2xvcjogIzQ5NDk0OTtcclxufVxyXG5cclxuLmNhcGl0YWwge1xyXG4gIHRleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtcclxufVxyXG5cclxuXHJcbmkge1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXNpemU6IDQycHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGxpbmUtaGVpZ2h0OiA2NHB4O1xyXG59XHJcblxyXG4vKiBCcmVhZGN1bSBiYXIgKi9cclxuLmJyZWFkLWJhciB7XHJcbiAgYmFja2dyb3VuZDogI2Y5ZjlmOTtcclxuICBib3gtc2hhZG93OiAwIDFweCAycHggcmdiYSgwLDAsMCwuMSk7XHJcbiAgbWluLWhlaWdodDogNDBweDtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDU1NTtcclxufVxyXG4uYnJlYWRjcnVtYiB7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG59XHJcbi5icmVhZGNydW1iIGEge1xyXG4gIGNvbG9yOiAjOTk5O1xyXG59XHJcbi5icmVhZGNydW1iID4gLmFjdGl2ZSB7XHJcbiAgY29sb3I6ICM2NjY7XHJcbn1cclxuLmJyZWFkY3J1bWIgPiBsaSArIGxpOjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXFwyMDNBXCI7XHJcbiAgY29sb3I6ICM5OTk7XHJcbiAgcGFkZGluZzogMCA4cHg7XHJcbn1cclxuXHJcbi5jb250YWluZXJ7XHJcbiAgZm9udC1zaXplOiBsYXJnZXI7XHJcbiAgZm9udC1mYW1pbHk6IFwiQmVybGluIFNhbnMgRkJcIjtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vKiBOYXZpZ2F0aW9uICovXHJcbi5uYXZiYXItZGVmYXVsdCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAxMTAzNDtcclxuICBib3JkZXItY29sb3I6ICMwMTEwMzQ7XHJcbiAgcGFkZGluZzogMTBweCAwcHggMTBweCAwO1xyXG4gIGxldHRlci1zcGFjaW5nOjFweDtcclxuICBmb250LXdlaWdodDo4MDA7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICB3ZWJraXQtYm94LXNoYWRvdzogMCAycHggNXB4IDAgcmdiYSgwLDAsMCwuMTYpLDAgMnB4IDEwcHggMCByZ2JhKDAsMCwwLC4xMik7XHJcbiAgLW1vei1ib3gtc2hhZG93OiAwIDJweCA1cHggMCByZ2JhKDAsMCwwLC4xNiksMCAycHggMTBweCAwIHJnYmEoMCwwLDAsLjEyKTtcclxuICAtbXMtYm94LXNoYWRvdzogMCAycHggNXB4IDAgcmdiYSgwLDAsMCwuMTYpLDAgMnB4IDEwcHggMCByZ2JhKDAsMCwwLC4xMik7XHJcbiAgLW8tYm94LXNoYWRvdzogMCAycHggNXB4IDAgcmdiYSgwLDAsMCwuMTYpLDAgMnB4IDEwcHggMCByZ2JhKDAsMCwwLC4xMik7XHJcbiAgYm94LXNoYWRvdzogMCAycHggNXB4IDAgcmdiYSgwLDAsMCwuMTYpLDAgMnB4IDEwcHggMCByZ2JhKDAsMCwwLC4xMik7XHJcbn1cclxuLm5hdmJhci1kZWZhdWx0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDExMDM0O1xyXG4gIGJvcmRlci1jb2xvcjogIzAxMTAzNDtcclxufVxyXG4ubmF2YmFyLWRlZmF1bHQgLm5hdmJhci1icmFuZCB7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItYnJhbmQ6aG92ZXIsXHJcbi5uYXZiYXItZGVmYXVsdCAubmF2YmFyLWJyYW5kOmZvY3VzIHtcclxuICBjb2xvcjogI2I0MDAyODtcclxufVxyXG4ubmF2YmFyLWRlZmF1bHQgLm5hdmJhci10ZXh0IHtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG4ubmF2YmFyLWRlZmF1bHQgLm5hdmJhci1uYXYgPiBsaSA+IGEge1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcbi5uYXZiYXItZGVmYXVsdCAubmF2YmFyLW5hdiA+IGxpID4gYTpob3ZlcixcclxuLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItbmF2ID4gbGkgPiBhOmZvY3VzIHtcclxuICBjb2xvcjogI2I0MDAyODtcclxufVxyXG4ubmF2YmFyLWRlZmF1bHQgLm5hdmJhci1uYXYgPiBsaSA+IC5kcm9wZG93bi1tZW51IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDExMDM0O1xyXG59XHJcbi5uYXZiYXItZGVmYXVsdCAubmF2YmFyLW5hdiA+IGxpID4gLmRyb3Bkb3duLW1lbnUgPiBsaSA+IGEge1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcbi5uYXZiYXItZGVmYXVsdCAubmF2YmFyLW5hdiA+IGxpID4gLmRyb3Bkb3duLW1lbnUgPiBsaSA+IGE6aG92ZXIsXHJcbi5uYXZiYXItZGVmYXVsdCAubmF2YmFyLW5hdiA+IGxpID4gLmRyb3Bkb3duLW1lbnUgPiBsaSA+IGE6Zm9jdXMge1xyXG4gIGNvbG9yOiAjYjQwMDI4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMTEwMzQ7XHJcbn1cclxuLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItbmF2ID4gbGkgPiAuZHJvcGRvd24tbWVudSA+IGxpLmRpdmlkZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMTEwMzQ7XHJcbn1cclxuLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItbmF2IC5vcGVuIC5kcm9wZG93bi1tZW51ID4gLmFjdGl2ZSA+IGEsXHJcbi5uYXZiYXItZGVmYXVsdCAubmF2YmFyLW5hdiAub3BlbiAuZHJvcGRvd24tbWVudSA+IC5hY3RpdmUgPiBhOmhvdmVyLFxyXG4ubmF2YmFyLWRlZmF1bHQgLm5hdmJhci1uYXYgLm9wZW4gLmRyb3Bkb3duLW1lbnUgPiAuYWN0aXZlID4gYTpmb2N1cyB7XHJcbiAgY29sb3I6ICNiNDAwMjg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAxMTAzNDtcclxufVxyXG4ubmF2YmFyLWRlZmF1bHQgLm5hdmJhci1uYXYgPiAuYWN0aXZlID4gYSxcclxuLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItbmF2ID4gLmFjdGl2ZSA+IGE6aG92ZXIsXHJcbi5uYXZiYXItZGVmYXVsdCAubmF2YmFyLW5hdiA+IC5hY3RpdmUgPiBhOmZvY3VzIHtcclxuICBjb2xvcjogI2I0MDAyODtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDExMDM0O1xyXG59XHJcbi5uYXZiYXItZGVmYXVsdCAubmF2YmFyLW5hdiA+IC5vcGVuID4gYSxcclxuLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItbmF2ID4gLm9wZW4gPiBhOmhvdmVyLFxyXG4ubmF2YmFyLWRlZmF1bHQgLm5hdmJhci1uYXYgPiAub3BlbiA+IGE6Zm9jdXMge1xyXG4gIGNvbG9yOiAjYjQwMDI4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMTEwMzQ7XHJcbn1cclxuLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItdG9nZ2xlIHtcclxuICBib3JkZXItY29sb3I6ICMwMTEwMzQ7XHJcbn1cclxuLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItdG9nZ2xlOmhvdmVyLFxyXG4ubmF2YmFyLWRlZmF1bHQgLm5hdmJhci10b2dnbGU6Zm9jdXMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMTEwMzQ7XHJcbn1cclxuLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItdG9nZ2xlIC5pY29uLWJhciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxufVxyXG4ubmF2YmFyLWRlZmF1bHQgLm5hdmJhci1jb2xsYXBzZSxcclxuLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItZm9ybSB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZmZmZmZmO1xyXG59XHJcbi5uYXZiYXItZGVmYXVsdCAubmF2YmFyLWxpbmsge1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcbi5uYXZiYXItZGVmYXVsdCAubmF2YmFyLWxpbms6aG92ZXIge1xyXG4gIGNvbG9yOiAjYjQwMDI4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAubmF2YmFyLWRlZmF1bHQgLm5hdmJhci1uYXYgLm9wZW4gLmRyb3Bkb3duLW1lbnUgPiBsaSA+IGEge1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgfVxyXG4gIC5uYXZiYXItZGVmYXVsdCAubmF2YmFyLW5hdiAub3BlbiAuZHJvcGRvd24tbWVudSA+IGxpID4gYTpob3ZlcixcclxuICAubmF2YmFyLWRlZmF1bHQgLm5hdmJhci1uYXYgLm9wZW4gLmRyb3Bkb3duLW1lbnUgPiBsaSA+IGE6Zm9jdXMge1xyXG4gICAgY29sb3I6ICNiNDAwMjg7XHJcbiAgfVxyXG4gIC5uYXZiYXItZGVmYXVsdCAubmF2YmFyLW5hdiAub3BlbiAuZHJvcGRvd24tbWVudSA+IC5hY3RpdmUgPiBhLFxyXG4gIC5uYXZiYXItZGVmYXVsdCAubmF2YmFyLW5hdiAub3BlbiAuZHJvcGRvd24tbWVudSA+IC5hY3RpdmUgPiBhOmhvdmVyLFxyXG4gIC5uYXZiYXItZGVmYXVsdCAubmF2YmFyLW5hdiAub3BlbiAuZHJvcGRvd24tbWVudSA+IC5hY3RpdmUgPiBhOmZvY3VzIHtcclxuICAgIGNvbG9yOiAjYjQwMDI4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAxMTAzNDtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1 class=\"display-4\">Paper-Weight Store</h1>\n\n\n\n\n\n  <link href=\"//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\n  <script src=\"//netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min.js\"></script>\n  <script src=\"//code.jquery.com/jquery-1.11.1.min.js\"></script>\n  <!------ Include the above in your HEAD tag ---------->\n\n  <link href=\"//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css\" rel=\"stylesheet\">\n  <link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet'>\n\n  <div class=\"image-aboutus-banner\"style=\"margin-top:70px\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <h1 class=\"lg-text\">About Us</h1>\n          <p class=\"image-aboutus-para\">“The person, be it gentleman or lady, who has not pleasure in a good novel, must be intolerably stupid.”\n            ― Jane Austen, Northanger Abbey</p>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"aboutus-secktion paddingTB60\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <h1 class=\"strong\">Who we are and<br>what we do</h1>\n          This is the world's leading portal for\n          easy and quick\n          <p class=\"lead\"></p>\n        </div>\n        <div class=\"col-md-6\">\n          <p>Paper-Weight  is the world’s largest site for readers and book recommendations. Our mission is to help people find and share books they love. Paper-Weight  launched in January 2007.</p>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"container team-sektion paddingTB60\">\n    <div class=\"row\">\n      <div class=\"site-heading container \">\n        <h3 class=\"text-center\">Our Team</h3>\n        <p  class=\"text-center\">We help to achieve your goal</p>\n        <div class=\"border\"></div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-4 team-box\">\n        <div class=\"team-img thumbnail\">\n          <img src=\"https://kusocartoon.com/images2/backup/kusoCartoon_15979882141337_avatar.jpg\">\n          <div class=\"team-content\">\n            <h3>Ramneek Singh</h3>\n            <div class=\"border-team\"></div>\n            \n            <div class=\"social-icons\">\n              <a href=\"https://www.facebook.com/\"><i id=\"social-fb\" class=\"fa fa-facebook-square fa-3x social\"></i></a>\n              <a href=\"https://twitter.com/\"><i id=\"social-tw\" class=\"fa fa-twitter-square fa-3x social\"></i></a>\n              <a href=\"https://plus.google.com/\"><i id=\"social-gp\" class=\"fa fa-google-plus-square fa-3x social\"></i></a>\n              <a href=\"mailto:someone@example.com\"><i id=\"social-em\" class=\"fa fa-envelope-square fa-3x social\"></i></a>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-4 team-box\">\n        <div class=\"team-img thumbnail\">\n          <img  src=\"https://kusocartoon.com/images2/backup/kusoCartoon_15979887877230_avatar.jpg\" height=\"1%\">\n          <div class=\"team-content\">\n            <h3>Iqbal Sambhi</h3>\n            <div class=\"border-team\"></div>\n            \n            <div class=\"social-icons\">\n              <a href=\"https://www.facebook.com/\"><i id=\"social-fb\" class=\"fa fa-facebook-square fa-3x social\"></i></a>\n              <a href=\"https://twitter.com/\"><i id=\"social-tw\" class=\"fa fa-twitter-square fa-3x social\"></i></a>\n              <a href=\"https://plus.google.com/\"><i id=\"social-gp\" class=\"fa fa-google-plus-square fa-3x social\"></i></a>\n              <a href=\"someone@example.com\"><i id=\"social-em\" class=\"fa fa-envelope-square fa-3x social\"></i></a>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-4 team-box\">\n        <div class=\"team-img thumbnail\">\n          <img src=\"https://kusocartoon.com/images2/backup/kusoCartoon_15979883290160_avatar.jpg\">\n          <div class=\"team-content\">    \n            <h3>Davinder Kaur</h3>\n            <div class=\"border-team\"></div>\n            \n            <div class=\"social-icons\">\n              <a href=\"https://www.facebook.com/\"><i id=\"social-fb\" class=\"fa fa-facebook-square fa-3x social\"></i></a>\n              <a href=\"https://twitter.com/\"><i id=\"social-tw\" class=\"fa fa-twitter-square fa-3x social\"></i></a>\n              <a href=\"https://plus.google.com/\"><i id=\"social-gp\" class=\"fa fa-google-plus-square fa-3x social\"></i></a>\n              <a href=\"someone@example.com\"><i id=\"social-em\" class=\"fa fa-envelope-square fa-3x social\"></i></a>\n            </div>\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n\n\n</div>\n<script>\n  uppercase\n  strong\n  spacer-20\n</script>\n\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _home_list_home_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home-list/home-list.component */ "./src/app/home-list/home-list.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _framework_framework_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./framework/framework.component */ "./src/app/framework/framework.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _create_create_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./create/create.component */ "./src/app/create/create.component.ts");
/* harmony import */ var _details_page_details_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./details-page/details-page.component */ "./src/app/details-page/details-page.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _book_service_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./book-service.service */ "./src/app/book-service.service.ts");
/* harmony import */ var _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./contactus/contactus.component */ "./src/app/contactus/contactus.component.ts");
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _home_list_home_list_component__WEBPACK_IMPORTED_MODULE_4__["HomeListComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"],
                _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_6__["HomepageComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                _framework_framework_component__WEBPACK_IMPORTED_MODULE_8__["FrameworkComponent"],
                _create_create_component__WEBPACK_IMPORTED_MODULE_11__["CreateComponent"],
                _details_page_details_page_component__WEBPACK_IMPORTED_MODULE_12__["DetailsPageComponent"],
                _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_15__["ContactusComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"].forRoot([
                    {
                        path: '',
                        component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_6__["HomepageComponent"]
                    },
                    {
                        path: 'about',
                        component: _about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"]
                    },
                    {
                        path: 'create',
                        component: _create_create_component__WEBPACK_IMPORTED_MODULE_11__["CreateComponent"]
                    },
                    {
                        path: 'book/:bookid',
                        component: _details_page_details_page_component__WEBPACK_IMPORTED_MODULE_12__["DetailsPageComponent"]
                    },
                    {
                        path: 'deleteBook/:bookid',
                        component: _book_service_service__WEBPACK_IMPORTED_MODULE_14__["BookDataService"]
                    },
                    {
                        path: 'contact',
                        component: _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_15__["ContactusComponent"]
                    }
                ])
            ],
            providers: [{ provide: _angular_common__WEBPACK_IMPORTED_MODULE_9__["APP_BASE_HREF"], useValue: '/' }],
            bootstrap: [_framework_framework_component__WEBPACK_IMPORTED_MODULE_8__["FrameworkComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/book-service.service.ts":
/*!*****************************************!*\
  !*** ./src/app/book-service.service.ts ***!
  \*****************************************/
/*! exports provided: BookDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookDataService", function() { return BookDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");



var BookDataService = /** @class */ (function () {
    function BookDataService(http) {
        this.http = http;
        this.booksUrl = 'http://localhost:3000/api/books';
    }
    BookDataService.prototype.getBooks = function () {
        return this.http.get(this.booksUrl)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    BookDataService.prototype.getSingleBook = function (bookId) {
        return this.http.get(this.booksUrl + '/' + bookId)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    BookDataService.prototype.createBook = function (newBook) {
        return this.http.post(this.booksUrl, newBook)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    BookDataService.prototype.updatebook = function (newBook) {
        console.log("in update function return::::0" + newBook._id);
        var putURL = this.booksUrl + '/' + newBook._id;
        return this.http.put(putURL, newBook)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    BookDataService.prototype.deleteBook = function (bookId) {
        if (confirm("Are you sure?")) {
            return this.http.delete(this.booksUrl + '/' + bookId)
                .toPromise()
                .then(function (response) { return response.json(); })
                .catch(this.handleError);
        }
    };
    BookDataService.prototype.handleError = function (error) {
        console.log("error");
    };
    BookDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], BookDataService);
    return BookDataService;
}());



/***/ }),

/***/ "./src/app/book.ts":
/*!*************************!*\
  !*** ./src/app/book.ts ***!
  \*************************/
/*! exports provided: Book */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Book", function() { return Book; });
var Book = /** @class */ (function () {
    function Book() {
    }
    return Book;
}());



/***/ }),

/***/ "./src/app/contactus/contactus.component.css":
/*!***************************************************!*\
  !*** ./src/app/contactus/contactus.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\r\n  background-color: #25274d;\r\n}\r\n.contact{\r\n  padding: 4%;\r\n  height: 30%;\r\n}\r\n.col-md-3{\r\n  background: #ff9b00;\r\n  padding: 4%;\r\n  border-top-left-radius: 0.5rem;\r\n  border-bottom-left-radius: 0.5rem;\r\n}\r\n.contact-info{\r\n  margin-top:1%;\r\n}\r\n.contact-info img{\r\n  margin-bottom: 15%;\r\n}\r\n.contact-info h2{\r\n  margin-bottom: 10%;\r\n}\r\n.col-md-9{\r\n  background: #fff;\r\n  padding: 3%;\r\n  border-top-right-radius: 0.5rem;\r\n  border-bottom-right-radius: 0.5rem;\r\n}\r\n.contact-form label{\r\n  font-weight:600;\r\n}\r\n.contact-form button{\r\n  background: #25274d;\r\n  color: #fff;\r\n  font-weight: 600;\r\n  width: 25%;\r\n}\r\n.contact-form button:focus{\r\n  box-shadow:none;\r\n}\r\nbody {\r\n  font-family: Arial, Helvetica, sans-serif;\r\n}\r\n* {\r\n  box-sizing: border-box;\r\n}\r\n/* Style inputs */\r\ninput[type=text], select, textarea {\r\n  width: 100%;\r\n  padding: 12px;\r\n  border: 1px solid #ccc;\r\n  margin-top: 6px;\r\n  margin-bottom: 16px;\r\n  resize: vertical;\r\n}\r\ninput[type=submit] {\r\n  background-color: #4CAF50;\r\n  color: white;\r\n  padding: 12px 20px;\r\n  border: none;\r\n  cursor: pointer;\r\n}\r\ninput[type=submit]:hover {\r\n  background-color: #45a049;\r\n}\r\n/* Style the container/contact section */\r\n.container {\r\n  border-radius: 5px;\r\n  background-color: #f2f2f2;\r\n  padding: 10px;\r\n}\r\n/* Create two columns that float next to eachother */\r\n.column {\r\n  float: left;\r\n  width: 50%;\r\n  margin-top: 6px;\r\n  padding: 20px;\r\n}\r\n/* Clear floats after the columns */\r\n.row:after {\r\n  content: \"\";\r\n  display: table;\r\n  clear: both;\r\n}\r\n/* Responsive layout - when the screen is less than 600px wide, make the two columns stack on top of each other instead of next to each other */\r\n@media screen and (max-width: 600px) {\r\n  .column, input[type=submit] {\r\n    width: 100%;\r\n    margin-top: 0;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdHVzL2NvbnRhY3R1cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsV0FBVztBQUNiO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLDhCQUE4QjtFQUM5QixpQ0FBaUM7QUFDbkM7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsK0JBQStCO0VBQy9CLGtDQUFrQztBQUNwQztBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsVUFBVTtBQUNaO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBR0E7RUFDRSx5Q0FBeUM7QUFDM0M7QUFFQTtFQUNFLHNCQUFzQjtBQUN4QjtBQUVBLGlCQUFpQjtBQUNqQjtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZUFBZTtBQUNqQjtBQUVBO0VBQ0UseUJBQXlCO0FBQzNCO0FBRUEsd0NBQXdDO0FBQ3hDO0VBQ0Usa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixhQUFhO0FBQ2Y7QUFFQSxvREFBb0Q7QUFDcEQ7RUFDRSxXQUFXO0VBQ1gsVUFBVTtFQUNWLGVBQWU7RUFDZixhQUFhO0FBQ2Y7QUFFQSxtQ0FBbUM7QUFDbkM7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLFdBQVc7QUFDYjtBQUVBLCtJQUErSTtBQUMvSTtFQUNFO0lBQ0UsV0FBVztJQUNYLGFBQWE7RUFDZjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29udGFjdHVzL2NvbnRhY3R1cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjUyNzRkO1xyXG59XHJcbi5jb250YWN0e1xyXG4gIHBhZGRpbmc6IDQlO1xyXG4gIGhlaWdodDogMzAlO1xyXG59XHJcbi5jb2wtbWQtM3tcclxuICBiYWNrZ3JvdW5kOiAjZmY5YjAwO1xyXG4gIHBhZGRpbmc6IDQlO1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDAuNXJlbTtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwLjVyZW07XHJcbn1cclxuLmNvbnRhY3QtaW5mb3tcclxuICBtYXJnaW4tdG9wOjElO1xyXG59XHJcbi5jb250YWN0LWluZm8gaW1ne1xyXG4gIG1hcmdpbi1ib3R0b206IDE1JTtcclxufVxyXG4uY29udGFjdC1pbmZvIGgye1xyXG4gIG1hcmdpbi1ib3R0b206IDEwJTtcclxufVxyXG4uY29sLW1kLTl7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBwYWRkaW5nOiAzJTtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMC41cmVtO1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwLjVyZW07XHJcbn1cclxuLmNvbnRhY3QtZm9ybSBsYWJlbHtcclxuICBmb250LXdlaWdodDo2MDA7XHJcbn1cclxuLmNvbnRhY3QtZm9ybSBidXR0b257XHJcbiAgYmFja2dyb3VuZDogIzI1Mjc0ZDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHdpZHRoOiAyNSU7XHJcbn1cclxuLmNvbnRhY3QtZm9ybSBidXR0b246Zm9jdXN7XHJcbiAgYm94LXNoYWRvdzpub25lO1xyXG59XHJcblxyXG5cclxuYm9keSB7XHJcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbioge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi8qIFN0eWxlIGlucHV0cyAqL1xyXG5pbnB1dFt0eXBlPXRleHRdLCBzZWxlY3QsIHRleHRhcmVhIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAxMnB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgbWFyZ2luLXRvcDogNnB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1zdWJtaXRdIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAxMnB4IDIwcHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1zdWJtaXRdOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDVhMDQ5O1xyXG59XHJcblxyXG4vKiBTdHlsZSB0aGUgY29udGFpbmVyL2NvbnRhY3Qgc2VjdGlvbiAqL1xyXG4uY29udGFpbmVyIHtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4vKiBDcmVhdGUgdHdvIGNvbHVtbnMgdGhhdCBmbG9hdCBuZXh0IHRvIGVhY2hvdGhlciAqL1xyXG4uY29sdW1uIHtcclxuICBmbG9hdDogbGVmdDtcclxuICB3aWR0aDogNTAlO1xyXG4gIG1hcmdpbi10b3A6IDZweDtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4vKiBDbGVhciBmbG9hdHMgYWZ0ZXIgdGhlIGNvbHVtbnMgKi9cclxuLnJvdzphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBkaXNwbGF5OiB0YWJsZTtcclxuICBjbGVhcjogYm90aDtcclxufVxyXG5cclxuLyogUmVzcG9uc2l2ZSBsYXlvdXQgLSB3aGVuIHRoZSBzY3JlZW4gaXMgbGVzcyB0aGFuIDYwMHB4IHdpZGUsIG1ha2UgdGhlIHR3byBjb2x1bW5zIHN0YWNrIG9uIHRvcCBvZiBlYWNoIG90aGVyIGluc3RlYWQgb2YgbmV4dCB0byBlYWNoIG90aGVyICovXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgLmNvbHVtbiwgaW5wdXRbdHlwZT1zdWJtaXRdIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/contactus/contactus.component.html":
/*!****************************************************!*\
  !*** ./src/app/contactus/contactus.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n<head>\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n<style>\n\n</style>\n</head>\n<body>\n\n<div class=\"container\">\n  <div style=\"text-align:center\">\n    <h2>Contact Us</h2>\n    <p>Contact us or leave us a Message</p>\n  </div>\n  <div class=\"row\">\n    <div class=\"column\">\n      <img src=\"https://images.pexels.com/photos/1907785/pexels-photo-1907785.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940\" style=\"width:55%\" >\n    </div>\n    <div class=\"column\">\n      <form action=\"mailto:someone@example.com\">\n        <label for=\"fname\">First Name</label>\n        <input type=\"text\" id=\"fname\" name=\"firstname\" placeholder=\"Your name..\">\n        <label for=\"lname\">Last Name</label>\n        <input type=\"text\" id=\"lname\" name=\"lastname\" placeholder=\"Your last name..\">\n        <label for=\"country\">Country</label>\n        <select id=\"country\" name=\"country\">\n          <option value=\"australia\">Australia</option>\n          <option value=\"canada\">Canada</option>\n          <option value=\"usa\">USA</option>\n        </select>\n        <label for=\"subject\">Subject</label>\n        <textarea id=\"subject\" name=\"subject\" placeholder=\"Write something..\" style=\"height:170px\"></textarea>\n        <input type=\"submit\" value=\"Submit\">\n      </form>\n    </div>\n  </div>\n</div>\n\n</body>\n</html>\n"

/***/ }),

/***/ "./src/app/contactus/contactus.component.ts":
/*!**************************************************!*\
  !*** ./src/app/contactus/contactus.component.ts ***!
  \**************************************************/
/*! exports provided: ContactusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactusComponent", function() { return ContactusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactusComponent = /** @class */ (function () {
    function ContactusComponent() {
    }
    ContactusComponent.prototype.ngOnInit = function () {
    };
    ContactusComponent.prototype.contact = function () {
        this.router.navigate(['']);
    };
    ContactusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contactus',
            template: __webpack_require__(/*! ./contactus.component.html */ "./src/app/contactus/contactus.component.html"),
            styles: [__webpack_require__(/*! ./contactus.component.css */ "./src/app/contactus/contactus.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactusComponent);
    return ContactusComponent;
}());



/***/ }),

/***/ "./src/app/create/create.component.css":
/*!*********************************************!*\
  !*** ./src/app/create/create.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form{\r\n  margin: 3em;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3JlYXRlL2NyZWF0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvY3JlYXRlL2NyZWF0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9ybXtcclxuICBtYXJnaW46IDNlbTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/create/create.component.html":
/*!**********************************************!*\
  !*** ./src/app/create/create.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<form (ngSubmit)=\"createNewBook(newBook)\">\n  <div class=\"form-group row\">\n    <label for=\"author\" class=\"offset-sm-2 col-sm-2 col-form-label\">Title</label>\n    <div class=\"col-sm-4\">\n      <input type=\"text\" class=\"form-control\" id=\"name\" name=\"name\" [(ngModel)]=\"newBook.name\" required minlength=\"4\"  placeholder=\"Book Name\">\n    </div>\n\n\n  </div>\n  <div class=\"form-group row\">\n    <label for=\"author\" class=\"offset-sm-2 col-sm-2 col-form-label\">Genre</label>\n    <div class=\"col-sm-4\">\n      <input type=\"text\" class=\"form-control\" id=\"type\" name=\"type\" [(ngModel)]=\"newBook.type\" required placeholder=\"Genre\">\n    </div>\n  </div>\n  <div class=\"form-group row\">\n    <label for=\"author\" class=\"offset-sm-2 col-sm-2 col-form-label\">Publisher</label>\n    <div class=\"col-sm-4\">\n      <input type=\"text\" class=\"form-control\" id=\"publisher\" name=\"publisher\" [(ngModel)]=\"newBook.publisher\" required placeholder=\"Publisher\">\n    </div>\n  </div>\n  <div class=\"form-group row\">\n    <label for=\"author\" class=\"offset-sm-2 col-sm-2 col-form-label\">ISBN</label>\n    <div class=\"col-sm-4\">\n      <input type=\"text\" class=\"form-control\" id=\"ISBN\" name=\"ISBN\" [(ngModel)]=\"newBook.ISBN\" required placeholder=\"ISBN\">\n    </div>\n  </div>\n  <div class=\"form-group row\">\n    <label for=\"author\" class=\"offset-sm-2 col-sm-2 col-form-label\">Author</label>\n    <div class=\"col-sm-4\">\n      <input type=\"text\" class=\"form-control\" id=\"author\" name=\"author\" [(ngModel)]=\"newBook.author\" required placeholder=\"Author\">\n    </div>\n  </div>\n  <div class=\"form-group row\">\n    <label for=\"author\" class=\"offset-sm-2 col-sm-2 col-form-label\">Year</label>\n    <div class=\"col-sm-4\">\n      <input type=\"text\" class=\"form-control\" id=\"year\" name=\"year\" [(ngModel)]=\"newBook.year\" required placeholder=\"Year\">\n    </div>\n  </div>\n  <div class=\"form-group row\">\n    <label for=\"author\" class=\"offset-sm-2 col-sm-2 col-form-label\">Description</label>\n    <div class=\"col-sm-4\">\n      <input type=\"text\" class=\"form-control\" id=\"description\" name=\"description\" [(ngModel)]=\"newBook.description\" required placeholder=\"Description\">\n    </div>\n  </div>\n  <div class=\"form-group row\">\n    <label for=\"img\" class=\"offset-sm-2 col-sm-2 col-form-label\">Image Link</label>\n    <div class=\"col-sm-4\">\n      <input type=\"text\" class=\"form-control\" id=\"img\" name=\"img\" [(ngModel)]=\"newBook.img\" required placeholder=\"Image Link\">\n    </div>\n  </div>\n  <div class=\"form-group row\">\n    <div class=\"col-sm-6 offset-sm-2\">\n      <button type=\"submit\" class=\"btn btn-primary\">Create</button>\n    </div>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/create/create.component.ts":
/*!********************************************!*\
  !*** ./src/app/create/create.component.ts ***!
  \********************************************/
/*! exports provided: CreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateComponent", function() { return CreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _book_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../book-service.service */ "./src/app/book-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var CreateComponent = /** @class */ (function () {
    function CreateComponent(bookDataService, router) {
        this.bookDataService = bookDataService;
        this.router = router;
        this.newBook = {
            name: '',
            type: '',
            publisher: '',
            ISBN: '',
            author: '',
            year: '',
            description: '',
            img: ''
        };
    }
    CreateComponent.prototype.ngOnInit = function () {
    };
    CreateComponent.prototype.createNewBook = function (newBook) {
        this.bookDataService.createBook(newBook);
        this.router.navigate(['']);
    };
    CreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create',
            template: __webpack_require__(/*! ./create.component.html */ "./src/app/create/create.component.html"),
            providers: [_book_service_service__WEBPACK_IMPORTED_MODULE_2__["BookDataService"]],
            styles: [__webpack_require__(/*! ./create.component.css */ "./src/app/create/create.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_book_service_service__WEBPACK_IMPORTED_MODULE_2__["BookDataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], CreateComponent);
    return CreateComponent;
}());



/***/ }),

/***/ "./src/app/details-page/details-page.component.css":
/*!*********************************************************!*\
  !*** ./src/app/details-page/details-page.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form{\r\n  width: 50%;\r\n  margin: 0 auto;\r\n}\r\n\r\nbutton{\r\n  margin-right: 1.5em;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGV0YWlscy1wYWdlL2RldGFpbHMtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBVTtFQUNWLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9kZXRhaWxzLXBhZ2UvZGV0YWlscy1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb3Jte1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbmJ1dHRvbntcclxuICBtYXJnaW4tcmlnaHQ6IDEuNWVtO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/details-page/details-page.component.html":
/*!**********************************************************!*\
  !*** ./src/app/details-page/details-page.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<br>\n\n<br>\n<form (ngSubmit)=\"updatebook(newBook)\">\n  <div class=\"form-row\">\n    <div class=\"col-md-6 mb-3 md-form\">\n      <label for=\"name\">Name::</label>\n      <input [(ngModel)]=\"pageContent.header.title\" id=\"name\"   type=\"text\" class=\"form-control\" placeholder=\"Enter book Name\" name=\"name\" required=\"required\">\n    </div>\n    <br>\n    <div class=\"col-md-6 mb-3 md-form\">\n      <label for=\"type\">Type::</label>&nbsp;&nbsp;&nbsp;\n      <input [(ngModel)]=\"pageContent.header.type\" type=\"text\" class=\"form-control\" id=\"type\" name=\"type\" placeholder=\"Enter Type of Book\" required=\"required\">\n      <br>\n    </div>\n    <br>\n  </div>\n  <div class=\"form-row\">\n    <div class=\"col-md-6 mb-3 md-form\">\n      <label for=\"publisher\">Publisher::</label>&nbsp;&nbsp;&nbsp;\n      <input [(ngModel)]=\"pageContent.header.publisher\" type=\"text\" class=\"form-control\" id=\"publisher\" name=\"publisher\" placeholder=\" Enter Publisher\" required=\"required\">\n      <br>\n    </div>\n    <br>\n    <div class=\"col-md-6 mb-3 md-form\">\n      <label for=\"ISBN\">ISBN::</label>&nbsp;&nbsp;&nbsp;\n      <input [(ngModel)]=\"pageContent.header.ISBN\" type=\"text\" class=\"form-control\" id=\"ISBN\" name=\"ISBN\" placeholder=\"Enter ISBN Number \" required=\"required\">\n      <br>\n    </div>\n  </div>\n  <br>\n  <div class=\"form-row\">\n    <div class=\"col-md-6 mb-3 md-form\">\n      <label for=\"author\">Author::</label>&nbsp;&nbsp;&nbsp;\n      <input [(ngModel)]=\"pageContent.header.author\" type=\"text\" class=\"form-control\" id=\"author\" name=\"author\" placeholder=\"Enter Author\" required=\"required\">\n      <br>\n    </div>\n    <br>\n    <div class=\"col-md-6 mb-3 md-form\">\n      <label for=\"year\">Year::</label>&nbsp;&nbsp;&nbsp;\n      <input [(ngModel)]=\"pageContent.header.year\" type=\"text\" class=\"form-control\" id=\"year\" name=\"year\" placeholder=\"Enter Year of publish\" required=\"required\">\n    </div>\n\n  </div>\n  <div class=\"form-row\">\n    <div class=\"col-md-12 mb-6 md-form\">\n      <label for=\"author\">Description::</label>&nbsp;&nbsp;&nbsp;\n      <input [(ngModel)]=\"pageContent.header.description\" type=\"text\" class=\"form-control\" id=\"description\" name=\"description\" placeholder=\"Enter Description\" required=\"required\">\n      <br>\n    </div>\n\n  </div>\n  <div class=\"form-row\">\n    <div class=\"col-md-12 mb-6 md-form\">\n      <label for=\"img\">Image Link::</label>&nbsp;&nbsp;&nbsp;\n      <input [(ngModel)]=\"pageContent.header.img\" type=\"text\" class=\"form-control\" id=\"img\" name=\"img\" placeholder=\"Enter Image Link\" required=\"required\">\n      <br>\n    </div>\n\n  </div>\n  <br>\n  <button type=\"submit\" class=\"btn btn-primary\" >Update</button>\n  <button class=\"btn btn-danger\" (click)=\"deletebook(newBook._id)\">Delete</button>\n\n\n</form>\n\n\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/details-page/details-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/details-page/details-page.component.ts ***!
  \********************************************************/
/*! exports provided: DetailsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsPageComponent", function() { return DetailsPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _book_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../book-service.service */ "./src/app/book-service.service.ts");
/* harmony import */ var _book__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../book */ "./src/app/book.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");







var DetailsPageComponent = /** @class */ (function () {
    function DetailsPageComponent(BookDataService, route, router) {
        this.BookDataService = BookDataService;
        this.route = route;
        this.router = router;
        this.pageContent = {
            header: {
                id: '',
                title: '',
                body: '',
                type: '',
                publisher: '',
                year: '',
                author: '',
                ISBN: '',
                description: '',
                img: ''
            }
        };
    }
    DetailsPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (params) {
            return _this.BookDataService.getSingleBook(params['bookid']);
        }))
            .subscribe(function (newBook) {
            _this.newBook = newBook;
            _this.pageContent.header.id = newBook._id;
            _this.pageContent.header.title = newBook.name;
            _this.pageContent.header.type = newBook.type;
            _this.pageContent.header.publisher = newBook.publisher;
            _this.pageContent.header.year = newBook.year;
            _this.pageContent.header.author = newBook.author;
            _this.pageContent.header.ISBN = newBook.ISBN;
            _this.pageContent.header.description = newBook.description;
            _this.pageContent.header.img = newBook.img;
            // console.log(Book);
            //return(newBook);
        });
    };
    DetailsPageComponent.prototype.updatebook = function (newBook) {
        //newBook._id=this.pageContent.header.id;
        newBook.name = this.pageContent.header.title;
        newBook.type = this.pageContent.header.type;
        newBook.publisher = this.pageContent.header.publisher;
        newBook.author = this.pageContent.header.author;
        newBook.ISBN = this.pageContent.header.ISBN;
        newBook.description = this.pageContent.header.description;
        newBook.year = this.pageContent.header.year;
        newBook.img = this.pageContent.header.img;
        console.log(newBook._id);
        this.BookDataService.updatebook(newBook);
        this.router.navigate(['']);
    };
    DetailsPageComponent.prototype.deletebook = function (bookid) {
        this.BookDataService.deleteBook(bookid);
        this.router.navigate(['']);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _book__WEBPACK_IMPORTED_MODULE_4__["Book"])
    ], DetailsPageComponent.prototype, "newBook", void 0);
    DetailsPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-details-page',
            template: __webpack_require__(/*! ./details-page.component.html */ "./src/app/details-page/details-page.component.html"),
            providers: [_book_service_service__WEBPACK_IMPORTED_MODULE_3__["BookDataService"]],
            styles: [__webpack_require__(/*! ./details-page.component.css */ "./src/app/details-page/details-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_book_service_service__WEBPACK_IMPORTED_MODULE_3__["BookDataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], DetailsPageComponent);
    return DetailsPageComponent;
}());



/***/ }),

/***/ "./src/app/framework/framework.component.css":
/*!***************************************************!*\
  !*** ./src/app/framework/framework.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".topnav {\r\n  overflow: hidden;\r\n  background-color: #333;\r\n}\r\n\r\n.topnav a {\r\n  float: left;\r\n  color: #f2f2f2;\r\n  text-align: center;\r\n  padding: 14px 16px;\r\n  text-decoration: none;\r\n  font-size: 17px;\r\n}\r\n\r\n.topnav a:hover {\r\n  background-color: #ddd;\r\n  color: black;\r\n}\r\n\r\n.topnav a.active {\r\n  background-color: #4CAF50;\r\n  color: white;\r\n}\r\n\r\n.navbar-brand{\r\n  margin-right: 1.5em;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZnJhbWV3b3JrL2ZyYW1ld29yay5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvZnJhbWV3b3JrL2ZyYW1ld29yay5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvcG5hdiB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xyXG59XHJcblxyXG4udG9wbmF2IGEge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIGNvbG9yOiAjZjJmMmYyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxNHB4IDE2cHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxufVxyXG5cclxuLnRvcG5hdiBhOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLnRvcG5hdiBhLmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5uYXZiYXItYnJhbmR7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxLjVlbTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/framework/framework.component.html":
/*!****************************************************!*\
  !*** ./src/app/framework/framework.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n\n<!--Navbar -->\n<div class=\"topnav nav-c\">\n  <div>\n    <a class=\"navbar-brand\" href=\"#\">Paper-Weight Store</a>\n  </div>\n  <a class=\"active\" routerLink=\"\">Home</a>\n  <a routerLink=\"create\">Create</a>\n  <a routerLink=\"contact\">Contact Us</a>\n  <a routerLink=\"about\">About</a>\n</div>\n\n\n\n<!--/.Navbar -->\n\n<router-outlet></router-outlet>\n</body>\n"

/***/ }),

/***/ "./src/app/framework/framework.component.ts":
/*!**************************************************!*\
  !*** ./src/app/framework/framework.component.ts ***!
  \**************************************************/
/*! exports provided: FrameworkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrameworkComponent", function() { return FrameworkComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FrameworkComponent = /** @class */ (function () {
    function FrameworkComponent() {
    }
    FrameworkComponent.prototype.ngOnInit = function () {
    };
    FrameworkComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-framework',
            template: __webpack_require__(/*! ./framework.component.html */ "./src/app/framework/framework.component.html"),
            styles: [__webpack_require__(/*! ./framework.component.css */ "./src/app/framework/framework.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FrameworkComponent);
    return FrameworkComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".abc{\r\n  margin-top: 3em;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hYmN7XHJcbiAgbWFyZ2luLXRvcDogM2VtO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container text-center abc\">\n  <h1>{{ content.title }}</h1>\n\n      <p>Type::&nbsp;&nbsp;{{ content.type }}</p>\n      <p>Author::&nbsp;&nbsp;{{ content.author }}</p>\n      <p>Publisher::&nbsp;&nbsp;{{ content.publisher }}</p>\n      <p>Year::&nbsp;&nbsp;{{ content.year }}</p>\n      <p>ISBN::&nbsp;&nbsp;{{ content.ISBN }}</p>\n</div>\n\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


//import {Component,OnInit,Input} from "@angular/core";
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HeaderComponent.prototype, "content", void 0);
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home-list/home-list.component.css":
/*!***************************************************!*\
  !*** ./src/app/home-list/home-list.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n  box-sizing: border-box;\r\n}\r\n\r\n.book-section {\r\n  background-color: #f9f9f9;\r\n  margin: 2em;\r\n}\r\n\r\n.book-card {\r\n  display: flex;\r\n  background-color: #ffffff;\r\n  margin: 50px auto;\r\n  max-width: 800px;\r\n  width: 100%;\r\n}\r\n\r\n.book-card > .image {\r\n  flex: 0 0 50%;\r\n  position: relative;\r\n  overflow: hidden;\r\n  display: flex;\r\n  padding-top: 70px;\r\n  justify-content: center;\r\n}\r\n\r\n.book-card > .image:before {\r\n  -webkit-filter: blur(10px);\r\n  filter: blur(10px);\r\n  content: '';\r\n  background: url(https://unsplash.it/400/300);\r\n  background-size: cover;\r\n  display: block;\r\n  width: 120%;\r\n  height: 120%;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  z-index: 1;\r\n}\r\n\r\n.book-card > .image > .content {\r\n  z-index: 2;\r\n  position: relative;\r\n}\r\n\r\n.book-card > .text {\r\n  background-color: white;\r\n  flex: 0 0 50%;\r\n}\r\n\r\n.book-text {\r\n  padding: 32px;\r\n}\r\n\r\n.book-text > .genre {\r\n  color: #64ddc4;\r\n  display: block;\r\n  font-family: 'Open Sans', sans-serif;\r\n  font-size: 12px;\r\n  font-weight: 700;\r\n  margin-bottom: 32px;\r\n}\r\n\r\n.book-text > .heading {\r\n  color: #0a2832;\r\n  font-family: 'Arbutus Slab', serif;\r\n  font-size: 25px;\r\n  font-weight: 600;\r\n  margin-bottom: 3px;\r\n  line-height: 1.3;\r\n}\r\n\r\n.book-text > .author {\r\n  color: #40d3b4;\r\n  font-family: 'Crimson Text', serif;\r\n  font-weight: 700;\r\n  font-size: 14px;\r\n  line-height: 1.5;\r\n  margin-bottom: 3px;\r\n}\r\n\r\n.book-text > .rating {\r\n  color: #dfcd03;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.book-text > .description {\r\n  color: #a9a9a9;\r\n  line-height: 2;\r\n  font-family: 'Lato', sans-serif;\r\n  font-size: 12px;\r\n  font-weight: 700;\r\n}\r\n\r\n.footer {\r\n  margin-top: 100px;\r\n  display: flex;\r\n  justify-content: flex-end;\r\n}\r\n\r\n.button {\r\n  background-color: #10d1a5;\r\n  color: #ffffff;\r\n  font-family: 'Lato', sans-serif;\r\n  font-size: 12px;\r\n  font-weight: 700;\r\n  padding: 16px 20px;\r\n  letter-spacing: 0.5px;\r\n  align-text: center;\r\n  border-radius: 3px;\r\n}\r\n\r\n.button:hover {\r\n  background-color: #efefef;\r\n  color: #10d1a5;\r\n  cursor: pointer;\r\n}\r\n\r\n.book-meta {\r\n  color: white;\r\n  position: absolute;\r\n  bottom: 35px;\r\n  z-index: 2;\r\n  display: flex;\r\n  justify-content: center;\r\n  font-family: 'Crimson Text', serif;\r\n  font-size: 12px;\r\n  width: 100%;\r\n}\r\n\r\n.meta-item {\r\n  display: flex;\r\n  flex-direction: row-reverse;\r\n}\r\n\r\n.meta-item:not(:last-child) {\r\n  margin-right: 16px;\r\n}\r\n\r\n.meta-item > .icon {\r\n  font-size: 14px;\r\n  margin-right: 8px;\r\n}\r\n\r\n.book-cover {\r\n  width: 90%;\r\n  margin: 0 auto;\r\n  padding-bottom: 12px;\r\n}\r\n\r\n.book-cover > img {\r\n  width: 100%;\r\n  height: auto;\r\n}\r\n\r\n.book-description {\r\n  text-align: center;\r\n  color: #40d3b4;\r\n  font-family: 'Crimson Text', serif;\r\n  font-size: 14px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS1saXN0L2hvbWUtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7O0FBQ0E7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLHVCQUF1QjtBQUN6Qjs7QUFDQTtFQUNFLDBCQUEwQjtFQUMxQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLDRDQUE0QztFQUM1QyxzQkFBc0I7RUFDdEIsY0FBYztFQUNkLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBRVQsZ0NBQWdDO0VBQ2hDLFVBQVU7QUFDWjs7QUFDQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUNBO0VBQ0UsY0FBYztFQUNkLGNBQWM7RUFDZCxvQ0FBb0M7RUFDcEMsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBQ0E7RUFDRSxjQUFjO0VBQ2Qsa0NBQWtDO0VBQ2xDLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFLGNBQWM7RUFDZCxrQ0FBa0M7RUFDbEMsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UsY0FBYztFQUNkLG1CQUFtQjtBQUNyQjs7QUFDQTtFQUNFLGNBQWM7RUFDZCxjQUFjO0VBQ2QsK0JBQStCO0VBQy9CLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsK0JBQStCO0VBQy9CLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osVUFBVTtFQUNWLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsa0NBQWtDO0VBQ2xDLGVBQWU7RUFDZixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsMkJBQTJCO0FBQzdCOztBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixjQUFjO0VBQ2Qsb0JBQW9CO0FBQ3RCOztBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2Qsa0NBQWtDO0VBQ2xDLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9ob21lLWxpc3QvaG9tZS1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4uYm9vay1zZWN0aW9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xyXG4gIG1hcmdpbjogMmVtO1xyXG59XHJcblxyXG4uYm9vay1jYXJkIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgbWFyZ2luOiA1MHB4IGF1dG87XHJcbiAgbWF4LXdpZHRoOiA4MDBweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4uYm9vay1jYXJkID4gLmltYWdlIHtcclxuICBmbGV4OiAwIDAgNTAlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcGFkZGluZy10b3A6IDcwcHg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLmJvb2stY2FyZCA+IC5pbWFnZTpiZWZvcmUge1xyXG4gIC13ZWJraXQtZmlsdGVyOiBibHVyKDEwcHgpO1xyXG4gIGZpbHRlcjogYmx1cigxMHB4KTtcclxuICBjb250ZW50OiAnJztcclxuICBiYWNrZ3JvdW5kOiB1cmwoaHR0cHM6Ly91bnNwbGFzaC5pdC80MDAvMzAwKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAxMjAlO1xyXG4gIGhlaWdodDogMTIwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG4uYm9vay1jYXJkID4gLmltYWdlID4gLmNvbnRlbnQge1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5ib29rLWNhcmQgPiAudGV4dCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgZmxleDogMCAwIDUwJTtcclxufVxyXG5cclxuLmJvb2stdGV4dCB7XHJcbiAgcGFkZGluZzogMzJweDtcclxufVxyXG4uYm9vay10ZXh0ID4gLmdlbnJlIHtcclxuICBjb2xvcjogIzY0ZGRjNDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzJweDtcclxufVxyXG4uYm9vay10ZXh0ID4gLmhlYWRpbmcge1xyXG4gIGNvbG9yOiAjMGEyODMyO1xyXG4gIGZvbnQtZmFtaWx5OiAnQXJidXR1cyBTbGFiJywgc2VyaWY7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogM3B4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjM7XHJcbn1cclxuLmJvb2stdGV4dCA+IC5hdXRob3Ige1xyXG4gIGNvbG9yOiAjNDBkM2I0O1xyXG4gIGZvbnQtZmFtaWx5OiAnQ3JpbXNvbiBUZXh0Jywgc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICBtYXJnaW4tYm90dG9tOiAzcHg7XHJcbn1cclxuLmJvb2stdGV4dCA+IC5yYXRpbmcge1xyXG4gIGNvbG9yOiAjZGZjZDAzO1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuLmJvb2stdGV4dCA+IC5kZXNjcmlwdGlvbiB7XHJcbiAgY29sb3I6ICNhOWE5YTk7XHJcbiAgbGluZS1oZWlnaHQ6IDI7XHJcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuLmZvb3RlciB7XHJcbiAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG59XHJcblxyXG4uYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTBkMWE1O1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgcGFkZGluZzogMTZweCAyMHB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxuICBhbGlnbi10ZXh0OiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG59XHJcbi5idXR0b246aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XHJcbiAgY29sb3I6ICMxMGQxYTU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uYm9vay1tZXRhIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMzVweDtcclxuICB6LWluZGV4OiAyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6ICdDcmltc29uIFRleHQnLCBzZXJpZjtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5tZXRhLWl0ZW0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xyXG59XHJcbi5tZXRhLWl0ZW06bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG59XHJcbi5tZXRhLWl0ZW0gPiAuaWNvbiB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIG1hcmdpbi1yaWdodDogOHB4O1xyXG59XHJcblxyXG4uYm9vay1jb3ZlciB7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBwYWRkaW5nLWJvdHRvbTogMTJweDtcclxufVxyXG4uYm9vay1jb3ZlciA+IGltZyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uYm9vay1kZXNjcmlwdGlvbiB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiAjNDBkM2I0O1xyXG4gIGZvbnQtZmFtaWx5OiAnQ3JpbXNvbiBUZXh0Jywgc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/home-list/home-list.component.html":
/*!****************************************************!*\
  !*** ./src/app/home-list/home-list.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<section class='book-section' *ngFor=\"let book of books\">\n  <div class='book-card'>\n    <div class='image'>\n      <div class='content'>\n        <div class='book-cover'>\n          <img alt='Card Image' src={{book.img}}>\n        </div>\n      </div>\n      <ul class='book-meta'>\n        <li class='reads meta-item'>\n          <span class='text'>\n            <div class='read'>\n         {{book.read}}\n      </div>\n          </span>\n          <i class='material-icons icon'>\n            visibility\n          </i>\n        </li>\n        <li class='likes meta-item'>\n          <span class='text'>\n            <div class='author'>\n        likes {{book.likes}}\n          </div>\n          </span>\n        </li>\n      </ul>\n    </div>\n    <div class='text book-text'>\n      <span class='genre'>\n        {{book.type}}\n      </span>\n      <h1 class='heading'>\n        {{book.name}}\n      </h1>\n      <div class='author'>\n        by {{book.author}}\n      </div>\n      <div class='rating'>\n        ★★★★★\n      </div>\n      <article class='description'>\n        {{book.description}}\n      </article>\n      <footer class='footer'>\n        <a class='button' routerLink=\"book/{{book._id}}\">\n          Details\n        </a>\n      </footer>\n    </div>\n  </div>\n</section>\n\n\n"

/***/ }),

/***/ "./src/app/home-list/home-list.component.ts":
/*!**************************************************!*\
  !*** ./src/app/home-list/home-list.component.ts ***!
  \**************************************************/
/*! exports provided: HomeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeListComponent", function() { return HomeListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _book_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../book-service.service */ "./src/app/book-service.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var HomeListComponent = /** @class */ (function () {
    function HomeListComponent(bookService) {
        this.bookService = bookService;
    }
    HomeListComponent.prototype.deleteBook = function (bookid) {
        this.bookService.deleteBook(bookid);
    };
    HomeListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.bookService
            .getBooks()
            .then(function (books) {
            _this.books = books.map(function (book) {
                return book;
            });
        });
    };
    HomeListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home-list',
            template: __webpack_require__(/*! ./home-list.component.html */ "./src/app/home-list/home-list.component.html"),
            providers: [_book_service_service__WEBPACK_IMPORTED_MODULE_2__["BookDataService"]],
            styles: [__webpack_require__(/*! ./home-list.component.css */ "./src/app/home-list/home-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_book_service_service__WEBPACK_IMPORTED_MODULE_2__["BookDataService"]])
    ], HomeListComponent);
    return HomeListComponent;
}());



/***/ }),

/***/ "./src/app/homepage/homepage.component.css":
/*!*************************************************!*\
  !*** ./src/app/homepage/homepage.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWVwYWdlL2hvbWVwYWdlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/homepage/homepage.component.html":
/*!**************************************************!*\
  !*** ./src/app/homepage/homepage.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n<p>\n\n</p>\n\n\n  <app-home-list></app-home-list>\n\n</body>\n"

/***/ }),

/***/ "./src/app/homepage/homepage.component.ts":
/*!************************************************!*\
  !*** ./src/app/homepage/homepage.component.ts ***!
  \************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomepageComponent = /** @class */ (function () {
    function HomepageComponent() {
        this.pageContentHome = {
            header: {
                title: 'My Book List',
                body: ''
            }
        };
    }
    HomepageComponent.prototype.ngOnInit = function () {
    };
    HomepageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-homepage',
            template: __webpack_require__(/*! ./homepage.component.html */ "./src/app/homepage/homepage.component.html"),
            styles: [__webpack_require__(/*! ./homepage.component.css */ "./src/app/homepage/homepage.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomepageComponent);
    return HomepageComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/IqbalSaimbhi/Documents/ADLedgeBookstore/book-public/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
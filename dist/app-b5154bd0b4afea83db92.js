webpackJsonp([0],[,,function(n,t){},function(n,t,e){n.exports={template:e(10)}},function(n,t,e){n.exports={template:e(11)}},function(n,t,e){n.exports={template:e(12)}},function(n,t,e){var o=e(0),a=e(16),i=e(17);n.exports="techs",o.module("techs",[]).component("fountainTech",a).component("fountainTechs",i)},function(n,t,e){n.exports={template:e(15)}},function(n,t){function e(n,t,e){e.html5Mode(!0).hashPrefix("!"),t.otherwise("/"),n.state("app",{url:"/",component:"app"})}e.$inject=["$stateProvider","$urlRouterProvider","$locationProvider"],n.exports=e},,function(n,t){n.exports='<footer class="footer">\n  Build with ♥ by the&nbsp;\n  <a href="https://github.com/orgs/FountainJS/people">\n    FountainJS team\n  </a>\n</footer>\n'},function(n,t){n.exports='<header class="header">\n  <p class="header-title">\n    <a href="https://github.com/FountainJS/generator-fountain-webapp" target="_blank" rel="noopener noreferrer">\n      Fountain Generator\n    </a>\n  </p>\n  <p class="header-date">\n    Generated with FountainJS v1.0.0 on Wed Feb 22 2017 09:31:10 GMT+0100 (CET)\n  </p>\n</header>\n'},function(n,t){n.exports='<div class="main-container">\n  <fountain-header></fountain-header>\n  <main class="main">\n    <fountain-title></fountain-title>\n    <fountain-techs></fountain-techs>\n  </main>\n  <fountain-footer></fountain-footer>\n</div>\n'},function(n,t){n.exports='<div class="tech">\n  <img class="tech-logo" ng-src="{{ $ctrl.tech.logo }}"/>\n  <h3 class="tech-h3">\n    {{ $ctrl.tech.title }}\n  </h3>\n  <p>{{ $ctrl.tech.text1 }}</p>\n  <p>{{ $ctrl.tech.text2 }}</p>\n</div>\n'},function(n,t){n.exports='<div class="techs-container">\n  <h2 class="techs-h2">\n    Cooked with all these awesome technologies:\n  </h2>\n  <div class="techs">\n    <fountain-tech ng-repeat="tech in $ctrl.techs" tech="tech"></fountain-tech>\n  </div>\n</div>\n'},function(n,t){n.exports='<div class="title">\n  <h1 class="title-h1">\'Allo, \'Allo!</h1>\n  <div>\n    <img class="title-logo" src="http://fountainjs.io/assets/imgs/yeoman.png"/>\n    <img class="title-logo" src="http://fountainjs.io/assets/imgs/fountain.png"/>\n  </div>\n  <h2 class="title-h2">Always a pleasure scaffolding your apps.</h2>\n</div>\n'},function(n,t,e){n.exports={template:e(13),bindings:{tech:"<"}}},function(n,t,e){function o(n){var t=this;n.get("app/techs/techs.json").then(function(n){t.techs=n.data})}o.$inject=["$http"],n.exports={template:e(14),controller:o}},function(n,t,e){var o=e(0),a=e(6);e(1);var i=e(8),s=e(5),c=e(4),r=e(7),h=e(3);e(2),o.module("app",[a,"ui.router"]).config(i).component("app",s).component("fountainHeader",c).component("fountainTitle",r).component("fountainFooter",h)}],[18]);
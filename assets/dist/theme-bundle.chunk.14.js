webpackJsonp([14],{430:function(t,e,o){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var c=o(14),a=o(420),s=o(1),u=o.n(s),p=o(421),f=function(t){function e(){return n(this,e),r(this,t.apply(this,arguments))}return i(e,t),e.prototype.loaded=function(){console.log("category.js"),u()("#facetedSearch").length>0?this.initFacetedSearch():(this.onSortBySubmit=this.onSortBySubmit.bind(this),c.c.on("sortBy-submitted",this.onSortBySubmit))},e.prototype.initFacetedSearch=function(){var t=u()("#product-listing-container"),e=u()("#faceted-search-container"),o=this.context.categoryProductsPerPage,n={config:{category:{shop_by_price:!0,products:{limit:o,brand:1}}},template:{productListing:"category/product-listing",sidebar:"category/sidebar"},showMore:"category/show-more"};this.facetedSearch=new p.a(n,function(o){t.html(o.productListing),e.html(o.sidebar),u()("html, body").animate({scrollTop:0},100)})},e}(a.a);e.default=f}});
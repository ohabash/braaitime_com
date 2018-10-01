webpackJsonp([10],{441:function(t,e,a){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var r=a(65),s=a(1),c=a.n(s),l=a(104),d=(a(14),a(424)),u=(a.n(d),a(163)),p=function(t){function e(){return n(this,e),o(this,t.apply(this,arguments))}return i(e,t),e.prototype.loaded=function(t){this.admin(),this.getFaqs(),t()},e.prototype.admin=function(){var t=this;u.a.check(function(e){console.info("admin: ",e),window.admin=e,e&&t.rightClick()})},e.prototype.getFaqs=function(){var t=this;return l.a.subscribe("faqs").on("value",function(e){var a=e.val();window.FAQs=a,t.renderCategories(a)})},e.prototype.renderCategories=function(t){var e=this,a=c.a.templates("#tabs_markup");try{var n=Object.values([t][0])}catch(t){var n=[]}var o=a.render(n);c()("[data-tabs]").html(o);var a=c.a.templates("#category_markup"),o=a.render(n);c()("[data-categories]").html(o),this.load_add_form(n),this.accordions(),setTimeout(function(){e.tabListener()},500)},e.prototype.load_add_form=function(t){if(admin){c()("[data-categories-select] option.added").remove();var e=c.a.templates("#category_select"),a=e.render(t);c()("[data-categories-select]").append(a),this.category_selected()}},e.prototype.renderItems=function(t){console.log(t);var e=c.a.templates("#questions_markup"),a=Object.values([FAQs[t]][0]),n=e.render(a);c()("[data-questions-"+t+"]").html(n),this.accordions()},e.prototype.tabListener=function(){var t=this;c()('[data-slug="placing-an-order"]').closest("li").addClass("active"),c()(".tab-pane#placing-an-order").addClass("active"),t.renderItems("placing-an-order"),c()("[data-slug]").click(function(){t.renderItems(c()(this).data("slug"))})},e.prototype.addFaq=function(t,e,a){var n=this.slugify(t),o={q:e,a:a,in:n};l.a.post("faqs/"+n,o),l.a.write("faqs/"+n+"/name",t),l.a.write("faqs/"+n+"/slug",n)},e.prototype.updateFaq=function(t,e,a){l.a.write("faqs/"+t.path+"/q",e),l.a.write("faqs/"+t.path+"/a",a)},e.prototype.removeFaq=function(t){l.a.remove("faqs/"+t)},e.prototype.slugify=function(t){return t.toLowerCase().replace(/ /g,"-").replace(/[^\w-]+/g,"")},e.prototype.accordions=function(){c()(".container.xx").removeClass("container"),c()("body.inside header").css("margin",0),function(){function t(t,e,a){t.setAttribute(e,a)}function e(e,a,n){switch(n){case"true":t(e,"aria-expanded","true"),t(a,"aria-hidden","false");break;case"false":t(e,"aria-expanded","false"),t(a,"aria-hidden","true")}}function a(t){t.preventDefault();var a=t.target.parentNode.nextElementSibling,n=t.target;a.classList.contains("is-collapsed")?e(n,a,"true"):e(n,a,"false"),n.classList.toggle("is-collapsed"),n.classList.toggle("is-expanded"),a.classList.toggle("is-collapsed"),a.classList.toggle("is-expanded"),a.classList.toggle("animateIn")}for(var e,a,n=document,o=n.querySelectorAll(".js-accordionTrigger"),i=(window,window,0),r=o.length;i<r;i++)o[i].addEventListener("click",a,!1)}()},e.prototype.category_selected=function(){c()("[data-categories-select]").on("change",function(){"new"==this.value?(c()("input#category").val(""),c()("p.p-new").removeClass("hide")):(c()("p.p-new").addClass("hide"),c()("p.p-new input").val(c()(this).val()))})},e.prototype.rightClick=function(){var t=this;c()("#faq").bind("contextmenu",function(e){e.preventDefault(),window.target={id:c()(e.target).data("id"),in:c()(e.target).data("in"),question:c()(e.target).html(),answer:c()(e.target).closest("dt").next("dd").find("p").html()},target.path=target.in+"/"+target.id,void 0!==target.in?(c()("[data-categories-select]").val(target.in),c()("#category").val(target.in),c()("#question").val(target.question),c()("#answer").val(target.answer),c()("a.red").removeClass("hide"),c()("a.red").dblclick(function(){t.removeFaq(target.path)})):(c()("a.red").addClass("hide"),c()("form#contextForm input").not(":input[type=submit]").val(""),c()("[data-categories-select]").val(c()("[data-categories-select] option:first").val())),c()("ul.contextMenu").show().css({top:e.pageY+15,left:e.pageX+10})}),c()(document).click(function(){0==c()("ul.contextMenu").is(":hover")&&c()("ul.contextMenu").fadeOut("fast")}),c()("#contextForm").submit(function(e){e.preventDefault(),c()("ul.contextMenu").fadeOut("fast"),t.contextSubmit(c()(this),target)})},e.prototype.contextSubmit=function(t,e){var a={question:t.find("#question").val(),category:t.find("#category").val(),answer:t.find("#answer").val()};this.slugify(a.category);t.find("input").not(":input[type=submit]").val(""),c()("[data-categories-select]").val(c()("[data-categories-select] option:first").val()),void 0===e.in?this.addFaq(a.category,a.question,a.answer):this.updateFaq(e,a.question,a.answer)},e}(r.a);e.default=p}});
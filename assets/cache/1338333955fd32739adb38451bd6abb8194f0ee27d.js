
window.log=function f(){log.history=log.history||[];log.history.push(arguments);if(this.console){var args=arguments,newarr;args.callee=args.callee.caller;newarr=[].slice.call(args);if(typeof console.log==='object')log.apply.call(console.log,console,newarr);else console.log.apply(console,newarr);}};(function(a){function b(){}for(var c="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","),d;!!(d=c.pop());){a[d]=a[d]||b;}})
(function(){try{console.log();return window.console;}catch(a){return(window.console={});}}());

var fatorfiction=function(){var self={browserSupported:null,trackingActions:{ROLL_OVER:"Rollover",VIEW_CHANGE:"View Change",BROWSER_UNSUPPORTED:"Browser Unsupported",OUTBOUND:"Outbound"},$footerSocial:null,$annaChristinaDavid:null,init:function(){this.testBrowserSupport();if(this.browserSupported)this.setup();},setup:function(){this.$footerSocial=$('footer.social');this.$annaChristinaDavid=$('ul.anna-christina-david');this.addShareLinks();this.addEventListeners();},testBrowserSupport:function(){if(Modernizr.canvas&&Modernizr.fontface&&Modernizr.history){this.browserSupported=true;}else{this.browserSupported=false;if(typeof unsupported!='undefined'){this.trackEvent(pageUrl,this.trackingActions.BROWSER_UNSUPPORTED,browser);window.location='/error/unsupported';}}},addShareLinks:function(){var url=encodeURIComponent(pageUrl);var text=encodeURIComponent("@fatorfiction");var twitterUrl="http://twitter.com/share?url="+url+"&text="+text;var facebookUrl="http://www.facebook.com/sharer.php?u="+url;this.$footerSocial.find('ul li a.twitter').attr('href',twitterUrl);this.$footerSocial.find('ul li a.facebook').attr('href',facebookUrl);},addEventListeners:function(){var _this=this;this.$footerSocial.find('ul li a').click(function(event){var url=$(this).attr('href');_this.trackOutboundEvent(pageUrl,_this.trackingActions.OUTBOUND,url);});this.$annaChristinaDavid.find('li a').click(function(event){var url=$(this).attr('href');_this.trackOutboundEvent(pageUrl,_this.trackingActions.OUTBOUND,url);});},trackEvent:function(category,action,label){_gaq.push(['_trackEvent',category,action,label]);},trackOutboundEvent:function(category,action,link){_gaq.push(['_trackEvent',category,action,link]);}};return self;}();$(function(){fatorfiction.init();});
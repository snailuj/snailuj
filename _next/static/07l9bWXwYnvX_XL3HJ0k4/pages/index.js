(window.webpackJsonp=window.webpackJsonp||[]).push([["d0a3"],{"9Jkg":function(e,t,r){e.exports=r("oh+g")},RNiq:function(e,t,r){"use strict";r.r(t);r("G2uL");var n=r("q1tI"),o=r.n(n),a=r("YFqc"),l=r.n(a);r("IP2g");t.default=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"container"},o.a.createElement("nav",null,o.a.createElement(l.a,{prefetch:!0,href:"blank"},o.a.createElement("a",null,"Blank Sample")),o.a.createElement(l.a,{prefetch:!0,href:"full"},o.a.createElement("a",null,"Full Sample")))))}},YFqc:function(e,t,r){e.exports=r("cTJO")},cTJO:function(e,t,r){"use strict";var n=r("KI45"),o=n(r("9Jkg")),a=n(r("/HRN")),l=n(r("WaGi")),i=n(r("ZDA2")),f=n(r("/+P4")),u=n(r("N9n2")),p=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t},s=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var c=r("CxY0"),h=p(r("q1tI")),d=(s(r("lgD3")),p(r("nOHt"))),v=r("Bu4q");function m(e){return e&&"object"==typeof e?v.formatWithValidation(e):e}var _=function(e){function t(){var e,r,n,o,l;return(0,a.default)(this,t),(e=(0,i.default)(this,(0,f.default)(t).apply(this,arguments))).formatUrls=(r=function(e,t){return{href:m(e),as:m(t)}},n=null,o=null,l=null,function(e,t){if(e===n&&t===o)return l;var a=r(e,t);return n=e,o=t,l=a,a}),e.linkClicked=function(t){var r=t.currentTarget,n=r.nodeName,o=r.target;if("A"!==n||!(o&&"_self"!==o||t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which)){var a=e.formatUrls(e.props.href,e.props.as),l=a.href,i=a.as;if(function(e){var t=c.parse(e,!1,!0),r=c.parse(v.getLocationOrigin(),!1,!0);return!t.host||t.protocol===r.protocol&&t.host===r.host}(l)){var f=window.location.pathname;l=c.resolve(f,l),i=i?c.resolve(f,i):l,t.preventDefault();var u=e.props.scroll;null==u&&(u=i.indexOf("#")<0),d.default[e.props.replace?"replace":"push"](l,i,{shallow:e.props.shallow}).then(function(e){e&&u&&(window.scrollTo(0,0),document.body.focus())}).catch(function(t){e.props.onError&&e.props.onError(t)})}}},e}return(0,u.default)(t,e),(0,l.default)(t,[{key:"componentDidMount",value:function(){this.prefetch()}},{key:"componentDidUpdate",value:function(e){(0,o.default)(this.props.href)!==(0,o.default)(e.href)&&this.prefetch()}},{key:"prefetch",value:function(){if(this.props.prefetch&&"undefined"!=typeof window){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as).href,r=c.resolve(e,t);d.default.prefetch(r)}}},{key:"render",value:function(){var e=this,t=this.props.children,r=this.formatUrls(this.props.href,this.props.as),n=r.href,o=r.as;"string"==typeof t&&(t=h.default.createElement("a",null,t));var a=h.Children.only(t),l={onClick:function(t){a.props&&"function"==typeof a.props.onClick&&a.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==a.type||"href"in a.props)||(l.href=o||n),l.href&&"undefined"!=typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(l.href=d.Router._rewriteUrlForNextExport(l.href)),h.default.cloneElement(a,l)}}]),t}(h.Component);t.default=_},"oh+g":function(e,t,r){var n=r("WEpk"),o=n.JSON||(n.JSON={stringify:JSON.stringify});e.exports=function(e){return o.stringify.apply(o,arguments)}},vlRD:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){var e=r("RNiq");return{page:e.default||e}}])}},[["vlRD","5d41","9da1"]]]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"9Bt9":function(t,e,n){"use strict";n.d(e,"f",function(){return B}),n.d(e,"d",function(){return Y}),n.d(e,"b",function(){return G}),n.d(e,"i",function(){return k}),n.d(e,"j",function(){return S}),n.d(e,"g",function(){return K}),n.d(e,"h",function(){return F}),n.d(e,"e",function(){return V}),n.d(e,"a",function(){return q}),n.d(e,"c",function(){return U}),n.d(e,"k",function(){return H});var i=n("dWZg"),r=n("n6gG"),o=n("K9Ia"),s=n("pugT"),a=n("6blF"),l=n("p0ib"),c=n("CcnG"),d=n("Ip0R"),h=n("qAlS"),p=n("67Y/"),u=n("t9fZ"),_=n("ny24"),g=n("p0Sj"),f=n("xMyE"),m=n("15JJ");function b(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t}function v(t,e){var n=e?"":"none";b(t.style,{touchAction:e?"":"none",webkitUserDrag:e?"":"none",webkitTapHighlightColor:e?"":"transparent",userSelect:n,msUserSelect:n,webkitUserSelect:n,MozUserSelect:n})}function y(t){var e=t.toLowerCase().indexOf("ms")>-1?1:1e3;return parseFloat(t)*e}function D(t,e){return t.getPropertyValue(e).split(",").map(function(t){return t.trim()})}var x=Object(i.e)({passive:!0}),w=Object(i.e)({passive:!1}),R=function(){function t(t,e,n,i,r,l){var c=this;this._config=e,this._document=n,this._ngZone=i,this._viewportRuler=r,this._dragDropRegistry=l,this._passiveTransform={x:0,y:0},this._activeTransform={x:0,y:0},this._moveEvents=new o.a,this._moveEventSubscriptions=0,this._pointerMoveSubscription=s.a.EMPTY,this._pointerUpSubscription=s.a.EMPTY,this._boundaryElement=null,this._nativeInteractionsEnabled=!0,this._handles=[],this._disabledHandles=new Set,this._direction="ltr",this._disabled=!1,this.beforeStarted=new o.a,this.started=new o.a,this.released=new o.a,this.ended=new o.a,this.entered=new o.a,this.exited=new o.a,this.dropped=new o.a,this.moved=new a.a(function(t){var e=c._moveEvents.subscribe(t);return c._moveEventSubscriptions++,function(){e.unsubscribe(),c._moveEventSubscriptions--}}),this._pointerDown=function(t){if(c.beforeStarted.next(),c._handles.length){var e=c._handles.find(function(e){var n=t.target;return!!n&&(n===e||e.contains(n))});!e||c._disabledHandles.has(e)||c.disabled||c._initializeDragSequence(e,t)}else c.disabled||c._initializeDragSequence(c._rootElement,t)},this._pointerMove=function(t){if(c._hasStartedDragging){c._boundaryElement&&(c._previewRect&&(c._previewRect.width||c._previewRect.height)||(c._previewRect=(c._preview||c._rootElement).getBoundingClientRect()));var e=c._getConstrainedPointerPosition(t);if(c._hasMoved=!0,t.preventDefault(),c._updatePointerDirectionDelta(e),c._dropContainer)c._updateActiveDropContainer(e);else{var n=c._activeTransform;n.x=e.x-c._pickupPositionOnPage.x+c._passiveTransform.x,n.y=e.y-c._pickupPositionOnPage.y+c._passiveTransform.y;var i=P(n.x,n.y);c._rootElement.style.transform=c._initialTransform?i+" "+c._initialTransform:i,"undefined"!=typeof SVGElement&&c._rootElement instanceof SVGElement&&c._rootElement.setAttribute("transform","translate("+n.x+" "+n.y+")")}c._moveEventSubscriptions>0&&c._ngZone.run(function(){c._moveEvents.next({source:c,pointerPosition:e,event:t,delta:c._pointerDirectionDelta})})}else{var r=c._getPointerPositionOnPage(t);Math.abs(r.x-c._pickupPositionOnPage.x)+Math.abs(r.y-c._pickupPositionOnPage.y)>=c._config.dragStartThreshold&&(c._hasStartedDragging=!0,c._ngZone.run(function(){return c._startDragSequence(t)}))}},this._pointerUp=function(t){if(c._dragDropRegistry.isDragging(c)&&(c._removeSubscriptions(),c._dragDropRegistry.stopDragging(c),c._handles&&(c._rootElement.style.webkitTapHighlightColor=c._rootElementTapHighlight),c._hasStartedDragging)){if(c.released.next({source:c}),!c._dropContainer)return c._passiveTransform.x=c._activeTransform.x,c._passiveTransform.y=c._activeTransform.y,c._ngZone.run(function(){return c.ended.next({source:c})}),void c._dragDropRegistry.stopDragging(c);c._animatePreviewToPlaceholder().then(function(){c._cleanupDragArtifacts(t),c._dragDropRegistry.stopDragging(c)})}},this.withRootElement(t),l.registerDragItem(this)}return Object.defineProperty(t.prototype,"disabled",{get:function(){return this._disabled||!(!this._dropContainer||!this._dropContainer.disabled)},set:function(t){var e=Object(r.c)(t);e!==this._disabled&&(this._disabled=e,this._toggleNativeDragInteractions())},enumerable:!0,configurable:!0}),t.prototype.getPlaceholderElement=function(){return this._placeholder},t.prototype.getRootElement=function(){return this._rootElement},t.prototype.withHandles=function(t){return this._handles=t.map(function(t){return Object(r.e)(t)}),this._handles.forEach(function(t){return v(t,!1)}),this._toggleNativeDragInteractions(),this},t.prototype.withPreviewTemplate=function(t){return this._previewTemplate=t,this},t.prototype.withPlaceholderTemplate=function(t){return this._placeholderTemplate=t,this},t.prototype.withRootElement=function(t){var e=Object(r.e)(t);return e!==this._rootElement&&(this._rootElement&&this._removeRootElementListeners(this._rootElement),e.addEventListener("mousedown",this._pointerDown,w),e.addEventListener("touchstart",this._pointerDown,x),this._initialTransform=void 0,this._rootElement=e),this},t.prototype.withBoundaryElement=function(t){return this._boundaryElement=t?Object(r.e)(t):null,this},t.prototype.dispose=function(){this._removeRootElementListeners(this._rootElement),this.isDragging()&&I(this._rootElement),this._destroyPreview(),this._destroyPlaceholder(),this._dragDropRegistry.removeDragItem(this),this._removeSubscriptions(),this.beforeStarted.complete(),this.started.complete(),this.released.complete(),this.ended.complete(),this.entered.complete(),this.exited.complete(),this.dropped.complete(),this._moveEvents.complete(),this._handles=[],this._disabledHandles.clear(),this._dropContainer=void 0,this._boundaryElement=this._rootElement=this._placeholderTemplate=this._previewTemplate=this._nextSibling=null},t.prototype.isDragging=function(){return this._hasStartedDragging&&this._dragDropRegistry.isDragging(this)},t.prototype.reset=function(){this._rootElement.style.transform=this._initialTransform||"",this._activeTransform={x:0,y:0},this._passiveTransform={x:0,y:0}},t.prototype.disableHandle=function(t){this._handles.indexOf(t)>-1&&this._disabledHandles.add(t)},t.prototype.enableHandle=function(t){this._disabledHandles.delete(t)},t.prototype.withDirection=function(t){return this._direction=t,this},t.prototype._withDropContainer=function(t){this._dropContainer=t},t.prototype._removeSubscriptions=function(){this._pointerMoveSubscription.unsubscribe(),this._pointerUpSubscription.unsubscribe()},t.prototype._destroyPreview=function(){this._preview&&I(this._preview),this._previewRef&&this._previewRef.destroy(),this._preview=this._previewRef=null},t.prototype._destroyPlaceholder=function(){this._placeholder&&I(this._placeholder),this._placeholderRef&&this._placeholderRef.destroy(),this._placeholder=this._placeholderRef=null},t.prototype._startDragSequence=function(t){if(this.started.next({source:this}),O(t)&&(this._lastTouchEventTime=Date.now()),this._dropContainer){var e=this._rootElement;this._nextSibling=e.nextSibling;var n=this._preview=this._createPreviewElement(),i=this._placeholder=this._createPlaceholderElement();e.style.display="none",this._document.body.appendChild(e.parentNode.replaceChild(i,e)),this._document.body.appendChild(n),this._dropContainer.start()}},t.prototype._initializeDragSequence=function(t,e){e.stopPropagation();var n=this.isDragging(),i=O(e),r=!i&&0!==e.button,o=this._rootElement,s=!i&&this._lastTouchEventTime&&this._lastTouchEventTime+800>Date.now();if(e.target&&e.target.draggable&&"mousedown"===e.type&&e.preventDefault(),!(n||r||s)){null==this._initialTransform&&(this._initialTransform=this._rootElement.style.transform||""),this._handles.length&&(this._rootElementTapHighlight=o.style.webkitTapHighlightColor,o.style.webkitTapHighlightColor="transparent"),this._toggleNativeDragInteractions(),this._hasStartedDragging=this._hasMoved=!1,this._initialContainer=this._dropContainer,this._pointerMoveSubscription=this._dragDropRegistry.pointerMove.subscribe(this._pointerMove),this._pointerUpSubscription=this._dragDropRegistry.pointerUp.subscribe(this._pointerUp),this._scrollPosition=this._viewportRuler.getViewportScrollPosition(),this._boundaryElement&&(this._boundaryRect=this._boundaryElement.getBoundingClientRect()),this._pickupPositionInElement=this._previewTemplate&&this._previewTemplate.template?{x:0,y:0}:this._getPointerPositionInElement(t,e);var a=this._pickupPositionOnPage=this._getPointerPositionOnPage(e);this._pointerDirectionDelta={x:0,y:0},this._pointerPositionAtLastDirectionChange={x:a.x,y:a.y},this._dragDropRegistry.startDragging(this,e)}},t.prototype._cleanupDragArtifacts=function(t){var e=this;this._rootElement.style.display="",this._nextSibling?this._nextSibling.parentNode.insertBefore(this._rootElement,this._nextSibling):this._initialContainer.element.appendChild(this._rootElement),this._destroyPreview(),this._destroyPlaceholder(),this._boundaryRect=this._previewRect=void 0,this._ngZone.run(function(){var n=e._dropContainer,i=n.getItemIndex(e),r=e._getPointerPositionOnPage(t),o=n._isOverContainer(r.x,r.y);e.ended.next({source:e}),e.dropped.next({item:e,currentIndex:i,previousIndex:e._initialContainer.getItemIndex(e),container:n,previousContainer:e._initialContainer,isPointerOverContainer:o}),n.drop(e,i,e._initialContainer,o),e._dropContainer=e._initialContainer})},t.prototype._updateActiveDropContainer=function(t){var e=this,n=t.x,i=t.y,r=this._dropContainer._getSiblingContainerFromPosition(this,n,i)||this._initialContainer._getSiblingContainerFromPosition(this,n,i);!r&&this._dropContainer!==this._initialContainer&&this._initialContainer._isOverContainer(n,i)&&(r=this._initialContainer),r&&r!==this._dropContainer&&this._ngZone.run(function(){e.exited.next({item:e,container:e._dropContainer}),e._dropContainer.exit(e),e.entered.next({item:e,container:r}),e._dropContainer=r,e._dropContainer.enter(e,n,i)}),this._dropContainer._sortItem(this,n,i,this._pointerDirectionDelta),this._preview.style.transform=P(n-this._pickupPositionInElement.x,i-this._pickupPositionInElement.y)},t.prototype._createPreviewElement=function(){var t,e=this._previewTemplate,n=e?e.template:null;if(n){var i=e.viewContainer.createEmbeddedView(n,e.context);t=i.rootNodes[0],this._previewRef=i,t.style.transform=P(this._pickupPositionOnPage.x,this._pickupPositionOnPage.y)}else{var r=this._rootElement,o=r.getBoundingClientRect();(t=E(r)).style.width=o.width+"px",t.style.height=o.height+"px",t.style.transform=P(o.left,o.top)}return b(t.style,{pointerEvents:"none",position:"fixed",top:"0",left:"0",zIndex:"1000"}),v(t,!1),t.classList.add("cdk-drag-preview"),t.setAttribute("dir",this._direction),t},t.prototype._animatePreviewToPlaceholder=function(){var t=this;if(!this._hasMoved)return Promise.resolve();var e=this._placeholder.getBoundingClientRect();this._preview.classList.add("cdk-drag-animating"),this._preview.style.transform=P(e.left,e.top);var n=function(t){var e=getComputedStyle(t),n=D(e,"transition-property"),i=n.find(function(t){return"transform"===t||"all"===t});if(!i)return 0;var r=n.indexOf(i),o=D(e,"transition-duration"),s=D(e,"transition-delay");return y(o[r])+y(s[r])}(this._preview);return 0===n?Promise.resolve():this._ngZone.runOutsideAngular(function(){return new Promise(function(e){var i=function(n){(!n||n.target===t._preview&&"transform"===n.propertyName)&&(t._preview.removeEventListener("transitionend",i),e(),clearTimeout(r))},r=setTimeout(i,1.5*n);t._preview.addEventListener("transitionend",i)})})},t.prototype._createPlaceholderElement=function(){var t,e=this._placeholderTemplate,n=e?e.template:null;return n?(this._placeholderRef=e.viewContainer.createEmbeddedView(n,e.context),t=this._placeholderRef.rootNodes[0]):t=E(this._rootElement),t.classList.add("cdk-drag-placeholder"),t},t.prototype._getPointerPositionInElement=function(t,e){var n=this._rootElement.getBoundingClientRect(),i=t===this._rootElement?null:t,r=i?i.getBoundingClientRect():n,o=O(e)?e.targetTouches[0]:e;return{x:r.left-n.left+(o.pageX-r.left-this._scrollPosition.left),y:r.top-n.top+(o.pageY-r.top-this._scrollPosition.top)}},t.prototype._getPointerPositionOnPage=function(t){var e=O(t)?t.touches[0]||t.changedTouches[0]:t;return{x:e.pageX-this._scrollPosition.left,y:e.pageY-this._scrollPosition.top}},t.prototype._getConstrainedPointerPosition=function(t){var e=this._getPointerPositionOnPage(t),n=this._dropContainer?this._dropContainer.lockAxis:null;if("x"===this.lockAxis||"x"===n?e.y=this._pickupPositionOnPage.y:"y"!==this.lockAxis&&"y"!==n||(e.x=this._pickupPositionOnPage.x),this._boundaryRect){var i=this._pickupPositionInElement,r=i.x,o=i.y,s=this._boundaryRect,a=this._previewRect,l=s.top+o,c=s.bottom-(a.height-o);e.x=C(e.x,s.left+r,s.right-(a.width-r)),e.y=C(e.y,l,c)}return e},t.prototype._updatePointerDirectionDelta=function(t){var e=t.x,n=t.y,i=this._pointerDirectionDelta,r=this._pointerPositionAtLastDirectionChange,o=Math.abs(e-r.x),s=Math.abs(n-r.y);return o>this._config.pointerDirectionChangeThreshold&&(i.x=e>r.x?1:-1,r.x=e),s>this._config.pointerDirectionChangeThreshold&&(i.y=n>r.y?1:-1,r.y=n),i},t.prototype._toggleNativeDragInteractions=function(){if(this._rootElement&&this._handles){var t=this.disabled||this._handles.length>0;t!==this._nativeInteractionsEnabled&&(this._nativeInteractionsEnabled=t,v(this._rootElement,t))}},t.prototype._removeRootElementListeners=function(t){t.removeEventListener("mousedown",this._pointerDown,w),t.removeEventListener("touchstart",this._pointerDown,x)},t}();function P(t,e){return"translate3d("+Math.round(t)+"px, "+Math.round(e)+"px, 0)"}function E(t){var e=t.cloneNode(!0);return e.removeAttribute("id"),e}function C(t,e,n){return Math.max(e,Math.min(n,t))}function I(t){t&&t.parentNode&&t.parentNode.removeChild(t)}function O(t){return t.type.startsWith("touch")}function k(t,e,n){var i=T(e,t.length-1),r=T(n,t.length-1);if(i!==r){for(var o=t[i],s=r<i?-1:1,a=i;a!==r;a+=s)t[a]=t[a+s];t[r]=o}}function S(t,e,n,i){var r=T(n,t.length-1),o=T(i,e.length);t.length&&e.splice(o,0,t.splice(r,1)[0])}function T(t,e){return Math.max(0,Math.min(e,t))}var L=0,j=function(){function t(t,e,n){this._dragDropRegistry=e,this.id="cdk-drop-list-ref-"+L++,this.disabled=!1,this.enterPredicate=function(){return!0},this.beforeStarted=new o.a,this.entered=new o.a,this.exited=new o.a,this.dropped=new o.a,this.sorted=new o.a,this._isDragging=!1,this._itemPositions=[],this._previousSwap={drag:null,delta:0},this._siblings=[],this._orientation="vertical",this._activeSiblings=new Set,this._direction="ltr",e.registerDropContainer(this),this._document=n,this.element=t instanceof c.k?t.nativeElement:t}return t.prototype.dispose=function(){this.beforeStarted.complete(),this.entered.complete(),this.exited.complete(),this.dropped.complete(),this.sorted.complete(),this._activeSiblings.clear(),this._dragDropRegistry.removeDropContainer(this)},t.prototype.isDragging=function(){return this._isDragging},t.prototype.start=function(){var t=this;this.beforeStarted.next(),this._isDragging=!0,this._activeDraggables=this._draggables.slice(),this._cacheOwnPosition(),this._cacheItemPositions(),this._siblings.forEach(function(e){return e._startReceiving(t)})},t.prototype.enter=function(t,e,n){this.entered.next({item:t,container:this}),this.start();var i=this._getItemIndexFromPointerPosition(t,e,n),r=this._activeDraggables.indexOf(t),o=this._activeDraggables[i],s=t.getPlaceholderElement();if(r>-1&&this._activeDraggables.splice(r,1),o&&!this._dragDropRegistry.isDragging(o)){var a=o.getRootElement();a.parentElement.insertBefore(s,a),this._activeDraggables.splice(i,0,t)}else this.element.appendChild(s),this._activeDraggables.push(t);s.style.transform="",this._cacheItemPositions()},t.prototype.exit=function(t){this._reset(),this.exited.next({item:t,container:this})},t.prototype.drop=function(t,e,n,i){this._reset(),this.dropped.next({item:t,currentIndex:e,previousIndex:n.getItemIndex(t),container:this,previousContainer:n,isPointerOverContainer:i})},t.prototype.withItems=function(t){var e=this;return this._draggables=t.slice(),t.forEach(function(t){return t._withDropContainer(e)}),this},t.prototype.withDirection=function(t){return this._direction=t,this},t.prototype.connectedTo=function(t){return this._siblings=t.slice(),this},t.prototype.withOrientation=function(t){return this._orientation=t,this},t.prototype.getItemIndex=function(t){return this._isDragging?z("horizontal"===this._orientation&&"rtl"===this._direction?this._itemPositions.slice().reverse():this._itemPositions,function(e){return e.drag===t}):this._draggables.indexOf(t)},t.prototype.isReceiving=function(){return this._activeSiblings.size>0},t.prototype._sortItem=function(t,e,n,i){if(this._isPointerNearDropContainer(e,n)){var r=this._itemPositions,o=this._getItemIndexFromPointerPosition(t,e,n,i);if(!(-1===o&&r.length>0)){var s="horizontal"===this._orientation,a=z(r,function(e){return e.drag===t}),l=r[o],c=r[a].clientRect,d=l.clientRect,h=a>o?1:-1;this._previousSwap.drag=l.drag,this._previousSwap.delta=s?i.x:i.y;var p=this._getItemOffsetPx(c,d,h),u=this._getSiblingOffsetPx(a,r,h),_=r.slice();k(r,a,o),this.sorted.next({previousIndex:a,currentIndex:o,container:this,item:t}),r.forEach(function(e,n){if(_[n]!==e){var i=e.drag===t,r=i?p:u,o=i?t.getPlaceholderElement():e.drag.getRootElement();e.offset+=r,s?(o.style.transform="translate3d("+Math.round(e.offset)+"px, 0, 0)",M(e.clientRect,0,r)):(o.style.transform="translate3d(0, "+Math.round(e.offset)+"px, 0)",M(e.clientRect,r,0))}})}}},t.prototype._cacheOwnPosition=function(){this._clientRect=this.element.getBoundingClientRect()},t.prototype._cacheItemPositions=function(){var t=this,e="horizontal"===this._orientation;this._itemPositions=this._activeDraggables.map(function(e){var n=(t._dragDropRegistry.isDragging(e)?e.getPlaceholderElement():e.getRootElement()).getBoundingClientRect();return{drag:e,offset:0,clientRect:{top:n.top,right:n.right,bottom:n.bottom,left:n.left,width:n.width,height:n.height}}}).sort(function(t,n){return e?t.clientRect.left-n.clientRect.left:t.clientRect.top-n.clientRect.top})},t.prototype._reset=function(){var t=this;this._isDragging=!1,this._activeDraggables.forEach(function(t){return t.getRootElement().style.transform=""}),this._siblings.forEach(function(e){return e._stopReceiving(t)}),this._activeDraggables=[],this._itemPositions=[],this._previousSwap.drag=null,this._previousSwap.delta=0},t.prototype._getSiblingOffsetPx=function(t,e,n){var i="horizontal"===this._orientation,r=e[t].clientRect,o=e[t+-1*n],s=r[i?"width":"height"]*n;if(o){var a=i?"left":"top",l=i?"right":"bottom";-1===n?s-=o.clientRect[a]-r[l]:s+=r[a]-o.clientRect[l]}return s},t.prototype._isPointerNearDropContainer=function(t,e){var n=this._clientRect,i=.05*n.width,r=.05*n.height;return e>n.top-r&&e<n.bottom+r&&t>n.left-i&&t<n.right+i},t.prototype._getItemOffsetPx=function(t,e,n){var i="horizontal"===this._orientation,r=i?e.left-t.left:e.top-t.top;return-1===n&&(r+=i?e.width-t.width:e.height-t.height),r},t.prototype._getItemIndexFromPointerPosition=function(t,e,n,i){var r=this,o="horizontal"===this._orientation;return z(this._itemPositions,function(s,a,l){var c=s.drag,d=s.clientRect;return c===t?l.length<2:(!i||c!==r._previousSwap.drag||(o?i.x:i.y)!==r._previousSwap.delta)&&(o?e>=Math.floor(d.left)&&e<=Math.floor(d.right):n>=Math.floor(d.top)&&n<=Math.floor(d.bottom))})},t.prototype._isOverContainer=function(t,e){return A(this._clientRect,t,e)},t.prototype._getSiblingContainerFromPosition=function(t,e,n){return this._siblings.find(function(i){return i._canReceive(t,e,n)})},t.prototype._canReceive=function(t,e,n){if(!this.enterPredicate(t,this)||!A(this._clientRect,e,n))return!1;var i=this._document.elementFromPoint(e,n);return!!i&&(i===this.element||this.element.contains(i))},t.prototype._startReceiving=function(t){var e=this._activeSiblings;e.has(t)||(e.add(t),this._cacheOwnPosition())},t.prototype._stopReceiving=function(t){this._activeSiblings.delete(t)},t}();function M(t,e,n){t.top+=e,t.bottom=t.top+t.height,t.left+=n,t.right=t.left+t.width}function z(t,e){for(var n=0;n<t.length;n++)if(e(t[n],n,t))return n;return-1}function A(t,e,n){return n>=t.top&&n<=t.bottom&&e>=t.left&&e<=t.right}var N=Object(i.e)({passive:!1,capture:!0}),F=function(){function t(t,e){var n=this;this._ngZone=t,this._dropInstances=new Set,this._dragInstances=new Set,this._activeDragInstances=new Set,this._globalListeners=new Map,this.pointerMove=new o.a,this.pointerUp=new o.a,this._preventDefaultWhileDragging=function(t){n._activeDragInstances.size&&t.preventDefault()},this._document=e}return t.prototype.registerDropContainer=function(t){if(!this._dropInstances.has(t)){if(this.getDropContainer(t.id))throw Error('Drop instance with id "'+t.id+'" has already been registered.');this._dropInstances.add(t)}},t.prototype.registerDragItem=function(t){var e=this;this._dragInstances.add(t),1===this._dragInstances.size&&this._ngZone.runOutsideAngular(function(){e._document.addEventListener("touchmove",e._preventDefaultWhileDragging,N)})},t.prototype.removeDropContainer=function(t){this._dropInstances.delete(t)},t.prototype.removeDragItem=function(t){this._dragInstances.delete(t),this.stopDragging(t),0===this._dragInstances.size&&this._document.removeEventListener("touchmove",this._preventDefaultWhileDragging,N)},t.prototype.startDragging=function(t,e){var n=this;if(this._activeDragInstances.add(t),1===this._activeDragInstances.size){var i=e.type.startsWith("touch"),r=i?"touchend":"mouseup";this._globalListeners.set(i?"touchmove":"mousemove",{handler:function(t){return n.pointerMove.next(t)},options:N}).set(r,{handler:function(t){return n.pointerUp.next(t)},options:!0}).set("selectstart",{handler:this._preventDefaultWhileDragging,options:N}),i||this._globalListeners.set("wheel",{handler:this._preventDefaultWhileDragging,options:N}),this._ngZone.runOutsideAngular(function(){n._globalListeners.forEach(function(t,e){n._document.addEventListener(e,t.handler,t.options)})})}},t.prototype.stopDragging=function(t){this._activeDragInstances.delete(t),0===this._activeDragInstances.size&&this._clearGlobalListeners()},t.prototype.isDragging=function(t){return this._activeDragInstances.has(t)},t.prototype.getDropContainer=function(t){return Array.from(this._dropInstances).find(function(e){return e.id===t})},t.prototype.ngOnDestroy=function(){var t=this;this._dragInstances.forEach(function(e){return t.removeDragItem(e)}),this._dropInstances.forEach(function(e){return t.removeDropContainer(e)}),this._clearGlobalListeners(),this.pointerMove.complete(),this.pointerUp.complete()},t.prototype._clearGlobalListeners=function(){var t=this;this._globalListeners.forEach(function(e,n){t._document.removeEventListener(n,e.handler,e.options)}),this._globalListeners.clear()},t.ngInjectableDef=Object(c.V)({factory:function(){return new t(Object(c.Z)(c.A),Object(c.Z)(d.d))},token:t,providedIn:"root"}),t}(),Z={dragStartThreshold:5,pointerDirectionChangeThreshold:5},B=function(){function t(t,e,n,i){this._document=t,this._ngZone=e,this._viewportRuler=n,this._dragDropRegistry=i}return t.prototype.createDrag=function(t,e){return void 0===e&&(e=Z),new R(t,e,this._document,this._ngZone,this._viewportRuler,this._dragDropRegistry)},t.prototype.createDropList=function(t){return new j(t,this._dragDropRegistry,this._document)},t.ngInjectableDef=Object(c.V)({factory:function(){return new t(Object(c.Z)(d.d),Object(c.Z)(c.A),Object(c.Z)(h.j),Object(c.Z)(F))},token:t,providedIn:"root"}),t}(),G=new c.q("CDK_DROP_LIST"),H=new c.q("CDK_DRAG_PARENT"),q=new c.q("CDK_DRAG_CONFIG",{providedIn:"root",factory:function(){return{dragStartThreshold:5,pointerDirectionChangeThreshold:5}}}),U=function(){function t(t,e,n,i,r,s,l,d,h,u,_){var g=this;this.element=t,this.dropContainer=e,this._document=n,this._ngZone=i,this._viewContainerRef=r,this._dir=h,this._changeDetectorRef=_,this._destroyed=new o.a,this._disabled=!1,this.started=new c.m,this.released=new c.m,this.ended=new c.m,this.entered=new c.m,this.exited=new c.m,this.dropped=new c.m,this.moved=new a.a(function(t){var e=g._dragRef.moved.pipe(Object(p.a)(function(t){return{source:g,pointerPosition:t.pointerPosition,event:t.event,delta:t.delta}})).subscribe(t);return function(){e.unsubscribe()}}),this._dragRef=u?u.createDrag(t,d):new R(t,d,n,i,s,l),this._dragRef.data=this,this._syncInputs(this._dragRef),this._handleEvents(this._dragRef)}return Object.defineProperty(t.prototype,"disabled",{get:function(){return this._disabled||this.dropContainer&&this.dropContainer.disabled},set:function(t){this._disabled=Object(r.c)(t),this._dragRef.disabled=this._disabled},enumerable:!0,configurable:!0}),t.prototype.getPlaceholderElement=function(){return this._dragRef.getPlaceholderElement()},t.prototype.getRootElement=function(){return this._dragRef.getRootElement()},t.prototype.reset=function(){this._dragRef.reset()},t.prototype.ngAfterViewInit=function(){var t=this;this._ngZone.onStable.asObservable().pipe(Object(u.a)(1),Object(_.a)(this._destroyed)).subscribe(function(){t._updateRootElement(),t._handles.changes.pipe(Object(g.a)(t._handles),Object(f.a)(function(e){var n=e.filter(function(e){return e._parentDrag===t}).map(function(t){return t.element});t._dragRef.withHandles(n)}),Object(m.a)(function(t){return l.a.apply(void 0,t.map(function(t){return t._stateChanges}))}),Object(_.a)(t._destroyed)).subscribe(function(e){var n=t._dragRef,i=e.element.nativeElement;e.disabled?n.disableHandle(i):n.enableHandle(i)})})},t.prototype.ngOnChanges=function(t){var e=t.rootElementSelector;e&&!e.firstChange&&this._updateRootElement()},t.prototype.ngOnDestroy=function(){this._destroyed.next(),this._destroyed.complete(),this._dragRef.dispose()},t.prototype._updateRootElement=function(){var t=this.element.nativeElement,e=this.rootElementSelector?J(t,this.rootElementSelector):t;if(e&&e.nodeType!==this._document.ELEMENT_NODE)throw Error('cdkDrag must be attached to an element node. Currently attached to "'+e.nodeName+'".');this._dragRef.withRootElement(e||t)},t.prototype._getBoundaryElement=function(){var t=this.boundaryElementSelector;return t?J(this.element.nativeElement,t):null},t.prototype._syncInputs=function(t){var e=this;t.beforeStarted.subscribe(function(){if(!t.isDragging()){var n=e._dir,i=e._placeholderTemplate?{template:e._placeholderTemplate.templateRef,context:e._placeholderTemplate.data,viewContainer:e._viewContainerRef}:null,r=e._previewTemplate?{template:e._previewTemplate.templateRef,context:e._previewTemplate.data,viewContainer:e._viewContainerRef}:null;t.disabled=e.disabled,t.lockAxis=e.lockAxis,t.withBoundaryElement(e._getBoundaryElement()).withPlaceholderTemplate(i).withPreviewTemplate(r),n&&t.withDirection(n.value)}})},t.prototype._handleEvents=function(t){var e=this;t.started.subscribe(function(){e.started.emit({source:e}),e._changeDetectorRef&&e._changeDetectorRef.markForCheck()}),t.released.subscribe(function(){e.released.emit({source:e})}),t.ended.subscribe(function(){e.ended.emit({source:e}),e._changeDetectorRef&&e._changeDetectorRef.markForCheck()}),t.entered.subscribe(function(t){e.entered.emit({container:t.container.data,item:e})}),t.exited.subscribe(function(t){e.exited.emit({container:t.container.data,item:e})}),t.dropped.subscribe(function(t){e.dropped.emit({previousIndex:t.previousIndex,currentIndex:t.currentIndex,previousContainer:t.previousContainer.data,container:t.container.data,isPointerOverContainer:t.isPointerOverContainer,item:e})})},t}();function J(t,e){for(var n=t.parentElement;n;){if(n.matches?n.matches(e):n.msMatchesSelector(e))return n;n=n.parentElement}return null}var V=function(){function t(){this._items=new Set,this._disabled=!1}return Object.defineProperty(t.prototype,"disabled",{get:function(){return this._disabled},set:function(t){this._disabled=Object(r.c)(t)},enumerable:!0,configurable:!0}),t.prototype.ngOnDestroy=function(){this._items.clear()},t}(),W=0,Y=function(){function t(e,n,i,r,s,a,l){var d=this;this.element=e,this._changeDetectorRef=i,this._dir=r,this._group=s,this._destroyed=new o.a,this.connectedTo=[],this.orientation="vertical",this.id="cdk-drop-list-"+W++,this._disabled=!1,this.enterPredicate=function(){return!0},this.dropped=new c.m,this.entered=new c.m,this.exited=new c.m,this.sorted=new c.m,this._dropListRef=l?l.createDropList(e):new j(e,n,a||document),this._dropListRef.data=this,this._dropListRef.enterPredicate=function(t,e){return d.enterPredicate(t.data,e.data)},this._syncInputs(this._dropListRef),this._handleEvents(this._dropListRef),t._dropLists.push(this),s&&s._items.add(this)}return Object.defineProperty(t.prototype,"disabled",{get:function(){return this._disabled||!!this._group&&this._group.disabled},set:function(t){this._disabled=Object(r.c)(t)},enumerable:!0,configurable:!0}),t.prototype.ngAfterContentInit=function(){var t=this;this._draggables.changes.pipe(Object(g.a)(this._draggables),Object(_.a)(this._destroyed)).subscribe(function(e){t._dropListRef.withItems(e.map(function(t){return t._dragRef}))})},t.prototype.ngOnDestroy=function(){var e=t._dropLists.indexOf(this);e>-1&&t._dropLists.splice(e,1),this._group&&this._group._items.delete(this),this._dropListRef.dispose(),this._destroyed.next(),this._destroyed.complete()},t.prototype.start=function(){this._dropListRef.start()},t.prototype.drop=function(t,e,n,i){this._dropListRef.drop(t._dragRef,e,n._dropListRef,i)},t.prototype.enter=function(t,e,n){this._dropListRef.enter(t._dragRef,e,n)},t.prototype.exit=function(t){this._dropListRef.exit(t._dragRef)},t.prototype.getItemIndex=function(t){return this._dropListRef.getItemIndex(t._dragRef)},t.prototype._sortItem=function(t,e,n,i){return this._dropListRef._sortItem(t._dragRef,e,n,i)},t.prototype._getSiblingContainerFromPosition=function(t,e,n){var i=this._dropListRef._getSiblingContainerFromPosition(t._dragRef,e,n);return i?i.data:null},t.prototype._isOverContainer=function(t,e){return this._dropListRef._isOverContainer(t,e)},t.prototype._syncInputs=function(e){var n=this;this._dir&&this._dir.change.pipe(Object(g.a)(this._dir.value),Object(_.a)(this._destroyed)).subscribe(function(t){return e.withDirection(t)}),e.beforeStarted.subscribe(function(){var i=Object(r.b)(n.connectedTo).map(function(e){return"string"==typeof e?t._dropLists.find(function(t){return t.id===e}):e});n._group&&n._group._items.forEach(function(t){-1===i.indexOf(t)&&i.push(t)}),e.lockAxis=n.lockAxis,e.connectedTo(i.filter(function(t){return t&&t!==n}).map(function(t){return t._dropListRef})).withOrientation(n.orientation)})},t.prototype._handleEvents=function(t){var e=this;t.beforeStarted.subscribe(function(){e._changeDetectorRef.markForCheck()}),t.entered.subscribe(function(t){e.entered.emit({container:e,item:t.item.data})}),t.exited.subscribe(function(t){e.exited.emit({container:e,item:t.item.data})}),t.sorted.subscribe(function(t){e.sorted.emit({previousIndex:t.previousIndex,currentIndex:t.currentIndex,container:e,item:t.item.data})}),t.dropped.subscribe(function(t){e.dropped.emit({previousIndex:t.previousIndex,currentIndex:t.currentIndex,previousContainer:t.previousContainer.data,container:t.container.data,item:t.item.data,isPointerOverContainer:t.isPointerOverContainer}),e._changeDetectorRef.markForCheck()})},t._dropLists=[],t}(),K=function(){return function(){}}()},PCNd:function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n("6Cds"),n("gIcY"),n("qYzG"),n("9Bt9");var i=function(){return function(){}}()},qYzG:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var i=n("9Bt9"),r=function(){function t(){this.title="shared-comp works!",this.todo=["Get to work","Pick up groceries","Go home","Fall asleep"],this.done=["Get up","Brush teeth","Take a shower","Check e-mail","Walk dog"]}return t.prototype.ngOnInit=function(){},t.prototype.drop=function(t){console.log(t),t.previousContainer===t.container?Object(i.i)(t.container.data,t.previousIndex,t.currentIndex):Object(i.j)(t.previousContainer.data,t.container.data,t.previousIndex,t.currentIndex)},t}()},woam:function(t,e,n){"use strict";var i=n("CcnG"),r=n("9Bt9"),o=n("Ip0R"),s=n("qAlS"),a=n("Fzqc");n("qYzG"),n.d(e,"a",function(){return l}),n.d(e,"b",function(){return h});var l=i.rb({encapsulation:0,styles:[[".example-container[_ngcontent-%COMP%]{width:400px;max-width:100%;margin:0 25px 25px 0;display:inline-block;vertical-align:top}.example-list[_ngcontent-%COMP%]{border:1px solid #ccc;min-height:60px;background:#fff;border-radius:4px;overflow:hidden;display:block}.example-box[_ngcontent-%COMP%]{padding:20px 10px;border-bottom:1px solid #ccc;color:rgba(0,0,0,.87);display:flex;flex-direction:row;align-items:center;justify-content:space-between;box-sizing:border-box;cursor:move;background:#fff;font-size:14px}.cdk-drag-preview[_ngcontent-%COMP%]{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:0}.cdk-drag-animating[_ngcontent-%COMP%]{transition:-webkit-transform 250ms cubic-bezier(0,0,.2,1);transition:transform 250ms cubic-bezier(0,0,.2,1);transition:transform 250ms cubic-bezier(0,0,.2,1),-webkit-transform 250ms cubic-bezier(0,0,.2,1)}.example-box[_ngcontent-%COMP%]:last-child{border:none}.example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .example-box[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:-webkit-transform 250ms cubic-bezier(0,0,.2,1);transition:transform 250ms cubic-bezier(0,0,.2,1);transition:transform 250ms cubic-bezier(0,0,.2,1),-webkit-transform 250ms cubic-bezier(0,0,.2,1)}"]],data:{}});function c(t){return i.Nb(0,[(t()(),i.tb(0,16777216,null,null,6,"div",[["cdkDrag",""],["class","example-box cdk-drag"]],[[2,"cdk-drag-disabled",null],[2,"cdk-drag-dragging",null]],null,null,null,null)),i.Ib(6144,null,r.k,null,[r.c]),i.sb(2,4866048,[[1,4]],3,r.c,[i.k,[3,r.b],o.d,i.A,i.R,s.j,r.h,r.a,[2,a.b],r.f,i.h],null,null),i.Jb(603979776,2,{_handles:1}),i.Jb(335544320,3,{_previewTemplate:0}),i.Jb(335544320,4,{_placeholderTemplate:0}),(t()(),i.Lb(6,null,["",""])),(t()(),i.kb(0,null,null,0))],null,function(t,e){t(e,0,0,i.Db(e,2).disabled,i.Db(e,2)._dragRef.isDragging()),t(e,6,0,e.context.$implicit)})}function d(t){return i.Nb(0,[(t()(),i.tb(0,16777216,null,null,6,"div",[["cdkDrag",""],["class","example-box cdk-drag"]],[[2,"cdk-drag-disabled",null],[2,"cdk-drag-dragging",null]],null,null,null,null)),i.Ib(6144,null,r.k,null,[r.c]),i.sb(2,4866048,[[5,4]],3,r.c,[i.k,[3,r.b],o.d,i.A,i.R,s.j,r.h,r.a,[2,a.b],r.f,i.h],null,null),i.Jb(603979776,6,{_handles:1}),i.Jb(335544320,7,{_previewTemplate:0}),i.Jb(335544320,8,{_placeholderTemplate:0}),(t()(),i.Lb(6,null,["",""])),(t()(),i.kb(0,null,null,0))],null,function(t,e){t(e,0,0,i.Db(e,2).disabled,i.Db(e,2)._dragRef.isDragging()),t(e,6,0,e.context.$implicit)})}function h(t){return i.Nb(0,[(t()(),i.tb(0,0,null,null,1,"p",[],null,null,null,null,null)),(t()(),i.Lb(1,null,[" ","\n"])),(t()(),i.tb(2,0,null,null,10,"div",[["class","example-container"]],null,null,null,null,null)),(t()(),i.tb(3,0,null,null,1,"h2",[],null,null,null,null,null)),(t()(),i.Lb(-1,null,["To do"])),(t()(),i.tb(5,0,null,null,7,"div",[["cdkDropList",""],["class","example-list cdk-drop-list"]],[[8,"id",0],[2,"cdk-drop-list-disabled",null],[2,"cdk-drop-list-dragging",null],[2,"cdk-drop-list-receiving",null]],[[null,"cdkDropListDropped"]],function(t,e,n){var i=!0;return"cdkDropListDropped"===e&&(i=!1!==t.component.drop(n)&&i),i},null,null)),i.Ib(6144,null,r.b,null,[r.d]),i.sb(7,1196032,[["todoList",4]],1,r.d,[i.k,r.h,i.h,[2,a.b],[3,r.e],[2,o.d],r.f],{connectedTo:[0,"connectedTo"],data:[1,"data"]},{dropped:"cdkDropListDropped"}),i.Jb(603979776,1,{_draggables:1}),i.Eb(9,1),i.Ib(256,null,r.e,void 0,[]),(t()(),i.kb(16777216,null,null,1,null,c)),i.sb(12,278528,null,0,o.l,[i.R,i.N,i.t],{ngForOf:[0,"ngForOf"]},null),(t()(),i.tb(13,0,null,null,10,"div",[["class","example-container"]],null,null,null,null,null)),(t()(),i.tb(14,0,null,null,1,"h2",[],null,null,null,null,null)),(t()(),i.Lb(-1,null,["Done"])),(t()(),i.tb(16,0,null,null,7,"div",[["cdkDropList",""],["class","example-list cdk-drop-list"]],[[8,"id",0],[2,"cdk-drop-list-disabled",null],[2,"cdk-drop-list-dragging",null],[2,"cdk-drop-list-receiving",null]],[[null,"cdkDropListDropped"]],function(t,e,n){var i=!0;return"cdkDropListDropped"===e&&(i=!1!==t.component.drop(n)&&i),i},null,null)),i.Ib(6144,null,r.b,null,[r.d]),i.sb(18,1196032,[["doneList",4]],1,r.d,[i.k,r.h,i.h,[2,a.b],[3,r.e],[2,o.d],r.f],{connectedTo:[0,"connectedTo"],data:[1,"data"]},{dropped:"cdkDropListDropped"}),i.Jb(603979776,5,{_draggables:1}),i.Eb(20,1),i.Ib(256,null,r.e,void 0,[]),(t()(),i.kb(16777216,null,null,1,null,d)),i.sb(23,278528,null,0,o.l,[i.R,i.N,i.t],{ngForOf:[0,"ngForOf"]},null)],function(t,e){var n=e.component,r=t(e,9,0,i.Db(e,18));t(e,7,0,r,n.todo),t(e,12,0,n.todo);var o=t(e,20,0,i.Db(e,7));t(e,18,0,o,n.done),t(e,23,0,n.done)},function(t,e){t(e,1,0,e.component.title),t(e,5,0,i.Db(e,7).id,i.Db(e,7).disabled,i.Db(e,7)._dropListRef.isDragging(),i.Db(e,7)._dropListRef.isReceiving()),t(e,16,0,i.Db(e,18).id,i.Db(e,18).disabled,i.Db(e,18)._dropListRef.isDragging(),i.Db(e,18)._dropListRef.isReceiving())})}}}]);
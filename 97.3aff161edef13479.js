"use strict";(self.webpackChunkFinalProject=self.webpackChunkFinalProject||[]).push([[97],{2097:(U,v,l)=>{l.r(v),l.d(v,{WelcomeModule:()=>Q});var d=l(6814),z=l(9388),T=l(2831),e=l(5879),h=l(7582),y=l(6028),C=l(8645),D=l(2438),S=l(9773),a=l(874),p=l(7754),x=l(9087);const A=["slickList"],$=["slickTrack"];function I(n,i){}const P=function(n){return{$implicit:n}};function N(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"li",9),e.NdJ("click",function(){const o=e.CHM(t).index,c=e.oxw(2);return e.KtG(c.onLiClick(o))}),e.YNc(1,I,0,0,"ng-template",10),e.qZA()}if(2&n){const t=i.index,s=e.oxw(2),r=e.MAs(8);e.ekj("slick-active",t===s.activeIndex),e.xp6(1),e.Q6J("ngTemplateOutlet",s.nzDotRender||r)("ngTemplateOutletContext",e.VKq(4,P,t))}}function b(n,i){if(1&n&&(e.TgZ(0,"ul",7),e.YNc(1,N,2,6,"li",8),e.qZA()),2&n){const t=e.oxw();e.ekj("slick-dots-top","top"===t.nzDotPosition)("slick-dots-bottom","bottom"===t.nzDotPosition)("slick-dots-left","left"===t.nzDotPosition)("slick-dots-right","right"===t.nzDotPosition),e.xp6(1),e.Q6J("ngForOf",t.carouselContents)}}function W(n,i){if(1&n&&(e.TgZ(0,"button"),e._uU(1),e.qZA()),2&n){const t=i.$implicit;e.xp6(1),e.Oqu(t+1)}}const F=["*"];let E=(()=>{class n{set isActive(t){this._active=t,this.isActive?this.renderer.addClass(this.el,"slick-active"):this.renderer.removeClass(this.el,"slick-active")}get isActive(){return this._active}constructor(t,s){this.renderer=s,this._active=!1,this.el=t.nativeElement}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(e.SBq),e.Y36(e.Qsj))},n.\u0275dir=e.lG2({type:n,selectors:[["","nz-carousel-content",""]],hostAttrs:[1,"slick-slide"],exportAs:["nzCarouselContent"]}),n})();class w{get maxIndex(){return this.length-1}get firstEl(){return this.contents[0].el}get lastEl(){return this.contents[this.maxIndex].el}constructor(i,t,s,r,o){this.cdr=t,this.renderer=s,this.platform=r,this.options=o,this.carouselComponent=i}withCarouselContents(i){const t=this.carouselComponent;if(this.slickListEl=t.slickListEl,this.slickTrackEl=t.slickTrackEl,this.contents=i?.toArray()||[],this.length=this.contents.length,this.platform.isBrowser){const s=t.el.getBoundingClientRect();this.unitWidth=s.width,this.unitHeight=s.height}else i?.forEach((s,r)=>{0===r?this.renderer.setStyle(s.el,"width","100%"):this.renderer.setStyle(s.el,"display","none")})}dragging(i){}dispose(){}getFromToInBoundary(i,t){const s=this.maxIndex+1;return{from:(i+s)%s,to:(t+s)%s}}}class H extends w{withCarouselContents(i){super.withCarouselContents(i),this.contents&&(this.slickTrackEl.style.width=this.length*this.unitWidth+"px",this.contents.forEach((t,s)=>{this.renderer.setStyle(t.el,"opacity",this.carouselComponent.activeIndex===s?"1":"0"),this.renderer.setStyle(t.el,"position","relative"),this.renderer.setStyle(t.el,"width",`${this.unitWidth}px`),this.renderer.setStyle(t.el,"left",-this.unitWidth*s+"px"),this.renderer.setStyle(t.el,"transition",["opacity 500ms ease 0s","visibility 500ms ease 0s"])}))}switch(i,t){const{to:s}=this.getFromToInBoundary(i,t),r=new C.x;return this.contents.forEach((o,c)=>{this.renderer.setStyle(o.el,"opacity",s===c?"1":"0")}),setTimeout(()=>{r.next(),r.complete()},this.carouselComponent.nzTransitionSpeed),r}dispose(){this.contents.forEach(i=>{this.renderer.setStyle(i.el,"transition",null),this.renderer.setStyle(i.el,"opacity",null),this.renderer.setStyle(i.el,"width",null),this.renderer.setStyle(i.el,"left",null)}),super.dispose()}}class M extends w{get vertical(){return this.carouselComponent.vertical}constructor(i,t,s,r,o){super(i,t,s,r,o),this.isDragging=!1,this.isTransitioning=!1}dispose(){super.dispose(),this.renderer.setStyle(this.slickTrackEl,"transform",null)}withCarouselContents(i){super.withCarouselContents(i);const s=this.carouselComponent.activeIndex;this.platform.isBrowser&&this.contents.length&&(this.renderer.setStyle(this.slickListEl,"height",`${this.unitHeight}px`),this.vertical?(this.renderer.setStyle(this.slickTrackEl,"width",`${this.unitWidth}px`),this.renderer.setStyle(this.slickTrackEl,"height",this.length*this.unitHeight+"px"),this.renderer.setStyle(this.slickTrackEl,"transform",`translate3d(0, ${-s*this.unitHeight}px, 0)`)):(this.renderer.setStyle(this.slickTrackEl,"height",`${this.unitHeight}px`),this.renderer.setStyle(this.slickTrackEl,"width",this.length*this.unitWidth+"px"),this.renderer.setStyle(this.slickTrackEl,"transform",`translate3d(${-s*this.unitWidth}px, 0, 0)`)),this.contents.forEach(r=>{this.renderer.setStyle(r.el,"position","relative"),this.renderer.setStyle(r.el,"width",`${this.unitWidth}px`),this.renderer.setStyle(r.el,"height",`${this.unitHeight}px`)}))}switch(i,t){const{to:s}=this.getFromToInBoundary(i,t),r=new C.x;return this.renderer.setStyle(this.slickTrackEl,"transition",`transform ${this.carouselComponent.nzTransitionSpeed}ms ease`),this.vertical?this.verticalTransform(i,t):this.horizontalTransform(i,t),this.isTransitioning=!0,this.isDragging=!1,setTimeout(()=>{this.renderer.setStyle(this.slickTrackEl,"transition",null),this.contents.forEach(o=>{this.renderer.setStyle(o.el,this.vertical?"top":"left",null)}),this.renderer.setStyle(this.slickTrackEl,"transform",this.vertical?`translate3d(0, ${-s*this.unitHeight}px, 0)`:`translate3d(${-s*this.unitWidth}px, 0, 0)`),this.isTransitioning=!1,r.next(),r.complete()},this.carouselComponent.nzTransitionSpeed),r.asObservable()}dragging(i){if(this.isTransitioning)return;const t=this.carouselComponent.activeIndex;this.carouselComponent.vertical?(!this.isDragging&&this.length>2&&(t===this.maxIndex?this.prepareVerticalContext(!0):0===t&&this.prepareVerticalContext(!1)),this.renderer.setStyle(this.slickTrackEl,"transform",`translate3d(0, ${-t*this.unitHeight+i.x}px, 0)`)):(!this.isDragging&&this.length>2&&(t===this.maxIndex?this.prepareHorizontalContext(!0):0===t&&this.prepareHorizontalContext(!1)),this.renderer.setStyle(this.slickTrackEl,"transform",`translate3d(${-t*this.unitWidth+i.x}px, 0, 0)`)),this.isDragging=!0}verticalTransform(i,t){const{from:s,to:r}=this.getFromToInBoundary(i,t);this.length>2&&t!==r?(this.prepareVerticalContext(r<s),this.renderer.setStyle(this.slickTrackEl,"transform",`translate3d(0, ${-t*this.unitHeight}px, 0)`)):this.renderer.setStyle(this.slickTrackEl,"transform",`translate3d(0, ${-r*this.unitHeight}px, 0`)}horizontalTransform(i,t){const{from:s,to:r}=this.getFromToInBoundary(i,t);this.length>2&&t!==r?(this.prepareHorizontalContext(r<s),this.renderer.setStyle(this.slickTrackEl,"transform",`translate3d(${-t*this.unitWidth}px, 0, 0)`)):this.renderer.setStyle(this.slickTrackEl,"transform",`translate3d(${-r*this.unitWidth}px, 0, 0`)}prepareVerticalContext(i){i?(this.renderer.setStyle(this.firstEl,"top",this.length*this.unitHeight+"px"),this.renderer.setStyle(this.lastEl,"top",null)):(this.renderer.setStyle(this.firstEl,"top",null),this.renderer.setStyle(this.lastEl,"top",-this.unitHeight*this.length+"px"))}prepareHorizontalContext(i){i?(this.renderer.setStyle(this.firstEl,"left",this.length*this.unitWidth+"px"),this.renderer.setStyle(this.lastEl,"left",null)):(this.renderer.setStyle(this.firstEl,"left",null),this.renderer.setStyle(this.lastEl,"left",-this.unitWidth*this.length+"px"))}}const j=new e.OlP("nz-carousel-custom-strategies");let O=(()=>{class n{set nzDotPosition(t){this._dotPosition=t,this.vertical="left"===t||"right"===t}get nzDotPosition(){return this._dotPosition}constructor(t,s,r,o,c,g,f,G,J,V){this.nzConfigService=s,this.ngZone=r,this.renderer=o,this.cdr=c,this.platform=g,this.resizeService=f,this.nzDragService=G,this.directionality=J,this.customStrategies=V,this._nzModuleName="carousel",this.nzEffect="scrollx",this.nzEnableSwipe=!0,this.nzDots=!0,this.nzAutoPlay=!1,this.nzAutoPlaySpeed=3e3,this.nzTransitionSpeed=500,this.nzLoop=!0,this.nzStrategyOptions=void 0,this._dotPosition="bottom",this.nzBeforeChange=new e.vpe,this.nzAfterChange=new e.vpe,this.activeIndex=0,this.vertical=!1,this.transitionInProgress=null,this.dir="ltr",this.destroy$=new C.x,this.gestureRect=null,this.pointerDelta=null,this.isTransiting=!1,this.isDragging=!1,this.onLiClick=m=>{this.goTo("rtl"===this.dir?this.carouselContents.length-1-m:m)},this.pointerDown=m=>{!this.isDragging&&!this.isTransiting&&this.nzEnableSwipe&&(this.clearScheduledTransition(),this.gestureRect=this.slickListEl.getBoundingClientRect(),this.nzDragService.requestDraggingSequence(m).subscribe(u=>{this.pointerDelta=u,this.isDragging=!0,this.strategy?.dragging(this.pointerDelta)},()=>{},()=>{if(this.nzEnableSwipe&&this.isDragging){const u=this.pointerDelta?this.pointerDelta.x:0;Math.abs(u)>this.gestureRect.width/3&&(this.nzLoop||u<=0&&this.activeIndex+1<this.carouselContents.length||u>0&&this.activeIndex>0)?this.goTo(u>0?this.activeIndex-1:this.activeIndex+1):this.goTo(this.activeIndex),this.gestureRect=null,this.pointerDelta=null}this.isDragging=!1}))},this.nzDotPosition="bottom",this.el=t.nativeElement}ngOnInit(){this.slickListEl=this.slickList.nativeElement,this.slickTrackEl=this.slickTrack.nativeElement,this.dir=this.directionality.value,this.directionality.change.pipe((0,S.R)(this.destroy$)).subscribe(t=>{this.dir=t,this.markContentActive(this.activeIndex),this.cdr.detectChanges()}),this.ngZone.runOutsideAngular(()=>{(0,D.R)(this.slickListEl,"keydown").pipe((0,S.R)(this.destroy$)).subscribe(t=>{const{keyCode:s}=t;s!==y.oh&&s!==y.SV||(t.preventDefault(),this.ngZone.run(()=>{s===y.oh?this.pre():this.next(),this.cdr.markForCheck()}))})})}ngAfterContentInit(){this.markContentActive(0)}ngAfterViewInit(){this.carouselContents.changes.subscribe(()=>{this.markContentActive(0),this.layout()}),this.resizeService.subscribe().pipe((0,S.R)(this.destroy$)).subscribe(()=>{this.layout()}),this.switchStrategy(),this.markContentActive(0),this.layout(),Promise.resolve().then(()=>{this.layout()})}ngOnChanges(t){const{nzEffect:s,nzDotPosition:r}=t;s&&!s.isFirstChange()&&(this.switchStrategy(),this.markContentActive(0),this.layout()),r&&!r.isFirstChange()&&(this.switchStrategy(),this.markContentActive(0),this.layout()),this.nzAutoPlay&&this.nzAutoPlaySpeed?this.scheduleNextTransition():this.clearScheduledTransition()}ngOnDestroy(){this.clearScheduledTransition(),this.strategy&&this.strategy.dispose(),this.destroy$.next(),this.destroy$.complete()}next(){this.goTo(this.activeIndex+1)}pre(){this.goTo(this.activeIndex-1)}goTo(t){if(this.carouselContents&&this.carouselContents.length&&!this.isTransiting&&(this.nzLoop||t>=0&&t<this.carouselContents.length)){const s=this.carouselContents.length,r=this.activeIndex,o=(t+s)%s;this.isTransiting=!0,this.nzBeforeChange.emit({from:r,to:o}),this.strategy.switch(this.activeIndex,t).subscribe(()=>{this.scheduleNextTransition(),this.nzAfterChange.emit(o),this.isTransiting=!1}),this.markContentActive(o),this.cdr.markForCheck()}}switchStrategy(){this.strategy&&this.strategy.dispose();const t=this.customStrategies?this.customStrategies.find(s=>s.name===this.nzEffect):null;this.strategy=t?new t.strategy(this,this.cdr,this.renderer,this.platform):"scrollx"===this.nzEffect?new M(this,this.cdr,this.renderer,this.platform):new H(this,this.cdr,this.renderer,this.platform)}scheduleNextTransition(){this.clearScheduledTransition(),this.nzAutoPlay&&this.nzAutoPlaySpeed>0&&this.platform.isBrowser&&(this.transitionInProgress=setTimeout(()=>{this.goTo(this.activeIndex+1)},this.nzAutoPlaySpeed))}clearScheduledTransition(){this.transitionInProgress&&(clearTimeout(this.transitionInProgress),this.transitionInProgress=null)}markContentActive(t){this.activeIndex=t,this.carouselContents&&this.carouselContents.forEach((s,r)=>{s.isActive="rtl"===this.dir?t===this.carouselContents.length-1-r:t===r}),this.cdr.markForCheck()}layout(){this.strategy&&this.strategy.withCarouselContents(this.carouselContents)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(e.SBq),e.Y36(a.jY),e.Y36(e.R0b),e.Y36(e.Qsj),e.Y36(e.sBO),e.Y36(T.t4),e.Y36(x.rI),e.Y36(x.Ml),e.Y36(z.Is,8),e.Y36(j,8))},n.\u0275cmp=e.Xpm({type:n,selectors:[["nz-carousel"]],contentQueries:function(t,s,r){if(1&t&&e.Suo(r,E,4),2&t){let o;e.iGM(o=e.CRH())&&(s.carouselContents=o)}},viewQuery:function(t,s){if(1&t&&(e.Gf(A,7),e.Gf($,7)),2&t){let r;e.iGM(r=e.CRH())&&(s.slickList=r.first),e.iGM(r=e.CRH())&&(s.slickTrack=r.first)}},hostAttrs:[1,"ant-carousel"],hostVars:4,hostBindings:function(t,s){2&t&&e.ekj("ant-carousel-vertical",s.vertical)("ant-carousel-rtl","rtl"===s.dir)},inputs:{nzDotRender:"nzDotRender",nzEffect:"nzEffect",nzEnableSwipe:"nzEnableSwipe",nzDots:"nzDots",nzAutoPlay:"nzAutoPlay",nzAutoPlaySpeed:"nzAutoPlaySpeed",nzTransitionSpeed:"nzTransitionSpeed",nzLoop:"nzLoop",nzStrategyOptions:"nzStrategyOptions",nzDotPosition:"nzDotPosition"},outputs:{nzBeforeChange:"nzBeforeChange",nzAfterChange:"nzAfterChange"},exportAs:["nzCarousel"],features:[e.TTD],ngContentSelectors:F,decls:9,vars:3,consts:[[1,"slick-initialized","slick-slider"],["tabindex","-1",1,"slick-list",3,"mousedown","touchstart"],["slickList",""],[1,"slick-track"],["slickTrack",""],["class","slick-dots",3,"slick-dots-top","slick-dots-bottom","slick-dots-left","slick-dots-right",4,"ngIf"],["renderDotTemplate",""],[1,"slick-dots"],[3,"slick-active","click",4,"ngFor","ngForOf"],[3,"click"],[3,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(t,s){1&t&&(e.F$t(),e.TgZ(0,"div",0)(1,"div",1,2),e.NdJ("mousedown",function(o){return s.pointerDown(o)})("touchstart",function(o){return s.pointerDown(o)}),e.TgZ(3,"div",3,4),e.Hsn(5),e.qZA()(),e.YNc(6,b,2,9,"ul",5),e.qZA(),e.YNc(7,W,2,1,"ng-template",null,6,e.W1O)),2&t&&(e.ekj("slick-vertical","left"===s.nzDotPosition||"right"===s.nzDotPosition),e.xp6(6),e.Q6J("ngIf",s.nzDots))},dependencies:[d.sg,d.O5,d.tP],encapsulation:2,changeDetection:0}),(0,h.gn)([(0,a.oS)()],n.prototype,"nzEffect",void 0),(0,h.gn)([(0,a.oS)(),(0,p.yF)()],n.prototype,"nzEnableSwipe",void 0),(0,h.gn)([(0,a.oS)(),(0,p.yF)()],n.prototype,"nzDots",void 0),(0,h.gn)([(0,a.oS)(),(0,p.yF)()],n.prototype,"nzAutoPlay",void 0),(0,h.gn)([(0,a.oS)(),(0,p.Rn)()],n.prototype,"nzAutoPlaySpeed",void 0),(0,h.gn)([(0,p.Rn)()],n.prototype,"nzTransitionSpeed",void 0),(0,h.gn)([(0,a.oS)()],n.prototype,"nzLoop",void 0),(0,h.gn)([(0,a.oS)()],n.prototype,"nzDotPosition",null),n})(),L=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[z.vT,d.ez,T.ud]}),n})();var k=l(2787);function R(n,i){if(1&n&&(e.TgZ(0,"div",2),e._UZ(1,"img",3),e.qZA()),2&n){const t=i.$implicit;e.xp6(1),e.s9C("src",t,e.LSH)}}const Y=[{path:"",component:(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-welcome"]],decls:1,vars:0,template:function(t,s){1&t&&e._UZ(0,"router-outlet")},dependencies:[k.lC]}),n})(),children:[{path:"",component:(()=>{class n{constructor(){this.array=["https://www.pajak.go.id/system/files/2023-01/Poster%20pemadanan%20nik.jpg","https://www.pajak.go.id/system/files/2022-01/Poster%20-%20Lapor%20SPT%20Hari%20Ini%202022_M-Pajak%20960%20x438.jpg","https://www.pajak.go.id/system/files/2021-10/Poster---Meterai-Elektronik-2021-Mpajak%20%281%29_0.jpg","https://www.pajak.go.id/system/files/2021-06/Poster---WP-NE--2021-M-Pajak-960-438.jpg"]}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-carousel"]],decls:2,vars:1,consts:[["nzAutoPlay",""],["nz-carousel-content","",4,"ngFor","ngForOf"],["nz-carousel-content",""],["nz-carousel-content","","alt","",3,"src"]],template:function(t,s){1&t&&(e.TgZ(0,"nz-carousel",0),e.YNc(1,R,2,1,"div",1),e.qZA()),2&t&&(e.xp6(1),e.Q6J("ngForOf",s.array))},dependencies:[d.sg,O,E],styles:["[nz-carousel-content][_ngcontent-%COMP%]{text-align:center;min-height:360px;line-height:160px;background:#364d79;color:#fff;overflow:hidden}"]}),n})()}]}];let Z=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[k.Bz.forChild(Y),k.Bz]}),n})(),Q=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[d.ez,L,Z]}),n})()}}]);
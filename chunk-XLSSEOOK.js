import{c as f}from"./chunk-UDYK2UYN.js";import{B as h,Da as Ft,E as I,F as Dt,H as F,P as w,U as Mt,W as tt,ea as Vt,i as _t,k as Tt,la as At,m as xt,ma as R,n as Lt,oa as Z,qa as Q,r as Ct,sa as Ht,t as S,ta as zt,u as J,ua as Bt,v as kt,w as Ot,x as St,y as It,za as Pt}from"./chunk-LIW7RA6P.js";import{c as Et,d as G,f as K,h as U,i as X,j as Y}from"./chunk-36JN3LZY.js";import{Ab as at,Db as lt,Eb as pt,Fb as dt,Gb as O,Gc as p,Hb as j,Hc as g,Jb as q,Kb as l,Lb as ct,Mb as ht,Nb as T,Ob as W,Pb as u,Qb as m,Sa as d,Wb as ut,X as D,Xa as H,Xb as $,Y as M,Ya as it,Yb as mt,Zb as ft,a as k,aa as V,bb as N,db as nt,fa as L,fc as P,ga as C,gb as z,ha as A,hb as B,hc as gt,ib as ot,ic as wt,kb as E,mb as c,rc as bt,sb as v,ta as et,tb as rt,ua as b,ub as st,vc as vt,xb as s,yb as y,yc as yt,zb as _}from"./chunk-OPN7DFH2.js";var $t=["data-p-icon","times"],Zt=(()=>{class e extends Pt{static \u0275fac=(()=>{let t;return function(n){return(t||(t=b(e)))(n||e)}})();static \u0275cmp=z({type:e,selectors:[["","data-p-icon","times"]],features:[E],attrs:$t,decls:1,vars:0,consts:[["d","M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z","fill","currentColor"]],template:function(i,n){i&1&&(A(),lt(0,"path",0))},encapsulation:2})}return e})();var Qt=`
    .p-drawer {
        display: flex;
        flex-direction: column;
        transform: translate3d(0px, 0px, 0px);
        position: relative;
        transition: transform 0.3s;
        background: dt('drawer.background');
        color: dt('drawer.color');
        border: 1px solid dt('drawer.border.color');
        box-shadow: dt('drawer.shadow');
    }

    .p-drawer-content {
        overflow-y: auto;
        flex-grow: 1;
        padding: dt('drawer.content.padding');
    }

    .p-drawer-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-shrink: 0;
        padding: dt('drawer.header.padding');
    }

    .p-drawer-footer {
        padding: dt('drawer.footer.padding');
    }

    .p-drawer-title {
        font-weight: dt('drawer.title.font.weight');
        font-size: dt('drawer.title.font.size');
    }

    .p-drawer-full .p-drawer {
        transition: none;
        transform: none;
        width: 100vw !important;
        height: 100vh !important;
        max-height: 100%;
        top: 0px !important;
        left: 0px !important;
        border-width: 1px;
    }

    .p-drawer-left .p-drawer-enter-from,
    .p-drawer-left .p-drawer-leave-to {
        transform: translateX(-100%);
    }

    .p-drawer-right .p-drawer-enter-from,
    .p-drawer-right .p-drawer-leave-to {
        transform: translateX(100%);
    }

    .p-drawer-top .p-drawer-enter-from,
    .p-drawer-top .p-drawer-leave-to {
        transform: translateY(-100%);
    }

    .p-drawer-bottom .p-drawer-enter-from,
    .p-drawer-bottom .p-drawer-leave-to {
        transform: translateY(100%);
    }

    .p-drawer-full .p-drawer-enter-from,
    .p-drawer-full .p-drawer-leave-to {
        opacity: 0;
    }

    .p-drawer-full .p-drawer-enter-active,
    .p-drawer-full .p-drawer-leave-active {
        transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
    }

    .p-drawer-left .p-drawer {
        width: 20rem;
        height: 100%;
        border-inline-end-width: 1px;
    }

    .p-drawer-right .p-drawer {
        width: 20rem;
        height: 100%;
        border-inline-start-width: 1px;
    }

    .p-drawer-top .p-drawer {
        height: 10rem;
        width: 100%;
        border-block-end-width: 1px;
    }

    .p-drawer-bottom .p-drawer {
        height: 10rem;
        width: 100%;
        border-block-start-width: 1px;
    }

    .p-drawer-left .p-drawer-content,
    .p-drawer-right .p-drawer-content,
    .p-drawer-top .p-drawer-content,
    .p-drawer-bottom .p-drawer-content {
        width: 100%;
        height: 100%;
    }

    .p-drawer-open {
        display: flex;
    }

    .p-drawer-mask:dir(rtl) {
        flex-direction: row-reverse;
    }
`;var Gt=["header"],Kt=["footer"],Ut=["content"],Xt=["closeicon"],Yt=["headless"],Jt=["container"],te=["closeButton"],ee=["*"],ie=(e,a)=>({transform:e,transition:a}),ne=e=>({value:"visible",params:e});function oe(e,a){e&1&&O(0)}function re(e,a){if(e&1&&c(0,oe,1,0,"ng-container",4),e&2){let t=l(2);s("ngTemplateOutlet",t.headlessTemplate||t._headlessTemplate)}}function se(e,a){e&1&&O(0)}function ae(e,a){if(e&1&&(y(0,"div"),mt(1),_()),e&2){let t=l(3);$(t.cx("title")),d(),ft(t.header)}}function le(e,a){e&1&&(A(),at(0,"svg",11)),e&2&&v("data-pc-section","closeicon")}function pe(e,a){}function de(e,a){e&1&&c(0,pe,0,0,"ng-template")}function ce(e,a){if(e&1&&c(0,le,1,1,"svg",10)(1,de,1,0,null,4),e&2){let t=l(4);s("ngIf",!t.closeIconTemplate&&!t._closeIconTemplate),d(),s("ngTemplateOutlet",t.closeIconTemplate||t._closeIconTemplate)}}function he(e,a){if(e&1){let t=j();y(0,"p-button",9),q("onClick",function(n){L(t);let o=l(3);return C(o.close(n))})("keydown.enter",function(n){L(t);let o=l(3);return C(o.close(n))}),c(1,ce,2,2,"ng-template",null,1,bt),_()}if(e&2){let t=l(3);s("ngClass",t.cx("pcCloseButton"))("buttonProps",t.closeButtonProps)("ariaLabel",t.ariaCloseLabel),v("data-pc-section","closebutton")("data-pc-group-section","iconcontainer")}}function ue(e,a){e&1&&O(0)}function me(e,a){e&1&&O(0)}function fe(e,a){if(e&1&&(pt(0),y(1,"div",5),c(2,me,1,0,"ng-container",4),_(),dt()),e&2){let t=l(3);d(),s("ngClass",t.cx("footer")),v("data-pc-section","footer"),d(),s("ngTemplateOutlet",t.footerTemplate||t._footerTemplate)}}function ge(e,a){if(e&1&&(y(0,"div",5),c(1,se,1,0,"ng-container",4)(2,ae,2,3,"div",6)(3,he,3,5,"p-button",7),_(),y(4,"div",5),ht(5),c(6,ue,1,0,"ng-container",4),_(),c(7,fe,3,3,"ng-container",8)),e&2){let t=l(2);s("ngClass",t.cx("header")),v("data-pc-section","header"),d(),s("ngTemplateOutlet",t.headerTemplate||t._headerTemplate),d(),s("ngIf",t.header),d(),s("ngIf",t.showCloseIcon&&t.closable),d(),s("ngClass",t.cx("content")),v("data-pc-section","content"),d(2),s("ngTemplateOutlet",t.contentTemplate||t._contentTemplate),d(),s("ngIf",t.footerTemplate||t._footerTemplate)}}function we(e,a){if(e&1){let t=j();y(0,"div",3,0),q("@panelState.start",function(n){L(t);let o=l();return C(o.onAnimationStart(n))})("@panelState.done",function(n){L(t);let o=l();return C(o.onAnimationEnd(n))})("keydown",function(n){L(t);let o=l();return C(o.onKeyDown(n))}),rt(2,re,1,1,"ng-container")(3,ge,8,9),_()}if(e&2){let t=l();ut(t.style),$(t.cn(t.cx("root"),t.styleClass)),s("@panelState",gt(11,ne,wt(8,ie,t.transformOptions,t.transitionOptions))),v("data-pc-name","sidebar")("data-pc-section","root"),d(2),st(t.headlessTemplate||t._headlessTemplate?2:3)}}var be=`
    ${Qt}

    /** For PrimeNG **/
    .p-drawer {
        position: fixed;
        display: flex;
        flex-direction: column;
    }

    .p-drawer-left {
        top: 0;
        left: 0;
        width: 20rem;
        height: 100%;
    }

    .p-drawer-right {
        top: 0;
        right: 0;
        width: 20rem;
        height: 100%;
    }

    .p-drawer-top {
        top: 0;
        left: 0;
        width: 100%;
        height: 10rem;
    }

    .p-drawer-bottom {
        bottom: 0;
        left: 0;
        width: 100%;
        height: 10rem;
    }

    .p-drawer-full {
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        -webkit-transition: none;
        transition: none;
    }

    .p-overlay-mask-enter {
        animation: p-overlay-mask-enter-animation 150ms forwards;
    }

    .p-overlay-mask-leave {
        animation: p-overlay-mask-leave-animation 150ms forwards;
    }

    @keyframes p-overlay-mask-enter-animation {
        from {
            background-color: transparent;
        }
        to {
            background-color: rgba(0, 0, 0, 0.4);
        }
    }
    @keyframes p-overlay-mask-leave-animation {
        from {
            background-color: rgba(0, 0, 0, 0.4);
        }
        to {
            background-color: transparent;
        }
    }
`,ve={mask:({instance:e})=>["p-drawer-mask",{"p-overlay-mask p-overlay-mask-enter":e.modal},{"p-drawer-full":e.fullScreen}],root:({instance:e})=>["p-drawer p-component",{"p-drawer-full":e.fullScreen,"p-drawer-open":e.visible},`p-drawer-${e.position}`],header:"p-drawer-header",title:"p-drawer-title",pcCloseButton:"p-drawer-close-button",content:"p-drawer-content",footer:"p-drawer-footer"},Nt=(()=>{class e extends Z{name="drawer";theme=be;classes=ve;static \u0275fac=(()=>{let t;return function(n){return(t||(t=b(e)))(n||e)}})();static \u0275prov=D({token:e,factory:e.\u0275fac})}return e})();var ye=X([K({transform:"{{transform}}",opacity:0}),G("{{transition}}")]),_e=X([G("{{transition}}",K({transform:"{{transform}}",opacity:0}))]),jt="translate3d(-100%, 0px, 0px)",Te=(()=>{class e extends Q{appendTo="body";blockScroll=!1;style;styleClass;ariaCloseLabel;autoZIndex=!0;baseZIndex=0;modal=!0;closeButtonProps={severity:"secondary",text:!0,rounded:!0};dismissible=!0;showCloseIcon=!0;closeOnEscape=!0;transitionOptions="150ms cubic-bezier(0, 0, 0.2, 1)";get visible(){return this._visible??!1}set visible(t){this._visible=t}get position(){return this._position}set position(t){if(this._position=t,t==="full"){this.transformOptions="none";return}switch(t){case"left":this.transformOptions="translate3d(-100%, 0px, 0px)";break;case"right":this.transformOptions="translate3d(100%, 0px, 0px)";break;case"bottom":this.transformOptions="translate3d(0px, 100%, 0px)";break;case"top":this.transformOptions="translate3d(0px, -100%, 0px)";break}}get fullScreen(){return this._fullScreen}set fullScreen(t){this._fullScreen=t,t===!0?this.transformOptions="none":this.transformOptions=jt}header;maskStyle;closable=!0;onShow=new H;onHide=new H;visibleChange=new H;containerViewChild;closeButtonViewChild;initialized;_visible;_position="left";_fullScreen=!1;container;transformOptions=jt;mask;maskClickListener;documentEscapeListener;animationEndListener;_componentStyle=V(Nt);ngAfterViewInit(){super.ngAfterViewInit(),this.initialized=!0}headerTemplate;footerTemplate;contentTemplate;closeIconTemplate;headlessTemplate;_headerTemplate;_footerTemplate;_contentTemplate;_closeIconTemplate;_headlessTemplate;templates;ngAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case"content":this._contentTemplate=t.template;break;case"header":this._headerTemplate=t.template;break;case"footer":this._footerTemplate=t.template;break;case"closeicon":this._closeIconTemplate=t.template;break;case"headless":this._headlessTemplate=t.template;break;default:this._contentTemplate=t.template;break}})}onKeyDown(t){t.code==="Escape"&&this.hide(!1)}show(){this.container?.setAttribute(this.attrSelector,""),this.autoZIndex&&f.set("modal",this.container,this.baseZIndex||this.config.zIndex.modal),this.modal&&this.enableModality(),this.onShow.emit({}),this.visibleChange.emit(!0)}hide(t=!0){t&&this.onHide.emit({}),this.modal&&this.disableModality()}close(t){this.hide(),this.visibleChange.emit(!1),t.preventDefault()}enableModality(){let t=this.document.querySelectorAll(".p-drawer-open"),i=t.length,n=i==1?String(parseInt(this.container.style.zIndex)-1):String(parseInt(t[i-1].style.zIndex)-1);this.mask||(this.mask=this.renderer.createElement("div"),this.mask&&(tt(this.mask,"style",this.getMaskStyle()),tt(this.mask,"style",`z-index: ${n}`),J(this.mask,this.cx("mask"))),this.dismissible&&(this.maskClickListener=this.renderer.listen(this.mask,"click",o=>{this.dismissible&&this.close(o)})),this.renderer.appendChild(this.document.body,this.mask),this.blockScroll&&Ht())}getMaskStyle(){return this.maskStyle?Object.entries(this.maskStyle).map(([t,i])=>`${t}: ${i}`).join("; "):""}disableModality(){this.mask&&(kt(this.mask,"p-overlay-mask-enter"),J(this.mask,"p-overlay-mask-leave"),this.animationEndListener=this.renderer.listen(this.mask,"animationend",this.destroyModal.bind(this)))}destroyModal(){this.unbindMaskClickListener(),this.mask&&this.renderer.removeChild(this.document.body,this.mask),this.blockScroll&&zt(),this.unbindAnimationEndListener(),this.mask=null}onAnimationStart(t){switch(t.toState){case"visible":this.container=t.element,this.appendContainer(),this.show(),this.closeOnEscape&&this.bindDocumentEscapeListener();break}}onAnimationEnd(t){switch(t.toState){case"void":this.hide(!1),f.clear(this.container),this.unbindGlobalListeners();break}}appendContainer(){this.appendTo&&(this.appendTo==="body"&&this.container?this.renderer.appendChild(this.document.body,this.container):this.container&&I(this.appendTo,this.container))}bindDocumentEscapeListener(){let t=this.el?this.el.nativeElement.ownerDocument:this.document;this.documentEscapeListener=this.renderer.listen(t,"keydown",i=>{i.which==27&&parseInt(this.container.style.zIndex)===f.get(this.container)&&this.close(i)})}unbindDocumentEscapeListener(){this.documentEscapeListener&&(this.documentEscapeListener(),this.documentEscapeListener=null)}unbindMaskClickListener(){this.maskClickListener&&(this.maskClickListener(),this.maskClickListener=null)}unbindGlobalListeners(){this.unbindMaskClickListener(),this.unbindDocumentEscapeListener()}unbindAnimationEndListener(){this.animationEndListener&&this.mask&&(this.animationEndListener(),this.animationEndListener=null)}ngOnDestroy(){this.initialized=!1,this.visible&&this.modal&&this.destroyModal(),this.appendTo&&this.container&&this.renderer.appendChild(this.el.nativeElement,this.container),this.container&&this.autoZIndex&&f.clear(this.container),this.container=null,this.unbindGlobalListeners(),this.unbindAnimationEndListener()}static \u0275fac=(()=>{let t;return function(n){return(t||(t=b(e)))(n||e)}})();static \u0275cmp=z({type:e,selectors:[["p-drawer"]],contentQueries:function(i,n,o){if(i&1&&(T(o,Gt,4),T(o,Kt,4),T(o,Ut,4),T(o,Xt,4),T(o,Yt,4),T(o,At,4)),i&2){let r;u(r=m())&&(n.headerTemplate=r.first),u(r=m())&&(n.footerTemplate=r.first),u(r=m())&&(n.contentTemplate=r.first),u(r=m())&&(n.closeIconTemplate=r.first),u(r=m())&&(n.headlessTemplate=r.first),u(r=m())&&(n.templates=r)}},viewQuery:function(i,n){if(i&1&&(W(Jt,5),W(te,5)),i&2){let o;u(o=m())&&(n.containerViewChild=o.first),u(o=m())&&(n.closeButtonViewChild=o.first)}},inputs:{appendTo:"appendTo",blockScroll:[2,"blockScroll","blockScroll",p],style:"style",styleClass:"styleClass",ariaCloseLabel:"ariaCloseLabel",autoZIndex:[2,"autoZIndex","autoZIndex",p],baseZIndex:[2,"baseZIndex","baseZIndex",g],modal:[2,"modal","modal",p],closeButtonProps:"closeButtonProps",dismissible:[2,"dismissible","dismissible",p],showCloseIcon:[2,"showCloseIcon","showCloseIcon",p],closeOnEscape:[2,"closeOnEscape","closeOnEscape",p],transitionOptions:"transitionOptions",visible:"visible",position:"position",fullScreen:"fullScreen",header:"header",maskStyle:"maskStyle",closable:[2,"closable","closable",p]},outputs:{onShow:"onShow",onHide:"onHide",visibleChange:"visibleChange"},features:[P([Nt]),E],ngContentSelectors:ee,decls:1,vars:1,consts:[["container",""],["icon",""],["role","complementary",3,"class","style","keydown",4,"ngIf"],["role","complementary",3,"keydown"],[4,"ngTemplateOutlet"],[3,"ngClass"],[3,"class",4,"ngIf"],[3,"ngClass","buttonProps","ariaLabel","onClick","keydown.enter",4,"ngIf"],[4,"ngIf"],[3,"onClick","keydown.enter","ngClass","buttonProps","ariaLabel"],["data-p-icon","times",4,"ngIf"],["data-p-icon","times"]],template:function(i,n){i&1&&(ct(),c(0,we,4,13,"div",2)),i&2&&s("ngIf",n.visible)},dependencies:[Lt,_t,Tt,xt,Ft,Zt,R],encapsulation:2,data:{animation:[Et("panelState",[U("void => visible",[Y(ye)]),U("visible => void",[Y(_e)])])]},changeDetection:0})}return e})(),Ue=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=B({type:e});static \u0275inj=M({imports:[Te,R,R]})}return e})();var qt=`
    .p-tooltip {
        position: absolute;
        display: none;
        max-width: dt('tooltip.max.width');
    }

    .p-tooltip-right,
    .p-tooltip-left {
        padding: 0 dt('tooltip.gutter');
    }

    .p-tooltip-top,
    .p-tooltip-bottom {
        padding: dt('tooltip.gutter') 0;
    }

    .p-tooltip-text {
        white-space: pre-line;
        word-break: break-word;
        background: dt('tooltip.background');
        color: dt('tooltip.color');
        padding: dt('tooltip.padding');
        box-shadow: dt('tooltip.shadow');
        border-radius: dt('tooltip.border.radius');
    }

    .p-tooltip-arrow {
        position: absolute;
        width: 0;
        height: 0;
        border-color: transparent;
        border-style: solid;
    }

    .p-tooltip-right .p-tooltip-arrow {
        margin-top: calc(-1 * dt('tooltip.gutter'));
        border-width: dt('tooltip.gutter') dt('tooltip.gutter') dt('tooltip.gutter') 0;
        border-right-color: dt('tooltip.background');
    }

    .p-tooltip-left .p-tooltip-arrow {
        margin-top: calc(-1 * dt('tooltip.gutter'));
        border-width: dt('tooltip.gutter') 0 dt('tooltip.gutter') dt('tooltip.gutter');
        border-left-color: dt('tooltip.background');
    }

    .p-tooltip-top .p-tooltip-arrow {
        margin-left: calc(-1 * dt('tooltip.gutter'));
        border-width: dt('tooltip.gutter') dt('tooltip.gutter') 0 dt('tooltip.gutter');
        border-top-color: dt('tooltip.background');
        border-bottom-color: dt('tooltip.background');
    }

    .p-tooltip-bottom .p-tooltip-arrow {
        margin-left: calc(-1 * dt('tooltip.gutter'));
        border-width: 0 dt('tooltip.gutter') dt('tooltip.gutter') dt('tooltip.gutter');
        border-top-color: dt('tooltip.background');
        border-bottom-color: dt('tooltip.background');
    }
`;var xe={root:"p-tooltip p-component",arrow:"p-tooltip-arrow",text:"p-tooltip-text"},Wt=(()=>{class e extends Z{name="tooltip";theme=qt;classes=xe;static \u0275fac=(()=>{let t;return function(n){return(t||(t=b(e)))(n||e)}})();static \u0275prov=D({token:e,factory:e.\u0275fac})}return e})();var ci=(()=>{class e extends Q{zone;viewContainer;tooltipPosition;tooltipEvent="hover";positionStyle;tooltipStyleClass;tooltipZIndex;escape=!0;showDelay;hideDelay;life;positionTop;positionLeft;autoHide=!0;fitContent=!0;hideOnEscape=!0;content;get disabled(){return this._disabled}set disabled(t){this._disabled=t,this.deactivate()}tooltipOptions;appendTo=yt(void 0);$appendTo=vt(()=>this.appendTo()||this.config.overlayAppendTo());_tooltipOptions={tooltipLabel:null,tooltipPosition:"right",tooltipEvent:"hover",appendTo:"body",positionStyle:null,tooltipStyleClass:null,tooltipZIndex:"auto",escape:!0,disabled:null,showDelay:null,hideDelay:null,positionTop:null,positionLeft:null,life:null,autoHide:!0,hideOnEscape:!0,id:Vt("pn_id_")+"_tooltip"};_disabled;container;styleClass;tooltipText;showTimeout;hideTimeout;active;mouseEnterListener;mouseLeaveListener;containerMouseleaveListener;clickListener;focusListener;blurListener;documentEscapeListener;scrollHandler;resizeListener;_componentStyle=V(Wt);interactionInProgress=!1;constructor(t,i){super(),this.zone=t,this.viewContainer=i}ngAfterViewInit(){super.ngAfterViewInit(),Ct(this.platformId)&&this.zone.runOutsideAngular(()=>{let t=this.getOption("tooltipEvent");if((t==="hover"||t==="both")&&(this.mouseEnterListener=this.onMouseEnter.bind(this),this.mouseLeaveListener=this.onMouseLeave.bind(this),this.clickListener=this.onInputClick.bind(this),this.el.nativeElement.addEventListener("mouseenter",this.mouseEnterListener),this.el.nativeElement.addEventListener("click",this.clickListener),this.el.nativeElement.addEventListener("mouseleave",this.mouseLeaveListener)),t==="focus"||t==="both"){this.focusListener=this.onFocus.bind(this),this.blurListener=this.onBlur.bind(this);let i=this.el.nativeElement.querySelector(".p-component");i||(i=this.getTarget(this.el.nativeElement)),i.addEventListener("focus",this.focusListener),i.addEventListener("blur",this.blurListener)}})}ngOnChanges(t){super.ngOnChanges(t),t.tooltipPosition&&this.setOption({tooltipPosition:t.tooltipPosition.currentValue}),t.tooltipEvent&&this.setOption({tooltipEvent:t.tooltipEvent.currentValue}),t.appendTo&&this.setOption({appendTo:t.appendTo.currentValue}),t.positionStyle&&this.setOption({positionStyle:t.positionStyle.currentValue}),t.tooltipStyleClass&&this.setOption({tooltipStyleClass:t.tooltipStyleClass.currentValue}),t.tooltipZIndex&&this.setOption({tooltipZIndex:t.tooltipZIndex.currentValue}),t.escape&&this.setOption({escape:t.escape.currentValue}),t.showDelay&&this.setOption({showDelay:t.showDelay.currentValue}),t.hideDelay&&this.setOption({hideDelay:t.hideDelay.currentValue}),t.life&&this.setOption({life:t.life.currentValue}),t.positionTop&&this.setOption({positionTop:t.positionTop.currentValue}),t.positionLeft&&this.setOption({positionLeft:t.positionLeft.currentValue}),t.disabled&&this.setOption({disabled:t.disabled.currentValue}),t.content&&(this.setOption({tooltipLabel:t.content.currentValue}),this.active&&(t.content.currentValue?this.container&&this.container.offsetParent?(this.updateText(),this.align()):this.show():this.hide())),t.autoHide&&this.setOption({autoHide:t.autoHide.currentValue}),t.id&&this.setOption({id:t.id.currentValue}),t.tooltipOptions&&(this._tooltipOptions=k(k({},this._tooltipOptions),t.tooltipOptions.currentValue),this.deactivate(),this.active&&(this.getOption("tooltipLabel")?this.container&&this.container.offsetParent?(this.updateText(),this.align()):this.show():this.hide()))}isAutoHide(){return this.getOption("autoHide")}onMouseEnter(t){!this.container&&!this.showTimeout&&this.activate()}onMouseLeave(t){this.isAutoHide()?this.deactivate():!(S(t.relatedTarget,"p-tooltip")||S(t.relatedTarget,"p-tooltip-text")||S(t.relatedTarget,"p-tooltip-arrow"))&&this.deactivate()}onFocus(t){this.activate()}onBlur(t){this.deactivate()}onInputClick(t){this.deactivate()}activate(){if(!this.interactionInProgress){if(this.active=!0,this.clearHideTimeout(),this.getOption("showDelay")?this.showTimeout=setTimeout(()=>{this.show()},this.getOption("showDelay")):this.show(),this.getOption("life")){let t=this.getOption("showDelay")?this.getOption("life")+this.getOption("showDelay"):this.getOption("life");this.hideTimeout=setTimeout(()=>{this.hide()},t)}this.getOption("hideOnEscape")&&(this.documentEscapeListener=this.renderer.listen("document","keydown.escape",()=>{this.deactivate(),this.documentEscapeListener?.()})),this.interactionInProgress=!0}}deactivate(){this.interactionInProgress=!1,this.active=!1,this.clearShowTimeout(),this.getOption("hideDelay")?(this.clearHideTimeout(),this.hideTimeout=setTimeout(()=>{this.hide()},this.getOption("hideDelay"))):this.hide(),this.documentEscapeListener&&this.documentEscapeListener()}create(){this.container&&(this.clearHideTimeout(),this.remove()),this.container=document.createElement("div"),this.container.setAttribute("id",this.getOption("id")),this.container.setAttribute("role","tooltip");let t=document.createElement("div");t.className="p-tooltip-arrow",t.setAttribute("data-pc-section","arrow"),this.container.appendChild(t),this.tooltipText=document.createElement("div"),this.tooltipText.className="p-tooltip-text",this.updateText(),this.getOption("positionStyle")&&(this.container.style.position=this.getOption("positionStyle")),this.container.appendChild(this.tooltipText),this.getOption("appendTo")==="body"?document.body.appendChild(this.container):this.getOption("appendTo")==="target"?I(this.container,this.el.nativeElement):I(this.getOption("appendTo"),this.container),this.container.style.display="none",this.fitContent&&(this.container.style.width="fit-content"),this.isAutoHide()?this.container.style.pointerEvents="none":(this.container.style.pointerEvents="unset",this.bindContainerMouseleaveListener())}bindContainerMouseleaveListener(){if(!this.containerMouseleaveListener){let t=this.container??this.container.nativeElement;this.containerMouseleaveListener=this.renderer.listen(t,"mouseleave",i=>{this.deactivate()})}}unbindContainerMouseleaveListener(){this.containerMouseleaveListener&&(this.bindContainerMouseleaveListener(),this.containerMouseleaveListener=null)}show(){if(!this.getOption("tooltipLabel")||this.getOption("disabled"))return;this.create(),this.el.nativeElement.closest("p-dialog")?setTimeout(()=>{this.container&&(this.container.style.display="inline-block"),this.container&&this.align()},100):(this.container.style.display="inline-block",this.align()),Dt(this.container,250),this.getOption("tooltipZIndex")==="auto"?f.set("tooltip",this.container,this.config.zIndex.tooltip):this.container.style.zIndex=this.getOption("tooltipZIndex"),this.bindDocumentResizeListener(),this.bindScrollListener()}hide(){this.getOption("tooltipZIndex")==="auto"&&f.clear(this.container),this.remove()}updateText(){let t=this.getOption("tooltipLabel");if(t&&typeof t.createEmbeddedView=="function"){let i=this.viewContainer.createEmbeddedView(t);i.detectChanges(),i.rootNodes.forEach(n=>this.tooltipText.appendChild(n))}else this.getOption("escape")?(this.tooltipText.innerHTML="",this.tooltipText.appendChild(document.createTextNode(t))):this.tooltipText.innerHTML=t}align(){let t=this.getOption("tooltipPosition"),n={top:[this.alignTop,this.alignBottom,this.alignRight,this.alignLeft],bottom:[this.alignBottom,this.alignTop,this.alignRight,this.alignLeft],left:[this.alignLeft,this.alignRight,this.alignTop,this.alignBottom],right:[this.alignRight,this.alignLeft,this.alignTop,this.alignBottom]}[t]||[];for(let[o,r]of n.entries())if(o===0)r.call(this);else if(this.isOutOfBounds())r.call(this);else break}getHostOffset(){if(this.getOption("appendTo")==="body"||this.getOption("appendTo")==="target"){let t=this.el.nativeElement.getBoundingClientRect(),i=t.left+St(),n=t.top+It();return{left:i,top:n}}else return{left:0,top:0}}get activeElement(){return this.el.nativeElement.nodeName.startsWith("P-")?F(this.el.nativeElement,".p-component"):this.el.nativeElement}alignRight(){this.preAlign("right");let t=this.activeElement,i=h(t),n=(w(t)-w(this.container))/2;this.alignTooltip(i,n);let o=this.getArrowElement();o.style.top="50%",o.style.right=null,o.style.bottom=null,o.style.left="0"}alignLeft(){this.preAlign("left");let t=this.getArrowElement(),i=h(this.container),n=(w(this.el.nativeElement)-w(this.container))/2;this.alignTooltip(-i,n),t.style.top="50%",t.style.right="0",t.style.bottom=null,t.style.left=null}alignTop(){this.preAlign("top");let t=this.getArrowElement(),i=this.getHostOffset(),n=h(this.container),o=(h(this.el.nativeElement)-h(this.container))/2,r=w(this.container);this.alignTooltip(o,-r);let x=i.left-this.getHostOffset().left+n/2;t.style.top=null,t.style.right=null,t.style.bottom="0",t.style.left=x+"px"}getArrowElement(){return F(this.container,'[data-pc-section="arrow"]')}alignBottom(){this.preAlign("bottom");let t=this.getArrowElement(),i=h(this.container),n=this.getHostOffset(),o=(h(this.el.nativeElement)-h(this.container))/2,r=w(this.el.nativeElement);this.alignTooltip(o,r);let x=n.left-this.getHostOffset().left+i/2;t.style.top="0",t.style.right=null,t.style.bottom=null,t.style.left=x+"px"}alignTooltip(t,i){let n=this.getHostOffset(),o=n.left+t,r=n.top+i;this.container.style.left=o+this.getOption("positionLeft")+"px",this.container.style.top=r+this.getOption("positionTop")+"px"}setOption(t){this._tooltipOptions=k(k({},this._tooltipOptions),t)}getOption(t){return this._tooltipOptions[t]}getTarget(t){return S(t,"p-inputwrapper")?F(t,"input"):t}preAlign(t){this.container.style.left="-999px",this.container.style.top="-999px";let i="p-tooltip p-component p-tooltip-"+t;this.container.className=this.getOption("tooltipStyleClass")?i+" "+this.getOption("tooltipStyleClass"):i}isOutOfBounds(){let t=this.container.getBoundingClientRect(),i=t.top,n=t.left,o=h(this.container),r=w(this.container),x=Ot();return n+o>x.width||n<0||i<0||i+r>x.height}onWindowResize(t){this.hide()}bindDocumentResizeListener(){this.zone.runOutsideAngular(()=>{this.resizeListener=this.onWindowResize.bind(this),window.addEventListener("resize",this.resizeListener)})}unbindDocumentResizeListener(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)}bindScrollListener(){this.scrollHandler||(this.scrollHandler=new Bt(this.el.nativeElement,()=>{this.container&&this.hide()})),this.scrollHandler.bindScrollListener()}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}unbindEvents(){let t=this.getOption("tooltipEvent");if((t==="hover"||t==="both")&&(this.el.nativeElement.removeEventListener("mouseenter",this.mouseEnterListener),this.el.nativeElement.removeEventListener("mouseleave",this.mouseLeaveListener),this.el.nativeElement.removeEventListener("click",this.clickListener)),t==="focus"||t==="both"){let i=this.el.nativeElement.querySelector(".p-component");i||(i=this.getTarget(this.el.nativeElement)),i.removeEventListener("focus",this.focusListener),i.removeEventListener("blur",this.blurListener)}this.unbindDocumentResizeListener()}remove(){this.container&&this.container.parentElement&&(this.getOption("appendTo")==="body"?document.body.removeChild(this.container):this.getOption("appendTo")==="target"?this.el.nativeElement.removeChild(this.container):Mt(this.getOption("appendTo"),this.container)),this.unbindDocumentResizeListener(),this.unbindScrollListener(),this.unbindContainerMouseleaveListener(),this.clearTimeouts(),this.container=null,this.scrollHandler=null}clearShowTimeout(){this.showTimeout&&(clearTimeout(this.showTimeout),this.showTimeout=null)}clearHideTimeout(){this.hideTimeout&&(clearTimeout(this.hideTimeout),this.hideTimeout=null)}clearTimeouts(){this.clearShowTimeout(),this.clearHideTimeout()}ngOnDestroy(){this.unbindEvents(),super.ngOnDestroy(),this.container&&f.clear(this.container),this.remove(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.documentEscapeListener&&this.documentEscapeListener()}static \u0275fac=function(i){return new(i||e)(N(it),N(nt))};static \u0275dir=ot({type:e,selectors:[["","pTooltip",""]],inputs:{tooltipPosition:"tooltipPosition",tooltipEvent:"tooltipEvent",positionStyle:"positionStyle",tooltipStyleClass:"tooltipStyleClass",tooltipZIndex:"tooltipZIndex",escape:[2,"escape","escape",p],showDelay:[2,"showDelay","showDelay",g],hideDelay:[2,"hideDelay","hideDelay",g],life:[2,"life","life",g],positionTop:[2,"positionTop","positionTop",g],positionLeft:[2,"positionLeft","positionLeft",g],autoHide:[2,"autoHide","autoHide",p],fitContent:[2,"fitContent","fitContent",p],hideOnEscape:[2,"hideOnEscape","hideOnEscape",p],content:[0,"pTooltip","content"],disabled:[0,"tooltipDisabled","disabled"],tooltipOptions:"tooltipOptions",appendTo:[1,"appendTo"]},features:[P([Wt]),E,et]})}return e})(),hi=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=B({type:e});static \u0275inj=M({})}return e})();export{Zt as a,Te as b,Ue as c,ci as d,hi as e};

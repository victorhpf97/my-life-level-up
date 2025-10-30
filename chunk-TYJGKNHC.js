import{a as Te,b as Pe,d as Be}from"./chunk-VFETCCBO.js";import{Ba as Ie,Ca as He,Ea as ke,H as N,I as ae,Ia as J,J as R,ea as Me,i as we,j as Ee,k as B,la as Se,m as W,ma as x,n as _,oa as j,qa as w}from"./chunk-TPPFLYLR.js";import{$ as Y,Ab as m,Ac as Fe,Bb as M,Bc as ne,Cb as S,Db as $,Dc as te,Ec as ie,Fb as Q,Fc as oe,Gb as L,Ia as c,Kb as k,Mb as be,Na as Z,Nb as l,O as T,Ob as p,P,Pb as ye,Q as I,Qb as _e,Rb as xe,U as f,Xb as A,Ya as b,Yb as Ce,Z as pe,Za as H,Zb as E,_ as ue,ab as C,bb as me,cb as h,ga as q,ib as g,jb as ge,ka as v,kb as fe,lc as D,nb as r,ob as s,oc as G,pb as d,qb as y,qc as ee,ub as K,vb as V,vc as Ae,wb as ve,wc as De,xb as he,zb as z}from"./chunk-L5XG55EY.js";var Ne=`
    .p-accordionpanel {
        display: flex;
        flex-direction: column;
        border-style: solid;
        border-width: dt('accordion.panel.border.width');
        border-color: dt('accordion.panel.border.color');
    }

    .p-accordionheader {
        all: unset;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: dt('accordion.header.padding');
        color: dt('accordion.header.color');
        background: dt('accordion.header.background');
        border-style: solid;
        border-width: dt('accordion.header.border.width');
        border-color: dt('accordion.header.border.color');
        font-weight: dt('accordion.header.font.weight');
        border-radius: dt('accordion.header.border.radius');
        transition:
            background dt('accordion.transition.duration'),
            color dt('accordion.transition.duration'),
            outline-color dt('accordion.transition.duration'),
            box-shadow dt('accordion.transition.duration');
        outline-color: transparent;
    }

    .p-accordionpanel:first-child > .p-accordionheader {
        border-width: dt('accordion.header.first.border.width');
        border-start-start-radius: dt('accordion.header.first.top.border.radius');
        border-start-end-radius: dt('accordion.header.first.top.border.radius');
    }

    .p-accordionpanel:last-child > .p-accordionheader {
        border-end-start-radius: dt('accordion.header.last.bottom.border.radius');
        border-end-end-radius: dt('accordion.header.last.bottom.border.radius');
    }

    .p-accordionpanel:last-child.p-accordionpanel-active > .p-accordionheader {
        border-end-start-radius: dt('accordion.header.last.active.bottom.border.radius');
        border-end-end-radius: dt('accordion.header.last.active.bottom.border.radius');
    }

    .p-accordionheader-toggle-icon {
        color: dt('accordion.header.toggle.icon.color');
    }

    .p-accordionpanel:not(.p-disabled) .p-accordionheader:focus-visible {
        box-shadow: dt('accordion.header.focus.ring.shadow');
        outline: dt('accordion.header.focus.ring.width') dt('accordion.header.focus.ring.style') dt('accordion.header.focus.ring.color');
        outline-offset: dt('accordion.header.focus.ring.offset');
    }

    .p-accordionpanel:not(.p-accordionpanel-active):not(.p-disabled) > .p-accordionheader:hover {
        background: dt('accordion.header.hover.background');
        color: dt('accordion.header.hover.color');
    }

    .p-accordionpanel:not(.p-accordionpanel-active):not(.p-disabled) .p-accordionheader:hover .p-accordionheader-toggle-icon {
        color: dt('accordion.header.toggle.icon.hover.color');
    }

    .p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader {
        background: dt('accordion.header.active.background');
        color: dt('accordion.header.active.color');
    }

    .p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader .p-accordionheader-toggle-icon {
        color: dt('accordion.header.toggle.icon.active.color');
    }

    .p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader:hover {
        background: dt('accordion.header.active.hover.background');
        color: dt('accordion.header.active.hover.color');
    }

    .p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader:hover .p-accordionheader-toggle-icon {
        color: dt('accordion.header.toggle.icon.active.hover.color');
    }

    .p-accordioncontent-content {
        border-style: solid;
        border-width: dt('accordion.content.border.width');
        border-color: dt('accordion.content.border.color');
        background-color: dt('accordion.content.background');
        color: dt('accordion.content.color');
        padding: dt('accordion.content.padding');
    }
`;var X=["*"],qe=["toggleicon"],Ge=n=>({active:n});function We(n,o){}function Je(n,o){n&1&&h(0,We,0,0,"ng-template")}function Xe(n,o){if(n&1&&h(0,Je,1,0,null,0),n&2){let e=m();r("ngTemplateOutlet",e.toggleicon)("ngTemplateOutletContext",E(2,Ge,e.active()))}}function Ye(n,o){if(n&1&&y(0,"span",4),n&2){let e=m(3);l(e.pcAccordion.collapseIcon),r("ngClass",e.pcAccordion.iconClass),g("aria-hidden",!0)}}function Ze(n,o){if(n&1&&(Y(),y(0,"svg",5)),n&2){let e=m(3);l(e.pcAccordion.iconClass),g("aria-hidden",!0)}}function en(n,o){if(n&1&&(K(0),h(1,Ye,1,4,"span",2)(2,Ze,1,3,"svg",3),V()),n&2){let e=m(2);c(),r("ngIf",e.pcAccordion.collapseIcon),c(),r("ngIf",!e.pcAccordion.collapseIcon)}}function nn(n,o){if(n&1&&y(0,"span",4),n&2){let e=m(3);l(e.pcAccordion.expandIcon),r("ngClass",e.pcAccordion.iconClass),g("aria-hidden",!0)}}function tn(n,o){if(n&1&&(Y(),y(0,"svg",7)),n&2){let e=m(3);l(e.pcAccordion.iconClass),g("aria-hidden",!0)}}function on(n,o){if(n&1&&(K(0),h(1,nn,1,4,"span",2)(2,tn,1,3,"svg",6),V()),n&2){let e=m(2);c(),r("ngIf",e.pcAccordion.expandIcon),c(),r("ngIf",!e.pcAccordion.expandIcon)}}function an(n,o){if(n&1&&h(0,en,3,2,"ng-container",1)(1,on,3,2,"ng-container",1),n&2){let e=m();r("ngIf",e.active()),c(),r("ngIf",!e.active())}}var je=n=>({transitionParams:n}),rn=n=>({value:"visible",params:n}),dn=n=>({value:"hidden",params:n}),cn=`
    ${Ne}

    /*For PrimeNG*/
    .p-accordionpanel:not(.p-accordionpanel-active) > .p-accordioncontent,
    .p-accordioncontent-content.ng-animating {
        overflow: hidden;
    }

    .p-accordionheader-toggle-icon.icon-start {
        order: -1;
    }

    .p-accordionheader:has(.p-accordionheader-toggle-icon.icon-start) {
        justify-content: flex-start;
        gap: dt('accordion.header.padding');
    }

    .p-accordioncontent.ng-animating {
        overflow: hidden;
    }

    .p-accordionheader.p-ripple {
        overflow: hidden;
        position: relative;
    }
`,sn={root:"p-accordion p-component",panel:({instance:n})=>["p-accordionpanel",{"p-accordionpanel-active":n.active(),"p-disabled":n.disabled()}],header:"p-accordionheader",toggleicon:"p-accordionheader-toggle-icon",contentContainer:"p-accordioncontent",content:"p-accordioncontent-content"},F=(()=>{class n extends j{name="accordion";theme=cn;classes=sn;static \u0275fac=(()=>{let e;return function(t){return(e||(e=v(n)))(t||n)}})();static \u0275prov=P({token:n,factory:n.\u0275fac})}return n})();var U=(()=>{class n extends w{pcAccordion=f(T(()=>O));value=ee(void 0);disabled=G(!1,{transform:e=>J(e)});active=D(()=>this.pcAccordion.multiple()?this.valueEquals(this.pcAccordion.value(),this.value()):this.pcAccordion.value()===this.value());valueEquals(e,i){return Array.isArray(e)?e.includes(i):e===i}_componentStyle=f(F);static \u0275fac=(()=>{let e;return function(t){return(e||(e=v(n)))(t||n)}})();static \u0275cmp=b({type:n,selectors:[["p-accordion-panel"],["p-accordionpanel"]],hostVars:5,hostBindings:function(i,t){i&2&&(g("data-pc-name","accordionpanel")("data-p-disabled",t.disabled())("data-p-active",t.active()),l(t.cx("panel")))},inputs:{value:[1,"value"],disabled:[1,"disabled"]},outputs:{value:"valueChange"},features:[A([F]),C],ngContentSelectors:X,decls:1,vars:0,template:function(i,t){i&1&&(M(),S(0))},dependencies:[_],encapsulation:2,changeDetection:0})}return n})(),de=(()=>{class n extends w{pcAccordion=f(T(()=>O));pcAccordionPanel=f(T(()=>U));id=D(()=>`${this.pcAccordion.id()}_accordionheader_${this.pcAccordionPanel.value()}`);active=D(()=>this.pcAccordionPanel.active());disabled=D(()=>this.pcAccordionPanel.disabled());ariaControls=D(()=>`${this.pcAccordion.id()}_accordioncontent_${this.pcAccordionPanel.value()}`);toggleicon;onClick(e){if(this.disabled())return;let i=this.active();this.changeActiveValue();let t=this.active(),a=this.pcAccordionPanel.value();!i&&t?this.pcAccordion.onOpen.emit({originalEvent:e,index:a}):i&&!t&&this.pcAccordion.onClose.emit({originalEvent:e,index:a})}onFocus(){!this.disabled()&&this.pcAccordion.selectOnFocus()&&this.changeActiveValue()}onKeydown(e){switch(e.code){case"ArrowDown":this.arrowDownKey(e);break;case"ArrowUp":this.arrowUpKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Enter":case"Space":case"NumpadEnter":this.onEnterKey(e);break;default:break}}_componentStyle=f(F);changeActiveValue(){this.pcAccordion.updateValue(this.pcAccordionPanel.value())}findPanel(e){return e?.closest('[data-pc-name="accordionpanel"]')}findHeader(e){return N(e,'[data-pc-name="accordionheader"]')}findNextPanel(e,i=!1){let t=i?e:e.nextElementSibling;return t?R(t,"data-p-disabled")?this.findNextPanel(t):this.findHeader(t):null}findPrevPanel(e,i=!1){let t=i?e:e.previousElementSibling;return t?R(t,"data-p-disabled")?this.findPrevPanel(t):this.findHeader(t):null}findFirstPanel(){return this.findNextPanel(this.pcAccordion.el.nativeElement.firstElementChild,!0)}findLastPanel(){return this.findPrevPanel(this.pcAccordion.el.nativeElement.lastElementChild,!0)}changeFocusedPanel(e,i){ae(i)}arrowDownKey(e){let i=this.findNextPanel(this.findPanel(e.currentTarget));i?this.changeFocusedPanel(e,i):this.onHomeKey(e),e.preventDefault()}arrowUpKey(e){let i=this.findPrevPanel(this.findPanel(e.currentTarget));i?this.changeFocusedPanel(e,i):this.onEndKey(e),e.preventDefault()}onHomeKey(e){let i=this.findFirstPanel();this.changeFocusedPanel(e,i),e.preventDefault()}onEndKey(e){let i=this.findLastPanel();this.changeFocusedPanel(e,i),e.preventDefault()}onEnterKey(e){this.disabled()||this.changeActiveValue(),e.preventDefault()}static \u0275fac=(()=>{let e;return function(t){return(e||(e=v(n)))(t||n)}})();static \u0275cmp=b({type:n,selectors:[["p-accordion-header"],["p-accordionheader"]],contentQueries:function(i,t,a){if(i&1&&$(a,qe,5),i&2){let u;Q(u=L())&&(t.toggleicon=u.first)}},hostVars:13,hostBindings:function(i,t){i&1&&z("click",function(u){return t.onClick(u)})("focus",function(u){return t.onFocus(u)})("keydown",function(u){return t.onKeydown(u)}),i&2&&(g("id",t.id())("aria-expanded",t.active())("aria-controls",t.ariaControls())("aria-disabled",t.disabled())("role","button")("tabindex",t.disabled()?"-1":"0")("data-p-active",t.active())("data-p-disabled",t.disabled())("data-pc-name","accordionheader"),l(t.cx("header")),k("user-select","none"))},features:[A([F]),me([Ie]),C],ngContentSelectors:X,decls:3,vars:1,consts:[[4,"ngTemplateOutlet","ngTemplateOutletContext"],[4,"ngIf"],[3,"class","ngClass",4,"ngIf"],["data-p-icon","chevron-up",3,"class",4,"ngIf"],[3,"ngClass"],["data-p-icon","chevron-up"],["data-p-icon","chevron-down",3,"class",4,"ngIf"],["data-p-icon","chevron-down"]],template:function(i,t){i&1&&(M(),S(0),ge(1,Xe,1,4)(2,an,2,2)),i&2&&(c(),fe(t.toggleicon?1:2))},dependencies:[_,we,B,W,Te,Pe],encapsulation:2,changeDetection:0})}return n})(),ce=(()=>{class n extends w{pcAccordion=f(T(()=>O));pcAccordionPanel=f(T(()=>U));active=D(()=>this.pcAccordionPanel.active());ariaLabelledby=D(()=>`${this.pcAccordion.id()}_accordionheader_${this.pcAccordionPanel.value()}`);id=D(()=>`${this.pcAccordion.id()}_accordioncontent_${this.pcAccordionPanel.value()}`);_componentStyle=f(F);static \u0275fac=(()=>{let e;return function(t){return(e||(e=v(n)))(t||n)}})();static \u0275cmp=b({type:n,selectors:[["p-accordion-content"],["p-accordioncontent"]],hostVars:7,hostBindings:function(i,t){i&2&&(g("id",t.id())("role","region")("data-pc-name","accordioncontent")("data-p-active",t.active())("aria-labelledby",t.ariaLabelledby()),l(t.cx("contentContainer")))},features:[A([F]),C],ngContentSelectors:X,decls:2,vars:11,template:function(i,t){i&1&&(M(),s(0,"div"),S(1),d()),i&2&&(l(t.cx("content")),r("@content",t.active()?E(5,rn,E(3,je,t.pcAccordion.transitionOptions)):E(9,dn,E(7,je,t.pcAccordion.transitionOptions))))},dependencies:[_],encapsulation:2,data:{animation:[Fe("content",[ie("hidden",te({height:"0",paddingBlockStart:"0",paddingBlockEnd:"0",borderBlockStartWidth:"0",borderBlockEndWidth:"0",visibility:"hidden"})),ie("visible",te({height:"*"})),oe("visible <=> hidden",[ne("{{transitionParams}}")]),oe("void => *",ne(0))])]},changeDetection:0})}return n})(),O=(()=>{class n extends w{value=ee(void 0);multiple=G(!1,{transform:e=>J(e)});styleClass;expandIcon;collapseIcon;selectOnFocus=G(!1,{transform:e=>J(e)});transitionOptions="400ms cubic-bezier(0.86, 0, 0.07, 1)";onClose=new Z;onOpen=new Z;id=q(Me("pn_id_"));_componentStyle=f(F);onKeydown(e){switch(e.code){case"ArrowDown":this.onTabArrowDownKey(e);break;case"ArrowUp":this.onTabArrowUpKey(e);break;case"Home":e.shiftKey||this.onTabHomeKey(e);break;case"End":e.shiftKey||this.onTabEndKey(e);break}}onTabArrowDownKey(e){let i=this.findNextHeaderAction(e.target.parentElement);i?this.changeFocusedTab(i):this.onTabHomeKey(e),e.preventDefault()}onTabArrowUpKey(e){let i=this.findPrevHeaderAction(e.target.parentElement);i?this.changeFocusedTab(i):this.onTabEndKey(e),e.preventDefault()}onTabHomeKey(e){let i=this.findFirstHeaderAction();this.changeFocusedTab(i),e.preventDefault()}changeFocusedTab(e){e&&ae(e)}findNextHeaderAction(e,i=!1){let t=i?e:e.nextElementSibling,a=N(t,'[data-pc-section="accordionheader"]');return a?R(a,"data-p-disabled")?this.findNextHeaderAction(a.parentElement):N(a.parentElement,'[data-pc-section="accordionheader"]'):null}findPrevHeaderAction(e,i=!1){let t=i?e:e.previousElementSibling,a=N(t,'[data-pc-section="accordionheader"]');return a?R(a,"data-p-disabled")?this.findPrevHeaderAction(a.parentElement):N(a.parentElement,'[data-pc-section="accordionheader"]'):null}findFirstHeaderAction(){let e=this.el.nativeElement.firstElementChild;return this.findNextHeaderAction(e,!0)}findLastHeaderAction(){let e=this.el.nativeElement.lastElementChild;return this.findPrevHeaderAction(e,!0)}onTabEndKey(e){let i=this.findLastHeaderAction();this.changeFocusedTab(i),e.preventDefault()}getBlockableElement(){return this.el.nativeElement.children[0]}updateValue(e){let i=this.value();if(this.multiple()){let t=Array.isArray(i)?[...i]:[],a=t.indexOf(e);a!==-1?t.splice(a,1):t.push(e),this.value.set(t)}else i===e?this.value.set(void 0):this.value.set(e)}static \u0275fac=(()=>{let e;return function(t){return(e||(e=v(n)))(t||n)}})();static \u0275cmp=b({type:n,selectors:[["p-accordion"]],hostVars:2,hostBindings:function(i,t){i&1&&z("keydown",function(u){return t.onKeydown(u)}),i&2&&l(t.cn(t.cx("root"),t.styleClass))},inputs:{value:[1,"value"],multiple:[1,"multiple"],styleClass:"styleClass",expandIcon:"expandIcon",collapseIcon:"collapseIcon",selectOnFocus:[1,"selectOnFocus"],transitionOptions:"transitionOptions"},outputs:{value:"valueChange",onClose:"onClose",onOpen:"onOpen"},features:[A([F]),C],ngContentSelectors:X,decls:1,vars:0,template:function(i,t){i&1&&(M(),S(0))},dependencies:[_,x],encapsulation:2,changeDetection:0})}return n})(),Ke=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=H({type:n});static \u0275inj=I({imports:[O,x,U,de,ce,x]})}return n})();var Ve=`
    .p-divider-horizontal {
        display: flex;
        width: 100%;
        position: relative;
        align-items: center;
        margin: dt('divider.horizontal.margin');
        padding: dt('divider.horizontal.padding');
    }

    .p-divider-horizontal:before {
        position: absolute;
        display: block;
        inset-block-start: 50%;
        inset-inline-start: 0;
        width: 100%;
        content: '';
        border-block-start: 1px solid dt('divider.border.color');
    }

    .p-divider-horizontal .p-divider-content {
        padding: dt('divider.horizontal.content.padding');
    }

    .p-divider-vertical {
        min-height: 100%;
        display: flex;
        position: relative;
        justify-content: center;
        margin: dt('divider.vertical.margin');
        padding: dt('divider.vertical.padding');
    }

    .p-divider-vertical:before {
        position: absolute;
        display: block;
        inset-block-start: 0;
        inset-inline-start: 50%;
        height: 100%;
        content: '';
        border-inline-start: 1px solid dt('divider.border.color');
    }

    .p-divider.p-divider-vertical .p-divider-content {
        padding: dt('divider.vertical.content.padding');
    }

    .p-divider-content {
        z-index: 1;
        background: dt('divider.content.background');
        color: dt('divider.content.color');
    }

    .p-divider-solid.p-divider-horizontal:before {
        border-block-start-style: solid;
    }

    .p-divider-solid.p-divider-vertical:before {
        border-inline-start-style: solid;
    }

    .p-divider-dashed.p-divider-horizontal:before {
        border-block-start-style: dashed;
    }

    .p-divider-dashed.p-divider-vertical:before {
        border-inline-start-style: dashed;
    }

    .p-divider-dotted.p-divider-horizontal:before {
        border-block-start-style: dotted;
    }

    .p-divider-dotted.p-divider-vertical:before {
        border-inline-start-style: dotted;
    }

    .p-divider-left:dir(rtl),
    .p-divider-right:dir(rtl) {
        flex-direction: row-reverse;
    }
`;var pn=["*"],un={root:({instance:n})=>({justifyContent:n.layout==="horizontal"?n.align==="center"||n.align==null?"center":n.align==="left"?"flex-start":n.align==="right"?"flex-end":null:null,alignItems:n.layout==="vertical"?n.align==="center"||n.align==null?"center":n.align==="top"?"flex-start":n.align==="bottom"?"flex-end":null:null})},mn={root:({instance:n})=>["p-divider p-component","p-divider-"+n.layout,"p-divider-"+n.type,{"p-divider-left":n.layout==="horizontal"&&(!n.align||n.align==="left")},{"p-divider-center":n.layout==="horizontal"&&n.align==="center"},{"p-divider-right":n.layout==="horizontal"&&n.align==="right"},{"p-divider-top":n.layout==="vertical"&&n.align==="top"},{"p-divider-center":n.layout==="vertical"&&(!n.align||n.align==="center")},{"p-divider-bottom":n.layout==="vertical"&&n.align==="bottom"}],content:"p-divider-content"},ze=(()=>{class n extends j{name="divider";theme=Ve;classes=mn;inlineStyles=un;static \u0275fac=(()=>{let e;return function(t){return(e||(e=v(n)))(t||n)}})();static \u0275prov=P({token:n,factory:n.\u0275fac})}return n})();var se=(()=>{class n extends w{styleClass;layout="horizontal";type="solid";align;_componentStyle=f(ze);static \u0275fac=(()=>{let e;return function(t){return(e||(e=v(n)))(t||n)}})();static \u0275cmp=b({type:n,selectors:[["p-divider"]],hostAttrs:["data-pc-name","divider","role","separator"],hostVars:5,hostBindings:function(i,t){i&2&&(g("aria-orientation",t.layout),be(t.sx("root")),l(t.cn(t.cx("root"),t.styleClass)))},inputs:{styleClass:"styleClass",layout:"layout",type:"type",align:"align"},features:[A([ze]),C],ngContentSelectors:pn,decls:2,vars:2,template:function(i,t){i&1&&(M(),s(0,"div"),S(1),d()),i&2&&l(t.cx("content"))},dependencies:[_,x],encapsulation:2,changeDetection:0})}return n})(),$e=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=H({type:n});static \u0275inj=I({imports:[se]})}return n})();var Qe=`
    .p-progressbar {
        display: block;
        position: relative;
        overflow: hidden;
        height: dt('progressbar.height');
        background: dt('progressbar.background');
        border-radius: dt('progressbar.border.radius');
    }

    .p-progressbar-value {
        margin: 0;
        background: dt('progressbar.value.background');
    }

    .p-progressbar-label {
        color: dt('progressbar.label.color');
        font-size: dt('progressbar.label.font.size');
        font-weight: dt('progressbar.label.font.weight');
    }

    .p-progressbar-determinate .p-progressbar-value {
        height: 100%;
        width: 0%;
        position: absolute;
        display: none;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        transition: width 1s ease-in-out;
    }

    .p-progressbar-determinate .p-progressbar-label {
        display: inline-flex;
    }

    .p-progressbar-indeterminate .p-progressbar-value::before {
        content: '';
        position: absolute;
        background: inherit;
        inset-block-start: 0;
        inset-inline-start: 0;
        inset-block-end: 0;
        will-change: inset-inline-start, inset-inline-end;
        animation: p-progressbar-indeterminate-anim 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    }

    .p-progressbar-indeterminate .p-progressbar-value::after {
        content: '';
        position: absolute;
        background: inherit;
        inset-block-start: 0;
        inset-inline-start: 0;
        inset-block-end: 0;
        will-change: inset-inline-start, inset-inline-end;
        animation: p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
        animation-delay: 1.15s;
    }

    @keyframes p-progressbar-indeterminate-anim {
        0% {
            inset-inline-start: -35%;
            inset-inline-end: 100%;
        }
        60% {
            inset-inline-start: 100%;
            inset-inline-end: -90%;
        }
        100% {
            inset-inline-start: 100%;
            inset-inline-end: -90%;
        }
    }
    @-webkit-keyframes p-progressbar-indeterminate-anim {
        0% {
            inset-inline-start: -35%;
            inset-inline-end: 100%;
        }
        60% {
            inset-inline-start: 100%;
            inset-inline-end: -90%;
        }
        100% {
            inset-inline-start: 100%;
            inset-inline-end: -90%;
        }
    }

    @keyframes p-progressbar-indeterminate-anim-short {
        0% {
            inset-inline-start: -200%;
            inset-inline-end: 100%;
        }
        60% {
            inset-inline-start: 107%;
            inset-inline-end: -8%;
        }
        100% {
            inset-inline-start: 107%;
            inset-inline-end: -8%;
        }
    }
    @-webkit-keyframes p-progressbar-indeterminate-anim-short {
        0% {
            inset-inline-start: -200%;
            inset-inline-end: 100%;
        }
        60% {
            inset-inline-start: 107%;
            inset-inline-end: -8%;
        }
        100% {
            inset-inline-start: 107%;
            inset-inline-end: -8%;
        }
    }
`;var fn=["content"],vn=n=>({$implicit:n});function hn(n,o){if(n&1&&(s(0,"div"),p(1),d()),n&2){let e=m(2);k("display",e.value!=null&&e.value!==0?"flex":"none"),g("data-pc-section","label"),c(),xe("",e.value,"",e.unit)}}function bn(n,o){n&1&&ve(0)}function yn(n,o){if(n&1&&(s(0,"div")(1,"div"),h(2,hn,2,5,"div",2)(3,bn,1,0,"ng-container",3),d()()),n&2){let e=m();l(e.cn(e.cx("value"),e.valueStyleClass)),k("width",e.value+"%")("display","flex")("background",e.color),g("data-pc-section","value"),c(),l(e.cx("label")),c(),r("ngIf",e.showValue&&!e.contentTemplate&&!e._contentTemplate),c(),r("ngTemplateOutlet",e.contentTemplate||e._contentTemplate)("ngTemplateOutletContext",E(14,vn,e.value))}}function _n(n,o){if(n&1&&y(0,"div"),n&2){let e=m();l(e.cn(e.cx("value"),e.valueStyleClass)),k("background",e.color),g("data-pc-section","value")}}var xn={root:({instance:n})=>["p-progressbar p-component",{"p-progressbar-determinate":n.mode=="determinate","p-progressbar-indeterminate":n.mode=="indeterminate"}],value:"p-progressbar-value",label:"p-progressbar-label"},Le=(()=>{class n extends j{name="progressbar";theme=Qe;classes=xn;static \u0275fac=(()=>{let e;return function(t){return(e||(e=v(n)))(t||n)}})();static \u0275prov=P({token:n,factory:n.\u0275fac})}return n})();var le=(()=>{class n extends w{value;showValue=!0;styleClass;valueStyleClass;unit="%";mode="determinate";color;contentTemplate;_componentStyle=f(Le);templates;_contentTemplate;ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break;default:this._contentTemplate=e.template}})}static \u0275fac=(()=>{let e;return function(t){return(e||(e=v(n)))(t||n)}})();static \u0275cmp=b({type:n,selectors:[["p-progressBar"],["p-progressbar"],["p-progress-bar"]],contentQueries:function(i,t,a){if(i&1&&($(a,fn,4),$(a,Se,4)),i&2){let u;Q(u=L())&&(t.contentTemplate=u.first),Q(u=L())&&(t.templates=u)}},hostVars:8,hostBindings:function(i,t){i&2&&(g("aria-valuemin",0)("aria-valuenow",t.value)("aria-valuemax",100)("data-pc-name","progressbar")("data-pc-section","root")("aria-level",t.value+t.unit),l(t.cn(t.cx("root"),t.styleClass)))},inputs:{value:[2,"value","value",De],showValue:[2,"showValue","showValue",Ae],styleClass:"styleClass",valueStyleClass:"valueStyleClass",unit:"unit",mode:"mode",color:"color"},features:[A([Le]),C],decls:2,vars:2,consts:[[3,"class","width","display","background",4,"ngIf"],[3,"class","background",4,"ngIf"],[3,"display",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(i,t){i&1&&h(0,yn,4,16,"div",0)(1,_n,1,5,"div",1),i&2&&(r("ngIf",t.mode==="determinate"),c(),r("ngIf",t.mode==="indeterminate"))},dependencies:[_,B,W,x],encapsulation:2,changeDetection:0})}return n})(),Re=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=H({type:n});static \u0275inj=I({imports:[le,x,x]})}return n})();var An=()=>["0"];function Dn(n,o){n&1&&y(0,"p-divider",25)}function wn(n,o){if(n&1){let e=he();K(0),s(1,"div",18)(2,"div",19),p(3),d(),s(4,"div",20)(5,"div",21),p(6),d(),s(7,"button",22),z("click",function(){let t=pe(e).$implicit,a=m();return ue(a.toggle(t))}),d()()(),y(8,"p-progressBar",23),h(9,Dn,1,0,"p-divider",24),V()}if(n&2){let e=o.$implicit,i=o.last,t=m();c(3),ye(e.name),c(3),_e(" ",t.formatTime(t.getRemainingSeconds(e))," "),c(),r("icon",e.running?"pi pi-pause":"pi pi-play"),c(),r("value",t.getProgress(e))("showValue",!1),c(),r("ngIf",!i)}}var Ue=class n{tasks=[{id:"listening",name:"Train listening",elapsedSeconds:0,goalSeconds:7200,status:"not_started",createdAt:new Date,updatedAt:new Date,running:!1,_timer:null},{id:"saas",name:"Code SaaS",elapsedSeconds:0,goalSeconds:14400,status:"not_started",createdAt:new Date,updatedAt:new Date,running:!1,_timer:null},{id:"jobs",name:"Apply to jobs",elapsedSeconds:0,goalSeconds:3600,status:"not_started",createdAt:new Date,updatedAt:new Date,running:!1,_timer:null}];title=q("my-life-level-up");toggle(o){o.running?this.pause(o):this.play(o)}play(o){o.running||((o.status==="not_started"||o.status==="paused")&&(o.status="in_progress"),o.updatedAt=new Date,o.running=!0,o._timer=setInterval(()=>{o.elapsedSeconds++,o.updatedAt=new Date,o.elapsedSeconds>=o.goalSeconds&&this.complete(o)},1e3))}pause(o){o.running=!1,o._timer&&(clearInterval(o._timer),o._timer=null),o.status==="in_progress"&&(o.status="paused"),o.updatedAt=new Date}complete(o){this.pause(o),o.status="completed",o.updatedAt=new Date}reset(o){o.running&&this.pause(o),o.elapsedSeconds=0,o.status="not_started",o.updatedAt=new Date}canPlay(o){return["not_started","paused"].includes(o.status)&&!o.running}canPause(o){return o.status==="in_progress"&&o.running}isCompleted(o){return o.status==="completed"}getRemainingSeconds(o){return Math.max(0,o.goalSeconds-o.elapsedSeconds)}getProgress(o){if(o.goalSeconds===0)return 0;let e=o.elapsedSeconds/o.goalSeconds*100;return Math.min(100,Math.max(0,Math.round(e)))}formatTime(o){let e=Math.floor(o/3600),i=Math.floor(o%3600/60),t=o%60,a=u=>String(u).padStart(2,"0");return`${a(e)}:${a(i)}:${a(t)}`}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=b({type:n,selectors:[["app-tasks"]],decls:42,vars:6,consts:[[1,"tasks-container","p-4"],[1,"text-3xl","font-bold","text-900","mb-4"],[1,"grid"],[1,"col-12","md:col-4"],[1,"surface-card","border-round-2xl","shadow-2","p-4"],[1,"text-900","text-3xl","font-semibold","mb-3"],[4,"ngFor","ngForOf"],[1,"col-12","md:col-1"],[1,"col-12","md:col-6"],[1,"text-center"],[3,"value"],["value","1"],[1,"flex","flex-column","align-items-center","text-center","gap-2"],[1,"text-900","text-lg","font-bold"],[1,"m-0","line-height-3","text-700"],["value","2",3,"disabled"],["value","3",3,"disabled"],["value","4",3,"disabled"],[1,"flex","align-items-center","justify-content-between","py-3"],[1,"text-900","text-xl","font-medium"],[1,"flex","align-items-center","gap-3"],[1,"text-900","text-xl","font-semibold","tabular-nums"],["pButton","","type","button",1,"p-button-rounded","p-button-lg",3,"click","icon"],[1,"w-full","border-round-xl","mb-3",3,"value","showValue"],["class","my-2",4,"ngIf"],[1,"my-2"]],template:function(e,i){e&1&&(s(0,"div",0)(1,"h1",1),p(2,"Tasks Management"),d(),s(3,"div",2)(4,"div",3)(5,"div",4)(6,"div",5),p(7,"Tasks"),d(),h(8,wn,10,6,"ng-container",6),d()(),y(9,"div",7),s(10,"div",8)(11,"h1",9),p(12,"\u{1F680} Semana 1"),d(),s(13,"p-accordion",10)(14,"p-accordion-panel",11)(15,"p-accordion-header"),p(16,"Ter\xE7a-Feira"),d(),s(17,"p-accordion-content")(18,"div",12)(19,"h6",13),p(20," \u2699\uFE0F 1- Projeto Front-end Atualizado "),d(),s(21,"p",14),p(22," \u{1F680} Front-end recriado utilizando a vers\xE3o mais recente do Angular e PrimeNG. Isso garante mais estabilidade, menos bugs e uma manuten\xE7\xE3o muito mais simples no futuro. "),d()(),s(23,"div",12)(24,"h6",13),p(25," \u23F1\uFE0F 2- L\xF3gica do Timer no Front-end "),d(),s(26,"p",14),p(27," \u{1F4A1} Sistema de timer din\xE2mico implementado diretamente no front-end. Ser\xE1 utilizado para gerenciar o meu pr\xF3prio tempo em atividades como: \u{1F3A7} Treinar Listening \u{1F4BB} Codar o SaaS \u{1F4EC} Aplicar para vagas e posso replicar para as tasks no futuro, em resumo a logica j\xE1 est\xE1 pronta "),d()(),s(28,"div",12)(29,"h6",13),p(30," \u{1F9E9} 3- Entidade de Timer no Back-end "),d(),s(31,"p",14),p(32," \u{1F5C4}\uFE0F Entidade dedicada ao Timer criada no back-end, permitindo salvar, consultar e acompanhar o progresso de cada atividade com precis\xE3o.plicar para vagas e posso replicar para as tasks no futuro, em resumo a logica j\xE1 est\xE1 pronta "),d()()()(),s(33,"p-accordion-panel",15)(34,"p-accordion-header"),p(35,"Quarta-feira"),d()(),s(36,"p-accordion-panel",16)(37,"p-accordion-header"),p(38,"Quinta-feira"),d()(),s(39,"p-accordion-panel",17)(40,"p-accordion-header"),p(41,"Sexta-feira"),d()()()()()()),e&2&&(c(8),r("ngForOf",i.tasks),c(5),r("value",Ce(5,An)),c(20),r("disabled",!0),c(3),r("disabled",!0),c(3),r("disabled",!0))},dependencies:[_,Ee,B,ke,He,Be,Re,le,$e,se,Ke,O,U,de,ce],encapsulation:2})};export{Ue as TasksComponent};

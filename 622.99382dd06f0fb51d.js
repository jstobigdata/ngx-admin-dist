"use strict";(self.webpackChunkngx_admin_demo=self.webpackChunkngx_admin_demo||[]).push([[622],{69622:(q,C,m)=>{m.r(C),m.d(C,{ModalOverlaysModule:()=>L});var s=m(24006),n=m(36685),P=m(87431),p=m(7672),e=m(94650);let v=(()=>{class t{static#e=this.\u0275fac=function(a){return new(a||t)};static#t=this.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["ngx-modal-overlays"]],decls:1,vars:0,template:function(a,r){1&a&&e.\u0275\u0275element(0,"router-outlet")},dependencies:[p.lC],encapsulation:2})}return t})(),u=(()=>{class t{constructor(o){this.ref=o}dismiss(){this.ref.close()}static#e=this.\u0275fac=function(a){return new(a||t)(e.\u0275\u0275directiveInject(n.X4l))};static#t=this.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["ngx-showcase-dialog"]],inputs:{title:"title"},decls:8,vars:1,consts:[["nbButton","","hero","","status","primary",3,"click"]],template:function(a,r){1&a&&(e.\u0275\u0275elementStart(0,"nb-card")(1,"nb-card-header"),e.\u0275\u0275text(2),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"nb-card-body"),e.\u0275\u0275text(4," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras convallis tincidunt tincidunt. Vestibulum vulputate maximus massa vel tristique. Suspendisse potenti. Duis aliquet purus sed dictum dictum. Donec fringilla, purus at fermentum imperdiet, velit enim malesuada turpis, quis luctus arcu arcu nec orci. Duis eu mattis felis. Quisque sollicitudin elementum nunc vel tincidunt. Vestibulum egestas mi nec iaculis varius. Morbi in risus sed sapien ultricies feugiat. Quisque pulvinar mattis purus, in aliquet massa aliquet et. "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(5,"nb-card-footer")(6,"button",0),e.\u0275\u0275listener("click",function(){return r.dismiss()}),e.\u0275\u0275text(7,"Dismiss Dialog"),e.\u0275\u0275elementEnd()()()),2&a&&(e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(r.title))},dependencies:[n.Asz,n.yKW,n.XWE,n.ndF,n.DPz],styles:["[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]{max-width:600px;max-height:500px}"]})}return t})(),b=(()=>{class t{constructor(o){this.ref=o}cancel(){this.ref.close()}submit(o){this.ref.close(o)}static#e=this.\u0275fac=function(a){return new(a||t)(e.\u0275\u0275directiveInject(n.X4l))};static#t=this.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["ngx-dialog-name-prompt"]],decls:11,vars:0,consts:[["nbInput","","placeholder","Name"],["name",""],["nbButton","","status","danger",1,"cancel",3,"click"],["nbButton","","status","success",3,"click"]],template:function(a,r){if(1&a){const l=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"nb-card")(1,"nb-card-header"),e.\u0275\u0275text(2,"Enter your name"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"nb-card-body"),e.\u0275\u0275element(4,"input",0,1),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(6,"nb-card-footer")(7,"button",2),e.\u0275\u0275listener("click",function(){return r.cancel()}),e.\u0275\u0275text(8,"Cancel"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(9,"button",3),e.\u0275\u0275listener("click",function(){e.\u0275\u0275restoreView(l);const c=e.\u0275\u0275reference(5);return e.\u0275\u0275resetView(r.submit(c.value))}),e.\u0275\u0275text(10,"Submit"),e.\u0275\u0275elementEnd()()()}},dependencies:[n.Asz,n.yKW,n.XWE,n.ndF,n.DPz,n.h8i],styles:["[_nghost-%COMP%]   input[_ngcontent-%COMP%]{width:100%}[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%]{margin-right:1rem}"]})}return t})();var x=m(36895);function M(t,d){if(1&t&&(e.\u0275\u0275elementStart(0,"li"),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),2&t){const o=d.$implicit;e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate(o)}}function O(t,d){if(1&t){const o=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"nb-card")(1,"nb-card-header"),e.\u0275\u0275text(2,"Template Dialog"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"nb-card-body"),e.\u0275\u0275text(4),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(5,"nb-card-footer")(6,"button",2),e.\u0275\u0275listener("click",function(){const l=e.\u0275\u0275restoreView(o).dialogRef;return e.\u0275\u0275resetView(l.close())}),e.\u0275\u0275text(7,"Close Dialog"),e.\u0275\u0275elementEnd()()()}if(2&t){const o=d.$implicit;e.\u0275\u0275advance(4),e.\u0275\u0275textInterpolate(o)}}let y=(()=>{class t{constructor(o){this.dialogService=o,this.names=[]}open(){this.dialogService.open(u,{context:{title:"This is a title passed to the dialog component"}})}open2(o){this.dialogService.open(o,{context:"this is some additional data passed to dialog"})}open3(){this.dialogService.open(b).onClose.subscribe(o=>o&&this.names.push(o))}openWithoutBackdrop(o){this.dialogService.open(o,{context:"this is some additional data passed to dialog",hasBackdrop:!1})}openWithoutBackdropClick(o){this.dialogService.open(o,{context:"this is some additional data passed to dialog",closeOnBackdropClick:!1})}openWithoutEscClose(o){this.dialogService.open(o,{context:"this is some additional data passed to dialog",closeOnEsc:!1})}static#e=this.\u0275fac=function(a){return new(a||t)(e.\u0275\u0275directiveInject(n.Gln))};static#t=this.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["ngx-dialog"]],decls:51,vars:1,consts:[[1,"row"],[1,"col-md-12","col-lg-6","col-xxxl-3"],["nbButton","",3,"click"],[1,"form-input-card"],[1,"result-from-dialog"],[1,"title"],[4,"ngFor","ngForOf"],["dialog",""]],template:function(a,r){if(1&a){const l=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"div",0)(1,"div",1)(2,"nb-card")(3,"nb-card-header"),e.\u0275\u0275text(4,"Open Dialog"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(5,"nb-card-body")(6,"button",2),e.\u0275\u0275listener("click",function(){return r.open()}),e.\u0275\u0275text(7,"Open Dialog with component"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(8,"button",2),e.\u0275\u0275listener("click",function(){e.\u0275\u0275restoreView(l);const c=e.\u0275\u0275reference(50);return e.\u0275\u0275resetView(r.open2(c))}),e.\u0275\u0275text(9,"Open Dialog with template"),e.\u0275\u0275elementEnd()()()(),e.\u0275\u0275elementStart(10,"div",1)(11,"nb-card")(12,"nb-card-header"),e.\u0275\u0275text(13,"Open Without Backdrop"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(14,"nb-card-body")(15,"button",2),e.\u0275\u0275listener("click",function(){return r.open()}),e.\u0275\u0275text(16,"Open Dialog with backdrop"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(17,"button",2),e.\u0275\u0275listener("click",function(){e.\u0275\u0275restoreView(l);const c=e.\u0275\u0275reference(50);return e.\u0275\u0275resetView(r.openWithoutBackdrop(c))}),e.\u0275\u0275text(18,"Open Dialog without backdrop"),e.\u0275\u0275elementEnd()()()(),e.\u0275\u0275elementStart(19,"div",1)(20,"nb-card")(21,"nb-card-header"),e.\u0275\u0275text(22,"Open Without Esc Close"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(23,"nb-card-body")(24,"button",2),e.\u0275\u0275listener("click",function(){return r.open()}),e.\u0275\u0275text(25,"Open Dialog with esc close"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(26,"button",2),e.\u0275\u0275listener("click",function(){e.\u0275\u0275restoreView(l);const c=e.\u0275\u0275reference(50);return e.\u0275\u0275resetView(r.openWithoutEscClose(c))}),e.\u0275\u0275text(27,"Open Dialog without esc close"),e.\u0275\u0275elementEnd()()()(),e.\u0275\u0275elementStart(28,"div",1)(29,"nb-card")(30,"nb-card-header"),e.\u0275\u0275text(31,"Open Without Backdrop Click"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(32,"nb-card-body")(33,"button",2),e.\u0275\u0275listener("click",function(){return r.open()}),e.\u0275\u0275text(34,"Open Dialog with backdrop click"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(35,"button",2),e.\u0275\u0275listener("click",function(){e.\u0275\u0275restoreView(l);const c=e.\u0275\u0275reference(50);return e.\u0275\u0275resetView(r.openWithoutBackdropClick(c))}),e.\u0275\u0275text(36,"Open without backdrop click"),e.\u0275\u0275elementEnd()()()(),e.\u0275\u0275elementStart(37,"div",1)(38,"nb-card",3)(39,"nb-card-header"),e.\u0275\u0275text(40,"Return Result From Dialog"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(41,"nb-card-body",4)(42,"button",2),e.\u0275\u0275listener("click",function(){return r.open3()}),e.\u0275\u0275text(43,"Enter Name"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(44,"br"),e.\u0275\u0275elementStart(45,"h3",5),e.\u0275\u0275text(46,"Names:"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(47,"ul"),e.\u0275\u0275template(48,M,2,1,"li",6),e.\u0275\u0275elementEnd()()()()(),e.\u0275\u0275template(49,O,8,1,"ng-template",null,7,e.\u0275\u0275templateRefExtractor)}2&a&&(e.\u0275\u0275advance(48),e.\u0275\u0275property("ngForOf",r.names))},dependencies:[x.sg,n.Asz,n.yKW,n.XWE,n.ndF,n.DPz],styles:["[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]{display:block}[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%;margin-bottom:2rem;display:block}[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-child{margin-bottom:0}[_nghost-%COMP%]   .result-from-dialog[_ngcontent-%COMP%]{flex-direction:column}[_nghost-%COMP%]   .form-input-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]{display:block}@media (max-width: 1199.98px){[_nghost-%COMP%]   button[_ngcontent-%COMP%]{padding:.8rem}}@media (max-width: 575.98px){[_nghost-%COMP%]   button[_ngcontent-%COMP%]{padding:.75rem}}"]})}return t})(),h=(()=>{class t{constructor(o){this.windowRef=o}close(){this.windowRef.close()}static#e=this.\u0275fac=function(a){return new(a||t)(e.\u0275\u0275directiveInject(n.MZ8))};static#t=this.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["ng-component"]],decls:7,vars:0,consts:[[1,"form"],["for","subject"],["nbInput","","id","subject","type","text"],["for","text",1,"text-label"],["nbInput","","id","text"]],template:function(a,r){1&a&&(e.\u0275\u0275elementStart(0,"form",0)(1,"label",1),e.\u0275\u0275text(2,"Subject:"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(3,"input",2),e.\u0275\u0275elementStart(4,"label",3),e.\u0275\u0275text(5,"Text:"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(6,"textarea",4),e.\u0275\u0275elementEnd())},dependencies:[s._Y,s.JL,s.F,n.h8i],styles:["[_nghost-%COMP%]     .form{display:flex;flex-direction:column}[_nghost-%COMP%]     .form .text-label{margin-top:1.5rem}"]})}return t})();const k=["contentTemplate"],W=["disabledEsc"];function D(t,d){if(1&t&&(e.\u0275\u0275elementStart(0,"p"),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),2&t){const o=d.$implicit;e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate1('Here is the text provided via config: "',o.text,'"')}}function B(t,d){1&t&&e.\u0275\u0275text(0," Disabled close on escape click.\n")}let T=(()=>{class t{constructor(o){this.windowService=o}openWindow(o){this.windowService.open(o,{title:"Window content from template",context:{text:"some text to pass into template"}})}openWindowForm(){this.windowService.open(h,{title:"Window"})}openWindowWithoutBackdrop(){this.windowService.open(this.disabledEscTemplate,{title:"Window without backdrop",hasBackdrop:!1,closeOnEsc:!1})}static#e=this.\u0275fac=function(a){return new(a||t)(e.\u0275\u0275directiveInject(n.eJ1))};static#t=this.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["ngx-window"]],viewQuery:function(a,r){if(1&a&&(e.\u0275\u0275viewQuery(k,7),e.\u0275\u0275viewQuery(W,7,e.TemplateRef)),2&a){let l;e.\u0275\u0275queryRefresh(l=e.\u0275\u0275loadQuery())&&(r.contentTemplate=l.first),e.\u0275\u0275queryRefresh(l=e.\u0275\u0275loadQuery())&&(r.disabledEscTemplate=l.first)}},decls:23,vars:0,consts:[[1,"row"],[1,"col-md-12","col-lg-12","col-xxxl-6"],["nbButton","",3,"click"],["contentTemplate",""],["disabledEsc",""]],template:function(a,r){if(1&a){const l=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"div",0)(1,"div",1)(2,"nb-card")(3,"nb-card-header"),e.\u0275\u0275text(4,"Window Form"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(5,"nb-card-body")(6,"button",2),e.\u0275\u0275listener("click",function(){return r.openWindowForm()}),e.\u0275\u0275text(7,"Open window form"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(8,"button",2),e.\u0275\u0275listener("click",function(){e.\u0275\u0275restoreView(l);const c=e.\u0275\u0275reference(20);return e.\u0275\u0275resetView(r.openWindow(c))}),e.\u0275\u0275text(9,"Open window with template"),e.\u0275\u0275elementEnd()()()(),e.\u0275\u0275elementStart(10,"div",1)(11,"nb-card")(12,"nb-card-header"),e.\u0275\u0275text(13,"Window Without Backdrop"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(14,"nb-card-body")(15,"button",2),e.\u0275\u0275listener("click",function(){e.\u0275\u0275restoreView(l);const c=e.\u0275\u0275reference(20);return e.\u0275\u0275resetView(r.openWindow(c))}),e.\u0275\u0275text(16,"Open window with backdrop"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(17,"button",2),e.\u0275\u0275listener("click",function(){return r.openWindowWithoutBackdrop()}),e.\u0275\u0275text(18,"Open window without backdrop"),e.\u0275\u0275elementEnd()()()()(),e.\u0275\u0275template(19,D,2,1,"ng-template",null,3,e.\u0275\u0275templateRefExtractor),e.\u0275\u0275template(21,B,1,0,"ng-template",null,4,e.\u0275\u0275templateRefExtractor)}},dependencies:[n.Asz,n.yKW,n.ndF,n.DPz],styles:["[_nghost-%COMP%]   button[_ngcontent-%COMP%] + button[_ngcontent-%COMP%]{margin-left:2rem}@media (max-width: 1599.98px){[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]{display:flex}[_nghost-%COMP%]   button[_ngcontent-%COMP%]{flex:1;padding:.8rem}}@media (max-width: 575.98px){[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]{display:block}[_nghost-%COMP%]   button[_ngcontent-%COMP%]{width:100%;display:block;margin-bottom:2rem;padding:.75rem}[_nghost-%COMP%]   button[_ngcontent-%COMP%] + button[_ngcontent-%COMP%]{margin-left:0}}"]})}return t})(),g=(()=>{class t{static#e=this.\u0275fac=function(a){return new(a||t)};static#t=this.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["ngx-popover-tabs"]],decls:7,vars:0,consts:[["tabTitle","What's up?"],[1,"p-4"],["tabTitle","Second Tab"]],template:function(a,r){1&a&&(e.\u0275\u0275elementStart(0,"nb-tabset")(1,"nb-tab",0)(2,"div",1),e.\u0275\u0275text(3," Such a wonderful day! "),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(4,"nb-tab",2)(5,"div",1),e.\u0275\u0275text(6," Indeed! "),e.\u0275\u0275elementEnd()()())},dependencies:[n.kyn,n.TR4],encapsulation:2})}return t})(),_=(()=>{class t{static#e=this.\u0275fac=function(a){return new(a||t)};static#t=this.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["ngx-popover-form"]],decls:10,vars:0,consts:[[1,"p-4"],[1,"form-group"],["type","text","placeholder","Recipients",1,"form-control"],["type","text","placeholder","Subject",1,"form-control"],["placeholder","Message",1,"form-control"],["type","submit",1,"btn","btn-primary","w-100"]],template:function(a,r){1&a&&(e.\u0275\u0275elementStart(0,"div",0)(1,"form")(2,"div",1),e.\u0275\u0275element(3,"input",2),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(4,"div",1),e.\u0275\u0275element(5,"input",3),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(6,"div",1),e.\u0275\u0275element(7,"textarea",4),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(8,"button",5),e.\u0275\u0275text(9,"Send"),e.\u0275\u0275elementEnd()()())},dependencies:[s._Y,s.JL,s.F],encapsulation:2})}return t})(),f=(()=>{class t{static#e=this.\u0275fac=function(a){return new(a||t)};static#t=this.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["ngx-popover-card"]],decls:5,vars:0,consts:[[1,"popover-card"],["status","warning"]],template:function(a,r){1&a&&(e.\u0275\u0275elementStart(0,"nb-card",0)(1,"nb-card-header",1),e.\u0275\u0275text(2," Hello! "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"nb-card-body"),e.\u0275\u0275text(4," Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. "),e.\u0275\u0275elementEnd()())},dependencies:[n.Asz,n.yKW,n.ndF],styles:["nb-card[_ngcontent-%COMP%]{margin:0;max-width:20rem}"]})}return t})();function F(t,d){1&t&&(e.\u0275\u0275elementStart(0,"nb-tabset")(1,"nb-tab",17)(2,"div",18),e.\u0275\u0275text(3," Such a wonderful day! "),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(4,"nb-tab",19)(5,"div",18),e.\u0275\u0275text(6," Indeed! "),e.\u0275\u0275elementEnd()()())}function I(t,d){1&t&&(e.\u0275\u0275elementStart(0,"div",18)(1,"form")(2,"div",20),e.\u0275\u0275element(3,"input",21),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(4,"div",20),e.\u0275\u0275element(5,"input",22),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(6,"div",20),e.\u0275\u0275element(7,"textarea",23),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(8,"button",24),e.\u0275\u0275text(9,"Send"),e.\u0275\u0275elementEnd()()())}function R(t,d){1&t&&(e.\u0275\u0275elementStart(0,"nb-card",25)(1,"nb-card-header",26),e.\u0275\u0275text(2," Hello! "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"nb-card-body"),e.\u0275\u0275text(4," Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. "),e.\u0275\u0275elementEnd()())}let S=(()=>{class t{constructor(){this.tabsComponent=g,this.cardComponent=f,this.formComponent=_}static#e=this.\u0275fac=function(a){return new(a||t)};static#t=this.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["ngx-popovers"]],decls:102,vars:6,consts:[[1,"row"],[1,"col-lg-6"],["size","small"],["nbButton","","status","danger","nbPopover","Hello, how are you today?","nbPopoverTrigger","hint","nbPopoverPlacement","left"],["nbButton","","status","danger","nbPopover","Hello, how are you today?","nbPopoverTrigger","hint","nbPopoverPlacement","top"],["nbButton","","status","danger","nbPopover","Hello, how are you today?","nbPopoverTrigger","hint","nbPopoverPlacement","bottom"],["nbButton","","status","danger","nbPopover","Hello, how are you today?","nbPopoverTrigger","hint","nbPopoverPlacement","right"],["nbButton","","status","success","nbPopover","Hello, how are you today?"],["nbButton","","status","success","nbPopover","Hello, how are you today?","nbPopoverTrigger","hover"],["nbButton","","status","success","nbPopover","Hello, how are you today?","nbPopoverTrigger","hint"],["tabs",""],["form",""],["card",""],["nbButton","","status","warning",3,"nbPopover"],[1,"col-md-12"],[1,"debounce-card"],["nbButton","","nbPopover","Popover!","nbPopoverTrigger","hint"],["tabTitle","What's up?"],[1,"p-4"],["tabTitle","Second Tab"],[1,"form-group"],["type","text","placeholder","Recipients",1,"form-control"],["type","text","placeholder","Subject",1,"form-control"],["placeholder","Message",1,"form-control"],["type","submit",1,"btn","btn-primary","w-100"],[1,"popover-card"],["status","warning"]],template:function(a,r){if(1&a&&(e.\u0275\u0275elementStart(0,"div",0)(1,"div",1)(2,"nb-card",2)(3,"nb-card-header"),e.\u0275\u0275text(4,"Popover Position"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(5,"nb-card-body")(6,"p"),e.\u0275\u0275text(7,"When popover has not enough space based on the configured placement, it will adjust accordingly trying to fit the screen."),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(8,"button",3),e.\u0275\u0275text(9,"Left"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(10,"button",4),e.\u0275\u0275text(11,"Top"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(12,"button",5),e.\u0275\u0275text(13,"Bottom"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(14,"button",6),e.\u0275\u0275text(15,"Right"),e.\u0275\u0275elementEnd()()()(),e.\u0275\u0275elementStart(16,"div",1)(17,"nb-card",2)(18,"nb-card-header"),e.\u0275\u0275text(19,"Simple Popovers"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(20,"nb-card-body")(21,"p"),e.\u0275\u0275text(22,"In a simples form popover can take a string of text to render."),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(23,"button",7),e.\u0275\u0275text(24,"on click"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(25,"button",8),e.\u0275\u0275text(26,"on hover"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(27,"button",9),e.\u0275\u0275text(28,"on hint"),e.\u0275\u0275elementEnd()()()()(),e.\u0275\u0275elementStart(29,"div",0)(30,"div",1),e.\u0275\u0275template(31,F,7,0,"ng-template",null,10,e.\u0275\u0275templateRefExtractor),e.\u0275\u0275template(33,I,10,0,"ng-template",null,11,e.\u0275\u0275templateRefExtractor),e.\u0275\u0275template(35,R,5,0,"ng-template",null,12,e.\u0275\u0275templateRefExtractor),e.\u0275\u0275elementStart(37,"nb-card",2)(38,"nb-card-header"),e.\u0275\u0275text(39,"Template Popovers"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(40,"nb-card-body")(41,"p"),e.\u0275\u0275text(42,"You can pass a refference to `ng-template` to be rendered."),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(43,"button",13),e.\u0275\u0275text(44,"With tabs"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(45,"button",13),e.\u0275\u0275text(46,"With form"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(47,"button",13),e.\u0275\u0275text(48,"With card"),e.\u0275\u0275elementEnd()()()(),e.\u0275\u0275elementStart(49,"div",1)(50,"nb-card",2)(51,"nb-card-header"),e.\u0275\u0275text(52,"Component Popovers"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(53,"nb-card-body")(54,"p"),e.\u0275\u0275text(55,"Same way popover can render any angular compnoent."),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(56,"button",13),e.\u0275\u0275text(57,"With tabs"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(58,"button",13),e.\u0275\u0275text(59,"With form"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(60,"button",13),e.\u0275\u0275text(61,"With card"),e.\u0275\u0275elementEnd()()()()(),e.\u0275\u0275elementStart(62,"div",0)(63,"div",14)(64,"nb-card")(65,"nb-card-header"),e.\u0275\u0275text(66,"Event Debouncing"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(67,"nb-card-body",15)(68,"p"),e.\u0275\u0275text(69,"Quickly move mouse cursor over the buttons, only the last popover will be created. It allows us to avoid excess white improving page performance."),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(70,"button",16),e.\u0275\u0275text(71," show hint "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(72,"button",16),e.\u0275\u0275text(73," show hint "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(74,"button",16),e.\u0275\u0275text(75," show hint "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(76,"button",16),e.\u0275\u0275text(77," show hint "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(78,"button",16),e.\u0275\u0275text(79," show hint "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(80,"button",16),e.\u0275\u0275text(81," show hint "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(82,"button",16),e.\u0275\u0275text(83," show hint "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(84,"button",16),e.\u0275\u0275text(85," show hint "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(86,"button",16),e.\u0275\u0275text(87," show hint "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(88,"button",16),e.\u0275\u0275text(89," show hint "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(90,"button",16),e.\u0275\u0275text(91," show hint "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(92,"button",16),e.\u0275\u0275text(93," show hint "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(94,"button",16),e.\u0275\u0275text(95," show hint "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(96,"button",16),e.\u0275\u0275text(97," show hint "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(98,"button",16),e.\u0275\u0275text(99," show hint "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(100,"button",16),e.\u0275\u0275text(101," show hint "),e.\u0275\u0275elementEnd()()()()()),2&a){const l=e.\u0275\u0275reference(32),i=e.\u0275\u0275reference(34),c=e.\u0275\u0275reference(36);e.\u0275\u0275advance(43),e.\u0275\u0275property("nbPopover",l),e.\u0275\u0275advance(2),e.\u0275\u0275property("nbPopover",i),e.\u0275\u0275advance(2),e.\u0275\u0275property("nbPopover",c),e.\u0275\u0275advance(9),e.\u0275\u0275property("nbPopover",r.tabsComponent),e.\u0275\u0275advance(2),e.\u0275\u0275property("nbPopover",r.formComponent),e.\u0275\u0275advance(2),e.\u0275\u0275property("nbPopover",r.cardComponent)}},dependencies:[s._Y,s.JL,s.F,n.Asz,n.yKW,n.ndF,n.kyn,n.TR4,n.ydg,n.DPz],styles:["nb-card-body[_ngcontent-%COMP%]{margin:0 -.5rem}nb-card-body[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], nb-card-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:.5rem .5rem 0}.popover-card[_ngcontent-%COMP%]{margin:0;max-width:20rem}"]})}return t})();function V(t,d){if(1&t&&(e.\u0275\u0275elementStart(0,"nb-option",13),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),2&t){const o=d.$implicit;e.\u0275\u0275property("value",o),e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate(o)}}function N(t,d){if(1&t&&(e.\u0275\u0275elementStart(0,"nb-option",13),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),2&t){const o=d.$implicit;e.\u0275\u0275property("value",o),e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate(o)}}let w=(()=>{class t{constructor(o){this.toastrService=o,this.index=1,this.destroyByClick=!0,this.duration=2e3,this.hasIcon=!0,this.position=n.fe3.TOP_RIGHT,this.preventDuplicates=!1,this.status="primary",this.title="HI there!",this.content="I'm cool toaster!",this.types=["primary","success","info","warning","danger"],this.positions=[n.fe3.TOP_RIGHT,n.fe3.TOP_LEFT,n.fe3.BOTTOM_LEFT,n.fe3.BOTTOM_RIGHT,n.d6C.TOP_END,n.d6C.TOP_START,n.d6C.BOTTOM_END,n.d6C.BOTTOM_START],this.quotes=[{title:null,body:"We rock at Angular"},{title:null,body:"Titles are not always needed"},{title:null,body:"Toastr rock!"}]}makeToast(){this.showToast(this.status,this.title,this.content)}openRandomToast(){const o=Math.floor(Math.random()*this.types.length),a=Math.floor(Math.random()*this.quotes.length),l=this.quotes[a];this.showToast(this.types[o],l.title,l.body)}showToast(o,a,r){const l={status:o,destroyByClick:this.destroyByClick,duration:this.duration,hasIcon:this.hasIcon,position:this.position,preventDuplicates:this.preventDuplicates},i=a?`. ${a}`:"";this.index+=1,this.toastrService.show(r,`Toast ${this.index}${i}`,l)}static#e=this.\u0275fac=function(a){return new(a||t)(e.\u0275\u0275directiveInject(n.quB))};static#t=this.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["ngx-toastr"]],decls:44,vars:10,consts:[[1,"row"],[1,"col-md-6","col-sm-12"],[1,"form-group"],[1,"label"],[1,"position-select",3,"selected","selectedChange"],[3,"value",4,"ngFor","ngForOf"],["nbInput","","name","title",3,"ngModel","ngModelChange"],["nbInput","","name","content",3,"ngModel","ngModelChange"],["nbInput","","type","number","name","timeout",3,"ngModel","ngModelChange"],[3,"selected","selectedChange"],[3,"ngModel","ngModelChange"],["nbButton","",3,"click"],["nbButton","","status","success",3,"click"],[3,"value"]],template:function(a,r){1&a&&(e.\u0275\u0275elementStart(0,"nb-card")(1,"nb-card-header"),e.\u0275\u0275text(2," Toaster configuration "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"nb-card-body")(4,"div",0)(5,"div",1)(6,"div",2)(7,"label",3),e.\u0275\u0275text(8,"Position:"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(9,"nb-select",4),e.\u0275\u0275listener("selectedChange",function(i){return r.position=i}),e.\u0275\u0275template(10,V,2,2,"nb-option",5),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(11,"div",2)(12,"label",3),e.\u0275\u0275text(13,"Title:"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(14,"input",6),e.\u0275\u0275listener("ngModelChange",function(i){return r.title=i}),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(15,"form")(16,"div",2)(17,"label",3),e.\u0275\u0275text(18,"Content:"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(19,"input",7),e.\u0275\u0275listener("ngModelChange",function(i){return r.content=i}),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(20,"div",2)(21,"label",3),e.\u0275\u0275text(22,"Time to hide toast, ms. 0 to persistent toast:"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(23,"input",8),e.\u0275\u0275listener("ngModelChange",function(i){return r.duration=i}),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(24,"div",1)(25,"div",2)(26,"label",3),e.\u0275\u0275text(27,"Toast type:"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(28,"nb-select",9),e.\u0275\u0275listener("selectedChange",function(i){return r.status=i}),e.\u0275\u0275template(29,N,2,2,"nb-option",5),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(30,"div")(31,"nb-checkbox",10),e.\u0275\u0275listener("ngModelChange",function(i){return r.destroyByClick=i}),e.\u0275\u0275text(32,"Hide on click"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(33,"div")(34,"nb-checkbox",10),e.\u0275\u0275listener("ngModelChange",function(i){return r.preventDuplicates=i}),e.\u0275\u0275text(35,"Prevent arising of duplicate toast"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(36,"div")(37,"nb-checkbox",10),e.\u0275\u0275listener("ngModelChange",function(i){return r.hasIcon=i}),e.\u0275\u0275text(38,"Show toast with icon"),e.\u0275\u0275elementEnd()()()()(),e.\u0275\u0275elementStart(39,"nb-card-footer")(40,"button",11),e.\u0275\u0275listener("click",function(){return r.makeToast()}),e.\u0275\u0275text(41,"Show toast"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(42,"button",12),e.\u0275\u0275listener("click",function(){return r.openRandomToast()}),e.\u0275\u0275text(43,"Random toast"),e.\u0275\u0275elementEnd()()()),2&a&&(e.\u0275\u0275advance(9),e.\u0275\u0275property("selected",r.position),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngForOf",r.positions),e.\u0275\u0275advance(4),e.\u0275\u0275property("ngModel",r.title),e.\u0275\u0275advance(5),e.\u0275\u0275property("ngModel",r.content),e.\u0275\u0275advance(4),e.\u0275\u0275property("ngModel",r.duration),e.\u0275\u0275advance(5),e.\u0275\u0275property("selected",r.status),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngForOf",r.types),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngModel",r.destroyByClick),e.\u0275\u0275advance(3),e.\u0275\u0275property("ngModel",r.preventDuplicates),e.\u0275\u0275advance(3),e.\u0275\u0275property("ngModel",r.hasIcon))},dependencies:[s._Y,s.Fj,s.wV,s.JJ,s.JL,s.On,s.F,x.sg,n.Asz,n.yKW,n.XWE,n.ndF,n.NTf,n.DPz,n.h8i,n.rs,n.q51],styles:["[_nghost-%COMP%]   .position-select[_ngcontent-%COMP%]{min-width:13rem}[_nghost-%COMP%]   .label[_ngcontent-%COMP%]{display:block}[dir=ltr]   [_nghost-%COMP%]   nb-card-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:first-child{margin-right:1rem}[dir=rtl]   [_nghost-%COMP%]   nb-card-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:first-child{margin-left:1rem}"]})}return t})();const j=[{path:"",component:v,children:[{path:"dialog",component:y},{path:"window",component:T},{path:"popover",component:S},{path:"tooltip",component:(()=>{class t{static#e=this.\u0275fac=function(a){return new(a||t)};static#t=this.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["ngx-tooltip"]],decls:40,vars:0,consts:[[1,"row"],[1,"col-md-12","col-lg-6","col-xxxl-4"],["nbTooltip","This is a tooltip","nbTooltipIcon","home-outline","nbButton",""],["nbTooltip","","nbTooltipIcon","alert-triangle","nbTooltipStatus","danger","nbButton",""],["nbTooltip","This is a tooltip","nbTooltipPlacement","top","nbButton",""],["nbTooltip","This is a tooltip","nbTooltipPlacement","right","nbButton",""],["nbTooltip","This is a tooltip","nbTooltipPlacement","bottom","nbButton",""],["nbTooltip","This is a tooltip","nbTooltipPlacement","left","nbButton",""],["nbTooltip","This is a tooltip","nbTooltipPlacement","top","nbTooltipStatus","primary","nbButton",""],["nbTooltip","This is a tooltip","nbTooltipPlacement","top","nbTooltipStatus","success","nbButton",""],["nbTooltip","This is a tooltip","nbTooltipPlacement","top","nbTooltipStatus","danger","nbButton",""],["nbTooltip","This is a tooltip","nbTooltipPlacement","top","nbTooltipStatus","info","nbButton",""],["nbTooltip","This is a tooltip","nbTooltipPlacement","top","nbTooltipStatus","warning","nbButton",""]],template:function(a,r){1&a&&(e.\u0275\u0275elementStart(0,"div",0)(1,"div",1)(2,"nb-card")(3,"nb-card-header"),e.\u0275\u0275text(4,"Tooltip With Icon"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(5,"nb-card-body")(6,"button",2),e.\u0275\u0275text(7,"Show Tooltip"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(8,"button",3),e.\u0275\u0275text(9,"Show Tooltip"),e.\u0275\u0275elementEnd()()()(),e.\u0275\u0275elementStart(10,"div",1)(11,"nb-card")(12,"nb-card-header"),e.\u0275\u0275text(13,"Tooltip Placements"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(14,"nb-card-body")(15,"button",4),e.\u0275\u0275text(16,"Top"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(17,"button",5),e.\u0275\u0275text(18,"Right"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(19,"button",6),e.\u0275\u0275text(20,"Bottom"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(21,"button",7),e.\u0275\u0275text(22,"Left"),e.\u0275\u0275elementEnd()()()(),e.\u0275\u0275elementStart(23,"div",1)(24,"nb-card")(25,"nb-card-header"),e.\u0275\u0275text(26,"Colored Tooltips"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(27,"nb-card-body")(28,"button",4),e.\u0275\u0275text(29,"Default"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(30,"button",8),e.\u0275\u0275text(31,"Primary"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(32,"button",9),e.\u0275\u0275text(33,"Success"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(34,"button",10),e.\u0275\u0275text(35,"Danger"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(36,"button",11),e.\u0275\u0275text(37,"Info"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(38,"button",12),e.\u0275\u0275text(39,"Warning"),e.\u0275\u0275elementEnd()()()()())},dependencies:[n.Asz,n.yKW,n.ndF,n.DPz,n.jNv],styles:["[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]{margin:-.5rem}[_nghost-%COMP%]   button[_ngcontent-%COMP%]{margin:.5rem}"]})}return t})()},{path:"toastr",component:w}]}],H=[s.u5,P.O,(()=>{class t{static#e=this.\u0275fac=function(a){return new(a||t)};static#t=this.\u0275mod=e.\u0275\u0275defineNgModule({type:t});static#n=this.\u0275inj=e.\u0275\u0275defineInjector({imports:[p.Bz.forChild(j),p.Bz]})}return t})(),n.j7H.forChild(),n.wXm.forChild(),n.zyh,n.MfT,n.EoG,n.spT,n.T2N,n.nKr,n.IIj,n.rgH],A=[];let L=(()=>{class t{static#e=this.\u0275fac=function(a){return new(a||t)};static#t=this.\u0275mod=e.\u0275\u0275defineNgModule({type:t});static#n=this.\u0275inj=e.\u0275\u0275defineInjector({providers:[...A],imports:[H]})}return t})()}}]);
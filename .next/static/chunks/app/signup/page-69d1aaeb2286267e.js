(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[879],{6168:(e,r,t)=>{Promise.resolve().then(t.bind(t,2465))},2465:(e,r,t)=>{"use strict";t.d(r,{SignupForm:()=>f});var s=t(5155),a=t(2115),n=t(6046),d=t(9602),l=t(4085);let i=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,s.jsx)("div",{ref:r,className:(0,d.cn)("rounded-xl border bg-card text-card-foreground shadow",t),...a})});i.displayName="Card",a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,s.jsx)("div",{ref:r,className:(0,d.cn)("flex flex-col space-y-1.5 p-6",t),...a})}).displayName="CardHeader",a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,s.jsx)("div",{ref:r,className:(0,d.cn)("font-semibold leading-none tracking-tight",t),...a})}).displayName="CardTitle",a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,s.jsx)("div",{ref:r,className:(0,d.cn)("text-sm text-muted-foreground",t),...a})}).displayName="CardDescription";let o=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,s.jsx)("div",{ref:r,className:(0,d.cn)("p-6 pt-0",t),...a})});o.displayName="CardContent",a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,s.jsx)("div",{ref:r,className:(0,d.cn)("flex items-center p-6 pt-0",t),...a})}).displayName="CardFooter";var c=t(2336),u=t(5785);function f(e){let{className:r,...t}=e,[f,m]=(0,a.useState)(""),[x,p]=(0,a.useState)(""),g=(0,n.useRouter)();return(0,s.jsxs)("div",{className:(0,d.cn)("flex flex-col gap-6",r),...t,children:[(0,s.jsx)(i,{className:"overflow-hidden",children:(0,s.jsxs)(o,{className:"grid p-0 md:grid-cols-2",children:[(0,s.jsx)("form",{className:"p-6 md:p-8",onSubmit:e=>{e.preventDefault(),sessionStorage.setItem("signupData",JSON.stringify({email:f,password:x})),g.push("/onboarding")},children:(0,s.jsxs)("div",{className:"flex flex-col gap-6",children:[(0,s.jsxs)("div",{className:"flex flex-col items-center text-center",children:[(0,s.jsx)("h1",{className:"text-2xl font-bold",children:"Connection Hub"}),(0,s.jsx)("p",{className:"text-balance text-muted-foreground",children:"Events made easy"})]}),(0,s.jsxs)("div",{className:"grid gap-2",children:[(0,s.jsx)(u.Label,{htmlFor:"email",children:"Email"}),(0,s.jsx)(c.p,{id:"email",type:"email",placeholder:"m@example.com",required:!0,value:f,onChange:e=>m(e.target.value)})]}),(0,s.jsxs)("div",{className:"grid gap-2",children:[(0,s.jsx)(u.Label,{htmlFor:"password",children:"Password"}),(0,s.jsx)(c.p,{id:"password",type:"password",required:!0,value:x,onChange:e=>p(e.target.value)})]}),(0,s.jsx)(l.$,{type:"submit",className:"w-full",children:"Sign up"}),(0,s.jsxs)("div",{className:"text-center text-sm",children:["Already have an account?"," ",(0,s.jsx)("a",{href:"/login",className:"underline underline-offset-4",children:"Login"})]})]})}),(0,s.jsx)("div",{className:"relative hidden bg-muted md:block",children:(0,s.jsx)("img",{src:"/logo/vert.svg",alt:"Image",className:"absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"})})]})}),(0,s.jsxs)("div",{className:"text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary",children:["Not sure who we are? Learn about our ",(0,s.jsx)("a",{href:"/about-us",children:"Product and the Team"})," and how we handle your data."]})]})}},4085:(e,r,t)=>{"use strict";t.d(r,{$:()=>o});var s=t(5155),a=t(2115),n=t(2317),d=t(1027),l=t(9602);let i=(0,d.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),o=a.forwardRef((e,r)=>{let{className:t,variant:a,size:d,asChild:o=!1,...c}=e,u=o?n.DX:"button";return(0,s.jsx)(u,{className:(0,l.cn)(i({variant:a,size:d,className:t})),ref:r,...c})});o.displayName="Button"},2336:(e,r,t)=>{"use strict";t.d(r,{p:()=>d});var s=t(5155),a=t(2115),n=t(9602);let d=a.forwardRef((e,r)=>{let{className:t,type:a,...d}=e;return(0,s.jsx)("input",{type:a,className:(0,n.cn)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",t),ref:r,...d})});d.displayName="Input"},5785:(e,r,t)=>{"use strict";t.d(r,{Label:()=>o});var s=t(5155),a=t(2115),n=t(6195),d=t(1027),l=t(9602);let i=(0,d.F)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),o=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,s.jsx)(n.b,{ref:r,className:(0,l.cn)(i(),t),...a})});o.displayName=n.b.displayName},9602:(e,r,t)=>{"use strict";t.d(r,{cn:()=>n});var s=t(3463),a=t(9795);function n(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return(0,a.QP)((0,s.$)(r))}},6046:(e,r,t)=>{"use strict";var s=t(6658);t.o(s,"useRouter")&&t.d(r,{useRouter:function(){return s.useRouter}})}},e=>{var r=r=>e(e.s=r);e.O(0,[287,441,517,358],()=>r(6168)),_N_E=e.O()}]);
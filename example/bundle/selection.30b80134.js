function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequire4485;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequire4485=r);var i,l,a=r("hGT0Q"),d={};i=d,l=function(){var e=function(){function t(e){return r.appendChild(e.dom),e}function n(e){for(var t=0;t<r.children.length;t++)r.children[t].style.display=t===e?"block":"none";o=e}var o=0,r=document.createElement("div");r.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",r.addEventListener("click",(function(e){e.preventDefault(),n(++o%r.children.length)}),!1);var i=(performance||Date).now(),l=i,a=0,d=t(new e.Panel("FPS","#0ff","#002")),s=t(new e.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var c=t(new e.Panel("MB","#f08","#201"));return n(0),{REVISION:16,dom:r,addPanel:t,showPanel:n,begin:function(){i=(performance||Date).now()},end:function(){a++;var e=(performance||Date).now();if(s.update(e-i,200),e>l+1e3&&(d.update(1e3*a/(e-l),100),l=e,a=0,c)){var t=performance.memory;c.update(t.usedJSHeapSize/1048576,t.jsHeapSizeLimit/1048576)}return e},update:function(){i=this.end()},domElement:r,setMode:n}};return e.Panel=function(e,t,n){var o=1/0,r=0,i=Math.round,l=i(window.devicePixelRatio||1),a=80*l,d=48*l,s=3*l,c=2*l,u=3*l,f=15*l,p=74*l,h=30*l,y=document.createElement("canvas");y.width=a,y.height=d,y.style.cssText="width:80px;height:48px";var w=y.getContext("2d");return w.font="bold "+9*l+"px Helvetica,Arial,sans-serif",w.textBaseline="top",w.fillStyle=n,w.fillRect(0,0,a,d),w.fillStyle=t,w.fillText(e,s,c),w.fillRect(u,f,p,h),w.fillStyle=n,w.globalAlpha=.9,w.fillRect(u,f,p,h),{dom:y,update:function(d,m){o=Math.min(o,d),r=Math.max(r,d),w.fillStyle=n,w.globalAlpha=1,w.fillRect(0,0,a,f),w.fillStyle=t,w.fillText(i(d)+" "+e+" ("+i(o)+"-"+i(r)+")",s,c),w.drawImage(y,u+l,f,p-l,h,u,f,p-l,h),w.fillRect(u+p-l,f,l,h),w.fillStyle=n,w.globalAlpha=.9,w.fillRect(u+p-l,f,l,i((1-d/m)*h))}}},e},"object"==typeof d?d=l():"function"==typeof define&&define.amd?define(l):i.Stats=l();var s=r("ghLil"),c=r("W2bOH"),u=r("aBPXg");const f={toolMode:"lasso",selectionMode:"intersection",liveUpdate:!1,selectModel:!1,wireframe:!1,useBoundsTree:!0,displayHelper:!1,helperDepth:10,rotate:!0};let p,h,y,w,m,g,x,M,b,v,E,T,S;const R=[];let B=!1,O=!1,A=!1;!function(){T=document.getElementById("output");const t=new a.Color(2503224);p=new a.WebGLRenderer({antialias:!0}),p.setPixelRatio(window.devicePixelRatio),p.setSize(window.innerWidth,window.innerHeight),p.setClearColor(t,1),p.shadowMap.enabled=!0,p.outputEncoding=a.sRGBEncoding,document.body.appendChild(p.domElement),y=new a.Scene;const n=new a.DirectionalLight(16777215,1);n.castShadow=!0,n.shadow.mapSize.set(2048,2048),n.position.set(10,10,10),y.add(n),y.add(new a.AmbientLight(11583173,.8)),h=new a.PerspectiveCamera(75,window.innerWidth/window.innerHeight,.1,50),h.position.set(2,4,6),h.far=100,h.updateProjectionMatrix(),y.add(h),x=new a.Line,x.material.color.set(16750592).convertSRGBToLinear(),x.renderOrder=1,x.position.z=-.2,x.depthTest=!1,x.scale.setScalar(1),h.add(x),S=new a.Group,y.add(S),M=new a.Mesh(new a.TorusKnotBufferGeometry(1.5,.5,500,60).toNonIndexed(),new a.MeshStandardMaterial({polygonOffset:!0,polygonOffsetFactor:1})),M.geometry.boundsTree=new u.MeshBVH(M.geometry),M.geometry.setAttribute("color",new a.Uint8BufferAttribute(new Array(3*M.geometry.index.count).fill(255),3,!0)),M.castShadow=!0,M.receiveShadow=!0,S.add(M),b=new u.MeshBVHVisualizer(M,10),S.add(b),v=new a.Mesh,v.geometry=M.geometry.clone(),v.geometry.drawRange.count=0,v.material=new a.MeshBasicMaterial({opacity:.05,transparent:!0,depthWrite:!1}),v.material.color.set(16750592).convertSRGBToLinear(),v.renderOrder=1,S.add(v),E=new a.Mesh,E.geometry=v.geometry,E.material=new a.MeshBasicMaterial({opacity:.25,transparent:!0,wireframe:!0,depthWrite:!1}),E.material.color.copy(v.material.color),E.renderOrder=2,S.add(E);const o=new a.GridHelper(10,10,16777215,16777215);o.material.opacity=.2,o.material.transparent=!0,o.position.y=-2.75,y.add(o);const r=new a.Mesh(new a.PlaneBufferGeometry,new a.ShadowMaterial({color:0,opacity:.2,depthWrite:!1}));r.position.y=-2.74,r.rotation.x=-Math.PI/2,r.scale.setScalar(20),r.renderOrder=2,r.receiveShadow=!0,y.add(r),m=new(e(d)),document.body.appendChild(m.dom),g=new c.OrbitControls(h,p.domElement),g.minDistance=3,g.touches.ONE=a.TOUCH.PAN,g.mouseButtons.LEFT=a.MOUSE.PAN,g.touches.TWO=a.TOUCH.ROTATE,g.mouseButtons.RIGHT=a.MOUSE.ROTATE,g.enablePan=!1,w=new s.GUI;const i=w.addFolder("selection");i.add(f,"toolMode",["lasso","box"]),i.add(f,"selectionMode",["centroid","centroid-visible","intersection"]),i.add(f,"selectModel"),i.add(f,"liveUpdate"),i.add(f,"useBoundsTree"),i.open();const l=w.addFolder("display");l.add(f,"wireframe"),l.add(f,"rotate"),l.add(f,"displayHelper"),l.add(f,"helperDepth",1,30,1).onChange((e=>{b.depth=e,b.update()})),l.open(),w.open();let C=-1/0,D=-1/0,H=-1/0,P=-1/0;const N=new a.Vector2,L=new a.Vector2,I=new a.Vector2;p.domElement.addEventListener("pointerdown",(e=>{H=e.clientX,P=e.clientY,C=e.clientX/window.innerWidth*2-1,D=-(e.clientY/window.innerHeight*2-1),R.length=0,B=!0})),p.domElement.addEventListener("pointerup",(()=>{x.visible=!1,B=!1,R.length&&(A=!0)})),p.domElement.addEventListener("pointermove",(e=>{if(0==(1&e.buttons))return;const t=e.clientX,n=e.clientY,o=e.clientX/window.innerWidth*2-1,r=-(e.clientY/window.innerHeight*2-1);if("box"===f.toolMode)R.length=15,R[0]=C,R[1]=D,R[2]=0,R[3]=o,R[4]=D,R[5]=0,R[6]=o,R[7]=r,R[8]=0,R[9]=C,R[10]=r,R[11]=0,R[12]=C,R[13]=D,R[14]=0,t===H&&n===P||(O=!0),H=t,P=n,x.visible=!0,f.liveUpdate&&(A=!0);else if(Math.abs(t-H)>=3||Math.abs(n-P)>=3){const e=3*(R.length/3-1);let i=!1;if(R.length>3){N.set(R[e-3],R[e-3+1]),L.set(R[e],R[e+1]),L.sub(N).normalize(),N.set(R[e],R[e+1]),I.set(o,r),I.sub(N).normalize();i=L.dot(I)>.99}i?(R[e]=o,R[e+1]=r):R.push(o,r,0),O=!0,x.visible=!0,H=t,P=n,f.liveUpdate&&(A=!0)}})),window.addEventListener("resize",(function(){h.aspect=window.innerWidth/window.innerHeight,h.updateProjectionMatrix(),p.setSize(window.innerWidth,window.innerHeight)}),!1)}(),function e(){if(m.update(),requestAnimationFrame(e),M.material.wireframe=f.wireframe,b.visible=f.displayHelper,O){if("lasso"===f.toolMode){const e=R.length;R.push(R[0],R[1],R[2]),x.geometry.setAttribute("position",new a.Float32BufferAttribute(R,3,!1)),R.length=e}else x.geometry.setAttribute("position",new a.Float32BufferAttribute(R,3,!1));x.frustumCulled=!1,O=!1}A&&(A=!1,R.length>0&&function(){I.copy(M.matrixWorld).premultiply(h.matrixWorldInverse).premultiply(h.projectionMatrix);for(;z.length<R.length;)z.push(new a.Line3);z.length=R.length;for(let e=0,t=R.length;e<t;e+=3){const n=z[e],o=(e+3)%t;n.start.x=R[e],n.start.y=R[e+1],n.end.x=R[o],n.end.y=R[o+1]}C.copy(M.matrixWorld).invert(),D.set(0,0,0).applyMatrix4(h.matrixWorld).applyMatrix4(C);const e=window.performance.now(),t=[];M.geometry.boundsTree.shapecast({intersectsBounds:(e,t,n,o)=>{if(!f.useBoundsTree)return u.INTERSECTED;const{min:r,max:i}=e;let l=0,a=1/0,d=-1/0,s=1/0;for(let e=0;e<=1;e++)for(let t=0;t<=1;t++)for(let n=0;n<=1;n++){const o=U[l];o.x=0===e?r.x:i.x,o.y=0===t?r.y:i.y,o.z=0===n?r.z:i.z,o.w=1,o.applyMatrix4(I),l++,o.y<a&&(a=o.y),o.y>d&&(d=o.y),o.x<s&&(s=o.x)}const c=V[o-1]||z,p=V[o]||[];p.length=0,V[o]=p;for(let e=0,t=c.length;e<t;e++){const t=c[e],n=t.start.x,o=t.start.y,r=t.end.x,i=t.end.y;if(n<s&&r<s)continue;const l=i>d;if(o>d&&l)continue;const u=i<a;o<a&&u||p.push(t)}if(0===p.length)return u.NOT_INTERSECTED;const h=function(e){function t(e,t,n){const o=(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y);return 0==o?0:o>0?1:2}function n(e,t){return(e.x-t.x)*(e.x-t.x)+(e.y-t.y)*(e.y-t.y)}function o(e,o){const r=t(l,e,o);return 0==r?n(l,o)>=n(l,e)?-1:1:2==r?-1:1}let r=1/0,i=-1;for(let t=0,n=e.length;t<n;t++){const n=e[t];n.y<r&&(i=t,r=n.y)}const l=e[i];e[i]=e[0],e[0]=l,e=e.sort(o);let a=1;const d=e.length;for(let n=1;n<d;n++){for(;n<d-1&&0==t(l,e[n],e[n+1]);)n++;e[a]=e[n],a++}if(a<3)return null;const s=[e[0],e[1],e[2]];for(let n=3;n<a;n++){for(;2!==t(s[s.length-2],s[s.length-1],e[n]);)s.pop();s.push(e[n])}return s}(U),y=h.map(((e,t)=>{const n=h[(t+1)%h.length],o=W[t];return o.start.copy(e),o.end.copy(n),o}));if(F(p[0].start,y)%2==1)return u.INTERSECTED;let w=0;for(let e=0,t=h.length;e<t;e++){const t=F(h[e],p);if(0===e&&(w=t),w!==t)return u.INTERSECTED}for(let e=0,t=y.length;e<t;e++){const t=y[e];for(let e=0,n=p.length;e<n;e++)if(X(t,p[e]))return u.INTERSECTED}return w%2==0?u.NOT_INTERSECTED:u.CONTAINED},intersectsTriangle:(e,n,o,r)=>{const i=3*n,l=i+0,d=i+1,s=i+2,c=f.useBoundsTree?V[r]:z;if("centroid"===f.selectionMode||"centroid-visible"===f.selectionMode){if(P.copy(e.a).add(e.b).add(e.c).multiplyScalar(1/3),N.copy(P).applyMatrix4(I),o||F(N,c)%2==1){if("centroid-visible"===f.selectionMode){e.getNormal(L),H.origin.copy(P).addScaledVector(L,1e-6),H.direction.subVectors(D,P);if(M.geometry.boundsTree.raycastFirst(H,a.DoubleSide))return!1}return t.push(l,d,s),f.selectModel}}else if("intersection"===f.selectionMode){if(o)return t.push(l,d,s),f.selectModel;const n=[e.a,e.b,e.c];for(let e=0;e<3;e++){const o=n[e];o.applyMatrix4(I);if(F(o,c)%2==1)return t.push(l,d,s),f.selectModel}const r=[W[0],W[1],W[2]];r[0].start.copy(e.a),r[0].end.copy(e.b),r[1].start.copy(e.b),r[1].end.copy(e.c),r[2].start.copy(e.c),r[2].end.copy(e.a);for(let e=0;e<3;e++){const n=r[e];for(let e=0,o=c.length;e<o;e++)if(X(n,c[e]))return t.push(l,d,s),f.selectModel}}return!1}});const n=window.performance.now()-e;T.innerText=`${n.toFixed(3)}ms`;const o=M.geometry.index,r=v.geometry.index;if(t.length&&f.selectModel){for(let e=0,t=o.count;e<t;e++){const t=o.getX(e);r.setX(e,t)}v.geometry.drawRange.count=1/0,r.needsUpdate=!0}else{for(let e=0,n=t.length;e<n;e++){const n=o.getX(t[e]);r.setX(e,n)}v.geometry.drawRange.count=t.length,r.needsUpdate=!0}}());const t=Math.tan(a.MathUtils.DEG2RAD*h.fov/2)*x.position.z;x.scale.set(-t*h.aspect,-t,1),p.render(y,h),f.rotate&&(S.rotation.y+=.01,f.liveUpdate&&B&&(A=!0))}();const C=new a.Matrix4,D=new a.Vector3,H=new a.Ray,P=new a.Vector3,N=new a.Vector3,L=new a.Vector3,I=new a.Matrix4,U=new Array(8).fill().map((()=>new a.Vector3)),W=new Array(12).fill().map((()=>new a.Line3)),z=[],V=[];function G(e,t,n,o){const{start:r,end:i}=t,l=e.x,a=e.y,d=r.y,s=i.y;if(d===s)return!1;if(a>d&&a>s)return!1;if(a<d&&a<s)return!1;const c=r.x,u=i.x;if(l>c&&l>u)return!1;if(l<c&&l<u)return a!==d||n===o;const f=s-d,p=f*(l-c)+-(u-c)*(a-d);return Math.sign(p)!==Math.sign(f)}function F(e,t){let n=0;const o=t[t.length-1];let r=o.start.y>o.end.y;for(let o=0,i=t.length;o<i;o++){const i=t[o],l=i.start.y>i.end.y;G(e,i,r,l)&&n++,r=l}return n}function X(e,t){function n(e,t,n){return(n.y-e.y)*(t.x-e.x)>(t.y-e.y)*(n.x-e.x)}const o=e.start,r=e.end,i=t.start,l=t.end;return n(o,i,l)!==n(r,i,l)&&n(o,r,i)!==n(o,r,l)}
//# sourceMappingURL=selection.30b80134.js.map

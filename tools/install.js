<script>(function(){
if (window.matchMedia && matchMedia('(display-mode: standalone)').matches) return;
function show(){
  if (!window.__vpDP || !document.body || document.getElementById('vp-inst')) return;
  var b=document.createElement('button'); b.id='vp-inst'; b.type='button'; b.textContent='⬇ Instalar app';
  b.style.cssText='position:fixed;left:50%;bottom:calc(18px + env(safe-area-inset-bottom,0px));transform:translateX(-50%);z-index:99999;padding:13px 24px;border:none;border-radius:26px;background:#5C2D0E;color:#fff;font:600 15px system-ui,sans-serif;box-shadow:0 6px 18px rgba(0,0,0,.28);cursor:pointer';
  b.onclick=function(){ var p=window.__vpDP; if(!p) return; p.prompt(); p.userChoice.then(function(){ window.__vpDP=null; b.remove(); }); };
  document.body.appendChild(b);
}
window.addEventListener('beforeinstallprompt', function(e){ e.preventDefault(); window.__vpDP=e; show(); });
window.addEventListener('appinstalled', function(){ window.__vpDP=null; var b=document.getElementById('vp-inst'); if(b) b.remove(); });
if (document.readyState==='loading') document.addEventListener('DOMContentLoaded', show); else show();
})();</script>

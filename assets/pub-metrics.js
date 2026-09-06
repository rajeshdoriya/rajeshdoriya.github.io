(()=>{
const journalMeta={
 'IEEE Transactions on Green Communications and Networking':{index:'SCIE',if:'6.7'},
 'Optics Communications':{index:'SCIE',if:'2.5'},
 'Cluster Computing':{index:'SCIE',if:'5.5'},
 'Proceedings of the Institution of Mechanical Engineers, Part D':{index:'SCIE',if:'1.5'},
 'SN Computer Science':{index:'Scopus'},
 'Multimedia Tools and Applications':{index:'SCIE',if:'3.0'},
 'Transactions of the Institute of Measurement and Control':{index:'SCIE',if:'1.8'},
 'IEEE Sensors Journal':{index:'SCIE',if:'4.5'},
 'Peer-to-Peer Networking and Applications':{index:'SCIE',if:'2.6'},
 'Journal of High Speed Networks':{index:'Scopus',if:'1.0'},
 'International Journal of Information Technology':{index:'Scopus'},
 'Journal of Uncertain Systems':{index:'Scopus'},
 'International Journal of Computing and Digital Systems':{index:'Scopus'},
 'International Journal of Advanced Robotic Systems':{index:'SCIE',if:'1.7'},
 'International Journal of Intelligent Robotics and Applications':{index:'SCIE',if:'4.3'},
 'Wireless Personal Communications':{index:'SCIE',if:'2.2'},
 'The Imaging Science Journal':{index:'SCIE',if:'1.3'},
 'Connection Science':{index:'SCIE',if:'3.0'},
 'Electronics':{index:'SCIE',if:'2.9'}
};
const esc=s=>String(s).replace(/[&<>\"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','\"':'&quot;',"'":'&#39;'}[m]));
const add=()=>document.querySelectorAll('.pub').forEach(card=>{
 if(card.querySelector('.pub-metrics'))return;
 const citation=card.querySelector('p')?.textContent||'';
 const meta=Object.entries(journalMeta).find(([name])=>citation.toLowerCase().includes(name.toLowerCase()))?.[1];
 if(!meta)return;
 const links=card.querySelector('.pub-links');
 if(!links)return;
 const box=document.createElement('div');
 box.className='pub-metrics';
 box.innerHTML=`<span class="pub-index ${meta.index==='SCIE'?'scie':'scopus'}">${esc(meta.index)}</span>${meta.if?`<span class="pub-if">Impact Factor = ${esc(meta.if)}</span>`:''}`;
 links.insertAdjacentElement('afterend',box);
});
const style=document.createElement('style');
style.textContent='.pub-metrics{display:flex;gap:8px;flex-wrap:wrap;margin-top:8px}.pub-metrics span{display:inline-flex;align-items:center;padding:4px 8px;border:1px solid #294158;border-radius:7px;font-size:10px;line-height:1.2;color:#9ab0c2;background:#0a1929}.pub-metrics .scie{color:#7fe0e8;border-color:#2b6472}.pub-metrics .scopus{color:#d6c58b;border-color:#665d38}.pub-metrics .pub-if{color:#b8c7d3}@media(max-width:600px){.pub-metrics{gap:6px}.pub-metrics span{font-size:9px}}';
document.head.appendChild(style);
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',add);else add();
new MutationObserver(add).observe(document.body,{childList:true,subtree:true});
})();
(()=>{
/* Journal metadata: indexing is Web of Science (SCIE/ESCI) where applicable; quartile is the latest SCImago best-quartile available for the journal. */
const journalMeta={
 'IEEE Transactions on Green Communications and Networking':{index:'SCIE',if:'6.7',q:'Q1'},
 'Optics Communications':{index:'SCIE',if:'2.5',q:'Q2'},
 'Cluster Computing':{index:'SCIE',if:'4.1',q:'Q1'},
 'Proceedings of the Institution of Mechanical Engineers, Part D':{index:'SCIE',if:'1.7',q:'Q2'},
 'SN Computer Science':{index:'Scopus',q:'Q2'},
 'Multimedia Tools and Applications':{index:'SCIE',if:'3.0',q:'Q1'},
 'Transactions of the Institute of Measurement and Control':{index:'SCIE',if:'1.9',q:'Q2'},
 'IEEE Sensors Journal':{index:'SCIE',if:'4.5',q:'Q1'},
 'Peer-to-Peer Networking and Applications':{index:'SCIE',if:'3.2',q:'Q2'},
 'Journal of High Speed Networks':{index:'ESCI',if:'1.0',q:'Q2'},
 'International Journal of Information Technology':{index:'Scopus',q:'Q2'},
 'Journal of Uncertain Systems':{index:'Scopus',q:'Q2'},
 'International Journal of Computing and Digital Systems':{index:'Scopus',q:'Q3'},
 'International Journal of Advanced Robotic Systems':{index:'SCIE',if:'2.1',q:'Q3'},
 'International Journal of Intelligent Robotics and Applications':{index:'SCIE',if:'4.3',q:'Q2'},
 'Wireless Personal Communications':{index:'SCIE',if:'2.2',q:'Q2'},
 'The Imaging Science Journal':{index:'SCIE',if:'1.3',q:'Q2'},
 'Connection Science':{index:'SCIE',if:'3.0',q:'Q2'},
 'Electronics':{index:'SCIE',if:'2.9',q:'Q1'},
 'Drones':{index:'SCIE',if:'5.2',q:'Q1'},
 'International Journal of Computational Vision and Robotics':{index:'Scopus',q:'Q3'},
 'International Journal of Control Theory and Applications':{index:'Not currently indexed',q:'—'}
};
const esc=s=>String(s).replace(/[&<>\"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','\"':'&quot;',"'":'&#39;'}[m]));
const add=()=>document.querySelectorAll('.pub').forEach(card=>{
 if(card.querySelector('.pub-metrics'))return;
 const citation=card.querySelector('p')?.textContent||'';
 const meta=Object.entries(journalMeta).find(([name])=>citation.toLowerCase().includes(name.toLowerCase()))?.[1];
 if(!meta)return;
 const links=card.querySelector('.pub-links');
 if(!links)return;
 const box=document.createElement('span');
 box.className='pub-metrics';
 box.innerHTML=`<span class="pub-index ${meta.index==='SCIE'?'scie':meta.index==='ESCI'?'esci':meta.index==='Scopus'?'scopus':'unindexed'}">${esc(meta.index)}</span>${meta.if?`<span class="pub-if">Impact Factor = ${esc(meta.if)}</span>`:''}<span class="pub-quartile">${esc(meta.q)}</span>`;
 links.appendChild(box);
});
const style=document.createElement('style');
style.textContent='.pub-links{display:flex;align-items:center;gap:8px;flex-wrap:nowrap;overflow-x:auto;white-space:nowrap}.pub-links::-webkit-scrollbar{height:3px}.pub-metrics{display:inline-flex;align-items:center;gap:8px;flex:0 0 auto}.pub-metrics span{display:inline-flex;align-items:center;padding:5px 8px;border:1px solid #294158;border-radius:7px;font-size:10px;line-height:1.2;color:#7fdfe7;background:#0a1929}.pub-metrics .scie{color:#7fdfe7;border-color:#294158}.pub-metrics .esci{color:#7fdfe7;border-color:#294158}.pub-metrics .scopus{color:#7fdfe7;border-color:#294158}.pub-metrics .unindexed{color:#8296aa;border-color:#294158}.pub-metrics .pub-if,.pub-metrics .pub-quartile{color:#7fdfe7;border-color:#294158}@media(max-width:600px){.pub-links{gap:6px}.pub-metrics{gap:6px}.pub-metrics span{font-size:9px;padding:4px 7px}}';document.head.appendChild(style);
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',add);else add();
new MutationObserver(add).observe(document.body,{childList:true,subtree:true});
})();
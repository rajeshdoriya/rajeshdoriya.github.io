(()=>{
  const workshops=[
    {
      date:'31 August – 4 September 2026',
      type:'Five-Day National Level Workshop',
      title:'Quantum Technologies for Underwater Robot Positioning, Navigation and Timing (PNT): Principles, Challenges and Future Directions',
      details:'Sponsored by IITTNiF (NM-ICPS), IIT Tirupati at NIT Raipur.'
    },
    {
      date:'19 – 23 August 2026',
      type:'Five-Day Online Workshop',
      title:'AI, Robotics and Industry 4.0 for Innovation: From Problem Identification to Prototype Validation and Business Fit',
      details:'Organized at NIT Raipur.'
    },
    {
      date:'20 – 24 April 2026',
      type:'One-Week Online Faculty Development Programme',
      title:'Foundations and Applications of Deep Learning and Data Sciences (FADLDS-2026)',
      details:'Organized at NIT Raipur.'
    },
    {
      date:'15 – 19 December 2025',
      type:'Five-Day Workshop',
      title:'SkyFarm Analytics',
      details:'Organized at NIT Raipur.'
    },
    {
      date:'7 – 11 October 2024',
      type:'Five-Day Workshop',
      title:'Quantum Computing and Applications (QCA-2024)',
      details:'Organized at NIT Raipur.'
    },
    {
      date:'February 2020',
      type:'ATAL-Sponsored Workshop',
      title:'Workshop on Robotics',
      details:'Organized at NIT Raipur.'
    },
    {
      date:'January 2020',
      type:'Workshop',
      title:'CICC-2020',
      details:'Organized at NIT Raipur.'
    },
    {
      date:'September 2019',
      type:'Workshop',
      title:'SCTR-2019',
      details:'Organized at NIT Raipur.'
    },
    {
      date:'September 2018',
      type:'Workshop',
      title:'SCTR-2018',
      details:'Organized at NIT Raipur.'
    },
    {
      date:'February 2018',
      type:'Workshop',
      title:'RCIT-2018',
      details:'Organized at NIT Raipur.'
    },
    {
      date:'December 2017',
      type:'Short Term Training Programme',
      title:'Computational Intelligence & Cloud Computing',
      details:'Organized at NIT Raipur.'
    },
    {
      date:'November 2017',
      type:'Short Term Training Programme',
      title:'Logic Building Using C and Matlab',
      details:'Organized at NIT Raipur.'
    },
    {
      date:'September 2017',
      type:'Short Term Training Programme',
      title:'Logic Building Using C and Matlab',
      details:'Organized at NIT Raipur.'
    },
    {
      date:'September 2017',
      type:'Workshop',
      title:'SCTR-2017',
      details:'Organized at NIT Raipur.'
    }
  ];

  const addStyles=()=>{
    if(document.getElementById('workshop-update-style')) return;
    const style=document.createElement('style');
    style.id='workshop-update-style';
    style.textContent=`
      .workshop-card{grid-column:1 / -1}
      .workshop-list{display:grid;gap:14px;margin:0;padding:0;list-style:none}
      .workshop-item{padding:15px 16px;border:1px solid #294158;border-radius:12px;background:#0a1929}
      .workshop-item .workshop-meta{display:block;color:#76dbe5;font-size:12px;font-weight:700;letter-spacing:.02em;margin-bottom:6px}
      .workshop-item h4{margin:0 0 7px;color:#e7f3fa;font-size:15px;line-height:1.45}
      .workshop-item p{margin:0;color:#8397aa;font-size:13px;line-height:1.55}
    `;
    document.head.appendChild(style);
  };

  const render=()=>{
    const academic=document.querySelector('#academic .academic-grid');
    if(!academic || document.getElementById('workshops-organized')) return;
    addStyles();

    const card=document.createElement('article');
    card.id='workshops-organized';
    card.className='card workshop-card';
    card.innerHTML=`<h3>Conference / Workshops Organized</h3><ul class="workshop-list">${workshops.map(w=>`<li class="workshop-item"><span class="workshop-meta">${w.date} · ${w.type}</span><h4>${w.title}</h4><p>${w.details}</p></li>`).join('')}</ul>`;

    const admin=academic.querySelector('.card');
    if(admin && admin.nextElementSibling) academic.insertBefore(card,admin.nextElementSibling);
    else academic.appendChild(card);

    document.querySelectorAll('.metric').forEach(metric=>{
      const label=(metric.textContent||'').toLowerCase();
      if(label.includes('workshops / fdps / sttps organized')){
        const value=metric.querySelector('b');
        if(value) value.textContent='16';
      }
    });
  };

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',render,{once:true});
  else render();
})();

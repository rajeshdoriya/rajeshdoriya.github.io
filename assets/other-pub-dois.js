(()=>{
  // Verified DOI records for non-journal publications in the portfolio.
  // Only confirmed DOI identifiers are included; records without a verified DOI are left unchanged.
  const otherDoiMap={
    'Doppler-Aware Kinetic-Spectrum Joint Optimization (DA-KSJO): A Cross-Layer Framework for Resilient UAV Swarms in Defense':'',
    'Hierarchical Quantum Backbone: A Scalable and Robust Topology for Quantum Network Communication':'10.1109/ITNAC66378.2025.11302595',
    'SPEP: Adaptive Resource Orchestration in Quantum Networks through Strategic Entanglement Pre-Positioning':'10.1109/ITNAC66378.2025.11302511',
    'Precision Soil Monitoring via UAV-Captured RGB Imaging and Spectral Band Regression Using Deep Learning':'10.1007/978-3-032-08508-5_13',
    'Beyond GNSS: Quantum-Enhanced Positioning, Navigation, and Timing for Underwater Robotics':'',
    'Implementing Anonymous Protocols for Secure Quantum Communication in Multi-Host Network':'',
    'Enhanced Quantum Key Distribution Protocol for Secure Smart Grid Communication using Quantum Gates':'10.1109/ICPC2T63847.2025.10958574',
    'Spectral Analysis of Water Ice in Erlanger Crater, Lunar North Pole’s Permanently Shadowed Area':'10.1007/978-981-95-0701-6_26',
    'Robust and Explainable AI: Auto-Augment with Label Preservation and Saliency Parameters':'10.1109/ICPC2T60072.2024.10474812',
    'Efficient Mobile Robot Navigation with D* Lite and Bellman Ford Hybrid Algorithm':'10.1145/3625156.3625189',
    'Anomaly Detection in Industrial Control System using FSODCONV Method':'10.1145/3625156.3625191',
    'CNN-LSTM-based IDS on Precision Farming for IIoT data':'10.1109/ICCCMLA56841.2022.9988997',
    'Analysis of Different Cryptographic Algorithms in Cloud-based Multi-Robot Systems':'10.1007/978-981-19-5845-8_15',
    'Hybrid Consensus Approach for Blockchain based Vehicular Communication':'10.1109/ICPC2T53885.2022.9776995',
    'An Unsupervised Learning Approach for Visual Data Compression with Chaotic Encryption':'10.1109/ICECCT52121.2021.9616827',
    'Crop Recommendation System with Cloud Computing':'10.1109/ICIRCA51532.2021.9544524',
    'Security Issues in Fog Computing':'10.1109/ICICCS51141.2021.9432317',
    'Review on Consensus Protocols for Blockchain':'10.1109/ICCCIS51004.2021.9397089',
    'Authentication of Robots using ECC to Access Cloud-based Services':'10.1007/978-981-15-9509-7_69',
    'Visual Chaos Steganography with Fractional Transform':'10.1007/978-981-33-6912-2_27',
    'Secured Map Building using ECIES and Kerberos for Cloud Based Robots':'10.1109/ICCMC48092.2020.ICCMC-00032',
    'Minimizing Computation Time for Robot Path Planning using Improvised Cuckoo Search Algorithm':'10.1007/978-981-15-9019-1_18',
    'Reducing Traverse Space in Path Planning using Snake Model for Robots':'10.1109/CCCS.2019.8888083',
    'A Brief Survey and Analysis of Multi-robot Communication and Coordination':'10.1109/CCAA.2015.7148524',
    'An Architecture for Detection of Land Mines using Swarm Robots':'10.1007/978-81-322-2553-9_30',
    'Dynamic Vehicle Traffic Routing Problem: Study, Implementation and Analysis ing ACO and GA':'10.1109/ICCICCT.2014.6993137',
    'Robotic Services in Cloud Computing Paradigm':'10.1109/ISCOS.2012.24',
    '“Robot-Cloud”: A Framework to Assist Heterogeneous Low Cost Robots':'10.1109/ICCICT.2012.6398208',
    'Gesture Recognition and Generation for HOAP-2 Robots by Fuzzy Inference System':'10.1109/CICN.2011.84',
    'Artificial Intelligence for Next Generation Computing, Volume 2 – Select Proceedings of AICTA 2024':'10.1007/978-981-95-8497-0',
    'Sustainable Agriculture Production Using Blockchain Technology':'10.1002/9781394248711',
    'Machine Learning, Image Processing, Network Security and Data Sciences – Select Proceedings of 3rd International Conference on MIND 2021':'10.1007/978-981-19-5868-7',
    'Deep Learning: Theory, Architectures and Applications in Speech, Image and Language Processing':'10.2174/97898150792101230101',
    'QIARF: Quantum-Inspired Adaptive Receiver Fusion Toward Secure Internet of Underwater Things':'',
    'Exploring the Frontier: Introduction to Quantum Computing and Quantum Cryptography':'10.4018/979-8-3693-9220-1.ch001',
    'A Systematic Analysis of Robot Path Planning and Optimization Techniques':'',
    'Deep Learning History and Evolution':'10.2174/9789815079210123010004',
    'Fog Robotics: A New Perspective for Cloud-based Robots':'',
    'Patient’s Medical Data Security via bi-Chaos bi-Order Fourier Transform':'10.1007/978-981-16-1681-5_3',
    'Fog Computing-based Seed Sowing Robots for Agriculture':'10.1007/978-981-16-1681-5_19'
  };
  const esc=s=>String(s).replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
  const add=()=>document.querySelectorAll('.pub').forEach(card=>{
    if(card.querySelector('.pub-other-doi'))return;
    const title=card.querySelector('.pub-title')?.textContent?.replace(/\s*↗\s*$/,'').trim();
    if(!title)return;
    const doi=otherDoiMap[title];
    if(!doi)return;
    const links=card.querySelector('.pub-links');
    if(!links)return;
    const a=document.createElement('a');
    a.className='pub-other-doi';
    a.href=`https://doi.org/${encodeURIComponent(doi)}`;
    a.target='_blank';a.rel='noopener';
    a.textContent=`DOI: ${doi}`;
    links.appendChild(a);
  });
  const style=document.createElement('style');
  style.textContent='.pub-other-doi{display:inline-block!important;padding:5px 8px;border:1px solid #294158;border-radius:7px;font-size:10px;color:#7fdfe7;text-decoration:none;white-space:nowrap}.pub-other-doi:hover{color:#a9eef2;border-color:#3b607d}@media(max-width:600px){.pub-other-doi{font-size:9px;padding:4px 7px}}';
  document.head.appendChild(style);
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',add);else add();
  new MutationObserver(add).observe(document.body,{childList:true,subtree:true});
})();
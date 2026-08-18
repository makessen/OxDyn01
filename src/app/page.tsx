import Link from 'next/link';

export default function SubstrataDashboard() {
  return (
    <div className="antialiased h-screen flex overflow-hidden font-body-md text-body-md bg-background text-on-background w-full">


<nav className="w-[240px] border-r border-surface-variant bg-surface-container flex flex-col h-full z-20 flex-shrink-0">
<div className="px-lg py-md border-b border-surface-variant flex items-center h-[64px]">
<Link href="/mobile">
<div className="font-display-lg text-[24px] leading-[32px] font-bold tracking-tight text-on-surface cursor-pointer hover:opacity-80 transition-opacity">
            Substrata
        </div>
</Link>
</div>
<div className="flex-1 overflow-y-auto py-md px-sm flex flex-col gap-2">
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-on-surface-variant" href="#">
<span className="material-symbols-outlined text-[20px]">dashboard</span>
<span className="font-body-sm font-semibold">Dashboard</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high transition-colors" href="#">
<span className="material-symbols-outlined text-[20px]">warning</span>
<span className="font-body-sm">Incidents</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-surface-container-high transition-colors bg-secondary-container text-on-secondary-container" href="#">
<span className="material-symbols-outlined text-[20px]">map</span>
<span className="font-body-sm">Maps</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high transition-colors" href="#">
<span className="material-symbols-outlined text-[20px]">gavel</span>
<span className="font-body-sm">Regulations</span>
</a>
</div>
<div className="border-t border-surface-variant p-sm">
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high transition-colors" href="#">
<span className="material-symbols-outlined text-[20px]">settings</span>
<span className="font-body-sm">Settings</span>
</a>
</div>
</nav>

<div className="flex-1 flex flex-col h-full overflow-hidden">

<header className="h-[64px] border-b border-surface-variant bg-surface-container-low flex items-center justify-between px-lg flex-shrink-0 z-10">
<div className="flex items-center gap-4 w-full max-w-2xl">
<div className="relative w-full">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]">search</span>
<input className="w-full bg-surface-container border border-surface-variant rounded-lg py-2 pl-10 pr-4 text-body-sm focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all text-on-surface placeholder-on-surface-variant" placeholder="Search incidents, regulations, locations..." type="text"/>
</div>
</div>
<div className="flex items-center gap-4">
<button className="relative p-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high rounded-full transition-colors">
<span className="material-symbols-outlined">notifications</span>
<span className="absolute top-1 right-1 w-2 h-2 bg-error rounded-full"></span>
</button>
<div className="w-8 h-8 rounded-full bg-primary-container border border-primary text-primary flex items-center justify-center font-bold text-sm">
                JS
            </div>
</div>
</header>

<main className="flex-1 flex overflow-hidden">

<div className="flex-1 relative flex flex-col"><div className="p-4 bg-surface-container-low border-b border-surface-variant z-20">
<div className="relative group">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<span className="material-symbols-outlined text-secondary text-[20px]">auto_awesome</span>
</div>
<input className="block w-full bg-surface-container border border-surface-variant rounded-lg py-3 pl-10 pr-24 text-body-md font-mono-data focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all text-on-surface placeholder-on-surface-variant/50" placeholder="Ask about regulatory incidents, compliance trends, or legal precedents..." type="text"/>
<div className="absolute inset-y-0 right-0 flex items-center pr-3 gap-2">
<button className="p-1.5 text-on-surface-variant hover:text-secondary transition-colors">
<span className="material-symbols-outlined text-[20px]">mic</span>
</button>
<div className="w-[1px] h-4 bg-surface-variant"></div>
<button className="p-1.5 text-on-surface-variant hover:text-secondary transition-colors">
<span className="material-symbols-outlined text-[20px]">open_in_full</span>
</button>
</div>
</div>
</div>
<div className="flex-1 relative overflow-hidden"><img alt="Water mains network GIS map" className="absolute inset-0 w-full h-full object-cover z-0" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPR1pt-I84nOwgWNCwsTWX4Iwr7yOBwNBMqfN_11I7ybHBKDn-rBdW1bWYwRUkct_8V1qNwjRzNNX-U5BuWlLVQASB_fvQwGs7H7ih4tpbons8vDUdv29gWir3PJBXuS09CTb2Rq2pMw-flW5pLv-lzgxU80FCkcC9ED9-whJBQWEpoZHiSFrNMHsnhK24nRYbPjUx6qAhzfnDCfDJDK6skVcYqD37lVmmsfV8aVWdNHbyyOFtYZ5L_Q"/>
<div className="absolute top-4 left-4 bg-surface-container p-2 rounded-lg border border-surface-variant shadow-lg flex flex-col gap-2 z-10">
<button className="w-8 h-8 flex items-center justify-center bg-surface hover:bg-surface-container-high rounded text-on-surface transition-colors"><span className="material-symbols-outlined">add</span></button>
<button className="w-8 h-8 flex items-center justify-center bg-surface hover:bg-surface-container-high rounded text-on-surface transition-colors"><span className="material-symbols-outlined">remove</span></button>
<div className="w-full h-[1px] bg-surface-variant my-1"></div>
<button className="w-8 h-8 flex items-center justify-center bg-surface hover:bg-surface-container-high rounded text-on-surface transition-colors"><span className="material-symbols-outlined">my_location</span></button>
</div>

<div className="absolute bottom-6 right-6 bg-surface-container/90 backdrop-blur border border-surface-variant rounded-lg p-4 shadow-xl z-10 w-64">
<h3 className="font-label-caps text-on-surface-variant mb-3">Legal Regulations Impacted</h3>
<div className="flex flex-col gap-2">
<div className="flex items-center gap-2">
<span className="w-3 h-3 rounded-full bg-error"></span>
<span className="font-body-sm text-on-surface">Water Industry Act 1991</span>
</div>
<div className="flex items-center gap-2">
<span className="w-3 h-3 rounded-full bg-secondary"></span>
<span className="font-body-sm text-on-surface">Environmental Protection Act</span>
</div>
<div className="flex items-center gap-2">
<span className="w-3 h-3 rounded-full bg-tertiary"></span>
<span className="font-body-sm text-on-surface">Clean Air Act 1993</span>
</div>
</div>
</div>

<div className="absolute top-1/3 left-1/4 w-6 h-6 bg-error/30 rounded-full flex items-center justify-center animate-pulse">
<div className="w-3 h-3 bg-error rounded-full border border-surface shadow-[0_0_15px_rgba(255,180,171,0.8)]"></div>
</div>
<div className="absolute top-1/2 left-1/2 w-8 h-8 bg-secondary/30 rounded-full flex items-center justify-center animate-pulse">
<div className="w-4 h-4 bg-secondary rounded-full border border-surface shadow-[0_0_15px_rgba(173,198,255,0.8)]"></div>
</div>
<div className="absolute bottom-1/3 right-1/4 w-6 h-6 bg-error/30 rounded-full flex items-center justify-center animate-pulse">
<div className="w-3 h-3 bg-error rounded-full border border-surface shadow-[0_0_15px_rgba(255,180,171,0.8)]"></div>
</div>
<div className="absolute top-1/4 right-1/3 w-5 h-5 bg-tertiary/30 rounded-full flex items-center justify-center animate-pulse">
<div className="w-2.5 h-2.5 bg-tertiary rounded-full border border-surface shadow-[0_0_15px_rgba(185,199,224,0.8)]"></div>
</div>
<div className="absolute bottom-1/2 left-1/3 w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center animate-pulse">
<div className="w-5 h-5 bg-secondary rounded-full border border-surface shadow-[0_0_20px_rgba(173,198,255,0.6)]"></div>
</div></div>

<div className="h-[200px] border-t border-surface-variant bg-surface-container-low p-4 flex gap-4 overflow-x-auto z-10">
<div className="flex-shrink-0 w-[300px] data-card rounded-lg p-4 flex flex-col justify-between">
<h3 className="font-label-caps text-on-surface-variant">Global Compliance Score</h3>
<div className="flex items-end gap-2">
<span className="font-display-lg text-secondary">84%</span>
<span className="font-body-sm text-on-surface-variant mb-2">overall</span>
</div>
<div className="w-full bg-surface-variant h-2 rounded-full overflow-hidden">
<div className="bg-secondary h-full w-[84%]"></div>
</div>
</div>
<div className="flex-shrink-0 w-[300px] data-card rounded-lg p-4 flex flex-col justify-between">
<h3 className="font-label-caps text-on-surface-variant">Incidents by Regulation</h3>
<div className="flex items-end justify-between h-20 px-2 pb-1 border-b border-l border-surface-variant">
<div className="w-6 bg-error h-[80%] relative group cursor-pointer"><div className="absolute -top-6 left-1/2 -translate-x-1/2 text-mono-data text-[10px] hidden group-hover:block text-on-surface bg-surface-container px-1 rounded">24</div></div>
<div className="w-6 bg-secondary h-[40%] relative group cursor-pointer"><div className="absolute -top-6 left-1/2 -translate-x-1/2 text-mono-data text-[10px] hidden group-hover:block text-on-surface bg-surface-container px-1 rounded">12</div></div>
<div className="w-6 bg-tertiary h-[60%] relative group cursor-pointer"><div className="absolute -top-6 left-1/2 -translate-x-1/2 text-mono-data text-[10px] hidden group-hover:block text-on-surface bg-surface-container px-1 rounded">18</div></div>
<div className="w-6 bg-surface-variant h-[20%] relative group cursor-pointer"><div className="absolute -top-6 left-1/2 -translate-x-1/2 text-mono-data text-[10px] hidden group-hover:block text-on-surface bg-surface-container px-1 rounded">5</div></div>
</div>
<div className="flex justify-between px-2 mt-1 text-mono-data text-[10px] text-on-surface-variant">
<span className="">WIA</span><span className="">EPA</span><span className="">CAA</span><span className="">OTH</span>
</div>
</div>
</div>
</div>

<aside className="w-[320px] border-l border-surface-variant bg-surface-container-low flex flex-col z-10 flex-shrink-0 overflow-y-auto">
<div className="p-4 border-b border-surface-variant sticky top-0 bg-surface-container-low z-10">
<h2 className="font-headline-sm text-on-surface flex items-center justify-between">
                    Active Alerts
                    <span className="bg-error-container text-on-error-container text-[12px] px-2 py-0.5 rounded-full font-bold">3 Critical</span>
</h2>
</div>
<div className="p-4 flex flex-col gap-3">

<div className="bg-surface border border-error/50 rounded-lg p-3 hover:border-error transition-colors cursor-pointer border-l-4 border-l-error">
<div className="flex justify-between items-start mb-1">
<span className="font-mono-data text-[11px] text-error">CRITICAL • 10m ago</span>
<span className="material-symbols-outlined text-[16px] text-on-surface-variant">more_vert</span>
</div>
<h4 className="font-body-sm font-bold text-on-surface mb-1">Unpermitted Discharge</h4>
<p className="font-body-sm text-[13px] text-on-surface-variant line-clamp-2">Potential violation of WIA 1991 Sec 85. Sensors indicate elevated contamination levels at Outfall Alpha.</p>
</div>

<div className="bg-surface border border-surface-variant rounded-lg p-3 hover:border-secondary transition-colors cursor-pointer border-l-4 border-l-secondary">
<div className="flex justify-between items-start mb-1">
<span className="font-mono-data text-[11px] text-secondary">WARNING • 1h ago</span>
<span className="material-symbols-outlined text-[16px] text-on-surface-variant">more_vert</span>
</div>
<h4 className="font-body-sm font-bold text-on-surface mb-1">Missing Compliance Report</h4>
<p className="font-body-sm text-[13px] text-on-surface-variant line-clamp-2">Q3 EPA filing deadline approaching. Audit trail incomplete for facility Sector 7.</p>
</div>

<div className="bg-surface border border-surface-variant rounded-lg p-3 hover:border-surface-variant transition-colors cursor-pointer border-l-4 border-l-surface-variant opacity-70">
<div className="flex justify-between items-start mb-1">
<span className="font-mono-data text-[11px] text-on-surface-variant">INFO • 4h ago</span>
<span className="material-symbols-outlined text-[16px] text-on-surface-variant">more_vert</span>
</div>
<h4 className="font-body-sm font-bold text-on-surface mb-1">System Update Complete</h4>
<p className="font-body-sm text-[13px] text-on-surface-variant line-clamp-2">Regulatory database synched with latest legislative amendments.</p>
</div>
</div>
<div className="mt-auto p-4 border-t border-surface-variant bg-surface-container-low sticky bottom-0">
<div className="flex flex-col gap-2">
<div className="flex items-center gap-2 p-2 rounded bg-surface border border-surface-variant bg-secondary/20">
<span className="material-symbols-outlined text-[16px] text-secondary">check_circle</span>
<span className="font-mono-data text-[10px] text-on-surface-variant tracking-wider text-secondary">SOC2 TYPE II &amp; ISO 27001 CERTIFIED</span>
</div>
<div className="flex items-center gap-2 p-2 rounded bg-surface border border-surface-variant bg-secondary/20">
<span className="material-symbols-outlined text-[16px] text-secondary">check_circle</span>
<span className="font-mono-data text-[10px] text-on-surface-variant tracking-wider text-secondary">CITATIONS VERIFIED</span>
</div>
<div className="flex items-center gap-2 p-2 rounded bg-surface border border-surface-variant bg-secondary/20">
<span className="material-symbols-outlined text-[16px] text-secondary">check_circle</span>
<span className="font-mono-data text-[10px] text-on-surface-variant tracking-wider text-secondary">ON-PREMISE / VPC</span>
</div>
</div>
</div></aside>
</main>
</div>

    </div>
  )
}

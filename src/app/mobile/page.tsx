import Link from 'next/link';

export default function SubstrataMobileDashboard() {
  return (
    <div className="font-body-md bg-background text-on-background min-h-screen flex flex-col pb-[72px] pt-16 w-full max-w-md mx-auto relative overflow-hidden">
<header className="fixed top-0 w-full z-50 flex justify-between items-center px-md h-16 bg-surface-container-lowest dark:bg-surface-container-lowest border-b border-outline-variant dark:border-outline-variant">
<div className="flex items-center gap-sm">
<span className="material-symbols-outlined text-secondary dark:text-secondary">terminal</span>
<Link href="/"><h1 className="font-headline-md text-headline-md font-black tracking-tighter text-secondary dark:text-secondary cursor-pointer hover:opacity-80 transition-opacity">SUBSTRATA</h1></Link>
</div>
<div className="flex items-center">
<button className="flex items-center justify-center w-8 h-8 rounded-full bg-surface-bright text-on-surface hover:bg-surface-container-highest transition-colors">
<span className="font-label-caps text-label-caps">9+</span>
</button>
</div>
</header>

<main className="flex-1 w-full px-sm py-sm flex flex-col gap-sm overflow-y-auto">

<div className="bg-surface-container border border-outline-variant rounded p-sm flex items-center gap-sm">
<span className="material-symbols-outlined text-outline">search</span>
<input className="flex-1 bg-transparent border-none text-body-sm font-body-sm text-on-surface placeholder:text-outline focus:outline-none focus:ring-0 p-0" placeholder="AI Query Terminal..." type="text"/>
<button className="text-secondary hover:text-secondary-fixed transition-colors">
<span className="material-symbols-outlined">mic</span>
</button>
<button className="text-outline hover:text-on-surface transition-colors">
<span className="material-symbols-outlined">fullscreen</span>
</button>
</div>

<div className="relative w-full h-[250px] bg-surface-container border border-outline-variant rounded overflow-hidden">
<div className="absolute inset-0 bg-cover bg-center w-full h-full opacity-80" data-alt="A dark, high-contrast digital map interface showing neon blue and teal utility lines overlaid on a dark grey city grid block. The style is austere and precision-focused, resembling a secure enterprise geographic information system. Nodes glow with vibrant cyan light against the matte slate background." style={{ backgroundImage: "url(\'https://lh3.googleusercontent.com/aida/AP1WRLs_xCbFo4irGxgL8NhAB27T_lnA165YC3BOpBLp29pK9DZaXiAEiOfLtIJNsTbJt17wT6-CAm1ayuQZ3TF-drRqm5ZLxZmdsFK5kFfDuQfuEy0lMGqRcTAcroI1m-WDAijOHxQaJnGz8t9FS6Ub8qm58TnxVxIlQCQcvbEuWDHWgaV7DoUR1lPazM_kdnOYeu_dAIpzv__fQudxWZmemPuCEj18NRjdIrHGJzNl-vL4btcZ8GEQQbeKXcFH\')" }}></div>

<div className="absolute bottom-sm right-sm flex flex-col gap-xs">
<button className="bg-surface border border-outline-variant rounded p-xs text-on-surface hover:bg-surface-bright transition-colors">
<span className="material-symbols-outlined text-[16px]">add</span>
</button>
<button className="bg-surface border border-outline-variant rounded p-xs text-on-surface hover:bg-surface-bright transition-colors">
<span className="material-symbols-outlined text-[16px]">remove</span>
</button>
</div>
<div className="absolute top-sm left-sm bg-surface-container-highest/80 backdrop-blur-sm border border-outline-variant rounded px-sm py-xs flex items-center gap-xs">
<div className="w-2 h-2 rounded-full bg-secondary"></div>
<span className="font-mono-data text-mono-data text-on-surface">LIVE FEED</span>
</div>
</div>

<div className="flex flex-col gap-sm">

<div className="bg-surface-container border border-outline-variant rounded p-md flex flex-col gap-md">
<h2 className="font-label-caps text-label-caps text-outline uppercase">Global Compliance Score</h2>
<div className="flex items-end gap-sm">
<span className="font-display-lg text-display-lg text-secondary">94</span>
<span className="font-body-sm text-body-sm text-outline mb-2">/ 100</span>
</div>

<div className="flex flex-col gap-xs mt-xs">
<h3 className="font-label-caps text-label-caps text-outline uppercase mb-xs">Incidents by Reg</h3>
<div className="flex items-center gap-sm">
<span className="font-mono-data text-mono-data text-on-surface w-12">GDPR</span>
<div className="flex-1 h-2 bg-surface-bright rounded overflow-hidden">
<div className="h-full bg-error" style={{ width: "45%" }}></div>
</div>
<span className="font-mono-data text-mono-data text-error w-6 text-right">12</span>
</div>
<div className="flex items-center gap-sm">
<span className="font-mono-data text-mono-data text-on-surface w-12">HIPAA</span>
<div className="flex-1 h-2 bg-surface-bright rounded overflow-hidden">
<div className="h-full bg-secondary" style={{ width: "25%" }}></div>
</div>
<span className="font-mono-data text-mono-data text-secondary w-6 text-right">4</span>
</div>
<div className="flex items-center gap-sm">
<span className="font-mono-data text-mono-data text-on-surface w-12">SOC2</span>
<div className="flex-1 h-2 bg-surface-bright rounded overflow-hidden">
<div className="h-full bg-primary" style={{ width: "10%" }}></div>
</div>
<span className="font-mono-data text-mono-data text-primary w-6 text-right">1</span>
</div>
</div>
</div>

<div className="bg-surface-container border border-outline-variant rounded p-md flex flex-col gap-md">
<div className="flex justify-between items-center border-b border-outline-variant pb-xs">
<h2 className="font-label-caps text-label-caps text-outline uppercase">Active Alerts</h2>
<span className="font-mono-data text-mono-data text-secondary">3 NEW</span>
</div>
<div className="flex flex-col gap-sm">

<div className="flex flex-col gap-xs p-sm bg-surface rounded border border-error/30 border-l-2 border-l-error">
<div className="flex justify-between items-start">
<span className="bg-error-container text-on-error-container font-label-caps text-[10px] px-2 py-0.5 rounded uppercase">Critical</span>
<span className="font-mono-data text-[10px] text-outline">14:22:05Z</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface mt-1">Unauthorized access attempt blocked at Node Alpha-7.</p>
</div>

<div className="flex flex-col gap-xs p-sm bg-surface rounded border border-outline-variant border-l-2 border-l-secondary">
<div className="flex justify-between items-start">
<span className="bg-secondary/20 text-secondary font-label-caps text-[10px] px-2 py-0.5 rounded uppercase">Warning</span>
<span className="font-mono-data text-[10px] text-outline">13:45:12Z</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface mt-1">Latency spike detected in regional routing protocol.</p>
</div>
</div>
</div>
</div>

<div className="flex flex-wrap gap-sm mt-xs">
<div className="flex items-center gap-xs bg-surface-container border border-outline-variant rounded px-sm py-xs">
<span className="material-symbols-outlined text-[14px] text-emerald-400">verified</span>
<span className="font-mono-data text-[11px] text-on-surface">SOC2 COMPLIANT</span>
</div>
<div className="flex items-center gap-xs bg-surface-container border border-outline-variant rounded px-sm py-xs">
<span className="material-symbols-outlined text-[14px] text-emerald-400">check_circle</span>
<span className="font-mono-data text-[11px] text-on-surface">CITATIONS VERIFIED</span>
</div>
<div className="flex items-center gap-xs bg-surface-container border border-outline-variant rounded px-sm py-xs">
<span className="material-symbols-outlined text-[14px] text-emerald-400">dns</span>
<span className="font-mono-data text-[11px] text-on-surface">ON-PREMISE ACTIVE</span>
</div>
</div>
</main>

<nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-sm py-xs bg-surface-container-lowest dark:bg-surface-container-lowest border-t border-outline-variant dark:border-outline-variant">
<button className="flex flex-col items-center justify-center text-secondary dark:text-secondary bg-secondary-container dark:bg-secondary-container rounded-lg px-md py-xs active:scale-95 transition-transform duration-100">
<span className="material-symbols-outlined">dashboard</span>
<span className="font-label-caps text-[10px] mt-1">Dashboard</span>
</button>
<button className="flex flex-col items-center justify-center text-outline dark:text-outline px-md py-xs hover:text-on-surface dark:hover:text-on-surface active:scale-95 transition-transform duration-100">
<span className="material-symbols-outlined">security</span>
<span className="font-label-caps text-[10px] mt-1">Incidents</span>
</button>
<button className="flex flex-col items-center justify-center text-outline dark:text-outline px-md py-xs hover:text-on-surface dark:hover:text-on-surface active:scale-95 transition-transform duration-100">
<span className="material-symbols-outlined">map</span>
<span className="font-label-caps text-[10px] mt-1">Maps</span>
</button>
<button className="flex flex-col items-center justify-center text-outline dark:text-outline px-md py-xs hover:text-on-surface dark:hover:text-on-surface active:scale-95 transition-transform duration-100">
<span className="material-symbols-outlined">gavel</span>
<span className="font-label-caps text-[10px] mt-1">Regulations</span>
</button>
</nav>
    </div>
  )
}

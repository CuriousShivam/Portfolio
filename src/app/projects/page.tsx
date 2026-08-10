import React from "react";

interface ProjectCardProps {
    title: string;
    iframeSrc: string;
    frontendRepo: string;
    backendRepo: string;
    liveUrl: string;
}

function ProjectCard({
                         title ,
                         iframeSrc ,
                         frontendRepo ,
                         backendRepo ,
                         liveUrl,
                     }: Partial<ProjectCardProps>) {
    return (
        <div
            className="max-w-2xl mx-auto scale-75 bg-black border border-slate-800 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:border-indigo-500/50 hover:shadow-indigo-500/10">

            {/* 1. Project Header Area */}
            <div className="p-5 border-b border-slate-800 flex items-center justify-between bg-black">
                <div className="flex items-center space-x-2">
                    {/* Mock Browser Dots */}
                    <span className="w-3 h-3 rounded-full bg-rose-500 block"/>
                    <span className="w-3 h-3 rounded-full bg-amber-500 block"/>
                    <span className="w-3 h-3 rounded-full bg-emerald-500 block"/>
                    <h3 className="text-lg font-bold text-white pl-2 tracking-wide">{title}</h3>
                </div>

                {/* Quick Link Badge */}
                <span
                    className="text-xs bg-indigo-500/10 text-indigo-400 font-medium px-2.5 py-1 rounded-full border border-indigo-500/20">
                    Live Demo
                 </span>
            </div>

            {/* 2. Responsive Iframe Sandbox Container */}
            <div className="relative w-full aspect-video bg-white overflow-hidden group">
                <iframe
                    src={iframeSrc}
                    title={title}
                    loading="lazy"
                    sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                    referrerPolicy="no-referrer"
                    className="absolute top-0 left-0 w-full h-full border-0 transition-transform duration-500 group-hover:scale-[1.02]"
                />
                {/* Subtle overlay pointer fix (allows the entire card to be hoverable without iframe blocking it) */}
                <div className="absolute inset-0 bg-transparent pointer-events-none group-hover:bg-slate-950/5"/>
            </div>

            {/* 3. Action Navigation Footer */}
            <div className="p-5 bg-black border-t border-slate-800/60 grid grid-cols-1 sm:grid-cols-3 gap-3">

                {/* Frontend Repo Link */}
                <a
                    href={frontendRepo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 px-4 py-2.5 rounded-xl text-sm font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors border border-slate-700/50"
                >
                    <span>🎨 Frontend Code</span>
                </a>

                {/* Backend Repo Link */}
                <a
                    href={backendRepo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 px-4 py-2.5 rounded-xl text-sm font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors border border-slate-700/50"
                >
                    <span>⚙️ Backend Code</span>
                </a>

                {/* Visit Deployed Site Button */}
                <a
                    href={liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 px-4 py-2.5 rounded-xl text-sm font-bold bg-indigo-600 hover:bg-indigo-500 text-white transition-all shadow-lg shadow-indigo-600/20 sm:col-span-1"
                >
                    <span>🚀 Open Live Site</span>
                </a>

            </div>
        </div>
    );
}


const Project = () => {
    return (<>
        <ProjectCard title={"Notes using Raw PHP"}
                     iframeSrc={"https://notesapp-o5e9.onrender.com"}
                     frontendRepo={"https://github.com/CuriousShivam/Learning-PHP/tree/main/NotesApp"}
                     backendRepo={"https://github.com/CuriousShivam/Learning-PHP/tree/main/NotesApp"}
                     liveUrl={"https://notesapp-o5e9.onrender.com"}
        />
        <ProjectCard title={"Ecommerce Application"}
                     iframeSrc={"https://e-com-jet-delta.vercel.app"}
                     frontendRepo={"https://github.com/CuriousShivam/E-Com/tree/main/Marketplace"}
                     backendRepo={"https://github.com/CuriousShivam/E-Com/tree/main/server"}
                     liveUrl={"https://e-com-jet-delta.vercel.app"}
        />
        <ProjectCard title={"Insurance Advisor"}
                     iframeSrc={"https://is-tau.vercel.app/"}
                     frontendRepo={"https://github.com/CuriousShivam/IS.git"}
                     backendRepo={"https://github.com/CuriousShivam/Insurance-Advisor-Backend.git"}
                     liveUrl={"https://is-tau.vercel.app/"}
        />
        <ProjectCard title={"Chat Application Using Web Socket"}
                     liveUrl={"https://chat-application-nu-gules.vercel.app/"}
                     iframeSrc={"https://chat-application-nu-gules.vercel.app/"}
                     backendRepo={"https://github.com/CuriousShivam/ChatApplication"}
                     frontendRepo={"https://github.com/CuriousShivam/ChatApplication"}
        />
    </>);
}
export default Project;
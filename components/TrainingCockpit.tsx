import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../lib/utils';
import {
    Menu,
    History,
    BookOpen,
    Settings,
    Mic,
    Image as ImageIcon,
    Send,
    ChevronRight,
    MoreVertical,
    Maximize2,
    X,
    Layout,
    MessageSquare
} from 'lucide-react';
import { ChatMessage, ChatMessageProps } from './ChatMessage';

// -- Mock Data for visualization --
const MOCK_HISTORY = [
    { id: 1, title: 'Wine Pairing Basics', date: '2h ago' },
    { id: 2, title: 'Menu Mastery: Starters', date: 'Yesterday' },
    { id: 3, title: 'Handling Difficult Guests', date: '2 days ago' },
];

interface TrainingCockpitProps {
    children?: React.ReactNode;
    chatHistory?: ChatMessageProps[];
    onSendMessage?: (message: string) => void;
    onLogout?: () => void;
    activeArtifact?: React.ReactNode;
}

export const TrainingCockpit: React.FC<TrainingCockpitProps> = ({
    chatHistory = [],
    onSendMessage,
    onLogout,
    activeArtifact
}) => {
    const [activeMobileTab, setActiveMobileTab] = useState<'sidebar' | 'chat' | 'canvas'>('chat');
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
    const [inputMessage, setInputMessage] = useState('');
    const [isThinking, setIsThinking] = useState(false); // Simulate AI thinking state
    const chatScrollRef = useRef<HTMLDivElement>(null);

    // Auto-scroll to bottom of chat
    useEffect(() => {
        if (chatScrollRef.current) {
            chatScrollRef.current.scrollTop = chatScrollRef.current.scrollHeight;
        }
    }, [chatHistory]);

    const handleSend = () => {
        if (!inputMessage.trim()) return;
        onSendMessage?.(inputMessage);
        setInputMessage('');
        setIsThinking(true);
        // Simmons outcome: Reset thinking after a delay for demo
        setTimeout(() => setIsThinking(false), 2000);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    // -- Layout Sections --

    const ContextSidebar = () => (
        <div className="flex flex-col h-full bg-slate-50/50 dark:bg-zinc-900/50 backdrop-blur-sm border-r border-slate-200 dark:border-zinc-800 transition-all duration-300">
            <div className="p-4 border-b border-slate-100 dark:border-zinc-800 flex justify-between items-center">
                <h2 className="font-semibold text-slate-800 dark:text-slate-200 tracking-tight flex items-center gap-2">
                    <History size={18} className="text-indigo-500" />
                    <span className={cn("transition-opacity duration-200", isSidebarCollapsed ? "opacity-0 w-0 hidden" : "opacity-100")}>
                        History
                    </span>
                </h2>
                <button
                    onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
                    className="p-1.5 hover:bg-slate-200 dark:hover:bg-zinc-800 rounded-md text-slate-500 transition-colors"
                >
                    {isSidebarCollapsed ? <ChevronRight size={16} /> : <Menu size={16} />}
                </button>
            </div>

            <div className="flex-1 overflow-y-auto py-2 custom-scrollbar">
                {!isSidebarCollapsed && (
                    <div className="px-3 space-y-1">
                        <p className="px-3 py-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">Recent Sessions</p>
                        {MOCK_HISTORY.map((item) => (
                            <button
                                key={item.id}
                                className="w-full text-left px-3 py-2.5 rounded-lg text-sm text-slate-600 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 group transition-all"
                            >
                                <div className="font-medium truncate group-hover:text-indigo-600 dark:group-hover:text-indigo-400">{item.title}</div>
                                <div className="text-xs text-slate-400">{item.date}</div>
                            </button>
                        ))}
                    </div>
                )}
            </div>

            <div className="p-3 border-t border-slate-100 dark:border-zinc-800 space-y-1">
                <button className={cn("w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-zinc-800 transition-colors", isSidebarCollapsed && "justify-center")}>
                    <BookOpen size={18} />
                    {!isSidebarCollapsed && <span className="text-sm font-medium">Resources</span>}
                </button>
                <button className={cn("w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-zinc-800 transition-colors", isSidebarCollapsed && "justify-center")}>
                    <Settings size={18} />
                    {!isSidebarCollapsed && <span className="text-sm font-medium">Settings</span>}
                </button>
                <div className="pt-2 border-t border-slate-100 dark:border-zinc-800 mt-2">
                    <button
                        onClick={() => onLogout?.()}
                        className={cn("w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-900/20 transition-colors", isSidebarCollapsed && "justify-center")}
                    >
                        <X size={18} />
                        {!isSidebarCollapsed && <span className="text-sm font-medium">Log Out</span>}
                    </button>
                </div>
            </div>
        </div>
    );

    const ChatPanel = () => (
        <div className="flex flex-col h-full bg-white dark:bg-zinc-950 border-l border-slate-200 dark:border-zinc-800 shadow-inner">
            {/* Use existing Chat Header Style */}
            <div className="h-14 border-b border-slate-100 dark:border-zinc-800 flex items-center justify-between px-4 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-sm z-10">
                <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    <span className="text-sm font-medium text-slate-600 dark:text-slate-300">Marcel AI</span>
                </div>
            </div>

            <div
                ref={chatScrollRef}
                className={cn(
                    "flex-1 overflow-y-auto px-4 py-4 custom-scrollbar relative",
                    isThinking && "ring-1 ring-indigo-500/20 ring-inset"
                )}
            >
                {chatHistory.length === 0 ? (
                    <div className="h-full flex items-center justify-center opacity-40">
                        <div className="text-center">
                            <div className="w-12 h-12 bg-slate-100 rounded-full mx-auto mb-3 flex items-center justify-center">
                                <MessageSquare size={20} className="text-slate-400" />
                            </div>
                            <p className="text-xs text-slate-500">Ask Marcel anything</p>
                        </div>
                    </div>
                ) : (
                    chatHistory.map((msg, idx) => (
                        <ChatMessage
                            key={idx}
                            role={msg.role}
                            content={msg.content}
                            isTyping={msg.isTyping}
                        />
                    ))
                )}
            </div>

            {/* Compact Input Area */}
            <div className="p-3 border-t border-slate-100 dark:border-zinc-800 bg-slate-50/50 dark:bg-zinc-900/50">
                <div className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 rounded-xl p-2 flex items-end gap-2 focus-within:ring-2 focus-within:ring-indigo-500/30 transition-all shadow-sm">
                    <textarea
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="Type a message..."
                        className="flex-1 bg-transparent border-none outline-none text-slate-800 dark:text-slate-100 placeholder-slate-400 resize-none max-h-24 py-2 text-sm"
                        rows={1}
                        style={{ minHeight: '36px' }}
                    />
                    <button
                        onClick={handleSend}
                        disabled={!inputMessage.trim()}
                        className={cn(
                            "p-2 rounded-lg transition-all duration-200",
                            inputMessage.trim()
                                ? "bg-indigo-600 text-white hover:bg-indigo-700"
                                : "bg-slate-100 dark:bg-zinc-800 text-slate-300"
                        )}
                    >
                        <Send size={16} />
                    </button>
                </div>
            </div>
        </div>
    );

    const WorkspacePanel = () => (
        <div className="h-full bg-slate-50 dark:bg-zinc-900/30 flex flex-col relative">
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
                style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)', backgroundSize: '24px 24px' }}
            />

            <div className="flex-1 overflow-y-auto p-4 md:p-8 custom-scrollbar relative z-0 flex flex-col items-center">
                <div className="w-full max-w-5xl mx-auto bg-white dark:bg-zinc-950 shadow-sm border border-slate-200 dark:border-zinc-800 min-h-[calc(100vh-2rem)] rounded-xl overflow-hidden">
                    {/* Simulating a "Page" look */}
                    {activeArtifact ? (
                        activeArtifact
                    ) : (
                        <div className="h-full flex flex-col items-center justify-center text-slate-400 text-center p-12 min-h-[500px]">
                            <div className="w-20 h-20 rounded-3xl bg-slate-100 dark:bg-zinc-900 flex items-center justify-center mb-6 text-slate-300">
                                <Layout size={40} />
                            </div>
                            <h3 className="text-lg font-medium text-slate-600 dark:text-slate-300 mb-2">Workspace Empty</h3>
                            <p className="text-slate-500 max-w-xs mx-auto">Select a training module from the menu to begin.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );

    return (
        <div className="h-screen w-full bg-[#fdfcf9] dark:bg-zinc-950 text-slate-900 dark:text-slate-100 flex flex-col overflow-hidden font-sans selection:bg-indigo-100 dark:selection:bg-indigo-900/30">

            {/* Mobile Tab Navigation (Only visible on small screens) */}
            <div className="md:hidden flex border-b border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 z-20">
                <button
                    onClick={() => setActiveMobileTab('sidebar')}
                    className={cn("flex-1 py-3 text-sm font-medium border-b-2 transition-colors", activeMobileTab === 'sidebar' ? "border-indigo-500 text-indigo-600" : "border-transparent text-slate-500")}
                >
                    Menu
                </button>
                <button
                    onClick={() => setActiveMobileTab('chat')}
                    className={cn("flex-1 py-3 text-sm font-medium border-b-2 transition-colors", activeMobileTab === 'chat' ? "border-indigo-500 text-indigo-600" : "border-transparent text-slate-500")}
                >
                    Training
                </button>
                <button
                    onClick={() => setActiveMobileTab('canvas')}
                    className={cn("flex-1 py-3 text-sm font-medium border-b-2 transition-colors", activeMobileTab === 'canvas' ? "border-indigo-500 text-indigo-600" : "border-transparent text-slate-500")}
                >
                    Chat
                </button>
            </div>

            <div className="flex-1 flex overflow-hidden relative">

                {/* LEFT COMPONENT: 20% Sidebar */}
                <motion.aside
                    initial={false}
                    animate={{
                        width: activeMobileTab === 'sidebar' ? '100%' : isSidebarCollapsed ? '60px' : '20%',
                        x: activeMobileTab === 'sidebar' ? 0 : 0 // For mobile logic if overlapped
                    }}
                    className={cn(
                        "hidden md:block z-20 h-full relative",
                        // Mobile visibility logic managed by parent flex or absolute positioning could be used, 
                        // but relying on 'hidden md:block' for simplicity and conditional rendering for mobile.
                        activeMobileTab === 'sidebar' && "block absolute inset-0 md:relative md:inset-auto w-full"
                    )}
                >
                    <ContextSidebar />
                </motion.aside>

                {/* CENTER COMPONENT: Workspace (Flex-1) */}
                <main
                    className={cn(
                        "flex-1 flex flex-col h-full relative transition-all duration-300 overflow-hidden",
                        activeMobileTab === 'sidebar' && "hidden md:flex"
                    )}
                >
                    <WorkspacePanel />
                </main>

                {/* RIGHT COMPONENT: Chat (Fixed width sidebar) */}
                <aside
                    className={cn(
                        "hidden md:block w-[350px] h-full relative z-10 bg-white dark:bg-zinc-950 transition-all",
                        activeMobileTab === 'canvas' && "block absolute inset-0 md:relative md:inset-auto w-full"
                    )}
                >
                    <ChatPanel />
                </aside>

            </div>
        </div>
    );
};

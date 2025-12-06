import React from 'react';
import { BookOpen, FileText, ExternalLink } from 'lucide-react';
import { Button } from './Button';

export const ResourceView: React.FC = () => {
    const resources = [
        { title: "French Goat Wine List", type: "PDF", url: "#", description: "Complete bottle and glass list." },
        { title: "Dinner Menu", type: "PDF", url: "#", description: "Current seasonal dinner offerings." },
        { title: "Brunch Menu", type: "PDF", url: "#", description: "Sunday brunch menu." },
        { title: "Employee Handbook", type: "DOC", url: "#", description: "Policies and procedures." },
        { title: "POS Training Guide", type: "Link", url: "#", description: "Toast POS tutorial videos." },
    ];

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-3">
                <BookOpen className="text-indigo-600" />
                Resources Library
            </h2>
            <p className="text-gray-600 mb-8">Access important documents, menus, and training materials.</p>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {resources.map((res, idx) => (
                    <div key={idx} className="bg-white border hover:border-indigo-300 transition-colors p-5 rounded-xl shadow-sm hover:shadow-md flex flex-col">
                        <div className="flex items-start justify-between mb-3">
                            <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg">
                                <FileText size={24} />
                            </div>
                            <span className="text-xs font-semibold bg-gray-100 text-gray-600 px-2 py-1 rounded">
                                {res.type}
                            </span>
                        </div>
                        <h3 className="font-bold text-gray-900 mb-1">{res.title}</h3>
                        <p className="text-sm text-gray-500 mb-4 flex-1">{res.description}</p>
                        <Button variant="outline" className="w-full text-sm flex items-center justify-center gap-2">
                            Open <ExternalLink size={14} />
                        </Button>
                    </div>
                ))}
            </div>
        </div>
    );
};

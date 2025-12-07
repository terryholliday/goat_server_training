import React from 'react';

interface CertificateProps {
    recipientName: string;
    date: string;
    courseName?: string;
}

export const Certificate: React.FC<CertificateProps> = ({
    recipientName,
    date,
    courseName = "Server Training Course"
}) => {
    return (
        <div className="certificate-container bg-white p-8 overflow-hidden">
            <div className="border-8 border-double border-indigo-900 p-8 h-full relative">
                <div className="absolute top-0 left-0 w-24 h-24 border-t-8 border-l-8 border-indigo-900 rounded-tl-3xl"></div>
                <div className="absolute top-0 right-0 w-24 h-24 border-t-8 border-r-8 border-indigo-900 rounded-tr-3xl"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 border-b-8 border-l-8 border-indigo-900 rounded-bl-3xl"></div>
                <div className="absolute bottom-0 right-0 w-24 h-24 border-b-8 border-r-8 border-indigo-900 rounded-br-3xl"></div>

                <div className="text-center space-y-8 py-10">
                    <div className="space-y-2">
                        <h1 className="text-5xl font-serif text-indigo-900 tracking-wider font-bold uppercase">Certificate</h1>
                        <h2 className="text-2xl font-serif text-indigo-700 uppercase tracking-widest">of Completion</h2>
                    </div>

                    <div className="space-y-4">
                        <p className="text-gray-600 font-serif italic text-lg">This is to certify that</p>
                        <div className="border-b-2 border-indigo-900 pb-2 mx-12">
                            <span className="text-4xl font-cursive font-bold text-gray-900 font-serif">
                                {recipientName}
                            </span>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <p className="text-gray-600 font-serif italic text-lg">has successfully completed the</p>
                        <h3 className="text-3xl font-serif text-indigo-800 font-bold">
                            {courseName}
                        </h3>
                        <p className="text-gray-600 font-serif italic text-lg">at The French Goat</p>
                    </div>

                    <div className="flex justify-around items-end pt-12">
                        <div className="text-center">
                            <div className="border-b border-gray-400 w-48 mb-2"></div>
                            <p className="text-sm text-gray-500 uppercase tracking-wider">Date</p>
                            <p className="font-serif text-gray-700">{date}</p>
                        </div>

                        <div className="w-24 h-24 relative opacity-80">
                            {/* Seal Placeholder */}
                            <div className="w-full h-full rounded-full border-4 border-indigo-900 flex items-center justify-center bg-indigo-50">
                                <span className="text-indigo-900 font-bold text-xs uppercase text-center transform -rotate-12">
                                    Official<br />Certified
                                </span>
                            </div>
                        </div>

                        <div className="text-center">
                            <div className="border-b border-gray-400 w-48 mb-2">
                                <span className="font-cursive text-xl text-indigo-900">Marcel LeChevre</span>
                            </div>
                            <p className="text-sm text-gray-500 uppercase tracking-wider">Instructor</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

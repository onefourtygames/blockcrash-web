import React, { useEffect, useState } from 'react';
import legalContent from '../data/legal_content.json';

const Terms: React.FC = () => {
    const [content, setContent] = useState<string>('Loading...');

    useEffect(() => {
        const text = (legalContent as any)['TERMS OF USE.pdf'] || (legalContent as any)['TÉRMINOS DE USO (1).pdf'] || 'Content not found.';
        setContent(text);
    }, []);

    return (
        <div className="max-w-4xl mx-auto py-12 px-4">
            <div className="glass-panel p-8 md:p-12 animate-fade-in-up">
                <h1 className="text-3xl font-bold mb-6 text-white">Terms of Use</h1>
                <div className="prose prose-invert prose-sm max-w-none text-gray-400 whitespace-pre-wrap font-mono">
                    {content}
                </div>
            </div>
        </div>
    );
};

export default Terms;

import React, { useEffect, useState } from 'react';
// import { useTranslation } from 'react-i18next'; // Used for title
import legalContent from '../data/legal_content.json';

const About: React.FC = () => {
    const [content, setContent] = useState<string>('Loading...');

    useEffect(() => {
        // Simple logic to pick EN or ES based on some logic, or just display raw for now
        // The PDF names are 'About Us (1).pdf' (EN?) and 'Sobre Nosotros.pdf' (ES)
        // We will improve this selector later.
        const text = (legalContent as any)['About Us (1).pdf'] || (legalContent as any)['Sobre Nosotros.pdf'] || 'Content not found.';
        setContent(text);
    }, []);

    return (
        <div className="max-w-4xl mx-auto py-12 px-4">
            <div className="glass-panel p-8 md:p-12 animate-fade-in-up">
                <h2 className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                    About One Fourty Games
                </h2>
                <div className="prose prose-invert prose-lg max-w-none text-gray-300 whitespace-pre-line">
                    {content}
                </div>
            </div>
        </div>
    );
};

export default About;

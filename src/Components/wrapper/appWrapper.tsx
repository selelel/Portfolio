import React, { useEffect } from 'react';
import appConfig from '../../config/appConfig';

const AppWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    useEffect(() => {
        document.title = appConfig.title!;

        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', appConfig.description!);
        } else {
            const newMetaDescription = document.createElement('meta');
            newMetaDescription.name = 'description';
            newMetaDescription.content = appConfig.description!;
            document.head.appendChild(newMetaDescription);
        }

        const setOrCreateMetaTag = (property: string, content: string) => {
            let metaTag = document.querySelector(`meta[property="${property}"]`);
            if (metaTag) {
                metaTag.setAttribute('content', content);
            } else {
                metaTag = document.createElement('meta');
                metaTag.setAttribute('property', property);
                metaTag.setAttribute('content', content);
                document.head.appendChild(metaTag);
            }
        };

        setOrCreateMetaTag('og:title', appConfig.title!);
        setOrCreateMetaTag('og:description', appConfig.description!);
        setOrCreateMetaTag('og:image', '%PUBLIC_URL%/logo192.png');
        setOrCreateMetaTag('og:url', window.location.href);
    }, []);

    if (metaDescription) {
        metaDescription.setAttribute('content', appConfig.description!);
    } else {
        const newMetaDescription = document.createElement('meta');
        newMetaDescription.name = 'description';
        newMetaDescription.content = appConfig.description!;
        document.head.appendChild(newMetaDescription);
    }
    
    return <>{children}</>;
};

export default AppWrapper;

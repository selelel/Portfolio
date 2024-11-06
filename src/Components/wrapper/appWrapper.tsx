import React, { useEffect } from 'react';
import appConfig from '../../config/appConfig';

const AppWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    useEffect(() => {
        console.log(appConfig.title)
        document.title = appConfig.title!;

        const metaDescription = document.querySelector(
            'meta[name="description"]'
        );

        if (metaDescription) {
            metaDescription.setAttribute('content', appConfig.description!);
        } else {
            const newMetaDescription = document.createElement('meta');
            newMetaDescription.name = 'description';
            newMetaDescription.content = appConfig.description!;
            document.head.appendChild(newMetaDescription);
        }
    }, []);

    return <>{children}</>;
};

export default AppWrapper;
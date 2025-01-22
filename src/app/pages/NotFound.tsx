import React from 'react';

const NotFound: React.FC = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="text-center">
                <h1 className="text-6xl font-bold mb-4">404</h1>
                <p className="text-2xl">Page Not Found</p>
            </div>
        </div>
    );
};

export default NotFound;

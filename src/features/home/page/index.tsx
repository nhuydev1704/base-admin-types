import React from 'react';
import HomeService from '../service';

const HomePage: React.FC<any> = () => {
    React.useEffect(() => {
        (async () => {
            const res = await HomeService.get();
            console.log('🚀 ~ file: index.tsx ~ line 8 ~ res', res);
        })();
    }, []);

    return <div>HomePage</div>;
};

export default HomePage;

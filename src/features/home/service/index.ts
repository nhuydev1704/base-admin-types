import axiosClient from '~/api/axiosClient';

const HomeService = {
    get: () => {
        const url = '/todos';
        return axiosClient.get(url);
    },
};

export default HomeService;

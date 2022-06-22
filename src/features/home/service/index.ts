import axiosClient from '~/api/axiosClient';
export const data = [
    {
        id: 1457690400,
        name: 'Nguyễn Như Ý 1',
        thumb: 'https://via.placeholder.com/150x150',
        email: '1@example.com',
        phone: '+1-215-659-1',
        designation: 'CEO',
    },
    {
        id: 1457690401,
        name: 'Nguyễn Như Ý 2',
        thumb: 'https://via.placeholder.com/150x150',
        email: 'g2@example.com',
        phone: '+1-215-745-2',
        designation: 'CFO',
    },
    {
        id: 1457690402,
        name: 'Nguyễn Như Ý 3',
        thumb: 'https://via.placeholder.com/150x150',
        email: '3@example.com',
        phone: '+1-215-745-3',
        designation: 'CFO',
    },
    {
        id: 1457690403,
        name: 'Nguyễn Như Ý 4',
        thumb: 'https://via.placeholder.com/150x150',
        email: '4@example.com',
        phone: '+1-215-745-4',
        designation: 'CFO',
    },
];

const HomeService = {
    get: () => {
        const url = '/todos';
        return axiosClient.get(url);
    },
};

export default HomeService;

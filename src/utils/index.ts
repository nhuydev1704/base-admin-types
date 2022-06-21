import { notification } from 'antd';

type NotificationType = 'success' | 'info' | 'warning' | 'error';

export const Notification = (status: NotificationType, msg: any) => {
    if (status !== 'error') {
        notification[status]({
            message: msg,
        });
    } else {
        notification[status]({
            message: msg.response.data.message,
        });
    }
};

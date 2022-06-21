import { UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Button, Menu } from 'antd';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

interface IProps {
    collapsed?: boolean;
    handleCollapse?: () => void;
}

const SidebarContent: React.FC<IProps> = ({ collapsed, handleCollapse }) => {
    const [selectedKeys, setSelectedKeys] = React.useState('/');

    const navigate = useNavigate();
    const location = useLocation();

    React.useEffect(() => {
        setSelectedKeys(location.pathname);
    }, [location.pathname]);

    return (
        <>
            <Menu
                theme="dark"
                mode="inline"
                selectedKeys={[selectedKeys]}
                onClick={(e) => {
                    setSelectedKeys(e.key);
                    navigate(e.key);
                }}
                items={[
                    {
                        key: '/',
                        icon: <VideoCameraOutlined />,
                        label: 'Trang chủ',
                    },
                    {
                        key: '/crm',
                        icon: <VideoCameraOutlined />,
                        label: 'Crm',
                        children: [
                            {
                                key: '/crm/employee',
                                icon: <UserOutlined />,
                                label: 'Nhân viên',
                            },
                        ],
                    },
                ]}
            />
            <Button
                onClick={() => {
                    localStorage.removeItem('isLogged');
                    window.location.reload();
                }}
                type="primary"
            >
                Đăng xuất
            </Button>
        </>
    );
};

export default SidebarContent;

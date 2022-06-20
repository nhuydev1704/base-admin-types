import { MenuFoldOutlined, MenuUnfoldOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu, SiderProps } from 'antd';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../assets/images/logo.png';

interface IProps {
    collapsed: boolean;
    handleCollapse: () => void;
}

const LayoutSidebar: React.FunctionComponent<SiderProps> = styled(Layout.Sider)`
    max-width:${(props) => (props.collapsed ? '' : 'none !important')}};
    min-width: ${(props) => (props.collapsed ? '' : '10px !important')}};
    flex: ${(props) => (props.collapsed ? '' : '0 0 auto !important')}};
    width: ${(props) => (props.collapsed ? '' : '280px !important')}}; 
`;

const Wrapper = styled.div`
    display: flex;
    align-items: flex-end;
    padding: 18px 0 18px 30px;
    background-color: #002447;
    min-height: 76px;
`;

const WrapIcon = styled.div`
    & > * {
        color: #fff !important;
        font-size: 20px;
    }
`;

const ImageLogo = styled.img`
    width: 140px;
    height: 40px;
    padding-left: 20px;
`;

const AppSidebar: React.FC<IProps> = ({ collapsed, handleCollapse }) => {
    const [selectedKeys, setSelectedKeys] = React.useState('/');

    const navigate = useNavigate();
    const location = useLocation();

    React.useEffect(() => {
        setSelectedKeys(location.pathname);
    }, [location.pathname]);

    return (
        <LayoutSidebar trigger={null} collapsible collapsed={collapsed}>
            <Wrapper>
                <WrapIcon>
                    {collapsed ? (
                        <MenuUnfoldOutlined onClick={handleCollapse} />
                    ) : (
                        <MenuFoldOutlined onClick={handleCollapse} />
                    )}
                </WrapIcon>
                {collapsed ? <></> : <ImageLogo src={logo} alt="logo" />}
            </Wrapper>
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
        </LayoutSidebar>
    );
};

export default React.memo(AppSidebar);

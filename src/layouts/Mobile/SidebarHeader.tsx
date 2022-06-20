import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Drawer, DrawerProps } from 'antd';
import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import SidebarContent from '../Sidebar/SidebarContent';

interface IWrapIcon {
    color?: string;
}

const WrapIcon = styled.div<IWrapIcon>`
    cursor: pointer;
    display: flex;
    align-items: center;
    & > * {
        color: ${(props) => props.color};
        font-size: 20px;
    }
`;

const DrawerStyled: React.FunctionComponent<DrawerProps> = styled(Drawer)`
    & .ant-drawer-body {
        padding: 0 !important;
        background-color: #001529;
    }
    & .ant-drawer-wrapper-body,
    & .ant-drawer-content,
    & .ant-drawer-content-wrapper {
        width: 280px !important;
    }
`;

const HeaderSidebar = styled.div`
    display: flex;
    align-items: center;
    height: 46px;
    background-color: #002447;
    color: #f1f1f1;
    padding: 0 20px;
`;

const SidebarHeader = () => {
    const [isDrawer, setIsDrawer] = React.useState(false);

    const location = useLocation();

    React.useEffect(() => {
        setIsDrawer(false);
    }, [location.pathname]);

    return (
        <div>
            <WrapIcon onClick={() => setIsDrawer(!isDrawer)}>
                {isDrawer ? <MenuFoldOutlined color="black" /> : <MenuUnfoldOutlined color="black" />}
            </WrapIcon>
            <DrawerStyled placement="left" closable={false} onClose={() => setIsDrawer(false)} visible={isDrawer}>
                <HeaderSidebar>
                    <WrapIcon color="white" onClick={() => setIsDrawer(!isDrawer)}>
                        <MenuUnfoldOutlined />
                    </WrapIcon>
                </HeaderSidebar>
                <SidebarContent />
            </DrawerStyled>
        </div>
    );
};

export default SidebarHeader;

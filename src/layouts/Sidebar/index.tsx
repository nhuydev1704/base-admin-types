import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Layout, SiderProps } from 'antd';
import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/images/logo.png';
import SidebarContent from './SidebarContent';

interface IProps {
    collapsed: boolean;
    handleCollapse: () => void;
}

const LayoutSidebar: React.FunctionComponent<SiderProps> = styled(Layout.Sider)`
    max-width:${(props) => (props.collapsed ? '' : 'none !important')}};
    min-width: ${(props) => (props.collapsed ? '' : '10px !important')}};
    flex: ${(props) => (props.collapsed ? '' : '0 0 auto !important')}};
    width: ${(props) => (props.collapsed ? '' : '280px !important')}}; 
    @media(max-width: 768px) {
        width: 0 !important;
        max-width: 0 !important;
        min-width: 0 !important;
        overflow: hidden;
      }
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
            <SidebarContent collapsed={collapsed} handleCollapse={handleCollapse} />
        </LayoutSidebar>
    );
};

export default React.memo(AppSidebar);

import React from 'react';
import { Layout, LayoutProps } from 'antd';
import AppSidebar from './Sidebar';
import styled from 'styled-components';
import useWindowSize from '../hooks/useWindowSize';
import SidebarHeader from './Mobile/SidebarHeader';

const LayoutContainer: React.FunctionComponent<LayoutProps> = styled(Layout)`
    height: 100vh;
`;

const LayoutContent: React.FunctionComponent<LayoutProps> = styled(Layout.Content)`
    overflow-y: auto;
    max-height: 100vh;
`;

interface IWrapChildrenStyled {
    isMobile: boolean;
}

const WrapChildren = styled.div<IWrapChildrenStyled>`
    background-color: #fff;
    min-height: ${(props) => (props.isMobile ? 'calc(100vh - 129px)' : 'calc(100vh - 69px)')};
    padding: 20px;
`;

const HeaderIsMobile = styled.div`
    display: flex;
    align-items: center;
    padding: 0 30px;
    height: 60px;
    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
    -moz-box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
    -webkit-box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
    z-index: 1;
`;

const AppLayout: React.FC<any> = ({ children }) => {
    const { width } = useWindowSize();

    const [collapsed, setCollapsed] = React.useState(false);

    const handleCollapse = React.useCallback(() => {
        setCollapsed(!collapsed);
    }, [collapsed]);

    return (
        <LayoutContainer>
            <AppSidebar collapsed={collapsed} handleCollapse={handleCollapse} />
            <Layout>
                {!isNaN(width) && width < 768 ? (
                    <HeaderIsMobile>
                        <SidebarHeader />
                    </HeaderIsMobile>
                ) : (
                    <></>
                )}
                <LayoutContent>
                    <WrapChildren isMobile={!isNaN(width) && width < 768}>{children}</WrapChildren>
                    <Layout.Footer>
                        <div>
                            <div>Windsoft by NNY - 2022</div>
                        </div>
                    </Layout.Footer>
                </LayoutContent>
            </Layout>
        </LayoutContainer>
    );
};

export default React.memo(AppLayout);

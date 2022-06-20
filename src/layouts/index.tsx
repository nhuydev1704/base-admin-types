import React from 'react';
import { Layout, LayoutProps } from 'antd';
import AppSidebar from './Sidebar';
import styled from 'styled-components';

const LayoutContainer: React.FunctionComponent<LayoutProps> = styled(Layout)`
    height: 100vh;
`;

const LayoutContent: React.FunctionComponent<LayoutProps> = styled(Layout.Content)`
    overflow-y: auto;
    max-height: 100vh;
`;

const WrapChildren = styled.div`
    background-color: #fff;
    min-height: calc(100vh - 69px);
    padding: 20px;
`;

const AppLayout: React.FC<any> = ({ children }) => {
    const [collapsed, setCollapsed] = React.useState(false);

    const handleCollapse = React.useCallback(() => {
        setCollapsed(!collapsed);
    }, [collapsed]);

    return (
        <LayoutContainer>
            <AppSidebar collapsed={collapsed} handleCollapse={handleCollapse} />
            <Layout>
                <LayoutContent>
                    <WrapChildren>{children}</WrapChildren>
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

export default AppLayout;

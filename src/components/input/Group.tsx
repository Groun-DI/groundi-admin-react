import Flex from 'components/style/Flex';
import Typography from 'components/style/Typography';
import * as React from 'react';
import styled from 'styled-components';
import { theme } from 'styles/theme';

export type GroupProps = {
    label?: string;
    className?: string;
    size?: 'large' | 'small' | 'default';
    children?: React.ReactNode;
    style?: React.CSSProperties;
    onMouseEnter?: React.MouseEventHandler<HTMLSpanElement>;
    onMouseLeave?: React.MouseEventHandler<HTMLSpanElement>;
    onFocus?: React.FocusEventHandler<HTMLSpanElement>;
    onBlur?: React.FocusEventHandler<HTMLSpanElement>;
    prefixCls?: string;
    compact?: boolean;
}

const Group: React.FC<GroupProps> = ({ style, children, label }) => {
    return (
        <Flex align={theme.itemAlign.s} justify={theme.itemAlign.s}>
            <Typography.Regular weight={theme.fontWeight.SemiBold} align={theme.fontAlign.l}>{label}</Typography.Regular>
            <Flex layout={theme.layout.r} gap={5} style={style}>
                {children}
            </Flex>
        </Flex>
    )
};


export default Group;

import React, { ReactNode } from 'react';
import styled from '@emotion/native';

const StyledText = styled.Text`
    color: ${(props: any): string => props.theme.colors.primary[500]};
`;

type TextProps = {
    children: ReactNode;
};

const Text = ({ children, ...rest }: TextProps): any => (
    <StyledText {...rest}>{children}</StyledText>
);

export default Text;

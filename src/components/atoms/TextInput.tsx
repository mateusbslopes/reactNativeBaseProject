import React from 'react'
import styled from '@emotion/native'

const StyledTextInput = styled.TextInput`
    color: ${(props: any) => props.theme.colors.primary[500]};
    width: 200px;
    text-align: center;
`

const TextInputView = styled.View`
    border-bottom-width: 1px;
    border-bottom-color: ${(props: any) => props.theme.colors.primary[500]};
`

type TextInputProps = {
    value: string,
    onChangeText: (text: string) => void,
    style?: any
}

const TextInput = ({ value, onChangeText, style }: TextInputProps) => (
    <TextInputView>
        <StyledTextInput value={value} onChangeText={onChangeText} style={style} />
    </TextInputView>
)

export default TextInput

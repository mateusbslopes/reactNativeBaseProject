import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { CheckBox } from 'react-native-elements';
import styled from '@emotion/native';
import { setFirstName as setFirstNameAction } from '../../store/ducks/person';
import { setTheme as setThemeAction } from '../../store/ducks/theme';
import TextInput from '../atoms/TextInput';
import Text from '../atoms/Text';
import GitUser from '../organisms/GitUser';

const mapStateToProps = (state: any) => ({
    firstName: state.person.firstName,
    theme: state.theme.name,
});

const mapDispatchToProps = {
    setFirstName: (firstName: string) => setFirstNameAction(firstName),
    setTheme: (theme: string) => setThemeAction(theme),
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type FormProps = ConnectedProps<typeof connector>;

const Form = ({
    firstName,
    setFirstName,
    theme,
    setTheme,
}: FormProps) => (
    <Container>
        <Text>
            First Name:
            {firstName}
        </Text>
        <TextInput onChangeText={(text: string) => setFirstName(text)} value={firstName} style={{ color: 'red' }} />
        <TextInput onChangeText={(text: string) => setFirstName(text)} value={firstName} />
        <CheckBoxView>
            <Text>Apagar as luzes?</Text>
            <CheckBox
                checked={theme === 'dark'}
                onPress={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            />
        </CheckBoxView>
        <GitUser />
    </Container>
);

const Container = styled.View`
  background-color: ${(props: any) => props.theme.colors.ternary[500]};
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const CheckBoxView = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export default connector(Form);

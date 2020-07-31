import React, { useState } from 'react';
import { Button } from 'react-native';
import { connect, ConnectedProps } from 'react-redux';
import styled from '@emotion/native';
import Text from '../atoms/Text';
import TextInput from '../atoms/TextInput';
import { fetchUser as fetchUserAction } from '../../store/ducks/git-user';

const Container = styled.View`
    border: 1px ${(props: any): string => props.theme.colors.primary[500]} solid;
    padding: ${(props: any): string => props.theme.sizes[200]};
    border-radius: ${(props: any): string => props.theme.sizes[200]};
`;

const ButtonView = styled.View`
    margin-top: ${(props: any): string => props.theme.sizes[100]};
`;

const GitUser = ({ user, fetchUser }: GitUserProps): any => {
    const [username, setUsername] = useState(user.username);

    return (
        <Container>
            <Text>Search for the username!</Text>
            <TextInput value={username} onChangeText={(text: string): any => setUsername(text)} />
            <ButtonView>
                <Button title="Search" onPress={(): void => fetchUser(username)} />
            </ButtonView>
            <Text>
                Name:
                {user.name}
            </Text>
        </Container>
    );
};

const mapStateToProps = (state: any): any => ({
    user: state.gitUser,
});

const mapDispatchToProps = {
    fetchUser: (username: string): any => fetchUserAction(username),
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type GitUserProps = ConnectedProps<typeof connector>;

export default connector(GitUser);

import React, { useState } from 'react'
import { Button } from 'react-native'
import { connect, ConnectedProps } from 'react-redux'
import styled from '@emotion/native'
import Text from '../atoms/Text'
import TextInput from '../atoms/TextInput'
import { fetchUser as fetchUserAction } from '../../store/ducks/git-user'

const Container = styled.View`
    border: 1px ${(props: any) => props.theme.colors.primary[500]} solid;
    padding: ${(props: any) => props.theme.sizes[200]};
    border-radius: ${(props: any) => props.theme.sizes[200]};
`

const ButtonView = styled.View`
    margin-top: ${(props: any) => props.theme.sizes[100]};
`

const GitUser = ({ user, fetchUser }: GitUserProps) => {
    const [username, setUsername] = useState(user.username)

    return (
        <Container>
            <Text>Search for the username!</Text>
            <TextInput value={username} onChangeText={(text: string) => setUsername(text)} />
            <ButtonView>
                <Button title="Search" onPress={() => fetchUser(username)} />
            </ButtonView>
            <Text>
                Name:
                {user.name}
            </Text>
        </Container>
    )
}

const mapStateToProps = (state: any) => ({
    user: state.gitUser,
})

const mapDispatchToProps = {
    fetchUser: (username: string) => fetchUserAction(username),
}

const connector = connect(mapStateToProps, mapDispatchToProps)

type GitUserProps = ConnectedProps<typeof connector>

export default connector(GitUser)

import { connect, ConnectedProps } from 'react-redux'
import React from 'react'
import { ThemeProvider } from 'emotion-theming'
import themes from './theme'
import Form from './components/pages/Form'

const mapStateToProps = (state: any) => ({ themeName: state.theme.name })

const connector = connect(mapStateToProps)

type MainProps = ConnectedProps<typeof connector> & {
    themeName: string
}

const Main = ({ themeName }: MainProps) => {
    const theme: any = themes[themeName]
    return (
        <ThemeProvider theme={theme}>
            <Form />
        </ThemeProvider>
    )
}

export default connector(Main)

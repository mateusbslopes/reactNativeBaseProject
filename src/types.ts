export type Person = {
    firstName: string
}

export type Theme = {
    name: string
}

export type GitUser = {
    name?: string,
    username: string
}

export type Payload = {
    type: string
    payload: any
}

export type PersonPayload = Payload & {
    payload: Person
}

export type ThemePayload = Payload & {
    payload: Theme
}

export type GitUserPayload = Payload & {
    payload: GitUser
}

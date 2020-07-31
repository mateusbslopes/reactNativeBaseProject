export default class Api {
    static fetchUser(username: string) {
        return fetch(`https://api.github.com/users/${username}`).then(response => response.json())
    }
}

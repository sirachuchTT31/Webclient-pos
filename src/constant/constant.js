export default {
    Api: {
        baseUrl: 'http://localhost:3000/',
        options: {
            headers: {
                'content-type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, GET, PUT, PATCH, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
            },
        },
        googleClientId: '121301677108-m6cqfbrunqgej7pkip0d2ab6nhpqbbes.apps.googleusercontent.com'
    }

}
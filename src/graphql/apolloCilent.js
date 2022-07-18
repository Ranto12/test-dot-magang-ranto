import {InMemoryCache, ApolloClient} from '@apollo/client';

const client = new ApolloClient({
    uri: `https://dot-project-magang.hasura.app/v1/graphql`,
    headers:{
        "x-hasura-admin-secret": "H1ALf7tVZ3L87rtFhNLN0VCuVm7Q5TpBjmjXTZlWZLeIXOmtmJORGwy7L2hWPKCd"
    },
    cache: new InMemoryCache(),
});

export default client;
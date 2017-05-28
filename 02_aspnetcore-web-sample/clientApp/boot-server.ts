import {createServerRenderer} from  'aspnet-prerendering';

export default createServerRenderer(params => {
    return new Promise(function(resolve, reject){
        const html = `
        <h1>Hello world, from JS!</h1>
        <p>Current time in node: ${ new Date()} + </p>
        <p>URL:  ${ params.location.path } </p>
        <p>data (IsAdministator): ${params.data.isAdministator}</p>
        <p>Number of cookies: $ {params.data.cookies.length}</p>
        `;
        resolve({ html });
    })
});
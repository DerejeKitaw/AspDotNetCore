// const prerendering = require('aspnet-prerendering');

// module.exports = prerendering.createServerRenderer(function(params){
//     return new Promise (function (resolve, reject){
//         var result = "<h1>Hello world, from JS!</h1>"
//         + "<p>Current time in node: " + new Date() + "</p>"
//         + "<p>URL: " + params.location.path + "</p>" ;

//         resolve({ html: result });
//     })
// });
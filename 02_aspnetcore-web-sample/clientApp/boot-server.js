const prerendering = require('aspnet-prerendering');

module.exports = prerendering.createServerRenderer(function(param){
    return new Promise (function (resolve, reject){
        var result = "<h1>Hello world, from JS!</h1>";

        resolve({ html: result });
    })
});
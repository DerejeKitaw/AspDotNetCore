# Creating a Minimalistic ASP.NET Core Project

## Table of Contents

* [Available commands in aspdotnet core](#to-see-available-commands-in-aspdotnet-core)
* [Available commands from `dotnet new`](#available-commands-from-dotnet-new)
* [Run `dotnet web`](#run-dotnet-web)
* [Run `dotnet restore`](#run-dotnet-restore)
* [Add SpaServices](#add-spa-services)
* [Add npm package to run node in aspDotNet ](#create-npm-package)
* [Add Web Pack](#add-webpack)
* [Add tsConfig.json](#create-tsconfig-json)







## [To see available commands in aspdotnet core](#table-of-contents)

```bash
dotnet new
```
    
```bash

**dotnet new outputs:**

Templates                                     Short Name      Language      Tags          
------------------------------------------------------------------------------------------
Console Application                           console         [C#], F#      Common/Console
Class library                                 classlib        [C#], F#      Common/Library
Unit Test Project                             mstest          [C#], F#      Test/MSTest   
xUnit Test Project                            xunit           [C#], F#      Test/xUnit    
ASP.NET Core Empty                            web             [C#]          Web/Empty     
ASP.NET Core Web App                          mvc             [C#], F#      Web/MVC       
MVC ASP.NET Core with Angular                 angular         [C#]          Web/MVC/SPA   
MVC ASP.NET Core with Aurelia                 aurelia         [C#]          Web/MVC/SPA   
MVC ASP.NET Core with Knockout.js             knockout        [C#]          Web/MVC/SPA   
MVC ASP.NET Core with React.js                react           [C#]          Web/MVC/SPA   
MVC ASP.NET Core with React.js and Redux      reactredux      [C#]          Web/MVC/SPA   
MVC ASP.NET Core with Vue.js                  vue             [C#]          Web/MVC/SPA   
ASP.NET Core Web API                          webapi          [C#]          Web/WebAPI    
Solution File                                 sln                           Solution      

Examples:
    dotnet new mvc --auth None --framework netcoreapp1.1
    dotnet new xunit --framework netcoreapp1.1
    dotnet new --help
Derejes-MBP:02_aspnetcore-web-sample derejekitaw$ 
`

```

## [Available commands from `dotnet new`](#table-of-contents)
### Base on above output from `dotnet new` available dotnet commands are
```bash
dotnet new console
dotnet new classlib
dotnet new web
........etc
```

## [Run `dotnet web`](#table-of-contents)
```bash
dotnet new web
```

## [Run `dotnet restore`](#table-of-contents)
    This wll install all the newgate packages

## [Add SpaServices](#table-of-contents)
 
* Enable aspnet prerendering tag helper by adding SpaService [02_aspnetcore-web-sample.csproj](https://github.com/DerejeKitaw/AspDotNetCore/blob/master/02_aspnetcore-web-sample/02_aspnetcore-web-sample.csproj)

```bash
    <ItemGroup>
        <PackageReference Include="Microsoft.AspNetCore" Version="1.1.2" />
        <PackageReference Include="Microsoft.AspNetCore.Mvc" Version="1.1.3" />
        <PackageReference Include="Microsoft.AspNetCore.SpaServices" Version="1.1.0" />
        ** <PackageReference Include="Microsoft.AspNetCore.StaticFiles" Version="1.1.2" />
        <PackageReference Include="Microsoft.Extensions.Logging.Debug" Version="1.1.2" />
        <PackageReference Include="Microsoft.VisualStudio.Web.BrowserLink" Version="1.1.2" />
    </ItemGroup>
```
## [Create npm package](#table-of-contents)    
```bash
npm init -y  # y is to reply yess to all
npm install --save aspnet-prerendering  # install pre rendering and save it to the package.json
```


* Add Spa services in _ViewImports.cshtml
```bash
@addTagHelper *, Microsoft.AspNetCore.SpaServices
```
* Now let us use the pre renderer
In index.html
```bash
<div id="my-span" asp-prerender-module="clientApp/boot-server></div>
```
    This will through error for  `clientApp/boot-server` doesnt exist.

* add folder `clientApp/boot-server`[boot-server.js](https://github.com/DerejeKitaw/AspDotNetCore/blob/master/02_aspnetcore-web-sample/clientApp/boot-server.js)

```bash
const prerendering = require('aspnet-prerendering');

module.exports = prerendering.createServerRenderer(function(param){
    return new Promise (function (resolve, reject){
        var result = "<h1>Hello world, from JS!</h1>";

        resolve({ html: result });
    })
});
```


## [Add Webpack](#table-of-contents)
```bash
# Install webpack globaly
npm install -g webpack
# Create `webpack.config.js` file

# webpack --display-error-details
```
```bash
    const path = require('path');

    module.exports = {
        entry: { 'main-server': './clientApp/boot-server.ts' },
        resolve: {
            extensions: ['.js', '.ts']
        },
        module: {
            loaders: [
                {
                    test: /\.ts$/, loader: 'ts-loader'
                }
            ]
        },
        target: 'node',
        devtool: 'inline-source-map',
        output: {
            path: path.join(__dirname, './clientApp/dist'),
            filename: '[name].js',
            libraryTarget: 'commonjs'
        }
    };
```

## [Create tsconfig json](#table-of-contents) 

```bash
# Install typescript loader
npm install --save ts-loader typescript
# Create `tsconfig.json` file
```
```bash
    {
        "compilerOptions": {
            "moduleResolution": "node",
            "target": "es5",
            "sourceMap": true,
            "lib": [
                "es6","dom"
            ]
        },
        "exclude": [
            "bin","node_modules"
        ]
    }
```
```bash
# Create `boot-server.ts` file
```
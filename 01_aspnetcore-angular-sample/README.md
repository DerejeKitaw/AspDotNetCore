# AspDotNetCore
[Install AspDotNet](https://github.com/DerejeKitaw/AspDotNetCore/blob/master/README.md)

* To list all available commands in current installed DotNet run 
`Dotnet new`

Templates                                    | Short Name      | Language      Tags          
---                                          | ---             | ---
Console Application                           | console         | [C#], F#      Common/Console
Class library                                 | classlib        | [C#], F#      Common/Library
Unit Test Project                             | mstest          | [C#], F#      Test/MSTest   
xUnit Test Project                            | xunit           | [C#], F#      Test/xUnit    
ASP.NET Core Empty                            | web             | [C#]          Web/Empty     
ASP.NET Core Web App                          | mvc             | [C#], F#      Web/MVC       
MVC ASP.NET Core with Angular                 | angular         | [C#]          Web/MVC/SPA   
MVC ASP.NET Core with Aurelia                 | aurelia         | [C#]          Web/MVC/SPA   
MVC ASP.NET Core with Knockout.js             | knockout        | [C#]          Web/MVC/SPA   
MVC ASP.NET Core with React.js                | react           | [C#]          Web/MVC/SPA   
MVC ASP.NET Core with React.js and Redux      | reactredux      | [C#]          Web/MVC/SPA   
MVC ASP.NET Core with Vue.js                  | vue             | [C#]          Web/MVC/SPA   
ASP.NET Core Web API                          | webapi          | [C#]          Web/WebAPI    
Solution File                                 | sln      


## To create new dotnet application with Angular

# 1 Create new application

`dotnet new angular`

which is equivalent to 

`yo aspnetcore-spa` and select Angular in yeoman generator.

# 2 Restore dotnet dependency
`dotnet restore`

# 3 Install all node dependency
`npm install`

# 4 Start app
`dotnet run`

# 5 Set up Development inviroment

    For window in power shell
        $Env:ASPNETCORE_ENVIRONMENT = "Development"
    For window in command line
        setx ASPNETCORE_ENVIRONMENT "Development"
    For mac in command line
        export ASPNETCORE_ENVIRONMENT "Development"

## 5a To check environment
    
        echo %ASPNETCORE_ENVIRONMENT%

# 6 Set up Development inviroment (Prefered way)
    
    Create hosting.json file
    ```bash
    {
    "server.url": "http://localhost:5000",
    "environment": "Development"
    }
    ```
    update program.cs to use hosting.json
    ```bash
    using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;

namespace _01_aspnetcore_angular_sample
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var config = new ConfigurationBuilder()
            .SetBasePath(Directory.GetCurrentDirectory())
            # optional true for development
            .AddJsonFile("hosting.json", optional: true)
            .Build();

            var host = new WebHostBuilder()
                .UseKestrel()
                #let to check all of config befor anthing happen
                .UseConfiguration(config) 
                .UseContentRoot(Directory.GetCurrentDirectory())
                .UseIISIntegration()
                .UseStartup<Startup>()
                .Build();

            host.Run();
        }
    }
}
    ```
# 7 [Install DotNetTools](https://github.com/aspnet/DotNetTools)
  insert the following in [01_aspnetcore-angular-sample.csproj](https://github.com/DerejeKitaw/AspDotNetCore/blob/master/01_aspnetcore-angular-sample/01_aspnetcore-angular-sample.csproj)
  
  ```bash
  <ItemGroup>
        <DotNetCliToolReference Include="Microsoft.DotNet.Watcher.Tools" Version="1.0.0" />
  </ItemGroup>
  ```

  dotnet restore

  Now insted of dotnet run use dotnet watch run

#8 Add less

    * Install less loader
    ```bash
        npm install --save less-loader less
    ```
    * Update webpack.config.js
    ```bash
     module: {
            rules: [
                { test: /\.ts$/, include: /ClientApp/, use: ['awesome-typescript-loader?silent=true', 'angular2-template-loader'] },
                { test: /\.html$/, use: 'html-loader?minimize=false' },
                { test: /\.css$/, use: [ 'to-string-loader', isDevBuild ? 'css-loader' : 'css-loader?minimize' ] },
                { test: /\.(png|jpg|jpeg|gif|svg)$/, use: 'url-loader?limit=25000' }
            ]
        }
    ```
    ** add less-loader
    ```bash
    module: {
            rules: [
                { test: /\.ts$/, include: /ClientApp/, use: ['awesome-typescript-loader?silent=true', 'angular2-template-loader'] },
                { test: /\.html$/, use: 'html-loader?minimize=false' },
                { test: /\.css$/, use: [ 'to-string-loader', isDevBuild ? 'css-loader' : 'css-loader?minimize' ] },
                { test: /\.less/, include:  /ClientApp/, loader : 'raw-loader!less-loader'},
                { test: /\.(png|jpg|jpeg|gif|svg)$/, use: 'url-loader?limit=25000' }
            ]
        }
    ```
    * update css to less
    ```bash
    @Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less']
})
    ```
    * add less syntax for checking
    ```bash
    @paddingTop: 50px;

@media (max-width: 767px) {
    /* On small screens, the nav menu spans the full width of the screen. Leave a space for it. */
    .body-content {
        padding-top: @paddingTop;
    }
}

    ```
    * run `dotnet run` less should work
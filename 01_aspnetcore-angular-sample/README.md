# AspDotNetCore
Please make sure install [https://github.com/DerejeKitaw/AspDotNetCore/blob/master/README.md]




`Dotnet new`

    will give all available commands 
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
Solution File                                 sln      


To create new dotnet application with Angular
#1 Create new application

`dotnet new angular`

which is equivalent to 

`yo aspnetcore-spa` and select Angular in yeoman generator.

#2 Restore dotnet dependency
`dotnet restore`

#3 install all node dependency
`npm install`

#4 Start app
`dotnet run`

#5 Set up Development inviroment

    For window in power shell
        $Env:ASPNETCORE_ENVIRONMENT = "Development"
    For window in command line
        setx ASPNETCORE_ENVIRONMENT "Development"
    For mac in command line
        export ASPNETCORE_ENVIRONMENT "Development"

##5a To check environment
    
        echo %ASPNETCORE_ENVIRONMENT%

#6 Set up Development inviroment (Prefered way)
    Create hosting.json file
    update program.cs to use hosting.json
    
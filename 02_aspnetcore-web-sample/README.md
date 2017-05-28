# Creating a Minimalistic ASP.NET Core Project

## Table of Contents

* [Available commands in aspdotnet core](#to-see-available-commands-in-aspdotnet-core)
* [Available commands from `dotnet new`](#available-commands-from-dotnet-new)
* [Run `dotnet web`](#run-dotnet-web)
* [Run `dotnet restore`](#run-dotnet-restore)






## To see available commands in aspdotnet core

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

## Available commands from `dotnet new`

### Base on above output from `dotnet new` available dotnet commands are
```bash
dotnet new console
dotnet new classlib
dotnet new web
........etc
```

## Run `dotnet web`

```bash
dotnet new web
```

## Run `dotnet restore`

    This wll install all the dependency

# AspDotNetCore
## Install dotnet
https://www.microsoft.com/net/core#macos

`brew update`
`brew install openssl`
`mkdir -p /usr/local/lib
ln -s /usr/local/opt/openssl/lib/libcrypto.1.0.2l.dylib /usr/local/lib/
ln -s /usr/local/opt/openssl/lib/libssl.1.0.2l.dylib /usr/local/lib/

`run: ulimit -n 512

`sudo dotnet new --install Microsoft.AspNetCore.SpaTemplates::*

npm install -g yo generator-aspnetcore-spa`
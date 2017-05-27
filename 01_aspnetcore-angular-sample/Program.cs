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
            // optional true for development
            .AddJsonFile("hosting.json", optional: true)
            .Build();

            var host = new WebHostBuilder()
                .UseKestrel()
                .UseConfiguration(config) //let to check all of config befor anthing happen
                .UseContentRoot(Directory.GetCurrentDirectory())
                .UseIISIntegration()
                .UseStartup<Startup>()
                .Build();

            host.Run();
        }
    }
}

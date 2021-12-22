using Microsoft.Azure.Cosmos.Fluent;
using Microsoft.Azure.Functions.Extensions.DependencyInjection;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;

using RedirectMe_Functions;
using RedirectMe_Functions.Services;

using System.IO;

[assembly: FunctionsStartup(typeof(Startup))]
namespace RedirectMe_Functions
{
    public class Startup : FunctionsStartup
    {
        public override void Configure(IFunctionsHostBuilder builder)
        {
            builder.Services.AddLogging(loggingBuilder =>
            {
                loggingBuilder.AddFilter(level => true);
            });

            var config = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("local.settings.json", optional: true, reloadOnChange: true)
                .AddEnvironmentVariables()
                .Build();

            builder.Services.AddSingleton<IConfiguration>(config);
            builder.Services.AddTransient<IRedirectService, RedirectService>();

            builder.Services.AddSingleton((s) =>
            {
                // Provide your own primary connection key
                CosmosClientBuilder cosmosClientBuilder = new CosmosClientBuilder(config["ConnectionString"]);

                return cosmosClientBuilder.WithConnectionModeGateway()
                    .Build();
            });
        }
    }
}

using Microsoft.Azure.Cosmos.Fluent;
using Microsoft.Azure.Functions.Extensions.DependencyInjection;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;

using RedirectMe_Functions;
using RedirectMe_Functions.Services;

using Sentry.AspNetCore;

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
                .AddJsonFile("app.settings.json", optional: false, reloadOnChange: true)
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

            // Configure Sentry
            builder.Services.AddSentry().AddSentryOptions(sentry =>
            {
                sentry.Dsn = config.GetValue(typeof(string), "Sentry:Dsn")?.ToString();
                sentry.Debug = true;
                // Set TracesSampleRate to 1.0 to capture 100% of transactions for performance monitoring.
                sentry.TracesSampleRate = 1.0;
            });
        }
    }
}

namespace RedirectMe_Functions.Services
{
    using Microsoft.Azure.Cosmos;
    using Microsoft.Extensions.Configuration;
    using Microsoft.Extensions.Logging;

    using RedirectMe_Functions.Constants;
    using RedirectMe_Functions.Dtos;
    using RedirectMe_Functions.Helpers;
    using RedirectMe_Functions.Models;

    using System;
    using System.Threading.Tasks;

    class RedirectService : IRedirectService
    {
        private readonly ILogger _logger;
        private readonly CosmosClient _cosmosClient;

        private readonly Database _database;
        private readonly Container _redirects;

        public RedirectService(ILogger<IRedirectService> logger,
            CosmosClient cosmosClient)
        {
            _logger = logger;
            _cosmosClient = cosmosClient;

            _database = _cosmosClient.GetDatabase(DbConstants.Database);
            _redirects = _database.GetContainer(DbConstants.RedirectContainer);
        }

        public Task<RedirectDto> GetRedirect(RedirectDto redirectDto)
        {
            throw new NotImplementedException();
        }

        public async Task<RedirectDto> CreateRedirect(RedirectDto redirectDto)
        {
            var idHelper = new IdHelper();

            var redirect = new Redirect
            {
                Id = Guid.NewGuid(),
                ShortCode = idHelper.GenerateNewId(4),
                Url = redirectDto.Url,
                CreationDate = DateTime.UtcNow,
                NumberOfTimesUsed = 0
            };

            try
            {
                await _redirects.CreateItemAsync(redirect, new PartitionKey(redirect.ShortCode));
            } 
            catch (Exception ex)
            {
                _logger.LogError($"Couldn't insert item. Exception thrown: ${ex.Message}");
                throw new ApplicationException(ex.Message);
            }

            redirectDto.ShortCode = redirect.ShortCode;

            return redirectDto;
        }
    }
}

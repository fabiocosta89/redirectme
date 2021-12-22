namespace RedirectMe_Functions.Services
{
    using Microsoft.Azure.Cosmos;
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

        public async Task<RedirectDto> GetRedirect(RedirectDto redirectDto)
        {
            var partitionKey = new PartitionKey(redirectDto.Id);
            var itemResponse = await _redirects.ReadItemAsync<Redirect>(redirectDto.Id, partitionKey);
            var redirect = itemResponse.Resource;
            redirectDto.Url = redirect.Url;

            // update redirection usage
            redirect.NumberOfTimesUsed++;
            redirect.LastUsedDate = DateTime.UtcNow;
            await _redirects.UpsertItemAsync<Redirect>(redirect, partitionKey);

            return redirectDto;
        }

        public async Task<RedirectDto> CreateRedirect(RedirectDto redirectDto)
        {
            if (string.IsNullOrWhiteSpace(redirectDto.Url)) return null;

            string url = UrlHelper.ValidateUrl(redirectDto.Url);

            var redirect = new Redirect
            {
                Id = new IdHelper().GenerateNewId(RedirectConstants.UrlCodeLenght),
                Url = url,
                CreationDate = DateTime.UtcNow,
                NumberOfTimesUsed = 0
            };

            try
            {
                await _redirects.CreateItemAsync(redirect, new PartitionKey(redirect.Id));
            } 
            catch (Exception ex)
            {
                _logger.LogError($"Couldn't insert item. Exception thrown: ${ex.Message}");
                throw new ApplicationException(ex.Message);
            }

            redirectDto.Id = redirect.Id;

            return redirectDto;
        }
    }
}

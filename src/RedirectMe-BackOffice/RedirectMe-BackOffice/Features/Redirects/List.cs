namespace RedirectMe_BackOffice.Features.Redirects;

using MediatR;

using Microsoft.Azure.Cosmos;
using Microsoft.Azure.Cosmos.Linq;

using RedirectMe_BackOffice.Domain;
using RedirectMe_BackOffice.Infrastructure;

public class List
{
    public record Query : IRequest<RedirectsEnvelope>;

    public class QueryHandle : IRequestHandler<Query, RedirectsEnvelope>
    {
        private readonly Container _redirectContainer;

        public QueryHandle(CosmosClient cosmosClient) 
        {
            _redirectContainer = CosmosDb.GetRedirectContainer(cosmosClient);
        }

        public async Task<RedirectsEnvelope> Handle(Query message, CancellationToken cancellationToken) 
        {
            var query = _redirectContainer.GetItemLinqQueryable<Redirect>();
            var iterator = query.ToFeedIterator();
            var results = await iterator.ReadNextAsync(cancellationToken);

            return new RedirectsEnvelope
            {
                Redirects = results.ToList() ?? new List<Redirect>()
            };
        }
    }
}

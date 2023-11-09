namespace RedirectMe_BackOffice.Infrastructure;

using Microsoft.Azure.Cosmos;

public static class CosmosDb
{
    private const string Database = "RedirectMe";
    private const string RedirectContainer = "Redirects";

    // Retrieve Redirect contained from the cosmos client
    public static Container GetRedirectContainer(CosmosClient cosmosClient)
    {
        Database database = cosmosClient.GetDatabase(Database);
        return database.GetContainer(RedirectContainer);
    }
}

namespace RedirectMe_Functions.Funtions
{
    using Microsoft.AspNetCore.Http;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.Azure.WebJobs;
    using Microsoft.Azure.WebJobs.Extensions.Http;
    using Microsoft.Extensions.Logging;

    using Newtonsoft.Json;

    using RedirectMe_Functions.Dtos;
    using RedirectMe_Functions.Services;

    using System;
    using System.IO;
    using System.Threading.Tasks;

    public class GetRedirect
    {
        private readonly ILogger<GetRedirect> _logger;
        private readonly IRedirectService _redirectService;

        public GetRedirect(ILogger<GetRedirect> logger,
            IRedirectService redirectService)
        {
            _logger = logger;
            _redirectService = redirectService;
        }

        [FunctionName(nameof(GetRedirect))]
        public async Task<IActionResult> Run(
            [HttpTrigger(AuthorizationLevel.Anonymous, "post", Route = null)] HttpRequest req)
        {
            IActionResult result;

            try
            {
                var incomingRequest = await new StreamReader(req.Body).ReadToEndAsync();

                var redirectRequest = JsonConvert.DeserializeObject<RedirectDto>(incomingRequest);

                RedirectDto redirectDto = await _redirectService.GetRedirect(redirectRequest);

                result = new OkObjectResult(redirectDto.Url);
            }
            catch (Exception ex)
            {
                _logger.LogError($"Internal Server Error. Exception: {ex.Message}");
                result = new StatusCodeResult(StatusCodes.Status404NotFound);
            }

            return result;
        }
    }
}

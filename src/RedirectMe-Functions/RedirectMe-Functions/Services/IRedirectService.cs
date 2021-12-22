namespace RedirectMe_Functions.Services
{
    using RedirectMe_Functions.Dtos;

    using System.Threading.Tasks;

    public interface IRedirectService
    {
        /// <summary>
        /// Get Redirect Url from the Id 
        /// </summary>
        /// <param name="redirectDto"></param>
        /// <returns></returns>
        Task<RedirectDto> GetRedirect(RedirectDto redirectDto);

        Task<RedirectDto> CreateRedirect(RedirectDto redirectDto);
    }
}

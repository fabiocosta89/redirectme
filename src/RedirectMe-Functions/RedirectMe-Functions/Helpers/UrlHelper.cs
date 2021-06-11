namespace RedirectMe_Functions.Helpers
{
    public static class UrlHelper
    {
        public static string ValidateUrl(string url)
        {
            if (url.Contains("https://") || url.Contains("http://"))
                return url;

            return $"http://{url}";
        }
    }
}

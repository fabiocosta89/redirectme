namespace RedirectMe_Functions.Helpers
{
    using System;
    using System.Linq;

    public class IdHelper
    {
        private readonly Random Random = new Random();

        public string GenerateNewId(int length)
        {
            const string chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            return new string(Enumerable.Repeat(chars, length)
              .Select(s => s[Random.Next(s.Length)]).ToArray());
        }
    }
}

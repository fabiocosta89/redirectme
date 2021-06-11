namespace RedirectMe_Functions.Models
{
    using Newtonsoft.Json;

    using System;

    public class Redirect
    {
        [JsonProperty("id")]
        public Guid Id { get; set; }

        public string Url { get; set; }

        public string ShortCode { get; set; }

        public float NumberOfTimesUsed { get; set; }

        public DateTimeOffset CreationDate { get; set; }

        public DateTimeOffset? LastUsedDate { get; set; }
    }
}

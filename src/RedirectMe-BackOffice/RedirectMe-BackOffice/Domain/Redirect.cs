namespace RedirectMe_BackOffice.Domain;

using System.Text.Json.Serialization;

public class Redirect
{
    [JsonPropertyName("id")]
    public string Id { get; set; } = string.Empty;

    public string Url { get; set; } = string.Empty;

    public float NumberOfTimesUsed { get; set; }

    public DateTimeOffset CreationDate { get; set; }

    public DateTimeOffset? LastUsedDate { get; set; }
}

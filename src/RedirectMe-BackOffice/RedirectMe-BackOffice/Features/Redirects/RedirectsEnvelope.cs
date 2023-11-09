namespace RedirectMe_BackOffice.Features.Redirects;

using RedirectMe_BackOffice.Domain;

public class RedirectsEnvelope
{
    public List<Redirect> Redirects { get; set; } = new List<Redirect>();
}

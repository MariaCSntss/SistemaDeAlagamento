using Microsoft.AspNetCore.Mvc;

namespace backend.ModelsCustom
{
    public class HttpJSONResponse
    {
        public string message { get; set; }
        public object data { get; set; }

    }
}

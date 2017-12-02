using HMTCore2.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using SendGrid.Helpers.Mail;
using SendGrid;

namespace HMTCore2.Controllers.Api
{
    [Route("api/[controller]")]
    public class DefaultController : Controller
    {
        public DefaultController(IConfiguration configuration)
        {
            this.configuration = configuration;
        }

        public IConfiguration configuration;

        [HttpPost("{request}")]
        public IActionResult SendEmail([FromBody] Email request)
        {
            var Requester = $"<strong>Request from</strong>:<span> { request.Name }</span><br />";
            var PhoneNumber = $"<strong>Contact Phone Number</strong>:<span> { request.PhoneNumber }</span><br />";
            var ContactEmail = $"<strong>Contact Email</strong>:<span> { request.EmailAddress }</span><br />";
            var Message = $"<strong>Message</strong>:<span> { request.Message }</span>";

            var apiKey = System.Environment.GetEnvironmentVariable("SendGrid");
            var client = new SendGridClient(apiKey);
            var msg = new SendGridMessage()
            {
                From = new EmailAddress(request.EmailAddress, request.Name),
                Subject = "A New Appointment Inquiry from HealthyMindsTherapy.com.",
                HtmlContent = $"{ Requester + PhoneNumber + ContactEmail + Message  }"
            };
            msg.AddTo(new EmailAddress("Aburant@healthyminds-therapy.com", "Healthy Minds Therapy"));
            var response = client.SendEmailAsync(msg);


            return Ok("Message Sent");
        }
    }
}

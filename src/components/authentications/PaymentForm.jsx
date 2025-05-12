
const PaymentForm = () => {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer CHASECK-xxxxxxxxxxxxxxxx");
  myHeaders.append("Content-Type", "application/json");
  var raw = JSON.stringify({
    amount: "10",
    currency: "ETB",
    email: "abebech_bekele@gmail.com",
    first_name: "Bilen",
    last_name: "Gizachew",
    phone_number: "0912345678",
    tx_ref: "chewatatest-6669",
    callback_url: "https://webhook.site/077164d6-29cb-40df-ba29-8a00e59a7e60",
    return_url: "https://www.google.com/",
    "customization[title]": "Payment for my favourite merchant",
    "customization[description]": "I love online payments",
    "meta[hide_receipt]": "true",
  });
  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    window.location.href =
      "https://checkout.chapa.co/checkout/payment/cbgY5aIcB83aAIWBcaSj7s0w6FaAoEnaPNGrjSVEZdofc";
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white rounded-2xl">
      <form
        onSubmit={handleSubmit}
        className="bg-green-400 p-6 rounded-xl shadow-md space-y-4"
      >
       
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Abebe terefe"
              required
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Abebe@gmail.com"
              required
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              placeholder="09------------"
              required
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="card"
              className="block text-sm font-medium text-gray-700"
            >
              Card Number
            </label>
            <input
              type="text"
              id="card"
              placeholder="3234 5678 9012 3456"
              maxLength="19"
              required
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex space-x-4">
            <div className="flex-1">
              <label
                htmlFor="expiry"
                className="block text-sm font-medium text-gray-700"
              >
                Expiry Date
              </label>
              <input
                type="text"
                id="expiry"
                placeholder="MM/YY"
                maxLength="5"
                required
                className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex-1">
              <label
                htmlFor="cvv"
                className="block text-sm font-medium text-gray-700"
              >
                CVV
              </label>
              <input
                type="text"
                id="cvv"
                placeholder="123"
                maxLength="4"
                required
                className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-300 text-white py-2 mt-4 rounded-lg text-lg font-semibold transition"
          >
            Pay Now
          </button>
        
      </form>
    </div>
  );
};

export default PaymentForm;

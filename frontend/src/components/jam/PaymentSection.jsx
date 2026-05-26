const PaymentSection = () => {
  return (
    <section
      id="payment"
      className="max-w-2xl mx-auto p-6 text-center scroll-mt-24"
      aria-labelledby="payment-heading"
    >
      <div className="bg-zinc-900 rounded-2xl p-6">
        <h2 id="payment-heading" className="text-2xl font-semibold mb-4">
          Pay & Register
        </h2>

        <img
          src="/PhonepeQr.png"
          alt="PhonePe payment QR code"
          className="mx-auto w-full max-w-72 rounded-xl"
        />

        <p className="mt-4 text-lg">UPI ID: 8977922423-3@ybl</p>

        <p className="text-yellow-400"></p>
      </div>
    </section>
  );
};

export default PaymentSection;

const PaymentSection = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 text-center">
      <div className="bg-zinc-900 rounded-2xl p-6">
        <h2 className="text-2xl font-semibold mb-4">
          Pay & Register
        </h2>

        <img
          src="/PhonepeQr.png"
          alt="QR"
          className="w-72 mx-auto rounded-xl"
        />

        <p className="mt-4 text-lg">
          UPI ID:
        </p>

        <p className="text-yellow-400">
          yourupi@okaxis
        </p>
      </div>
    </div>
  );
};

export default PaymentSection;
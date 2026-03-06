function Testimonials() {
  const reviews = [1, 2, 3, 4];

  return (
    <section className="py-16 text-center">
      <h2 className="mb-10 text-3xl font-semibold">What Our Guests Say</h2>

      <div className="mx-auto grid max-w-6xl grid-cols-4 gap-6 px-4">
        {reviews.map((r) => (
          <div
            key={r}
            className="rounded-2xl border border-gray-200 bg-white px-6 py-7 text-left shadow-sm"
          >
            <div className="mb-3 text-2xl">👤</div>

            <div className="text-sm text-yellow-400">★★★★★</div>

            <p className="mt-3 text-sm text-gray-700">
              From check-in to check-out, everything was smooth. Hospitality was
              top class and the location is perfect for a relaxing stay.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;

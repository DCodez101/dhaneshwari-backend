const features = [
  "Premium Rooms",
  "Premium Rooms",
  "Prime Location",
  "Premium Rooms",
  "Tour & Sightseeing",
  "Hotel Amenities",
  "24x7 Reception",
];

function WhyChoose() {
  return (
    <section className="py-16 text-center">
      <h2 className="mb-10 text-3xl font-semibold">Why Choose us ?</h2>

      <div className="mx-auto grid max-w-6xl grid-cols-7 gap-4 px-4">
        {features.map((item, i) => (
          <div
            key={i}
            className="rounded-2xl bg-white px-4 py-5 text-sm font-medium text-gray-800 shadow-sm"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyChoose;

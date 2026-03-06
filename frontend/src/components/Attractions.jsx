import room1 from "../assets/Dhaneshwari Photoshoot/20250601_122955.jpg";
import room2 from "../assets/Dhaneshwari Photoshoot/20250601_122955.jpg";
import room3 from "../assets/Dhaneshwari Photoshoot/20250601_122955.jpg";

const attractions = [
  {
    title: "Kashi Vishwanath",
    desc: "Elegant interiors with modern comfort.",
    img: room1,
  },
  {
    title: "Kal Bhairav Temple",
    desc: "Luxury stay experience for couples & families.",
    img: room2,
  },
  {
    title: "Evening Ganga Aarti",
    desc: "Spacious comfort with premium amenities.",
    img: room3,
  },
  {
    title: "Premium Room",
    desc: "Luxury stay experience for couples & families.",
    img: room2,
  },
];

function Attractions() {
  return (
    <section className="py-16">
      <h2 className="mb-12 text-center text-3xl font-semibold">
        Famous Attractions
      </h2>

      <div className="mx-auto grid max-w-6xl grid-cols-4 gap-6 px-4">
        {attractions.map((item, i) => (
          <div
            key={i}
            className="overflow-hidden rounded-2xl bg-white shadow-md"
          >
            <img src={item.img} className="h-40 w-full object-cover" />

            <div className="p-5">
              <h3 className="mb-1 text-base font-semibold text-gray-900">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Attractions;

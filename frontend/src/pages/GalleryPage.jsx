import Gallery from "../components/Gallery";

function GalleryPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <header className="mb-2">
        <h1 className="text-4xl font-semibold">Gallery</h1>
        <p className="mt-3 max-w-2xl text-gray-600">
          A glimpse of our rooms, spaces, and the calm vibe around the property.
        </p>
      </header>

      <Gallery />
    </div>
  );
}

export default GalleryPage;


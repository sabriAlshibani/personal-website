export default function Footer() {
  return (
    <footer className="bg-color text-muted py-8 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-lg md:text-xl font-semibold text-color mb-2">
          Sabri Alshibani
        </h3>
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} All rights reserved
        </p>
      </div>
    </footer>
  );
}

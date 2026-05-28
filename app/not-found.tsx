import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <p className="font-mono text-sm text-electric mb-4 tracking-widest uppercase">
        404
      </p>
      <h1 className="font-heading text-4xl font-bold text-text-primary mb-4">
        Page not found
      </h1>
      <p className="text-text-secondary text-lg mb-8 max-w-md">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="px-6 py-3 rounded-lg bg-electric text-white font-semibold hover:bg-cyan hover:text-space transition-all duration-200 shadow-lg shadow-electric/20"
      >
        Back to Home
      </Link>
    </div>
  );
}

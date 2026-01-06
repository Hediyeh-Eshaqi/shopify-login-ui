import Link from "next/link";

export default function HomePage() {
  return (
    <div className="bg-white shadow-lg rounded-xl p-8 max-w-sm w-full text-center space-y-6 mt-[50%]">
      <h2 className="text-2xl font-semibold text-gray-800">Welcome</h2>

      <p className="text-gray-600">You can access the login UI from here:</p>

      <Link
        href="/login"
        className="inline-block bg-black text-white px-5 py-2.5 rounded-md text-sm font-medium hover:bg-gray-800 transition"
      >
        Go to Login
      </Link>
    </div>
  );
}

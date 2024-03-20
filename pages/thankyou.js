import Link from 'next/link';

export default function ThankYouPage() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Thank You for Subscribing!</h1>
        <p className="text-lg mb-4">
          We appreciate your interest. You'll receive updates via email soon.
        </p>
        <Link href="/">
          <button className="text-blue-500 hover:underline">Back to Home</button>
        </Link>
      </div>
    </div>
  );
}

import Link from 'next/link';
import Button from './_components/Button';

export default function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center text-center">
      <h1 className="text-h5 font-bold">404 - Page Not Found 🥲</h1>
      <Button variation="primary">
        <Link href="/">Back to home</Link>
      </Button>
    </div>
  );
}

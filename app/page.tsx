import { redirect } from 'next/navigation';

export default function RootPage() {
  // Redirect visitors immediately to /dashboard
  redirect('/dashboard');
}
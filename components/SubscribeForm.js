// components/SubscribeForm.js

import { useState } from 'react';
import { useRouter } from 'next/router';
import { Label } from './ui/Label';
import { Input } from './ui/Input';
import { Button } from './ui/Button';

export default function SubscribeForm() {
  const [email, setEmail] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      if (response.ok) {
        // Redirect to thank you page upon successful subscription
        router.push('/thankyou');
      } else {
        console.error('Error subscribing user:', response.statusText);
      }
    } catch (error) {
      console.error('Error subscribing user:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-sm space-y-4">
      <div className="space-y-2">
        <Label className="sr-only" htmlFor="email">
          Enter your email
        </Label>
        <Input
          className="max-w-lg"
          id="email"
          placeholder="Enter your email"
          required
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <Button className="w-full" type="submit">
        Sign Up
      </Button>
    </form>
  );
}

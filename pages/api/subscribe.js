// pages/api/subscribe.js
import pool from '../../db';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { email } = req.body;
      const [rows, fields] = await pool.query('INSERT INTO subscriptions (email) VALUES (?)', [email]);
      res.status(201).json({ message: 'Subscription successful' });
    } catch (error) {
      console.error('Error subscribing user:', error);
      res.status(500).json({ error: 'An error occurred while subscribing user' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}

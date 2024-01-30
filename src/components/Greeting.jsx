/*
 * @Author: Oliver
 * @Date: 2024-01-30 17:37:37
 * @LastEditors: Oliver
 * @LastEditTime: 2024-01-30 18:07:06
 * @Description: 
 * 
 */
import { useState } from 'preact/hooks';

export default function Greeting({messages}) {

  const randomMessage = () => messages[(Math.floor(Math.random() * messages.length))];

  const [greeting, setGreeting] = useState(messages[0]);

  return (
    <div>
      <h3>{greeting}! Thank you for visiting!</h3>
      <button onClick={() => setGreeting(randomMessage())}>
        New Greeting
      </button>
    </div>
  );
}
'use client'
import { Card, CardContent, CardFooter, } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const AppCounter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <Card>
      <CardContent>
        <p>Count: {count}</p>
      </CardContent>
      <CardFooter className='flex space-x-1'>
        <Button onClick={handleDecrement}>Decrement</Button>
        <Button onClick={handleIncrement}>Increment</Button>
      </CardFooter>
    </Card>
  );
};

export default AppCounter;

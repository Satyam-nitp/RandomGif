import React from 'react';
import Random from './components/Random';
import Tag from './components/Tag';

export default function App() {
  return(
    <div className="w-full min-h-screen flex flex-col background items-center">
      <h1 className="bg-white w-11/12 text-center text-3xl font-bold py-2 mt-[30px] rounded-lg">RANDOM GIFS</h1>
      <div className="flex flex-col w-full items-center gap-y-10 mt-[30px]">
        <Random/>
        <Tag/>
      </div>
    </div>
  );
} 
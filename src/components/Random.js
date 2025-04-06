import React, {useEffect, useState} from 'react'
import axios from 'axios';
import Spiner from './Spiner';

const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;

function Random() {
    const [gif, setGif] = useState('');
    const [loading, setLoading] = useState(false);

    async function fetchGif() {
        setLoading(true);
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
        const {data}= await axios.get(url);
        const imgSource=data.data.images.downsized_large.url;
        setGif(imgSource);
        setLoading(false);
    }

    useEffect(() => {
        fetchGif();
    },[]);

    function clickHandler() {
        fetchGif();
    }    

  return (
    <div className='w-1/2 bg-green-500 rounded-lg border
     border-black flex flex-col items-center gap-y-5 mt-[15px]' >
      <h1 className='text-2xl underline uppercase font-bold'>A Random Gif</h1>
      { 
        loading ? (<Spiner/>) : (<img src={gif} width='450' />)
      }
      <button onClick={clickHandler}
        className='bg-yellow-500 w-10/12 text-lg py-2 rounded-lg mb-[15px]'
      >
        Generate
      </button>
    </div>
  )
}

export default Random

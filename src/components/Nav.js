import Image from 'next/image';

//assets
import menuicon from '../../public/menu.png';




export default function Nav() {
  return (
    <>
      <div className="flex justify-end items-center gap-10 p-5">
        <button 
        className="btn">
          Resume
        </button>
        <button className="">
            <Image
                src={menuicon}
                width={32}
                height={32}
                className='invert transition'
            />
        </button>
      </div>
    </>
  );
}

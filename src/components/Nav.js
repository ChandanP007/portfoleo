import Image from 'next/image';
import Link from 'next/link';
//assets
import menuicon from '../../public/menu.png';




export default function Nav() {
  return (
    <>
      <div className="flex justify-end items-center gap-10 p-5">
      <Link href="https://docs.google.com/document/d/1t2ls5AtrQOjO0P4dtTb_2A-pDnz5qKEMq3KC1U9867g/edit?usp=sharing">
        <button 
        className="btn">
          Resume
        </button></Link>
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

import React from 'react'

export default function Notes() {
  return (
    <>
        <div className='bg-blue-500/5 rounded-md p-7 text-white '>
            <h3 className="text-xl pb-5 text-white">Notes</h3>

            <ul className='flex gap-5 p-3'>
                <li className="py-3 cursor-pointer flex flex-col text-center items-center gap-10 border-white/15 p-10">
                    <h5>CS</h5>
                    <div className="">
                        <h6 className="text-white/60 text-lg pb-1 text-sm">Core Java</h6>
                    </div>
                </li>
                <li className="py-3 cursor-pointer flex flex-col text-center items-center gap-10 border-white/15 p-10">
                    <h5>CS</h5>
                    <div className="">
                        <h6 className="text-white/60 text-lg pb-1 text-sm">Operating Systems</h6>
                    </div>
                </li>
            </ul>
        </div>
    </>
  )
}

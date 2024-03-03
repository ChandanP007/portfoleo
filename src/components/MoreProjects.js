export default function MoreProjects(){
    return(
        <>
            <div className="bg-blue-500/5 rounded-md p-7 text-white ">
                <h3 className="text-xl pb-5">More Projects</h3>
                <ul>
                    <li className="py-3 cursor-pointer flex items-center gap-10 p-5 border-b-[1px] border-white/15">
                        <h5>Icon</h5>
                        <div className="">
                            <h6 className="text-white/60 text-lg pb-1">ModernAttire</h6>
                            <p className="text-white/20">PHP, JQuery, Cloudfront, S3, SheetsAPI</p>
                        </div>
                    </li>                
                </ul>
            </div>
        </>
    )
}
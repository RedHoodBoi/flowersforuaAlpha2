export default function MockShareDialog() {

    return <div className="p-6 pt-4 w-[445px] bg-MT-surfaceContainerLow overflow-hidden rounded-xl">
       
        <div className="h-12 flex items-center border-b border-b-MT-outlineVariant text-center justify-center font-bold ">Create Post</div>
        <div className="h-12 pb-2  text-sm pt-4">Shareing Is Caring Or Something else </div>
        <div className="mt-4 overflow-hidden rounded-xl">
            <div 
            style={{
                backgroundImage:'url(https://images.stockcake.com/public/9/5/0/95030f09-3485-4469-b72c-619fdadbd5de_large/soldier-in-dust-stockcake.jpg)',
                backgroundSize:'cover',
                backgroundPosition:'center'
            }}
            className="w-full aspect-[2/1] ">

            </div>
            <div className="p-3 bg-MT-surfaceContainer">
                <h3 className="text-sm font-semibold">Alex Mkrtichian - Fighter</h3>
                <h5 className="text-xs text-MT-onSurfaceVariant">shittysite.com</h5>
            </div>
            
        </div>
        <div className="w-full flex mt-4 ">
                <button className="h-8 rounded-md w-full text-sm font-semibold bg-MT-primary flex items-center justify-center text-MT-onPrimary">Share</button>
            </div>
    </div>
}
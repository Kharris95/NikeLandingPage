export function Card ({item}) {
    return ( 
    <div className={`${item.className} max-w-2xl cursor-pointer transform transition hover:scale-105`}>
        <div className="p-8">
            <div className="text-2xl font-bold">{item.title}</div>
            <div className="mt-10 font-semibold underline underline-offset-4">SHOP NOW +</div>
        </div>
        <img className="absolute h-40 w-56 top-5 left-[40%]" src={item.src}/>
    </div>
    );
}
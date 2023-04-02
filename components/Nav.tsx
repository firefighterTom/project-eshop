import Link from "next/link";

export function Nav(){
    return(
        <div className="flex justify-around py-6 bg-black text-white ">
          
            <Link href="/">Home</Link>
            <Link href="/cart">Cart</Link>
        </div>
    )
}
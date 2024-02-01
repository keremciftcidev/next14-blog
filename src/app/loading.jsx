import Link from "next/link"
const Loading = ()=>{
    return(
        <div>
            <h2>Not Found</h2>
            <p>Not found this page</p>
            <Link href={"/"}>Return Home</Link>
        </div>
    )
}

export default Loading;
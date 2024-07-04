import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";

function AppPreviousVersionBtn() {
    return (
        <Button asChild variant={"outline"}>
            <Link href={'https://ngeblog-blog.vercel.app'} rel="noopener noreferrer" target="_blank">
                <Image 
                src="/pixel_me_removedbg.png"
                alt="Picture of the author"
                width={40}
                height={40}
                />
                <p className="font-semibold">
                visit ngeblogblog v1?
                </p>
            </Link>
        </Button>
    )
}

export default AppPreviousVersionBtn;
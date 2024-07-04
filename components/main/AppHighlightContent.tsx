import { BellRing, Check, Eye } from "lucide-react"
 
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from "next/link"
import { Badge } from "../ui/badge"
import { AppNewMark } from "./AppNewMark"
// import { Switch } from "@/components/ui/switch"
 
type CardProps = React.ComponentProps<typeof Card>
 
export function AppHighlightContent({ className, ...props }: CardProps & any) {
  return (
    <Card className={cn("w-[380px] mb-1", className)} {...props}>
      <CardHeader>
        <CardTitle className="!text-2xl">{props.title}</CardTitle>
        <CardDescription>{props.description}</CardDescription>
      </CardHeader>
      <CardContent>
        {
        props.tags.map((tag: string) => (
        <Badge key={tag} variant={'secondary'} className="mr-1"> {tag} </Badge>
        ))}
        <AppNewMark date={props.date}/>
      </CardContent>
      <CardFooter>
      <Link href="/post/[slug]" as={`/post/${props.slug}`}>
        <Button>
          <Eye className="mr-2 h-4 w-4" /> Read it
        </Button>
      </Link>
      </CardFooter>
    </Card>
  )
}
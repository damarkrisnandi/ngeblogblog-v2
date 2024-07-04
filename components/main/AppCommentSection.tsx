import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "../ui/card";
import { AppNewMark } from "./AppNewMark";

function AppCommentSection({ comments }: any) {
    return (
        <div className="w-full space-y-2">
            <Card className="w-full">
                <CardHeader>
                    <CardTitle>Comments ({comments?.length})</CardTitle>
                </CardHeader>
            </Card>
            {
                comments?.map((comment: any) => (
                    <div className="w-full" key={comment.id}>
                        <Card className="w-full">
                            <CardHeader>
                                <CardTitle>{comment.name}</CardTitle>
                                <CardDescription>{comment.created_at} <AppNewMark date={comment.created_at} /></CardDescription>
                            </CardHeader>
                            <CardContent>

                                <p className="wrap text-sm">{comment.comment}</p>
                            </CardContent>
                            <CardFooter>
                            </CardFooter>
                        </Card>
                    </div>
                ))
            }
        </div>
    )
}

export default AppCommentSection;
import { Badge } from "../ui/badge"

export function AppNewMark({ date }: any) {
    if (new Date().getTime() <= new Date(date).getTime() + (1000 * 60 * 60 * 24)) {
        return (
            <Badge variant={'outline'} className="border-red-600 text-red-600 font-bold"> NEW! </Badge>
        )
    }
    return null
}
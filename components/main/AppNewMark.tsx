'use client'
import { Badge } from "../ui/badge"
import { useState, useEffect } from "react"

export function AppNewMark({ date }: any) {
    const [now, setNow] = useState(null);

    useEffect(() => {
        if (!now) {
            setNow(new Date);
        }
    })
    
    if (now.getTime() <= new Date(date).getTime() + (1000 * 60 * 60 * 24)) {
        return (
            <Badge variant={'outline'} className="border-red-600 text-red-600 font-bold"> NEW! </Badge>
        )
    }
    return null
}

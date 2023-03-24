'use client'
import { useState } from 'react'

export function LikeButton ({id}){
    const [liked, setLiked] = useState(false)
    const [count, setCount] = useState(0)
    return(
        <div className="flex flex-row">
            <button className="flex flex-row items-center border rounded-l-lg rounded-r-lg p-1" onClick={() => {
                setLiked(!liked)
                setCount(liked ? count - 1 : count + 1)
            }}>
                {liked ? '❤️': '🤍'}
                <span className="text-gray-500 text-sm ml-1">{count}</span>
            </button>
            </div>
    )
}
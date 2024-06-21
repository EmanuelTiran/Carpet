"use client"
import React, { useState, useEffect } from 'react';
import style from './style.module.css'
import Image from 'next/image'

export default function Images({ product }) {
    console.log("🚀 ~ Images ~ product:", product)
    const defaultTimeCycle = 5000;
    const [timeCycle, setTimeCycle] = useState(defaultTimeCycle);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);



    useEffect(() => {
        const interval = setTimeout(() => {
            setCurrentImageIndex(prevIndex => (prevIndex + 1) % product.images.length)
        }, timeCycle)
        return () => clearTimeout(interval)
    }, [currentImageIndex])



    return (
        <div className={style.container}>
            <Image 
            onMouseOver={() => setTimeCycle(500)} 
            onMouseOut={() => setTimeCycle(defaultTimeCycle)} 
            src={product.images[currentImageIndex]} 
            alt={product.title} width={600} 
            height={400} 
            className={style.img} />
        </div>
    )
}

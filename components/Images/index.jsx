"use client"
import React, { useState, useEffect } from 'react';
import style from './style.module.css'
import Image from 'next/image'

export default function Images({ carpet }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    console.log({ carpet });
    const interval = setInterval(() => {
        setCurrentImageIndex(prevIndex => (prevIndex + 1) % carpet.images.length);
    }, 3000);
    return (
        <div className={style.container}>
            <Image src={carpet.images[currentImageIndex]} alt={carpet.title} width={600} height={400} className={style.img} />
            <h1>{carpet.name}</h1>
            <p>{carpet.description}</p>
        </div>
    )
}

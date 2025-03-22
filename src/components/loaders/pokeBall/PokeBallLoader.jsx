import React from 'react'
import './PokeBall.css'

const poke_ball = {
    viewBox: '0 0 800 800'
}

function PokeBallLoader() {
    return (
        <svg
            id='poke_ball'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox={poke_ball.viewBox}
        >
            <g id='form' clipPath='url(#clip0_47_2)'>
                <path
                    id='background'
                    className='x'
                    fill='#080808'
                    d='M512 256c0 141.385-114.615 256-256 256S0 397.385 0 256 114.615 0 256 0s256 114.615 256 256z'
                ></path>
                <path
                    id='white'
                    className='x'
                    fill='#fff'
                    d='M496 256a240.003 240.003 0 01-240 240A240.003 240.003 0 0116 256h148.8a91.204 91.204 0 0056.299 84.258 91.204 91.204 0 00119.159-49.357A91.204 91.204 0 00347.2 256H496z'
                ></path>
                <path
                    id='red'
                    className='x'
                    fill='#F14434'
                    d='M496 256A240.002 240.002 0 00256 16 240 240 0 0016 256h148.8a91.2 91.2 0 01182.4 0H496z'
                ></path>
                <path
                    id='line_center'
                    className='x'
                    stroke='#080808'
                    strokeWidth='20'
                    d='M16 256L496 256'
                ></path>
                <g id='center_white' className='x' filter='url(#filter0_i_47_2)'>
                    <path
                        fill='#fff'
                        d='M331 256c0 41.421-33.579 75-75 75s-75-33.579-75-75 33.579-75 75-75 75 33.579 75 75z'
                    ></path>
                </g>
                <path
                    id='center_black'
                    className='spin-rotate'
                    stroke='#000'
                    strokeWidth='5'
                    d='M232.165 232.873l22.628 22.627m22.627 22.627L254.793 255.5m-22.628 22.627l22.628-22.627m22.627-22.627L254.793 255.5m41.366-40.659c22.455 22.456 22.455 58.862 0 81.318-22.455 22.455-58.862 22.455-81.318 0-22.455-22.456-22.455-58.862 0-81.318 22.456-22.455 58.863-22.455 81.318 0z'
                ></path>
            </g>
            <defs>
                <filter
                    id='filter0_i_47_2'
                    width='150'
                    height='154'
                    x='181'
                    y='181'
                    colorInterpolationFilters='sRGB'
                    filterUnits='userSpaceOnUse'
                >
                    <feFlood
                        floodOpacity='0'
                        result='BackgroundImageFix'
                    ></feFlood>
                    <feBlend
                        in='SourceGraphic'
                        in2='BackgroundImageFix'
                        result='shape'
                    ></feBlend>
                    <feColorMatrix
                        in='SourceAlpha'
                        result='hardAlpha'
                        values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                    ></feColorMatrix>
                    <feOffset dy='4'></feOffset>
                    <feGaussianBlur stdDeviation='2'></feGaussianBlur>
                    <feComposite
                        in2='hardAlpha'
                        k2='-1'
                        k3='1'
                        operator='arithmetic'
                    ></feComposite>
                    <feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'></feColorMatrix>
                    <feBlend
                        in2='shape'
                        result='effect1_innerShadow_47_2'
                    ></feBlend>
                </filter>
                <clipPath id='clip0_47_2'>
                    <path  id='focus' className='x' fill='#fff' d='M0 0H512V512H0z'></path>
                </clipPath>
            </defs>
        </svg>
    )
}

export default PokeBallLoader

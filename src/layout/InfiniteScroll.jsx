import React from 'react'
import { useEffect } from 'react'

const InfiniteScroll = ({ direction, data }) => {



    return (
        <div className='infinite_slider'>
            <ul className='inner_slider' data-direction={direction}>
                {data.map((da) => {
                    return (
                        <li
                            key={da.image}
                            style={{ backgroundImage: `url(${da.image})` }}
                            className='infinite_slider_box'>
                        </li>
                    )
                })}

            </ul>
            <ul className='inner_slider' data-direction={direction}>
                {data.map((da) => {
                    return (
                        <li
                            key={da.image}
                            style={{ backgroundImage: `url(${da.image})` }}
                            className='infinite_slider_box'>
                        </li>
                    )
                })}

            </ul>
        </div>
    )
}

export default InfiniteScroll
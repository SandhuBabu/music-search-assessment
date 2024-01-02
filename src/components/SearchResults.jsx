import React from 'react'
import { useMusic } from '../context/MusicContext'
import './SearchResults.scss'
import { Link } from 'react-router-dom'

export const SearchResults = () => {

    const { music } = useMusic()

    if (music.length === 0)
        return (
            <div className='center'>
                <div>
                    <h1>No Results Found</h1>
                    <Link to="/">Go Home</Link>
                </div>
            </div>
        )


    return (
        <div className='music-lists'>
            <h1>SearchResults <span className='count'>{music?.length}</span></h1>
            {
                music?.map((item, k) => (
                    <article key={k} className='article'>
                        <figure>
                            <img src={item.artworkUrl100} alt="" />
                            <Link target='_blank' to={item?.artistViewUrl}>{item?.artistName}</Link>
                            <p>Price: {item?.collectionPrice} {item?.currency}</p>
                        </figure>
                        <div>
                            <h3>{item?.collectionName}</h3>
                            <p>No Of Tracks: {item?.trackCount}</p>
                            <p>Genre: {item?.primaryGenreName}</p>
                            <p>Release Date: {new Date(item?.releaseDate).toDateString()}</p>
                            <p>Copyright: {item?.copyright}</p>
                            <Link className='view-collection' target='_blank' to={item?.collectionViewUrl}>View Collection</Link>
                        </div>
                    </article>
                ))
            }
        </div>
    )
}

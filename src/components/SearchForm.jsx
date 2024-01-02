import React, { useState } from 'react'
import { useMusic } from '../context/MusicContext'
import { useNavigate } from 'react-router-dom';
import './SearchForm.scss'

export const SearchForm = () => {

    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const { setMusic } = useMusic();
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('')

        const term = e.target.term.value;

        if (!term.trim()) {
            return
        }

        setLoading(true)

        try {
            const res = await fetch(`https://itunes.apple.com/search?term=${term}&media=music&entity=album`, {
                method: "GET"
            })
            const data = await res.json();
            setMusic(data?.results)
            navigate('/results')
        } catch (error) {
            console.log("error", error);
            setError("An unexpected error occured while searching")
        } finally {
            setLoading(false)
        }

    }

    return (
        <>
            <div className='form-wrapper'>
                <h1>Search Music</h1>
                <form onSubmit={handleSubmit} autoComplete='off'>
                    <input type="text" name='term' />
                    <p className='error'>{error ?? error}</p>
                    <button
                        type='submit'
                        disabled={loading}
                    >Search
                        {loading && <span className='loading'></span>}
                    </button>
                </form>
            </div>
        </>
    )
}

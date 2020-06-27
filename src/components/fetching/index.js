//não precisa de fetch pra pegar arquivo json no react

import React, { useState, useEffect } from 'react'

export default function Fetching() {
    const url = 'https://the-one-api.herokuapp.com/v1/movie'
    const token = 'eSsqFG93UmR33ZgCp9sc'
    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch(url, { headers: { Authorization: 'Bearer ' + token } })
            .then(res => {
                console.log('status ' + res.status)
                return res.json()
            })
            .then(data => {
                console.log(data)
                setMovies(data.docs)
            })
    }, [])

    return (
        <ul>
            {movies.map(movie => <li key={movie._id}>{movie.name}</li>)}
        </ul>)
}
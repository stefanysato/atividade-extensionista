/* eslint-disable react-refresh/only-export-components */

import { createContext, useContext, useEffect, useState } from "react";

export const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
    const [favorites, setFavorites] = useState(() => {
        const storedFavorites = localStorage.getItem('favorites')

        return storedFavorites ? JSON.parse(storedFavorites) : []
    })

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites))
    }, [favorites])

    function addFavorite(id) {
        setFavorites(prev => {
            if (prev.includes(id)) {
                return prev
            }

            return [...prev, id]
        })
    }

    function removeFavorite(id) {
        setFavorites(prev => prev.filter(favoriteId => favoriteId !== id))
    }

    function toggleFavorite(id) {
        const isAlreadyFavorite = favorites.includes(id)

        if (isAlreadyFavorite) {
            removeFavorite(id)
        } else {
            addFavorite(id)
        }
    }

    function isFavorite(id) {
        return favorites.includes(id)
    }

    return (
        <FavoritesContext.Provider
            value={{ favorites, addFavorite, removeFavorite, toggleFavorite, isFavorite }}
        >
            {children}
        </FavoritesContext.Provider>
    )
}

export function useFavorites() {
    return useContext(FavoritesContext)
}
import { useState } from 'react'
import '../App.css'
import '../Index.css'
import { Header } from '../components/Header'
import { Home } from '../components/Home'
import { Popular } from '../components/Popular'
import { Show } from '../components/Show'



export function Index() {
  
  return (
    <>
        <Header />
        <Home />
        <Popular />
        <Show />
    </>
  )
}


import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from './App'

describe('App component', () => {
  it('renders the Vite + React heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /vite \+ react/i })).toBeInTheDocument()
  })
})

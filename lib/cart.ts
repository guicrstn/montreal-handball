'use client'

export interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
  size?: string
  image: string
}

export interface Cart {
  items: CartItem[]
  total: number
}

const CART_KEY = 'montreal-handball-cart'

export function getCart(): Cart {
  if (typeof window === 'undefined') {
    return { items: [], total: 0 }
  }
  
  const stored = localStorage.getItem(CART_KEY)
  if (!stored) {
    return { items: [], total: 0 }
  }
  
  try {
    return JSON.parse(stored)
  } catch {
    return { items: [], total: 0 }
  }
}

export function saveCart(cart: Cart): void {
  if (typeof window === 'undefined') return
  localStorage.setItem(CART_KEY, JSON.stringify(cart))
}

export function addToCart(item: Omit<CartItem, 'quantity'>, quantity: number = 1): Cart {
  const cart = getCart()
  const existingIndex = cart.items.findIndex(
    (i) => i.id === item.id && i.size === item.size
  )
  
  if (existingIndex >= 0) {
    cart.items[existingIndex].quantity += quantity
  } else {
    cart.items.push({ ...item, quantity })
  }
  
  cart.total = cart.items.reduce((sum, i) => sum + i.price * i.quantity, 0)
  saveCart(cart)
  
  // Dispatch custom event for cart updates
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new Event('cartUpdated'))
  }
  
  return cart
}

export function removeFromCart(itemId: string, size?: string): Cart {
  const cart = getCart()
  cart.items = cart.items.filter(
    (item) => !(item.id === itemId && item.size === size)
  )
  cart.total = cart.items.reduce((sum, i) => sum + i.price * i.quantity, 0)
  saveCart(cart)
  
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new Event('cartUpdated'))
  }
  
  return cart
}

export function updateQuantity(itemId: string, quantity: number, size?: string): Cart {
  const cart = getCart()
  const item = cart.items.find((i) => i.id === itemId && i.size === size)
  
  if (item) {
    item.quantity = Math.max(0, quantity)
    if (item.quantity === 0) {
      return removeFromCart(itemId, size)
    }
  }
  
  cart.total = cart.items.reduce((sum, i) => sum + i.price * i.quantity, 0)
  saveCart(cart)
  
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new Event('cartUpdated'))
  }
  
  return cart
}

export function clearCart(): void {
  if (typeof window === 'undefined') return
  localStorage.removeItem(CART_KEY)
  window.dispatchEvent(new Event('cartUpdated'))
}

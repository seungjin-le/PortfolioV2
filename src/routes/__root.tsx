import { createRootRoute, Outlet } from '@tanstack/react-router'
import '@/assets/styles/index.css'

export const Route = createRootRoute({ component: () => <Outlet /> })

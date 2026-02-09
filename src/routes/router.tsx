import { createRouter } from '@tanstack/react-router'

export const getRouter = () => {
  const router = createRouter({
    context: {},
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
  })

  return router
}

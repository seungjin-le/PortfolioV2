import { createFileRoute } from '@tanstack/react-router'
import Page from '@/app/pages/Main'

export const IndexRoute = createFileRoute('/')({ component: Page })

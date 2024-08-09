import React from 'react'

const TanStackRouterDevtools =
  process.env.NODE_ENV === 'production'
    ? () => null // Render nothing in production
    : React.lazy(() =>
    // Lazy load in development
      import('@tanstack/router-devtools').then((res) => ({
        default: res.TanStackRouterDevtools,
        // For Embedded Mode
        // default: res.TanStackRouterDevtoolsPanel
      })),
    )

export function TanstackRouterProvider({ children }: React.PropsWithChildren) {
  return (
    <React.Suspense fallback={null}>
      <TanStackRouterDevtools position="bottom-right" />
      {children}
    </React.Suspense>
  )
}

import { createLogger } from 'redux-logger'
import { Middleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

export const logger = createLogger({
  duration: true,
  collapsed: true,
  colors: {
    title: (action): string => (action.error ? 'firebrick' : 'deepbluesky'),
    prevState: (): string => '#1c5faf',
    action: (): string => '#149945',
    nextState: (): string => '#a47104',
    error: (): string => 'ff0005',
  },
})

const devEnvironment = process.env.NODE_ENV === 'development'

const sagaMiddleware = createSagaMiddleware()

const middleware: Middleware[] = [sagaMiddleware]

if (devEnvironment) {
  middleware.push(logger)
}

export { middleware, sagaMiddleware }

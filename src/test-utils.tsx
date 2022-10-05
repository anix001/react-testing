import {render} from '@testing-library/react'
import { AppProviders } from './providers/AppProviders'

const customRender:any = (ui:any, options:any) =>
  render(ui, {wrapper: AppProviders, ...options})

// re-export everything
export * from '@testing-library/react'

// override render method
export {customRender as render}
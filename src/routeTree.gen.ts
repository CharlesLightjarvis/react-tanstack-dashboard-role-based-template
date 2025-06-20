/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as LoginImport } from './routes/login'
import { Route as HelpImport } from './routes/help'
import { Route as DashboardLayoutImport } from './routes/_dashboard-layout'
import { Route as AuthImport } from './routes/_auth'
import { Route as IndexImport } from './routes/index'
import { Route as DashboardLayoutDashboardImport } from './routes/_dashboard-layout.dashboard'
import { Route as AuthInvoicesImport } from './routes/_auth.invoices'
import { Route as AuthInvoicesIndexImport } from './routes/_auth.invoices.index'
import { Route as AuthInvoicesInvoiceIdImport } from './routes/_auth.invoices.$invoiceId'

// Create/Update Routes

const LoginRoute = LoginImport.update({
  id: '/login',
  path: '/login',
  getParentRoute: () => rootRoute,
} as any)

const HelpRoute = HelpImport.update({
  id: '/help',
  path: '/help',
  getParentRoute: () => rootRoute,
} as any)

const DashboardLayoutRoute = DashboardLayoutImport.update({
  id: '/_dashboard-layout',
  getParentRoute: () => rootRoute,
} as any)

const AuthRoute = AuthImport.update({
  id: '/_auth',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const DashboardLayoutDashboardRoute = DashboardLayoutDashboardImport.update({
  id: '/dashboard',
  path: '/dashboard',
  getParentRoute: () => DashboardLayoutRoute,
} as any)

const AuthInvoicesRoute = AuthInvoicesImport.update({
  id: '/invoices',
  path: '/invoices',
  getParentRoute: () => AuthRoute,
} as any)

const AuthInvoicesIndexRoute = AuthInvoicesIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => AuthInvoicesRoute,
} as any)

const AuthInvoicesInvoiceIdRoute = AuthInvoicesInvoiceIdImport.update({
  id: '/$invoiceId',
  path: '/$invoiceId',
  getParentRoute: () => AuthInvoicesRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/_auth': {
      id: '/_auth'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof AuthImport
      parentRoute: typeof rootRoute
    }
    '/_dashboard-layout': {
      id: '/_dashboard-layout'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof DashboardLayoutImport
      parentRoute: typeof rootRoute
    }
    '/help': {
      id: '/help'
      path: '/help'
      fullPath: '/help'
      preLoaderRoute: typeof HelpImport
      parentRoute: typeof rootRoute
    }
    '/login': {
      id: '/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof LoginImport
      parentRoute: typeof rootRoute
    }
    '/_auth/invoices': {
      id: '/_auth/invoices'
      path: '/invoices'
      fullPath: '/invoices'
      preLoaderRoute: typeof AuthInvoicesImport
      parentRoute: typeof AuthImport
    }
    '/_dashboard-layout/dashboard': {
      id: '/_dashboard-layout/dashboard'
      path: '/dashboard'
      fullPath: '/dashboard'
      preLoaderRoute: typeof DashboardLayoutDashboardImport
      parentRoute: typeof DashboardLayoutImport
    }
    '/_auth/invoices/$invoiceId': {
      id: '/_auth/invoices/$invoiceId'
      path: '/$invoiceId'
      fullPath: '/invoices/$invoiceId'
      preLoaderRoute: typeof AuthInvoicesInvoiceIdImport
      parentRoute: typeof AuthInvoicesImport
    }
    '/_auth/invoices/': {
      id: '/_auth/invoices/'
      path: '/'
      fullPath: '/invoices/'
      preLoaderRoute: typeof AuthInvoicesIndexImport
      parentRoute: typeof AuthInvoicesImport
    }
  }
}

// Create and export the route tree

interface AuthInvoicesRouteChildren {
  AuthInvoicesInvoiceIdRoute: typeof AuthInvoicesInvoiceIdRoute
  AuthInvoicesIndexRoute: typeof AuthInvoicesIndexRoute
}

const AuthInvoicesRouteChildren: AuthInvoicesRouteChildren = {
  AuthInvoicesInvoiceIdRoute: AuthInvoicesInvoiceIdRoute,
  AuthInvoicesIndexRoute: AuthInvoicesIndexRoute,
}

const AuthInvoicesRouteWithChildren = AuthInvoicesRoute._addFileChildren(
  AuthInvoicesRouteChildren,
)

interface AuthRouteChildren {
  AuthInvoicesRoute: typeof AuthInvoicesRouteWithChildren
}

const AuthRouteChildren: AuthRouteChildren = {
  AuthInvoicesRoute: AuthInvoicesRouteWithChildren,
}

const AuthRouteWithChildren = AuthRoute._addFileChildren(AuthRouteChildren)

interface DashboardLayoutRouteChildren {
  DashboardLayoutDashboardRoute: typeof DashboardLayoutDashboardRoute
}

const DashboardLayoutRouteChildren: DashboardLayoutRouteChildren = {
  DashboardLayoutDashboardRoute: DashboardLayoutDashboardRoute,
}

const DashboardLayoutRouteWithChildren = DashboardLayoutRoute._addFileChildren(
  DashboardLayoutRouteChildren,
)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '': typeof DashboardLayoutRouteWithChildren
  '/help': typeof HelpRoute
  '/login': typeof LoginRoute
  '/invoices': typeof AuthInvoicesRouteWithChildren
  '/dashboard': typeof DashboardLayoutDashboardRoute
  '/invoices/$invoiceId': typeof AuthInvoicesInvoiceIdRoute
  '/invoices/': typeof AuthInvoicesIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '': typeof DashboardLayoutRouteWithChildren
  '/help': typeof HelpRoute
  '/login': typeof LoginRoute
  '/dashboard': typeof DashboardLayoutDashboardRoute
  '/invoices/$invoiceId': typeof AuthInvoicesInvoiceIdRoute
  '/invoices': typeof AuthInvoicesIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/_auth': typeof AuthRouteWithChildren
  '/_dashboard-layout': typeof DashboardLayoutRouteWithChildren
  '/help': typeof HelpRoute
  '/login': typeof LoginRoute
  '/_auth/invoices': typeof AuthInvoicesRouteWithChildren
  '/_dashboard-layout/dashboard': typeof DashboardLayoutDashboardRoute
  '/_auth/invoices/$invoiceId': typeof AuthInvoicesInvoiceIdRoute
  '/_auth/invoices/': typeof AuthInvoicesIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | ''
    | '/help'
    | '/login'
    | '/invoices'
    | '/dashboard'
    | '/invoices/$invoiceId'
    | '/invoices/'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | ''
    | '/help'
    | '/login'
    | '/dashboard'
    | '/invoices/$invoiceId'
    | '/invoices'
  id:
    | '__root__'
    | '/'
    | '/_auth'
    | '/_dashboard-layout'
    | '/help'
    | '/login'
    | '/_auth/invoices'
    | '/_dashboard-layout/dashboard'
    | '/_auth/invoices/$invoiceId'
    | '/_auth/invoices/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AuthRoute: typeof AuthRouteWithChildren
  DashboardLayoutRoute: typeof DashboardLayoutRouteWithChildren
  HelpRoute: typeof HelpRoute
  LoginRoute: typeof LoginRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AuthRoute: AuthRouteWithChildren,
  DashboardLayoutRoute: DashboardLayoutRouteWithChildren,
  HelpRoute: HelpRoute,
  LoginRoute: LoginRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/_auth",
        "/_dashboard-layout",
        "/help",
        "/login"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/_auth": {
      "filePath": "_auth.tsx",
      "children": [
        "/_auth/invoices"
      ]
    },
    "/_dashboard-layout": {
      "filePath": "_dashboard-layout.tsx",
      "children": [
        "/_dashboard-layout/dashboard"
      ]
    },
    "/help": {
      "filePath": "help.tsx"
    },
    "/login": {
      "filePath": "login.tsx"
    },
    "/_auth/invoices": {
      "filePath": "_auth.invoices.tsx",
      "parent": "/_auth",
      "children": [
        "/_auth/invoices/$invoiceId",
        "/_auth/invoices/"
      ]
    },
    "/_dashboard-layout/dashboard": {
      "filePath": "_dashboard-layout.dashboard.tsx",
      "parent": "/_dashboard-layout"
    },
    "/_auth/invoices/$invoiceId": {
      "filePath": "_auth.invoices.$invoiceId.tsx",
      "parent": "/_auth/invoices"
    },
    "/_auth/invoices/": {
      "filePath": "_auth.invoices.index.tsx",
      "parent": "/_auth/invoices"
    }
  }
}
ROUTE_MANIFEST_END */

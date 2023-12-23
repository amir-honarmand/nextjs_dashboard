// statuses
export enum STATUS_CODE {
  SUCCESS = 200,
  NOT_FOUND = 404,
  INTERNAL_SERVER_ERROR = 500,
  BAD_GATEWAY_ERROR = 502,
  SERVICE_UNAVAILABLE = 503,
  UNAUTHORIZED = 401,
  BAD_REQUEST = 400,
  CREATED = 201,
}

// http methods
export enum HTTP_METHOD {
  GET = "Get",
  PUT = "Put",
  POST = "Post",
  PATCH = "Patch",
  DELETE = "delete",
}

// environment
export enum ENVIRONMENT_MODE {
  PRODUCTION = "production",
  DEVELOPMENT = "development",
}

// domains
export enum DOMAIN {
  PRODUCTION = "",
  LOCAL = "localhost",
}

// I18n
export enum APP_LANGUAGE {
  LANG_FA = "fa",
  LANG_EN = "en",
}

// pages routes
export enum PAGE_ROUTE {
  ROOT = "/",
  SIGN_IN = "/auth/signin",
  SIGN_UP = "/auth/signup",
  ANALYTICS = "/analytics",
}

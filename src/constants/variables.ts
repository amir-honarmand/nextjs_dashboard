import { DOMAIN, ENVIRONMENT_MODE } from "./enums";

// drawer width
export const DRAWER_WIDTH = 240;

// items per page
export const ITEMS_PER_PAGE = 10;

// cookies
export const COOKIES_PATH = "/";
export const COOKIES_DOMAIN =
  process.env.NODE_ENV === ENVIRONMENT_MODE.PRODUCTION ? DOMAIN.PRODUCTION : DOMAIN.LOCAL;

// themes
export const THEME_DARK = "DARK";
export const THEME_LIGHT = "LIGHT";
export const LTR_DIRECTION = "ltr";
export const RTL_DIRECTION = "rtl";

// times formats
export const JALALI_TIME_DATE_FORMAT_DEFAULT = "jYYYY/jMM/jDD - HH:mm";
export const JALALI_TIME_DATE_FORMAT_PRIMARY = "jYYYY/jMM/jDD";
export const TIME_DATE_FORMAT_DEFAULT_DATE_FNS = "yyyy/MM/dd - HH:mm";
export const TIME_DATE_FORMAT_PRIMARY_DATE_FNS = "yyyy/MM/dd";
export const TIME_DATE_FORMAT_PRIMARY = "YYYY/MM/DD";
export const DATE_FORMAT = "yyyy/MM/dd";

// regex
export const EMAIL_RGX =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const PASSWORD_RGX = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/;
export const NATIONAL_CODE_RGX = /^(\d|[۰-۹]){10}$/;
export const NUMBER_RGX = /^(\d|[۰-۹])*$/;
export const PHONE_NUMBER_RGX = /^[0۰][9۰](\d|[۰-۹]){9}$/;
export const PERSIAN_CHARACTERS_RGX = /^[\u0600-\u06EF\u06FA-\u06FF\uFB8A\u200C\u200F ]+$/;

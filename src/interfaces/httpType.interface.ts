export interface HttpType {
  params?: Record<string | number, string>;
  data?: any;
  method?: "Get" | "Put" | "Post" | "Patch" | "Delete";
  headers?: any;
  token?: string;
  body?: any;
}
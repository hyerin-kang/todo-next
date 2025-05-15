declare module "json-server" {
  import { Express, Router, RequestHandler } from "express";

  export function create(): Express;
  export function router(dbFile: string): Router;
  export function defaults(): RequestHandler;
}

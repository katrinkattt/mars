import React from "react";
import { CameraObj } from "./typees/types";

export interface AppContext {
  camera: CameraObj | any;
  date: Date | any;
  photoResponse: [] | any;
}
// @ts-ignore
export const APP_CONTEXT = React.createContext<AppContext>(null);

///тут скорее не нужен
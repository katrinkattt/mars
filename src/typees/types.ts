export interface MarsPhoto {
  id: number;
  sol: number;
  camera: {
    id: CameraId;
    name: string;
    rover_id: number;
    full_name: string;
  };
  date: string;
  img_src: string;
  earth_date: string;
  rover: {
    id: number;
    name: string;
    landing_date: string;
    launch_date: string;
    status: string;
  };
}
export type CameraId = 'FHAZ' | 'RHAZ' | 'MAST' | 'CHEMCAM' | 'MAHLI' | 'MARDI' | 'NAVCAM' | 'PANCAM' | 'MINITES'

export type CameraObj = {
  id: CameraId,
  name: string,
}
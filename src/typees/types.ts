export interface MarsPhoto {
  id: number;
  sol: number;
  camera: {
    id: 'FHAZ' | 'RHAZ' | 'MAST' | 'CHEMCAM' | 'MAHLI' | 'MARDI' | 'NAVCAM' | 'PANCAM' |'MINITES';
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
export const cameraNames ={
  FHAZ:	'Front Hazard Avoidance Camera',
  RHAZ:	'Rear Hazard Avoidance Camera',
  MAST:	'Mast Camera',
  CHEMCAM:	'Chemistry and Camera Complex',
  MAHLI:	'Mars Hand Lens Imager',
  MARDI:	'Mars Descent Imager',		
  NAVCAM:	'Navigation Camera',
  PANCAM:	'Panoramic Camera',
  MINITES:	'Miniature Thermal Emission Spectrometer'
}

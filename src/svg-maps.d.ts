declare module "@svg-maps/india" {
  export interface SvgMapLocation {
    id: string;
    name: string;
    path: string;
  }
  export interface SvgMap {
    label: string;
    viewBox: string;
    locations: SvgMapLocation[];
  }
  const India: SvgMap;
  export default India;
}

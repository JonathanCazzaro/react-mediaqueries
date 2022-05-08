import { ReactElement } from 'react';

export declare namespace ResponsiveTypes {

  type DeviceQueries = {
    portrait: {
      min: number | null;
      max: number | null;
    };
    landscape: {
      min: number | null;
      max: number | null;
    };
  };

  type DeviceType =
    | 'smartphone_small'
    | 'smartphone_medium'
    | 'smartphone_large'
    | 'tablet'
    | 'desktop_small'
    | 'desktop_medium'
    | 'desktop_large';

  interface Props {
    /** Specify an orientation for the media query. */
    orientation?: 'landscape' | 'portrait';
    type?: DeviceType;
    children: ReactElement<any, any>|ReactElement<any, any>[];
  }

  type DeviceQueriesConstructor = {
    portrait?: {
      min?: number | null;
      max?: number | null;
    };
    landscape?: {
      min?: number | null;
      max?: number | null;
    };
  };

  interface QueriesConstructor {
    /** Small smartphone default values =>
     * - portrait : min null | max 320px
     * - landscpe : min null | max 480px
     */
    smartphone_small?: DeviceQueriesConstructor;
    /** Medium smartphone default values =>
     * - portrait : min 321px | max 375px
     * - landscpe : min 481px | max 667px
     */
    smartphone_medium?: DeviceQueriesConstructor;
    /** Large smartphone default values =>
     * - portrait : min 376px | max 480px
     * - landscpe : min 668px | max 920px
     */
    smartphone_large?: DeviceQueriesConstructor;
    /** Tablet default values =>
     * - portrait : min 481px | max 900px
     * - landscpe : min 921px | max 1280px
     */
    tablet?: DeviceQueriesConstructor;
    /** Small desktop default values =>
     * - portrait : min 720px | max 800px
     * - landscpe : min 1281px | max 1400px
     */
    desktop_small?: DeviceQueriesConstructor;
    /** Medium desktop default values =>
     * - portrait : min 801px | max 864px
     * - landscpe : min 1401px | max 1536px
     */
    desktop_medium?: DeviceQueriesConstructor;
    /** Large desktop default values =>
     * - portrait : min 865px | max null
     * - landscpe : min 1537px | max null
     */
    desktop_large?: DeviceQueriesConstructor;
  }
}

import React, { useState, useEffect } from 'react';
import { ResponsiveTypes } from './types';

export default class ReactMediaQueries {
  #smartphone_small: ResponsiveTypes.DeviceQueries = {
    portrait: { min: null, max: 320 },
    landscape: { min: null, max: 480 },
  };
  #smartphone_medium: ResponsiveTypes.DeviceQueries = {
    portrait: { min: 321, max: 375 },
    landscape: { min: 481, max: 667 },
  };
  #smartphone_large: ResponsiveTypes.DeviceQueries = {
    portrait: { min: 376, max: 480 },
    landscape: { min: 668, max: 920 },
  };
  #tablet: ResponsiveTypes.DeviceQueries = {
    portrait: { min: 481, max: 900 },
    landscape: { min: 921, max: 1280 },
  };
  #desktop_small: ResponsiveTypes.DeviceQueries = {
    portrait: { min: 720, max: 800 },
    landscape: { min: 1281, max: 1400 },
  };
  #desktop_medium: ResponsiveTypes.DeviceQueries = {
    portrait: { min: 801, max: 864 },
    landscape: { min: 1401, max: 1536 },
  };
  #desktop_large: ResponsiveTypes.DeviceQueries = {
    portrait: { min: 865, max: null },
    landscape: { min: 1537, max: null },
  };
  #component: React.FC<ResponsiveTypes.Props> = (props) => {
    const { children, orientation, type } = props;
    const [queryMatches, setQueryMatches] = useState(true);

    let query: string = '';
    if (orientation) query += `(orientation: ${orientation})`;
    if (type) {
      const deviceType = this[type];
      const queryOrientation = orientation
        ? orientation
        : type.startsWith('desktop')
        ? 'landscape'
        : 'portrait';
      const { min, max } = deviceType[queryOrientation]!;
      if (min !== null) {
        query += `${query ? ' and ' : ''}(min-width: ${min}px)`;
      }
      if (max !== null) {
        query += `${query ? ' and ' : ''}(max-width: ${max}px)`;
      }
    }
    const mediaQuery = window.matchMedia(query);

    const handleChange = (event: MediaQueryListEvent) => {
      if (event.matches !== queryMatches) {
        setQueryMatches(event.matches);
      }
      mediaQuery.removeEventListener('change', handleChange);
    };

    useEffect(() => {
      setQueryMatches(mediaQuery.matches);
      mediaQuery.addEventListener('change', handleChange);
    }, [queryMatches]);

    return queryMatches ? children : null;
  };

  constructor(props?: ResponsiveTypes.QueriesConstructor) {
    if (props) {
      for (const device in props) {
        const { portrait, landscape } =
          props[device as ResponsiveTypes.DeviceType]!;
        if (portrait) {
          const { min, max } = portrait;          
          this[device as ResponsiveTypes.DeviceType].portrait.min =
            typeof min === 'undefined' ? null : min;
          this[device as ResponsiveTypes.DeviceType].portrait.max =
            typeof max === 'undefined' ? null : max;
        }
        if (landscape) {
          const { min, max } = landscape;          
          this[device as ResponsiveTypes.DeviceType].landscape.min =
            typeof min === 'undefined' ? null : min;
          this[device as ResponsiveTypes.DeviceType].landscape.max =
            typeof max === 'undefined' ? null : max;
        }
      }
    }
  }

  get MediaContext() {
    return this.#component;
  }

  get smartphone_small() {
    return this.#smartphone_small;
  }

  get smartphone_medium() {
    return this.#smartphone_medium;
  }

  get smartphone_large() {
    return this.#smartphone_large;
  }

  get tablet() {
    return this.#tablet;
  }

  get desktop_small() {
    return this.#desktop_small;
  }

  get desktop_medium() {
    return this.#desktop_medium;
  }

  get desktop_large() {
    return this.#desktop_large;
  }
}

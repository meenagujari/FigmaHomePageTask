import { createSlice } from '@reduxjs/toolkit';
import contentData from '../data/content.json';

interface ContentState {
  site: {
    name: string;
    tagline: string;
  };
  hero: {
    title: string;
    subtitle: string;
    buttonText: string;
  };
  about: {
    title: string;
    description: string[];
    buttonText: string;
  };
  services: {
    title: string;
    subtitle: string;
    buttonText: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
  location: {
    title: string;
    methods: Array<{
      type: string;
      title: string;
      details: string[];
    }>;
    coordinates: {
      title: string;
      address: string;
    };
    gps: {
      title: string;
      coordinates: string;
    };
  };
  faq: {
    title: string;
    subtitle: string;
    items: Array<{
      question: string;
      answer: string;
    }>;
  };
  footer: {
    contact: {
      title: string;
      email: {
        label: string;
        address: string;
      };
      phone: {
        label: string;
        number: string;
      };
      address: {
        label: string;
        details: string;
      };
    };
    quickLinks: {
      title: string;
      items: Array<{
        label: string;
        link: string;
      }>;
    };
    activities: {
      title: string;
      items: string[];
    };
    social: {
      title: string;
    };
    newsletter: {
      title: string;
    };
    copyright: string;
    legal: string[];
  };
}

const initialState: ContentState = contentData;

const contentSlice = createSlice({
  name: 'content',
  initialState,
  reducers: {},
});

export default contentSlice.reducer;

interface IStyleVariables {
  colors: {
    green: string;
    darkGrey: string;
    grey: string;
    blue: string;
    black: string;
    red: string;
    white: string;
    boxShadow: string;
  };
  fonts: {
    family: {
      primary: string;
      secondary: string;
    };
    weight: {
      regular: number;
      medium: number;
      bold: number;
    };
    size: {
      regular: string;
      small: string;
      smaller: string;
      xs: string;
      h1: string;
      h2: string;
      h3: string;
      h4: string;
      h5: string;
      h6: string;
    };
    lineHeight: {
      regular: string;
      small: string;
      smaller: string;
      xs: string;
      h1: string;
      h2: string;
      h3: string;
      h4: string;
      h5: string;
      h6: string;
    };
  };
}

const variables: IStyleVariables = {
  colors: {
    green: '#2CB22A',
    darkGrey: '#575756',
    grey: '#EEECE8',
    blue: '#0082AF',
    black: '#000000',
    red: '#D60B52',
    white: '#FFFFFF',
    boxShadow: 'rgba(0, 0, 0, 0.16)',
  },
  fonts: {
    family: {
      primary: 'Roboto, Arial, Helvetica, sans-serif',
      secondary: 'Arial, Helvetica, sans-serif',
    },
    weight: {
      regular: 400,
      medium: 500,
      bold: 700,
    },
    size: {
      regular: '1rem',
      small: '0.875rem',
      smaller: '0.875rem',
      xs: '0.75rem',
      h1: '3rem',
      h2: '2.375rem',
      h3: '1.875rem',
      h4: '1.5rem',
      h5: '1.25rem',
      h6: '1rem',
    },
    lineHeight: {
      regular: '2rem',
      small: '1.25rem',
      smaller: '1.25rem',
      xs: '1.2rem',
      h1: '3rem',
      h2: '2.5rem',
      h3: '2.5rem',
      h4: '2.5rem',
      h5: '2.5rem',
      h6: '1.25rem',
    },
  },
};

export { variables as StyleVariables, IStyleVariables };

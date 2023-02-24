import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';
import '@testing-library/react/dont-cleanup-after-each';
import '@testing-library/react';

beforeEach(() => {
  document.body.innerHTML = '';
});

'use client';

import { BeatLoader } from 'react-spinners';

export default function BeatLoaderLoading() {
  return (
    <div className="flex flex-row flex-nowrap items-center">
      <BeatLoader
        color="#000000"
        loading={true}
        cssOverride={{}}
        size={16}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      Loading...
    </div>
  );
}

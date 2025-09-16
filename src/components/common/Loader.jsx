import { Loader2 } from 'lucide-react';
import React from 'react';

const Loader = () => {
  return (
    <div className="col-span-full flex h-[300px] min-h-[50vh] justify-center">
      <Loader2 className="text-secondary h-6 w-6 animate-spin" />
    </div>
  );
};

export default Loader;

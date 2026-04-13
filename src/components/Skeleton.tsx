import React from "react";

export const UserCardSkeleton = () => (
  <div className="card p-5 flex items-center gap-4">
    <div className="skeleton w-14 h-14 rounded-xl flex-shrink-0" />
    <div className="flex-1 space-y-2">
      <div className="skeleton h-4 w-32" />
      <div className="skeleton h-3 w-44" />
    </div>
    <div className="skeleton w-7 h-7 rounded-lg" />
  </div>
);

export const UserDetailSkeleton = () => (
  <div className="max-w-lg mx-auto">
    <div className="card p-8 flex flex-col items-center gap-4">
      <div className="skeleton w-28 h-28 rounded-2xl" />
      <div className="skeleton h-6 w-40" />
      <div className="skeleton h-4 w-56" />
      <div className="skeleton h-4 w-24" />
    </div>
  </div>
);

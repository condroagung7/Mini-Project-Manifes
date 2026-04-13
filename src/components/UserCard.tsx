import React from "react";
import { Link } from "react-router-dom";
import { User } from "../types";

interface UserCardProps {
  user: User;
  staggerIndex?: number;
}

const UserCard = ({ user, staggerIndex = 0 }: UserCardProps) => {
  const delay = Math.min(staggerIndex + 1, 6);

  return (
    <Link
      to={`/users/${user.id}`}
      className={`card group p-5 hover:border-accent/40 hover:bg-ink-700/50 
                  transition-all duration-300 cursor-pointer animate-fade-in stagger-${delay}
                  flex items-center gap-4`}
    >
      <div className="relative flex-shrink-0">
        <img
          src={user.avatar}
          alt={`${user.first_name} ${user.last_name}`}
          className="w-14 h-14 rounded-xl object-cover ring-2 ring-ink-700 group-hover:ring-accent/40 transition-all duration-300"
        />
        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-success rounded-full border-2 border-ink-800" />
      </div>

      <div className="flex-1 min-w-0">
        <p className="font-display font-semibold text-ink-100 group-hover:text-accent transition-colors duration-200 truncate">
          {user.first_name} {user.last_name}
        </p>
        <p className="text-xs text-ink-500 font-mono mt-0.5 truncate">{user.email}</p>
      </div>

      <div className="flex-shrink-0 w-7 h-7 rounded-lg bg-ink-700 group-hover:bg-accent/20 
                      flex items-center justify-center transition-all duration-200">
        <svg className="w-3.5 h-3.5 text-ink-500 group-hover:text-accent transition-colors duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </Link>
  );
};

export default UserCard;

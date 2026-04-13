import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { getSingleUser } from "../api/reqres";
import { User } from "../types";
import { UserDetailSkeleton } from "../components/Skeleton";

const UserDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      if (!id) return;
      setLoading(true);
      setError(null);
      try {
        const res = await getSingleUser(Number(id));
        setUser(res.data);
      } catch (err: any) {
        setError(err.message || "User not found.");
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, [id]);

  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      <div className="max-w-lg mx-auto">
        {/* Back */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-ink-500 hover:text-ink-200 text-sm mb-6 transition-colors group animate-fade-in"
        >
          <svg className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to users
        </button>

        {loading && <UserDetailSkeleton />}

        {error && (
          <div className="card p-8 text-center animate-fade-in">
            <div className="text-4xl mb-3">🔍</div>
            <h2 className="font-display font-bold text-xl text-ink-100 mb-2">User Not Found</h2>
            <p className="text-ink-500 text-sm mb-6">{error}</p>
            <Link to="/home" className="btn-primary text-sm">
              Back to Users
            </Link>
          </div>
        )}

        {!loading && !error && user && (
          <div className="animate-fade-in">
            {/* Card */}
            <div className="card p-8 text-center">
              {/* Avatar */}
              <div className="relative inline-block mb-5">
                <img
                  src={user.avatar}
                  alt={`${user.first_name} ${user.last_name}`}
                  className="w-28 h-28 rounded-2xl mx-auto object-cover ring-4 ring-ink-700"
                />
                <div className="absolute -bottom-1.5 -right-1.5 w-6 h-6 bg-success rounded-full border-3 border-ink-800 flex items-center justify-center border-[3px]">
                  <span className="text-xs">✓</span>
                </div>
              </div>

              {/* Name */}
              <h1 className="font-display font-bold text-2xl text-ink-50 tracking-tight">
                {user.first_name} {user.last_name}
              </h1>

              {/* Email */}
              <p className="text-ink-400 font-mono text-sm mt-1 mb-6">{user.email}</p>

              {/* Divider */}
              <div className="h-px bg-ink-700 mb-6" />

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-ink-900/60 rounded-xl p-3">
                  <p className="text-xs text-ink-500 font-mono uppercase tracking-wider mb-1">ID</p>
                  <p className="font-display font-bold text-lg text-accent">#{user.id}</p>
                </div>
                <div className="bg-ink-900/60 rounded-xl p-3">
                  <p className="text-xs text-ink-500 font-mono uppercase tracking-wider mb-1">First</p>
                  <p className="font-display font-semibold text-ink-100 text-sm truncate">{user.first_name}</p>
                </div>
                <div className="bg-ink-900/60 rounded-xl p-3">
                  <p className="text-xs text-ink-500 font-mono uppercase tracking-wider mb-1">Last</p>
                  <p className="font-display font-semibold text-ink-100 text-sm truncate">{user.last_name}</p>
                </div>
              </div>

              {/* API note */}
              <div className="mt-5 flex items-center justify-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-success rounded-full" />
                <span className="text-xs text-ink-600 font-mono">
                  Fetched from GET /api/users/{id}
                </span>
              </div>
            </div>

            {/* Navigate */}
            <div className="flex gap-3 mt-4">
              {user.id > 1 && (
                <button
                  onClick={() => navigate(`/users/${user.id - 1}`)}
                  className="flex-1 btn-secondary text-sm py-2.5 flex items-center justify-center gap-2"
                >
                  ← User #{user.id - 1}
                </button>
              )}
              <button
                onClick={() => navigate(`/users/${user.id + 1}`)}
                className="flex-1 btn-secondary text-sm py-2.5 flex items-center justify-center gap-2"
              >
                User #{user.id + 1} →
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserDetailPage;

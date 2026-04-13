import React, { useEffect, useState } from "react";
import { getUsers } from "../api/reqres";
import { User } from "../types";
import UserCard from "../components/UserCard";
import Pagination from "../components/Pagination";
import { UserCardSkeleton } from "../components/Skeleton";

const HomePage = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await getUsers(page);
        setUsers(res.data);
        setTotalPages(res.total_pages);
        setTotal(res.total);
      } catch (err: any) {
        setError(err.message || "Failed to load users.");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [page]);

  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-8 animate-fade-in">
          <div className="flex items-end justify-between mb-1">
            <h1 className="font-display font-bold text-3xl text-ink-50 tracking-tight">
              All Users
            </h1>
            {!loading && (
              <span className="font-mono text-xs text-ink-500 mb-1">
                {total} total
              </span>
            )}
          </div>
          <p className="text-ink-500 text-sm">
            Browse and view user details from the reqres API.
          </p>
          <div className="h-px bg-gradient-to-r from-accent/30 to-transparent mt-4" />
        </div>

        {/* Error */}
        {error && (
          <div className="bg-danger/10 border border-danger/20 rounded-xl p-4 mb-6 flex items-center gap-3 animate-fade-in">
            <span className="text-danger text-xl">⚠</span>
            <div>
              <p className="text-danger font-medium text-sm">Error loading users</p>
              <p className="text-ink-500 text-xs mt-0.5">{error}</p>
            </div>
            <button
              onClick={() => setPage(1)}
              className="ml-auto text-xs text-danger border border-danger/30 rounded-lg px-3 py-1.5 hover:bg-danger/10 transition-colors"
            >
              Retry
            </button>
          </div>
        )}

        {/* User List */}
        <div className="space-y-3">
          {loading
            ? Array.from({ length: 6 }).map((_, i) => <UserCardSkeleton key={i} />)
            : users.map((user, i) => (
                <UserCard key={user.id} user={user} staggerIndex={i} />
              ))}
        </div>

        {/* Pagination */}
        {!loading && !error && totalPages > 1 && (
          <div className="mt-8 animate-fade-in">
            <Pagination
              currentPage={page}
              totalPages={totalPages}
              onPageChange={(p) => {
                setPage(p);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            />
            <p className="text-center text-xs text-ink-600 font-mono mt-3">
              Page {page} of {totalPages}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;

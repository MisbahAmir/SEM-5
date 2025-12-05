import React, { useEffect, useState, useMemo } from "react";
import { getAllUsers } from "../../src/services/admin.js";
import { Search, Users, ArrowLeftCircle, ArrowRightCircle } from "lucide-react";

const PAGE_SIZE = 7;

const AdminUsers = () => {
  const token = localStorage.getItem("token");

  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  const loadUsers = async () => {
    try {
      const data = await getAllUsers(token);
      setUsers(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return users.filter(
      (u) =>
        u.name.toLowerCase().includes(q) ||
        u.email.toLowerCase().includes(q) ||
        (u.role || "").toLowerCase().includes(q)
    );
  }, [users, query]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));

  const paged = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return filtered.slice(start, start + PAGE_SIZE);
  }, [filtered, page]);

  return (
    <div className="min-h-screen bg-[#111] text-white p-6 md:p-10">
      {/* HEADER */}
      <header className="flex justify-between items-center mb-8">
        <div className="flex gap-4 items-center">
          <div className="bg-gradient-to-br from-red-500 to-red-700 p-4 rounded-xl">
            <Users size={36} className="text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">All Users</h1>
            <p className="text-gray-300">Admin panel — Manage all registered users</p>
          </div>
        </div>

        {/* SEARCH BAR */}
        <div className="relative w-72">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setPage(1);
            }}
            placeholder="Search users..."
            className="
              w-full pl-12 pr-4 py-3 rounded-xl 
              bg-[#0d0d0d] border border-gray-800 
              text-white placeholder-gray-500
              focus:ring-2 focus:ring-red-600 outline-none
            "
          />
        </div>
      </header>

      {/* USERS TABLE */}
      <div className="bg-[#0d0d0d] p-6 rounded-2xl border border-gray-800 shadow-xl">
        {filtered.length === 0 ? (
          <p className="text-center text-gray-400 py-10">No users found</p>
        ) : (
          <>
            <table className="w-full text-left">
              <thead>
                <tr className="text-gray-400 border-b border-gray-800">
                  <th className="py-3">Name</th>
                  <th className="py-3">Email</th>
                  <th className="py-3">Role</th>
                  <th className="py-3">Created At</th>
                </tr>
              </thead>

              <tbody>
                {paged.map((u) => (
                  <tr
                    key={u._id}
                    className="border-b border-gray-800 hover:bg-[#1a1a1a] transition"
                  >
                    <td className="py-3">{u.name}</td>
                    <td className="py-3 text-red-300">{u.email}</td>
                    <td className="py-3">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          u.role === "admin"
                            ? "bg-red-500 text-white"
                            : "bg-gray-700 text-gray-200"
                        }`}
                      >
                        {u.role}
                      </span>
                    </td>
                    <td className="py-3 text-gray-400">
                      {new Date(u.createdAt).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* PAGINATION */}
            <div className="flex justify-between items-center mt-6">
              <p className="text-gray-400 text-sm">
                Showing {Math.min((page - 1) * PAGE_SIZE + 1, filtered.length)} -{" "}
                {Math.min(page * PAGE_SIZE, filtered.length)} of {filtered.length}
              </p>

              <div className="flex gap-2">
                <button
                  disabled={page === 1}
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  className={`p-2 rounded-xl ${
                    page === 1
                      ? "opacity-40 cursor-not-allowed"
                      : "bg-gray-800 hover:bg-gray-700"
                  }`}
                >
                  <ArrowLeftCircle size={20} />
                </button>

                {Array.from({ length: totalPages }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setPage(i + 1)}
                    className={`px-3 py-1 rounded-xl ${
                      page === i + 1
                        ? "bg-red-500 text-white"
                        : "bg-gray-800 text-gray-200"
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}

                <button
                  disabled={page === totalPages}
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  className={`p-2 rounded-xl ${
                    page === totalPages
                      ? "opacity-40 cursor-not-allowed"
                      : "bg-gray-800 hover:bg-gray-700"
                  }`}
                >
                  <ArrowRightCircle size={20} />
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AdminUsers;

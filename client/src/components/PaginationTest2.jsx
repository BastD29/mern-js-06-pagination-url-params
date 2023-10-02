import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function PaginationTest2() {
  const navigate = useNavigate();
  const location = useLocation();

  const [users, setUsers] = useState([]);
  const [totalPages, setTotalPages] = useState(0);

  const query = new URLSearchParams(location.search);
  const page = parseInt(query.get("page")) || 1;
  const limit = 2;

  useEffect(() => {
    fetchUsers();
  }, [page, limit]);

  const fetchUsers = async () => {
    try {
      const response = await fetch(`/api/?page=${page}&limit=${limit}`);
      console.log("response:", response);
      const data = await response.json();
      console.log("data:", data);
      setUsers(data.results);
      setTotalPages(Math.ceil(data.totalCount / limit));
    } catch (error) {
      console.error("Error fetching users", users);
    }
  };

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handlePageChange = (pageNumber) => {
    navigate(`/?page=${pageNumber}`);
  };

  return (
    <>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age} - {user.city}
          </li>
        ))}
      </ul>
      <button disabled={page === 1} onClick={() => handlePageChange(page - 1)}>
        Previous
      </button>
      {pages.map((pageNumber) => (
        <button
          key={pageNumber}
          disabled={pageNumber === page}
          onClick={() => handlePageChange(pageNumber)}
        >
          {pageNumber}
        </button>
      ))}
      <button
        disabled={page >= totalPages}
        onClick={() => handlePageChange(page + 1)}
      >
        Next
      </button>
    </>
  );
}

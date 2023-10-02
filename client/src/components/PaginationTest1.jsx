import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function PaginationTest1() {
  const location = useLocation();
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  // prettier-ignore
  const currentPage = new URLSearchParams(location.search).get("page") || 1;

  useEffect(() => {
    fetchUsers();
  }, [currentPage]);

  const fetchUsers = async () => {
    try {
      //   const response = await fetch(
      //     `http://localhost:6060/users?page=${currentPage}`
      //   );
      const response = await fetch(`/api/?page=${currentPage}`);
      console.log("response:", response);
      const data = await response.json();
      console.log("data:", data);
      setUsers(data.results);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.error("Error fetching users", error);
    }
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
      <div>
        {[...Array(totalPages).keys()].map((value, index) => (
          <button key={index} onClick={() => navigate(`/?page=${index + 1}`)}>
            {index + 1}
          </button>
        ))}
      </div>
    </>
  );
}

"use client";
import React from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import Loading from "./loading";

export default function Test() {
  // Access the client
  // const queryClient = useQueryClient();
  // Queries
  let getdata = async () => {
    let { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/todo  ",
    );

    return data;
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ["todos"],
    queryFn: getdata,
  });
  console.log(isError);

  return (
    <div>
      {isLoading ? (
<Loading/>      ) : (
        data?.map((data: any) => (
          <span className="btn btn-primary mx-2  " key={data.id}>
            {data.title}
          </span>
        ))
      )}
    </div>
  );
}

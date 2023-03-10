import React, { useEffect, useState } from "react";
import { User } from "@supabase/supabase-js";
import supabase from "../configs/supabase";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Container from "../components/Container";

const HomePage = () => {
  const [user, setUser] = useState<User | null>();

  const getUser = async () => {
    const { data } = await supabase.auth.getUser();
    setUser(data?.user);
  };

  useEffect(() => {
    getUser();
  }, []);

  console.log(user);

  return (
    <div className="flex">
      <div className="w-[30%] fixed">
      <Sidebar/>
      </div>
      <div className="w-[80%] absolute right-0">
        <Navbar />
        <Container />
      </div>
    </div>
  );
};

export default HomePage;

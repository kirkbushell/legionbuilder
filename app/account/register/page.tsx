"use client";

import React, { useState } from "react";
import signUp from "@/app/firebase/auth/signup";
import { useRouter } from "next/navigation";

const page = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string>("");

  const router = useRouter();

  const handleSignIn = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!email) {
      setError("Email required!");
    }
    if (!password) {
      setError("Password required!");
      return;
    }

    setError("");
    const { result, error } = await signUp(email, password);
    if (error) {
      setError("error");
      return console.log(error);
    }
    console.log(result);
    return router.push("/");
  };

  return (
    <main className="flex flex-col items-center text-stone-50 p-4">
      <h2 className="font-graduate text-xl font-bold mb-8">REGISTER:</h2>
      {error ? <div className="text-red-500 mb-4">{error}</div> : null}
      <form onSubmit={handleSignIn} className="flex flex-col items-start">
        <label htmlFor="email" className="font-graduate">
          Email:
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-4 text-stone-900"
        />
        <label htmlFor="password" className="font-graduate">
          Password:
        </label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mb-4 text-stone-900"
        />
        <button
          type="submit"
          className="border-4 border-green-950 rounded-full px-4 py-1 dataslate_background text-green-950 font-semibold font-graduate hover:border-cyan-700 hover:text-cyan-700"
        >
          Register
        </button>
      </form>
    </main>
  );
};

export default page;

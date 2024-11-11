import { Header } from "@/components/header/Header";
import React from "react";

const page = () => {
  return (
    <div className="bg-background px-4 lg:px-44"><Header />
      <main className="container max-w-screen-lg mx-auto py-8 flex flex-col justify-center lg:flex-row gap-8">
        
        <article className="lg:w-3/4">
          <h1>Post destacado</h1>
          <h2 className="text-xl font-bold pt-10 border rounded-xl p-4 mt-2">
            Seccion
          </h2>
        </article>
        <aside className="lg:w-1/4">
          <h1>Aside</h1>
          <h2 className="text-xl font-bold pt-10 border rounded-xl p-4 mt-2">
            Seccion
          </h2>
        </aside>
      </main>
    </div>
  );
};

export default page;

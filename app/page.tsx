"use client";

import { useState } from "react";
import FeaturedPost from "@/components/custom/featured-post/FeaturedPost";

import Footer from "@/components/custom/footer/Footer";

import { posts } from "@/data/posts";
import { Post } from "@/types/blog";
import { categories } from "@/data/categories";
import FooterImage from "@/components/custom/footer-image/FooterImage";
import Sidebar from "@/components/custom/sidebar/Sidebar";
import CategoryFilter from "@/components/custom/category-filter/CategoryFilter";
import PostFilter from "@/components/custom/post-filter/PostFilter";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos");

  const featuredPost: Post | undefined =
    selectedCategory === "Todos"
      ? posts[0]
      : posts.find((post) => post.category === selectedCategory);

  return (
    <div className="bg-background max-w-screen-xl mx-auto lg:px-0 ">
      <main className="container mx-auto  py-8 flex flex-col justify-center lg:flex-row gap-8">
        <section className="lg:w-3/4">
          {/* <h3 className="text-xl font-bold pt-10">Post Destacado</h3> */}

          {/* Post destacado */}
          {featuredPost && <FeaturedPost post={featuredPost} />}

          <h3 className="text-xl font-bold mt-6">Filtrar por</h3>

          {/* Filtro de Categorías */}
          <div className="flex flex-col items-start gap-10">
            <CategoryFilter
              categories={categories}
              selectedCategory={selectedCategory}
              onCategorySelect={setSelectedCategory}
            />

            {/* SEPARATOR */}
            <Separator />
          </div>

          {/* Listado de posts */}
          <PostFilter posts={posts} selectedCategory={selectedCategory} />
        </section>
        <aside className="lg:w-1/4 lg:mt-8">
          <Sidebar />
        </aside>
      </main>

      {/* <Footer /> */}
      <footer className="my-10 border rounded-lg">
        <FooterImage />
        <Footer />
      </footer>
    </div>
  );
}

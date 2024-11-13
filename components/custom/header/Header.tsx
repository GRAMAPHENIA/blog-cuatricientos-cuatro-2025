"use client";

export function Header() {
  return (
    <header className="py-10 text-center bg-background text-foreground transition-colors duration-300">
      <h2 className="text-3xl font-bold">Bienvenido a nuestro blog</h2>
      <p className="mt-2 text-lg">
        Explorá temas interesantes, aprende nuevas habilidades y mantenete
        informado.
      </p>
    </header>
  );
}

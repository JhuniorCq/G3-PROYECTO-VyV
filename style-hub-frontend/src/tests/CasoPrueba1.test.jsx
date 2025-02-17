import { describe, it, expect, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import { Home } from "../pages/Home/Home";
import { ProductsContext } from "../context/ProductsContext/ProductsContext";

describe("CP-002: Manejo de error al cargar los productos cuando la API falla", () => {
  it("Debe mostrar el mensaje de error cuando la API falla y no debe renderizar productos incorrectos", async () => {
    // Mockeamos el contexto para simular el error de la API
    const mockContextValue = {
      responseGet: null, // No hay productos porque la API falló
      loadingGet: false, // Ya terminó de cargar
      errorGet: "Ocurrió un problema al obtener los productos", // Mensaje de error devuelto por la API
      refetchProducts: vi.fn(), // Simulación de la función de recarga
    };

    render(
      <ProductsContext.Provider value={mockContextValue}>
        <Home />
      </ProductsContext.Provider>
    );

    // Verificar que el mensaje de error se muestra en la interfaz
    await waitFor(() => {
      expect(
        screen.getByText("Ocurrió un problema al obtener los productos")
      ).toBeInTheDocument();
    });

    // Verificar que la lista de productos NO se renderiza
    const productSections = screen.queryByTestId("boxSections");
    expect(productSections).not.toBeInTheDocument();
  });
});

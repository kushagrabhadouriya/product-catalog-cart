import { CartProvider } from "@/context/CartContext";
import Header from "@/components/Header";
import "./globals.css";

export const metadata = {
  title: "Product Catalog",
  description: "Browse DummyJSON products and add them to a persistent cart."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Header />
          <main className="page-shell">{children}</main>
        </CartProvider>
      </body>
    </html>
  );
}

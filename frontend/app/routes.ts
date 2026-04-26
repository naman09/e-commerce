import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("market", "routes/marketplace.tsx"),
  route("product/:id", "routes/product.tsx"),
  route("cart", "routes/cart.tsx"),
  route("profile", "routes/profile.tsx"),
  route("orders", "routes/orders.tsx"),
  route("order/:id", "routes/order.tsx"),
  route("payment", "routes/post-payment.tsx")
] satisfies RouteConfig;

import { type RouteConfig, index, route } from "@react-router/dev/routes";
import { MARKETPLACE_ROUTE } from "./commons/constants/app.constants";

export default [
  index("routes/home.tsx"),
  route(MARKETPLACE_ROUTE, "routes/marketplace.tsx"),
  route("product/:id", "routes/product.tsx"),
  route("cart", "routes/cart.tsx"),
  route("profile", "routes/profile.tsx"),
  route("orders", "routes/orders.tsx"),
  route("order/:id", "routes/order.tsx"),
  route("payment", "routes/post-payment.tsx"),
  route("support", "routes/customer-support.tsx")
] satisfies RouteConfig;

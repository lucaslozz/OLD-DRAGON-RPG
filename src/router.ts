const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");
export const routerBasename = basePath === "" ? "/" : basePath;

export const routes = {
  compendio: "/compendio",
  historia: "/historia",
} as const;

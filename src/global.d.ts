declare module "*.module.css" {
  const content: { [className: string]: string };
  export = content;
}

declare module "*.svg" {
  const content: any;
  export = content;
}

declare module "*.png" {
  const content: any;
  export = content;
}

declare module "*.jpg" {
  const content: any;
  export = content;
}

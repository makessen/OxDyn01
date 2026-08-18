import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
        "colors": {
                "surface-container": "#1d2022",
                "surface-container-highest": "#323537",
                "surface-container-low": "#191c1e",
                "secondary-fixed-dim": "#adc6ff",
                "on-error-container": "#ffdad6",
                "surface-bright": "#363a3b",
                "inverse-primary": "#565e74",
                "on-secondary": "#002e6a",
                "surface-container-high": "#272a2c",
                "inverse-on-surface": "#2d3133",
                "inverse-surface": "#e0e3e5",
                "on-surface-variant": "#c6c6cd",
                "surface-tint": "#bec6e0",
                "on-tertiary-fixed-variant": "#3a485c",
                "primary-fixed": "#dae2fd",
                "background": "#101415",
                "surface": "#101415",
                "tertiary-fixed": "#d5e3fd",
                "error": "#ffb4ab",
                "surface-container-lowest": "#0b0f10",
                "on-secondary-fixed-variant": "#004395",
                "secondary-fixed": "#d8e2ff",
                "on-secondary-fixed": "#001a42",
                "error-container": "#93000a",
                "tertiary-fixed-dim": "#b9c7e0",
                "on-secondary-container": "#e6ecff",
                "on-surface": "#e0e3e5",
                "surface-dim": "#101415",
                "secondary": "#adc6ff",
                "on-primary": "#283044",
                "on-background": "#e0e3e5",
                "primary-fixed-dim": "#bec6e0",
                "on-error": "#690005",
                "primary": "#bec6e0",
                "tertiary": "#b9c7e0",
                "secondary-container": "#0566d9",
                "surface-variant": "#323537",
                "on-tertiary-fixed": "#0d1c2f",
                "on-primary-container": "#798098",
                "tertiary-container": "#09182a",
                "on-primary-fixed-variant": "#3f465c",
                "primary-container": "#0f172a",
                "outline": "#909097",
                "on-tertiary": "#233144",
                "outline-variant": "#45464d",
                "on-tertiary-container": "#738298",
                "on-primary-fixed": "#131b2e"
        },
        "borderRadius": {
                "DEFAULT": "0.125rem",
                "lg": "0.25rem",
                "xl": "0.5rem",
                "full": "0.75rem"
        },
        "spacing": {
                "container-max": "1440px",
                "md": "16px",
                "gutter": "24px",
                "xl": "40px",
                "base": "4px",
                "xs": "4px",
                "sm": "8px",
                "lg": "24px"
        },
        "fontFamily": {
                "headline-sm": [
                        "Inter"
                ],
                "body-lg": [
                        "Inter"
                ],
                "body-md": [
                        "Inter"
                ],
                "headline-md": [
                        "Inter"
                ],
                "body-sm": [
                        "Inter"
                ],
                "display-lg": [
                        "Inter"
                ],
                "mono-data": [
                        "JetBrains Mono"
                ],
                "label-caps": [
                        "Inter"
                ],
                "headline-lg": [
                        "Inter"
                ]
        },
        "fontSize": {
                "headline-sm": [
                        "20px",
                        {
                                "lineHeight": "28px",
                                "fontWeight": "600"
                        }
                ],
                "body-lg": [
                        "18px",
                        {
                                "lineHeight": "28px",
                                "fontWeight": "400"
                        }
                ],
                "body-md": [
                        "16px",
                        {
                                "lineHeight": "24px",
                                "fontWeight": "400"
                        }
                ],
                "headline-md": [
                        "24px",
                        {
                                "lineHeight": "32px",
                                "fontWeight": "600"
                        }
                ],
                "body-sm": [
                        "14px",
                        {
                                "lineHeight": "20px",
                                "fontWeight": "400"
                        }
                ],
                "display-lg": [
                        "48px",
                        {
                                "lineHeight": "56px",
                                "letterSpacing": "-0.02em",
                                "fontWeight": "700"
                        }
                ],
                "mono-data": [
                        "13px",
                        {
                                "lineHeight": "20px",
                                "fontWeight": "450"
                        }
                ],
                "label-caps": [
                        "12px",
                        {
                                "lineHeight": "16px",
                                "letterSpacing": "0.05em",
                                "fontWeight": "700"
                        }
                ],
                "headline-lg": [
                        "32px",
                        {
                                "lineHeight": "40px",
                                "letterSpacing": "-0.01em",
                                "fontWeight": "600"
                        }
                ]
        }
    },
  },
  plugins: [],
};
export default config;

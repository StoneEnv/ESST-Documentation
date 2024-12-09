/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {}
  },
  daisyui: {
    themes: [{
      light: {
        ...require("daisyui/src/theming/themes")["light"],
        "primary": "#164E63",
        "secondary": "#EAB308",
        "accent": "#9A3412",
        "neutral": "#0F172A",
        "primary-content": "#E2E8F0",
        "secondary-content": "#713F12",
        "accent-content": "#FFEDD5",
        "neutral-content": "#CBD5E1",
        "base-100": "#ffffff",
        "base-200": "#F5F5F5",
        "base-300": "#E5E5E5",
        "base-content": "#1E293B",
        "info": "#22D3EE",
        "success": "#A3E635",
        "warning": "#FDE047",
        "error": "#EF4444",
        "info-content": "#111827",
        "success-content": "#365314",
        "warning-content": "#854D0E",
        "error-content": "#1F2937"
      }
    }
    // {
    //   dark: {
    //     ...require("daisyui/src/theming/themes")["dark"],
    //     primary: "#2185d0",
    //     secondary: "#2a323c",
    //   },
    // }
    ]
  },
  plugins: [require("daisyui")]
};
# ESST Documentation

Created using Daisy UI, Tailwind and PostCSS following the guide at https://daisyui.com/blog/npm-init-daisyui/. 

Add any custom CSS to the style.css file and not the base.css file. The base.css can be overwritten if Tailwind is compiled again. 

The style.css has already been generated with tailwind and shouldn't need any scripts. Below are the steps just in case it needs to be processed again. 

## How to compile Tailwind
1. Install Node (preferably using NVM)
    - NVM: https://github.com/nvm-sh/nvm
    - NVM-Windows: https://github.com/coreybutler/nvm-windows
2. Run `npm install` to install all the existing dependencies
3. To manually generate the Daisy UI and Tailwind styles use `npx postcss-cli tailwind.css -o base.css`.
4. To run with Nodemon use `npm run dev` that will watch for changes.
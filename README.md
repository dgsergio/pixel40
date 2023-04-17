# Pixel40 React website
This is a website application and __Pixel40*__ official site. You can visit it at [www.pixel40.com.ar](https://www.pixel40.com.ar)

## Technology used
### React, Next.js, CSS en modules
This SPA project was created with the React library using hooks and extending its capabilities with Next.Js. This last framework was chosen since it allows me routing in a very efficient way and benefits me with server side rendering.

### App Architecture
The application is completely responsive, adapting to any type of device.

The **CSS style** of the website was completely coded by hand, implementing the principle of modules. Just like **JSX**, no external code was copied.

In order to maintain full control over the app, external libraries such as Bootstrap or Tailwind were not used.

### Animations
All animations were created manually with CSS, with the exception of the home page scroll animations where *AOS dependency* was installed as it is a practical solution with pretty results.

### Highlights
- Implementation of the **Google Cloud Youtube API** on the video page, where the latest videos published by the channel are displayed.
- Custom HOOK creation to fetch data via a Javascript async await function.
- Iteration of an Array through the Javascript map method and displaying it on the screen. YouTube videos are an example of this, as are the modules in the *“Curso”* section.
- Making of multiple animated modals with the help of Context in React to handle state across all components. A good example is in the home page section where we can open the modal to *“Reproducir Capítulo 1”* or the modal for *“Precio y Formas de Pago”*.
  
## *About Pixel40
[Pixel40](http://pixel40.com.ar) is a personal project, hosted by Sergio Garofalo, where you can find a lot of free content in Spanish to learn softwares related to graphic design, especially Adobe Photoshop.

Thanks to the success achieved on social networks (On [YouTube](https://youtube.com/@pixel40) more than 200k subscribers and on [TikTok](https://www.tiktok.com/@estudiopixel40) almost 60k) Pixel40 became the number 1 place to get free Photoshop tutorials in the Spanish-speaking world.

Sergio on the Pixel40 platform also offers paid courses, personalized classes of Photoshop and web solutions.

## Getting Started
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

First, install the dependecys:

```bash
npm install
```
 Then run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
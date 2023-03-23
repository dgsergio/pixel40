import "@/styles/globals.css";
import ModalProvider from "../store/modal-context";

export default function App({ Component, pageProps }) {
  return (
    <ModalProvider>
      <Component {...pageProps} />
    </ModalProvider>
  );
}

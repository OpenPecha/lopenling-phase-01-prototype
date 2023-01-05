import indrajalaLogo from "~/file/indrajalaLogo.png";

export default function Footer() {
  return (
    <footer className="p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-800 sticky top-[100vh] bottom-0">
      <div className="mx-auto max-w-screen-xl text-center">
        <a
          href="#"
          className="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <img
            src={indrajalaLogo}
            style={{ maxHeight: 40, objectFit: "contain" }}
          ></img>
          Indrajala
        </a>
      </div>
    </footer>
  );
}

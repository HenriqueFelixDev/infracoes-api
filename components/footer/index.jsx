export default function Footer() {
  return (
    <footer className="cntr-footer">
      <a
        href="https://vercel.com?filter=next.js&utm_source=github&utm_medium=example&utm_campaign=next-example"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{' '}
        <img src="/vercel.svg" alt="Vercel Logo" className="sml-logo" />
      </a>
      &nbsp;|&nbsp;
      <a href="https://github.com/HenriqueFelixDev" target="_blank">
        HenriqueFelix.dev
        <img height="24" 
          className="ml-2"
          src="https://www.henriquefelix.dev.br/favicons/favicon-32x32.png" />
      </a>
    </footer>
  )
}
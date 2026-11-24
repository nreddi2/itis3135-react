import { Fragment } from 'react';
const links = [['Home', './'], ['Contract', 'contract.html'], ['Introduction', 'introduction.html'], ['About', 'about.html']];
export default function Header({page}) {
    return <header>
        <h1>Neelesh Reddi's Noble Raven | ITIS3135</h1>
        <p>Front-End Web Application Development · Fall 2026</p>
        <nav aria-label="Course pages">
            {links.map(([label,href],index) => <Fragment key={label}>
                {index > 0 && ' | '}<a href={href} aria-current={page === label ? 'page' : undefined}>{label}</a>
            </Fragment>)}
        </nav>
        <nav aria-label="Standalone projects">
            <a href="https://webpages.charlotte.edu/nreddi1/itis3135/stuff/WhAt%20a%20MeSs%21.HTM">CRAPpy Page</a> | <a href="https://webpages.charlotte.edu/nreddi1/itis3135/hobby/">Hobby</a> | <a href="https://webpages.charlotte.edu/nreddi1/itis3135/nobleraven/">Noble Raven</a>
        </nav>
    </header>;
}

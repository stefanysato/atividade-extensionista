import FormfacadeEmbed from "@formfacade/embed-react";



export default function Ratings() {
    return (
        <main className="page-content">
            <h1>Deixe sua avaliação!</h1>

            <p>Elogios? Sugestões?</p>
            <p>Por favor, responda o formulário abaixo</p>
            <p>Sua opinião é muito importante! :)</p>

            {/* <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSd0DDBo-MMM-_c4sL1U7Tc87c9lqxBBSyQ9lovqX6zdTn5mKw/viewform?embedded=true" width="100%" height="2989" frameborder="0" marginheight="0" marginwidth="0">Carregando…</iframe> */}
            <FormfacadeEmbed

                formFacadeURL="https://formfacade.com/include/106707031133280410292/form/1FAIpQLSd0DDBo-MMM-_c4sL1U7Tc87c9lqxBBSyQ9lovqX6zdTn5mKw/classic.js/?div=ff-compose"

                onSubmitForm={() => console.log('Form submitted')}

            />
        </main>
    )
}
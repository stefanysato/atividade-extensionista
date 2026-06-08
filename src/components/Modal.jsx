import './Modal.css'

import inst1 from '../assets/img/inst1.png'
import inst2 from '../assets/img/inst2.png'
import inst3 from '../assets/img/inst3.png'

export default function Modal({ isOpen, closeModal }) {

    if (isOpen) {
        return (
            <div className='modal-bg' onClick={closeModal}>
                <div className='modal-container' onClick={(e) => e.stopPropagation()}>
                    <p></p>
                    <p>1. Abra o menu do seu navegador</p>
                    <img src={inst1} alt="" />
                    <p>2. Procure pela opção 'Adicionar à tela inicial'</p>
                    <img src={inst2} alt="" />
                    <p>3. Clique no botão 'instalar'</p>
                    <img src={inst3} alt="" />

                    <button className='modal-close-btn' onClick={closeModal}>
                        X
                    </button>
                </div>
            </div>
        )
    }

    return null;
}
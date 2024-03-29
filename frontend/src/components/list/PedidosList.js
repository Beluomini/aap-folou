import React, { useState, useEffect } from 'react';

import { FaTrashAlt, FaRegEdit } from 'react-icons/fa';

import { PedidoList } from './styledPedidosList';

import api from "../../services/api";

function PedidosList({ id, fk_id_product, fk_id_client, fk_id_pet_shop, create_date, payment_date, payment_method, price, fk_cupom, status, handleRemove, handleEdit }) {

    const [cliente, setCliente] = useState({});
    const [produto, setProduto] = useState({});

    const remove = (e) => {
        e.preventDefault();
        handleRemove(id);
    }

    const edit = (e) => {
        e.preventDefault();
        handleEdit(id);
    }

    useEffect(() => {
        api.getClientesById(fk_id_client).then((resposta) => setCliente(resposta))
    }, []);

    useEffect(() => {
        api.getProductsById(fk_id_product).then((resposta) => setProduto(resposta))
    }, []);

    return (
        <PedidoList>
            <p>Cliente: {cliente.name}</p>
            <p>Produto: {produto.name}</p>
            <p>Data Criação: {create_date} </p>
            <p>Data Pagamento: {payment_date} </p>
            <p>Método Pagamento: {payment_method}</p>
            <p>R${price} </p>
            <p>{fk_cupom}</p>
            <p>{status}</p>

            <div className='botoes'>
                <button onClick={remove}>
                    <FaTrashAlt /> Excluir
                </button>
                <button onClick={edit}>
                    <FaRegEdit /> Editar
                </button>
            </div>
        </PedidoList>

    )
}

export default PedidosList
import { useEffect, useState } from "react";
import { listarProdutos, adicionarProduto, deletarProduto } from "./api/produtos";
import type { Produto } from "./api/produtos";
import ProdutoForm from "./components/ProdutoForm";
import ProdutoLista from "./components/ProdutoLista";


export default function App() {
const [produtos, setProdutos] = useState<Produto[]>([]);


async function carregar() {
setProdutos(await listarProdutos());
}


async function salvar(produto: Produto) {
await adicionarProduto(produto);
await carregar();
}


async function remover(id: number) {
await deletarProduto(id);
await carregar();
}


useEffect(() => { carregar(); }, []);


return (
<div style={{ padding: "20px", maxWidth: "500px" }}>
<h1>Produtos</h1>
<ProdutoForm onSubmit={salvar} />
<ProdutoLista produtos={produtos} onDelete={remover} />
</div>
);
}
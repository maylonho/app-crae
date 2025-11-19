export type Produto = {
id?: number;
nome: string;
preco: number;
};

const API = "http://localhost/api";


export async function listarProdutos(): Promise<Produto[]> {
const r = await fetch(`${API}/listar.php`);
return await r.json();
}


export async function adicionarProduto(produto: Produto): Promise<void> {
await fetch(`${API}/add.php`, {
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify(produto)
});
}


export async function deletarProduto(id: number): Promise<void> {
await fetch(`${API}/delete.php?id=${id}`);
}
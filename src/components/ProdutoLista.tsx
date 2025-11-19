import type { Produto } from "../api/produtos";


type Props = {
produtos: Produto[];
onDelete: (id: number) => void;
};


export default function ProdutoLista({ produtos, onDelete }: Props) {
return (
<ul>
{produtos.map((p) => (
<li key={p.id}>
{p.nome} — R$ {p.preco}
<button onClick={() => onDelete(p.id!)}>Excluir</button>
</li>
))}
</ul>
);
}
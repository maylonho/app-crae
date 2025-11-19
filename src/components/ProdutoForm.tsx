import { useState } from "react";
import type { Produto } from "../api/produtos";

type Props = {
  onSubmit: (produto: Produto) => void;
};

export default function ProdutoForm({ onSubmit }: Props) {
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");

  function enviar(e: React.FormEvent) {
    e.preventDefault();

    // Impedir envio em branco
    if (nome.trim() === "" || preco.trim() === "") return;

    onSubmit({
      nome,
      preco: Number(preco),
    });

    // limpar campos
    setNome("");
    setPreco("");
  }

  return (
    <form onSubmit={enviar}>
      <input
        type="text"
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />

      <input
        type="number"
        placeholder="Preço"
        value={preco}
        onChange={(e) => setPreco(e.target.value)}
      />

      <button type="submit">Adicionar</button>
    </form>
  );
}

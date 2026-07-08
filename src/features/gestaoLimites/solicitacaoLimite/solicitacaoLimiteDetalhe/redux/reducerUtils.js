export const addComentario = (comentarios, conteudo) => {
  const newObj = ({}, comentarios);

  const comentario = {
    data: new Date(),
    tipo: 'comentario_usuario',
    conteudo,
  };

  newObj.push(comentario);
  return [...newObj];
};

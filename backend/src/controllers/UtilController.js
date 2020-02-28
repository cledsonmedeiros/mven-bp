module.exports = {
  async atual (req, res) {
    let agora = new Date();
    let atual = {
      data: {
        iso: {
          full: `${agora.toLocaleDateString('pt-BR').split('/')[2]}-${agora.toLocaleDateString('pt-BR').split('/')[1]}-${agora.toLocaleDateString('pt-BR').split('/')[0]}`,
          min: `${agora.toLocaleDateString('pt-BR').split('/')[2]}-${agora.toLocaleDateString('pt-BR').split('/')[1]}`,
        },
        normal: {
          full: agora.toLocaleDateString('pt-BR'),
          min: `${agora.toLocaleDateString('pt-BR').split('/')[1]}/${agora.toLocaleDateString('pt-BR').split('/')[2]}`,
          horaAtual: agora.toLocaleTimeString('pt-BR'),
          horaAtualMin: `${agora.toLocaleTimeString('pt-BR').split(":")[0]}:${agora.toLocaleTimeString('pt-BR').split(":")[1]}`,
          dataHoraAtual: `${agora.toLocaleDateString('pt-BR')} ${agora.toLocaleTimeString('pt-BR')}`,
          dataHoraAtualMin: `${agora.toLocaleDateString('pt-BR')} ${agora.toLocaleTimeString('pt-BR').split(":")[0]}:${agora.toLocaleTimeString('pt-BR').split(":")[1]}`,
        }
      },
      hora: {
        full: agora.toLocaleTimeString('pt-BR'),
        min: `${agora.toLocaleTimeString('pt-BR').split(":")[0]}:${agora.toLocaleTimeString('pt-BR').split(":")[1]}`,
      },
      datahora: {
        full: `${agora.toLocaleDateString('pt-BR')} ${agora.toLocaleTimeString('pt-BR')}`,
        min: `${agora.toLocaleDateString('pt-BR')} ${agora.toLocaleTimeString('pt-BR').split(":")[0]}:${agora.toLocaleTimeString('pt-BR').split(":")[1]}`,
      }
    }
    return res.status(200).json(atual);
  },
};

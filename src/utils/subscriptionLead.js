import axios from 'axios';
import qs from 'qs';

const subscriptionLead = async userLeadInfos => {
  const { nome_contato, email, telefone, cidade, outros, interesses } =
    userLeadInfos;
  const data = qs.stringify({
    tipo_origem: '3',
    id_outra_origem: '3',
    tipo_de_interesse: '0',
    id_empresa: '5878',
    url_origem: 'https://www.expoimovel.com/summit',
    id_detalhe_outra_origem: '956',
    nome_contato,
    email,
    telefone,
    mensagem: `Interesses: ${interesses} - Outros: ${outros} - Cidade: ${cidade}`,
  });
  const config = {
    method: 'post',
    url: 'https://app.smart.youdigital.com.br/atendimento/cadastrarContatosOnline',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    data,
  };

  try {
    return await axios(config);
  } catch (error) {
    console.log(error);
  }
};

export default subscriptionLead;

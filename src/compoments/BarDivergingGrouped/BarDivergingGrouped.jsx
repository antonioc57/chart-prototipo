import { random, range } from 'lodash'
import { sets } from '@nivo/generators'

import { currenConverter } from '../../helpers/currencyComverter'

import { Bar } from '@nivo/bar'

const keys = ['VencerAte30diasVencidosAte14dias', 'Vencer31a60dias', 'Vencer61a90dias', 'Vencer91a180dias', 'Vencer181a360dias', 'VencerAcima360dias', 'Vencido15a30dias', 'Vencido31a60dias', 'Vencido61a90dias', 'Vencido91a180dias', 'Vencido181a360dias', 'VencidoAcima360dias']


const values = [{
  "VencerAte30diasVencidosAte14dias": 531029.63,
  "Vencer31a60dias": 334000.54,
  "Vencer61a90dias": 377904.94,
  "Vencer91a180dias": 1221000.93,
  "Vencer181a360dias": 2339389.33,
  "VencerAcima360dias": 6491244.74,
  "Vencido15a30dias": -600000.00,
  "Vencido31a60dias": -7554.05,
  "Vencido61a90dias": -20000.00,
  "Vencido91a180dias": -3900000.0,
  "Vencido181a360dias": 0.0,
  "VencidoAcima360dias": 0.0,
  "mes": "Janeiro",

  "categoria": [
    {
      "modalidade": "VencerAte30diasVencidosAte14dias",
      "dominio": "Adiantamentos a depositantes",
      "subdominio": "Adiantamentos a depositantes",
      "valorVencimento": 0.0
    },
    {
      "modalidade": "Vencer31a60dias",
      "dominio": "Empréstimos",
      "subdominio": "Cheque especial e conta garantida",
      "valorVencimento": 0.0
    },
    {
      "modalidade": "Vencer61a90dias",
      "dominio": "Empréstimos",
      "subdominio": "Crédito pessoal - com consignação em folha de pagam.",
      "valorVencimento": 0.0
    },
    {
      "modalidade": "Vencer91a180dias",
      "dominio": "Empréstimos",
      "subdominio": "Crédito pessoal - sem consignação em folha de pagam.",
      "valorVencimento": 0.0
    }, {
      "modalidade": "Vencer181a360dias",
      "dominio": "Empréstimos",
      "subdominio": "Crédito rotativo vinculado a cartão de crédito",
      "valorVencimento": 0.0
    },
    {
      "modalidade": "VencerAcima360dias",
      "dominio": "Empréstimos",
      "subdominio": "Capital de giro com prazo de vencimento inferior a 30 d",
      "valorVencimento": 0.0
    },
    {
      "modalidade": "Vencido15a30dias",
      "dominio": "Adiantamentos a depositantes",
      "subdominio": "Adiantamentos a depositantes",
      "valorVencimento": 0.0
    }, {
      "modalidade": "Vencido31a60dias",
      "dominio": "Empréstimos",
      "subdominio": "Cheque especial e conta garantida",
      "valorVencimento": 0.0
    }, {
      "modalidade": "Vencido61a90dias",
      "dominio": "Empréstimos",
      "subdominio": "Crédito pessoal - com consignação em folha de pagam.",
      "valorVencimento": 0.0
    },
    {
      "modalidade": "Vencido91a180dias",
      "dominio": "Empréstimos",
      "subdominio": "Crédito pessoal - sem consignação em folha de pagam.",
      "valorVencimento": 0.0
    }, {
      "modalidade": "Vencido181a360dias",
      "dominio": "Empréstimos",
      "subdominio": "Crédito rotativo vinculado a cartão de crédito",
      "valorVencimento": 0.0
    }, {
      "modalidade": "VencidoAcima360dias",
      "dominio": "Empréstimos",
      "subdominio": "Capital de giro com prazo de vencimento inferior a 30 d",
      "valorVencimento": 0.0
    }
  ]
},
{
  "VencerAte30diasVencidosAte14dias": 531029.63,
  "Vencer31a60dias": 334000.54,
  "Vencer61a90dias": 377904.94,
  "Vencer91a180dias": 1221000.93,
  "Vencer181a360dias": 2339389.33,
  "VencerAcima360dias": 6491244.74,
  "Vencido15a30dias": 0.0,
  "Vencido31a60dias": -7554.05,
  "Vencido61a90dias": 0.0,
  "Vencido91a180dias": 0.0,
  "Vencido181a360dias": 0.0,
  "VencidoAcima360dias": 0.0,
  "mes": "Fevereiro",
  "categoria": [
    {
      "modalidade": "VencerAte30diasVencidosAte14dias",
      "dominio": "Adiantamentos a depositantes",
      "subdominio": "Adiantamentos a depositantes",
      "valorVencimento": 0.0
    },
    {
      "modalidade": "Vencer31a60dias",
      "dominio": "Empréstimos",
      "subdominio": "Cheque especial e conta garantida",
      "valorVencimento": 0.0
    },
    {
      "modalidade": "Vencer61a90dias",
      "dominio": "Empréstimos",
      "subdominio": "Crédito pessoal - com consignação em folha de pagam.",
      "valorVencimento": 0.0
    },
    {
      "modalidade": "Vencer91a180dias",
      "dominio": "Empréstimos",
      "subdominio": "Crédito pessoal - sem consignação em folha de pagam.",
      "valorVencimento": 0.0
    }, {
      "modalidade": "Vencer181a360dias",
      "dominio": "Empréstimos",
      "subdominio": "Crédito rotativo vinculado a cartão de crédito",
      "valorVencimento": 0.0
    },
    {
      "modalidade": "VencerAcima360dias",
      "dominio": "Empréstimos",
      "subdominio": "Capital de giro com prazo de vencimento inferior a 30 d",
      "valorVencimento": 0.0
    },
    {
      "modalidade": "Vencido15a30dias",
      "dominio": "Adiantamentos a depositantes",
      "subdominio": "Adiantamentos a depositantes",
      "valorVencimento": 0.0
    }, {
      "modalidade": "Vencido31a60dias",
      "dominio": "Empréstimos",
      "subdominio": "Cheque especial e conta garantida",
      "valorVencimento": 0.0
    }, {
      "modalidade": "Vencido61a90dias",
      "dominio": "Empréstimos",
      "subdominio": "Crédito pessoal - com consignação em folha de pagam.",
      "valorVencimento": 0.0
    },
    {
      "modalidade": "Vencido91a180dias",
      "dominio": "Empréstimos",
      "subdominio": "Crédito pessoal - sem consignação em folha de pagam.",
      "valorVencimento": 0.0
    }, {
      "modalidade": "Vencido181a360dias",
      "dominio": "Empréstimos",
      "subdominio": "Crédito rotativo vinculado a cartão de crédito",
      "valorVencimento": 0.0
    }, {
      "modalidade": "VencidoAcima360dias",
      "dominio": "Empréstimos",
      "subdominio": "Capital de giro com prazo de vencimento inferior a 30 d",
      "valorVencimento": 0.0
    }
  ]
},
{
  "VencerAte30diasVencidosAte14dias": 531029.63,
  "Vencer31a60dias": 334000.54,
  "Vencer61a90dias": 377904.94,
  "Vencer91a180dias": 1221000.93,
  "Vencer181a360dias": 2339389.33,
  "VencerAcima360dias": 6491244.74,
  "Vencido15a30dias": 0.0,
  "Vencido31a60dias": -7554.05,
  "Vencido61a90dias": 0.0,
  "Vencido91a180dias": 0.0,
  "Vencido181a360dias": 0.0,
  "VencidoAcima360dias": 0.0,
  "mes": "Março",
  "categoria": [
    {
      "modalidade": "VencerAte30diasVencidosAte14dias",
      "dominio": "Adiantamentos a depositantes",
      "subdominio": "Adiantamentos a depositantes",
      "valorVencimento": 0.0
    },
    {
      "modalidade": "Vencer31a60dias",
      "dominio": "Empréstimos",
      "subdominio": "Cheque especial e conta garantida",
      "valorVencimento": 0.0
    },
    {
      "modalidade": "Vencer61a90dias",
      "dominio": "Empréstimos",
      "subdominio": "Crédito pessoal - com consignação em folha de pagam.",
      "valorVencimento": 0.0
    },
    {
      "modalidade": "Vencer91a180dias",
      "dominio": "Empréstimos",
      "subdominio": "Crédito pessoal - sem consignação em folha de pagam.",
      "valorVencimento": 0.0
    }, {
      "modalidade": "Vencer181a360dias",
      "dominio": "Empréstimos",
      "subdominio": "Crédito rotativo vinculado a cartão de crédito",
      "valorVencimento": 0.0
    },
    {
      "modalidade": "VencerAcima360dias",
      "dominio": "Empréstimos",
      "subdominio": "Capital de giro com prazo de vencimento inferior a 30 d",
      "valorVencimento": 0.0
    },
    {
      "modalidade": "Vencido15a30dias",
      "dominio": "Adiantamentos a depositantes",
      "subdominio": "Adiantamentos a depositantes",
      "valorVencimento": 0.0
    }, {
      "modalidade": "Vencido31a60dias",
      "dominio": "Empréstimos",
      "subdominio": "Cheque especial e conta garantida",
      "valorVencimento": 0.0
    }, {
      "modalidade": "Vencido61a90dias",
      "dominio": "Empréstimos",
      "subdominio": "Crédito pessoal - com consignação em folha de pagam.",
      "valorVencimento": 0.0
    },
    {
      "modalidade": "Vencido91a180dias",
      "dominio": "Empréstimos",
      "subdominio": "Crédito pessoal - sem consignação em folha de pagam.",
      "valorVencimento": 0.0
    }, {
      "modalidade": "Vencido181a360dias",
      "dominio": "Empréstimos",
      "subdominio": "Crédito rotativo vinculado a cartão de crédito",
      "valorVencimento": 0.0
    }, {
      "modalidade": "VencidoAcima360dias",
      "dominio": "Empréstimos",
      "subdominio": "Capital de giro com prazo de vencimento inferior a 30 d",
      "valorVencimento": 0.0
    }
  ]
},
{
  "VencerAte30diasVencidosAte14dias": 531029.63,
  "Vencer31a60dias": 334000.54,
  "Vencer61a90dias": 377904.94,
  "Vencer91a180dias": 1221000.93,
  "Vencer181a360dias": 2339389.33,
  "VencerAcima360dias": 6491244.74,
  "Vencido15a30dias": 0.0,
  "Vencido31a60dias": -7554.05,
  "Vencido61a90dias": 0.0,
  "Vencido91a180dias": 0.0,
  "Vencido181a360dias": 0.0,
  "VencidoAcima360dias": -20000.00,
  "mes": "Abril",
  "categoria": [
    {
      "modalidade": "VencerAte30diasVencidosAte14dias",
      "dominio": "Adiantamentos a depositantes",
      "subdominio": "Adiantamentos a depositantes",
      "valorVencimento": 0.0
    },
    {
      "modalidade": "Vencer31a60dias",
      "dominio": "Empréstimos",
      "subdominio": "Cheque especial e conta garantida",
      "valorVencimento": 0.0
    },
    {
      "modalidade": "Vencer61a90dias",
      "dominio": "Empréstimos",
      "subdominio": "Crédito pessoal - com consignação em folha de pagam.",
      "valorVencimento": 0.0
    },
    {
      "modalidade": "Vencer91a180dias",
      "dominio": "Empréstimos",
      "subdominio": "Crédito pessoal - sem consignação em folha de pagam.",
      "valorVencimento": 0.0
    }, {
      "modalidade": "Vencer181a360dias",
      "dominio": "Empréstimos",
      "subdominio": "Crédito rotativo vinculado a cartão de crédito",
      "valorVencimento": 0.0
    },
    {
      "modalidade": "VencerAcima360dias",
      "dominio": "Empréstimos",
      "subdominio": "Capital de giro com prazo de vencimento inferior a 30 d",
      "valorVencimento": 0.0
    },
    {
      "modalidade": "Vencido15a30dias",
      "dominio": "Adiantamentos a depositantes",
      "subdominio": "Adiantamentos a depositantes",
      "valorVencimento": 0.0
    }, {
      "modalidade": "Vencido31a60dias",
      "dominio": "Empréstimos",
      "subdominio": "Cheque especial e conta garantida",
      "valorVencimento": 0.0
    }, {
      "modalidade": "Vencido61a90dias",
      "dominio": "Empréstimos",
      "subdominio": "Crédito pessoal - com consignação em folha de pagam.",
      "valorVencimento": 0.0
    },
    {
      "modalidade": "Vencido91a180dias",
      "dominio": "Empréstimos",
      "subdominio": "Crédito pessoal - sem consignação em folha de pagam.",
      "valorVencimento": 0.0
    }, {
      "modalidade": "Vencido181a360dias",
      "dominio": "Empréstimos",
      "subdominio": "Crédito rotativo vinculado a cartão de crédito",
      "valorVencimento": 0.0
    }, {
      "modalidade": "VencidoAcima360dias",
      "dominio": "Empréstimos",
      "subdominio": "Capital de giro com prazo de vencimento inferior a 30 d",
      "valorVencimento": 0.0
    }
  ]
},
{
  "VencerAte30diasVencidosAte14dias": 531029.63,
  "Vencer31a60dias": 334000.54,
  "Vencer61a90dias": 377904.94,
  "Vencer91a180dias": 1221000.93,
  "Vencer181a360dias": 2339389.33,
  "VencerAcima360dias": 6491244.74,
  "Vencido15a30dias": 0.0,
  "Vencido31a60dias": -7554.05,
  "Vencido61a90dias": 0.0,
  "Vencido91a180dias": 0.0,
  "Vencido181a360dias": 0.0,
  "VencidoAcima360dias": -20000.00,
  "mes": "Maio",
  "categoria": [
    {
      "modalidade": "VencerAte30diasVencidosAte14dias",
      "dominio": "Adiantamentos a depositantes",
      "subdominio": "Adiantamentos a depositantes",
      "valorVencimento": 0.0
    },
    {
      "modalidade": "Vencer31a60dias",
      "dominio": "Empréstimos",
      "subdominio": "Cheque especial e conta garantida",
      "valorVencimento": 0.0
    },
    {
      "modalidade": "Vencer61a90dias",
      "dominio": "Empréstimos",
      "subdominio": "Crédito pessoal - com consignação em folha de pagam.",
      "valorVencimento": 0.0
    },
    {
      "modalidade": "Vencer91a180dias",
      "dominio": "Empréstimos",
      "subdominio": "Crédito pessoal - sem consignação em folha de pagam.",
      "valorVencimento": 0.0
    }, {
      "modalidade": "Vencer181a360dias",
      "dominio": "Empréstimos",
      "subdominio": "Crédito rotativo vinculado a cartão de crédito",
      "valorVencimento": 0.0
    },
    {
      "modalidade": "VencerAcima360dias",
      "dominio": "Empréstimos",
      "subdominio": "Capital de giro com prazo de vencimento inferior a 30 d",
      "valorVencimento": 0.0
    },
    {
      "modalidade": "Vencido15a30dias",
      "dominio": "Adiantamentos a depositantes",
      "subdominio": "Adiantamentos a depositantes",
      "valorVencimento": 0.0
    }, {
      "modalidade": "Vencido31a60dias",
      "dominio": "Empréstimos",
      "subdominio": "Cheque especial e conta garantida",
      "valorVencimento": 0.0
    }, {
      "modalidade": "Vencido61a90dias",
      "dominio": "Empréstimos",
      "subdominio": "Crédito pessoal - com consignação em folha de pagam.",
      "valorVencimento": 0.0
    },
    {
      "modalidade": "Vencido91a180dias",
      "dominio": "Empréstimos",
      "subdominio": "Crédito pessoal - sem consignação em folha de pagam.",
      "valorVencimento": 0.0
    }, {
      "modalidade": "Vencido181a360dias",
      "dominio": "Empréstimos",
      "subdominio": "Crédito rotativo vinculado a cartão de crédito",
      "valorVencimento": 0.0
    }, {
      "modalidade": "VencidoAcima360dias",
      "dominio": "Empréstimos",
      "subdominio": "Capital de giro com prazo de vencimento inferior a 30 d",
      "valorVencimento": 0.0
    }
  ]
},
{
  "VencerAte30diasVencidosAte14dias": 531029.63,
  "Vencer31a60dias": 334000.54,
  "Vencer61a90dias": 377904.94,
  "Vencer91a180dias": 1221000.93,
  "Vencer181a360dias": 2339389.33,
  "VencerAcima360dias": 6491244.74,
  "Vencido15a30dias": 0.0,
  "Vencido31a60dias": -7554.05,
  "Vencido61a90dias": 0.0,
  "Vencido91a180dias": 0.0,
  "Vencido181a360dias": 0.0,
  "VencidoAcima360dias": -20000.00,
  "mes": "Junho",
  "categoria": [
    {
      "modalidade": "VencerAte30diasVencidosAte14dias",
      "dominio": "Adiantamentos a depositantes",
      "subdominio": "Adiantamentos a depositantes",
      "valorVencimento": 0.0
    },
    {
      "modalidade": "Vencer31a60dias",
      "dominio": "Empréstimos",
      "subdominio": "Cheque especial e conta garantida",
      "valorVencimento": 0.0
    },
    {
      "modalidade": "Vencer61a90dias",
      "dominio": "Empréstimos",
      "subdominio": "Crédito pessoal - com consignação em folha de pagam.",
      "valorVencimento": 0.0
    },
    {
      "modalidade": "Vencer91a180dias",
      "dominio": "Empréstimos",
      "subdominio": "Crédito pessoal - sem consignação em folha de pagam.",
      "valorVencimento": 0.0
    }, {
      "modalidade": "Vencer181a360dias",
      "dominio": "Empréstimos",
      "subdominio": "Crédito rotativo vinculado a cartão de crédito",
      "valorVencimento": 0.0
    },
    {
      "modalidade": "VencerAcima360dias",
      "dominio": "Empréstimos",
      "subdominio": "Capital de giro com prazo de vencimento inferior a 30 d",
      "valorVencimento": 0.0
    },
    {
      "modalidade": "Vencido15a30dias",
      "dominio": "Adiantamentos a depositantes",
      "subdominio": "Adiantamentos a depositantes",
      "valorVencimento": 0.0
    }, {
      "modalidade": "Vencido31a60dias",
      "dominio": "Empréstimos",
      "subdominio": "Cheque especial e conta garantida",
      "valorVencimento": 0.0
    }, {
      "modalidade": "Vencido61a90dias",
      "dominio": "Empréstimos",
      "subdominio": "Crédito pessoal - com consignação em folha de pagam.",
      "valorVencimento": 0.0
    },
    {
      "modalidade": "Vencido91a180dias",
      "dominio": "Empréstimos",
      "subdominio": "Crédito pessoal - sem consignação em folha de pagam.",
      "valorVencimento": 0.0
    }, {
      "modalidade": "Vencido181a360dias",
      "dominio": "Empréstimos",
      "subdominio": "Crédito rotativo vinculado a cartão de crédito",
      "valorVencimento": 0.0
    }, {
      "modalidade": "VencidoAcima360dias",
      "dominio": "Empréstimos",
      "subdominio": "Capital de giro com prazo de vencimento inferior a 30 d",
      "valorVencimento": 0.0
    }
  ]
},
{
  "VencerAte30diasVencidosAte14dias": 531029.63,
  "Vencer31a60dias": 334000.54,
  "Vencer61a90dias": 377904.94,
  "Vencer91a180dias": 1221000.93,
  "Vencer181a360dias": 2339389.33,
  "VencerAcima360dias": 6491244.74,
  "Vencido15a30dias": 0.0,
  "Vencido31a60dias": -7554.05,
  "Vencido61a90dias": 0.0,
  "Vencido91a180dias": 0.0,
  "Vencido181a360dias": 0.0,
  "VencidoAcima360dias": -20000.00,
  "mes": "Julho",
  "categoria": [
    {
      "modalidade": "VencerAte30diasVencidosAte14dias",
      "dominio": "Adiantamentos a depositantes",
      "subdominio": "Adiantamentos a depositantes",
      "valorVencimento": 0.0
    },
    {
      "modalidade": "Vencer31a60dias",
      "dominio": "Empréstimos",
      "subdominio": "Cheque especial e conta garantida",
      "valorVencimento": 0.0
    },
    {
      "modalidade": "Vencer61a90dias",
      "dominio": "Empréstimos",
      "subdominio": "Crédito pessoal - com consignação em folha de pagam.",
      "valorVencimento": 0.0
    },
    {
      "modalidade": "Vencer91a180dias",
      "dominio": "Empréstimos",
      "subdominio": "Crédito pessoal - sem consignação em folha de pagam.",
      "valorVencimento": 0.0
    }, {
      "modalidade": "Vencer181a360dias",
      "dominio": "Empréstimos",
      "subdominio": "Crédito rotativo vinculado a cartão de crédito",
      "valorVencimento": 0.0
    },
    {
      "modalidade": "VencerAcima360dias",
      "dominio": "Empréstimos",
      "subdominio": "Capital de giro com prazo de vencimento inferior a 30 d",
      "valorVencimento": 0.0
    },
    {
      "modalidade": "Vencido15a30dias",
      "dominio": "Adiantamentos a depositantes",
      "subdominio": "Adiantamentos a depositantes",
      "valorVencimento": 0.0
    }, {
      "modalidade": "Vencido31a60dias",
      "dominio": "Empréstimos",
      "subdominio": "Cheque especial e conta garantida",
      "valorVencimento": 0.0
    }, {
      "modalidade": "Vencido61a90dias",
      "dominio": "Empréstimos",
      "subdominio": "Crédito pessoal - com consignação em folha de pagam.",
      "valorVencimento": 0.0
    },
    {
      "modalidade": "Vencido91a180dias",
      "dominio": "Empréstimos",
      "subdominio": "Crédito pessoal - sem consignação em folha de pagam.",
      "valorVencimento": 0.0
    }, {
      "modalidade": "Vencido181a360dias",
      "dominio": "Empréstimos",
      "subdominio": "Crédito rotativo vinculado a cartão de crédito",
      "valorVencimento": 0.0
    }, {
      "modalidade": "VencidoAcima360dias",
      "dominio": "Empréstimos",
      "subdominio": "Capital de giro com prazo de vencimento inferior a 30 d",
      "valorVencimento": 0.0
    }
  ]
},
{
  "VencerAte30diasVencidosAte14dias": 531029.63,
  "Vencer31a60dias": 334000.54,
  "Vencer61a90dias": 377904.94,
  "Vencer91a180dias": 1221000.93,
  "Vencer181a360dias": 2339389.33,
  "VencerAcima360dias": 6491244.74,
  "Vencido15a30dias": -200.00,
  "Vencido31a60dias": -7554.05,
  "Vencido61a90dias": 0.0,
  "Vencido91a180dias": 0.0,
  "Vencido181a360dias": 0.0,
  "VencidoAcima360dias": -20000.00,
  "mes": "Agosto",
  "categoria": [
    {
      "modalidade": "VencerAte30diasVencidosAte14dias",
      "dominio": "Adiantamentos a depositantes",
      "subdominio": "Adiantamentos a depositantes",
      "valorVencimento": 0.0
    },
    {
      "modalidade": "Vencer31a60dias",
      "dominio": "Empréstimos",
      "subdominio": "Cheque especial e conta garantida",
      "valorVencimento": 0.0
    },
    {
      "modalidade": "Vencer61a90dias",
      "dominio": "Empréstimos",
      "subdominio": "Crédito pessoal - com consignação em folha de pagam.",
      "valorVencimento": 0.0
    },
    {
      "modalidade": "Vencer91a180dias",
      "dominio": "Empréstimos",
      "subdominio": "Crédito pessoal - sem consignação em folha de pagam.",
      "valorVencimento": 0.0
    }, {
      "modalidade": "Vencer181a360dias",
      "dominio": "Empréstimos",
      "subdominio": "Crédito rotativo vinculado a cartão de crédito",
      "valorVencimento": 0.0
    },
    {
      "modalidade": "VencerAcima360dias",
      "dominio": "Empréstimos",
      "subdominio": "Capital de giro com prazo de vencimento inferior a 30 d",
      "valorVencimento": 0.0
    },
    {
      "modalidade": "Vencido15a30dias",
      "dominio": "Adiantamentos a depositantes",
      "subdominio": "Adiantamentos a depositantes",
      "valorVencimento": 0.0
    }, {
      "modalidade": "Vencido31a60dias",
      "dominio": "Empréstimos",
      "subdominio": "Cheque especial e conta garantida",
      "valorVencimento": 0.0
    }, {
      "modalidade": "Vencido61a90dias",
      "dominio": "Empréstimos",
      "subdominio": "Crédito pessoal - com consignação em folha de pagam.",
      "valorVencimento": 0.0
    },
    {
      "modalidade": "Vencido91a180dias",
      "dominio": "Empréstimos",
      "subdominio": "Crédito pessoal - sem consignação em folha de pagam.",
      "valorVencimento": 0.0
    }, {
      "modalidade": "Vencido181a360dias",
      "dominio": "Empréstimos",
      "subdominio": "Crédito rotativo vinculado a cartão de crédito",
      "valorVencimento": 0.0
    }, {
      "modalidade": "VencidoAcima360dias",
      "dominio": "Empréstimos",
      "subdominio": "Capital de giro com prazo de vencimento inferior a 30 d",
      "valorVencimento": 0.0
    }
  ]
},
{
  "VencerAte30diasVencidosAte14dias": 531029.63,
  "Vencer31a60dias": 334000.54,
  "Vencer61a90dias": 377904.94,
  "Vencer91a180dias": 1221000.93,
  "Vencer181a360dias": 2339389.33,
  "VencerAcima360dias": 6491244.74,
  "Vencido15a30dias": 0.0,
  "Vencido31a60dias": -7554.05,
  "Vencido61a90dias": -8900.00,
  "Vencido91a180dias": 0.0,
  "Vencido181a360dias": 0.0,
  "VencidoAcima360dias": -20000.00,
  "mes": "Setembro",
  "categoria": [
    {
      "modalidade": "VencerAte30diasVencidosAte14dias",
      "dominio": "Adiantamentos a depositantes",
      "subdominio": "Adiantamentos a depositantes",
      "valorVencimento": 0.0
    },
    {
      "modalidade": "Vencer31a60dias",
      "dominio": "Empréstimos",
      "subdominio": "Cheque especial e conta garantida",
      "valorVencimento": 0.0
    },
    {
      "modalidade": "Vencer61a90dias",
      "dominio": "Empréstimos",
      "subdominio": "Crédito pessoal - com consignação em folha de pagam.",
      "valorVencimento": 0.0
    },
    {
      "modalidade": "Vencer91a180dias",
      "dominio": "Empréstimos",
      "subdominio": "Crédito pessoal - sem consignação em folha de pagam.",
      "valorVencimento": 0.0
    }, {
      "modalidade": "Vencer181a360dias",
      "dominio": "Empréstimos",
      "subdominio": "Crédito rotativo vinculado a cartão de crédito",
      "valorVencimento": 0.0
    },
    {
      "modalidade": "VencerAcima360dias",
      "dominio": "Empréstimos",
      "subdominio": "Capital de giro com prazo de vencimento inferior a 30 d",
      "valorVencimento": 0.0
    },
    {
      "modalidade": "Vencido15a30dias",
      "dominio": "Adiantamentos a depositantes",
      "subdominio": "Adiantamentos a depositantes",
      "valorVencimento": 0.0
    }, {
      "modalidade": "Vencido31a60dias",
      "dominio": "Empréstimos",
      "subdominio": "Cheque especial e conta garantida",
      "valorVencimento": 0.0
    }, {
      "modalidade": "Vencido61a90dias",
      "dominio": "Empréstimos",
      "subdominio": "Crédito pessoal - com consignação em folha de pagam.",
      "valorVencimento": 0.0
    },
    {
      "modalidade": "Vencido91a180dias",
      "dominio": "Empréstimos",
      "subdominio": "Crédito pessoal - sem consignação em folha de pagam.",
      "valorVencimento": 0.0
    }, {
      "modalidade": "Vencido181a360dias",
      "dominio": "Empréstimos",
      "subdominio": "Crédito rotativo vinculado a cartão de crédito",
      "valorVencimento": 0.0
    }, {
      "modalidade": "VencidoAcima360dias",
      "dominio": "Empréstimos",
      "subdominio": "Capital de giro com prazo de vencimento inferior a 30 d",
      "valorVencimento": 0.0
    }
  ]
},
{
  "VencerAte30diasVencidosAte14dias": 531029.63,
  "Vencer31a60dias": 334000.54,
  "Vencer61a90dias": 377904.94,
  "Vencer91a180dias": 1221000.93,
  "Vencer181a360dias": 2339389.33,
  "VencerAcima360dias": 6491244.74,
  "Vencido15a30dias": 0.0,
  "Vencido31a60dias": -7554.05,
  "Vencido61a90dias": 0.0,
  "Vencido91a180dias": 0.0,
  "Vencido181a360dias": 0.0,
  "VencidoAcima360dias": -20000.00,
  "mes": "Outubro",
  "categoria": [
    {
      "modalidade": "VencerAte30diasVencidosAte14dias",
      "dominio": "Adiantamentos a depositantes",
      "subdominio": "Adiantamentos a depositantes",
      "valorVencimento": 0.0
    },
    {
      "modalidade": "Vencer31a60dias",
      "dominio": "Empréstimos",
      "subdominio": "Cheque especial e conta garantida",
      "valorVencimento": 0.0
    },
    {
      "modalidade": "Vencer61a90dias",
      "dominio": "Empréstimos",
      "subdominio": "Crédito pessoal - com consignação em folha de pagam.",
      "valorVencimento": 0.0
    },
    {
      "modalidade": "Vencer91a180dias",
      "dominio": "Empréstimos",
      "subdominio": "Crédito pessoal - sem consignação em folha de pagam.",
      "valorVencimento": 0.0
    }, {
      "modalidade": "Vencer181a360dias",
      "dominio": "Empréstimos",
      "subdominio": "Crédito rotativo vinculado a cartão de crédito",
      "valorVencimento": 0.0
    },
    {
      "modalidade": "VencerAcima360dias",
      "dominio": "Empréstimos",
      "subdominio": "Capital de giro com prazo de vencimento inferior a 30 d",
      "valorVencimento": 0.0
    },
    {
      "modalidade": "Vencido15a30dias",
      "dominio": "Adiantamentos a depositantes",
      "subdominio": "Adiantamentos a depositantes",
      "valorVencimento": 0.0
    }, {
      "modalidade": "Vencido31a60dias",
      "dominio": "Empréstimos",
      "subdominio": "Cheque especial e conta garantida",
      "valorVencimento": 0.0
    }, {
      "modalidade": "Vencido61a90dias",
      "dominio": "Empréstimos",
      "subdominio": "Crédito pessoal - com consignação em folha de pagam.",
      "valorVencimento": 0.0
    },
    {
      "modalidade": "Vencido91a180dias",
      "dominio": "Empréstimos",
      "subdominio": "Crédito pessoal - sem consignação em folha de pagam.",
      "valorVencimento": 0.0
    }, {
      "modalidade": "Vencido181a360dias",
      "dominio": "Empréstimos",
      "subdominio": "Crédito rotativo vinculado a cartão de crédito",
      "valorVencimento": 0.0
    }, {
      "modalidade": "VencidoAcima360dias",
      "dominio": "Empréstimos",
      "subdominio": "Capital de giro com prazo de vencimento inferior a 30 d",
      "valorVencimento": 0.0
    }
  ]
},
{
  "VencerAte30diasVencidosAte14dias": 531029.63,
  "Vencer31a60dias": 334000.54,
  "Vencer61a90dias": 377904.94,
  "Vencer91a180dias": 1221000.93,
  "Vencer181a360dias": 2339389.33,
  "VencerAcima360dias": 6491244.74,
  "Vencido15a30dias": 0.0,
  "Vencido31a60dias": -7554.05,
  "Vencido61a90dias": 0.0,
  "Vencido91a180dias": 0.0,
  "Vencido181a360dias": 0.0,
  "VencidoAcima360dias": -20000.00,
  "mes": "Novembro",
  "categoria": [
    {
      "modalidade": "VencerAte30diasVencidosAte14dias",
      "dominio": "Adiantamentos a depositantes",
      "subdominio": "Adiantamentos a depositantes",
      "valorVencimento": 0.0
    },
    {
      "modalidade": "Vencer31a60dias",
      "dominio": "Empréstimos",
      "subdominio": "Cheque especial e conta garantida",
      "valorVencimento": 0.0
    },
    {
      "modalidade": "Vencer61a90dias",
      "dominio": "Empréstimos",
      "subdominio": "Crédito pessoal - com consignação em folha de pagam.",
      "valorVencimento": 0.0
    },
    {
      "modalidade": "Vencer91a180dias",
      "dominio": "Empréstimos",
      "subdominio": "Crédito pessoal - sem consignação em folha de pagam.",
      "valorVencimento": 0.0
    }, {
      "modalidade": "Vencer181a360dias",
      "dominio": "Empréstimos",
      "subdominio": "Crédito rotativo vinculado a cartão de crédito",
      "valorVencimento": 0.0
    },
    {
      "modalidade": "VencerAcima360dias",
      "dominio": "Empréstimos",
      "subdominio": "Capital de giro com prazo de vencimento inferior a 30 d",
      "valorVencimento": 0.0
    },
    {
      "modalidade": "Vencido15a30dias",
      "dominio": "Adiantamentos a depositantes",
      "subdominio": "Adiantamentos a depositantes",
      "valorVencimento": 0.0
    }, {
      "modalidade": "Vencido31a60dias",
      "dominio": "Empréstimos",
      "subdominio": "Cheque especial e conta garantida",
      "valorVencimento": 0.0
    }, {
      "modalidade": "Vencido61a90dias",
      "dominio": "Empréstimos",
      "subdominio": "Crédito pessoal - com consignação em folha de pagam.",
      "valorVencimento": 0.0
    },
    {
      "modalidade": "Vencido91a180dias",
      "dominio": "Empréstimos",
      "subdominio": "Crédito pessoal - sem consignação em folha de pagam.",
      "valorVencimento": 0.0
    }, {
      "modalidade": "Vencido181a360dias",
      "dominio": "Empréstimos",
      "subdominio": "Crédito rotativo vinculado a cartão de crédito",
      "valorVencimento": 0.0
    }, {
      "modalidade": "VencidoAcima360dias",
      "dominio": "Empréstimos",
      "subdominio": "Capital de giro com prazo de vencimento inferior a 30 d",
      "valorVencimento": 0.0
    }
  ]
},
{
  "VencerAte30diasVencidosAte14dias": 531029.63,
  "Vencer31a60dias": 334000.54,
  "Vencer61a90dias": 377904.94,
  "Vencer91a180dias": 1221000.93,
  "Vencer181a360dias": 2339389.33,
  "VencerAcima360dias": 6491244.74,
  "Vencido15a30dias": -1200.00,
  "Vencido31a60dias": -7554.05,
  "Vencido61a90dias": 0.0,
  "Vencido91a180dias": -43000.00,
  "Vencido181a360dias": -120.00,
  "VencidoAcima360dias": -20000.00,
  "mes": "Dezembro",
  "categoria": [
    {
      "modalidade": "VencerAte30diasVencidosAte14dias",
      "dominio": "Adiantamentos a depositantes",
      "subdominio": "Adiantamentos a depositantes",
      "valorVencimento": 0.0
    },
    {
      "modalidade": "Vencer31a60dias",
      "dominio": "Empréstimos",
      "subdominio": "Cheque especial e conta garantida",
      "valorVencimento": 0.0
    },
    {
      "modalidade": "Vencer61a90dias",
      "dominio": "Empréstimos",
      "subdominio": "Crédito pessoal - com consignação em folha de pagam.",
      "valorVencimento": 0.0
    },
    {
      "modalidade": "Vencer91a180dias",
      "dominio": "Empréstimos",
      "subdominio": "Crédito pessoal - sem consignação em folha de pagam.",
      "valorVencimento": 0.0
    }, {
      "modalidade": "Vencer181a360dias",
      "dominio": "Empréstimos",
      "subdominio": "Crédito rotativo vinculado a cartão de crédito",
      "valorVencimento": 0.0
    },
    {
      "modalidade": "VencerAcima360dias",
      "dominio": "Empréstimos",
      "subdominio": "Capital de giro com prazo de vencimento inferior a 30 d",
      "valorVencimento": 0.0
    },
    {
      "modalidade": "Vencido15a30dias",
      "dominio": "Adiantamentos a depositantes",
      "subdominio": "Adiantamentos a depositantes",
      "valorVencimento": 0.0
    }, {
      "modalidade": "Vencido31a60dias",
      "dominio": "Empréstimos",
      "subdominio": "Cheque especial e conta garantida",
      "valorVencimento": 0.0
    }, {
      "modalidade": "Vencido61a90dias",
      "dominio": "Empréstimos",
      "subdominio": "Crédito pessoal - com consignação em folha de pagam.",
      "valorVencimento": 0.0
    },
    {
      "modalidade": "Vencido91a180dias",
      "dominio": "Empréstimos",
      "subdominio": "Crédito pessoal - sem consignação em folha de pagam.",
      "valorVencimento": 0.0
    }, {
      "modalidade": "Vencido181a360dias",
      "dominio": "Empréstimos",
      "subdominio": "Crédito rotativo vinculado a cartão de crédito",
      "valorVencimento": 0.0
    }, {
      "modalidade": "VencidoAcima360dias",
      "dominio": "Empréstimos",
      "subdominio": "Capital de giro com prazo de vencimento inferior a 30 d",
      "valorVencimento": 0.0
    }
  ]
}]




const commonProps = {
  width: 1400,
  height: 500,
  margin: { top: 60, right: 110, bottom: 60, left: 80 },
  indexBy: 'mes',
  keys,
  data: values,
  padding: 0.2,
  labelTextColor: 'inherit:darker(1.4)',
  labelSkipWidth: 16,
  labelSkipHeight: 16,
}

const divergingCommonProps = {
  ...commonProps,
  enableGridX: true,
  enableGridY: false,
  valueFormat: (value) => `${Math.abs(value)}`,
  axisTop: {
    tickSize: 0,
    tickPadding: 12,
  },
  axisBottom: {
    legend: 'Endividamento',
    legendPosition: 'middle',
    legendOffset: 50,
    tickSize: 0,
    tickPadding: 12,
  },
  axisLeft: null,
  axisRight: {
    format: (v) => currenConverter(v),
  },
  markers: [
    {
      axis: 'y',
      value: 0,
      lineStyle: { strokeOpacity: 0 },
      textStyle: { fill: '#2ebca6' },
      legend: 'À Vencer',
      legendPosition: 'top-left',
      legendOrientation: 'vertical',
      legendOffsetY: 120,
      legendOffsetX: -20,
    },
    {
      axis: 'y',
      value: 0,
      lineStyle: { stroke: '#f47560', strokeWidth: 1 },
      textStyle: { fill: '#e25c3b' },
      legend: 'Vencido',
      legendPosition: 'bottom-left',
      legendOrientation: 'vertical',
      legendOffsetY: 120,
      legendOffsetX: -20,
    },
  ],
}

export function BarDivergingGrouped() {
  return (
    <div style={{ backgroundColor: '#efefef', width: '100%' }}>
      <Bar
        {...divergingCommonProps}
        padding={0.1}
        margin={{ top: 50, right: 130, bottom: 100, left: 60 }}
        groupMode="grouped"
        innerPadding={1}
        colors={['#97e3d5', '#61cdbb', '#29D95E', '#22F09A', '#20E6CB', '#61E620', '#f47560', '#e25c3b', '#E80727', '#F22007', '#F26407', '#E88107']}
        valueFormat={v => currenConverter(v)}
        tooltip={({ id, value, color, label, formattedValue, data }) => {
          const categoria = data.categoria.find(item => item.modalidade === id)
          return (<div
            style={{
              padding: 12,
              color,
              background: '#222222',
              borderRadius: '6px',
              maxWidth: '220px'
            }}
          >
            <span className='ft-medium'>
              {label}:
            </span>
            <br />
            <span className='ft-medium ft-wt-bold'>{formattedValue}</span>
            <br />
            <span className='ft-small ft-wt-bold'>{categoria.dominio}</span>
            <br />
            <span className='ft-small ft-width'>{categoria.subdominio}</span>
          </div>)
        }}

        valueScale={{ type: 'symlog' }}

      />
    </div >
  );
}


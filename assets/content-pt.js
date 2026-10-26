/* ============================================================
   EM course training · Digital Creativity 2 [2202] · PORTUGUESE (Brazil)
   Translate only the text inside quotes / backticks. Keep HTML tags, {placeholders},
   keys (t:, id:, a:…), links, file names and the 'yes' / 'no' answer keys unchanged.
   ============================================================ */
window.COURSE = { lang: 'pt' };

/* ---------------- Interface strings ---------------- */
COURSE.ui = {
  pageTitle: 'Formação de curso EM',
  footer: 'kodland · Novo Modelo Educacional · Formação de curso',
  devLink: '🛠 Developer',
  logoSub: 'Novo Modelo Educacional',
  navHome: '← Início',
  navBackModule: '← Voltar ao módulo',
  moduleN: 'Módulo {n}',
  badgeStart: 'Começar →',
  badgeLocked: '🔒 Conclua o Módulo {n}',
  badgeDone: '✓ Concluído · {score}%',
  progLabel: 'módulos concluídos',
  progAllDone: 'Módulos concluídos 🎉',
  eyebrow: '{course} · Módulo {n} de {total}',
  ctaTitle: 'Verificação do módulo',
  ctaText: '{n} perguntas curtas. Acerte 70% ou mais para passar.',
  lockSim: '🔒 Conclua a simulação de publicação no Kodland Sparks (acima) para liberar a verificação.',
  startCheck: 'Começar a verificação →',
  retake: '🔁 Refazer a verificação',
  qmeta: '{e} Verificação do Módulo {n} · Pergunta {i} de {total}',
  fbRight: '✅ <b>Correto!</b> ',
  fbWrong: '❌ <b>Não exatamente.</b> ',
  nextQuestion: 'Próxima pergunta →',
  seeResult: 'Ver meu resultado →',
  passedTitle: 'Você passou!',
  failTitle: 'Quase lá',
  scoreLine: 'Você acertou <b>{score} de {n}</b>.',
  failText: 'É preciso acertar 70% ou mais. Revise o módulo e tente de novo — você pode refazer quantas vezes precisar.',
  nextUnlocked: '<b>Módulo {n} · {title}</b> foi liberado.',
  goModule: 'Ir para o Módulo {n} →',
  allDoneText: 'Você concluiu os dois módulos desta formação.',
  seeNext: 'Ver o próximo passo →',
  reviewModule: '📖 Revisar o módulo',
  homeDoneTitle: 'Módulos concluídos!',
  homeDoneText: 'Falta um último passo: o teste DST na página da formação no LMS.',
  homeDoneBtn: 'Ver o que fazer agora →',
  doneBadge: '✓ Concluído',
  doneBack: 'Voltar aos módulos',
  lockedTitle: 'Ainda bloqueado',
  lockedModule: 'Conclua primeiro o Módulo {n}.',
  lockedStep: 'Conclua o passo anterior para liberar este.',
  ok: 'OK',
  linkOpen: 'Abrir ↗',
  projPlay: '▶ Abrir no Kodland Sparks ↗',
  simOpen: '▶ Abrir a simulação aqui',
  simClose: '✕ Fechar a simulação',
  simNewTab: 'Abrir em outra aba ↗',
  simDone: '✅ Simulação concluída',
  simTodo: '○ Simulação pendente',
  checkTag: 'Marque',
  mythTag: 'Mito',
  mythTap: 'Toque para ver a realidade →',
  mythReality: 'Realidade ✓',
  sortWrong: '✗ Não exatamente.'
};

/* ---------------- Course ---------------- */
COURSE.id = 'dc2';
COURSE.code = '2202';
COURSE.title = 'Digital Creativity 2';
COURSE.color = '#EC4899';

COURSE.home = {
  kicker: '🎓 Formação de curso · [2202]',
  title: 'Digital Creativity <span class="hl">2</span>',
  lead: 'Estúdio Creativia, para alunos de 10–12 anos: animação, Canva com IA e um portfólio real no Kodland Sparks. Dois módulos: o conteúdo do curso e a parte técnica das aulas.',
  facts: [
    ['🧑‍💻', '<b>No seu ritmo.</b> O progresso fica salvo neste navegador. Cada módulo termina com uma verificação curta.'],
    ['⚡', '<b>Prática incluída.</b> Uma simulação do Kodland Sparks para treinar a publicação de projetos e os problemas mais comuns.']
  ]
};

COURSE.notes = [
  { kind:'pink', e:'🧭', html:'<b>Antes de começar:</b> faça primeiro a <b>formação principal do Novo Modelo Educacional (EM)</b>. Esta formação do curso vem depois e parte do que você já viu lá: o Backoffice e as Teacher Notes, o Classroom com o Follow Mode, o tour pelo Kodland Sparks e a qualidade da aula.' },
  { kind:'warn', e:'🔄', html:'<b>O conteúdo das aulas no Backoffice vai sendo atualizado.</b> Com o feedback de alunos e tutores, as aulas estão sempre sendo melhoradas. Não se preocupe: quando houver mudanças, você será avisado com antecedência para preparar a aula.' }
];

COURSE.modules = [
  { id:'m1', n:1, e:'🎨', color:'#EC4899', title:'O conteúdo do curso',
    desc:'A história, as 2 primeiras aulas e projetos reais publicados por alunos.',
    obj:'Prepare-se para dar as 2 primeiras aulas do Digital Creativity 2. Nelas, os alunos animam o próprio nome no Kodland Sparks, publicam o primeiro projeto do portfólio e montam no Canva a primeira cena do vídeo “O que tem na minha cabeça?”.',
    offer:[['🎭','Conhecer a história do Estúdio Creativia e como o curso é organizado.'],['📖','Saber o que acontece em cada uma das 2 primeiras aulas.'],['⚡','Ver projetos reais publicados por alunos no Kodland Sparks.'],['📘','Revisar as aulas e as Teacher Notes no Backoffice.']],
    sections:[
      { id:'ov', e:'🎭', title:'O curso', blocks:[
        { t:'meta', items:[['👦','Idade','10–12 anos'],['⏱️','Aula','60 min'],['📚','Programa','40 aulas'],['🖌️','Ferramentas','Kodland Sparks · Canva · Krita · CapCut']] },
        { t:'p', html:'Os alunos se tornam jovens criadores no <b>Estúdio Creativia</b>, uma agência criativa digital onde cada módulo é um novo briefing de cliente: vídeo sobre si, campanha de turnê musical, ilustração, personagem, robô animado, mundo 3D, visual novel. No fim do curso, eles vão ter um portfólio profissional no Kodland Sparks.' },
        { t:'ba', before:['A versão anterior','Indutivo: primeiro a ferramenta e a teoria, depois um projeto do zero. Habilidades com IA não eram ensinadas.'], after:['Digital Creativity 2','Dedutivo: protótipo ou animação pronta → exploração → criação própria. <b>O AI Buddy e a IA do Canva fazem parte da experiência.</b>'] },
        { t:'callout', kind:'good', e:'🧰', html:'<b>Teste de alavanca</b> para esta idade: sem a IA, o projeto continuaria sendo possível, mas renderia visivelmente menos durante a aula. A IA gera o material — o aluno escolhe, edita e monta.' }
      ]},
      { id:'les', e:'📖', title:'As 2 primeiras aulas', blocks:[
        { t:'p', html:'Nas duas primeiras aulas os alunos animam o nome e montam a primeira cena do vídeo “O que tem na minha cabeça?”, que terá 3 cenas ao longo de três aulas. Abra cada aula:' },
        { t:'lessons', key:'m1', items:[
          { tab:'M1L1', e:'✏️', h:'Aula 1 — Conhecendo o Sparks. Animação do nome', p:'Os alunos conhecem o grupo e chegam à cidade de Creativia, onde montam no estúdio de animação do Kodland Sparks uma animação quadro a quadro do próprio nome. Depois publicam o projeto, entregam o link e mostram o resultado ao grupo.',
            acc:[['📚','O que você precisa saber','<ul><li>Um <b>quadro</b> é uma imagem estática. Quando vários quadros levemente diferentes se sucedem, vemos movimento ou elementos aparecendo aos poucos (<b>letra nova = quadro novo</b>).</li><li>As ferramentas do estúdio: lápis, borracha, balde de tinta (o contorno precisa estar fechado), seleção e transformação, desfazer (Ctrl/Cmd + Z), salvar em um slot, duplicar quadro e Play.</li><li>Como entrar: <b>Sign in with Kodland</b>, com o mesmo login e senha da plataforma Kodland.</li><li>Como publicar: <b>Publish</b> → título curto → descrição opcional → visibilidade pública → <b>Publish</b> → copiar o link da barra de endereço.</li></ul>'],
                 ['🎯','Objetivos de aprendizagem','<ul><li>O aluno entra no Sparks e abre o estúdio de animação.</li><li>As letras aparecem uma de cada vez, em quadros novos (para nomes longos bastam 3–4 letras ou um apelido curto).</li><li>O nome é legível e o visual traz um detalhe sobre pelo menos um interesse.</li><li>O projeto é publicado, o link é entregue e a animação é mostrada ao grupo.</li></ul>'],
                 ['🧑‍🏫','O seu papel','<ul><li>Conte a história da Creativia em menos de um minuto (o Lumi propõe se apresentar aos moradores com uma animação do nome) e passe logo para a animação de exemplo.</li><li>Deixe os alunos entrarem e desenharem a primeira letra; explique as ferramentas só quando pedirem.</li><li>Deixe que descubram sozinhos como mostrar a segunda letra mais tarde: observe e faça perguntas. Se as duas letras aparecem juntas, chame de <b>tentativa útil</b> e mostre <b>uma vez</b> como duplicar o quadro, só depois da tentativa.</li><li>Publique junto com o grupo e confira que o link de cada aluno abre o projeto.</li><li>Na apresentação, depois de cada projeto, aponte <b>uma força específica</b>. As reações dos colegas vêm só depois de a apresentação terminar.</li></ul>'],
                 ['⏱️','Tempos (60 min)','<ul><li>Abertura e história: 12 min</li><li>Primeira letra: 12 min</li><li>Letras em sequência: 15 min</li><li>Verificação da animação: 3 min</li><li>Publicar e entregar o link: 5 min</li><li>Apresentação: 8 min</li><li>Encerramento e tarefa de casa: 5 min</li></ul><p>Se passar de 0:30 e ninguém achou como mostrar a segunda letra, mostre a solução. Se passar de 0:45, pare de desenhar e vá para a publicação: 3–4 letras ou um apelido é um resultado válido.</p>'],
                 ['⚙️','Aspectos técnicos','<ul><li>Se o aluno não consegue entrar: confirme que usa o mesmo login e senha da plataforma, tente outro navegador ou peça que levante a mão.</li><li>O link entregue é o do <b>projeto publicado</b>, não o do estúdio. Não leve a turma a baixar o GIF nesta etapa.</li><li>Visibilidade <b>Public</b>. O <b>Request feedback</b> e a permissão para a Kodland usar o projeto em divulgação são opcionais.</li><li>Nada de dados pessoais no projeto: sobrenome, telefone, endereço ou escola.</li><li><b>Lição de casa:</b> com um adulto, preparar o acesso a um e-mail (conseguir entrar, abrir a caixa de entrada e receber mensagens; se não houver, criar uma conta com o adulto). O aluno não envia endereço nem senha ao tutor nem à plataforma.</li></ul>']] },
          { tab:'M1L2', e:'🖼', h:'Aula 2 — Cadastro no Canva. Primeira cena do vídeo “O que tem na minha cabeça”', p:'Os alunos entram no departamento de edição de vídeo do Estúdio Creativia, recebem o Canva e montam a primeira cena de um vídeo sobre si, com o GIF do nome da aula anterior. O foco da aula é verificar se conseguem dominar o Canva e montar essa primeira cena.',
            acc:[['📚','O que você precisa saber','<ul><li>O cadastro no Canva: com a conta Google ou com outro e-mail, confirmando por um código enviado ao e-mail.</li><li>O projeto: <b>Videos → Mobile video</b> (formato vertical).</li><li>As peças da cena: fundo (<b>Blank</b>, cor lisa ou degradê), duas molduras claras (<b>Elements → Frames → Paper</b>, uma delas duplicada), o GIF do nome (<b>Uploads</b>), o texto <b>My name is</b> (<b>Text</b>), 1–2 adesivos (<b>Elements → Graphics</b>), animações de entrada (<b>Animate</b>) e a linha do tempo.</li><li>O plano de 3 aulas: hoje, a cena 1; na próxima, o avatar e a cena “o que tenho na cabeça”; na terceira, a última cena, o som e a montagem do vídeo.</li></ul>'],
                 ['📌','Pontos de atenção','<ul><li>O cadastro pode demorar. Não peça endereços de e-mail, senhas nem códigos, e ninguém mostra a senha na tela compartilhada.</li><li>Só elementos <b>gratuitos</b> do Canva, sem a coroa. Não mude a duração da cena em relação aos passos da aula.</li><li><b>Sem o GIF</b>: não pare a montagem. O aluno escreve o nome em texto dentro da moldura e aplica uma animação de entrada. O texto <i>My name is</i> continua sendo necessário.</li><li>O GIF pode aparecer parado no modo de edição: rode a prévia da cena antes de concluir que há problema.</li><li>Não sobrecarregue com ferramentas complexas: o interesse é a função (gráficos, texto, uploads e linha do tempo), não o nome exato dos botões.</li></ul>'],
                 ['🎯','Objetivos de aprendizagem','<ul><li>O aluno tem conta e acesso ao Canva.</li><li>Cria um projeto de vídeo vertical.</li><li>Monta a primeira cena: fundo, texto <i>My name is</i>, GIF do nome (ou o nome em texto com animação) e 1–2 adesivos ligados a um interesse, com animação de entrada.</li><li>A cena dura 3–5 segundos, roda do início ao fim, e o link do projeto é entregue.</li></ul>'],
                 ['🧑‍🏫','O seu papel','<ul><li>No começo, conte o mundo do curso: o Estúdio Creativia atende pedidos da cidade e tem vários departamentos. A turma foi convidada para o de vídeo, e hoje é a primeira verificação.</li><li>Mostre o vídeo final do módulo, mas monte só a primeira cena.</li><li>Mostre <b>uma vez</b> o caminho Videos → Mobile video e deixe a turma explorar o Canva por conta própria antes de ensinar passo a passo.</li><li>Não corrija o projeto no lugar do aluno: dê uma dica concreta de cada vez.</li><li>Na mini-estreia, aponte uma força específica de cada trabalho e não compare os alunos entre si. No fim, confirme em nome dos especialistas que o grupo dominou o Canva.</li></ul>'],
                 ['⏱️','Tempos (60 min)','<ul><li>Abertura (conexão, Mood Check, conferência do e-mail e do GIF, apresentação do projeto): 12 min</li><li>Cadastro no Canva: 10 min</li><li>Criar o documento e explorar livremente: 7 min</li><li>Montagem da primeira cena: 17 min</li><li>Mini-estreia: 5 min</li><li>Encerramento (entrega do link, reflexão, confirmação dos especialistas, tarefa de casa): 9 min</li></ul><p>Se passar de 0:22 e algum aluno ainda não entrou, entregue um e-mail de reserva e siga com o grupo. Se passar de 0:50, mostre 2–4 trabalhos, todos entregam o link e você fecha com a confirmação dos especialistas e a tarefa.</p>'],
                 ['⚙️','Aspectos técnicos','<ul><li>Tenha à mão os e-mails de reserva da Teacher Note. Se o código não chegar: esperar 1 minuto, olhar Spam e Promoções, conferir o endereço e pedir o código de novo.</li><li>Entrou na conta errada? Sair do Canva e repetir o acesso. Se o Canva pedir ajuda de um adulto, o aluno chama o responsável: não digite dados aleatórios.</li><li><b>Entrega:</b> Share → <b>Anyone with the link</b> → <b>Can view</b> → <b>Copy link</b>, colar o link no cartão e clicar no botão de envio. Nesta aula, o link entregue é o do <b>projeto no Canva</b>.</li><li><b>Lição de casa:</b> entrar no Kodland Sparks e fazer o desafio do avatar (AvatarMaker): salvar a imagem em PNG ou JPG, anexá-la ao AI-tutor e clicar em <b>Verificar</b>. A foto é opcional, só com autorização de um adulto e sem dados pessoais.</li></ul>']] }
        ]},
        { t:'callout', kind:'tip', e:'🗺️', html:'A primeira Teacher Note de cada aula tem o plano completo: história, objetivo, tempos de cada cartão e, nas primeiras aulas, um vídeo de briefing. <b>Leia todas as Teacher Notes e assista ao vídeo antes da aula.</b>' }
      ]},
      { id:'proj', e:'⚡', title:'Projetos reais de alunos', blocks:[
        { t:'p', html:'É assim que ficam os projetos do Digital Creativity 2 depois de publicados no Kodland Sparks. Abra-os na plataforma:' },
        { t:'projects', items:[
          { href:'https://portfolio.kodland.org/alanis66790/cmu6a50020brwqf2thayfq7y1', img:'https://portfolio.kodland.org/api/projects/cmu6a50020brwqf2thayfq7y1/file?variant=thumb', e:'🎬', color:'#EC4899', tag:'Video', title:'MI VIDEO', by:'alanis66790', desc:'A apresentação em vídeo de uma aluna, com reações da comunidade 💖 👍 😁.' },
          { href:'https://portfolio.kodland.org/cbermudez315/cmvhp37yt0e73mt01n7tl5dxl', img:'https://portfolio.kodland.org/api/projects/cmvhp37yt0e73mt01n7tl5dxl/file?variant=thumb', e:'✏️', color:'#8B5CF6', tag:'Animation', fw:true, title:'Mi primera animación', by:'cbermudez315', desc:'“Cada letra descreve os meus hobbies e interesses” — a animação do nome, publicada com <b>Request feedback</b>.' }
        ]},
        { t:'callout', kind:'tip', e:'💬', html:'Repare na etiqueta <b>Feedback wanted</b> no segundo projeto: o aluno ativou <b>Request feedback</b> ao publicar. Uma avaliação curta em três campos — impressão geral, pontos fortes e uma coisa para melhorar — faz muita diferença.' }
      ]},
      { id:'bo', e:'📘', title:'Revise as aulas no Backoffice', blocks:[
        { t:'p', html:'Antes da verificação, abra o curso no Backoffice e leia as duas aulas no seu ritmo — os cartões de atividade e as Teacher Notes estão todos lá. Não há tempo limite.' },
        { t:'link', href:'https://bo.kodland.org/courses/2202', e:'📘', title:'Abrir o curso no Backoffice', small:'[2202] Digital Creativity 2 — as aulas e as Teacher Notes' },
        { t:'callout', kind:'warn', e:'🔄', html:'O conteúdo das aulas no Backoffice vai sendo atualizado com o feedback de alunos e tutores. Quando houver mudanças, você será avisado com antecedência para preparar a aula.' }
      ]}
    ]},

  { id:'m2', n:2, e:'⚙️', color:'#F03D9E', title:'A parte técnica das aulas',
    desc:'Entregas no Kodland Sparks desde a A1, o link certo e a opção de reserva quando o grupo atrasa.',
    obj:'Saiba o que garante o sucesso das aulas do Digital Creativity 2: entregas por link no cartão da aula — o projeto publicado no Kodland Sparks na Aula 1 e o link de compartilhamento do Canva na Aula 2 — e a opção de reserva para que nenhum aluno fique sem entregar.',
    needs:['sparksPublish'],
    offer:[['📤','Entregas por link no cartão, não no chat.'],['🔗','O link certo de cada aula: Sparks na A1, Canva na A2.'],['1️⃣','Publicar o primeiro projeto já na A1.'],['🛟','Usar a opção de reserva quando o grupo atrasa.']],
    sections:[
      { id:'focus', e:'🎯', title:'Os 3 pontos que garantem o sucesso', blocks:[
        { t:'p', html:'Estes são os pontos de foco definidos pelo time de produto para o Digital Creativity 2. Abra cada um:' },
        { t:'acc', items:[
          ['📤','As entregas vão por link no cartão da aula, não pelo chat','<p>O aluno entrega o <b>link</b> no cartão da aula e clica no botão de envio. <b>Arquivos ou imagens no chat da aula não contam como entrega.</b></p><ul><li><b>Aula 1:</b> o link do <b>projeto publicado</b> no Kodland Sparks, não o do estúdio nem o do editor.</li><li><b>Aula 2:</b> o link de compartilhamento do projeto no Canva (<b>Anyone with the link → Can view</b>).</li><li>Abra alguns links durante a aula para conferir se estão funcionando.</li></ul>'],
          ['1️⃣','O primeiro projeto é publicado na A1','<p>Desde a <b>Aula 1</b>, o aluno publica o primeiro projeto no Sparks — a animação do nome. Assim ele começa o portfólio no primeiro dia e aprende o fluxo de publicação cedo.</p><ul><li>Reserve tempo no fim da aula para publicar (por volta dos 0:42 a 0:47).</li><li>Visibilidade <b>Public</b>, nunca <b>Only me</b>.</li></ul>'],
          ['🛟','A opção de reserva quando o grupo atrasa','<p>Se o grupo atrasar ou algum aluno travar, use <b>a opção de reserva</b>, para que ele <b>termine e entregue</b> mesmo assim.</p><ul><li><b>A1:</b> passou dos 0:45? Pare de desenhar e publique. 3–4 letras ou um apelido é um resultado válido.</li><li><b>A2:</b> sem o GIF, o nome vai em texto dentro da moldura, com animação de entrada. Sem e-mail ou sem acesso, use um e-mail de reserva. Passou dos 0:50? Mostre 2–4 trabalhos e todos entregam o link.</li><li>Use a reserva sem dramatizar — é uma estratégia, não um fracasso.</li></ul>']
        ]}
      ]},
      { id:'publish', e:'📤', title:'Publicar no Kodland Sparks', blocks:[
        { t:'p', html:'Estes são os passos de cada entrega. É aqui que aparecem os problemas que chegam até você: o link que não abre, o projeto que não aparece no Feed.' },
        { t:'steps', items:[
          ['Dar um nome ao projeto','Um projeto sem nome é difícil de encontrar depois, no portfólio. Ex.: “Animação do meu nome”. Se quiser, o aluno acrescenta 1–2 frases de descrição, <b>sem dados pessoais</b> (sobrenome, telefone, endereço ou escola).'],
          ['Clicar em Publish','O botão abre o formulário de publicação: título, descrição, seção, reações e aparência.'],
          ['Escolher Public','<b>Public</b> aparece no Feed e no portfólio público. <b>Friends only</b> só para amigos e professores. <b>Only me</b> deixa o projeto privado — ninguém mais vê, nem você.'],
          ['Ativar Request feedback','Assim outros alunos podem deixar um feedback estruturado. Funciona só em projetos públicos. Esta opção e a permissão para a Kodland usar o projeto em divulgação são <b>opcionais</b>.'],
          ['Copiar o link do projeto publicado e enviar no cartão','O link é o endereço da página do projeto: em <b>My projects</b>, o aluno abre o <b>projeto publicado</b> e copia o link da <b>barra de endereço do navegador</b>. Não o link do Studio. Depois cola o link no cartão e clica no botão de envio: publicar no Sparks e enviar o link na plataforma da Kodland são <b>dois passos diferentes</b>. (Na Aula 2 o link entregue é o do Canva, ver abaixo.)']
        ]},
        { t:'sim', flag:'sparksPublish', src:'sparks-publish/Sparks_Publish.html', e:'⚡', badge:'Simulação', title:'Publicar no Kodland Sparks', text:'Uma réplica do Kodland Sparks: você publica um projeto como uma aluna, conhece as três opções de visibilidade e resolve os dois problemas mais comuns. Cerca de 5 minutos. A verificação do módulo é liberada quando você termina.' }
      ]},
      { id:'trouble', e:'🛠️', title:'Quando algo dá errado', blocks:[
        { t:'acc', open:false, items:[
          ['🔒','O link do aluno não abre','<p>Quase sempre o projeto foi salvo como <b>Only me</b> (aparece a etiqueta <b>Private project</b>).</p><p>Peça ao aluno: <b>My projects → abrir o projeto → Edit → Public → Publish</b>. O link continua o mesmo e passa a abrir para todos.</p>'],
          ['🔍','O projeto não aparece no Feed','<p>O Feed mostra o último tipo de projeto filtrado. Peça ao aluno que <b>filtre pelo tipo do projeto</b> (por exemplo, <b>Image</b> para o GIF ou <b>Video</b> para o vídeo) ou busque pelo apelido.</p>'],
          ['💬','O aluno mandou o arquivo no chat','<p>O chat não conta como entrega. Ajude-o a publicar no Sparks e a enviar o link no cartão.</p>'],
          ['🔗','O link aponta para o Studio (Aula 1)','<p>Na Aula 1 o link certo é o do <b>projeto publicado</b> no Sparks. Abra o projeto em <b>My projects</b> e copie o link da página dele, na barra de endereço.</p>'],
          ['🔗','O link do Canva não abre (Aula 2)','<p>Na Aula 2 o link entregue é o do projeto no Canva, e ele precisa estar compartilhado. Peça ao aluno: <b>Share → Anyone with the link → Can view → Copy link</b>, colar o link no cartão e clicar no botão de envio.</p>'],
          ['📁','O aluno não encontra o GIF (Aula 2)','<p>Peça que abra a pasta <b>Downloads</b> e ordene os arquivos por data. Se o arquivo não existir, use a <b>opção de reserva</b>: o nome escrito em texto dentro da moldura, com animação de entrada. O texto <i>My name is</i> continua sendo necessário.</p>'],
          ['🎞️','O GIF aparece parado no Canva','<p>No modo de edição pode aparecer só um momento da animação. Rode a prévia da cena. Se também não houver movimento, confira o formato do arquivo com o aluno.</p>'],
          ['🔑','O aluno não consegue entrar no Sparks (Aula 1)','<p>Confirme que usa <b>Sign in with Kodland</b> com o mesmo login e senha da plataforma Kodland. Se os dados não forem preenchidos sozinhos, ele os digita. Tente outro navegador ou peça que levante a mão.</p>'],
          ['📧','O cadastro no Canva falha (Aula 2)','<p>Código que não chegou: esperar 1 minuto, olhar <b>Spam</b> e <b>Promoções</b>, conferir o endereço e pedir o código de novo. Conta errada: sair e repetir o acesso. Sem e-mail: entregue um <b>e-mail de reserva</b>. Nunca peça endereços, senhas nem códigos, e relembre a tarefa de casa sobre o e-mail antes da aula.</p>']
        ]}
      ]},
      { id:'check', e:'✅', title:'Checklist técnico de cada aula', blocks:[
        { t:'check', title:'✅ Meu checklist técnico', groups:[
          { h:'☑️ Antes da aula', items:['Li todas as Teacher Notes da aula e assisti ao vídeo de briefing.','Sei qual é a opção de reserva da aula (tarefa reduzida ou arquivo inicial).','Tenho as alternativas prontas (e-mails de reserva para o Canva e o plano B de nome em texto, se faltar o GIF).'] },
          { h:'🎬 Durante a aula', items:['Uso o Follow Mode para os cartões e compartilho só a aba da ferramenta nas demonstrações, sem mostrar senhas nem códigos.','Reservei tempo no fim da aula para publicar.'] },
          { h:'📤 No fim da aula', items:['Na A1, todos publicaram no Sparks como <b>Public</b> — nenhuma entrega pelo chat.','Todos enviaram o link certo (A1: o <b>projeto publicado</b> no Sparks; A2: o link de compartilhamento do Canva) e clicaram no botão de envio.','Abri pelo menos alguns links para conferir se estão funcionando.'] }
        ]}
      ]}
    ]}
];

COURSE.quiz = {
  m1:[
    { q:'Qual é a história do Digital Creativity 2?',
      o:['Os alunos são jovens criadores no Estúdio Creativia, uma agência em que cada módulo é um briefing de cliente.','Os alunos entram num laboratório secreto em que cada projeto é uma missão.','Os alunos são desenvolvedores júnior de jogos.'],
      a:0, e:'No Estúdio Creativia, cada módulo é um novo briefing, e o curso termina com um portfólio profissional no Kodland Sparks.' },
    { ctx:'Na Aula 1, um aluno desenhou duas letras e, ao dar Play, as duas aparecem ao mesmo tempo.',
      q:'O que você faz?',
      o:['Chama de tentativa útil, deixa testar mais hipóteses e só depois mostra como duplicar o quadro.','Mostra a solução na hora, antes de ele tentar de novo.','Pede que apague tudo e comece outra vez.'],
      a:0, e:'Duas letras ao mesmo tempo são uma primeira tentativa útil. Deixe testar e, depois, mostre uma vez como duplicar o quadro: letra nova, quadro novo.' },
    { q:'O que é essencial preparar para a Aula 2?',
      o:['Que o aluno consiga entrar em um e-mail próprio ou de um adulto — sem enviar endereço nem senha ao tutor — e que você tenha e-mails de reserva.','Uma conta paga do Canva.','O vídeo final já exportado.'],
      a:0, e:'O cadastro no Canva é o bloqueio mais comum: relembre a tarefa de casa sobre o e-mail com antecedência e tenha contas de reserva. Nunca peça endereços, senhas nem códigos.' },
    { ctx:'Na Aula 2, uma aluna não encontra o GIF do nome na pasta Downloads.',
      q:'Qual é a melhor decisão?',
      o:['Ela escreve o nome em texto dentro da moldura, aplica uma animação de entrada e segue com a cena.','Ela espera a turma terminar para refazer a animação da Aula 1.','Ela pula o nome e entrega a cena só com o fundo.'],
      a:0, e:'Sem o GIF, a cena continua: o nome vai em texto, com animação de entrada. O texto My name is continua sendo necessário.' },
    { ctx:'Aos 50 minutos da Aula 2 ainda faltam vários alunos mostrarem a cena.',
      q:'O que você faz?',
      o:['Mostra 2–4 trabalhos, garante que todos entreguem o link e fecha com a confirmação dos especialistas.','Mostra todos os trabalhos e deixa o link para a próxima aula.','Pula a mini-estreia e a entrega do link.'],
      a:0, e:'O tempo manda mostrar 2–4 trabalhos, mas todos entregam o link e a confirmação dos especialistas fecha a história da aula.' }
  ],
  m2:[
    { ctx:'Um aluno mandou o vídeo dele pelo chat da aula.',
      q:'Isso conta como entrega?',
      o:['Sim, o importante é que o vídeo exista.','Não: a entrega é o link enviado no cartão da aula (A1: projeto publicado no Sparks; A2: link de compartilhamento do Canva).','Sim, se você baixar o arquivo.'],
      a:1, e:'As entregas vão por link no cartão da aula, não pelo chat.' },
    { q:'Na Aula 1, qual link o aluno deve enviar no cartão?',
      o:['O link do Studio ou do editor.','O link do projeto publicado no Kodland Sparks.','O link de edição do Canva.'],
      a:1, e:'Na A1 o link precisa direcionar para o projeto publicado, não para o Studio.' },
    { q:'Na Aula 2, qual link o aluno deve enviar no cartão?',
      o:['O link do projeto publicado no Kodland Sparks.','O link de compartilhamento do Canva (Share → Anyone with the link → Can view → Copy link).','O link do e-mail dele.'],
      a:1, e:'Na A2 a entrega é o projeto do Canva compartilhado por link, com permissão Can view. Depois de colar, o aluno clica no botão de envio.' },
    { q:'Quando os alunos publicam o primeiro projeto no Sparks?',
      o:['Na Aula 1.','Na Aula 2, depois de montar a cena no Canva.','No fim do curso.'],
      a:0, e:'O primeiro projeto é publicado já na Aula 1 — o portfólio começa no primeiro dia.' },
    { ctx:'Aos 22 minutos da Aula 2, um aluno ainda não conseguiu entrar no Canva.',
      q:'O que você faz?',
      o:['Entrega um e-mail de reserva e segue com o grupo para a criação do documento.','Pede o endereço e a senha do e-mail do aluno para entrar por ele.','Espera até ele entrar, com o resto do grupo parado.'],
      a:0, e:'A opção de reserva existe para que nenhum aluno fique para trás. Nunca peça endereços nem senhas.' },
    { ctx:'O link de um aluno não abre para você, e no portfólio dele o projeto aparece como “Private project”.',
      q:'O que ele deve fazer?',
      o:['My projects → abrir o projeto → Edit → Public → Publish.','Mandar o arquivo pelo chat.','Criar um projeto novo.'],
      a:0, e:'O projeto foi salvo como Only me. Com Edit → Public, o mesmo link passa a abrir para todos.' }
  ]
};

COURSE.done = {
  title: 'Módulos concluídos!',
  html: `<p>Você está quase lá! Volte à página da formação no LMS, onde você acessou esta formação. O teste DST está logo abaixo da formação.</p>
    <p>👉 <b>Você precisa fazer e passar no teste DST para que a formação seja considerada concluída.</b> Se você não fizer o DST, a formação vai continuar incompleta e pode expirar.</p>
    <p>A nota mínima para passar é <b>80%</b>.</p>
    <p>Boa sorte! ❤️</p>`,
  nexts: [
    ['📒', '<b>Antes de cada aula:</b> leia as Teacher Notes no Backoffice e assista ao vídeo de briefing.'],
    ['📤', '<b>Entregas por link:</b> nunca pelo chat. A1: link do projeto publicado no Sparks. A2: link de compartilhamento do Canva.'],
    ['1️⃣', '<b>Desde a A1:</b> o primeiro projeto já vai para o portfólio.'],
    ['🛟', '<b>Grupo atrasado?</b> Use a opção de reserva para que todos entreguem.']
  ]
};

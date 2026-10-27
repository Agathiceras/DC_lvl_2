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
    desc:'A história, a Aula 1 e projetos reais publicados por alunos.',
    obj:'Prepare-se para dar a Aula 1 do Digital Creativity 2. Nela, os alunos animam o próprio nome no Kodland Sparks e publicam o primeiro projeto do portfólio.',
    offer:[['🎭','Conhecer a história do Estúdio Creativia e como o curso é organizado.'],['📖','Saber o que acontece na Aula 1.'],['⚡','Ver projetos reais publicados por alunos no Kodland Sparks.'],['📘','Revisar a aula e as Teacher Notes no Backoffice.']],
    sections:[
      { id:'ov', e:'🎭', title:'O curso', blocks:[
        { t:'meta', items:[['👦','Idade','10–12 anos'],['⏱️','Aula','60 min'],['📚','Programa','40 aulas'],['🖌️','Ferramentas','Kodland Sparks · Canva · Krita · CapCut']] },
        { t:'p', html:'Os alunos se tornam jovens criadores no <b>Estúdio Creativia</b>, uma agência criativa digital onde cada módulo é um novo briefing de cliente: vídeo sobre si, campanha de turnê musical, ilustração, personagem, robô animado, mundo 3D, visual novel. No fim do curso, eles vão ter um portfólio profissional no Kodland Sparks.' },
        { t:'ba', before:['A versão anterior:','Abordagem indutiva: primeiro a ferramenta e a teoria, depois um projeto do zero. Habilidades com IA não eram ensinadas.'], after:['Digital Creativity 2:','Abordagem dedutiva: protótipo ou animação pronta → exploração → criação própria. <b>O AI Buddy e a IA do Canva fazem parte da experiência.</b>'] },
        { t:'callout', kind:'good', e:'🧰', html:'<b>Teste de alavancagem</b> para esta idade: sem a IA, o projeto continuaria sendo possível, mas renderia visivelmente menos durante a aula. A IA gera o material — o aluno escolhe, edita e monta.' }
      ]},
      { id:'les', e:'📖', title:'A Aula 1', blocks:[
        { t:'p', html:'Na primeira aula, os alunos animam o próprio nome no estúdio de animação do Kodland Sparks e publicam o primeiro projeto do portfólio. Abra a aula:' },
        { t:'lessons', key:'m1', items:[
          { tab:'M1L1', e:'✏️', h:'Aula 1 — Conhecendo o Sparks. Animação do nome', p:'Os alunos conhecem o grupo e chegam à cidade de Creativia, onde montam no estúdio de animação do Kodland Sparks uma animação quadro a quadro do próprio nome. Depois publicam o projeto, entregam o link e mostram o resultado ao grupo.',
            acc:[['📚','O que você precisa saber','<ul><li>Um <b>quadro</b> é uma imagem estática. Quando vários quadros levemente diferentes se sucedem, vemos movimento ou elementos aparecendo aos poucos (<b>letra nova = quadro novo</b>).</li><li>As ferramentas do estúdio: lápis, borracha, balde de tinta (o contorno precisa estar fechado), seleção e transformação, desfazer (Ctrl/Cmd + Z), salvar em um slot, duplicar quadro e Play.</li><li>Como entrar: <b>Sign in with Kodland</b>, com o mesmo login e senha da plataforma Kodland.</li><li>Como publicar: <b>Publish</b> → título curto → descrição opcional → visibilidade pública (<b>Public</b>) → <b>Publish</b> → copiar o link da barra de endereço.</li></ul>'],
                 ['🎯','Objetivos de aprendizagem','<ul><li>O aluno entra no Kodland Sparks e abre o estúdio de animação.</li><li>As letras aparecem uma de cada vez, em quadros novos (para nomes longos bastam 3–4 letras ou um apelido curto).</li><li>O nome é legível e o visual traz um detalhe sobre pelo menos um interesse.</li><li>O projeto é publicado, o link é entregue e a animação é mostrada ao grupo.</li></ul>'],
                 ['🧑‍🏫','O seu papel','<ul><li>Conte a história da Creativia em menos de um minuto (o Lumi propõe se apresentar aos moradores com uma animação do nome) e passe logo para a animação de exemplo.</li><li>Deixe os alunos entrarem e desenharem a primeira letra; explique as ferramentas só quando pedirem.</li><li>Deixe que descubram sozinhos como mostrar a segunda letra mais tarde: observe e faça perguntas. Se as duas letras aparecerem juntas, chame de “<b>tentativa útil</b>” e mostre <b>uma vez</b> como duplicar o quadro, só depois da tentativa.</li><li>Publique junto com o grupo e confira se o link de cada aluno abre o projeto.</li><li>Na apresentação, depois de cada projeto, aponte <b>um ponto forte específico</b>. As reações dos colegas vêm só depois que a apresentação terminar.</li></ul>'],
                 ['⏱️','Tempos (60 min)','<ul><li>Abertura e história: 12 min</li><li>Primeira letra: 12 min</li><li>Letras em sequência: 15 min</li><li>Verificação da animação: 3 min</li><li>Publicar e entregar o link: 5 min</li><li>Apresentação: 8 min</li><li>Encerramento e tarefa de casa: 5 min</li></ul><p>Se passar de 30 min e ninguém achar como mostrar a segunda letra, mostre a solução. Se passar de 45 min, pare de desenhar e vá para a publicação: 3–4 letras ou um apelido é um resultado válido.</p>'],
                 ['⚙️','Aspectos técnicos','<ul><li>Se o aluno não consegue entrar: confirme que usa o mesmo login e senha da plataforma, tente outro navegador ou peça que levante a mão.</li><li>O link entregue é o do <b>projeto publicado</b>, não o do estúdio. Não leve a turma a baixar o GIF nesta etapa.</li><li>Visibilidade <b>Public</b>. O <b>Request feedback</b> e a permissão para a Kodland usar o projeto em divulgação são opcionais.</li><li>Nada de dados pessoais no projeto: sobrenome, telefone, endereço ou escola.</li><li><b>Tarefa de casa:</b> com um adulto, preparar o acesso a um e-mail (conseguir entrar, abrir a caixa de entrada e receber mensagens; se não houver, criar uma conta com o adulto). O aluno não envia endereço nem senha ao tutor nem à plataforma.</li></ul>']] }
        ]},
        { t:'callout', kind:'tip', e:'🗺️', html:'A primeira Teacher Note da aula tem o plano completo: história, objetivo, tempos de cada cartão e um vídeo de briefing. <b>Leia todas as Teacher Notes e assista ao vídeo antes da aula.</b>' }
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
        { t:'p', html:'Antes da verificação, abra o curso no Backoffice e leia a aula no seu ritmo — os cartões de atividade e as Teacher Notes estão todos lá. Não há tempo limite.' },
        { t:'link', href:'https://bo.kodland.org/courses/2202', e:'📘', title:'Abrir o curso no Backoffice', small:'[2202] Digital Creativity 2 — as aulas e as Teacher Notes' },
        { t:'callout', kind:'warn', e:'🔄', html:'O conteúdo das aulas no Backoffice vai sendo atualizado com o feedback de alunos e tutores. Quando houver mudanças, você será avisado com antecedência para preparar a aula.' }
      ]}
    ]},

  { id:'m2', n:2, e:'⚙️', color:'#F03D9E', title:'A parte técnica das aulas',
    desc:'Entregas no Kodland Sparks desde a A1, o link certo e a opção de reserva quando o grupo atrasa.',
    obj:'Saiba o que garante o sucesso da Aula 1 do Digital Creativity 2: a entrega por link no cartão da aula — o projeto publicado no Kodland Sparks — e a opção de reserva para que nenhum aluno fique sem entregar.',
    needs:['sparksPublish'],
    offer:[['📤','Entrega por link no cartão, não no chat.'],['🔗','O link correto da Aula 1: o projeto publicado no Kodland Sparks.'],['1️⃣','Publicar o primeiro projeto já na A1.'],['🛟','Usar a opção de reserva quando o grupo atrasa.']],
    sections:[
      { id:'focus', e:'🎯', title:'Os 3 pontos que garantem o sucesso', blocks:[
        { t:'p', html:'Estes são os pontos de foco definidos pelo time de produto para o Digital Creativity 2. Abra cada um:' },
        { t:'acc', items:[
          ['📤','As entregas são feitas por link no cartão da aula, não pelo chat','<p>O aluno insere o <b>link</b> no cartão da aula e clica no botão de envio. <b>Arquivos ou imagens no chat da aula não contam como entrega.</b></p><ul><li><b>Aula 1:</b> o link do <b>projeto publicado</b> no Kodland Sparks, não o do estúdio nem o do editor.</li><li>Abra alguns links durante a aula para conferir se estão funcionando.</li></ul>'],
          ['1️⃣','O primeiro projeto é publicado na L1','<p>Desde a <b>Aula 1</b>, o aluno publica o primeiro projeto no Sparks — a animação do nome. Assim ele começa o portfólio no primeiro dia e aprende o fluxo de publicação cedo.</p><ul><li>Reserve tempo no fim da aula para publicar (por volta dos 42 aos 47 min).</li><li>Visibilidade <b>Public</b>, nunca <b>Only me</b>.</li></ul>'],
          ['🛟','A opção de reserva quando o grupo atrasa','<p>Se o grupo atrasar ou algum aluno travar, use <b>a opção de reserva</b>, para que ele <b>termine e entregue</b> mesmo assim.</p><ul><li><b>L1:</b> passou dos 45 min? Pare de desenhar e publique. 3–4 letras ou um apelido é um resultado válido.</li><li>Use a reserva sem dramatizar — é uma estratégia, não um fracasso.</li></ul>']
        ]}
      ]},
      { id:'publish', e:'📤', title:'Publicar no Kodland Sparks', blocks:[
        { t:'p', html:'Estes são os passos de cada entrega. É aqui que aparecem os problemas que chegam até você: o link que não abre, o projeto que não aparece no Feed.' },
        { t:'steps', items:[
          ['Dar um nome ao projeto','Um projeto sem nome é difícil de encontrar depois, no portfólio. Ex.: “Animação do meu nome”. Se quiser, o aluno acrescenta 1–2 frases de descrição, <b>sem dados pessoais</b> (sobrenome, telefone, endereço ou escola).'],
          ['Clicar em Publish','O botão abre o formulário de publicação: título, descrição, seção, reações e aparência.'],
          ['Escolher Public','<b>Public</b> aparece no Feed e no portfólio público. <b>Friends only</b> só para amigos e professores. <b>Only me</b> deixa o projeto privado — ninguém mais vê, nem você.'],
          ['Ativar Request feedback','Assim outros alunos podem deixar um feedback estruturado. Funciona só em projetos públicos. Esta opção e a permissão para a Kodland usar o projeto em divulgação são <b>opcionais</b>.'],
          ['Copiar o link do projeto publicado e enviar no cartão','O link é o endereço da página do projeto: em <b>My projects</b>, o aluno abre o <b>projeto publicado</b> e copia o link da <b>barra de endereço do navegador</b>. Não copie o link do estúdio. Depois cola o link no cartão e clica no botão de envio: publicar no Sparks e enviar o link na plataforma da Kodland são <b>dois passos diferentes</b>.']
        ]},
        { t:'sim', flag:'sparksPublish', src:'sparks-publish/Sparks_Publish.html', e:'⚡', badge:'Simulação', title:'Publicar no Kodland Sparks', text:'Uma réplica do Kodland Sparks: você publica um projeto como uma aluna, conhece as três opções de visibilidade e resolve os dois problemas mais comuns. Cerca de 5 minutos. A verificação do módulo é liberada quando você termina.' }
      ]},
      { id:'trouble', e:'🛠️', title:'Quando algo dá errado', blocks:[
        { t:'acc', open:false, items:[
          ['🔒','O link do aluno não abre','<p>Quase sempre o projeto foi salvo como <b>Only me</b> (aparece a etiqueta <b>Private project</b>).</p><p>Peça ao aluno: <b>My projects → abrir o projeto → Edit → Public → Publish</b>. O link continua o mesmo e passa a abrir para todos.</p>'],
          ['🔍','O projeto não aparece no Feed','<p>O Feed mostra o último tipo de projeto filtrado. Peça ao aluno que <b>filtre pelo tipo do projeto</b> (aqui, o tipo da animação) ou busque pelo apelido.</p>'],
          ['💬','O aluno mandou o arquivo no chat','<p>O chat não conta como entrega. Ajude-o a publicar no Sparks e a enviar o link no cartão.</p>'],
          ['🔗','O link aponta para o estúdio (Aula 1)','<p>Na Aula 1 o link certo é o do <b>projeto publicado</b> no Sparks. Abra o projeto em <b>My projects</b> e copie o link da página dele, na barra de endereço.</p>'],
          ['🔑','O aluno não consegue entrar no Sparks (Aula 1)','<p>Confirme se o aluno está usando a opção <b>Sign in with Kodland</b> com o mesmo login e senha da plataforma Kodland. Se os dados não forem preenchidos sozinhos, ele os digita. Tente outro navegador ou peça que levante a mão.</p>']
        ]}
      ]},
      { id:'check', e:'✅', title:'Checklist técnico de cada aula', blocks:[
        { t:'check', title:'✅ Meu checklist técnico', groups:[
          { h:'☑️ Antes da aula', items:['Li todas as Teacher Notes da aula e assisti ao vídeo de briefing.','Sei qual é a opção de reserva da aula (3–4 letras ou um apelido, se o tempo apertar).'] },
          { h:'🎬 Durante a aula', items:['Uso o Follow Mode para os cartões e compartilho só a aba da ferramenta nas demonstrações, sem mostrar senhas nem códigos.','Reservei tempo no fim da aula para publicar.'] },
          { h:'📤 No fim da aula', items:['Todos publicaram no Kodland Sparks como <b>Public</b> — nenhuma entrega pelo chat.','Todos enviaram o link correto (o <b>projeto publicado</b> no Kodland Sparks) e clicaram no botão de envio.','Abri pelo menos alguns links para conferir se estão funcionando.'] }
        ]}
      ]}
    ]}
];

COURSE.quiz = {
  m1:[
    { q:'Qual é a história do Digital Creativity 2?',
      o:['Os alunos são jovens criadores no Estúdio Creativia, uma agência em que cada módulo é um briefing de cliente.','Os alunos entram num laboratório secreto em que cada projeto é uma missão.','Os alunos são desenvolvedores júnior de jogos.'],
      a:0, e:'No Estúdio Creativia, cada módulo é um novo briefing, e o curso termina com um portfólio profissional no Kodland Sparks.' },
    { q:'O que os alunos fazem na Aula 1?',
      o:['Montam um jogo com blocos de código.','Animam o próprio nome, quadro a quadro, no estúdio de animação do Kodland Sparks, publicam o projeto e entregam o link.','Desenham uma ilustração e a exportam em PDF.'],
      a:1, e:'Na Aula 1 os alunos conhecem o grupo, animam o nome quadro a quadro no Kodland Sparks, publicam o projeto, entregam o link e mostram o resultado ao grupo.' },
    { q:'Como você abre a Aula 1?',
      o:['Explicando uma a uma todas as ferramentas do estúdio antes de os alunos desenharem.','Contando a história da Creativia em menos de um minuto e passando logo para a animação de exemplo.','Pedindo que os alunos publiquem um projeto de teste antes de começar.'],
      a:1, e:'A história é curta (menos de um minuto). Depois, os alunos entram e desenham a primeira letra; as ferramentas são explicadas só quando eles pedem.' },
    { ctx:'Na Aula 1, um aluno desenhou duas letras e, ao dar Play, as duas aparecem ao mesmo tempo.',
      q:'O que você faz?',
      o:['Mostra a solução na hora, antes de ele tentar de novo.','Pede que apague tudo e comece outra vez.','Chama de tentativa útil, deixa testar mais hipóteses e só depois mostra como duplicar o quadro.'],
      a:2, e:'Duas letras ao mesmo tempo são uma primeira tentativa útil. Deixe testar e, depois, mostre uma vez como duplicar o quadro: letra nova, quadro novo.' },
    { q:'Na apresentação das animações, o que você faz depois de cada projeto?',
      o:['Aponta um ponto forte específico; as reações dos colegas vêm só depois que a apresentação terminar.','Pede que cada colega diga o que mudaria no projeto.','Segue para o próximo projeto, sem comentar.'],
      a:0, e:'Depois de cada projeto, aponte um ponto forte específico. As reações dos colegas vêm só no final da apresentação.' }
  ],
  m2:[
    { ctx:'Um aluno mandou a animação dele pelo chat da aula.',
      q:'Isso conta como entrega?',
      o:['Sim, o importante é que a animação exista.','Não: a entrega é o link do projeto publicado no Kodland Sparks, enviado no cartão da aula.','Sim, se você baixar o arquivo.'],
      a:1, e:'As entregas são feitas por link no cartão da aula, não pelo chat.' },
    { q:'Na Aula 1, qual link o aluno deve enviar no cartão?',
      o:['O link do Studio ou do editor.','O link do projeto publicado no Kodland Sparks.','O link do e-mail dele.'],
      a:1, e:'Na A1 o link precisa direcionar para o projeto publicado, não para o Studio.' },
    { q:'Um aluno quer escrever na descrição do projeto o sobrenome e a escola dele. O que você orienta?',
      o:['Pode, porque o projeto é público e a escolha é dele.','A descrição é opcional e não leva dados pessoais (sobrenome, telefone, endereço ou escola).','Pode, desde que o projeto seja Friends only.'],
      a:1, e:'Se o aluno quiser, a descrição leva 1–2 frases, sem dados pessoais: sobrenome, telefone, endereço ou escola.' },
    { q:'Quando os alunos publicam o primeiro projeto no Sparks?',
      o:['Só depois de reunir vários projetos no portfólio.','No fim do curso.','Já na Aula 1.'],
      a:2, e:'O primeiro projeto é publicado já na Aula 1 — o portfólio começa no primeiro dia.' },
    { ctx:'Aos 45 minutos da Aula 1, vários alunos ainda estão desenhando as letras do nome.',
      q:'O que você faz?',
      o:['Deixa todos terminarem o nome inteiro e publica na aula seguinte.','Para de desenhar e vai para a publicação: 3–4 letras ou um apelido é um resultado válido.','Pula a publicação e passa direto para a apresentação.'],
      a:1, e:'A opção de reserva da L1: passou dos 45 min, pare de desenhar e publique. Assim ninguém fica sem entregar.' },
    { ctx:'O link de um aluno não abre para você, e no portfólio dele o projeto aparece como “Private project”.',
      q:'O que ele deve fazer?',
      o:['Mandar o arquivo pelo chat.','Criar um projeto novo.','My projects → abrir o projeto → Edit → Public → Publish.'],
      a:2, e:'O projeto foi salvo como Only me. Com Edit → Public, o mesmo link passa a abrir para todos.' }
  ]
};

COURSE.done = {
  title: 'Módulos concluídos!',
  html: `<p>Você está quase lá! Volte à página da formação no LMS, onde você acessou esta formação. O teste DST está logo abaixo da formação.</p>
    <p>👉 <b>Você precisa fazer e passar no teste DST para que a formação seja considerada concluída.</b> Se você não fizer o DST, a formação vai continuar incompleta e pode expirar.</p>
    <p>A nota mínima para passar é <b>80%</b>.</p>
    <p>Boa sorte! ❤️</p>`,
  nexts: [
    ['📒', '<b>Antes da aula:</b> leia as Teacher Notes no Backoffice e assista ao vídeo de briefing.'],
    ['📤', '<b>Entrega por link:</b> nunca pelo chat. A1: link do projeto publicado no Sparks.'],
    ['1️⃣', '<b>Desde a A1:</b> o primeiro projeto já vai para o portfólio.'],
    ['🛟', '<b>Grupo atrasado?</b> Use a opção de reserva para que todos entreguem.']
  ]
};

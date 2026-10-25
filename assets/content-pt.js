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
    desc:'A história, as 4 primeiras aulas e projetos reais publicados por alunos.',
    obj:'Prepare-se para dar as primeiras aulas do Digital Creativity 2. Nelas, os alunos vão criar uma apresentação em vídeo de 3 cenas e publicar o primeiro projeto do portfólio.',
    offer:[['🎭','Conhecer a história do Estúdio Creativia e como o curso é organizado.'],['📖','Saber o que acontece em cada uma das 4 primeiras aulas.'],['⚡','Ver projetos reais publicados por alunos no Kodland Sparks.'],['📘','Revisar as aulas e as Teacher Notes no Backoffice.']],
    sections:[
      { id:'ov', e:'🎭', title:'O curso', blocks:[
        { t:'meta', items:[['👦','Idade','10–12 anos'],['⏱️','Aula','60 min'],['📚','Programa','40 aulas'],['🖌️','Ferramentas','FlipAnim · Canva']] },
        { t:'p', html:'Os alunos se tornam jovens criadores no <b>Estúdio Creativia</b>, uma agência criativa digital onde cada módulo é um novo briefing de cliente: vídeo pessoal, marca, quadrinho, animação, mundo 3D, loja online. No fim do curso, eles vão ter um portfólio profissional no Kodland Sparks.' },
        { t:'ba', before:['A versão anterior','Indutivo: primeiro a ferramenta e a teoria, depois um projeto do zero. Habilidades com IA não eram ensinadas.'], after:['Digital Creativity 2','Dedutivo: protótipo ou animação pronta → exploração → criação própria. <b>O AI Buddy e a IA do Canva fazem parte da experiência.</b>'] },
        { t:'callout', kind:'good', e:'🧰', html:'<b>Teste de alavanca</b> para esta idade: sem a IA, o projeto continuaria sendo possível, mas renderia visivelmente menos durante a aula. A IA gera o material — o aluno escolhe, edita e monta.' }
      ]},
      { id:'les', e:'📖', title:'As 4 primeiras aulas', blocks:[
        { t:'p', html:'O Módulo 1 constrói, cena por cena, uma apresentação em vídeo do aluno. Abra cada aula:' },
        { t:'lessons', key:'m1', items:[
          { tab:'M1A1', e:'✏️', h:'Aula 1 — Animando o seu nome no FlipAnim', p:'Primeira aula do curso. Os alunos conhecem o grupo e vão criar o primeiro projeto digital: uma animação GIF quadro a quadro com o próprio nome.',
            acc:[['📚','O que você precisa saber','<ul><li>O princípio da animação quadro a quadro (uma letra nova = um quadro novo).</li><li>O básico do FlipAnim: lápis, preenchimento, borracha, duplicar o quadro.</li><li>O <b>BrushNinja</b> como alternativa se o FlipAnim falhar.</li></ul>'],
                 ['🎯','Objetivos de aprendizagem','<ul><li>O aluno entende que o movimento vem de uma sequência de imagens um pouco diferentes.</li><li>Produz uma animação GIF legível e funcionando com o próprio nome.</li></ul>'],
                 ['🧑‍🏫','O seu papel','<ul><li>Mostre o resultado final e o algoritmo principal <b>uma vez</b>.</li><li>Crie um desafio produtivo <i>antes</i> de explicar — deixe tentar primeiro.</li><li>Dê <b>uma dica por vez</b>.</li><li>Priorize que a animação <i>funcione</i> antes de ela ficar bonita.</li></ul>'],
                 ['⚙️','Aspectos técnicos','<ul><li>Se o FlipAnim não carregar, use o BrushNinja.</li><li>O editor funciona sem cadastro — nenhum dado pessoal é pedido.</li><li><b>Lição de casa:</b> preparar um e-mail próprio ou de um adulto para a próxima aula (cadastro no Canva), sem compartilhar a senha com o tutor.</li></ul>']] },
          { tab:'M1A2', e:'🖼', h:'Aula 2 — Cadastro no Canva. Primeira cena “Meu nome é…”', p:'Os alunos conhecem o Canva, vão criar o primeiro projeto de vídeo e montar a primeira cena da futura apresentação usando o GIF da Aula 1.',
            acc:[['📚','O que você precisa saber','<ul><li>O processo de cadastro no Canva (e contas de reserva se houver problemas técnicos).</li><li>A estrutura de um projeto de vídeo no Canva: fundo, molduras, uploads, animar, linha do tempo.</li><li>Como importar o GIF da aula anterior.</li></ul>'],
                 ['📌','Pontos de atenção','<ul><li>O cadastro pode trazer dificuldades — <b>tenha e-mails de reserva prontos</b>.</li><li>Não sobrecarregue os alunos com ferramentas complexas do Canva.</li><li>Confira se os alunos estão usando apenas elementos gratuitos.</li><li>Relembre as regras de segurança de dados pessoais durante o cadastro.</li></ul>'],
                 ['🎯','Objetivos de aprendizagem','<ul><li>O aluno se cadastra e entra no Canva.</li><li>Cria um projeto de vídeo com a primeira cena.</li><li>Acrescenta o GIF do nome e pelo menos 2 elementos animados.</li></ul>'],
                 ['🧑‍🏫','O seu papel','<ul><li>Mostre o cadastro e a criação do projeto <b>uma vez</b>.</li><li>Dê tempo de exploração livre antes de explicar a interface em detalhe.</li><li>Organize uma demonstração final com feedback positivo e específico.</li></ul>'],
                 ['⚙️','Aspectos técnicos','<ul><li>Projeto de vídeo no formato <b>vertical</b>.</li><li>Compartilhar → Qualquer pessoa com o link → Ver → Copiar link.</li></ul>']] },
          { tab:'M1A3', e:'🤖', h:'Aula 3 — Cena dos interesses com avatar/foto e elementos de IA', p:'Os alunos vão criar a segunda cena do vídeo com uma foto autorizada ou um avatar, gerar uma versão editada com IA (remoção de fundo) e animar um efeito de “cabeça se abrindo” com figurinhas dos seus interesses.',
            acc:[['📚','O que você precisa saber','<ul><li>Como enviar o arquivo de uma imagem (Uploads).</li><li>Como usar os apps de IA do Canva para remover um fundo.</li><li>A ordem certa das camadas (a nuvem atrás do personagem, mas na frente do fundo).</li><li>Atalhos para desfazer (Ctrl/Cmd + Z).</li></ul>'],
                 ['📌','Pontos de atenção','<ul><li>Tenha um <b>avatar neutro de reserva</b> se o aluno não trouxer o próprio recurso.</li><li>Não faça muitas gerações de IA seguidas — os créditos gratuitos são limitados.</li><li>Confira se a imagem não tem dados pessoais e fica dentro da moldura.</li></ul>'],
                 ['🎯','Objetivos de aprendizagem','<ul><li>O aluno integra o recurso pessoal editado com IA.</li><li>Mantém o estilo visual da cena 1.</li><li>Adiciona figurinhas dos próprios interesses, com animação de entrada.</li></ul>'],
                 ['🧑‍🏫','O seu papel','<ul><li>Mostre o fluxo técnico <b>uma vez</b> e deixe o aluno experimentar.</li><li>Dê feedback com a fórmula: <b>ponto forte específico → pergunta para melhorar → apoio</b>.</li><li><b>Não corrija o projeto pelo aluno.</b></li></ul>'],
                 ['⚙️','Aspectos técnicos','<ul><li>Ferramentas de corte para dividir o avatar em duas partes (cabeça se abrindo).</li><li>Confira se as duas partes continuam com o mesmo tamanho.</li><li>Reforce a proibição de compartilhar fotos com dados pessoais.</li></ul>']] },
          { tab:'M1A4', e:'🎵', h:'Aula 4 — Música, exportação e publicação no Kodland Sparks', p:'Última aula do módulo. Os alunos vão adicionar música e efeitos sonoros no vídeo completo, exportar o arquivo em MP4 e publicar o projeto final como projeto do portfólio no Kodland Sparks.',
            acc:[['📚','O que você precisa saber','<ul><li>Como acrescentar e ajustar uma faixa de áudio na linha do tempo do Canva.</li><li>O processo completo de exportação (Arquivo → Baixar → Vídeo MP4).</li><li>O fluxo de publicação no Kodland Sparks (tipo, visibilidade, copiar o link do cartão publicado).</li></ul>'],
                 ['📌','Pontos de atenção','<ul><li>Existe uma <b>versão simplificada</b> (só música + 1 efeito sonoro) se o tempo for curto.</li><li>Não feche o Canva antes de a exportação terminar.</li><li>A permissão para usar o trabalho em divulgações da Kodland é sempre <b>voluntária, nunca obrigatória</b>.</li></ul>'],
                 ['🎯','Objetivos de aprendizagem','<ul><li>O vídeo final tem as 3 cenas, música e um encerramento legível.</li><li>Ele é baixado corretamente e publicado no Sparks, com o link enviado e funcionando.</li></ul>'],
                 ['🧑‍🏫','O seu papel','<ul><li>Revise o projeto em grupo antes de publicar.</li><li>Conduza a publicação passo a passo.</li><li>Incentive feedback <b>específico</b> entre colegas (sobre a música, a animação ou o final) — não genérico (“que lindo”).</li></ul>'],
                 ['⚙️','Aspectos técnicos','<ul><li>Confira se todas as páginas foram baixadas e se o vídeo tem áudio.</li><li>No Sparks, confira se o aluno explorou o perfil e sabe citar pelo menos 2 funções da plataforma antes de publicar.</li></ul>']] }
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
        { t:'p', html:'Antes da verificação, abra o curso no Backoffice e leia as quatro aulas no seu ritmo — os cartões de atividade e as Teacher Notes estão todos lá. Não há tempo limite.' },
        { t:'link', href:'https://bo.kodland.org/courses/2202', e:'📘', title:'Abrir o curso no Backoffice', small:'[2202] Digital Creativity 2 — as aulas e as Teacher Notes' },
        { t:'callout', kind:'warn', e:'🔄', html:'O conteúdo das aulas no Backoffice vai sendo atualizado com o feedback de alunos e tutores. Quando houver mudanças, você será avisado com antecedência para preparar a aula.' }
      ]}
    ]},

  { id:'m2', n:2, e:'⚙️', color:'#F03D9E', title:'A parte técnica das aulas',
    desc:'Entregas no Kodland Sparks desde a A1, o link certo e a opção de reserva quando o grupo atrasa.',
    obj:'Saiba o que garante o sucesso das aulas do Digital Creativity 2: entregas feitas no Kodland Sparks desde a Aula 1, com o link do projeto publicado, e a opção de reserva para que nenhum aluno fique sem entregar.',
    needs:['sparksPublish'],
    offer:[['📤','Entregas no Sparks, não no chat.'],['🔗','O link certo: o do projeto publicado, não o do Studio.'],['1️⃣','Publicar o primeiro projeto já na A1.'],['🛟','Usar a opção de reserva quando o grupo atrasa.']],
    sections:[
      { id:'focus', e:'🎯', title:'Os 3 pontos que garantem o sucesso', blocks:[
        { t:'p', html:'Estes são os pontos de foco definidos pelo time de produto para o Digital Creativity 2. Abra cada um:' },
        { t:'acc', items:[
          ['📤','As entregas são feitas no Sparks, não no chat','<p>Os projetos são entregues no <b>Kodland Sparks</b>: o aluno publica e envia o link no cartão da aula. <b>Arquivos ou imagens no chat da aula não contam como entrega.</b></p><ul><li>O link precisa direcionar para o <b>projeto publicado</b>, não para o Studio nem para o editor.</li><li>Abra alguns links durante a aula para conferir se estão funcionando.</li></ul>'],
          ['1️⃣','O primeiro projeto é publicado na A1','<p>Desde a <b>Aula 1</b>, o aluno publica o primeiro projeto no Sparks — a animação do nome. Assim ele começa o portfólio no primeiro dia e aprende o fluxo de publicação cedo.</p><ul><li>Reserve tempo no fim da aula para publicar.</li><li>Visibilidade <b>Public</b>, nunca <b>Only me</b>.</li></ul>'],
          ['🛟','A opção de reserva no fim da A4–A5','<p>Se o grupo atrasar ou algum aluno não encontrar o arquivo, use <b>a opção de reserva</b>: uma <b>tarefa reduzida</b> ou um <b>arquivo inicial pronto</b>.</p><ul><li>O objetivo é que o aluno <b>termine e entregue</b> o projeto mesmo assim.</li><li>Na A4 existe, por exemplo, a versão simplificada do áudio (só música + 1 efeito).</li><li>Use a reserva sem dramatizar — é uma estratégia, não um fracasso.</li></ul>']
        ]}
      ]},
      { id:'publish', e:'📤', title:'Publicar no Kodland Sparks', blocks:[
        { t:'p', html:'Estes são os passos de cada entrega. É aqui que aparecem os problemas que chegam até você: o link que não abre, o projeto que não aparece no Feed.' },
        { t:'steps', items:[
          ['Dar um nome ao projeto','Um projeto sem nome é difícil de encontrar depois, no portfólio.'],
          ['Clicar em Publish','O botão abre o formulário de publicação: título, descrição, seção, reações e aparência.'],
          ['Escolher Public','<b>Public</b> aparece no Feed e no portfólio público. <b>Friends only</b> só para amigos e professores. <b>Only me</b> deixa o projeto privado — ninguém mais vê, nem você.'],
          ['Ativar Request feedback','Assim outros alunos podem deixar um feedback estruturado. Funciona só em projetos públicos.'],
          ['Copiar o link do projeto publicado e enviar o arquivo no cartão','Não o link do Studio nem o do Canva. Publicar no Sparks e enviar o link na plataforma da Kodland são <b>dois passos diferentes</b>.']
        ]},
        { t:'sim', flag:'sparksPublish', src:'../sparks-publish/Sparks_Publish.html', e:'⚡', badge:'Simulação', title:'Publicar no Kodland Sparks', text:'Uma réplica do Kodland Sparks: você publica um projeto como uma aluna, conhece as três opções de visibilidade e resolve os dois problemas mais comuns. Cerca de 5 minutos. A verificação do módulo é liberada quando você termina.' }
      ]},
      { id:'trouble', e:'🛠️', title:'Quando algo dá errado', blocks:[
        { t:'acc', open:false, items:[
          ['🔒','O link do aluno não abre','<p>Quase sempre o projeto foi salvo como <b>Only me</b> (aparece a etiqueta <b>Private project</b>).</p><p>Peça ao aluno: <b>My projects → abrir o projeto → Edit → Public → Publish</b>. O link continua o mesmo e passa a abrir para todos.</p>'],
          ['🔍','O projeto não aparece no Feed','<p>O Feed mostra o último tipo de projeto filtrado. Peça ao aluno que <b>filtre pelo tipo do projeto</b> (por exemplo, <b>Image</b> para o GIF ou <b>Video</b> para o vídeo) ou busque pelo apelido.</p>'],
          ['💬','O aluno mandou o arquivo no chat','<p>O chat não conta como entrega. Ajude-o a publicar no Sparks e a enviar o link no cartão.</p>'],
          ['🔗','O link aponta para o Studio ou para o Canva','<p>O link certo é o do <b>projeto publicado</b> no Sparks. Abra o projeto em <b>My projects</b> e copie o link da página dele.</p>'],
          ['📁','O aluno não encontra o arquivo','<p>Use a <b>opção de reserva</b>: o arquivo inicial pronto ou a tarefa reduzida, para que ele termine e entregue.</p>'],
          ['🖌️','O FlipAnim não carrega ou o cadastro no Canva falha','<p>Use o <b>BrushNinja</b> no lugar do FlipAnim. Para o Canva, tenha <b>e-mails de reserva</b> prontos e relembre a tarefa de casa sobre o e-mail alguns dias antes.</p>']
        ]}
      ]},
      { id:'check', e:'✅', title:'Checklist técnico de cada aula', blocks:[
        { t:'check', title:'✅ Meu checklist técnico', groups:[
          { h:'☑️ Antes da aula', items:['Li todas as Teacher Notes da aula e assisti ao vídeo de briefing.','Sei qual é a opção de reserva da aula (tarefa reduzida ou arquivo inicial).','Tenho as alternativas prontas (BrushNinja, e-mails de reserva para o Canva).'] },
          { h:'🎬 Durante a aula', items:['Uso o Follow Mode para os cartões e compartilho só a aba da ferramenta nas demonstrações.','Reservei tempo no fim da aula para publicar.'] },
          { h:'📤 No fim da aula', items:['Todos publicaram no Sparks como <b>Public</b> — nenhuma entrega pelo chat.','Todos enviaram o link do <b>projeto publicado</b> no cartão da aula.','Abri pelo menos alguns links para conferir se estão funcionando.'] }
        ]}
      ]}
    ]}
];

COURSE.quiz = {
  m1:[
    { q:'Qual é a história do Digital Creativity 2?',
      o:['Os alunos são jovens criadores no Estúdio Creativia, uma agência em que cada módulo é um briefing de cliente.','Os alunos entram num laboratório secreto em que cada projeto é uma missão.','Os alunos são desenvolvedores júnior de jogos.'],
      a:0, e:'No Estúdio Creativia, cada módulo é um novo briefing, e o curso termina com um portfólio profissional no Kodland Sparks.' },
    { ctx:'Na Aula 1, o FlipAnim não carrega no computador de um aluno.',
      q:'O que você faz?',
      o:['Pula a animação nesta aula.','Usa o BrushNinja como alternativa.','Pede que ele se cadastre no Canva.'],
      a:1, e:'O BrushNinja é a alternativa prevista quando o FlipAnim falha.' },
    { q:'O que é essencial preparar para a Aula 2?',
      o:['Um e-mail próprio ou de um adulto para o cadastro no Canva — e e-mails de reserva da sua parte.','Uma conta paga do Canva.','O vídeo final já exportado.'],
      a:0, e:'O cadastro no Canva é o bloqueio mais comum: relembre a tarefa de casa sobre o e-mail com antecedência e tenha contas de reserva.' },
    { q:'Na Aula 3, como você dá feedback ao aluno?',
      o:['Corrigindo o projeto no lugar dele.','Com a fórmula ponto forte específico → pergunta para melhorar → apoio.','Dizendo “que lindo” para motivar.'],
      a:1, e:'Feedback específico e uma pergunta que leve o aluno a melhorar — sem corrigir o projeto por ele.' },
    { ctx:'Na Aula 4 o tempo está acabando e o vídeo de uma aluna ainda não tem áudio.',
      q:'Qual é a melhor decisão?',
      o:['Usar a versão simplificada (só música + 1 efeito sonoro) para que ela exporte e publique.','Deixar a publicação para o próximo módulo.','Fechar o Canva e começar de novo na próxima aula.'],
      a:0, e:'A versão simplificada garante que a aluna termine, exporte e publique no Sparks.' }
  ],
  m2:[
    { ctx:'Um aluno mandou o vídeo dele pelo chat da aula.',
      q:'Isso conta como entrega?',
      o:['Sim, o importante é que o vídeo exista.','Não: a entrega é feita no Kodland Sparks, com o link do projeto publicado enviado no cartão.','Sim, se você baixar o arquivo.'],
      a:1, e:'Os projetos são entregues no Sparks, não no chat.' },
    { q:'Qual link o aluno deve enviar no cartão?',
      o:['O link do Studio ou do editor.','O link do projeto publicado no Kodland Sparks.','O link de edição do Canva.'],
      a:1, e:'O link precisa direcionar para o projeto publicado, não para o Studio.' },
    { q:'Quando os alunos publicam o primeiro projeto no Sparks?',
      o:['Na Aula 1.','Na Aula 4.','No fim do curso.'],
      a:0, e:'O primeiro projeto é publicado já na Aula 1 — o portfólio começa no primeiro dia.' },
    { ctx:'No fim da Aula 4, uma aluna não encontra o arquivo dela e o grupo está atrasado.',
      q:'O que você faz?',
      o:['Usa a opção de reserva (tarefa reduzida ou arquivo inicial pronto) para que ela termine e entregue.','Deixa ela sem entregar desta vez.','Faz o projeto por ela.'],
      a:0, e:'A opção de reserva existe para que nenhum aluno fique sem terminar e entregar.' },
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
    ['📤', '<b>Entregas no Sparks:</b> nunca pelo chat, sempre com o link do projeto publicado.'],
    ['1️⃣', '<b>Desde a A1:</b> o primeiro projeto já vai para o portfólio.'],
    ['🛟', '<b>Grupo atrasado?</b> Use a opção de reserva para que todos entreguem.']
  ]
};

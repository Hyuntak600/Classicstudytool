// 일리아드 24권 원문 데이터. 아래 배열 안에 행 객체를 하나씩 채워 넣으세요(형식은 1권 data-linesIliad.js와 같아요).
// 행 하나: { "ref": "Iliad 24.1", "trans": "번역", "words": [ { "g": ..., "pos": ..., "lemma": ..., ... } ] }
window.__RAW_CHAPTER_DATA = window.__RAW_CHAPTER_DATA || {};
window.__RAW_CHAPTER_DATA['data-linesIliad24'] = [
  {
    "ref": "Iliad 24.659",
    "trans": "그러자 노인 신과 같은 프리아모스가 그에게 대답했다.",
    "words": [
      {
        "g": "τὸν",
        "pos": "관사",
        "lemma": "ὁ, ἡ, τό",
        "parse": "sg.acc.m. (Homeric demonstrative)",
        "gloss_kr": "그에게",
        "gloss_en": "him",
        "syntax": "LFG 관점에서 τὸν은 동사 ἠμείβετ᾽의 대격 직접목적어를 담당하며, 속성-값 행렬로 [PRED 'pro', CASE acc, NUM sg, GEND m, θ-ROLE PATIENT] 자질을 갖는다. c-구조상 문두에 위치하여 A'-이동(topicalization)된 구조를 보이며, 괄호 트리는 [CP τὸνᵢ [C' [IP ... [VP ἠμείβετο tᵢ]]]]로 나타낼 수 있다. 레빈슨式 화용론에서 전위된 대명사는 담화상 이미 확립된 지시체(아킬레우스)를 대조적 초점으로 가리킨다.",
        "background": "여기서 τὸν은 앞서 장례 일정과 숙박을 제안한 아킬레우스를 가리킨다. 호메로스 서사시에서 관사 형태의 지시대명사는 앞선 발화의 수신자를 신속하게 전환하여 대화의 주도권을 나타내는 담화 표지로 작동한다.",
        "etymology": "PIE 지시대명사 어근 *to-/*te-의 남성 대격 형태 *tom에서 유래했다. Chantraine(DELG)에 따르면 산스크리트어 tam, 라틴어 tum/tam, 고딕어 þana와 직접 대응한다. 어말 *m이 그리스어 음운 변화 규칙에 의해 치경 비음 -ν로 바뀌었다(*tom > τὸν). 현대 그리스어에서도 정관사 남성 대격 τὸν으로 보존되어 있다."
      },
      {
        "g": "δ᾽",
        "pos": "접속사",
        "lemma": "δέ",
        "parse": "coord.conj.",
        "gloss_kr": "그리고, 반면에",
        "gloss_en": "and, but",
        "syntax": "HPSG 관점에서 δέ는 후접어(enclitic)로서 문장 내 두 번째 위치(Wackernagel's position)를 점하며 자질구조 [HEAD conj, COMPS < >]를 갖는다. c-구조상 이전 절과 본 절을 연결하며, 대조적 어조를 완화하고 담화 흐름을 자연스럽게 전환한다.",
        "background": "아킬레우스의 질문에 대한 프리아모스의 즉각적인 응답을 연결하는 담화 접속사다. 장례 휴전을 위한 구체적 조건 제시로 대화가 이동함을 알린다.",
        "etymology": "PIE 지시적/강조적 소사 *de에서 파생했다. Beekes(EDG)에 따르면 라틴어 -de(예: quamde), 슬라브어 da 등과 어원적으로 연관된다. 고전 그리스어 전체에서 가장 빈번하게 쓰이는 후접 접속사이며, 현대 그리스어에는 생존하지 않는다."
      },
      {
        "g": "ἠμείβετ᾽",
        "pos": "동사",
        "lemma": "ἀμείβω",
        "principalParts": "ἀμείβω – ἀμείψω – ἤμειψα – (미상) – ἤμειμμαι – ἠμείφθην",
        "parse": "3rd.sg.impf.ind.mp. (Homeric form without elided o)",
        "gloss_kr": "대답했다, 응답했다",
        "gloss_en": "answered, replied",
        "syntax": "LFG 관점에서 ἠμείβετ᾽는 주절의 핵심 술어로서 [PRED 'ἀμείβω<SUBJ,OBJ>', TENSE past, ASPECT impf, MOOD ind, VOICE mp, SUBJ [PRED 'Πρίαμος'], OBJ [PRED 'pro']] 구조를 이룬다. c-구조상 모음 축약 및 어말 모음 엘리전(elision)을 겪어 ἠμείβετο > ἠμείβετ᾽가 되었다. 생성문법적으로는 [TP [vP Πρίαμος [VP τὸν ἠμείβετο]]] 구조에서 v-to-T 이동이 일어난 것으로 분석된다.",
        "background": "호메로스 대화 장면을 이끄는 전형적인 정형구(formulaic verb)다. 중동태(middle voice) 형태는 '상호 교환하다' 또는 '자신을 위해 응답하다'라는 상호적·주체적 뉘앙스를 담고 있다.",
        "etymology": "PIE 어근 *mey-('교환하다, 바꾸다')의 e급 확장 어근 *meyb-에서 유래했다. LSJ와 Chantraine(DELG)에 따르면 산스크리트어 mēdate, 라틴어 migrare('이주하다'), mutare('바꾸다')가 동계어다. 어간의 모음교체(ablaut)와 장모음화 증강(augment)을 거쳐 ἠμείβ- 형태가 정착했다. 영어 mutate, migrant 등의 어원적 기원과 연결된다."
      },
      {
        "g": "ἔπειτα",
        "pos": "부사",
        "lemma": "ἔπειτα",
        "parse": "adv.",
        "gloss_kr": "그 다음에, 이어서",
        "gloss_en": "then, thereupon",
        "syntax": "LFG 관점에서 ἔπειτα는 시간적 후행성을 나타내는 부사적 부속어로 [ADJUNCT [PRED 'ἔπειτα', SEM time-subsequent]] 자질을 갖는다. c-구조상 [VP [AdvP ἔπειτα] [V' ἠμείβετο]] 위치에 결합하여 발화의 시점적 순서를 지정한다.",
        "background": "아킬레우스의 발화가 끝난 직후 프리아모스가 말을 이어받는 서사적 연속성을 나타낸다. 대화의 호흡을 조절하고 서사적 리듬감을 부여하는 수사적 장치다.",
        "etymology": "전치사 ἐπί('~ 위에, ~에 이어')와 부사 εἶτα('그 다음에')의 합성어로, PIE *epi와 지시어근 *i-/*e-의 결합에서 유래했다. Chantraine(DELG)에 의하면 고전 그리스어 산문과 시가 모두에서 시간 부사로 광범위하게 쓰였다. 현대 그리스어에서는 직접 형태가 소실되었다."
      },
      {
        "g": "γέρων",
        "pos": "명사",
        "lemma": "γέρων, γέροντος, ὁ",
        "parse": "sg.nom.m.",
        "gloss_kr": "노인, 노왕",
        "gloss_en": "old man, elder",
        "syntax": "LFG 관점에서 γέρων은 주어 Πρίαμος를 수식하는 동격 명사구로서 [PRED 'γέρων', CASE nom, NUM sg, GEND m] 자질을 갖는다. 괄호 트리는 [DP [NP [N' γέρων]] [DP Πρίαμος]]로 표현되어 주어 명사구 내에서 동격 수식 구조를 이룬다.",
        "background": "프리아모스의 연로함과 비극성을 부각하는 수식어다. 자식을 잃은 늙은 아버지의 연약함과 한 나라의 국왕이라는 지위가 대비되어 아킬레우스의 연민을 자극하는 효과를 극대화한다.",
        "etymology": "PIE 어근 *ġerh₂-('늙다, 성숙하다')의 영급/e급 분사 파생형 *ġér-ont-에서 유래했다. Beekes(EDG)에 의하면 산스크리트어 jarant-('늙은'), 아베스타어 zarand-가 동계어다. *ġerh₂-에서 파생된 *ġr-h₂-o-는 그리스어 γῆρας('연령, 노령')를 낳았다. 영어 gerontocracy, geriatrics 등의 학술 용어에 그 흔적이 남아 있으며, 현대 그리스어 γέροντας로 이어진다."
      },
      {
        "g": "Πρίαμος",
        "pos": "명사(고유)",
        "lemma": "Πρίαμος, Πριάμου, ὁ",
        "parse": "sg.nom.m.",
        "gloss_kr": "프리아모스",
        "gloss_en": "Priam",
        "syntax": "LFG 관점에서 Πρίαμος는 주절의 통사적 주어로 [PRED 'Πρίαμος', CASE nom, NUM sg, GEND m, θ-ROLE AGENT] 자질을 갖는다. c-구조상 [IP [DP Πρίαμος] [I' ...]] 위치를 차지하며 동사 ἠμείβετ᾽와 인칭·수 일치를 이룬다.",
        "background": "트로이아의 마지막 왕이자 헥토르, 파리스 등의 아버지다. 아들의 시신을 되찾기 위해 밤중에 목숨을 걸고 적진인 아킬레우스의 막사로 찾아온 서사시 제24권의 핵심 인물이다.",
        "etymology": "루위어(Luwian) 또는 선그리스어(Pre-Greek) 기층 어원 가능성이 높다. Beekes(EDG)는 히타이트-루위어 이름 Pariyamuwa('뛰어난 용기를 지닌 자')와의 연관성을 제시한다. 민간어원설에서는 πρίαμαι('사다')에서 나와 '몸값을 주고 되찾아진 자'로 풀어내나, Chantraine(DELG)은 이를 민간 어원학적 재해석으로 교정한다. 영어 Priam으로 전재된다."
      },
      {
        "g": "θεοειδής",
        "pos": "형용사",
        "lemma": "θεοειδής, θεοειδές",
        "parse": "sg.nom.m.",
        "gloss_kr": "신과 같은 모습의",
        "gloss_en": "godlike",
        "syntax": "LFG 관점에서 θεοειδής는 Πρίαμος를 수식하는 형용사구로서 [PRED 'θεοειδής', CASE nom, NUM sg, GEND m] 자질을 갖는다. c-구조상 [DP [NP Πρίαμος] [AP θεοειδής]]의 후행 수식 구조를 이룬다.",
        "background": "영웅과 왕들의 고귀한 품모를 묘사하는 호메로스 정형구 형용사(formulaic adjective)다. 비통한 처지에 놓인 늙은 왕에게 이 칭호를 부여함으로써 그의 왕적 존엄성을 유지시킨다.",
        "etymology": "θεός('신')와 εἶδος('모습, 형상')의 합성어로, PIE *dʰeh₁s-('신성한')와 *weyd-('보다, 알다')에서 유래했다. Beekes(EDG)에 의하면 θεός는 명확한 PIE 어원을 지니고, εἶδος는 라틴어 videre, 산스크리트어 veda와 동계이다. 그리스어 내에서 합성어 접미사 -ειδής(-oid)로 체계화되어 영어 -oid(예: android, humanoid)의 원형이 되었다."
      }
    ]
  },
  {
    "ref": "Iliad 24.660",
    "trans": "“만일 그대가 참으로 고귀한 헥토르에게 장례를 치러주기를 원하신다면,",
    "words": [
      {
        "g": "εἰ",
        "pos": "접속사",
        "lemma": "εἰ",
        "parse": "subord.conj.",
        "gloss_kr": "만약 ~라면",
        "gloss_en": "if",
        "syntax": "HPSG 관점에서 εἰ는 조건절을 이끄는 종속접속사로 [HEAD conj, SUBJ < >, COMPS < S[subj] >] 자질을 갖는다. 직설법 현재 동사 ἐθέλεις와 결합하여 가정 및 조건의 전건(protasis)을 도입한다.",
        "background": "프리아모스가 아킬레우스에게 장례 휴전을 건의하기 시작하는 가정절의 도입부다. 상대방의 의사를 정중히 묻는 공손한 어조를 형성한다.",
        "etymology": "PIE 지시어근 *e-/*i-의 여격/처격 형태 *ei에서 유래했다. Chantraine(DELG)에 따르면 도리스 방언 αἰ와 대립하며, 앙투안 메예(A. Meillet) 등 학자들은 이를 지시 입자의 조건적 문법화로 본다. 현대 그리스어 αν/αν은 이 계열과 별개로 변형된 형태다."
      },
      {
        "g": "μὲν",
        "pos": "소사",
        "lemma": "μέν",
        "parse": "correlative.particle",
        "gloss_kr": "참으로, 한편",
        "gloss_en": "indeed, on the one hand",
        "syntax": "HPSG 관점에서 μέν는 대조 및 강조를 나타내는 입자(particle)로 [HEAD particle, MOD clause] 자질을 갖는다. 조건절 내부에서 δή와 함께 쓰여 조건의 전제를 강하게 강조한다.",
        "background": "후행하는 대조 소사와의 상응을 예고하거나 조건의 참됨을 확증하는 수사적 기능을 수행한다. 프리아모스의 간절한 요청에 진정성을 부여한다.",
        "etymology": "PIE 강조 입자 *men-('참으로, 진짜로')에서 유래했다. Beekes(EDG)와 Chantraine(DELG)은 산스크리트어 smam, 라틴어 memmet 등과의 연관성을 제시한다. 고전 그리스어 문장 구조의 핵심적인 대조 표지이다."
      },
      {
        "g": "δή",
        "pos": "소사",
        "lemma": "δή",
        "parse": "discourse.particle",
        "gloss_kr": "정말로, 정녕",
        "gloss_en": "indeed, truly",
        "syntax": "HPSG 관점에서 δή는 담화 소사로서 [HEAD particle, MOD conj] 자질을 가지며 εἰ μέν을 수식하여 조건의 현실성과 중요성을 극대화한다.",
        "background": "아킬레우스가 이미 헥토르의 시신을 인도하기로 결정한 사실을 확인하면서, 장례라는 다음 단계로 논의를 진전시키기 위한 담화 표지다.",
        "etymology": "PIE 지시 어근 *de/do에서 유래한 시간/강조 소사다. LSJ에 따르면 시간 부사 ἤδη('이미')의 형성에도 관여했다. 확실성과 즉각성을 나타내는 호메로스어의 전형적인 담화 요소다."
      },
      {
        "g": "μ᾽",
        "pos": "대명사",
        "lemma": "ἐγώ",
        "parse": "sg.acc. (elided form of με)",
        "gloss_kr": "나를, 내가",
        "gloss_en": "me",
        "syntax": "LFG 관점에서 μ᾽는 동사 ἐθέλεις의 목적어 또는 허용을 받는 주체로서 [PRED 'pro', CASE acc, PERS 1, NUM sg] 자질을 갖는다. 모음 축약으로 인한 엘리전(με > μ᾽)이 일어났다. 생성문법적으로 [VP [DP μ᾽] [V' ἐθέλεις ...]] 구성을 취한다.",
        "background": "프리아모스 자신을 가리킨다. 아킬레우스가 자신으로 하여금 장례를 완수할 수 있도록 허락해 달라는 대인적 요청을 담고 있다.",
        "etymology": "PIE 1인칭 대격 대명사 *me에서 유래했다. Chantraine(DELG)에 의하면 산스크리트어 mā, 라틴어 mē, 고대 슬라브어 mę와 정확히 대응한다. 모음 탈락 규칙(elision)에 의해 후행 모음 앞에서 μ᾽로 단축되었다. 현대 그리스어 με로 생존한다."
      },
      {
        "g": "ἐθέλεις",
        "pos": "동사",
        "lemma": "ἐθέλω",
        "principalParts": "ἐθέλω(또는 θέλω) – ἐθελήσω – ἠθέλησα – ἠθέληκα – (미상) – (미상)",
        "parse": "2nd.sg.pres.ind.act.",
        "gloss_kr": "원하다, 바치고자 하다",
        "gloss_en": "wish, desire",
        "syntax": "LFG 관점에서 ἐθέλεις는 조건절의 중심 술어로서 [PRED 'ἐθέλεις<SUBJ,COMP>', TENSE present, ASPECT impf, MOOD ind, SUBJ [PRED 'pro', PERS 2, NUM sg], COMP [PRED 'τελέσαι']] 자질을 갖는다. 부정사 보충어(COMP)를 필수 논항으로 요구한다.",
        "background": "아킬레우스의 의지와 호의를 호소하는 동사다. 강요가 아닌 아킬레우스의 자발적 허용에 장례의 완수가 달려있음을 인정하는 수사적 정중함을 보여 준다.",
        "etymology": "PIE 어근 *gʰel-('원하다, 의지하다')에서 유래한 어간에 자음/모음 확장이 일어난 형태다. Beekes(EDG)에 의하면 어두 e-는 시적/호메로스적 어두 전음(prothesis)이다. 고전 그리스어 산문에서는 축약형 θέλω가 널리 쓰였다. 현대 그리스어 θέλω로 계승되었다."
      },
      {
        "g": "τελέσαι",
        "pos": "부정사",
        "lemma": "τελέω",
        "principalParts": "τελέω – τελέσω(호메로스式 τελέω) – ἐτέλεσα – τετέλεκα – τετέλεσμαι – ἐτελέσθην",
        "parse": "aor.act.inf.",
        "gloss_kr": "완수하다, 치르다",
        "gloss_en": "to accomplish, to perform",
        "syntax": "LFG 관점에서 τελέσαι는 동사 ἐθέλεις의 보충어(COMP)로서 [PRED 'τελέω<SUBJ,OBJ>', ASPECT aor, VOICE act, OBJ [PRED 'τάφον']] 자질을 갖는다. c-구조상 [VP [V' τελέσαι [NP τάφον]]]을 형성한다.",
        "background": "장례 의식을 시작부터 끝까지 완벽하게 수행하는 완결적 행위를 가리킨다. 부정과거 부정사(aorist infinitive)를 사용하여 행위의 전체적 성취에 초점을 맞춘다.",
        "etymology": "명사 τέλος('끝, 완성, 목적')에서 파생된 동사다. PIE 어근 *kwel-('돌다, 완수하다')의 o-급 형태 *kwelos-에서 유래했다. LSJ와 Chantraine(DELG)에 의하면 산스크리트어 carama-('마지막의')와 동계다. 현대 그리스어 τελειώνω('끝내다')의 원형이다."
      },
      {
        "g": "τάφον",
        "pos": "명사",
        "lemma": "τάφος, τάφου, ὁ",
        "parse": "sg.acc.m.",
        "gloss_kr": "장례, 매장 의식",
        "gloss_en": "burial, funeral rites",
        "syntax": "LFG 관점에서 τάφον은 부정사 τελέσαι의 직접목적어로서 [PRED 'τάφος', CASE acc, NUM sg, GEND m, θ-ROLE PATIENT] 자질을 갖는다. 생성문법적으로 [VP [V' τελέσαι [DP τάφον]]] 구조의 내항(internal argument)이다.",
        "background": "고대 그리스 문화에서 영혼의 안식(Hades 입성)을 위해 필수적인 매장 의식 전체를 의미한다. 장례를 치르지 못하는 것은 고인과 가문 전체에 가장 큰 수치이자 재앙이었다.",
        "etymology": "동사 θάπτω('매장하다')와 결합하는 영급/o급 모음교체 명사다. PIE 어근 *dʰembʰ-('매장하다, 파다')에서 유래했다. Beekes(EDG)에 따르면 아르메니아어 damban('무덤')이 동계어다. 그라스만 법칙(Grassmann's Law)에 의해 원형 *dʰaph-의 어두 유기음이 무기음으로 바뀌어 τάφος가 되었다. 영어 epitaph(< ἐπιτάφιος)로 잔존하며, 현대 그리스어 τάφος('무덤')로 쓰인다."
      },
      {
        "g": "Ἕκτορι",
        "pos": "명사(고유)",
        "lemma": "Ἕκτωρ, Ἕκτορος, ὁ",
        "parse": "sg.dat.m.",
        "gloss_kr": "헥토르에게, 헥토르를 위하여",
        "gloss_en": "for Hector",
        "syntax": "LFG 관점에서 Ἕκτορι는 이익의 여격(dative of advantage/benefactive)으로 [PRED 'Ἕκτωρ', CASE dat, NUM sg, GEND m, θ-ROLE BENEFICIARY] 자질을 갖는다. c-구조상 [NP τάφον]을 수식하거나 동사구에 부가어/보충어로 결합한다.",
        "background": "프리아모스의 장남이자 트로이아의 수호자였던 헥토르를 가리킨다. 그의 죽음과 매장은 일리아스 전체의 장엄한 마무리를 이루는 핵심 주제다.",
        "etymology": "어근 *segh-('지탱하다, 보유하다')에서 파생한 행위자 명사로 '도시를 지탱하는 자'를 뜻한다. (앞서 762행 Ἕκτορ 항목 참조)."
      },
      {
        "g": "δίῳ",
        "pos": "형용사",
        "lemma": "δῖος, δῖα, δῖον",
        "parse": "sg.dat.m.",
        "gloss_kr": "고귀한, 신성한",
        "gloss_en": "godlike, noble",
        "syntax": "LFG 관점에서 δίῳ는 명사 Ἕκτορι를 직접 수식하는 형용사로서 [PRED 'δῖος', CASE dat, NUM sg, GEND m] 자질을 갖는다. c-구조상 [DP [NP Ἕκτορι] [AP δίῳ]] 형태를 이룬다.",
        "background": "호메로스 영웅들에게 부여되는 전통적 정형구 수식어다. 죽은 아들의 영웅적 존엄성을 되새기는 아버지의 깊은 애정을 나타낸다.",
        "etymology": "PIE *deyw-o-('하늘의, 신성한')에서 유래했다. Chantraine(DELG)에 따르면 라틴어 divus, deus, 산스크리트어 devá-와 정확히 대응한다. *dey-w-os > *diw-yos > δῖος의 음운 변화를 거쳤다. 영어 divine의 고대 그리스어 동계어다."
      }
    ]
  },
  {
    "ref": "Iliad 24.661",
    "trans": "이렇게 해주신다면 아킬레우스여, 내게 기쁨을 베푸시는 것이 되리라.",
    "words": [
      {
        "g": "ὧδέ",
        "pos": "부사",
        "lemma": "ὧδε",
        "parse": "adv.",
        "gloss_kr": "이와 같이, 이렇게",
        "gloss_en": "thus, in this way",
        "syntax": "LFG 관점에서 ὧδέ는 방법 부사로서 분사 ῥέζων을 수식하며 [PRED 'ὧδε', SEM manner] 자질을 갖는다. c-구조상 [VP [AdvP ὧδέ] [V' ῥέζων]] 구조를 이룬다.",
        "background": "이어지는 664-667행에서 제시될 11일간의 장례 절차 및 휴전 방식을 앞서 가리키는 현시적(deictic) 부사다.",
        "etymology": "관계/지시 부사 ὥς('이와 같이')에 현시적 후접 입자 -δε가 결합한 형태다. Chantraine(DELG)에 의하면 '눈앞의 이 방식으로'라는 강력한 현시성(deixis)을 띤다."
      },
      {
        "g": "κέ",
        "pos": "소사",
        "lemma": "ἄν",
        "parse": "modal.particle (Homeric κέ/κεν)",
        "gloss_kr": "~일 것이다, ~하리라",
        "gloss_en": "would, potentially",
        "syntax": "HPSG 관점에서 κέ는 양태 소사(modal particle)로서 [HEAD particle, MOD verb] 자질을 가지며, 희구법 동사 θείης와 결합하여 귀결절(apodosis)의 잠재적/가정적 양태(potential optative)를 구성한다.",
        "background": "호메로스 특유의 양태 소사(κεν/κέ)로, 고전 산문의 ἄν에 해당한다. 아킬레우스가 조건을 수락할 경우 발생할 긍정적 결과를 미묘하게 예고한다.",
        "etymology": "PIE 양태/지시 소사 *ke/*ken에서 유래했다. Beekes(EDG)에 의하면 라틴어 cis, citra, 고대 슬라브어 kь와 어원적으로 연결된다. 고전 아티케 방언에서는 ἄν에 밀려 소실되었다."
      },
      {
        "g": "μοι",
        "pos": "대명사",
        "lemma": "ἐγώ",
        "parse": "sg.dat.",
        "gloss_kr": "나에게",
        "gloss_en": "to me, for my sake",
        "syntax": "LFG 관점에서 μοι는 이익의 여격(dative of advantage)으로 [PRED 'pro', CASE dat, PERS 1, NUM sg, θ-ROLE BENEFICIARY] 자질을 갖는다. 술어 형용사구/동사구에 결합하여 행위의 수혜자를 지정한다.",
        "background": "프리아모스 자신이 아킬레우스의 호의로 얻게 될 정서적 감사를 표현한다.",
        "etymology": "PIE 1인칭 여격 *moi에서 유래했다 (앞서 763행 μοι 항목 참조)."
      },
      {
        "g": "ῥέζων",
        "pos": "분사",
        "lemma": "ῥέζω",
        "principalParts": "ῥέζω – ῥέξω – ἔρέξα – (미상) – (미상) – ἐρέχθην",
        "parse": "pres.act.part.sg.nom.m.",
        "gloss_kr": "행하면서, 해줌으로써",
        "gloss_en": "doing, acting",
        "syntax": "LFG 관점에서 ῥέζων은 주어(아킬레우스)를 수식하는 수단/조건의 부대상황 분사(circumstantial participle)로 [PRED 'ῥέζω<SUBJ,OBJ>', ASPECT impf, VOICE act, CASE nom, NUM sg, GEND m] 자질을 갖는다. [CP [IP ... [VP ῥέζων ...]]] 안에서 가정을 내포한다.",
        "background": "행위의 수단이나 조건을 나타낸다. 프리아모스가 제안하는 방식으로 일처리를 진행해 주는 행위 자체를 가리킨다.",
        "etymology": "PIE 어근 *werǵ-('일하다, 행하다')의 영급 형태 *wrǵ-yo-에서 유래했다. Chantraine(DELG)에 의하면 그리스어 자음군 변화 *wrgyo- > ῥέζω가 일어났다. 동계어로 ἔργον('일'), ὄργανον, 영어 work가 있다. 현대 그리스어에는 직접 남지 않았다."
      },
      {
        "g": "Ἀχιλεῦ",
        "pos": "명사(고유)",
        "lemma": "Ἀχιλλεύς, Ἀχιλῆος, ὁ",
        "parse": "sg.voc.m. (Homeric single -λ- spelling)",
        "gloss_kr": "아킬레우스여",
        "gloss_en": "O Achilles",
        "syntax": "LFG 관점에서 Ἀχιλεῦ는 발화 수신자를 직접 부르는 독립 호격구로 [PRED 'Ἀχιλλεύς', CASE voc, NUM sg, GEND m] 자질을 갖는다. 통사적 논항 구조 바깥의 좌측 주변부에 부착된다.",
        "background": "운율상 자음 단화(single lambda)가 일어난 호격 형태다. 상대방의 이름을 직접 부름으로써 설득의 호소력을 고조시킨다.",
        "etymology": "어근 ἄχος('고통, 슬픔')와 λᾱός('군대, 백성')의 합성어로 '군대에게 고통을 가져오는 자'라는 의미를 지닌다. Beekes(EDG)에 의하면 미케네어 선문자 B *a-ki-re-u*로 입증되는 유서 깊은 이름이다. Chantraine(DELG)은 이를 영웅 서사적 인명 형성으로 분석한다. 영어 Achilles로 계승된다."
      },
      {
        "g": "κεχαρισμένα",
        "pos": "분사",
        "lemma": "χαρίζομαι",
        "principalParts": "χαρίζομαι – χαριοῦμαι – ἐχαρισάμην – (미상) – κεχάρισμαι – ἐχαρίσθην",
        "parse": "perf.mp.part.pl.neut.acc.",
        "gloss_kr": "기쁨이 되는 일들을, 은혜로운 것들을",
        "gloss_en": "pleasing things, favors",
        "syntax": "LFG 관점에서 κεχαρισμένα는 동사 θείης의 직접목적어 역할을 하는 실체화된 분사(substantivized participle)로서 [PRED 'χαρίζομαι', ASPECT perf, VOICE mp, CASE acc, NUM pl, GEND n, θ-ROLE PATIENT] 자질을 갖는다.",
        "background": "완료 분사 형태를 통해 '이미 완성되어 확고한 기쁨/은혜가 된 상태'를 뜻한다. 프리아모스가 아킬레우스의 배려를 은혜(χάρις)로 받아들일 것임을 약속한다.",
        "etymology": "명사 χάρις('우아함, 은혜, 기쁨')에서 파생된 동사의 완료 중동태 분사다. PIE 어근 *ġer-('원하다, 즐거워하다')에서 유래했다. Chantraine(DELG)에 따르면 산스크리트어 haryati('즐거워하다'), 라틴어 gratus, gratia와 동계다. 영어 charity, charisma가 이 어근의 후손이다."
      },
      {
        "g": "θείης",
        "pos": "동사",
        "lemma": "τίθημι",
        "principalParts": "τίθημι – θήσω – ἔθηκα – τέθεικα – τέθειμαι – ἐτέθην",
        "parse": "2nd.sg.aor.opt.act.",
        "gloss_kr": "베푸시게 되리라, 만드시리라",
        "gloss_en": "you would render, you would make",
        "syntax": "LFG 관점에서 θείης는 양태 소사 κέ와 결합하여 귀결절의 술어를 담당하는 잠재 희구법(potential optative) 동사로서 [PRED 'τίθημι<SUBJ,OBJ,PRED-LINK>', ASPECT aor, MOOD opt, VOICE act, SUBJ [PRED 'pro', PERS 2, NUM sg]] 자질을 갖는다. 이중 목적어 구성을 취한다.",
        "background": "부정과거 희구법 형태(θείης)를 써서 확정적 명령이 아닌 조건부의 공손한 귀결을 나타낸다. 아킬레우스의 결단이 프리아모스에게 시혜가 됨을 기품 있게 서술한다.",
        "etymology": "PIE 어근 *dʰeh₁-('놓다, 세우다, 만들다')의 영급 어간 *dʰh₁-에 희구법 표지 -iē-가 결합한 형태다. Beekes(EDG)와 Chantraine(DELG)에 의하면 산스크리트어 dadhāmi, 라틴어 facio, 고대 영어 dōn(modern do)과 완벽한 동계 관계를 이룬다. 영어 theme, thesis, do 등이 이 어근에서 파생했다."
      }
    ]
  },
  {
    "ref": "Iliad 24.662",
    "trans": "그대도 알다시피 우리는 도성에 갇혀 있고, 산에서 땔감을 가져오려면",
    "words": [
      {
        "g": "οἶσθα",
        "pos": "동사",
        "lemma": "οἶδα",
        "principalParts": "οἶδα – εἰδήσω – (미상) – (미상) – (미상) – (미상)",
        "parse": "2nd.sg.perf.ind.act.",
        "gloss_kr": "그대는 알고 있다",
        "gloss_en": "you know",
        "syntax": "LFG 관점에서 οἶσθα는 주절의 중심 술어로서 [PRED 'οἶδα<SUBJ,COMP>', TENSE present, ASPECT perf, MOOD ind, SUBJ [PRED 'pro', PERS 2, NUM sg], COMP [PRED 'ἐέλμεθα']] 자질을 갖는다. 후행하는 ὡς 접속사절을 보충어(COMP)로 지배한다.",
        "background": "아킬레우스 역시 트로이아 도성의 지리적·전술적 고립 상황을 이미 잘 파악하고 있음을 전제로 논리를 펼치는 공감 유도형 발화 표지다.",
        "etymology": "PIE 어근 *weyd-('보다')의 완료형 *woyd-e에서 유래하여 '보아서 알고 있다(현재)'는 의미를 가진다. Chantraine(DELG)에 따르면 2인칭 어미 *-tʰa가 결합하여 οἶσθα가 되었다. 산스크리트어 veda, 라틴어 vidisti, 고딕어 wait, 영어 wit, wisdom과 동계어다. 현대 그리스어에는 소실되고 ξέρω가 쓰인다."
      },
      {
        "g": "γὰρ",
        "pos": "소사",
        "lemma": "γάρ",
        "parse": "expl.conj.",
        "gloss_kr": "왜냐하면",
        "gloss_en": "for",
        "syntax": "HPSG 관점에서 γὰρ는 원인/이유를 설명하는 후접 소사로서 [HEAD particle, SUB-TYPE explanatory] 자질을 갖는다. 문장 내 두 번째 위치를 점하며, 앞선 요청의 현실적 이유를 제시한다.",
        "background": "왜 11일이라는 긴 장례 기간이 필요한지를 전술적·지리적 이유를 들어 설득하는 논리적 연결어다.",
        "etymology": "강조 소사 γε와 조건/시간 소사 ἄρα의 합성어로 추정된다. (앞서 765행 γὰρ 항목 참조)."
      },
      {
        "g": "ὡς",
        "pos": "접속사",
        "lemma": "ὡς",
        "parse": "subord.conj.",
        "gloss_kr": "~라는 것을, ~하듯이",
        "gloss_en": "that, how",
        "syntax": "HPSG 관점에서 ὡς는 동사 οἶσθα의 보충어 절을 이끄는 명사절 종속접속사로 [HEAD conj, COMPS < S >] 자질을 갖는다.",
        "background": "프리아모스가 아킬레우스에게 환기시키는 트로이아의 현재 상 황(고립)을 도입하는 접속사다.",
        "etymology": "PIE 관계대명사 어근 *wo-/*yo-의 부사형 형태에서 유래했다. (앞서 764행 ὡς 항목 참조)."
      },
      {
        "g": "κατὰ",
        "pos": "전치사",
        "lemma": "κατά",
        "parse": "prep.+acc. (tmesis/adverbial)",
        "gloss_kr": "~ 안에, ~를 따라",
        "gloss_en": "down in, throughout",
        "syntax": "LFG 관점에서 κατὰ는 명사 ἄστυ를 지배하는 전치사구의 핵으로서 [PRED 'κατά<OBJ>', OBJ [PRED 'ἄστυ']] 자질을 갖는다. c-구조상 [PP [P κατὰ] [NP ἄστυ]]를 형성하거나 동사 ἐέλμεθα와의 분리(tmesis)로 분석할 수 있다.",
        "background": "트로이아 성벽 안이라는 한정된 공간적 갇힘을 공간 전치사를 통해 강조한다.",
        "etymology": "PIE 어근 *kmt-('아래로, ~을 따라')에서 유래했다. Chantraine(DELG)에 따르면 히타이트어 kattan('아래에'), 케네어 ka-ta와 동계다. 영어 catabolism, catastrophe 등의 접두사 기원이 된다."
      },
      {
        "g": "ἄστυ",
        "pos": "명사",
        "lemma": "ἄστυ, ἄστεος, τό",
        "parse": "sg.acc.n.",
        "gloss_kr": "도성, 성채",
        "gloss_en": "city, town",
        "syntax": "LFG 관점에서 ἄστυ는 전치사 κατὰ의 목적어로서 [PRED 'ἄστυ', CASE acc, NUM sg, GEND n] 자질을 갖는다. [PP κατὰ ἄστυ] 구문 내에서 장소적 한계를 형성한다.",
        "background": "시골/들판(ἀγρός)이나 바다와 대비되는 성벽으로 둘러싸인 도시 자체를 뜻한다. 아카이오이군에 의해 포위된 트로이아 성내를 가리킨다.",
        "etymology": "PIE 어근 *wes-('거주하다, 머물다')에서 파생된 *wástu-('거주지, 도시')에서 유래했다. 어두 디감마(*w)가 탈락하여 ἄστυ가 되었다. Beekes(EDG)에 의하면 산스크리트어 vástu('처소, 집')와 정확히 대응한다. 영어 astynomy, asymptotic 등의 어근이 되며 현대 그리스어에는 direct loan으로 잔존한다."
      },
      {
        "g": "ἐέλμεθα",
        "pos": "동사",
        "lemma": "εἴλω",
        "principalParts": "εἴλω – (미상) – ἔελσα – (미상) – ἔελμαι – ἐάλην",
        "parse": "1st.pl.perf.ind.mp. (Homeric digamma augment form)",
        "gloss_kr": "우리는 갇혀 있다, 가두어져 있다",
        "gloss_en": "we are shut in, hemmed in",
        "syntax": "LFG 관점에서 ἐέλμεθα는 ὡς 절의 중심 술어로서 [PRED 'εἴλω<SUBJ>', TENSE present, ASPECT perf, MOOD ind, VOICE mp, SUBJ [PRED 'pro', PERS 1, NUM pl]] 자질을 갖는다. 완료 형태로서 '가두어진 결과 상태가 현재까지 지속됨'을 포착한다.",
        "background": "원래 어두 디감마를 지닌 어간(*we-wel- > ἐέλмеθα)으로 운율상 앞 모음의 장음화나 간격을 유지한다. 그리스군 때문에 성밖으로 나가지 못하는 트로이아인들의 철저한 고립 상태를 수사적으로 응축한다.",
        "etymology": "PIE 어근 *wel-('돌다, 말다, 누르다, 가두다')의 중복 완료형 *we-wl-mho에서 유래했다. LSJ와 Chantraine(DELG)에 따르면 라틴어 volvere('굴리다'), 산스크리트어 varana-('막는 것'), 영어 wall, waltz와 동계 관계를 이룬다. 호메로스 특유의 중복(reduplication) 형태다."
      },
      {
        "g": "τηλόθι",
        "pos": "부사",
        "lemma": "τηλόθι",
        "parse": "adv.",
        "gloss_kr": "멀리, 먼 곳에",
        "gloss_en": "far away, afar",
        "syntax": "LFG 관점에서 τηλόθι는 장소적 거리를 한정하는 부사로 [PRED 'τηλόθι', SEM locative-far] 자질을 갖는다. 명사구 ὕλη를 장소적으로 수식한다.",
        "background": "땔감을 가져와야 하는 이다(Ida) 산이 트로이아 도성에서 멀리 떨어져 있음을 강조한다. 이 거리는 장례 준비에 긴 시간이 걸리는 직접적인 지리적 이유가 된다.",
        "etymology": "형용사 τῆλε('멀리')에 장소 접미사 -θι가 결합한 형태다. PIE *kwel-('돌다, 먼 곳') 어근과의 연관성이 논의된다. Chantraine(DELG)에 따르면 고대 그리스어 장소 부사 형성 체계를 잘 보여 준다. 영어 telegraph, telephone의 tele-의 어원이다."
      },
      {
        "g": "δ᾽",
        "pos": "접속사",
        "lemma": "δέ",
        "parse": "coord.conj.",
        "gloss_kr": "그리고, 그런데",
        "gloss_en": "and, and moreover",
        "syntax": "HPSG 관점에서 δ᾽는 절과 절을 연결하는 등위접속사로 [HEAD conj] 자질을 갖는다. 두 상황(성내 고립과 숲의 먼 거리)을 병렬시킨다.",
        "background": "고립된 상황에 더해 땔감 수송의 물리적 어려움이라는 추가적 장애를 이어주는 접속사다.",
        "etymology": "PIE *de에서 유래했다 (앞서 761행 δ᾽ 항목 참조)."
      },
      {
        "g": "ὕλη",
        "pos": "명사",
        "lemma": "ὕλη, ὕλης, ἡ",
        "parse": "sg.nom.f.",
        "gloss_kr": "숲, 땔감, 목재",
        "gloss_en": "wood, timber, forest",
        "syntax": "LFG 관점에서 ὕλη는 생략된 필요/운송 구문의 주어 또는 목적어로서 [PRED 'ὕλη', CASE nom, NUM sg, GEND f] 자질을 갖는다. 행간걸침(enjambment)을 통해 다음 행의 부정사 ἀξέμεν과 통사적으로 결합한다.",
        "background": "화장작열(pyre)을 쌓기 위해 필수적인 나무/목재를 뜻한다. 헥토르의 거대한 화장작열을 만드느냐는 장례의 규모와 존엄성을 결정짓는 핵심 물자다.",
        "etymology": "PIE 어근 *swul-/*sul-('숲, 목재')에서 유래했다. 어두 S-가 기식(rough breathing) h-로 변하여 ὕλη가 되었다. Beekes(EDG)에 따르면 라틴어 silva('숲')와 완전한 동계어다(*swil-wa > silva). 영어 hylozoism, hylomorphism 등 철학/과학 용어의 원형이다."
      }
    ]
  },
  {
    "ref": "Iliad 24.663",
    "trans": "산에서 운반해야 하는데, 트로이아인들은 매우 두려워하고 있습니다.",
    "words": [
      {
        "g": "ἀξέμεν",
        "pos": "부정사",
        "lemma": "ἄγω",
        "principalParts": "ἄγω – ἤξω – ἤγαγον – ἦχα – ἦγμαι – ἤχθην",
        "parse": "fut.act.inf. (Homeric infinitive ending -μεν)",
        "gloss_kr": "운반해 오는 것, 가져오는 것",
        "gloss_en": "to bring, to fetch",
        "syntax": "LFG 관점에서 ἀξέμεν은 앞 행의 ὕλη를 목적어로 취하는 목적/결과의 미래 부정사로서 [PRED 'ἄγω<SUBJ,OBJ>', ASPECT fut, VOICE act, OBJ [PRED 'ὕλη']] 자질을 갖는다. 호메로스 특유의 부정사 어미 -μεν을 취한다.",
        "background": "이다산에서 땔감을 목재 수레로 운반해 오는 행위를 가리킨다. 아카이오이군에 노출될 위험이 가장 큰 작업이다.",
        "etymology": "PIE 어근 *h₂eǵ-('이끌다, 운반하다')의 미래 어간 ἄξ-에 호메로스어 부정사 어미 -μεν이 결합한 형태다. (앞서 764행 ἄγαγε 항목 참조)."
      },
      {
        "g": "ἐξ",
        "pos": "전치사",
        "lemma": "ἐκ",
        "parse": "prep.+gen.",
        "gloss_kr": "~로부터, ~에서",
        "gloss_en": "from, out of",
        "syntax": "LFG 관점에서 ἐξ는 명사 ὄρεος를 지배하는 출발점 전치사구의 핵으로 [PRED 'ἐκ<OBJ>', OBJ [PRED 'ὄρος']] 자질을 갖는다. 모음 앞에서 ἐξ 형태를 취한다.",
        "background": "땔감을 가져오는 출처인 이다산으로부터의 공간적 이탈을 지시한다.",
        "etymology": "PIE 전치사 *eǵʰs('밖으로, ~로부터')에서 유래했다. Chantraine(DELG)에 따르면 라틴어 ex, 고대 이탈리아어 eχ와 정확히 대응한다. 영어 exit, exothermic 등의 접두사 기원이다."
      },
      {
        "g": "ὄρεος",
        "pos": "명사",
        "lemma": "ὄρος, ὄρεος, τό",
        "parse": "sg.gen.n. (Homeric uncontracted form)",
        "gloss_kr": "산으로부터 (이다 산)",
        "gloss_en": "from the mountain",
        "syntax": "LFG 관점에서 ὄρεος는 전치사 ἐξ의 이탈격적 속격 목적어로 [PRED 'ὄρος', CASE gen, NUM sg, GEND n] 자질을 갖는다. 미축약 이형태(uncontracted form)를 유지한다.",
        "background": "트로이아 배후에 위치한 이다(Ida) 산을 가리킨다. 서사시 내에서 신들의 거처이자 목재의 공급원으로 자주 등장한다.",
        "etymology": "PIE 어근 *er-('솟구치다, 움직이다')에서 파생된 *or-os-('산, 높이 솟은 것')에서 유래했다. Beekes(EDG)에 의하면 산스크리트어 ṛṣva-('높은')와 동계이다. 그리스어 내에서 s-어간 중성 명사 형태를 유지한다. 영어 orogeny(산악 형성) 등의 학술 용어로 남아 있다."
      },
      {
        "g": "μάλα",
        "pos": "부사",
        "lemma": "μάλα",
        "parse": "adv.",
        "gloss_kr": "매우, 심히",
        "gloss_en": "very, greatly",
        "syntax": "LFG 관점에서 μάλα는 동사 δεδίασιν을 수식하는 정도 부사로서 [PRED 'μάλα', SEM degree-high] 자질을 갖는다. c-구조상 [VP [AdvP μάλα] [V' δεδίασιν]]을 형성한다.",
        "background": "트로이아인들이 느끼는 공포의 크기를 극대화하여 표현한다. 휴전 협정이 없이는 성 밖으로 단 한 걸음도 나갈 수 없는 현실을 강조한다.",
        "etymology": "PIE 어근 *mel-('강하다, 크다')에서 유래했다. Chantraine(DELG)에 따르면 라틴어 melior('더 좋은'), 슬라브어 zelo('매우')와 동계 관계를 이룬다. 호메로스어에서 감정이나 상태의 극심함을 나타낼 때 다용된다."
      },
      {
        "g": "δὲ",
        "pos": "접속사",
        "lemma": "δέ",
        "parse": "coord.conj.",
        "gloss_kr": "그리고, 또",
        "gloss_en": "and, moreover",
        "syntax": "HPSG 관점에서 δὲ는 절들을 대등하게 매개하는 접속사로 [HEAD conj] 자질을 갖는다.",
        "background": "앞선 공간적 요인(산의 거리)에 이어 인간적/심리적 요인(트로이인들의 공포)을 덧붙인다.",
        "etymology": "PIE *de에서 유래했다 (앞서 761행 δ᾽ 항목 참조)."
      },
      {
        "g": "Τρῶες",
        "pos": "명사(고유)",
        "lemma": "Τρώς, Τρωός, ὁ",
        "parse": "pl.nom.m.",
        "gloss_kr": "트로이아인들은",
        "gloss_en": "Trojans",
        "syntax": "LFG 관점에서 Τρῶες는 주절의 통사적 주어로 [PRED 'Τρώς', CASE nom, NUM pl, GEND m, θ-ROLE EXPERIENCER] 자질을 갖는다. 동사 δεδίασιν과 수/인칭 일치를 이룬다.",
        "background": "트로이아 도성 안의 전체 백성과 전사들을 가리킨다. 헥토르라는 거목을 잃은 뒤 아킬레우스와 그리스군에 대해 심각한 공포에 사로잡혀 있다.",
        "etymology": "히타이트어 기록의 *Taruisa* 또는 선그리스어 지명에서 유래한 명칭이다. Beekes(EDG)는 인도유럽어 이전의 기층 어휘 가능성을 강조한다. 영어 Trojan, 현대 그리스어 Τρώας로 이어진다."
      },
      {
        "g": "δεδίασιν",
        "pos": "동사",
        "lemma": "δέδοικα",
        "principalParts": "δέδοικα(또는 δέδια) – (미상) – (미상) – δέδοικα – (미상) – (미상)",
        "parse": "3rd.pl.perf.ind.act. (Homeric short-stem form)",
        "gloss_kr": "그들은 두려워하고 있다",
        "gloss_en": "they fear, they are afraid",
        "syntax": "LFG 관점에서 δεδίασιν은 주절의 중심 술어로서 [PRED 'δέδοικα<SUBJ>', TENSE present, ASPECT perf, MOOD ind, VOICE act, SUBJ [PRED 'Τρῶες']] 자질을 갖는다. 완료 형태이나 현재의 심리적 상태(공포)를 나타내는 감정 완료 동사다.",
        "background": "단축 어간(short stem δεδι-)을 사용한 호메로스 완료 형태다. 그리스군의 습격에 대한 트로이아 백성들의 극심한 두려움을 서술한다.",
        "etymology": "PIE 어근 *dwey-('두려워하다')의 중복 완료형 *de-dwoy-에서 유래했다. Chantraine(DELG)에 의하면 모음 사이의 *y* 탈락과 어간 단축을 거쳐 δεδίασιν이 형성되었다. 라틴어 dirus('무서운'), 영어 dire가 이 어근과 연관된다."
      }
    ]
  },
  {
    "ref": "Iliad 24.664",
    "trans": "나흘 동안은 우리가 궁궐 안에서 그를 위해 통곡하고,",
    "words": [
      {
        "g": "ἐννῆμαρ",
        "pos": "부사",
        "lemma": "ἐννῆμαρ",
        "parse": "adv.",
        "gloss_kr": "나흘 동안 (9일 동안)",
        "gloss_en": "for nine days",
        "syntax": "LFG 관점에서 ἐννῆμαρ는 기간을 한정하는 시간 부사구로서 [PRED 'ἐννῆμαρ', SEM duration-9days] 자질을 갖는다. c-구조상 동사 γοάοιμεν을 수식하는 부속어다.",
        "background": "호메로스 전통에서 의식이나 고통의 지속 기간을 나타낼 때 자주 쓰이는 수치 '9일'이다. 장엄한 애도 기간의 길이를 설정한다.",
        "etymology": "수사 ἐννέα('아홉')와 명사 ἦμαρ('날, 일')의 합성어다. PIE *newn('아홉')과 *ah₂mr-('날')의 결합에서 유래했다. Chantraine(DELG)에 의하면 호메로스 시가 전용의 수사 부사다."
      },
      {
        "g": "μέν",
        "pos": "소사",
        "lemma": "μέν",
        "parse": "correlative.particle",
        "gloss_kr": "우선, 한편",
        "gloss_en": "on the one hand, first",
        "syntax": "HPSG 관점에서 μέν는 대조 소사로 후행하는 τῇ δεκάτῃ δέ(665행)와의 구조적 대칭을 형성한다.",
        "background": "11일간의 전체 장례 일정 중 첫 번째 단계(1~9일차: 궁내 애도)를 이끄는 병렬 표지다.",
        "etymology": "PIE *men에서 유래했다 (앞서 763행 μέν 항목 참조)."
      },
      {
        "g": "κ᾽",
        "pos": "소사",
        "lemma": "ἄν",
        "parse": "modal.particle (Homeric κέ/κεν)",
        "gloss_kr": "~할 것입니다",
        "gloss_en": "would",
        "syntax": "HPSG 관점에서 κ᾽는 양태 소사로서 희구법 γοάοιμεν과 결합하여 휴정 기간 동안 수행할 허가된 행동의 양태를 구성한다.",
        "background": "아킬레우스와의 휴전 합의를 전제로 실행될 장례 행위를 겸손하고 정중한 양태로 표현한다.",
        "etymology": "PIE *ke에서 유래했다 (앞서 661행 κέ 항목 참조)."
      },
      {
        "g": "αὐτὸν",
        "pos": "대명사",
        "lemma": "αὐτός, αὐτή, αὐτό",
        "parse": "sg.acc.m.",
        "gloss_kr": "그를 (헥토르의 시신을)",
        "gloss_en": "him",
        "syntax": "LFG 관점에서 αὐτὸν은 동사 γοάοιμεν의 직접목적어로서 [PRED 'pro', CASE acc, NUM sg, GEND m, θ-ROLE PATIENT] 자질을 갖는다. 헥토르의 시신을 지칭한다.",
        "background": "트로이아로 되돌아온 헥토르의 시신 자체를 가리킨다. 프리아모스 궁궐 한가운데 안치되어 백성들의 애도를 받을 대상이다.",
        "etymology": "PIE 지시 어근 *au-('저기, 다시')에 형용사 접미사가 결합한 형태다. Chantraine(DELG)에 의하면 고전 그리스어에서 인칭 대명사 및 강조 대명사로 확립되었다. 영어 automatic, autonomy 등의 auto-의 원형이다."
      },
      {
        "g": "ἐνὶ",
        "pos": "전치사",
        "lemma": "ἐν",
        "parse": "prep.+dat. (Homeric lengthened form)",
        "gloss_kr": "~ 안에서",
        "gloss_en": "in, within",
        "syntax": "LFG 관점에서 ἐνὶ는 명사 μεγάροις를 지배하는 처소 전치사의 핵으로 [PRED 'ἐν<OBJ>', OBJ [PRED 'μέγαρον']] 자질을 갖는다. 운율상 장모음화된 호메로스 이형태 ἐνί/ἐνί를 취한다.",
        "background": "외적의 침입으로부터 보호받는 궁궐 내부라는 안전한 공간을 지정한다.",
        "etymology": "PIE 전치사 *en('안에')의 처격 확장 형태 *eni에서 유래했다. Chantraine(DELG)에 의하면 라틴어 in, 산스크리트어 ni, 고대 영어 in과 완전 동계다."
      },
      {
        "g": "μεγάροις",
        "pos": "명사",
        "lemma": "μέγαρον, μεγάρους, τό",
        "parse": "pl.dat.n.",
        "gloss_kr": "궁궐들에서, 대전(大殿)에서",
        "gloss_en": "in the halls, in the palace",
        "syntax": "LFG 관점에서 μεγάροις는 전치사 ἐνὶ의 처소격 목적어로 [PRED 'μέγαρον', CASE dat, NUM pl, GEND n] 자질을 갖는다. 복수 형태이나 왕궁 전체를 뜻하는 시적 복수(poetic plural)다.",
        "background": "호메로스 시대 왕궁의 중심 공간인 메가론(Megaron)을 뜻한다. 시신을 안치하고 가문과 백성들이 비가를 부르는 공식 애도 장소다.",
        "etymology": "선그리스어(Pre-Greek) 또는 셈어파 차용어 가능성이 제기된다. Beekes(EDG)는 세미트어 어근 *m-g-r('동굴, 거처')과의 연관성을 제시하면서도 기층 어휘로 본다. 미케네어 선문자 B *me-ka-ro*로 입증된다. 현대 그리스어에는 남아 있지 않다."
      },
      {
        "g": "γοάοιμεν",
        "pos": "동사",
        "lemma": "γοάω",
        "principalParts": "γοάω – (미상) – ἐγόησα – (미상) – (미상) – (미상)",
        "parse": "1st.pl.pres.opt.act. (Homeric uncontracted optative)",
        "gloss_kr": "우리가 통곡할 것입니다, 애도할 것입니다",
        "gloss_en": "we would lament, we would mourn",
        "syntax": "LFG 관점에서 γοάοιμεν은 양태 소사 κ᾽와 결합하여 종속절/조건부 주절의 양태 술어 역할을 하는 희구법 동사로서 [PRED 'γοάω<SUBJ,OBJ>', ASPECT impf, MOOD opt, VOICE act, SUBJ [PRED 'pro', PERS 1, NUM pl], OBJ [PRED 'αὐτόν']] 자질을 갖는다.",
        "background": "의식적 비가(goos)를 올리는 행위다. 희구법(optative)을 사용하여 아킬레우스의 승낙 아래 진행될 미래의 희망적 행동을 격조 있게 표현한다.",
        "etymology": "명사 γόος('통곡')에서 파생된 의성어 계열 동사다. (앞서 761행 γόοιο 항목 참조)."
      }
    ]
  },
  {
    "ref": "Iliad 24.665",
    "trans": "열흘째 되는 날에는 매장하고 백성들에게 잔치를 베풀며,",
    "words": [
      {
        "g": "τῇ",
        "pos": "관사",
        "lemma": "ὁ, ἡ, τό",
        "parse": "sg.dat.f. (Homeric demonstrative / article)",
        "gloss_kr": "그 (날에)",
        "gloss_en": "on the",
        "syntax": "LFG 관점에서 τῇ는 서수 형용사 δεκάτῃ를 수식하는 지시/관사 형태로서 [SPECIFIER +, CASE dat, NUM sg, GEND f] 자질을 갖는다. 생략된 명사 ἡμέρᾳ('날')와 격 일치를 이룬다.",
        "background": "특정한 날짜(10일차)를 한정하여 가리키는 지시적 역할을 수행한다.",
        "etymology": "PIE 지시대명사 어근 *te-/*to-의 여성 처격/여격 형태에서 유래했다 (앞서 761행 τῇσι 항목 참조)."
      },
      {
        "g": "δεκάτῃ",
        "pos": "형용사",
        "lemma": "δέκατος, δεκάτη, δέκατον",
        "parse": "sg.dat.f.",
        "gloss_kr": "열 번째 (날에)",
        "gloss_en": "tenth",
        "syntax": "LFG 관점에서 δεκάτῃ는 시간을 나타내는 여격(dative of time when) 명사구의 핵으로서 [PRED 'δέκατος', CASE dat, NUM sg, GEND f] 자질을 갖는다. [NP τῇ δεκάτῃ (ἡμέρᾳ)] 구문을 이룬다.",
        "background": "장례 일정의 두 번째 단계인 실제 매장 및 화장(incineration)이 이루어지는 결정적인 날이다.",
        "etymology": "기수사 δέκα('열')에서 파생된 서수사다. PIE *deḱm-to-에서 유래했다. Chantraine(DELG)에 의하면 라틴어 decimus, 산스크리트어 daśama-, 고딕어 taihunda와 완벽히 동계다. 영어 decade, decimal 등의 기원이다."
      },
      {
        "g": "δέ",
        "pos": "접속사",
        "lemma": "δέ",
        "parse": "coord.conj.",
        "gloss_kr": "그리고",
        "gloss_en": "and",
        "syntax": "HPSG 관점에서 δέ는 절과 절을 순차적으로 이어주는 등위접속사다.",
        "background": "9일간의 궁내 애도 이후 10일차의 구체적 의무 행동으로 넘어가는 절차적 전환을 표시한다.",
        "etymology": "PIE *de에서 유래했다 (앞서 761행 δ᾽ 항목 참조)."
      },
      {
        "g": "κε",
        "pos": "소사",
        "lemma": "ἄν",
        "parse": "modal.particle (Homeric κέ/κεν)",
        "gloss_kr": "~할 것입니다",
        "gloss_en": "would",
        "syntax": "HPSG 관점에서 κέ는 희구법 동사 θάπτοιμεν에 양태적 가치를 부여하는 소사다.",
        "background": "아킬레우스가 허락할 경우 실현될 장례 행위의 양태를 나타낸다.",
        "etymology": "PIE *ke에서 유래했다 (앞서 661행 κέ 항목 참조)."
      },
      {
        "g": "θάπτοιμεν",
        "pos": "동사",
        "lemma": "θάπτω",
        "principalParts": "θάπτω – θάψω – ἔθαψα – (미상) – τέθαμμαι – ἐτάφην",
        "parse": "1st.pl.pres.opt.act.",
        "gloss_kr": "우리가 매장할 것입니다, 화장할 것입니다",
        "gloss_en": "we would bury",
        "syntax": "LFG 관점에서 θάπτοιμεν은 주절의 술어로서 [PRED 'θάπτω<SUBJ,OBJ>', ASPECT impf, MOOD opt, VOICE act, SUBJ [PRED 'pro', PERS 1, NUM pl]] 자질을 갖는다.",
        "background": "화장작열에 시신을 살라 유골을 수습하고 무덤에 묻는 핵심 매장 행위를 가리킨다.",
        "etymology": "PIE 어근 *dʰembʰ-('매장하다')에서 유래한 유기음 어간 동사다. 그라스만 법칙에 의해 *dʰaph- > θάπτω가 되었다. (앞서 660행 τάφον 항목 참조)."
      },
      {
        "g": "δαινῦτό",
        "pos": "동사",
        "lemma": "δαίνυμι",
        "principalParts": "δαίνυμι – δαίσω – ἔδαισα – (미상) – (미상) – ἐδαίσθην",
        "parse": "3rd.sg.pres.opt.mp. (Homeric uncontracted optative δαινῦτο)",
        "gloss_kr": "잔치를 벌일 것입니다, 향연을 가질 것입니다",
        "gloss_en": "would feast, would banquet",
        "syntax": "LFG 관점에서 δαινῦτό는 주어 λαός와 일치하는 술어 동사로서 [PRED 'δαίνυμι<SUBJ>', ASPECT impf, MOOD opt, VOICE mp, SUBJ [PRED 'λαός']] 자질을 갖는다. 희구법 어미 -ῦτο 형태를 취한다.",
        "background": "장례식이 끝난 후 온 백성들이 함께 모여 음식을 나누는 장례 향연(perideipnon)을 의미한다. 죽은 영웅을 추모하고 공동체의 유대를 회복하는 중요한 장례 의식의 일부다.",
        "etymology": "PIE 어근 *da-i-('분배하다, 나누다')에서 파생된 -νυ- 동사다. Chantraine(DELG)에 의하면 산스크리트어 dā-('나누다')와 동계이다. 고대 그리스 장례 문화에서 음식을 나누어 주는 행위와 직결된다."
      },
      {
        "g": "τε",
        "pos": "접속사",
        "lemma": "τε",
        "parse": "coord.conj. (enclitic)",
        "gloss_kr": "그리고",
        "gloss_en": "and",
        "syntax": "HPSG 관점에서 후접 접속사 τε는 두 동사 구문(매장과 향연)을 밀접하게 결합시킨다.",
        "background": "매장 행위(θάπτοιμεν)와 백성들의 향연(δαινῦτο)이 10일차에 연이어 일어나는 한 쌍의 의무임을 보여 준다.",
        "etymology": "PIE 접속 소사 *kʷe에서 유래했다. Chantraine(DELG)에 의하면 라틴어 -que, 산스크리트어 ca와 완전한 동계어다. *kʷe > τε의 음운 변화를 거쳤다."
      },
      {
        "g": "λαός",
        "pos": "명사",
        "lemma": "λαός, λαοῦ, ὁ",
        "parse": "sg.nom.m.",
        "gloss_kr": "백성들은, 군대는",
        "gloss_en": "the people, the host",
        "syntax": "LFG 관점에서 λαός는 동사 δαινῦτό의 통사적 주어로 [PRED 'λαός', CASE nom, NUM sg, GEND m, θ-ROLE AGENT] 자질을 갖는다. 집합명사로서 단수 수일치를 받는다.",
        "background": "트로이아의 전체 백성과 전사 공동체를 가리킨다. 영웅의 장례는 가문만의 행사가 아니라 국가 전체의 공적인 추모 행사임을 보여 준다.",
        "etymology": "PIE 어근 *leh₂-o-('군대, 백성, 무리')에서 유래한 그리스어 고유 어휘다. Beekes(EDG)에 의하면 미케네어 선문자 B *ra-wo*로 입증된다. 영어 laity, layperson(< 라틴어 laicus < 그리스어 λαϊκός)의 원형이며, 현대 그리스어 λαός('백성, 국민')로 직계 계승된다."
      }
    ]
  },
  {
    "ref": "Iliad 24.666",
    "trans": "열한째 날에는 그분 위에 묘지를 만들고,",
    "words": [
      {
        "g": "ἑνδεκάτῃ",
        "pos": "형용사",
        "lemma": "ἑνδέκατος, ἑνδεκάτη, ἑνδέκατον",
        "parse": "sg.dat.f.",
        "gloss_kr": "열한 번째 (날에)",
        "gloss_en": "eleventh",
        "syntax": "LFG 관점에서 ἑνδεκάτῃ는 시간의 여격 명사구의 핵으로서 [PRED 'ἑνδέκατος', CASE dat, NUM sg, GEND f] 자질을 갖는다. [NP ἑνδεκάτῃ (ἡμέρᾳ)] 구문이다.",
        "background": "장례 절차의 세 번째 단계인 묘총(tumulus) 건설이 진행되는 날이다.",
        "etymology": "ἕν('하나')과 δέκατος('열 번째')의 합성 서수사다. PIE *sem-('하나')와 *deḱm-to-('열 번째')의 합성에서 유래했다. Chantraine(DELG)에 의하면 라틴어 undecimus와 대응한다. 영어 hendecagon(11각형)의 원형이다."
      },
      {
        "g": "δέ",
        "pos": "접속사",
        "lemma": "δέ",
        "parse": "coord.conj.",
        "gloss_kr": "그리고",
        "gloss_en": "and",
        "syntax": "HPSG 관점에서 δέ는 날짜별 장례 절차의 순차적 진행을 이어주는 등위접속사다.",
        "background": "10일차의 매장에 이어 11일차의 묘지 조성으로 이어지는 서사적 순서를 표지한다.",
        "etymology": "PIE *de에서 유래했다 (앞서 761행 δ᾽ 항목 참조)."
      },
      {
        "g": "κε",
        "pos": "소사",
        "lemma": "ἄν",
        "parse": "modal.particle (Homeric κέ/κεν)",
        "gloss_kr": "~할 것입니다",
        "gloss_en": "would",
        "syntax": "HPSG 관점에서 κέ는 희구법 ποιήσαιμεν과 결합하는 양태 소사다.",
        "background": "아킬레우스와의 휴전 합의를 전제로 한 조건부 행위의 양태를 표현한다.",
        "etymology": "PIE *ke에서 유래했다 (앞서 661행 κέ 항목 참조)."
      },
      {
        "g": "τύμβον",
        "pos": "명사",
        "lemma": "τύμβος, τύμβου, ὁ",
        "parse": "sg.acc.m.",
        "gloss_kr": "묘지, 흙총, 묘실",
        "gloss_en": "mound, tomb, barrow",
        "syntax": "LFG 관점에서 τύμβον은 동사 ποιήσαιμεν의 직접목적어로서 [PRED 'τύμβος', CASE acc, NUM sg, GEND m, θ-ROLE PATIENT/RESULT] 자질을 갖는다.",
        "background": "유골을 안치한 곳 위에 돌과 흙을 높이 쌓아 올리는 영웅의 묘총(barrow)을 뜻한다. 죽은 자의 영원한 명예(kleos)를 지상에 남기는 물리적 징표다.",
        "etymology": "PIE 어근 *teum-('부풀다, 솟아오르다')에서 유래한 o-급 명사다. Beekes(EDG)에 의하면 라틴어 tumulus('언덕, 묘지'), tumere('부풀다')와 완벽한 동계어다. 영어 tomb, tumor가 이 어근에서 파생되었다. 현대 그리스어 τύμβος로 보존된다."
      },
      {
        "g": "ἐπ᾽",
        "pos": "전치사",
        "lemma": "ἐπί",
        "parse": "prep.+dat.",
        "gloss_kr": "~ 위에",
        "gloss_en": "upon, over",
        "syntax": "LFG 관점에서 ἐπ᾽는 대명사 αὐτῷ를 지배하는 장소 전치사의 핵으로 [PRED 'ἐπί<OBJ>', OBJ [PRED 'αὐτός']] 자질을 갖는다. 후행 모음 앞에서 엘리전(ἐπί > ἐπ᾽)이 일어났다.",
        "background": "유골이 묻힌 바로 그 장소 위로 묘총을 쌓아 올리는 공간적 배치를 나타낸다.",
        "etymology": "PIE 전치사 *epi/*opi('위해, 위에, 가까이')에서 유래했다. Chantraine(DELG)에 의하면 산스크리트어 api, 라틴어 ob와 동계다. 영어 epicenter, epidemic 등의 접두사 원형이다."
      },
      {
        "g": "αὐτῷ",
        "pos": "대명사",
        "lemma": "αὐτός, αὐτή, αὐτό",
        "parse": "sg.dat.m.",
        "gloss_kr": "그분 위에 (유골/헥토르 위에)",
        "gloss_en": "him",
        "syntax": "LFG 관점에서 αὐτῷ는 전치사 ἐπ᾽의 처소격 목적어로 [PRED 'pro', CASE dat, NUM sg, GEND m] 자질을 갖는다.",
        "background": "안치된 헥토르의 유골 또는 매장 장소를 가리킨다.",
        "etymology": "PIE 지시 어근 *au-에서 유래했다 (앞서 664행 αὐτὸν 항목 참조)."
      },
      {
        "g": "ποιήσαιμεν",
        "pos": "동사",
        "lemma": "ποιέω",
        "principalParts": "ποιέω – ποιήσω – ἐποίησα – πεποίηκα – πεποίημαι – ἐποιήθην",
        "parse": "1st.pl.aor.opt.act.",
        "gloss_kr": "우리가 쌓아 올릴 것입니다, 만들 것입니다",
        "gloss_en": "we would make, we would build",
        "syntax": "LFG 관점에서 ποιήσαιμεν은 주절의 중심 술어로서 [PRED 'ποιέω<SUBJ,OBJ>', ASPECT aor, MOOD opt, VOICE act, SUBJ [PRED 'pro', PERS 1, NUM pl], OBJ [PRED 'τύμβον']] 자질을 갖는다.",
        "background": "묘총을 건설하는 창작/건설 행위를 나타낸다. 부정과거 희구법을 써서 행위의 완성된 형태를 겸손히 서술한다.",
        "etymology": "PIE 어근 *kʷey-('쌓다, 만들다, 시를 짓다')에서 유래했다. Chantraine(DELG)에 의하면 산스크리트어 cinoti('쌓다')와 동계다. 그리스어 내에서 '만들다' 및 '시를 짓다'로 분화되어 영어 poet, poem, poetics의 어원이 되었다. 현대 그리스어 ποιῶ/κάνω로 이어진다."
      }
    ]
  },
  {
    "ref": "Iliad 24.667",
    "trans": "열두째 날에는 만일 정녕 피할 수 없다면 우리는 싸울 것입니다.”",
    "words": [
      {
        "g": "τῇ",
        "pos": "관사",
        "lemma": "ὁ, ἡ, τό",
        "parse": "sg.dat.f. (Homeric demonstrative)",
        "gloss_kr": "그 (날에)",
        "gloss_en": "on the",
        "syntax": "LFG 관점에서 τῇ는 서수 형용사 δυωδεκάτῃ를 지시 수식하는 한정어 자질 [SPECIFIER +, CASE dat, NUM sg, GEND f]를 갖는다.",
        "background": "휴전이 끝나고 전쟁이 재개될 수 있는 마지막 12일차를 지정한다.",
        "etymology": "PIE 지시 어근 *te-/*to-에서 유래했다 (앞서 761행 τῇσι 항목 참조)."
      },
      {
        "g": "δὲ",
        "pos": "접속사",
        "lemma": "δέ",
        "parse": "coord.conj.",
        "gloss_kr": "그리고, 마침내",
        "gloss_en": "and, then",
        "syntax": "HPSG 관점에서 δὲ는 장례 기간(1~11일)과 전쟁 재개 시점(12일)을 가르는 대조적 접속사다.",
        "background": "애도와 매장의 신성한 휴전 기간이 끝나고 다시 참혹한 현실의 전투로 복귀하는 시점을 구분 짓는다.",
        "etymology": "PIE *de에서 유래했다 (앞서 761행 δ᾽ 항목 참조)."
      },
      {
        "g": "δυωδεκάτῃ",
        "pos": "형용사",
        "lemma": "δυωδέκατος, δυωδεκάτη, δυωδέκατον",
        "parse": "sg.dat.f. (Homeric lengthened form)",
        "gloss_kr": "열두 번째 (날에)",
        "gloss_en": "twelfth",
        "syntax": "LFG 관점에서 δυωδεκάτῃ는 시간의 여격 명사구의 핵으로 [PRED 'δυωδέκατος', CASE dat, NUM sg, GEND f] 자질을 갖는다.",
        "background": "프리아모스가 아킬레우스에게 요청한 11일간의 휴전이 종료되고 전투 재개가 허용되는 날이다.",
        "etymology": "δύω('둘')와 δέκατος('열 번째')의 합성 서수사다. PIE *duwo- 및 *deḱm-to-의 결합이다. Chantraine(DELG)에 의하면 라틴어 duodecimus와 대응하며, 호메로스식 모음 장음화 형태(δυω-)를 보여 준다."
      },
      {
        "g": "πολεμίξομεν",
        "pos": "동사",
        "lemma": "πολεμίζω",
        "principalParts": "πολεμίζω – πολεμίξω – ἐπολέμιξα – (미상) – (미상) – (미상)",
        "parse": "1st.pl.fut.ind.act. (Homeric -ξ- future form)",
        "gloss_kr": "우리는 싸울 것입니다, 전쟁을 할 것입니다",
        "gloss_en": "we shall fight, we shall wage war",
        "syntax": "LFG 관점에서 πολεμίξομεν은 주절의 중심 술어로서 [PRED 'πολεμίζω<SUBJ>', TENSE future, ASPECT impf/prospective, MOOD ind, VOICE act, SUBJ [PRED 'pro', PERS 1, NUM pl]] 자질을 갖는다. 미래 직설법을 써서 단호한 전쟁 재개의 의지를 표현한다.",
        "background": "호메로스 방언 특유의 -ξ- 미래 어미(πολεμίξω < πολεμίζω)를 취한다. 장례가 끝나면 비록 왕자 헥토르를 잃었을지라도 트로이아인들은 국가를 위해 다시 싸울 것임을 단호하게 선언한다.",
        "etymology": "명사 πόλεμος('전쟁')에서 파생된 -ίζω 동사다. PIE 어근 *pel-/*lem-('흔들다, 싸우다')과의 연관성이 제기되나, Beekes(EDG)는 선그리스어 기층 어휘 가능성도 유보적으로 논의한다. 고대 그리스 영웅 시가의 대표적인 전투 동사다."
      },
      {
        "g": "εἴ",
        "pos": "접속사",
        "lemma": "εἰ",
        "parse": "subord.conj.",
        "gloss_kr": "만약 ~라면",
        "gloss_en": "if",
        "syntax": "HPSG 관점에서 εἴ는 어폐 없는 사태의 필연성을 조건을 유도하는 종속접속사다.",
        "background": "전쟁 재개가 자발적인 기쁨이 아니라 도피할 수 없는 국운의 숙명임을 나타내는 조건절을 도입한다.",
        "etymology": "PIE *ei에서 유래했다 (앞서 660행 εἰ 항목 참조)."
      },
      {
        "g": "περ",
        "pos": "소사",
        "lemma": "πέρ",
        "parse": "enclitic.particle",
        "gloss_kr": "정말로, 비록 ~일지라도",
        "gloss_en": "indeed, even",
        "syntax": "HPSG 관점에서 περ는 접속사 εἴ를 강하게 수식하여 conditional force를 양보적/필연적 어조로 강화한다.",
        "background": "피할 수 없는 불가피성(ἀνάγκη)을 더욱 강조하여 트로이아측이 전쟁을 원해서가 아니라 불가피하게 응할 것임을 밝힌다.",
        "etymology": "PIE 전치사/부사 어근 *per-('넘어서, 통과하여')에서 유래한 후접 입자다. Chantraine(DELG)에 의하면 라틴어 per와 동계다. 강조와 양보의 의미를 부가한다."
      },
      {
        "g": "ἀνάγκη",
        "pos": "명사",
        "lemma": "ἀνάγκη, ἀνάγκης, ἡ",
        "parse": "sg.nom.f.",
        "gloss_kr": "필연, 불가피함, 운명의 강제",
        "gloss_en": "necessity, constraint, force",
        "syntax": "LFG 관점에서 ἀνάγκη는 생략된 계사 ἐστί의 주격 보어/주어로 [PRED 'ἀνάγκη', CASE nom, NUM sg, GEND f] 자질을 갖는다. [CP εἴ περ (ἐστὶ) ἀνάγκη] 조건 구문을 형성한다.",
        "background": "인간의 의지를 초월하는 거역할 수 없는 피할 수 없는 운명이나 전술적 강제를 뜻한다. 프리아모스는 전쟁이 비극임을 알면서도 운명이 요구한다면 12일째부터 다시 전장에 나설 것임을 아킬레우스에게 고한다.",
        "etymology": "PIE 어근 *neḱ-('목에 죄다, 눌러 부수다') 또는 *angʰ-('좁다, 압박하다')에서 파생된 어휘로 본다. Beekes(EDG)에 따르면 미케네어 선문자 B *a-na-ka-ta*와는 구분되며, '필연성, 강제'라는 고유한 추상 명사로 정착했다. 영어 anancastic(의무적/강박적)의 어원이다."
      }
    ]
  },
  {
    "ref": "Iliad 24.667",
    "trans": "그러자 발이 빠르고 눈부신 아킬레우스가 그에게 대답하였다:",
    "words": [
      {
        "g": "τὸν",
        "pos": "관사",
        "lemma": "ὁ, ἡ, τό",
        "parse": "sg.acc.m.",
        "gloss_kr": "그를",
        "gloss_en": "him",
        "syntax": "[CP [DP τὸνᵢ] [C' ... [VP προσέειπε tᵢ]]] 구조에서 목적어로서 전위된 지시사/관사이다. LFG f-구조에서 [PRED 'προσεῖπον<SUBJ,OBJ>', OBJ [CASE acc]]로 지배된다. 통사적으로 선행하는 화화 상대방(프리아모스)을 가리키는 anaphoric pronoun의 용법이다.",
        "background": "화법 전환부에서 상대방의 발언에 응답하는 정형구의 전형적인 도입부이다. 아킬레우스의 태도가 연민으로 전환된 이후 그의 목소리가 직접 전달되는 국면이다.",
        "etymology": "① PIE 지시사 어근 *to- (e급)에서 유래하며, 명확한 후두음은 재구되지 않는다(Beekes EDG). ② 산스크리트어 tá-, 고대 교회 슬라브어 tŭ, 고대 고지 독일어 der. ③ PIE 지시 대명사/관사 체계에서 그리스어 정관사 및 지시사로 분화하는 음운적·형태론적 변화를 겪었다(Chantraine DELG). ④ 영어 the의 어원적 동계어이며, 현대 그리스어에서는 지시사·관사 체계로 발전하여 광범위하게 쓰인다."
      },
      {
        "g": "δ᾽",
        "pos": "접속사",
        "lemma": "δέ",
        "parse": "coord.conj.",
        "gloss_kr": "그리고, 반면에",
        "gloss_en": "and, but",
        "syntax": "HPSG 자질구조상 [HEAD coord, COMPS < >]로 분석되며, 절과 절을 대조적으로 연결하는 후치사적 접속사이다. 통사 위치는 문장의 두 번째 자리(Wackernagel's law)를 점한다.",
        "background": "앞선 프리아모스의 호소에 이어 아킬레우스의 반응을 매끄럽게 전환하는 서사적 접속 장치이다. 호메로스 서사시 전반에서 장면 전환과 인물 교대를 알리는 핵심적인 통사 표지이다.",
        "etymology": "① PIE 재구형은 불확실하나, 공간적 지시나 대조를 나타내는 어근에서 기원한 것으로 추정된다(Beekes EDG). ② 산스크리트어 등과의 직접 동계어는 명확치 않음. ③ 독립된 어근이라기보다는 전형적인 불변화사로서 문장 내 위치 고정화 현상을 겪었다. ④ 호메로스 그리스어 및 고전 그리스어의 문장 연결사로 정착하였으며, 현대 그리스어에는 직접적인 형태로 잔존하지 않는다(Chantraine DELG)."
      },
      {
        "g": "αὖτε",
        "pos": "부사",
        "lemma": "αὖτε",
        "parse": "adv.",
        "gloss_kr": "다시, 이와 같이",
        "gloss_en": "again, in turn",
        "syntax": "[VP [ADV αὖτε] ... ] 형태로 술어부 앞에서 행위의 교대나 반복을 나타내는 수식어구이다. LFG에서 ADJUNCT 자리를 차지하며, 담화 맥락상 앞선 발언에 대한 대응임을 지시한다.",
        "background": "대화의 공이 상대방에게 넘어갔음을 보여주는 호메로스 정형구의 요소이다. 인물 간의 교대 발화(amoebean exchange)에서 필수적으로 동반되는 수식어이다.",
        "etymology": "① PIE 어근 *h₂e(u)- ('다시, 저쪽으로')에서 유래하며, e급 형태와 양태 부사 접미사의 결합이다(Beekes EDG). ② 산스크리트어 áva ('아래로, 멀리'), 고딕어 auþi- 등과 동계이다. ③ 고대 그리스어에서 음운론적 축약과 부사화 과정을 거쳐 '다시, 차례로'라는 의미로 고착되었다. ④ Frisk(GEW)와 Chantraine(DELG)은 이를 공간적 지원에서 담화적 교대 기능으로의 의미 확스로 설명한다."
      },
      {
        "g": "προσέειπε",
        "pos": "동사",
        "lemma": "προσείπω",
        "principalParts": "προσείπω – προσερέω – προσεῖπον – (미상) – (미상) – (미상)",
        "parse": "3rd.sg.aor.ind.act.",
        "gloss_kr": "말을 건넸다",
        "gloss_en": "addressed",
        "syntax": "LFG AVM으로 나타내면 [PRED 'προσεῖπον<SUBJ,OBJ,OBL>', TENSE past, ASPECT aor, SUBJ [PRED 'Ἀχιλλεύς', CASE nom], OBJ [PRED 'δ', CASE acc]]이다. c-구조상 [TP [DP Ἀχιλλεύς] [T' ἔσεɩπɛ [vP t_subj [VP t_v [DP τὸν]]]]]이며, 전치사적 전구 πρός가 동사 어간과 결합한다.",
        "background": "영웅들이 서로 마주하여 공식적인 대화를 나누거나 응답할 때 쓰는 전형적인 서사적 동사이다. 아킬레우스가 프리아모스의 눈물 어린 청원에 응답하는 결정적인 순간을 포착한다.",
        "etymology": "① PIE 어근 *wekʷ- ('말하다')에 전치사적 전구 *pròs가 결합한 형태이다(Beekes EDG). ② 라틴어 vōx ('목소리'), 산스크리트어 vácas ('말') 등과 동계이다. ③ 호메로스어에서 증강사 aorist 형태인 προσέειπε로 정착하면서 음절 연장 현상을 겪었다. ④ 영어 voice, vowel 등이 같은 PIE 어근에서 유래한다(Chantraine DELG)."
      },
      {
        "g": "ποδάρκης",
        "pos": "형용사",
        "lemma": "ποδάρκης, ποδάρκες",
        "parse": "sg.nom.m.",
        "gloss_kr": "발이 빠른",
        "gloss_en": "swift-footed",
        "syntax": "[DP [AP ποδάρκης] [N' Ἀχιλλεύς]] 구조에서 고유명사를 수식하는 한정 형용사이다. LFG f-구조상 [ADJUNCT [PRED 'ποδάρκης', MOD [PRED 'Ἀχιλλεύς']]]로 분석된다.",
        "background": "아킬레우스의 가장 대표적인 정형구적 수식어이다. 비록 이 장면에서 아킬레우스는 뛰어다니지 않고 앉아 있지만, 그의 영웅적 본질과 정체성을 상기시킨다.",
        "etymology": "① *ποδ- (발) + *ἀρκ- (충분하다)의 합성어로, PIE *pṓs 와 *h₂erk- 의 결합이다(Beekes EDG). ② 산스크리트어 pad- ('발'), 라틴어 pēs ('발')와 동계이다. ③ 그리스어 내부에서 신체 부위와 능력의 어근이 결합하여 합성 형용사로 발달하였다. ④ 영어 pedal, pedestrian 등이 이 어근의 후손이다(Chantraine DELG, Frisk GEW)."
      },
      {
        "g": "δῖος",
        "pos": "형용사",
        "lemma": "δῖος, δίη, δῖον",
        "parse": "sg.nom.m.",
        "gloss_kr": "눈부신",
        "gloss_en": "divine",
        "syntax": "[DP [AP δῖος] [N' Ἀχιλλεύς]] 구에서 명사를 꾸미는 수식어구이며, 통사적으로 주격 남성 단수 형태로서 앞서 나오는 ποδάρκης와 병렬적으로 아킬레우스를 한정한다.",
        "background": "호메로스 서사시에서 영웅들에게 붙여지는 전통적 수식어이다. 문자 그대로는 '신과 같은' 뜻으로, 아킬레우스의 반신반인적 혈통과 고귀함을 강조한다.",
        "etymology": "① PIE 어근 *dyeu- ('하늘, 빛나다, 신')에서 유래하며, 제우스와 어원이 같다(Beekes EDG). ② 산스크리트어 dyu- ('하늘, 빛'), 라틴어 deus ('신')와 동계이다. ③ PIE 신성 개념을 나타내는 어근이 형용사 접미사와 결합하였다. ④ 영어 Zeus, divine, deity 등이 모두 이 어근에서 유래한다(Chantraine DELG)."
      },
      {
        "g": "Ἀχιλλεύς:",
        "pos": "명사(고유)",
        "lemma": "Ἀχιλλεύς, Ἀχιλῆος(호메로스式 속격), ὁ",
        "parse": "sg.nom.m.",
        "gloss_kr": "아킬레우스",
        "gloss_en": "Achilles",
        "syntax": "문장의 주어로서 LFG AVM [PRED 'Ἀχιλλεύς', PERS 3, NUM sg, CASE nom]으로 표시되며, 동사 προσέειπε의 행위자를 통사적으로 지배한다.",
        "background": "일리아스의 주인공이자 펠레우스와 테티스의 아들이다. 이 대목에서 그는 원수인 프리아모스의 방문을 받아들이고 자비와 환대를 베푸는 극적인 성숙을 보여준다.",
        "etymology": "① 어원은 명확하지 않으며, 선그리스어 기층에서 유래했을 가능성이 높다고 Beekes(EDG)는 지적한다. ② 다른 인도유럽어족에 확실한 동계어가 없다. ③ 그리스어 음운 체계에 동화되면서 영웅 이름으로 정착하였다. ④ 현대 서구권에서 고유명사 Achilles 및 해부학적 명칭으로 살아남는다(Frisk GEW)."
      }
    ]
  },
  {
    "ref": "Iliad 24.668",
    "trans": "“그대여, 노인 프리아모스여, 그대가 요구하는 대로 이 일들도 그렇게 이루어질 것이요:",
    "words": [
      {
        "g": "ἔσται",
        "pos": "동사",
        "lemma": "εἰμί",
        "principalParts": "εἰμί – ἔσομαι – (미상) – (미상) – (미상) – (미상)",
        "parse": "3rd.sg.fut.ind.mid.",
        "gloss_kr": "이루어질 것이다",
        "gloss_en": "will be",
        "syntax": "LFG AVM에서 [PRED 'εἰμί<SUBJ,OBL>', TENSE fut, VOICE mid, SUBJ [PRED 'ταῦτα', NUM pl, CASE nom]]로 분석된다. 복수 주어 neuter plural ταῦτα가 3인칭 단수 동사와 호응하는 그리스어 통사 규칙을 따른다.",
        "background": "아킬레우스가 프리아모스의 요구를 전면적으로 수락하는 확언의 발언이다. 미래시제를 사용하여 신뢰성 있는 약속을 강조한다.",
        "etymology": "① PIE 어근 *h₁es- ('있다, 존재하다')에서 유래하며, 미래형 중동태 어미가 결합하였다(Beekes EDG). ② 산스크리트어 ásti ('있다'), 라틴어 est, 영어 is 와 동계이다. ③ PIE 코퓰라 동사 체계에서 미래형이 중동태 형태로 분화하였다. ④ 영어 is, be 등이 모두 이 어근의 후손이다(Chantraine DELG)."
      },
      {
        "g": "τοι",
        "pos": "대명사",
        "lemma": "σύ (여격) / τοι",
        "parse": "dat.sg.",
        "gloss_kr": "너에게",
        "gloss_en": "to you",
        "syntax": "HPSG 자질구조상 [HEAD clitic, CASE dat]이며, 문장의 두 번째 위치에 오는 전접어이다. LFG f-구조에서 이익여격 OBL_TO 역할을 수행한다.",
        "background": "화자가 청자에게 친근함 혹은 확실성을 부여할 때 쓰는 호메로스 구어체적 표현이다. 프리아모스를 향한 아킬레우스의 태도가 변했음을 보여준다.",
        "etymology": "① PIE 2인칭 대명사 여격 재구형 *tebhyo- 또는 지시/소사 기원 어근에서 유래한다(Beekes EDG). ② 산스크리트어 túbhyam ('너에게'), 라틴어 tibi 와 동계이다. ③ 그리스어에서 전접어화되면서 어휘적 독립성을 잃었다(Chantraine DELG)."
      },
      {
        "g": "καὶ",
        "pos": "접속사",
        "lemma": "καί",
        "parse": "coord.conj.",
        "gloss_kr": "또한, 심지어",
        "gloss_en": "also, even",
        "syntax": "통사적으로 [AP [ADV καί] [AP ταῦτα]] 구조에서 한정적 부사 혹은 [CP 절1 [C' καί 절2]]의 대등 접속사로 기능한다.",
        "background": "앞선 대화 내용과 프리아모스의 청원을 유기적으로 연결하며, 청원의 여러 조건들이 모두 이행될 것임을 강조하는 수사적 기능을 한다.",
        "etymology": "① PIE 기원이 명확하지 않으며, 선그리스어 기층이거나 고유의 축약형일 가능성이 제기된다(Beekes EDG). ② 부사와 접속사의 기능을 동시에 수행하는 문법화 과정을 거쳤다. ③ 현대 그리스어에서도 가장 빈번하게 쓰이는 접속사/부사로 남아 있다(Frisk GEW)."
      },
      {
        "g": "ταῦτα",
        "pos": "대명사",
        "lemma": "οὗτος, αὕτη, τοῦτο",
        "parse": "pl.nom.n.",
        "gloss_kr": "이 일들이",
        "gloss_en": "these things",
        "syntax": "문장의 주어로서 LFG AVM [PRED 'οὗτος', NUM pl, CASE nom, GEND neut]이다. 앞서 프리아모스가 요구한 장례 기간 및 휴전 조건들을 가리키는 지시대명사이다.",
        "background": "프리아모스가 제시한 구체적인 요구 조건들을 총칭하는 지시어이다. 아킬레우스가 이를 명시적으로 반복함으로써 약속의 구속력을 높인다.",
        "etymology": "① PIE 지시 대명사 어근 *so-, *to-에 강조형 접미사가 결합한 형태이다(Beekes EDG). ② 산스크리트어 tád, 영어 that 과 동계이다. ③ 그리스어 지시사 체계에서 원칭/근칭을 구분하는 복합 지시 대명사로 발달하였다(Chantraine DELG)."
      },
      {
        "g": "γέρον",
        "pos": "명사",
        "lemma": "γέρων, γέροντος, ὁ",
        "parse": "voc.sg.m.",
        "gloss_kr": "노인이여",
        "gloss_en": "old man",
        "syntax": "문장의 호격 구문으로서 LFG f-구조상 [VOC [PRED 'γέρων', CASE voc]]로 표시되며, 주절과 통사적으로 분리된 독립 어구이다.",
        "background": "나이 많은 이에 대한 호칭이자, 고대 그리스 사회에서 장로로서의 지위를 인정하는 존칭이다. 프리아모스를 향한 아킬레우스의 연민과 예우를 담고 있다.",
        "etymology": "① PIE 어근 *gerh₂- ('늙다')에 능동 분사 접미사 *-ont- 가 결합한 형태이다(Beekes EDG). ② 산스크리트어 jaránt- ('늙은이')와 동계이다. ③ 영어 gerontology 등의 어근으로 남아 있다(Chantraine DELG, Frisk GEW)."
      },
      {
        "g": "Πρίαμ᾽",
        "pos": "명사(고유)",
        "lemma": "Πρίαμος, Πριάμου, ὁ",
        "parse": "voc.sg.m.",
        "gloss_kr": "프리아모스여",
        "gloss_en": "Priam",
        "syntax": "호격 구문으로서 앞선 γέρον과 동격을 이루는 고유명사 호칭이다. 통사적으로 [VOC [DP Πρίαμος]] 구조를 형성한다.",
        "background": "트로이아의 마지막 왕이자 헥토르의 아버지이다. 적진의 장막 속으로 홀로 찾아와 적장의 무릎을 붙잡고 애원하는 비극적 영웅의 정점이다.",
        "etymology": "① 비그리스어/아시아계 기층 어류로, 히타이트 기록의 Pariyama-와 연관성이 제기된다(Beekes EDG). ② 트로이아 지역의 언어적 기원에서 그리스어 음운에 맞게 동화되었다. ③ 서구권에서 고유명사 Priam으로 사용된다(Chantraine DELG)."
      },
      {
        "g": "ὡς",
        "pos": "접속사",
        "lemma": "ὡς",
        "parse": "conj.",
        "gloss_kr": "~하는 대로",
        "gloss_en": "as",
        "syntax": "종속절을 이끄는 접속사로서 LFG AVM [COMP [PRED 'κελεύω<SUBJ,OBJ>', TYPE advcl]]를 구성한다. 주절과 종속절 사이의 양태적 상관관계를 매개한다.",
        "background": "청자가 요구한 바와 행위자의 실행이 정확히 일치함을 나타내는 표현이다. 아킬레우스가 프리아모스의 주권을 존중하고 청을 수용하겠다는 의지이다.",
        "etymology": "① PIE 지시/관계 대명사 어근의 파생형에서 유래하였다(Beekes EDG). ② 산스크리트어 yáthā, 라틴어 ut 과 기능적 동계이다. ③ 그리스어에서 관계부사 및 양태 접속사로 문법화되었다(Chantraine DELG, LSJ)."
      },
      {
        "g": "σὺ",
        "pos": "대명사",
        "lemma": "σύ",
        "parse": "sg.nom.m.",
        "gloss_kr": "그대가",
        "gloss_en": "you",
        "syntax": "종속절의 주어로서 LFG AVM [PRED 'σú', PERS 2, NUM sg, CASE nom]이다. 생성문법상 pro-drop 언어에서 주어가 표면화된 것은 대조적 초점을 나타낸다.",
        "background": "프리아모스 자신이 직접 명령하고 청원했음을 강조함으로써, 아킬레우스가 임의로 결정하는 것이 아님을 밝힌다.",
        "etymology": "① PIE 2인칭 단수 주격 재구형 *túh₁ 에서 유래한다(Beekes EDG). ② 산스크리트어 tvám, 라틴어 tū, 영어 thou 와 동계이다. ③ 인도유럽어족 전반에 걸쳐 가장 보존률이 높은 대명사 중 하나이다(Chantraine DELG, Frisk GEW)."
      },
      {
        "g": "κελεύεις:",
        "pos": "동사",
        "lemma": "κελεύω",
        "principalParts": "κελεύω – κελεύσω – ἐκέλευσα – κεκέλευκα – κεκέλευσμαι – ἐκελεύσθην",
        "parse": "2nd.sg.pres.ind.act.",
        "gloss_kr": "요구한다",
        "gloss_en": "command",
        "syntax": "LFG AVM에서 [PRED 'κελεύω<SUBJ,COMP>', TENSE pres, SUBJ [PRED 'σύ', PERS 2, NUM sg, CASE nom]]로 분석된다. 2인칭 단수 현재 직설법으로서 프리아모스의 청원 행위를 지칭한다.",
        "background": "정중한 부탁이나 간청을 뜻하며, 여기서는 프리아모스가 아킬레우스에게 장례 휴전과 시신 인도를 요구한 행위를 가리킨다.",
        "etymology": "① PIE 어근 *kelH- ('서두르다, 재촉하다')에서 유래한 것으로 추정된다(Beekes EDG). ② 그리스어 내부에서 '재촉하다'에서 '명하다, 요구하다'로 의미 전이를 겪었다. ③ 영어 celerity 등의 어근과 어원적 연관성을 가진다(Chantraine DELG, LSJ)."
      }
    ]
  },
  {
    "ref": "Iliad 24.669",
    "trans": "전쟁을 그대가 요구하는 그 시간만큼 멈추겠소.",
    "words": [
      {
        "g": "σχήσω",
        "pos": "동사",
        "lemma": "ἔχω",
        "principalParts": "ἔχω – ἕξω – ἔσχον – ἔσχηκα – ἔσχημαι – ἐσχέθην",
        "parse": "1st.sg.fut.ind.act.",
        "gloss_kr": "멈출 것이다",
        "gloss_en": "will hold back",
        "syntax": "LFG AVM에서 [PRED 'ἔχω<SUBJ,OBJ>', TENSE fut, VOICE act, SUBJ [PRED 'pro', PERS 1, NUM sg, CASE nom], OBJ [PRED 'πόλεμον', CASE acc]]로 분석된다. 1인칭 단수 미래형으로 아킬레우스 자신이 직접 전쟁을 중단시키겠다는 의지이다.",
        "background": "아킬레우스가 트로이아측과의 전투를 일시적으로 중단하겠다는 핵심 약속이다. 헥토르의 장례를 치를 동안 그리스군의 공격을 멈추겠다는 군사적 결정이다.",
        "etymology": "① PIE 어근 *segh- ('가지다, 억누르다')에서 유래하며, 미래형에서 s-어간 형태를 취한다(Beekes EDG). ② 산스크리트어 sáhate, 고대 고지 독일어 sigo 와 동계이다. ③ 현재형과 미래/과거형이 분화하였다. ④ 영어 epoch, scheme 등이 이 어근에서 유래한다(Chantraine DELG, Frisk GEW)."
      },
      {
        "g": "γὰρ",
        "pos": "접속사",
        "lemma": "γάρ",
        "parse": "coord.conj.",
        "gloss_kr": "왜냐하면",
        "gloss_en": "for",
        "syntax": "후치사적 인과 접속사로서 HPSG 자질구조상 [HEAD coord, TYPE causal]이다. 앞선 약속에 대한 논리적 근거와 구체적 내용을 설명하는 절을 도입한다.",
        "background": "아킬레우스가 앞서 선언한 일반적 수락에 이어 구체적으로 어떤 조치를 취할 것인지를 뒷받침하는 설명적 서사 연결어이다.",
        "etymology": "① PIE 기원이 불분명하며, 독립된 기층 소사에서 유래한 것으로 추정된다(Beekes EDG). ② 그리스어 문법화 과정에서 인과 관계를 나타내는 대표적 후치 불변화사로 정착하였다(Chantraine DELG, LSJ)."
      },
      {
        "g": "πόλεμον",
        "pos": "명사",
        "lemma": "πόλεμος, πολέμου, ὁ",
        "parse": "sg.acc.m.",
        "gloss_kr": "전쟁을",
        "gloss_en": "war",
        "syntax": "동사 σχήσω의 직접 목적어로서 LFG AVM [PRED 'πόλεμος', CASE acc]이다. c-구조상 [VP t_v [DP πόλεμον]] 위치를 점한다.",
        "background": "일리아스의 배경이자 아킬레우스가 지배하는 영역인 '전쟁'을 뜻한다. 아킬레우스가 전쟁을 멈추겠다고 선언하는 것은 신화적 질서의 일시적 정지를 의미한다.",
        "etymology": "① 선그리스어 기층 어휘일 가능성이 높다고 Beekes(EDG)는 설명한다. ② 인도유럽어족 내 확실한 동계어는 없다. ③ 그리스어 내부에서 명사 파생 접미사와 결합하여 고착되었다. ④ 영어 polemic 등의 어근과 연관된다(Frisk GEW)."
      },
      {
        "g": "τόσσον",
        "pos": "형용사",
        "lemma": "τόσσος, τόσση, τόσσον",
        "parse": "sg.acc.n.",
        "gloss_kr": "그만큼의",
        "gloss_en": "so much",
        "syntax": "시간의 양을 나타내는 부사적 목적어로서 LFG AVM [ADJUNCT [PRED 'τόσσος', CASE acc, NUM sg, GEND neut]]로 분석된다. 뒤따르는 ὅσσον과 상관구문을 이룬다.",
        "background": "프리아모스가 요구한 장례 기간만큼 정확히 전쟁을 멈추겠다는 수량적 한계를 설정하는 표현이다.",
        "etymology": "① PIE 지시 대명사 어근 *to-에 양을 나타내는 접미사가 결합한 형태이다(Beekes EDG). ② 산스크리트어 távant- 와 동계이다. ③ 그리스어에서 양적 규모나 기간을 지시하는 대명형 형용사로 발달하였다(Chantraine DELG, LSJ)."
      },
      {
        "g": "χρόνον",
        "pos": "명사",
        "lemma": "χρόνος, χρόνου, ὁ",
        "parse": "sg.acc.m.",
        "gloss_kr": "시간을",
        "gloss_en": "time",
        "syntax": "부사적 대격으로서 LFG AVM [OBL_TIME [PRED 'χρόνος', CASE acc]]로 분석된다. 통사적으로 전쟁을 멈추는 지속 시간을 한정한다.",
        "background": "고대 그리스어에서 객관적이고 지속적인 시간 흐름을 뜻하는 명사이다. 헥토르의 장례를 위해 반드시 확보되어야 하는 물리적 시간의 소중함을 나타낸다.",
        "etymology": "① Beekes(EDG)는 선그리스어 기층 혹은 불확실한 어원으로 분류한다. ② 다른 인도유럽어에 명확한 동계어가 논쟁적이다. ③ 그리스어에서 시간 단위를 뜻하는 표준 명사로 정착하였다. ④ 영어 chronology, chronic 등의 어근이다(Chantraine DELG, Frisk GEW)."
      },
      {
        "g": "ὅσσον",
        "pos": "대명사",
        "lemma": "ὅσος, ὅση, ὅσον",
        "parse": "sg.acc.n.",
        "gloss_kr": "~만큼",
        "gloss_en": "as much as",
        "syntax": "관계절의 목적어이자 상관대명사로서 LFG AVM [COMP [PRED 'ἄνωγας<SUBJ,OBJ>', REL [PRED 'ὅσος', CASE acc]]]로 분석된다. 앞선 τόσσον과 호응하여 상관 구문을 형성한다.",
        "background": "프리아모스가 요구한 정확한 한도와 양을 지시하며, 아킬레우스가 자의적으로 기간을 정하는 것이 아니라 상대방의 청구에 맞추고 있음을 보여준다.",
        "etymology": "① PIE 상대/관계 대명사 어근 *y-에 수량 접미사가 결합한 형태이다(Beekes EDG). ② 산스크리트어 yávant- 과 동계이다. ③ 그리스어에서 크기, 양, 기간을 뜻하는 관계형 형용사로 발달하였다(Chantraine DELG, LSJ)."
      },
      {
        "g": "ἄνωγας.",
        "pos": "동사",
        "lemma": "ἄνωγα",
        "principalParts": "ἄνωγα – (미상) – ἠνωγον – (미상) – (미상) – (미상)",
        "parse": "2nd.sg.perf.ind.act.",
        "gloss_kr": "네가 요구한다",
        "gloss_en": "you command",
        "syntax": "LFG AVM에서 [PRED 'ἄνωγα<SUBJ,OBJ>', TENSE perf, ASPECT stative, SUBJ [PRED 'pro', PERS 2, NUM sg, CASE nom], OBJ [PRED 'ὅσσον', CASE acc]]로 분석된다. 형태는 완료이나 의미는 현재인 완료거 동사이다.",
        "background": "아킬레우스가 프리아모스의 발언을 존중하며 그가 명한 바를 그대로 준수하겠다는 약속의 정점을 찍는다. 완고한 전사였던 아킬레우스가 적왕의 요구에 승복을 표한다.",
        "etymology": "① PIE 어근 *h₂negh- ('명하다')에서 유래한 것으로 추정되며, 중복사 흔적을 지닌다(Beekes EDG). ② 형태론적으로 완료형 어간이 현재적 의미를 띠는 특수한 상태동사로 고착되었다. ③ 현대 그리스어에는 직접 남아 있지 않다(Chantraine DELG, Frisk GEW)."
      }
    ]
  },
  {
    "ref": "Iliad 24.670",
    "trans": "이렇게 말하고는 그는 노인의 손목을 손으로",
    "words": [
      {
        "g": "ὣς",
        "pos": "부사",
        "lemma": "ὡς / ὧς",
        "parse": "adv.",
        "gloss_kr": "이렇게",
        "gloss_en": "thus",
        "syntax": "[VP [ADV ὣς] ... ] 구조에서 앞서 아킬레우스가 한 발언 전체를 수식하는 양태 부사이다. LFG에서 ADJUNCT 역할을 한다.",
        "background": "시적 서사에서 대사가 끝난 직후 곧바로 인물의 물리적 행동이나 제스처로 전환되는 호메로스 서사의 전형적인 전이구이다.",
        "etymology": "① PIE 지시 대명사 어근 *so-, *to-의 부사적 파생형이다(Beekes EDG). ② 산스크리트어 táthā, 라틴어 sic 와 기능적 동계이다. ③ 그리스어에서 양태와 지시를 나타내는 부사로 고착되었다(Chantraine DELG, LSJ)."
      },
      {
        "g": "ἄρα",
        "pos": "소사",
        "lemma": "ἄρα",
        "parse": "coord.conj.",
        "gloss_kr": "과연",
        "gloss_en": "then",
        "syntax": "HPSG 자질구조상 [HEAD particle, TYPE inferential]이며, 문장의 두 번째 위치에 오는 전접어이다. 앞선 발언과 이어지는 행동 사이의 인과적 필연성을 나타낸다.",
        "background": "서사시에서 인물의 말이 끝나고 즉각적인 행동이 뒤따를 때 인과적 연쇄를 강조하기 위해 쓰이는 필수적 수사 입자이다.",
        "etymology": "① PIE 기원이 불확실하며, 기층 소사에서 유래한 것으로 추정된다(Beekes EDG). ② 그리스어에서 서사적 인과관계를 나타내는 대표적 입자로 문법화되었다(Chantraine DELG, Frisk GEW)."
      },
      {
        "g": "φωνήσας",
        "pos": "분사",
        "lemma": "φωνέω",
        "principalParts": "φωνέω – φωνήσω – ἐφώνησα – πεφώνηκα – πεφώνημαι – ἐφωνήθην",
        "parse": "aor.act.part.sg.nom.m.",
        "gloss_kr": "말하고 나서",
        "gloss_en": "having spoken",
        "syntax": "주어를 수식하는 부대 상황 분사로서 LFG AVM [ADJUNCT [PRED 'φωνέω<SUBJ>', TENSE past, ASPECT aor, VOICE act, CASE nom, GEND m, NUM sg]]로 분석된다.",
        "background": "인물이 말을 마친 직후 곧바로 신체적 행동으로 옮겨가는 호메로스 서사의 신체적·심리적 연속성을 보여주는 분사 표현이다.",
        "etymology": "① 명사 φωνή ('목소리')에서 파생된 동사이며, 명사의 어원은 PIE *bʰeh₂- ('말하다')와 연결된다(Beekes EDG). ② 산스크리트어 bhāṣate, 라틴어 fārī 와 동계이다. ③ 영어 telephone 등의 어근이다(Chantraine DELG, LSJ)."
      },
      {
        "g": "ἐπὶ",
        "pos": "전치사",
        "lemma": "ἐπί",
        "parse": "prep.+dat.",
        "gloss_kr": "~에",
        "gloss_en": "upon",
        "syntax": "여격 지배 전치사로서 LFG AVM [OBL [PRED 'ἐπί', CASE dat], OBJ [PRED 'καρπῷ', CASE dat]]이다. 통사적으로 접촉의 지점을 나타낸다.",
        "background": "아킬레우스가 프리아모스를 안심시키기 위해 취하는 신체적 접촉의 공간적 배경을 설정한다. 적대 관계였던 두 영웅 사이의 극적인 화해를 상징한다.",
        "etymology": "① PIE 어근 *epi- ('~ 위에')에서 유래한다(Beekes EDG). ② 산스크리트어 ápi, 리투아니아어 apė 와 동계이다. ③ 영어 epilogue, epidermis 등의 접두사로 널리 쓰인다(Chantraine DELG, Frisk GEW)."
      },
      {
        "g": "καρπῷ",
        "pos": "명사",
        "lemma": "καρπός, καρποῦ, ὁ",
        "parse": "sg.dat.m.",
        "gloss_kr": "손목에",
        "gloss_en": "at the wrist",
        "syntax": "전치사 ἐπί의 지배를 받는 여격 목적어로서 LFG AVM [OBJ [PRED 'καρπός', CASE dat, NUM sg]]이다. 통사적으로 접촉의 대상이자 위치를 한정한다.",
        "background": "아킬레우스가 프리아모스의 손목을 잡는 행위는 고대 그리스 문화에서 청원자와 보호자 사이의 신뢰와 안전을 보장하는 엄숙한 제스처이다.",
        "etymology": "① 신체 부위로서의 '손목'은 선그리스어 기층 혹은 독자적 어원으로 분류된다(Beekes EDG). ② 그리스어 내부에서 손목 부위를 가리키는 신체 명사로 정착하였다. ③ 현대 그리스어에서도 καρπός는 손목의 뜻을 가진다(Chantraine DELG, Frisk GEW)."
      },
      {
        "g": "χείρα",
        "pos": "명사",
        "lemma": "χείρ, χειρός, ἡ",
        "parse": "sg.acc.f.",
        "gloss_kr": "손을",
        "gloss_en": "hand",
        "syntax": "동사 ἔλλαβε의 직접 목적어로서 LFG AVM [PRED 'χείρ', CASE acc, NUM sg]이다. c-구조상 [VP t_v [DP χεῖρα]] 위치를 점한다.",
        "background": "프리아모스의 오른손을 붙잡음으로써 적대적 긴장을 해소하고 환대와 보호의 맹약을 맺는 신체적 의례의 핵심 행위이다.",
        "etymology": "① PIE 재구형 *ǵʰesr- ('손')에서 유래한다(Beekes EDG). ② 산스크리트어 hásta-, 아베스타어 zasta- 와 동계이다. ③ 영어 surgeon 등의 어근으로 남아 있다(Chantraine DELG, Frisk GEW)."
      },
      {
        "g": "γέροντος",
        "pos": "명사",
        "lemma": "γέρων, γέροντος, ὁ",
        "parse": "sg.gen.m.",
        "gloss_kr": "노인의",
        "gloss_en": "of the old man",
        "syntax": "소유격 명사로서 LFG AVM [ADJUNCT [PRED 'γέρων', CASE gen, NUM sg]] 또는 명사구 내 소유격 수식어를 구성한다.",
        "background": "노인 프리아모스의 신체적 취약성과 적진에 홀로 찾아온 그의 처연한 신분을 다시 한 번 강조하여, 아킬레우스의 보호 행위를 부각한다.",
        "etymology": "① PIE 어근 *gerh₂- ('늙다')와 능동 분사 접미사에서 유래한다(Beekes EDG). ② 산스크리트어 jaránt- 와 동계이다. ③ 영어 gerontology 등의 어근이다(Chantraine DELG, Frisk GEW)."
      }
    ]
  },
  {
    "ref": "Iliad 24.671",
    "trans": "오른손을 꼭 잡았다, 혹시라도 그가 마음속으로 두려워할까 봐.",
    "words": [
      {
        "g": "ἔλλαβε",
        "pos": "동사",
        "lemma": "λαμβάνω",
        "principalParts": "λαμβάνω – λήψομαι – ἔλαβον – εἴληφα – εἴλημμαι – ἐλήφθην",
        "parse": "3rd.sg.aor.ind.act.",
        "gloss_kr": "붙잡았다",
        "gloss_en": "took",
        "syntax": "주절의 술어로서 LFG AVM [PRED 'λαμβάνω<SUBJ,OBJ>', TENSE past, ASPECT aor, VOICE act, SUBJ [PRED 'Ἀχιλλεύς', CASE nom], OBJ [PRED 'χείρα', CASE acc]]로 분석된다.",
        "background": "아킬레우스가 프리아모스의 손을 잡아당기며 안심시키는 극적인 신체적 제스처로, 적장과 적왕 사이의 긴장이 인간적 연민으로 전환되는 순간이다.",
        "etymology": "① PIE 어근 *lagʷ- ('가볍다, 잡다') 또는 비인도유럽어 기원설이 존재한다(Beekes EDG). ② 호메로스어에서 단축형 aorist로 빈번히 쓰인다. ③ 영어 lemma, epilepsy 등의 어근이다(Chantraine DELG, Frisk GEW)."
      },
      {
        "g": "δεξιτερήν,",
        "pos": "형용사",
        "lemma": "δεξιός, δεξιά, δεξιόν",
        "parse": "sg.acc.f.",
        "gloss_kr": "오른손을",
        "gloss_en": "right hand",
        "syntax": "생략된 명사 χεῖρα를 수식하거나 그 자체로 대상을 지칭하는 형용사적 목적어로서 LFG AVM [OBJ [PRED 'δεξιτερός', CASE acc, NUM sg, GEND f]]이다.",
        "background": "고대 세계 전반에서 '오른손'은 무기를 들지 않은 평화와 신의를 상징한다. 아킬레우스가 프리아모스의 오른손을 잡는 것은 안전을 보장하는 최고의 보증이다.",
        "etymology": "① PIE 어근 *deks- ('오른쪽, 유리한')에 수식 접미사가 결합한 형태이다(Beekes EDG). ② 산스크리트어 dákṣiṇa-, 라틴어 dexter 와 동계이다. ③ 영어 dexterous 등의 어근이다(Chantraine DELG, Frisk GEW)."
      },
      {
        "g": "μή",
        "pos": "접속사",
        "lemma": "μή",
        "parse": "conj.",
        "gloss_kr": "~할까 봐",
        "gloss_en": "lest",
        "syntax": "두려움이나 경고를 나타내는 종속절을 이끄는 접속사로서 LFG AVM [COMP [PRED 'δεῖδω<SUBJ>', TYPE adverbs-clause, POLARITY neg]]로 분석된다.",
        "background": "프리아모스가 적진 한복판에서 아킬레우스와 마주하며 느낄 수 있는 극도의 공포와 불안감을 아킬레우스가 세심하게 배려하고 차단하려는 심리적 동기를 설명한다.",
        "etymology": "① PIE 부정 소상 *meh₁ 에서 유래한다(Beekes EDG). ② 산스크리트어 mā, 고대 교회 슬라브어 mĭ 와 동계이다. ③ 현대 그리스어에서도 부정어로 직접 이어져 사용된다(Chantraine DELG, LSJ)."
      },
      {
        "g": "πως",
        "pos": "부사",
        "lemma": "πώς",
        "parse": "adv.",
        "gloss_kr": "혹시",
        "gloss_en": "somehow",
        "syntax": "종속절 내부에서 양태를 한정하는 약한 부정 부사로서 LFG AVM [ADJUNCT [PRED 'πως', POLARITY indef]]이다.",
        "background": "프리아모스가 혹시라도 마음속으로 공포에 질려 해를 입을까 염려하는 아킬레우스의 섬세한 심리적 통찰을 보여주는 부사적 요소이다.",
        "etymology": "① PIE 의문/부정 대명사 어근 *kʷo-에 양태 접미사가 결합한 형태이다(Beekes EDG). ② 그리스어에서 부정적 양태를 완화하는 전접어 부사로 고착되었다(Chantraine DELG, Frisk GEW)."
      },
      {
        "g": "δεῖσει᾽",
        "pos": "동사",
        "lemma": "δεῖδω",
        "principalParts": "δεῖδω – δείσομαι – ἔδεισα – δέδοικα / δέδια – (미상) – (미상)",
        "parse": "3rd.sg.aor.subj.act.",
        "gloss_kr": "두려워할까 봐",
        "gloss_en": "might fear",
        "syntax": "LFG AVM에서 [PRED 'δεῖδω<SUBJ>', TENSE past/future in subjunctive, ASPECT aor, MOOD subj, VOICE act, SUBJ [PRED 'Πρίαμος', PERS 3, NUM sg, CASE nom]]로 분석된다.",
        "background": "적장의 장막에서 밤을 지새우는 프리아모스가 느낄 수 있는 원초적 공포를 아킬레우스가 미리 예측하고 손을 잡아 안심시키려 했다는 심리적 밀도를 보여준다.",
        "etymology": "① PIE 중복사 어근 *dwei- ('두려워하다')에서 유래한다(Beekes EDG). ② 산스크리트어 dvayá-, 고대 교회 슬라브어 dĭvati 와 동계이다. ③ 영어 dire 등의 어근과 비교된다(Chantraine DELG, Frisk GEW)."
      },
      {
        "g": "ἐνὶ",
        "pos": "전치사",
        "lemma": "ἐν / ἐνί",
        "parse": "prep.+dat.",
        "gloss_kr": "~안에",
        "gloss_en": "in",
        "syntax": "여격 지배 전치사로서 LFG AVM [OBL [PRED 'ἐν', CASE dat], OBJ [PRED 'θυμῷ', CASE dat]]이다. 통사적으로 내재적 공간을 나타낸다.",
        "background": "프리아모스의 물리적 신체가 아니라 내면의 심리적 공간 속에서 일어나는 감정 활동을 지리적 공간처럼 묘사하는 호메로스 특유의 은유적 표현이다.",
        "etymology": "① PIE 어근 *en ('~ 안에')에서 유래한다(Beekes EDG). ② 산스크리트어 ántar, 라틴어 in, 영어 in 과 동계이다. ③ 영어 in, inside 등의 어근이다(Chantraine DELG, Frisk GEW)."
      },
      {
        "g": "θυμῷ.",
        "pos": "명사",
        "lemma": "θυμός, θυμοῦ, ὁ",
        "parse": "sg.dat.m.",
        "gloss_kr": "마음에",
        "gloss_en": "in heart",
        "syntax": "전치사 ἐνί의 지배를 받는 여격 목적어로서 LFG AVM [OBJ [PRED 'θυμός', CASE dat, NUM sg]]이다. 통사적으로 두려움이 머무는 내면의 장소를 한정한다.",
        "background": "호메로스 심리학에서 감정, 의지, 생명력이 거주하는 핵심 장기이자 심리적 중심을 뜻한다. 프리아모스가 적진에서 느낄 수 있는 영혼의 동요를 상징한다.",
        "etymology": "① PIE 어근 *dhuH- ('숨쉬다, 격노하다')에서 유래하며, 생명력과 호흡의 개념과 밀접하다(Beekes EDG). ② 산스크리트어 dhūmá-, 라틴어 fūmus 와 동계이다. ③ 영어 fume 등의 어근이다(Chantraine DELG, Frisk GEW)."
      }
    ]
  },
  {
    "ref": "Iliad 24.672",
    "trans": "그리하여 두 사람은 그곳 집의 현관에서 잠을 청하였다,",
    "words": [
      {
        "g": "οἳ",
        "pos": "대명사",
        "lemma": "ὁ, ἡ, τό",
        "parse": "pl.nom.m.",
        "gloss_kr": "그들은",
        "gloss_en": "they",
        "syntax": "문장의 주어로서 LFG AVM [PRED 'οἱ', PERS 3, NUM pl, CASE nom]이다. 후행하는 μὲν과 결합하여 대조적 주어 구문을 이끈다.",
        "background": "아킬레우스의 장막 내부에서 휴식을 취하게 되는 프리아모스와 그의 충실한 전령 이다이오스의 밤모습을 서술하는 장면의 전환점이다.",
        "etymology": "① PIE 지시 대명사 어근 *so-, *to-의 복수 주격 형태에서 유래한다(Beekes EDG). ② 산스크리트어 tá-, 고대 고지 독일어 der 와 동계이다. ③ 그리스어에서 정관사 및 지시/인칭 대명사로 분화하였다(Chantraine DELG, Frisk GEW)."
      },
      {
        "g": "μὲν",
        "pos": "소사",
        "lemma": "μέν",
        "parse": "coord.conj.",
        "gloss_kr": "한편으로는",
        "gloss_en": "on the one hand",
        "syntax": "대조적 후치 불변화사로서 HPSG 자질구조상 [HEAD particle, TYPE correlative]이다. 후행하는 절의 αὐτάρ와 쌍을 이루어 대조 구조를 형성한다.",
        "background": "프리아모스 일행이 장막 현관에서 잠드는 모습과 아킬레우스가 장막 안쪽 깊은 곳에서 잠드는 모습을 공간적·대조적으로 대비시키는 서사적 장치이다.",
        "etymology": "① PIE 기원이 불분명하며, 강조 소사에서 유래한 것으로 추정된다(Beekes EDG). ② 그리스어 문장에서 대조와 강조를 나타내는 대표적 상관 입자로 정착하였다(Chantraine DELG, LSJ)."
      },
      {
        "g": "ἄρ᾽",
        "pos": "소사",
        "lemma": "ἄρα",
        "parse": "particle",
        "gloss_kr": "과연",
        "gloss_en": "then",
        "syntax": "앞서 언급된 서사 흐름에 따라 자연스럽게 이어지는 행동을 나타내는 전접어 소사로서 LFG AVM [ADJUNCT [PRED 'ἄρα', POLARITY inferential]]이다.",
        "background": "밤이 깊어 두 사신과 왕이 잠자리에 드는 서사적 필연성을 강조하는 호메로스 시구의 전형적 윤문 장치이다.",
        "etymology": "① PIE 기원이 불확실한 서사 소사이다(Beekes EDG). Chantraine(DELG) 항목 참조."
      },
      {
        "g": "ἐν",
        "pos": "전치사",
        "lemma": "ἐν",
        "parse": "prep.+dat.",
        "gloss_kr": "~에",
        "gloss_en": "in",
        "syntax": "여격 지배 전치사로서 LFG AVM [OBL [PRED 'ἐν', CASE dat], OBJ [PRED 'προδόμῳ', CASE dat]]이다. 통사적으로 장막의 현관이라는 장소를 한정한다.",
        "background": "프리아모스가 하룻밤을 머무는 장소인 현관의 공간적 위치를 지정하며, 완전한 은밀함 속이 아닌 경계 부근에서 잠들음을 암시한다.",
        "etymology": "① PIE 어근 *en ('~ 안에')에서 유래한다(Beekes EDG). Chantraine(DELG) 항목 참조."
      },
      {
        "g": "προδόμῳ",
        "pos": "명사",
        "lemma": "πρόδομος, προδόμου, ὁ/ἡ",
        "parse": "sg.dat.m.",
        "gloss_kr": "현관에",
        "gloss_en": "in the porch",
        "syntax": "전치사 ἐν의 지배를 받는 여격 목적어로서 LFG AVM [OBJ [PRED 'πρόδομος', CASE dat, NUM sg]]이다. 통사적으로 숙면의 장소를 한정한다.",
        "background": "미케네 시대 건축 양식 및 호메로스 시대 귀족 가옥의 구조에서 본채로 들어가기 전의 전실을 뜻하며, 손님들이 머무는 전통적 숙소 공간이다.",
        "etymology": "① πρό ('앞에') + δόμος ('집')의 합성어로, 후두음과 어근 결합을 보여준다(Beekes EDG). ② 산스크리트어 dáma-, 라틴어 domus 와 동계이다. ③ 영어 domestic 등의 어근과 연관된다(Chantraine DELG, Frisk GEW)."
      },
      {
        "g": "δόμου",
        "pos": "명사",
        "lemma": "δόμος, δόμου, ὁ",
        "parse": "sg.gen.m.",
        "gloss_kr": "집의",
        "gloss_en": "of the house",
        "syntax": "소유격 명사로서 LFG AVM [ADJUNCT [PRED 'δόμος', CASE gen, NUM sg]] 또는 명사구 내 소유격 수식어를 구성한다.",
        "background": "아킬레우스가 거주하는 임시 장막을 시적으로 거대한 궁전의 집에 빗대어 표현한 장엄한 어휘 선택이다.",
        "etymology": "① PIE 어근 *demh₂- ('집을 짓다')에서 유래한다(Beekes EDG). ② 산스크리트어 dáma-, 라틴어 domus 와 동계이다. ③ 영어 dome 등의 어근이다(Chantraine DELG, Frisk GEW)."
      },
      {
        "g": "αὐτόθι",
        "pos": "부사",
        "lemma": "αὐτόθι",
        "parse": "adv.",
        "gloss_kr": "바로 그곳에서",
        "gloss_en": "right there",
        "syntax": "[VP [ADV αὐτόθι] ... ] 구조에서 잠자는 장소를 구체적으로 지시하는 장소 부사이다. LFG에서 ADJUNCT 역할을 한다.",
        "background": "적진 한복판이라는 위험한 장소이면서도, 아킬레우스의 보호 아래 안전하게 자리 잡은 그 구체적 현장을 시청각적으로 확정한다.",
        "etymology": "① 지시 대명사 어근 *autó-에 장소 부사 접미사 *-thi 가 결합한 형태이다(Beekes EDG). ② 고대 그리스어에서 현장성을 강조하는 지시 부사로 고착되었다(Chantraine DELG, Frisk GEW)."
      },
      {
        "g": "κοιμήσαντο",
        "pos": "동사",
        "lemma": "κοιμάω",
        "principalParts": "κοιμάω – κοιμήσω – ἐκοίμησα – κεκοίμηκα – κεκοίμημαι – ἐκοιμήθην",
        "parse": "3rd.pl.aor.ind.mid.",
        "gloss_kr": "잠자리에 들었다",
        "gloss_en": "slept",
        "syntax": "LFG AVM에서 [PRED 'κοιμάω<SUBJ>', TENSE past, ASPECT aor, VOICE mid, SUBJ [PRED 'οἱ', PERS 3, NUM pl, CASE nom]]로 분석된다. 중동태 형태이다.",
        "background": "비극적인 하루가 지나고 마침내 찾아온 평화로운 휴식의 순간을 묘사하며, 적대자들 간의 일시적 화해가 가져온 안도감을 상징한다.",
        "etymology": "① PIE 어근 *kei- ('눕다, 쉬다')에서 유래한 파생형이다(Beekes EDG). ② 산스크리트어 śéte, 라틴어 cīvis 와 동계이다. ③ 영어 cemetery의 어근이다(Chantraine DELG, Frisk GEW)."
      }
    ]
  },
  {
    "ref": "Iliad 24.673",
    "trans": "전령과 프리아모스는 마음속에 깊은 생각들을 품은 채,",
    "words": [
      {
        "g": "κῆρυξ",
        "pos": "명사",
        "lemma": "κῆρυξ, κήρυκος, ὁ",
        "parse": "sg.nom.m.",
        "gloss_kr": "전령은",
        "gloss_en": "the herald",
        "syntax": "문장의 주어로서 앞서 등장한 οἱ의 구체적 동격을 이루며, LFG AVM [PRED 'κῆρυξ', PERS 3, NUM sg, CASE nom]이다.",
        "background": "프리아모스를 수행하여 적진까지 함께 위험을 무릅쓰고 온 충직한 전령 이다이오스를 가리킨다. 왕과 함께 깨어 있으며 다가올 미래를 염려한다.",
        "etymology": "① 비그리스어/아시아계 기층 어휘이거나 어근 *keh₁-와의 연관성이 논의되나 Beekes(EDG)는 기층 가능성을 높게 본다. ② 그리스어에서 공식 사절과 전령을 뜻하는 전문 명사로 정착하였다. ③ 영어 kerygma 등의 어근이다(Chantraine DELG, Frisk GEW)."
      },
      {
        "g": "καὶ",
        "pos": "접속사",
        "lemma": "καί",
        "parse": "coord.conj.",
        "gloss_kr": "그리고",
        "gloss_en": "and",
        "syntax": "두 주어 명사를 대등하게 연결하는 접속사로서 LFG AVM [CONJ [DP κῆρυξ] [CONJ καί] [DP Πρίαμος]] 구조를 형성한다.",
        "background": "왕과 전령이라는 신분의 차이를 넘어 함께 고난을 겪고 밤을 지새우는 두 동반자의 연대감을 보여준다.",
        "etymology": "① 앞서 다룬 καί의 어원적 설명 참조 (Beekes EDG)."
      },
      {
        "g": "Πρίαμος",
        "pos": "명사(고유)",
        "lemma": "Πρίαμος, Πριάμου, ὁ",
        "parse": "sg.nom.m.",
        "gloss_kr": "프리아모스는",
        "gloss_en": "Priam",
        "syntax": "주어 명사구의 핵심 구성 요소로서 LFG AVM [PRED 'Πρίαμος', CASE nom, NUM sg]이다. 분사 구문의 주체로서 통사적 주어 지위를 가진다.",
        "background": "모든 것을 잃었으나 아들의 시신을 찾아오기 위해 영웅적인 결단을 내린 트로이아의 왕으로서, 잠들지 못하고 깊은 상념에 잠겨 있다.",
        "etymology": "① 비그리스어/아시아계 기층 어류로 히타이트 기록과 연관된다(Beekes EDG). ② 서구권에서 고유명사 Priam으로 사용된다(Chantraine DELG)."
      },
      {
        "g": "πυκινὰ",
        "pos": "형용사",
        "lemma": "πυκινός, πυκινή, πυκινόν",
        "parse": "pl.acc.n.",
        "gloss_kr": "깊은",
        "gloss_en": "deep",
        "syntax": "목적어 명사 μήδε᾽를 수식하는 한정 형용사로서 LFG AVM [OBJ [PRED 'πυκινός', CASE acc, NUM pl, GEND neut]]이다.",
        "background": "단순한 걱정이 아니라 왕국과 가문의 운명, 아들의 장례 등 치밀하고 무거운 생각들이 머릿속을 떠나지 않는 상태를 묘사하는 호메로스적 수식어이다.",
        "etymology": "① PIE 어근 *peu̯k- / *puk- ('두껍게 짓다')에서 유래한다(Beekes EDG). ② 산스크리트어 puṣyati, 리투아니아어 pūstis 와 동계이다. ③ 현대 그리스어 πυκνός로 이어진다(Chantraine DELG, Frisk GEW)."
      },
      {
        "g": "φρεσὶ",
        "pos": "명사",
        "lemma": "φρήν, φρενός, ἡ",
        "parse": "pl.dat.f.",
        "gloss_kr": "마음에",
        "gloss_en": "in their minds",
        "syntax": "처소적 여격으로서 LFG AVM [OBL [PRED 'φρήν', CASE dat, NUM pl]]이다. 통사적으로 생각이 머무는 내면의 장소를 지정한다.",
        "background": "호메로스 심리학에서 지성, 감정, 분별력이 자리 잡고 있는 신체적·영혼적 중심을 뜻한다. 왕으로서의 책임감과 아버지로서의 슬픔이 교차하는 공간이다.",
        "etymology": "① PIE 어근 *gʷhren- ('생각하다')에서 유래한 것으로 추정된다(Beekes EDG). ② 신체 기관에서 지성과 감정의 장소로 의미가 전이되었다. ③ 영어 phrenology 등의 어근이다(Chantraine DELG, Frisk GEW)."
      },
      {
        "g": "μήδε᾽",
        "pos": "명사",
        "lemma": "μῆδος, μήδεος, τό",
        "parse": "pl.acc.n.",
        "gloss_kr": "생각들을",
        "gloss_en": "thoughts",
        "syntax": "분사 ἔχοντες의 직접 목적어로서 LFG AVM [PRED 'μῆδος', CASE acc, NUM pl, GEND neut]이다. c-구조상 [VP t_v [DP πυκινὰ μήδε᾽]] 구문을 이룬다.",
        "background": "국가의 중대사와 개인적 비극 사이에서 왕과 전령이 머릿속으로 끊임없이 굴리고 있는 온갖 정치적·실존적 계획과 염려를 가리킨다.",
        "etymology": "① PIE 어근 *med- ('측정하다, 숙고하다')에서 유래한다(Beekes EDG). ② 산스크리트어 mádati, 라틴어 mederi 와 동계이다. ③ 영어 medical, medicine 등의 어근이다(Chantraine DELG, Frisk GEW)."
      },
      {
        "g": "ἔχοντες,",
        "pos": "분사",
        "lemma": "ἔχω",
        "principalParts": "ἔχω – ἕξω / σχήσω – ἔσχον – ἔσχηκα – ἔσχημαι – ἐσχέθην",
        "parse": "pres.act.part.pl.nom.m.",
        "gloss_kr": "품은 채",
        "gloss_en": "having",
        "syntax": "주어를 수식하는 부대 상황 분사로서 LFG AVM [ADJUNCT [PRED 'ἔχω<SUBJ,OBJ>', TENSE pres, VOICE act, CASE nom, GEND m, NUM pl]]로 분석된다.",
        "background": "육체는 비록 현관에 누워 잠을 청하려 하나, 정신은 결코 편히 쉴 수 없는 비극적 인물들의 내면적 긴장 상태를 극적으로 포착한다.",
        "etymology": "① PIE 어근 *segh- ('가지다, 억누르다')에서 유래한다(Beekes EDG). Chantraine(DELG) 항목 참조."
      }
    ]
  },
  {
    "ref": "Iliad 24.674",
    "trans": "그러나 아킬레우스는 잘 지어진 장막의 가장 깊은 곳에서 잠을 잤다:",
    "words": [
      {
        "g": "αὐτὰρ",
        "pos": "접속사",
        "lemma": "αυτάρ",
        "parse": "coord.conj.",
        "gloss_kr": "그러나",
        "gloss_en": "but",
        "syntax": "대조적 접속사로서 HPSG 자질구조상 [HEAD coord, TYPE adversative]이다. 프리아모스 일행의 상태와 아킬레우스의 상태를 극적으로 대조시키는 통사적 전환 장치이다.",
        "background": "프리아모스 일행이 현관에서 근심 속에 깨어 있는 반면, 아킬레우스는 자신의 장막 가장 깊은 은밀한 곳에서 평온한 휴식을 취한다는 공간적·심리적 대비를 완성한다.",
        "etymology": "① αὐτός ('스스로')에 대조 소사 ἄρ이 결합한 형태이다(Beekes EDG). ② 서사시에서 강한 대조와 장면 전환을 이끄는 접속사로 고착되었다(Chantraine DELG, Frisk GEW)."
      },
      {
        "g": "Ἀχιλλεὺς",
        "pos": "명사(고유)",
        "lemma": "Ἀχιλλεύς, Ἀχιλῆος, ὁ",
        "parse": "sg.nom.m.",
        "gloss_kr": "아킬레우스는",
        "gloss_en": "Achilles",
        "syntax": "대조되는 절의 주어로서 LFG AVM [PRED 'Ἀχιλλεύς', PERS 3, NUM sg, CASE nom]이다. 동사 εὗδε의 행위자로서 통사적 중심이다.",
        "background": "일리아스의 주인공이자 헥토르의 살해자이며, 동시에 프리아모스의 방문을 받아들이고 운명적 화해를 마친 뒤 안식을 취하는 서사의 주체이다.",
        "etymology": "① 어원은 선그리스어 기층에서 유래했을 가능성이 높다고 Beekes(EDG)는 지적한다. ② 현대 서구권에서 고유명사로 살아남는다(Frisk GEW)."
      },
      {
        "g": "εὗδε",
        "pos": "동사",
        "lemma": "εὕδω",
        "principalParts": "εὕδω – εὑδήσω – ηὗδον – (미상) – (미상) – (미상)",
        "parse": "3rd.sg.impf.ind.act.",
        "gloss_kr": "잠자고 있었다",
        "gloss_en": "was sleeping",
        "syntax": "주절의 술어로서 LFG AVM [PRED 'εὕδω<SUBJ>', TENSE past, ASPECT impf, VOICE act, SUBJ [PRED 'Ἀχιλλεύς', PERS 3, NUM sg, CASE nom]]로 분석된다.",
        "background": "모든 분노와 복수의 화신이었던 아킬레우스가 프리아모스와의 만남을 통해 정화를 이룬 뒤 누리는 평화로운 수면은 일리아스 전체에서 가장 감동적인 안식의 장면이다.",
        "etymology": "① PIE 어근 *wes- ('밤을 보내다') 또는 *swed- 에서 유래한다(Beekes EDG). ② 산스크리트어 svápiti, 라틴어 sopor 와 동계이다. ③ 영어 soporific 등의 어근이다(Chantraine DELG, Frisk GEW)."
      },
      {
        "g": "μυχῷ",
        "pos": "명사",
        "lemma": "μυχός, μυχοῦ, ὁ",
        "parse": "sg.dat.m.",
        "gloss_kr": "가장 깊은 곳에",
        "gloss_en": "in the innermost part",
        "syntax": "처소적 여격으로서 LFG AVM [OBL [PRED 'μυχός', CASE dat, NUM sg]]이다. 통사적으로 수면이 이루어지는 장막 내부의 가장 깊숙한 은신처를 지정한다.",
        "background": "외부의 시선과 위험으로부터 완전히 차단된 장막의 가장 깊은 곳을 뜻하며, 아킬레우스가 지닌 신성한 신분과 은밀한 안식처의 신비로움을 강조한다.",
        "etymology": "① PIE 어근 또는 선그리스어 기층 어휘에서 유래한 것으로 추정된다(Beekes EDG). ② 그리스어에서 깊숙한 구석이나 안쪽 공간을 뜻하는 명사로 정착하였다(Chantraine DELG, Frisk GEW)."
      },
      {
        "g": "κλισίης",
        "pos": "명사",
        "lemma": "κλισία, κλισίας, ἡ",
        "parse": "sg.gen.f.",
        "gloss_kr": "장막의",
        "gloss_en": "of the shelter",
        "syntax": "소유격 명사로서 LFG AVM [ADJUNCT [PRED 'κλισία', CASE gen, NUM sg]] 또는 명사구 내 소유격 수식어를 구성한다.",
        "background": "트로이아 원정 기간 동안 그리스 영웅들이 머무는 임시 오막살이이자 군사적 거처인 장막을 가리킨다.",
        "etymology": "① PIE 어근 *kei- ('눕다, 휴식하다')에서 파생된 명사이다(Beekes EDG). ② 산스크리트어 śéte 와 동계이다. ③ 그리스어 독자적 파생 명사로서 고전 문헌에 널리 쓰인다(Chantraine DELG, Frisk GEW)."
      },
      {
        "g": "ἐϋπήκτου:",
        "pos": "형용사",
        "lemma": "ἐϋπήκτος, ἐϋπήκτον",
        "parse": "sg.gen.f.",
        "gloss_kr": "잘 지어진",
        "gloss_en": "well-built",
        "syntax": "명사 κλισίης를 수식하는 합성 형용사로서 LFG AVM [ADJUNCT [PRED 'ἐϋπήκτος', CASE gen, NUM sg, GEND f]]이다.",
        "background": "호메로스 서사시에서 장인들의 솜씨로 튼튼하게 지어진 건축물을 묘사할 때 쓰는 전통적 정형구 수식어이다.",
        "etymology": "① ἐὗ ('잘') + *πηκτός (πηγνύ̄μι '단단히 박다', PIE *peh₂ǵ-)의 합성어이다(Beekes EDG). ② 라틴어 pangere 와 동계이다. ③ 영어 page, pact 등의 어근과 동계적 연관성을 가진다(Chantraine DELG, Frisk GEW)."
      }
    ]
  },
  {
    "ref": "Iliad 24.675",
    "trans": "그리하여 아킬레우스는 잘 지어진 천막의 안쪽 구석에서 잠들었고,",
    "words": [
      {
        "g": "αὐτὰρ",
        "pos": "접속사",
        "lemma": "αὐτάρ",
        "parse": "coord.conj.",
        "gloss_kr": "그러나, 그리고 한편",
        "gloss_en": "but, moreover",
        "syntax": "LFG 관점에서 αὐτάρ는 접속사(COORD)로서 문장 간 대조 관계를 연결한다. c-구조상 [CP [C' αὐτάρ [IP ...]]]의 위치에 투사되며, 후행 절과 선행 절 간의 반의적 혹은 전환적 담화 관계를 수립한다. HPSG 자질구조상 [HEAD conjunction, CONT [RELATION contrast]]로 분석된다.",
        "background": "αὐτάρ는 호메로스 서사시에서 화제 전환이나 대조를 나타낼 때 빈번히 사용되는 접속사다. 여기서는 앞서 올림포스 신들의 회의와 프리아모스의 출발 준비 장면에서 시선을 다시 아킬레우스의 천막 내부로 급격히 전환하는 역할을 한다. 서사적 긴장감을 유지하며 공간적 대비를 부각한다.",
        "etymology": "αὐτάρ는 αὐτίκα('즉시') 및 αὐτός('스스로')와 어원을 공유하는 대명사적 부사/접속사 요소 *h₂ew-에서 발달한 것으로 분석된다. Beekes(EDG)는 이를 토대로 기층 요소보다는 인도유럽어계 지시 어근에서 파생된 것으로 설명한다. 동계어로 고대 아베스타어 auta('그렇게') 등이 거론된다. 의미 전이는 '바로 그곳에서/그와 동시에'에서 대조 접속사로 발전하였다. 현대 그리스어에는 직접 이어지지 않고 고전 시어에 국한된다."
      },
      {
        "g": "Ἀχιλλεὺς",
        "pos": "명사(고유)",
        "lemma": "Ἀχιλλεύς, Ἀχιλῆος(호메로스式 속격), ὁ",
        "parse": "sg.nom.m.",
        "gloss_kr": "아킬레우스",
        "gloss_en": "Achilles",
        "syntax": "LFG 관점에서 Ἀχιλλεύς는 주절의 주어(SUBJ) 기능을 수행하며 [PRED 'εὕδω<SUBJ>', CASE nom, TH-ROLE AGENT] 자질을 갖는다. c-구조상 [IP [DP Ἀχιλλεύς] [I' ...]]의 지시적 주어 위치를 점한다. 생성문법적으로 [TP Ἀχιλλεύςᵢ [T' [VP tᵢ εὗδε]]]와 같이 VP 내에서 주어 위치로 V-to-T 이동 혹은 [Spec, TP]에 위치한다.",
        "background": "Ἀχιλλεύς는 펠레우스와 바다의 여신 테티스의 아들이자 트로이아 전쟁에서 가장 용맹한 그리스군 영웅이다. 이 행에서 그는 죽은 친구 파트로클로스를 애도하며 잠들지 못하다가 마침내 천막 구석에서 깊은 잠에 빠져든 모습을 보여준다. 복수의 화신에서 비극적 인간성으로 이행하는 24권의 중심 인물이다.",
        "etymology": "Ἀχιλλεύς의 어원에 대해 Chantraine(DELG)은 어근 *-λ(ε)υς 접미사와 연관된 선그리스어(Pre-Greek) 기층 고유명사로 분류하며, 인도유럽어 내부의 확실한 자명한 어원을 부정한다. 일설에는 물을 뜻하는 ἄχος 또는 ἄχθος과 관련이 있다는 민간어원이 있으나 학문적으로 거부된다. 고대 그리스 영웅 이름 중 상당수가 선그리스어 기층의 흔적을 지닌다. 현대 그리스어 인명 아킬레아스(Ἀχιλλέας)로 직접 계승되어 널리 쓰인다."
      },
      {
        "g": "εὗδε",
        "pos": "동사",
        "lemma": "εὕδω",
        "principalParts": "εὕδω – εὑδήσω – (미상) – (미상) – (미상) – (미상)",
        "parse": "3rd.sg.impf.ind.act.",
        "gloss_kr": "자고 있었다",
        "gloss_en": "was sleeping",
        "syntax": "LFG 관점에서 εὗδε는 [PRED 'εὕδω<SUBJ>', TENSE past, ASPECT impf, SUBJ [PRED 'Ἀχιλλεύς', CASE nom]]로 형식화된다. c-구조상 [VP V [PP ...]]의 핵을 이루며, 미완료과거(impf) 시상을 통해 배경적 상태의 지속을 나타낸다. 생성문법적으로 [TP Ἀχιλλεύς [T' εὗδε [vP t_v ...]]]의 구조를 가진다.",
        "background": "εὗδε는 영웅이 격렬한 슬픔과 피로 끝에 비로소 잠에 빠져든 평온의 순간을 묘사한다. 앞서 밤새 뒤척이던 아킬레우스가 마침내 잠들었다는 사실은 프리아모스의 방문을 앞둔 서사적 전환점을 예고한다. 호메로스 시구에서 잠은 인간을 위로하는 신성한 힘으로 묘사된다.",
        "etymology": "εὕδω는 PIE 재구형 *swed-('잠자다') 또는 *swes-에서 유래하며, 초기 그리스어에서 비대격 동사로 기능했다. Beekes(EDG)는 동계어로 라틴어 sōdālis('동료')와의 원시적 연관성을 언급하기도 하나 음운론적 난점이 있다. 음운 변화 상 PIE *sw-는 그리스어에서 기식음(rough breathing) 또는 탈락을 겪으나 εὗδω에서는 보존적 양상을 보인다. 현대 그리스어 ὕπνος('잠')와 어원적 친족 관계를 형성한다."
      },
      {
        "g": "μυχῷ",
        "pos": "명사",
        "lemma": "μυχός, τοῦ",
        "parse": "sg.dat.m.",
        "gloss_kr": "구석에, 안쪽 깊은 곳에",
        "gloss_en": "in the innermost recess",
        "syntax": "LFG 관점에서 μυχῷ는 처소 부사어(OBL_LOC)로서 [PRED 'μυχός', CASE dat, θ-ROLE LOCATION] 자질을 지닌다. 전치사 없이 처소격(dative of location)으로 지배되며, c-구조상 [PP [P ø] [DP μυχῷ]] 형태의 구를 형성한다. 공간적 깊이와 은폐성을 나타내는 통사적 표지이다.",
        "background": "μυχός는 건물의 가장 깊숙하고 안전한 곳을 뜻한다. 아킬레우스가 천막의 가장 구석진 곳에 누워 있다는 묘사는 그의 내밀한 사적 공간과 방어적 태도를 강조하며, 왕 프리아모스가 그 은밀한 공간으로 침투해 들어오는 서사적 극적 긴장을 고조시킨다.",
        "etymology": "μυχός는 PIE 어근 *mewk-('미끄러지다, 감싸다') 또는 울타리가 쳐진 공간을 뜻하는 어근에서 유래한 것으로 추정된다. Frisk(GEW)는 어원의 불확실성을 지적하며 선그리스어 기층 어휘일 가능성을 배제하지 않는다. 어간의 모음 교체와 명사 파생 과정에서 그리스어 고유의 접미사 *-ó-가 결합했다. 현대 그리스어에는 직접적인 명사형으로 남아 있지 않고 방언이나 시적 표현에 잔존한다."
      },
      {
        "g": "κλισίης",
        "pos": "명사",
        "lemma": "κλισία, τῆς",
        "parse": "sg.gen.f.",
        "gloss_kr": "천막의, 진영 숙소의",
        "gloss_en": "of the hut/tent",
        "syntax": "LFG 관점에서 κλισίης는 명사구 내 소유격 수식어(SPEC 또는 ADJUNCT)로서 [PRED 'κλισία', CASE gen, θ-ROLE POSSESSOR]로 분석된다. c-구조상 [NP [DP μυχῷ] [NP κλισίης]]의 소유격 지배 관계를 이룬다. 명사 μυχός가 요구하는 영득격(genitive of possession)을 통사적으로 충족한다.",
        "background": "κλισία는 트로이아 원정 기간 동안 그리스 군사들이 머물렀던 임시 숙소이자 천막을 가리킨다. 이곳은 아킬레우스의 사적 권력이 행사되는 공간이며, 헤르메스의 안내로 프리아모스가 찾아오는 종국적 무대다.",
        "etymology": "κλισίης는 동사 κλίνω('기대다, 눕다')의 어근 *klei-에서 파생된 명사다. Chantraine(DELG)에 따르면 PIE *klei-('경사지다, 눕다')에 명사형 접미사가 결합하여 '기대어 쉬는 곳'이라는 뜻을 획득했다. 동계어로 라틴어 clīnāre('기대다'), 영어 lean 등이 있다. 음운론적으로 소멸된 와우음/후두음의 흔적이 어근 내에 반영되어 있다. 현대 그리스어 κλίνη('침대')와 어원을 같이 한다."
      },
      {
        "g": "ἐϋπήκτου",
        "pos": "형용사",
        "lemma": "ἐϋπηκτός, ἐϋπηκτόν",
        "parse": "sg.gen.f.",
        "gloss_kr": "잘 지어진, 단단히 조립된",
        "gloss_en": "well-built, well-joined",
        "syntax": "LFG 관점에서 ἐϋπήκτου는 명사 κλισίης를 수식하는 형용사로서 [PRED 'ἐϋπηκτός', CASE gen, NUM sg, GEND f] 자질을 공유한다. c-구조상 [NP AP NP] 구조에서 명사 앞 관형어 위치를 점하며, 속격 격일치를 통해 수식 피수식 관계가 통사적으로 실현된다.",
        "background": "ἐϋπηκτος는 '잘 지어진, 튼튼하게 짜맞춘'이라는 뜻의 호메로스 전통 수식어(formulaic epithet)다. 나무 판자와 기둥을 정교하게 조립하여 만든 영웅의 천막의 견고함을 시각적으로 전달하며, 임시 거처임에도 왕궁 못지않은 품격을 부여한다.",
        "etymology": "ἐϋπήκτου는 부사적 요소 ἐϋ-('잘')와 동사 πήγνυμι('고정하다, 조립하다')의 어근 *peh₂g-에서 유래한 형용사다. Beekes(EDG)는 PIE *peh₂g-('단단하게 하다, 고정하다')가 라틴어 pāgiscus 및 pangere('고정하다')와 동계 관계임을 밝힌다. 어근 내 장모음화와 후두음 *h₂의 탈락 과정이 음운론적으로 설명된다. 현대 그리스어에는 이 복합어 형태가 직접 쓰이지 않고 고전 문헌 연구에 한정된다."
      }
    ]
  },
  {
    "ref": "Iliad 24.676",
    "trans": "그의 곁에는 아름다운 뺨을 가진 브리세이스가 누워 있었다.",
    "words": [
      {
        "g": "τῷ",
        "pos": "대명사",
        "lemma": "ὁ, ἡ, τό",
        "parse": "sg.dat.m.",
        "gloss_kr": "그에게, 그와 함께",
        "gloss_en": "beside him",
        "syntax": "LFG 관점에서 τῷ는 지시동반격(dative of accompaniment/reference)으로서 [PRED 'pronominal', CASE dat, θ-ROLE COMITATIVE] 기능을 한다. 동사 παρελέξατο가 지배하는 여격 논항이며, c-구조상 [PP [P ø] [DP τῷ]]로 투사된다.",
        "background": "여기서 τῷ는 아킬레우스를 가리키는 지시사/대명사다. 아킬레우스가 잠든 바로 그 곁에 브리세이스가 누워 있음을 나타내며, 전쟁 영웅의 인간적 면모와 비극적 정서 속의 일상적 평온을 대비시킨다.",
        "etymology": "τῷ는 PIE 지시 대명사 어근 *to-에서 유래한 형태다. Chantraine(DELG)에 따르면 호메로스어에서 지시사와 관사의 중간적 기능을 수행하며, 그리스어 역사 전반에 걸쳐 격변화 패러다임을 확립했다. 동계어로 산스크리트어 ta-, 고딕어 þata 등이 있다. 음운 변화 상 초성 토마스(th-) 계열의 무성 치음 발달을 보여 준다. 현대 그리스어에서도 지시사 및 정관사 체계의 핵심으로 남는다."
      },
      {
        "g": "δὲ",
        "pos": "접속사",
        "lemma": "δέ",
        "parse": "coord.conj.",
        "gloss_kr": "그리고, 반면에",
        "gloss_en": "and, but",
        "syntax": "LFG 관점에서 δὲ는 등위접속사로서 절과 절, 혹은 구와 구를 연결하며 후치사(postpositive) 위치를 점한다. c-구조상 [CP [C' ... δὲ]]로 분석되며, 앞선 절과 대조적이거나 연속적인 담화 흐름을 제어한다.",
        "background": "δὲ는 호메로스 서사시에서 이야기를 매끄럽게 이어 나가는 가장 기본적인 접속사다. 앞 행의 아킬레우스의 수면 상태에 이어 그 곁에 누운 브리세이스의 상황을 유기적으로 연결하는 역할을 한다.",
        "etymology": "δέ의 PIE 기원은 불확실하며, Beekes(EDG)는 비인도유럽어 기층 또는 오래된 파생 입자로 본다. 동계어나 명확한 외부 비교군을 찾기 어렵고, 그리스어 내부에서 대조 및 등위 연결 소사로 고도로 고착화되었다. 음운론적으로 단음절로 줄어들며 항상 후치사로 기능하는 통사적 제약을 획득했다. 현대 그리스어 δὲ/δεν의 부정사적 발전과는 별개로 고전적 접속 기능은 문학어에 남았다."
      },
      {
        "g": "Βρισηῒς",
        "pos": "명사(부칭/고유)",
        "lemma": "Βρισηίς, Βρισηΐδος, ἡ",
        "parse": "sg.nom.f.",
        "gloss_kr": "브리세이스",
        "gloss_en": "Briseis",
        "syntax": "LFG 관점에서 Βρισηῒς는 절의 주어(SUBJ)로서 [PRED 'Βρισηίς', CASE nom, TH-ROLE AGENT/EXPERIENCER] 자질을 갖는다. c-구조상 [IP [DP Βρισηῒς] [I' ...]] 위치에 오며, 동사 παρελέξατο와 인칭·수 일치를 이룬다.",
        "background": "Βρισηῒς는 아킬레우스가 전리품으로 얻었으나 아가멤논에게 빼앗겼다가 다시 돌려받은 여인이다. 아킬레우스의 분노의 원인이 되었던 그녀가 트로이아의 참혹한 밤 속에서 영웅의 곁을 조용히 지키고 있는 모습은 서사의 비극적 아이러니를 심화시킨다.",
        "etymology": "Βρισηῒς는 아버지 브리세우스(Βρισεύς)의 이름에서 유래한 부칭(patronymic) 여성 명사형이다. Chantraine(DELG)과 Beekes(EDG)는 어근 브리소스(Βρισός)가 소아시아 지역의 선그리스어 기층 지명이나 인명에서 비롯되었을 가능성을 지적한다. 접미사 -ῒς는 여성 부칭을 형성하는 고유 그리스어 형태소다. 현대 그리스어 인명으로는 쓰이지 않고 고전문헌학 연구 대상으로만 남는다."
      },
      {
        "g": "παρελέξατο",
        "pos": "동사",
        "lemma": "παραλέγομαι",
        "principalParts": "παραλέγομαι – παραλέξομαι – παρελέξατο – (미상) – (미상) – (미상)",
        "parse": "3rd.sg.aor.ind.mid.",
        "gloss_kr": "곁에 누웠다",
        "gloss_en": "lay beside",
        "syntax": "LFG 관점에서 παρελέξατο는 [PRED 'παραλέγω<SUBJ,OBL>', TENSE past, ASPECT aor, VOICE mid, SUBJ [PRED 'Βρισηῒς', CASE nom], OBL [PRED 'τῷ', CASE dat]]로 분석된다. c-구조상 [VP [V παρελέξατο] [PP ...]] 구조를 이루며, 중간태(middle voice)는 주체가 자신의 행위에 직접 관여함을 나타낸다.",
        "background": "παρελέξατο는 '곁에 눕다'라는 뜻으로, 영웅의 침소에서 그의 동반자로서 여인이 함께 누워 있는 호메로스 시대의 풍경을 보여 준다. 전란의 비극 속에서도 인간적인 친밀함과 위안이 존재하는 순간을 포착한다.",
        "etymology": "παραλέγομαι는 전치사 παρά('~의 곁에')와 어근 *leg-('모으다, 눕다')의 합성 동사에서 파생되었다. Chantraine(DELG)에 따르면 PIE 어근 *legh-('눕다')에서 유래한 형태가 그리스어에서 중간태 부정과거로 고정되었다. 동계어로 라틴어 lectus('침대'), 영어 lair 등이 있다. 음운 변화 상 어근의 후두음 탈락과 모음 연장이 일어났다. 현대 그리스어에는 이 고전적 합성어 형태가 직접 살아 있지 않다."
      },
      {
        "g": "καλλιπάρῃος",
        "pos": "형용사",
        "lemma": "καλλιπάρῃος, καλλιπάρῃον",
        "parse": "sg.nom.f.",
        "gloss_kr": "아름다운 뺨을 가진",
        "gloss_en": "fair-cheeked",
        "syntax": "LFG 관점에서 καλλιπάρῃος는 명사 Βρισηῒς를 수식하는 서술적/한정적 형용사로 [PRED 'καλλιπάρῃος', CASE nom, NUM sg, GEND f] 자질을 지닌다. c-구조상 [NP AP NP] 구조에서 명사를 수식하며, 여성 주격 격일치를 실현한다.",
        "background": "καλλιπάρῃος는 호메로스 서사시에서 여주인공들의 미모를 묘사할 때 쓰는 전형적인 수식어(epithet)다. '아름다운 뺨을 가진'이라는 뜻으로, 브리세이스의 고결한 미와 비극적 아름다움을 강조하며 전쟁의 참혹함과 대비되는 서정적 분위기를 만든다.",
        "etymology": "καλλιπάρῃος는 καλός('아름다운')의 어근과 뺨을 뜻하는 명사 παρειά의 합성어다. Beekes(EDG)는 καλός의 비인도유럽어 기층 기원설과 παρειά의 고유 인도유럽어 어근(*pera- 또는 얼굴 관련 어근)의 결합으로 설명한다. 복합어 형성 과정에서 단모음화와 장음화 규칙이 작용했다. 현대 그리스어에는 이 합성 형용사의 고전적 형태가 남아 있지 않고 고대 문헌에서만 확인된다."
      }
    ]
  },
  {
    "ref": "Iliad 24.677",
    "trans": "다른 신들과 전차를 모는 무사들은,",
    "words": [
      {
        "g": "ἄλλοι",
        "pos": "형용사",
        "lemma": "ἄλλος, ἄλλη, ἄλλο",
        "parse": "pl.nom.m.",
        "gloss_kr": "다른, 그 밖의",
        "gloss_en": "other",
        "syntax": "LFG 관점에서 ἄλλοι는 명사 θεοί를 한정하는 형용사로서 [PRED 'ἄλλος', CASE nom, NUM pl, GEND m] 자질을 가진다. c-구조상 [NP [AP ἄλλοι] [NP θεοί]]의 수식 구조를 이루며 주격 일치를 보인다.",
        "background": "ἄλλοι는 아킬레우스와 브리세이스를 제외한 '그 밖의 다른 모든 이들'을 가리킨다. 올림포스의 신들과 트로이아 및 그리스의 모든 전사들이 깊은 잠에 빠져 있다는 거대한 공간적 대비를 열어주는 핵심어다.",
        "etymology": "ἄλλος는 PIE 재구형 *alios('다른')에서 유래한다. Chantraine(DELG)에 따르면 라틴어 alius, 고대 아일랜드어 aile, 고트어 aljis 등과 완벽한 동계 관계를 이룬다. 음운론적으로 제2구개음화 및 라탈화(lateralization) 경향이 반영되어 있다. 현대 그리스어 άλλος('다른')로 음운적 변형을 거쳐 활발히 사용된다."
      },
      {
        "g": "μέν",
        "pos": "소사",
        "lemma": "μέν",
        "parse": "particle",
        "gloss_kr": "실로, 한편",
        "gloss_en": "indeed, on the one hand",
        "syntax": "LFG 관점에서 μέν는 담화 소사(DISCOURSE PARTICLE)로서 대조 구조의 첫 번째 항을 표시한다. c-구조상 [CP [C' ... μέν ...]] 위치에 투사되며, 후행하는 δέ와 함께 상관 접속/대조 구문(μέν... δέ)을 통사적으로 완성한다.",
        "background": "μέν는 그리스어 문장에서 두 가지 대조되는 사실 중 앞의 것을 강조하고 뒤에 이어질 대조(δὲ)를 예고하는 중추적 수사 소사다. 여기서는 잠든 '다른 신들과 인간들'과 잠들지 않은 '헤르메스'를 극적으로 대비시키는 서사적 장치로 작동한다.",
        "etymology": "μέν의 어원에 대해 Beekes(EDG)는 명확한 인도유럽어 동계어를 찾기 어렵고 그리스어 고유의 담화 입자로 발달했다고 본다. 강조를 뜻하는 부사적 요소에서 파생되어 점차 대조 구문의 표지로 고착화되었다. 음운론적으로 강세를 받지 않는 전접어(enclitic)로 기능한다. 현대 그리스어에는 이 고전적 μέν이 직접 남아 있지 않고 다른 강조사로 대체되었다."
      },
      {
        "g": "ῥα",
        "pos": "소사",
        "lemma": "ῥά",
        "parse": "particle",
        "gloss_kr": "실로, 과연",
        "gloss_en": "indeed, then",
        "syntax": "LFG 관점에서 ῥα는 운율 소사(METRICAL PARTICLE)로서 절의 두 번째 위치(Wackernagel's position)에 배치된다. c-구조상 [CP [C' ... ῥα ...]]로 분석되며, 담화의 현시성과 생동감을 부여한다.",
        "background": "ῥα(또는 ἄρα)는 호메로스 시구에서 운율을 맞추고 서사의 자연스러운 흐름을 촉진하기 위해 사용되는 전형적인 관용 소사다. 특별한 실질적 어휘 의미는 없으나 시적 리듬과 구송적 특성을 강화한다.",
        "etymology": "ῥά는 ἄρα의 운율적 축약형으로, PIE 어근에서 파생된 입자다. Chantraine(DELG)에 따르면 인과 관계나 당연한 전개를 나타내는 고대 인도유럽어의 공통적 어휘 유산이다. 구송시(oral poetry)의 헥사메터 운율을 채우는 필수적 도구로 활용되었다. 고전 산문 이후에는 시적 문체에만 제한적으로 나타난다."
      },
      {
        "g": "θεοί",
        "pos": "명사",
        "lemma": "θεός, ὁ, ἡ",
        "parse": "pl.nom.m.",
        "gloss_kr": "신들",
        "gloss_en": "gods",
        "syntax": "LFG 관점에서 θεοί는 등위 명사구의 첫 번째 핵(HEAD)으로서 [PRED 'θεός', CASE nom, NUM pl, GEND m] 자질을 지닌다. c-구조상 [NP [NP θεοί] [CONJ τε] [NP ἀνέρες]]의 등위 구조를 이루며 동사 εὗδον과 수 일치를 맺는다.",
        "background": "θεοί는 올림포스의 신들을 가리킨다. 프리아모스의 위험한 잠입을 돕기 위해 신들도 밤의 평온 속에 잠겨 있으며, 오직 헤르메스만이 신들의 왕 Zeus의 지시에 따라 깨어 활동하게 된다.",
        "etymology": "θεός는 PIE 재구형 *dʰes-('신성한 것, 종교적 영역')에서 유래한다. Chantraine(DELG)과 Beekes(EDG)는 동계어로 라틴어 fēstus('축제의'), fānum('신전') 등을 든다. 어근의 음운 변화 상 아스피레이션(aspirated stop)의 변동이 발생했다. 현대 그리스어 θεός('하나님, 신')로 이어져 종교적 어휘의 핵심을 이룬다."
      },
      {
        "g": "τε",
        "pos": "접속사",
        "lemma": "τε",
        "parse": "coord.conj.",
        "gloss_kr": "그리고",
        "gloss_en": "and, both",
        "syntax": "LFG 관점에서 τε는 등위접속사로서 앞선 명사와 뒤의 명사를 결합한다. c-구조상 [CONJ' [CONJ τε]] 형태로 명사구 내부에 후치사적으로 부착되며, 'A와 B' 구조(A τε καὶ B)를 형성한다.",
        "background": "τε는 호메로스 시구에서 빈번히 쓰이는 등위접속사로, 명사나 절을 긴밀하게 묶어주는 역할을 한다. 여기서는 신들과 인간들을 하나의 범주로 묶어 온 세상이 잠들었음을 강조한다.",
        "etymology": "τε는 PIE 등위접속사 어근 *kʷe에서 유래한다. Chantraine(DELG)에 따르면 산스크리트어 -ca, 라틴어 -que, 고대 그리스어 τε 모두 동일한 PIE 어근의 직접적 후손이다. 음운론적으로 무성 연구개순음 *kʷ가 그리스어에서 치음 τ로 발전하는 규칙적 음운 변화를 보여 준다. 고전 시어에 주로 남아 후대 산문에서는 갉아먹혀 사라진다."
      },
      {
        "g": "καὶ",
        "pos": "접속사",
        "lemma": "καί",
        "parse": "coord.conj.",
        "gloss_kr": "그리고",
        "gloss_en": "and, also",
        "syntax": "LFG 관점에서 καὶ는 등위접속사로서 [CONJ' [CONJ καὶ]] 구조를 이룬다. 앞서 τε와 함께 상관 접속사 조합(te... kai)을 구성하여 신들과 인간이라는 두 주체를 대등하게 연결한다.",
        "background": "καὶ는 그리스어에서 가장 보편적인 '그리고, 또한'의 뜻을 가진 접속사다. 호메로스의 상관 구문(te... kai) 속에서 시적 균형미와 리듬감을 제공한다.",
        "etymology": "καὶ의 어원은 명확하지 않으며, Beekes(EDG)는 기층 언어 유래설이나 부사적 입자의 결합설을 제기한다. 인도유럽어의 전통적 등위접속사(*kʷe 등)와는 별개로 그리스어 독자적 영역에서 발달하여 광범위하게 확장되었다. 현대 그리스어 καὶ/κέ('그리고, 도')로 완전히 정착되어 일상어의 뼈대를 이룬다."
      },
      {
        "g": "ἀνέρες",
        "pos": "명사",
        "lemma": "ἀνήρ, ἀνδρός, ὁ",
        "parse": "pl.nom.m.",
        "gloss_kr": "남자들, 인간들, 전사들",
        "gloss_en": "men, heroes",
        "syntax": "LFG 관점에서 ἀνέρες는 명사구의 두 번째 핵으로서 [PRED 'ἀνήρ', CASE nom, NUM pl, GEND m] 자질을 지닌다. c-구조상 [NP θεοί τε καὶ ἀνέρες]의 등위 주어구 전체를 구성하며 동사 εὗδον의 AGENT 논항으로 기능한다.",
        "background": "ἀνέρες는 '남자, 인간, 영웅'을 뜻하는 ἀνήρ의 호메로스식 장음 이형태다. 여기서는 트로이아와 그리스 진영의 모든 전사들을 가리키며, 전쟁의 참혹함에서 벗어나 잠시 평화를 누리는 인간의 취약성을 보여 준다.",
        "etymology": "ἀνήρ는 PIE 재구형 *h₂nér('사람, 남자')에서 유래한다. Chantraine(DELG)에 따르면 산스크리트어 nar-, 아르메니아어 ayr 등과 동계 관계를 이룬다. 어근 내 후두음 *h₂의 영향으로 초성 모음의 장음화 및 자음 탈락/변화가 일어났다. 현대 그리스어에는 고유어 형태가 희석되고 복합어(예: αεροπόρος 등)나 문어체로 제한적으로 남는다."
      },
      {
        "g": "ἱπποκορυσταὶ",
        "pos": "형용사",
        "lemma": "ἱπποκορυστης, ἱπποκορυστοῦ, ὁ",
        "parse": "pl.nom.m.",
        "gloss_kr": "말로 무장한, 전차를 다루는 무사들",
        "gloss_en": "horse-taming, helmeted with horse-hair crests",
        "syntax": "LFG 관점에서 ἱπποκορυσταὶ는 명사 ἀνέρες를 수식하는 형용사적 수식어로서 [PRED 'ἱπποκορυστης', CASE nom, NUM pl, GEND m] 자질을 지닌다. c-구조상 명사 뒤에 위치하여 후치 수식(postpositive appositive modification) 기능을 수행한다.",
        "background": "ἱπποκορυσταὶ는 말과 전차, 그리고 투구의 말총 장식으로 무장한 전사들을 가리키는 호메로스의 대표적인 영웅 시적 수식어(epic formula)다. 전투와 말에 익숙한 전사들이 지금은 무기를 내려놓고 깊은 잠에 빠져 있음을 극적으로 대비시킨다.",
        "etymology": "ἱπποκορυσταὶ는 ἵππος('말')와 투구를 씌우다/무장시키다를 뜻하는 κορύσσω의 어근에서 유래한 합성어다. Beekes(EDG)는 인도유럽어 전통의 복합 명사 형성 규칙에 따라 전사 계층을 묘사하는 고유 시어 수식어로 발달했다고 설명한다. 음운론적으로 합성 과정에서 접미사 *-tā-가 결합했다. 고전 시어에만 국한되고 후대 산문에는 소멸한다."
      }
    ]
  },
  {
    "ref": "Iliad 24.678",
    "trans": "부드러운 잠에 사로잡혀 밤새도록 자고 있었다.",
    "words": [
      {
        "g": "εὗδον",
        "pos": "동사",
        "lemma": "εὕδω",
        "principalParts": "εὕδω – εὑδήσω – (미상) – (미상) – (미상) – (미상)",
        "parse": "3rd.pl.impf.ind.act.",
        "gloss_kr": "자고 있었다",
        "gloss_en": "were sleeping",
        "syntax": "LFG 관점에서 εὗδον는 [PRED 'εὕδω<SUBJ>', TENSE past, ASPECT impf, SUBJ [PRED 'θεοί τε καὶ ἀνέρες', CASE nom, NUM pl]]로 분석된다. c-구조상 [VP V]의 핵이며 복수 주어와 인칭·수 일치를 이룬다.",
        "background": "εὗδον는 신들과 인간들이 밤새 잠들어 있는 상태를 묘사하는 미완료과거형이다. 온 세상이 평온한 무의식 속에 잠겨 있는 정적을 조성하며, 홀로 깨어 있는 헤르메스와 아킬레우스의 긴장감을 극대화한다.",
        "etymology": "εὕδω의 3인칭 복수 미완료과거형으로, PIE 어근 *swed-에서 파생된 동사 어간에 복수 어미 *-ον이 결합했다. Chantraine(DELG)에 따르면 호메로스어에서 어그멘트(augment)가 생략된 형태로 자주 쓰인다."
      },
      {
        "g": "παννύχιοι",
        "pos": "형용사",
        "lemma": "παννύχιος, παννύχιον",
        "parse": "pl.nom.m.",
        "gloss_kr": "밤새도록",
        "gloss_en": "all night long",
        "syntax": "LFG 관점에서 παννύχιοι는 주어 명사구의 상태를 서술하는 주격 보어/부사적 형용사로 [PRED 'παννύχιος', CASE nom, NUM pl, GEND m] 자질을 갖는다. c-구조상 [AP παννύχιοι]가 동사구를 수식하는 부사적 기능을 겸한다.",
        "background": "παννύχιος는 '밤 전체에 걸쳐'라는 뜻으로, 시간적 지속성을 강조하는 시적 표현이다. 신들과 영웅들이 단잠에 빠져 밤을 온전히 보냈음을 나타내며, 다가올 새벽의 극적 반전을 예비한다.",
        "etymology": "παννύχιος는 πᾶς('모든')의 어간과 νύξ('밤')의 합성어이다. Chantraine(DELG)에 따르면 PIE 어근 *kwant-('모든')와 *nókʷt-('밤')가 결합하여 형성되었다. 동계어로 라틴어 nox, 영어 night 등이 어근의 후손이다. 음운론적으로 합성 과정에서 모음 탈락과 강세 이동이 일어났다. 현대 그리스어 판니히다(παννυχίδα) 등의 종교·문화적 용어로 잔존한다."
      },
      {
        "g": "μαλακῷ",
        "pos": "형용사",
        "lemma": "μαλακός, μαλακή, μαλακόν",
        "parse": "sg.dat.m.",
        "gloss_kr": "부드러운",
        "gloss_en": "soft, gentle",
        "syntax": "LFG 관점에서 μαλακῷ는 분사 δεδμημένοι를 수식하는 도구격/여격 수식어로서 [PRED 'μαλακός', CASE dat, NUM sg, GEND m] 자질을 지닌다. c-구조상 [NP AP NP] 구조에서 명사 ὕπνῳ를 한정한다.",
        "background": "μαλακός는 잠의 감촉을 '부드럽고 포근하다'고 묘사하는 감각적 형용사다. 고통과 피로에 지친 인간과 신들에게 잠이 선사하는 안식과 치유의 속성을 시적으로 형상화한다.",
        "etymology": "μαλακός는 PIE 재구형 *ml̥kó- 또는 *melk-('부드러운, 약한')에서 유래한다. Beekes(EDG)는 동계어로 라틴어 mollis('부드러운'), 산스크리트어 mṛdu-를 거론한다. 음운론적으로 유음 탈락과 모음 개재 현상이 작용했다. 현대 그리스어 μαλακός('부드러운, 연한')로 음운적 변동을 거의 겪지 않고 그대로 이어져 일상어로 쓰인다."
      },
      {
        "g": "δεδμημένοι",
        "pos": "분사",
        "lemma": "δμάω",
        "principalParts": "δμάω – δμήσω – ἐδμήσαυ – δέδμηκα – δεδμημένος – ἐδμήθην",
        "parse": "perf.mid.pass.part.pl.nom.m.",
        "gloss_kr": "정복된, 사로잡힌",
        "gloss_en": "subdued, overcome",
        "syntax": "LFG 관점에서 δεδμημένοι는 완료 분사로서 [PRED 'δμάω<SUBJ,OBL>', VOICE mid-pass, ASPECT perf, CASE nom, NUM pl, GEND m] 자질을 가진다. c-구조상 주어 명사구를 수식하며 잠의 지배력에 굴복한 상태를 통사적으로 표현한다.",
        "background": "δεδμημένοι는 '길들여진, 정복된'이라는 뜻의 분사로, 호메로스 시구에서 '잠(ὕπνος)'이 인간과 신들을 마치 무력으로 제압하듯 강력하게 사로잡는 모습을 묘사할 때 쓰는 전통적 은유 표현이다.",
        "etymology": "δεδμημένοι는 PIE 어근 *demh₂-('길들이다, 묶다')에서 유래한 분사 형태이다. Chantraine(DELG)에 따르면 라틴어 domāre('길들이다'), 영어 tame과 동계어이다. 음운론적으로 완료시상 중복사(reduplication)와 후두음 탈락에 따른 장음화가 발생했다. 현대 그리스어에는 고전 문헌 외에 직접 쓰이지 않는다."
      },
      {
        "g": "ὕπνῳ",
        "pos": "명사",
        "lemma": "ὕπνος, τοῦ",
        "parse": "sg.dat.m.",
        "gloss_kr": "잠에, 잠으로",
        "gloss_en": "by sleep",
        "syntax": "LFG 관점에서 ὕπνῳ는 도구격/원인격 여격(dative of instrument/means)으로서 [PRED 'ὕπνος', CASE dat, θ-ROLE INSTRUMENT] 분사 δεδμημένοι의 의미역을 충족한다. c-구조상 [PP [P ø] [DP ὕπνῳ]]로 투사된다.",
        "background": "ὕπνος는 죽음의 형제이자 인간의 모든 고통을 일시적으로 망각하게 만드는 신성한 힘으로 의인화된다. 여기서는 잠이 온 세상을 지배하고 있음을 명시하여, 그 정적을 깨는 헤르메스의 활동을 더욱 돋보이게 한다.",
        "etymology": "ὕπνος는 PIE 재구형 *swpno-('잠')에서 유래한다. Chantraine(DELG)과 Beekes(EDG)는 라틴어 somnus, 산스크리트어 svápna-, 영어 sleep과 완벽한 동계 관계임을 증명한다. 초성 *sw-가 그리스어에서 기식음(rough breathing)으로 발전하는 정규 음운 변화를 거쳤다. 현대 그리스어 ὕπνος('잠')로 변함없이 이어져 일상어로 활발히 쓰인다."
      }
    ]
  },
  {
    "ref": "Iliad 24.679",
    "trans": "그러나 헤르메스 신만을 잠이 사로잡지 못하였으니,",
    "words": [
      {
        "g": "ἀλλ᾽",
        "pos": "접속사",
        "lemma": "ἀλλά",
        "parse": "coord.conj.",
        "gloss_kr": "그러나, 하지만",
        "gloss_en": "but, yet",
        "syntax": "LFG 관점에서 ἀλλ᾽는 대조 접속사로서 앞선 모든 이들의 수면 상태와 헤르메스의 각성 상태를 극적으로 반전시킨다. c-구조상 [CP [C' ἀλλά [IP ...]]]의 위치에 투사되며, 담화상 강한 대립 관계를 수립한다.",
        "background": "ἀλλά는 앞서 온 세상이 깊은 잠에 빠져 있다는 진술을 정면으로 뒤집으며, 오직 헤르메스 신만은 잠들지 않았음을 알리는 결정적 전환점이다. 서사의 초점이 전면적으로 이동한다.",
        "etymology": "ἀλλά는 다른 접속사 ἄλλος('다른')의 중성 복수 대격 형태에서 발달한 대조 소사이다. Chantraine(DELG)에 따르면 '다른 것들에 대하여'라는 의미에서 '그러나, 반면에'라는 접속 기능으로 의미 전이가 일어났다. 현대 그리스어 αλλά('그러나')로 그대로 계승되어 가장 흔한 대조 접속사로 쓰인다."
      },
      {
        "g": "οὐχ",
        "pos": "부사",
        "lemma": "οὐ",
        "parse": "neg.adv.",
        "gloss_kr": "~않았다",
        "gloss_en": "not",
        "syntax": "LFG 관점에서 οὐχ는 부정부사로서 [PRED 'neg', SCOPE [VP ...]] 자질을 가지며 동사 ἔμαρπτεν를 부정한다. c-구조상 [IP [I' οὐχ [VP ...]]] 위치에 투사되며, 후행하는 유기음(h-) 앞에서 자음이 ḫ(χ)로 변하는 연음 규칙을 따른다.",
        "background": "οὐχ는 헤르메스에게는 일반적인 잠이 찾아오지 않았음을 강조하며, 그가 제우스의 명을 받들어 프리아모스의 안전한 안내자 역할을 수행하기 위해 깨어 있어야 하는 신성한 임무를 부각한다.",
        "etymology": "οὐ는 PIE 재구형 *ne 또는 *h₂eue 에서 유래한 부정사이다. Beekes(EDG)에 따르면 산스크리트어 na, 라틴어 nē 등과 동계 관계를 이룬다. 음운론적으로 모음 앞에서 οὐκ, 기식음 앞에서 οὐχ로 변동하는 고대 그리스어의 전통적 연음 규칙을 철저히 따른다. 현대 그리스어 δεν(부정사)에 밀려 직접 쓰이지 않는다."
      },
      {
        "g": "Ἑρμείαν",
        "pos": "명사(고유)",
        "lemma": "Ἑρμῆς, Ἑρμεῖο(Homeric), ὁ",
        "parse": "sg.acc.m.",
        "gloss_kr": "헤르메스를",
        "gloss_en": "Hermes",
        "syntax": "LFG 관점에서 Ἑρμείαν는 동사 ἔμαρπτεν의 목적어(OBJ)로서 [PRED 'Ἑρμῆς', CASE acc, TH-ROLE PATIENT] 자질을 지닌다. c-구조상 [VP V [DP Ἑρμείαν]] 구조를 이루며, 목적격 지배를 받는다.",
        "background": "Ἑρμείαν(헤르메스)는 제우스의 전령이자 여행자, 상인, 도둑의 수호신이며, 죽은 자의 영혼을 저승으로 인도하는 프시코폼포스(Psychopomp)다. 여기서는 프리아모스가 아킬레우스의 진영을 안전하게 오갈 수 있도록 호위하는 핵심 인물로 등장한다.",
        "etymology": "Ἑρμῆς는 장소 표시 경계석을 뜻하는 ἕρμα('돌무더기')에서 유래한 것으로 추정된다. Chantraine(DELG)과 Beekes(EDG)는 헤르메스가 원래 경계석의 신에서 인격화된 신으로 발전했다고 설명하며, 선그리스어 기층 어휘일 가능성도 높게 본다. 호메로스식 이형태 Ἑρμείας/-είης가 사용되었다. 현대 그리스어 Ἑρμῆς로 이어져 신화적 이름 및 인명으로 잔존한다."
      },
      {
        "g": "ἐριούνιον",
        "pos": "형용사",
        "lemma": "ἐριούνιος, ἐριούνιον",
        "parse": "sg.acc.m.",
        "gloss_kr": "행운을 주는, 은혜로운",
        "gloss_en": "the helper, bringer of luck",
        "syntax": "LFG 관점에서 ἐριούνιον는 고유명사 Ἑρμείαν를 수식하는 수식어/동격적 형용사로 [PRED 'ἐριούνιος', CASE acc, NUM sg, GEND m] 자질을 가진다. c-구조상 [NP AP NP] 구조에서 목적어를 한정한다.",
        "background": "ἐριούνιος는 헤르메스 신에게만 붙는 전형적인 호메로스식 수식어(epithet)로, '도움을 주는 자, 행운과 복을 가져다주는 신'이라는 뜻이다. 프리아모스에게 은밀한 안전을 보장하는 그의 역할을 암시한다.",
        "etymology": "ἐριούνιον는 강조 접두사 ἐρι-('매우')와 오나이마이(ὀνίνημι, '이롭게 하다, 도움을 주다')의 어근에서 유래한 합성어이다. Chantraine(DELG)에 따르면 PIE 어근 *h₃enh₁-('이득을 주다')와 연관되며, 신의 자비로운 속성을 찬양하는 고대 시어 복합어로 고착화되었다. 후대 산문에서는 사라지고 호메로스에 국한된다."
      },
      {
        "g": "ὕπνος",
        "pos": "명사",
        "lemma": "ὕπνος, τοῦ",
        "parse": "sg.nom.m.",
        "gloss_kr": "잠이",
        "gloss_en": "sleep",
        "syntax": "LFG 관점에서 ὕπνος는 절의 주어(SUBJ)로서 [PRED 'ὕπνος', CASE nom, TH-ROLE AGENT/CAUSE] 자질을 지닌다. c-구조상 [IP [DP ὕπνος] [I' ...]] 위치에 오며 동사 ἔμαρπτεν의 주체로 기능한다.",
        "background": "여기서 잠은 주어로 설정되어 헤르메스라는 인물을 '사로잡으려' 시도한다. 그러나 다른 모든 인물들과 달리 헤르메스만큼은 이 보편적 수면의 지배력에서 벗어나 있음을 강조하여 신성한 임무의 긴박성을 드러낸다.",
        "etymology": "명사 주격형으로 PIE 어근 *swpno-에서 유래하며, 잠의 의인화된 주체적 힘을 나타낸다."
      },
      {
        "g": "ἔμαρπτεν",
        "pos": "동사",
        "lemma": "μαρπτω",
        "principalParts": "μαρπτω – μαρψω – ἔμαρψα – (미상) – (미상) – (미상)",
        "parse": "3rd.sg.impf.ind.act.",
        "gloss_kr": "붙잡았다, 사로잡았다",
        "gloss_en": "seized, laid hold of",
        "syntax": "LFG 관점에서 ἔμαρπτεν는 [PRED 'μάρπτω<SUBJ,OBJ>', TENSE past, ASPECT impf, SUBJ [PRED 'ὕπνος', CASE nom], OBJ [PRED 'Ἑρμείας', CASE acc]]로 형식화된다. c-구조상 [VP V [DP ...]]의 핵을 이루며, 미완료과거 시상을 통해 잠이 헤르메스를 붙잡으려 지속적으로 시도했으나 실패했음을 나타낸다.",
        "background": "ἔμαρπτεν는 '손으로 확 붙잡다, 사로잡다'라는 뜻의 동사다. 잠이 헤르메스를 덮치려 했지만 성공하지 못했다는 묘사는, 신성한 사명을 띤 헤르메스가 일상적 생리 현상인 잠마저 초월해 깨어 있음을 극적으로 보여 준다.",
        "etymology": "μαρπτω는 PIE 재구형 어근에서 유래하며, 그리스어 고유의 격렬한 동작을 나타내는 동사 어휘이다. Chantraine(DELG)과 Beekes(EDG)는 인도유럽어 전통의 파지(grasping) 어근과 연결하나 명확한 외부 동계어는 드물다. 호메로스 시문학에서 주로 신체적 혹은 추상적 힘이 누군가를 덮치는 국면에 쓰인다."
      }
    ]
  },
  {
    "ref": "Iliad 24.680",
    "trans": "프리아모스 왕을 어떻게 (적진에서) 빠져나가게 할지 마음속으로 깊이 궁리하면서.",
    "words": [
      {
        "g": "ὁρμαίνοντ᾽",
        "pos": "분사",
        "lemma": "ὁρμαίνω",
        "principalParts": "ὁρμαίνω – ὁρμανῶ – ὡρμήνασα – (미상) – (미상) – (미상)",
        "parse": "pres.act.part.sg.acc.m.",
        "gloss_kr": "궁리하는, 깊이 생각하는",
        "gloss_en": "pondering",
        "syntax": "LFG 관점에서 ὁρμαίνοντ᾽는 분사로서 목적어 Ἑρμείαν를 수식하는 서술적/부대이전 분사(participial adjunct)로 [PRED 'ὁρμαίνω<SUBJ,OBL>', ASPECT pres, VOICE act, CASE acc, NUM sg, GEND m] 자질을 가진다. c-구조상 목적격 일치를 이루며 헤르메스의 내면적 심사숙고 상태를 표현한다.",
        "background": "ὁρμαίνω는 마음속에서 여러 가지 방안을 격렬하게 굴리며 궁리하는 상태를 뜻한다. 헤르메스가 트로이아의 왕 프리아모스를 그리스군 진영에서 어떻게 안전하게 빠져나가게 할지 깊이 고민하는 지성적 긴장감을 보여 준다.",
        "etymology": "ὁρμαίνω는 ὁρμάω('움직이게 하다, 돌진하다')의 파생동사로, 정신적 충동과 사유의 역동성을 나타낸다. Chantraine(DELG)에 따르면 PIE 어근에서 유래한 파생 접미사 *-ylo-/-ino- 계열의 명사/동사 체계와 연관된다."
      },
      {
        "g": "ἀνὰ",
        "pos": "전치사",
        "lemma": "ἀνά",
        "parse": "prep.+acc.",
        "gloss_kr": "~안에, ~전반에 걸쳐",
        "gloss_en": "throughout, in",
        "syntax": "LFG 관점에서 ἀνὰ는 전치사로서 목적격(accusative)을 지배하며 [PRED 'ἀνά', CASE acc, TH-ROLE LOCATION/DOMAIN] 자질을 갖는다. c-구조상 [PP [P ἀνὰ] [DP θυμὸν]] 구조를 이루며 내면적 장소나 영역을 설정한다.",
        "background": "ἀνὰ는 원래 '위로'라는 뜻이나, 심리적 대상과 결합하여 '마음속 구석구석에서' 궁리한다는 추상적 공간 표현을 완성한다. 헤르메스의 지적인 두뇌 회전과 몰입을 시각화한다.",
        "etymology": "ἀνά는 PIE 재구형 *anuh₂('위로, ~를 향하여')에서 유래한다. Chantraine(DELG)과 Beekes(EDG)는 고대 산스크리트어 ἄνα, 고딕어 ana 등과 동계 관계를 입증한다."
      },
      {
        "g": "θυμὸν",
        "pos": "명사",
        "lemma": "θυμός, τοῦ",
        "parse": "sg.acc.m.",
        "gloss_kr": "마음속에, 정신으로",
        "gloss_en": "in his heart, mind",
        "syntax": "LFG 관점에서 θυμὸν는 전치사 ἀνὰ가 지배하는 목적격 논항으로서 [PRED 'θυμός', CASE acc, θ-ROLE LOCATION] 자질을 지닌다. c-구조상 [PP ἀνὰ θυμὸν] 구를 형성하며 사고가 이루어지는 내면적 영역을 지정한다.",
        "background": "θυμός는 호메로스 심리학에서 생명력, 감정, 그리고 지적 사유가 일어나는 중심 자리를 가리킨다. 헤르메스가 단순한 신부름꾼을 넘어 고도의 전략적 판단을 내리는 지성적 존재임을 보여 준다.",
        "etymology": "θυμός는 PIE 재구형 *dʰuh₂-mo-('숨, 연기, 생명력')에서 유래한다. Chantraine(DELG)에 따르면 동계어로 라틴어 fūmus('연기'), 산스크리트어 dhūmá-가 있다."
      },
      {
        "g": "ὅπως",
        "pos": "접속사/부사",
        "lemma": "ὅπως",
        "parse": "adv./conj.",
        "gloss_kr": "어떻게, ~할지",
        "gloss_en": "how, in what way",
        "syntax": "LFG 관점에서 ὅπως는 간접의문절 또는 목적절을 이끄는 접속사/의무부사로서 [PRED 'ὅπως', COMP_TYPE interrogative/purpose] 자질을 가진다. c-구조상 [CP [C' ὅπως [IP ...]]]의 종속접속사 자리를 점한다.",
        "background": "ὅπως는 헤르메스가 프리아모스를 어떻게 하면 그리스군의 경계를 피해 무사히 돌려보낼 수 있을지 구체적인 방책을 궁리하는 내용의 간접의문문/목적절을 도입한다.",
        "etymology": "ὅπως는 지시/관계대명사 어근 *yo-와 대명사적 부사 요소 *pows의 합성에서 유래했다. Chantraine(DELG)에 따르면 호메로스어 및 고전 그리스어 전반에 걸쳐 방식과 목적을 나타내는 복합 접속사로 고착화되었다."
      },
      {
        "g": "Πρίαμον",
        "pos": "명사(고유)",
        "lemma": "Πρίαμος, Πριάμοιο, ὁ",
        "parse": "sg.acc.m.",
        "gloss_kr": "프리아모스를",
        "gloss_en": "Priam",
        "syntax": "LFG 관점에서 Πρίαμον는 간접의문절 안의 목적어(OBJ)로서 [PRED 'Πρίαμος', CASE acc, TH-ROLE PATIENT] 자질을 가진다. c-구조상 [VP V [DP Πρίαμον]] 구조에 놓인다.",
        "background": "Πρίαμος는 트로이아의 노왕(老王)으로, 아킬레우스에게 살해된 아들 헥토르의 시신을 찾기 위해 적진 한복판인 그리스군 진영으로 홀로 찾아온 비극의 군주다. 헤르메스의 보호를 받아야만 살아 돌아갈 수 있는 절대적 약자의 처지에 놓여 있다.",
        "etymology": "Πρίαμος는 아나톨리아(소아시아) 기층 언어에 뿌리를 둔 고유명사이다. Beekes(EDG)와 하타이트어 연구에 따르면 루위어(Luwian) 인명 Pariya-muwa('매우 용감한')와 연관될 가능성이 제기된다."
      },
      {
        "g": "βασιλῆα",
        "pos": "명사",
        "lemma": "βασιλεύς, βασιλῆος(Homeric), ὁ",
        "parse": "sg.acc.m.",
        "gloss_kr": "왕을, 군주를",
        "gloss_en": "king, sovereign",
        "syntax": "LFG 관점에서 βασιλῆα는 고유명사 Πρίαμον를 수식하는 동격어(appositive)로서 [PRED 'βασιλεύς', CASE acc, NUM sg, GEND m] 자질을 지닌다. c-구조상 [NP Πρίαμον βασιλῆα]의 동격 명사구 구조를 형성한다.",
        "background": "βασιλεύς는 트로이아의 최고 통치자 프리아모스의 신분과 위엄을 나타내는 호칭이다. 왕의 신분임에도 불구하고 적진에서 비참하게 아들의 시신을 애원해야 하는 그의 극단적인 반전과 비극성을 강조한다.",
        "etymology": "βασιλεύς는 미케네 문명(Linear B)의 *gʷasileus('기지/마을의 지도자')에서 유래한 선그리스어 또는 에게해 기층 기원 어휘이다. Chantraine(DELG)과 Beekes(EDG)는 이 단어가 순수 인도유럽어 어근이 아니라 미케네-에게해 기층에서 유래하여 그리스어로 유입된 토착 통치 칭호임을 밝힌다."
      }
    ]
  },
  {
    "ref": "Iliad 24.681",
    "trans": "배들 사이로 몰래 파수꾼들의 눈을 피해 빠져나가게 하시어,",
    "words": [
      {
        "g": "νηῶν",
        "pos": "명사",
        "lemma": "ναῦς, νεώς, ἡ",
        "parse": "pl.gen.f. (Homeric long-vowel form)",
        "gloss_kr": "배들의, 함선들의",
        "gloss_en": "of ships",
        "syntax": "LFG 관점에서 νηῶν은 분사 λαθών의 보어 혹은 명사구 내부의 소유격 한정사(ADJUNCT/SPEC)로 기능하며, 통사적 격 지배에 따라 소유격을 취한다. 생성문법적 괄호 트리로는 [DP [D' [NP νηῶν]]]로 분석되며, 출발점과 소유의 속성을 나타낸다. 레빈슨식 정보구조에서는 배경 정보 영역에 위치한다.",
        "background": "트로이아 진영 안에서 프리아모스가 그리스 연합군의 함선들 사이에 은밀히 머물러 있음을 가리킨다. 나이든 국왕이 적진 한가운데서 목숨을 건 위험한 밀회를 마치고 빠져나가는 긴장감 넘치는 국면이다. 호메로스 서사시에서 νηῦς는 바다를 건너온 아하이아인의 군사력과 고향으로의 귀환을 상징하는 핵심 단골 소재이다.",
        "etymology": "① PIE 재구형은 *nāu-/*neh₂u-('배')이며, 후두음 *h₂를 포함하는 e급/o급 교체가 일어난다. ② 동계어로 산스크리트어 nā́u-('배'), 라틴어 nāvis('배')가 있다. ③ 프리크-그라스만 법칙 등의 음운 변화를 거쳐 그리스어 ναῦς로 발전했으며, 호메로스 장모음 이형태 νηῶν은 완충 모음 및 장음화 과정을 겪었다. ④ 영어 navy, nautical 등이 이 어근에서 유래하며, Chantraine(DELG)과 Beekes(EDG)가 상세히 다룬다."
      },
      {
        "g": "ἐκπέμψειε",
        "pos": "동사",
        "lemma": "ἐκπέμπω",
        "principalParts": "ἐκπέμπω – ἐκπέμψω – ἐξέπεμψα – ἐκπέπομφα – ἐκπέπομμαι – ἐξεπέμφθην",
        "parse": "3rd.sg.aor.opt.act.",
        "gloss_kr": "내보내 주기를, 탈출시키기를",
        "gloss_en": "might send out, let go forth",
        "syntax": "LFG에서 ἐκπέμψειε는 주절 또는 가정/소망절의 술어로서 [PRED 'ἐκπέμπω<SUBJ,OBJ,OBL>', TENSE past, MOOD opt, SUBJ pro] 형태의 a-구조를 가진다. 생성문법적으로 [TP pro [T' [vP t_pro [VP ἐκπέμψειε ...]]]]로 분석되며, 희구법은 실현 가능성이 낮거나 완곡한 소망·가정을 나타낸다. 목적어는 생략되었으나 문맥상 프리아모스를 지칭한다.",
        "background": "헤르메스가 프리아모스에게 아킬레우스의 막사에서 빠져나와 그리스 진영 밖으로 무사히 돌아가도록 도울 것을 염려하는 대목이다. 신들의 은총과 인도 없이는 적진 탈출이 불가능함을 강조하는 서사적 장치이다. 헤르메스의 변장과 보호가 프리아모스의 생존을 담보한다.",
        "etymology": "① PIE 어근 *pemp- 또는 *penkʷe('다섯')와의 연관성은 논쟁적이나, 별도의 동사 어근 *pemp-('보내다')에 기원한다. ② 동계어 형성은 고전 그리스어 내부의 파생이 풍부하다. ③ 전치사 ἐκ과 복합동사화하면서 성절 자음 및 아스피레이션 규칙을 거쳤다. ④ 영어 pomp, fanfare 등과 간접적 연관이 논의되며, LSJ와 Chantraine(DELG)이 그 어원을 논한다."
      },
      {
        "g": "λαθὼν",
        "pos": "분사",
        "lemma": "λανθάνω",
        "principalParts": "λανθάνω – λήσω – ἔλαθον – λέληθα – λέλησμαι – (미상)",
        "parse": "aor.act.part.sg.nom.m.",
        "gloss_kr": "몰래, 눈치채지 못하게 하고서",
        "gloss_en": "escaping notice, secretly",
        "syntax": "LFG에서 λαθών은 부사적 분사(ADJUNCT)로서 주절 동사와 동일 주어를 공유하며 주어를 수식한다. 생성문법적 구조는 [VP [vP t_i [VP λαθών ...]]]로 주어의 부대 상황을 나타내는 동시동작을 표현한다. 대상 격으로 속격을 지배한다.",
        "background": "적의 파수꾼들에게 들키지 않고 밤중에 그리스 진영을 빠져나가야 하는 극도의 긴장감을 보여준다. 헤르메스가 신적인 안개나 마법적 은폐를 통해 프리아모스를 감싸주었기에 가능한 일이다. 호메로스 시문학에서 λανθάνω는 신들의 개입에 따른 인간의 지각 불능 상태를 묘사할 때 자주 쓰인다.",
        "etymology": "① PIE 어근 *leh₂dh-('숨다, 잊다')에서 유래하며, 영급과 e급의 교체를 보인다. ② 동계어로 라틴어 lateō('숨다'), 고대 고지독일어 lazēn('내버려두다')이 있다. ③ 성절 후두음의 탈락과 함께 제2부정과거형의 모음 교체를 겪었다. ④ 영어 latent, lethargy가 이 계열이며, Beekes(EDG)와 Frisk(GEW)가 상세히 설명한다."
      },
      {
        "g": "ἱεροὺς",
        "pos": "형용사",
        "lemma": "ἱερός, ἱερά, ἱερόν",
        "parse": "pl.acc.m.",
        "gloss_kr": "신성한, 경건한",
        "gloss_en": "sacred, holy",
        "syntax": "LFG에서 ἱεροὺς는 명사 πυλαωρούς를 수식하는 한정사/형용사(ADJUNCT/ATTR)로 기능하며 성·수·격 일치를 이룬다. 생성문법적 트리 구조는 [DP [D' [AP ἱεροὺς] [NP πυλαωρούς]]]로 분석된다. 수식어구로서 파수꾼들의 직무가 신성한 신뢰와 연관되어 있음을 보여준다.",
        "background": "그리스 진영의 문을 지키는 파수꾼들이 단순한 경비병을 넘어 신성한 임무를 수행하는 존재로 묘사된다. 호메로스에서 ἱερός는 종종 신들과 관련된 사물이나 직무에 부여되는 전통적 호칭이다.",
        "etymology": "① PIE 재구형은 *ish₂-ro-('강력한, 신성한')이며, 어근 *is-('힘, 활력')에서 파생되었다. ② 동계어로 산스크리트어 iṣirá-('활기찬, 강한')가 있다. ③ 후두음의 영향으로 장모음화 및 음운 탈락을 거쳤다. ④ 영어 hierarchy, hieroglyphics 등이 이 어근에서 유래하며, Chantraine(DELG)과 LSJ에 기록되어 있다."
      },
      {
        "g": "πυλαωρούς",
        "pos": "명사",
        "lemma": "πυλαωρός, πυλαωροῦ, ὁ/ἡ",
        "parse": "pl.acc.m.",
        "gloss_kr": "문지기들을, 파수꾼들을",
        "gloss_en": "gate-keepers, guards",
        "syntax": "LFG에서 πυλαωρούς는 분사 λαθών의 목적어(OBJ)로 기능하며 대격 지배를 받는다. 생성문법적으로 [VP λαθὼν [NP πυλαωρούς]] 구조를 이루며, 동사의 의미역 중 환자(Patient) 역할을 배당받는다.",
        "background": "그리스 진영의 입구를 지키는 문지기들로, 헤르메스의 신적인 권능에 의해 잠에 빠져 있거나 눈이 멀어 프리아모스의 탈출을 저지하지 못한다. 트로이아 전쟁의 거대한 진영 구조를 실감 나게 보여주는 현실적 세부 묘사이다.",
        "etymology": "① 합성어로 퓔레(πύλη, '문')와 욹로스(οὐρός, '감시자')의 결합이며, PIE *pula-와 *wer-('지키다')에 기원한다. ② 동계어로 산스크리트어 vṛ-('막다, 보호하다')가 있다. ③ 복합어 형성 과정에서 모음 축약과 악센트 이동을 겪었다. ④ 현대 그리스어에도 문과 관련된 파생어가 남아 있으며, Beekes(EDG)와 Frisk(GEW)가 분석한다."
      }
    ]
  },
  {
    "ref": "Iliad 24.682",
    "trans": "그는 그의 머리맡에 우뚝 서서 그에게 이렇듯 말을 건네었다.",
    "words": [
      {
        "g": "στῆ",
        "pos": "동사",
        "lemma": "ἵστημι",
        "principalParts": "ἵστημι – στήσω – ἔστησα – ἕστηκα – ἕσταμαι – ἐστάθην",
        "parse": "3rd.sg.aor.ind.act.",
        "gloss_kr": "섰다",
        "gloss_en": "stood",
        "syntax": "LFG에서 στῆ는 주절의 술어로서 [PRED 'ἵστημι<SUBJ,OBL>', TENSE past, ASPECT aor, SUBJ [PRED 'pro', PERS 3, NUM sg]]로 분석된다. 생성문법적으로 [TP pro [T' [vP t_pro [VP στῆ ...]]]] 구조를 가지며, 비대격동사로서 주어가 위치 변화의 대상이 된다.",
        "background": "헤르메스가 잠든 프리아모스의 머리맡에 우뚝 서는 극적인 순간을 묘사한다. 서사시에서 신들이 인간의 머리맡에 서서 말을 건네는 전형적인 현현 모티프이다.",
        "etymology": "① PIE 재구형은 *steh₂-('서다')이며, e급/영급 교체와 중복사를 보인다. ② 동계어로 라틴어 stāre('서다'), 산스크리트어 tiṣṭhati('선다')가 있다. ③ 그라스만 법칙 및 후두음 탈락을 거쳤다. ④ 영어 stand, state, status 등이 이 어근에서 유래하며, Chantraine(DELG)과 Beekes(EDG)가 상술한다."
      },
      {
        "g": "δ᾽",
        "pos": "접속사",
        "lemma": "δέ",
        "parse": "coord.conj.",
        "gloss_kr": "그리고, 그러나",
        "gloss_en": "and, but",
        "syntax": "HPSG 자질구조상 [HEAD coord, CONJ-TYPE coordinating]으로 분석되며, 두 문장이나 구를 연결하는 등위접속사로 기능한다. 통사적으로는 두 번째 절의 맨 처음에 위치하는 전접어적 성격을 띤다.",
        "background": "호메로스 헥사메트로스 시문학에서 절과 절을 매끄럽게 이어주며 서사의 흐름을 가속화하는 가장 흔한 접속사이다.",
        "etymology": "① PIE 재구형은 명확하지 않으나 지시적 어원이나 대명사적 기원에서 유래한 것으로 추정된다. ② 고대 그리스어 내의 다양한 지시사 계열과 연관된다. ③ 음운론적으로 단음절 전접어로 약화되었다. ④ 직접적인 현대어 흔적은 제한적이나 문헌학 연구에서 필수적으로 다뤄진다."
      },
      {
        "g": "ἄρ᾽",
        "pos": "소사",
        "lemma": "ἄρα",
        "parse": "discourse.particle",
        "gloss_kr": "과연, 그러므로",
        "gloss_en": "then, accordingly",
        "syntax": "HPSG에서 담화 소사로서 선행하는 사건과 현재 상황의 인과적·시간적 일치성을 나타내는 수식어로 분석된다. 통사적으로 두 번째나 세 번째 자리에 위치하는 전접어이다.",
        "background": "신들의 의도나 운명의 흐름에 따라 사건이 정확히 맞아떨어질 때 사용되는 호메로스의 전형적인 서사적 양념이다.",
        "etymology": "① PIE 어원 명확하지 않으나 원시 인도유럽어의 강조·지시 소사에 기원한다. ② 고대 그리스어 내부의 비정형 소사로 발전했다. ③ 엘리전을 거쳐 ἄρ᾽ 형태로 음운축약되었다. ④ LSJ와 Chantraine(DELG)에 상세히 기술되어 있다."
      },
      {
        "g": "ὑπὲρ",
        "pos": "전치사",
        "lemma": "ὑπέρ",
        "parse": "prep.+gen.",
        "gloss_kr": "~의 위에, ~너머에",
        "gloss_en": "above, over",
        "syntax": "LFG에서 ὑπέρ는 속격 명사 κεφαλῆς를 지배하는 전치사구의 핵으로 기능하며, 장소적 위치를 나타내는 부사어를 구성한다. 생성문법적으로 [PP [P' ὑπὲρ [DP κεφαλῆς]]]로 분석된다.",
        "background": "신이 잠든 프리아모스의 신체 바로 위에 몸을 기울이고 서 있는 공간적 배치와 압도적인 위엄을 시각적으로 전달한다.",
        "etymology": "① PIE 재구형은 *uper('위로, ~너머')이며, 공간 전치사의 대표적 형태이다. ② 동계어로 라틴어 super('~ 위에'), 산스크리트어 upári('~ 위에')가 있다. ③ 무성음화 및 악센트 후퇴 현상을 겪었다. ④ 영어 over, superior 등이 이 어근에서 유래하며, Beekes(EDG)와 Frisk(GEW)가 분석한다."
      },
      {
        "g": "κεφαλῆς",
        "pos": "명사",
        "lemma": "κεφαλή, κεφαλῆς, ἡ",
        "parse": "sg.gen.f.",
        "gloss_kr": "머리의",
        "gloss_en": "of the head",
        "syntax": "LFG에서 κεφαλῆς는 전치사 ὑπέρ의 지배를 받는 속격 목적어로서 장소의 기준점을 제공한다. 생성문법적으로 [DP [D' [NP κεφαλῆς]]] 트리 구조를 이룬다.",
        "background": "프리아모스의 머리맡이라는 구체적이고 밀도 있는 묘사를 통해 독자나 청중이 장면에 몰입하도록 돕는다.",
        "etymology": "① PIE 재구형은 *ghebh-el-('머리')이며, 명사 파생 접미사가 결합했다. ② 동계어로 라틴어 caput('머리'), 고대 고지독일어 houbit('머리')가 있다. ③ 그림 법칙의 음운 변화를 거쳐 그리스어 κεφαλή가 되었다. ④ 영어 capital, chef, chief 등이 이 어근에서 유래하며, Chantraine(DELG)과 Beekes(EDG)에 등재되어 있다."
      },
      {
        "g": "καί",
        "pos": "접속사",
        "lemma": "καί",
        "parse": "coord.conj.",
        "gloss_kr": "그리고",
        "gloss_en": "and",
        "syntax": "등위접속사로서 두 개의 서술어를 연결한다. HPSG 구조상 [HEAD coord] 자질을 가진다.",
        "background": "행동과 발화라는 두 가지 연속적인 행위를 긴밀하게 묶어주는 구실을 한다.",
        "etymology": "① PIE 기원은 불확실하며, 강조 소사나 접속사에서 발달했다. ② 고대 그리스어 고유의 빈출 어휘이다. ③ 축약과 음운 변동을 거쳤다. ④ LSJ와 Chantraine(DELG)에서 필수적으로 다뤄진다."
      },
      {
        "g": "μιν",
        "pos": "대명사",
        "lemma": "μιν",
        "parse": "sg.acc.m.",
        "gloss_kr": "그를",
        "gloss_en": "him",
        "syntax": "LFG에서 μιν은 동사 ἔειπεν의 목적어로서 대격 지배를 받으며, 전접어로서 문장 내 두 번째 위치에 제약된다. 생성문법적으로 [VP ἔειπεν [DP μιν]] 구조를 이룬다.",
        "background": "헤르메스가 프리아모스를 지칭하며 말을 건네는 대명사로, 서사시에서 흔히 쓰이는 고풍스러운 이형태이다.",
        "etymology": "① PIE 지시 대명사 어근 *i-/*mi-에서 유래한다. ② 산스크리트어 등의 대명사 체계와 비교된다. ③ 호메로스 및 서정시에서 보존된 고대 대명사 형태이다. ④ Beekes(EDG)와 Chantraine(DELG)이 설명한다."
      },
      {
        "g": "πρὸς",
        "pos": "전치사",
        "lemma": "πρός",
        "parse": "prep.+acc.",
        "gloss_kr": "~에게, 향하여",
        "gloss_en": "toward, to",
        "syntax": "LFG에서 πρός는 대격 명사 μῦθον과 결합하여 방향성 부사구를 구성한다. 생성문법적으로 [PP [P' πρός [DP μῦθον]]] 트리 구조를 이룬다.",
        "background": "말을 건네는 방향과 대상과의 관계를 설정하는 전치사로, 발화 행위의 지향점을 명확히 한다.",
        "etymology": "① PIE 재구형은 *proti('~를 향하여')이다. ② 동계어로 산스크리트어 práti('~를 향하여'), 라틴어 profecto 등과 연관된다. ③ 음운 변화를 거쳐 그리스어 πρός가 되었다. ④ 영어 pros- 등의 흔적이 있으며, Chantraine(DELG)과 Frisk(GEW)에 기록되어 있다."
      },
      {
        "g": "μῦθον",
        "pos": "명사",
        "lemma": "μῦθος, μύθου, ὁ",
        "parse": "sg.acc.m.",
        "gloss_kr": "말을, 이야기를",
        "gloss_en": "word, speech",
        "syntax": "LFG에서 μῦθον은 전치사 πρός의 목적어 또는 동사 ἔειπεν의 내적 목적어로 기능한다. 생성문법적으로 [DP [D' [NP μῦθον]]] 구조를 이룬다.",
        "background": "단순한 낱말이 아니라 권위 있고 의미심장한 담화나 메시지를 가리키는 호메로스 전문 용어이다.",
        "etymology": "① PIE 어근 *mewh₁-('말하다')에서 유래한다. ② 동계어로 산스크리트어 mūtra- 등과의 연관성이 논의되나 그리스어 내부 발달이 뚜렷하다. ③ 후두음 탈락과 모음 교체를 겪었다. ④ 영어 myth, mythology 등이 이 단어에서 유래하며, Beekes(EDG)와 Chantraine(DELG)이 상세히 분석한다."
      },
      {
        "g": "ἔειπεν",
        "pos": "동사",
        "lemma": "εἶπον",
        "principalParts": "εἶπον – ἐρῶ – εἶπα – εἴρηκα – εἴρημαι – ἐρρήθην",
        "parse": "3rd.sg.aor.ind.act.",
        "gloss_kr": "말했다",
        "gloss_en": "said, spoke",
        "syntax": "LFG에서 ἔειπεν은 주절의 주술어로서 [PRED 'εἶπον<SUBJ,OBJ,COMP>', TENSE past, ASPECT aor, SUBJ pro]의 구조를 가진다. 생성문법적으로 [TP pro [T' [vP t_pro [VP ἔειπεν ...]]]] 구조로 직접화법을 이끈다.",
        "background": "신이 잠든 왕에게 엄중하고도 현실적인 경고의 메시지를 전달하는 발화의 순간을 알리는 정형구적 동사이다.",
        "etymology": "① PIE 어근 *wekʷ-('말하다')에서 유래하며, 증강사와 호메로스식 장음화를 거쳤다. ② 동계어로 라틴어 vōx('목소리'), 산스크리트어 vāc-('말')이 있다. ③ 법칙적 음운 변화를 거쳐 그리스어 εἶπον/ἔειπεν이 되었다. ④ 영어 vocal, epic, voice 등이 이 어근에서 유래하며, Chantraine(DELG)과 Beekes(EDG)가 상술한다."
      }
    ]
  },
  {
    "ref": "Iliad 24.683",
    "trans": "“오 노인이여, 그대는 이처럼 적들 사이에서 잠들어 있으니,",
    "words": [
      {
        "g": "‘ὦ",
        "pos": "감탄사",
        "lemma": "ὦ",
        "parse": "interj.",
        "gloss_kr": "오,",
        "gloss_en": "O",
        "syntax": "LFG에서 ὦ는 호격 명사구를 동반하는 담화 표지로 기능한다. 생성문법적으로 [CP [DP ὦ γέρον] [C' ...]] 구조에서 외재적 호격구를 수반한다.",
        "background": "상대방의 주의를 환기시키고 감정적 친밀감이나 안타까움을 드러내는 전형적인 호격 감탄사이다.",
        "etymology": "① PIE 감탄사 계열에 기원하는 자연발생적 발성이다. ② 고대 그리스어 전반에 널리 쓰인다. ③ 음운론적으로 단음절 장모음으로 고착되었다. ④ LSJ와 Chantraine(DELG)에 등재되어 있다."
      },
      {
        "g": "γέρον",
        "pos": "명사",
        "lemma": "γέρων, γέροντος, ὁ",
        "parse": "sg.voc.m.",
        "gloss_kr": "노인이여,",
        "gloss_en": "old man, elder",
        "syntax": "LFG에서 γέρον은 호격으로서 문장 통사 구조 외부에 위치하며 담화적 호칭 기능을 수행한다. 생성문법적으로 [DP [D' [NP γέρον]]] 구조를 가진다.",
        "background": "트로이아의 노왕 프리아모스를 다정하면서도 안타까운 시선으로 부르는 호칭으로, 그의 고령과 취약성을 극적으로 부각한다.",
        "etymology": "① PIE 재구형은 *gerh₂-('늙다')이며 명사 파생형이다. ② 동계어로 리투아니아어 gãras 등과 비교된다. ③ 후두음 탈락과 자음변화를 거쳤다. ④ 영어 geriatrics, gerontology 등이 이 어근에서 유래하며, Beekes(EDG)와 Chantraine(DELG)이 상술한다."
      },
      {
        "g": "οὔ",
        "pos": "부사",
        "lemma": "οὐ",
        "parse": "neg.adv.",
        "gloss_kr": "아니, 전혀 ~않는",
        "gloss_en": "not",
        "syntax": "LFG에서 οὔ는 부정 부사로서 술어 μέλει의 명제 내용을 부정하는 수식어로 기능한다. 생성문법적으로 [NegP οὐ [VP μέλει ...]] 구조를 이루어 진리치를 반전시킨다.",
        "background": "프리아모스가 처한 절체절명의 위험 상황에 대해 그가 전혀 자각하지 못하고 있음을 강하게 질책하는 부정어이다.",
        "etymology": "① PIE 재구형 *h₁ew(-ne)('~아니다')에서 유래한다. ② 그리스어 내부에서 직설법 부정어로 고착되었다. ③ 후두음 소실과 모음 기식화 과정을 겪었다. ④ Chantraine(DELG)과 Frisk(GEW)가 분석한다."
      },
      {
        "g": "νύ",
        "pos": "소사",
        "lemma": "νῦν",
        "parse": "discourse.particle",
        "gloss_kr": "과연, 지금",
        "gloss_en": "now, then",
        "syntax": "담화 소사로서 문장 내 두 번째 위치에 놓여 발화의 현장성과 긴급성을 강조한다. HPSG 구조상 부가어로 기능한다.",
        "background": "지금 이 순간이 얼마나 위험한지 강조하는 호메로스 특유의 생생한 구송적 소사이다.",
        "etymology": "① PIE 재구형 *nu('지금')에서 유래한다. ② 동계어로 산스크리트어 nú, 라틴어 nunc, 영어 now가 있다. ③ 단축과 전접화 과정을 거쳤다. ④ Beekes(EDG)와 Chantraine(DELG)에 상세히 기술되어 있다."
      },
      {
        "g": "τι",
        "pos": "대명사",
        "lemma": "τις, τι",
        "parse": "sg.acc.n.",
        "gloss_kr": "조금이라도",
        "gloss_en": "at all, in any way",
        "syntax": "LFG에서 τι는 부사적 대격으로서 부정어와 결합하여 '전혀 ~않다'라는 강조 구문을 형성한다. 생성문법적으로 [VP οὔ τι μέλει] 구조 속에서 정도성을 한정한다.",
        "background": "노왕이 자신의 목숨이 걸린 위험을 조금도 눈치채지 못하고 깊이 잠들어 있는 상황을 강조한다.",
        "etymology": "① PIE 재구형 *kʷi-/*kʷo-('누구, 무엇')에서 유래한다. ② 동계어로 라틴어 quis, 산스크리트어 kaḥ가 있다. ③ 의문/부정 대명사의 축약형이다. ④ 영어 who, what 등이 이 어근에서 유래하며, Chantraine(DELG)과 Beekes(EDG)가 다룬다."
      },
      {
        "g": "σοί",
        "pos": "대명사",
        "lemma": "σύ",
        "parse": "sg.dat.m.",
        "gloss_kr": "그대에게",
        "gloss_en": "to you, for you",
        "syntax": "LFG에서 σοί는 비인칭 동사 μέλει의 경험주로서 여격 지배를 받는다. 생성문법적으로 [PP [DP σοί]] 여격 구문으로 분석되며 심리적·소유적 귀속을 나타낸다.",
        "background": "프리아모스 자신에게 닥친 치명적인 위험을 그가 전혀 알지 못함을 직접적으로 대비시키는 인칭대명사이다.",
        "etymology": "① PIE 재구형 *tū('너')에서 유래한다. ② 동계어로 라틴어 tū, 영어 thou, 산스크리트어 tvám이 있다. ③ 음운론적 모음 장음화와 형태 변화를 거쳤다. ④ Chantraine(DELG)과 Beekes(EDG)가 상술한다."
      },
      {
        "g": "γε",
        "pos": "소사",
        "lemma": "γε",
        "parse": "discourse.particle",
        "gloss_kr": "적어도, 바로",
        "gloss_en": "at least, indeed",
        "syntax": "HPSG 담화 소사로서 선행하는 단어 σοί를 강조하는 한정 소사로 기능한다. 생성문법적으로 초점 구문을 형성한다.",
        "background": "다른 사람은 몰라도 '너만큼은' 마땅히 걱정해야 할 판국이라는 점을 꼬집는 강조의 의미를 띤다.",
        "etymology": "① PIE 강조 소사 계열에 기원하며, 고대 그리스어에서 독립된 전접어로 정착했다. ② 찬트렌과 리델-스콧에 수록되어 있다. ③ 축약과 음운 변동을 거쳤다. ④ 현대 그리스어의 일부 강조 용법과도 연결된다."
      },
      {
        "g": "μέλει",
        "pos": "동사",
        "lemma": "μέλω",
        "principalParts": "μέλω – μελήσω – ἐμέλησα – μεμέληκα – (미상) – (미상)",
        "parse": "3rd.sg.pres.ind.act.",
        "gloss_kr": "마음에 걸린다, 염려된다",
        "gloss_en": "it is a care, it concerns",
        "syntax": "LFG에서 μέλει는 비인칭 동사로서 [PRED 'μέλω<EXPERIENCER,THEME>', TENSE pres, MOOD ind, SUBJ -, EXPERIENCER [DP σοί], THEME [DP κακόν]] 구조를 가진다. 여격 경험주와 주격 명제 보어를 지배한다.",
        "background": "위험이나 근심이 당사자의 마음에 전혀 자리 잡지 못하고 있음을 비인칭 구문으로 표현하여 운명적 무감각함을 나타낸다.",
        "etymology": "① PIE 어근 *melh₁-('생각하다, 염려하다')에서 기원한다. ② 동계어로 라틴어 memor('기억하는'), 산스크리트어 smarati('기억하다') 등이 거론된다. ③ 모음 교체와 음운 축약을 거쳤다. ④ 영어 memory, remember 등이 이 어근과 연관되며, Beekes(EDG)와 Chantraine(DELG)에 상세히 기술되어 있다."
      },
      {
        "g": "κακόν",
        "pos": "형용사",
        "lemma": "κακός, κακή, κακόν",
        "parse": "sg.nom.n.",
        "gloss_kr": "재앙이, 위험이",
        "gloss_en": "evil, danger, disaster",
        "syntax": "LFG에서 κακόν은 비인칭 동사 μέλει의 주어로서 주격 지배를 받는다. 생성문법적으로 [TP [DP κακόν] [T' μέλει [PP σοί]]] 구조를 이루며 심리적 대상 역할을 수행한다.",
        "background": "적진 한가운데서 목숨을 잃을 수 있는 엄청난 재앙과 위험을 뜻하며, 트로이아 패망의 비극적 예고를 담고 있다.",
        "etymology": "① PIE 재구형 명확하지 않으나 선그리스어 기층 또는 고대 인도유럽어의 파생어 설이 대립한다. ② Beekes(EDG)는 선그리스어 기층 어휘 가능성을 지지한다. ③ 어미 변화를 거쳐 그리스어 κακός가 되었다. ④ 영어 cacophony 등의 접두어 원천이며, Chantraine(DELG)과 Frisk(GEW)가 분석한다."
      },
      {
        "g": "οἷον",
        "pos": "대명사",
        "lemma": "οἷος, οἵᾱ, οἷον",
        "parse": "sg.acc.n.",
        "gloss_kr": "어떤 상태로,",
        "gloss_en": "in what state, how",
        "syntax": "LFG에서 οἷον은 부사적 대격으로서 프리아모스의 현재 처지를 수식한다. 생성문법적으로 [CP [DP οἷον] [TP ἔθ᾽ εὕδεις ...]] 관계절 구조를 형성한다.",
        "background": "노왕이 적들의 수중에 있으면서도 얼마나 무방비한 상태로 잠들어 있는지를 개탄하는 감탄조의 수사적 표현이다.",
        "etymology": "① PIE 재구형 *yos 상대 대명사 어근의 파생형이다. ② 동계어로 산스크리트어 yá-가 있다. ③ 고대 그리스어 내부에서 성·수·격 일치 대명사로 발달했다. ④ Chantraine(DELG)과 LSJ에 수록되어 있다."
      },
      {
        "g": "ἔθ᾽",
        "pos": "부사",
        "lemma": "ἔτι",
        "parse": "adv.",
        "gloss_kr": "여전히, 아직도",
        "gloss_en": "still, yet",
        "syntax": "LFG에서 ἔθ᾽는 부로서 동사 εὕδεις의 시간적 지속성을 수식한다. 생성문법적으로 [VP ἔτι [VP εὕδεις]] 구조를 이루며 현재 진행상을 강조한다.",
        "background": "경각을 다투는 비상 상황 속에서도 프리아모스가 여전히 깊은 잠에 빠져 있음을 부각하여 긴장감을 극대화한다.",
        "etymology": "① PIE 재구형 *eti('~위에, 게다가, 아직')에서 유래한다. ② 동계어로 라틴어 et('그리고'), 산스크리트어 áti('넘어서')가 있다. ③ 거센소리 앞에서 엘리전을 겪어 ἔθ᾽가 되었다. ④ 영어 et- 등과 연관되며, Beekes(EDG)와 Chantraine(DELG)이 상술한다."
      },
      {
        "g": "εὕδεις",
        "pos": "동사",
        "lemma": "εὕδω",
        "principalParts": "εὕδω – εὑδήσω – (미상) – (미상) – (미상) – (미상)",
        "parse": "3rd.sg.pres.ind.act.",
        "gloss_kr": "자고 있다",
        "gloss_en": "you are sleeping",
        "syntax": "LFG에서 εὕδεις는 주절의 술어로서 [PRED 'εὕδω<SUBJ>', TENSE pres, MOOD ind, SUBJ [PRED 'pro', PERS 2, NUM sg]] 구조를 가진다. 생성문법적으로 [TP pro [T' [vP t_pro [VP εὕδεις]]]] 구조로 2인칭 주어 단수와 일치한다.",
        "background": "적의 장막 한복판에서 경계심을 풀고 깊이 잠들어 있는 노왕의 위태로운 모습을 고발하는 핵심 동사이다.",
        "etymology": "① PIE 어근 *wes-('자다') 또는 *swed-에 기원하며 증강사 흔적이 논의된다. ② 동계어로 산스크리트어 svápiti('잔다'), 라틴어 somnus('잠')와 연관된다. ③ 음운론적 변화를 거쳐 그리스어 εὕδω가 되었다. ④ 영어 somnolent, insomnia 등이 이 어근 계열이며, Chantraine(DELG)과 Beekes(EDG)가 다룬다."
      }
    ]
  },
  {
    "ref": "Iliad 24.684",
    "trans": "아킬레우스가 그를 살려주었기에 망정이지, 적들 사이에서 말이다.",
    "words": [
      {
        "g": "ἀνδράσιν",
        "pos": "명사",
        "lemma": "ἀνήρ, ἀνδρός, ὁ",
        "parse": "pl.dat.m.",
        "gloss_kr": "남자들 사이에서, 적들 사이에서",
        "gloss_en": "among men, among foes",
        "syntax": "LFG에서 ἀνδράσιν은 전치사 ἐν의 지배를 받는 여격 목적어로서 장소적 배경을 나타낸다. 생성문법적으로 [PP [P' ἐν [DP ἀνδράσιν]]] 트리 구조를 이룬다.",
        "background": "아군이 아니라 목숨을 노리는 적대적인 전사들의 한가운데를 의미하며, 절체절명의 위기를 시각화한다.",
        "etymology": "① PIE 재구형은 *h₂nér('사람, 남자')이며 후두음 *h₂를 포함한다. ② 동계어로 산스크리트어 nára-('사람'), 라틴어 nerō('힘센 자')가 있다. ③ 삽입 자음 발생 과정을 거쳐 ἀνδράσιν이 되었다. ④ 영어 nerd, android 등이 이 어근에서 유래하며, Beekes(EDG)와 Chantraine(DELG)이 상술한다."
      },
      {
        "g": "ἐν",
        "pos": "전치사",
        "lemma": "ἐν",
        "parse": "prep.+dat.",
        "gloss_kr": "~안에, ~사이에",
        "gloss_en": "in, among",
        "syntax": "LFG에서 ἐν은 여격 명사 ἀνδράσιν을 지배하는 전치사구의 핵으로 기능한다. 생성문법적으로 [PP [P' ἐν [DP ἀνδράσιν]]] 구조를 이룬다.",
        "background": "적들의 진영이라는 위험한 공간적 물리적 경계를 설정하는 전치사이다.",
        "etymology": "① PIE 재구형은 *en('~안е')이다. ② 동계어로 라틴어 in, 영어 in, 산스크리트어 án이 있다. ③ 기본적소실과 음운 안정성을 유지했다. ④ 영어 in, indoor 등이 이 어근에서 유래하며, Chantraine(DELG)과 Frisk(GEW)가 기록한다."
      },
      {
        "g": "δηΐοισιν",
        "pos": "형용사",
        "lemma": "δήιος, δηΐη, δηΐον",
        "parse": "pl.dat.m.",
        "gloss_kr": "적대적인, 파괴적인",
        "gloss_en": "hostile, enemy",
        "syntax": "LFG에서 δηΐοισιν은 명사 ἀνδράσιν을 수식하는 형용사로서 성·수·격 일치를 이룬다. 생성문법적 트리 구조는 [DP [D' [AP δηΐοισιν] [NP ἀνδράσιν]]]으로 분석된다.",
        "background": "트로이아인들에게는 불구대천의 원수인 그리스 전사들을 가리키는 시적이고 격식 있는 수식어이다.",
        "etymology": "① PIE 어근 *deh₂i-('자르다, 태우다, 파괴하다')에서 유래한다. ② 동계어로 산스크리트어 dāyati('자른다')가 있다. ③ 후두음 탈락과 장모음화를 거쳤다. ④ Chantraine(DELG)과 Beekes(EDG)가 상세히 다룬다."
      },
      {
        "g": "ἐπεί",
        "pos": "접속사",
        "lemma": "ἐπεί",
        "parse": "subordinating.conj.",
        "gloss_kr": "왜냐하면, ~하므로",
        "gloss_en": "since, because",
        "syntax": "LFG에서 ἐπεί는 종속접속사로서 이유를 나타내는 부사절을 이끈다. 생성문법적으로 [CP [C' ἐπεί [TP σ᾽ εἴασεν Ἀχιλλεύς]]] 구조를 형성한다.",
        "background": "프리아모스가 살아남아 적진에 있는 이유가 자신의 실력이나 부주의가 아니라 전적으로 아킬레우스의 자비와 허락 덕분임을 밝히는 핵심 원인 절이다.",
        "etymology": "① 전치사 ἐπί와 관계사 *ye의 합성에서 유래한다. ② 고대 그리스어 복합 접속사 체계로 정착했다. ③ 음운 축약과 기식 변동을 겪었다. ④ LSJ와 Chantraine(DELG)에 수록되어 있다."
      },
      {
        "g": "σ᾽",
        "pos": "대명사",
        "lemma": "σύ",
        "parse": "sg.acc.m.",
        "gloss_kr": "그대를",
        "gloss_en": "you",
        "syntax": "LFG에서 σ᾽는 동사 εἴασεν의 목적어로서 대격 지배를 받는다. 생성문법적으로 [VP εἴασεν [DP σ᾽]] 구조를 이루어 행위의 대상임을 나타낸다.",
        "background": "아킬레우스가 프리아모스를 살려주고 아들 헥토르의 시신을 내어주었던 역사적이고 극적인 자비의 행위를 되짚어준다.",
        "etymology": "① PIE 인칭대명사 *tue('너')에서 유래한다. ② 동계어로 라틴어 tē, 산스크리트어 tvā가 있다. ③ 모음 탈락을 거쳐 σ᾽가 되었다. ④ Beekes(EDG)와 Chantraine(DELG)이 상술한다."
      },
      {
        "g": "εἴασεν",
        "pos": "동사",
        "lemma": "ἐάω",
        "principalParts": "ἐάω – ἐάσω – εἴασα – εἴακα – εἴαμαι – εἰάθην",
        "parse": "3rd.sg.aor.ind.act.",
        "gloss_kr": "내버려두었다, 살려주었다",
        "gloss_en": "allowed, permitted, spared",
        "syntax": "LFG에서 εἴασεν은 종속절의 술어로서 [PRED 'ἐάω<SUBJ,OBJ,COMP>', TENSE past, ASPECT aor, SUBJ [DP Ἀχιλλεύς], OBJ [DP σ᾽]] 구조를 가진다. 생성문법적으로 [TP Ἀχιλλεύς [T' [vP t_subj [VP εἴασεν σ᾽]]]] 구조를 이룬다.",
        "background": "아킬레우스가 프리아모스의 탄원에 감복하여 그를 죽이지 않고 살려보낸 이전 장면의 자비를 상기시키며, 신의 엄중한 경고 속에서도 영웅 간의 인간적 유대가 교차함을 보여준다.",
        "etymology": "① PIE 어근 명확하지 않으나 선그리스어 기층 또는 독특한 그리스어 자음 어근에서 기원한다. ② Beekes(EDG)는 선그리스어 기층 설을 제기한다. ③ 음절 증강사와 e-형 장음화를 겪었다. ④ Chantraine(DELG)과 Frisk(GEW)가 분석한다."
      },
      {
        "g": "Ἀχιλλεύς",
        "pos": "명사",
        "lemma": "Ἀχιλλεύς, Ἀχιλλῆος, ὁ",
        "parse": "sg.nom.m.",
        "gloss_kr": "아킬레우스가",
        "gloss_en": "Achilles",
        "syntax": "LFG에서 Ἀχιλλεύς는 종속절의 주어로서 주격 지배를 받는다. 생성문법적으로 [TP [DP Ἀχιλλεύς] [T' εἴασεν ...]] 구조를 이루어 행위자 역할을 수행한다.",
        "background": "일리아스의 위대한 주인공이자 프리아모스의 아들 헥토르를 죽인 원수이면서도, 동시에 노왕에게 깊은 동정과 자비를 베푼 입체적 영웅이다.",
        "etymology": "① PIE 어근 직접 재구 어려우나 선그리스어 기층으로 널리 인정된다. ② Beekes(EDG)는 선그리스어 고유명사 기원을 지지한다. ③ 명사 굴절 체계를 거쳤다. ④ 영어 Achilles tendon 등이 이 이름에서 유래하며, Chantraine(DELG)과 Frisk(GEW)가 상세히 다룬다."
      }
    ]
  },
  {
    "ref": "Iliad 24.685",
    "trans": "그리고 지금 그대는 사랑하는 아들을 되찾았고, 많은 것을 주었으나,",
    "words": [
      {
        "g": "καὶ",
        "pos": "부사",
        "lemma": "καί",
        "parse": "adv.",
        "gloss_kr": "그리고 지금, 심지어 지금도",
        "gloss_en": "and now, even now",
        "syntax": "LFG에서 καί는 문두 부사로서 시간적 대비를 강조한다. 생성문법적으로 [CP [C' καὶ [TP νῦν ...]]] 구조를 형성한다.",
        "background": "앞서 아킬레우스가 살려준 것에 이어, 바로 지금 이 순간에도 아들의 시신을 막대한 몸값을 치르고 찾아온 상황을 환기한다.",
        "etymology": "① 앞서 설명한 καί와 동일 어원. ② 고대 그리스어 다기능 접속사/부사. ③ 음운 변동 없음. ④ LSJ와 Chantraine(DELG)."
      },
      {
        "g": "νῦν",
        "pos": "부사",
        "lemma": "νῦν",
        "parse": "adv.",
        "gloss_kr": "지금, 현재에",
        "gloss_en": "now",
        "syntax": "LFG에서 νῦν은 시간 부사어로서 사건의 시점을 한정한다. 생성문법적으로 [VP νῦν [VP ἐλύσαο]] 구조를 이룬다.",
        "background": "과거의 자비에서 나아가 바로 현재 진행 중인 몸값 교환과 구출 행위를 지칭한다.",
        "etymology": "① PIE 재구형 *nu('지금'). ② 동계어로 영어 now, 라틴어 nunc. ③ 보존된 모음 음가. ④ Beekes(EDG)와 Chantraine(DELG)."
      },
      {
        "g": "μὲν",
        "pos": "소사",
        "lemma": "μέν",
        "parse": "discourse.particle",
        "gloss_kr": "한편으로는, 확실히",
        "gloss_en": "indeed, on the one hand",
        "syntax": "HPSG 담화 소사로서 대조 구문의 첫 번째 표지로 기능하며, 후속하는 δέ 구문과 호응한다. 생성문법적으로 초점 구조를 형성한다.",
        "background": "전반부의 행위와 후반부의 위험을 대조하는 수사적 장치이다.",
        "etymology": "① PIE 강조 소사에서 유래. ② 그리스어 고유의 대조 소사 체계. ③ 단음절 전접어. ④ Chantraine(DELG)과 LSJ."
      },
      {
        "g": "φίλον",
        "pos": "형용사",
        "lemma": "φίλος, φίλη, φίλον",
        "parse": "sg.acc.m.",
        "gloss_kr": "사랑하는, 자신의 소중한",
        "gloss_en": "dear, beloved",
        "syntax": "LFG에서 φίλον은 명사 υἱὸν을 수식하는 형용사로서 성·수·격 일치를 이룬다. 생성문법적 트리 구조는 [DP [D' [AP φίλον] [NP υἱὸν]]]로 분석된다.",
        "background": "비참하게 죽음을 맞이한 맏아들 헥토르를 향한 아버지 프리아모스의 절절한 애정과 부성애를 극적으로 보여주는 수식어이다.",
        "etymology": "① PIE 재구형 *pʰil-o-('사랑하는, 친근한')이며, 명사/형용사 파생형이다. ② 동계어로 산스크리트어 priyá-가 있다. ③ 어미 변화를 거쳐 그리스어 φίλος가 되었다. ④ 영어 philology, philosophy 등의 접두어 원천이며, Chantraine(DELG)과 Beekes(EDG)가 상세히 기술한다."
      },
      {
        "g": "υἱὸν",
        "pos": "명사",
        "lemma": "υἱός, υἱοῦ, ὁ",
        "parse": "sg.acc.m.",
        "gloss_kr": "아들을",
        "gloss_en": "son",
        "syntax": "LFG에서 υἱὸν은 동사 ἐλύσαο의 목적어로서 대격 지배를 받는다. 생성문법적으로 [VP ἐλύσαο [DP υἱὸν]] 구조를 이루어 환자 역할을 수행한다.",
        "background": "트로이아의 가장 위대한 방패인 헥토르를 가리키며, 아버지 프리아모스가 목숨을 걸고 찾아온 유일한 구원의 대상이다.",
        "etymology": "① PIE 재구형 *suh₁-nu-('아들')이며, 어근 *seu-('낳다')에서 유래한다. ② 동계어로 산스크리트어 sūnú-, 고대 고지독일어 sunu가 있다. ③ 후두음 탈락과 수형 파생 접미사 결합을 거쳤다. ④ 영어 son이 이 어근에서 유래하며, Chantraine(DELG)과 Beekes(EDG)가 상술한다."
      },
      {
        "g": "ἐλύσαο",
        "pos": "동사",
        "lemma": "λύω",
        "principalParts": "λύω – λύσω – ἔλυσα – λέλυκα – λέλυμαι – ἐλύθην",
        "parse": "2nd.sg.aor.ind.mid.",
        "gloss_kr": "속전을 주고 찾아왔다",
        "gloss_en": "you ransomed, released",
        "syntax": "LFG에서 ἐλύσαο는 주절의 술어로서 [PRED 'λύω<SUBJ,OBJ>', TENSE past, ASPECT aor, VOICE mid, SUBJ pro, OBJ [DP υἱὸν]] 구조를 가진다. 중간태는 주어의 이해관계나 소유권 회복을 나타낸다.",
        "background": "막대한 보물을 아킬레우스에게 지불하고 아들의 시신을 속전으로 되찾아온 프리아모스의 대단한 성취를 가리키는 핵심 동사이다.",
        "etymology": "① PIE 어근 *lewh₂-('풀다, 해방시키다')에서 유래한다. ② 동계어로 라틴어 solvō('풀다'), 고대 아일랜드어 ludo가 있다. ③ 후두음 탈락과 시그마 과거형 확장을 거쳤다. ④ 영어 analysis, electrolyte, loose 등이 이 어근에서 유래하며, Chantraine(DELG)과 Beekes(EDG)가 상세히 다룬다."
      },
      {
        "g": "πολλὰ",
        "pos": "형용사",
        "lemma": "πολύς, πολλή, πολύ",
        "parse": "pl.acc.n.",
        "gloss_kr": "많은 것을, 막대한 보물을",
        "gloss_en": "many things, much",
        "syntax": "LFG에서 πολλὰ는 부사적 대격 또는 동사 ἔδωκας의 부가적 목적어로서 지불된 막대한 보물의 양을 나타낸다. 생성문법적으로 [VP ἔδωκας [DP πολλὰ]] 구조를 이룬다.",
        "background": "왕국의 보물창고를 비워가면서까지 아들의 시신을 사기 위해 아킬레우스에게 안겨준 엄청난 양의 황금과 패물을 상징한다.",
        "etymology": "① PIE 재구형 *pl̥h₁-u-('많은')이며 영급 *pl̥-에 기원한다. ② 동계어로 산스크리트어 purú-, 영어 full, 라틴어 plērusque가 있다. ③ 음운론적 모음 교체를 거쳤다. ④ 영어 poly-, polygon 등이 이 어근에서 유래하며, Chantraine(DELG)과 Beekes(EDG)가 상술한다."
      },
      {
        "g": "δ᾽",
        "pos": "접속사",
        "lemma": "δέ",
        "parse": "coord.conj.",
        "gloss_kr": "그리고",
        "gloss_en": "and",
        "syntax": "등위접속사로서 두 개의 절을 대조·연결한다. HPSG 구조상 [HEAD coord] 자질을 가진다.",
        "background": "아들을 되찾은 행위와 그 대가로 치른 막대한 지불 행위를 긴밀하게 연결하는 대구적 접속사이다.",
        "etymology": "① 앞서 설명한 δέ와 동일 어원. ② 고대 그리스어 표준 접속사. ③ 전접어 성격. ④ LSJ와 Chantraine(DELG)."
      },
      {
        "g": "ἔδωκας",
        "pos": "동사",
        "lemma": "δίδωμι",
        "principalParts": "δίδωμι – δδώσω – ἔδωκα – δέδωκα – δέδομαι – ἐδόθην",
        "parse": "2nd.sg.aor.ind.act.",
        "gloss_kr": "주었다",
        "gloss_en": "you gave",
        "syntax": "LFG에서 ἔδωκας는 주절의 술어로서 [PRED 'δίδωμι<SUBJ,OBJ>', TENSE past, ASPECT aor, SUBJ pro, OBJ [DP πολλὰ]] 구조를 가진다.",
        "background": "아킬레우스에게 막대한 몸값을 기꺼이 건네준 프리아모스의 희생적이고 결단력 있는 행동을 서술한다.",
        "etymology": "① PIE 중복사 어근 *de-doh₃-('주다')에서 유래한다. ② 동계어로 라틴어 dare, 산스크리트어 dā-, 러시아어 datь가 있다. ③ 후두음 탈락과 k-과거형 발달을 거쳤다. ④ 영어 dose, data, tradition 등이 이 어근에서 유래하며, Chantraine(DELG)과 Beekes(EDG)가 상세히 기술한다."
      }
    ]
  },
  {
    "ref": "Iliad 24.686",
    "trans": "만약 그대가 살아만 있다면 남겨진 자식들이 세 배나 더 많은 몸값을 치를 터인데,",
    "words": [
      {
        "g": "σεῖο",
        "pos": "대명사",
        "lemma": "σύ",
        "parse": "sg.gen.m.",
        "gloss_kr": "그대의, 그대가",
        "gloss_en": "of you",
        "syntax": "LFG에서 σεῖο는 형용사/분사 ζωοῦ의 소유격 보어로서 독립된 소유격 구문을 형성한다. 생성문법적으로 [DP [D' [NP σεῖο ζωοῦ]]] 구조에서 속격 절대구문을 이룬다.",
        "background": "네가 살아있다면 이라는 가정 전제 속에서 프리아모스 생존의 가치를 엄청난 경제적·가족적 보상과 연결하여 강조한다.",
        "etymology": "① PIE 인칭대명사 속격형 *te-so에서 유래한다. ② 산스크리트어 등의 언어형과 대응된다. ③ 호메로스 장모음 소유격 이형태로 보존되었다. ④ Chantraine(DELG)과 Beekes(EDG)가 상술한다."
      },
      {
        "g": "δέ",
        "pos": "접속사",
        "lemma": "δέ",
        "parse": "coord.conj.",
        "gloss_kr": "그리고, 그러나",
        "gloss_en": "and, but",
        "syntax": "등위접속사로서 앞서의 사실과 앞으로 일어날 수 있는 잠재적 상황을 연결한다. HPSG 구조상 [HEAD coord].",
        "background": "현재의 구출 행위와 미래에 치러질 수 있는 잠재적 몸값의 거대한 규모를 대비시키는 담화 표지이다.",
        "etymology": "① 앞서 설명한 δέ와 동일. ② 고대 그리스어 전형적 접속사. ③ 전접어. ④ LSJ와 Chantraine(DELG)."
      },
      {
        "g": "κε",
        "pos": "소사",
        "lemma": "κέν",
        "parse": "modal.particle",
        "gloss_kr": "~할 텐데",
        "gloss_en": "modal particle",
        "syntax": "양태 소사로서 희구법과 결합하여 가정법 의미를 부여한다. 생성문법적으로 조동사적 위치에 투사된다.",
        "background": "만약 네가 살아만 있다면 이라는 조건문 속에서 가정적 상황의 가능성을 열어주는 호메로스 특유의 입자이다.",
        "etymology": "① PIE 양태 소사 *kʷe에 기원한다. ② 고대 그리스어 내에서 ἄν과 통용되는 호메로스 방언형이다. ③ 단음절 전접어. ④ Chantraine(DELG)과 Beekes(EDG)가 다룬다."
      },
      {
        "g": "ζωοῦ",
        "pos": "형용사",
        "lemma": "ζωός, ζωόν",
        "parse": "sg.gen.m.",
        "gloss_kr": "살아있는",
        "gloss_en": "living, alive",
        "syntax": "LFG에서 ζωοῦ는 대명사 σεῖο를 수식하거나 독립된 소유격 구문의 핵으로서 속격 지배를 받는다. 생성문법적으로 [DP [D' [AP ζωοῦ]]] 구조를 이룬다.",
        "background": "노왕 프리아모스가 적진에서 목숨을 건져 무사히 살아 돌아간다면, 그의 생존 자체가 가문과 나라에 얼마나 큰 자산일지를 역설한다.",
        "etymology": "① PIE 재구형 *gʷīw-ó-('살아있는')이며 어근 *gʷeih₃-에 기원한다. ② 동계어로 라틴어 vīvus, 산스크리트어 jīvá-가 있다. ③ 후두음 탈락과 모음 교체를 거쳤다. ④ 영어 zoo, zodiac, quick 등이 이 어근에서 유래하며, Chantraine(DELG)과 Beekes(EDG)가 상세히 다룬다."
      },
      {
        "g": "καὶ",
        "pos": "부사",
        "lemma": "καί",
        "parse": "adv.",
        "gloss_kr": "심지어, 무려",
        "gloss_en": "even, also",
        "syntax": "강조 부사로서 수사 '트리스'와 결합하여 배가된 수치를 극적으로 강조한다. 생성문법적으로 초점 구문을 형성한다.",
        "background": "단지 똑같은 양이 아니라 '세 배나 더 많은' 엄청난 보물을 치를 수 있다는 극단적 과장을 나타낸다.",
        "etymology": "① 앞서 설명한 καί와 동일. ② 강조 용법. ③ 음운 변동 없음. ④ LSJ와 Chantraine(DELG)."
      },
      {
        "g": "τρὶς",
        "pos": "부사",
        "lemma": "τρís",
        "parse": "adv.",
        "gloss_kr": "세 번으로, 삼중으로",
        "gloss_en": "three times, thrice",
        "syntax": "LFG에서 τρὶς는 수사 부사로서 배수 역할을 수행하며 명사 τόσα를 수식한다. 생성문법적으로 [AdpP τρὶς [DP τόσα]] 구조를 이룬다.",
        "background": "현재 치른 몸값의 세 배에 달하는 거대한 부와 보상을 자식들이 기꺼이 치를 것이라는 과장법적 수사이다.",
        "etymology": "① PIE 재구형 *trís('세 번')이며 어근 *trei-('셋')에 기원한다. ② 동계어로 라틴어 ter, 산스크리트어 tríḥ가 있다. ③ 시그마 탈락 및 마찰음화 과정을 거쳤다. ④ 영어 thrice, triple 등이 이 어근에서 유래하며, Chantraine(DELG)과 Beekes(EDG)가 상술한다."
      },
      {
        "g": "τόσα",
        "pos": "대명사",
        "lemma": "τόσος, τόση, τόσον",
        "parse": "pl.acc.n.",
        "gloss_kr": "그만큼의 것들을",
        "gloss_en": "so much, so many",
        "syntax": "LFG에서 τόσα는 동사 δοῖεν의 목적어로서 대격 지배를 받는다. 생성문법적으로 [VP δοῖεν [DP τόσα]] 구조를 이루어 환자 역할을 수행한다.",
        "background": "이미 지불한 막대한 보물과 비교되는 거대한 경제적 가치를 가리키는 지시적 수량 대명사이다.",
        "etymology": "① PIE 지시 대명사 기원의 수량사 어근에서 유래한다. ② 고대 그리스어 고유의 상관대명사/수량사 체계로 발전했다. ③ 어미 변화를 거쳤다. ④ Chantraine(DELG)과 Beekes(EDG)에 등재되어 있다."
      },
      {
        "g": "δοῖεν",
        "pos": "동사",
        "lemma": "δίδωμι",
        "principalParts": "δίδωμι – δδώσω – ἔδωκα – δέδωκα – δέδομαι – ἐδόθην",
        "parse": "3rd.pl.aor.opt.act.",
        "gloss_kr": "줄 텐데",
        "gloss_en": "might give",
        "syntax": "LFG에서 δοῖεν은 가정법 주절의 술어로서 [PRED 'δίδωμι<SUBJ,OBJ>', TENSE past, MOOD opt, SUBJ [DP παῖδες], OBJ [DP τόσα]] 구조를 가진다. 희구법과 κε의 결합은 반사실적 가정절을 구성한다.",
        "background": "프리아모스의 아들들이 아버지의 생존을 위해서라면 기꺼이 국가의 모든 재산을 털어 삼배의 몸값을 치를 것이라는 깊은 효심과 재정적 능력을 예찬한다.",
        "etymology": "① 앞서 설명한 δίδωμι와 동일 PIE 어근 *de-doh₃-('주다')에서 유래한다. ② 희구법 단모음 어미의 호메로스적 특징을 보인다. ③ 음운론적 축약과 어미 변동을 겪었다. ④ Chantraine(DELG)과 Beekes(EDG)가 상술한다."
      },
      {
        "g": "ἄποινα",
        "pos": "명사",
        "lemma": "ἄποινα, ἀποίνων, τά",
        "parse": "pl.acc.n.",
        "gloss_kr": "속전으로, 보상으로",
        "gloss_en": "ransom, recompense",
        "syntax": "LFG에서 ἄποινα는 동사 δοῖεν의 이차 목적어 또는 목적격 보어로 기능한다. 생성문법적으로 [VP δοῖεν [DP ἄποινα]] 구조를 이루어 대가와 교환되는 재물을 나타낸다.",
        "background": "포로로 잡히거나 죽은 가족을 되찾기 위해 지불하는 고대 그리스의 공식적이고 거대한 몸값 제도를 가리키는 전문 용어이다.",
        "etymology": "① PIE 어근 *apó('멀리')와 파생 명사의 합성으로 추정된다. ② 고대 그리스어 전용 법률·서사시 어휘로 정착했다. ③ 음운 변화를 거쳤다. ④ Beekes(EDG)와 Chantraine(DELG)이 상세히 분석한다."
      }
    ]
  },
  {
    "ref": "Iliad 24.687",
    "trans": "만약 아가멤논 아트레ΐ데스가 알게 되고 또 모든 아하이아인들이 알기라도 한다면,",
    "words": [
      {
        "g": "παῖδες",
        "pos": "명사",
        "lemma": "παῖς, παιδός, ὁ/ἡ",
        "parse": "pl.nom.m.",
        "gloss_kr": "자식들이, 아들들이",
        "gloss_en": "sons, children",
        "syntax": "LFG에서 παῖδες는 동사 δοῖεν의 주어로서 주격 지배를 받는다. 생성문법적으로 [TP [DP παῖδες] [T' [vP t_subj [VP δοῖεν ...]]]] 구조를 이루어 행위자 역할을 수행한다.",
        "background": "프리아모스의 살아남은 자식들, 즉 왕국의 미래를 이어갈 왕자들이 아버지의 생환 시에 치를 수 있는 막대한 재정적 버팀목을 의미한다.",
        "etymology": "① PIE 재구형 *peh₂u-('작은, 아이')에서 유래한다. ② 동계어로 라틴어 puer, 산스크리트어 pōtá-가 있다. ③ 후두음 탈락과 파생 접미사 결합을 거쳤다. ④ 영어 pediatrics, pedagogy 등이 이 어근에서 유래하며, Chantraine(DELG)과 Beekes(EDG)가 상술한다."
      },
      {
        "g": "τοὶ",
        "pos": "관사",
        "lemma": "ὁ, ἡ, τόν",
        "parse": "pl.nom.m.",
        "gloss_kr": "그 자식들이",
        "gloss_en": "the (ones), who",
        "syntax": "LFG에서 τοὶ는 한정사 또는 관계성 성분으로서 명사 παῖδες를 한정하거나 후치 수식절을 이끈다. 생성문법적으로 [DP [D' [D τοὶ] [NP παῖδες]]] 구조를 이룬다.",
        "background": "호메로스 시문학에서 정관사의 원형적 지시 기능을 수행하며 명사를 수식하는 전형적인 구송적 어법이다.",
        "etymology": "① PIE 지시 대명사 *to-에서 유래한다. ② 동계어로 산스크리트어 tá-, 고대 고지독일어 der가 있다. ③ 호메로스 방언의 주격 복수 남성형으로 보존되었다. ④ Chantraine(DELG)과 Beekes(EDG)가 다룬다."
      },
      {
        "g": "μετόπισθε",
        "pos": "부사",
        "lemma": "μετόπισθεν",
        "parse": "adv.",
        "gloss_kr": "뒤에, 장차",
        "gloss_en": "afterwards, behind",
        "syntax": "LFG에서 μετόπισθε는 시간/공간 부사어로서 분사 λελειμμένοι의 배경을 수식한다. 생성문법적으로 [VP μετόπισθε [VP λελειμμένοι]] 구조를 이룬다.",
        "background": "왕이 돌아간 뒤에 홀로 남겨질 미래의 시간이나 후세를 가리키며, 비극적 여운을 남긴다.",
        "etymology": "① 전치사/부사 *meta와 어근 *opishe의 합성어이다. ② 고대 그리스어 복합 부사로 정착했다. ③ 음운론적 변동을 거쳤다. ④ Chantraine(DELG)과 Frisk(GEW)가 기록한다."
      },
      {
        "g": "λελειμμένοι",
        "pos": "분사",
        "lemma": "λείπω",
        "principalParts": "λείπω – λείψω – ἔλιπον – λέλοιπα – λέλειμμαι – ἐλείφθην",
        "parse": "perf.mid/pass.part.pl.nom.m.",
        "gloss_kr": "남겨진, 홀로 남은",
        "gloss_en": "left behind, surviving",
        "syntax": "LFG에서 λελειμμένοι는 주어 παῖδες를 수식하는 형용사적 분사로서 성·수·격 일치를 이룬다. 생성문법적으로 [DP [D' [AP λελειμμένοι] [NP παῖδες]]] 구조를 이루며 피동적 상태를 나타낸다.",
        "background": "아버지가 적진에서 돌아오지 못하거나 혹은 돌아온 뒤에 가문이 겪을 수 있는 고립과 슬픔 속에서 남겨진 자식들의 처지를 묘사한다.",
        "etymology": "① PIE 어근 *leyp-('끈적하게 남다')에서 유래한다. ② 동계어로 라틴어 linquō, 산스크리트어 lip-이 있다. ③ 완료 중수동태 형태와 중복사 과정을 거쳤다. ④ 영어 relinquish, derelict 등이 이 어근에서 유래하며, Chantraine(DELG)과 Beekes(EDG)가 상세히 다룬다."
      },
      {
        "g": "αἴ",
        "pos": "접속사",
        "lemma": "εἰ",
        "parse": "conditional.conj.",
        "gloss_kr": "만약 ~한다면",
        "gloss_en": "if",
        "syntax": "LFG에서 αἴ는 조건접속사로서 조건절을 이끈다. 생성문법적으로 [CP [C' αἴ [TP κ᾽ Ἀγαμέμνων γνώῃ ...]]] 구조를 형성한다.",
        "background": "만약 그리스의 총사령관 아가멤논이 네가 진영에 있다는 사실을 알게 되기라도 한다면 이라는 극단적인 가정 상황을 도입한다.",
        "etymology": "① PIE 조건 접속사 기원에서 유래한다. ② 호메로스 방언의 e->ai 모음 전이 형태이다. ③ 음운론적 변화를 겪었다. ④ Chantraine(DELG)과 Beekes(EDG)가 상술한다."
      },
      {
        "g": "κ᾽",
        "pos": "소사",
        "lemma": "κέν",
        "parse": "modal.particle",
        "gloss_kr": "~할진대",
        "gloss_en": "modal particle",
        "syntax": "양태 소사로서 조건접속사 αἴ와 결합하여 가정의 불확실성을 높인다. 생성문법적으로 조동사 영역에 투사된다.",
        "background": "아가멤논이 알게 되는 상황이 벌어졌을 때 발생할 파국적 결과를 암시하는 호메로스 필수 입자이다.",
        "etymology": "① PIE 양태 소사 *kʷe. ② 호메로스 축약형. ③ 엘리전 발생. ④ Chantraine(DELG)과 LSJ."
      },
      {
        "g": "Ἀγαμέμνων",
        "pos": "명사",
        "lemma": "Ἀγαμέμνων, Ἀγαμέμνονος, ὁ",
        "parse": "sg.nom.m.",
        "gloss_kr": "아가멤논이",
        "gloss_en": "Agamemnon",
        "syntax": "LFG에서 Ἀγαμέμνων은 조건절의 주어로서 주격 지배를 받는다. 생성문법적으로 [TP [DP Ἀγαμέμνων] [T' γνώῃ ...]] 구조를 이루어 행위자 역할을 수행한다.",
        "background": "그리스 연합군의 총사령관이자 야망과 권력욕이 강한 인물로, 프리아모스가 적진에 있다는 사실을 알 경우 냉혹하게 포로로 잡거나 협상 카드로 악용할 위험의 상징이다.",
        "etymology": "① 선그리스어 기층 또는 복합 고유명사로 분석된다. ② Beekes와 Chantraine은 그리스어 내부 민간어원적 해석과 기층어 가능성을 함께 논한다. ③ 명사 굴절 체계를 거쳤다. ④ 히타이트 기록의 Ahhiyawa 왕권과의 연관성이 역사언어학적으로 논의된 바 있다."
      }
    ]
  },
  {
    "ref": "Iliad 24.688",
    "trans": "너를 알아보고, 모든 아하이아인들도 알게 될 테니 말이다.”",
    "words": [
      {
        "g": "γνώῃ",
        "pos": "동사",
        "lemma": "γιγνώσκω",
        "principalParts": "γιγνώσκω – γνώσομαι – ἔγνων – ἔγνωκα – ἔγνωσμαι – ἐγνώσθην",
        "parse": "3rd.sg.aor.subj.act.",
        "gloss_kr": "알아채다, 발견하다",
        "gloss_en": "might recognize, should know",
        "syntax": "LFG에서 γνώῃ는 조건절의 술어로서 [PRED 'γιγνώσκω<SUBJ,OBJ>', MOOD subj, SUBJ [DP Ἀγαμέμνων], OBJ [DP σ᾽]] 구조를 가진다. 접속법은 미래의 가상적 사건을 나타낸다.",
        "background": "아가멤논이 프리아모스의 신원을 눈치채는 순간 모든 보호와 자비가 수포로 돌아가고 즉각적인 위협으로 돌변할 것임을 경고하는 핵심 동사이다.",
        "etymology": "① PIE 중복사 어근 *ǵih₁-ǵnō-('알다')에서 유래한다. ② 동계어로 라틴어 (g)nōscō, 영어 know, 산스크리트어 jānāti가 있다. ③ 후두음 탈락과 접속법 단모음 어미 변동을 거쳤다. ④ 영어 knowledge, recognize, agnostic 등이 이 어근에서 유래하며, Chantraine(DELG)과 Beekes(EDG)가 상세히 다룬다."
      },
      {
        "g": "σ᾽",
        "pos": "대명사",
        "lemma": "σύ",
        "parse": "sg.acc.m.",
        "gloss_kr": "그대를",
        "gloss_en": "you",
        "syntax": "LFG에서 σ᾽는 동사 γνώῃ의 목적어로서 대격 지배를 받는다. 생성문법적으로 [VP γνώῃ [DP σ᾽]] 구조를 이루어 인식의 대상 역할을 수행한다.",
        "background": "프리아모스 자신이 적장들에게 발각되어 목숨이 위태로워질 수 있는 절대적 위험을 가리킨다.",
        "etymology": "① 앞서 설명한 대명사 σύ의 대격형 σε와 동일. ② 엘리전 발생. ③ Chantraine(DELG)과 Beekes(EDG)."
      },
      {
        "g": "Ἀτρεΐδης",
        "pos": "명사",
        "lemma": "Ἀτρεΐδης, Ἀτρεΐδαο, ὁ",
        "parse": "sg.nom.m.",
        "gloss_kr": "아트레우스의 아들",
        "gloss_en": "son of Atreus",
        "syntax": "LFG에서 Ἀτρεΐδης는 주어 명사구의 동격어 또는 주어 핵으로서 주격 지배를 받는다. 생성문법적으로 [DP [D' [NP Ἀτρεΐδης]]] 구조를 이루며 혈통적 신원을 나타낸다.",
        "background": "아가멤논을 가리키는 전통적인 부칭으로, 그의 가문적 권위와 막중한 책임자로서의 지위를 강조한다.",
        "etymology": "① 고유명사 Ἀτρεύς에 부칭 접미사 *-ides가 결합한 형태이다. ② 선그리스어 및 인도유럽어 부칭 형성 규칙을 따른다. ③ 음운 변동을 거쳤다. ④ Chantraine(DELG)과 Beekes(EDG)가 상술한다."
      },
      {
        "g": "γνώωσι",
        "pos": "동사",
        "lemma": "γιγνώσκω",
        "principalParts": "γιγνώσκω – γνώσομαι – ἔγνων – ἔγνωκα – ἔγνωσμαι – ἐγνώσθην",
        "parse": "3rd.pl.aor.subj.act.",
        "gloss_kr": "알게 되다",
        "gloss_en": "might recognize, should know",
        "syntax": "LFG에서 γνώωσι는 후속 조건절의 술어로서 [PRED 'γιγνώσκω<SUBJ,OBJ>', MOOD subj, SUBJ [DP Ἀχαιοί], OBJ [DP σ᾽]] 구조를 가진다.",
        "background": "단지 아가멤논 한 사람뿐만 아니라 그리스 연합군 전체가 프리아모스의 존재를 알아차리는 순간 다가올 총체적 파국을 경고한다.",
        "etymology": "① 앞서 설명한 γνώῃ와 동일 PIE 어근 *ǵih₁-ǵnō-('알다'). ② 호메로스 접속법 복수 장모음 어미 특징을 보인다. ③ 음운 변동을 거쳤다. ④ Chantraine(DELG)과 Beekes(EDG)가 상세히 다룬다."
      },
      {
        "g": "δὲ",
        "pos": "접속사",
        "lemma": "δέ",
        "parse": "coord.conj.",
        "gloss_kr": "그리고",
        "gloss_en": "and",
        "syntax": "등위접속사로서 개인에서 전체로 인식이 확장되는 절을 연결한다. HPSG 구조상 [HEAD coord].",
        "background": "위협의 주체가 왕 개인에서 군대 전체로 증폭되는 과정의 서사적 전환을 매끄럽게 연결한다.",
        "etymology": "① 앞서 설명한 δέ와 동일. ② 고대 그리스어 표준 접속사. ③ 전접어. ④ LSJ와 Chantraine(DELG)."
      },
      {
        "g": "πάντες",
        "pos": "형용사",
        "lemma": "πᾶς, πᾶσα, πᾶν",
        "parse": "pl.nom.m.",
        "gloss_kr": "모든",
        "gloss_en": "all",
        "syntax": "LFG에서 πάντες는 명사 Ἀχαιοί를 수식하는 한정사/형용사로서 성·수·격 일치를 이룬다. 생성문법적 트리 구조는 [DP [D' [AP πάντες] [NP Ἀχαιοί]]]로 분석된다.",
        "background": "적대적인 그리스 군단 전체가 일제히 노왕의 존재를 알게 되었을 때 벌어질 무자비한 린치와 죽음을 암시한다.",
        "etymology": "① PIE 재구형 *peh₂-('보호하다') 또는 전반적 수량사 어근에서 유래한다. ② 동계어로 산스크리트어 pāti가 있다. ③ 후두음 탈락과 모음 교체를 거쳤다. ④ 영어 panorama, pantheon 등이 이 어근 접두어에서 유래하며, Chantraine(DELG)과 Beekes(EDG)가 상술한다."
      },
      {
        "g": "Ἀχαιοί",
        "pos": "명사",
        "lemma": "Ἀχαιοί, Ἀχαιῶν, οἱ",
        "parse": "pl.nom.m.",
        "gloss_kr": "아하이아인들이",
        "gloss_en": "Achaeans, Greeks",
        "syntax": "LFG에서 Ἀχαιοί는 조건절의 주어로서 주격 지배를 받는다. 생성문법적으로 [TP [DP Ἀχαιοί] [T' γνώωσι ...]] 구조를 이루어 집단적 행위자 역할을 수행한다.",
        "background": "트로이아 원정에 나선 그리스 연합군 전체를 일컫는 호메로스 시문학의 대표적 민족 명칭이다.",
        "etymology": "① 선그리스어 기층 또는 히타이트 기록의 Aḫḫiyawā와 역사언어학적으로 연관되는 고유명사이다. ② Beekes(EDG)와 Chantraine(DELG)은 지중해 기층 어휘 및 아나톨리아어군과의 접촉 가능성을 논의한다. ③ 명사 굴절 체계를 거친다. ④ 히타이트어 자료와의 비교 연구를 통해 고대 마이케네 문명과의 역사적 실체를 증명하는 핵심 어휘이다."
      }
    ]
  },
  {
    "ref": "Iliad 24.689",
    "trans": "그가 이같이 말하니, 노인은 두려워하여 전령을 일으켰다.",
    "words": [
      {
        "g": "ὣς",
        "pos": "부사",
        "lemma": "ὣς, ὧδε",
        "parse": "adv.",
        "gloss_kr": "이와 같이, 이렇게",
        "gloss_en": "thus, so",
        "syntax": "ὣς는 지시부사로, LFG에서 [ADJUNCT [PRED 'ὣς']]로 기능하며 후행하는 직접화법의 내용이나 앞선 발화를 지시한다. 통사적으로는 술어부 전체의 태도를 한정하는 수식어(adjunct)로 분석된다. 괄호 트리로는 [VP [AdvP ὣς] ἔφατο] 구조를 이룬다. 레빈슨式 정보구조에서 이는 직전 담화 맥락을 응집성 있게 연결하는 역할을 한다.",
        "background": "ὣς는 호메로스 서사시에서 전형적인 지시부사로, 인물의 발화 직전이나 직후에 상황을 요약·연결하는 정형구(formula)의 핵심 요소를 이룬다.",
        "etymology": "PIE *sws-('이와 같이, 이렇게')에서 유래하며, Chantraine(DELG)과 Beekes(EDG)는 이를 대명사 어근 *s-와 연관시킨다. 동계어로 산스크리트어 vas(?), 라틴어 sīs(?), 고대 교회 슬라브어 sŭ 등을 비교할 수 있으나 음운론적 세부 사항은 논쟁적이다. 그리스어 내에서 ὧδε 및 호메로스적 ὣς 형태로 분화되었으며, 후대 그리스어에는 주로 고전적 표현이나 관용구로 제한된다."
      },
      {
        "g": "ἔφατ᾽",
        "pos": "동사",
        "lemma": "φημί",
        "principalParts": "φημί – φήσω – ἔφησα – (미상) – (미상) – (미상)",
        "parse": "3rd.sg.impf.ind.mid.",
        "gloss_kr": "말했다",
        "gloss_en": "he/she spoke",
        "syntax": "ἔφατ᾽는 주절의 술어로서 LFG에서 [PRED 'φημί<SUBJ>', TENSE past, ASPECT impf, SUBJ [PRED 'pro', PERS 3, NUM sg]]로 분석된다. 미완료과거 중동태형 ἔφατο(엘리전으로 ἔφατ᾽)는 구어적 인용 도입 구문의 전형적인 통사적 핵을 형성하며, 주어는 문맥상 헤르메스(또는 앞서 말한 이)를 가리키는 pro-drop이다. 괄호 트리 구조로는 [IP [DP pro] [I' ἔφατ᾽ [VP t]]]로 나타낸다.",
        "background": "ὣς ἔφατο(또는 ἔφατ᾽)는 호메로스 서사시에서 발화 행위를 종결하거나 전환하는 대표적인 정형구(formula)이다. 이 행에서는 헤르메스의 말이 끝나고 이에 반응하는 프리아모스의 행동을 이끌어내는 전환점 역할을 한다.",
        "etymology": "φημί는 PIE 어근 *bʰeh₂-('말하다')에서 유래하며, 에블라우트 e급(*bʰeh₂-)과 영급(*bʰh₂-)의 교체를 보인다(Chantraine DELG, Beekes EDG). 동계어로 라틴어 fārī('말하다'), 영어 fame, infant 등이 있다. 그리스어 내에서 발화 동사의 기본형으로 정착하였으며, 현대 그리스어에서는 고전 어휘로만 생존한다."
      },
      {
        "g": "ἔδεισεν",
        "pos": "동사",
        "lemma": "δείδω",
        "principalParts": "δείδω – δείσομαι – ἔδεισα – δέδοικα / δείδεια – (미상) – (미상)",
        "parse": "3rd.sg.aor.ind.act.",
        "gloss_kr": "두려워했다, 겁먹었다",
        "gloss_en": "feared, was afraid",
        "syntax": "ἔδεισεν은 주절의 시제 동사로 LFG 자질구조 [PRED 'δείδω<SUBJ,OBJ?>', TENSE past, ASPECT aor, SUBJ [PRED 'γέρων', CASE nom]]를 가진다. 주어 'γέρων'이 nominative로 주격 지배(nominative case assignment)를 받으며, aorist 시제는 순간적·돌발적 심리 상태의 변화를 나타낸다. 괄호 트리로는 [TP [DP ὃ γέρων] [T' ἔδεισεν]]으로 분석된다.",
        "background": "신적인 존재(헤르메스)의 준엄한 권고나 말에 압도된 노인 프리아모스의 즉각적인 공포와 경외감을 생생하게 드러내는 표현이다. 헤르메스의 정체를 눈치채고 느끼는 원초적 두려움이 서사적 긴장감을 높인다.",
        "etymology": "PIE 어근 *dwei-('두려워하다, 놀라다')에서 유래하며, 중복어간(reduplication)을 형성한다(Chantraine DELG, Beekes EDG). *dwei- > *de-dwi- > δείδω의 음운 변화를 거쳤으며, aorist 형태 ἔδεισα는 s-aorist로 발전했다. 동계어로 산스크리트어 dvēṣṭi(?), 리투아니아어 dvėsti(?), 고대 영어 twēon('의심하다') 등이 있다. 영어 dire(< 라틴어 dīrus의 기원 관련성 논성 있음) 및 고대 그리스어 δεινός('무서운')와 어원이 같다."
      },
      {
        "g": "δ᾽",
        "pos": "접속사",
        "lemma": "δέ",
        "parse": "coord.conj.",
        "gloss_kr": "그리고, 그러나",
        "gloss_en": "and, but",
        "syntax": "δέ는 등위접속사로 LFG에서 [COORD-TYPE coordinating] 자질을 가지며, 앞의 절과 뒤의 절을 대등하게 연결하는 통사적 접속 기능을 수행한다. HPSG 구조상 [HEAD conjunct, CONT [RELATION coord]]로 분석되며, 후치사적 위치(second-position enclitic) 특성을 보인다.",
        "background": "호메로스 문체에서 문장과 절을 긴밀하게 엮어주는 가장 흔한 대조·병렬 접속사로, 서사의 물줄기를 자연스럽게 이어준다.",
        "etymology": "PIE 기원이 불확실하며, Beekes(EDG)는 선그리스어 기층 혹은 고유한 인도유럽어계 불변화사로 본다. Chantraine(DELG)은 독립된 어원 확정을 유보한다. 그리스어 전 시기에 걸쳐 절 간 연결의 핵심 요소로 활용되었으나 현대 그리스어에서는 낱말로는 소멸하고 δέν(부정사) 등으로 변형 흡수되었다."
      },
      {
        "g": "ὃ",
        "pos": "관사",
        "lemma": "ὁ, ἡ, τό",
        "parse": "sg.nom.m.",
        "gloss_kr": "그, 그 노인",
        "gloss_en": "the, he",
        "syntax": "ὃ는 한정사(determiner) 또는 대명사로서 명사 'γέρων'을 수식하거나 한정하며, LFG에서 [SPEC def, DEF +, CASE nom, NUM sg, GEND m]으로 분석된다. 통사적으로 NP 내의 [D' D NP] 구조에서 D 자리를 점유하며, 호메로스적 용법에서 지시성이 강한 관사/대명사로 기능한다.",
        "background": "호메로스 시에서 ὃ γέρων 형태는 명확한 지칭성을 부여하며, 프리아모스의 나이와 취약한 신분, 그리고 헤르메스 앞에서 느끼는 무력함을 강조한다.",
        "etymology": "PIE 지시사 어근 *to- / *so-에서 유래하며, 그리스어에서 *s-가 h-로 음운 변화를 겪었다(Chantraine DELG, Beekes EDG). 동계어로 산스크리트어 sá, 고대 아베스타어 ha, 산스크리트어 tā-, 고대 영어 se/seo/þæt 등이 있다. 영어 the, that과 어원이 동일하며, 현대 그리스어에서는 정관사(ο, η, το)로 발달했다."
      },
      {
        "g": "γέρων",
        "pos": "명사",
        "lemma": "γέρων, γέροντος, ὁ",
        "parse": "sg.nom.m.",
        "gloss_kr": "노인, 나이 많은 이",
        "gloss_en": "old man, elder",
        "syntax": "γέρων은 주절의 주어 NP의 핵(head)으로서 주격(nominative)을 취하며, LFG 자질구조 [PRED 'γέρων', NUM sg, GEND m, CASE nom, θ-ROLE AGENT]로 표시된다. 괄호 트리 구조상 [DP [D ὃ] [NP γέρων]]으로 결합하여 동사 ἔδεισεν의 주어 논항을 충족한다.",
        "background": "트로이의 왕 프리아모스를 가리키는 호칭으로, 그의 고령과 연약함이 신적인 위협 앞에서 부각된다. 아들을 찾기 위해 적진에 홀로 찾아온 노부모의 비극성과 절박함을 상징하는 단어이다.",
        "etymology": "PIE 어근 *gerH-('늙다')에서 파생된 분사형/명사형 접미사 *-ont-과의 결합에서 유래한다(Beekes EDG, Chantraine DELG). *gerH- > γέρων의 음운 변화를 거쳤으며, r-vocalization과 모음 교체가 일어났다. 동계어로 리투아니아어 gėris(?), 고대 아르메니아어 cer('늙은이') 등이 있다. 영어 gerontology(< 그리스어 γέρων + λόγος)의 어원이 되며, 현대 그리스어에는 고어적 표현으로 남아 있다."
      },
      {
        "g": "κήρυκα",
        "pos": "명사",
        "lemma": "κῆρυξ, κήρυκος, ὁ",
        "parse": "sg.acc.m.",
        "gloss_kr": "전령, 사자",
        "gloss_en": "herald",
        "syntax": "κήρυκα은 동사 ἀνίστη의 목적어(OBJ)로서 대격(accusative) 지배를 받으며, LFG에서 [PRED 'κῆρυξ', CASE acc, θ-ROLE PATIENT]로 분석된다. 괄호 트리로는 [VP κήρυκα [V' ἀνίστη]] 구조를 형성하며, 지시적 목적어로서 행동의 객체가 된다.",
        "background": "프리아모스를 수행하는 충실한 노전령 이다이오스를 가리킨다. 프리아모스가 두려움에 떨면서도 신속하게 전령을 깨워 수레를 준비하고 움직이도록 지시하는 장면이다.",
        "etymology": "선그리스어(Pre-Greek) 기층 어휘로 분류되며, Beekes(EDG)는 인도유럽어계 어원을 부정하고 기층 언어 유래설을 지지한다. Chantraine(DELG) 또한 인도유럽어 내 동계어를 찾기 어렵다고 지적한다. 그리스어 내에서 고대부터 전령 제도의 핵심 어휘로 사용되었으며, 현대 그리스어에는 직접 이어지지 않고 고전 인용이나 전문 용어로 제한된다."
      },
      {
        "g": "δ᾽",
        "pos": "접속사",
        "lemma": "δέ",
        "parse": "coord.conj.",
        "gloss_kr": "그리고",
        "gloss_en": "and",
        "syntax": "앞서 설명한 바와 같이 등위접속사로 작용하여 앞 절과 뒤의 동사 행동을 대등하게 연결한다.",
        "background": "절 내에서 행동의 연속성을 빠르게 이어주는 전형적인 구송 시의 접속 장치이다.",
        "etymology": "(위 689.4 항목 참조)"
      },
      {
        "g": "ἀνίστη",
        "pos": "동사",
        "lemma": "ἀνίστημι",
        "principalParts": "ἀνίστημι – ἀναστήσω – ἀνέστησα – ἀνέστηκα – (미상) – ἀνεστάθην",
        "parse": "3rd.sg.impf.ind.act.",
        "gloss_kr": "일어나게 했다, 일으켰다",
        "gloss_en": "made to rise, roused",
        "syntax": "ἀνίστη는 주절의 타동사 술어로서 LFG 자질구조 [PRED 'ἀνίστημι<SUBJ,OBJ>', TENSE past, ASPECT impf, SUBJ [PRED 'γέρων', CASE nom], OBJ [PRED 'κῆρυξ', CASE acc]]를 가진다. 미완료시제(impf)는 프리아모스가 전령을 깨우는 동작의 긴박한 전개를 나타낸다. 괄호 트리 구조로는 [TP [DP ὃ γέρων] [T' ἀνίστη [VP κήρυκα]]]로 분석된다.",
        "background": "두려움에 휩싸인 프리아모스가 잠자거나 대기하던 전령(이다이오스)을 급히 깨워 임무를 수행하도록 채근하는 긴박한 행동을 묘사한다.",
        "etymology": "전치사 ἀνά와 동사 ἵστημι(어근 *stah₂-, '서다')의 합성어이다(Chantraine DELG, Beekes EDG). PIE *stah₂-에서 그라스만의 법칙 및 음운 변화를 거쳐 그리스어 ἵστημι로 발전했다. 동계어로 산스크리트어 tiṣṭhati, 라틴어 stāre, 영어 stand 등이 있다. 영어 sister(?), state, stay 등과 어원이 통하며, 현대 그리스어 ἀνασταίνω('일으키다, 부활시키다')로 이어진다."
      }
    ]
  },
  {
    "ref": "Iliad 24.690",
    "trans": "그들에게 헤르메스는 말과 노새들에 멍에를 얹어주었다.",
    "words": [
      {
        "g": "τοῖσιν",
        "pos": "대명사",
        "lemma": "ὁ, ἡ, τό",
        "parse": "pl.dat.m.",
        "gloss_kr": "그들에게",
        "gloss_en": "to them",
        "syntax": "τοῖσιν은 여격(dative) 복수 형태로, 동사 ζεῦξ᾽의 간접목적어(IOBJ) 또는 이익여격(dative of interest)으로 기능한다. LFG에서 [PRED 'pron', CASE dat, TH-ROLE BENEFICIARY]로 분석되며, 괄호 트리로는 [PP [DP τοῖσιν]] 구조를 이룬다.",
        "background": "신들의 사자 헤르메스가 프리아모스와 전령에게 친히 수레의 짐승들을 멍에에 묶어주는 자상하고도 신비로운 지원을 나타낸다.",
        "etymology": "PIE 지시사 어근 *to- / *so-에서 유래한 지시명사/관사 형태로, 호메로스어 특유의 장모음 여격 복수 어미 *-ισιν을 취한다(Chantraine DELG, Beekes EDG). 동계어로 산스크리트어 tébhyas, 고대 슬라브어 tŭmŭ 등이 있다. 현대 그리스어에서는 정관사의 여격이 소멸하여 직접 쓰이지 않는다."
      },
      {
        "g": "δ᾽",
        "pos": "접속사",
        "lemma": "δέ",
        "parse": "coord.conj.",
        "gloss_kr": "그리고",
        "gloss_en": "and",
        "syntax": "등위접속사로 앞 문장의 행동과 헤르메스의 행위를 연결한다.",
        "background": "서사의 전환을 매끄럽게 이어주는 대조·병렬 접속사이다.",
        "etymology": "(위 689.4 항목 참조)"
      },
      {
        "g": "Ἑρμείας",
        "pos": "명사(고유)",
        "lemma": "Ἑρμείας, Ἑρμείου, ὁ",
        "parse": "sg.nom.m.",
        "gloss_kr": "헤르메스",
        "gloss_en": "Hermes",
        "syntax": "Ἑρμείας는 주절의 주어 NP로서 주격(nominative)을 취하며, LFG 자질구조 [PRED 'Ἑρμείας', NUM sg, GEND m, CASE nom, TH-ROLE AGENT]로 분석된다. 괄호 트리상 [DP [D e] [NP Ἑρμείας]]로 동사 ζεῦξ᾽의 주어 논항을 충족한다.",
        "background": "제우스의 아들이자 여행자와 사자의 수호신인 헤르메스는 프리아모스를 인간의 눈에 띄지 않게 안전하게 적진으로 인도하는 안내자 역할을 맡고 있다.",
        "etymology": "선그리스어(Pre-Greek) 기층 어휘로, Beekes(EDG)는 인도유럽어 어원을 배제하고 무덤의 돌무더기(herma)와 관련된 선그리스어 지명/신명 기층에서 유래했다고 본다. Chantraine(DELG) 또한 어원의 비인도유럽어적 성격을 인정한다. 현대 그리스어에는 고전 인용이나 신화적 맥락으로만 남아 있다."
      },
      {
        "g": "ζεῦξ᾽",
        "pos": "동사",
        "lemma": "ζεύγνυμι",
        "principalParts": "ζεύγνυμι – ζεύξω – ἔζευξα – (미상) – ἔζευγμαι – ἐζεύχθην / ἐζύγην",
        "parse": "3rd.sg.aor.ind.act.",
        "gloss_kr": "멍에를 맸다",
        "gloss_en": "yoked, harnessed",
        "syntax": "ζεῦξ᾽는 주절의 서술어로서 LFG에서 [PRED 'ζεύγνυμι<SUBJ,OBJ1,OBJ2>', TENSE past, ASPECT aor, SUBJ [PRED 'Ἑρμείας', CASE nom], OBJ1 [PRED 'ἵππους', CASE acc], OBJ2 [PRED 'ἡμιόνους', CASE acc]]로 분석된다. 괄호 트리로는 [TP [DP Ἑρμείας] [T' ζεῦξ᾽ [VP ἵππους ἡμιόνους τε]]]로 구성된다.",
        "background": "헤르메스가 직접 신적인 능력으로 말과 노새를 수레에 능숙하게 멍에 채워주는 장면으로, 인간의 수고를 덜어주는 신의 은총을 보여준다.",
        "etymology": "PIE 어근 *yeug-('결합하다, 멍에를 씌우다')에서 유래한다(Chantraine DELG, Beekes EDG). *yeug- > ζεύγνυμι의 음운 변화를 겪었으며, s-aorist 형태 ἔζευξα를 발전시켰다. 동계어로 산스크리트어 yūnakti, 라틴어 iungere, 영어 yoke 등이 있다. 영어 join, junction, yoga 등과 어원이 같으며, 현대 그리스어 ζευγάρι('쌍, 커플')로 이어진다."
      },
      {
        "g": "ἵππους",
        "pos": "명사",
        "lemma": "ἵππος, ἵππου, ὁ/ἡ",
        "parse": "pl.acc.m.",
        "gloss_kr": "말들을",
        "gloss_en": "horses",
        "syntax": "ἵππους는 ζεῦξ᾽의 직접목적어(OBJ)로서 대격 복수(accusative plural)를 취하며, LFG에서 [PRED 'ἵππος', CASE acc, NUM pl, TH-ROLE PATIENT]로 분석된다. 괄호 트리상 [NP ἵππους]로 수레에 매어지는 대상이다.",
        "background": "프리아모스가 타기 위해 가져온 영웅의 명마들을 가리키며, 헤르메스가 이들을 노새와 함께 수레에 멍에 채운다.",
        "etymology": "PIE 어근 *ekwos('말')에서 유래한다(Chantraine DELG, Beekes EDG). *ekwos > ἵππος로의 음운 변화를 겪었다. 동계어로 산스크리트어 áśva-, 라틴어 equus, 고대 아일랜드어 ech 등이 있다. 영어 equine, chivalry의 어원이 되며, 현대 그리스어 ἵππος 계열로 이어진다."
      },
      {
        "g": "ἡμιόνους",
        "pos": "명사",
        "lemma": "ἡμίονος, ἡμιόνου, ὁ/ἡ",
        "parse": "pl.acc.m.",
        "gloss_kr": "노새들을",
        "gloss_en": "mules",
        "syntax": "ἡμιόνους는 ἵππους와 함께 동사 ζεῦξ᾽의 병렬 목적어(OBJ)를 구성하며 대격 복수(accusative plural)이다. LFG에서 [PRED 'ἡμίονος', CASE acc, NUM pl, TH-ROLE PATIENT]로 분석된다.",
        "background": "보물과 시신을 실을 수레를 끌기 위해 함께 동원된 노새들로, 실용적인 짐꾼 역할을 한다.",
        "etymology": "ἥμισυς('절반의')와 ὀῖνος/ὄνος('당나귀')의 합성어로, '반당나귀'라는 뜻을 지닌다(Chantraine DELG, Beekes EDG). PIE 어근 *sēmi-('반')와 *onos('당나귀')의 결합이다. 동계어로 라틴어 sēmi-, 영어 semi-가 있으며, 현대 그리스어 ἡμίονος/μουλάρι로 이어진다."
      },
      {
        "g": "τε",
        "pos": "접속사",
        "lemma": "τε",
        "parse": "enclitic.coord.conj.",
        "gloss_kr": "그리고",
        "gloss_en": "and",
        "syntax": "τε는 전접등위접속사(postpositive enclitic conjunction)로, LFG에서 [COORD-TYPE additive] 자질을 가지며 ἵππους와 ἡμιόνους를 긴밀하게 연결하는 후치 접속 구조 [NP [NP ἵππους] [ConjP ἡμιόνους τε]]를 형성한다.",
        "background": "호메로스 시에서 두 대상을 한 쌍으로 묶어 표현하는 대표적인 상투적 접속 어법이다.",
        "etymology": "PIE 어근 *kʷe('그리고')에서 유래하며, 산스크리트어 ca, 라틴어 -que, 고대 교회 슬라브어 če와 동계어이다(Chantraine DELG, Beekes EDG)."
      }
    ]
  },
  {
    "ref": "Iliad 24.691",
    "trans": "그는 재빨리 직접 군대 사이로 몰았으니, 아무도 알아보지 못했다.",
    "words": [
      {
        "g": "ῥίμφα",
        "pos": "부사",
        "lemma": "ῥίμφα",
        "parse": "adv.",
        "gloss_kr": "재빨리, 날쌔게",
        "gloss_en": "swiftly, lightly",
        "syntax": "ῥίμφα는 부사로서 동사 ἔλαυνε를 수식하며 LFG에서 [ADJUNCT [PRED 'ῥίμφα', MODIFIER 'ἔλαυνε']]로 분석된다. 통사적으로 VP 내의 부사구 수식어 자리를 점하며, 괄호 트리로는 [VP [AdvP ῥίμφα] ἔλαυνε]이다.",
        "background": "헤르메스가 신속하고 은밀하게 수레를 몰아 적진의 한복판을 통과하는 장면의 속도감을 부여한다.",
        "etymology": "ῥίπτω('던지다, 빠르게 움직이다')와 연관된 어근에서 유래한 부사형이다(Chantraine DELG, Beekes EDG)."
      },
      {
        "g": "δ᾽",
        "pos": "접속사",
        "lemma": "δέ",
        "parse": "coord.conj.",
        "gloss_kr": "그리고",
        "gloss_en": "and",
        "syntax": "등위접속사로 앞 행동에 이어지는 주어의 움직임을 연결한다.",
        "background": "서사의 흐름을 쉼 없이 전개시키는 접속 장치이다.",
        "etymology": "(위 689.4 항목 참조)"
      },
      {
        "g": "ἄρ᾽",
        "pos": "소사",
        "lemma": "ἄρα",
        "parse": "discourse.part.",
        "gloss_kr": "과연, 마침내",
        "gloss_en": "then, accordingly",
        "syntax": "ἄρα는 담화 표지(discourse particle)로서 전접어(enclitic)로 기능하며, LFG에서 [DISCOURSE-FUNC connective] 자질을 갖는다. 앞맥락과 인과적·상황적 일치를 나타내며, 괄호 트리상 절의 두 번째 위치에 고정된다.",
        "background": "앞서 신이 멍에를 멘 결과로 곧바로 이어진 은밀하고 거침없는 질주의 필연성을 강조하는 호메로스적 소사이다.",
        "etymology": "PIE 기원이 확실치 않으나, 감정이나 상황의 전환을 나타내는 오래된 입말 소사이다(Chantraine DELG, Beekes EDG)."
      },
      {
        "g": "αὐτὸς",
        "pos": "대명사",
        "lemma": "αὐτός, αὐτή, αὐτό",
        "parse": "sg.nom.m.",
        "gloss_kr": "그 자신이",
        "gloss_en": "himself",
        "syntax": "αὐτὸς는 주어 강조 대명사로서 주격(nominative)을 취하며, LFG에서 [PRED 'αὐτός', CASE nom, NUM sg, GEND m, FUNCTION subject-emphatic]으로 분석된다. 괄호 트리로는 [DP [D e] [NP αὐτὸς]]로 동사 ἔλαυνε의 주어를 수식하거나 강조한다.",
        "background": "다른 사람의 도움 없이 헤르메스 신 자신이 직접 수레의 고삐를 잡고 몰았음을 강조하여 신의 직접 개입을 부각한다.",
        "etymology": "PIE 기원이 불분명하며, 선그리스어 기층 또는 고유 인도유럽어 대명사 강조형 어근에서 발달한 것으로 본다(Beekes EDG, Chantraine DELG)."
      },
      {
        "g": "ἔλαυνε",
        "pos": "동사",
        "lemma": "ἐλαύνω",
        "principalParts": "ἐλαύνω – ἐλάσω – ἤλασα – ἐλήλακα – ἐλήλαμαι – ἠλάθην",
        "parse": "3rd.sg.impf.ind.act.",
        "gloss_kr": "몰았다",
        "gloss_en": "drove, urged on",
        "syntax": "ἔλαυνε는 주절의 서술어로서 LFG 자질구조 [PRED 'ἐλαύνω<SUBJ,OBJ>', TENSE past, ASPECT impf, SUBJ [PRED 'αὐτός', CASE nom]]를 가진다. 미완료시제(impf)는 적진 한복판을 가로질러 달리는 행위의 지속적 과정을 생생하게 묘사한다.",
        "background": "그리스 연합군의 삼엄한 경계와 군영 한복판을 헤르메스가 신의 권능으로 수레를 몰고 지나가는 긴장감 넘치는 장면이다.",
        "etymology": "PIE 어근 *el-('몰다, 가다')에서 유래한다(Chantraine DELG, Beekes EDG). *el- > ἐλαύνω의 음운 변화를 거쳤으며, 현재형 확장 접미어 *-n-을 취했다."
      },
      {
        "g": "κατὰ",
        "pos": "전치사",
        "lemma": "κατά",
        "parse": "prep.+acc.",
        "gloss_kr": "~를 가로질러",
        "gloss_en": "through, down along",
        "syntax": "κατά는 대격(accusative)을 지배하는 전치사로, LFG에서 [PRED 'κατά<ACC>', CASE-GOV acc]로 분석된다. 통사적으로 [PP κατά [NP στρατόν]] 구를 이루어 이동의 공간적 경로(path)를 한정하는 부사구(adjunct)로 기능한다.",
        "background": "그리스 군대의 진영(στρατόν) 사이를 아무도 모르게 관통하는 공간적 이동 경로를 설정한다.",
        "etymology": "PIE 부사/전치사 어근 *kata('~아래로, ~를 향해')에서 유래한다(Chantraine DELG, Beekes EDG)."
      },
      {
        "g": "στρατόν",
        "pos": "명사",
        "lemma": "στρατός, στρατοῦ, ὁ",
        "parse": "sg.acc.m.",
        "gloss_kr": "군대, 진영",
        "gloss_en": "camp, army",
        "syntax": "στρατόν은 전치사 κατά의 지배를 받는 목적어로서 대격(accusative)을 취하며, LFG 자질구조 [PRED 'στρατός', CASE acc, NUM sg, GEND m, TH-ROLE PATH]로 분석된다.",
        "background": "아킬레우스와 그리스 연합군의 군영으로, 평소라면 엄중하게 경계되어 접근이 불가능한 곳이다.",
        "etymology": "PIE 어근 *str-('펴다, 야영하다')에서 파생된 명사로, 군대의 '펼쳐진 진영'을 뜻한다(Chantraine DELG, Beekes EDG)."
      },
      {
        "g": "οὐδέ",
        "pos": "접속사",
        "lemma": "οὐδέ",
        "parse": "neg.coord.conj.",
        "gloss_kr": "그리고 ~않았다",
        "gloss_en": "and not, nor",
        "syntax": "οὐδέ는 부정 등위접속사로, LFG에서 [POLARITY negative, COORD-TYPE additive] 자질을 가지며 앞절의 행위 결과로 이어지는 부정 진술을 도입한다.",
        "background": "신적인 은폐 마법 혹은 헤르메스의 권능으로 인해 삼엄한 경계 속에서도 그 누구의 눈에도 띄지 않았음을 강조한다.",
        "etymology": "부정사 οὐ와 접속사 δέ의 합성어이다(Chantraine DELG, Beekes EDG)."
      },
      {
        "g": "τις",
        "pos": "대명사",
        "lemma": "τις, τι",
        "parse": "sg.nom.m.",
        "gloss_kr": "어떤 사람, 누군가",
        "gloss_en": "anyone, someone",
        "syntax": "τις는 부정대명사로서 주격(nominative)을 취하며, LFG 자질구조 [PRED 'tis', NUM sg, GEND m, CASE nom, POLARITY-SCOPE negative]로 분석된다. 부정어 οὐδέ와 결합하여 전형적인 양화사 부정(nary quantification)을 형성한다.",
        "background": "그리스 군영의 수많은 병사들 중 단 한 사람도 프리아모스와 헤르메스의 수레를 알아보지 못했다는 절대적 은폐 상태를 나타낸다.",
        "etymology": "PIE 의문/부정 대명사 어근 *kʷi- / *kʷo-에서 유래한다(Chantraine DELG, Beekes EDG)."
      },
      {
        "g": "ἔγνω",
        "pos": "동사",
        "lemma": "γιγνώσκω",
        "principalParts": "γιγνώσκω – γνώσομαι – ἔγνων – ἔγνωκα – ἔγνωσμαι – ἐγνώσθην",
        "parse": "3rd.sg.aor.ind.act.",
        "gloss_kr": "알아보았다",
        "gloss_en": "recognized, knew",
        "syntax": "ἔγνω는 종속/주절의 서술어로서 LFG 자질구조 [PRED 'γιγνώσκω<SUBJ,OBJ>', TENSE past, ASPECT aor, SUBJ [PRED 'τις', CASE nom]]를 가진다. 루트 부정과거(root aorist) 형태는 순간적인 인식의 실패를 명확하게 드러낸다.",
        "background": "신의 가시적 은총 아래 프리아모스의 위험천만한 잠입이 완벽하게 성공하고 있음을 보여주는 결정적인 서사적 순간이다.",
        "etymology": "PIE 어근 *gʷneh₃- / *gʷen-('알다')에서 유래한다(Chantraine DELG, Beekes EDG). aorist 형태 ἔγνων은 비시그마틱 루트 aorist의 대표적 예다."
      }
    ]
  },
  {
    "ref": "Iliad 24.692",
    "trans": "그러나 마침내 아름답게 흐르는 강(크산토스)의 여울목에 이르렀으니",
    "words": [
      {
        "g": "ἀλλ᾽",
        "pos": "접속사",
        "lemma": "ἀλλά",
        "parse": "coord.conj.",
        "gloss_kr": "그러나, 그러다가",
        "gloss_en": "but, then when",
        "syntax": "ἀλλά는 대조·전환 등위접속사로, LFG에서 [COORD-TYPE contrastive] 자질을 가지며 앞의 이동 과정에서 새로운 국면으로 서사를 전환한다.",
        "background": "은밀한 질주 끝에 목적지인 강에 도달하는 장면으로 서사의 공간적 배경이 전환되는 시점을 알린다.",
        "etymology": "PIE 기원상 다른 대명사/부사 어근에서 분화된 것으로 보이며, Beekes(EDG)와 Chantraine(DELG)은 대조를 나타내는 고유 그리스어 불변화사적 발달로 설명한다."
      },
      {
        "g": "ὅτε",
        "pos": "접속사",
        "lemma": "ὅτε",
        "parse": "subord.conj.",
        "gloss_kr": "~할 때에",
        "gloss_en": "when",
        "syntax": "ὅτε는 종속 접속사로, LFG에서 [SUBORD-TYPE temporal] 자질을 가지며 시간 부사절(temporal clause)을 이끈다.",
        "background": "호메로스 서사시에서 시간적 배경과 사건의 동시성을 포착하는 전형적인 종속절 도입구이다.",
        "etymology": "PIE 관계대명사/의문대명사 어근 *jo-와 시간 대명사 어근의 결합에서 유래한다(Chantraine DELG, Beekes EDG)."
      },
      {
        "g": "δὴ",
        "pos": "소사",
        "lemma": "δή",
        "parse": "discourse.part.",
        "gloss_kr": "마침내, 과연",
        "gloss_en": "indeed, then",
        "syntax": "δή는 강조 및 담화 표지 소사로서 LFG에서 [DISCOURSE-FUNC emphatic] 자질을 가지며 시간 접속사 ὅτε와 결합하여 시점의 확실성과 긴박함을 부각한다.",
        "background": "서사 전개상 중요한 국면 전환의 순간을 청중에게 각인시키는 호메로스 시의 필수적 강조 소사이다.",
        "etymology": "PIE 기원은 불분명하나 그리스어 내에서 실존적 강조 기능을 확립한 토속 불변화사이다(Chantraine DELG, Beekes EDG)."
      },
      {
        "g": "πόρον",
        "pos": "명사",
        "lemma": "πόρος, πόρου, ὁ",
        "parse": "sg.acc.m.",
        "gloss_kr": "여울목, 나루터",
        "gloss_en": "ford, crossing place",
        "syntax": "πόρον은 동사 ἷξον의 직접목적어(OBJ)로서 대격(accusative)을 취하며, LFG 자질구조 [PRED 'πόρος', CASE acc, NUM sg, GEND m, TH-ROLE DESTINATION/PATIENT]로 분석된다.",
        "background": "강을 건너기 위해 수레가 도달한 안전한 도섭지(나루터)를 가리킨다.",
        "etymology": "PIE 어근 *per-('건너다, 통과하다')에서 유래한다(Chantraine DELG, Beekes EDG). *per- > πόρος의 음운 변화를 거쳤다."
      },
      {
        "g": "ἷξον",
        "pos": "동사",
        "lemma": "ἵκω",
        "principalParts": "ἵκω – ἥξω – ἷξον – (미상) – (미상) – (미상)",
        "parse": "3rd.pl.aor.ind.act.",
        "gloss_kr": "이르렀다, 도착했다",
        "gloss_en": "they reached, arrived",
        "syntax": "ἷξον는 종속절의 서술어로서 LFG 자질구조 [PRED 'ἵκω<SUBJ,OBJ>', TENSE past, ASPECT aor, SUBJ [PRED 'pro', PERS 3, NUM pl], OBJ [PRED 'πόρον', CASE acc]]를 가진다.",
        "background": "트로이 근처의 거대한 강 크산토스에 당도하여 밤의 여정을 잠시 멈추거나 건너는 전환점이다.",
        "etymology": "PIE 어근 또는 그리스어 독자적 이동 동사 어근으로 발달했다(Chantraine DELG, Beekes EDG)."
      },
      {
        "g": "ἐϋρρεῖος",
        "pos": "형용사",
        "lemma": "ἐϋρρεής, ἐϋρρεές",
        "parse": "sg.gen.m.",
        "gloss_kr": "물이 잘 흐르는, 아름답게 흐르는",
        "gloss_en": "fair-flowing, well-flowing",
        "syntax": "ἐϋρρεῖος는 명사 ποταμοῖο를 수식하는 수식어 형용사로서 소유격(genitive)을 취하며, LFG에서 [PRED 'ἐϋρρεής', CASE gen, NUM sg, GEND m, MODIFIER ποταμοῖο]로 분석된다.",
        "background": "트로이의 수호적인 거대 강인 스카만드로스의 풍성하고 아름다운 물길을 묘사하는 호메로스 고유의 장식적 수식어(epithet)이다.",
        "etymology": "접두사 ἐὖ('잘')와 ῥέω('흐르다', 어근 *sreu-)의 합성어이다(Chantraine DELG, Beekes EDG)."
      },
      {
        "g": "ποταμοῖο",
        "pos": "명사",
        "lemma": "ποταμός, ποταμοῦ, ὁ",
        "parse": "sg.gen.m.",
        "gloss_kr": "강의",
        "gloss_en": "of the river",
        "syntax": "ποταμοῖο는 소유격(genitive) 형태로 명사 πόρον의 소유격 한정어를 구성하며, LFG에서 [PRED 'ποταμός', CASE gen, NUM sg, GEND m]으로 분석된다.",
        "background": "트로이인들이 신성시하고 신화적 혈통을 지닌 강인 크산토스를 지칭하는 명칭이다.",
        "etymology": "PIE 어근 또는 선그리스어 기층의 영향 가능성이 제기된다(Beekes EDG, Chantraine DELG)."
      }
    ]
  },
  {
    "ref": "Iliad 24.693",
    "trans": "소용돌이치는 크산토스의, 불멸의 제우스가 낳으신(그 강에 이르렀으니)",
    "words": [
      {
        "g": "Ξάνθου",
        "pos": "명사(고유)",
        "lemma": "Ξάνθος, Ξάνθου, ὁ",
        "parse": "sg.gen.m.",
        "gloss_kr": "크산토스의",
        "gloss_en": "of Xanthus",
        "syntax": "Ξάνθου는 앞선 ποταμοῖο의 동격(apposition) 소유격으로서 LFG 자질구조 [PRED 'Ξάνθος', CASE gen, NUM sg, GEND m]를 가진다.",
        "background": "트로이의 주된 강인 스카만드로스의 신화적 명칭인 '크산토스(황금빛 강)'로, 신성한 생명력을 지닌 존재로 의인화된다.",
        "etymology": "PIE 어근 *ǵʰanh₂- / *ǵʰwōno-('노란색, 갈색')에서 유래한다(Chantraine DELG, Beekes EDG)."
      },
      {
        "g": "δινήεντος",
        "pos": "형용사",
        "lemma": "δινήεις, δινήεσσα, δινήεν",
        "parse": "sg.gen.m.",
        "gloss_kr": "소용돌이치는",
        "gloss_en": "eddying, swirling",
        "syntax": "δινήεντος는 명사 Ξάνθου를 수식하는 형용사 소유격으로 LFG 자질구조 [PRED 'δινήεις', CASE gen, NUM sg, GEND m]로 분석된다.",
        "background": "거칠고 힘차게 소용돌이치며 흐르는 크산토스 강의 역동적인 지형적 특성을 묘사하는 호메로스적 고유 수식어이다.",
        "etymology": "δίνη('소용돌이')와 소유·형용사 접미사 *-εϝεντ-의 합성어이다(Chantraine DELG, Beekes EDG)."
      },
      {
        "g": "ὃν",
        "pos": "대명사",
        "lemma": "ὅς, ἥ, ὅ",
        "parse": "sg.acc.m.",
        "gloss_kr": "그를, 그 강을",
        "gloss_en": "whom, which",
        "syntax": "ὃν은 관계대명사로서 관계절 내에서 목적어(OBJ) 기능을 하며 대격(accusative)을 취한다. LFG 자질구조 [PRED 'rel-pron', CASE acc, NUM sg, GEND m]로 분석된다.",
        "background": "크산토스 강이 단순한 지형지물이 아니라 위대한 신 제우스의 아들임을 밝히는 신화적 내력을 설명한다.",
        "etymology": "PIE 관계대명사 어근 *yo-에서 유래한다(Chantraine DELG, Beekes EDG)."
      },
      {
        "g": "ἀθάνατος",
        "pos": "형용사",
        "lemma": "ἀθάνατος, ἀθάνατον",
        "parse": "sg.nom.m.",
        "gloss_kr": "불멸의, 죽지 않는",
        "gloss_en": "immortal",
        "syntax": "ἀθάνατος는 형용사로서 주어 Ζεύς의 서술격 수식어로 기능하며 주격(nominative)을 취한다. LFG 자질구조 [PRED 'ἀθάνατος', CASE nom, NUM sg, GEND m]로 분석된다.",
        "background": "제우스의 영원불멸한 신적 권능을 강조하여, 그가 낳은 강 역시 신성한 혈통을 지님을 드러낸다.",
        "etymology": "부정 접두사 ἀ-와 θάνατος('죽음', 어근 *dʰenh₂-)의 합성어이다(Chantraine DELG, Beekes EDG)."
      },
      {
        "g": "τέκετο",
        "pos": "동사",
        "lemma": "τίκτω",
        "principalParts": "τίκτω – τέξομαι – ἔτεκον – τέτοκα – (미상) – (미상)",
        "parse": "3rd.sg.aor.ind.mid.",
        "gloss_kr": "낳았다",
        "gloss_en": "bore, gave birth to",
        "syntax": "τέκετο는 관계절의 서술어로서 LFG 자질구조 [PRED 'τίκτω<SUBJ,OBJ>', TENSE past, ASPECT aor, VOICE mid, SUBJ [PRED 'Ζεύς', CASE nom], OBJ [PRED 'ὃν', CASE acc]]를 가진다.",
        "background": "크산토스 강신의 혈통적 기원이 제우스에게 있음을 확인해 주는 신화적 계보학의 표현이다.",
        "etymology": "PIE 어근 *tek-('낳다, 생산하다')에서 유래한다(Chantraine DELG, Beekes EDG)."
      },
      {
        "g": "Ζεύς",
        "pos": "명사(고유)",
        "lemma": "Ζεύς, Διός, ὁ",
        "parse": "sg.nom.m.",
        "gloss_kr": "제우스",
        "gloss_en": "Zeus",
        "syntax": "Ζεύς는 관계절의 주어로서 주격(nominative)을 취하며, LFG 자질구조 [PRED 'Ζεύς', CASE nom, NUM sg, GEND m, TH-ROLE AGENT]로 분석된다.",
        "background": "올림포스의 최고신이자 모든 신들과 자연물의 아버지로서 크산토스 강의 신성한 근원을 부여하는 존재이다.",
        "etymology": "PIE 하늘과 빛의 신 어근 *dyēus-('하늘, 낮')에서 유래한다(Chantraine DELG, Beekes EDG)."
      }
    ]
  },
  {
    "ref": "Iliad 24.694",
    "trans": "그 뒤 헤르메스는 저 먼 올림포스로 떠나갔고,",
    "words": [
      {
        "g": "Ἑρμείας",
        "pos": "명사(고유)",
        "lemma": "Ἑρμείας, Ἑρμείου, ὁ",
        "parse": "sg.nom.m.",
        "gloss_kr": "헤르메스는",
        "gloss_en": "Hermes",
        "syntax": "Ἑρμείας는 주절의 주어로서 주격(nominative)을 취하며, LFG 자질구조 [PRED 'Ἑρμείας', CASE nom, NUM sg, GEND m, TH-ROLE AGENT]로 분석된다.",
        "background": "프리아모스를 안전하게 강가에 데려다준 임무를 완수한 헤르메스가 이제 신들의 거처인 올림포스로 복귀하는 장면이다.",
        "etymology": "선그리스어(Pre-Greek) 기층 어휘이다(Beekes EDG, Chantraine DELG)."
      },
      {
        "g": "μὲν",
        "pos": "소사",
        "lemma": "μέν",
        "parse": "discourse.part.",
        "gloss_kr": "한편, ~는",
        "gloss_en": "on the one hand",
        "syntax": "μέν는 담화 및 대조 표지 소사로서 후치전접어(enclitic)로 기능하며, LFG에서 [DISCOURSE-FUNC correlative] 자질을 가진다. 이어지는 후행 절의 Ἠὼς δέ와 대칭 구조를 형성한다.",
        "background": "헤르메스가 떠나는 행동과 동이 트는 장면에 대칭적 균형을 부여한다.",
        "etymology": "PIE 기원이 불분명하나 강조 및 확인 불변화사로 고대 그리스어에서 정착했다(Chantraine DELG, Beekes EDG)."
      },
      {
        "g": "ἔπειτ᾽",
        "pos": "부사",
        "lemma": "ἔπειτα",
        "parse": "adv.",
        "gloss_kr": "그 후에",
        "gloss_en": "then, thereafter",
        "syntax": "ἔπειτα는 시간 부사로서 LFG에서 [ADJUNCT [PRED 'ἔπειτα']]로 분석되며, 주절의 행동이 앞선 사건 직후에 발생함을 나타낸다.",
        "background": "임무 완수 후 즉시 이루어지는 헤르메스의 귀환 시점을 명확해 주는 시간 부사이다.",
        "etymology": "전치사/부사 ἐπί와 후행 대명사/부사 εἶτα의 합성어이다(Chantraine DELG, Beekes EDG)."
      },
      {
        "g": "ἀπέβη",
        "pos": "동사",
        "lemma": "ἀποβαίνω",
        "principalParts": "ἀποβαίνω – ἀποβήσομαι – ἀπέβην – ἀποβέβηκα – (미상) – (미상)",
        "parse": "3rd.sg.aor.ind.act.",
        "gloss_kr": "떠났다",
        "gloss_en": "departed, went away",
        "syntax": "ἀπέβη는 주절의 서술어로서 LFG 자질구조 [PRED 'ἀποβαίνω<SUBJ,OBL>', TENSE past, ASPECT aor, SUBJ [PRED 'Ἑρμείας', CASE nom], OBL [PRED 'Ὄλυμπον', CASE acc, P-PRED 'πρός']]를 가진다.",
        "background": "프리아모스 곁을 떠나 다시 천상으로 돌아가는 헤르메스의 퇴장을 그린다.",
        "etymology": "전치사 ἀπό와 어근 βαίνω(PIE *gʷem- / *gʷhā-)의 합성어이다(Chantraine DELG, Beekes EDG)."
      },
      {
        "g": "πρὸς",
        "pos": "전치사",
        "lemma": "πρός",
        "parse": "prep.+acc.",
        "gloss_kr": "~를 향하여",
        "gloss_en": "toward, to",
        "syntax": "πρός는 대격(accusative)을 지배하는 전치사로, LFG에서 [PRED 'πρός<ACC>', CASE-GOV acc]로 분석된다.",
        "background": "헤르메스가 향하는 목적지인 신들의 산 올림포스를 지시한다.",
        "etymology": "PIE 어근 *proti / *pro('앞에, 향하여')에서 유래한다(Chantraine DELG, Beekes EDG)."
      },
      {
        "g": "μακρὸν",
        "pos": "형용사",
        "lemma": "μακρός, μακρά, μακρόν",
        "parse": "sg.acc.m.",
        "gloss_kr": "높고 큰, 장대한",
        "gloss_en": "long, high, lofty",
        "syntax": "μακρὸν는 명사 Ὄλυμπον을 수식하는 형용사로 대격(accusative)을 취하며, LFG 자질구조 [PRED 'μακρός', CASE acc, NUM sg, GEND m, MODIFIER Ὄλυμπον]로 분석된다.",
        "background": "인간의 세상과 구분되는 신들의 거처인 올림포스 산의 압도적인 높고 장엄한 규모를 수식한다.",
        "etymology": "PIE 어근 *meh₂k- / *smāk-('길쭉한, 큰')에서 유래한다(Chantraine DELG, Beekes EDG)."
      },
      {
        "g": "Ὄλυμπον",
        "pos": "명사(고유)",
        "lemma": "Ὄλυμπος, Ὄλυμπου, ὁ",
        "parse": "sg.acc.m.",
        "gloss_kr": "올림포스를",
        "gloss_en": "Olympus",
        "syntax": "Ὄλυμπον은 전치사 πρός의 지배를 받는 목적어로서 대격(accusative)을 취하며, LFG 자질구조 [PRED 'Ὄλυμπος', CASE acc, NUM sg, GEND m, TH-ROLE GOAL]로 분석된다.",
        "background": "그리스 신들의 최고 권좌가 위치한 신성하고도 영원한 산으로 헤르메스가 귀환한다.",
        "etymology": "선그리스어(Pre-Greek) 기층 어휘로 분류된다(Beekes EDG, Chantraine DELG)."
      }
    ]
  },
  {
    "ref": "Iliad 24.695",
    "trans": "사프란 빛 옷을 입은 새벽이 온 땅에 퍼져나갔으니,",
    "words": [
      {
        "g": "Ἠὼς",
        "pos": "명사(고유)",
        "lemma": "Ἠώς, Ἠοῦς, ἡ",
        "parse": "sg.nom.f.",
        "gloss_kr": "새벽(여신)",
        "gloss_en": "Dawn (Eos)",
        "syntax": "Ἠὼς는 주절의 주어로서 주격(nominative)을 취하며, LFG 자질구조 [PRED 'Ἠώς', CASE nom, NUM sg, GEND f, TH-ROLE AGENT]로 분석된다.",
        "background": "밤의 은밀한 잠입이 끝나고 새로운 하루의 시작을 알리는 신성한 새벽의 여신 에오스의 등장을 서사적으로 선언한다.",
        "etymology": "PIE 새벽의 여신 어근 *h₂e(u)s-('빛나다, 새벽이 되다')에서 유래한다(Chantraine DELG, Beekes EDG)."
      },
      {
        "g": "δὲ",
        "pos": "접속사",
        "lemma": "δέ",
        "parse": "coord.conj.",
        "gloss_kr": "그리고, 한편",
        "gloss_en": "and, on the other hand",
        "syntax": "δὲ는 앞선 Ἑρμείας μὲν과 대조적 상관관계를 형성하는 등위접속사로, LFG에서 [COORD-TYPE contrastive] 자질을 가진다.",
        "background": "헤르메스가 떠나는 것과 동시에 세상에 새벽이 밝아오는 두 장면을 교차시키는 시적 접속 장치이다.",
        "etymology": "(위 689.4 항목 참조)"
      },
      {
        "g": "κροκόπεπλος",
        "pos": "형용사",
        "lemma": "κροκόπεπλος, κροκόπεπλον",
        "parse": "sg.nom.f.",
        "gloss_kr": "사프란 빛 옷을 입은",
        "gloss_en": "saffron-robed",
        "syntax": "κροκόπεπλος는 주어 Ἠὼς를 수식하는 형용사 수식어로서 주격(nominative)을 취하며, LFG 자질구조 [PRED 'κροκόπεπλος', CASE nom, NUM sg, GEND f, MODIFIER Ἠὼς]로 분석된다.",
        "background": "호메로스 시에서 새벽 하늘의 노르스름한 빛깔을 사프란색 의복을 입은 여신의 모습으로 비유하는 정형구적 수식어이다.",
        "etymology": "κρόκος('사프란')와 πέπλος('옷')의 합성어이다(Chantraine DELG, Beekes EDG)."
      },
      {
        "g": "ἐκίδνατο",
        "pos": "동사",
        "lemma": "κίδναμι",
        "principalParts": "(skidno) – (미상) – (미상) – (미상) – (미상) – (미상)",
        "parse": "3rd.sg.impf.ind.mid.",
        "gloss_kr": "퍼져나갔다",
        "gloss_en": "spread, was diffused",
        "syntax": "ἐκίδνατο는 주절의 서술어로서 LFG 자질구조 [PRED 'ἐκίδναμαι<SUBJ,OBL>', TENSE past, ASPECT impf, VOICE mid/pass, SUBJ [PRED 'Ἠώς', CASE nom], OBL [PRED 'αἶαν', CASE acc, P-PRED 'ἐπί']]를 가진다. 미완료시제(impf)는 새벽빛이 점진적으로 퍼져나가는 과정을 묘사한다.",
        "background": "밤의 어둠이 물러가고 새벽의 사프란 빛이 대지 전체에 골고루 스며드는 공간적 전환을 알린다.",
        "etymology": "PIE 어근 *(s)ked-('흩뿌리다, 퍼뜨리다')에서 유래한다(Chantraine DELG, Beekes EDG)."
      },
      {
        "g": "πᾶσαν",
        "pos": "형용사",
        "lemma": "πᾶς, πᾶσα, πᾶν",
        "parse": "sg.acc.f.",
        "gloss_kr": "모든, 온",
        "gloss_en": "all, every",
        "syntax": "πᾶσαν은 명사 αἶαν를 수식하는 한정사/형용사로서 대격(accusative)을 취하며, LFG 자질구조 [PRED 'πᾶς', CASE acc, NUM sg, GEND f, MODIFIER αἶαν]로 분석된다.",
        "background": "새벽빛이 대지 전체를 남김없이 비추는 전면적이고 거대한 공간적 확산을 강조한다.",
        "etymology": "PIE 어근 *peh₂-('모든, 전체의')에서 유래한다(Chantraine DELG, Beekes EDG)."
      },
      {
        "g": "ἐπ᾽",
        "pos": "전치사",
        "lemma": "ἐπί",
        "parse": "prep.+acc.",
        "gloss_kr": "~에 걸쳐",
        "gloss_en": "over, upon",
        "syntax": "ἐπί는 대격(accusative)을 지배하는 전치사로, LFG에서 [PRED 'ἐπί<ACC>', CASE-GOV acc]로 분석된다.",
        "background": "대지 전역에 걸치는 새벽의 확산 범위를 공간적으로 한정해 준다.",
        "etymology": "PIE 부사/전치사 어근 *epi('~위에, ~에게')에서 유래한다(Chantraine DELG, Beekes EDG)."
      },
      {
        "g": "αἶαν",
        "pos": "명사",
        "lemma": "αἶα, αἴας, ἡ",
        "parse": "sg.acc.f.",
        "gloss_kr": "땅, 대지",
        "gloss_en": "earth, land",
        "syntax": "αἶαν는 전치사 ἐπί의 지배를 받는 목적어로서 대격(accusative)을 취하며, LFG 자질구조 [PRED 'αἶα', CASE acc, NUM sg, GEND f, TH-ROLE LOCATION]로 분석된다.",
        "background": "트로이 전쟁의 무대이자 슬픔과 비극 속에서도 새로운 하루가 밝아옴을 상징하는 대지 전체를 의미한다.",
        "etymology": "PIE 어근 또는 대지를 뜻하는 시적 명사 어근에서 유래했다(Chantraine DELG, Beekes EDG)."
      }
    ]
  },
  {
    "ref": "Iliad 24.696",
    "trans": "저희는 통곡과 신음 소리를 내며 마차를 몰아 성안으로 들어오고 있었으니,",
    "words": [
      {
        "g": "οἳ",
        "pos": "대명사",
        "lemma": "ὅς, ἥ, ὅ",
        "parse": "pl.nom.m.",
        "gloss_kr": "그들(은)",
        "gloss_en": "they",
        "syntax": "οἳ는 주절의 주어인 복수 남성 명사구로서 LFG 상 [PRED 'pro', PERS 3, NUM pl, CASE nom] 자질을 가진다. c-구조상 [DP [D' οἳ]] 위치를 점하며, 선행사인 프리아모스와 이다이오스를 가리키는 지시 대명사로 기능한다. 격 지배 관점에서 분사/동사 ἐλάω의 주어로서 주격(nominative)이 통사적으로 허가된다.",
        "background": "관사이자 지시 대명사인 ὅς의 호메로스적 용법으로, 앞 장면에서 프리아모스가 헥토르의 시신을 모시고 트로이아로 돌아오는 여정을 이어받는다. 대조를 나타내는 후행 전접어 δέ와 결합하여 서사의 초점을 전환한다.",
        "etymology": "PIE 지시/관계대명사 재구형 *to-/so- 계열에서 비롯되며, 그리스어에서 호칭 및 관계사로 분화되었다. Chantraine(DELG)에 따르면 동계어로 산스크리트어 sá 및 고대 아일랜드어 sin 등이 존재한다. 음운론적으로 그리스어에서는 초기 PIE *s-가 기식음(rough breathing)으로 변화하는 규칙(*s > h)을 거쳤다. 현대 그리스어에서는 고전어의 영향으로 제한적 문어체로만 나타난다."
      },
      {
        "g": "δ᾽",
        "pos": "접속사",
        "lemma": "δέ",
        "parse": "coord.conj.",
        "gloss_kr": "그리고, 그런데",
        "gloss_en": "and, but",
        "syntax": "δέ는 LFG에서 조정 접속사(coordinating conjunction)로서 두 절을 연결하는 f-구조의 [COORD-TYPE additive] 자질을 부여한다. c-구조상 두 번째 요소의 왼쪽에 위치하는 전접어(enclitic)로서 선행 요소에 음운적으로 의존한다. 통사적으로는 대등 연결 구문(coordination)을 매개하며 주어와 술어 사이의 전환을 매끄럽게 연결한다.",
        "background": "호메로스 서사시에서 장면 전환과 행동의 연속성을 나타내는 가장 빈번한 후행 접속사 중 하나이다. 앞선 행들의 긴박한 귀환 과정과 성 안에서의 반응을 이어주는 가교 역할을 한다.",
        "etymology": "PIE 어근 재구는 불확실하나, 지시적 기원을 가진 부사/접속사 *de로 소급된다. Beekes(EDG)는 선그리스어와의 연관성을 배제하고 인도유럽어족 내부의 대등 접속사 체계로 설명한다. 음운론적으로 단음절 전접어로 약화되면서 강세를 잃는 약화 과정을 겪었다."
      },
      {
        "g": "εἰς",
        "pos": "전치사",
        "lemma": "εἰς",
        "parse": "prep.+acc.",
        "gloss_kr": "~로, 안으로",
        "gloss_en": "into, to",
        "syntax": "εἰς는 대격(accusative)을 지배하는 전치사로서 LFG 통사 구조에서 [OBL-DIR [PRED 'εἰς<OBJ>', OBJ [CASE acc]]] 자질을 형성한다. c-구조상 [PP εἰς [DP ἄστυ]] 구를 이루며 방향성과 도달점을 나타낸다. 격 지배 이론에 따라 후행 목적어 ἄστυ에 대격을 요구하여 공간적 이동의 종착지를 명시한다.",
        "background": "트로이아 성벽 안으로 진입하는 공간적 이동을 극적으로 부각시키는 전치사이다. 전장에서의 비극적 운송이 이제 백성들이 있는 도성 내부로 장소가 전환됨을 알린다.",
        "etymology": "미코노스어 및 고대 그리스어의 * ἐν-s (ἐν + 성분 *s)에서 발전한 것으로 분석된다. Chantraine(DELG)은 *en에 방향을 나타내는 확장 접미사 *-s가 결합된 것으로 본다. 음운론적으로 자음 앞에서 *ns > s 변화를 거쳤으며, 라틴어 in(대격 지배 시)과 동계이다."
      },
      {
        "g": "ἄστυ",
        "pos": "명사",
        "lemma": "ἄστυ, ἄστεος, τό",
        "parse": "sg.acc.n.",
        "gloss_kr": "도성, 성읍",
        "gloss_en": "city, town",
        "syntax": "ἄστυ는 전치사 εἰς의 목적어로서 LFG에서 [PRED 'ἄστυ', CASE acc, θ-ROLE GOAL]로 기능한다. c-구조상 [DP [D' ἄστυ]]로 분석되며, 이동의 목표 지점을 나타내는 구문을 완성한다. 통사적으로 비활성 중성 명사로서 형태 변화상 이형태를 보인다.",
        "background": "트로이아의 요새화된 도성을 가리키며, 바깥의 전장(πεδίον)과 대비되는 안전과 일상의 공간이다. 프리아모스가 헥토르의 시신을 안고 들어오는 이 도성은 곧 슬픔과 통곡의 울음바다가 될 공간이다.",
        "etymology": "PIE 재구형 *wst-u- ('거주지, 마을')에서 유래하며, 어근 *wes-('살다, 거주하다')와 연결된다. Beekes(EDG)는 PIE 어근 *wes-에 기반하여 산스크리트어 vástu('집, 거주지')와 동계임을 밝힌다. 음운론적으로 초기 후두음 또는 반모음 *w의 탈락 및 수축 과정을 겪었다."
      },
      {
        "g": "ἔλων",
        "pos": "분사",
        "lemma": "ἐλάω",
        "principalParts": "ἐλάω – ἐλάσω – ἤλασα – ἐλήλακα – ἐλήλαμαι – ἠλάθην",
        "parse": "pres.act.part.sg.nom.m.",
        "gloss_kr": "몰면서, 타고 가며",
        "gloss_en": "driving, riding",
        "syntax": "ἔλων은 주어 οἳ와 성·수·격(남성 복수 주격)이 일치하는 부대 상황 분사로서 LFG에서 [ADJUNCT [PRED 'ἐλάω<SUBJ,OBJ>', SUBJ pro, OBJ ἵππους]]로 분석된다. c-구조상 [VP [V' ἔλων [DP ἵππους]]] 구조를 이루며, 주절 동사의 행위와 동시적으로 말과 수레를 몰고 들어오는 태세를 기술한다.",
        "background": "프리아모스와 이다이오스가 말과 노새에게 수레를 몰아 성안으로 들어오는 장면을 생생하게 묘사하는 분사이다. 호메로스 시가 특유의 분사 구문을 통해 시각적 현장감과 긴박한 움직임을 전달한다.",
        "etymology": "PIE 재구형 *el(e)h₁- ('몰다, 움직이게 하다')에서 유래한다. Chantraine(DELG)에 따르면 라틴어 alacer 및 산스크리트어 irsyati 등과 동계어 가능성이 논의된다. 음운론적으로 모음축약과 호메로스적 장음화 과정을 거쳐 ἔλων 형태로 고착되었다."
      },
      {
        "g": "οἰμωγῇ",
        "pos": "명사",
        "lemma": "οἰμωγή, οἰμωγῆς, ἡ",
        "parse": "sg.dat.f.",
        "gloss_kr": "통곡, 비명",
        "gloss_en": "wailing, lamentation",
        "syntax": "οἰμωγῇ는 방법/수단을 나타내는 여격(instrumental dative)으로서 LFG에서 [OBL-INSTR [PRED 'οἰμωγή', CASE dat, θ-ROLE INSTRUMENT]]로 분석된다. c-구조상 [PP [P' [DP οἰμωγῇ]]] 형태로 동반 접속사 τε와 호응한다. 통사적으로 부사적 수식어로서 마차를 몰고 들어올 때 동반된 청각적 고통의 양상을 규정한다.",
        "background": "헥토르의 죽음 앞에 트로이아 백성들이 터뜨릴 비통한 울음과 통곡을 미리 예고하는 단어이다. 시신이 성안으로 들어서는 순간부터 도시 전체가 비탄에 잠기게 됨을 청각적 심상으로 표현한다.",
        "etymology": "의성어적 기원에서 출발한 명사로, 고통스러운 탄식 소리인 'οἴμοι'에서 파생되었다. Beekes(EDG)는 인도유럽어족 전반에 걸치는 감탄사적 어근 *oi-에 기반한 파생어로 분류한다. 음운론적으로 명사 파생 접미사 *-γη가 결합하였다."
      },
      {
        "g": "τε",
        "pos": "접속사",
        "lemma": "τέ",
        "parse": "coord.conj.",
        "gloss_kr": "그리고, 와",
        "gloss_en": "and, both",
        "syntax": "τέ는 대등 접속사로서 LFG에서 [COORD-TYPE additive] 자질을 가지며 두 명사구(οἰμωγῇ와 στοναχῇ)를 병렬 연결한다. c-구조상 전접어로서 첫 번째 요소 뒤에 위치하여 상관 접속 구문을 형성한다. 통사적으로 격 일치를 이루는 두 명사구의 동등한 병렬을 보장한다.",
        "background": "호메로스 시가에서 두 개 이상의 유사한 개념이나 감정을 리드미컬하게 묶어주는 전형적인 상관 접속사이다. 여기서는 통곡과 신음을 대등하게 연결하여 청각적 비극의 깊이를 배가시킨다.",
        "etymology": "PIE 대등 접속사 재구형 *kʷe (라틴어 -que, 산스크리트어 ca)에서 유래한다. Chantraine(DELG)과 Beekes(EDG) 모두 이 형태가 PIE enclitic conjunction *kʷe와 정확히 일치함을 확인한다. 음운론적으로 구개음화 및 무성음화 과정을 거쳤다."
      },
      {
        "g": "στοναχῇ",
        "pos": "명사",
        "lemma": "στοναχή, στοναχῆς, ἡ",
        "parse": "sg.dat.f.",
        "gloss_kr": "신음, 탄식",
        "gloss_en": "groaning, sighing",
        "syntax": "στοναχῇ는 앞선 οἰμωγῇ와 병렬되는 도구/방법 여격으로서 LFG에서 [OBL-INSTR [PRED 'στοναχή', CASE dat, θ-ROLE INSTRUMENT]]로 분석된다. c-구조상 상관 접속사 τε와 결합하여 구를 구성하며, 문장의 부사적 수식어 역할을 수행한다.",
        "background": "울부짖음과 함께 억눌린 신음과 탄식을 나타내며, 트로이아인들의 깊은 절망감을 시각·청각적으로 전달한다. 호메로스적 비극 시학의 전형적인 감정 어휘이다.",
        "etymology": "동사 στένω의 어간에서 파생된 명사이다. Chantraine(DELG)은 PIE 어근 *(s)ten-('우르릉거리다, 신음하다')에서 유래한 것으로 본다. 음운론적으로 어근에 명사 형성 접미사 *-ah₂가 결합하였다."
      },
      {
        "g": "τε",
        "pos": "접속사",
        "lemma": "τέ",
        "parse": "coord.conj.",
        "gloss_kr": "그리고",
        "gloss_en": "and",
        "syntax": "두 번째 τε는 앞의 τε와 함께 상관 접속사 쌍을 완성하며, LFG상 [COORD-TYPE additive] 자질로 두 명사구의 병렬 구조를 닫아준다. c-구조상 오른쪽에 부착되는 전접어이다. 통사적으로 대등 연결의 완결을 알린다.",
        "background": "앞선 'οἰμωγῇ τε'와 호응하여 '통곡과 신음으로'라는 대칭적이고 균형 잡힌 구송적 표현을 완성한다. 호메로스 시인의 구송 공식의 전형적인 일면을 보여준다.",
        "etymology": "PIE 어근 *kʷe에서 유래한 전접 접속사이다."
      }
    ]
  },
  {
    "ref": "Iliad 24.697",
    "trans": "말들을, 노새들이 시신을 나르고 있었으니. 그 누구도 다른 이는",
    "words": [
      {
        "g": "ἵππους",
        "pos": "명사",
        "lemma": "ἵππος, ἵππου, ὁ/ἡ",
        "parse": "pl.acc.m.",
        "gloss_kr": "말을, 군마들을",
        "gloss_en": "horses",
        "syntax": "ἵππους는 분사의 목적어로서 LFG에서 [PRED 'ἵππος', CASE acc, θ-ROLE THEME]로 분석된다. c-구조상 [DP [D' ἵππους]] 위치를 점하며, 앞행의 ἔλων과 호응하여 마차를 끄는 동물 대상을 나타낸다. 격 지배 관점에서 이동 수단을 이끄는 행위의 직접 목적어로 대격이 부여된다.",
        "background": "영웅 프리아모스의 마차를 끌고 전장에서 도성으로 돌아온 말들이다. 전쟁의 고통을 함께 겪은 군마들이 이제 주인의 비극적인 시신을 모시고 성안으로 진입하는 모습은 독자에게 강렬한 연민을 불러일으킨다.",
        "etymology": "PIE 재구형 *ékwos ('말')에서 유래한다. Chantraine(DELG)과 Beekes(EDG) 모두 PIE *ekwos에 동의하며, 라틴어 equus, 산스크리트어 áśva- 등과 완벽한 동계어임을 지적한다. 음운론적으로 PIE laryngeal 또는 구개음화 법칙에 따랐다."
      },
      {
        "g": "ἡμίονοι",
        "pos": "명사",
        "lemma": "ἡμίονος, ἡμιόνου, ὁ/ἡ",
        "parse": "pl.nom.m.",
        "gloss_kr": "노새들이",
        "gloss_en": "mules",
        "syntax": "ἡμίονοι는 새 절의 주어로서 LFG에서 [PRED 'ἡμίονος', CASE nom, θ-ROLE AGENT]로 분석된다. c-구조상 [DP [D' ἡμίονοι]] 위치를 점하며, 정동사 φέρον의 주어 기능을 수행한다. 통사적으로 마차를 실제로 견인하여 운반하는 주체로 명시된다.",
        "background": "프리아모스의 수레와 헥토르의 시신을 실은 상자를 실어 나른 것은 군마가 아니라 노새들이었다. 호메로스 서사에서 노새는 실용적이고 짐을 끄는 동물로 묘사되며, 영웅의 비극적 운송을 수행한다.",
        "etymology": "ἥμισυς('반절의')와 ὄνος('당나귀')의 합성어인 ἡμίονος에서 유래한다. Beekes(EDG)에 따르면 당나귀와 말의 교잡종을 뜻하는 명칭으로 그리스어 내부에서 투명하게 합성되었다. 음운론적으로 합성 과정에서의 음절 축약을 거쳤다."
      },
      {
        "g": "δὲ",
        "pos": "접속사",
        "lemma": "δέ",
        "parse": "coord.conj.",
        "gloss_kr": "그리고, 그런데",
        "gloss_en": "and, but",
        "syntax": "δὲ는 대등/전환 접속사로서 LFG에서 [COORD-TYPE additive/adversative] 자질을 가지며 앞서 언급된 말들과 노새들의 역할을 대조적으로 연결한다. c-구조상 두 번째 절의 두 번째 단어 위치에 놓이는 전접어이다.",
        "background": "말과 노새를 병치하면서 시신의 운반을 실질적으로 담당한 주체로 노새들을 부각시키는 전환점 역할을 한다.",
        "etymology": "PIE 지시적 부사/접속사 *de에서 유래함."
      },
      {
        "g": "νέκυν",
        "pos": "명사",
        "lemma": "νέκυς, νέκυος, ὁ",
        "parse": "sg.acc.m.",
        "gloss_kr": "시신을, 시체를",
        "gloss_en": "corpse, dead body",
        "syntax": "νέκυν은 정동사 φέρον의 목적어로서 LFG에서 [PRED 'νέκυς', CASE acc, θ-ROLE PATIENT]로 분석된다. c-구조상 [DP [D' νέκυν]] 위치를 점하며, 노새들이 운반하는 대상의 비참함을 드러낸다. 격 지배상 타동사의 직접 목적어로 대격이 지배된다.",
        "background": "아킬레우스에게 모독당하고 참담하게 끌려다니다가 이제 겨우 부친의 품으로 돌아오는 헥토르의 시신을 가리킨다. '신체'를 뜻하는 일반 명사 대신 'νέκυς'를 사용하여 죽음의 비극성을 극대화한다.",
        "etymology": "PIE 재구형 *nekʷ- ('죽음')에서 유래한다. Chantraine(DELG)과 Beekes(EDG)는 산스크리트어 naśyati, 라틴어 nex와 동계임을 지적한다. 음운론적으로 u-어간 명사로 발전했다."
      },
      {
        "g": "φέρον",
        "pos": "동사",
        "lemma": "φέρω",
        "principalParts": "φέρω – οἴσω – ἤνεγκα / ἤνεικον – ἐνήνοχα – ἐνήνεγμαι – ἠνέχθην",
        "parse": "3rd.pl.impf.ind.act.",
        "gloss_kr": "나르고 있었다, 운반하고 있었다",
        "gloss_en": "were bearing, carrying",
        "syntax": "φέρον은 문장의 주술동사로서 LFG에서 [PRED 'φέρω<SUBJ,OBJ>', TENSE past, ASPECT impf, SUBJ [PRED 'ἡμίονοι', NUM pl, CASE nom], OBJ [PRED 'νέκυς', CASE acc]]로 분석된다. c-구조상 [VP [V' φέρον [DP νέκυν]]] 구조를 이루며, 아우그멘트가 생략된 호메로스적 불완전과거 시제를 취한다.",
        "background": "노새들이 헥토르의 시신을 실은 수레를 끌고 성안으로 들어오는 동안의 지속적인 움직임을 묘사한다. 아우그멘트 없는 동사형은 호메로스 서사의 구송 문법 특징이다.",
        "etymology": "PIE 어근 *bʰer-('나르다, 운반하다')에서 유래한다. Chantraine(DELG)과 Beekes(EDG)는 산스크리트어 bharati, 라틴어 ferre 등과 동계어임을 증명한다. 영어 bear, 현대 그리스어 φέρω로 직계 계승되었다."
      },
      {
        "g": "οὐδέ",
        "pos": "접속사",
        "lemma": "οὐδέ",
        "parse": "coord.conj.",
        "gloss_kr": "그리고 ~도 아니었다, 심지어 ~도 않다",
        "gloss_en": "and not, nor, not even",
        "syntax": "οὐδέ는 부정사와 접속의 기능을 동시에 수행하는 복합어로서 LFG에서 [COORD-TYPE negative-additive] 자질을 가진다. c-구조상 [CONJ-P οὐδέ [DP τις]] 구를 이루며 앞선 내용에 대한 부정적 첨가를 나타낸다.",
        "background": "성문 앞에서 시신을 마주한 초기 상황에서, 처음에는 아무도 그가 헥토르라는 것을 알아보지 못했다는 반전의 서사를 도입한다.",
        "etymology": "부정어 οὐ와 대등 접속사 δέ의 결합형이다. Chantraine(DELG)에 따르면 고대 그리스어에서 부정과 접속을 동시에 나타내는 복합 입자이다."
      },
      {
        "g": "τις",
        "pos": "대명사",
        "lemma": "τίς, τί",
        "parse": "sg.nom.m./f.",
        "gloss_kr": "어떤 이도, 그 누구도",
        "gloss_en": "anyone, someone",
        "syntax": "τις는 부정대명사로서 LFG에서 [PRED 'pro-indef', CASE nom, QUANT existential]로 분석되며 부정어 οὐ와 결합하여 전칭 부정을 형성한다. c-구조상 [DP [D' τις]] 위치를 점하며 동사 ἔγνω의 논항 주어를 구성한다.",
        "background": "트로이아 백성들 가운데 그 누구도 처음에는 수레에 실린 시신이 헥토르일 것이라고 상상조차 하지 못했음을 강조한다.",
        "etymology": "PIE 의문/부정대명사 재구형 *kʷi-/kʷo-에서 유래한다. Chantraine(DELG)과 Beekes(EDG)는 라틴어 quis, 산스크리트어 kaḥ 등과 동계임을 밝힌다."
      },
      {
        "g": "ἄλλος",
        "pos": "형용사",
        "lemma": "ἄλλος, ἄλλη, ἄλλο",
        "parse": "sg.nom.m.",
        "gloss_kr": "다른 (사람), 그 누구도 다른 이",
        "gloss_en": "other, another",
        "syntax": "ἄλλος는 한정 형용사로서 LFG에서 [PRED 'ἄλλος', CASE nom, NUM sg]로 분석되며 τις를 수식한다. c-구조상 [DP [D' ἄλλος]] 위치를 점하며 주어 영역을 한정한다.",
        "background": "카산드라를 제외한 다른 그 누구도 알아차리지 못했다는 배타적 의미를 구축한다.",
        "etymology": "PIE 재구형 *h₂elyos ('다른')에서 유래한다. Chantraine(DELG)과 Beekes(EDG)는 라틴어 alius, 고대 아일랜드어 aile과 동계어임을 제시한다. 영어 alias, else, 현대 그리스어 άλλο로 이어진다."
      }
    ]
  },
  {
    "ref": "Iliad 24.698",
    "trans": "아름다운 허리띠를 한 여인들과 남자들 중 그 누구보다 먼저 알아보았으니,",
    "words": [
      {
        "g": "ἔγνω",
        "pos": "동사",
        "lemma": "γιγνώσκω",
        "principalParts": "γιγνώσκω – γνώσομαι – ἔγνων – ἔγνωκα – ἔγνωσμαι – ἐγνώσθην",
        "parse": "3rd.sg.aor.ind.act.",
        "gloss_kr": "아라차렸다, 인식했다",
        "gloss_en": "recognized, knew",
        "syntax": "ἔγνω는 주절의 서술어로서 LFG에서 [PRED 'γιγνώσκω<SUBJ,OBJ>', TENSE past, ASPECT aor, SUBJ [PRED 'τις ἄλλος', NUM sg, CASE nom], OBJ [PRED 'πατήρ', CASE gen]]로 분석된다. c-구조상 [VP [V' ἔγνω]] 구조를 이루며, 제2부정과거 능동태 어형으로 순간적 인식을 나타낸다.",
        "background": "카산드라가 성문 위에서 다가오는 수레 속의 인물이 헥토르임을 순간적으로 알아차리는 극적 인식의 순간이다.",
        "etymology": "PIE 어근 *ǵneh₃- ('알다')에서 유래한다. Chantraine(DELG)과 Beekes(EDG)는 산스크리트어 jānāti, 라틴어 gnōscō, 영어 know와 완벽한 동계어임을 입증한다. 현대 그리스어 γνωρίζω로 진화하였다."
      },
      {
        "g": "πρόσθ᾽",
        "pos": "전치사",
        "lemma": "πρόσθε",
        "parse": "prep.+gen.",
        "gloss_kr": "~보다 먼저, 앞에",
        "gloss_en": "before, ahead of",
        "syntax": "πρόσθ᾽는 속격을 지배하는 전치사로서 LFG에서 [OBL-GEN [PRED 'πρόσθε<OBJ>', OBJ [CASE gen]]]로 분석된다. c-구조상 [PP [DP ἀνδρῶν ...]] 구를 지배하며 시간적 또는 공간적 우선순위를 나타낸다.",
        "background": "수많은 남녀 군중이 모여 있었음에도 불구하고, 왕녀이자 예언자인 카산드라가 그 누구보다도 가장 먼저 시신의 정체를 알아보고 비명을 지르는 연출을 돕는다.",
        "etymology": "전치사/부사 πρό('앞에')에 접미사가 결합된 형태이다. Chantraine(DELG)에 따르면 PIE *pro-에서 파생된 파생 부사/전치사로 산스크리트어 puras와 동계이다."
      },
      {
        "g": "ἀνδρῶν",
        "pos": "명사",
        "lemma": "ἀνήρ, ἀνδρός, ὁ",
        "parse": "pl.gen.m.",
        "gloss_kr": "남자들의, 사람들의",
        "gloss_en": "of men, husbands",
        "syntax": "ἀνδρῶν은 전치사 πρόσθ᾽의 목적어로서 LFG에서 [PRED 'ἀνήρ', CASE gen, θ-ROLE OBJECT]로 분석된다. c-구조상 [DP [D' ἀνδρῶν]] 위치를 점하며 전치사구의 보어 역할을 수행한다.",
        "background": "트로이아의 성문 앞에 모여든 모든 시민들, 즉 전사들과 백성들을 총칭한다.",
        "etymology": "PIE 재구형 *h₂ner- ('사람, 남자, 영웅')에서 유래한다. Chantraine(DELG)과 Beekes(EDG)는 산스크리트어 nar-, 미케네어 a-no 등과 동계임을 밝힌다. 현대 그리스어 안드로스 지명 등에 흔적이 남았다."
      },
      {
        "g": "καλλιζώνων",
        "pos": "형용사",
        "lemma": "καλλίζωνος, καλλιζώνου, ὁ/ἡ",
        "parse": "pl.gen.f.",
        "gloss_kr": "아름다운 허리띠를 한",
        "gloss_en": "fair-girdled",
        "syntax": "καλλιζώνων는 명사 γυναικῶν을 수식하는 한정 형용사로서 LFG에서 [ADJUNCT [PRED 'καλλίζωνος', CASE gen, NUM pl, GENDER f]]로 분석된다. c-구조상 구를 형성한다. 격 지배상 수식받는 명사와 성·수·격이 일치한다.",
        "background": "호메로스 시가에서 귀족 여성이나 트로이아의 부인들을 묘사할 때 자주 쓰이는 고유의 정형구적 수식어이다.",
        "etymology": "καλός('아름다운')와 ζώνη('허리띠, 띠')의 합성어이다. Chantraine(DELG)에 따르면 호메로스 시가에서 여성미를 찬미하기 위해 발달한 전통적 합성 형용사이다."
      },
      {
        "g": "τε",
        "pos": "접속사",
        "lemma": "τέ",
        "parse": "coord.conj.",
        "gloss_kr": "그리고",
        "gloss_en": "and",
        "syntax": "τε는 대등 접속사로서 LFG에서 [COORD-TYPE additive] 자질을 가지며 ἀνδρῶν과 γυναικῶν을 연결한다. c-구조상 구를 매개한다. 통사적으로 남성과 여성 군중 전체를 하나로 묶어준다.",
        "background": "트로이아의 모든 남녀노소 시민들을 총동원하여 카산드라의 예언자적 외침과 대비시키는 군중적 배경을 완성한다.",
        "etymology": "PIE 어근 *kʷe에서 유래함."
      },
      {
        "g": "γυναικῶν",
        "pos": "명사",
        "lemma": "γυνή, γυναικός, ἡ",
        "parse": "pl.gen.f.",
        "gloss_kr": "여인들의, 여자들의",
        "gloss_en": "of women",
        "syntax": "γυναικῶν은 앞선 ἀνδρῶν과 병렬되는 속격 명사구로서 LFG에서 [PRED 'γυνή', CASE gen, TH-ROLE OBJECT]로 분석된다. c-구조상 [DP [D' γυναικῶν]] 위치를 점한다.",
        "background": "전쟁으로 인해 남편과 아들을 잃거나 잃을 위기에 처한 트로이아의 여인들을 상징한다.",
        "etymology": "PIE 재구형 *gʷen- / *gʷnā- ('여성, 아내')에서 유래한다. Chantraine(DELG)과 Beekes(EDG)는 산스크리트어 gnā-, 영어 queen과 동계어임을 증명한다. 영어 queen, 현대 그리스어 γυναίκα로 직계 계승되었다."
      }
    ]
  },
  {
    "ref": "Iliad 24.699",
    "trans": "오직 황금의 아프로디테와 닮은 카산드라만이 그러했으니,",
    "words": [
      {
        "g": "ἀλλ᾽",
        "pos": "접속사",
        "lemma": "ἀλλά",
        "parse": "coord.conj.",
        "gloss_kr": "그러나, 오직",
        "gloss_en": "but, rather",
        "syntax": "ἀλλ᾽는 대조 접속사로서 LFG에서 [COORD-TYPE adversative] 자질을 가지며 앞서 '아무도 알아보지 못했다'는 내용과 '오직 카산드라만이 알아차렸다'는 내용 사이의 극적인 반전을 이끈다.",
        "background": "군중 전체의 무지와 예언자 카산드라의 날카로운 통찰을 극적으로 대비시키는 전환의 접속사이다.",
        "etymology": "형용사 ἄλλος의 중성 복수 대격 ἄλλα에서 부사화 및 접속사화된 형태이다. Chantraine(DELG)에 따르면 다른 방향으로의 전환을 뜻하는 부사적 용법에서 발전했다. 현대 그리스어에서도 ἀλλά로 활발히 사용된다."
      },
      {
        "g": "ἄρα",
        "pos": "소사",
        "lemma": "ἄρα",
        "parse": "part.",
        "gloss_kr": "과연, 그야말로, 마침내",
        "gloss_en": "then, accordingly",
        "syntax": "ἄρα는 서사적 담화 소사로서 LFG에서 [DISCOURSE-FUNC inferential/epistemic] 자질로 분석된다. c-구조상 전접어 또는 준전접어로서 문장 내 두 번째 위치에 배치된다.",
        "background": "호메로스 서사시에서 사건의 필연성과 현장감을 부여하는 대표적인 서사 소사이다.",
        "etymology": "기원이 불확실하나 원시 인도유럽어적 담화 표지에서 소급된다. Chantraine(DELG)은 어떤 사실이 명백히 드러날 때 쓰이는 입자로 설명한다."
      },
      {
        "g": "Κασσάνδρη",
        "pos": "명사(고유)",
        "lemma": "Κασσάνδρη, Κασσάνδρης, ἡ",
        "parse": "sg.nom.f.",
        "gloss_kr": "카산드라가",
        "gloss_en": "Cassandra",
        "syntax": "Κασσάνδρη는 주절의 주어 명사구로서 LFG에서 [PRED 'Κασσάνδρη', CASE nom, TH-ROLE AGENT]로 분석된다. c-구조상 [DP [D' Κασσάνδρη]] 위치를 점하며 동사 εἰσενόησεν의 주어 역할을 수행한다.",
        "background": "프리아모스와 헤카베의 딸이자 아폴론에게 예언의 능력을 받았으나 믿어지지 않는 저주를 받은 트로이아의 비운의 공주이다.",
        "etymology": "어원적으로 '인류의 영광' 등을 뜻하는 합성어로 추정된다. Beekes(EDG)와 Chantraine(DELG)은 ἕκαστος과 ἀνήρ의 어근적 결합으로 설명한다. 현대 그리스어 인명 Κασσάνδρα로 이어진다."
      },
      {
        "g": "ἰκέλη",
        "pos": "형용사",
        "lemma": "ἴκελος, ἴκελη, ἴκελον",
        "parse": "sg.nom.f.",
        "gloss_kr": "~를 닮은, 흡사한",
        "gloss_en": "like, resembling",
        "syntax": "ἰκέλη는 주어 Κασσάνδρη를 수식하는 서술적 형용사로서 LFG에서 [XCOMP [PRED 'ἴκελος<SUBJ,OBJ>', SUBJ Κασσάνδρη, OBJ Ἀφροδίτῃ]]로 분석된다. c-구조상 여격 목적어 Ἀφροδίτῃ를 지배한다.",
        "background": "카산드라의 절세의 미모와 고귀한 자태를 황금의 아프로디테에 비유하는 호메로스적 전통 수식법이다.",
        "etymology": "PIE 어근 *eikʷ-('보다, 닮다')에서 유래한다. Chantraine(DELG)에 따르면 동계어로 고대 고지독일어 īhhan 등의 유사 형태가 논의된다."
      },
      {
        "g": "χρυσῇ",
        "pos": "형용사",
        "lemma": "χρύσεος, χρυσέα, χρύσεον",
        "parse": "sg.dat.f.",
        "gloss_kr": "황금의, 금빛의",
        "gloss_en": "golden",
        "syntax": "χρυσῇ는 여격 명사 Ἀφροδίτῃ를 수식하는 한정 형용사로서 LFG에서 [ADJUNCT [PRED 'χρύσεος', CASE dat, NUM sg, GENDER f]]로 분석된다. c-구조상 수식받는 명사와 성·수·격이 일치한다.",
        "background": "아프로디테를 수식하는 전형적인 호메로스 정형구적 형용사로, 여신의 신성함과 영원한 아름다움을 상징한다.",
        "etymology": "χρυσός('금')에서 파생된 형용사이다. Beekes(EDG)와 Chantraine(DELG)은 χρυσός 자체가 동방 차용어(오리엔탈 기원)일 가능성이 높음을 지적한다. 영어 chryso-, 현대 그리스어 χρυσός로 이어진다."
      },
      {
        "g": "Ἀφροδίτῃ",
        "pos": "명사(고유)",
        "lemma": "Ἀφροδίτη, Ἀφροδίτης, ἡ",
        "parse": "sg.dat.f.",
        "gloss_kr": "아프로디테에게",
        "gloss_en": "to Aphrodite",
        "syntax": "Ἀφροδίτῃ는 형용사 ἰκέλη가 지배하는 여격 목적어로서 LFG에서 [OBL-DAT [PRED 'Ἀφροδίτη', CASE dat, θ-ROLE STANDARD]]로 분석된다. c-구조상 유사성의 기준을 제공한다.",
        "background": "사랑과 미의 여신 아프로디테이다. 트로이아 왕가와 깊은 연관이 있는 올림포스의 여신이다.",
        "etymology": "비인도유럽어 기층 차용어(선그리스어 또는 동방 페니키아계 아스타르테 변형)로 분석된다. 영어 aphrodisiac, 현대 그리스어 Ἀφροδίτη로 명맥을 잇는다."
      }
    ]
  },
  {
    "ref": "Iliad 24.700",
    "trans": "페르가몬 성채 위에 올라서서 사랑하는 아버지가",
    "words": [
      {
        "g": "Πέργαμον",
        "pos": "명사(고유)",
        "lemma": "Πέργαμος, Περγάμου, ἡ",
        "parse": "sg.acc.n.",
        "gloss_kr": "페르가몬 성채를",
        "gloss_en": "Pergamos, citadel of Troy",
        "syntax": "Πέργαμον은 분사 εἰσαναβᾶσα의 목적어로서 LFG에서 [PRED 'Πέργαμος', CASE acc, θ-ROLE GOAL]로 분석된다. c-구조상 성채 위로 올라간 공간적 도달점을 나타낸다.",
        "background": "트로이아 도성의 가장 높은 곳에 위치한 요새이자 성채이다. 카산드라가 성문 위에서 아래를 내려다보며 비극을 목격하는 지리적 배경이 된다.",
        "etymology": "비인도유럽어 또는 선그리스어(아나톨리아 기층) 기원의 지명으로, 히타이트어 파르가('높은')와 깊은 연관이 있다. Beekes(EDG)와 Chantraine(DELG)은 아나톨리아 기층 차용어로 분류한다. 영어 parchment로 이어진다."
      },
      {
        "g": "εἰσαναβᾶσα",
        "pos": "분사",
        "lemma": "εἰσαναβαίνω",
        "principalParts": "εἰσαναβαίνω – εἰσαναβήσομαι – εἰσέβην – εἰσαναβέβηκα – (미상) – (미상)",
        "parse": "aor.act.part.sg.nom.f.",
        "gloss_kr": "올라가서, 성채에 올라",
        "gloss_en": "having gone up, ascending",
        "syntax": "εἰσαναβᾶσα는 주어 Κασσάνδρη와 성·수·격이 일치하는 선행 시제 분사로서 LFG에서 [ADJUNCT [PRED 'εἰσαναβαίνω<SUBJ,OBJ>', SUBJ Κασσάνδρη, OBJ Πέργαμον]]로 분석된다.",
        "background": "카산드라가 페르가몬 성채 위로 올라가서 아래를 내려다보는 공간적 이동을 생생하게 묘사한다.",
        "etymology": "전치사 εἰς와 ἀνά, 그리고 동사 βαίνω의 합성어이다. 어근 *gʷem- / *gʷā-('가다')에서 유래하며 산스크리트어 gāmati, 영어 come과 동계이다."
      },
      {
        "g": "φίλον",
        "pos": "형용사",
        "lemma": "φίλος, φίλη, φίλον",
        "parse": "sg.acc.m.",
        "gloss_kr": "사랑하는, 자신의",
        "gloss_en": "dear, own, beloved",
        "syntax": "φίλον는 목적어 πατέρ᾽를 수식하는 한정 형용사로서 LFG에서 [ADJUNCT [PRED 'φίλος', CASE acc, NUM sg, GENDER m]]로 분석된다. c-구조상 수식받는 명사와 성·수·격이 일치한다.",
        "background": "혈육의 정과 친밀함을 강조한다. 아버지 프리아모스를 향한 딸의 애틋한 감정을 드러낸다.",
        "etymology": "PIE 재구형 *pri-lo- ('사랑하는, 친근한')에서 유래한다. Chantraine(DELG)과 Beekes(EDG)는 산스크리트어 priyá-, 고딕어 frijōn과 동계임을 증명한다. 영어 friend, 현대 그리스어 φίλος로 직계 계승되었다."
      },
      {
        "g": "πατέρ᾽",
        "pos": "명사",
        "lemma": "πατήρ, πατρός, ὁ",
        "parse": "sg.acc.m.",
        "gloss_kr": "아버지를",
        "gloss_en": "father",
        "syntax": "πατέρ᾽는 정동사 εἰσενόησεν의 목적어로서 LFG에서 [PRED 'πατήρ', CASE acc, θ-ROLE PATIENT]로 분석된다. c-구조상 아버지를 알아본 대상을 나타낸다.",
        "background": "프리아모스 왕이다. 자식을 잃은 아버지의 참담한 모습을 성채 위에서 내려다보는 딸 카산드라의 시선을 통해 부자 간의 비극이 극대화된다.",
        "etymology": "PIE 재구형 *ph₂tḗr ('아버지')에서 유래한다. Chantraine(DELG)과 Beekes(EDG)는 산스크리트어 pitár-, 라틴어 pater, 영어 father와 동계어임을 입증한다. 현대 그리스어 πατέρας로 직계 계승되었다."
      },
      {
        "g": "εἰσενόησεν",
        "pos": "동사",
        "lemma": "εἰσνοέω",
        "principalParts": "εἰσνοέω – εἰσνοήσω – εἰσένοησα – εἰσενόηκα – (미상) – (미상)",
        "parse": "3rd.sg.aor.ind.act.",
        "gloss_kr": "똑똑히 보았다, 알아채었다",
        "gloss_en": "caught sight of, perceived",
        "syntax": "εἰσενόησεν는 주절의 서술어로서 LFG에서 [PRED 'εἰσνοέω<SUBJ,OBJ>', TENSE past, ASPECT aor, SUBJ [PRED 'Κασσάνδρη', NUM sg, CASE nom], OBJ [PRED 'πατήρ', CASE acc]]로 분석된다.",
        "background": "카산드라가 성채 위에서 수레에 탄 아버지를 한눈에 발견하고 그 참혹한 현실을 직시하는 결정적 순간을 나타낸다.",
        "etymology": "전치사 εἰς와 동사 νοέω의 합성어이다. 어근 *snow- 또는 *nous-('마음, 지성')에서 유래한다. 현대 그리스어에서도 νοώ로 명맥을 잇는다."
      }
    ]
  },
  {
    "ref": "Iliad 24.701",
    "trans": "마차 위에 서 있는 것과, 도시를 외치게 하는 전령을 보았으니,",
    "words": [
      {
        "g": "ἑσταότ᾽",
        "pos": "분사",
        "lemma": "ἵστημι",
        "principalParts": "ἵστημι – στήσω – ἔστησα / ἔστην – ἕστηκα – ἕσταμαι – ἐστάθην",
        "parse": "perf.act.part.sg.acc.m.",
        "gloss_kr": "서 있는 (아버지를)",
        "gloss_en": "standing (in the chariot)",
        "syntax": "ἑσταότ᾽는 목적어 πατέρα를 수식하는 분사 보어로서 LFG에서 [XCOMP [PRED 'ἵστημι<SUBJ,OBL>', SUBJ πατήρ, OBL ἐν δίφρῳ]]로 분석된다.",
        "background": "프리아모스 왕이 마차 위에 주저앉지 않고 서서 수레를 타고 성안으로 들어오는 모습을 포착한 분사이다.",
        "etymology": "PIE 중복완료형 재구 *si-stoh₂- ('서 있다')에서 유래한다. Chantraine(DELG)과 Beekes(EDG)는 산스크리트어 tasthau, 라틴어 stō, 영어 stand와 동계어임을 증명한다. 현대 그리스어 στέκω로 직계 계승되었다."
      },
      {
        "g": "ἐν",
        "pos": "전치사",
        "lemma": "ἐν",
        "parse": "prep.+dat.",
        "gloss_kr": "~안에, ~위에",
        "gloss_en": "in, on",
        "syntax": "ἐν는 여격을 지배하는 전치사로서 LFG에서 [OBL-LOC [PRED 'ἐν<OBJ>', OBJ [CASE dat]]]로 분석된다. c-구조상 마차 위라는 공간적 배경을 명시한다.",
        "background": "프리아모스가 타고 있는 마차의 내부 공간을 한정하며, 마차 위에서 시신과 함께 있는 왕의 모습을 규정한다.",
        "etymology": "PIE 재구형 *en ('안에')에서 유래한다. Chantraine(DELG)과 Beekes(EDG)는 라틴어 in, 산스크리트어 antari와 동계임을 밝힌다. 영어 in, 현대 그리스어 σε로 명맥을 잇는다."
      },
      {
        "g": "δίφρῳ",
        "pos": "명사",
        "lemma": "δίφρος, δίφρου, ὁ",
        "parse": "sg.dat.m.",
        "gloss_kr": "마차 위에, 전차 좌석에",
        "gloss_en": "in the chariot, seat",
        "syntax": "δίφρῳ는 전치사 ἐν의 목적어로서 LFG에서 [PRED 'δίφρος', CASE dat, θ-ROLE LOCATION]로 분석된다.",
        "background": "호메로스 시대 영웅들이 타는 전차나 마차의 좌석을 가리킨다. 아들의 시신을 실은 슬픔의 마차가 된 비극적 공간이다.",
        "etymology": "δις와 φέρω의 합성어설과 선그리스어 기층 어휘설이 존재한다. Chantraine(DELG)은 두 개의 바퀴가 달린 수레를 뜻하는 고유 그리스어 합성어로 설명한다."
      },
      {
        "g": "κήρυκά",
        "pos": "명사",
        "lemma": "κῆρυξ, κήρυκος, ὁ",
        "parse": "sg.acc.m.",
        "gloss_kr": "전령을",
        "gloss_en": "herald",
        "syntax": "κήρυκά는 목적어 명사구로서 LFG에서 [PRED 'κῆρυξ', CASE acc, θ-ROLE PATIENT]로 분석된다. c-구조상 프리아모스와 함께 마차에 탄 이다이오스를 가리킨다.",
        "background": "프리아모스를 수행하여 아킬레우스의 진영까지 동행했던 충실한 전령 이다이오스이다.",
        "etymology": "미케네어 기록으로 증명되는 오래된 단어이다. Beekes(EDG)와 Chantraine(DELG)은 선그리스어 기층 어휘 또는 동방 차용어 가능성을 제기한다."
      },
      {
        "g": "τε",
        "pos": "접속사",
        "lemma": "τέ",
        "parse": "coord.conj.",
        "gloss_kr": "그리고",
        "gloss_en": "and",
        "syntax": "τε는 대등 접속사로서 LFG에서 [COORD-TYPE additive] 자질을 가지며 πατέρα와 κήρυκα를 연결한다.",
        "background": "왕과 전령이라는 두 인물을 마차 위에 함께 묶어준다.",
        "etymology": "PIE 어근 *kʷe에서 유래함."
      },
      {
        "g": "ἀστυβοώτην",
        "pos": "형용사",
        "lemma": "ἀστυβοώτης, ἀστυβοώτου, ὁ",
        "parse": "sg.acc.m.",
        "gloss_kr": "성안에 소리치는",
        "gloss_en": "shouting through the city",
        "syntax": "ἀστυβοώτην는 κήρυκα를 수식하는 한정 형용사로서 LFG에서 [ADJUNCT [PRED 'ἀστυβοώτης', CASE acc, NUM sg, GENDER m]]로 분석된다.",
        "background": "이다이오스가 도성에 도착하여 헥토르의 시신이 돌아왔음을 백성들에게 알리며 외치는 역할을 묘사하는 호메로스적 복합어이다.",
        "etymology": "ἄστυ('도시')와 βοάω('소리치다')의 합성어이다. Chantraine(DELG)과 Beekes(EDG)에 따르면 호메로스 시가에서 창조된 서사적 복합어이다."
      }
    ]
  },
  {
    "ref": "Iliad 24.702",
    "trans": "노새들이 끄는 수레의 침상 위에 누워 있는 그를 보았으니,",
    "words": [
      {
        "g": "τὸν",
        "pos": "대명사",
        "lemma": "ὁ, ἡ, τό",
        "parse": "sg.acc.m.",
        "gloss_kr": "그를 (헥토르를)",
        "gloss_en": "him",
        "syntax": "τὸν은 정동사 ἴδε의 목적어로서 LFG에서 [PRED 'pro', CASE acc, TH-ROLE PATIENT]로 분석되며 문맥상 헥토르를 지시한다.",
        "background": "성채 위에서 아버지를 본 카산드라의 시선이 곧바로 아버지의 마차 위에 놓인 시신, 즉 헥토르에게로 옮겨지는 시각적 전환을 보여준다.",
        "etymology": "PIE 지시/관사 재구형 *to- / *tā-에서 유래한다. 현대 그리스어에서 정관사로 직접 계승되었다."
      },
      {
        "g": "δ᾽",
        "pos": "접속사",
        "lemma": "δέ",
        "parse": "coord.conj.",
        "gloss_kr": "그리고, 그런데",
        "gloss_en": "and, but",
        "syntax": "δ᾽는 대등 접속사로서 LFG에서 [COORD-TYPE additive] 자질을 가지며 아버지 프리아모스에서 시신 헥토르로 시선의 초점을 이동시키는 매개 역할을 한다.",
        "background": "프리아모스를 발견한 데 이어 그 수레 위에 누워 있는 헥토르의 시신을 발견하는 두 단계의 시각적 확인 과정을 연결한다.",
        "etymology": "PIE 어근 *de에서 유래함."
      },
      {
        "g": "ἄρ᾽",
        "pos": "소사",
        "lemma": "ἄρα",
        "parse": "part.",
        "gloss_kr": "과연, 그야말로",
        "gloss_en": "then, indeed",
        "syntax": "ἄρ᾽는 서사적 소사로서 LFG에서 [DISCOURSE-FUNC inferential] 자질로 분석되며 앞선 발견에 따른 필연적 충격을 나타낸다.",
        "background": "카산드라가 눈앞에 벌어진 비극적 현실을 마침내 확인하고 경악하는 서사적 분위기를 고조시킨다.",
        "etymology": "PIE 어원적 담화 표지에서 소급됨."
      },
      {
        "g": "ἐφ᾽",
        "pos": "전치사",
        "lemma": "ἐπί",
        "parse": "prep.+dat.",
        "gloss_kr": "~위에",
        "gloss_en": "upon, on",
        "syntax": "ἐφ᾽는 여격을 지배하는 전치사로서 LFG에서 [OBL-LOC [PRED 'ἐπί<OBJ>', OBJ [CASE dat]]]로 분석된다.",
        "background": "헥토르의 시신이 놓여 있는 물리적 위치를 정확하게 지시하며, 운반 수단인 노새들과 시신의 관계를 연결한다.",
        "etymology": "PIE 재구형 *epi- / *opi-에서 유래한다. Chantraine(DELG)과 Beekes(EDG)는 산스크리트어 ápi, 라틴어 ob 등과 동계임을 증명한다. 현대 그리스어 επί로 계승되었다."
      },
      {
        "g": "ἡμιόνων",
        "pos": "명사",
        "lemma": "ἡμίονος, ἡμιόνου, ὁ/ἡ",
        "parse": "pl.gen.f.",
        "gloss_kr": "노새들이 끄는 (수레) 위에",
        "gloss_en": "of mules",
        "syntax": "ἡμιόνων는 전치사 ἐφ᾽의 목적어로서 LFG에서 [PRED 'ἡμίονος', CASE gen, θ-ROLE POSSESSOR]로 분석된다.",
        "background": "앞서 시신을 운반하던 노새들의 맥락을 이어받아, 그 노새들이 끄는 수레 위에 시신이 안치되어 있음을 공간적으로 확정한다.",
        "etymology": "ἥμισυς + ὄνος의 합성어이다."
      },
      {
        "g": "ἴδε",
        "pos": "동사",
        "lemma": "εἶδον",
        "principalParts": "ὁράω – ὀψομαι – εἶδον – ἑόρακα – ἑώραμαι – ὤφθην",
        "parse": "3rd.sg.aor.ind.act.",
        "gloss_kr": "보았다",
        "gloss_en": "saw",
        "syntax": "ἴδε는 문장의 주술동사로서 LFG에서 [PRED 'ὁράω<SUBJ,OBJ>', TENSE past, ASPECT aor, SUBJ [PRED 'Κασσάνδρη', NUM sg, CASE nom], OBJ [PRED 'τόν', CASE acc]]로 분석된다.",
        "background": "카산드라가 성채 위에서 아래를 내려다보다가 마차 위에 누워 있는 헥토르의 시신을 정확히 목격하는 인식이 완성되는 순간이다.",
        "etymology": "PIE 어근 *weyd- ('보다, 알다')에서 유래한다. Chantraine(DELG)과 Beekes(EDG)는 산스크리트어 veda, 라틴어 vidēre, 영어 wit과 완벽한 동계어임을 입증한다. 현대 그리스어 είδα로 계승되었다."
      },
      {
        "g": "κείμενον",
        "pos": "분사",
        "lemma": "κεῖμαι",
        "principalParts": "κεῖμαι – κείσομαι – (미상) – (미상) – (미상) – (미상)",
        "parse": "pres.part.sg.acc.m.",
        "gloss_kr": "누워 있는",
        "gloss_en": "lying, outstretched",
        "syntax": "κείμενον는 목적어 τὸν을 수식하는 목적격 보어 분사로서 LFG에서 [XCOMP [PRED 'κεῖμαι<SUBJ,OBL>', SUBJ τὸν, OBL ἐν λεχέεσσι]]로 분석된다.",
        "background": "헥토르의 시신이 마차 위나 침상 위에 생명 없이 널브러져 있는 참혹한 상태를 보여주는 분사이다.",
        "etymology": "PIE 재구형 *kei- ('눕다, 거주하다')에서 유래한다. Chantraine(DELG)과 Beekes(EDG)는 산스크리트어 śete와 동계임을 증명한다. 영어 cemetery, 현대 그리스어 κείμαι로 직계 계승되었다."
      },
      {
        "g": "ἐν",
        "pos": "전치사",
        "lemma": "ἐν",
        "parse": "prep.+dat.",
        "gloss_kr": "~안에, ~위에",
        "gloss_en": "in, upon",
        "syntax": "ἐν는 여격을 지배하는 전치사로서 LFG에서 [OBL-LOC [PRED 'ἐν<OBJ>', OBJ [CASE dat]]]로 분석된다.",
        "background": "시신이 안치된 장소를 강조하며, 마차의 평상 위라는 구체적 공간을 지시한다.",
        "etymology": "PIE 재구형 *en에서 유래함."
      },
      {
        "g": "λεχέεσσι",
        "pos": "명사",
        "lemma": "λέχος, λέχεος, τό",
        "parse": "pl.dat.n.",
        "gloss_kr": "침상 위에, 마차의 평상 위에",
        "gloss_en": "on litters, bed",
        "syntax": "λεχέεσσι는 전치사 ἐν의 목적어로서 LFG에서 [PRED 'λέχος', CASE dat, NUM pl, θ-ROLE LOCATION]로 분석된다. c-구조상 호메로스적 확장 여격 복수형을 취한다.",
        "background": "시신을 운반하기 위해 수레 위에 마련된 임시 침상이나 들것을 뜻한다.",
        "etymology": "PIE 어근 *leǵ-('눕다')에서 유래한다. Chantraine(DELG)과 Beekes(EDG)는 산스크리트어 śayya-, 라틴어 lectus와 동계어임을 증명한다."
      }
    ]
  },
  {
    "ref": "Iliad 24.703",
    "trans": "통곡을 터뜨리며 곧바로 온 도성에 소리쳐 외쳤으니,",
    "words": [
      {
        "g": "κώκυσέν",
        "pos": "동사",
        "lemma": "κωκύω",
        "principalParts": "κωκύω – κωκύσω – ἐκόκυσα – (미상) – (미상) – (미상)",
        "parse": "3rd.sg.aor.ind.act.",
        "gloss_kr": "통곡했다, 비명을 질렀다",
        "gloss_en": "wailed, shrieked aloud",
        "syntax": "κώκυσέν는 주절의 첫 번째 서술어로서 LFG에서 [PRED 'κωκύω<SUBJ>', TENSE past, ASPECT aor, SUBJ [PRED 'Κασσάνδρη', NUM sg, CASE nom]]로 분석된다.",
        "background": "시신을 확인한 순간 카산드라가 참혹한 슬픔을 이기지 못하고 성벽 위에서 터뜨린 날카롭고 처절한 비명이다.",
        "etymology": "의성어적 감탄사에서 출발한 동사로, 고통 속의 탄식 소리를 나타낸다. Chantraine(DELG)과 Beekes(EDG)는 인도유럽어족 전반에 걸치는 감탄음 계통의 의성어 파생 동사로 분류한다. 현대 그리스어 κωκύω로 보존되어 있다."
      },
      {
        "g": "τ᾽",
        "pos": "접속사",
        "lemma": "τέ",
        "parse": "coord.conj.",
        "gloss_kr": "그리고",
        "gloss_en": "and",
        "syntax": "τ᾽는 대등 접속사로서 LFG에서 [COORD-TYPE additive] 자질을 가지며 두 개의 주절 동사를 연결한다.",
        "background": "통곡하는 행위와 외치는 행위를 하나의 연속된 비극적 반응으로 묶어준다.",
        "etymology": "PIE 어근 *kʷe에서 유래함."
      },
      {
        "g": "ἄρ᾽",
        "pos": "소사",
        "lemma": "ἄρα",
        "parse": "part.",
        "gloss_kr": "과연, 곧이어",
        "gloss_en": "then, accordingly",
        "syntax": "ἄρ᾽는 서사적 소사로서 LFG에서 [DISCOURSE-FUNC inferential] 자질로 분석된다.",
        "background": "충격적인 시신 목격 직후 자연스럽게 터져 나오는 비극적 반응의 당위성을 부여한다.",
        "etymology": "PIE 어원적 담화 표지에서 소급됨."
      },
      {
        "g": "ἔπειτα",
        "pos": "부사",
        "lemma": "ἔπειτα",
        "parse": "adv.",
        "gloss_kr": "그러고 나서, 그 후에",
        "gloss_en": "then, thereupon",
        "syntax": "ἔπειτα는 시간 부사로서 LFG에서 [ADJUNCT [PRED 'ἔπειτα', TENSE past, FUNCTION temporal]]로 분석된다.",
        "background": "시신의 목격과 통곡·외침 사이의 미세한 시간적 선후 관계를 규정한다.",
        "etymology": "전치사 ἐπί와 부사 εἶτα의 합성어이다. Chantraine(DELG)에 따르면 시공간적 순서를 나타낸다. 현대 그리스어 ἔπειτα로 활발히 사용된다."
      },
      {
        "g": "γέγωνέ",
        "pos": "동사",
        "lemma": "γέγωνα",
        "principalParts": "γέγωνα – γεγωνήσω – ἐγεφώνησα – (미상) – (미상) – (미상)",
        "parse": "3rd.sg.perf.ind.act.",
        "gloss_kr": "소리쳐 외쳤다, 크게 부르짖었다",
        "gloss_en": "shouted aloud, cried out",
        "syntax": "γέγωνέ는 주절의 두 번째 서술어로서 LFG에서 [PRED 'γέγωνα<SUBJ,OBJ>', TENSE present, ASPECT perf, SUBJ [PRED 'Κασσάνδρη', NUM sg, CASE nom], OBJ [PRED 'πᾶν κατὰ ἄστυ', CASE acc]]로 분석된다.",
        "background": "카산드라가 성벽 위에서 트로이아 전역에 들리도록 목청껏 부르짖는 처절한 외침이다.",
        "etymology": "PIE 어근 *gʷeH₂- 또는 의성어적 어근에서 유래한다. Chantraine(DELG)과 Beekes(EDG)는 산스크리트어 gṛṇāti 등과 동계 가능성을 논의한다."
      },
      {
        "g": "τε",
        "pos": "접속사",
        "lemma": "τέ",
        "parse": "coord.conj.",
        "gloss_kr": "그리고",
        "gloss_en": "and",
        "syntax": "τε는 대등 접속사로서 LFG에서 [COORD-TYPE additive] 자질을 가진다.",
        "background": "외침이 성벽 위에서 메아리쳐 온 도성에 울려 퍼지는 광경을 리드미컬하게 연결하는 구송 공식이다.",
        "etymology": "PIE 어근 *kʷe에서 유래함."
      },
      {
        "g": "πᾶν",
        "pos": "형용사",
        "lemma": "πᾶς, πᾶσα, πᾶν",
        "parse": "sg.acc.n.",
        "gloss_kr": "모든, 온",
        "gloss_en": "all, whole",
        "syntax": "πᾶν는 명사 ἄστυ를 수식하는 한정 형용사로서 LFG에서 [ADJUNCT [PRED 'πᾶς', CASE acc, NUM sg, GENDER n]]로 분석된다.",
        "background": "트로이아의 온 도시 구석구석까지 카산드라의 비명이 울려 퍼짐을 강조한다.",
        "etymology": "PIE 재구형 *peh₂nt- ('모든, 전체의')에서 유래한다. Chantraine(DELG)과 Beekes(EDG)는 산스크리트어 pānt-와 동계로 본다. 영어 pan-, 현대 그리스어 παν-으로 이어진다."
      },
      {
        "g": "κατὰ",
        "pos": "전치사",
        "lemma": "κατά",
        "parse": "prep.+acc.",
        "gloss_kr": "~를 통하여, ~전역에 걸쳐",
        "gloss_en": "throughout, down over",
        "syntax": "κατά는 대격을 지배하는 전치사로서 LFG에서 [OBL-LOC [PRED 'κατά<OBJ>', OBJ [CASE acc, θ-ROLE DISTRIBUTIVE]]]로 분석된다.",
        "background": "카산드라의 목소리가 트로이아의 성곽과 골목골목마다 가득 퍼져나가는 공간적 확산을 그린다.",
        "etymology": "PIE 재구형 *km̥-to- 또는 방향 전치사 어근에서 유래한다. 영어 cata-, 현대 그리스어 κατά로 명맥을 잇는다."
      },
      {
        "g": "ἄστυ",
        "pos": "명사",
        "lemma": "ἄστυ, ἄστεος, τό",
        "parse": "sg.acc.n.",
        "gloss_kr": "도성을, 도시를",
        "gloss_en": "city, town",
        "syntax": "ἄστυ는 전치사 κατά의 목적어로서 LFG에서 [PRED 'ἄστυ', CASE acc, θ-ROLE PATH]로 분석된다.",
        "background": "트로이아의 도성 전체를 가리키며, 평화롭던 일상의 공간이 슬픔과 통곡의 메아리로 완전히 뒤덮이게 됨을 상징한다.",
        "etymology": "PIE 재구형 *wst-u-에서 유래함."
      }
    ]
  },
  {
    "ref": "Iliad 24.704",
    "trans": "\"트로이아 사람들아 그리고 트로이아 여인들아, 너희들은 헥토르를 보러 오라,",
    "words": [
      {
        "g": "ὄψεσθε",
        "pos": "동사",
        "lemma": "ὁράω",
        "principalParts": "ὁράω – ὄψομαι – εἶδον – ἑόρακα – ἑώραμαι – ὤφθην",
        "parse": "2nd.pl.fut.ind.mid.",
        "gloss_kr": "너희들은 보게 될 것이다!",
        "gloss_en": "you shall see!",
        "syntax": "ὄψεσθε는 직접화법 주절의 서술어로서 LFG에서 [PRED 'ὁράω<SUBJ,OBJ>', TENSE fut, VOICE mid, SUBJ [PRED 'Τρῶες καὶ Τρῳάδες', NUM pl, CASE voc], OBJ [PRED 'Ἕκτωρ', CASE acc]]로 분석된다.",
        "background": "성벽 위에서 카산드라가 트로이아의 모든 백성을 향해 던지는 직접화법의 첫마디이다. 헥토르의 시신을 직접 눈으로 확인하라는 명령이다.",
        "etymology": "PIE 어근 *weyd- ('보다')에서 유래한 미래 중간태 어형이다."
      },
      {
        "g": "Τρῶες",
        "pos": "명사(고유)",
        "lemma": "Τρώς, Τρώος, ὁ",
        "parse": "pl.voc.m.",
        "gloss_kr": "트로이아 사람들아!",
        "gloss_en": "Trojans!",
        "syntax": "Τρῶες는 직접 호격 명사구로서 LFG에서 [VOC-TOP [PRED 'Τρώς', CASE voc, NUM pl]]로 분석된다. c-구조상 문장 전체의 청자를 직접 지칭한다.",
        "background": "트로이아의 남성 시민들, 즉 도시의 전사들과 백성들을 향한 카산드라의 절박한 호소이다.",
        "etymology": "아나톨리아 히타이트어 기록의 Wiluša 및 Truwa와 직접 연관된다. Beekes(EDG)와 Chantraine(DELG)은 선그리스어 또는 아나톨리아 기층 명칭으로 분류한다."
      },
      {
        "g": "καὶ",
        "pos": "접속사",
        "lemma": "καί",
        "parse": "coord.conj.",
        "gloss_kr": "그리고",
        "gloss_en": "and",
        "syntax": "καί는 대등 접속사로서 LFG에서 [COORD-TYPE additive] 자질을 가지며 Τρῶες와 Τρῳάδες 두 집단을 병렬 연결한다.",
        "background": "남성 전사들과 여성 부인들을 한데 묶어 트로이아 공동체 전체를 카산드라의 청중으로 소환한다.",
        "etymology": "첨가 및 강조를 뜻하는 기본 접속사이다. 현대 그리스어에서도 καί로 광범위하게 쓰인다."
      },
      {
        "g": "Τρῳάδες",
        "pos": "명사(고유)",
        "lemma": "Τρωάς, Τρωάδος, ἡ",
        "parse": "pl.voc.f.",
        "gloss_kr": "트로이아 여인들아!",
        "gloss_en": "Trojan women!",
        "syntax": "Τρῳάδες는 앞선 Τρῶες와 병렬되는 호격 명사구로서 LFG에서 [VOC-TOP [PRED 'Τρωάς', CASE voc, NUM pl, GENDER f]]로 분석된다.",
        "background": "남성들뿐만 아니라 트로이아의 여인들까지 모두 나와서 이 참혹한 광경을 보라고 외치는 카산드라의 절규이다.",
        "etymology": "Τρώς에서 파생된 여성형 종족 명사이다. Chantraine(DELG)에 따르면 아나톨리아 기층 지명 어근에서 파생된 그리스어 고유 파생 명사이다."
      },
      {
        "g": "Ἕκτορ᾽",
        "pos": "명사(고유)",
        "lemma": "Ἕκτωρ, Ἕκτορος, ὁ",
        "parse": "sg.acc.m.",
        "gloss_kr": "헥토르를",
        "gloss_en": "Hector",
        "syntax": "Ἕκτορ᾽는 동사 ὄψεσθε의 목적어로서 LFG에서 [PRED 'Ἕκτωρ', CASE acc, θ-ROLE PATIENT]로 분석된다.",
        "background": "트로이아의 가장 위대한 영웅이자 왕자였던 헥토르의 이름을 직접 부르며 백성들에게 충격을 안긴다.",
        "etymology": "'가지고 있는 자, 수호하는 자'를 뜻하는 어근 ἔχω에서 유래한다. Chantraine(DELG)과 Beekes(EDG)는 동사 ἔχω의 파생 명사로 도시를 지키는 자라는 뜻을 지닌다고 설명한다."
      },
      {
        "g": "ἰόντες",
        "pos": "분사",
        "lemma": "εἶμι",
        "principalParts": "εἶμι – (미상) – (미상) – (미상) – (미상) – (미상)",
        "parse": "pres.act.part.pl.voc.m.",
        "gloss_kr": "(나아) 가며, 다가오는",
        "gloss_en": "coming, going",
        "syntax": "ἰόντες는 호격 주어와 성·수·격이 일치하는 부대 상황 분사로서 LFG에서 [ADJUNCT [PRED 'εἶμι<SUBJ>', SUBJ Τρῶες]]로 분석된다.",
        "background": "백성들에게 시신이 있는 곳으로 직접 나와서 헥토르의 죽음을 목격하라고 촉구하는 역동적인 분사이다.",
        "etymology": "PIE 어근 *ei- ('가다')에서 유래한다. Chantraine(DELG)과 Beekes(EDG)는 산스크리트어 eti, 라틴어 īre와 동계어임을 증명한다."
      }
    ]
  },
  {
    "ref": "Iliad 24.705",
    "trans": "일찍이 그가 전투에서 살아 돌아올 때에,",
    "words": [
      {
        "g": "εἴ",
        "pos": "접속사",
        "lemma": "εἰ",
        "parse": "conj.",
        "gloss_kr": "만약 ~할 때에, ~라면",
        "gloss_en": "if, whenever",
        "syntax": "εἴ는 조건절을 이끄는 접속사로서 LFG에서 [COMP-TYPE conditional] 자질을 가진다. c-구조상 과거의 평화롭던 시절과 현재의 비극을 대비시키는 조건절을 매개한다.",
        "background": "과거에 헥토르가 전장에서 살아 돌아올 때마다 온 성안이 환호했던 영광스러운 순간과 현재의 참담한 죽음을 대비시킨다.",
        "etymology": "PIE 재구형 *ei ('만약 ~라면')에서 유래한다. Chantraine(DELG)과 Beekes(EDG)는 고대 인도유럽어족의 조건 입자와 일치함을 증명한다. 현대 그리스어 ἄν으로 이어진다."
      },
      {
        "g": "ποτε",
        "pos": "부사",
        "lemma": "ποτε",
        "parse": "adv.",
        "gloss_kr": "일찍이, 언젠가, 과거에",
        "gloss_en": "ever, at one time",
        "syntax": "ποτε는 시간 부사로서 LFG에서 [ADJUNCT [PRED 'ποτε', TENSE past, FUNCTION temporal]]로 분석된다.",
        "background": "헥토르가 전쟁터에서 살아 돌아올 때마다 트로이아 백성들이 누렸던 기쁨의 과거를 환기하는 시간적 부사이다.",
        "etymology": "의문/부정 대명사 어근에 시간 접미사가 결합된 형태이다. 현대 그리스어 ποτέ로 의미가 전가되었다."
      },
      {
        "g": "καὶ",
        "pos": "접속사",
        "lemma": "καί",
        "parse": "adv./conj.",
        "gloss_kr": "심지어, 그야말로",
        "gloss_en": "even, also",
        "syntax": "καὶ는 강조 부사로서 LFG에서 [FOCUS +] 자질을 가지며 후행 분사 ζώοντι를 강조한다.",
        "background": "죽어서 실려 온 현재와 달리, 과거에는 그가 살아 있는 상태로 돌아왔음을 강조하는 수사적 장치이다.",
        "etymology": "첨가 및 강조를 뜻하는 기본 접속사이다."
      },
      {
        "g": "ζώοντι",
        "pos": "분사",
        "lemma": "ζάω",
        "principalParts": "ζάω – ζήσω – ἔζησα – (미상) – (미상) – (미상)",
        "parse": "pres.act.part.sg.dat.m.",
        "gloss_kr": "살아 있는 (그가)",
        "gloss_en": "living, alive",
        "syntax": "ζώοντι는 분사구문으로서 수식어 역할을 하며 LFG에서 [XCOMP [PRED 'ζάω', CASE dat, NUM sg, GENDER m, TENSE pres]]로 분석된다.",
        "background": "헥토르가 전장에서 살아 돌아오던 과거의 영광스러운 생존 상태를 강조하며, 현재의 차가운 시신 상태와 대조를 이룬다.",
        "etymology": "PIE 재구형 *gʷih₃- ('살다')에서 유래한다. Chantraine(DELG)과 Beekes(EDG)는 산스크리트어 jīvati, 라틴어 vīvere, 영어 quick과 동계어임을 증명한다. 현대 그리스어 ζώ로 직계 계승되었다."
      },
      {
        "g": "μάχης",
        "pos": "명사",
        "lemma": "μάχη, μάχης, ἡ",
        "parse": "sg.gen.f.",
        "gloss_kr": "전투로부터, 전쟁터에서",
        "gloss_en": "from battle, war",
        "syntax": "μάχης는 분사 ἐκνοστήσαντι의 분리 속격(ablatival genitive)으로서 LFG에서 [OBL-GEN [PRED 'μάχη', CASE gen, θ-ROLE SOURCE]]로 분석된다.",
        "background": "목숨을 걸고 싸우는 트로이아 전장을 가리키며, 그 치열한 싸움터에서 무사히 살아 돌아오던 과거의 귀환들을 떠올리게 한다.",
        "etymology": "동사 μάχομαι의 어간에서 파생된 명사이다. Chantraine(DELG)과 Beekes(EDG)는 PIE 어근 *mah₂- 또는 고유 그리스어 투쟁 어휘로 분류한다."
      },
      {
        "g": "ἐκνοστήσαντι",
        "pos": "분사",
        "lemma": "ἐκνοστέω",
        "principalParts": "ἐκνοστέω – ἐκνοστήσω – ἐξένοησα – (미상) – (미상) – (미상)",
        "parse": "aor.act.part.sg.dat.m.",
        "gloss_kr": "무사히 돌아왔을 때에",
        "gloss_en": "having returned safely",
        "syntax": "ἐκνοστήσαντι는 분사로서 LFG에서 [ADJUNCT [PRED 'ἐκνοστέω<SUBJ,OBL>', SUBJ Ἕκτωρ, OBL ἐκ μάχης]]로 분석된다.",
        "background": "전장에서 죽지 않고 살아서 성문 안으로 당당하게 개선하던 헥토르의 과거 영광스러운 귀환을 회상하는 비극적 장치이다.",
        "etymology": "전치사 ἐκ과 동사 νοστέω의 합성어이다. 어근 *nes-('안전하게 고향에 돌아오다')에서 유래한다. 현대 그리스어 νοσταλγία로 직계 계승되었다."
      }
    ]
  },
  {
    "ref": "Iliad 24.706",
    "trans": "기뻐하라오, 그가 도시와 온 백성에게 커다란 기쁨이었으니\"",
    "words": [
      {
        "g": "χαίρετ᾽",
        "pos": "동사",
        "lemma": "χαίρω",
        "principalParts": "χαίρω – χαυρήσω – (미상) – κεχάρηκα – κεχάρημαι – ἐχάρην",
        "parse": "2nd.pl.pres.impv.act.",
        "gloss_kr": "기뻐하라오! (반어적 탄식)",
        "gloss_en": "rejoice!",
        "syntax": "χαίρετ᾽는 명령법 동사로서 LFG에서 [PRED 'χαίρω<SUBJ>', TENSE present, MOOD impv, SUBJ [PRED 'Τρῶες καὶ Τρῳάδες', NUM pl, CASE voc]]로 분석된다.",
        "background": "과거에 헥토르가 살아 돌아올 때마다 온 도시가 환호하며 기뻐했던 그 환희를 상기시키며, 현재의 비극적 현실을 탄식하는 카산드라의 절규이다.",
        "etymology": "PIE 재구형 *gʰe- / *gʰer-('기뻐하다')에서 유래한다. Chantraine(DELG)과 Beekes(EDG)는 산스크리트어 haryati와 동계임을 입증한다. 현대 그리스어 인사말 및 χαίρομαι로 계승되었다."
      },
      {
        "g": "ἐπεὶ",
        "pos": "접속사",
        "lemma": "ἐπεί",
        "parse": "conj.",
        "gloss_kr": "왜냐하면 ~였기 때문이다",
        "gloss_en": "since, because",
        "syntax": "ἐπεὶ는 이유/원인을 이끄는 종속 접속사로서 LFG에서 [COMP-TYPE causal] 자질을 가진다. c-구조상 앞선 환호의 이유를 설명하는 절을 도입한다.",
        "background": "헥토르의 생존과 귀환이 과거에 왜 그렇게 온 도시의 찬란한 기쁨이자 축복이었는지를 설명한다.",
        "etymology": "전치사 ἐπί와 접속사 ἤ의 합성 또는 복합 입자에서 유래한다. Chantraine(DELG)에 따르면 시간 및 인과를 나타낸다."
      },
      {
        "g": "μέγα",
        "pos": "형용사",
        "lemma": "μέγας, μεγάλη, μέγα",
        "parse": "sg.acc.n.",
        "gloss_kr": "크게, 엄청나게",
        "gloss_en": "greatly, mighty",
        "syntax": "μέγα는 부사적 대격으로서 LFG에서 [ADJUNCT [PRED 'μέγας', CASE acc, NUM sg, GENDER n, FUNCTION adverbial]]로 분석된다.",
        "background": "헥토르가 가져다주었던 기쁨의 크기가 얼마나 막대했는지를 강조하여, 그가 트로이아 공동체에서 차지했던 절대적인 존재 가치를 부각시킨다.",
        "etymology": "PIE 재구형 *meǵh₂- ('큰, 위대한')에서 유래한다. Chantraine(DELG)과 Beekes(EDG)는 산스크리트어 mahant-, 라틴어 magnus, 영어 mega와 완벽한 동계어임을 입증한다."
      },
      {
        "g": "χάρμα",
        "pos": "명사",
        "lemma": "χάρμα, χάρματος, τό",
        "parse": "sg.nom.n.",
        "gloss_kr": "기쁨, 환희의 원천",
        "gloss_en": "joy, source of delight",
        "syntax": "χάρμα는 주절의 주격 보어로서 LFG에서 [XCOMP [PRED 'χάρμα', CASE nom, NUM sg]]로 분석된다. c-구조상 불완전동사 ἦν의 주격 보어 기능을 수행한다.",
        "background": "헥토르가 살아 돌아올 때 그가 트로이아 성읍 전체에 안겨주었던 거대한 기쁨과 자랑스러움을 나타내는 명사이다.",
        "etymology": "동사 χαίρω의 어간에서 파생된 중성 명사이다. Chantraine(DELG)과 Beekes(EDG)는 기쁨을 뜻하는 PIE 어근에서 파생된 고유 그리스어 명사로 분류한다."
      },
      {
        "g": "πόλει",
        "pos": "명사",
        "lemma": "πόλις, πόλεως, ἡ",
        "parse": "sg.dat.f.",
        "gloss_kr": "도시에게, 도성에",
        "gloss_en": "to the city",
        "syntax": "πόλει는 여격 목적어로서 LFG에서 [OBL-DAT [PRED 'πόλις', CASE dat, TH-ROLE BENEFICIARY]]로 분석된다. c-구조상 기쁨의 귀속처를 나타낸다.",
        "background": "트로이아 도성 전체와 그 안에 사는 백성들에게 헥토르가 유일한 방패이자 기쁨의 근원이았음을 보여준다.",
        "etymology": "PIE 재구형 *ptolih₁- / *tolis ('성채, 도시')에서 유래한다. Chantraine(DELG)과 Beekes(EDG)는 산스크리트어 pur- 등과 동계어 가능성을 논의한다. 영어 police, metropolis, 현대 그리스어 πόλη로 직계 계승되었다."
      },
      {
        "g": "τ᾽",
        "pos": "접속사",
        "lemma": "τέ",
        "parse": "coord.conj.",
        "gloss_kr": "그리고",
        "gloss_en": "and",
        "syntax": "τ᾽는 대등 접속사로서 LFG에서 [COORD-TYPE additive] 자질을 가지며 πόλει와 δήμῳ를 연결한다.",
        "background": "성읍과 백성이라는 두 공동체적 차원을 대등하게 결합하여 헥토르의 죽음이 미치는 파장의 전면성을 부각시킨다.",
        "etymology": "PIE 어근 *kʷe에서 유래함."
      },
      {
        "g": "ἦν",
        "pos": "동사",
        "lemma": "εἰμί",
        "principalParts": "εἰμί – ἔσομαι – (미상) – (미상) – (미상) – (미상)",
        "parse": "3rd.sg.impf.ind.act.",
        "gloss_kr": "~이었다",
        "gloss_en": "was",
        "syntax": "ἦν는 주절의 서술동사로서 LFG에서 [PRED 'εἰμί<SUBJ,XCOMP>', TENSE past, ASPECT impf, SUBJ [PRED 'χάρμα', CASE nom], XCOMP [PRED 'πόλει ...', CASE dat]]로 분석된다.",
        "background": "과거에 헥토르가 트로이아의 도시와 백성들에게 어떠한 존재였는지를 확정적으로 증언하는 불완전과거 동사이다.",
        "etymology": "PIE 어근 *h₁es- ('이다, 존재하다')에서 유래한다. Chantraine(DELG)과 Beekes(EDG)는 산스크리트어 ásti, 라틴어 est, 영어 is와 완벽한 동계어임을 입증한다. 현대 그리스어 εἶναι로 직계 계승되었다."
      },
      {
        "g": "παντί",
        "pos": "형용사",
        "lemma": "πᾶς, πᾶσα, πᾶν",
        "parse": "sg.dat.m.",
        "gloss_kr": "모든, 온",
        "gloss_en": "to all",
        "syntax": "παντί는 명사 δήμῳ를 수식하는 한정 형용사로서 LFG에서 [ADJUNCT [PRED 'πᾶς', CASE dat, NUM sg, GENDER m]]로 분석된다.",
        "background": "예외 없이 트로이아의 모든 백성 한 사람 한 사람에게 헥토르가 기쁨이자 삶의 버팀목이었음을 강조한다.",
        "etymology": "PIE 재구형 *peh₂nt-에서 유래함."
      },
      {
        "g": "τε",
        "pos": "접속사",
        "lemma": "τέ",
        "parse": "coord.conj.",
        "gloss_kr": "그리고",
        "gloss_en": "and",
        "syntax": "τε는 대등 접속사로서 LFG에서 앞선 πόλει τε와 호응하는 상관 접속사 쌍의 완결을 맺는다.",
        "background": "도시와 백성 전체를 아우르는 대등 연결을 마무리하며 일리아스 24권 후반부 카산드라의 비극적 통곡 장면의 대미를 장식한다.",
        "etymology": "PIE 어근 *kʷe에서 유래함."
      },
      {
        "g": "δήμῳ",
        "pos": "명사",
        "lemma": "δῆμος, δήμου, ὁ",
        "parse": "sg.dat.m.",
        "gloss_kr": "백성들에게, 민중에게",
        "gloss_en": "to the people, folk",
        "syntax": "δήμῳ는 여격 목적어로서 LFG에서 [OBL-DAT [PRED 'δῆμος', CASE dat, TH-ROLE BENEFICIARY]]로 분석된다.",
        "background": "트로이아의 평민과 군중을 가리키며, 귀족 영웅 헥토르가 왕족뿐만 아니라 트로이아의 모든 일반 민중에게도 얼마나 사랑받고 절대적인 존재였는지를 보여준다.",
        "etymology": "PIE 재구형 *deh₂-mo- ('나누어진 토지, 민중')에서 유래한다. Chantraine(DELG)과 Beekes(EDG)는 분할된 영토나 거기 거주하는 민중을 뜻하는 PIE 어근에서 파생된 것으로 본다. 영어 democracy, 현대 그리스어 δήμος로 직계 계승되었다."
      }
    ]
  },
  {
    "ref": "Iliad 24.707",
    "trans": "이렇게 말씀하시니, 그곳 도시 안에서 남겨진 남자는 아무도 없었고 여인도 없었으니, 모든 이에게 견딜 수 없는 슬픔이 닥쳤기 때문이다.",
    "words": [
      {
        "g": "ὣς",
        "pos": "부사",
        "lemma": "ὥς",
        "parse": "adv.",
        "gloss_kr": "이렇게, 이와 같이",
        "gloss_en": "thus, so",
        "syntax": "LFG 관점에서 ὣς는 양태 부사로서 주절의 서술동사 ἔφατ᾽를 수식하며, f-구조상 [ADJUNCT {[PRED 'ὥς', MOD [PRED 'φημί']}]}로 분석된다. 통사적으로 선행하는 화법의 내용을 가리키는 지시적 기능을 수행하며, 문두에 위치하여 초점(focus)을 형성한다.",
        "background": "구송시에서 ὣς ἔφατ᾽ 구문은 앞선 인물들의 연설이나 대화를 마무리하고 새로운 서사적 반응으로 전환하는 전형적인 정형구(formula)로 기능한다.",
        "etymology": "PIE 재구형 *sws- 또는 지시 대명사 어근에서 비롯된 것으로 보이며, Chantraine(DELG)과 Beekes(EDG)는 이를 대명사적 지시 부사로 분류한다. 동계어로 산스크리트어 sva- 및 라틴어 suus 등과 연관될 수 있으나 형태론적 논쟁이 존재한다. 호메로스 이후 고전 그리스어 전반에서 방식과 양태를 나타내는 기본 부사로 정착하였다."
      },
      {
        "g": "ἔφατ᾽",
        "pos": "동사",
        "lemma": "φημί",
        "principalParts": "φημί – φήσω – ἔφησα – (미상) – (미상) – (미상)",
        "parse": "3rd.sg.impf.ind.mid.",
        "gloss_kr": "말하였다",
        "gloss_en": "he/she spoke",
        "syntax": "ἔφατ᾽는 중간태 형태로 쓰여 주어의 발화 행위가 주체에게 미치는 영향을 나타내며, LFG 자질구조상 [PRED 'φημί<SUBJ>', TENSE past, ASPECT impf, VOICE mid, SUBJ [PRED 'pro', PERS 3, NUM sg]]로 분석된다. 통사적으로 생략된 주어(안드로마케)와 호응하며 미완료과거 시제를 통해 상황의 지속 배경을 이룬다.",
        "background": "카산드라의 비탄에 이어 안드로마케가 장례의식의 시작을 알리는 발화를 끝맺는 장면이다. 비극적 국면 전환을 알리는 서사적 표지 역할을 한다.",
        "etymology": "PIE 어근 *bʰeh₂-('말하다')에서 유래하며, e급 어간과 영급 어간의 교체를 보인다. Chantraine(DELG) 및 LSJ에서 상세히 다루어지며, 라틴어 fārī와 동계어이다. 영어 fame 및 infant 등의 단어에 그 어원이 살아 있다."
      },
      {
        "g": "οὐδέ",
        "pos": "접속사",
        "lemma": "οὐδέ",
        "parse": "coord.conj.",
        "gloss_kr": "그리고 ~도 아니다, 심지어 ~도 아니다",
        "gloss_en": "and not, nor, not even",
        "syntax": "HPSG 관점에서 οὐδέ는 부사적 성격을 지닌 등위접속사로 [HEAD conj, MARKEDNESS [+]] 자질을 가지며, 뒤따르는 절을 부정·연결한다. 통사적으로 앞 문장의 진술을 이어받아 전체 도시의 보편적 부정(모두가 남지 않았다)을 강조한다.",
        "background": "도시 전체가 슬픔에 압도되어 단 한 명의 예외도 없이 성문으로 몰려나오는 비상사태를 극적으로 강조하는 수사적 장치이다.",
        "etymology": "부정사 οὐ와 접속사 δέ의 결합에서 유래하였다. 그리스어 통시 통사론에서 문장 간의 밀접한 대조와 연결을 나타내는 표준적 형태이다."
      },
      {
        "g": "τις",
        "pos": "대명사",
        "lemma": "τίς, τί",
        "parse": "sg.nom.m.",
        "gloss_kr": "어떤 이, 누구나",
        "gloss_en": "someone, anyone, any",
        "syntax": "LFG 상에서 ὣς ἔφατ᾽와 연동된 부정대명사로, [PRED 'τις', CASE nom, NUM sg, PERS 3] 자질을 지닌다. οὐδέ와 결합하여 '어떤 사람도 … 않다'는 총칭적 부정을 구성한다.",
        "background": "개별적인 인물을 넘어 트로이아의 모든 주민이라는 집단적 정체성을 강조하기 위한 문법적 장치이다.",
        "etymology": "PIE *kʷi-/*kʷo- 의문/부정대명사 어근에서 유래하였으며, Beekes(EDG)에서 다룬다. 산스크리트어 ka-, 라틴어 quis와 동계어이다."
      },
      {
        "g": "αὐτόθ᾽",
        "pos": "부사",
        "lemma": "αὐτόθι",
        "parse": "adv.",
        "gloss_kr": "거기에, 그곳에",
        "gloss_en": "there, on the spot",
        "syntax": "장소 부사로서 술어와 서술 공간을 한정하며, f-구조상 [ADJUNCT {[PRED 'αὐτόθι']}]로 기능한다. 엘리전(elision)을 겪어 후행 모음 앞에서 기식음이 탈락한 형태이다.",
        "background": "트로이아 성 안의 공간적 배경을 생생하게 지시하며, 비극의 현장에 주민들이 발을 묶인 상태를 시각화한다.",
        "etymology": "지시 대명사 어근 *au-에 장소 처격 접미사 -θι가 결합된 형태이다. Chantraine(DELG)에 따르면 호메로스 및 시적 문헌에서 공간적 현시성을 강화하기 위해 빈번히 사용된다."
      },
      {
        "g": "ἐνὶ",
        "pos": "전치사",
        "lemma": "ἐν",
        "parse": "prep.+dat.",
        "gloss_kr": "~ 안에",
        "gloss_en": "in, within",
        "syntax": "격 지배 이론상 여격(dat.)을 지배하는 전치사로, 명사구 πτόλεϊ에 사상적·공간적 내재성(locative)을 부여한다. [HEAD prep, GOVERNS [CASE dat]] 구조를 지닌다.",
        "background": "성벽 내부라는 물리적 한계 상황과 그 안에 갇힌 트로이아인들의 운명을 대비시키는 전치사 구문이다.",
        "etymology": "PIE *en에서 유래하며, 라틴어 in, 영어 in과 동계어이다. Beekes(EDG)와 Chantraine(DELG)에 공히 등재되어 있다."
      },
      {
        "g": "πτόλεϊ",
        "pos": "명사",
        "lemma": "πόλις, πόλεως, ἡ (호메로스式 πτόλις)",
        "parse": "sg.dat.f. (Homeric variant)",
        "gloss_kr": "도시, 성읍",
        "gloss_en": "city, citadel",
        "syntax": "전치사 ἐνὶ의 지배를 받는 여격 명사구로서 [PRED 'πόλις', CASE dat, NUM sg, GENDER f]의 F-구조를 갖는다. 운율적 필요에 따라 자음군이 첨가된 호메로스 이형태(πτόλις)의 여격이다.",
        "background": "트로이아라는 도시 공동체 전체가 헥토르의 죽음 앞에 무너져 내리는 거시적 비극의 공간을 가리킨다.",
        "etymology": "선그리스어 기층 어휘 가능성이 제기되기도 하나(Beekes EDG), 전통적으로는 PIE 어근 *tpel- 등과의 연관성이 논의된다. 그리스어 내에서 요새화된 거주지를 뜻하는 핵심 명사이다."
      },
      {
        "g": "λίπετ᾽",
        "pos": "동사",
        "lemma": "λείπω",
        "principalParts": "λείπω – λείψω – ἔλιπον – λέλοιπα – λέλειμμαι – ἐλείφθην",
        "parse": "3rd.sg.aor.ind.mid. (for passive/intransitive use)",
        "gloss_kr": "남겨지다, 남아 있다",
        "gloss_en": "was left behind",
        "syntax": "부정과거 중간태/수동태 형태로 [PRED 'λείπω<SUBJ>', TENSE past, ASPECT aor, VOICE mid/pass, SUBJ [PRED 'ἀνήρ', NUM sg]] 구조를 취한다. 부정어 οὐδέ와 결합하여 '남은 사람이 아무도 없었다'는 강한 전면적 부정을 완성한다.",
        "background": "헥토르의 시신이 들어온다는 소식에 성안의 모든 남녀가 거주지를 비우고 성문으로 질주하는 전면적인 이탈을 묘사한다.",
        "etymology": "PIE 어근 *leyp-('남기다, 끈적거리다')에서 유래한다. Chantraine(DELG)과 Beekes(EDG)에서 상세히 다루어지며, 산스크리트어 lip-, 라틴어 linquō, 영어 leave와 동계어이다."
      },
      {
        "g": "ἀνὴρ",
        "pos": "명사",
        "lemma": "ἀνήρ, ἀνδρός, ὁ",
        "parse": "sg.nom.m.",
        "gloss_kr": "남자, 사람",
        "gloss_en": "man, husband",
        "syntax": "주절의 주어로서 [PRED 'ἀνήρ', CASE nom, NUM sg, GENDER m]의 자질을 지니며, 동사 λίπετ᾽와 수일치를 이룬다. 통사적으로 보편 부정을 수식하는 주어 위치를 점한다.",
        "background": "트로이아의 성인 남성들 전체를 대표하며, 전사로서의 그들이 겪는 집단적 상실감을 대변한다.",
        "etymology": "PIE *h₂nér('사람, 남자')에서 유래하며, 후두음 *h₂-의 존재와 e급 어간을 보여준다. Chantraine(DELG)과 Beekes(EDG)에 잘 기술되어 있으며, 산스크리트어 nar-, 고대 아일랜드어 ner와 동계어이다."
      },
      {
        "g": "οὐδὲ",
        "pos": "접속사",
        "lemma": "οὐδέ",
        "parse": "coord.conj.",
        "gloss_kr": "그리고 ~도 아니다",
        "gloss_en": "nor yet, and not",
        "syntax": "앞선 οὐδέ와 병렬 구조를 이루며 [HEAD conj] 자질을 통해 여성 집단으로 부정을 확장하는 통사적 기능을 수행한다.",
        "background": "남성뿐만 아니라 여성조차 예외 없이 집을 떠났음을 강조하는 대칭적 수사 구조의 일부이다.",
        "etymology": "οὐ + δέ의 결합 형태로서 고대 그리스어 문장 연결과 부정 강조의 표준적 구문이다."
      },
      {
        "g": "γυνή:",
        "pos": "명사",
        "lemma": "γυνή, γυναικός, ἡ",
        "parse": "sg.nom.f.",
        "gloss_kr": "여인, 아내",
        "gloss_en": "woman, wife",
        "syntax": "두 번째 주어로서 [PRED 'γυνή', CASE nom, NUM sg, GENDER f] 구조를 가지며, 앞선 ἀνήρ와 함께 복합 주어의 의미적 총체를 구성한다.",
        "background": "어머니, 아내, 자매 등 트로이아의 모든 여성들이 예외 없이 비탄의 현장으로 몰려들고 있음을 보여준다.",
        "etymology": "PIE *gʷḗn('여성')에서 유래하며, 사격에서 나타나는 교체형(*gʷn-ēk-)의 흔적을 지닌다. Beekes(EDG)와 Chantraine(DELG)에 등재되어 있으며, 영어 queen, 산스크리트어 gnā-와 동계어이다."
      },
      {
        "g": "πάντας",
        "pos": "형용사",
        "lemma": "πᾶς, πᾶσα, πᾶν",
        "parse": "pl.acc.m.",
        "gloss_kr": "모든 이들을",
        "gloss_en": "all",
        "syntax": "목적격 형용사로서 후행하는 동사 ἵκετο의 목적어(OBJ) 기능을 수행하며, F-구조상 [PRED 'πᾶς', CASE acc, NUM pl, GENDER m]으로 분석된다.",
        "background": "예외 없는 전면적 비극의 확산을 강조하는 전형적인 총칭 수식어이다.",
        "etymology": "PIE *peh₂nt-('모든, 온전한')에서 유래하며, 후두음이론에 따른 재구가 적용된다. Chantraine(DELG)과 Beekes(EDG)에서 상세히 다룬다."
      },
      {
        "g": "γὰρ",
        "pos": "접속사",
        "lemma": "γάρ",
        "parse": "coord.conj.",
        "gloss_kr": "왜냐하면",
        "gloss_en": "for, because",
        "syntax": "후치 접속사(postpositive)로서 앞선 진술에 대한 인과적 원인을 제시하는 절을 이끌며, [HEAD conj, POSITION second]의 자질을 갖는다.",
        "background": "주민들이 일제히 성문으로 몰려나온 이유가 바로 감당하기 힘든 슬픔 때문이었음을 논리적으로 설명한다.",
        "etymology": "어원적으로 γε와 ἄρα의 결합에서 유래한 것으로 추정되며, 그리스어 인과 관계 표현의 핵심 입자이다(Chantraine DELG)."
      },
      {
        "g": "ἀάσχετον",
        "pos": "형용사",
        "lemma": "ἀάσχετος, ἀάσχετον",
        "parse": "sg.acc.n. (modifying πένθος)",
        "gloss_kr": "참을 수 없는, 견딜 수 없는",
        "gloss_en": "unbearable, irresistible",
        "syntax": "형용사로서 목적어 πένθος를 수식하며 [MODIFIED-BY [PRED 'ἀάσχετος', CASE acc, NUM sg, GENDER n]]의 구조를 형성한다.",
        "background": "인간의 심리적 용량을 초과하는 비극의 압도적 성격을 묘사하는 호메로스식 수식어이다.",
        "etymology": "a- privativum(부정 접두사)과 ἔχω(가지다, 억제하다)의 파생어 어근에서 유래한다. Chantraine(DELG)과 Beekes(EDG)에서 '억제할 수 없는' 의미의 형용사로 분석된다."
      },
      {
        "g": "ἵκετο",
        "pos": "동사",
        "lemma": "ἱκνέομαι",
        "principalParts": "ἱκνέομαι – ἵξομαι – ἱκόμην – (미상) – ἶγμαι – (미상)",
        "parse": "3rd.sg.aor.ind.mid.",
        "gloss_kr": "엄습하였다, 찾아왔다",
        "gloss_en": "came upon, reached",
        "syntax": "주절의 술어로서 [PRED 'ἱκνέομαι<SUBJ,OBJ>', TENSE past, ASPECT aor, VOICE mid, SUBJ [PRED 'πένθος', CASE nom], OBJ [PRED 'πᾶς', CASE acc]] 구조를 이룬다. 주어와 목적어의 위상이 교차되어 슬픔이 주체(사람들)를 엄습하는 능동적 작용을 나타낸다.",
        "background": "추상적인 감정인 슬픔이 외부에서 밀어닥치는 물리적인 힘처럼 인간을 가격하는 양상을 시적으로 표현한다.",
        "etymology": "PIE 어근 *seyk- 또는 *i̯ek- 계통으로 논의되며, Chantraine(DELG)과 Beekes(EDG)에 등재되어 있다. 산스크리트어 ἱk- 계열과 비교된다."
      },
      {
        "g": "πένθος:",
        "pos": "명사",
        "lemma": "πένθος, πένθους, τὸ",
        "parse": "sg.nom.n. (functioning as logical subject of ἵκετο)",
        "gloss_kr": "슬픔, 비탄",
        "gloss_en": "grief, sorrow",
        "syntax": "인과절의 논리적 주어로서 [PRED 'πένθος', CASE nom, NUM sg, GENDER n]의 F-구조를 가지며, 동사 ἵκετο와 호응한다.",
        "background": "헥토르의 죽음이 트로이아 전역에 안긴 집단적 비애의 거대한 파고를 상징하는 핵심 어휘이다.",
        "etymology": "PIE 어근 *bʰendʰ-('묶다') 또는 비탄과 관련된 어근에서 유래한 것으로 논의되며, Chantraine(DELG)과 Beekes(EDG)에서 어원적 연계가 다루어진다."
      },
      {
        "g": "ἀγχοῦ",
        "pos": "부사",
        "lemma": "ἀγχοῦ",
        "parse": "adv. (taking genitive)",
        "gloss_kr": "가까이에",
        "gloss_en": "near, close by",
        "syntax": "속격을 지배하는 장소 부사로서 [HEAD adv, GOVERNS [CASE gen]] 자질을 가지며, 뒤따르는 전치사구 또는 명사구와의 통사적 관계를 형성한다.",
        "background": "비탄에 잠긴 주민들이 모여든 공간적 위치가 성문 바로 앞임을 구체화한다.",
        "etymology": "PIE 어근 *angʰ-('조이다, 좁다')에서 유래하며, 산스크리트어 āmhu-, 라틴어 angustus와 동계어이다. Chantraine(DELG)과 Beekes(EDG)에 상세히 기술되어 있다."
      },
      {
        "g": "δὲ",
        "pos": "접속사",
        "lemma": "δέ",
        "parse": "coord.conj.",
        "gloss_kr": "그리고, 그런데",
        "gloss_en": "and, but",
        "syntax": "후치 등위접속사로 문장과 문장을 느슨하게 연결하며 [HEAD conj, POSITION second] 자질을 지닌다.",
        "background": "슬픔에 빠진 전체적 상황에서 구체적인 군중의 행동 장면으로 서사의 초점을 좁히는 전환 장치이다.",
        "etymology": "그리스어 고유의 대조·연결 접속사로 기원이 선그리스어 이전의 인도유럽어 자원에 닿아 있다(Chantraine DELG)."
      },
      {
        "g": "ξύμβληντο",
        "pos": "동사",
        "lemma": "συμβάλλω (호메로스식 이형태 ξύμβληντο)",
        "principalParts": "συμβάλλω – συμβαλῶ – συνέβαλον – συνέβληκα – συμβέβλημαι – συνεβλήθην",
        "parse": "3rd.pl.aor.ind.mid. (Homeric syncopated form)",
        "gloss_kr": "만났다, 모였다",
        "gloss_en": "met, came together",
        "syntax": "복수 주어와 호응하는 부정과거 중간태 형태로 [PRED 'συμβάλλω<SUBJ,OBL>', TENSE past, ASPECT aor, VOICE mid, SUBJ [PRED 'pro', NUM pl]] 구조를 이룬다. 호메로스식 단축형(syncopated form)으로 운율을 맞춘다.",
        "background": "시신을 운구해 오는 일행과 성문으로 달려간 군중이 마침내 마주치는 결정적 만남의 순간을 포착한다.",
        "etymology": "σύν(함께)과 βάλλω(던지다)의 합성어이며, PIE 어근 *gʷelh₁-에서 유래한다. Chantraine(DELG)과 Beekes(EDG)에서 상세히 분석된다."
      },
      {
        "g": "πυλάων",
        "pos": "명사",
        "lemma": "πύλη, πύλης, ἡ (호메로스식 속격 복수 πυλάων)",
        "parse": "pl.gen.f. (Homeric long-vowel genitive)",
        "gloss_kr": "성문의",
        "gloss_en": "of the gates",
        "syntax": "전치사적 또는 부사적 처소 의미를 지닌 속격 명사구로서 [PRED 'πύλη', CASE gen, NUM pl, GENDER f]의 F-구조를 갖는다. 호메로스식 장모음 속격 어미(-άων)를 취한다.",
        "background": "트로이아 성의 방어와 외부 세계를 잇는 핵심 관문인 성문 앞 공간을 지시한다.",
        "etymology": "PIE 어근 *pel-('통과하다, 문')에서 유래한 것으로 추정되며, 슬라브어 및 라틴어 porta와 동계어 가능성이 논의된다(Beekes EDG)."
      },
      {
        "g": "νεκρὸν",
        "pos": "명사",
        "lemma": "νεκρός, νεκροῦ, ὁ",
        "parse": "sg.acc.m.",
        "gloss_kr": "시신을",
        "gloss_en": "corpse, dead body",
        "syntax": "분사 ἄγοντι의 목적어로서 [PRED 'νεκρός', CASE acc, NUM sg, GENDER m]의 자질을 지니며, F-구조상 [OBJ [PRED 'νεκρός', θ-ROLE THEME]]으로 분석된다.",
        "background": "아킬레우스에게 살해당한 뒤 마침내 성 안으로 돌아온 헥토르의 육신을 가리키는 비극의 중심 객체이다.",
        "etymology": "PIE 어근 *nek-('죽다')에서 유래하며, 산스크리트어 naśi-, 라틴어 nex와 동계어이다. Chantraine(DELG)과 Beekes(EDG)에 상세히 등재되어 있다."
      },
      {
        "g": "ἄγοντι.",
        "pos": "분사",
        "lemma": "ἄγω",
        "principalParts": "ἄγω – ἄξω – ἤγαγον – ἦχα – ἦγμαι – ἤχθην",
        "parse": "pres.act.part.sg.dat.m. (modifying the implicit agents bringing the corpse)",
        "gloss_kr": "데려오는, 운구하는",
        "gloss_en": "bringing, leading",
        "syntax": "여격 분사구로서 [PRED 'ἄγω<SUBJ,OBJ>', VOICE act, CASE dat, NUM sg, GENDER m] 구조를 가지며, 시신을 운구하는 자들의 상황을 수식한다. 통사적으로 여격 지배를 받는 부대 상황 분사이다.",
        "background": "헥토르의 시신을 마차에 실어 성문 안으로 엄숙하게 이송해 들어오는 운구 행렬의 동작을 생생하게 전달한다.",
        "etymology": "PIE 어근 *h₂eǵ-('몰다, 이끌다')에서 유래하며, 후두음 *h₂-의 증거를 보여준다. 산스크리트어 ajati, 라틴어 agō, 영어 act와 동계어이다(Chantraine DELG)."
      }
    ]
  },
  {
    "ref": "Iliad 24.710",
    "trans": "가장 먼저 그의 사랑하는 아내와 존귀한 어머니가 잘 굴러가는 마차 위로 달려들어 머리를 만지며 통곡하였고, 울부짖는 무리가 그 주변에 둘러섰다.",
    "words": [
      {
        "g": "πρῶται",
        "pos": "형용사",
        "lemma": "πρῶτος, πρώτη, πρῶτον",
        "parse": "pl.nom.f.",
        "gloss_kr": "가장 먼저, 맨 먼저",
        "gloss_en": "first",
        "syntax": "주격 형용사로서 주어인 아내와 어머니의 상태 및 순서를 서술하며, [PRED 'πρῶτος', CASE nom, NUM pl, GENDER f]의 F-구조를 갖는다.",
        "background": "수많은 군중 가운데서도 헥토르에게 가장 가까운 두 여인이 가장 먼저 시신에게 달려가는 슬픔의 위계질서를 보여 준다.",
        "etymology": "προ(앞에)의 최상급 형태로 PIE 어근 *pro-에서 파생되었다. Chantraine(DELG)과 Beekes(EDG)에 등재되어 있으며, 영어 first의 계통적 동계어이다."
      },
      {
        "g": "τόν",
        "pos": "관사",
        "lemma": "ὁ, ἡ, τό",
        "parse": "sg.acc.m.",
        "gloss_kr": "그를",
        "gloss_en": "him",
        "syntax": "지시적 한정사(pronominal use)로서 후행하는 분사적 맥락 또는 전치 지시 기능을 수행하며, [PRED 'ὁ', CASE acc, NUM sg, GENDER m]의 자질을 지닌다.",
        "background": "운구되는 시신의 주인공인 헥토르를 지시하는 명확한 대명사적 구실을 한다.",
        "etymology": "PIE 지시 대명사 *to-에서 유래하였으며, 그리스어 정관사 체계의 기원이 된다(Chantraine DELG)."
      },
      {
        "g": "γ᾽",
        "pos": "소사",
        "lemma": "γε",
        "parse": "enclitic particle",
        "gloss_kr": "야말로, 참으로",
        "gloss_en": "indeed, at least",
        "syntax": "전접어 소사로서 선행하는 어구(τόν)를 강조하며, [HEAD particle, ENCLITIC +]의 자질을 지닌다. 모음 앞에서 엘리전(elision)되었다.",
        "background": "다른 이들이 아닌 바로 그 시신과 그 주변의 핵심 인물들을 부각하는 한정적 강조 수사이다.",
        "etymology": "그리스어 고유의 강조 소사로서 구어 및 시적 문체에서 초점을 부여하는 데 광범위하게 쓰인다."
      },
      {
        "g": "ἄλοχός",
        "pos": "명사",
        "lemma": "ἄλοχος, ἄλοχου, ἡ",
        "parse": "sg.nom.f.",
        "gloss_kr": "아내는",
        "gloss_en": "wife",
        "syntax": "주절의 복합 주어 중 하나로 [PRED 'ἄλοχος', CASE nom, NUM sg, GENDER f]의 F-구조를 가지며, 동사 τιλλέσθην과 수일치를 이룬다.",
        "background": "헥토르의 아내인 안드로마케를 지칭하며, 남편의 죽음 앞에 가장 큰 비탄에 빠진 당사자이다.",
        "etymology": "ἁ-(함께)와 λόχος(침상)의 합성어로 '한 침상을 쓰는 이'를 뜻한다. Chantraine(DELG)과 Beekes(EDG)에서 상세히 다루어진다."
      },
      {
        "g": "τε",
        "pos": "접속사",
        "lemma": "τε",
        "parse": "enclitic coord.conj.",
        "gloss_kr": "그리고",
        "gloss_en": "and",
        "syntax": "전접어 등위접속사로 ἄλοχός와 μήτηρ를 긴밀하게 연결하며, [HEAD conj, ENCLITIC +] 자질을 지닌다.",
        "background": "아내와 어머니라는 두 혈육의 비탄을 하나의 일체화된 비극적 행위로 묶어 준다.",
        "etymology": "PIE *-kʷe('그리고')에서 유래하며, 라틴어 -que, 산스크리트어 -ca와 동계어이다. Chantraine(DELG)에 상세히 기술되어 있다."
      },
      {
        "g": "φίλη",
        "pos": "형용사",
        "lemma": "φίλος, φίλη, φίλον",
        "parse": "sg.nom.f.",
        "gloss_kr": "사랑하는, 친밀한",
        "gloss_en": "dear, beloved",
        "syntax": "수식어 형용사로서 ἄλοχος를 수식하며 [MODIFIED-BY [PRED 'φίλος', CASE nom, NUM sg, GENDER f]]의 구조를 형성한다.",
        "background": "남편에 대한 아내의 깊은 애정과 정서적 유대를 강조하는 호메로스식 전통 수식어이다.",
        "etymology": "PIE 어근 *bʰel- 또는 *lem- 계통으로 논의되며, Chantraine(DELG)과 Beekes(EDG)에서 어원적 논점이 다루어진다."
      },
      {
        "g": "πότνια",
        "pos": "형용사",
        "lemma": "πότνια, πότνιας, ἡ",
        "parse": "sg.nom.f.",
        "gloss_kr": "존귀한, 여주인의",
        "gloss_en": "revered, mistress, queenly",
        "syntax": "수식어로서 μήτηρ를 수식하며 [MODIFIED-BY [PRED 'πότνια', CASE nom, NUM sg, GENDER f]]의 구조를 갖는다.",
        "background": "트로이아의 왕비이자 헤카베의 위엄 있는 신분과 비극적 존엄성을 드러내는 수식어이다.",
        "etymology": "PIE *pótni-h₂('여주인, 안주인')에서 유래하며, 산스크리트어 patnī('아내, 여주인')와 정확히 대응하는 동계어이다. Chantraine(DELG)과 Beekes(EDG)에 상세히 실려 있다."
      },
      {
        "g": "μήτηρ",
        "pos": "명사",
        "lemma": "μήτηρ, μητρός, ἡ",
        "parse": "sg.nom.f.",
        "gloss_kr": "어머니는",
        "gloss_en": "mother",
        "syntax": "주어 명사구로서 [PRED 'μήτηρ', CASE nom, NUM sg, GENDER f]의 F-구조를 가지며, 앞선 ἄλοχος와 함께 복합 주어를 이룬다.",
        "background": "헤카베를 가리키며, 아들의 주검을 마주한 어머니의 비통함을 상징한다.",
        "etymology": "PIE *méh₂tēr('어머니')에서 유래하며, 후두음 *h₂-의 증거를 보여준다. 산스크리트어 mātā, 라틴어 māter, 영어 mother와 동계어이다(Chantraine DELG)."
      },
      {
        "g": "τιλλέσθην",
        "pos": "동사",
        "lemma": "τίλλω",
        "principalParts": "τίλλω – τιλῶ – ἔτιλα – (미상) – (미상) – ἐτίλθην",
        "parse": "3rd.du.impf.ind.mid. (Homeric dual ending -σθην)",
        "gloss_kr": "두 사람이 머리털을 쥐어뜯었다",
        "gloss_en": "tore their hair (dual)",
        "syntax": "쌍수(dual) 정동사 형태로서 두 주어(아내와 어머니)와 수일치하며, LFG 상에서 [PRED 'τίλλω<SUBJ>', TENSE past, ASPECT impf, VOICE mid, SUBJ [NUM du]]로 분석된다. 장례 비탄의 신체적 표현이다.",
        "background": "고대 그리스 장례 문화에서 슬픔을 극적으로 표현하기 위해 머리카락을 쥐어뜯던 전통적 애도 행위를 묘사한다.",
        "etymology": "PIE 어근 *stel- 또는 *til-('뽑다, 찢다')에서 유래한 것으로 보이며, Chantraine(DELG)과 Beekes(EDG)에서 어원적 파생이 다루어진다."
      },
      {
        "g": "ἐπ᾽",
        "pos": "전치사",
        "lemma": "ἐπί",
        "parse": "prep.+acc.",
        "gloss_kr": "~ 위로, ~를 향하여",
        "gloss_en": "onto, upon",
        "syntax": "대격을 지배하는 전치사로서 방향성과 도달점을 나타내며, [HEAD prep, GOVERNS [CASE acc]] 자질을 지닌다. 후행 모음 앞에서 엘리전되었다.",
        "background": "마차 위로 몸을 던지는 급박하고 격렬한 동작의 방향을 설정한다.",
        "etymology": "PIE *epi('~ 위에, ~에')에서 유래하며, 산스크리트어 api와 동계어이다(Beekes EDG)."
      },
      {
        "g": "ἄμαξαν",
        "pos": "명사",
        "lemma": "ἄμαξα, ἁμάξης, ἡ",
        "parse": "sg.acc.f.",
        "gloss_kr": "마차를",
        "gloss_en": "wagon, chariot",
        "syntax": "전치사 ἐπί의 지배를 받는 목적어로서 [PRED 'ἄμαξα', CASE acc, NUM sg, GENDER f]의 F-구조를 이룬다.",
        "background": "헥토르의 시신을 성 안으로 운구해 온 바로 그 수레바퀴 달린 마차를 가리킨다.",
        "etymology": "합성어 기원에 대해 여러 설이 있으나, 선그리스어 기층 어휘 가능성도 제기된다(Beekes EDG). 그리스어 내에서 수레를 뜻하는 전통 명사이다."
      },
      {
        "g": "ἐΰτροχον",
        "pos": "형용사",
        "lemma": "ἐΰτροχος, ἐΰτροχον",
        "parse": "sg.acc.f.",
        "gloss_kr": "바퀴가 잘 굴러가는, 잘 짜여진",
        "gloss_en": "well-wheeled",
        "syntax": "수식어 형용사로서 ἄμαξαν를 수식하며 [MODIFIED-BY [PRED 'ἐΰτροχος', CASE acc, NUM sg, GENDER f]]의 구조를 갖는다.",
        "background": "마차의 물리적 완성도와 운구 과정을 매끄럽게 떠받치는 호메로스식 전통 고정 수식구이다.",
        "etymology": "εὖ(잘)와 τροχός(바퀴 < τρέχω 달리다)의 합성어이다. Chantraine(DELG)과 Beekes(EDG)에 상세히 등재되어 있다."
      },
      {
        "g": "ἀΐξασαι",
        "pos": "분사",
        "lemma": "ἀΐσσω",
        "principalParts": "ἀΐσσω – ἀΐξω – ἤιξα – (미상) – (미상) – (미상)",
        "parse": "aor.act.part.pl.nom.f.",
        "gloss_kr": "달려들어, 급히 몸을 날려",
        "gloss_en": "darting, rushing upon",
        "syntax": "주격 쌍수/복수 분사로서 주어들의 동작 양태를 수식하며 [PRED 'ἀΐσσω<SUBJ>', VOICE act, ASPECT aor, CASE nom, NUM pl, GENDER f]의 F-구조를 갖는다.",
        "background": "슬픔에 겨워 통제력을 잃고 마차 위로 솟구치듯 달려드는 두 여인의 격렬한 움직임을 시각화한다.",
        "etymology": "음성상징적 요소가 개입된 어근에서 유래한 것으로 추정되며, Chantraine(DELG)과 Beekes(EDG)에서 시적 동사로 분류된다."
      },
      {
        "g": "ἁπτόμεναι",
        "pos": "분사",
        "lemma": "ἅπτω",
        "principalParts": "ἅπτω – ψῶ – ἅψα – (미상) – ἧμμαι – ἥφθην",
        "parse": "pres.mid.part.pl.nom.f.",
        "gloss_kr": "붙잡으며, 만지며",
        "gloss_en": "touching, grasping",
        "syntax": "중간태 분사로서 [PRED 'ἅπτω<SUBJ,OBJ>', VOICE mid, ASPECT pres, CASE nom, NUM pl, GENDER f] 구조를 취하며, 속격 목적어를 지배하여 시신의 신체 부위를 붙잡는 행위를 나타낸다.",
        "background": "사랑하는 이의 육신에 직접 손을 대어 마지막 이별을 고하는 처절한 신체적 접촉을 묘사한다.",
        "etymology": "PIE 어근 *h₂sep-('붙잡다, 얽히다')에서 유래하며, 후두음 *h₂-의 증거를 보여준다(Beekes EDG)."
      },
      {
        "g": "κεφαλῆς:",
        "pos": "명사",
        "lemma": "κεφαλή, κεφαλῆς, ἡ",
        "parse": "sg.gen.f.",
        "gloss_kr": "머리를",
        "gloss_en": "of the head",
        "syntax": "분사 ἁπτόμεναι의 지배를 받는 속격 목적어로 [PRED 'κεφαλή', CASE gen, NUM sg, GENDER f]의 F-구조를 갖는다. 부분 속격(partitive genitive)의 통사적 기능을 수행한다.",
        "background": "시신의 머리 부분을 붙잡고 통곡하는 장례식의 핵심 신체적 제의(The ritual gesture of lament)를 보여 준다.",
        "etymology": "PIE 어근 *gʰebh-('머리')에서 유래하며, 라틴어 caput, 영어 chief와 동계어이다. Chantraine(DELG)과 Beekes(EDG)에 상세히 등재되어 있다."
      },
      {
        "g": "κλαίων",
        "pos": "분사",
        "lemma": "κλαίω",
        "principalParts": "κλαίω – κλαύσομαι – ἔκλαυσα – (미상) – κκέκλαυμαι – ἐκλαύσθην",
        "parse": "pres.act.part.sg.nom.m.",
        "gloss_kr": "울면서",
        "gloss_en": "weeping, lamenting",
        "syntax": "주격 남성 단수 분사로서 주절의 군중(ὅμιλος)을 수식하며 [PRED 'κλαίω<SUBJ>', VOICE act, ASPECT pres, CASE nom, NUM sg, GENDER m]의 F-구조를 이룬다.",
        "background": "개인적인 유족을 넘어 군중 전체가 울음바다를 이루는 집단적 애도의 분위기를 고조시킨다.",
        "etymology": "PIE 어근 *kleu̯- 또는 음성상징적 비탄 어근에서 유래하며, Chantraine(DELG)과 Beekes(EDG)에서 어원적 경로가 논의된다."
      },
      {
        "g": "δ᾽",
        "pos": "접속사",
        "lemma": "δέ",
        "parse": "coord.conj.",
        "gloss_kr": "그리고",
        "gloss_en": "and",
        "syntax": "후치 등위접속사로 앞선 주체들과 군중의 반응을 연결하며 [HEAD conj] 자질을 지닌다.",
        "background": "유족들의 직접적인 행동과 이를 둘러싼 군중의 반응을 매끄럽게 연결하는 서사적 접속 장치이다.",
        "etymology": "그리스어 전반에 걸쳐 사용되는 표준적 등위접속사이다."
      },
      {
        "g": "ἀμφίσταθ᾽",
        "pos": "동사",
        "lemma": "ἀμφίστημι (호메로스식 단축형 ἀμφίστατο)",
        "principalParts": "ἀμφίστημι – ἀπιστήσω – ἀπέστησα – ἀπέστηκα – ἀπέσταμαι – ἀπεστάθην",
        "parse": "3rd.sg.impf.ind.act. (syncopated form)",
        "gloss_kr": "둘러서 있었다",
        "gloss_en": "stood around",
        "syntax": "지속적 과거를 나타내는 미완료시제 동사로 [PRED 'ἀμφίστημι<SUBJ,OBJ>', TENSE past, ASPECT impf, VOICE act, SUBJ [PRED 'ὅμιλος', NUM sg]] 구조를 이룬다. 운율에 맞춰 모음이 축약·탈락한 호메로스식 형태이다.",
        "background": "운구된 마차와 슬퍼하는 유족들 주위에 군중이 빽빽하게 에워싸고 비탄을 공유하는 원환적 공간 배치를 보여 준다.",
        "etymology": "ἀμφί(주위에)와 ἵστημι(세우다, 서다)의 합성어이며, PIE 어근 *steh₂-에서 유래한다. Chantraine(DELG)과 Beekes(EDG)에 상세히 등재되어 있다."
      },
      {
        "g": "ὅμιλος.",
        "pos": "명사",
        "lemma": "ὅμιλος, ὁμίλου, ὁ",
        "parse": "sg.nom.m.",
        "gloss_kr": "무리가, 군중이",
        "gloss_en": "throng, crowd",
        "syntax": "단수 집합 명사로서 주어 기능을 수행하며 [PRED 'ὅμιλος', CASE nom, NUM sg, GENDER m]의 F-구조를 갖는다. 동사 ἀμφίσταθ᾽와 수일치를 이룬다.",
        "background": "트로이아의 성문 앞에 모인 거대한 군중의 물결을 가리키며, 비극의 공동체적 규모를 증폭시킨다.",
        "etymology": "ὁμοῦ(함께)와 ἴλη(무리)의 합성어로서 PIE 어근에서 파생되었다. Chantraine(DELG)과 Beekes(EDG)에서 상세히 다루어진다."
      }
    ]
  },
  {
    "ref": "Iliad 24.711",
    "trans": "머리를 잡아당기며 잘 달리는 수레 위로 뛰어올랐고, 무리는 울며 그 주변에 늘어섰다.",
    "words": [
      {
        "g": "τιλλέσθην",
        "pos": "동사",
        "lemma": "τίλλω",
        "principalParts": "τίλλω – τίλῶ – ἔτιλα – (미상) – τέτιλμαι – ἐτίλθην",
        "parse": "3rd.du.impf.ind.mid.",
        "gloss_kr": "쥐어뜯었다, 잡아당겼다",
        "gloss_en": "they two tore",
        "syntax": "τιλλέσθην은 3인칭 쌍수(dual) 미완료과거 중간태 형태로, LFG에서 [PRED 'τίλλω<SUBJ,OBJ>', TENSE past, ASPECT impf, SUBJ [PRED 'pro', PERS 3, NUM du], OBJ [PRED 'θρίξ', CASE acc]]로 분석된다. 통사적으로 중간태는 주어가 행위의 영향력 아래 있음을 나타내며(반사적 의미), 생성문법적으로 [TP pro [T' τιλλέσθην [vP t_pro [VP t_v [DP κεφαλὴν]]]]]의 구조를 지닌다.",
        "background": "장례식에서 슬픔을 극적으로 표현하기 위해 머리카락이나 수염을 쥐어뜯는 호메로스 시대의 전형적인 애도 관습을 보여 준다. 쌍수(dual) 동사를 사용하여 헥토르를 애도하는 주된 인물들의 밀접한 동작을 생생하게 부각한다.",
        "etymology": "PIE 어근 *stel- 또는 *steil-('자르다, 쪼개다')에서 유래한 것으로 추정되며, Beekes(EDG)는 그리스어 내부의 파생 동사로 설명한다. 동계어로 라틴어 stīlia('말뚝') 및 게르만어군의 관련 어휘들이 거론된다. 음운적으로 e급 어간에서 파생되었으며, Chantraine(DELG)은 이 단어가 고대 시가에서 슬픔을 표현하는 전문 어휘로 정착되었다고 지적한다. 현대 그리스어에서는 직접 쓰이지 않고 고전 문헌학 연구에서나 확인되는 어휘이다."
      },
      {
        "g": "ἐπ᾽",
        "pos": "전치사",
        "lemma": "ἐπί",
        "principalParts": "(미상)",
        "parse": "prep.+acc.",
        "gloss_kr": "~위로",
        "gloss_en": "onto",
        "syntax": "ἐπί 전치사는 대격 목적어 ἄμαξαν을 지배하여 방향성과 도달점을 나타낸다. LFG 통사구조에서 [P_OBJ [PRED 'ἄμαξαν', CASE acc]]와 결합하여 부사구(ADJUNCT)를 구성하며, 공간 이동의 종착점을 설정한다.",
        "background": "시신을 운반하는 수레를 향해 사람들이 올라타는 급박하고 슬픈 장면의 공간적 방향을 지시하는 전치사구다. 호메로스 운율 속에서 전치사 피복(elision)을 통해 음절 안배가 이루어지고 있다.",
        "etymology": "PIE 재구형 *epi('~위에, ~를 향하여')에서 기원하며, 명확한 후두음 자질은 재구되지 않는다. 동계어로 산스크리트어 ápi('또한, ~에'), 아베스타어 aipi가 있다. 그림 법칙 및 그리스어 내의 모음 변이를 거쳐 전치사 및 전접사로 분화되었으며, 영어의 up이나 현대 그리스어의 ἐπί/επί 접두사로 그 흔적이 이어진다."
      },
      {
        "g": "ἄμαξαν",
        "pos": "명사",
        "lemma": "ἄμαξα, ἀμάξης, ἡ",
        "principalParts": "(미상)",
        "parse": "sg.acc.f.",
        "gloss_kr": "마차, 수레",
        "gloss_en": "wagon, cart",
        "syntax": "LFG 관점에서 ἄμαξαν은 전치사 ἐπί의 목적어로 [PRED 'ἄμαξα', CASE acc, θ-ROLE GOAL] 자질을 갖는다. c-구조상 PP [P' ἐπ' [DP ἄμαξαν]] 내에 위치하며, 이동 동사 ἀΐξασαι의 의미역을 완성하는 처소적 목표물이다.",
        "background": "트로이아로 돌아온 헥토르의 시신을 실은 수레를 가리키며, 장례 행렬의 중심이자 비극적 운반 수단을 상징한다. 호메로스 서사에서 물건이나 시신을 운송하는 핵심 교통수단으로 빈번하게 등장한다.",
        "etymology": "Beekes(EDG)는 이 단어가 선그리스어(Pre-Greek) 기층 어휘일 가능성이 높다고 보며, 인도유럽어족 내부의 확실한 어원을 찾기 어렵다고 지적한다. Chantraine(DELG) 역시 외래어 혹은 기층 언어 유입설을 지지한다. 그리스어 내부에서 복합어 형태를 띠나 민간어원설에 가깝다. 현대 그리스어에는 직접적인 명사 형태로 남아 있지 않다."
      },
      {
        "g": "ἐΰτροχον",
        "pos": "형용사",
        "lemma": "ἐύτροχος, ἐύτροχον",
        "principalParts": "(미상)",
        "parse": "sg.acc.f.",
        "gloss_kr": "바퀴가 잘 달린, 매끄러운",
        "gloss_en": "well-wheeled",
        "syntax": "ἐΰτροχον은 형용사로서 명사 ἄμαξαν을 수식하는 관형어(ATTRIB)로 기능하며, LFG 구조상 [ADJUNCT [PRED 'ἐύτροχος', SPEC [PRED 'ἄμαξα']]]로 처리된다. 수레의 물리적 완성도와 정교함을 수식하여 서사의 시각적 효과를 높인다.",
        "background": "호메로스 서사시에서 수레나 전차의 우수성을 묘사하는 전통적인 고정 수식어(formula) 중 하나이다. 헥토르의 시신을 예우하기 위해 준비된 마차의 정교함을 강조한다.",
        "etymology": "부사적 접두사 εὖ('잘')와 어근 *trekh-('달리다')에서 파생된 τροχός('바퀴')의 합성어로, PIE 어근 *tregʰ-('달리다')에 소급한다. Chantraine(DELG)과 LSJ에 따르면 그리스어 내부의 생산적인 합성어 형성 과정을 보여 준다. 동계어로 트로코이드 곡선 관련 영어 단어나 현대 그리스어 τροχός('바퀴')가 있다."
      },
      {
        "g": "ἀΐξασαι",
        "pos": "분사",
        "lemma": "ἀΐσσω",
        "principalParts": "ἀΐσσω – ἀΐξω – ἤιξα – (미상) – (미상) – ἠΐχθην",
        "parse": "aor.act.part.pl.nom.f.",
        "gloss_kr": "달려들며, 덤벼들며",
        "gloss_en": "having darted upon",
        "syntax": "ἀΐξασαι는 부정과거 능동태 분사로 주어와 수 일치를 이루며 주절을 수식하는 부사적 분사구(ADJUNCT)다. LFG에서 [PRED 'ἀΐσσω<SUBJ>', TENSE past, ASPECT aor, SUBJ [PRED 'pro']]로 나타내며, 생성문법적으로 [vP [VP ἀΐξασαι]] 형태로 전진하는 동작의 급격성을 포착한다.",
        "background": "슬픔에 못 이겨 시신이 실린 수레 위로 급히 뛰어오르는 여인들의 격렬한 행동을 묘사한다. 정지된 슬픔이 아니라 신체적이고 즉각적인 충동을 나타내는 동사다.",
        "etymology": "PIE 재구형이 불확실하며, Beekes(EDG)는 오직 그리스어 내부의 의성어적 혹은 기층적 요소가 결합된 형태일 수 있음을 시사한다. Chantraine(DELG)은 시적 용례에서 갑작스러운 돌진을 뜻하는 동사로 분석한다. 인도유럽어 동계어는 명확히 확립되지 않았으며, 현대 그리스어에서는 사멸한 시적 어휘이다."
      },
      {
        "g": "ἁπτόμεναι",
        "pos": "분사",
        "lemma": "ἅπτω",
        "principalParts": "ἅπτω – ἅψω – ἧψα – (미상) – ἧμμαι – ἥφθην",
        "parse": "pres.mid.part.pl.nom.f.",
        "gloss_kr": "붙잡으며, 만지며",
        "gloss_en": "touching, grasping",
        "syntax": "ἁπτόμεναι는 현재 중간태 분사로서 소유격(κεφαλῆς)을 지배하며, LFG에서 [PRED 'ἅπτω<SUBJ,OBJ>', TENSE pres, ASPECT impf, SUBJ [PRED 'pro'], OBJ [PRED 'κεφαλή', CASE gen]]로 분석된다. 중간태는 신체 접촉에 수반되는 주체의 직접적인 관여를 나타낸다.",
        "background": "사랑하는 이의 시신, 특히 머리를 붙잡고 통곡하는 장례 의식의 핵심 동작을 생생하게 전달한다. 호메로스 비극적 장면에서 육체적 접촉을 통한 애통함을 극대화하는 수사적 장치다.",
        "etymology": "PIE 어근 *h₂ep-('붙잡다, 잇다')에서 유래하며, 후두음 *h₂-의 존재가 통시적 음운론에서 확인된다. Chantraine(DELG)과 Beekes(EDG)는 이 어근이 라틴어 apīscor('도달하다, 잡다')와 동계임을 밝힌다. 그리스어 내에서 중간태로 의미가 분화되어 '만지다, 붙잡다'의 뜻으로 고착되었으며, 현대 그리스어 ἁπτόμαι/απτόμαι('관여하다, 건드리다')로 이어진다."
      },
      {
        "g": "κεφαλῆς:",
        "pos": "명사",
        "lemma": "κεφαλή, κεφαλῆς, ἡ",
        "principalParts": "(미상)",
        "parse": "sg.gen.f.",
        "gloss_kr": "머리를",
        "gloss_en": "of the head",
        "syntax": "κεφαλῆς는 동사 분사 ἁπτόμεναι의 지배를 받는 속격 목적어로, LFG에서 [PRED 'ἅπτω', OBJ [PRED 'κεφαλή', CASE gen, θ-ROLE PATIENT]]로 표시된다. 접촉 동사가 부분이나 신체 부위를 취할 때 속격을 지배하는 통사 규칙을 따른다.",
        "background": "죽은 헥토르의 머리를 어루만지며 비탄에 빠진 애도자들의 신체적 접촉을 보여 준다. 머리는 영웅의 신체 중에서도 생명과 정체성의 핵심을 상징하는 부위다.",
        "etymology": "PIE 재구형 *gʰebho- 또는 *gʰut-계열과의 연관성이 논의되나, Beekes(EDG)는 선그리스어 기층의 영향 가능성을 배제하지 않는다. Chantraine(DELG)은 인도유럽어 동계어로 고대 고트어 houbiþ('머리'), 영어 head, 독일어 Haupt를 든다. 음운변화 법칙으로 그리스어 내 무성음화와 호흡기식 변화를 거쳤으며, 현대 그리스어 κεφάλι('머리')로 직접 계승된다."
      },
      {
        "g": "κλαίων",
        "pos": "분사",
        "lemma": "κλαίω",
        "principalParts": "κλαίω – κλαύσομαι – ἔκλαυσα – (미상) – κκέκλαυμαι – ἐκλαύσθην",
        "parse": "pres.act.part.sg.nom.m.",
        "gloss_kr": "울면서",
        "gloss_en": "weeping",
        "syntax": "κλαίων은 현재 능동태 분사로서 주절의 주어와 일치하며, LFG에서 [PRED 'κλαίω<SUBJ>', TENSE pres, ASPECT impf, SUBJ [PRED 'ὅμιλος', CASE nom]]로 분석된다. 동시동작을 나타내는 부사적 분사구(ADJUNCT)로 기능한다.",
        "background": "슬픔에 잠겨 울부짖는 군중의 정서적 상태를 시각화하며, 비극적 분위기를 전면화한다. 일리아스 전체를 관통하는 애도와 눈물의 주제를 압축적으로 보여 준다.",
        "etymology": "PIE 어근 *kleu̯h₁-('소리치다, 울부짖다')에서 유래하며, 후두음 *h₁의 흔적이 관여한다. Chantraine(DELG)과 Beekes(EDG)는 이 어근이 소리 내어 우는 행위와 직결된다고 본다. 동계어로 라틴어 clāmō('소리치다')가 있으며, 영어 claim도 멀리 이어진다. 현대 그리스어 κλαίω('울다')로 명맥이 이어진다."
      },
      {
        "g": "δ᾽",
        "pos": "접속사",
        "lemma": "δέ",
        "principalParts": "(미상)",
        "parse": "coord.conj.",
        "gloss_kr": "그리고",
        "gloss_en": "and",
        "syntax": "δὲ는 대등 접속사로 앞의 서사와 뒤의 절(ἀμφίσταθ᾽ ὅμιλος)을 연결하는 후치사(postpositive) 기능을 수행한다. LFG 구조상 두 절 사이의 협조 관계(COORD)를 형성한다.",
        "background": "앞선 동작과 뒤이은 군중의 반응을 매끄럽게 이어 주는 구문적 연결고리다. 구송 시가에서 행과 행 사이의 호흡을 조절하는 필수적 기능을 한다.",
        "etymology": "PIE 기원에서 독자적인 어원을 확정하기 어렵고 그리스어 고유의 전형적인 대등 접속사로 발달했다. Beekes(EDG)와 Chantraine(DELG)은 이 단어가 인도유럽어 차원의 확실한 동계어를 특정하기 어렵다고 본다."
      },
      {
        "g": "ἀμφίσταθ᾽",
        "pos": "동사",
        "lemma": "ἀμφίστημι",
        "principalParts": "ἀφίστημι – ἀποστήσω – ἀπέστησα – ἀνέστηκα – (미상) – ἀπεστάθην",
        "parse": "3rd.sg.aor.ind.act.",
        "gloss_kr": "둘러섰다",
        "gloss_en": "stood around",
        "syntax": "ἀμφίσταθ᾽는 부정과거 능동태 형태로, 음운 탈락(elision)이 일어났다. LFG에서 [PRED 'ἀμφίστημι<SUBJ,OBJ>', TENSE past, ASPECT aor, SUBJ [PRED 'ὅμιλος', CASE nom]]로 분석되며, 주어가 시신 주변을 에워싸는 공간적 배치를 나타낸다.",
        "background": "장례 마차 주변으로 트로이아 백성들이 슬픔에 잠겨 둥글게 모여드는 비장한 배치를 시각적으로 묘사한다. 집단적인 애도의 공간을 형성하는 전통적 표현이다.",
        "etymology": "접두사 ἀμφί('주위에')와 어근 *sta-('서다', PIE *steh₂-)의 합성어다. Chantraine(DELG)과 Beekes(EDG)는 후두음 *h₂를 포함하는 이 어근이 라틴어 stāre('서다'), 영어 stand와 직결됨을 설명한다."
      },
      {
        "g": "ὅμιλος.",
        "pos": "명사",
        "lemma": "ὅμιλος, ὁμίλου, ὁ",
        "principalParts": "(미상)",
        "parse": "sg.nom.m.",
        "gloss_kr": "군중, 무리",
        "gloss_en": "crowd, throng",
        "syntax": "LFG 관점에서 ὅμιλος는 동사 ἀμφίστατο의 주어(SUBJ)로 [PRED 'ὅμιλος', CASE nom, θ-ROLE AGENT] 기능을 한다. c-구조상 IP 안의 [DP ὅμιλος]가 주어 자리를 점하며 집단적 주체의 행동을 주도한다.",
        "background": "헥토르의 시신을 맞이하기 위해 성문 밖으로 몰려나온 트로이아의 거대한 군중을 가리킨다. 영웅 개인의 죽음이 도시 전체의 공동체적 슬픔으로 확장됨을 보여 주는 핵심 단어다.",
        "etymology": "명사 ὁμός('같은')와 어근 *wel-('모이다') 또는 ἴλη('무리')와의 합성으로 추정되며, PIE 재구형 *sem- + *wel-계열과 연관된다. Beekes(EDG)와 Chantraine(DELG)은 군중의 밀집을 뜻하는 명사로 설명한다."
      }
    ]
  },
  {
    "ref": "Iliad 24.712",
    "trans": "그리고 이제 해가 질 때까지 온 하루 동안 성문 앞에서 눈물을 흘리며 헥토르를 슬퍼했을 것이다,",
    "words": [
      {
        "g": "καί",
        "pos": "소사",
        "lemma": "καί",
        "principalParts": "(미상)",
        "parse": "coord.conj.",
        "gloss_kr": "그리고, 심지어",
        "gloss_en": "and, even",
        "syntax": "καί는 여기서 반사실적 가정법 문맥을 도입하는 강화 소사 또는 접속사로 기능한다. LFG에서 상위 담화 구조를 연결하는 조정 자질을 갖는다.",
        "background": "시인의 서사적 개입과 가정적 상황을 도입하여, 애도의 깊이와 시간이 얼마나 광대했는지를 극적으로 강조하는 수사적 장치다.",
        "etymology": "인도유럽어 내 명확한 단일 PIE 어원이 확정되지 않았으며, 그리스어 고유의 발달로 본다. Beekes(EDG)와 Chantraine(DELG)은 이 단어의 기층 유입 가능성을 논의한다."
      },
      {
        "g": "νύ",
        "pos": "소사",
        "lemma": "νῦν",
        "principalParts": "(미상)",
        "parse": "adv.",
        "gloss_kr": "이제, 과연",
        "gloss_en": "now, indeed",
        "syntax": "νύ는 전접사로서 앞의 단어에 붙어 서사의 현장감과 긴박함을 더한다. LFG 정보구조상 초점이나 양식 자질을 한층 강화하는 수식어로 작용한다.",
        "background": "호메로스 시가에서 감정적 고조나 결정적인 순간을 수식하는 담화 표지로 자주 쓰이며, 여기서는 비극적 가정의 절정을 이끈다.",
        "etymology": "PIE 재구형 *nu('지금, 이제')에서 유래하며, 산스크리트어 nú, 라틴어 nunc, 영어 now와 직접 동계이다. Chantraine(DELG)과 Beekes(EDG)는 이 단어가 시간 부사에서 양식적 소사로 기능이 확장되었음을 밝힌다."
      },
      {
        "g": "κε",
        "pos": "소사",
        "lemma": "κε",
        "principalParts": "(미상)",
        "parse": "particle",
        "gloss_kr": "~할 텐데 (가정법 조사)",
        "gloss_en": "modal particle (would)",
        "syntax": "κε는 잠재법·가정법을 구성하는 전접사 소사다. 과거시제 직설법과 결합하여 반사실적 조건문의 주절을 형성하며, LFG에서 [MOOD conditional] 자질을 부여한다.",
        "background": "실제로 일어나지 않았지만 하마터면 온종일 통곡했을 것이라는 시인의 가정법적 서술을 완성하는 필수 문법 요소다.",
        "etymology": "PIE 재구형 *kʷe와 어원이 연결된다는 설이 있으나, 그리스어 내부에서 가정적 양식을 나타내는 문법 형태소로 독자적 발달을 겪었다."
      },
      {
        "g": "δὴ",
        "pos": "소사",
        "lemma": "δή",
        "principalParts": "(미상)",
        "parse": "particle",
        "gloss_kr": "참으로, 과연",
        "gloss_en": "indeed, truly",
        "syntax": "δὴ는 강조 소사로 앞말의 의미를 확정하거나 시적 긴장감을 높인다. LFG 정보구조에서 초점을 표시하는 자질로 분석된다.",
        "background": "슬픔의 강도가 극에 달했음을 강조하는 수사적 표현으로, 청중의 이목을 집중시키는 역할을 한다.",
        "etymology": "시적 용례 속에서 강화사로 고착되었다. Chantraine(DELG)과 Beekes(EDG)는 이 소사의 용법이 고대 그리스어 시가 문헌에서 매우 오래전부터 정형화되어 있음을 지적한다."
      },
      {
        "g": "πρόπαν",
        "pos": "형용사",
        "lemma": "πρόπας, πρόπασα, πρόπαν",
        "principalParts": "(미상)",
        "parse": "sg.acc.n.",
        "gloss_kr": "온통, 가득한, 전(全)",
        "gloss_en": "all through, whole",
        "syntax": "πρόπαν은 형용사 중성 대격 형태로 시간 부사구 역할을 하며, LFG에서 [PRED 'πρόπας', CASE acc, SPEC [PRED 'ἦμαρ']]로 분석된다.",
        "background": "슬픔에 잠긴 시간이 짧지 않고 '온 하루' 전체였음을 강조하여 비극의 무게를 극대화한다.",
        "etymology": "접두사 πρό와 πᾶς의 합성어로, PIE 재구형 *pro- + *peh₂-계열에 소급한다."
      },
      {
        "g": "ἦμαρ",
        "pos": "명사",
        "lemma": "ἦμαρ, ἤματος, τό",
        "principalParts": "(미상)",
        "parse": "sg.acc.n.",
        "gloss_kr": "낮, 하루",
        "gloss_en": "day",
        "syntax": "LFG 관점에서 ἦμαρ는 시간의 지속 기간을 나타내는 대격 목적어로 [PRED 'ἦμαρ', CASE acc] 자질을 가진다.",
        "background": "해뜰 때부터 질 때까지 이어지는 물리적 하루의 단위를 나타내며, 영웅의 죽음에 바쳐진 시간적 제물의 성격을 띤다.",
        "etymology": "PIE 재구형 *eh₁mer-('날, 낮')에서 유래하며, 산스크리트어 áhar, 독일어 Tag와 동계이다."
      },
      {
        "g": "ἐς",
        "pos": "전치사",
        "lemma": "εἰς",
        "principalParts": "(미상)",
        "parse": "prep.+acc.",
        "gloss_kr": "~까지",
        "gloss_en": "until, up to",
        "syntax": "ἐς는 대격 명사 ἠέλιον을 지배하여 시간적 한계를 나타낸다. LFG 통사구조에서 [P_OBJ [PRED 'ἠέλιον', CASE acc]]와 결합하여 전치사구를 이룬다.",
        "background": "해가 지는 시점까지 슬픔이 멈추지 않았음을 나타내는 시간적 한계 지점 설정이다.",
        "etymology": "PIE 선행 형태 *en-s('~안으로')에서 유래하며, 라틴어 in과 통사적·어원적으로 연결된다."
      },
      {
        "g": "ἠέλιον",
        "pos": "명사",
        "lemma": "ἠέλιος, ἠελίου, ὁ",
        "principalParts": "(미상)",
        "parse": "sg.acc.m.",
        "gloss_kr": "태양, 해",
        "gloss_en": "sun",
        "syntax": "LFG 관점에서 ἠέλιον은 전치사 ἐς의 목적어로 [PRED 'ἠέλιος', CASE acc, θ-ROLE GOAL] 자질을 갖는다.",
        "background": "호메로스 시가에서 일상의 시간 경과를 측정하는 자연의 기준점이며, 태양이 지는 순간까지 슬픔이 이어졌음을 시각적으로 환기한다.",
        "etymology": "PIE 재구형 *sāu-el-에서 유래하며, 산스크리트어 súrya-, 라틴어 sōl, 영어 sun과 동계이다."
      },
      {
        "g": "καταδύντα",
        "pos": "분사",
        "lemma": "καταδύω",
        "principalParts": "καταδύω – καταδύσω – κατέδυσα – καταδδέδυκα – καταδέδυμαι – κατεδύθην",
        "parse": "aor.act.part.sg.acc.m.",
        "gloss_kr": "지는, 저물어가는",
        "gloss_en": "setting (down)",
        "syntax": "καταδύντα는 부정과거 능동태 분사로 명사 ἠέλιον을 수식한다. LFG에서 [PRED 'καταδύω<SUBJ>', TENSE past, ASPECT aor, SUBJ [PRED 'ἠέλιος']]로 분석된다.",
        "background": "자연의 순리인 일몰과 인간의 비극적 통곡이 대조를 이루며 하루가 저무는 풍경을 극적으로 연출한다.",
        "etymology": "접두사 κατά과 어근 *dū-의 합성어다."
      }
    ]
  },
  {
    "ref": "Iliad 24.714",
    "trans": "눈물을 흘리며 성문 앞에서 헥토르를 슬퍼했을 것이다,",
    "words": [
      {
        "g": "Ἕκτορα",
        "pos": "명사(고유)",
        "lemma": "Ἕκτωρ, Ἕκτορος, ὁ",
        "principalParts": "(미상)",
        "parse": "sg.acc.m.",
        "gloss_kr": "헥토르를",
        "gloss_en": "Hektor",
        "syntax": "LFG 관점에서 Ἕκτορα는 동사 ὀδύροντο의 목적어로 [PRED 'Ἕκτωρ', CASE acc, θ-ROLE PATIENT] 자질을 갖는다.",
        "background": "트로이아의 위대한 수호자이자 프리아모스의 아들이며, 아킬레우스에게 패배하여 죽임당한 비극의 주인공 헥토르를 가리킨다.",
        "etymology": "어근 *segh-('붙잡다, 지탱하다')에서 파생된 이름으로, '도시를 지탱하는 자'라는 뜻을 담고 있다."
      },
      {
        "g": "δάκρυ",
        "pos": "명사",
        "lemma": "δάκρυ, δάκρυος, τό",
        "principalParts": "(미상)",
        "parse": "sg.acc.n.",
        "gloss_kr": "눈물을",
        "gloss_en": "tear",
        "syntax": "δάκρυ는 내동사적 목적어로 기능하며, LFG에서 [PRED 'δάκρυ', CASE acc, θ-ROLE THEME] 자질을 가진다.",
        "background": "슬픔의 물리적 실체인 눈물을 흘리는 행위를 통해 트로이아 백성들의 비통함을 시각적으로 각인시킨다.",
        "etymology": "PIE 재구형 *dakru-에서 유래하며, 영어 tear, 라틴어 lacrima와 명확한 동계이다."
      },
      {
        "g": "χέοντες",
        "pos": "분사",
        "lemma": "χέω",
        "principalParts": "χέω – χέσω – ἔχενα – κέχυκα – κέχυμαι – ἐχύθην",
        "parse": "pres.act.part.pl.nom.m.",
        "gloss_kr": "흘리며",
        "gloss_en": "shedding, pouring",
        "syntax": "χέοντες는 현재 능동태 분사로 주어와 일치하며, LFG에서 [PRED 'χέω<SUBJ,OBJ>', TENSE pres, ASPECT impf, SUBJ [PRED 'pro'], OBJ [PRED 'δάκρυ', CASE acc]]로 분석된다.",
        "background": "눈물을 물처럼 쏟아내는 표현으로, 호메로스 시가에서 감정의 범람을 시각적 은유로 전달하는 정형적 어법이다.",
        "etymology": "PIE 어근 *ǵʰeu-에서 유래하며, 산스크리트어 juhóti와 동계이다."
      },
      {
        "g": "ὀδύροντο",
        "pos": "동사",
        "lemma": "ὀδύρομαι",
        "principalParts": "ὀδύρομαι – ὀδύσομαι – ὠδυράμην – (미상) – (미상) – (미상)",
        "parse": "3rd.pl.impf.ind.mid.",
        "gloss_kr": "슬퍼하고 있었다",
        "gloss_en": "they were lamenting",
        "syntax": "ὀδύροντο는 3인칭 복수 미완료과거 중간태 형태로, LFG에서 [PRED 'ὀδύρομαι<SUBJ,OBJ>', TENSE past, ASPECT impf, SUBJ [PRED 'ὅμιλος', CASE nom], OBJ [PRED 'Ἕκτωρ', CASE acc]]로 분석된다.",
        "background": "헥토르를 잃은 슬픔에 겨워 군중이 오랜 시간 동안 통곡을 그치지 않았던 상황을 생생하게 회상·가정하는 서사적 진술이다.",
        "etymology": "Beekes(EDG)는 확실한 인도유럽어 동계어를 찾기 어렵고 선그리스어 기층의 영향 가능성을 언급한다."
      },
      {
        "g": "πρὸ",
        "pos": "전치사",
        "lemma": "πρό",
        "principalParts": "(미상)",
        "parse": "prep.+gen.",
        "gloss_kr": "~앞에",
        "gloss_en": "before, in front of",
        "syntax": "πρὸ 전치사는 속격 명사 πυλάων을 지배하여 공간적 위치를 나타낸다.",
        "background": "도시의 안전한 성벽 안이 아니라 성문 '밖' 혹은 성문 '앞'의 공간에서 장례 행렬이 멈춰 서 있음을 지시한다.",
        "etymology": "PIE 재구형 *pro에서 유래하며, 산스크리트어 prá, 라틴어 prō, 영어 fore와 동계이다."
      },
      {
        "g": "πυλάων,",
        "pos": "명사",
        "lemma": "πύλη, πυλῆς, ἡ",
        "principalParts": "(미상)",
        "parse": "pl.gen.f.",
        "gloss_kr": "성문의",
        "gloss_en": "of the gates",
        "syntax": "LFG 관점에서 πυλάων은 전치사 πρό의 지배를 받는 속격 목적어로 [PRED 'πύλαι', CASE gen, θ-ROLE LOCATIVE] 자질을 갖는다.",
        "background": "트로이아 성곽의 거대한 성문을 뜻하며, 도시 내부와 외부를 가르는 경계이자 영웅의 시신이 성 안으로 최종 진입하기 직전의 장소적 배경이 된다.",
        "etymology": "Beekes(EDG)는 선그리스어 기층 어휘일 가능성을 제기한다."
      }
    ]
  },
  {
    "ref": "Iliad 24.715",
    "trans": "만약 노인(프리아모스)이 마차 위에서 백성들에게 말씀하지 않았더라면:",
    "words": [
      {
        "g": "εἰ",
        "pos": "접속사",
        "lemma": "εἰ",
        "principalParts": "(미상)",
        "parse": "coord.conj.",
        "gloss_kr": "만약 ~라면",
        "gloss_en": "if",
        "syntax": "εἰ는 조건절을 이끄는 접속사로, 과거 직설법과 결합하여 반사실적 조건문의 조건절을 구성한다.",
        "background": "이전까지의 슬픔의 흐름을 극적으로 끊어내고 새로운 국면으로 전환시키는 문법적 전환점이다.",
        "etymology": "PIE 조건 접속사 소사 계열에서 유래한다."
      },
      {
        "g": "μὴ",
        "pos": "부사",
        "lemma": "μή",
        "principalParts": "(미상)",
        "parse": "neg.adv.",
        "gloss_kr": "~않았더라면 (부정사)",
        "gloss_en": "not",
        "syntax": "μὴ는 조건절 안에서 반사실적 부정을 나타내는 부정어다.",
        "background": "프리아모스가 개입하지 않았더라면 온종일 통곡이 이어졌을 것이라는 가정의 반대 사실을 강조하는 필수 요소다.",
        "etymology": "PIE 재구형 *mē에서 유래하며, 산스크리트어 mā와 동계이다."
      },
      {
        "g": "ἄρ᾽",
        "pos": "소사",
        "lemma": "ἄρα",
        "principalParts": "(미상)",
        "parse": "particle",
        "gloss_kr": "과연, 마침내",
        "gloss_en": "then, therefore",
        "syntax": "ἄρ᾽는 서사의 인과적 흐름을 나타내는 전접사 소사다.",
        "background": "상황이 우연이나 무작위가 아니라 운명의 흐름과 인과적 맥락 속에서 전개됨을 나타낸다.",
        "etymology": "그리스어 서사시에서 담화 표지로 발달했다."
      },
      {
        "g": "ἐκ",
        "pos": "전치사",
        "lemma": "ἐκ",
        "principalParts": "(미상)",
        "parse": "prep.+gen.",
        "gloss_kr": "~로부터",
        "gloss_en": "out of, from",
        "syntax": "ἐκ 전치사는 속격 명사 δίφροιο를 지배하여 분리 및 기원의 의미역을 나타낸다.",
        "background": "마차 위에 올라타 있던 노왕 프리아모스가 군중을 향해 말하기 위해 마차 '위에서부터' 발언을 시작하는 물리적 위치 이동의 기점을 가리킨다.",
        "etymology": "PIE 재구형 *eǵs에서 유래하며, 라틴어 ex와 동계이다."
      },
      {
        "g": "δίφροιο",
        "pos": "명사",
        "lemma": "δίφρος, δίφρου, ὁ",
        "principalParts": "(미상)",
        "parse": "sg.gen.m.",
        "gloss_kr": "마차의, 전차의",
        "gloss_en": "of the chariot/seat",
        "syntax": "LFG 관점에서 δίφροιο는 전치사 ἐκ의 지배를 받는 속격 목적어로 [PRED 'δίφρος', CASE gen] 자질을 갖는다.",
        "background": "프리아모스가 타고 온 마차의 좌석 혹은 전차를 뜻한다.",
        "etymology": "접두사 δι-와 어근 *pher-의 합성어로, PIE 재구형 *dwi- + *bʰer-에 소급한다."
      },
      {
        "g": "γέρων",
        "pos": "명사",
        "lemma": "γέρων, γέροντος, ὁ",
        "principalParts": "(미상)",
        "parse": "sg.nom.m.",
        "gloss_kr": "노인, 늙은 왕",
        "gloss_en": "old man, elder",
        "syntax": "LFG 관점에서 γέρων은 주절의 주어로 [PRED 'γέρων', CASE nom, θ-ROLE AGENT] 기능을 한다.",
        "background": "아들 헥토르를 잃은 비통함 속에서도 백성들을 이성적으로 통제하고 질서를 잡는 현자이자 트로이아의 노왕 프리아모스를 가리킨다.",
        "etymology": "PIE 재구형 *gerh₂-에서 유래하며, 산스크리트어 járant-과 동계이다."
      },
      {
        "g": "λαοῖσι",
        "pos": "명사",
        "lemma": "λαός, λαοῦ, ὁ",
        "principalParts": "(미상)",
        "parse": "pl.dat.m.",
        "gloss_kr": "백성들에게",
        "gloss_en": "to the people",
        "syntax": "LFG 관점에서 λαοῖσι는 동사 μετηύδα의 여격 목적어로 [PRED 'λαός', CASE dat, θ-ROLE BENEFICIARY] 자질을 갖는다.",
        "background": "성문 앞에 모여 통곡하는 트로이아의 백성들을 가리킨다.",
        "etymology": "Beekes(EDG)는 선그리스어 기층 어휘일 가능성을 제기한다."
      },
      {
        "g": "μετηύδα",
        "pos": "동사",
        "lemma": "μετοὐδάω",
        "principalParts": "μεταυδάω – μεταυδήσω – μετηύδησα – (미상) – (미상) – (미상)",
        "parse": "3rd.sg.impf.ind.act.",
        "gloss_kr": "말씀하셨다, 연설했다",
        "gloss_en": "addressed, spoke among",
        "syntax": "μετηύδα는 3인칭 단수 미완료과거 능동태 형태로, LFG에서 [PRED 'μεταυδάω<SUBJ,OBJ>', TENSE past, ASPECT impf]로 분석된다.",
        "background": "슬픔에 잠긴 군중에게 프리아모스 왕이 권위를 가지고 말을 건네며 장례 절차의 방향을 지시하는 결정적 순간을 알리는 표현이다.",
        "etymology": "전치사 μετά과 어근 *wed-계열의 합성어다."
      }
    ]
  },
  {
    "ref": "Iliad 24.716",
    "trans": "“내게 길을 비켜 노새들이 지나가게 하라.",
    "words": [
      {
        "g": "εἴξατέ",
        "pos": "동사",
        "lemma": "είκω",
        "principalParts": "εἴκω – εἴξω – εἶξα – (미상) – (미상) – (미상)",
        "parse": "2nd.pl.aor.imp.act.",
        "gloss_kr": "비켜라, 길을 내어라",
        "gloss_en": "yield, make way",
        "syntax": "εἴξατέ는 2인칭 복수 부정과거 명령법 능동태 형태로, LFG에서 분석된다.",
        "background": "슬픔에 겨워 마차 주변을 가로막고 있는 군중을 향해 프리아모스 왕이 노새가 지나갈 수 있도록 길을 비키라고 명하는 지시 사항이다.",
        "etymology": "PIE 재구형 *wei̯k-에서 유래하며, 산스크리트어 víṣṭe와 동계이다."
      },
      {
        "g": "μοι",
        "pos": "대명사",
        "lemma": "ἐγώ",
        "principalParts": "(미상)",
        "parse": "sg.dat.commodi",
        "gloss_kr": "나를 위해, 내게",
        "gloss_en": "for me",
        "syntax": "μοι는 1인칭 단수 여격 대명사로 이해관계의 여격으로 기능한다.",
        "background": "슬픈 군중 속에서 왕이자 아버지인 자신의 뜻에 따라 길을 터줄 것을 요구하는 화자의 주관적 입장을 반영한다.",
        "etymology": "PIE 재구형 *megh₁-계열의 1인칭 대명사 여격 형태에 소급한다."
      },
      {
        "g": "οὐρεῦσι",
        "pos": "명사",
        "lemma": "οὐρεύς, οὐρέως, ὁ",
        "principalParts": "(미상)",
        "parse": "pl.dat.m.",
        "gloss_kr": "노새들에게",
        "gloss_en": "for the mules",
        "syntax": "LFG 관점에서 οὐρεῦσι는 동사 διελθέμεν의 주어 혹은 여격 목적어로 기능한다.",
        "background": "헥토르의 시신을 실은 수레를 끌고 온 노새들을 가리킨다.",
        "etymology": "그리스어 내부의 파생이나 기층 언어와의 접점에서 발달했다."
      },
      {
        "g": "διελθέμεν:",
        "pos": "동사",
        "lemma": "διέρχομαι",
        "principalParts": "διέρχομαι – διελεύσομαι – διῆλθον – διελλήλυθα – (미상) – (미상)",
        "parse": "aor.act.inf.",
        "gloss_kr": "지나쳐 가도록",
        "gloss_en": "to pass through",
        "syntax": "διελθέμεν은 LFG에서 보문소 구문 안에서 노새들이 통과하는 행위를 나타낸다.",
        "background": "성문 앞 군중의 밀집을 뚫고 수레와 노새가 왕궁 안으로 안전하게 진입해야 하는 물리적 이동 과정을 설명한다.",
        "etymology": "전치사 διά과 어근 *el-의 합성어다."
      },
      {
        "g": "αὐτὰρ",
        "pos": "접속사",
        "lemma": "αὐτάρ",
        "principalParts": "(미상)",
        "parse": "coord.conj.",
        "gloss_kr": "그리고 나서, 그러나",
        "gloss_en": "but, and then",
        "syntax": "αὐτὰρ는 대등 접속사로 앞 절과 뒤 절의 시간적 순서나 대조 관계를 나타낸다.",
        "background": "길을 비키는 선행 조치와 그 이후에 허용될 통곡이라는 후행 조치를 명확히 구분하여 지시하는 담화 표지다.",
        "etymology": "αὐτός 계열의 소사적 확장형이다."
      },
      {
        "g": "ἔπειτα",
        "pos": "부사",
        "lemma": "ἔπειτα",
        "principalParts": "(미상)",
        "parse": "adv.",
        "gloss_kr": "그다음에, 그후에",
        "gloss_en": "then, thereafter",
        "syntax": "ἔπειτα는 시간 부사로 행동의 순차적 전개를 명시한다.",
        "background": "당장의 비극적 통곡을 잠시 멈추게 한 뒤, 왕궁에 도착한 후에야 비로소 슬픔을 허락하겠다는 시간적 단계 설정을 나타낸다.",
        "etymology": "전치사 ἐπί와 부사 εἶτα의 합성어다."
      }
    ]
  },
  {
    "ref": "Iliad 24.717",
    "trans": "그러고 나서 너희는 집으로 데려간 뒤에야 실컷 슬퍼하도록 하라.”",
    "words": [
      {
        "g": "ἄσεσθε",
        "pos": "동사",
        "lemma": "ἄδω",
        "principalParts": "ἄδω – ἄσω – ἦσα – (미상) – (미상) – ἄσθην",
        "parse": "2nd.pl.fut.ind.mid.",
        "gloss_kr": "만족할 만큼 실컷 하다",
        "gloss_en": "you will have your fill of",
        "syntax": "ἄσεσθε는 미래 직설법 중간태 형태로 분석된다.",
        "background": "지금 당장 길거리에서 무질서하게 울지 말고, 왕궁 안으로 시신을 모신 후에야 슬픔을 충분히 해소하라는 프리아모스의 통제다.",
        "etymology": "PIE 재구형 *seh₂-에서 유래하며, 라틴어 satur와 동계이다."
      },
      {
        "g": "κλαυθμοῖο,",
        "pos": "명사",
        "lemma": "κλαυθμός, κλαυθμοῦ, ὁ",
        "principalParts": "(미상)",
        "parse": "sg.gen.m.",
        "gloss_kr": "통곡을, 울음을",
        "gloss_en": "of weeping, lamentation",
        "syntax": "LFG 관점에서 κλαυθμοῖο는 동사 ἄσεσθε의 지배를 받는 속격 목적어로 자질을 갖는다.",
        "background": "장례 의식에서 터져 나오는 통곡과 오열을 뜻하며, 비극적 감정이 정점에 달한 상태를 상징한다.",
        "etymology": "동사 κλαίω에서 파생된 명사다."
      },
      {
        "g": "ἐπὴν",
        "pos": "접속사",
        "lemma": "ἐπήν",
        "principalParts": "(미상)",
        "parse": "coord.conj.",
        "gloss_kr": "~할 때에, ~하고 나서",
        "gloss_en": "whenever, when after",
        "syntax": "ἐπὴν은 시간 및 조건절을 이끄는 접속사로 부정과거 접속법과 결합한다.",
        "background": "시신을 집으로 안전하게 모시는 선행 행동이 완료되는 시점을 규정하는 조건적 시간 접속사다.",
        "etymology": "ἐπεί와 소사 ἄν의 합성어다."
      },
      {
        "g": "ἀγάγωμι",
        "pos": "동사",
        "lemma": "ἄγω",
        "principalParts": "ἄγω – ἄξω – ἤγαγον – ἦχα – ἦγμαι – ἤχθην",
        "parse": "1st.sg.aor.subj.act.",
        "gloss_kr": "내가 데려갈 때",
        "gloss_en": "I shall lead/bring",
        "syntax": "ἀγάγωμι는 1인칭 단수 부정과거 접속법 능동태의 호메로스 이형태다.",
        "background": "왕 자신이 직접 아들의 시신이 담긴 수레를 이끌고 궁궐 안으로 들어가는 주체적 역할을 강조하는 표현이다.",
        "etymology": "PIE 재구형 *h₂eǵ-에서 유래하며, 산스크리트어 ájati, 라틴어 agō와 동계이다."
      },
      {
        "g": "δόμον",
        "pos": "명사",
        "lemma": "δόμος, δόμου, ὁ",
        "principalParts": "(미상)",
        "parse": "sg.acc.m.",
        "gloss_kr": "집으로",
        "gloss_en": "to the house, home",
        "syntax": "LFG 관점에서 δόμον은 동사 ἀγάγωμι의 목적이자 방향성을 나타내는 처소 대격으로 자질을 갖는다.",
        "background": "성문 밖의 거친 공간에서 트로이아 왕실의 안전한 공간인 왕궁 내부로 시신이 귀환함을 상징한다.",
        "etymology": "PIE 어근 *dem-/dom-에서 유래하며, 산스크리트어 dáma-, 라틴어 domus와 동계이다."
      },
      {
        "g": "δέ.",
        "pos": "접속사",
        "lemma": "δέ",
        "principalParts": "(미상)",
        "parse": "coord.conj.",
        "gloss_kr": "그리고, ~로 (방향 접미사)",
        "gloss_en": "to (directional suffix)",
        "syntax": "여기서 δέ는 명사 δόμον에 결합된 향처 접미사(-δε)의 일부로 기능한다.",
        "background": "집을 향하는 방향성을 명확히 표시하여 왕궁으로의 귀환이라는 물리적 종착지를 완성한다.",
        "etymology": "방향을 나타내는 고대 인도유럽어 및 그리스어 고유의 구문론적 접미사 형태다."
      }
    ]
  },
    {
        "ref": "Iliad 6.718",
        "trans": "이렇게 말씀하시니, 그들은 흩어져서 아픔(수레)에게 길을 비켜주었다.",
        "words": [
            {
                "g": "ὣς",
                "pos": "부사",
                "lemma": "ὡς",
                "parse": "adv.",
                "gloss_kr": "이렇게, 이와 같이",
                "gloss_en": "thus, so",
                "syntax": "LFG 관점에서 ὣς는 부사적 수식어(ADJUNCT)로서 주절의 술어 동사 ἔφαθ᾽의 양태를 한정하며, f-구조 상 [ADJUNCT [PRED 'ὡς', MOD ἔφαθ᾽]]로 분석된다. 생성문법적 관점에서는 CP 부사절 또는 전치된 수식어로 기능하며, 통사 구조상 [AdvP ὣς] 형태로 절의 외곽에 위치한다. 레빈슨式 정보구조 측면에서 이 지시사는 앞서 전개된 발화 내용을 가리키는 담화 지시(discourse deixis) 기능을 수행하여 청중의 주의를 집중시킨다.",
                "background": "ὣς는 호메로с 서사시에서 인물의 직접 발화가 끝난 직후 서사 시인의 목소리로 돌아오는 전환점을 알리는 전형적인 수식어다. 이 단어로 인해 독자는 영웅의 격앙된 독백이나 대화에서 객관적 서사 공간으로 복귀하게 된다. 서사 전개상 앞선 긴장감을 환기시키며 다음 행동 묘사로 매끄럽게 연결하는 역할을 맡는다.",
                "etymology": "Beekes(EDG)에 따르면 PIE 지시사 어근 *sw- 또는 대명사 기저에서 발달한 것으로 추정되며, 후두음이론의 직접적 흔적은 명확히 확인되지 않는다. 동계어로 산스크리트어 vā('～처럼')와 라틴어 sē('자기 자신, 분리') 등이 제기된다. 음운론적으로는 어말 s의 유지와 함께 그리스어 내부에서 부사화 접미사를 취하는 변화를 겪었다. 현대 그리스어에는 직접적인 형태가 잔존하지 않으나, 고전어 인용 구문이나 일부 복합어의 어원으로 흔적이 남아 있다."
            },
            {
                "g": "ἔφαθ᾽",
                "pos": "동사",
                "lemma": "φημί",
                "parse": "3rd.sg.aor.ind.mid.",
                "gloss_kr": "말하였다",
                "gloss_en": "he/she spoke",
                "principalParts": "φημί – φήσω – φῆν / ἔφην – (미상) – (미상) – (미상)",
                "syntax": "LFG f-구조상 주절의 핵심 술어 PRED를 담당하며, [PRED 'φημί<SUBJ>', SUBJ [PRO]] 형태로 생략된 주어인 헥토르 또는 대변자를 논항으로 지배한다. 생성문법의 V-to-T 이동 가설에 따라, 과거시제를 나타내는 비증대(augment) 혹은 어간 변화가 일어난 동사 핵은 TP 영역으로 상승하여 [TP ἔφαθ᾽ [vP tᵢ]] 구조를 형성한다. 격 이론 측면에서 이 동사는 별도의 직접목적어를 취하지 않고 인용구나 간접 서술을 명사절 논항으로 지배하는 통사적 특성을 보인다.",
                "background": "ἔφαθ᾽는 호메로스 서사시에서 인물의 대사를 매듭짓고 행위의 전환을 이끌어내는 가장 빈번하게 쓰이는 발화 동사다. 이 형태는 신화적 영웅들의 권위 있는 발화 행위를 강조하며, 청중에게 다음 장면의 물리적 반응을 주목하도록 유도한다. 비극적 결말을 향해 치닫는 서사 속에서 인물 간의 상호작용을 매개하는 핵심 서사 장치다.",
                "etymology": "Chantraine(DELG)은 PIE 어근 *bha₂-('말하다')에서 유래한 것으로 보며, e급 어간에 후두음 *h₂가 포함된 형태에서 발달했다고 분석한다. 동계어로 라틴어 fārī('말하다'), 영어 bane(어원적 의미의 파멸/말) 등이 있다. 그리스어 내부에서 아오이스트형으로 이행하면서 음성적 축약과 엘리전(᾽)을 겪는 음운 변화를 거쳤다. 현대 그리스어의 단어 φήμη('명성, 소문')와 현대 영어의 fame, prophecy 등의 어휘에 그 어원적 흔적이 깊이 남아 있다."
            },
            {
                "g": "οἳ",
                "pos": "대명사",
                "lemma": "ὁ, ἡ, τό",
                "parse": "pl.nom.m.",
                "gloss_kr": "그들, 저들",
                "gloss_en": "they",
                "syntax": "LFG f-구조에서 새로운 절의 주어 SUBJ 기능을 수행하며, [PRED 'οἳ', CASE nom, PERSON 3rd]로 표상된다. 생성문법적으로는 [Spec, TP] 자리를 점유하며, 후행하는 동사구와의 수-격 일치(agreement) 관계를 만족시킨다. 레빈슨式 정보구조 관점에서 이 대명사는 문맥상 이미 활성화된 구정보(given information)인 트로이아 백성들을 가리키며 담화 참여자들의 초점을 유지한다.",
                "background": "여기서 οἳ는 시신을 마중 나온 트로이아의 군중과 백성들을 가리키는 지시적 대명사다. 영웅의 개인적 비극이 도시 전체의 공동체적 슬픔으로 확산되는 공간적 배경을 보여준다. 이들의 집단적 행동은 장례 행렬의 엄숙한 분위기를 시각화하는 서사적 기능을 담당한다.",
                "etymology": "Beekes(EDG)는 PIE 지시 대명사 어근 *so-, *se-에서 발전한 것으로 보며, 대니유럽어 공통의 지시격 형태에서 분기했다고 설명한다. 산스크리트어 sá('그')와 고딕어 sa('그')가 대표적인 동계어다. 그리스어 역사 통사 과정에서 정관사 및 대명사로 기능이 분화되면서 호메로스 방언 특유의 주격 복수 형태를 확립했다. 현대 그리스어의 정관사 시스템 및 대명사 용법 전반에 직접적인 조상 격인 형태로 흔적이 투영되어 있다."
            },
            {
                "g": "δὲ",
                "pos": "접속사",
                "lemma": "δέ",
                "parse": "coord.conj.",
                "gloss_kr": "그리고, 그런데",
                "gloss_en": "and, but",
                "syntax": "LFG 관점에서 두 절을 대등하게 접속하는 COORDINATOR 기능을 맡으며, f-구조 상 [COORD-REL coord] 속성을 부여한다. 생성문법적으로는 좌표 구조(coordinate structure)의 양상을 제어하며, 두 번째 절의 좌측 변방에 위치하여 절 간의 통사적 종속성을 배제한다. 화용론적으로는 이전 발화와 새로운 행동 사이의 완만한 전환을 나타내는 표지(discourse marker)로 작동한다.",
                "background": "δὲ는 호메로스 서사시의 연속적인 서사 흐름을 지탱하는 가장 보편적인 대등 접속사다. 앞서 일어난 발화 행위와 그에 따르는 군중의 신체적 반응을 자연스럽게 이어준다. 시적 호흡을 조절하며 청중이 다음 서사적 국면으로 이동하도록 돕는 리듬감의 기초가 된다.",
                "etymology": "Chantraine(DELG)은 PIE 기저에서 독립된 부사적 어원을 갖는 것으로 보며, 확정적인 어근 재구는 난제이나 게르만어파 등의 유사 입자와 비교된다. 그리스어 내부에서 후행 접속사(postpositive)로 고정되는 통사적 위치 변화를 겪었다. 고전 그리스어 전반에 걸쳐 대조 및 순차 접속의 기본 수단으로 자리 잡았다. 현대 그리스어에는 직접 생존하지 않으나 고전문학 어휘 및 특정 관용구의 어법 속에 화석으로 남아 있다."
            },
            {
                "g": "διέστησαν",
                "pos": "동사",
                "lemma": "διίστημι",
                "parse": "3rd.pl.aor.ind.act.",
                "gloss_kr": "갈라섰다, 길을 비켰다",
                "gloss_en": "they stood apart",
                "principalParts": "διίστημι – διαστήσω – διέστην – διέστηκα – διέσταμαι – διεστάθην",
                "syntax": "LFG f-구조상 주절의 PRED이며, [PRED 'διίστημι<SUBJ,OBL>', SUBJ [PRED 'οἳ', θ-ROLE AGENT]] 형태의 자동사 구문으로 분석된다. 생성문법의 VP-internal subject hypothesis에 따라 주어는 기저 위치에서 이동하였으며, 전치사적 접두사 διᾰ-가 동사 어간과 결합하여 공간적 분리를 나타내는 방향성을 부여한다: [vP δι-έστησαν [PP t ]]. θ-역할 배정에서 주어들은 행위자이자 공간적 이동의 주체 역할을 동시에 수행한다.",
                "background": "διέστησαν은 비통에 잠긴 군중이 다가오는 수레를 위해 경건하게 양옆으로 물러서는 극적인 순간을 포착한다. 물리적인 공간의 분열은 곧 영웅의 죽음 앞에서 트로이아 사회가 겪는 질서의 재편과 슬픔의 동참을 상징한다. 이 집단적 행동 묘사는 비극의 무게감을 시각적으로 극대화한다.",
                "etymology": "Beekes(EDG)와 Chantraine(DELG)은 PIE 어근 *steh₂-('서다', e급 어간에 후두음 h₂ 포함, cf. 그리스어 ἵστημι)에 분리를 뜻하는 접두사 διᾰ-가 결합한 형태로 분석한다. 동계어로 라틴어 stāre('서다'), 산스크리트어 sthā-('서다')가 있다. 음운론적으로는 아오이스트형에서 모음 장음화와 함께 기식음 동화 및 어간 교체를 겪었다. 현대 그리스어의 διάστημα('간격, 공간')과 영어의 distance, state 등의 어휘에 그 어원적 유산이 뚜렷이 남아 있다."
            },
            {
                "g": "καὶ",
                "pos": "접속사",
                "lemma": "καί",
                "parse": "coord.conj.",
                "gloss_kr": "그리고, 또한",
                "gloss_en": "and, also",
                "syntax": "LFG f-구조 상 두 개의 술어 동사(διέστησαν과 εἶξαν)를 연결하는 대등 접속사로 기능하며, [COORD-REL coord] 자질을 형성한다. 생성문법적으로는 동등한 통사 범주를 묶는 연산자로 작동하며, 두 동사구(VP) 간의 병렬 구조를 구축한다. 정보구조 측면에서는 두 행위의 밀접한 동시성과 연속성을 강조하는 첨가적 초점 표지로 기능한다.",
                "background": "καὶ는 두 가지 밀접한 신체적 동작인 '갈라섬'과 '길을 비킴'을 하나의 유기적 행동으로 결합한다. 군중의 일사불란하고 경건한 태도를 문법적으로 엮어내는 연결고리 역할을 한다. 서사의 속도를 조절하며 비극적 장례식의 엄숙함을 고조시킨다.",
                "etymology": "Chantraine(DELG)은 명확한 PIE 어원을 단정하기 어렵고 그리스어 고유의 전치사·부사적 기원에서 발전한 것으로 본다. 인도유럽어족 내 타 언어와의 직접적 동계어는 불확실하며 그리스어 내부의 전개로 설명된다. 고전 그리스어에서 문장 부사 및 접속사로 용법이 다변화되는 의미 전이를 겪었다. 현대 그리스어에서도 kai(και)로서 '그리고, 도'의 의미를 지니는 가장 빈번한 일상 어휘로 계승되어 있다."
            },
            {
                "g": "εἶξαν",
                "pos": "동사",
                "lemma": "εἴκω",
                "parse": "3rd.pl.aor.ind.act.",
                "gloss_kr": "물러났다, 길을 내주었다",
                "gloss_en": "they yielded, gave way",
                "principalParts": "εἴκω – εἴξω – εἶξα – (미상) – (미상) – (미상)",
                "syntax": "LFG f-구조상 두 번째 절의 PRED이며, [PRED 'εἴκω<SUBJ,OBL>', OBL [PRED 'ἀπήνῃ', CASE dat]] 형태로 여격 지배를 실현한다. 생성문법적으로는 목적어 자리에 수레를 뜻하는 여격 명사구를 취하며, 이격(ablative/dative) 격 지배 원리에 의해 여격이 허가된다: [VP εἶξαν [PP ἀπήνῃ ]]. θ-역할 관점에서 주어들은 양보와 길 비키기의 주체로 기능하며, 수레는 그 경로의 대상이 된다.",
                "background": "εἶξαν은 단순한 물리적 이동을 넘어, 죽은 자의 영광스러운 운구 행렬 앞에 경외심으로 고개를 숙이는 심리적 승복을 함축한다. 군중이 스스로 자리를 양보하는 행위는 트로이아 성 안에서 헥토르가 지니던 위상의 절대성을 증명한다. 이 동사는 비극적 서사에서 피할 수 없는 운명 앞에 무릎 꿇는 공동체의 태도를 대변한다.",
                "etymology": "Beekes(EDG)는 PIE 어근 *wēik-('굴복하다, 구부러지다')에서 유래한 것으로 보며, 애블라우트 e급 어간의 변화를 거쳤다고 설명한다. 동계어로 고대 고지독일어 wīhhan('물러나다, 양보하다') 등이 있다. 음운론적으로는 아오이스트형 형성 과정에서 장모음화와 기식음의 변동을 겪었다. 현대 그리스어에는 직접적인 일상 동사로 남아있지 않으나, 관련 파생어와 고문헌 어휘 연구를 통해 그 역사적 형태가 보존되어 있다."
            },
            {
                "g": "ἀπήνῃ",
                "pos": "명사",
                "lemma": "ἀπήνη, ἡ",
                "parse": "sg.dat.f.",
                "gloss_kr": "수레에, 마차에",
                "gloss_en": "to the wagon, cart",
                "syntax": "LFG f-구조에서 동사 εἶξαν의 이격적 또는 대상적 논항인 OBL(OBLIQUE) 기능을 수행하며, [PRED 'ἀπήνη', CASE dat, θ-ROLE GOAL/SOURCE]로 표상된다. 생성문법적으로는 PP 또는 여격 NP로 투사되며, 동사와의 격 지배 관계에 의해 자질이 라이선싱된다. 정보구조 측면에서 이 마차는 이미 문맥에 도입된 구정보로서 운구 행렬의 중심 초점을 형성한다.",
                "background": "ἀπήνη는 영웅 헥토르의 시신을 싣고 아킬레우스의 진영에서 트로이아로 돌아온 바로 그 장례용 수레를 가리킨다. 이 수레는 슬픔과 치욕, 그리고 비극적 귀환을 상징하는 핵심 사물이다. 군중이 이 수레에 길을 비켜주는 광경은 전쟁의 참혹함 속에서 치러지는 성스러운 장례의식을 부각시킨다.",
                "etymology": "Beekes(EDG)는 선그리스어(Pre-Greek) 기층 어휘로 분류하며, 인도유럽어족 내부의 PIE 재구를 유보하고 지중해 지역의 문화적 차용어로 본다. Chantraine(DELG) 또한 인도유럽어 동계어를 찾기 힘든 고유의 물질문화 명칭으로 다룬다. 음운론적으로는 여성형 명사 변화굴절을 따르며 고대 그리스 사회의 수레 종류를 지칭하는 전문 용어로 정착했다. 현대 그리스어에는 일상 명사로 전승되지 않고 고고학적·문헌학적 맥락에서만 한정적으로 언급된다."
            }
        ]
    },
    {
        "ref": "Iliad 6.719",
        "trans": "그들은 시신을 영광스러운 방으로 들여와서, 번쩍이는 침상 위에 눕히고,",
        "words": [
            {
                "g": "οἳ",
                "pos": "대명사",
                "lemma": "ὁ, ἡ, τό",
                "parse": "pl.nom.m.",
                "gloss_kr": "그들은",
                "gloss_en": "they",
                "syntax": "LFG f-구조 상 새로운 절의 주어 SUBJ 논항으로 기능하며, [PRED 'οἳ', CASE nom]로 배정된다. 생성문법적으로 [Spec, TP] 자리를 차지하며 후행하는 복합 동사구의 주어 자격을 충족한다. 화용론적으로 대명사 전이 없이 연속되는 주체로서 서사의 주도권을 유지한다.",
                "background": "이 대명사는 수레를 맞이하여 직접 시신을 모시고 들어가는 트로이아의 시종들과 친족들을 지칭한다. 영웅의 육신이 공적으로 인도되는 장면에서 실질적인 장례 절차를 집행하는 주체들이다. 이들의 손을 통해 슬픔은 구체적인 의례 행위로 전환된다.",
                "etymology": "Beekes(EDG)에 따르면 PIE 지시 대명사 어근 *so-, *se-에서 유래하였으며, 718행의 'οἳ'와 동일한 어원적 계보를 공유한다. 산스크리트어 sá('그')와 동계 관계에 있다. 그리스어 역사 속에서 대명사 체계로 정착하는 음운 및 형태 변화를 겪었다. 현대 그리스어의 관사 및 대명사 체계에 그 뿌리가 깊이 이어져 있다."
            },
            {
                "g": "δὲ",
                "pos": "접속사",
                "lemma": "δέ",
                "parse": "coord.conj.",
                "gloss_kr": "그리고, 또",
                "gloss_en": "and",
                "syntax": "LFG f-구조 상 절과 절을 대등하게 연결하는 [COORD-REL coord] 자질을 지닌다. 생성문법적으로 좌표 구조의 접속 장치로 작동하며, 문장 간의 시간적 연속성을 통사적으로 보증한다. 정보구조 측면에서 새로운 행동 단계로의 이행을 알리는 표지로 기능한다.",
                "background": "δὲ는 수레가 도착하여 길을 비킨 앞선 장면에서, 이제 시신을 건물 안으로 운반하는 다음 단계의 동작으로 서사를 매끄럽게 연결한다. 행위의 연속성을 부여하는 핵심 결합자다. 장례 의식의 절차가 체계적으로 진행되고 있음을 보여준다.",
                "etymology": "Chantraine(DELG)은 독립된 부사적 기원에서 발전한 후행 접속사로 분석하며 718행과 동일하다. 인도유럽어 제어와의 비교는 불확실하나 그리스어 내부에서 용법이 고정되었다. 고전 시가와 산문 전반에서 대등 접속의 표준으로 사용되었다. 현대 그리스어에는 직접 생존하지 않는다."
            },
            {
                "g": "ἐπεὶ",
                "pos": "접속사",
                "lemma": "ἐπεί",
                "parse": "subord.conj.",
                "gloss_kr": "~했을 때, ~하매",
                "gloss_en": "when, after",
                "syntax": "LFG f-구조상 부사절을 이끄는 ADJUNCT(COMP)로 기능하며, [PRED 'ἐπεί', SUB-COMP [F-STR]] 형태로 주절과 종속절을 매개한다. 생성문법적으로는 종속접속사구(CP)의 핵으로 투사되어 [CP ἐπεὶ [TP ...]] 구조를 이룬다. 시간적 선후관계를 규정하는 통사적 표지 역할을 수행한다.",
                "background": "ἐπεὶ는 운구 과정의 물리적 이동이 완료된 시점을 정확히 한정하여, 다음 단계인 실내 안치 의식으로 초점을 전환한다. 서사적 시간의 완급을 조절하는 중요한 분기점이다. 독자나 청중으로 하여금 장례의 엄숙한 공간 내부로 시선을 이동시키도록 유도한다.",
                "etymology": "Beekes(EDG)는 전치사 ἐπί와 관계대명사/부사적 요소의 결합으로 보며 PIE 기저에서 파생된 복합 입자로 분석한다. 동계어로 산스크리트어의 특정 부사적 접두 요소들이 비교된다. 그리스어 내부에서 시간 및 인과 관계를 나타내는 종속접속사로 의미 분화와 통사적 정착을 겪었다. 현대 그리스어에는 직접 형태가 남지 않았으나 고전어 계승 어휘에서 그 잔재를 찾을 수 있다."
            },
            {
                "g": "εἰσάγαγον",
                "pos": "동사",
                "lemma": "εἰσάγω",
                "parse": "3rd.pl.aor.ind.act.",
                "gloss_kr": "들여놓았다",
                "gloss_en": "they led/brought in",
                "principalParts": "εἰσάγω – εἰσάξω – εἰσήγαγον – εἰσῆχα – εἰσῆγμαι – εἰσήχθην",
                "syntax": "LFG f-구조 상 종속절의 PRED이며, [PRED 'εἰσάγω<SUBJ,OBJ>', SUBJ [PRO], OBJ [PRED 'δώματα', CASE acc]] 형태로 목적어를 지배한다. 생성문법적으로 전치사적 접두사 εἰσ-가 동사 어간과 결합하여 내부로의 이동을 뜻하는 방향 자질을 부여하며, 비증대 과거형 아오이스트 어간 형성을 보인다: [vP εἰσ-ήγαγον [VP t ]]. θ-역할 배정에서 주어는 행위자, 목적어는 이동의 대상이 된다.",
                "background": "εἰσάγαγον은 영웅의 육신이 마침내 외부의 전장과 길바닥에서 벗어나 궁궐 내부의 성스러운 공간으로 진입함을 알린다. 이 실내 유입은 죽은 자에게 바쳐지는 마지막 안식의 시작을 의미한다. 공간의 변화는 곧 서사의 성격이 전투에서 장례로 완전히 전환되었음을 시각화한다.",
                "etymology": "Beekes(EDG)는 PIE 어근 *ag'-('이끌다, 몰다', cf. 그리스어 ἄγω, 라틴어 agere)에 내부를 뜻하는 전치사/접두사 εἰς가 결합한 것으로 분석한다. 동계어로 산스크리트어 ajati('몰다') 등이 있다. 음운론적으로는 아오이스트 2형(중복 과거형 계열의 변형)의 어간 교체와 접두사 모음의 변화를 거쳤다. 현대 그리스어의 εἰσάγω('수입하다, 도입하다') 및 관련 합성어에 그 형태와 의미가 생생하게 살아 있다."
            },
            {
                "g": "κλυτὰ",
                "pos": "형용사",
                "lemma": "κλυτός, -ή, -όν",
                "parse": "pl.acc.n.",
                "gloss_kr": "화려한, 영광스러운, 유명한",
                "gloss_en": "glorious, famous",
                "syntax": "LFG f-구조에서 명사 δώματα의 수식어 ADJUNCT(MOD)로 기능하며, [PRED 'κλυτός', MOD δώματα, CASE acc, GENDER neuter]로 표상된다. 생성문법적으로는 NP 내부의 [Spec, NP] 또는 N' 수식어 자리에서 성·수·격 일치 제약을 만족시킨다. 의미적으로는 궁궐의 장엄함과 비극적 영광을 부각시키는 수식어다.",
                "background": "κλυτὰ는 단순한 물리적 건물이 아니라 영웅이 태어나고 자란 왕가의 명예와 영광이 서린 궁궐의 속성을 대변한다. 비참하게 전사한 헥토르가 가장 화려하고 존귀한 공간으로 돌아왔음을 역설적으로 대조시킨다. 이 수식어는 장례 공간의 엄숙함과 비극성을 배가한다.",
                "etymology": "Chantraine(DELG)과 Beekes(EDG)는 PIE 어근 *kleu-('듣다', e급 어간에 후두음 h₁ 또는 자음 확장)에서 파생된 형용사로, '소문난, 찬란한'의 원뜻을 갖는다고 본다. 동계어로 산스크리트어 śrutá-('들린, 유명한'), 라틴어 cluēre('불리다') 등이 있다. 음운론적으로 접미사 -το-가 결합하는 형용사 파생 규칙을 거쳤다. 현대 그리스어에는 일상어로 쓰이지 않으나 고전문학 및 신화적 명칭의 어원으로 깊이 보존되어 있다."
            },
            {
                "g": "δώματα",
                "pos": "명사",
                "lemma": "δῶμα, -ατος, τό",
                "parse": "pl.acc.n.",
                "gloss_kr": "저택에, 방들에, 궁궐에",
                "gloss_en": "halls, palace, rooms",
                "syntax": "LFG f-구조에서 동사 εἰσάγαγον의 직접목적어 OBJ 기능을 수행하며, [PRED 'δῶμα', CASE acc, θ-ROLE PATIENT/THEME]로 배정된다. 생성문법적으로는 VP 내부의 목적어 NP 자리에서 동사의 대격 격 지배를 받는다. 정보구조상 초점의 중심인 실내 장례 공간을 지시한다.",
                "background": "δώματα는 트로이아 왕 프리아모스의 궁궐 내부 방들을 가리키며, 외부 전과의 단절된 사적이고도 신성한 공간을 뜻한다. 이곳은 이제 영웅의 마지막 관이 누일 장소이자 슬픔이 정화되는 무대가 된다. 궁궐 내부의 묘사는 서사의 시선을 거대한 전쟁터에서 미시적인 가족의 비극으로 수렴시킨다.",
                "etymology": "Beekes(EDG)는 PIE 어근 *dem-/dom-('집, 구축하다', e급 어간)에서 유래한 것으로 보며, 명사화 접미사를 통해 중성 명사로 정착했다고 설명한다. 동계어로 라틴어 domus('집'), 산스크리트어 dáma-('집') 등이 있다. 음운론적으로 3변화 명사의 어간 교체(δωματ-)와 중성 복수 주격/대격의 어미 변화를 거쳤다. 현대 그리스어에는 직접적인 일상 명사로 남아있지 않으나 고전어 계승 어휘 및 지명·문학 어휘 속에서 그 혈통을 유지하고 있다."
            },
            {
                "g": "τὸν",
                "pos": "대명사",
                "lemma": "ὁ, ἡ, τό",
                "parse": "sg.acc.m.",
                "gloss_kr": "그를",
                "gloss_en": "him",
                "syntax": "LFG f-구조상 후행하는 분사절 또는 주절의 목적어 지시사를 구성하며, [PRED 'τὸν', CASE acc, GENDER masculine]로 분석된다. 생성문법적으로는 상관구조(correlative) 또는 지시적 대명사로서 명사구의 이동 및 잔류를 통제한다. 화용론적으로 직전 문맥의 중심 지시 대상인 헥토르의 시신을 다시 한번 강력하게 부각한다.",
                "background": "τὸν은 수레에 실려 들어온 영웅 헥토르의 시신을 직접 가리키는 지시어다. 이 대명사는 파괴된 육신이 되었음에도 여전히 서사의 절대적 중심인 주인공의 존재감을 각인시킨다. 청중의 시선을 시신 그 자체에 고정시키는 시각적 초점화 장치다.",
                "etymology": "Beekes(EDG)에 따르면 PIE 지시 대명사 어근 *so-, *t- 계열에서 발달했으며, 남성 단수 대격의 역사적 음운 형태를 그대로 유지한다. 산스크리트어 tám('그를')과 직통하는 동계어다. 그리스어 체계에서 정관사와 지시사로 분화되는 통사적 경로를 거쳤다. 현대 그리스어의 남성 단수 대격 관사 ton(τον)으로 직접 이어져 내려온다."
            },
            {
                "g": "μὲν",
                "pos": "소사",
                "lemma": "μέν",
                "parse": "part.",
                "gloss_kr": "한편, 참으로",
                "gloss_en": "indeed, on the one hand",
                "syntax": "LFG f-구조 상 담화 표지(DISCOURSE-MARKER)로 기능하며, 후행하는 δὲ와의 상관 관계(μὲν... δὲ)를 통해 대조 구조를 형성한다: [DISCOURSE-REL correlative]. 생성문법적으로는 좌측 변방의 입자 위치에 병합되며 절의 초점 구조를 조절한다. 화용론적으로 정보의 균형과 대조적 초점을 유도한다.",
                "background": "μὲν은 뒤이어 등장하는 δὲ와의 짝을 통해, 시신을 침대에 눕히는 행위와 아오디이(악사)들을 앉히는 두 가지 장례 절차를 대조적이고 균형 있게 배치한다. 호메로스 시가의 정교한 수사적 대칭미를 보여주는 필수 요소다. 장례 의식의 엄숙한 질서 정연함을 문법적으로 뒷받침한다.",
                "etymology": "Chantraine(DELG)은 독립된 어원 재구가 어렵고 강조의 의미를 지닌 고대 그리스어 고유의 입자로 본다. 인도유럽어족 내 타 언어와의 명확한 동계어는 확정되지 않았다. 고전 그리스어 전반에서 대조 구문의 전형적인 전조 입자로 정착했다. 현대 그리스어에는 직접 쓰이지 않으나 고전 문헌 연구에서 그 구조적 전통이 분석된다."
            },
            {
                "g": "ἔπειτα",
                "pos": "부사",
                "lemma": "ἔπειτα",
                "parse": "adv.",
                "gloss_kr": "그리고 나서, 그후에",
                "gloss_en": "then, thereupon",
                "syntax": "LFG f-구조 상 시간적 부사적 수식어 ADJUNCT로 기능하며, [PRED 'ἔπειτα', MOD clause]로 표상된다. 생성문법적으로는 [AdvP] 범주로서 절의 외곽 영역에 위치하여 사건의 순차적 발생을 명시한다. 정보구조 측면에서 이전 행동 완료 직후의 다음 서사 국면을 여는 지시 표지다.",
                "background": "ἔπειτα는 시신이 방 안으로 들어온 직후 곧바로 이어지는 장례의 다음 단계를 시간적 순서에 따라 매끄럽게 연결한다. 서사의 호흡을 끊지 않고 의식의 정밀한 절차들을 연속적으로 밀고 나가는 구동력이다. 장례의식의 치밀한 실황을 중계하는 듯한 현장감을 부여한다.",
                "etymology": "Beekes(EDG)는 전치사/부사적 요소 *epi와 지시적 부사 *ta의 합성어로 분석하며, '그 위에, 그 뒤에'의 원뜻을 갖는다고 설명한다. 동계어로서의 형태 발달은 그리스어 내부의 전치사 구문 확장과 맞물려 있다. 음운론적으로는 모음 연쇄의 음성적 조율을 거쳐 부사로 고정되었다. 현대 그리스어의 일상어에는 직접 생존하지 않으나 고전 문체 속에서 시간 승계의 대표적 표어로 잔존한다."
            }
        ]
    },
    {
        "ref": "Iliad 6.720",
        "trans": "구멍이 뚫린(끈을 엮는) 침상 위에 눕히고, 그 곁에는 슬픔의 노래를 부를 아오ιδούς(악사/애도자)들을 앉혔다.",
        "words": [
            {
                "g": "τρητοῖς",
                "pos": "형용사",
                "lemma": "τρητός, -ή, -όν",
                "parse": "pl.dat.n.",
                "gloss_kr": "구멍이 난, 끈을 꿰는 구멍이 있는",
                "gloss_en": "perforated, with holes (for cords)",
                "syntax": "LFG f-구조에서 명사 λεχέεσσι의 수식어 ADJUNCT(MOD)로 기능하며, [PRED 'τρητός', MOD λεχέεσσι, CASE dat, GENDER neuter]로 표상된다. 생성문법적으로 NP 내부의 수식어 자리에서 성·수·격 일치를 이룬다. 의미적으로는 호메로스 시대 침대의 구조적 특성을 보여주는 정밀한 물질문화적 수식어다.",
                "background": "τρητοῖς는 가죽 끈이나 줄을 팽팽하게 엮어 매기 위해 사면에 구멍을 뚫어 만든 당시의 정교한 침대(프레임)를 묘사한다. 단순한 가구의 지칭을 넘어, 영웅의 장례가 얼마나 격식 있고 공들여 치러지는지를 보여주는 물질적 증거다. 호메로스 서사시 특유의 생생한 실물 묘사 기법이 돋보이는 대목이다.",
                "etymology": "Beekes(EDG)와 Chantraine(DELG)은 어근 *terh₁-('뚫다, 꿰뚫다', 영급 어간에 후두음 h₁ 포함, cf. 그리스어 τετραίνω, 라틴어 terere)에서 파생된 형용사로 분석한다. 동계어로 산스크리트어 tiráti('뚫다, 건너다'), 영어 throw(원시 의미의 관통) 등이 있다. 음운론적으로 자음군과 접미사 -το-의 결합에 따른 음운 변동을 거쳤다. 현대 그리스어에는 직접 쓰이지 않으나 관련 어근 파생어들이 학술적 문맥에서 간명하게 연구된다."
            },
            {
                "g": "ἐν",
                "pos": "전치사",
                "lemma": "ἐν",
                "parse": "prep.",
                "gloss_kr": "~안에, ~에",
                "gloss_en": "in, on",
                "syntax": "LFG f-구조 상 여격 지배를 담당하는 PRED-PREP으로 기능하며, [PRED 'ἐν<OBJ>', OBJ [PRED 'λεχέεσσι', CASE dat]] 형태로 처격(locative) 의미역을 부여한다. 생성문법적으로는 PP의 핵으로 투사되어 [PP ἐν [NP λεχέεσσι]] 구조를 형성하며 여격 격 자질을 검증한다. 화용론적으로 시신이 안치되는 정확한 물리적 공간 좌표를 설정한다.",
                "background": "ἐν은 시신이 최종적으로 놓이는 침대라는 물리적 공간을 한정하는 전치사다. 외부의 거친 전장과 대비되는 안식처로서의 실내 공간을 확정한다. 장례 의식의 초점이 침대 위라는 좁고 성스러운 영역으로 집중되도록 유도한다.",
                "etymology": "Beekes(EDG)는 PIE 처격 전치사 *en('안에')에서 유래한 것으로 보며, 인도유럽어족 전반에 걸쳐 가장 안정적으로 보존된 형태 중 하나다. 산스크리트어 án('~위에, ~에'), 라틴어 in('~안에')과 정확히 일치하는 동계어다. 그리스어 내부에서 여격 지배 전치사로 통사적 지위가 고정되었다. 현대 그리스어에서도 se(σε) 혹은 고전 형태의 잔재로서 공간적 위치를 나타내는 핵심 전치사 계보로 이어져 있다."
            },
            {
                "g": "λεχέεσσι",
                "pos": "명사",
                "lemma": "λέχος, -εος, τό",
                "parse": "pl.dat.n.",
                "gloss_kr": "침상들에, 평상에",
                "gloss_en": "on beds, couches",
                "syntax": "LFG f-구조에서 전치사 ἐν의 목적어 OBJ 기능을 수행하며, [PRED 'λέχος', CASE dat, θ-ROLE LOCATIVE]로 배정된다. 생성문법적으로 PP 내부의 NP 자리에서 전치사의 여격 지배를 받는다. 호메로스 방언 특유의 복수 여격 이형태로서 형태론적 특이성을 보인다.",
                "background": "λεχέεσσι는 영웅의 시신을 고정하여 뉘인 격식 있는 평상이나 침대를 뜻한다. 전쟁터의 찬 바닥이 아니라 궁궐 내의 정교한 침상 위에 누움으로써, 비참한 죽음 속에서도 최소한의 영웅적 품위와 장례의례가 회복되고 있음을 상징한다. 이 침상은 슬픔의 공간적 중심축이다.",
                "etymology": "Beekes(EDG)는 PIE 어근 *legh-('눕다', e급 어간, cf. 그리스어 λέγομαι, 영어 lie)에서 유래한 중성 명사로 분석한다. 동계어로 고대 고지독일어 ligen('눕다'), 라틴어 lectus('침대') 등이 있다. 음운론적으로 호메로с 방언 특유의 -εεσσι 형태소 접미사에 따른 이중모음 및 자음 교체(leh- -> lehes-)를 겪었다. 현대 그리스어에는 일상 명사로 남아있지 않으나 고전문학 연구 및 인접 어휘로 흔적이 전해진다."
            },
            {
                "g": "θέσαν",
                "pos": "동사",
                "lemma": "τίθημι",
                "parse": "3rd.pl.aor.ind.act.",
                "gloss_kr": "눕혔다, 놓았다",
                "gloss_en": "they placed, laid",
                "principalParts": "τίθημι – θήσω – ἔθηκα – τέθηκα – τέθειμαι – ἐτέθην",
                "syntax": "LFG f-구조상 주절의 PRED이며, [PRED 'τίθημι<SUBJ,OBJ,OBL>', SUBJ [PRO], OBJ [PRED 'τὸν', CASE acc], OBL [PP]] 형태로 3항 논항 구조를 실현한다. 생성문법의 V-to-T 이동에 따라 아오이스트 어간의 형태적 특징을 반영하며, 시신을 침대 위에 안치하는 물리적 전이를 통사적으로 투사한다: [vP θέσαν [VP t ]]. θ-역할 배정에서 주어는 안치하는 자, 목적어는 안치되는 시신이다.",
                "background": "θέσαν은 영웅의 육신을 침상 위에 조심스럽게 내려놓는 장례의 가장 경건하고 중심적인 행동을 묘사한다. 거친 전투와 수레 이동이 끝나고 마침내 정적인 안식의 상태로 이행하는 결정적 순간이다. 이 동작을 기점으로 트로이아의 본격적인 애도 의식이 시작된다.",
                "etymology": "Beekes(EDG)와 Chantraine(DELG)은 PIE 중복 어근 *dheH₁-('놓다, 두다', e급 어간에 후두음 h₁ 포함)에서 유래한 것으로 본다. 동계어로 산스크리트어 dádhāti('놓다, 세우다'), 영어 do(어원적 조상 관계) 등이 있다. 음운론적으로 아오이스트형에서 접두어 생략 및 어간의 모음 교체와 자음 변동을 거쳤다. 현대 그리스어의 theto(θέτω / θέτω '놓다, 정하다') 및 수많은 합성어의 기저가 되는 핵심 동사 유산이다."
            },
            {
                "g": "παρὰ",
                "pos": "전치사",
                "lemma": "παρά",
                "parse": "prep.",
                "gloss_kr": "곁에, ~의 곁에",
                "gloss_en": "beside, near",
                "syntax": "LFG f-구조 상 여격 지배를 통해 위치를 나타내는 PRED-PREP으로 기능하며, [PRED 'παρά<OBJ>', OBJ [PRED 'ἀοιδοὺς', CASE acc (또는 문맥상 장소/여격 연동)]] 형태로 분석된다. 생성문법적으로는 PP의 핵으로 투사되어 인접한 공간적 관계를 규정한다. 화용론적으로 침대와 아오이드(악사)들의 물리적 근접성을 시각화한다.",
                "background": "παρὰ는 시신이 누워 있는 침상 바로 곁에 애도자들을 배치하는 공간적 배치를 그린다. 죽은 자와 슬픔을 노래하는 이들 사이의 거리가 밀착됨으로써, 음악과 비극이 혼연일체가 되는 장례의 분위기를 고조시킨다. 공간의 밀도가 곧 감정의 밀도를 대변한다.",
                "etymology": "Beekes(EDG)는 PIE 전치사/부사적 어근 *para('~곁에, 멀리')에서 유래한 것으로 분석하며, 공간적 측면 이동을 나타낸다. 동계어로 산스크리트어 para('저편의, 다른'), 고대 고지독일어 fara('앞으로') 등이 있다. 그리스어 내부에서 속격·여격·대격과 결합하는 다면적 전치사로 통사적 확장을 겪었다. 현대 그리스어에서도 para(παρά)로서 다양한 관용구 및 전치사적 용법으로 건재하게 쓰인다."
            },
            {
                "g": "δὲ",
                "pos": "접속사",
                "lemma": "δέ",
                "parse": "coord.conj.",
                "gloss_kr": "그리고, 또",
                "gloss_en": "and",
                "syntax": "LFG f-구조 상 앞서 서술된 안치 행위와 아오이드 배치를 연결하는 대등 접속사로 기능하며, [COORD-REL coord] 자질을 가진다. 생성문법적으로 좌표 구조의 통사적 결합을 매개한다. 화용론적으로 장례 절차의 연속적 추가를 알리는 표지다.",
                "background": "δὲ는 시신을 눕히는 물리적 안치 작업에 이어 곧바로 애도 음악을 담당할 악사들을 그 곁에 앉히는 두 번째 장례의례 행위를 대등하게 엮어낸다. 의식이 한 치의 오차 없이 체계적으로 확장되고 있음을 보여준다.",
                "etymology": "Chantraine(DELG)은 후행 대등 접속사로 분류하며 앞선 행들의 'δὲ'와 동일한 어원적 계보를 갖는다. 그리스어 내부의 통사적 고착화를 거쳤다. 고전문학 전반에서 문장 연쇄의 표준 수단이다. 현대 그리스어에는 직접 생존하지 않는다."
            },
            {
                "g": "εἷσαν",
                "pos": "동사",
                "lemma": "ἱζάνω / ἕζομαι",
                "parse": "3rd.pl.aor.ind.act.",
                "gloss_kr": "앉혔다",
                "gloss_en": "they made to sit, seated",
                "principalParts": "ἱζάνω – ἱζήσω – εἷσα / ἵζησα – (미상) – (미상) – (미상)",
                "syntax": "LFG f-구조상 후행 절의 PRED이며, [PRED 'ἕζομαι<SUBJ,OBJ>', SUBJ [PRO], OBJ [PRED 'ἀοιδοὺς', CASE acc, θ-ROLE PATIENT]] 형태로 목적어를 사역적으로 지배한다. 생성문법적으로 사역적 의미를 갖는 아오이스트형 동사로서 목적어 NP를 격 지배한다: [vP εἷσαν [VP ἀοιδοὺς ]]. θ-역할 배정에서 주어는 앉히는 자(주관자), 목적어는 앉게 되는 자(아오이드들)가 된다.",
                "background": "εἷσαν은 시신을 둘러싸고 본격적인 비극적 조가(Threnos)를 부를 프로 악사들과 애도자들을 침상 곁에 자리를 잡게 만드는 의례적 배치 행위다. 영웅의 죽음에 영혼을 울리는 음악적 애도가 더해지며 장례는 종교적·예술적 차원으로 격상된다. 이 배치는 트로이아 전쟁 서사의 가장 처연한 음악적 국면을 예고한다.",
                "etymology": "Beekes(EDG)와 Chantraine(DELG)은 PIE 어근 *sed-('앉다', e급 어간, cf. 그리스어 ἕζομαι, 라틴어 sedēre, 영어 sit)에서 유래한 사역적 파생 형태 또는 아오이스트 1형/동계어 형태로 분석한다. 동계어로 산스크리트어 sádati('앉다') 등이 있다. 음운론적으로 접두 기식음과 아오이스트 모음 변동을 거쳤다. 현대 그리스어에는 직접 고전형태가 남아있지 않으나 관련 파생 명사·어근들이 언어 전반의 '앉다' 계열 어휘에 깊이 스며 있다."
            },
            {
                "g": "ἀοιδοὺς",
                "pos": "명사",
                "lemma": "ἀοιδός, ὁ",
                "parse": "pl.acc.m.",
                "gloss_kr": "아오이드들을, 노래하는 이들을, 악사들을",
                "gloss_en": "singers, bards, minstrels",
                "syntax": "LFG f-구조에서 동사 εἷσαν의 직접목적어 OBJ 기능을 수행하며, [PRED 'ἀοιδός', CASE acc, θ-ROLE PATIENT]로 표상된다. 생성문법적으로 VP 내부의 목적어 자리에서 대격 격 자질을 검증받는다. 정보구조상 장례식의 새로운 국면을 이끌어갈 행위자로서 초점의 중심에 선다.",
                "background": "ἀοιδοὺς는 영웅의 죽음을 기리며 전통적인 비극적 애도가(thrynos)를 선창하고 연주할 전문적인 서사시 가수이자 악사들을 가리킨다. 이들의 노래는 단순한 음악 행위가 아니라, 죽은 이의 영광을 역사와 기억 속에 영원히 각인시키는 성스러운 의례의 핵심이다. 시신 곁에 앉은 아오이드들의 모습은 일리아스 전체의 예술적 자기 반영성을 보여주는 상징적 장면이다.",
                "etymology": "Beekes(EDG)는 PIE 어근 *aeid- / *ide-('노래하다', cf. 그리스어 ἀείδω)에서 파생된 명사로, '노래하는 사람'을 뜻한다고 분석한다. 동계어로 산스크리트어 갹(gayati / 가야티) 계열 및 영어 ode, comedy 등의 어원적 배경이 된다. 음운론적으로 명사화 접미사와 호메로스 방언의 남성 복수 대격 어미 변화를 거쳤다. 현대 그리스어의 tragoúdi('노래') 등의 개념 계보와 간접적으로 연결되며 유럽 언어의 오페라(opera), 오디션(audition) 등의 어휘 속에서 그 고대적 유산이 살아 숨 쉬고 있다."
            }
        ]
    },
    {
        "ref": "Iliad 6.721",
        "trans": "애곡하는 이들을 이끄는 자들과, 그리고 슬픈 노래를",
        "words": [
            {
                "g": "θρήνων",
                "pos": "명사",
                "lemma": "θρῆνος, τοῦ",
                "parse": "pl.gen.m.",
                "gloss_kr": "곡소리, 애가",
                "gloss_en": "dirges, laments",
                "syntax": "LFG 관점에서 θρήνων은 속격 명사로서 후행하는 명사 ἐξάρχους의 한정 논항(modifier/complement) 기능을 수행하며, f-구조상 [PRED 'θρῆνος', CASE gen] 속성-값 행렬로 표시된다. 생성문법(GB/Minimalism) 분석에 따르면 이 속격 구문은 명사구 내에서 [NP [DP θρήνων] [N' ἐξάρχους ...]] 구조로 병합되며, 비대칭적 논항 구조 속에서 영웅의 죽음을 슬퍼하는 대상(objective genitive)의 θ-역할을 할당받는다. 레빈슨式 정보구조 관점에서 이 구는 청중의 주의를 환기하는 구정보 기반의 시각적·청각적 초점 영역을 형성한다.",
                "background": "θρῆνος는 고대 그리스 장례 의식에서 부르던 전문적인 애가(dirge)나 곡소리를 뜻하며, 일리아스 후반부 헥토르의 죽음 앞에서 트로이아 여성들이 부르는 비극적 합창의 서막을 이룬다. 이 단어는 단순한 감정적 탄식을 넘어, 죽은 자의 공헌을 기리고 공동체의 슬픔을 조직화하는 의례적 성격을 띤다. 호메로스 서사시 속에서 이 애곡의 주도권은 트로이아 여성들과 전문 애곡꾼들에게 부여되어 장례의 비장함을 극대화한다.",
                "etymology": "Beekes(EDG)는 PIE 재구형 *dʰres- 혹은 이와 유사한 음운 계열에서 유래했을 가능성을 언급하며, 지중해 기층 어휘일 가능성도 배제하지 않는다. Chantraine(DELG)은 동사 θρηνέω('곡하다, 슬퍼하다')와의 형태론적 파생 관계를 설명하며, 어근 확장형인 *-no- 접사가 결합하여 명사화된 것으로 분석한다. 고대 그리스어에서 이 명사는 비극과 서사시 전반에 걸쳐 죽음과 애도를 나타내는 핵심 어휘로 정착했다. 현대 그리스어에서는 θρήνος 형태로 살아남아 여전히 '비탄, 애가'를 뜻하는 문어체 및 고전적 표현으로 쓰인다."
            },
            {
                "g": "ἐξάρχους",
                "pos": "명사",
                "lemma": "ἔξαρχος, ὁ, ἡ",
                "parse": "pl.acc.m.",
                "gloss_kr": "선창자, 이끄는 자",
                "gloss_en": "leaders, initiators",
                "syntax": "LFG f-구조에서 ἐξάρχους는 문맥상 비정형 분사 또는 명사적 목적어로 기능하며, [PRED 'ἔξαρχος', CASE acc, θ-ROLE PATIENT]로 분석된다. 생성문법적으로 이 단어는 등위접속사 oἵ τε에 의해 이끌리는 관계절 내부의 목적어 NP로서, V' 투영 속에서 동사적 의미를 내포한 명사구로 이동하거나 기저 위치에 배치된다. 통사적 격 지배 관점에서 목적격 acc는 선행하는 분사나 문맥의 지배항으로부터 구조적 격(structural case)을 부여받는다.",
                "background": "ἔξαρχος는 합창이나 애곡의 선창자(leader)를 가리키며, 여러 사람이 함께 슬픔을 나누고 곡할 때 그 순서와 가사를 이끄는 중추적 역할을 맡은 인물을 지칭한다. 헥토르의 시신 앞에서 이들이 애곡을 선창하는 장면은 트로이아 성 전체가 공감하는 집단적 비극의 규모를 시각적으로 보여준다. 호메로스 서사시에서 장례 의례의 절차와 음악적 요소가 어떻게 조직되었는지를 엿볼 수 있는 대목이다.",
                "etymology": "LSJ와 Chantraine(DELG)에 따르면, 이 단어는 '밖으로'를 뜻하는 전치사/부사 ἐξ와 '시작하다, 지배하다'를 뜻하는 어근 ἄρχω가 결합한 파생어이다. PIE 재구형 *h₁eks-와 *h₂erk-('시작하다, 다스리다')의 합성으로 볼 수 있으며, '앞서서 이끌어 시작하는 자'라는 원뜻을 지닌다. 고대 그리스 종교 의례에서 찬가를 선창하는 직임명으로 쓰였으며, 현대 그리스어 ἑξάρχεια 등 지명이나 교회 용어의 어원으로도 흔적이 남아 있다."
            },
            {
                "g": "οἵ",
                "pos": "대명사",
                "lemma": "ὅς, ἥ, ὅ",
                "parse": "pl.nom.m.",
                "gloss_kr": "그들은(관계대명사)",
                "gloss_en": "who, they",
                "syntax": "LFG 관점에서 oἵ는 관계절의 주어 SUBJ 기능을 수행하며, [PRED 'pro', SUBJ_OF ἐθρήνεον, CASE nom]으로 속성-값 행렬에 나타난다. 생성문법의 결속 이론(Binding Theory)에 따르면 oἵ는 C 자리에 위치한 연산자에 의해 결속되는 관계대명사로, [CP oἵᵢ [C' ... [TP tᵢ ἐθρήνεον]]]과 같은 이동 및 흔적 관계로 분석된다. 정보구조상 이 대명사는 앞서 언급된 선행사(ἐξάρχους)를 다시 가리키며 담화 연속성(topic continuity)을 유지한다.",
                "background": "여기서 사용된 관계대명사는 앞서 등장한 애곡의 선창자들을 한층 더 구체적으로 지칭하며 시적 서술의 초점을 좁히는 역할을 한다. 호메로스 서사시는 이러한 대명사적 장치를 통해 복잡한 군중의 움직임 속에서도 개별 그룹의 행동을 입체적으로 묘사한다. 비극적 장례의 현장에서 이들이 수행하는 반복적 행위는 서사의 긴장감을 고조시킨다.",
                "etymology": "Beekes(EDG)와 Chantraine(DELG)에 따르면, 이 형태는 PIE 지시/관계대명사 어근 *yo-에서 직통으로 유래한 그리스어 지시·관계대명사 주격 복수 남성형이다. 인도유럽어족 전반에 걸쳐 공통으로 나타나는 대명사계 어간이며, 산스크리트어 yaḥ 및 라틴어 qui의 선행형과 동계 관계에 있다. 고대 그리스어 역사 전반을 거쳐 한정사 및 관계대명사로 문법화되었으며, 후대 그리스어에서는 정관사 시스템의 모태가 되었다."
            },
            {
                "g": "τε",
                "pos": "접속사",
                "lemma": "τε",
                "parse": "coord.conj.",
                "gloss_kr": "그리고",
                "gloss_en": "and",
                "syntax": "LFG f-구조에서 τε는 두 개의 절이나 성분을 긴밀하게 연결하는 등위접속사(coordinating conjunction)로 기능하며, [COORDS <...>] 구조 속에서 결합 자질을 부여한다. 생성문법적으로 τε는 관사나 대명사, 혹은 구의 두 번째 자리(Wackernagel's law에 준하는 위치)에 클리틱(clitic) 형태로 부착되어 상위 범주에 병합되는 접어(clitic)로 분석된다. 통사적 대칭성을 보장하며 구구조의 균형을 맞춘다.",
                "background": "호메로스 시가에서 τε는 단어와 단어, 혹은 절과 절을 밀접하게 엮어주는 핵심적인 연결사로, 서사의 호흡을 조절하고 구전 서사시 특유의 리듬감을 형성하는 데 기여한다. 이 접속사를 통해 선창자들의 행동과 이어지는 여성들의 반응이 하나의 유기적인 장면으로 통합된다. 서사시의 전통적 수사 기법을 보여주는 전형적인 요소이다.",
                "etymology": "Chantraine(DELG)과 LSJ에 따르면, PIE 재구형 *kʷe('그리고')에서 유래한 유서 깊은 enclitic(접어) 접속사이다. 라틴어 -que, 산스크리트어 ca 등과 완벽한 음운론적·의미론적 동계 관계를 형성한다. 그리스어 역사 속에서 후대 산문으로 갈수록 용법이 축소되고 시어나 격식체 표현으로 제한되는 형태론적 변화를 겪었다. 현대 그리스어에는 직접적인 일상 형태가 남아 있지 않고 고전 문헌 연구를 통해서만 확인된다."
            },
            {
                "g": "στομόεσσαν",
                "pos": "형용사",
                "lemma": "στομόεις, στομόεσσα, στομόεν",
                "parse": "sg.acc.f.",
                "gloss_kr": "소리 높인, 신음하는",
                "gloss_en": "lamenting, groaning",
                "syntax": "LFG 관점에서 στομόεσσαν은 형용사로서 수식받는 명사 ἀοιδήν의 f-구조 안에서 ADJUNCT 혹은 N' 속성의 수식어 기능을 하며, [PRED 'στομόεις', CASE acc, MOD ἀοιδήν]으로 표시된다. 생성문법적으로 이 형용사는 명사구 내부의 [NP [AP στομόεσσαν] [N' ἀοιδήν]] 구조를 이루며, 성·수·격 일치(agreement) 제약에 따라 여성 단수 대격 자질을 공유한다. 수식어구로서 비극적 분위기를 증폭시키는 통사적 역할을 담당한다.",
                "background": "στομόεσσαν(입을 벌려 소리 내는, 혹은 신음과 탄식이 가득한)은 헥토르의 죽음 앞에 터져 나오는 애통한 곡소리의 성격을 묘사하는 매우 시적이고 감성적인 수식어다. 이 형용사는 단순한 노래가 아니라 비탄에 젖어 목놓아 우는 소리의 질감을 생생하게 전달한다. 일리아스의 비극적 정종을 시각과 청각을 동시에 자극하며 완성하는 핵심 어휘다.",
                "etymology": "Chantraine(DELG)은 이 단어가 '입, 주둥이'를 뜻하는 στόμα에서 파생된 형용사로, 접사 *-ϝεντ-(-oess-)가 결합하여 '무엇이 가득 찬, 무엇을 가진'이라는 뜻을 형성한다고 설명한다. PIE 기층 어근과 결합한 그리스어 고유의 파생 수법이며, 명사에서 형용사로의 의미 확장 과정을 보여준다. 후대 문헌에서는 드물게 쓰이는 호메로스 계열의 시어(poetic word)로 남았으며, 현대 그리스어 일상어에서는 직접 쓰이지 않고 고전 어휘로만 인용된다."
            },
            {
                "g": "ἀοιδὴν",
                "pos": "명사",
                "lemma": "ἀοιδή, τῆς",
                "parse": "sg.acc.f.",
                "gloss_kr": "노래, 곡조",
                "gloss_en": "song, chant",
                "syntax": "LFG f-구조에서 ἀοιδὴν은 동사적 의미를 내포한 명사구의 핵심으로서 [PRED 'ἀοιδή', CASE acc, θ-ROLE THEME]로 분석된다. 생성문법적으로 전행하는 분사나 동사적 행위의 대상이 되는 목적어 NP로서, [VP V [NP ... ἀοιδήν]] 통사 구조 내부에서 구조적 대격을 할당받는다. 레빈슨式 정보구조 관점에서 이 단어는 앞서 나온 θρήνων과 함께 청중의 이목을 집중시키는 핵심 정보 단위를 구성한다.",
                "background": "ἀοιδή는 본래 서사시나 찬가를 부르는 행위나 그 노래를 가리키지만, 이 맥락에서는 비탄에 찬 장례의 노래, 즉 애곡의 곡조를 의미한다. 영웅의 죽음이라는 거대한 사건 앞에서 시가와 애도가 하나로 융합되는 호메로스적 세계관을 상징한다. 슬픔이 단순한 울음이 아니라 예술적이고 전통적인 양식의 '노래'로 표현됨을 보여준다.",
                "etymology": "Beekes(EDG)와 Chantraine(DELG)은 이 단어가 '노래하다'를 뜻하는 동사 ἀείδω와 어원을 같이하며, PIE 재구형 *ေh₂eid-('노래하다, 소리치다')에서 파생된 명사형으로 본다. 후두음 h₂의 존재가 그리스어 모음 장음화에 영향을 준 음운론적 흔적이 확인된다. 산스크리트어 등과의 비교를 통해 인도유럽조어의 시가 전통과 직결된 어휘로 평가된다. 현대 그리스어에서는 아라곤어 계통이나 파생형으로 일부 시적 표현에 명맥을 이룬다."
            }
        ]
    },
    {
        "ref": "Iliad 6.722",
        "trans": "그들 중 어떤 이들은 곡을 하였고, 그 위에 여인들은 신음하였다.",
        "words": [
            {
                "g": "οἳ",
                "pos": "대명사",
                "lemma": "ὅς, ἥ, ὅ",
                "parse": "pl.nom.m.",
                "gloss_kr": "그들은(어떤 이들은)",
                "gloss_en": "they (some)",
                "syntax": "LFG f-구조에서 oἳ는 대조적 상관 구문(οἳ μὲν ... ἐπὶ δὲ ...)의 주어 SUBJ 기능을 맡으며, [PRED 'pro', SUBJ_OF ἐθρήνεον, CASE nom]으로 표시된다. 생성문법적으로 상관사 관점의 좌측 전위(left dislocation) 또는 주제화 구문으로 분석되며, [CP oἵᵢ [C' ... [TP tᵢ ἐθρήνεον]]] 구조에서 분할된 집단의 한쪽을 지칭한다. 통사적 격 지배상 주격 nom은 정동사의 일치 자질과 호응한다.",
                "background": "οἳ μὲν ... ἐπὶ δὲ ... 구문은 호메로스 서사시에서 군중이나 무리가 서로 다른 역할을 나누어 수행하는 대조적 장면을 묘사할 때 쓰는 전형적인 수사적 장치다. 여기서는 애곡을 선창하는 이들과 그에 맞춰 함께 통곡하는 여인들의 집단적 행동을 극적으로 대비시킨다. 비극적 현장의 입체감을 살리는 데 핵심적인 역할을 한다.",
                "etymology": "Chantraine(DELG)에 따르면, PIE 지시/관계대명사 어근 *yo-에서 유래한 남성 복수 주격 형태이다. 고대 그리스어에서 지시사 및 상관접속사의 역할을 겸하여 문법화되었다. 인도유럽어족의 공통 대명사 시스템 속에서 파생되었으며, 후대 그리스어 정관사 체계의 기원이 되는 어휘이다."
            },
            {
                "g": "μὲν",
                "pos": "소사",
                "lemma": "μέν",
                "parse": "part.",
                "gloss_kr": "한편으로는, 대개",
                "gloss_en": "on the one hand",
                "syntax": "LFG 관점에서 μέν은 담화 표지(discourse marker)이자 상관사(correlative particle)로서, f-구조상 [DISCOURS_FUNC correlative, PARTICLE μὲν]으로 분석된다. 생성문법적으로 이 소사는 통사 구구조의 두 번째 자리에 위치하는 전형적인 접어(clitic)로서 상위 범주에 부착되며, 후행하는 δὲ와의 대조적 쌍을 형성하는 통사적 결속망을 구축한다.",
                "background": "μὲν은 고대 그리스어 문장에서 두 가지 상반되거나 대조되는 대상을 짝지어 설명할 때 앞 절에 붙는 필수적인 담화 소사다. 이 문맥에서는 선창자들의 애곡 행위를 한쪽 축으로 설정하고, 이어지는 여인들의 탄식을 다른 쪽 축으로 연결하는 다리 역할을 한다. 서사의 리듬감과 논리적 구조를 단단히 엮어준다.",
                "etymology": "LSJ와 Chantraine(DELG)에 따르면, 이 단어는 강조를 나타내는 원시 인도유럽어 계통의 소사 *men에서 유래했다. 그리스어 내에서 독자적인 독립 어휘라기보다는 문장의 흐름을 조율하는 클리틱으로 고착되었다. 후대 산문과 시가 전반에서 대조 구조의 핵심 도구로 쓰였으며, 현대 그리스어에는 고전적 잔재로만 존재한다."
            },
            {
                "g": "ἄρ᾽",
                "pos": "소사",
                "lemma": "ἄρα",
                "parse": "part.",
                "gloss_kr": "과연, 그에 따라",
                "gloss_en": "then, accordingly",
                "syntax": "LFG f-구조에서 ἄρ᾽(ἄρα의 엘리전형)은 담화적 추론과 서사의 자연스러운 전개를 나타내는 부사적 소사로, [DISCOURS_FUNC connective, PARTICLE ἄρα]로 표시된다. 생성문법적으로 이 요소는 절 내부의 두 번째 위치에 오는 접어 제약(Wackernagel's law)을 따르며, [TP ἄρα [VP ...]] 형태로 통사적 제1위치를 피하여 클리틱 승격(clitic climbing/movement)을 겪는다.",
                "background": "ἄρα(엘리전되어 ἄρ᾽)는 앞선 상황으로부터 자연스럽게 귀결되는 인과적 혹은 서사적 연속성을 나타내는 호메로스 시가의 단골 소사다. 이 단어가 쓰임으로써 선창자들의 애곡이 우발적인 것이 아니라 헥토르의 죽음이라는 거대한 사건에 따른 필연적 반응임을 암시한다. 구전 시가의 흐름을 매끄럽게 이어주는 윤활유 역할을 한다.",
                "etymology": "Chantraine(DELG)은 이 소사의 어원을 명확히 확정하기 어렵다고 보면서도, 고대 그리스어의 본질적인 인과·연결 감각을 나타내는 오래된 파티클로 분류한다. 인도유럽어의 잔재로서 실질적 어근보다는 문법화된 담화 표지로 기능해 왔다. 고전 그리스어 전반에 걸쳐 널리 쓰였으나 후대로 갈수록 구어체에서는 소실되었다."
            },
            {
                "g": "ἐθρήνεον",
                "pos": "동사",
                "lemma": "θρηνέω",
                "parse": "3rd.pl.impf.ind.act.",
                "gloss_kr": "그들은 곡하고 있었다",
                "gloss_en": "they were lamenting",
                "principalParts": [
                    "θρηνέω",
                    "θρηνήσω",
                    "ἐθρήνησα",
                    "τεθρήνηκα",
                    "τεθρήνημαι",
                    "ἐθρηνήθην"
                ],
                "syntax": "LFG f-구조에서 ἐθρήνεον은 주어 oἵ를 논항으로 취하는 정동사 PRED이며, [PRED 'θρηνέω<SUBJ>', SUBJ [PRED 'pro', CASE nom], TENSE past, ASPECT impf]로 분석된다. 생성문법적으로 이 동사는 [TP T [vP SUBJ [VP V]]] 구조에서 미완료상(imperfective)을 나타내기 위해 T 핵으로 이동하며, 과거 시제와 3인칭 복수 어미가 결합한 형태론적 합성의 결과물이다. θ-역할 배정상 주어에게 행위자(agent) 역할을 부여한다.",
                "background": "미완료 시제(impf)인 ἐθρήνεον은 이들의 곡소리가 단발성으로 끝난 것이 아니라, 과거의 특정 시점부터 지속적으로 이어지고 있었음을 생생하게 보여준다. 헥토르의 시신을 둘러싼 트로이아 사람들 영웅의 죽음을 슬퍼하며 끊임없이 애가 부르던 현장의 분위기를 청각적으로 전달한다. 서사의 시간적 깊이를 더해주는 표현이다.",
                "etymology": "Chantraine(DELG)과 LSJ에 따르면, 이 동사는 명사 θρῆνος('곡소리, 애가')에서 파생된 데노미나티브(denominative verb, 명사 파생 동사)이다. PIE 기층 또는 그리스어 자체의 명사-동사 파생 규칙에 따라 '곡하다, 슬퍼하며 노래하다'라는 의미를 획득했다. 후대 그리스어에서도 비탄을 나타내는 주요 동사로 살아남았으며, 현대 그리스어 θρηνώ('슬퍼하다, 애도하다')로 직접 이어져 오늘날까지 쓰인다."
            },
            {
                "g": "ἐπὶ",
                "pos": "전치사",
                "lemma": "ἐπί",
                "parse": "prep.",
                "gloss_kr": "~에 덧붙여, 그 위에",
                "gloss_en": "upon, besides",
                "syntax": "LFG f-구조에서 ἐπὶ는 후행하는 대격 명사구 στενάχοντο(혹은 문맥상 함축된 목적어)와 결합하여 전치사구 OBL/ADJUNCT를 구성하며, [PRED 'ἐπί', OBJ [PRED '...']]로 분석된다. 생성문법적으로 이 전치사는 P 핵으로서 [PP [P' ἐπί [DP ...]]] 구구조를 형성하며, 공간적·상태적 첨가(addition)를 나타내는 통사적 관계를 맺는다. 호메로스 시가에서는 부사적 용법(tmesis 또는 독립 부사)으로도 기능하여 앞선 절의 행동에 다른 행동이 겹쳐 일어남을 나타낸다.",
                "background": "여기서 ἐπὶ는 단순한 공간적 위치(～ 위에)를 넘어, 앞서 남성 선창자들이 곡을 한 그 행위에 덧붙여 여성들도 동시에 신음하며 호응했다는 '동시성과 첨가'의 의미를 강하게 부여한다. 집단적 슬픔이 메아리처럼 겹겹이 쌓여가는 장례식장의 입체적 광경을 묘사하는 수사적 장치다.",
                "etymology": "Beekes(EDG)와 Chantraine(DELG)은 PIE 재구형 *epi('~위에, ~를 향하여')에서 유래한 전치사로 본다. 산스크리트어 api('또한, ~에')와 라틴어 어근 계통 등과 동계 관계를 이룬다. 그리스어 역사 속에서 공간, 시간, 원인, 첨가 등 다양한 의미로 확장되었으며, 현대 그리스어에서도 전치사 및 접두사(epi-)로 활발하게 살아남아 있다."
            },
            {
                "g": "δὲ",
                "pos": "접속사",
                "lemma": "δέ",
                "parse": "coord.conj.",
                "gloss_kr": "그리고, 반면에",
                "gloss_en": "and, on the other hand",
                "syntax": "LFG f-구조에서 δὲ는 앞서 등장한 μὲν과 대조를 이루며 두 절을 연결하는 등위접속사로, [COORDS <절1, 절2>] 구조를 매개한다. 생성문법적으로 이 소사는 Wackernagel의 법칙에 따라 절의 두 번째 위치에 클리틱 형태로 부착되며, [TP δὲ [VP ...]] 구조 속에서 문장 간의 통사적 전환과 균형을 잡아주는 핵심 접어 역할을 한다.",
                "background": "δὲ는 앞의 οἳ μὲν(선창자들이 곡을 한 것)과 후속 구절인 ἐπὶ δὲ στενάχοντο γυναῖκες(여인들이 신음한 것)를 매끄럽게 이어주면서도 두 집단의 행위를 대조·병치시키는 호메로스 시가의 핵심적인 통사·수사적 연결고리다. 이를 통해 서사가 정체되지 않고 입체적으로 확장된다.",
                "etymology": "Chantraine(DELG)에 따르면, PIE 인과·대조 소사 계통에서 유래한 유서 깊은 클리틱 접속사이다. 그리스어 전반에서 문장과 절을 연결하는 가장 보편적인 수단으로 자리 잡았다. 후대 그리스어 산문과 시가에서도 계속 사용되었으며, 현대 그리스어의 접속사 δέ(또는 고전적 잔재)의 기원이 된다."
            },
            {
                "g": "στενάχοντο",
                "pos": "동사",
                "lemma": "στενάχω",
                "parse": "3rd.pl.impf.ind.mid.(or pass.)",
                "gloss_kr": "그들은 신음하고 있었다",
                "gloss_en": "they were groaning, lamenting",
                "principalParts": [
                    "στενάχω",
                    "(미상)",
                    "(미상)",
                    "(미상)",
                    "(미상)",
                    "(미상)"
                ],
                "syntax": "LFG f-구조에서 στενάχοντο는 주어 γυναῖκες를 논항으로 취하는 정동사 PRED이며, [PRED 'στενάχω<SUBJ>', SUBJ [PRED 'γυναῖκες', CASE nom], TENSE past, ASPECT impf, VOICE mid/pass]로 분석된다. 생성문법적으로 이 동사는 중간태/수동태 어미(-οντο)를 취함으로써 주어 스스로가 비탄의 감정에 깊이 사로잡혀 신음하는 주체임을 나타내며, [TP T [vP γυναῖκες [VP v [V στενάχοντο]]]] 구조의 이동과 일치 과정을 거친다.",
                "background": "στενάχοντο는 묵직하고 고통스러운 숨소리와 함께 터져 나오는 탄식을 가리키는 시적 동사다. 미완료 시제(impf)와 중간태(mid)가 결합하여, 트로이아 여인들이 단순히 겉으로 소리만 낸 것이 아니라 자신들의 내면적 고통과 슬픔에 온전히 잠겨 깊은 신음을 흘리고 있었음을 생생하게 묘사한다.",
                "etymology": "Chantraine(DELG)과 LSJ에 따르면, 이 단어는 '숨쉬다, 좁다'를 뜻하는 어근에서 파생된 의성어 계통의 동사 *steno-에서 유래했다. 호메로스 시가에서 비탄과 신음을 나타내는 빈출 시어이며, 산스크리트어 stnahiti 등과 비교 음성학적 연관성이 논의된다. 후대 그리스어에서는 덜 쓰이거나 산문에서 비유적 표현으로 국한되었으며, 현대 그리스어에서는 고전 인용구에서만 찾아볼 수 있다."
            },
            {
                "g": "γυναῖκες",
                "pos": "명사",
                "lemma": "γυνή, γυναικός, ἡ",
                "parse": "pl.nom.f.",
                "gloss_kr": "여인들",
                "gloss_en": "women",
                "syntax": "LFG f-구조에서 γυναῖκες는 절의 주어 SUBJ 기능을 담당하며, [PRED 'γυνή', CASE nom, θ-ROLE AGENT]로 속성-값 행렬에 표시된다. 생성문법적으로 이 명사구는 [TP [DP γυναῖκες] [T' T [VP στενάχοντο]]] 구조에서 주격 nom을 할당받으며, 동사의 3인칭 복수 수와 일치(agreement)를 이룬다. 집단 주어로서 비극의 현장을 지탱하는 주체적 통사 단위를 이룬다.",
                "background": "γυναῖκες는 트로이아의 운명이 무너지는 순간 성 안에서 슬픔을 감당해야 하는 모든 여인들을 상징한다. 헥토르의 죽음은 단순히 한 영웅의 몰락이 아니라 트로이아 가정과 공동체 전체의 파멸을 의미하므로, 여인들의 이 집단적 신음은 작품 전체의 비극적 정점을 시각화하는 강력한 장치다.",
                "etymology": "Beekes(EDG)와 Chantraine(DELG)에 따르면, PIE 재구형 *gʷenh₂-('여인, 아내')에서 유래한 매우 오래된 인도유럽어 공통 어휘이다. 영어 queen, 고대 아일랜드어 ben 등과 동계 관계를 형성한다. 그리스어 내부에서 3변화 명사로 불규칙한 어간 교체(γυνή - γυναικός)를 겪었으며, 현대 그리스어 γυναίκα('여성, 아내')로 이어져 오늘날까지 가장 핵심적인 일상어로 살아남아 있다."
            }
        ]
    },
    {
        "ref": "Iliad 6.723",
        "trans": "그들 가운데 팔이 흰 안드라마케가 곡을 이끌었으니",
        "words": [
            {
                "g": "τῇσιν",
                "pos": "대명사",
                "lemma": "ὅς, ἥ, ὅ",
                "parse": "pl.dat.f.",
                "gloss_kr": "그 여인들 가운데서(관계대명사/지시사적 용법)",
                "gloss_en": "among them (the women)",
                "syntax": "LFG f-구조에서 τῇσιν(호메로스식 여격 복수 여성형)은 전치사적 의미를 겸하는 처소·참여의 여격(dative of place/association)으로서, [PRED 'pro', CASE dat, OBL LOCATIVE]로 분석된다. 생성문법적으로 이 대명사는 선행하는 여인들 집단과의 관계를 나타내는 보조사적 구를 형성하며, [PP [DP τῇσιν]] 구조 속에서 동사 ἦρχε의 논항 배경을 뒷받침한다.",
                "background": "τῇσιν은 앞서 언급된 '여인들(γυναῖκες)'을 다시 가리키며, 그 수많은 여인들 무리 '그 가운데서' 비로소 안드라마케가 앞으로 나서 통곡의 주도권을 잡는다는 서사적 전환점을 알린다. 집단적 슬픔에서 개별적이고 가장 극심한 비극의 주인공으로 시선의 초점이 이동하는 결정적 순간이다.",
                "etymology": "Chantraine(DELG)에 따르면, PIE 지시/관계대명사 어근에서 유래한 호메로스식 장모음 여격 복수 여성형태이다. 고대 그리스어 역사적 발전 과정에서 대명사 활용의 고유한 시적 변이형으로 정착했다. 후대 아티카 산문에서는 이 형태가 사라지고 일반적인 여격 복수형으로 대체되었으며, 현대 그리스어에는 직접 전승되지 않는다."
            },
            {
                "g": "δ᾽",
                "pos": "접속사",
                "lemma": "δέ",
                "parse": "coord.conj.",
                "gloss_kr": "그리고, 마침내",
                "gloss_en": "and, then",
                "syntax": "LFG f-구조에서 δ᾽(δέ의 엘리전형)는 절과 절을 연결하는 등위접속사로, [COORDS <절1, 절2>] 구조를 매개한다. 생성문법적으로 Wackernagel의 법칙에 따라 절의 두 번째 위치에 클리틱 형태로 부착되며, [TP δ᾽ [VP ...]] 구조 속에서 앞선 군중의 일반적 애곡 상황과 안드라마케의 개별적 선도 행위를 대조·전개시키는 통사적 가교 역할을 한다.",
                "background": "여기서 사용된 δ᾽는 단순한 순접을 넘어, 수많은 여인들의 일반적인 신음 소리 속에서 마침내 헥토르의 아내 안드라마케가 전면에 등장하여 비극의 선창을 주도한다는 극적인 장면 전환을 이끌어낸다. 서사의 긴장감을 최고조로 끌어올리는 수사적 연결고리다.",
                "etymology": "Chantraine(DELG)에 따르면, PIE 대조·연결 소사 계통에서 유래한 클리틱 접속사이다. 그리스어 전반에서 문장과 절을 연결하는 가장 핵심적인 수단으로 쓰였다. 후대 그리스어에서도 지속적으로 사용되었으며, 현대 그리스어의 문어적 잔재로 맥을 잇는다."
            },
            {
                "g": "Ἀνδρομάχη",
                "pos": "명사",
                "lemma": "Ἀνδρομάχη, τῆς, ἡ",
                "parse": "sg.nom.f.",
                "gloss_kr": "안드라마케",
                "gloss_en": "Andromache",
                "syntax": "LFG f-구조에서 Ἀνδρομάχη는 절의 주어 SUBJ 기능을 담당하며, [PRED 'Ἀνδρομάχη', CASE nom, θ-ROLE AGENT]로 속성-값 행렬에 표시된다. 생성문법적으로 이 고유명사 구는 [TP [DP Ἀνδρομάχη] [T' T [VP ἦρχε]]] 구조에서 주격 nom을 할당받고 정동사의 3인칭 단수 수와 일치한다. 서사적 주체로서 비극의 중심에 선 인물의 통사적 지위를 확립한다.",
                "background": "Ἀνδρομάχη는 트로이아의 위대한 수호자 헥토르의 아내이자, 남편을 잃고 홀로 남겨질 운명의 비극을 상징하는 인물이다. 그녀의 이름(ανδρος '남자' + μαχη '싸움' — 남성들 사이의 싸움에서 명성을 떨치거나 남과 겨루는 이의 뜻) 자체가 트로이아 전쟁이라는 거대한 폭력의 역사 속에 희생된 여인의 처지를 암시한다. 이 장면에서 그녀가 애곡을 주도하는 것은 작품 전체에서 가장 가슴 아픈 명장면 중 하나다.",
                "etymology": "Chantraine(DELG)과 LSJ에 따르면, '남성, 사람'을 뜻하는 ἀνήρ(속격 ἀνδρός)와 '싸움, 전투'를 뜻하는 μάχη의 합성 고유명사이다. 그리스 영웅 시대의 이름 짓기 전통(명예와 전투를 기념하는 방식)을 충실히 반영한다. 고대 그리스 신화와 비극에서 널리 쓰인 전형적인 이름이며, 현대 서구 언어권에서도 인명(Andromache)으로 그 흔적이 이어지고 있다."
            },
            {
                "g": "λευκώλενος",
                "pos": "형용사",
                "lemma": "λευκώλενος, -ον",
                "parse": "sg.nom.f.",
                "gloss_kr": "팔이 흰, 백옥 같은 팔의",
                "gloss_en": "white-armed",
                "syntax": "LFG f-구조에서 λευκώλεnos는 형용사로서 주어 명사 Ἀνδρομάχη를 수식하는 ADJUNCT 기능을 하며, [PRED 'λευκώλενος', CASE nom, MOD Ἀνδρομάχη]로 표시된다. 생성문법적으로 이 복합 형용사는 명사구 내부에서 [NP [AP λευκώλενος] [N' Ἀνδρομάχη]] 구조를 이루며, 여성 단수 주격 제약에 따라 주어와 성·수·격 일치를 이룬다. 인물의 귀족적 품격과 비극적 아름다움을 강조하는 수식어구다.",
                "background": "λευκώλενος는 호메로스 서사시에서 고귀한 신분의 여인들(헤라, 안드라마케 등)에게 예외 없이 붙는 대표적인 고정 수식어(epithet)다. 전쟁의 참혹함과 시신의 끔찍한 비참함 속에서도 안드라마케의 고결하고 기품 있는 아름다움을 극대화하여, 그녀가 겪는 비극적 상실의 아픔을 더욱 부각시키는 문학적 장치로 작용한다.",
                "etymology": "Chantraine(DELG)과 LSJ에 따르면, '희고 밝은'을 뜻하는 λευκός과 '팔, 팔뚝'을 뜻하는 ὠλένη의 합성어이다. PIE 재구형 *leuk-('빛나다')와 *h₃el-n-('팔꿈치, 팔')의 결합으로 형성되었다. 호메로스 시가 고유의 관용적 수식어로 정착했으며, 후대 서사시 및 문학어에 깊은 영향을 미쳤다. 현대 그리스어에서는 직접 쓰이지 않는 고전적 시어이다."
            },
            {
                "g": "ἦρχε",
                "pos": "동사",
                "lemma": "ἄρχω",
                "parse": "3rd.sg.impf.ind.act.",
                "gloss_kr": "시작하였다, 이끌었다",
                "gloss_en": "she began, led",
                "principalParts": [
                    "ἄρχω",
                    "ἄρξω",
                    "ἦρξα",
                    "ἦρχα",
                    "ἦργμαι",
                    "ἤρχθην"
                ],
                "syntax": "LFG f-구조에서 ἦρχε는 주어 Ἀνδρομάχη와 목적어 여격/속격 논항을 취하는 정동사 PRED이며, [PRED 'ἄρχω<SUBJ,OBJ>', SUBJ [PRED 'Ἀνδρομάχη', CASE nom], TENSE past, ASPECT impf]로 분석된다. 생성문법적으로 이 동사는 [TP T [vP 주어 [VP V object]]] 구조에서 미완료 시제(impf)를 실현하기 위해 T 핵으로 이동하며, 주어와 3인칭 단수 일치를 이룬다. 통사적 지배상 후행하는 여격 구문(γόοιο)을 지배하여 애곡의 시작을 주도함을 나타낸다.",
                "background": "미완료 시제인 ἦρχε는 안드라마케가 애곡의 선창을 시작하여 그 행동에 돌입했음과 동시에, 그 비탄의 행위가 앞으로 지속될 것임을 암시한다. 그녀가 수많은 여인들 앞에서 비극의 지휘자처럼 곡을 이끌어가는 모습은 트로이아 성 내부의 슬픔이 그녀를 중심으로 조직되고 있음을 보여준다.",
                "etymology": "Chantraine(DELG)과 LSJ에 따르면, PIE 재구형 *h₂erk-('시작하다, 지배하다, 으뜸이 되다')에서 유래한 고대 그리스어 핵심 동사이다. 산스크리트어 등과의 비교를 통해 인도유럽어족의 권력·시작 개념을 담은 어휘로 확인된다. 그리스어에서 '지배하다(ἄρχω)'와 '시작하다(ἀρχŏμαι)'의 양면적 의미로 발달했으며, 현대 그리스어 αρχίζω('시작하다') 및 다양한 정치·사회 용어(arch-, monarchy 등)의 어원이 되었다."
            },
            {
                "g": "γόοιο",
                "pos": "명사",
                "lemma": "γόος, τοῦ",
                "parse": "sg.gen.m. (Homeric form)",
                "gloss_kr": "곡소리, 비탄",
                "gloss_en": "of lamentation, wailing",
                "syntax": "LFG f-구조에서 γόοιο(호메로스식 장모음 속격 단수형)는 동사 ἦρχε가 요구하는 논항 혹은 목적어 역할을 담당하는 속격 명사로, [PRED 'γόος', CASE gen, θ-ROLE THEME]로 분석된다. 생성문법적으로 이 속격 구문은 [VP V [DP γόοιο]] 구조 내부에서 동사의 지배(government)를 받아 속격 격을 할당받으며, 통사적 목적어 기능을 수행한다.",
                "background": "γόος는 슬픔에 겨워 목놓아 우는 통곡과 비탄의 소리를 뜻하며, 앞서 나온 θρῆνος와 함께 호메로스 시가에서 장례 비극을 구성하는 가장 중요한 정서적 어휘 중 하나다. 안드라마케가 이 '비탄'의 선창을 시작했다는 것은, 그녀의 목소리가 온 트로이아 여인들의 곡소리를 촉발하는 도화선이 됨을 의미한다.",
                "etymology": "Chantraine(DELG)과 LSJ에 따르면, 이 단어는 '통곡하다, 슬퍼하다'를 뜻하는 동사 γοάω에서 파생된 명사형이다. 의성어 계통의 PIE 어근에서 출발한 것으로 추정되며, 슬픔의 소리를 직접 모방한 형태에서 명사화되었다. 호메로스 서사시 전반에서 장례 장면의 핵심 어휘로 쓰였으며, 후대 아티카 시가와 비극에서도 비탄을 상징하는 시어로 깊이 뿌리내렸다."
            }
        ]
    },
    {
        "ref": "Iliad 6.724",
        "trans": "살인자 헥토르의 머리를 두 손에 감싸 쥐고서:",
        "words": [
            {
                "g": "Ἕκτορος",
                "pos": "명사",
                "lemma": "Ἕκτωρ, Ἕκτορος, ὁ",
                "parse": "sg.gen.m.",
                "gloss_kr": "헥토르의",
                "gloss_en": "of Hector",
                "syntax": "LFG f-구조에서 Ἕκτορος는 속격 명사로서 후행하는 분사구/명사구와 결합하여 소유·관계 논항을 형성하며, [PRED 'Ἕκτωρ', CASE gen, θ-ROLE POSSESSOR/THEME]로 분석된다. 생성문법적으로 이 속격 구문은 [NP [DP Ἕκτορος] [N' κάρη ...]] 구구조 안에서 명사구 내 주어 혹은 소유격 위치에 병합되어 구조적 속격을 할당받는다.",
                "background": "Ἕκτορος는 트로이아의 가장 위대한 영웅이자 안드라마케의 남편인 헥토르를 지칭한다. 그의 이름이 속격으로 등장하며 아내인 안드라마케가 그의 시신, 특히 그 참혹하게 훼손된 머리를 품에 안는 비극적 장면으로 이어진다. 일리아스 후반부 비극의 정서적 중심에 헥토르의 죽음이 자리 잡고 있음을 상기시키는 핵심 인물이다.",
                "etymology": "Chantraine(DELG)과 LSJ에 따르면, 이 이름은 '붙잡다, 수호하다'를 뜻하는 동사 ἔχω의 어근에서 파생된 고유명사로, '성읍을 지키는 자, 굳건히 붙잡는 이'라는 뜻을 지닌다. PIE 재구형 *segh-('가지다, 붙잡다')와 연관이 깊다. 그리스 신화 속에서 트로이아의 유일한 방패와 같은 존재였던 그의 성격을 이름 자체에 담고 있으며, 유럽 문화권에서 영웅적 이름의 대명사로 전해 내려오고 있다."
            },
            {
                "g": "ἀνδροφόνοιο",
                "pos": "형용사",
                "lemma": "ἀνδροφόνος, -ον",
                "parse": "sg.gen.m. (Homeric long-vowel form)",
                "gloss_kr": "사람을 죽인, 살인자의",
                "gloss_en": "man-slaying, murderous",
                "syntax": "LFG f-구조에서 ἀνδροφόνοιο(호메로스식 장모음 속격형)는 앞서 나온 명사 Ἕκτορος를 수식하는 형용사 ADJUNCT로, [PRED 'ἀνδροφόνος', CASE gen, MOD Ἕκτορος]로 분석된다. 생성문법적으로 이 형용사는 명사구 내부에서 [NP [DP Ἕκτορος] [AP ἀνδροφόνοιο]] 구조를 이루며, 남성 단수 속격 제약에 따라 소유자 명사와 성·수·격 일치를 이룬다. 비극적 냉혹함을 강조하는 수식어구다.",
                "background": "ἀνδροφόνος(사람을 죽이는, 살인하는)는 헥토르가 아킬레우스에게 살해당해 차가운 시신이 된 상태, 혹은 그가 살아생전 수많은 그리스 장수들을 죽였던 전사로서의 면모를 역설적으로 드러내는 수식어다. 남편을 잃은 아내의 눈앞에 놓인 시신이 바로 그 '사람을 죽이던' 영웅의 껍데기에 불과하다는 사실이 이 단어를 통해 잔인할 정도로 대비된다.",
                "etymology": "Chantraine(DELG)과 LSJ에 따르면, '남성, 사람'을 뜻하는 ἀνήρ(속격 ἀνδρός)와 '죽이다, 살해하다'를 뜻하는 φόνος(또는 어근 θεν-/φον-)의 합성어이다. PIE 재구형 *h₂ner-와 *gʷhen-('치다, 죽이다')의 결합으로 형성되었다. 호메로스 시가에서 전사들의 잔혹성과 전투의 참상을 묘사하는 데 쓰인 전형적인 시적 복합어이며, 후대 비극 문학에서도 널리 활용되었다."
            },
            {
                "g": "κάρη",
                "pos": "명사",
                "lemma": "κάρη, τό (또는 κάρα)",
                "parse": "sg.acc.n. (or nom./acc.)",
                "gloss_kr": "머리를",
                "gloss_en": "head",
                "syntax": "LFG f-구조에서 κάρη는 분사 ἔχουσα의 목적어 OBJ 기능을 담당하며, [PRED 'κάρη', CASE acc, θ-ROLE PATIENT]로 속성-값 행렬에 표시된다. 생성문법적으로 이 명사구는 [VP V [DP κάρη]] 통사 구조 내에서 대격 acc를 할당받으며, 신체 부위를 나타내는 대격으로서 후행하는 처소구(μετὰ χερσὶν)와 결합해 전체적인 신체 접촉 양상을 완성한다.",
                "background": "κάρη(머리)는 인간의 생명과 정체성이 담긴 가장 핵심적인 신체 부위다. 안드라마케가 남편의 '머리'를 두 손에 감싸 쥐는 이 행위는, 아킬레우스에 의해 모욕당할 위기에 처한 남편의 존엄성을 아내가 마지막으로 보호하고 애도하는 가장 비장하고 직접적인 육체적 교감을 상징한다.",
                "etymology": "Beekes(EDG)와 Chantraine(DELG)에 따르면, PIE 재구형 *ḱr̥h₂-s-('머리, 뿔')에서 유래한 매우 오래된 인도유럽어 공통 어휘이다. 라틴어 cerebrum, 영어 horn 등과 동계 관계를 형성한다. 그리스어 내부에서 이기종 변화(heteroclitic declension)를 겪으며 다양한 형태(κάρη, κάρα, κράτος 등)로 분화했다. 현대 그리스어 κεφάλι('머리')의 어원적 조상에 해당하는 고전적 기초 어휘다."
            },
            {
                "g": "μετὰ",
                "pos": "전치사",
                "lemma": "μετά",
                "parse": "prep.",
                "gloss_kr": "~안에, ~사이에",
                "gloss_en": "among, in, with",
                "syntax": "LFG f-구조에서 μετὰ는 후행하는 여격 명사구 χερσὶν과 결합하여 도구·처소적 의미의 전치사구 OBL을 구성하며, [PRED 'μετά', OBJ [PRED 'χείρ', CASE dat]]로 분석된다. 생성문법적으로 이 전치사는 P 핵으로서 [PP [P' μετὰ [DP χερσὶν]]] 구구조를 형성하며, 신체 접촉과 포옹의 물리적 공간을 지정하는 통사적 관계를 맺는다.",
                "background": "μετὰ는 여격과 결합할 때 단순한 물리적 위치를 넘어 '～와 함께, ～속에 깊이 개입하여'라는 친밀하고도 절박한 결합을 뜻한다. 안드라마케가 남편의 머리를 두 '손' 사이에 감싸 쥐고 있는 그 신체적 밀착의 강도를 극대화하며, 부부 사이의 애절한 마지막 이별의 정감을 청중에게 전달한다.",
                "etymology": "Chantraine(DELG)과 LSJ에 따르면, PIE 재구형 *meta('~와 함께, 중간에')에서 유래한 전치사이다. 산스크리트어 mithás('상호간에') 등과 동계 관계를 이룬다. 그리스어에서 속격과 결합할 때는 '~와 함께', 대격과 결합할 때는 '~의 뒤를 이어'라는 의미로 분화 발달했다. 현대 그리스어에서도 전치사 및 접두사로 활발하게 살아남아 있다."
            },
            {
                "g": "χερσὶν",
                "pos": "명사",
                "lemma": "χείρ, χειρός, ἡ",
                "parse": "pl.dat.f. (Homeric movable-nu form)",
                "gloss_kr": "두 손으로",
                "gloss_en": "in hands",
                "syntax": "LFG f-구조에서 χερσὶν(움직이는 뉘를 동반한 호메로스식 여격 복수형)은 전치사 μετὰ의 목적어 논항 기능을 수행하며, [PRED 'χείρ', CASE dat, θ-ROLE INSTRUMENT/LOCATIVE]로 속성-값 행렬에 표시된다. 생성문법적으로 이 명사구는 [PP P [DP χερσὶν]] 구조 속에서 여격 dat을 할당받으며, 신체 도구적 수단과 처소를 동시에 나타내는 통사적 기능을 완수한다.",
                "background": "χείρ(손)은 인간의 행동과 감정을 가장 직접적으로 표현하는 신체 기관이다. 안드라마케가 자신의 두 손으로 헥토르의 머리를 감싸 쥔다는 묘사는, 남편의 주검을 온전히 품에 안고 그 온기와 비참함을 피부로 확인하는 가장 강렬하고 신체적인 슬픔의 표현이다. 시각적 생생함을 더해주는 핵심 어휘다.",
                "etymology": "Beekes(EDG)와 Chantraine(DELG)에 따르면, PIE 재구형 *ǵʰes-r-('손')에서 유래한 매우 오래된 인도유럽어 공통 어휘이다. 히타이트어 kessar 등과 동계 관계를 이룬다. 그리스어에서 3변화 명사로 불규칙한 어간 변화(χείρ - χειρός, 여격 복수 χερσί)를 겪었으며, 현대 그리스어 χέρι('손')로 이어져 오늘날까지 일상어의 중심을 차지한다."
            },
            {
                "g": "ἔχουσα",
                "pos": "분사",
                "lemma": "ἔχω",
                "parse": "pres.act.part.sg.nom.f.",
                "gloss_kr": "감싸 쥐고서, 붙들고서",
                "gloss_en": "holding, clasping",
                "principalParts": [
                    "ἔχω",
                    "ἕξω (또غت σχήσω)",
                    "ἔσχον",
                    "ἔσχηκα",
                    "ἔσχημαι",
                    "ἐσχέθην"
                ],
                "syntax": "LFG f-구조에서 ἔχουσα는 주어 Ἀνδρομάχη와 일치하는 부대 상황 분사(participle of attendant circumstance)로서 ADJUNCT 기능을 하며, [PRED 'ἔχω<SUBJ,OBJ>', SUBJ [PRED 'Ἀνδρομάχη', CASE nom], OBJ [PRED 'κάρη', CASE acc]]로 분석된다. 생성문법적으로 이 분사는 [TP [DP Ἀνδρομάχη] [VP [AP ἔχουσα ...]]] 구조 안에서 주어와 성·수·격(여성 단수 주격) 일치를 이루며, 주절의 동사와 동시적인 신체적 행위를 수식하는 부사절 역할을 한다.",
                "background": "현재분사 형태인 ἔχουσα는 안드라마케가 곡을 시작하는 그 순간에 머물지 않고, 남편의 머리를 두 손으로 움켜쥔 상태를 지속적으로 유지하고 있음을 시각적으로 각인시킨다. 그녀의 슬픔이 단순한 말뿐인 울음이 아니라, 주검과의 물리적인 접촉을 동반한 참혹한 현실 확인임을 보여주는 극적인 묘사다.",
                "etymology": "Chantraine(DELG)과 LSJ에 따르면, PIE 재구형 *segh-('가지다, 붙잡다, 유지하다')에서 유래한 고대 그리스어의 가장 기본적인 상태·소유 동사이다. 산스크리트어 sahate('정복하다, 견디다') 등과 완벽한 동계 관계를 이룬다. 그리스어에서 소유, 상태, 능력 등 수많은 파생 의미로 분화했으며, 현대 그리스어 ἔχω('가지다')로 이어져 일상 생활의 필수 동사로 쓰인다."
            }
        ]
    },
    {
        "ref": "Iliad 6.725",
        "trans": "\"내 남편이여, 그대는 젊어서 삶을 잃었으니, 그로 인해 나를 과부로",
        "words": [
            {
                "g": "ἆνερ",
                "pos": "명사",
                "lemma": "ἀνήρ, ἀνδρός, ὁ",
                "parse": "sg.voc.m. (Homeric vocative form)",
                "gloss_kr": "오 남편여, 오 이여",
                "gloss_en": "O husband, O man",
                "syntax": "LFG f-구조에서 ἆνερ(호메로스식 호격 형태)은 문장 구조 바깥 혹은 독립된 담화 기능인 호격(vocative)으로서, [PRED 'ἀνήρ', CASE voc, DISCOURSE_FUNC vocative]로 분석된다. 생성문법적으로 이 호격 명사는 통사적 구구조의 핵-논항 관계에 직접 포섭되지 않고 좌측 외곽의 [CP [DP ἆνερ] [C' ...]] 위치에 병합되어 화자의 직접적인 감정적 호소를 전달한다.",
                "background": "ἆνερ(원래 ἀνήρ의 호격 ἄνερ, 시적 장음화)는 안드라마케가 죽은 남편 헥토리를 향해 부르는 애절한 호칭이다. 이 호격 하나로 인해 서사의 객관적 묘사에서 안드라마케의 직접 화법으로 극적인 전환이 일어나며, 독자와 청중은 죽은 자를 향한 아내의 처절한 개인적 절규를 직접 마주하게 된다.",
                "etymology": "Beekes(EDG)와 Chantraine(DELG)에 따르면, PIE 재구형 *h₂ner-('남성, 영웅')에서 유래한 인도유럽어족 공통의 핵심 어휘이다. 산스크리트어 nar-, 알바니아어 njeri 등과 동계 관계를 형성한다. 그리스어에서 남성 일반을 뜻하는 동시에 '남편, 용사'의 의미로 깊이 발달했다. 현대 그리스어에서는 직접적인 일상 호격으로는 잘 쓰이지 않고 복합어나 고전적 어휘(ανδρεία 등)에 흔적이 남아 있다."
            },
            {
                "g": "ἀπ᾽",
                "pos": "전치사",
                "lemma": "ἀπό",
                "parse": "prep.",
                "gloss_kr": "~로부터, 통하여",
                "gloss_en": "from, away from",
                "syntax": "LFG f-구조에서 ἀπ᾽(ἀπό의 엘리전형)은 후행하는 명사 αἰῶνος와 결합하여 기원·박탈을 나타내는 전치사구 OBL을 구성하며, [PRED 'ἀπό', OBJ [PRED 'αἰών', CASE gen]]로 분석된다. 생성문법적으로 이 전치사는 P 핵으로서 [PP [P' ἀπ᾽ [DP αἰῶνος]]] 구구조를 형성하며, 삶이라는 소중한 본질로부터 영원히 멀어지는 박탈(ablative/separation)의 통사적 관계를 맺는다.",
                "background": "여기서 ἀπ᾽는 단순한 공간적 분리가 아니라, 남편이 누려야 할 삶과 목숨 그 자체로부터 강제로 차단되어 빼앗겼음을 나타내는 비극적 박탈의 의미를 담는다. 젊은 나이에 목숨을 잃은 남편의 처절한 운명과 그로 인해 모든 것을 잃어버린 아내의 시선이 이 전치사를 통해 응축된다.",
                "etymology": "Chantraine(DELG)과 LSJ에 따르면, PIE 재구형 *apo('~로부터, 멀리')에서 유래한 전치사이다. 산스크리트어 ápa, 라틴어 ab 등과 완벽한 동계 관계를 이룬다. 그리스어에서 탈격(ablative)적 의미를 지배하며 다양한 박탈·기원 표현의 뼈대를 이룬다. 현대 그리스어에서도 전치사 및 접두사(apo-)로 활발하게 살아남아 있다."
            },
            {
                "g": "αἰῶνος",
                "pos": "명사",
                "lemma": "αἰών, αἰῶνος, ὁ",
                "parse": "sg.gen.m.",
                "gloss_kr": "삶의, 생명의, 목숨의",
                "gloss_en": "of life, of one's lifetime, age",
                "syntax": "LFG f-구조에서 αἰῶνος는 전치사 ἀπ᾽의 목적어 논항 기능을 담당하는 속격 명사로, [PRED 'αἰών', CASE gen, θ-ROLE SOURCE/THEME]로 분석된다. 생성문법적으로 이 속격 구문은 [PP P [DP αἰῶνος]] 구조 내에서 전치사의 지배를 받아 속격 격을 할당받으며, 생명과 시간의 원천으로부터의 단절을 통사적으로 실현한다.",
                "background": "αἰών은 단순히 생물학적 목숨(βίος)을 넘어, 한 인간이 살아가는 일생의 시간과 그 생명력의 총체를 가리킨다. 헥토르가 젊은 나이에 이 αἰών을 통째로 박탈당했다는 안드라마케의 절규는, 그의 죽음이 단순히 신체적 죽음을 넘어 그의 온 인생과 미래가 통째로 도둑맞았음을 뜻하는 깊은 비극적 통찰을 담고 있다.",
                "etymology": "Beekes(EDG)와 Chantraine(DELG)에 따르면, PIE 재구형 *h₂eiw-('생명, 활력, 영원한 시간')에서 유래한 유서 깊은 어휘이다. 라틴어 aevum, 영어 aye/ever 등과 동계 관계를 이룬다. 그리스어에서 '개인의 생명'에서 출발해 '시대, 영원'으로 의미가 확장되었다. 현대 그리스어 αιώνας('세기, 시대') 및 영어 aeon의 어원이 되는 단어다."
            },
            {
                "g": "νέος",
                "pos": "형용사",
                "lemma": "νέος, νέα, νέον",
                "parse": "sg.nom.m.",
                "gloss_kr": "젊어서, 젊은 나이에",
                "gloss_en": "young",
                "syntax": "LFG f-구조에서 νέος는 형용사로서 주어 논항(혹은 주어 상태를 수식하는 술어적 보어/부사적 형용사) 기능을 하며, [PRED 'νέος', CASE nom, ADJUNCT_TO 주어]로 분석된다. 생성문법적으로 이 형용사는 [TP [DP ἆνερ] [VP [AP νέος] ὤλεο]] 구조 내에서 주어와 성·수·격(남성 단수 주격) 일치를 이루며, 남편이 요절한 비극적 정황을 시간적 상태 부사처럼 수식한다.",
                "background": "νέος(젊은)라는 수식어는 헥토르의 죽음이 지닌 가장 잔인한 비극성, 즉 꽃다운 청춘에 인생을 꽃피우지도 못하고 비참하게 쓰러진 요절(ἄωρος θάνατος)의 아픔을 가슴 저리게 전한다. 안드라마케가 남편의 시신 앞에서 가장 먼저 통탄하는 이유 중 하나가 바로 그의 젊음이며, 이는 트로이아 전체의 무너진 미래를 상징한다.",
                "etymology": "Beekes(EDG)와 Chantraine(DELG)에 따르면, PIE 재구형 *néwos('새로운, 젊은')에서 유래한 인도유럽어 공통의 핵심 어휘이다. 라틴어 novus, 산스크리트어 náva-, 영어 new 등과 완벽한 동계 관계를 이룬다. 그리스어에서 '새로운'과 '젊은'의 의미를 동시에 지니며 발달했다. 현대 그리스어 νέος('젊은, 새로운')로 이어져 오늘날까지 가장 활발하게 쓰이는 기본 어휘 중 하나다."
            },
            {
                "g": "ὤλεο",
                "pos": "동사",
                "lemma": "ὄλλυμι",
                "parse": "2nd.sg.aor.ind.mid. (Homeric unaugmented form)",
                "gloss_kr": "그대는 죽었구나, 사라졌구나",
                "gloss_en": "you perished, you died",
                "principalParts": [
                    "ὄλλυμι",
                    "ὀλέσω",
                    "ὤλεσα",
                    "ὀλώλεκα (또는 ὀλώλα)",
                    "(미상)",
                    "(미상)"
                ],
                "syntax": "LFG f-구조에서 ὤλεο(증가음이 생략된 호메로스식 부정과거 중간태 2인칭 단수형)는 주어이자 호격으로 불리는 남편을 향한 정동사 PRED이며, [PRED 'ὄλλυμι<SUBJ>', SUBJ [PRED 'ἆνερ', CASE voc], TENSE past, ASPECT aor, VOICE mid]로 분석된다. 생성문법적으로 이 동사는 [TP T [vP ἆνερ [VP v [V ὤλεο]]]] 구조에서 중간태(mid) 어미를 통해 주어가 죽음의 과정에 깊이 함몰되어 소멸했음을 나타낸다.",
                "background": "부정과거(aor) 중간태 ὤλεο는 남편 헥토르가 죽음에 이르러 완전히 파멸하고 사라져 버린 그 돌이킬 수 없는 역사적 사건의 완결성을 처절하게 드러낸다. 안드라마케가 직접 남편에게 건네는 이 비극적 선언은 그녀의 삶이 그 순간 함께 무너졌음을 알리는 가장 아픈 서사적 고백이다.",
                "etymology": "Chantraine(DELG)과 LSJ에 따르면, PIE 재구형 *h₃el-('파괴하다, 죽이다, 사라지다')에서 유래한 동사이다. 그리스어에서 능동태는 '~를 파괴하다', 중간태는 '죽다, 소멸하다, 망하다'의 의미로 정착했다. 호메로스 시가 전반에서 영웅들의 비참한 죽음을 묘사하는 데 핵심적으로 쓰였으며, 후대 그리스어 비극과 산문 문학에서도 소멸과 파멸을 뜻하는 대표적 동사로 남았다."
            },
            {
                "g": "κὰδ",
                "pos": "전치사/부사",
                "lemma": "κατά",
                "parse": "prep. (apocopated form κατά -> κάδ)",
                "gloss_kr": "내리, 아래로",
                "gloss_en": "down",
                "syntax": "LFG f-구조에서 κάδ(κατά의 자음 동화 및 단축형인 apocopated form)은 동사 ὤλεσας(혹은 문맥상 함축된 동사)와 결합하는 전치사적 전치사구/방향 부사로, [PRED 'κατά', DIRECTION down]으로 분석된다. 생성문법적으로 이 형태는 접어(clitic)나 전치사로서 후행하는 자음과 동화(assimilation: κατά -> κάδ)를 일으키며, 동사구 내부에서 방향성을 부여하는 통사적 전치사 핵으로 작용한다.",
                "background": "κατά가 단축된 형태인 κάδ는 호메로스 시가에서 전치사나 전치사적 부사로 쓰이며 동작의 방향이 아래로 향함을 강하게 시사한다. 여기서는 남편의 죽음이 아내인 자신을 내리 내리누르며 과부라는 비참한 신분으로 추락하게 만드는 수직적 하락의 이미지를 시각적으로 완성한다.",
                "etymology": "Chantraine(DELG)과 LSJ에 따르면, PIE 재구형 *kata('~아래로, ~에 대하여')에서 유래한 전치사이다. 시적 전통 속에서 음운론적 환경에 따라 ката가 κάτ, κάδ, κάπ 등으로 자음 동화(apocope)를 일으키는 호메로스 고유의 음운 현상을 보여준다. 그리스어 전체에서 수직적 하락과 전면적 분배를 나타내는 핵심 어휘의 뿌리이다."
            },
            {
                "g": "δέ",
                "pos": "접속사",
                "lemma": "δέ",
                "parse": "coord.conj.",
                "gloss_kr": "그리고, 그리하여",
                "gloss_en": "and, so",
                "syntax": "LFG f-구조에서 δέ는 앞선 절의 죽음의 사건과 그에 따른 결과적 상황을 연결하는 등위접속사로, [COORDS <절1, 절2>] 구조를 매개한다. 생성문법적으로 Wackernagel의 법칙에 따라 절의 두 번째 위치에 클리틱 형태로 부착되며, [TP δέ [VP ...]] 구조 속에서 헥토르의 죽음과 안드라마케가 과부가 된 현실을 인과적·대조적으로 엮어주는 통사적 고리 역할을 한다.",
                "background": "δέ는 남편의 요절이라는 비극적 사건(ὤλεο)과, 그 결과로 자신이 과부로 남겨지게 된 참담한 현실(χήρην)을 매끄럽게 이어주면서 이 모든 비극이 인과관계로 엮여 있음을 강조한다. 안드라마케의 절규 속에서 인물의 감정과 현실적 처지가 논리적이고도 비통하게 맞물리게 만드는 장치다.",
                "etymology": "Chantraine(DELG)에 따르면, PIE 인과·대조 소사 계통에서 유래한 클리틱 접속사이다. 그리스어 전반에서 문장과 절을 연결하는 가장 보편적인 수단이다. 후대 그리스어 산문과 시가에서도 계속 사용되었으며, 현대 그리스어의 접속사 계열에 고전적 흔적을 남겼다."
            },
            {
                "g": "με",
                "pos": "대명사",
                "lemma": "ἐγώ",
                "parse": "sg.acc.f. (personal pronoun)",
                "gloss_kr": "나를",
                "gloss_en": "me",
                "syntax": "LFG f-구조에서 με는 비인칭/서술 형용사적 보어의 대상이 되는 목적어 SUBJ/OBJ 기능을 수행하며, [PRED 'ἐγώ', CASE acc, θ-ROLE PATIENT/BENEFICIARY]로 속성-값 행렬에 표시된다. 생성문법적으로 이 대명사는 [TP [VP V [DP με] [AP χήρην]]] 구조 안에서 목적격 acc를 할당받으며, 헥토르의 죽음이라는 행위가 화자 자신에게 미친 직접적인 신분적 변화를 통사적으로 증언한다.",
                "background": "대명사 με가 문장의 전면에 목적어로 등장하면서, 남편의 죽음이 남 이야기나 거대한 역사적 사건에 그치지 않고 바로 '나 자신'을 이렇게 처참하게 무너뜨렸다는 지극히 개인적이고 뼈아픈 실존적 고백으로 전환된다. 비극의 규모가 거대한 전장에서 한 여인의 텅 빈 삶으로 수렴되는 순간이다.",
                "etymology": "Beekes(EDG)와 Chantraine(DELG)에 따르면, PIE 1인칭 대명사 재구형 *egóm의 사격 어간에서 유래한 인도유럽어 공통의 대명사이다. 산스크리트어 mām, 라틴어 me 등과 완벽한 동계 관계를 형성한다. 고대 그리스어 역사 전반에 걸쳐 1인칭 대명사의 대격 형태로 고정되어 문법화되었으며, 현대 그리스어 με('나를')로 이어져 오늘날까지 쓰인다."
            },
            {
                "g": "χήρην",
                "pos": "형용사",
                "lemma": "χήρος, χήρη, χήρον (또는 χήρος, -ον)",
                "parse": "sg.acc.f.",
                "gloss_kr": "과부로, 홀로 남겨진 상태로",
                "gloss_en": "widowed, bereft",
                "syntax": "LFG f-구조에서 χήρην은 목적격 보어(object complement) 기능을 담당하며, [PRED 'χήρος', CASE acc, XCOMP_OR_COMPLEMENT με]로 분석된다. 생성문법적으로 이 형용사는 [VP V [DP με] [AP χήρην]] 구조 내에서 목적어와 성·수·격(여성 단수 대격) 일치를 이루며, 남편을 잃은 결과로 안드라마케가 처하게 된 비참한 신분적 상태를 서술하는 통사적 술어 역할을 한다.",
                "background": "χήρην(과부인, 남겨진)은 이 대목의 모든 비극적 정서가 도달하는 종착점이다. 전쟁 속에서 남편을 잃은 아내가 겪어야 할 사회적·경제적·정서적 무력감과 고립무원의 처지가 이 한 단어에 응축되어 있다. 안드라마케의 이 절규는 트로이아 전쟁이 남긴 가장 처참한 상흔이 무엇인지를 전 세계에 고발하는 명장면을 완성한다.",
                "etymology": "Beekes(EDG)와 Chantraine(DELG)은 PIE 재구형 *gha-i-ro-('비어 있는, 결핍된, 홀로 남겨진')에서 유래한 어휘로 분석한다. 산스크리트어 hohira- 등과의 비교가 논의되며, '무언가 중요한 것이 결핍된 상태'를 원뜻으로 지닌다. 고대 그리스어에서 배우자를 잃은 과부를 뜻하는 전문 어휘로 굳어졌으며, 현대 그리스어 χήρα('과부')로 이어져 오늘날까지 생생하게 살아남아 있는 유서 깊은 어휘이다."
            }
        ]
    },
    {
        "ref": "Iliad 6.726",
        "trans": "너는 궁궐 안에 없구나. 아직 어린 철없는 아이가",
        "words": [
            {
                "g": "λείπεις",
                "pos": "동사",
                "lemma": "λείπω",
                "parse": "2nd.sg.pres.ind.act.",
                "principalParts": "λείπω – λείψω – ἔλιπον – λέλοιπα – λέλειμμαι – ἐλείφθην",
                "gloss_kr": "~에 없다, 떠나 있다",
                "gloss_en": "you are missing, you are left behind",
                "syntax": "LFG 관점에서 λείπεις는 2인칭 단수 주어를 취하는 주술동사이며, [PRED 'λείπω<SUBJ,OBL>', SUBJ [PRO], OBL [PRED 'μέγαρον', CASE dat]] 형태의 f-구조를 형성한다. 생성문법적으로 주어는 pro-drop에 의해 생략되었으며, 전치사구 locative 어군이 부사적 부가어로 VP를 수식한다. 레빈슨식 정보구조에서는 기존 화제인 안드로마케의 부재 상황을 진술하는 초점 중심 발화로 기능한다.",
                "background": "이 구절은 헥토르가 트로이아 성벽 위에서 아내 안드로마케와 작별한 뒤 급히 전장으로 향하는 맥락에서, 안드로마케가 남편의 부재를 한탄하며 어린 아들 아스티아낙스를 품에 안고 비극적 운명을 예감하는 장면에 해당한다. 호메로스 서사시에서 영웅의 사후 가족이 겪을 고난을 암시하는 대표적인 파토스적 순간이다.",
                "etymology": "PIE 재구형 *lei(k)w-('남기다, 떠나다')에 e급 어간이 반영되었으며, 후두음 직접 개입은 없다. 동계어로 라틴어 linquere, 고대 교회 슬라브어 lixati 등이 있다. 음운적으로 그라스만 법칙이나 그림 법칙의 적용을 받는 유기음 마찰 변화를 거쳤으며, 현대 그리스어에서는 λίπω 또는 관련 파생 어휘로 잔존한다. Chantraine(DELG)은 이 어근이 고대 인도유럽어군 전반에서 결핍과 이탈을 나타내는 핵심 동사군을 형성함을 입증한다."
            },
            {
                "g": "ἐν",
                "pos": "전치사",
                "lemma": "ἐν",
                "parse": "prep. (governing dat.)",
                "gloss_kr": "~안에",
                "gloss_en": "in",
                "syntax": "LFG에서 ἐν은 여격 명사구를 지배하는 전치사로 기능하며, [OBL-LOC [PRED 'ἐν', OBJ [PRED 'μέγαρον', CASE dat]]]로 f-구조에 통합된다. 생성문법적으로는 PP 진입부를 형성하며, 위치격 관계를 할당하는 핵으로 작용한다.",
                "background": "궁궐이라는 실내 공간적 배경을 한정하여 남편이 부재한 장소의 대조적 밀폐성을 강조하는 전치사구이다.",
                "etymology": "PIE 재구형 *en('안에')에서 유래하며, 라틴어 in, 영어 in과 직접 동계어이다. 형태적 변화 없이 그리스어군에서 위치 전치사로 고착되었으며, LSJ는 이 형태가 공간적 내포를 나타내는 가장 기본적인 전치사 중 하나임을 지적한다."
            },
            {
                "g": "μέγαροισι",
                "pos": "명사",
                "lemma": "μέγαρον, τοῦ",
                "parse": "pl.dat.n.",
                "gloss_kr": "궁궐, 커다란 방",
                "gloss_en": "in the halls",
                "syntax": "LFG f-구조에서 명사 μέγαρον은 전치사 ἐν의 지배를 받는 여격 장소 부가어(OBL-LOC) 논항으로 처리된다. c-구조상 PP 내부의 NP 핵을 담당하며, 복수 여격 형태는 궁궐의 여러 방과 넓은 공간 구조를 가리킨다.",
                "background": "미케네 시대 궁전 건축 양식의 중심인 메가론(megaron) 구조를 가리키며, 왕족의 거처이자 안전한 공간이었던 곳이 전쟁으로 인해 비어 있거나 파괴될 위기에 처했음을 보여준다.",
                "etymology": "Beekes(EDG)는 이 단어가 선그리스어(Pre-Greek) 기층 어휘에서 유래하였으며, 인도유럽어 어원설은 민간어원에 가깝다고 본다. 세부 음운 변동으로 접미사 -ar-가 개입하였으며, 현대 그리스어에서는 고전 시가 인용이나 고고학적 용어로만 제한적으로 쓰인다."
            },
            {
                "g": "πάϊς",
                "pos": "명사",
                "lemma": "παῖς, παιδός, ὁ/ἡ",
                "parse": "sg.nom.m.",
                "gloss_kr": "아이, 아들",
                "gloss_en": "child, son",
                "syntax": "LFG f-구조에서 πάϊς는 후행하는 주절의 주어 또는 독립된 명사구 술어 역할을 하며, [PRED 'παῖς', CASE nom, GENDER masculine] 자질을 갖는다. 생성문법적으로 [Spec, TP] 위치에 기저 병합되거나 전치된 명사구로 분석된다.",
                "background": "헥토르와 안드로마케의 어린 아들 아스티아낙스(스카만드리오스)를 지칭하며, 트로이아 함락 시 겪을 비참한 운명의 상징적 존재이다.",
                "etymology": "PIE 재구형 *péh₂uts('작은, 젊은')에서 파생된 어근에서 유래하며, 후두음 *h₂가 영급 상태에서 작용했다. 라틴어 puer와 동계어이며, Chantraine(DELG)은 연령 호칭에서 친족 관계로의 의미 전이가 일어났음을 설명한다. 현대 그리스어 παιδί로 이어져 일상어의 중심을 이룬다."
            },
            {
                "g": "δ᾽",
                "pos": "접속사",
                "lemma": "δέ",
                "parse": "coord.conj.",
                "gloss_kr": "그리고, 그러나",
                "gloss_en": "and, but",
                "syntax": "LFG 상에서 대등접속사(coord.conj.)로서 두 절을 연결하며, Wackernagel 법칙에 따라 문장 내 두 번째 자리에 위치하는 후치사적 성격을 띤다.",
                "background": "앞서 언급된 궁궐의 부재 상황과 현재 홀로 남겨진 어린 아이의 처지를 시적으로 대조·연결하는 역할을 한다.",
                "etymology": "PIE 재구형 *de('그리고, 나아가서')에서 유래하며, 그리스어 고유의 대등소사 체계 속에서 구절 간 균형을 잡는 기능을 담당한다. LSJ에 따르면 호메로스 시가에서 서사의 흐름을 부드럽게 이어주는 가장 흔한 연결사이다."
            },
            {
                "g": "ἔτι",
                "pos": "부사",
                "lemma": "ἔτι",
                "parse": "adv.",
                "gloss_kr": "여전히, 아직도",
                "gloss_en": "still, yet",
                "syntax": "LFG f-구조에서 시간적 양태를 한정하는 ADJUNCT로 작용하여 형용사 vήπιος의 상태가 지속됨을 수식한다.",
                "background": "아이의 철없고 무력한 상태가 현재 시점에서도 변함없음을 강조하여 다가올 비극의 무참함을 극대화한다.",
                "etymology": "PIE 재구형 *eti('넘어서, 게다가')에서 유래하며, 라틴어 et('그리고')와 고대 인도어 ati와 동계어이다. 음운적으로 시간 부사로 기능이 분화되었으며, 현대 그리스어 ἔτι는 고어체에 남고 보통 daha나 다른 형태가 쓰인다."
            },
            {
                "g": "νήπιος",
                "pos": "형용사",
                "lemma": "νήπιος, νηπία, νήπιον",
                "parse": "sg.nom.m.",
                "gloss_kr": "어린, 말을 못 하는, 철없는",
                "gloss_en": "infant, speechless, helpless",
                "syntax": "LFG에서 서술적 형용사로 주어 πάϊς를 수식하며, [PRED 'νήπιος', CASE nom, GENDER masculine] 자질을 공유한다.",
                "background": "말을 제대로 하지 못하는 유아기를 뜻하는 동시에, 다가오는 거대한 전쟁의 참화를 전혀 이해하지 못하는 무력한 상태를 뜻한다.",
                "etymology": "부정 접두사 *n-과 어원상 '말하다'를 뜻하는 어근이 결합한 형태로, '말을 할 줄 모르는 유아'를 뜻한다. Chantraine(DELG)은 이 단어가 호메로스 시가에서 지적 성숙의 결여나 무지함을 나타내는 전문적 형용사로 자주 쓰인다고 분석한다."
            },
            {
                "g": "αὔτως",
                "pos": "부사",
                "lemma": "αὔτως",
                "parse": "adv.",
                "gloss_kr": "그저 그대로, 무력하게",
                "gloss_en": "just so, in this helpless state",
                "syntax": "LFG f-구조에서 상태를 나타내는 부사적 부가어(ADJUNCT)로 기능하며, 아이의 무방비한 처지를 수식한다.",
                "background": "아이가 아무런 보호도 받지 못한 채 그저 무력하게 방치되어 있는 비참한 현실을 묘사한다.",
                "etymology": "지시 대명사 어근에 기반한 부사형으로, '그와 같이, 헛되이'라는 뜻을 지닌다. LSJ는 호메로스 시가에서 특별한 변화 없이 그대로 방치된 상태나 헛된 상황을 강조하는 부사로 분류한다."
            }
        ]
    },
    {
        "ref": "Iliad 6.727",
        "trans": "우리 두 사람이 낳은 불행한 아이인데, 나는 생각하지 않는다",
        "words": [
            {
                "g": "ὃν",
                "pos": "대명사",
                "lemma": "ὅς, ἥ, ὅ",
                "parse": "sg.acc.m.",
                "gloss_kr": "그를, 이 아이를",
                "gloss_en": "whom",
                "syntax": "LFG f-구조에서 관계대명사로서 선행사 πάϊς를 받아 종속절 내에서 목적어(OBJ) 기능을 수행하며, [PRED 'ὅς', CASE acc] 자질을 지닌다.",
                "background": "부모가 함께 낳았으나 지켜주지 못할 아이를 관계절 속에서 지칭하여 비극적 정감을 불러일으킨다.",
                "etymology": "PIE 지시·관계대명사 어근 *so/*to 계열에서 발달하였으며, 그리스어에서 관계대명사로 정착했다. 형태론적 변화는 아티카 및 호메로스 격변화 규칙을 따른다."
            },
            {
                "g": "τέκομεν",
                "pos": "동사",
                "lemma": "τίκτω",
                "parse": "1st.pl.aor.ind.act.",
                "principalParts": "τίκτω – τέξομαι – ἔτεκον – τέτοκα – τέτεγμαι – ἐτέχθην",
                "gloss_kr": "우리가 낳았다",
                "gloss_en": "we begot, we bore",
                "syntax": "LFG f-구조에서 [PRED 'τίκτω<SUBJ,OBJ>', SUBJ [PRO, PERSON 1st, NUMBER plural], OBJ [REL-PRON]] 형태의 1인칭 복수 정동사로 기능한다. 생성문법적으로 복수 주어(우리 두 사람)가 동사의 인칭 자질과 일치한다.",
                "background": "헥토르와 안드로마케가 부부로서 공동으로 이 아이를 낳았던 과거의 행복한 순간과 현재의 절망적 대비를 보여준다.",
                "etymology": "PIE 재구형 *tek-('낳다, 생산하다')에서 유래하며, 산스크리트어 takṣan과의 동계 관계가 논의된다. e급 어간과 제2부정과거 형태가 결합했으며, Chantraine(DELG)은 출산과 생명의 기원을 나타내는 핵심 동사로 평가한다."
            },
            {
                "g": "σύ",
                "pos": "대명사",
                "lemma": "σύ",
                "parse": "sg.nom.",
                "gloss_kr": "너는",
                "gloss_en": "you",
                "syntax": "LFG f-구조에서 주어 논항(SUBJ)의 강조형으로 기능하며, [PERSON 2nd, NUMBER singular, CASE nom] 자질을 갖는다.",
                "background": "죽음을 향해 나아가는 남편 헥토르를 직접 지칭하며 부부의 결속과 다가올 이별의 아픔을 호소한다.",
                "etymology": "PIE 재구형 *tuH('너')에서 유래하며, 라틴어 tu, 영어 thou와 직접 동계어이다. 음운적으로 고대 그리스어에서 숨소리 기식음과 함께 투(sy) 형태로 정착했다."
            },
            {
                "g": "τ᾽",
                "pos": "접속사",
                "lemma": "τε",
                "parse": "coord.conj.",
                "gloss_kr": "그리고",
                "gloss_en": "and",
                "syntax": "LFG 대등접속사로서 σύ와 ἐγώ를 연결하여 공동 주어 구문을 형성한다.",
                "background": "부부라는 공동체적 운명을 밀접하게 묶어주는 수사학적 접속사이다.",
                "etymology": "PIE 재구형 *kʷe('그리고')에서 유래하며, 라틴어 -que와 동계어이다. 후치사로 쓰이며 시적 운율과 구문 연결을 동시에 충족한다."
            },
            {
                "g": "ἐγώ",
                "pos": "대명사",
                "lemma": "ἐγώ",
                "parse": "sg.nom.",
                "gloss_kr": "나는",
                "gloss_en": "I",
                "syntax": "LFG f-구조에서 주어 논항(SUBJ)으로 기능하며, [PERSON 1st, NUMBER singular, CASE nom] 자질을 지닌다.",
                "background": "아이를 홀로 남겨두고 살아남아야 하는 어머니 안드로마케의 주체적 비극 인식을 드러낸다.",
                "etymology": "PIE 재구형 *éǵh₂-om('나')에서 유래하며, 라틴어 ego, 영어 I의 어원적 바탕이 된다."
            },
            {
                "g": "δυσάμμοροι",
                "pos": "형용사",
                "lemma": "δυσάμμορος, δυσάμμορον",
                "parse": "pl.nom.m.",
                "gloss_kr": "운 나쁜, 비참한",
                "gloss_en": "unhappy, wretched",
                "syntax": "LFG에서 주어 성분(σύ τε ἐγώ)을 수식하는 서술적 형용사로, [CASE nom, GENDER masculine/common, NUMBER plural] 자질을 갖는다.",
                "background": "신들의 저주와 운명의 소용돌이 속에서 비극적 결말을 맞이하는 부부의 처지를 압축적으로 표현한다.",
                "etymology": "접두사 δυσ-('나쁜, 불행한')와 명사 ἄμορος('몫이 없는, 운 없는')의 합성어로, 정당한 행복의 몫을 박탈당한 상태를 뜻한다. LSJ는 이 단어가 호메로스 시가에서 비극적 인물의 숙명을 묘사하는 전형적 수식어로 쓰인다고 밝힌다."
            },
            {
                "g": "οὐδέ",
                "pos": "부사",
                "lemma": "οὐδέ",
                "parse": "coord.conj.",
                "gloss_kr": "그리고 ~않다, 결코 ~않는다",
                "gloss_en": "and not, nor",
                "syntax": "LFG에서 문장 간 부정적 대등 연결을 수행하는 접속사/부사로 기능한다.",
                "background": "부모의 바람과 달리 아이가 정상적으로 성장하지 못할 것이라는 비관적 전망을 도입한다.",
                "etymology": "부정사 οὐ와 대등접속사 δέ의 결합형으로, 강한 부정과 전환의 의미를 동시에 갖는다."
            },
            {
                "g": "μιν",
                "pos": "대명사",
                "lemma": "μιν",
                "parse": "sg.acc.m.",
                "gloss_kr": "그를",
                "gloss_en": "him",
                "syntax": "LFG f-구조에서 동사 οἴω의 보충절 내 목적어(OBJ)로 기능하며 아이를 가리킨다.",
                "background": "비극의 중심에 놓인 어린 아들을 다시 한번 환기하여 청중의 동정을 유발한다.",
                "etymology": "호메로스 시가에서 주로 쓰이는 비인칭/3인칭 약형 대명사로, PIE 지시어 계열에서 발달했다."
            },
            {
                "g": "οἴω",
                "pos": "동사",
                "lemma": "οἴομαι",
                "parse": "1st.sg.pres.ind.act.",
                "principalParts": "οἴομαι – οἰήσομαι – (미상) – (미상) – ᾠήθην – (미상)",
                "gloss_kr": "나는 생각한다, 여기다",
                "gloss_en": "I think, I expect",
                "syntax": "LFG f-구조에서 [PRED 'οἴομαι<SUBJ,XCOMP>', SUBJ [PRO], XCOMP [INF]] 구조를 취하며 미래에 대한 주관적 확신 없는 추정을 나타낸다. 생성문법적으로 인식적 양태(epistemic modality) 핵을 형성한다.",
                "background": "어머니로서 아이의 장래에 대해 품고 있는 절망적 예감과 불길한 직관을 직접적으로 토로하는 동사이다.",
                "etymology": "PIE 재구형 어근에서 출발하여 그리스어 독자적 중간태/능동태 양상으로 발달했다. Chantraine(DELG)은 주관적 판단과 심리적 상태를 나타내는 대표적 시가 어휘로 분류한다."
            }
        ]
    },
    {
        "ref": "Iliad 6.728",
        "trans": "청춘에 도달할 것이라고; 그 전에 이 성읍이 완전히",
        "words": [
            {
                "g": "ἥβην",
                "pos": "명사",
                "lemma": "ἥβη, ἥβης, ἡ",
                "parse": "sg.acc.f.",
                "gloss_kr": "청춘, 젊은 시절",
                "gloss_en": "youth, manhood",
                "syntax": "LFG f-구조에서 부정사 ἵξεσθαι의 목적어(OBJ) 논항으로 기능하며, [PRED 'ἥβη', CASE acc, GENDER feminine] 자질을 갖는다.",
                "background": "인간으로서 가장 활기차고 명예로워야 할 청년기를 뜻하며, 아이가 그 시기에 도달하지 못할 것이라는 비극적 단절을 예고한다.",
                "etymology": "PIE 재구형 *yēgʷ-('활기차다, 강하다')에서 유래하며, 산스크리트어 yuván과 동계어이다. 음운적으로 모음 연장과 축약을 겪었으며, 현대 그리스어에서는 추상 명사나 역사적 용어로 남았다."
            },
            {
                "g": "ἵξεσθαι",
                "pos": "동사",
                "lemma": "ἱκνέομαι",
                "parse": "aor.mid.inf.",
                "principalParts": "ἱκνέομαι – ἵξομαι – ἱκόμην – ἶγμαι – (미상) – (미상)",
                "gloss_kr": "도달하다, 이르다",
                "gloss_en": "to reach, to arrive at",
                "syntax": "LFG f-구조에서 XCOMP로 기능하며, 주절 동사 οἴω의 보충절 안에서 미래의 도달 여부를 나타내는 부정사구 핵을 이룬다.",
                "background": "인생의 정점인 청춘이라는 목표 지점에 아이가 결코 도달하지 못하리라는 절망의 핵심을 표현한다.",
                "etymology": "PIE 재구형 *si-s-k-('도달하다, 가다')의 중복 현재 및 어근 형태에서 유래했다. Chantraine(DELG)은 공간적·시간적 도달을 모두 표현하는 대표적 동사로 분석한다."
            },
            {
                "g": "πρὶν",
                "pos": "접속사",
                "lemma": "πρίν",
                "parse": "conj.",
                "gloss_kr": "~전에",
                "gloss_en": "before",
                "syntax": "LFG에서 시간적 선후관계를 나타내는 접속사로 기능하여 주절의 사건이 종속절의 사건보다 먼저 일어남을 통사적으로 지배한다.",
                "background": "아이의 성장에 앞서 도시가 먼저 파괴될 것이라는 시간적 역전과 비극의 급박성을 나타낸다.",
                "etymology": "PIE 비교급 접미사가 결합된 부사/접속사 어근에서 유래했으며, 영어 prior의 어원적 배경과 통한다."
            },
            {
                "g": "γὰρ",
                "pos": "접속사",
                "lemma": "γάρ",
                "parse": "coord.conj.",
                "gloss_kr": "왜냐하면",
                "gloss_en": "for",
                "syntax": "LFG 인과적 접속사로 앞서 언급한 비극적 예감에 대한 논리적 근거와 설명을 제시하는 절을 이끈다.",
                "background": "성장의 불가능성에 대한 객관적이고 피할 수 없는 이유로서 트로이아의 함락을 제시한다.",
                "etymology": "호메로스 시가에서 원인과 설명을 도입하는 보편적 후치 접속사이다."
            },
            {
                "g": "πόλις",
                "pos": "명사",
                "lemma": "πόλις, πόλεως, ἡ",
                "parse": "sg.nom.f.",
                "gloss_kr": "도시, 성읍",
                "gloss_en": "city",
                "syntax": "LFG f-구조에서 종속절의 주어 논항(SUBJ)으로 기능하며, [PRED 'πόλις', CASE nom, GENDER feminine] 자질을 갖는다.",
                "background": "트로이아인들의 삶과 문명이 응축된 공간이자 보호막인 일리오스 성읍 전체를 가리킨다.",
                "etymology": "PIE 재구형 *ptolih₁-('요새, 도시')에서 유래하며, 미케네어 pi-ro2 등을 통해 선그리스어 및 인도유럽어 접점이 확인된다. Beekes(EDG)는 기층 언어 유입 가능성을 높게 본다."
            },
            {
                "g": "ἥδε",
                "pos": "대명사",
                "lemma": "ὅδε, ἥδε, τόδε",
                "parse": "sg.nom.f.",
                "gloss_kr": "이",
                "gloss_en": "this",
                "syntax": "LFG f-구조에서 한정사(DET)로 기능하여 명사 πόλις를 수식하며, [CASE nom, GENDER feminine] 자질을 공유한다.",
                "background": "화자가 눈앞에 두고 있는 트로이아 성벽과 도시를 직접 지칭하여 현장감을 부여한다.",
                "etymology": "지시사 어근에 접미사 -δε가 결합하여 근칭을 나타내는 그리스어 고유의 지시형용사이다."
            },
            {
                "g": "κατ᾽",
                "pos": "전치사",
                "lemma": "κατά",
                "parse": "prep. (governing gen.)",
                "gloss_kr": "~위에서 아래로, 철저히",
                "gloss_en": "down from, utterly",
                "syntax": "LFG에서 전치사구의 핵으로 기능하며, 숙어적 표현 'κατ᾽ ἄκρης'를 이루어 완전한 파괴를 뜻하는 부사적 부가어로 작용한다.",
                "background": "도시가 지상에서 완전히 지워져 기단부까지 무너져 내릴 것임을 묘사하는 전치사 구문이다.",
                "etymology": "PIE 재구형 *km-ta('아래로')에서 유래하며, 공간적 하강과 철저함을 나타낸다."
            },
            {
                "g": "ἄκρης",
                "pos": "형용사",
                "lemma": "ἄκρος, ἄκρα, ἄκρον",
                "parse": "sg.gen.f.",
                "gloss_kr": "꼭대기의, 맨 위의",
                "gloss_en": "top, highest point",
                "syntax": "LFG f-구조에서 전치사 κατά의 지배를 받는 속격 명사구 핵 또는 부사구의 구성 성분으로 기능한다.",
                "background": "성의 가장 높은 꼭대기부터 지반까지 남김없이 파괴됨을 뜻하는 관용구적 표현의 일부이다.",
                "etymology": "PIE 재구형 *h₂ék-ro-('날카로운, 꼭대기의')에서 유래하며, 라틴어 acer와 동계어이다."
            }
        ]
    },
    {
        "ref": "Iliad 6.729",
        "trans": "파괴될 것이기 때문이라. 참으로 너는 죽었나니, 도시의 수호자인",
        "words": [
            {
                "g": "πέρσεται",
                "pos": "동사",
                "lemma": "πέρθω",
                "parse": "3rd.sg.fut.ind.mid.",
                "principalParts": "πέρθω – πέρσω – ἔπερθα – πέπρθα – πέπρμαι – ἐπέρθην",
                "gloss_kr": "파괴될 것이다, 약탈될 것이다",
                "gloss_en": "will be sacked, will be destroyed",
                "syntax": "LFG f-구조에서 [PRED 'πέρθω<SUBJ>', SUBJ [πόλις]] 형태의 미래 중간태 동사로 수동적 의미를 띠며 종속절의 술어 핵을 담당한다.",
                "background": "트로이아가 그리스군에 의해 남김없이 약탈당하고 불타버릴 운명을 피할 수 없음을 선언하는 핵심 동사이다.",
                "etymology": "PIE 재구형 *pérth-('파괴하다, 약탈하다')에서 유래하며, 인도유럽어 파괴 서사시 어휘의 핵심을 이룬다. Chantraine(DELG)은 도시나 요새의 함락에 특화된 시적 동사로 분석한다."
            },
            {
                "g": "ἦ",
                "pos": "부사",
                "lemma": "ἦ",
                "parse": "adv.",
                "gloss_kr": "참으로, 실로",
                "gloss_en": "truly, indeed",
                "syntax": "LFG f-구조에서 양태 부사(ADJUNCT)로 기능하여 뒤따르는 진술의 확실성과 강한 감정적 확신을 부여한다.",
                "background": "남편 헥토르의 죽음이 이미 거스를 수 없는 현실이 되었음을 비통하게 단언하는 수사적 장치이다.",
                "etymology": "호메로스 시가에서 진실성과 감탄을 나타내는 오래된 양태 소사이다."
            },
            {
                "g": "γὰρ",
                "pos": "접속사",
                "lemma": "γάρ",
                "parse": "coord.conj.",
                "gloss_kr": "왜냐하면",
                "gloss_en": "for",
                "syntax": "LFG 인과 접속사로 앞선 도시 파괴의 원인이 수호자의 죽음에 있음을 논리적으로 연결한다.",
                "background": "도시가 파괴되는 근본 원인이 바로 그 방패막이였던 헥토르의 전사 때문임을 밝힌다.",
                "etymology": "그리스어 문장 구조에서 인과 관계를 긴밀히 엮어주는 후치 접속사이다."
            },
            {
                "g": "ὄλωλας",
                "pos": "동사",
                "lemma": "ὄλλυμι",
                "parse": "2nd.sg.perf.ind.act.",
                "principalParts": "ὄλλυμι – ὀλέσω – ὤλεσα – ὀλώλεχα / ὄλωλα – (미상) – (미상)",
                "gloss_kr": "너는 죽었다, 파멸하였다",
                "gloss_en": "you have perished, you are dead",
                "syntax": "LFG f-구조에서 완료상태를 나타내는 2인칭 단수 정동사이며, [PRED 'ὄλλυμι<SUBJ>', SUBJ [PRO, 2nd]] 형태로 과거의 죽음이 현재까지 지속되는 상태를 나타낸다.",
                "background": "헥토르의 죽음을 이미 확정된 사실로 받아들이며 아내가 느끼는 절망의 크기를 보여준다.",
                "etymology": "PIE 재구형 어근에서 유래하며, 파괴와 소멸을 뜻하는 동사군을 이룬다. 완료형의 독특한 음운 교체가 일어난다."
            },
            {
                "g": "ἐπίσκοπος",
                "pos": "명사",
                "lemma": "ἐπίσκοπος, ὁ",
                "parse": "sg.nom.m.",
                "gloss_kr": "수호자, 감시자",
                "gloss_en": "guardian, protector",
                "syntax": "LFG f-구조에서 동격 명사구 또는 보어(COMP)로 주어 헥토르를 수식하며, [PRED 'ἐπίσκοπος', CASE nom, GENDER masculine] 자질을 갖는다.",
                "background": "도시를 외세의 침략으로부터 밤낮으로 지켜내던 헥토르의 군사적·정치적 역할과 상징성을 대변하는 단어이다.",
                "etymology": "전치사 ἐπί와 '보다'를 뜻하는 어근 *skep-의 결합으로 이루어졌으며, '위에 서서 내려다보며 지키는 자'를 뜻한다. 나중에 기독교 용어인 비숍(bishop)의 어원이 되었다."
            },
            {
                "g": "ὅς",
                "pos": "대명사",
                "lemma": "ὅς, ἥ, ὅ",
                "parse": "sg.nom.m.",
                "gloss_kr": "그는",
                "gloss_en": "who",
                "syntax": "LFG f-구조에서 관계대명사로 선행사 ἐπίσκοπος를 받아 관계절의 주어(SUBJ) 기능을 수행한다.",
                "background": "도시를 지키던 수호자가 누구였는지를 구체적으로 설명하는 관계절을 이끈다.",
                "etymology": "PIE 지시·관계대명사 어근에서 발달한 그리스어 기본 관계대명사이다."
            },
            {
                "g": "τέ",
                "pos": "접속사",
                "lemma": "τε",
                "parse": "coord.conj.",
                "gloss_kr": "그리고",
                "gloss_en": "and",
                "syntax": "LFG 대등접속사로 헥토르가 수행한 여러 보호 역할(도시 방어 및 가족 부양)을 유기적으로 연결한다.",
                "background": "도시와 가족을 동시에 보호했던 헥토르의 다면적이고 절대적인 책임감을 강조한다.",
                "etymology": "PIE *kʷe에서 유래한 후치 접속사이다."
            },
            {
                "g": "μιν",
                "pos": "대명사",
                "lemma": "μιν",
                "parse": "sg.acc.f.",
                "gloss_kr": "그것을, 도시를",
                "gloss_en": "her, it",
                "syntax": "LFG f-구조에서 동사 ῥύσκευ의 목적어(OBJ)로 기능하며 여성 명사 πόλις를 가리킨다.",
                "background": "헥토르가 목숨 바쳐 지키고자 했던 대상인 트로이아 성읍을 지칭한다.",
                "etymology": "호메로스 시가에서 대상을 짧게 가리키는 고유의 약형 대명사이다."
            },
            {
                "g": "αὐτὴν",
                "pos": "대명사",
                "lemma": "αὐτός, αὐτή, αὐτό",
                "parse": "sg.acc.f.",
                "gloss_kr": "그 자체를, 바로 그 도시를",
                "gloss_en": "itself",
                "syntax": "LFG f-구조에서 대명사 강조형으로 목적어 μιν을 동치 수식하며, [CASE acc, GENDER feminine] 자질을 갖는다.",
                "background": "도시의 외곽뿐만 아니라 중심부와 그 생명력 자체를 온전히 지켜냈음을 강조한다.",
                "etymology": "PIE 강조 대명사 어근에서 발달했으며, 동일성과 강조를 나타내는 그리스어 핵심 형태이다."
            }
        ]
    },
    {
        "ref": "Iliad 6.730",
        "trans": "구해 주었으며, 정숙한 아내들과 철없는 아이들을 지켜 주었던.",
        "words": [
            {
                "g": "ῥύσκευ",
                "pos": "동사",
                "lemma": "ῥύομαι",
                "parse": "3rd.sg.impf.ind.mid. (iterative)",
                "principalParts": "ῥύομαι – ῥύσομαι – ἐρρυσάμην – (미상) – ἐρρύμαι – (미상)",
                "gloss_kr": "구해 주곤 했다, 지켜 주었다",
                "gloss_en": "used to rescue, protected",
                "syntax": "LFG f-구조에서 [PRED 'ῥύομαι<SUBJ,OBJ>', SUBJ [relative pronoun], OBJ [accusative]] 형태의 반과거 시제(반복 접사 -σκ- 포함) 술어이며, 과거에 지속적으로 도시를 구원하던 헥토르의 업적을 나타낸다.",
                "background": "평화롭던 시절 헥토르가 트로이아를 외세로부터 끊임없이 방어해 온 헌신적 모습을 회상하는 대목이다.",
                "etymology": "PIE 재구형 어근에서 유래하며, 구원과 보호를 뜻하는 시적 동사이다. 호메로스 특유의 반복 접사 -σκ-가 결합하여 과거의 습관적·반복적 보호 행위를 강조한다."
            },
            {
                "g": "ἔχες",
                "pos": "동사",
                "lemma": "ἔχω",
                "parse": "2nd.sg.impf.ind.act. (or 3rd pl.)",
                "principalParts": "ἔχω – ἕξω / σχήσω – ἔσχον – ἔσχηκα – ἔσχημαι – ἐσχέθην",
                "gloss_kr": "지켰다, 품에 안았다",
                "gloss_en": "kept, protected",
                "syntax": "LFG f-구조에서 [PRED 'ἔχω<SUBJ,OBJ>', SUBJ [헥토르], OBJ [아내와 아이들]] 형태의 반과거 능동태 술어로, 가족을 안전하게 감싸 안고 보호하던 과거의 상태를 나타낸다.",
                "background": "도시뿐만 아니라 아내와 자식들의 삶을 안전하게 지탱해 주던 가장으로서의 헥토르의 면모를 보여준다.",
                "etymology": "PIE 재구형 *segh-('가지다, 유지하다')에서 유래하며, 산스크리트어 sah-와 동계어이다. 어두 자음 변동과 이중모음 변화를 거쳤다."
            },
            {
                "g": "δ᾽",
                "pos": "접속사",
                "lemma": "δέ",
                "parse": "coord.conj.",
                "gloss_kr": "그리고",
                "gloss_en": "and",
                "syntax": "LFG 대등접속사로 도시를 구한 행위와 가족을 돌보던 행위를 매끄럽게 연결한다.",
                "background": "공적 영역의 수호와 사적 영역의 보호가 헥토르라는 한 인물에게 어떻게 통합되어 있었는지를 보여주는 연결고리이다.",
                "etymology": "호메로스 시가 전반에 걸쳐 절과 구절을 대등하게 잇는 대표적인 후치 소사이다."
            },
            {
                "g": "ἀλόχους",
                "pos": "명사",
                "lemma": "ἄλοχος, ἄλοχον, ἡ",
                "parse": "pl.acc.f.",
                "gloss_kr": "아내들을",
                "gloss_en": "wives",
                "syntax": "LFG f-구조에서 동사 ἔχες의 목적어(OBJ) 논항으로 기능하며, [PRED 'ἄλοχος', CASE acc, GENDER feminine] 자질을 갖는다.",
                "background": "트로이아 전사들의 아내들이 맞이할 노예 전락과 비극적 운명을 암시하며 안드로마케 자신을 포함한 여성들의 처지를 대변한다.",
                "etymology": "접두사 *sm-('함께')와 침상/부부 생활을 뜻하는 어근의 결합으로, '같은 침상을 쓰는 이, 아내'를 뜻한다. Chantraine(DELG)은 결혼 제도를 나타내는 고유의 시적 어휘로 분류한다."
            },
            {
                "g": "κεδνὰς",
                "pos": "형용사",
                "lemma": "κεδνός, κεδνή, κεδνόν",
                "parse": "pl.acc.f.",
                "gloss_kr": "정숙한, 충실한, 보배로운",
                "gloss_en": "faithful, precious, noble",
                "syntax": "LFG에서 명사 ἀλόχους를 수식하는 한정 형용사로, [CASE acc, GENDER feminine] 자질을 공유한다.",
                "background": "가정을 지키며 남편에게 충실했던 트로이아 여성들의 고결한 인품과 가치교환 불가능한 소중함을 나타낸다.",
                "etymology": "PIE 재구형 어근에서 유래하며, 신뢰할 수 있고 소중한 가치를 지닌 것을 뜻한다. LSJ는 호메로스 시가에서 주로 아내나 친족의 덕성을 수식하는 존칭적 형용사로 설명한다."
            },
            {
                "g": "καὶ",
                "pos": "접속사",
                "lemma": "καί",
                "parse": "coord.conj.",
                "gloss_kr": "그리고",
                "gloss_en": "and",
                "syntax": "LFG 대등접속사로 정숙한 아내들과 어린 자녀들이라는 두 보호 대상 집단을 나란히 연결한다.",
                "background": "전쟁의 폭력이 비켜가야 할 가장 취약하고 소중한 두 계층을 병치하여 비극성을 배가한다.",
                "etymology": "그리스어의 가장 보편적인 대등·첨가 접속사이다."
            },
            {
                "g": "νήπια",
                "pos": "형용사",
                "lemma": "νήπιος, νηπία, νήπιον",
                "parse": "pl.acc.n.",
                "gloss_kr": "어린, 철없는",
                "gloss_en": "infant, helpless",
                "syntax": "LFG에서 명사 τέκνα를 수식하는 한정 형용사로, [CASE acc, GENDER neuter, NUMBER plural] 자질을 갖는다.",
                "background": "아직 아버지의 품이 절실하지만 보호받지 못할 어린 자녀들의 무력한 상태를 강조한다.",
                "etymology": "앞서 등장한 νήπιος의 중성 복수 대격 형태이며, 유아기와 무지함의 의미를 공유한다."
            },
            {
                "g": "τέκνα",
                "pos": "명사",
                "lemma": "τέκνον, τό",
                "parse": "pl.acc.n.",
                "gloss_kr": "자식들을, 아이들을",
                "gloss_en": "children",
                "syntax": "LFG f-구조에서 동사 ἔχες의 두 번째 목적어 논항(OBJ)으로 기능하며, [PRED 'τέκνον', CASE acc, GENDER neuter] 자질을 갖는다.",
                "background": "헥토르의 죽음과 함께 아버지 없는 자식들로 전락하여 비참한 운명에 처할 트로이아의 후세대들을 상징한다.",
                "etymology": "동사 τίκτω('낳다')의 어근에서 파생된 명사로, 부모가 낳은 혈육인 자식을 뜻한다. Chantraine(DELG)은 가족 공동체의 기초를 이루는 자녀 호칭어로 분석한다."
            }
        ]
    },
    {
        "ref": "Iliad 6.731",
        "trans": "그 여인들은 곧 움푹 파인 배들에 실려 가버릴 것이요,",
        "words": [
            {
                "g": "αἳ",
                "pos": "대명사",
                "lemma": "ὁ, ἡ, τό",
                "parse": "pl.nom.f.",
                "gloss_kr": "그 여인들은",
                "gloss_en": "they, these women",
                "syntax": "LFG 관점에서 αἳ는 주절의 주어(SUBJ) 기능을 담당하는 관계/지시 대명사이며, 속성-값 행렬로는 [PRED 'ὁ', GENDER f, NUM pl, CASE nom]으로 표현된다. 생성문법적으로는 기저에서 [Spec, TP] 위치에 병합되어 주어-동사 일치(agreement)를 형성한다. 정보구조상 이전 문맥에서 언급된 '트로이아의 정숙한 아내들(ἀλόχους κεδνὰς)'을 구정보(given information)로 가리키는 직시적 토픽(topic) 역할을 수행한다.",
                "background": "안드로마케는 남편 헥토르가 전사한 후 자신을 포함한 트로이아의 여성들이 아카이오이족의 포로로 잡혀 고향을 떠나게 될 비극적 미래를 예견하고 있다. 관사형 지시 대명사 αἳ는 트로이아 부녀자 전체의 집단적 운명을 강조한다.",
                "etymology": "PIE 지시대명사 어근 *so- / *seh₂- 중 여성 복수 주격 재구형 *seh₂es에서 유래하였다. 이 형태는 영급 어간 변형과 인도유럽어족 명사 굴절의 어미 결합을 보여주며, Chantraine(DELG)은 호메로스 언어에서 관사가 아직 완전한 정관사가 아닌 지시대명사적 기능을 보존하고 있음을 지적한다. 산스크리트어 sâ, 라틴어 is/ea/id의 관련 형태들과 어원적으로 직접 연결된다. 현대 그리스어에서는 3인칭 대명사 및 정관사 αὐτές / οι의 어원적 토대가 되었다."
            },
            {
                "g": "δή",
                "pos": "소사",
                "lemma": "δή",
                "parse": "postpos.part.",
                "gloss_kr": "진실로, 정녕",
                "gloss_en": "indeed, truly",
                "syntax": "LFG f-구조에서 문장 전체를 수식하는 양태 부가어(ADJUNCT)로 기능하며, [ADJUNCT [PRED 'δή', TYPE emphatic]] 자질을 명시한다. Wackernagel 법칙에 따라 절의 첫 단어 뒤(두 번째 위치)에 선조 배치되는 클리틱(clitic)적 특성을 보인다. 발화의 명증성과 화자의 강한 감정적 확신을 통사적으로 나타낸다.",
                "background": "피할 수 없는 포로 신세라는 참담한 현실을 화자 스스로 단언하며 절망감을 극대화하는 수사학적 장치이다.",
                "etymology": "PIE 강조 소사 *deh₂('참으로, 방금')에서 파생되었으며, 후두음 *h₂를 포함하는 명확한 어근 구성을 가진다. Beekes(EDG)는 이 소사가 호메로스 시가에서 구두 발화의 단정적 어조를 강화하는 데 핵심적 역할을 한다고 분석한다. 라틴어 -dam(예: quidam) 및 고대 아일랜드어 do- 등과 동계 관계를 형성한다. 현대 그리스어 일상어에서는 직접적 반사형을 찾기 어려우나 문학적 표현에 화석화되어 남아있다."
            },
            {
                "g": "τοι",
                "pos": "소사",
                "lemma": "τοι",
                "parse": "postpos.part.",
                "gloss_kr": "네게 말하건대, 정녕",
                "gloss_en": "mark you, let me tell you",
                "syntax": "레빈슨식 화용론 관점에서 청자(여기서는 죽은 헥토르 또는 청중)를 향한 윤리적 여격(ethical dative) 유사 기능을 수행하는 대화 소사이다. f-구조상 청자 지향적 양태 자질 [SPEAKER-NIGHT [ADDRESSEE +]]를 부여한다. 문장 내 선조 위치는 접어적(clitic) 제약에 따른다.",
                "background": "남편 헥토르에게 자신의 다가올 운명을 직접 호소하며 대화의 비극적 상호작용을 자극하는 청자 지향 소사이다.",
                "etymology": "PIE 2인칭 대명사 여격 재구형 *toi에서 유래하여 문장 소사로 전이되었다. Chantraine(DELG)에 따르면, 본래 대명사 여격이던 *toi가 청자의 주의를 환기하는 화용론적 소사로 기능 확장을 겪은 사례이다. 고대 인도어 te와 직접 대응한다. 현대어에서는 고전 인용 구문 외에는 잔존하지 않는다."
            },
            {
                "g": "τάχα",
                "pos": "부사",
                "lemma": "τάχα",
                "parse": "adv.",
                "gloss_kr": "곧, 머지않아",
                "gloss_en": "soon, quickly",
                "syntax": "LFG f-구조에서 시상적 부가어(ADJUNCT-TIME)로 기능하여, 동사 ὀχήσονται가 나타내는 미래 사건의 임박성을 수식한다. AVM 표기: [ADJUNCT [PRED 'τάχα', TIME immediate_future]].",
                "background": "트로이아 함락과 여인들의 끌려감이라는 비극이 지체 없이 눈앞으로 다가왔음을 상징하여 극적 긴장감을 고조시킨다.",
                "etymology": "형용사 ταχύς('빠른')의 중성 복수 대격 형태에서 부사로 화석화되었다. PIE 어근 *dhegh-('달리다, 도망치다') 또는 *bhengh-와의 관련성이 논의되나, Beekes(EDG)는 음운적 이화(Grassmann's Law)를 통해 *thakhus > ταχύς 변형이 일어났음을 실명 인용하여 증명한다. 이화 법칙의 예시로 어두 유기음 *th-가 무기음 τ-로 변하였다. 현대 그리스어 τάχα는 '아마도, 마치 ~인 것처럼'으로 의미가 전이되어 널리 쓰인다."
            },
            {
                "g": "νηυσὶν",
                "pos": "명사",
                "lemma": "ναῦς, νεώς, ἡ",
                "parse": "pl.dat.f. (Homeric form)",
                "gloss_kr": "배들에",
                "gloss_en": "in/on the ships",
                "syntax": "LFG 관점에서 여격 명사구로서 동사 ὀχήσονται의 장소/수단 부가어(OBL-LOC/INST) 역할을 수행한다. [PRED 'ναῦς', NUM pl, CASE dat, GENDER f] 자질을 지닌다. c-구조상 전치사 없이 여격 단독으로 공간적 포쇄 및 이동의 수단 범주를 표현한다.",
                "background": "아카이오이족의 함선은 트로이아 여인들에게 고향과의 영원한 절멸 및 노예 상태로의 이송을 의미하는 비극적 공간이다.",
                "etymology": "PIE 재구형 *néh₂us('배')에서 유래한 명사로, e급 모음 교체와 후두음 *h₂를 명확히 포함한다. 라틴어 navis, 산스크리트어 naus, 고대 페르시아어 nāv와 정확히 대응하는 독보적인 인도유럽어족 공유 어휘이다. 그리스어 내에서는 호메로스식 νηῦς/νηυσί 형태가 아티카 dialect의 ναῦς/ναυσί로 이화 변형을 겪었다. Chantraine(DELG)은 본 어원군의 보존성을 높게 평가한다. 현대 그리스어에서는 ναυτικός(해양의) 등 관련 파생어에 흔적이 남아있다."
            },
            {
                "g": "ὀχήσονται",
                "pos": "동사",
                "lemma": "ὀχέω",
                "parse": "3rd.pl.fut.ind.mid.",
                "principalParts": "ὀχέω – ὀχήσω – ὤχησα – (미상) – (미상) – ὠχήθην",
                "gloss_kr": "실려 갈 것이다, 탈 것이다",
                "gloss_en": "will be carried, will ride",
                "syntax": "LFG 관점에서 이 동사는 주절의 정동사(PRED)로서 [PRED 'ὀχέω<SUBJ,OBL>', SUBJ [αἳ], OBL [νηυσὶν]]의 f-구조를 형성한다. 중간태 미래 형태(fut.ind.mid.)를 통해 피동적 상태 변화에 주어가 능동적으로 휘말려 들어가는 상적(aspectual) 특성을 지닌다.",
                "background": "아카이오이 함선에 실려 끌려가는 부녀자들의 수동적이고 참담한 운명을 형상화하는 핵심 동사이다.",
                "etymology": "PIE 어근 *weǵh-('운반하다, 타다')의 o급 애블라우트(o-grade ablaut) 파생형 *woǵh-eyeti에서 출원하였다. 그림의 법칙(Grimm's Law)을 거친 영어 wagon, wain 및 라틴어 veho와 직접적인 동계 관계이다. Chantraine(DELG)은 이 동사가 그리스어 내에서 능동태 '운반하다'에서 중간태 '운반되어 가다, 타다'로 의미 분화를 완성했음을 보여준다. 현대어에서는 직접적 단순형보다 관련 복합어 속에 흔적이 있다."
            },
            {
                "g": "γλαφυρῇσι",
                "pos": "형용사",
                "lemma": "γλαφυρός, γλαφυρά, γλαφυρόν",
                "parse": "pl.dat.f. (Homeric ending -ῃσι)",
                "gloss_kr": "움푹 파인, 중공(中空)의",
                "gloss_en": "hollow",
                "syntax": "LFG f-구조에서 명사 νηυσὶν을 직접 수식하는 한정적 형용사(ADJUNCT)로 기능한다. 자질 일치: [GENDER f, NUM pl, CASE dat]. 호메로스식 서사시 어미 -ῃσι를 취한다.",
                "background": "호메로스 서사시의 전형적인 배 수식어로, 내부 공간이 오목하게 파인 원시적 목선 구조를 묘사한다.",
                "etymology": "동사 γλάφω('파내다, 깎다')에서 파생된 형용사이다. Beekes(EDG)는 PIE 어근 *glebh-('깎다, 파다')와의 연관성을 제시하며, 라틴어 glaber('매끄러운') 및 고대 고지 독일어 klaven과의 비교를 언급한다. 호메로스 고유의 서사시적 정형구 수식어로 발전하였으며, 아티카 산문에서는 거의 사용되지 않는다."
            }
        ]
    },
    {
        "ref": "Iliad 6.732",
        "trans": "그리고 나 또한 그들과 함께 가리라. 그러나 너, 내 아이야, 너는 나 자신과 함께",
        "words": [
            {
                "g": "καὶ",
                "pos": "접속사",
                "lemma": "καί",
                "parse": "coord.conj.",
                "gloss_kr": "그리고, ~조차",
                "gloss_en": "and, even",
                "syntax": "LFG f-구조에서 단순 대등 접속사 또는 강조 첨가 부사로 기능하며, 문장 전체의 주제적 연속성을 부여한다.",
                "background": "다른 트로이아 부녀자들의 일반적 운명에 안드로마케 자신도 예외 없이 포함된다는 점을 강조한다.",
                "etymology": "그리스어 고유의 접속사로, PIE 차원의 명확한 재구형에 대해서는 논쟁이 있으나 Chantraine(DELG)은 라틴어 copula 기능과 평행성을 갖는 고대 결합사로 본다."
            },
            {
                "g": "μὲν",
                "pos": "소사",
                "lemma": "μέν",
                "parse": "postpos.part.",
                "gloss_kr": "한편, 참으로",
                "gloss_en": "on the one hand, indeed",
                "syntax": "LFG f-구조에서 뒤따르는 σὺ δ᾽과의 대조 구문을 형성하는 소사이다. [STRUCTURE [CORREL-LINK 'μέν-δέ']] 형식의 정보구조적 대조 표시로 일한다.",
                "background": "자신의 운명(ἐγὼ)과 아들 아스티아낙스의 운명(σὺ)을 대비시키기 위한 전반부 설정 소사이다.",
                "etymology": "PIE 지시/확증 소사 *mēn('참으로')에서 유래하였으며, 고대 인도어 mām, 라틴어 mēnsis 등과 어근적 연관성이 논의된다. LSJ는 이 소사가 그리스어 문장 구조의 대구를 이루는 가장 근본적인 통사적 장치라고 명시한다."
            },
            {
                "g": "ἐγὼ",
                "pos": "대명사",
                "lemma": "ἐγώ",
                "parse": "sg.nom.",
                "gloss_kr": "나는",
                "gloss_en": "I",
                "syntax": "LFG f-구조에서 생략 가능한 주어(SUBJ) 자리에 명시적으로 전위된 1인칭 주어 대명사이다. AVM: [PRED 'pro', PERS 1, NUM sg, CASE nom, FOCUS +]. 대조 초점(contrastive focus)을 담당한다.",
                "background": "안드로마케가 자신의 비극적 주체성을 직접적으로 드러내는 대명사 표용이다.",
                "etymology": "PIE 재구형 *eǵh₂-óm / *eǵō에서 파생되었다. 영급 어간과 후두음 *h₂를 포함하는 자형 구조를 보인다. 라틴어 ego, 고대 교회 슬라브어 azъ, 영어 I(고대 영어 ic)와 정확히 일치한다. Chantraine(DELG)은 1인칭 주격 대명사의 인도유럽어족 보존성을 상세히 기술한다."
            },
            {
                "g": "μετὰ",
                "pos": "전치사",
                "lemma": "μετά",
                "parse": "prep. (governing dat.)",
                "gloss_kr": "~와 함께",
                "gloss_en": "among, with",
                "syntax": "LFG f-구조에서 여격 명사구 τῇσι를 지배하여 동반 부가어(ADJUNCT-COM) 구문을 형성한다. AVM: [ADJUNCT-COM [PRED 'μετά', OBJ [τῇσι]]].",
                "background": "포로로 잡혀가는 트로이아 여인들 무리 속에 안드로마케 자신도 섞여 가야 함을 나타낸다.",
                "etymology": "PIE 재구형 *me-t-m / *meth₂('중간에, 함께')에서 유래하였다. 고대 고지 독일어 mit, 고대 영어 mid와 동계 관계이다. Beekes(EDG)는 속격 지배(~와 함께)와 여격 지배(~들 사이에)의 용법 분화를 분석한다. 현대 그리스어에서는 με(μετά의 축약)로 일상에서 광범위하게 쓰인다."
            },
            {
                "g": "τῇσι",
                "pos": "대명사",
                "lemma": "ὁ, ἡ, τό",
                "parse": "pl.dat.f. (Homeric ending -ῃσι)",
                "gloss_kr": "그 여인들",
                "gloss_en": "them, these women",
                "syntax": "LFG 관점에서 전치사 μετά의 목적어(OBJ)로 기능하는 복수 여격 지시대명사이다.",
                "background": "앞 행의 αἳ(포로가 될 여인들)을 받아 동반의 대상을 구체화한다.",
                "etymology": "PIE 지시대명사 어근 *to-의 여성 복수 여격 재구형에서 파생된 호메로스식 이형태이다.(αἳ 항목 참조)"
            },
            {
                "g": "σὺ",
                "pos": "대명사",
                "lemma": "σύ",
                "parse": "sg.nom.",
                "gloss_kr": "너는",
                "gloss_en": "you",
                "syntax": "LFG f-구조에서 대조 소사 δ᾽와 결합하여 새로운 주어로 등장하는 대조적 화제(contrastive topic) [PRED 'pro', PERS 2, NUM sg, CASE nom, TOPIC +]를 형성한다. 생성문법적으로 [Spec, TopP] 위치로 좌측 전위(left-dislocation)된 것으로 분석된다: [TopP σὺᵢ [TP tᵢ ἕψεαι]].",
                "background": "어머니 자신의 운명에서 아들 아스티아낙스의 운명으로 시선을 전환하는 수사적 전환점이다.",
                "etymology": "PIE 2인칭 단수 주격 재구형 *túh₁에서 유래하였다. 어두 단자음과 후두음 *h₁의 결합 형태이다. 라틴어 tū, 고대 노르드어 þú, 영어 thou와 직접 동계어이다. 그리스어 내에서 어두 *t-가 모음 앞에서 s-로 마찰음화(assibilation)되는 음운 변화(*tū > σύ)를 거쳤다. Chantraine(DELG)은 이 자음 변동을 그리스어 사투리 형성의 주요 지표로 제시한다."
            },
            {
                "g": "δ᾽",
                "pos": "소사",
                "lemma": "δέ",
                "parse": "postpos.part.",
                "gloss_kr": "그러나, 한편",
                "gloss_en": "but, on the other hand",
                "syntax": "LFG f-구조에서 앞의 μὲν과 호응하여 절 간 대조 관계를 완결짓는 소사이다.",
                "background": "어머니의 포로 신세와 아들의 더 비참한 운명(굴욕적 노동 또는 죽음)을 대조한다.",
                "etymology": "대등/전환 소사 δέ의 모음 탈락(elision) 형태이다.(앞 행 δ᾽ 참조)"
            },
            {
                "g": "αὖ",
                "pos": "부사",
                "lemma": "αὖ",
                "parse": "adv.",
                "gloss_kr": "다시, 이번에는",
                "gloss_en": "again, in turn",
                "syntax": "LFG f-구조에서 상적/대조적 부가어(ADJUNCT)로 일하며, 화제의 전환을 한층 더 강화한다.",
                "background": "아들의 운명을 다루는 단계로 시선이 거듭 전환됨을 보여준다.",
                "etymology": "PIE 원시 지시/전환 부사 *au('저쪽으로, 다시')에서 유래했다. 라틴어 aut, autem과 어원적으로 연관된다. Beekes(EDG)는 이 부사가 고대 서사시에서 화제의 순차적 이행을 표시하는 핵심어라고 설명한다."
            },
            {
                "g": "τέκος",
                "pos": "명사",
                "lemma": "τέκος, τό",
                "parse": "sg.voc.n.",
                "gloss_kr": "아이야, 내 자식아",
                "gloss_en": "child, my child",
                "syntax": "통사론적으로 문장 구조 외부에 위치하는 호격(VOC) 명사구이다. [PRED 'τέκος', NUM sg, CASE voc, GENDER n] 자질을 가진다.",
                "background": "어머니 안드로마케가 어린 아들 아스티아낙스를 직접 부르며 쏟아내는 애끓는 모정의 직접적 발로이다.",
                "etymology": "동사 τίκτω('낳다')의 어근 *tek-('생산하다')에서 파생된 s-어간 중성 명사이다. PIE 재구형 *téke-s-를 반영한다. Chantraine(DELG)은 명사 τέκνον과 유의어 관계를 이루며 호메로스 시가에서 호격으로 매우 빈번히 쓰임을 밝힌다. 현대어에서는 직접 쓰이지 않는다."
            },
            {
                "g": "ἢ",
                "pos": "접속사",
                "lemma": "ἤ",
                "parse": "coord.conj.",
                "gloss_kr": "혹은, 아니면",
                "gloss_en": "or",
                "syntax": "LFG f-구조에서 조건/선택의 대등 접속사로 기능하여, 뒤이어 나올 두 가지 비극적 가능성(노예 노동 vs 투척되어 죽음)을 여는 선택 구조를 형성한다.",
                "background": "아이가 맞이할 수 있는 두 가지 끔찍한 비극적 시나리오를 가르는 선택적 접속사이다.",
                "etymology": "PIE 선택 소사 *ē / *h₁ē에서 유래한 접속사이다."
            },
            {
                "g": "ἐμοὶ",
                "pos": "대명사",
                "lemma": "ἐγώ",
                "parse": "sg.dat.",
                "gloss_kr": "나에게",
                "gloss_en": "me",
                "syntax": "LFG f-구조에서 형용사/대명사 αὐτῇ를 수식하거나 전치사적 의미를 보완하는 여격 대명사이다.",
                "background": "어머니 자신과의 밀접한 종속 관계를 나타낸다.",
                "etymology": "1인칭 대명사의 여격 형태이다.(ἐγὼ 참조)"
            },
            {
                "g": "αὐτῇ",
                "pos": "대명사",
                "lemma": "αὐτός, αὐτή, αὐτό",
                "parse": "sg.dat.f.",
                "gloss_kr": "나 자신에게",
                "gloss_en": "myself",
                "syntax": "LFG f-구조에서 여격 대명사 ἐμοὶ와 재귀적/강조적 재귀 구문을 구성한다. [PRED 'αὐτός', PERS 1, NUM sg, GENDER f, CASE dat].",
                "background": "어머니인 안드로마케 '자신'을 직접 가리키며, 아이가 어머니의 포로 길을 따라와야 하는 비극을 강조한다.",
                "etymology": "강조 대명사 αὖ와 지시어의 결합 파생형이다.(이전 행 αὖ 참조)"
            }
        ]
    },
    {
        "ref": "Iliad 6.733",
        "trans": "따라올 것이니, 거기서 너는 무참한 노역들을 치르게 되리라,",
        "words": [
            {
                "g": "ἕψεαι",
                "pos": "동사",
                "lemma": "ἕπομαι",
                "parse": "2nd.sg.fut.ind.mid. (Homeric uncontracted -εαι)",
                "principalParts": "ἕπομαι – ἕψομαι – ἑσπόμην – (미상) – (미상) – (미상)",
                "gloss_kr": "따라갈 것이다",
                "gloss_en": "you will follow",
                "syntax": "LFG 관점에서 주절의 정동사(PRED)로서 [PRED 'ἕπομαι<SUBJ,OBL>', SUBJ [σὺ], OBL [ἐμοὶ αὐτῇ]]의 f-구조를 형성한다. 호메로스식 미축약 어미 -εαι가 유지되어 있다.",
                "background": "어린 아들이 어머니의 끌려가는 길에 동행하여 함께 종이 될 가능성을 언급한다.",
                "etymology": "PIE 어근 *sekʷ-('따르다')에서 유래하였다. 어두 순음화와 기식음화(*sekʷ- > *hep- > ἕπομαι)를 거쳤다. 라틴어 sequor, 산스크리트어 sacate, 영어 second/sequence(라틴어 차용)와 직접 동계어이다. Chantraine(DELG)은 이 동사가 그리스어 역사에서 지속적으로 '뒤따르다'라는 핵심 통사 의미를 유지했음을 입증한다."
            },
            {
                "g": "ἔνθά",
                "pos": "부사",
                "lemma": "ἔνθα",
                "parse": "adv.",
                "gloss_kr": "거기서, 그곳에서",
                "gloss_en": "there, in that place",
                "syntax": "LFG f-구조에서 장소의 관계 부사(ADJUNCT-LOC)로 기능하며, 승리한 아카이오이족의 낯선 족쇄의 땅을 가리킨다.",
                "background": "그리스 본토라는 포로의 공간을 지칭하는 관계 공간 부사이다.",
                "etymology": "PIE 지시 어근 *en- / *on-에서 파생된 장소 부사이다. Beekes(EDG)는 장소 접미사 -θα와의 결합을 설명한다."
            },
            {
                "g": "κεν",
                "pos": "소사",
                "lemma": "ἄν",
                "parse": "postpos.part. (Homeric κεν/κε)",
                "gloss_kr": "~일 것이다, 아마도",
                "gloss_en": "would, perchance",
                "syntax": "LFG 관점에서 희구법 동사 ἐργάζοιο와 결합하여 가상적/가능적 미래 상황을 나타내는 양태 소사(MODAL)로 기능한다. AVM: [MODAL [TYPE potential]].",
                "background": "미래의 가상적 비극 상황을 조건적 가능성으로 제시하는 수사적 양태 소사이다.",
                "etymology": "호메로스 방언 고유의 양태 소사로, 아티카 방언의 ἄν과 기능적으로 동일하다. Chantraine(DELG)은 κεν의 어원이 PIE 지시 소사 *ke- / *km-에 기반한다는 학설을 제시한다."
            },
            {
                "g": "ἔργα",
                "pos": "명사",
                "lemma": "ἔργον, τό",
                "parse": "pl.acc.n.",
                "gloss_kr": "일들을, 노역들을",
                "gloss_en": "works, tasks, labors",
                "syntax": "LFG f-구조에서 동사 ἐργάζοιο의 동족 목적어(cognate object) 또는 직접 목적어(OBJ) 역할을 수행한다. [PRED 'ἔργον', NUM pl, CASE acc, GENDER n].",
                "background": "왕족의 신분에서 포로로 전락하여 강제로 맡게 될 굴욕적이고 힘든 온갖 노예 노동들을 가리킨다.",
                "etymology": "PIE 어근 *werǵ-('일하다, 행하다')에서 유래하였으며, 어두 디감마(digamma *w-)가 호메로스 시가에서 운율상(ϝέργον) 보존된다. 영어 work, 독일어 Werk, 아베스타어 verəzyeiti와 직접 동계 관계이다. Chantraine(DELG)은 이 명사가 그리스어 전체에서 노동과 행위의 기본 어휘로 작용함을 밝힌다. 현대 그리스어 ἔργο(작품, 일)로 직계 계승되었다."
            },
            {
                "g": "ἀεικέα",
                "pos": "형용사",
                "lemma": "ἀεικής, ἀεικές",
                "parse": "pl.acc.n. (Homeric uncontracted -έα)",
                "gloss_kr": "어울리지 않는, 무참한, 굴욕적인",
                "gloss_en": "unseemly, shameful, wretched",
                "syntax": "LFG f-구조에서 명사 ἔργα를 직접 수식하는 한정 형용사(ADJUNCT)로 일하며, 자질 [GENDER n, NUM pl, CASE acc]를 공유한다.",
                "background": "왕자라는 귀한 신분에 전혀 어울리지 않는, 신분적 격하와 굴욕을 안겨주는 악랄한 노역의 성격을 규정한다.",
                "etymology": "부정 접두사 α-와 '닮다, 어울리다'를 뜻하는 어근 *weik- (cf. ἔοικα)의 합성어이다. PIE 재구형 *ṇ-weik-es-에서 발달하였다. Beekes(EDG)는 신분이나 격식에 부합하지 않는 굴욕적 상태를 뜻하는 시적 특수 어휘로 설명한다."
            },
            {
                "g": "ἐργάζοιο",
                "pos": "동사",
                "lemma": "ἐργάζομαι",
                "parse": "2nd.sg.pres.opt.mid. (Homeric uncontracted -οιο)",
                "principalParts": "ἐργάζομαι – ἐργάσομαι – εἰργασάμην – (미상) – εἴργασμαι – εἰργάσθην",
                "gloss_kr": "일하게 되리라, 행하게 되리라",
                "gloss_en": "you would work, you would labor",
                "syntax": "LFG 관점에서 양태 소사 κεν의 지배를 받아 가상적 가능성을 나타내는 희구법(optative) 정동사(PRED)이다. AVM: [PRED 'ἐργάζομαι<SUBJ,OBJ>', SUBJ [σὺ], OBJ [ἔργα], MOOD optative].",
                "background": "어린 왕자가 겪게 될 수도 있는 노예 노동의 비참한 미래를 상상하며 읊조리는 동사이다.",
                "etymology": "명사 ἔργον과 동일한 PIE 어근 *werǵ-('일하다')에서 파생된 파생 동사이다. 어두 디감마 보존과 희구법 어미 -οιο의 서사시적 유지 현상을 보여준다.(ἔργα 참조)"
            }
        ]
    },
    {
        "ref": "Iliad 6.734",
        "trans": "무자비한 주인을 위해 노역하며; 아니면 아카이오이인들 중 누군가가",
        "words": [
            {
                "g": "ἀθλεύων",
                "pos": "동사 (분사)",
                "lemma": "ἀθλεύω",
                "parse": "pres.act.part.sg.nom.m.",
                "principalParts": "ἀθλεύω – (미상) – ἤθλευσα – (미상) – (미상) – (미상)",
                "gloss_kr": "고되게 노역하면서, 고초를 겪으며",
                "gloss_en": "toiling, laboring, struggling",
                "syntax": "LFG 관점에서 주어(σὺ)의 상태를 수식하는 주어-부대상황 분사 부가어(ADJUNCT-PRED)로 기능한다. 괄호 구조: [VP [AP ἀθλεύων] [VP ἐργάζοιο]].",
                "background": "포로 상태에서 겪어야 할 육체적·정신적 고통과 사투를 생생하게 묘사하는 분사이다.",
                "etymology": "명사 ἆθλον / ἄεθλον('경쟁, 고난, 상')에서 파생된 동사이다. Beekes(EDG)는 이 어원이 선그리스어(Pre-Greek)적 요소일 가능성과 인도유럽어 어근 연관성을 함께 논의한다. 운동경기 및 고난을 뜻하는 영어 athlete, athletics의 직접적인 어원적 출처이다."
            },
            {
                "g": "πρὸ",
                "pos": "전치사",
                "lemma": "πρό",
                "parse": "prep. (governing gen.)",
                "gloss_kr": "~ 앞에서, ~를 위하여",
                "gloss_en": "before, in the presence of, for",
                "syntax": "LFG f-구조에서 속격 명사구 ἄνακτος ἀμειλίχου를 지배하여 지배/시중의 장소 및 대상 부가어(OBL)를 구성한다.",
                "background": "가혹한 주인 앞에서 그의 눈치를 보며 굴욕적으로 일해야 하는 노예의 처지를 시각화한다.",
                "etymology": "PIE 전치사/부사 재구형 *pró('앞으로, 앞서')에서 유래하였다. 라틴어 pro, 산스크리트어 pra, 영어 fore/pro-와 직접 동계어이다. Chantraine(DELG)은 공간적 전방 위치가 시중 및 지배 구문으로 확장되었음을 제시한다."
            },
            {
                "g": "ἄνακτος",
                "pos": "명사",
                "lemma": "ἄναξ, ἄνακτος, ὁ",
                "parse": "sg.gen.m.",
                "gloss_kr": "주인, 군주의",
                "gloss_en": "of a lord, of a master",
                "syntax": "LFG f-구조에서 전치사 πρὸ의 지배를 받는 속격 명사구 핵(HEAD)이다. 자질: [PRED 'ἄναξ', NUM sg, CASE gen, GENDER m].",
                "background": "트로이아를 짓밟은 아카이오이족의 승리자 군주를 지칭하며, 왕자였던 아스티아낙스를 종으로 부릴 새로운 지배자를 가리킨다.",
                "etymology": "미케네 음절 문자(Linear B) ϝάναξ (wa-na-ka, '군주')로 확인되는 유서 깊은 고대 어휘이다. 어두 디감마 *w-가 존재했다. Beekes(EDG)는 비-인도유럽어 기층(Pre-Greek) 어휘 가능성을 강력히 제기하나, 일부 학자는 PIE 어근 연관성을 주장한다. Chantraine(DELG)은 호메로스 서사시에서 신이나 최고 군주에게 부여되는 특수 칭호임을 입증한다."
            },
            {
                "g": "ἀμειλίχου",
                "pos": "형용사",
                "lemma": "ἀμείλιχος, ἀμείλιχον",
                "parse": "sg.gen.m.",
                "gloss_kr": "무자비한, 달래지지 않는",
                "gloss_en": "ruthless, implacable",
                "syntax": "LFG f-구조에서 명사 ἄνακτος를 한정 수식하는 속격 형용사 부가어(ADJUNCT)이다. 자질 일치: [GENDER m, NUM sg, CASE gen].",
                "background": "새로운 정복자 주인이 아이에게 어떠한 동정심이나 자비도 베풀지 않을 잔혹한 인물임을 나타낸다.",
                "etymology": "부정 접두사 α-와 '부드러운, 달콤한'을 뜻하는 어근 μειλίχιος (cf. μέλι '굴')의 결합형이다. PIE 어근 *mel-i-t-('굴')과의 연관 속에서, '달콤함/자비가 전혀 없는'이라는 의미로 발달했다. Beekes(EDG)는 잔혹함을 나타내는 호메로스 고유의 정형적 수식어로 규정한다."
            },
            {
                "g": "ἤ",
                "pos": "접속사",
                "lemma": "ἤ",
                "parse": "coord.conj.",
                "gloss_kr": "아니면, 혹은",
                "gloss_en": "or",
                "syntax": "LFG 대등 접속사로, 첫 번째 비극적 시나리오(노예 노역)와 두 번째 비극적 시나리오(성벽 투척으로 인한 죽음)를 가르는 절 간 선택 구문을 이끈다.",
                "background": "노예로 살아남는 것보다 더 참혹한, 죽음이라는 두 번째 운명의 갈림길을 도입한다.",
                "etymology": "선택 접속사 ἤ의 재등장이다.(이전 행 ἤ 참조)"
            },
            {
                "g": "τις",
                "pos": "대명사",
                "lemma": "τίς, τί",
                "parse": "sg.nom.m.",
                "gloss_kr": "누군가가",
                "gloss_en": "some one, any one",
                "syntax": "LFG f-구조에서 후행절의 부정 주어(SUBJ)로 기능한다. [PRED 'τις', NUM sg, CASE nom, GENDER m, DEF -].",
                "background": "아들의 목숨을 빼앗을 익명의 아카이오이 잔혹한 전사를 가리킨다.",
                "etymology": "PIE 의문/부정 대명사 어근 *kʷis에서 유래하였다. 순치음화 변동(*kʷis > τις)을 거쳤으며 라틴어 quis, 산스크리트어 kis와 직접 동계어이다."
            },
            {
                "g": "Ἀχαιῶν",
                "pos": "명사",
                "lemma": "Ἀχαιός, Ἀχαιοῦ, ὁ",
                "parse": "pl.gen.m.",
                "gloss_kr": "아카이오이인들 중",
                "gloss_en": "of the Achaeans",
                "syntax": "LFG f-구조에서 부정대명사 τις를 수식하는 부분 속격(partitive genitive) 부가어이다. AVM: [ADJUNCT-PART [PRED 'Ἀχαιός', NUM pl, CASE gen]].",
                "background": "트로이아를 공격한 그리스 연합군 전체를 일컫는 대표적 명칭이다.",
                "etymology": "히타이트 문서의 Aḫḫiyawā(아히야와)와 직접 연결되는 고대 인도유럽어/미케네 시대 민족명이다. Beekes(EDG)는 이 명칭이 미케네 그리스인의 청동기 시대 청동 문명과 직접적인 역사적 연속성을 가짐을 실명 인용하여 증명한다."
            }
        ]
    },
    {
        "ref": "Iliad 6.735",
        "trans": "손으로 그를 잡아 탑 위에서 내던져 끔찍한 파멸에 이르게 하리니,",
        "words": [
            {
                "g": "ῥίψει",
                "pos": "동사",
                "lemma": "ῥίπτω",
                "parse": "3rd.sg.fut.ind.act.",
                "principalParts": "ῥίπτω – ῥίψω – ἔρριψα – ἔρριφα – ἔρριμμαι – ἐρρίφθην",
                "gloss_kr": "내던질 것이다",
                "gloss_en": "will hurl, will throw",
                "syntax": "LFG 관점에서 이 구문의 핵심 정동사(PRED)로서 [PRED 'ῥίπτω<SUBJ,OBJ,OBL-DIR>', SUBJ [τις Ἀχαιῶν], OBJ [μιν/아들], OBL-DIR [ἀπὸ πύργου]]의 f-구조를 완성한다.",
                "background": "훗날 트로이아 함락 시 네오프톨레모스(또는 오디세우스)가 헥토르의 아들 아스티아낙스를 성벽 위에서 떨어뜨려 죽일 것이라는 전설적 비극을 정확히 예언하는 동사이다.",
                "etymology": "PIE 어근 *wreyp-('내던지다, 꺾다')에서 파생되었다. 어두 디감마 탈락 후 ῥ-의 기식음화 및 유기음화가 일어났다. Chantraine(DELG)은 이 동사가 거친 물리적 투척 행위를 나타내는 강렬한 시적 동사임을 밝힌다. 현대 그리스어 ρίχνω(던지다)의 직접적인 어원적 조상이다."
            },
            {
                "g": "χειρὸς",
                "pos": "명사",
                "lemma": "χείρ, χειρός, ἡ",
                "parse": "sg.gen.f.",
                "gloss_kr": "손으로, 손으로부터",
                "gloss_en": "by the hand, from the hand",
                "syntax": "LFG f-구조에서 동사 ῥίψει 또는 분사 ἑλὼν을 수식하는 탈격적/수단적 속격 부가어(ADJUNCT-MANNER)로 일한다. [PRED 'χείρ', NUM sg, CASE gen, GENDER f].",
                "background": "아이를 움켜쥐는 적군의 잔혹한 신체적 접촉과 무자비한 행위를 시각적으로 부각한다.",
                "etymology": "PIE 재구형 *ǵhes-r-('손')에서 유래하였다. 모음 교체와 자음 탈락을 거쳐 그리스어 χείρ로 정착했다. 산스크리트어 hasta, 알바니아어 dorë와 어원적으로 연결된다. Chantraine(DELG)은 손의 구체적 동작과 권력을 나타내는 그리스어의 핵심 명사로 설명한다. 현대어 χέρι로 이어진다."
            },
            {
                "g": "ἑλὼν",
                "pos": "동사 (분사)",
                "lemma": "αἱρέω",
                "parse": "aor.act.part.sg.nom.m.",
                "principalParts": "αἱρέω – αἱρήσω – εἷλον – ᾕρηκα – ᾕρημαι – ᾑρέθην",
                "gloss_kr": "(손으로) 붙잡아, 움켜쥐고",
                "gloss_en": "having seized, having taken",
                "syntax": "LFG 관점에서 주절 동사 ῥίψει에 선행하는 동작을 나타내는 부정과거 분사 부가어(ADJUNCT-TIME/MANNER)이다. X-bar 괄호 구조: [VP [V' [AP ἑλὼν] [V' ῥίψει]]].",
                "background": "아이를 성벽 밖으로 내던지기 직전, 아이를 악착같이 움켜잡는 적의 무자비한 동작을 선행하여 묘사한다.",
                "etymology": "PIE 어근 *ser- / *her-('붙잡다') 또는 독자적 그리스어 어근 *hel-의 제2부정과거 어간에서 파생되었다. Chantraine(DELG)은 보충법(suppletion)을 통해 현재형 αἱρέω와 부정과거형 εἷλον / ἑλεῖν이 결합했음을 밝힌다."
            },
            {
                "g": "ἀπὸ",
                "pos": "전치사",
                "lemma": "ἀπό",
                "parse": "prep. (governing gen.)",
                "gloss_kr": "~로부터, ~ 위에서",
                "gloss_en": "from, down from",
                "syntax": "LFG f-구조에서 속격 명사 πύργου를 지배하여 분리/이탈의 방향 부가어(OBL-DIR)를 구성한다.",
                "background": "높은 성벽 위에서 아래 바닥으로 떨어지는 낙하의 공간적 거리를 시각화한다.",
                "etymology": "PIE 전치사 *apó('~로부터 떨어져')에서 유래하였다. 라틴어 ab, 영어 off/of, 산스크리트어 apa와 직접 대응하는 인도유럽어족 공통 분리 전치사이다."
            },
            {
                "g": "πύργου",
                "pos": "명사",
                "lemma": "πύργος, ὁ",
                "parse": "sg.gen.m.",
                "gloss_kr": "탑, 성벽의",
                "gloss_en": "from a tower, wall",
                "syntax": "LFG f-구조에서 전치사 ἀπὸ의 지배를 받는 속격 명사구 핵(HEAD)이다. [PRED 'πύργος', NUM sg, CASE gen, GENDER m].",
                "background": "트로이아를 수호하던 거대한 성벽과 탑이, 역설적으로 그 성의 어린 왕자를 죽이는 처형대로 반전되는 비극적 공간의 역설이다.",
                "etymology": "Beekes(EDG)는 이 단어가 선그리스어(Pre-Greek) 기층 어휘이거나 아나톨리아/지중해권 차용어일 가능성이 높다고 지적한다. 독일어 Burg, 영어 borough/burg 등 게르만어군 방어 시설 어휘와의 비교 언어학적 관련성이 논의된다. 현대 그리스어 πύργος(탑, 성)로 남아있다."
            },
            {
                "g": "λυγρὸν",
                "pos": "형용사",
                "lemma": "λυγρός, λυγρά, λυγρόν",
                "parse": "sg.acc.m.",
                "gloss_kr": "비참한, 끔찍한, 소름끼치는",
                "gloss_en": "mournful, miserable, baneful",
                "syntax": "LFG f-구조에서 명사 ὄλεθρον을 수식하는 한정 형용사(ADJUNCT)이다. 자질 일치: [GENDER m, NUM sg, CASE acc].",
                "background": "어린아이에게 가해지는 투척이라는 죽음 방식이 지닌 참혹함과 끔찍한 비극성을 규정한다.",
                "etymology": "PIE 어근 *lewǵ-('부러뜨리다, 비통해하다')에서 유래하였다. 라틴어 lugeo('슬퍼하다'), 고대 아일랜드어 locht와 동계어이다. Chantraine(DELG)은 서사시에서 비통하고 참혹한 죽음이나 운명을 수식하는 특수 감정 형용사로 분류한다."
            },
            {
                "g": "ὄλεθρον",
                "pos": "명사",
                "lemma": "ὄλεθρος, ὁ",
                "parse": "sg.acc.m.",
                "gloss_kr": "파멸, 죽음으로",
                "gloss_en": "destruction, death, ruin",
                "syntax": "LFG f-구조에서 동사 ῥίψει의 결과/목적을 나타내는 동종/결과 대격 목적어(OBJ-RESULT) 또는 2차 목적어로 기능한다. [PRED 'ὄλεθρος', NUM sg, CASE acc, GENDER m].",
                "background": "아스티아낙스의 생명이 참혹하게 끝나는 파멸의 순간을 명사적으로 동결하여 시 구절의 마침표를 찍는다.",
                "etymology": "동사 ὄλλυμι('파멸시키다, 죽이다')의 파생 어근 *ol-e-th-ro-에서 출원하였다. PIE 어근 *h₃elh₁-('파괴하다')과의 연관성이 논의된다. Beekes(EDG)는 완전한 소멸과 죽음을 뜻하는 호메로스 서사시의 핵심 비극 어휘로 설명한다."
            }
        ]
    },
    {
        "ref": "Iliad 6.736",
        "trans": "누구든, 그분의 친형제나 혹은 아버지나 아들을 헥토르가 죽였던 이라면 —",
        "words": [
            {
                "g": "χωόμενος,",
                "pos": "동사",
                "lemma": "χώομαι",
                "principalParts": "χώομαι – χωσόμεται – ἐχωσάμην – – – –",
                "parse": "pres.mid.part.sg.nom.m.",
                "gloss_kr": "분노하여, 화가 나서",
                "gloss_en": "being angry, wrathful",
                "syntax": "LFG 관점에서 이 분사구는 주절의 주어에 속하는 부대상황(adjunct) 분사구이며, [ADJUNCT [PRED 'χώομαι', SUBJ ...]] 형태의 f-구조를 가진다. 생성문법적으로는 주절 주어를 수식하는 수식어(modifier) 구조로 분석되며, 외현적 논항으로 경험주(experiencer) 주어를 수반한다. 정보구조상 후행하는 관계절 전체의 선행사 배경 정황을 설정하는 준거점 기능을 담당한다.",
                "background": "χωόμενος은 헥토르에게 가족을 잃은 아카이오이 군사의 깊은 원한과 분노를 생생하게 드러내는 분사다. 이 단어는 트로이아 전쟁의 참혹함과 그로 인해 개별 장병들이 품은 사적인 복수심이 전투를 지배하고 있음을 보여준다. 영웅적 서사 속에서 집단적 적개심이 개인의 정서적 동기로 전환되는 지점을 포착한다.",
                "etymology": "Beekes(EDG)에 따르면 PIE 재구형 *ghow-('화내다, 분개하다')에 기원하며, 명사형 *ghow-os에서 동사 파생되었다. 동계어로 베다 산스크리트어 hávate('부르다, 촉구하다'의 의미 전이) 및 게르만어파 계통의 어휘들이 논의된다. 그리스어 내부에서 감정을 나타내는 중동사(middle voice) 파생형으로 정착하면서 어간 모음 교체를 거쳤다. 현대 그리스어에서는 직접 유지되지 않고 고전 문헌을 통해서만 확인되는 시어(poetic word)로 남았다."
            },
            {
                "g": "ᾧ",
                "pos": "대명사",
                "lemma": "ὅς, ἥ, ὅ",
                "parse": "sg.dat.m.",
                "gloss_kr": "~의, 그에게",
                "gloss_en": "to whom, whose",
                "syntax": "LFG f-구조에서 이 관계대명사는 소유격 여격(dative of possession)으로서 관계절 내에서 영득(possessor) 기능을 수행한다. 생성문법적으로는 [CP [DP ᾧ]ᵢ [C' ... [TP ... tᵢ ...]]] 형태로 wh-이동을 거쳐 관장하는 관계절의 지정어 자리에 위치한다. 격 이론에 따라 관계절 내부의 통사적 관계에 의해 여격 자배(assignment)를 받는다.",
                "background": "여기서 관계대명사 ᾧ는 헥토르에게 친지를 잃은 구체적인 피해자를 한정하여 지시하는 역할을 한다. 이 표현은 트로이아 장수 헥토르가 아카이오이 진영 전반에 걸쳐 얼마나 광범위한 원한과 슬픔의 대상이었는지를 극적으로 부각한다. 서사 속에서 영웅의 위대함이 곧 적대 진영의 수많은 개인적 비극과 직결되어 있음을 암시한다.",
                "etymology": "Chantraine(DELG)은 이 형태가 PIE 지시대명사/관계대명사 재구형 *yo-에 기원한다고 본다. 산스크리트어 yá-('누구든지, ~인 사람'), 베다어의 관계대명사 용례와 정확히 일치하는 인도유럽어족 공통의 대명사 유산이다. 그리스어 역사 전반에 걸쳐 관계대명사 및 정관사의 어간으로 활용되며 광범위한 형태론적 변모를 겪었다. 현대 그리스어에서는 관사 체계 및 대명사적 잔재로 명맥이 이어진다."
            },
            {
                "g": "δή",
                "pos": "소사",
                "lemma": "δή",
                "parse": "coord.conj.",
                "gloss_kr": "정말로, 과연",
                "gloss_en": "indeed, surely",
                "syntax": "LFG 통사 구조에서 이 소사는 초점(focus) 부사 혹은 담화 표지(discourse marker)로 기능하며, 인접한 피수식 성분의 화용적 강조를 유도한다. 생성문법적으로는 기능적 투사(functional projection)의 지정어나 헤드에 위치하여 문장 전체의 명제적 확실성을 높인다. 레빈슨式 화용론 관점에서 청자의 주의를 환기하고 발화의 진실성을 강조하는 극성(polarity) 강화 장치다.",
                "background": "δή는 앞서 언급된 비극적 사실이 틀림없는 진실임을 강조하여 청중의 감정적 몰입을 극대화하는 수사적 장치다. 호메로스 서사시에서 화자가 청중에게 이야기의 신빙성과 절박한 분위기를 전달할 때 빈번하게 사용된다. 이 소사로 인해 헥토르의 손에 죽어간 이들의 면면이 단순한 통계를 넘어 현실감 있는 고통으로 다가온다.",
                "etymology": "Beekes(EDG)는 이 단어의 어원을 PIE 강조 소사 *de에 두고 있으며, 명확한 인도유럽어 동계어 편차가 넓게 확인된다. 옛 인도유럽어 제어에서 공통으로 발견되는 발화 강조 형태소에서 유래하였다. 그리스어 고대 방언 전반에서 담화 표지로서의 기능이 고도로 분화되었다. 고전 시가와 산문을 거쳐 비잔틴 및 현대 그리스어의 구어적 강조 표현으로 연속성을 유지한다."
            },
            {
                "g": "που",
                "pos": "부사",
                "lemma": "που",
                "parse": "neg.adv.",
                "gloss_kr": "아마도, 대개, 혹은",
                "gloss_en": "perhaps, somewhere, I suppose",
                "syntax": "LFG 관점에서 이 부사는 문장 전체 혹은 양화사 영역을 한정하는 양상(modal) 부사로 기능한다 [ADJUNCT [PRED 'που', MOD VP]]. 생성문법적으로는 TP 상위 부가어(adjoined) 위치에 병합되어 명제의 진리치를 완화하는 에피스틱 모달리티(epistemic modality)를 실현한다. 화용적으로는 화자의 추정이나 일반적인 개연성을 나타낸다.",
                "background": "που는 특정한 누군가뿐만 아니라 트로이아 전선 어딘가에 존재할 수 있는 수많은 피해자들을 포괄하는 개연성을 부여한다. 이 단어는 헥토르로 인해 가족을 잃은 이들이 특정한 한두 사람이 아니라 아카이오이 진영 곳곳에 산재해 있음을 시사한다. 전쟁의 참상이 전 진영에 미친 보편적 상처임을 강조하는 문맥적 의미를 지닌다.",
                "etymology": "Chantraine(DELG)은 이를 장소·양태 부사 재구형 *kʷe- 또는 *ku-에서 유래한 것으로 분석하며, 인도유럽어의 의문/부정 대명사 어간과 연관시킨다. 산스크리트어 kú('어디에')와 상응하는 음운론적 대응을 보인다. 그리스어 안에서 불확실성과 추정을 나타내는 파생 부사로 고착화되었다. 고대 그리스어의 다양한 방언을 거쳐 후대 문어체 속에서 의미가 전이되었다."
            },
            {
                "g": "ἀδελφεὸν",
                "pos": "명사",
                "lemma": "ἀδελφός, ἀδελφοῦ, ὁ",
                "parse": "sg.acc.m.",
                "gloss_kr": "형제를, 동생을",
                "gloss_en": "brother",
                "syntax": "LFG f-구조에서 이 명사는 복합 관계절 내부에서 타동사 ἔκτανεν의 OBJ 자리를 점하며 [PRED 'ἀδελφεός', CASE acc, θ-ROLE PATIENT]로 분석된다. 생성문법적으로 [VP ἔκτανεν DP[acc]] 구구조 안에서 목적어 자리에 병합된다. 격 배정에 따라 대격 표지를 부여받으며, 친족 관계를 나타내는 명사로서 논항 구조상 필수적인 대니아를 형성한다.",
                "background": "ἀδελφεός은 전장에서 형제나 동생을 잃는 것이 그리스 전사들에게 얼마나 직접적이고 뼈아픈 고통이었음을 보여준다. 영웅 서사에서 혈육의 죽음은 단순한 개인적 슬픔을 넘어 집단의 명예와 직결되는 복수의 당위성을 부여한다. 이 단어는 헥토르가 아카이오이 군사 개개인에게 가정한 파괴적 위협의 깊이를 증명한다.",
                "etymology": "Beekes(EDG)는 이 단어가 PIE *sm-gʷhel-koy-('궁극적으로 같은 자궁에서 난 자') 합성어적 성격을 띤다고 추정하며, 선그리스어와의 접점이나 고유 인도유럽어 합성 어간의 변형으로 본다. 동계어로 산스크리트어의 친족 관련 어휘와의 비교 연구가 존재한다. 그리스어 독자적 음운 변화를 거쳐 고전기 형용사/명사 체계로 정착하였다. 현대 그리스어 ἀδελφός로 이어져 '형제'를 뜻하는 일상어로 활발히 쓰인다."
            },
            {
                "g": "ἔκτανεν",
                "pos": "동사",
                "lemma": "κτείνω",
                "principalParts": "κτείνω – κτενέω – ἔκτανον / ἔκτεινα – ἔκτονα – – ἐκτάθην",
                "parse": "3rd.sg.aor.ind.act.",
                "gloss_kr": "죽였다, 살해했다",
                "gloss_en": "killed, slew",
                "syntax": "LFG f-구조에서 이 동사는 PRED로서 관계절의 핵심 술어를 담당하며 [PRED 'κτείνω<SUBJ,OBJ>', SUBJ Ἕκτωρ, OBJ ἀδελφεὸν]로 분석된다. 생성문법적으로는 접두사적 과거형(augment)과 함께 TP 헤드로 이동하며, [TP Ἕκτωρᵢ T [vP tᵢ [VP ἀδελφεὸν t_v ]]] 구조의 능동태 구문을 이룬다. 논항 구조상 행위자(agent)와 환자(patient)를 모두 지배한다.",
                "background": "ἔκτανεν은 과거완료적 단일거거(aorist) 시제를 통해 헥토르가 과거에 저지른 살해 행위가 현재까지 지워지지 않는 원한의 불씨로 작용하고 있음을 강조한다. 이 동사는 헥토르의 무예가 지닌 파괴적 성격을 객관적 사실로 확정하며, 아카이오이 군사들의 적개심을 정당화하는 서사적 근거가 된다. 영웅의 영광스러운 승리가 상대 진영에는 씻을 수 없는 상처였음을 보여준다.",
                "etymology": "Chantraine(DELG)은 PIE 재구형 *kten-('치다, 죽이다')에 기원하며, 모음 교체(ablaut)와 접두사 증강(augment) 형태를 거친 것으로 본다. 산스크리트어 hatá-('살해된') 및 헷타이트어 동계 어휘들과 음운론적으로 긴밀히 연결된다. 그리스어 전통 시가 언어 속에서 시제 어간의 다양한 변형태를 유지하며 발전했다. 고전 시어로서 비극과 서사시에 주로 쓰이고 현대 구어체에는 직접 생존하지 않는다."
            },
            {
                "g": "Ἕκτωρ",
                "pos": "명사",
                "lemma": "Ἕκτωρ, Ἕκτορος, ὁ",
                "parse": "sg.nom.m.",
                "gloss_kr": "헥토르는",
                "gloss_en": "Hector",
                "syntax": "LFG f-구조에서 Ἕκτωρ는 관계절 내부의 SUBJ 기능을 담당하며 [PRED 'Ἕκτωρ', CASE nom, θ-ROLE AGENT]로 표기된다. 생성문법적으로는 [TP Ἕκτωρᵢ [T' T [vP tᵢ ...]]] 구조에서 주어 명사구(subject NP)로서 [Spec, vP]에서 [Spec, TP]로 이동하여 주격 지배를 받는다. 능동 동사 ἔκτανεν의 행위자 논항을 충족한다.",
                "background": "Ἕκτωρ는 트로이아의 가장 위대한 수호자이자 방어자로서, 아카이오이 군사들에게는 가장 두려운 적이자 형제·부모·자식을 앗아간 원흉이다. 그의 이름이 등장하는 순간 트로이아 성벽 안팎의 비극적 긴장감이 최고조에 달한다. 영웅으로서의 고결함과 적들에게 비친 파괴자의 면모가 동시에 부각된다.",
                "etymology": "Beekes(EDG)는 이 고유명사의 어원을 '잡아두는 자, 지탱하는 자'를 뜻하는 동사 ἔχω(PIE *segh-)의 파생 명사로 본다. 도시를 지탱하는 자라는 이름의 뜻과 트로이아를 홀로 지키는 그의 신화적 역할이 긴밀하게 연결된다. 인도유럽어족의 명명 관습에 부합하는 고유명사 형태를 띤다. 그리스어 고유의 인명으로서 후대 문학과 역사 기록에 광범위하게 전승되었다."
            }
        ]
    },
    {
        "ref": "Iliad 6.737",
        "trans": "혹은 아버지를 혹은 심지어 아들을 말이다, 아카이오이 군사들 중 참으로 많은 이들이",
        "words": [
            {
                "g": "ἢ",
                "pos": "접속사",
                "lemma": "ἤ",
                "parse": "coord.conj.",
                "gloss_kr": "혹은, 혹은 ~이거나",
                "gloss_en": "or, either",
                "syntax": "LFG f-구조에서 이 접속사는 대등 접속기능을 수행하여 명사구(ἀδελφεόν, πατέρ᾽, υἱόν)들을 병렬 연결하며, [COORDINATION [CONJ ἤ, ITEMS [...]]] 구조를 형성한다. 생성문법적으로는 X-bar 이론상 동등한 범주의 구들을 대등하게 접속하는 ConjP의 헤드로 분석된다. 문맥상 선택적 병렬 관계를 명시한다.",
                "background": "반복되는 ἤ 접속사는 헥토르의 손에 죽어간 피해자들의 가족 관계가 얼마나 다양한 형태로 처참하게 파괴되었는지를 누적적으로 보여준다. 형제뿐만 아니라 아버지와 아들까지 포괄함으로써 트로이아 전쟁이 온 세대를 걸친 파멸이었음을 강조한다. 비극의 규모를 확장하는 수사학적 연결사다.",
                "etymology": "Chantraine(DELG)은 PIE 대조/선택 재구형 *ēi 또는 *ō에 기원한다고 분석하며, 다른 인도유럽어 제어의 선택 접속사들과 동계 관계를 형성한다. 그리스어 전역에서 선택과 비교를 나타내는 표준 접속사로 고착화되었다. 고전 그리스어를 거쳐 현대 그리스어의 선택 접속사 ἤ로 직접 이어진다."
            },
            {
                "g": "πατέρ᾽",
                "pos": "명사",
                "lemma": "πατήρ, πατρός, ὁ",
                "parse": "sg.acc.m.",
                "gloss_kr": "아버지를",
                "gloss_en": "father",
                "syntax": "LFG f-구조에서 이 명사는 앞선 동사 ἔκτανεν의 생략된 논항 구조에서 환자(patient) 목적어 역할을 이어받으며, [PRED 'πατήρ', CASE acc, θ-ROLE PATIENT]로 분석된다. 생성문법적으로 엘리전(elision)을 겪은 목적어 DP로서 [VP t_v πατέρα] 위치에서 격을 할당받는다. 친족 위계상 직계 존속의 피해를 표상한다.",
                "background": "파테르(πατήρ, 아버지)의 상실은 고대 그리스 사회에서 가계의 단절과 경제적·사회적 보호자의 부재를 뜻하는 가장 극심한 재난 중 하나였다. 헥토르의 무예로 인해 아버지를 잃은 군사들의 비통함은 전쟁의 참혹함을 가장 인간적인 차원에서 증언한다. 서사 속에서 세대 간 단절의 비극성을 집약한다.",
                "etymology": "Beekes(EDG)는 PIE 친족 호칭 재구형 *ph₂tḗr(e급 어간, 후두음 h₂ 포함)에 기원한다고 밝힌다. 산스크리트어 pitár-, 라틴어 pater, 영어 father 등과 완벽한 음운론적 동계 관계를 이루는 대표적인 인도유럽어 어휘다. 그리스어에서 후두음 탈락과 모음 교체를 거쳐 정착했다. 현대 그리스어 πατέρας로 이어져 여전히 일상적으로 쓰인다."
            },
            {
                "g": "ἠὲ",
                "pos": "접속사",
                "lemma": "ἠέ",
                "parse": "coord.conj.",
                "gloss_kr": "또는, 혹은",
                "gloss_en": "or",
                "syntax": "LFG f-구조에서 이 시적 형태의 접속사는 앞선 ἤ와 동일하게 대등 접속 구문을 매개하며 [COORDINATION [CONJ ἠέ]] 속성-값 행렬을 구성한다. 생성문법적으로는 메트릭스 운율 제약을 만족시키기 위해 선택된 서사시적 변이형(epic variant) 접속사로 분석된다. 구구조상 병렬 성분들을 대등하게 연결한다.",
                "background": "ἠὲ의 반복은 호메로스 서사시 특유의 운율적 호흡을 유지하면서 피해의 대상이 다층적임을 거듭 환기한다. 아버지뿐만 아니라 아들로 이어지는 혈연적 파국의 연속성을 시적으로 각인시키는 역할을 한다. 청중의 감정적 동요를 점진적으로 고조시키는 수사적 리듬감을 형성한다.",
                "etymology": "Chantraine(DELG)은 기본 접속사 ἤ의 시적·고형 확장형으로 분석하며, 인도유럽어 공통의 선택 소사 계열에 속한다. 서사시 운율을 맞추기 위해 장모음화 및 어미 변형을 겪은 호메로스 방언의 전형적인 형태다. 후대 아티카 산문에는 쓰이지 않고 고전 서사시에 국한되는 고어적 특징으로 남았다."
            },
            {
                "g": "καὶ",
                "pos": "소사",
                "lemma": "καί",
                "parse": "coord.conj.",
                "gloss_kr": "심지어, 그리고",
                "gloss_en": "and, even",
                "syntax": "LFG f-구조에서 이 소사는 첨가(additive) 혹은 강조 기능을 수행하며 [ADJUNCT [PRED 'καί', MOD υἱόν]] 구조를 이룬다. 생성문법적으로는 초점 수식어(focus particle)로서 후행하는 명사구 υἱόν의 정보구조적 돌출성을 높인다. 문장 내에서 동등 성분 연결과 극단적 사례의 강조를 동시에 수행한다.",
                "background": "여기서 καὶ는 단순한 연결을 넘어 '심지어 아들까지'라는 비극의 극단성을 강조한다. 자식을 먼저 떠나보내는 부모의 비극은 고대 그리스 정서에서 가장 가혹한 형벌로 여겨졌으며, 이 단어로 인해 전쟁의 참혹함이 정점에 달한다. 서사의 비장미를 극대화하는 핵심 수사어다.",
                "etymology": "Beekes(EDG)는 어원이 불투명하며 선그리스어 기층 어휘일 가능성이나 독립된 인도유럽어 대명사적 부사 기원을 복합적으로 검토한다. 확실한 PIE 동계어 재구는 학자들 간에 논쟁적이다. 그리스어 고유의 발달을 거쳐 접속사와 부사 기능을 겸비하게 되었다. 현대 그리스어에서도 καὶ(구어체 kε/και)로 이어져 가장 빈번하게 쓰이는 기본 어휘로 남았다."
            },
            {
                "g": "υἱόν,",
                "pos": "명사",
                "lemma": "υἱός, υἱοῦ, ὁ",
                "parse": "sg.acc.m.",
                "gloss_kr": "아들을",
                "gloss_en": "son",
                "syntax": "LFG f-구조에서 이 명사는 앞선 동사구의 환자 목적어 열을 완결하며 [PRED 'υἱός', CASE acc, θ-ROLE PATIENT]로 분석된다. 생성문법적으로 [VP t_v υἱόν] 구조에서 대격 지배를 받는다. 가계의 미래를 상징하는 직계 비속의 상실을 통사적으로 완결된 목적어 논항으로 실현한다.",
                "background": "υἱός(아들)의 상실은 전사한 부모의 혈통이 끊어짐을 의미하며, 고대 영웅 사회에서 가장 치명적인 영적·사회적 타격이다. 헥토르의 손에 죽어간 젊은 전사들의 죽음이 그들의 아버지에게 안겨준 비극적 파장을 완결된 형태로 보여준다. 세대 계승의 단절이라는 전쟁의 본질적 허무함을 환기한다.",
                "etymology": "Chantraine(DELG)과 Beekes(EDG)는 PIE 재구형 *hu(i)su-('자식, 새끼')에 기원한다고 본다. 산스크리트어 sūnu-('아들'), 고대 게르만어 sunus 등과 완벽하게 대응하는 인도유럽어족의 유서 깊은 친족 명칭이다. 그리스어 내부에서 다양한 모음 활용형(υἱεύς 등)과 혼재되다 υἱός로 정착했다. 현대 그리스어에는 직계 형태 대신 파생어나 다른 어휘로 대체되고 고전적 흔적으로 남았다."
            },
            {
                "g": "ἐπεὶ",
                "pos": "접속사",
                "lemma": "ἐπεί",
                "parse": "subord.conj.",
                "gloss_kr": "~이기 때문에, ~하므로",
                "gloss_en": "since, because",
                "syntax": "LFG f-구조에서 이 종속접속사는 이유절(adverbial clause of cause)을 이끌며, [ADJUNCT [PRED 'ἐπεί', XCOMP [...] ]] 형태로 주절과 연결된다. 생성문법적으로는 [CP [C' ἐπεί [TP ...]]] 구조를 이루어 인과 관계를 나타내는 종속절의 CP 헤드를 점한다. 앞선 진술의 객관적 근거와 당위성을 뒷받침한다.",
                "background": "ἐπεὶ는 주절의 주관적인 적개심이나 원한이 근거 없는 것이 아니라, 실제 전장에서 수많은 이들이 겪은 참혹한 살육의 역사에 기반하고 있음을 논리적으로 정당화한다. 이 접속사 뒤에 이어지는 객관적 사실의 나열은 화자의 설득력을 극대화한다. 전쟁의 거대한 비극성을 인과적 필연성으로 묶어낸다.",
                "etymology": "Beekes(EDG)는 전치사/부사 ἐπί와 관계대명사/지시대명사 요소의 결합으로 분석하며, PIE 전치사 어근에 기원한다고 본다. 그리스어 고유의 전치·접속사화 과정을 거쳐 시간 및 원인을 나타내는 복합 접속사로 발달했다. 고전 시가와 산문을 거쳐 후대 그리스어의 인과 표현으로 이어졌다."
            },
            {
                "g": "μάλα",
                "pos": "부사",
                "lemma": "μάλα",
                "parse": "intens.adv.",
                "gloss_kr": "매우, 몹시, 참으로",
                "gloss_en": "very, exceedingly, much",
                "syntax": "LFG f-구조에서 이 부사는 형용사/부사 수식어로서 강세(intensity)를 부여하며 [ADJUNCT [PRED 'μάλα', MOD πολλοί]] 구조를 이룬다. 생성문법적으로는 수량사구(Quantifier Phrase) 혹은 형용사구의 상위 부가어 위치에 병합되어 정도(degree) 자질을 증폭시킨다. 수식하는 형용사의 양적 규모를 극대화한다.",
                "background": "μάλα는 헥토르에게 희생된 아카이오이 군사의 숫자가 결코 소수가 아님을 강조하는 수량적 강조사다. 이 단어는 한 영웅의 무예가 가져온 파괴의 규모가 전 군영 전체에 미친 거대한 비극임을 수치적·감정적으로 확증한다. 서사의 객관적 무게감을 더해주는 핵심 부사다.",
                "etymology": "Chantraine(DELG)은 PIE 재구형 *melh₂-('크다, 강하다') 또는 이와 연관된 강조 부사 어근에 기원한다고 본다. 산스크리트어 máha('위대한'), 라틴어 melior 등의 어족 내 관련 어휘들과 비교된다. 그리스어 내에서 정도를 나타내는 전용 부사로 고착되어 광범위하게 쓰였다. 시적 표현을 넘어 고전 산문에도 널리 활용된 대표적 강조어다."
            },
            {
                "g": "πολλοὶ",
                "pos": "형용사",
                "lemma": "πολύς, πολλή, πολύ",
                "parse": "pl.nom.m.",
                "gloss_kr": "많은",
                "gloss_en": "many, numerous",
                "syntax": "LFG f-구조에서 이 형용사는 종속절의 주어 명사구 내에서 한정사/수량사 역할을 수행하며 [PRED 'πολύς', SPECIFIER plural, θ-ROLE QUANTIFIER]로 분석된다. 생성문법적으로 [DP πολλοὶ Ἀχαιῶν] 구조에서 명사구의 핵심 수량부사로 병합되어 주어의 방대한 규모를 지시한다.",
                "background": "πολλοὶ는 트로이아 전장에서 쓰러진 그리스 전사들의 막대한 인명 피해를 시각화하는 단어다. 헥토르 한 사람의 무력이 아카이오이 진영 전체에 얼마나 엄청난 재앙이었는지를 수량적으로 뒷받침한다. 영웅의 위대함이 수많은 무명의 죽음들을 바탕으로 성립됨을 보여준다.",
                "etymology": "Beekes(EDG)는 PIE 재구형 *pl̥h₁u-('많은, 가득 찬')에 기원한다고 밝힌다. 산스크리트어 purú-, 고대 아일랜드어 il, 영어 full 등과 완벽한 인도유럽어 공통 동계어계를 형성하는 핵심 어휘다. 그리스어에서 모음 교체와 어미 변화를 거쳐 형용사 체계로 정착했다. 현대 그리스어 πολύς로 이어져 현대에도 일상적으로 쓰인다."
            },
            {
                "g": "Ἀχαιῶν",
                "pos": "명사",
                "lemma": "Ἀχαιοί, Ἀχαιῶν, οἱ",
                "parse": "pl.gen.m.",
                "gloss_kr": "아카이오이 군사들의",
                "gloss_en": "of the Achaeans",
                "syntax": "LFG f-구조에서 이 소유격 명사는 수량사구 내부의 복합 논항으로서 [PRED 'Ἀχαιοί', CASE gen, θ-ROLE POSSESSOR/WHOLE]로 분석된다. 생성문법적으로 [DP πολλοὶ [NP Ἀχαιῶν]] 구조에서 부분격(partitive genitive)으로서 상위 수량사의 전체 집단을 한정한다.",
                "background": "Ἀχαιοί는 트로이아 원정군 전체를 지칭하는 명칭으로, 이들의 집단적 피해가 곧 전쟁 전체의 승패와 직결되어 있음을 보여준다. 개인의 복수심이 전체 군대의 역사적 대의와 맞물려 있음을 증명하는 집단 주체다. 서사의 거대한 무대를 형성하는 종족적 표지다.",
                "etymology": "Beekes(EDG)와 하타이트 기록 연구에 따르면, 아나톨리아어파의 지명/민족명 *Aḫḫiyawā와 역사적·음운론적으로 깊게 연관된 명칭으로 평가된다. 선그리스어 및 미케네 문명기의 행정 문서(Linear B a-ka-wi-ja-de)에서 기원을 찾을 수 있다. 그리스어 서사시 전통 속에서 민족 명칭으로 고착되었다. 역사 시대 이후 고대 그리스인들의 동족 의식을 나타내는 대표적 명칭으로 기능했다."
            }
        ]
    },
    {
        "ref": "Iliad 6.738",
        "trans": "헥토르의 손바닥 안에서 이빨로 끝없는 땅을 물었으니 말이다.",
        "words": [
            {
                "g": "Ἕκτορος",
                "pos": "명사",
                "lemma": "Ἕκτωρ, Ἕκτορος, ὁ",
                "parse": "sg.gen.m.",
                "gloss_kr": "헥토르의",
                "gloss_en": "of Hector",
                "syntax": "LFG f-구조에서 이 소유격 명사는 전치구 내부의 영득어 논항으로 기능하며 [PRED 'Ἕκτωρ', CASE gen, θ-ROLE AGENT/POSSESSOR]로 분석된다. 생성문법적으로 [PP ἐν [DP Ἕκτορος παλάμῃσιν]] 구조에서 소유격 지배를 받아 명사구의 속성 값을 완성한다. 살해의 주체를 소유격으로 명시한다.",
                "background": "소유격 Ἕκτορος는 전사들이 죽어간 그 죽음의 공간과 방식이 전적으로 헥토르의 무예와 손에 의해 좌우되었음을 냉혹하게 각인시킨다. 적장의 손에 의해 쓰러진다는 굴욕과 죽음의 절대성을 상징하는 서사적 표지다. 영웅의 파괴적 역량이 미치는 물리적 영역을 한정한다.",
                "etymology": "Beekes(EDG)와 Chantraine(DELG) 공히 ἔχω 동사 어근에서 파생된 인명 Ἕκτωρ의 사격(oblique case) 형태 분석을 지지한다. 인도유럽어 고유의 명사 3변화 어미(-ος)를 취하며, 호메로스 서사시 전반에 걸쳐 일정한 음운 구조를 유지했다. 그리스 문학사 전체에서 영웅적 비극성을 상징하는 고유명사로 전승되었다."
            },
            {
                "g": "ἐν",
                "pos": "전치사",
                "lemma": "ἐν",
                "parse": "prep.",
                "gloss_kr": "~안에서, ~의",
                "gloss_en": "in, in the hands of",
                "syntax": "LFG f-구조에서 이 전치사는 여격 지배 전치사로서 처소/수단 의미장을 형성하며 [PRED 'ἐν', OBJ παλάμῃσιν, CASE dat]로 분석된다. 생성문법적으로는 PP 헤드로 기능하여 후행하는 여격 명사구를 인준하고, 공간적·수단적 관계를 통사적으로 매개한다.",
                "background": "전치사 ἐν은 물리적 공간이나 처소를 뜻하는 기본 의미에서 확장되어, 여기서는 헥토르의 손아귀라는 통제적 지배 영역 안에서 죽음을 맞이했음을 은유적으로 표현한다. 적의 무력에 완전히 포섭된 상태의 무력함을 생생하게 전달한다.",
                "etymology": "Beekes(EDG)는 PIE 처소 전치사 재구형 *en에 기원한다고 밝힌다. 산스크리트어 án, 라틴어 in, 영어 in 등과 완벽하게 일치하는 인도유럽어족 공통의 전치사 유산이다. 그리스어 방언 전반에서 처소·여격 지배 전치사로 고도로 발달했다. 현대 그리스어의 주요 전치사 체계로 그대로 계승되어 활발히 쓰인다."
            },
            {
                "g": "παλάμῃσιν",
                "pos": "명사",
                "lemma": "παλάμη, παλάμης, ἡ",
                "parse": "pl.dat.f.",
                "gloss_kr": "손바닥들 안에서, 손아귀에서",
                "gloss_en": "in the palms, hands",
                "syntax": "LFG f-구조에서 이 명사는 전치사 ἐν의 OBJ 논항이며 [PRED 'παλάμη', CASE dat, θ-ROLE INSTRUMENT/LOCATIVE]로 분석된다. 생성문법적으로 [PP ἐν [DP παλάμῃσιν]] 구조에서 여격 자배를 받으며, 호메로스식 장모음 복수 여격 형태(-ῃσιν)를 취한다.",
                "background": "παλάμῃσιν(손바닥)은 헥토르의 물리적인 힘과 전투 능력을 상징하는 신체 부위다. 전사들이 땅을 물며 죽어간 장소가 적의 '손아귀 안'이었다는 표현은 헥토르의 무자비한 무예와 그에 압도된 전사들의 처참한 패배를 시각적으로 극대화한다.",
                "etymology": "Chantraine(DELG)은 PIE 재구형 *pĺ̥h₂-mo-('펼쳐진 손', 후두음 h₂ 포함)에 기원한다고 분석한다. 라틴어 palma('손바닥'), 고대 아일랜드어 lam 등과 완벽한 동계 관계를 형성한다. 그리스어에서 호메로스식 확장 복수 어미(-ῃσιν)를 취하는 형태로 고착되었다. 후대 산문에서는 일반 명사형으로 쓰이다가 현대 그리스어 구어체에서는 점차 사어가 되었다."
            },
            {
                "g": "ὀδὰξ",
                "pos": "부사",
                "lemma": "ὀδάξ",
                "parse": "adv.",
                "gloss_kr": "이빨로, 깨물어",
                "gloss_en": "with the teeth, biting",
                "syntax": "LFG f-구조에서 이 부사는 동사 ἕλον의 양태(manner) 부사로 기능하며 [ADJUNCT [PRED 'ὀδάξ', MOD ἕλον]] 구조를 형성한다. 생성문법적으로는 VP 부가어 위치에 병합되어 행위의 신체적 양태를 수식한다. 고대 시어 특유의 생생한 감각적 현시성을 부여한다.",
                "background": "ὀδὰξ(이빨로)은 죽음을 맞이하는 전사가 고통 속에서 땅을 이빨로 물어뜯는 최후의 순간을 묘사하는 잔혹하고도 사실적인 시적 표현이다. 전장의 비참함과 죽음의 육체적 공포를 독자의 오감에 직접 전달하는 강력한 수사적 장치다.",
                "etymology": "Beekes(EDG)는 이를 치아를 뜻하는 PIE 어근 *h₃dent- / *dnot- 계열에서 파생된 부사형으로 본다. 라틴어 dens('이빨')와 어원적 친족 관계를 지닌다. 그리스어 내부에서 치아를 사용하는 물리적 동작을 묘사하는 고유 부사로 고착되었다. 호메로스 시가 특유의 사실적 묘사 어휘로 전통을 이어갔다."
            },
            {
                "g": "ἕλον",
                "pos": "동사",
                "lemma": "αἱρέω",
                "principalParts": "αἱρέω – αἱρήσω – ἑῖλον – ᾕρηκα – ᾕρημαι – ᾑρέθην",
                "parse": "3rd.pl.aor.ind.act.",
                "gloss_kr": "움켜쥐었다, 물었다",
                "gloss_en": "caught, seized, bit",
                "syntax": "LFG f-구조에서 이 동사는 종속절의 PRED이며 [PRED 'αἱρέω<SUBJ,OBJ>', SUBJ πολλοὶ, OBJ οὖδας]로 분석된다. 생성문법적으로는 [TP πολλοὶ [vP tᵢ [VP ὀδὰξ οὖδας ἕλον]]] 구조의 능동태 구문을 구성하며, 단일거거(aorist) 시제 헤드로 이동하여 역사적 사실을 확정한다.",
                "background": "여기서 ἕλον은 '움켜쥐다' 혹은 관용적 표현으로 '이빨로 땅을 물다'라는 뜻을 이루어, 전사들이 최후를 맞이하며 대지를 물어뜯는 처절한 광경을 시각화한다. 승자의 영광과 패자의 굴욕이 교차하는 전장의 현장을 극적으로 마감하는 동사다.",
                "etymology": "Chantraine(DELG)은 이 동사의 과거 어간(2구멍 단일거거 *ϝελον)이 원래 다른 어근에서 유래하여 보완적 현재형 αἱρέω와 결합한 형태임을 밝힌다. PIE 재구형과의 직접적 연계는 복잡한 어간 통합 과정을 거쳤다. 그리스어 전역에서 '잡다, 취하다'의 기본 동사로 널리 쓰였으며, 현대 그리스어의 파생 표현으로 이어진다."
            },
            {
                "g": "ἄσπετον",
                "pos": "형용사",
                "lemma": "ἄσπετος, ἄσπετον",
                "parse": "sg.acc.n.",
                "gloss_kr": "끝없는, 말로 다 할 수 없는",
                "gloss_en": "1. unspeakable, boundless, 2. immense",
                "syntax": "LFG f-구조에서 이 형용사는 명사구 내부의 수식어로서 [PRED 'ἄσπετος', MOD οὖδας, θ-ROLE ATTRIBUTE]로 분석된다. 생성문법적으로 [DP ἄσπετον οὖδας] 구구조 내에서 형용사구(AP)로서 명사를 한정하며 양적·공간적 광대함을 표상한다.",
                "background": "ἄσπετος은 눈앞에 펼쳐진 트로이아의 광활한 대지가 전사들의 피로 물드는 비극적 공간임을 강조하며, 그 참상의 규모가 언어로 다 담을 수 없을 만큼 광대함을 뜻한다. 전장의 무한한 허무감과 비장미를 고조시키는 수식어다.",
                "etymology": "Beekes(EDG)는 부정 접두사 ἀ-와 말하다를 뜻하는 사어적 어근 *spe(w)-의 합성어로 분석하며, '말로 다 표현할 수 없는, 형언할 수 없는'이 원래 의미임을 밝힌다. 그리스어 독자적 어원 발달을 거쳐 서사시 전용의 과장적 수식어로 고착화되었다. 고전 시가 문헌에서 광대함과 엄청남을 나타내는 시적 어휘로 널리 쓰였다."
            },
            {
                "g": "οὖδας.",
                "pos": "명사",
                "lemma": "οὖδας, οὔδεος, τό",
                "parse": "sg.acc.n.",
                "gloss_kr": "땅을, 대지를",
                "gloss_en": "ground, earth",
                "syntax": "LFG f-구조에서 이 명사는 동사 ἕλον의 환자(patient) 목적어 논항이며 [PRED 'οὖδας', CASE acc, θ-ROLE PATIENT]로 분석된다. 생성문법적으로 [VP ἄσπετον οὖδας ἕλον] 구구조 안에서 대격 지배를 받아 행동의 물리적 대상 지점을 완성한다.",
                "background": "οὖδας는 전사들이 쓰러져 스러지는 차가운 트로이아의 대지를 가리킨다. 영웅들이 영광을 찾아 떠나왔으나 결국 이름 없이 묻히게 되는 비극적 공간의 실체를 상징하며, 인간의 죽음과 대지의 영속성을 대조시키는 서사적 배경을 이룬다.",
                "etymology": "Chantraine(DELG)은 PIE 재구형 *eudH- 또는 이와 유사한 대지·바닥을 뜻하는 어근에 기원한다고 본다. 산스크리트어 및 타 인도유럽어족의 바닥·토지 관련 어휘들과 간접적 비교가 이루어진다. 그리스어 서사시 전통 속에서 대지를 가리키는 고정된 시적 명사로 정착했다. 후대 산문에는 잘 쓰이지 않는 문학적 어휘로 남았다."
            }
        ]
    },
    {
        "ref": "Iliad 6.739",
        "trans": "참으로 그대의 아버지는 파멸적인 전투에서 부드러운 분이 아니셨기에,",
        "words": [
            {
                "g": "οὐ",
                "pos": "부사",
                "lemma": "οὐ",
                "parse": "neg.adv.",
                "gloss_kr": "아니었다, 결코 ~않았다",
                "gloss_en": "not, no",
                "syntax": "LFG f-구조에서 이 부정사는 술어의 진리치를 반전시키는 부정 부사로 기능하며 [ADJUNCT [PRED 'οὐ', MOD ἔσκε]] 구조를 형성한다. 생성문법적으로는 TP 상위 부가어 위치에 병합되어 진술의 명제를 부정하는 극성 자질(polarity feature)을 활성화한다.",
                "background": "부정사 οὐ는 안드로마케의 아버지(에티온)가 전쟁터에서 결코 유순하거나 나약한 인물이 아니었음을 단호하게 선언한다. 이는 영웅의 가계가 지닌 강인함과 무예의 전통을 증명하는 동시에, 그러한 강함조차 아킬레우스의 무자비한 공격 앞에는 무력했음을 암시하는 복선이다.",
                "etymology": "Beekes(EDG)는 PIE 부정사 재구형 *h₂e्यू 또는 유사 형태에 기원한다고 보며, 그리스어 전역에서 가장 기본적인 객관적 부정사로 발달했다. 산스크리트어의 부정 형태들과 일부 음운적 유사성을 지닌다. 그리스어 역사 전반에 걸쳐 불변의 부정 어휘로 확고하게 자리 잡았으며, 현대 그리스어 ὀν/δεν의 조상 격으로 이어진다."
            },
            {
                "g": "γὰρ",
                "pos": "소사",
                "lemma": "γάρ",
                "parse": "coord.conj.",
                "gloss_kr": "왜냐하면, 과연",
                "gloss_en": "for, because",
                "syntax": "LFG f-구조에서 이 후치소사는 인과 관계를 나타내는 담화 접속사이며 [ADJUNCT [PRED 'γάρ', COORD_RELATION cause]]로 분석된다. 생성문법적으로는 두 번째 위치(Wackernagel's position)에 클리틱 형태로 병합되어 앞선 발화와 현재 발화 사이의 논리적 설명 관계를 매개한다.",
                "background": "γὰρ는 앞서 헥토르가 야기한 수많은 죽음의 인과적 배경을 설명하며, 왜 안드로마케의 친가 역시 아킬레우스로 인해 참혹한 파멸을 맞이했는지에 대한 역사적 정당성을 부여한다. 서사의 인과 고리를 단단하게 엮어주는 핵심 접속사다.",
                "etymology": "Chantraine(DELG)은 예비적 강조 소사들의 결합에서 유래한 것으로 분석하며, 인도유럽어 공통의 설명적 담화 표지 계통에 속한다. 그리스어 독자적 어원 발달을 거쳐 이유와 설명을 나타내는 가장 빈번한 후치소사로 정착했다. 고전 시가와 산문 전반에 걸쳐 필수적인 통사적 연결사로 기능했다."
            },
            {
                "g": "μείλιχος",
                "pos": "형용사",
                "lemma": "μείλιχος, μείλιχον",
                "parse": "sg.nom.m.",
                "gloss_kr": "부드러운, 온유한, 자비로운",
                "gloss_en": "gentle, mild, kindly",
                "syntax": "LFG f-구조에서 이 형용사는 주격 보어(subject complement)로서 연결동사 ἔσκε와 결합하며 [PRED 'μείλιχος', SUBJ πατὴρ, OBLCOMP XCOMP]로 분석된다. 생성문법적으로 [TP πατὴρ [vP tᵢ [VP μείλιχος ἔσκε]]] 구조에서 주어를 수식하는 술어 주격(predicative adjective)으로 기능한다.",
                "background": "μείλιχος는 전쟁터라는 살육의 공간에서 찾아볼 수 없는 '온유함과 자비로움'을 뜻하며, 안드로마케의 아버지가 결코 잔인한 폭력배가 아니었음을 강조하여 그의 죽음이 지닌 비극성을 극대화한다. 강인한 전사이면서도 온화했던 인품을 회상하는 비장한 단어다.",
                "etymology": "Beekes(EDG)는 PIE 재구형 *meldh-('부드럽다, 녹다') 또는 꿀을 뜻하는 어근과의 연관성을 검토하며, 부드러움과 달콤함을 뜻하는 어근에서 파생되었다고 본다. 라틴어 mollis('부드러운')와 어원적 동계 관계를 형성한다. 그리스어 시가 언어 속에서 부드러고 온화한 성정을 묘사하는 고유 형용사로 정착했다."
            },
            {
                "g": "ἔσκε",
                "pos": "동사",
                "lemma": "εἰμί",
                "principalParts": "εἰμί – ἔσομαι – – – – –",
                "parse": "3rd.sg.impf.ind.act.",
                "gloss_kr": "~였다",
                "gloss_en": "was",
                "syntax": "LFG f-구조에서 이 동사는 연결동사(copula)로서 주어와 주격 보어를 매개하며 [PRED 'εἰμί<SUBJ,OBL>', SUBJ πατὴρ, OBL μείλιχος]로 분석된다. 생성문법적으로는 호메로스식 반복 과거/미완료형(-σκ- 접사 포함)으로서 [TP πατὴρ T [vP tᵢ [VP μείλιχος ἔσκε]]] 구조의 보조 서술 헤드로 기능한다.",
                "background": "호메로스 시어인 ἔσκε(미완료 시제)는 과거의 지속적인 상태를 나타내며, 안드로마케의 아버지가 살아생전 지녔던 인품과 성향이 단발성이 아니라 그의 본질적 삶의 방식이었음을 시적으로 증언한다. 비극적 과거를 아련하게 회상하는 서사적 어조를 형성한다.",
                "etymology": "Chantraine(DELG)은 존재를 뜻하는 PIE 기본 어근 *es-에 반복/과거 접사 *-sk-가 결합한 호메로스 방언 고유의 미완료형으로 분석한다. 산스크리트어 as-, 라틴어 es- 등과 어원이 통한다. 그리스어 전통 시가 속에서 운율적 필요와 시제 강조를 위해 발전한 형태다. 후대 산문에는 축약된 표준 미완료형 ἦν으로 대체되었다."
            },
            {
                "g": "πατὴρ",
                "pos": "명사",
                "lemma": "πατήρ, πατρός, ὁ",
                "parse": "sg.nom.m.",
                "gloss_kr": "아버지가",
                "gloss_en": "father",
                "syntax": "LFG f-구조에서 이 명사는 연결절의 주어 논항이며 [PRED 'πατήρ', CASE nom, θ-ROLE THEME/EXPERIENCER]로 분석된다. 생성문법적으로 [TP πατὴρ [vP tᵢ [VP μείλιχος ἔσκε]]] 구조에서 [Spec, vP]에서 [Spec, TP]로 이동하여 주격 지배를 받는다. 문장의 술어 속성을 수용하는 주체다.",
                "background": "여기서 파테르(πατήρ)는 안드로마케의 아버지이자 테베의 왕인 에티온을 지칭한다. 아킬레우스의 손에 도시가 함락되고 아버지마저 잃어야 했던 안드로마케의 가계적 비극을 압축적으로 보여주는 핵심 인물 표지다. 헥토르가 안드로마케에게 곧 아버지이자 온 세상이라는 사실을 역설적으로 부각한다.",
                "etymology": "Beekes(EDG)는 PIE 친족 호칭 재구형 *ph₂tḗr에 기원함을 거듭 확인하며, 인도유럽어족 전역에 걸쳐 보존된 가장 원시적인 아버지 명칭임을 밝힌다. 그리스어 역사 전반에 걸쳐 음운 변화를 거치지 않고 안정적으로 유지된 핵심 어휘다. 현대 그리스어 πατέρας로 이어져 지금까지 쓰인다."
            },
            {
                "g": "τεὸς",
                "pos": "대명사",
                "lemma": "τός, τή, τόν",
                "parse": "sg.nom.m.",
                "gloss_kr": "그대의, 너의",
                "gloss_en": "thy, your",
                "syntax": "LFG f-구조에서 이 소유대명사는 주어 명사구의 한정사(possessive determiner)로 기능하며 [PRED 'τεός', SPECIFIER possessor, θ-ROLE POSSESSOR]로 분석된다. 생성문법적으로 [DP τεὸς πατὴρ] 구구조 내에서 명사구의 소유격 자질을 해소한다.",
                "background": "소유대명사 τεὸς는 화자(여기서는 헥토르 혹은 서술자)가 안드로마케를 직접 호명하며 그녀의 가계가 겪은 참혹한 상처를 환기하는 친밀하고도 비장한 어조를 형성한다. 남편인 헥토르를 향한 안드로마케의 발언 속에서 그녀가 짊어진 가족사의 무게를 일깨운다.",
                "etymology": "Chantraine(DELG)은 PIE 소유대명사 재구형 *te(w)os('너의')에 기원한다고 분석한다. 산스크리트어 tvīyá-, 라틴어 tuus 등과 완벽한 동계 관계를 형성한다. 그리스어 방언에서 호메로스 시가 특유의 소유대명사 형태(τεός/σός)로 분화되었다. 고전 시가와 비극에서 인물 간의 직접 화법에 빈번하게 쓰였다."
            },
            {
                "g": "ἐν",
                "pos": "전치사",
                "lemma": "ἐν",
                "parse": "prep.",
                "gloss_kr": "~안에서, ~중에",
                "gloss_en": "in, during",
                "syntax": "LFG f-구조에서 이 전치사는 여격 지배 전치사로서 처소/상황 의미장을 형성하며 [PRED 'ἐν', OBJ δαῒ, CASE dat]로 분석된다. 생성문법적으로는 PP 헤드로 기능하여 후행하는 여격 명사구를 인준하고, 전쟁이라는 상황적 배경을 통사적으로 매개한다.",
                "background": "여기서 전치사 ἐν은 단순한 공간적 처소를 넘어, 비참하고 파괴적인 전쟁이라는 거대한 상황적 소용돌이 속을 의미한다. 평화로운 시기가 아니라 참혹한 전란 속에서 영웅들의 가계가 어떻게 무너져 내렸는지를 극명하게 대조한다.",
                "etymology": "Beekes(EDG)는 PIE 처소 전치사 *en에 기원함을 확인하며, 그리스어 전역에서 처소 및 조건 여격을 지배하는 핵심 전치사로 고착되었다. 인도유럽어 제어의 공통 전치사 유산으로서 구조적 안정성을 지닌다."
            },
            {
                "g": "δαῒ",
                "pos": "명사",
                "lemma": "δῄς, δῄος, ἡ",
                "parse": "sg.dat.f.",
                "gloss_kr": "전투에서, 싸움에서",
                "gloss_en": "in battle, fight",
                "syntax": "LFG f-구조에서 이 명사는 전치사 ἐν의 OBJ 논항이며 [PRED 'δῄς', CASE dat, θ-ROLE LOCATIVE/SITUATION]로 분석된다. 생성문법적으로 [PP ἐν [DP δαῒ]] 구구조 안에서 여격 자배를 받으며, 시적 축약형태를 취한다.",
                "background": "δῄς(전투, 재난)는 단순한 무력 충돌을 넘어 파괴적이고 잔혹한 학살의 장을 가리키는 시적 명사다. 이 단어가 놓인 맥락은 아버지가 지녔던 온화한 성품이 전쟁이라는 극단적 폭력 속에서 얼마나 무력하게 짓밟혔는지를 대조적으로 부각한다.",
                "etymology": "Chantraine(DELG)은 PIE 재구형 *dāi-('자르다, 태우다, 파괴하다')에 기원한다고 분석하며, 파괴와 전투를 뜻하는 명사·형용사 어근과 연관시킨다. 그리스어 시가 전통 속에서 전란과 화염을 상징하는 시어(poetic word)로 발달했다. 후대 산문에는 쓰이지 않고 호메로스 및 비극시의 고전적 어휘로 남았다."
            },
            {
                "g": "λυγρῇ:",
                "pos": "형용사",
                "lemma": "λυγρός, λυγρή, λυγρόν",
                "parse": "sg.dat.f.",
                "gloss_kr": "비참한, 파멸적인, 슬픈",
                "gloss_en": "grim, mournful, disastrous",
                "syntax": "LFG f-구조에서 이 형용사는 명사 δαῒ의 수식어로서 일치(agreement) 관계를 맺으며 [PRED 'λυγρός', MOD δαῒ, θ-ROLE ATTRIBUTE]로 분석된다. 생성문법적으로 [DP δαῒ λυγρῇ] 구구조 내에서 성·수·격 일치( concord)를 이루며 명사구를 수식한다.",
                "background": "λυγρῇ는 그 전쟁이 단순히 영웅들의 명예로운 무대가 아니라 수많은 이들에게 씻을 수 없는 비극과 파멸을 안겨준 끔찍한 학살의 장이었음을 규정하는 냉혹한 수식어다. 서사 전체를 관통하는 어둡고 비장한 분위기를 응축한다.",
                "etymology": "Beekes(EDG)는 PIE 재구형 *leug-('구부러지다, 꺾이다, 슬프게 하다')에 기원한다고 밝힌다. 고대 영어 lūcan('구부리다'), 리투아니아어 laužti('부수다') 등과 어원적 동계 관계를 형성한다. 그리스어에서 슬픔과 파멸을 나타내는 전용 형용사로 고착되었다. 시가 문헌에서 비극적 사건을 수식하는 핵심 어휘로 활발히 쓰였다."
            }
        ]
    },
    {
        "ref": "Iliad 6.740",
        "trans": "그러므로 백성들도 성읍 전역에서 그를 애도하는 것이다.",
        "words": [
            {
                "g": "τὼ",
                "pos": "부사",
                "lemma": "τῶ",
                "parse": "adv.",
                "gloss_kr": "그러므로, 그 때문에",
                "gloss_en": "therefore, on this account",
                "syntax": "LFG f-구조에서 이 부사는 인과 관계를 매개하는 담화 접속부사이며 [ADJUNCT [PRED 'τῶ', COORD_RELATION result]]로 분석된다. 생성문법적으로는 전행의 원인에 대한 결과적 명제를 도출하는 상위 투사의 헤드나 부가어 위치에 병합된다.",
                "background": "τὼ(그러므로)는 앞서 언급된 아버지가 지닌 고결한 인품과 그의 비참한 최후 사이의 필연적 연결고리를 지으며, 그로 인해 온 성읍의 백성들이 그를 애도할 수밖에 없었던 당위성을 논리적으로 이끌어낸다. 서사의 감정적 절정을 여는 전환점이다.",
                "etymology": "Chantraine(DELG)은 지시대명사 소유격/여격 형태에서 발전한 결과 부사로 분석하며, 인도유럽어 공통의 지시적 탈락 격형태에 기원한다고 본다. 그리스어 시가 전통 속에서 인과적 결론을 맺는 전용 부사로 고착화되었다. 고전 서사시에 빈번하게 등장하는 고유한 수사적 장치다."
            },
            {
                "g": "καί",
                "pos": "소사",
                "lemma": "καί",
                "parse": "coord.conj.",
                "gloss_kr": "과연, 심지어, 또한",
                "gloss_en": "and, also, indeed",
                "syntax": "LFG f-구조에서 이 소사는 첨가 및 강조 기능을 수행하며 [ADJUNCT [PRED 'καί', MOD λαοὶ]] 구조를 이룬다. 생성문법적으로는 초점 수식어로서 주어 명사구 λαοὶ의 포괄적 범위를 강조하며 문장 내부의 수사적 결속력을 높인다.",
                "background": "여기서 καί는 가족뿐만 아니라 도시의 평백성들까지 모두 나서서 그를 슬퍼했다는 점을 강조하여, 그 인물의 죽음이 안드로마케 개인의 슬픔을 넘어 도시 공동체 전체의 거대한 상실이었음을 보여준다. 공동체의 일체된 비극성을 증폭한다.",
                "etymology": "Beekes(EDG)에 따르면 선그리스어 기층 어휘 가능성과 인도유럽어 접사 계통의 복합적 기원을 지니며, 그리스어 전반에서 접속 및 강조 기능을 광범위하게 수행하는 기본 어휘로 고착되었다."
            },
            {
                "g": "μιν",
                "pos": "대명사",
                "lemma": "μιν",
                "parse": "sg.acc.m.",
                "gloss_kr": "그를",
                "gloss_en": "him",
                "syntax": "LFG f-구조에서 이 약형(enclitic) 대명사는 동사 ὀδύρονται의 OBJ 논항이며 [PRED 'μιν', CASE acc, θ-ROLE THEME/PATIENT]로 분석된다. 생성문법적으로는 동사 뒤에 클리틱으로 부착되는 대명사 DP로서 [VP ὀδύρονται μιν] 구구조 내에서 목적격 지배를 받는다.",
                "background": "대명사 μιν은 앞서 언급된 안드로마케의 아버지이자 트로이아의 왕성한 수호자였던 에티온을 지칭하며, 그의 죽음이 남긴 공백을 백성들이 얼마나 애달파했는지를 생생하게 응축한다. 대상을 직접 지목하여 애도의 초점을 선명하게 맞춘다.",
                "etymology": "Chantraine(DELG)은 PIE 3인칭 대명사 어간 *im- / *mi-에 기원한다고 본다. 베다 산스크리트어의 enclitic 대명사 형태들과 정확히 일치하는 인도유럽어 공통의 고형 대명사 유산이다. 그리스어 시가 문헌(특히 호메로스)에서 목적격 단수 약형으로 널리 쓰였으며, 후대 아티카 산문에는 소실되고 시어에만 보존되었다."
            },
            {
                "g": "λαοὶ",
                "pos": "명사",
                "lemma": "λαός, λαοῦ, ὁ",
                "parse": "pl.nom.m.",
                "gloss_kr": "백성들이, 군중이",
                "gloss_en": "the people, hosts",
                "syntax": "LFG f-구조에서 이 명사는 주절의 SUBJ 논항이며 [PRED 'λαός', CASE nom, θ-ROLE AGENT/EXPERIENCER]로 분석된다. 생성문법적으로 [TP λαοὶ [vP tᵢ [VP ...]]] 구조에서 [Spec, vP]에서 [Spec, TP]로 이동하여 주격 지배를 받으며, 애도의 집단 주체를 실현한다.",
                "background": "λαοὶ(백성들)는 지도자나 영웅뿐만 아니라 도시를 구성하는 평민 집단 전체를 가리키며, 한 영웅의 죽음이 통치자와 피지배층을 막론하고 도시 전체의 비극적 균열을 일으켰음을 보여준다. 공동체적 유대와 슬픔의 보편성을 상징한다.",
                "etymology": "Beekes(EDG)는 이 단어의 어원이 선그리스어(Pre-Greek) 기층 어휘에 속할 가능성이 높으며, 확실한 PIE 동계어 재구가 어렵다고 본다. 에게해 문명권의 사회적 집단을 가리키던 토착 용어에서 유래했을 것으로 추정된다. 그리스어 시가와 산문 전반에 걸쳐 '백성, 군중'을 뜻하는 대표적 명사로 고착되었다."
            },
            {
                "g": "μὲν",
                "pos": "소사",
                "lemma": "μέν",
                "parse": "coord.conj.",
                "gloss_kr": "과연, 한편으로는",
                "gloss_en": "indeed, on the one hand",
                "syntax": "LFG f-구조에서 이 후치소사는 담화 구조상의 대조나 강조를 매개하며 [ADJUNCT [PRED 'μέν', COORD_RELATION correlative]]로 분석된다. 생성문법적으로는 Wackernagel's position에 클리틱으로 부착되어 문장 내 정보구조의 균형을 잡는다.",
                "background": "μὲν은 서사 속에서 이어지는 대조적 진술이나 감정의 흐름을 예비하는 담화 표지다. 백성들의 애도라는 집단적 반응을 선명하게 부각하며, 이어지는 시적 전개와의 수사적 균형을 잡아주는 역할을 한다.",
                "etymology": "Chantraine(DELG)은 강조 소사 *men에서 유래한 것으로 보며, 인도유럽어 공통의 담화 조절 형태소 계통에 속한다. 그리스어 전역에서 후치소사로 고도화되어 μὲν ... δέ의 상관 접속 구문을 형성하는 핵심 어휘로 정착했다."
            },
            {
                "g": "ὀδύρονται",
                "pos": "동사",
                "lemma": "ὀδύρομαι",
                "principalParts": "ὀδύρομαι – ὀδυροῦμαι – ὠδυράμην – – – ὠδύρθην",
                "parse": "3rd.pl.pres.ind.mid.",
                "gloss_kr": "애도한다, 슬퍼한다",
                "gloss_en": "lament, mourn",
                "syntax": "LFG f-구조에서 이 중간태 동사는 PRED로서 주절의 핵심 술어를 담당하며 [PRED 'ὀδύρομαι<SUBJ,OBJ>', SUBJ λαοὶ, OBJ μιν]로 분석된다. 생성문법적으로는 [TP λαοὶ T [vP tᵢ [VP μιν ὀδύρονται]]] 구조의 중간태(middle voice) 구문을 이루며, 주어가 겪는 내면적 정서와 신체적 애도 행위를 동시에 표상한다.",
                "background": "ὀδύρονται(애도한다)는 단순한 슬픔을 넘어 목놓아 통곡하고 비탄하는 집단적 의례 행위를 가리킨다. 도시 전체가 백성들의 목소리로 채워져 슬픔에 잠기는 광경을 생생하게 전달하며, 전쟁이 가져온 파멸의 상처가 도시 공동체의 영혼을 어떻게 잠식했는지 보여준다.",
                "etymology": "Beekes(EDG)는 PIE 재구형 *oedh- 또는 고통을 뜻하는 감정 어근과의 연관성을 검토하며, 고유의 음운 변화를 거친 중간태 동사로 분류한다. 명확한 동계어는 타 인도유럽어파에서 드물다. 그리스어 시가와 비극 속에서 비탄과 애도를 나타내는 전용 동사로 확고하게 자리 잡았다."
            },
            {
                "g": "κατὰ",
                "pos": "전치사",
                "lemma": "κατά",
                "parse": "prep.",
                "gloss_kr": "~전역에, ~를 따라",
                "gloss_en": "down through, throughout",
                "syntax": "LFG f-구조에서 이 전치사는 대격 지배 전치사로서 처소적 확산(distribution) 의미장을 형성하며 [PRED 'κατά', OBJ ἄστυ, CASE acc]로 분석된다. 생성문법적으로는 PP 헤드로 기능하여 후행하는 명사구를 인준하고, 공간적 확산 관계를 통사적으로 매개한다.",
                "background": "전치사 κατα는 애도의 물결이 특정한 장소에 국한되지 않고 성읍 전역으로 퍼져나갔음을 공간적으로 확산시켜 보여준다. 도시 전체가 하나의 슬픔의 공간으로 변모했음을 시각화하는 핵심 전치사다.",
                "etymology": "Chantraine(DELG)은 PIE 공간 부사/전치사 재구형 *kata-('아래로')에 기원한다고 밝힌다. 그리스어 방언 전반에서 대격 및 속격을 지배하며 광범위한 의미 확장을 겪었다. 현대 그리스어의 주요 전치사 및 접두사 체계로 이어져 활발히 쓰인다."
            },
            {
                "g": "ἄστυ,",
                "pos": "명사",
                "lemma": "ἄστυ, ἄστεος, τό",
                "parse": "sg.acc.n.",
                "gloss_kr": "성읍을, 도시를",
                "gloss_en": "city, town",
                "syntax": "LFG f-구조에서 이 명사는 전치사 κατὰ의 OBJ 논항이며 [PRED 'ἄστυ', CASE acc, θ-ROLE LOCATIVE/DOMAIN]로 분석된다. 생성문법적으로 [PP κατὰ [DP ἄστυ]] 구구조 안에서 대격 지배를 받아 애도가 확산되는 공간적 영역을 완결한다.",
                "background": "ἄστυ(성읍)는 트로이아의 성벽 안쪽 도시 공간을 지칭하며, 전야의 치열한 전장과 대조되는 공간적 배경이다. 전사들의 죽음으로 인해 전선뿐만 아니라 평화로워야 할 도시 내부까지 비극의 눈물로 물들었음을 보여주는 종결적 단어다.",
                "etymology": "Beekes(EDG)는 선그리스어 기층 어휘로 분류하며, 아나톨리아어파 및 에게해 선주민 언어와의 연관성을 제기한다. 인도유럽어 고유 어근으로 환원하기 어려운 영토·정주지 관련 토착 명칭이다. 그리스어 시가와 산문에서 성곽 도시를 가리키는 표준 명사로 널리 정착했다."
            }
        ]
    },
    {
        "ref": "Iliad 6.741",
        "trans": "토케우시(부모님)에게는 잊지 못할 통곡과 슬픔을 남겨 주었구나,",
        "words": [
            {
                "g": "ἀρητὸν",
                "pos": "형용사",
                "lemma": "ἀρητός, ἀρητή, ἀρητόν",
                "parse": "sg.acc.n.",
                "gloss_kr": "통곡할만한, 저주받을",
                "gloss_en": "lamentable, prayed-against",
                "syntax": "LFG 관점에서 ἀρητὸν은 명사 γόον을 수식하는 형용사 아테트(attributive adjective)로 기능하며, f-구조상 [MOD [PRED 'ἀρητός', CASE acc]]로 표현된다. 생성문법적으로는 NP 내부의 AP로 [Spec,NP] 또는 N-bar 준위에서 투영되어 명사와 성·수·격 일치(agreement)를 이룬다. 통사적 위치상 핵 명사 앞의 수식어 슬롯을 점유하며, 초점 구조상 비초점 영역에 속한다.",
                "background": "이 표현은 헥토르의 죽음이 단순히 개인의 비극으로 끝나지 않고, 그의 부모인 프리아모스와 헤카베에게 돌이킬 수 없는 영원한 통곡을 안겨주었음을 강조한다. 아레이토스(ἀρητός)라는 형용사는 글자 그대로 '기도의 대상이 되는' 또는 '저주받은'이라는 뜻에서 유래하여, 부모가 겪을 비통함의 깊이를 비극적으로 증폭시킨다. 앤드로마케는 남편의 죽음이 가져올 가문의 파멸과 부모의 절망을 연쇄적으로 조명하고 있다.",
                "etymology": "Beekes(EDG)는 이 단어를 동사 ἀράομαι(기도하다, 빌다)의 파생어로 보며, PIE 재구형 *h₂reh₁- 또는 관련 어근에서 출발한 것으로 추정한다. 겪은 변화 과정에서 접미사 -τός가 붙어 수동적 의미('기도되는', 나아가 '원망스러운/저주받은')로 전이되었다. 동계어로는 산스크리트어의 기원 관련 어근 형태 및 호메로스 어휘 속에서 발견되는 유사 파생어들이 있다. 현대 그리스어에는 직접적인 일상어로 남아있지 않으며, 고전문헌 연구에서 시적 수식어로만 확인된다."
            },
            {
                "g": "δὲ",
                "pos": "접속사",
                "lemma": "δέ",
                "parse": "coord.conj.",
                "gloss_kr": "그리고, 반면에",
                "gloss_en": "and, but",
                "syntax": "LFG 관점에서 δὲ는 등위접속사 또는 후치사(postpositive conjunction)로 기능하여 앞 절과 현재 절을 연결하며, f-구조 상 두 개의 프로포지션을 대등하게 접속한다. 생성문법적으로는 CP coordinate 구조의 접속 핵(Conjunction head) 위치에 병합되는 것으로 분석된다. 통사적으로 두 번째 위치(Wackernagel's position)에 놓이는 엄격한 클리틱(clitic) 특성을 지닌다.",
                "background": "δὲ는 앞서 언급된 부모들의 슬픔과 화자 자신(앤드로마케)이 겪을 슬픔을 대조적으로 연결하는 중추적 역할을 한다. 문장의 흐름을 부드럽게 전환하면서 개인적 비극으로 초점을 좁히는 문체적 장치로 기능한다. 호메로스 서사시의 전형적인 구절 연결 기법을 보여준다.",
                "etymology": "Chantraine(DELG)에 따르면 PIE 대명사/부사 어근에서 기원한 불변화사로, 어원적 명확성은 제한적이나 인도유럽어족 전반에 걸쳐 대조·계승 기능을 가진 입자들과 동계관계를 이룬다. 음운론적으로 단음절의 경음 형태를 유지하며 고대 그리스어 전역에서 널리 쓰였다. 현대 그리스어에서는 고전어의 잔재로 드물게 문어체에서나 그 흔적을 찾을 수 있다."
            },
            {
                "g": "τοκεῦσι",
                "pos": "명사",
                "lemma": "τοκεύς, τοκεῶνος, ὁ",
                "parse": "pl.dat.m.",
                "gloss_kr": "부모님께",
                "gloss_en": "to parents",
                "principalParts": [
                    "(미상)",
                    "(미상)",
                    "(미상)",
                    "(미상)",
                    "(미상)",
                    "(미상)"
                ],
                "syntax": "LFG f-구조에서 토케우시는 여격 논항(OBL_DAT 또는 GOAL/BENEFICIARY)으로 지정되며, [PRED 'τοκεύς', CASE dat, θ-ROLE BENEFICIARY]로 분석된다. 통사적으로 여격 지배 동사 또는 전체 문장의 수여적/귀속적 의미역을 받아들인다. 생성문법적으로는 PP(Prepositional Phrase) 없이 DP 자체의 여격 표지가 형태론적으로 실현된 경우다.",
                "background": "여기서 토케우시는 헥토르의 아버지 프리아모스와 어머니 헤카베를 가리키며, 자식을 먼저 떠나보낸 부모의 참혹한 처지를 극대화한다. 영웅 서사에서 부모의 오열은 비극성을 배가시키는 핵심 서사 장치다. 앤드로마케는 자신의 고통에 앞서 노부모가 겪을 비극을 먼저 언급하며 공감을 유도한다.",
                "etymology": "Beekes(EDG)와 Chantraine(DELG)은 이 단어가 '낳다'를 뜻하는 동사 τίκτω의 어근(PIE *tekʷ-, e급/영급 교체)에서 파생된 명사로 본다. 명사화 접미사 -εύς가 결합하여 '낳은 이(부모)'라는 뜻을 확립했다. 동계어로 산스크리트어 및 라틴어의 생식 관련 어휘들이 존재한다. 현대 그리스어에서는 τοκετός(출산) 등의 파생어로 명맥을 잇고 있으나, 복수형 부모 의미는 고전적 용법으로 남아 있다."
            },
            {
                "g": "γόον",
                "pos": "명사",
                "lemma": "γόος, γόου, ὁ",
                "parse": "sg.acc.m.",
                "gloss_kr": "통곡, 오열",
                "gloss_en": "lament, wailing",
                "principalParts": [
                    "(미상)",
                    "(미상)",
                    "(미상)",
                    "(미상)",
                    "(미상)",
                    "(미상)"
                ],
                "syntax": "LFG f-구조에서 γόον은 동사 ἔθηκας의 OBJ 논항이며, [PRED 'γόος', CASE acc, θ-ROLE PATIENT]로 분석된다. 생성문법적으로 VP 내부의 내부 논항으로 병합되며, 인과적 행위의 결과로 생성되는 대상(effected object)의 통사적 지위를 가진다.",
                "background": "γόος는 단순한 눈물이 아니라 의식적인 곡(wailing)과 통곡을 뜻하며, 장례 의식에서 행해지는 비탄의 소리를 가리킨다. 헥토르의 죽음이 온 트로이아에 불러올 공식적이고 비극적인 애도 분위기를 상징한다. 앤드로마케는 이 통곡이 영원히 그치지 않을 것임을 예감한다.",
                "etymology": "Chantraine(DELG)은 의성어적 성격을 띤 PIE 어근에서 출발한 것으로 보며, 슬픔의 소리를 나타내는 어휘 계열과 연관시킨다. 음운론적으로 어간의 모음 교체와 장음화를 거쳤으며, 호메로스 시기부터 비탄 관련 문맥에 정형적으로 쓰였다. 현대 그리스어에는 직접적인 일상 명사로 쓰이지 않고 어원적 유물로만 잔존한다."
            },
            {
                "g": "καὶ",
                "pos": "접속사",
                "lemma": "καί",
                "parse": "coord.conj.",
                "gloss_kr": "그리고, 및",
                "gloss_en": "and",
                "syntax": "LFG f-구조에서 καὶ는 대등한 성분인 γόον과 πένθος를 연결하는 접속 핵으로 기능한다. 생성문법적으로는 Coordination Phrase(CoP) 구조를 형성하여 두 명사구를 동등한 자격으로 묶어준다. 통사적 중첩을 방지하는 병렬 구조의 핵심 표지다.",
                "background": "γόον(통곡)과 πένθος(슬픔)를 밀접하게 결합하여 외적인 표현과 내적인 고통이 동시에 부모를 덮쳤음을 나타낸다. 두 단어의 대등 연결은 앤드로마케가 느끼는 비극의 총체성을 강화한다.",
                "etymology": "Beekes(EDG)에 따르면 기층 언어와의 접촉 가능성 혹은 인도유럽어족 공통의 접속사 어근에서 유래했다. 음운 변화는 비교적 단순하며 고대 그리스어 전반에서 가장 빈번하게 사용되는 불변화사다. 현대 그리스어에서도 καὶ(그리고/도) 형태로 활발하게 사용된다."
            },
            {
                "g": "πένθος",
                "pos": "명사",
                "lemma": "πένθος, πένθεος, τό",
                "parse": "sg.acc.n.",
                "gloss_kr": "슬픔, 비탄",
                "gloss_en": "grief, sorrow",
                "principalParts": [
                    "(미상)",
                    "(미상)",
                    "(미상)",
                    "(미상)",
                    "(미상)",
                    "(미상)"
                ],
                "syntax": "LFG f-구조에서 πένθος는 앞의 γόον과 함께 ἔθηκας의 복합 목적어 성분을 이루며, [PRED 'πένθος', CASE acc, θ-ROLE PATIENT]로 기능한다. 생성문법적으로는 동사구 내에서 다중 목적어 또는 병렬 명사구의 일원으로 투영된다.",
                "background": "πένθος는 마음속 깊이 스며드는 지속적인 슬픔과 비탄을 의미하며, 겉으로 드러나는 통곡(γόος)의 내면적 원인이자 결과다. 부모가 겪을 정신적 황폐함을 상징하는 핵심 어휘다.",
                "etymology": "Chantraine(DELG)과 Frisk(GEW)는 PIE 어근 *kwenth-('고통받다')에서 유래한 것으로 보며, 어간 교체(애블라우트 e급/영급)를 거쳤다. 동계어로 슬라브어파 및 기타 인도유럽어의 고통·슬픔 관련 어휘가 있다. 현대 그리스어에는 명사 πένθος가 그대로 살아남아 '상복' 또는 '애도'의 뜻으로 쓰인다."
            },
            {
                "g": "ἔθηκας",
                "pos": "동사",
                "lemma": "τίθημι",
                "parse": "2nd.sg.aor.ind.act.",
                "gloss_kr": "너는 남겼다, 안겨주었다",
                "gloss_en": "you made, you caused",
                "principalParts": [
                    "τίθημι",
                    "θήσω",
                    "ἔθηκα",
                    "τέθηκα",
                    "τέθειμαι",
                    "ἐτέθην"
                ],
                "syntax": "LFG f-구조에서 ἔθηκας는 문장의 서술어(PRED)로서 [PRED 'τίθημι<SUBJ,OBJ>', SUBJ [PRED 'pro', PERSON 2nd, NUMBER sg], OBJ [PRED 'γόος/πένθος']] 구조를 취한다. 생성문법적으로 주어는 2인칭 단수 대명사로 생략되어 있으며, 시제 핵 T와 동사 어간의 결합 및 시그마-카(kappa) 과거완료/부정과거 형태소의 접합으로 유도된다.",
                "background": "동사 '놓다, 만들다'의 뜻을 가진 τίθημι가 비탄의 명사와 결합하여 '슬픔을 안겨주다, 상태를 만들다'라는 인과적 의미를 띤다. 헥토르의 죽음이 능동적 행위는 아니지만, 그의 전사 자체가 부모에게 비극적 상태를 초래했음을 앤드로마케는 2인칭 단수로 직접 힐책하듯 호소한다.",
                "etymology": "Beekes(EDG)와 Chantraine(DELG)은 PIE 어근 *dʰeh₁-('놓다, 두다', e급)에서 유래했다고 분석한다. 후두음 h₁이 포함되어 있으며, 그리스어 특유의 중복사(reduplication)와 시제 접두사(augment) 결합을 거쳤다. 동계어로 라틴어 facio 및 영어 do 등이 있다. 현대 그리스어에서는 고전어 동사가 구어체에서 사라지고 다른 어근으로 대체되었다."
            }
        ]
    },
    {
        "ref": "Iliad 6.742",
        "trans": "헥토르여! 그러나 내게는 무엇보다도 쓰라린 슬픔들이 남겨지겠지요.",
        "words": [
            {
                "g": "Ἕκτορ:",
                "pos": "명사",
                "lemma": "Ἕκτωρ, Ἕκτορος, ὁ",
                "parse": "sg.voc.m.",
                "gloss_kr": "헥토르여",
                "gloss_en": "O Hector",
                "principalParts": [
                    "(미상)",
                    "(미상)",
                    "(미상)",
                    "(미상)",
                    "(미상)",
                    "(미상)"
                ],
                "syntax": "LFG f-구조에서 Ἕκτορ는 호격(Vocative)으로서 문장의 통사적 논항 구조 외부에 위치하는 독립 성분(vocative adjunct)이며, 화자의 직접적인 청자를 지시한다. 생성문법적으로는 CP 외곽의 부가어 부위(ForceP 또는 VocP)에 병합되며, 격 변형상 고유한 호격 어미를 실현한다.",
                "background": "남편 헥토르의 이름을 직접 부르며 대화의 초점을 다시 개인적 비극으로 가져오는 순간이다. 앤드로마케의 절절한 애도가 남편을 향한 직접적인 호소를 통해 극대화된다.",
                "etymology": "Beekes(EDG)는 이 이름을 동사 ἔχω(가지다, 지탱하다)의 분사 파생어 또는 그 어근에서 유래한 '도시를 지탱하는 자'라는 뜻의 고유명사로 본다. 인도유럽어 명명 관습에 부합하는 투르크-트로이아 계통 또는 그리스 고유의 명명법에 속하며, 후두음 및 모음 변화를 거쳤다. 현대 그리스어에서도 인명 Ἕκτωρ(엑토르)로 명맥을 유지하고 있다."
            },
            {
                "g": "ἐμοὶ",
                "pos": "대명사",
                "lemma": "ἐγώ",
                "parse": "sg.dat.1st",
                "gloss_kr": "나에게는",
                "gloss_en": "to me",
                "principalParts": [
                    "(미상)",
                    "(미상)",
                    "(미상)",
                    "(미상)",
                    "(미상)",
                    "(미상)"
                ],
                "syntax": "LFG f-구조에서 ἐμοὶ는 여격 대명사로서 이득/소유의 여격(dative of possession or interest) 기능을 수행하며, [PRED 'ἐγώ', CASE dat, θ-ROLE BENEFICIARY]로 분석된다. 생성문법적으로 문두에 배치되어 대조적 초점(contrastive focus)을 형성하며, 강세형 대명사로서 통사적 강조를 받는다.",
                "background": "앞서 언급된 부모들의 슬픔에 이어, '나에게는'이라는 대명사를 문두에 배치함으로써 화자 자신의 고통이 남편의 죽음으로 인해 얼마나 가혹할 것인지를 강렬하게 대조시킨다.",
                "etymology": "Chantraine(DELG)은 PIE 1인칭 대명사 재구형 *éǵh₂ 출신으로 본다. 후두음 h₂를 포함하며, 그리스어에서 사격(oblique cases) 형태는 어간 교체를 겪어 ἐμο-, ἐμε- 형태를 발달시켰다. 동계어로 라틴어 ego 및 영어 I 등이 있다. 현대 그리스어에서는 단수 1인칭 대명사 εμένα / μου 형태로 이어지고 있다."
            },
            {
                "g": "δὲ",
                "pos": "접속사",
                "lemma": "δέ",
                "parse": "coord.conj.",
                "gloss_kr": "그러나, 반면에",
                "gloss_en": "and, but",
                "syntax": "LFG f-구조에서 δὲ는 앞선 부모의 슬픔과 화자의 슬픔을 극적으로 대비시키는 대조 접속사 기능을 한다. 생성문법적으로는 두 절을 잇는 접속 핵이며, Wackernagel 법칙에 따라 두 번째 위치에 클리틱으로 부착된다.",
                "background": "앞 구절의 내용과 앤드로마케 자신의 운명을 명확하게 가르는 전환점 역할을 한다. 부모의 슬픔도 크지만, 남편을 잃은 아내의 슬픔이 궁극적으로 가장 깊고 길게 남을 것임을 암시한다.",
                "etymology": "Chantraine(DELG)에 따르면 PIE 접속사 계열에서 유래한 불변화사다. (741행의 δὲ 항목 참조)"
            },
            {
                "g": "μάλιστα",
                "pos": "부사",
                "lemma": "μάλα",
                "parse": "superl.adv.",
                "gloss_kr": "가장 많이, 무엇보다도",
                "gloss_en": "most of all, especially",
                "syntax": "LFG f-구조에서 μάλιστα는 부사적 수식어(ADJUNCT)로 동사 3인칭 미래형을 수식하며, [MOD [PRED 'μάλα', DEGREE superl]]로 분석된다. 생성문법적으로는 VP 또는 vP 수준에서 도수(degree) 구를 형성하며 최상급 의미를 부여한다.",
                "background": "다른 누구보다도 자신이 겪을 고통이 극심할 것임을 강조하는 최상급 표현이다. 전쟁의 참화 속에서 고아와 과로 남겨질 아내의 절망적 미래를 집약한다.",
                "etymology": "Beekes(EDG)는 원급 부사 μάλα(매우)의 최상급 형태라 분석하며, PIE 어근에서 유래한 부사적 파생물로 본다. 음운론적으로 최상급 접미사 -ιστα가 결합하는 과정에서 모음 조화 및 자음 교체를 겪었다. 현대 그리스어에서는 최상급 표현의 흔적으로 일부 남아 있다."
            },
            {
                "g": "λελείψεται",
                "pos": "동사",
                "lemma": "λείπω",
                "parse": "3rd.sg.fut.ind.mid.",
                "gloss_kr": "남겨질 것이다",
                "gloss_en": "will be left behind",
                "principalParts": [
                    "λείπω",
                    "λείψω",
                    "ἔλιπον",
                    "λέλοιπα",
                    "λέλειμμαι",
                    "ἐλέφθην"
                ],
                "syntax": "LFG f-구조에서 λελείψεται는 수동/중간태 미래형 서술어로서 [PRED 'λείπω<SUBJ,OBL>', SUBJ [PRED 'ἄλγεα', CASE nom, TH 3rd, NUM pl]] 구조를 취하며, 논항 주어와 의미역 PATIENT/THEME를 연결한다. 생성문법적으로 미래 시제 형태소 -σ-와 중간태 어미 -ται의 결합으로 유도되며, 주어 명사구의 복수 무생물성에 따라 동사 수 일치가 이루어진다.",
                "background": "미래형을 사용하여 헥토르가 죽은 이후 앞으로 살아갈 날들 동안 끊임없이 자신을 따라다닐 고통의 지속성을 예고한다. 잠시 스쳐 지나가는 슬픔이 아니라 평생을 지배할 운명적 괴로움을 뜻한다.",
                "etymology": "Beekes(EDG)와 Chantraine(DELG)은 PIE 어근 *leikʷ-('남기다', e급/o급/영급 애블라우트)에서 유래했다고 분석한다. 그리스어에서는 이 어근이 현재형, 부정과거형(ἔλιπον), 완료형(λέλοιπα) 전반에 걸쳐 전형적인 e/o/영급 교체를 보여주는 대표적 사례다. 동계어로 라틴어 linquo 및 영어 loan 등이 있다. 현대 그리스어에서는 λείπω(없다, 부족하다) 형태로 의미가 전이되어 생존해 있다."
            },
            {
                "g": "ἄλγεα",
                "pos": "명사",
                "lemma": "ἄλγος, ἄλγεος, τό",
                "parse": "pl.nom.n.",
                "gloss_kr": "고통들, 슬픔들",
                "gloss_en": "pains, griefs",
                "principalParts": [
                    "(미상)",
                    "(미상)",
                    "(미상)",
                    "(미상)",
                    "(미상)",
                    "(미상)"
                ],
                "syntax": "LFG f-구조에서 ἄλγεα는 문장의 주어(SUBJ)이며, [PRED 'ἄλγος', CASE nom, TH 3rd, NUM pl]로 분석된다. 생성문법적으로 [Spec,TP] 자리를 점유하며, 중성 복수 주어이므로 동사는 단수형으로 일치하는 호메로스식 통사 규칙(Neutrum plural syntax)을 따른다.",
                "background": "ἄλγος는 신체적 고통과 정신적 비통함을 모두 아우르는 단어로, 헥토르의 죽음이 아내에게 안길 복합적이고 다중적인 고통의 무게를 대변한다. 복수형을 사용하여 그 고통이 일회성이 아님을 강조한다.",
                "etymology": "Chantraine(DELG)과 Frisk(GEW)는 이 단어의 PIE 기원이 불확실하다고 보며, 지중해 기층 어휘일 가능성을 제기한다. 그리스어 내부에서는 어간 교체를 겪는 s-중성 명사로 활용되었다. 동계어는 인도유럽어 내 다른 분파에서 뚜렷하게 재구되지 않는 편이다. 현대 그리스어에는 의학 용어 접두사(algia)나 고어체 명사로 제한적으로 흔적이 남아 있다."
            },
            {
                "g": "λυγρά.",
                "pos": "형용사",
                "lemma": "λυγρός, λυγρή, λυγρόν",
                "parse": "pl.nom.n.",
                "gloss_kr": "처참한, 쓰라린",
                "gloss_en": "mournful, baleful",
                "syntax": "LFG f-구조에서 λυγρά는 주어 명사 ἄλγεα를 수식하는 형용사 수식어이며, [MOD [PRED 'λυγρός', CASE nom, NUM pl]]로 분석된다. 생성문법적으로 NP 내부에서 명사와 성·수·격 일치를 이루며 후행 배치되어 수식어 구를 형성한다.",
                "background": "λυγρός는 비참하고 암울하며 불길한 성격을 띤 고통을 수식할 때 쓰이는 호메로스 시기의 전형적인 형용사다. 앞으로 앤드로마케가 겪을 과부로서의 삶과 포로로서의 운명이 얼마나 처참할 것인지를 규정한다.",
                "etymology": "Beekes(EDG)는 이 단어의 어원이 불명확하다고 지적하며, 선그리스어 기층에서 유입되었을 가능성을 배제하지 않는다. 고대 그리스 시문학에서 불길한 운명이나 슬픔을 묘사하는 고정 수식어로 정착했다. 현대 그리스어에는 직접적인 일상어로 전승되지 않고 문헌 연구 속에 머물러 있다."
            }
        ]
    },
    {
        "ref": "Iliad 6.743",
        "trans": "그대는 죽어가면서 침상에서 내게 손을 내밀어 주지도 않았고,",
        "words": [
            {
                "g": "οὐ",
                "pos": "부사",
                "lemma": "οὐ",
                "parse": "neg.adv.",
                "gloss_kr": "아니, 않다",
                "gloss_en": "not",
                "syntax": "LFG f-구조에서 οὐ는 직설법 동사 구를 수식하는 부정 부사(negation modifier)이며, [MOD [PRED 'οὐ']]로 분석된다. 생성문법적으로 부정 구(NegP)의 핵 또는 그 지정어 자리에 위치하여 서술어의 진리치를 반전시킨다.",
                "background": "남편의 죽음 직전 임종을 지키며 마지막 손길을 나누지 못했다는 앤드로마케의 사무치는 한탄을 시작하는 부정어다. 전쟁의 비참함이 영웅의 죽음뿐만 아니라 가족 간의 마지막 작별조차 허락하지 않았음을 고발한다.",
                "etymology": "Chantraine(DELG)은 PIE 부정어 재구형 *n- 또는 관련 부사형에서 유래한 것으로 본다. 모음 앞에서 οὐκ, 기식음 앞에서 οὐχ로 변형되는 음운 규칙을 갖는다. 현대 그리스어에서도 부정어 den 및 고어체 ou로 직접 이어진다."
            },
            {
                "g": "γάρ",
                "pos": "접속사",
                "lemma": "γάρ",
                "parse": "coord.conj.",
                "gloss_kr": "왜냐하면, ~이니까",
                "gloss_en": "for, because",
                "syntax": "LFG f-구조에서 γάρ는 설명적 접속사(explanatory conjunction)로 앞선 진술(가장 쓰라린 슬픔이 남는 이유)에 대한 근거를 이끄는 f-구조를 형성한다. 생성문법적으로는 두 절 사이의 인과적 관계를 설정하는 클리틱 접속사로 Wackernagel 위치에 놓인다.",
                "background": "왜 자신이 그토록 큰 슬픔을 겪을 수밖에 없는지, 그 구체적인 이유와 서운함, 그리고 한을 조리 있게 설명하는 연결고리다. 남편의 임종을 함께하지 못한 아내의 뼈아픈 기억을 환기한다.",
                "etymology": "Beekes(EDG)와 Chantraine(DELG)은 다른 불변화사 요소들의 결합으로 발생한 강조·설명 입자로 보며, PIE 시기부터 인과 관계를 나타내는 데 쓰였다. 고대 그리스어 전역에서 널리 활용된다. 현대 그리스어에서는 직접적인 접속사로 쓰이지 않고 어원적 잔재만 남았다."
            },
            {
                "g": "μοι",
                "pos": "대명사",
                "lemma": "ἐγώ",
                "parse": "sg.dat.1st",
                "gloss_kr": "내게",
                "gloss_en": "to me",
                "syntax": "LFG f-구조에서 μοι는 이득/침해의 여격(dative of disadvantage or interest)으로서 동사 ὄρεξας의 논항 구조에 참여하며, [PRED 'ἐγώ', CASE dat, θ-ROLE BENEFICIARY/AFFECTED]로 분석된다. 생성문법적으로 비주어 논항 위치에 클리틱 형태로 병합된다.",
                "background": "남편의 손길이 자신에게 미치지 못했음을 나타내는 여격으로, 앤드로마케가 겪은 소외감과 상실의 정서를 개인화한다. 남편의 죽음이 자신과의 물리적 단절이었음을 강조한다.",
                "etymology": "Chantraine(DELG)에 따르면 PIE 1인칭 대명사 사격 어간에서 유래했다. (742행의 ἐμοὶ 항목 참조)"
            },
            {
                "g": "θνῄσκων",
                "pos": "동사",
                "lemma": "θνῄσκω",
                "parse": "pres.act.part.sg.nom.m.",
                "gloss_kr": "죽어가면서, 죽을 때",
                "gloss_en": "dying",
                "principalParts": [
                    "θνῄσκω",
                    "θανέομαι",
                    "ἔθανον",
                    "τέθνηκα",
                    "(미상)",
                    "(미상)"
                ],
                "syntax": "LFG f-구조에서 θνῄσκων은 주어(생략된 2인칭 남성 단수)를 수식하는 부대상황 분사(circumstantial participle)이며, [ADJUNCT [PRED 'θνῄσκω', TIME simultaneous]]로 분석된다. 생성문법적으로 비정형 절(non-finite clause)의 핵으로서 주절 동사 행위와 동시성을 나타내는 VP-adjunct로 투영된다.",
                "background": "영웅이 영웅답게 가족의 품에서 평화롭게 임종을 맞이하지 못하고, 전장에서 비참하게 죽어간 순간을 포착한다. 헥토르가 숨을 거두는 마지막 순간에 아내가 곁에 없었다는 사실이 앤드로마케에게는 가장 큰 회한으로 남는다.",
                "etymology": "Beekes(EDG)와 Chantraine(DELG)은 PIE 어근 *dhengh- 또는 *dhwel- 계열과의 연관성을 논하며, 비음삽입 현재형태와 어간 교체(영급 θαν-)를 거친 것으로 본다. 동계어로는 죽음 관련 인도유럽어 어휘들이 있다. 현대 그리스어에는 θθνσκω의 후속 형태들이 고어체나 종교적 문맥에서 간헐적으로 쓰인다."
            },
            {
                "g": "λεχέων",
                "pos": "명사",
                "lemma": "λέχος, λέχεος, τό",
                "parse": "pl.gen.n.",
                "gloss_kr": "침상에서, 부부의 자리에서",
                "gloss_en": "from the bed",
                "principalParts": [
                    "(미상)",
                    "(미상)",
                    "(미상)",
                    "(미상)",
                    "(미상)",
                    "(미상)"
                ],
                "syntax": "LFG f-구조에서 λεχέων은 전치사 ἐκ의 지배를 받는 속격 논항이며, [PRED 'λέχος', CASE gen, θ-ROLE SOURCE]로 분석된다. 생성문법적으로 PP(Prepositional Phrase)의 내부 보어(complement)로 투영되며, 물리적 출발점 또는 부부 관계의 공간적 배경을 나타낸다.",
                "background": "여기서 λεχέων은 단순한 침대가 아니라 부부의 잠자리, 즉 가정과 혼인의 성스러운 공간을 상징한다. 전장에서 죽어간 헥토르는 편안한 침대 위가 아니라 차가운 먼지 속에서 숨졌으며, 아내의 침상에서 손을 뻗어 마지막 인사를 나눌 수 없었음을 대조한다.",
                "etymology": "Chantraine(DELG)과 Frisk(GEW)는 PIE 어근 *legh-('눕다', e급/o급/영급)에서 유래한 것으로 본다. 그리스어에서 s-중성 명사로 고착되었으며 동계어로 라틴어 lectus 및 영어 lie 등이 있다. 현대 그리스어에서는 지리적·어원적 흔적으로만 일부 남아 있다."
            },
            {
                "g": "ἐκ",
                "pos": "전치사",
                "lemma": "ἐκ",
                "parse": "prep.",
                "gloss_kr": "~로부터",
                "gloss_en": "out of, from",
                "syntax": "LFG f-구조에서 ἐκ은 속격 명사를 지배하는 전치사 핵이며, [PRED 'ἐκ', OBL_CASE gen]으로 분석된다. 생성문법적으로 PP의 핵으로 기능하며, 출발점(source) 의미역을 부여하는 격 지배자 역할을 수행한다.",
                "background": "침상이라는 공간적 원천으로부터 손길이 뻗어 나오지 못했음을 나타내는 방향·출발 전치사다. 물리적 거리감과 단절감을 문법적으로 구체화한다.",
                "etymology": "Beekes(EDG)는 PIE 전치사/부사 재구형 *eghs에서 유래한 것으로 본다. 모음 앞에서 ἐξ로 형태가 바뀐다. 동계어로 라틴어 ex 및 영어 ex- 접두사가 있다. 현대 그리스어에서는 ἐξ가 고어체로 남고 주로 ἀπό 등으로 대체되었다."
            },
            {
                "g": "χεῖρας",
                "pos": "명사",
                "lemma": "χείρ, χειρός, ἡ",
                "parse": "pl.acc.f.",
                "gloss_kr": "손을",
                "gloss_en": "hands",
                "principalParts": [
                    "(미상)",
                    "(미상)",
                    "(미상)",
                    "(미상)",
                    "(미상)",
                    "(미상)"
                ],
                "syntax": "LFG f-구조에서 χεῖρας는 동사 ὄρεξας의 OBJ 논항이며, [PRED 'χείρ', CASE acc, θ-ROLE PATIENT]로 분석된다. 생성문법적으로 VP 내부의 목적어 자리에 병합되며, 신체 부위 목적어로서 행위의 직접적 대상을 이룬다.",
                "background": "손은 인간 사이의 교감, 신뢰, 그리고 마지막 작별을 나누는 가장 직접적인 신체적 매개체다. 헥토르가 죽어가면서 아내를 향해 손을 뻗어 유언이나 온정을 건네지 못한 것이 앤드로마케에게는 평생의 한으로 남는다.",
                "etymology": "Chantraine(DELG)은 PIE 어근 *g̑hēs-('손')에서 유래한 것으로 보며, 고대 그리스어에서 이형태 교체(손목 및 팔 전체를 아우르는 발달)를 겪었다. 동계어로 타 인도유럽어의 손 관련 어휘들이 있다. 현대 그리스어에서는 χέρι (복수 χέρια) 형태로 일상 어휘의 중심을 차지한다."
            },
            {
                "g": "ὄρεξας,",
                "pos": "동사",
                "lemma": "ὀρέγω",
                "parse": "2nd.sg.aor.ind.act.",
                "gloss_kr": "내밀지 않았고",
                "gloss_en": "you did reach out",
                "principalParts": [
                    "ὀρέγω",
                    "ὀρέξω",
                    "ὤρεξα",
                    "(미상)",
                    "ὀρώρεγμαι",
                    "ὠρέχθην"
                ],
                "syntax": "LFG f-구조에서 ὄρεξας는 부정어 οὐ의 수식을 받는 과거 시제 서술어이며, [PRED 'ὀρέγω<SUBJ,OBJ,OBL>', SUBJ [PRED 'pro', 2nd sg], OBJ [PRED 'χείρ']] 구조를 취한다. 생성문법적으로 시제 접두사(augment)와 부정거와 연계된 Aorist ind. act. 핵 투영을 이룬다.",
                "background": "손을 뻗어 건네는 동작을 나타내는 동사로, 죽음의 문턱에서 아내를 향해 마지막 애정의 손길을 내밀지 못한 헥토르의 비극적 최후를 실감 나게 전한다.",
                "etymology": "Beekes(EDG)와 Chantraine(DELG)은 PIE 어근 *h₃reg̑-('뻗다, 곧게 하다', e급)에서 유래했다고 분석한다. 후두음 h₃가 포함되어 있으며 그리스어에서 동사 파생을 거쳐 뻗는 동작의 기본 어휘가 되었다. 동계어로 라틴어 rego 및 영어 right 등이 있다. 현대 그리스어에서는 고어체 및 파생어로 제한적으로 존재한다."
            }
        ]
    },
    {
        "ref": "Iliad 6.744",
        "trans": "내게 그 어떤 지혜로운 말씀도 일러주지 않았기에,",
        "words": [
            {
                "g": "οὐδέ",
                "pos": "접속사",
                "lemma": "οὐδέ",
                "parse": "coord.conj.",
                "gloss_kr": "또한 ~도 아니며, 그리고 ~않고",
                "gloss_en": "nor, and not",
                "syntax": "LFG f-구조에서 οὐδέ는 앞선 부정 구문과 현재 절을 대등하게 이어주는 부정 접속사이며, [COORD [PRED 'οὐδέ']]로 분석된다. 생성문법적으로 부정사구와 등위접속사의 결합 기능을 수행한다.",
                "background": "손을 내밀지 않은 것에 이어, 마음을 울리는 지혜로운 유언 한마디 남기지 못했다는 두 번째 결핍을 강조한다. 행동과 언어 양쪽 모두에서 마지막 작별이 부재했음을 토로한다.",
                "etymology": "Chantraine(DELG)에 따르면 부정어 οὐ와 접속사 δέ의 합성어로, 고대 그리스어에서 부정적 병렬을 나타내는 표준적 불변화사다. 현대 그리스어에서도 유사한 복합 부정 접속사 형태로 명맥을 잇는다."
            },
            {
                "g": "τί",
                "pos": "대명사",
                "lemma": "τίς, τί",
                "parse": "sg.acc.n.",
                "gloss_kr": "어떤, 무언가",
                "gloss_en": "any, some",
                "syntax": "LFG f-구조에서 τί는 명사 ἔπος를 수식하는 부정/의문 대명사형 한정사이며, [MOD [PRED 'τίς', CASE acc]]로 분석된다. 생성문법적으로 명사구 내부의 Spec 자리에서 수량적 한정사 역할을 수행한다.",
                "background": "구체적인 한마디 말씀조차 전혀 나누지 못했다는 점을 강조하는 부정 수식어로, 앤드로마케가 느끼는 소외와 황망함의 크기를 보여준다.",
                "etymology": "Beekes(EDG)는 PIE 의문/부정 대명사 어근 *kʷi-/kʷo-에서 유래한 것으로 본다. 동계어로 라틴어 quis 및 영어 who/what 등이 있다. 현대 그리스어에서도 의문사 τί로 활발하게 사용된다."
            },
            {
                "g": "μοι",
                "pos": "대명사",
                "lemma": "ἐγώ",
                "parse": "sg.dat.1st",
                "gloss_kr": "내게",
                "gloss_en": "to me",
                "syntax": "LFG f-구조에서 μοι는 이득/수혜의 여격 논항이며, [PRED 'ἐγώ', CASE dat, θ-ROLE BENEFICIARY]로 분석된다. 생성문법적으로 클리틱 위치에 병합된다.",
                "background": "남편의 유언이 자신을 향해 주어졌어야 함을 강조하는 여격 대명사다.",
                "etymology": "Chantraine(DELG)에 따르면 PIE 1인칭 대명사 사격 어간에서 유래했다. (742행의 ἐμοὶ 항목 참조)"
            },
            {
                "g": "εἶπες",
                "pos": "동사",
                "lemma": "λέγω (suppletive εἶπον)",
                "parse": "2nd.sg.aor.ind.act.",
                "gloss_kr": "너는 말씀하지 않았다",
                "gloss_en": "you did speak",
                "principalParts": [
                    "λέγω",
                    "ἐρέω",
                    "εἶπον",
                    "εἴρηκα",
                    "εἴρημαι",
                    "ἐρρήθην"
                ],
                "syntax": "LFG f-구조에서 εἶπες는 부정어의 수식을 받는 과거 시제 서술어이며, [PRED 'εἶπον<SUBJ,OBJ,OBL>', SUBJ [PRED 'pro', 2nd sg], OBJ [PRED 'ἔπος']] 구조를 취한다. 생성문법적으로 불규칙 과거(suppletive aorist) 어간에 2인칭 단수 어미가 결합한 형태다.",
                "background": "말씀을 건네다라는 뜻의 동사로, 영웅이 임종 시 남기는 유언이나 격려의 말이 생략되었음을 나타낸다. 앤드로마케에게 남겨진 것은 말씀의 위로가 아니라 침묵뿐이다.",
                "etymology": "Beekes(EDG)와 Chantraine(DELG)은 PIE 어근 *wekʷ-('말하다', 불규칙 아오리스트 보충법)에서 유래했다고 분석한다. 그리스어에서 어간 교체와 증보(augment)를 거쳐 과거형이 정착되었다. 동계어로 라틴어 vox 및 영어 voice 등이 있다. 현대 그리스어에서는 다른 어근(λέγω/μιλῶ)이 주류를 이룬다."
            },
            {
                "g": "πυκινὸν",
                "pos": "형용사",
                "lemma": "πυκινός, πυκινή, πυκινόν",
                "parse": "sg.acc.n.",
                "gloss_kr": "지혜로운, 깊은, 신중한",
                "gloss_en": "wise, thoughtful, dense",
                "principalParts": [
                    "(미상)",
                    "(미상)",
                    "(미상)",
                    "(미상)",
                    "(미상)",
                    "(미상)"
                ],
                "syntax": "LFG f-구조에서 πυκινὸν은 명사 ἔπος를 수식하는 형용사 수식어이며, [MOD [PRED 'πυκινός', CASE acc]]로 분석된다. 생성문법적으로 NP 내부에서 수식어 구를 형성하며 성·수·격 일치를 이룬다.",
                "background": "πυκινός는 원래 '빽빽한, 두터운'에서 출발하여 은유적으로 '마음 깊이 담긴, 지혜롭고 신중한' 뜻으로 확장된 호메로스 어휘다. 헥토르가 평소 아내에게 건네곤 했던 깊은 신뢰와 지혜가 담긴 조언을 뜻하며, 그것을 더는 들을 수 없다는 한탄을 자아낸다.",
                "etymology": "Beekes(EDG)와 Chantraine(DELG)은 PIE 어근 *peuk-/puk-('두껍게 모이다')에서 유래한 것으로 보며 밀도 관련 어휘에서 의미가 전이되었다. 동계어로 밀도 및 두께 관련 인도유럽어 어휘들이 있다. 현대 그리스어에서는 고어체 및 제한적 문학어에서만 발견된다."
            },
            {
                "g": "ἔπος,",
                "pos": "명사",
                "lemma": "ἔπος, ἔπεος, τό",
                "parse": "sg.acc.n.",
                "gloss_kr": "말씀을, 말을",
                "gloss_en": "word, speech",
                "principalParts": [
                    "(미상)",
                    "(미상)",
                    "(미상)",
                    "(미상)",
                    "(미상)",
                    "(미상)"
                ],
                "syntax": "LFG f-구조에서 ἔπος는 동사 εἶπες의 OBJ 논항이며, [PRED 'ἔπος', CASE acc, θ-ROLE PATIENT]로 분석된다. 생성문법적으로 VP 내부의 목적어 자리에서 행위의 결과물을 나타낸다.",
                "background": "단순한 말(ῥῆμα)이 아니라 무게감 있고 영속적인 의미를 지닌 '말씀'을 뜻한다. 헥토르가 남겼어야 할 유언이나 가르침이 부재함을 아쉬워하는 핵심 명사다.",
                "etymology": "Chantraine(DELG)과 Frisk(GEW)는 PIE 어근 *wekʷ-('말하다')에서 유래한 것으로 보며, s-중성 명사로 발전했다. 동계어로 라틴어 vox 및 영어 voice 등이 있다. 현대 그리스어에는 고어적 표현으로 명맥을 유지한다."
            },
            {
                "g": "οὗ",
                "pos": "대명사",
                "lemma": "ὅς, ἥ, ὅ",
                "parse": "sg.gen.n.",
                "gloss_kr": "그것을, 그 말씀을",
                "gloss_en": "of which",
                "syntax": "LFG f-구조에서 οὗ는 관계대명사로서 선행사 ἔπος를 수식하는 관계절의 속격 논항이며, [PRED 'ὅς', CASE gen, θ-ROLE THEME]로 분석된다. 생성문법적으로 관계절 구(Relative Clause)의 Spec-CP 자리에서 이동한 후행 관계대명사로 기능한다.",
                "background": "남편이 남겼어야 할 그 지혜로운 말씀을 가리키며, 앞으로의 삶에서 유일한 정신적 지주가 되었을 그 가르침을 상기시킨다.",
                "etymology": "Beekes(EDG)와 Chantraine(DELG)은 PIE 지시/관계 대명사 어근 *io-에서 유래했다고 분석한다. 그리스어에서 관사 및 관계대명사 체계의 기틀을 이룬다. 현대 그리스어에서는 다양한 대명사 및 접속사적 용법으로 분화되어 남아 있다."
            },
            {
                "g": "τέ",
                "pos": "접속사",
                "lemma": "τε",
                "parse": "coord.conj.",
                "gloss_kr": "그리고, 도",
                "gloss_en": "and",
                "syntax": "LFG f-구조에서 τέ는 Enclitic 접속사로서 시제/상황의 지속성을 연결하며, [COORD [PRED 'τε']]로 분석된다. 생성문법적으로 두 개의 시제 또는 상황 요소를 결합하는 후치 클리틱으로 작용한다.",
                "background": "시구의 운율을 맞추고 문장 속에서 밤낮으로 이어지는 상태의 연속성을 강조하는 호메로스 시기의 전통적 수식 불변화사다.",
                "etymology": "Chantraine(DELG)은 PIE 접속사 *kʷe('그리고')에서 유래한 것으로 본다. 동계어로 라틴어 -que 및 산스크리트어 ca 등이 있다. 현대 그리스어에는 직접적인 일상 용법으로 남아있지 않다."
            },
            {
                "g": "κεν",
                "pos": "부사",
                "lemma": "κέ",
                "parse": "modal.adv.",
                "gloss_kr": "~할 텐데, ~할 수 있을 텐데",
                "gloss_en": "would, might",
                "syntax": "LFG f-구조에서 κεν은 가능법/가정법 조동사적 부사이며, [MOD [PRED 'κέ', MOOD potential]]로 분석된다. 생성문법적으로 법성 핵(Modal head) 위치에 병합되어 주절 또는 관계절에 잠재적(potential) 의미를 부여한다.",
                "background": "과거에 그 말씀을 들었더라면 앞으로의 삶 속에서 영원히 기억하고 위안을 삼았을 것이라는 가정적 상황을 열어주는 가정법/가능법 조립자다.",
                "etymology": "Beekes(EDG)와 Chantraine(DELG)은 PIE 강조/가정 부사 계열에서 유래한 것으로 보며, 아티카 방언의 ἄν과 동등한 호메로스 방언의 양식이다. 현대 그리스어에는 안 쓰이고 고전 시어에 국한된다."
            },
            {
                "g": "αἰεὶ",
                "pos": "부사",
                "lemma": "ἀεί",
                "parse": "adv.",
                "gloss_kr": "항상, 늘",
                "gloss_en": "always, forever",
                "syntax": "LFG f-구조에서 αἰεὶ는 시간 부사어(ADJUNCT)로서 동사구의 시제적 지속성을 수식하며, [MOD [PRED 'ἀεί', TIME always]]로 분석된다. 생성문법적으로 VP 또는 TP 부가어 자리에 위치한다.",
                "background": "남편의 말씀을 평생토록, 잠시도 잊지 않고 기억했을 것이라는 앤드로마케의 변함없는 사랑과 영원한 그리움을 표현하는 핵심 부사다.",
                "etymology": "Chantraine(DELG)은 PIE 어근 *aiw-('영원, 생명')에서 유래한 것으로 보며, 시제 및 시간 지속 관련 어휘들의 모태가 된다. 동계어로 라틴어 aevum 및 영어 ever 등이 있다. 현대 그리스어에서는 ἀεί의 변형 형태들이 일상 어휘로 명맥을 잇는다."
            }
        ]
    },
    {
        "ref": "Iliad 6.745",
        "trans": "밤낮으로 눈물을 흘리며 기억하곤 했을 텐데.",
        "words": [
            {
                "g": "μεμνῄμην",
                "pos": "동사",
                "lemma": "μιμνῄσκω",
                "parse": "1st.sg.pres.opt.mid.",
                "gloss_kr": "내가 기억할 텐데",
                "gloss_en": "I would remember",
                "principalParts": [
                    "μιμνῄσκω",
                    "μνήσω",
                    "ἔμνησα",
                    "μέμνηκα",
                    "μέμνημαι",
                    "ἐμνήσθην"
                ],
                "syntax": "LFG f-구조에서 μεμνῄμην은 잠재적 희구법(potential optative) 서술어로서 [PRED 'μιμνῄσκω<SUBJ,OBJ>', SUBJ [PRED 'ἐγώ', 1st sg], OBJ [PRED 'οὗ', CASE gen]] 구조를 취하며, 조건문이나 가정적 맥락의 귀결절을 이룬다. 생성문법적으로 희구법 어미와 중간태/수동태 어간의 결합으로 유도된다.",
                "background": "기억하다라는 동사의 희구법 형태로, 만약 그 말을 들었더라면 평생토록 마음속에 간직하고 기억했을 것이라는 아내의 애틋하고도 절절한 심정을 나타낸다.",
                "etymology": "Beekes(EDG)와 Chantraine(DELG)은 PIE 어근 *mneh₂-('기억하다', e급/영급, 후두음 h₂ 포함)에서 유래했다고 분석한다. 그리스어에서 중복사(reduplication)와 파생 접미사를 거쳐 현재완료 및 중수동태 체계를 발달시켰다. 동계어로 라틴어 memor 및 영어 mind 등이 있다. 현대 그리스어에는 고어체 및 전문 어휘로 제한적으로 남아 있다."
            },
            {
                "g": "νύκτάς",
                "pos": "명사",
                "lemma": "νύξ, νυκτός, ἡ",
                "parse": "pl.acc.f.",
                "gloss_kr": "밤들을",
                "gloss_en": "nights",
                "principalParts": [
                    "(미상)",
                    "(미상)",
                    "(미상)",
                    "(미상)",
                    "(미상)",
                    "(미상)"
                ],
                "syntax": "LFG f-구조에서 νύκτάς는 시간적 지속을 나타내는 대격 부사구(accusative of duration of time)이며, [ADJUNCT [PRED 'νύξ', CASE acc, TIME duration]]로 분석된다. 생성문법적으로 시간 부가어로서 VP 외부 또는 내부에서 기간을 나타내는 명사구로 투영된다.",
                "background": "밤과 낮을 가리지 않고 슬픔에 잠겨 남편의 말씀을 되새겼을 것이라는 표현으로, 앤드로마케의 고통이 시간의 경계를 넘어 영원히 지속될 것임을 보여준다.",
                "etymology": "Chantraine(DELG)과 Frisk(GEW)는 PIE 어근 *nókʷts('밤')에서 유래한 것으로 본다. 인도유럽어족 전반에 걸쳐 가장 보존 상태가 좋은 고대 어휘 중 하나다. 동계어로 라틴어 nox 및 영어 night 등이 있다. 현대 그리스어에서는 νύχτα (복수 νύχτες) 형태로 일상 어휘의 중심을 차지한다."
            },
            {
                "g": "τε",
                "pos": "접속사",
                "lemma": "τε",
                "parse": "coord.conj.",
                "gloss_kr": "그리고",
                "gloss_en": "and",
                "syntax": "LFG f-구조에서 τε는 νύκτάς와 ἤματα를 대등하게 연결하는 접속 핵이며, [COORD [PRED 'τε']]로 분석된다. 생성문법적으로 두 시간 명사구를 묶어주는 후치 클리틱 접속사로 작용한다.",
                "background": "밤과 낮을 쌍으로 묶어 하루의 모든 순간을 비탄과 기억으로 채우겠다는 아내의 헌신적이고도 비극적인 다짐을 완성한다.",
                "etymology": "Chantraine(DELG)에 따르면 PIE 접속사 *kʷe('그리고')에서 유래했다. (744행의 τέ 항목 참조)"
            },
            {
                "g": "καὶ",
                "pos": "접속사",
                "lemma": "καί",
                "parse": "coord.conj.",
                "gloss_kr": "그리고",
                "gloss_en": "and",
                "syntax": "LFG f-구조에서 καὶ는 대등 접속사로서 시간 명사구들과 분사구 사이의 연결을 매개하며, f-구조 상 대등한 통사 단위를 병치한다.",
                "background": "밤낮의 구절과 눈물을 흘리는 행위를 자연스럽게 이어주며 시적 호흡을 매끄럽게 조율한다.",
                "etymology": "Beekes(EDG)에 따르면 기층 언어 접촉 및 인도유럽어 공통 접속사 어근에서 유래했다. (741행의 καὶ 항목 참조)"
            },
            {
                "g": "ἤματα",
                "pos": "명사",
                "lemma": "ἦμαρ, ἤματος, τό",
                "parse": "pl.acc.n.",
                "gloss_kr": "낮들을",
                "gloss_en": "days",
                "principalParts": [
                    "(미상)",
                    "(미상)",
                    "(미상)",
                    "(미상)",
                    "(미상)",
                    "(미상)"
                ],
                "syntax": "LFG f-구조에서 ἤματα는 시간적 지속을 나타내는 대격 부사구이며, [ADJUNCT [PRED 'ἦμαρ', CASE acc, TIME duration]]로 분석된다. 생성문법적으로 시간 지속을 나타내는 명사구 부가어로 투영된다.",
                "background": "밤과 마찬가지로 낮 시간 동안에도 끊임없이 남편을 그리워하며 눈물 흘릴 것임을 나타내는 호메로스 시기의 전형적인 시간 표현이다.",
                "etymology": "Chantraine(DELG)과 Frisk(GEW)는 PIE 어근 *ah₁- 또는 일광 관련 어근에서 유래한 것으로 보며, 그리스어에서 r/t 교체형 이형태로 발전했다. 동계어는 타 인도유럽어의 낮/빛 관련 어휘들과 연관된다. 현대 그리스어에는 고어적 흔적으로만 남아 있고 일반 대화에서는 ἡμέρα가 쓰인다."
            },
            {
                "g": "δάκρυ",
                "pos": "명사",
                "lemma": "δάκρυ, δάκρυος, τό",
                "parse": "sg.acc.n. (or pl.)",
                "gloss_kr": "눈물을",
                "gloss_en": "tears",
                "principalParts": [
                    "(미상)",
                    "(미상)",
                    "(미상)",
                    "(미상)",
                    "(미상)",
                    "(미상)"
                ],
                "syntax": "LFG f-구조에서 δάκρυ는 분사 χέουσα의 OBJ 논항이며, [PRED 'δάκρυ', CASE acc, θ-ROLE PATIENT]로 분석된다. 생성문법적으로 내적 목적어(internal object) 또는 행위의 물질적 대상을 나타내는 목적어 자리에 병합된다.",
                "background": "눈물은 앤드로마케의 슬픔을 시각적으로 형상화하는 가장 직접적인 매개체다. 밤낮으로 흐를 눈물은 남편을 잃은 아내가 치러야 할 영원한 속죄이자 비극의 기록이다.",
                "etymology": "Beekes(EDG)와 Chantraine(DELG)은 PIE 재구형 *dakru-('눈물')에서 유래했다고 분석하며, 게르만어파 및 켈트어파 등 광범위한 인도유럽어족에 걸쳐 완벽하게 보존된 고대 어휘다. 동계어로 영어 tear 등이 있다. 현대 그리스어에서는 δάκρυ (복수 δάκρυα) 형태로 오늘날까지 활발하게 쓰인다."
            },
            {
                "g": "χέουσα.",
                "pos": "동사",
                "lemma": "χέω",
                "parse": "pres.act.part.sg.nom.f.",
                "gloss_kr": "흘리며",
                "gloss_en": "shedding",
                "principalParts": [
                    "χέω",
                    "χεῶ",
                    "ἔχεα",
                    "κεχύκα",
                    "κεχυμαι",
                    "ἐχύθην"
                ],
                "syntax": "LFG f-구조에서 χέουσα는 주어(1인칭 단수 생략)의 부대상황을 나타내는 분사 구문이며, [ADJUNCT [PRED 'χέω', TIME simultaneous]]로 분석된다. 생성문법적으로 주절 동사 μεμνῄμην과 동시성을 가지며 주어와 성·수·격 일치를 이루는 VP-adjunct로 투영된다.",
                "background": "눈물을 '쏟아붓다, 흘리다'를 뜻하는 분사로, 슬픔에 겨워 눈물을 폭포처럼 흘리며 살아갈 자신의 비참한 미래를 생생하게 그려낸다. 일리아스 6권의 이 감동적인 비극적 독백을 마무리하는 강렬한 시적 마침표다.",
                "etymology": "Beekes(EDG)와 Chantraine(DELG)은 PIE 어근 *gʰewh₂-('붓다, 흘리다', e급, 후두음 h₂ 포함)에서 유래했다고 분석한다. 그리스어에서 모음 축약과 능동태 분사 접미사 -σα 결합을 거쳤다. 동계어로 산스크리트어 및 게르만어파의 액체 관련 어휘들이 있다. 현대 그리스어에서는 χύνω (흘리다, 쏟다) 형태로 일상적으로 활발히 쓰인다."
            }
        ]
    },
    {
        "ref": "Iliad 6.746",
        "trans": "이렇게 그녀가 눈물을 흘리며 말하니, 여인들도 그에 화답하여 통곡하였다.",
        "words": [
            {
                "g": "ὣς",
                "pos": "부사",
                "lemma": "ὥς",
                "parse": "adv.",
                "gloss_kr": "이와 같이",
                "gloss_en": "thus, so",
                "syntax": "LFG 관점에서 ὣς는 지시적 양태 부사어(adverbial modifier)로 기능하며, 주절의 서술어 동사를 수식하여 [MOD [PRED 'ὥς']] 속성을 지닌다. 생성문법적으로는 VP 또는 vP 부가어 자리에 위치하며, 앞서 앤드로마케가 행한 발화 내용을 가리키는 지시사적 성격을 띤다.",
                "background": "앤드로마케의 비극적인 독백이 끝난 직후, 그 슬픔에 찬 발화 방식과 내용이 주위의 여인들에게 고스란히 전달되는 국면을 여는 지시 부사다. 서사시 전체에서 인물의 발화와 그에 따른 청중의 집단적 반응을 긴밀하게 엮어주는 핵심 문체 장치다.",
                "etymology": "Beekes(EDG)와 Chantraine(DELG)은 PIE 지시 대명사/부사 어근에서 유래한 것으로 보며, 호메로스 방언에서 양태와 방식을 나타내는 정형 부사로 굳어졌다고 분석한다. 동계어로는 여타 인도유럽어의 지시사 계열이 존재한다. 현대 그리스어에서는 고어체 및 특정 관용 표현에서만 그 흔적을 찾을 수 있다."
            },
            {
                "g": "ἔφατο",
                "pos": "동사",
                "lemma": "φημί",
                "parse": "3rd.sg.impf.ind.mid.",
                "gloss_kr": "말하였다",
                "gloss_en": "she spoke",
                "principalParts": [
                    "φημί",
                    "φήσω",
                    "ἔφησα",
                    "(미상)",
                    "(미상)",
                    "(미상)"
                ],
                "syntax": "LFG f-구조에서 ἔφατο는 서술어로서 [PRED 'φημί<SUBJ,COMP>', SUBJ [PRED '앤드로마케', 3rd sg]] 논항 구조를 취하며, 직설법 미완료 중간태 형태로 발화 행위의 지속성을 나타낸다. 생성문법적으로 T(시제) 핵과 어간의 결합으로 유도되며, 중간태 어미는 발화 주체의 내면적 정서가 실린 행위임을 반영한다.",
                "background": "주인공의 비탄에 찬 발화를 전달하는 전통적인 서사 동사로, 앤드로마케의 개인적 비극이 공간을 채우고 있음을 보여준다. 미완료시제를 사용하여 그녀의 울부짖음이 단순한 단발성 외침이 아님을 시사한다.",
                "etymology": "Beekes(EDG)와 Chantraine(DELG)은 PIE 어근 *bʰeh₂-('말하다', e급, 후두음 h₂ 포함)에서 유래했다고 분석한다. 그리스어에서 동사 체계를 형성하여 발화 관련 어휘의 근간을 이룬다. 동계어로 라틴어 for 및 영어 fame 등이 있다. 현대 그리스어에서는 직접적인 일상 동사로 쓰이지 않고 파생어로만 남았다."
            },
            {
                "g": "κλαίουσ᾽,",
                "pos": "동사",
                "lemma": "κλαίω",
                "parse": "pres.act.part.sg.nom.f.",
                "gloss_kr": "울면서",
                "gloss_en": "weeping",
                "principalParts": [
                    "κλαίω",
                    "κλαύσομαι",
                    "ἔκλαυσα",
                    "(미상)",
                    "κέκλαυμαι",
                    "ἐκλαύσθην"
                ],
                "syntax": "LFG f-구조에서 κλαίουσ᾽은 주어의 부대상황을 나타내는 분사 수식어이며, [ADJUNCT [PRED 'κλαίω', TIME simultaneous]]로 분석된다. 생성문법적으로 주절 동사와 동시성을 갖는 비정형 절의 핵으로서 주어와 성·수·격 일치를 이룬다.",
                "background": "말을 하는 행위와 눈물을 흘리는 행위가 분리될 수 없음을 보여주는 분사로, 앤드로마케의 모든 발화가 비탄에 젖어 있음을 강조한다.",
                "etymology": "Chantraine(DELG)과 Frisk(GEW)는 PIE 의성어적 어근 또는 *kleu̯- 계열과의 연관 속에서 울음소리를 나타내는 어휘로 본다. 그리스어에서 이음절 형태로 발전했다. 현대 그리스어에서는 κλαίω 형태로 일상에서 활발히 쓰인다."
            },
            {
                "g": "ἐπὶ",
                "pos": "전치사",
                "lemma": "ἐπί",
                "parse": "prep.",
                "gloss_kr": "그에 더하여, 함께",
                "gloss_en": "in addition, thereupon",
                "syntax": "LFG f-구조에서 ἐπὶ는 전치사로서 속격/여격/대격 명사를 지배하며 여기서는 부사적 접두 요소 또는 독립 전치사로 기능하여 반응의 방향성을 부여한다. 생성문법적으로 PP의 핵으로 작용한다.",
                "background": "앤드로마케의 울음 위에 트로이아 여인들의 통곡이 겹쳐지는 집단적 연대의 순간을 묘사하는 전치사적 표현이다.",
                "etymology": "Beekes(EDG)는 PIE 전치사/부사 어근 *epi('~ 위에, ~에게')에서 유래한 것으로 본다. 그리스어 전반에서 공간적·시간적 접촉을 나타내는 기본 어휘다. 현대 그리스어에서도 ἐπί / επί로 이어진다."
            },
            {
                "g": "δὲ",
                "pos": "접속사",
                "lemma": "δέ",
                "parse": "coord.conj.",
                "gloss_kr": "그리고",
                "gloss_en": "and",
                "syntax": "LFG f-구조에서 δὲ는 대등 접속사로 앞 절의 발화 행위와 뒷절의 집단적 반응을 연결한다. 생성문법적으로 Wackernagel 위치에 부착되는 클리틱이다.",
                "background": "개인의 비극에서 군중의 반응으로 시선이 확장되는 전환을 매끄럽게 이끄는 접속사다.",
                "etymology": "Chantraine(DELG)에 따르면 PIE 접속사 계열에서 유래한 불변화사다."
            },
            {
                "g": "στενάχοντο",
                "pos": "동사",
                "lemma": "στενάχω",
                "parse": "3rd.pl.impf.ind.mid.",
                "gloss_kr": "신음하였다, 통곡하였다",
                "gloss_en": "they groaned",
                "principalParts": [
                    "(미상)",
                    "(미상)",
                    "(미상)",
                    "(미상)",
                    "(미상)",
                    "(미상)"
                ],
                "syntax": "LFG f-구조에서 στενάχοντο는 복수 주어(γυναῖκες)를 받는 서술어이며, [PRED 'στενάχω<SUBJ>', SUBJ [PRED 'γυναῖκες', 3rd pl]] 구조를 이룬다. 생성문법적으로 미완료시제 중간태 어미 -ντο가 결합하여 집단적이고 지속적인 비탄의 소리를 나타낸다.",
                "background": "궁전 안의 여인들이 앤드로마케의 절규에 공감하여 함께 목놓아 우는 장면으로, 비극적 분위기가 트로이아 전체의 여성들로 확산됨을 보여준다.",
                "etymology": "Beekes(EDG)와 Chantraine(DELG)은 신음 소리를 모방한 의성어적 PIE 어근에서 유래한 것으로 보며, 호메로스 시기에 반복 접사 형태를 발달시켰다. 현대 그리스어에는 직접적인 일상어로 남아있지 않다."
            },
            {
                "g": "γυναῖκες.",
                "pos": "명사",
                "lemma": "γυνή, γυναικός, ἡ",
                "parse": "pl.nom.f.",
                "gloss_kr": "여인들이",
                "gloss_en": "women",
                "principalParts": [
                    "(미상)",
                    "(미상)",
                    "(미상)",
                    "(미상)",
                    "(미상)",
                    "(미상)"
                ],
                "syntax": "LFG f-구조에서 γυναῖκες는 동사 στενάχοντο의 주어(SUBJ) 논항이며, [PRED 'γυνή', CASE nom, TH 3rd, NUM pl]로 분석된다. 생성문법적으로 [Spec,TP] 자리를 점유하며 동사와 수 일치를 이룬다.",
                "background": "트로이아의 여인들은 영웅들의 죽음 앞에서 가장 직접적으로 고통을 감내하는 집단으로, 앤드로마케의 슬픔에 동참함으로써 비극의 사회적 의미를 확장한다.",
                "etymology": "Chantraine(DELG)과 Frisk(GEW)는 PIE 어근 *gʷenH₂-('여성, 아내', 후두음 h₂ 포함)에서 유래했다고 분석한다. 그리스어에서 자음교체(γυναικ-)를 겪었다. 동계어로 영어 queen 및 산스크리트어 jani 등이 있다. 현대 그리스어에서는 γυναίκα 형태로 일상 어휘로 쓰인다."
            }
        ]
    },
    {
        "ref": "Iliad 6.747",
        "trans": "그러자 그들 앞에서 헤카베가 다시 애원의 통곡을 시작하였다.",
        "words": [
            {
                "g": "τῇσιν",
                "pos": "대명사",
                "lemma": "ὁ, ἥ, τό",
                "parse": "pl.dat.f.",
                "gloss_kr": "그 여인들에게",
                "gloss_en": "to them",
                "syntax": "LFG f-구조에서 τῇσιν은 호메로스식 여격 대명사/관사로서 동사 ἐξῆρχε의 수혜/참여 여격 논항이며, [PRED 'ὁ', CASE dat, θ-ROLE BENEFICIARY]로 분석된다. 생성문법적으로 지시적 기능과 함께 여격 지배를 받는 DP로 투영된다.",
                "background": "슬퍼하는 여인들 무리 속에서 시어머니 헤카베가 앞으로 나아와 애도의 주도권을 쥐는 국면을 가리킨다.",
                "etymology": "Beekes(EDG)는 PIE 지시 대명사 어근에서 유래한 그리스어 관사/대명사 체계의 호메로스식 이형태로 본다. 현대 그리스어에서는 정관사 체계로 분화되어 이어진다."
            },
            {
                "g": "δ᾽",
                "pos": "접속사",
                "lemma": "δέ",
                "parse": "coord.conj.",
                "gloss_kr": "그리고, 그런데",
                "gloss_en": "and, but",
                "syntax": "LFG f-구조에서 δ᾽는 절을 연결하는 대등 접속사 클리틱이다. 생성문법적으로 두 번째 위치에 배치된다.",
                "background": "여인들의 통곡에 이어 헤카베의 새로운 발화가 시작됨을 알리는 서사적 연결 장치다.",
                "etymology": "Chantraine(DELG)에 따르면 PIE 접속사 계열에서 유래한 불변화사다."
            },
            {
                "g": "αὖθ᾽",
                "pos": "부사",
                "lemma": "αὖθι",
                "parse": "adv.",
                "gloss_kr": "다시, 이어서",
                "gloss_en": "in turn, again",
                "syntax": "LFG f-구조에서 αὖθ᾽는 시간/순서 부사어(ADJUNCT)로서 통곡의 바통이 이어짐을 나타내며, [MOD [PRED 'αὖθι', TIME sequential]]로 분석된다. 생성문법적으로 VP 부가어 위치에 놓인다.",
                "background": "앤드로마케의 선창에 이어 이번에는 어머니 헤카베가 차례를 이어받아 통곡을 주도한다는 순차적 의미를 부여한다.",
                "etymology": "Beekes(EDG)는 반복/회귀를 뜻하는 PIE 어근 부사에서 유래한 것으로 본다. 고대 시문학에서 장면 전환이나 순서 교체에 빈번히 쓰인다."
            },
            {
                "g": "Ἑκάβη",
                "pos": "명사",
                "lemma": "Ἑκάβη, Ἑκάβης, ἡ",
                "parse": "sg.nom.f.",
                "gloss_kr": "헤카베가",
                "gloss_en": "Hecuba",
                "principalParts": [
                    "(미상)",
                    "(미상)",
                    "(미상)",
                    "(미상)",
                    "(미상)",
                    "(미상)"
                ],
                "syntax": "LFG f-구조에서 Ἑκάβη는 동사 ἐξῆρχε의 주어(SUBJ) 논항이며, [PRED 'Ἑκάβη', CASE nom, TH 3rd, NUM sg]로 분석된다. 생성문법적으로 [Spec,TP] 자리를 점유하며 고유명사 주어로 기능한다.",
                "background": "트로이아의 왕비이자 헥토르의 어머니인 헤카베는 왕가와 국가의 최고 어른으로서 아들의 죽음 앞에 가장 처절한 모성애와 슬픔을 공적으로 표명할 자리에 선다.",
                "etymology": "Beekes(EDG)는 이 이름의 어원이 비인도유럽어(소아시아 기층어)에 속할 가능성이 높다고 지적하며, 프리기아 계통의 고유명사 체계와 연관시킨다. 현대 그리스어 인명 Ἑκάβη로 전승된다."
            },
            {
                "g": "ἁδινοῦ",
                "pos": "형용사",
                "lemma": "ἁδινός, ἁδινή, ἁδινόν",
                "parse": "sg.gen.m.",
                "gloss_kr": "애절한, 거듭되는, 빽빽한",
                "gloss_en": "vehement, thick, sorrowful",
                "principalParts": [
                    "(미상)",
                    "(미상)",
                    "(미상)",
                    "(미상)",
                    "(미상)",
                    "(미상)"
                ],
                "syntax": "LFG f-구조에서 ἁδινοῦ는 명사 γόοιο를 수식하는 속격 형용사 수식어이며, [MOD [PRED 'ἁδινός', CASE gen]]로 분석된다. 생성문법적으로 NP 내부에서 수식어 구를 형성하며 성·수·격 일치를 이룬다.",
                "background": "ἁδινός는 원래 '빽빽하고 무성한' 뜻이나 비탄의 맥락에서는 '끊이지 않고 거듭 밀려오는 애절한' 통곡을 묘사하는 호메로스 시기의 심오한 수식어로 쓰인다.",
                "etymology": "Chantraine(DELG)과 Frisk(GEW)는 음성 상징적 어근에서 출발하여 '풍부하게 밀려드는' 상태를 뜻하게 된 것으로 분석한다. 고대 시문학 전용 수식어다."
            },
            {
                "g": "ἐξῆρχε",
                "pos": "동사",
                "lemma": "ἐξάρχω",
                "parse": "3rd.sg.impf.ind.act.",
                "gloss_kr": "선창하다, 시작하다",
                "gloss_en": "she began, led off",
                "principalParts": [
                    "ἐξάρχω",
                    "ἐξάρξω",
                    "ἐξῆρχα",
                    "(미상)",
                    "(미상)",
                    "ἐξήρχθην"
                ],
                "syntax": "LFG f-구조에서 ἐξῆρχε는 서술어로서 [PRED 'ἐξάρχω<SUBJ,OBL>', SUBJ [PRED 'Ἑκάβη', 3rd sg], OBL [PRED 'γόος', CASE gen]] 구조를 취하며, 여격/속격 지배를 통해 노래나 곡을 이끄는 행위를 나타낸다. 생성문법적으로 미완료시제 능동태 핵 투영을 이룬다.",
                "background": "장례나 애도 의식에서 곡을 선창하고 무리가 따라 부르게 하는 주도적 역할을 가리키는 동사로, 헤카베가 슬픔의 지도자로서 비탄을 이끔을 보여준다.",
                "etymology": "Beekes(EDG)와 Chantraine(DELG)은 전치사 ἐκ과 어근 ἄρχω('시작하다, 지배하다', PIE *h₂erǵ- 또는 관련 어근)의 합성어로 본다. 현대 그리스어에서는 파생어로 일부 유지된다."
            },
            {
                "g": "γόοιο:",
                "pos": "명사",
                "lemma": "γόος, γόου, ὁ",
                "parse": "sg.gen.m.",
                "gloss_kr": "통곡을",
                "gloss_en": "of lamentation",
                "principalParts": [
                    "(미상)",
                    "(미상)",
                    "(미상)",
                    "(미상)",
                    "(미상)",
                    "(미상)"
                ],
                "syntax": "LFG f-구조에서 γόοιο는 동사 ἐξῆρχε의 지배를 받는 속격 논항이며, [PRED 'γόος', CASE gen, θ-ROLE THEME]로 분석된다. 생성문법적으로 호메로스식 장모음 속격(-οιο) 형태를 실현하며 명사구의 보어로 투영된다.",
                "background": "통곡이라는 행위의 내용이자 대상을 나타내는 속격으로, 헤카베가 시작한 비탄의 노래가 본격적으로 울려 퍼지기 시작함을 알린다.",
                "etymology": "Chantraine(DELG)은 의성어적 어근에서 출발한 명사로 본다. (741행의 γόον 항목 참조)"
            }
        ]
    },
    {
        "ref": "Iliad 6.748",
        "trans": "“헥토르여, 내 마음속에 내 모든 자식들보다 훨씬 더 사랑스러운 이여,",
        "words": [
            {
                "g": "Ἕκτορ",
                "pos": "명사",
                "lemma": "Ἕκτωρ, Ἕκτορος, ὁ",
                "parse": "sg.voc.m.",
                "gloss_kr": "헥토르여",
                "gloss_en": "O Hector",
                "principalParts": [
                    "(미상)",
                    "(미상)",
                    "(미상)",
                    "(미상)",
                    "(미상)",
                    "(미상)"
                ],
                "syntax": "LFG f-구조에서 Ἕκτορ는 호격 성분으로서 직접 인용문의 도입부에 위치한 독립적 부가어이며, 청자 헥토르를 지시한다. 생성문법적으로 VocP 외곽에 병합된다.",
                "background": "어머니 헤카베가 아들의 이름을 처절하게 부르며 시작하는 애도의 직접 인용문으로, 수많은 자식들 가운데 아들에 대한 특별한 사랑과 자부심을 드러낸다.",
                "etymology": "Beekes(EDG)는 '도시를 지탱하는 자'의 의미를 지닌 고유명사로 분석한다. (742행의 Ἕκτορ 항목 참조)"
            },
            {
                "g": "ἐμῷ",
                "pos": "형용사",
                "lemma": "ἐμός, ἐμή, ἐμόν",
                "parse": "sg.dat.m.",
                "gloss_kr": "나의",
                "gloss_en": "my",
                "principalParts": [
                    "(미상)",
                    "(미상)",
                    "(미상)",
                    "(미상)",
                    "(미상)",
                    "(미상)"
                ],
                "syntax": "LFG f-구조에서 ἐμῷ는 명사 θυμῷ를 수식하는 소유 형용사 수식어이며, [MOD [PRED 'ἐμός', CASE dat]]로 분석된다. 생성문법적으로 NP 내부의 수식어 자리에서 성·수·격 일치를 이룬다.",
                "background": "어머니 자신의 내면과 마음을 강조하는 소유격 형용사로, 아들의 죽음이 어머니의 심장에 직접적으로 박힌 고통임을 나타낸다.",
                "etymology": "Chantraine(DELG)은 PIE 1인칭 대명사 어간에서 파생된 소유형용사로 본다. 동계어로 타 인도유럽어의 소유대명사 계열이 있다."
            },
            {
                "g": "θυμῷ",
                "pos": "명사",
                "lemma": "θυμός, θυμοῦ, ὁ",
                "parse": "sg.dat.m.",
                "gloss_kr": "마음속에, 영혼에",
                "gloss_en": "in soul, in heart",
                "principalParts": [
                    "(미상)",
                    "(미상)",
                    "(미상)",
                    "(미상)",
                    "(미상)",
                    "(미상)"
                ],
                "syntax": "LFG f-구조에서 θυμῷ는 처소/관계의 여격(dative of place or respect)이며, [ADJUNCT [PRED 'θυμός', CASE dat]]로 분석된다. 생성문법적으로 심리적 공간을 나타내는 PP 또는 순수 여격 부가어로 투영된다.",
                "background": "θυμός는 생명력과 감정이 머무는 마음의 자리로, 헤카베가 아들을 얼마나 깊이 사랑하고 아꼈는지가 어머니의 가장 깊은 영혼 속에 각인되어 있음을 보여준다.",
                "etymology": "Beekes(EDG)와 Chantraine(DELG)은 PIE 어근 *dhuH₂-('숨쉬다, 연기 나다', 후두음 h₂ 포함)에서 유래했다고 분석한다. 생명과 호흡, 감정의 장소로 의미가 전이되었다. 현대 그리스어에는 고어적 표현 및 파생어로 남았다."
            },
            {
                "g": "πάντων",
                "pos": "형용사",
                "lemma": "πᾶς, πᾶσα, πᾶν",
                "parse": "pl.gen.m.",
                "gloss_kr": "모든",
                "gloss_en": "of all",
                "principalParts": [
                    "(미상)",
                    "(미상)",
                    "(미상)",
                    "(미상)",
                    "(미상)",
                    "(미상)"
                ],
                "syntax": "LFG f-구조에서 πάντων은 비교급 형용사 φίλτατε의 비교 기준이 되는 속격 논항(genitive of comparison)이며, [OBL_CASE gen]으로 분석된다. 생성문법적으로 비교 구문의 표준 속격 자리에 병합된다.",
                "background": "다른 모든 자식들을 비교 대상으로 삼아 헥토르가 그들 중에서도 단연 최고로 사랑받는 존재였음을 강조한다.",
                "etymology": "Chantraine(DELG)과 Frisk(GEW)는 PIE 어근 *peh₂-('모든, 전체의')에서 유래한 것으로 본다. 동계어로 영어 pan- 접두사 등이 있다. 현대 그리스어에서는 pas/oloi 형태로 쓰인다."
            },
            {
                "g": "πολὺ",
                "pos": "부사",
                "lemma": "πολύς, πολλή, πολύ",
                "parse": "sg.acc.n. (used as adv.)",
                "gloss_kr": "훨씬, 대단히",
                "gloss_en": "much, by far",
                "principalParts": [
                    "(미상)",
                    "(미상)",
                    "(미상)",
                    "(미상)",
                    "(미상)",
                    "(미상)"
                ],
                "syntax": "LFG f-구조에서 πολὺ는 비교급 형용사를 수식하는 정도 부사(degree modifier)이며, [MOD [PRED 'πολύς', DEGREE comparative]]로 분석된다. 생성문법적으로 비교급 구의 도수 지정어 위치에 병합된다.",
                "background": "단순히 더 사랑스러운 정도가 아니라 '훨씬' 더 소중했음을 강조하여 어머니의 편애가 아니라 아들의 비범한 가치와 그 상실의 크기를 극대화한다.",
                "etymology": "Beekes(EDG)와 Chantraine(DELG)은 PIE 어근 *pelh₁-('많다, 채우다')에서 유래했다고 분석한다. 동계어로 라틴어 plus 및 영어 full 등이 있다. 현대 그리스어에서는 πολύ 형태로 일상적으로 쓰인다."
            },
            {
                "g": "φίλτατε",
                "pos": "형용사",
                "lemma": "φίλος, φίλη, φίλον",
                "parse": "sg.voc.m. (superl.)",
                "gloss_kr": "가장 사랑스러운여",
                "gloss_en": "most dear",
                "principalParts": [
                    "(미상)",
                    "(미상)",
                    "(미상)",
                    "(미상)",
                    "(미상)",
                    "(미상)"
                ],
                "syntax": "LFG f-구조에서 φίλτατε는 최상급 호격 형용사 수식어이며, [PRED 'φίλος', DEGREE superl, CASE voc]로 분석된다. 생성문법적으로 호격 명사 Ἕκτορ와 일치하는 수식어 구로 투영된다.",
                "background": "필로스(φίλος)의 최상급 형태로, 혈육의 정을 넘어 어머니에게 가장 소중하고 사랑스러운 인격체였음을 표현하는 애절한 호칭이다.",
                "etymology": "Beekes(EDG)와 Chantraine(DELG)은 PIE 어근 *p(h₁)lei-('사랑하다, 좋아하다')에서 유래한 것으로 본다. 최상급 접미사 -τατος가 결합했다. 현대 그리스어에서는 φίλος (친구) 형태로 명맥을 잇는다."
            },
            {
                "g": "παίδων,",
                "pos": "명사",
                "lemma": "παῖς, παιδός, ὁ/ἡ",
                "parse": "pl.gen.m./f.",
                "gloss_kr": "자식들 중에",
                "gloss_en": "of children",
                "principalParts": [
                    "(미상)",
                    "(미상)",
                    "(미상)",
                    "(미상)",
                    "(미상)",
                    "(미상)"
                ],
                "syntax": "LFG f-구조에서 παίδων은 전체 집단을 나타내는 부분 속격(genitive of the whole)이며, [OBL_CASE gen]으로 분석된다. 생성문법적으로 비교 대상 집단을 구성하는 명사구 보어로 투영된다.",
                "background": "프리아모스와 헤카베 사이에는 수많은 자식들이 있었으나(일리아스 전반에 걸쳐 수많은 아들딸이 언급됨), 그중에서도 헥토르가 어머니에게 차지했던 절대적 비중을 보여준다.",
                "etymology": "Chantraine(DELG)과 Frisk(GEW)는 PIE 어근 *peh₂u-('작은, 아이')에서 유래한 것으로 본다. 동계어로 영어 ped- 접두사(어린이 관련) 등이 있다. 현대 그리스어에서는 παιδί 형태로 자식/아이를 뜻하는 기본 어휘다."
            }
        ]
    },
    {
        "ref": "Iliad 6.749",
        "trans": "참으로 그대는 살아있을 때에도 신들에게 사랑을 받았었지오,",
        "words": [
            {
                "g": "ἦ",
                "pos": "부사",
                "lemma": "ἦ",
                "parse": "modal.adv.",
                "gloss_kr": "참으로, 실로",
                "gloss_en": "truly, indeed",
                "syntax": "LFG f-구조에서 ἦ는 발화의 진실성을 강조하는 양태 부사(modal modifier)이며, [MOD [PRED 'ἦ', MOOD assertive]]로 분석된다. 생성문법적으로 주절의 강한 단언(assertion)을 이끄는 핵 위치에 병합된다.",
                "background": "아들의 생전 삶이 헛되지 않았고 신들의 각별한 보살핌을 받았음을 확신에 찬 어조로 단언하는 강조사다.",
                "etymology": "Beekes(EDG)와 Chantraine(DELG)은 진실과 확신을 나타내는 PIE 양태 입자에서 유래한 것으로 본다. 고대 시문학에서 감탄과 단언에 자주 쓰인다."
            },
            {
                "g": "μέν",
                "pos": "부사",
                "lemma": "μέν",
                "parse": "modal.adv.",
                "gloss_kr": "과연, 한편으로는",
                "gloss_en": "indeed, on the one hand",
                "syntax": "LFG f-구조에서 μέν는 대조/강조 불변화사이며, [MOD [PRED 'μέν']]로 분석된다. 생성문법적으로 후치 클리틱으로 작용하여 후행하는 δέ 등과의 대조 구문을 예비한다.",
                "background": "생전의 축복받은 상태와 죽음 이후의 비극적 대비를 예고하는 전반부 강조 입자다.",
                "etymology": "Chantraine(DELG)에 따르면 PIE 강조 입자에서 유래했으며 고대 그리스어의 대조 구조를 떠받치는 핵심 불변화사다."
            },
            {
                "g": "μοι",
                "pos": "대명사",
                "lemma": "ἐγώ",
                "parse": "sg.dat.1st",
                "gloss_kr": "내게는, 나의 관점에서",
                "gloss_en": "to me",
                "syntax": "LFG f-구조에서 μοι는 감정적 이득/관점을 나타내는 여격(ethical dative)이며, [PRED 'ἐγώ', CASE dat, θ-ROLE EXPERIENCER]로 분석된다. 생성문법적으로 문장 내부의 비주어 논항으로 병합된다.",
                "background": "어머니 헤카베가 주관적으로 느끼는 감정과 기억의 정당성을 부여하는 윤리적 여격으로, 아들의 생전 가치가 어머니의 가슴속에 살아있음을 환기한다.",
                "etymology": "Chantraine(DELG)에 따르면 PIE 1인칭 대명사 사격 어간에서 유래했다. (742행의 ἐμοὶ 항목 참조)"
            },
            {
                "g": "ζωός",
                "pos": "형용사",
                "lemma": "ζωός, ζωή, ζωόν",
                "parse": "sg.nom.m.",
                "gloss_kr": "살아있는",
                "gloss_en": "alive",
                "principalParts": [
                    "(미상)",
                    "(미상)",
                    "(미상)",
                    "(미상)",
                    "(미상)",
                    "(미상)"
                ],
                "syntax": "LFG f-구조에서 ζωός는 분사 ἐὼν과 결합하거나 주어를 수식하는 술격 형용사(predicative adjective)이며, [PRED 'ζωός', CASE nom]로 분석된다. 생성문법적으로 주절 주어와 일치하는 부가적 술어 구로 투영된다.",
                "background": "죽은 현재의 비참함과 대비되는 아들의 생전 활기찬 모습을 떠올리며, 살아 숨 쉬던 시절 그가 누린 영광을 회상한다.",
                "etymology": "Beekes(EDG)와 Chantraine(DELG)은 PIE 어근 *gʷeiH3-('살다', 후두음 h₃ 포함)에서 유래했다고 분석한다. 동계어로 라틴어 vivus 및 영어 quick 등이 있다. 현대 그리스어에서는 ζωή (삶) 및 파생 형용사로 이어진다."
            },
            {
                "g": "περ",
                "pos": "부사",
                "lemma": "πέρ",
                "parse": "modal.adv.",
                "gloss_kr": "비록 ~일지라도, 과연",
                "gloss_en": "even, although",
                "syntax": "LFG f-구조에서 περ는 강조/양보 부사이며, [MOD [PRED 'πέρ']]로 분석된다. 생성문법적으로 선행하는 분사나 단어에 밀착되는 클리틱 부가어로 작용한다.",
                "background": "생전에 그러했듯, 아이러니하게도 죽음의 순간조차 신들의 보살핌이 완전히 끊기지 않았음을 강조하는 양보적 뉘앙스를 더한다.",
                "etymology": "Chantraine(DELG)은 PIE 강조 부사 어근에서 유래한 것으로 보며, 호메로스 시문학에서 한정 및 양보 표현에 필수적으로 쓰인다."
            },
            {
                "g": "ἐὼν",
                "pos": "동사",
                "lemma": "εἰμί",
                "parse": "pres.act.part.sg.nom.m.",
                "gloss_kr": "존재하면서, ~이었기에",
                "gloss_en": "being",
                "principalParts": [
                    "εἰμί",
                    "ἔσομαι",
                    "(미상)",
                    "(미상)",
                    "(미상)",
                    "(미상)"
                ],
                "syntax": "LFG f-구조에서 ἐὼν은 시간/원인을 나타내는 분사 구문이며, [ADJUNCT [PRED 'εἰμί', TIME/CAUSE]]로 분석된다. 생성문법적으로 비정형 절의 핵으로서 주어와 성·수·격 일치를 이룬다.",
                "background": "그가 살아있는 존재였다는 사실 자체가 신들의 은총을 받는 근거였음을 나타내는 존재 분사다.",
                "etymology": "Beekes(EDG)와 Chantraine(DELG)은 PIE 어근 *h₁es-('존재하다', e급, 후두음 h₁ 포함)에서 유래했다고 분석한다. 동계어로 라틴어 sum 및 영어 is 등이 있다. 현대 그리스어에서는 εἶμαι 형태로 존재 동사의 핵심을 이룬다."
            },
            {
                "g": "φίλος",
                "pos": "형용사",
                "lemma": "φίλος, φίλη, φίλον",
                "parse": "sg.nom.m.",
                "gloss_kr": "사랑받는, 친근한",
                "gloss_en": "dear, beloved",
                "principalParts": [
                    "(미상)",
                    "(미상)",
                    "(미상)",
                    "(미상)",
                    "(미상)",
                    "(미상)"
                ],
                "syntax": "LFG f-구조에서 φίλος는 명사적 술어로서 [PRED 'φίλος', SUBJ 주어, OBL_DAT θεοῖσιν] 구조를 취하며, 신들에게 사랑받는 대상임을 나타낸다. 생성문법적으로 술어 보어(predicative complement)로 투영된다.",
                "background": "헥토르가 단순한 인간의 사랑을 넘어 올림포스의 신들조차 아끼고 주목하던 영웅이었음을 회상한다.",
                "etymology": "Beekes(EDG)와 Chantraine(DELG)은 PIE 어근 *p(h₁)lei-('사랑하다')에서 유래했다고 분석한다. (748행의 φίλτατε 항목 참조)"
            },
            {
                "g": "ἦσθα",
                "pos": "동사",
                "lemma": "εἰμί",
                "parse": "2nd.sg.impf.ind.act.",
                "gloss_kr": "너는 ~이었다",
                "gloss_en": "you were",
                "principalParts": [
                    "εἰμί",
                    "ἔσομαι",
                    "(미상)",
                    "(미상)",
                    "(미상)",
                    "(미상)"
                ],
                "syntax": "LFG f-구조에서 ἦσθα는 주절의 서술어이며, [PRED 'εἰμί<SUBJ,ATTR>', SUBJ [PRED 'pro', 2nd sg], ATTR φίλος] 구조를 취한다. 생성문법적으로 미완료시제 2인칭 단수 형태를 실현한다.",
                "background": "과거에 그러했다는 사실을 회상하는 서술어로, 비극적 현재와 아름다웠던 과거를 극명하게 대비시킨다.",
                "etymology": "Chantraine(DELG)은 PIE 존재 동사 *h₁es-의 과거형 어간에서 유래한 것으로 본다. 동계어로 타 인도유럽어의 불규칙 과거 동사들이 있다."
            },
            {
                "g": "θεοῖσιν:",
                "pos": "명사",
                "lemma": "θεός, θεοῦ, ὁ/ἡ",
                "parse": "pl.dat.m.",
                "gloss_kr": "신들에게",
                "gloss_en": "to the gods",
                "principalParts": [
                    "(미상)",
                    "(미상)",
                    "(미상)",
                    "(미상)",
                    "(미상)",
                    "(미상)"
                ],
                "syntax": "LFG f-구조에서 θεοῖσιν는 형용사 φίλος의 수혜/행위자 여격 논항이며, [OBL_CASE dat, θ-ROLE AGENT/BENEFICIARY]로 분석된다. 생성문법적으로 호메로스식 장모음 여격 복수형(-οισιν)을 실현하며 PP 보어로 투영된다.",
                "background": "트로이아 전쟁에서 아폴론을 비롯한 여러 신들의 각별한 총애를 받았던 헥토르의 신화적 위상을 어머니의 입을 통해 확인시켜 준다.",
                "etymology": "Beekes(EDG)와 Chantraine(DELG)은 PIE 어근 *dhes-('신성한 것, 종교적 영역')에서 유래한 것으로 본다. 동계어로 라틴어 deus 및 영어 divine 등이 있다. 현대 그리스어에서는 θεός 형태로 신을 뜻한다."
            }
        ]
    },
    {
        "ref": "Iliad 6.750",
        "trans": "그들은 비록 죽음의 운명 속에서도 너를 보살펴 주었구나.”",
        "words": [
            {
                "g": "οἳ",
                "pos": "대명사",
                "lemma": "ὁ, ἥ, τό",
                "parse": "pl.nom.m.",
                "gloss_kr": "그 신들은",
                "gloss_en": "they (the gods)",
                "syntax": "LFG f-구조에서 οἳ는 관계절 또는 지시 대명사로서 동사 κήδοντο의 주어(SUBJ) 논항이며, [PRED 'ὁ', CASE nom, TH 3rd, NUM pl]로 분석된다. 생성문법적으로 [Spec,TP] 자리를 점유하며 앞서 언급된 신들을 지칭한다.",
                "background": "앞 문장의 '신들'을 이어받아, 잔인한 죽음의 운명이 닥친 순간에도 신들이 헥토르를 외면하지 않고 돌보았음을 강조한다(예: 아폴론이 시신을 보호한 신화적 모티프).",
                "etymology": "Beekes(EDG)는 PIE 지시/관계 대명사 어근에서 유래한 그리스어 관사/대명사 체계로 본다. (744행의 οὗ 항목 참조)"
            },
            {
                "g": "δ᾽",
                "pos": "접속사",
                "lemma": "δέ",
                "parse": "coord.conj.",
                "gloss_kr": "그러나, 그리고",
                "gloss_en": "and, but",
                "syntax": "LFG f-구조에서 δ᾽는 대등 접속사로 앞서 언급된 생전의 은총과 죽음 이후의 보살핌을 연결한다. 생성문법적으로 클리틱 위치에 병합된다.",
                "background": "죽음이라는 절대적 한계 속에서도 신들의 보살핌이 이어졌음을 극적으로 연결하는 접속사다.",
                "etymology": "Chantraine(DELG)에 따르면 PIE 접속사 계열에서 유래한 불변화사다."
            },
            {
                "g": "ἄρα",
                "pos": "부사",
                "lemma": "ἄρα",
                "parse": "modal.adv.",
                "gloss_kr": "과연, 알고 보니",
                "gloss_en": "then, indeed, as it turned out",
                "syntax": "LFG f-구조에서 ἄρα는 추론적/서사적 양태 부사이며, [MOD [PRED 'ἄρα']]로 분석된다. 생성문법적으로 두 번째 위치에 놓이는 클리틱 부가어로 작용한다.",
                "background": "과연 그러했구나라는 깨달음과 감탄을 자아내며, 신들의 보살핌이 비록 죽음을 막지는 못했으나 시신의 보존 등 신화적 방식으로 실현되었음을 나타낸다.",
                "etymology": "Beekes(EDG)와 Chantraine(DELG)은 인과적·결과적 추론을 나타내는 PIE 입자에서 유래했다고 분석한다. 호메로스 서사시에 빈번하게 쓰인다."
            },
            {
                "g": "σεῦ",
                "pos": "대명사",
                "lemma": "σύ",
                "parse": "sg.gen.2nd",
                "gloss_kr": "너를",
                "gloss_en": "of you",
                "principalParts": [
                    "(미상)",
                    "(미상)",
                    "(미상)",
                    "(미상)",
                    "(미상)",
                    "(미상)"
                ],
                "syntax": "LFG f-구조에서 σεῦ는 동사 κήδοντο의 목적격/속격 논항이며, [PRED 'σύ', CASE gen, θ-ROLE PATIENT]로 분석된다. 생성문법적으로 호메로스식 2인칭 단수 속격형을 실현하며 동사의 속격 지배를 받는다.",
                "background": "보살핌과 돌봄의 대상인 헥토르를 직접 지칭하는 2인칭 대명사로, 어머니가 죽은 아들에게 직접 말을 건네는 애절함을 더한다.",
                "etymology": "Chantraine(DELG)은 PIE 2인칭 대명사 사격 어간에서 유래한 것으로 본다. 동계어로 타 인도유럽어의 너 관련 대명사들이 있다."
            },
            {
                "g": "κήδοντο",
                "pos": "동사",
                "lemma": "κήδομαι",
                "parse": "3rd.pl.impf.ind.mid.",
                "gloss_kr": "보살펴 주었다, 염려하였다",
                "gloss_en": "they cared for",
                "principalParts": [
                    "(미상)",
                    "(미상)",
                    "(미상)",
                    "(미상)",
                    "(미상)",
                    "(미상)"
                ],
                "syntax": "LFG f-구조에서 κήδοντο는 서술어로서 [PRED 'κήδομαι<SUBJ,OBL>', SUBJ [PRED 'οἳ', 3rd pl], OBL [PRED 'σεῦ', CASE gen]] 구조를 취하며, 속격 지배를 통해 돌봄과 염려의 의미역을 배정한다. 생성문법적으로 미완료시제 중간태 어미 -ντο가 결합하여 지속적인 보살핌을 나타낸다.",
                "background": "κήδομαι는 마음 쓰며 돌보고 염려하는 행위를 뜻하며, 아폴론이 아킬레우스의 모욕으로부터 헥토르의 시신을 신비롭게 보호했던 신화적 사건을 암시한다.",
                "etymology": "Beekes(EDG)와 Chantraine(DELG)은 슬픔과 돌봄을 뜻하는 PIE 어근에서 유래한 것으로 본다. 고대 그리스어 시문학에서 신들의 자비나 인간의 근심을 묘사할 때 쓰인다."
            },
            {
                "g": "καὶ",
                "pos": "접속사",
                "lemma": "καί",
                "parse": "coord.conj.",
                "gloss_kr": "심지어, ~조차도",
                "gloss_en": "even",
                "syntax": "LFG f-구조에서 καὶ는 강조 부사/접속사로 기능하며, [MOD [PRED 'καί', FOCUS even]]로 분석된다. 생성문법적으로 초점 부가어 위치에 병합된다.",
                "background": "죽음이라는 가장 절대적이고 절망적인 상황 속에서도 신들의 보살핌이 멈추지 않았음을 강조하는 '심지어'의 의미를 부여한다.",
                "etymology": "Beekes(EDG)에 따르면 기층 언어 접촉 및 인도유럽어 공통 접속사 어근에서 유래했다. (741행의 καὶ 항목 참조)"
            },
            {
                "g": "ἐν",
                "pos": "전치사",
                "lemma": "ἐν",
                "parse": "prep.",
                "gloss_kr": "~속에서, ~의 상황에서",
                "gloss_en": "in, within",
                "syntax": "LFG f-구조에서 ἐν는 여격 명사를 지배하는 전치사 핵이며, [PRED 'ἐν', OBL_CASE dat]로 분석된다. 생성문법적으로 PP의 핵으로 기능하며 상황적 배경(locative/circumstantial) 의미역을 부여한다.",
                "background": "죽음의 운명이라는 피할 수 없는 비극적 상황 속에 처해 있음을 나타내는 처소/상황 전치사다.",
                "etymology": "Beekes(EDG)는 PIE 전치사 *en('~ 안에')에서 유래한 것으로 본다. 동계어로 라틴어 in 및 영어 in 등이 있다. 현대 그리스어에서는 σε / mesa 형태로 변화했다."
            },
            {
                "g": "θανάτοιό",
                "pos": "명사",
                "lemma": "θάνατος, θανάτου, ὁ",
                "parse": "sg.gen.m.",
                "gloss_kr": "죽음의",
                "gloss_en": "of death",
                "principalParts": [
                    "(미상)",
                    "(미상)",
                    "(미상)",
                    "(미상)",
                    "(미상)",
                    "(미상)"
                ],
                "syntax": "LFG f-구조에서 θανάτοιό는 명사 αἴσῃ를 수식하는 속격 명사 보어이며, [MOD [PRED 'θάνατος', CASE gen]]로 분석된다. 생성문법적으로 호메로스식 장모음 속격형(-οιο)을 실현하며 명사구 내부의 소유/한정 속격으로 투영된다.",
                "background": "죽음 그 자체를 인격적이거나 운명적인 힘으로 표현하여, 헥토르가 피할 수 없었던 비극적 종말의 무게를 강조한다.",
                "etymology": "Beekes(EDG)와 Chantraine(DELG)은 PIE 어근 *dhenH₁-('죽다, 사라지다')에서 유래했다고 분석한다. 동계어로 타 인도유럽어의 죽음 관련 어휘들이 있다. 현대 그리스어에서는 θάνατος 형태로 일상 어휘로 쓰인다."
            },
            {
                "g": "περ",
                "pos": "부사",
                "lemma": "πέρ",
                "parse": "modal.adv.",
                "gloss_kr": "비록 ~일지라도",
                "gloss_en": "even",
                "syntax": "LFG f-구조에서 περ는 앞선 명사구의 의미를 강조하는 양보적 클리틱 부사이며, [MOD [PRED 'πέρ']]로 분석된다.",
                "background": "죽음이라는 가혹한 운명 속에서도 신들의 보살핌이 미쳤음을 강조하는 한정적 수식어다.",
                "etymology": "Chantraine(DELG)은 PIE 강조 부사 어근에서 유래한 것으로 본다."
            },
            {
                "g": "αἴσῃ.",
                "pos": "명사",
                "lemma": "αἶσα, αἴσης, ἡ",
                "parse": "sg.dat.f.",
                "gloss_kr": "운명 속에서, 몫 안에서",
                "gloss_en": "in fate, in lot",
                "principalParts": [
                    "(미상)",
                    "(미상)",
                    "(미상)",
                    "(미상)",
                    "(미상)",
                    "(미상)"
                ],
                "syntax": "LFG f-구조에서 αἴσῃ는 전치사 ἐν의 지배를 받는 여격 논항이며, [PRED 'αἶσα', CASE dat, θ-ROLE LOCATION/CIRCUMSTANCE]로 분석된다. 생성문법적으로 PP의 보어로 투영되며 인간이 거스를 수 없는 정해진 몫이나 운명을 나타낸다.",
                "background": "αἶσα는 신들이 인간에게 할당한 피할 수 없는 운명이나 몫을 뜻하며, 헥토르가 전장에서 맞이한 죽음이 단순한 우연이 아니라 거대한 우주적 질서와 운명 속에서 이루어졌음을 보여준다.",
                "etymology": "Beekes(EDG)와 Chantraine(DELG)은 PIE 어근에서 유래한 '몫, 할당된 운명'을 뜻하는 고대 어휘로 분석한다. 호메로스 서사시의 운명관을 이루는 핵심 단어다. 현대 그리스어에는 고어적 표현으로 남아 있다."
            }
        ]
    },
  {
    "ref": "Iliad 23.751",
    "trans": "발 빠른 아킬레우스께서는 내 다른 아들들도 붙잡는 대로 마르지 않는 바다 건너에서",
    "words": [
      {
        "g": "ἄλλους",
        "pos": "형용사",
        "lemma": "ἄλλος, ἄλλη, ἄλλο",
        "parse": "pl.acc.m.",
        "principalParts": "–",
        "gloss_kr": "다른",
        "gloss_en": "other",
        "syntax": "LFG 관점에서 ἄλλους는 명사 παῖδας를 수식하는 한정사적 형용사의 역할을 수행하며, [ADJUNCT [PRED 'ἄλλος', CASE acc, NUM pl, GEND m]]의 속성-값 행렬로 분석된다. 통사적으로는 DP 내부의 Spec 위치에서 명사구와 성·수·격 일치(agreement)를 이루며, 생성문법적으로는 비대칭적 c-구조 상에서 수식어로서 NP를 좌측에서 지배한다. 수식 대상인 목적어의 속성을 한정하면서 담화 내 대조적 초점(contrastive focus)을 형성한다.",
        "background": "이 구절은 프리아모스 왕이 헥토르의 시신을 찾아오기 위해 아킬레우스를 찾아가 호소하는 장면에 등장한다. ἄλλους라는 표현을 통해 아킬레우스가 전쟁 중에 얼마나 많은 프리아모스의 아들들을 죽이고 포로로 잡았는지를 강조하며 비극성을 극대화한다. 영웅의 잔혹한 무용과 전쟁의 참상을 동시에 환기하는 서사적 기능을 담당한다.",
        "etymology": "PIE 재구형 *h₂el-('다른, 건너편의')에 기원하며, 영급 및 후두음 *h₂의 존재가 학술적으로 확인된다[cite: 1]. 라틴어 alius('다른') 및 고대 아일랜드어 aile와 명백한 동계어를 이룬다[cite: 1]. 음운사적으로 PIE의 후두음이 그리스어에서 모음화 혹은 소실되는 과정을 거쳤으며, 라틴어와의 비교를 통해 어두 자음의 보존 양상이 입증된다[cite: 1]. Beekes(EDG)는 이 형태가 인도유럽어족 전반에 걸쳐 광범위하게 공유되는 대명사적 형용사 계열임을 실명 인용하여 뒷받침한다[cite: 1]."
      },
      {
        "g": "μὲν",
        "pos": "소사",
        "lemma": "μέν",
        "parse": "coord.conj.",
        "principalParts": "–",
        "gloss_kr": "과거에, 대조를 나타내어",
        "gloss_en": "indeed, on the one hand",
        "syntax": "LFG 관점에서 μὲν은 등위접속 또는 담화 표지(discourse marker)의 기능을 수행하며, 후행하는 δέ와 함께 대조적 구조를 형성하는 격자 구문(correlative structure)을 매개한다. 생성문법의 관점에서는 CP 영역의 담화 외곽(CP-left periphery)에 투사되어 화제(topic) 혹은 초점의 정보구조적 위계를 설정한다. 통사적으로는 독립된 논항을 요구하지 않으며, 전행의 명사구를 강조하는 후치사적 불변화사로 분석된다.",
        "background": "호메로스 서사시에서 μέν과 δέ의 상관 구조는 문장 간의 대칭성과 수사적 균형을 잡아주는 핵심적인 장치다. 여기서는 '다른 아들들'에 대한 처우와 '내 아들 헥토르'에 대한 끔찍한 처우를 극적으로 대비시키는 서사적 도입부 역할을 한다. 청중의 주의를 집중시키고 화자의 비통한 감정을 구조적으로 조직한다.",
        "etymology": "PIE 재구형 *men('머물다, 지속하다' 또는 강조사적 기원)과 연관되며, 명확한 동계어로는 명제적 강조 기능을 공유하는 제1음절사들이 존재한다[cite: 1]. 그리스어 내부에서 초기 단계부터 후행 불변화사로 고정되어 의미가 추상화되는 의미 축소와 문법화(grammaticalization)를 겪었다[cite: 1]. Chantraine(DELG)은 이 단어의 어원이 명확한 명사적 기원보다는 화용론적 강조 소사에서 비롯되었음을 실명 인용하여 설명한다[cite: 1]. 현대 그리스어에는 직접적인 독립형태로 남아있지 않고 고전 문법의 잔재로만 기능한다[cite: 1]."
      },
      {
        "g": "γὰρ",
        "pos": "소사",
        "lemma": "γάρ",
        "parse": "coord.conj.",
        "principalParts": "–",
        "gloss_kr": "왜냐하면, 과연",
        "gloss_en": "for, because",
        "syntax": "LFG f-구조에서 γὰρ는 인과 관계를 나타내는 접속사로 기능하며, 선행 문장과 후행 문장 간의 수식-피수식 혹은 논리적 근거 관계를 매개한다. 생성문법적 분석에 따르면, 이 불변화사는 CP의 Spec 자리 혹은 C 핵에 위치하여 문장 간의 종속 접속을 이끄는 강한 통사적 연쇄를 형성한다. 어순상 두 번째 위치(Wackernagel's law)를 엄격히 준수하여 전위되는 특성을 보인다.",
        "background": "프리아모스가 아킬레우스에게 자신의 참담한 처지를 설명하며 아킬레우스가 과거에 저지른 행동을 상기시키는 논리적 근거를 도입한다. 이 단어를 통해 서사의 인과관계가 긴밀하게 연결되며, 청중에게 왜 이토록 슬픈 비극이 벌어졌는지에 대한 당위성을 부여한다.",
        "etymology": "PIE 재구형 *ge(강조사)와 *ar(연결사)의 결합으로 추정되며, 후두음적 변동 없이 고대 그리스어 독자적 발달을 겪었다[cite: 1]. 그리스어 시문학 전반에서 인과와 설명을 나타내는 대표적인 접속사로 고착화되는 의미 전이를 보였다[cite: 1]. Frisk(GEW)는 이 복합적 기원에 대해 논의하며 인도유럽어 내 다른 어족과의 직접적 동계어 연결은 신중해야 함을 지적한다[cite: 1]. 현대 그리스어에서는 구어체적 인과 표현으로 직접 이어지지 않고 고전 인용구에만 제한적으로 잔존한다[cite: 1]."
      },
      {
        "g": "παῖδας",
        "pos": "명사",
        "lemma": "παῖς, παιδός, ὁ/ἡ",
        "parse": "pl.acc.m.",
        "principalParts": "–",
        "gloss_kr": "아들들을, 자식들을",
        "gloss_en": "children, sons",
        "syntax": "LFG f-구조에서 παῖδας는 동사 πέρνασχ'의 목적어(OBJ)로서 [PRED 'παῖς', CASE acc, NUM pl]의 자질 구조를 갖는다. 생성문법적으로는 [vP tᵢ [VP V NP]] 구조에서 목적어로서 대격 지배(accusative Case assignment)를 받으며, 앞서 언급된 형용사 ἄλλους와 엄격한 성·수·격 일치를 이룬다. 논항구조상 환유적 의미 전달을 위한 환유적 대상(patient) 역할을 담당한다.",
        "background": "여기서 παῖδας는 단순한 '아이들'이 아니라 프리아모스의 친자식들, 즉 트로이아의 왕자들을 의미한다. 전쟁으로 인해 자식들을 무참히 잃은 아버지의 찢어지는 심정을 대변하는 핵심 어휘다. 영웅의 장엄함 뒤에 숨겨진 가족의 파괴라는 비극적 주제를 환기한다.",
        "etymology": "PIE 재구형 *pau-iso-('작은 것, 자녀', 영급 어간 *pau-)에 기원하며, 후두음적 요인보다는 어근 파생 형태를 띤다[cite: 1]. 산스크리트어 putrá-('아들')와 라틴어 puer('소년')가 대표적인 동계어다[cite: 1]. 음운사적으로 어간 교체와 접미사 결합을 통해 의미가 '어린아이'에서 '자식, 아들'로 확장되는 전이를 겪었다[cite: 1]. Beekes(EDG)는 이 단어가 인도유럽어의 친족칭호 체계에서 파생된 오래된 어휘임을 실명 인용하여 증명한다[cite: 1]."
      },
      {
        "g": "ἐμοὺς",
        "pos": "형용사",
        "lemma": "ἐμός, ἐμή, ἐμόν",
        "parse": "pl.acc.m.",
        "principalParts": "–",
        "gloss_kr": "나의",
        "gloss_en": "my, mine",
        "syntax": "LFG 관점에서 ἐμοὺς는 명사 παῖδας를 한정하는 소유 형용사로 기능하며, f-구조상 [SPEC [PRED 'ἐμός', PERS 1, NUM sg]]의 속성-값 행렬로 표현된다. 생성문법적으로는 DP 내부의 지정어(Spec-DP) 자리를 점하며 수식하는 명사와 성·수·격 일치 관계를 맺는다. 화자의 소유격을 통사적으로 실현하는 대명사적 형용사의 전형적 분포를 보인다.",
        "background": "프리아모스가 자신의 혈육임을 강조하며 아킬레우스의 잔인한 행동에 대한 비극적 개인성을 부각시킨다. 객관적인 전쟁의 참혹함이 아니라 '내 아들들'이라는 주관적이고 참담한 아버지의 고통으로 시선을 집중시킨다.",
        "etymology": "PIE 1인칭 대명사 어근 *me-에서 파생된 소유형용사 재구형에 기원하며, 후두음 직접 연관은 없다[cite: 1]. 라틴어 meus('나의') 및 산스크리트어 mama('나의')와 긴밀한 동계어 관계를 형성한다[cite: 1]. 음운사적으로 1인칭 대격 어간에 소유격 접사가 융합되는 형태적 재구조화를 거쳤다[cite: 1]. Chantraine(DELG)은 이 형태가 인도유럽어의 대명사 파생 법칙을 충실히 따르는 고유 어휘임을 실명 인용하여 확인한다[cite: 1]."
      },
      {
        "g": "πόδας",
        "pos": "명사",
        "lemma": "πούς, ποδός, ὁ",
        "parse": "pl.acc.m.",
        "principalParts": "–",
        "gloss_kr": "발을 (속격적 한정)",
        "gloss_en": "feet",
        "syntax": "LFG f-구조에서 πόδας는 형용사 ὠκὺς의 수식을 받는 한정적 대격(accusative of respect/secondary object)으로 분석되며, [OBL/ADJUNCT [PRED 'πούς', CASE acc, NUM pl]]로 표시된다. 생성문법적으로는 부사적 대격(adverbial accusative)으로서 형용사의 의미 영역을 특정한 신체 부위로 제한하는 부가어(adjunct) 역할을 수행한다. 격 지배 이론에 따라 형용사의 의미적 속성을 보완하는 내부 구조를 갖는다.",
        "background": "아킬레우스의 가장 대표적인 수식어인 '발 빠른'의 구성 요소로, 그의 물리적 속성을 상징적으로 나타낸다. 전쟁터에서 누구보다 빠르게 움직여 적을 사로잡았던 아킬레우스의 영웅적 기동성을 시각적으로 형상화한다.",
        "etymology": "PIE 재구형 *pṓds (e급 어간, 후두음 미포함) 및 영급 *pds-에 기원하며, 명확한 애블라우트 교체를 보여준다[cite: 1]. 라틴어 pēs, 영어 foot, 산스크리트어 pád-이 모두 정확한 동계어다[cite: 1]. 음운사적으로 모음 교체(ablaut)에 따른 어간 변화가 그리스어 3변화 명사에 고스란히 보존되었다[cite: 1]. Beekes(EDG)는 이 단어가 PIE 신체 부위 어휘의 원형을 가장 잘 유지하고 있는 어휘 중 하나임을 실명 인용하여 강조한다[cite: 1]."
      },
      {
        "g": "ὠκὺς",
        "pos": "형용사",
        "lemma": "ὠκύς, ὠκεῖα, ὠκύ",
        "parse": "sg.nom.m.",
        "principalParts": "–",
        "gloss_kr": "발 빠른, 날쌘",
        "gloss_en": "swift, fast",
        "syntax": "LFG 관점에서 ὠκὺς는 주어 명사구 내에서 주격 주어를 수식하는 형용사로, [PRED 'ὠκύς', SUBJ _, GEND m, CASE nom]으로 분석된다. 생성문법적 구조에서는 AP로서 주어 DP와 일치 관계를 맺으며, 복합 명사구 내부에서 고정된 수식어 위치를 점한다. 명사와 결합하여 '발 빠른 아킬레우스'라는 고유의 서사시적 구문(formula)을 완성한다.",
        "background": "아킬레우스를 수식하는 고정된 호메로스식 상투어구(epithet)의 일부다. 그의 신체적 탁월함과 전투에서의 압도적인 기동력을 상징하며, 운율적 구조와 영웅의 정체성을 동시에 충족시키는 핵심 어휘다.",
        "etymology": "PIE 재구형 *h₂ὠḱu-('빠른', 후두음 *h₂와 e급 어간 포함)에 기원한다[cite: 1]. 산스크리트어 āśú('빠른')와 라틴어 ōcior('더 빠른')가 직접적인 동계어다[cite: 1]. 음운사적으로 후두음 *h₂의 영향으로 장모음화 및 음절 구조의 변형을 겪었다[cite: 1]. Chantraine(DELG)은 이 단어가 인도유럽어의 오래된 형용사 파생 형태를 보존하고 있음을 실명 인용하여 설명한다[cite: 1]."
      },
      {
        "g": "Ἀχιλλεύς,",
        "pos": "명사",
        "lemma": "Ἀχιλλεύς, Ἀχιλῆος, ὁ",
        "parse": "sg.nom.m.",
        "principalParts": "–",
        "gloss_kr": "아킬레우스가",
        "gloss_en": "Achilles",
        "syntax": "LFG f-구조에서 Ἀχιλλεύς는 문장의 주어(SUBJ)로서 [PRED 'Ἀχιλλεύς', CASE nom, PERS 3, NUM sg]의 속성-값 행렬을 형성한다. 생성문법적으로는 [TP DP[nom] [T' T [vP ...]]] 구조에서 주어 자리를 점하며, 동사와 수·인치 일치를 이룬다. 서사의 중심 주체로서 행위자(agent) θ-역할을 지배한다.",
        "background": "일리아스의 주인공이자 트로이아 전쟁에서 가장 강력한 그리스 영웅이다. 프리아모스의 아들들을 죽이고 포로로 잡았던 장본인으로서, 이 시점에서는 비극적 분노의 화신이자 아버지를 울린 원수로 그려진다.",
        "etymology": "선그리스어(Pre-Greek) 기층 어휘 또는 미코나이 문헌에 등장하는 고유명사 계열로, 명확한 PIE 어근 재구가 불확실하다[cite: 1]. Beekes(EDG)는 이 이름이 그리스 유입 이전의 지명이나 인명 기층에서 유래했을 가능성을 실명 인용하여 제기한다[cite: 1]. 음운사적으로 그리스어 고유의 접사 *-εύς가 결합하는 형태론적 적응 과정을 거쳤다[cite: 1]. 현대 그리스어 및 서구 언어 전반에 영웅의 대명사로 그 흔적이 온전히 남아 있다[cite: 1]."
      }
    ]
  },
  {
    "ref": "Iliad 23.752",
    "trans": "사로잡는 대로 마르지 않는 바다 건너 사모스 섬으로, 임브로스로, 그리고 안개 낀 렘노스로 팔아넘겼소.",
    "words": [
      {
        "g": "πέρνασχ᾽",
        "pos": "동사",
        "lemma": "περνάω / πέρνημι",
        "parse": "3rd.sg.impf.ind.act. (iterative ending -σκ- added)",
        "principalParts": "περνάω – περῶ – ἐπέρνασα – πεπέρνακα – πεπέδημαι – ἐπερνάσθην",
        "gloss_kr": "팔아넘기곤 했다",
        "gloss_en": "kept selling, used to sell",
        "syntax": "LFG f-구조에서 πέρνασχ'는 주절의 서술어(PRED)로서 [PRED 'περνάω<SUBJ,OBJ,OBL>', SUBJ Ἀχιλλεύς, OBJ παῖδας]의 논항 구조를 지배한다. 생성문법적으로는 반복상을 나타내는 형태소(-σκ-)가 포함된 시제 핵(T)과의 이동을 거치며, [vP 주어 [VP V 목적어 부사구]]의 통사적 위계를 형성한다. 격 이론에 따라 대격 목적어와 처소를 나타내는 전치사구를 지배한다.",
        "background": "전쟁 포로를 노예로 팔아넘기는 고대 그리스의 잔인한 관행을 보여준다. 아킬레우스가 단순히 적을 죽이는 것에 그치지 않고 포로로 잡아 해외의 섬들에 노예로 팔아넘겼다는 사실은 그의 무자비함과 당시 전쟁의 경제학을 동시에 드러낸다.",
        "etymology": "PIE 재구형 *per-('건네주다, 교환하다, 팔다')에 기원하며, 영급 어간과 상 접사가 복합된 형태다[cite: 1]. 산스크리트어 priṇāti('만족시키다, 거래하다') 및 라틴어 per-('통하여')와 어원적 연관성이 논의된다[cite: 1]. 음운사적으로 호메로스 시가 고유의 반복상 접사 -σκ-가 추가되는 형태론적 확장(iterative formation)을 겪었다[cite: 1]. Chantraine(DELG)은 이 단어가 고대 상거래 및 전쟁 포로 처우와 관련된 오래된 인도유럽어 어휘임을 실명 인용하여 설명한다[cite: 1]."
      },
      {
        "g": "ὅν",
        "pos": "대명사",
        "lemma": "ὅς, ἥ, ὅ",
        "parse": "sg.acc.m.",
        "principalParts": "–",
        "gloss_kr": "누구든지, ~하는 자를",
        "gloss_en": "whom, whoever",
        "syntax": "LFG f-구조에서 ὅν은 관계대명사로서 관계절 내에서 목적어(OBJ) 기능을 수행하며, 선행사(παῖδας 또는 임의의 대상)를 지시하는 속성-값 행렬을 갖는다. 생성문법적으로는 관계절의 Spec-CP 자리로 이동(A'-movement)한 후행 성분이며, [CP ὅνᵢ [C' ... [VP ἕλεσκε tᵢ]]]의 구조를 이룬다. 격 배정에 따라 관계절 내부에서 대격을 할당받는다.",
        "background": "포로들 가운데 붙잡히는 이들을 특정하는 관계대명사로, 전쟁터에서 무작위로 붙잡혀 노예로 팔려간 비극적 개인들의 처지를 강조한다. 예외 없는 포획과 매매의 잔혹성을 문법적으로 뒷받침한다.",
        "etymology": "PIE 지시/관계대명사 어근 *so-/*to- 및 *yo- 계통에 기원하며, 후두음적 요인은 관여하지 않는다[cite: 1]. 산스크리트어 yás('~하는 자')와 밀접한 동계어 관계를 형성한다[cite: 1]. 음운사적으로 그리스어에서 유기음 및 기식음 변화를 겪으며 관계대명사 체계로 정착했다[cite: 1]. Beekes(EDG)는 이 대명사 체계가 인도유럽어의 공통 대명사 패러다임에서 직계로 유래했음을 실명 인용하여 확인한다[cite: 1]."
      },
      {
        "g": "τιν᾽",
        "pos": "대명사",
        "lemma": "τίς, τί",
        "parse": "sg.acc.m.",
        "principalParts": "–",
        "gloss_kr": "어떤 이들을, 누군가를",
        "gloss_en": "anyone, someone",
        "syntax": "LFG f-구조에서 τιν'는 부정대명사로서 ὅν과 함께 복합 관계 대명사적 의미를 강화하며, [OBJ] 내부의 한정 성분으로 분석된다. 생성문법적으로는 비특정성을 나타내는 양화사(quantifier)로 기능하며, 명사구 내부의 투사체로서 이동이나 결속 이론의 적용을 받는다. 문맥상 일반화된 포로들을 가리킨다.",
        "background": "특정한 한 명의 왕자가 아니라 잡히는 '누구든' 예외 없이 팔려갔음을 나타내어 전쟁의 무차별성과 파괴력을 강조한다. 프리아모스의 아들들뿐만 아니라 수많은 트로이아인들이 겪어야 했던 비극의 보편성을 보여준다.",
        "etymology": "PIE 의문/부정대명사 재구형 *kʷi-/*kʷo-('누구, 무엇')에 기원하며, 후두음적 요인은 없다[cite: 1]. 라틴어 quis('누구') 및 산스크리트어 kíḥ('누구')와 완벽한 동계어다[cite: 1]. 음운사적으로 구개음화 및 무성음화 과정을 거쳐 그리스어의 부정대명사 체계로 분기하였다[cite: 1]. Chantraine(DELG)은 이 형태가 인도유럽어의 대명사 어근 중 가장 보존이 잘 된 형태 중 하나임을 실명 인용하여 증명한다[cite: 1]."
      },
      {
        "g": "ἕλεσκε",
        "pos": "동사",
        "lemma": "αἱρέω",
        "parse": "3rd.sg.impf.ind.act. (iterative ending -σκ- added)",
        "principalParts": "αἱρέω – αἱρήσω – εἷλον – ᾕρηκα – ᾕρημαι – ᾑρέθην",
        "gloss_kr": "사로잡곤 했다",
        "gloss_en": "kept capturing, used to capture",
        "syntax": "LFG f-구조에서 ἕλεσκε는 주절의 서술어로서 [PRED 'αἱρέω<SUBJ,OBJ>', SUBJ Ἀχιλλεύς, OBJ ὅν τινα]의 논항 구조를 지배한다. 생성문법적으로 반복상 접사 -σκ-가 부착된 미완료 과거 시제 동사로, [TP T [vP 주어 [VP V 목적어]]]의 통사적 구조를 형성한다. 전투 중 반복적으로 일어났던 행동의 양상을 반영한다.",
        "background": "아킬레우스가 전쟁터에서 적을 사로잡던 반복적인 행위를 묘사한다. 한 번의 사건이 아니라 지속적이고 체계적으로 이루어진 포로 사냥을 암시하며 그의 무서운 무예와 냉혹함을 드러낸다.",
        "etymology": "PIE 재구형 *sel-('잡다, 취하다')에 기원하며, 2부정사 어간과 결합된 형태다[cite: 1]. 라틴어 sollere 및 관련 어근들과의 연관성이 논의되나 음운론적 난점이 존재한다[cite: 1]. 음운사적으로 호메로스 특유의 반복 과거형 접사 -σκ-가 결합하여 습관적 과거를 나타내는 형태론적 파생을 겪었다[cite: 1]. Frisk(GEW)는 이 동사의 어원이 복잡한 이형태 통합 과정을 거쳤음을 실명 인용하여 설명한다[cite: 1]."
      },
      {
        "g": "πέρην",
        "pos": "부사",
        "lemma": "πέρην",
        "parse": "adv.",
        "principalParts": "–",
        "gloss_kr": "건너편에, 저쪽에",
        "gloss_en": "across, beyond",
        "syntax": "LFG f-구조에서 πέρην은 처소를 나타내는 부사(ADJUNCT)로서 [ADJUNCT [PRED 'πέρην', MOD ἁλός]]의 속성-값 행렬을 구성한다. 생성문법적으로는 PP 혹은 부사구(AdvP)의 핵으로서 후행하는 속격 명사구를 지배하는 전치사적 부사(prepositional adverb)로 분석된다. 공간적 거리감을 통사적으로 실현한다.",
        "background": "그리스 본토나 트로이아 전역에서 멀리 떨어진 바다 건너의 이국땅을 가리킨다. 포로들이 다시는 고향으로 돌아올 수 없는 머나먼 곳으로 팔려갔음을 시사하여 비극성을 배가한다.",
        "etymology": "PIE 재구형 *per-('건너다, 통과하다')에 기원하며, 명사적 처소 격어미가 굳어진 부사 형태다[cite: 1]. 산스크리트어 páram('저너머에') 및 라틴어 per('통하여')와 명백한 동계어 관계를 이룬다[cite: 1]. 음운사적으로 공간적 이동을 뜻하는 어근에 접사가 붙어 부사 품사로 고착되는 문법화 과정을 겪었다[cite: 1]. Beekes(EDG)는 이 단어가 인도유럽어의 공간 지시 부사 체계에 속함을 실명 인용하여 확인한다[cite: 1]."
      },
      {
        "g": "ἁλὸς",
        "pos": "명사",
        "lemma": "ἅλς, ἁλός, ὁ/ἡ",
        "parse": "sg.gen.f.",
        "principalParts": "–",
        "gloss_kr": "바다의",
        "gloss_en": "of the sea",
        "syntax": "LFG f-구조에서 ἁλὸς는 부사 πέρην의 보어(OBL/COMP)로서 [OBL [PRED 'ἅλς', CASE gen, NUM sg]]의 속성-값 행렬을 갖는다. 생성문법적으로는 부사구 내부의 보어 위치에서 속격 지배(genitive Case assignment)를 받으며, [PP πέρην [DP ἁλός]]의 통사적 구성을 이룬다.",
        "background": "에게해의 넓고 거친 바다를 가리키며, 지중해 세계의 지리적 배경을 생생하게 전달한다. 바다라는 물리적 장벽이 포로들과 그들의 고향 사이에 가로놓여 있음을 상징한다.",
        "etymology": "PIE 재구형 *sóls('소금, 바다')에 기원하며, 후두음적 요인 없이 명확한 모음 형태를 유지한다[cite: 1]. 라틴어 sāl('소금') 및 영어 salt와 완벽한 동계어다[cite: 1]. 음운사적으로 고대 그리스어에서 어두 기식음화와 3변화 격변화 패러다임의 통합을 겪었다[cite: 1]. Chantraine(DELG)은 이 단어가 바다와 소금을 동시에 뜻하는 원시 인도유럽어의 물질 명사 전통을 충실히 잇고 있음을 실명 인용하여 증명한다[cite: 1]."
      },
      {
        "g": "ἀτρυγέτοιο,",
        "pos": "형용사",
        "lemma": "ἀτρυγέτος, ἀτρυγέτον",
        "parse": "sg.gen.f.",
        "principalParts": "–",
        "gloss_kr": "수확할 수 없는, 끝없는",
        "gloss_en": "harvestless, barren",
        "syntax": "LFG f-구조에서 ἀτρυγέτοιο는 명사 ἁλὸς를 수식하는 형용사 보어로서 [ADJUNCT [PRED 'ἀτρυγέτος', CASE gen, NUM sg, GEND f]]의 속성-값 행렬을 구성한다. 생성문법적으로는 DP 내부에서 명사와 성·수·격 일치를 이루며, 호메로스식 장모음 속격형(-οιο)의 통사적 실현을 보여준다. 바다의 광막함을 수식하는 전통적 수식어구다.",
        "background": "호메로스 시가에서 바다를 수식하는 대표적인 고정 형용사로, 인간이 경작하거나 수확할 수 없는 거칠고 끝없는 바다의 속성을 나타낸다. 바다의 광활함과 위험성을 시적으로 각인시킨다.",
        "etymology": "부정 접두사 ἀ-와 '수확하다'를 뜻하는 어근 *trug-의 결합으로 재구되며, 선그리스어 기층 영향설도 함께 제기된다[cite: 1]. Beekes(EDG)는 이 단어의 정확한 인도유럽어 내부 기원이 불투명하며 기층 어휘의 특징을 띤다고 실명 인용하여 설명한다[cite: 1]. 음운사적으로 호메로스 방언 특유의 장모음 속격 어미(-οιο)가 결합하는 형태적 특징을 보인다[cite: 1]. 현대 그리스어에는 전승되지 않고 호메로스 고어의 영역에 머물러 있다[cite: 1]."
      }
    ]
  },
  {
    "ref": "Iliad 23.753",
    "trans": "사모스로, 임브로스로, 그리고 안개 낀 렘노스로 말이오.",
    "words": [
      {
        "g": "ἐς",
        "pos": "전치사",
        "lemma": "εἰς / ἐς",
        "parse": "prep. taking acc.",
        "principalParts": "–",
        "gloss_kr": "~로, ~안으로",
        "gloss_en": "into, to",
        "syntax": "LFG f-구조에서 ἐς는 전치사로서 후행하는 지명들을 목적어로 취하며 [OBL [PRED 'εἰς', CASE acc]]의 논항 구조를 형성한다. 생성문법적으로는 PP의 핵(Head)으로 기능하며, [PP ἐς [DP Σάμον]] 구조를 통해 방향성과 처소 이동을 통사적으로 표시한다. 대격 지배를 엄격히 요구하는 전치사다.",
        "background": "포로들이 팔려간 구체적인 섬들의 위치를 지리적으로 한정한다. 에게해 북동부에 위치한 이 섬들은 그리스 본토와 트로이아 사이의 해상 요충지로, 서사의 지리적 사실감을 높인다.",
        "etymology": "PIE 재구형 *ens('~안으로')에 기원하며, *en('~에')의 강조 및 확장형태다[cite: 1]. 라틴어 in 및 영어 in과 명백한 동계어 관계를 이룬다[cite: 1]. 음운사적으로 자음군 앞에서 s가 탈락하거나 형태가 분기하는 음운 규칙을 거쳐 그리스어 전치사 체계로 정착했다[cite: 1]. Chantraine(DELG)은 이 전치사가 인도유럽어의 처소 격 전치사에서 출발해 방향성 전치사로 기능이 확장되었음을 실명 인용하여 설명한다[cite: 1]."
      },
      {
        "g": "Σάμον",
        "pos": "명사",
        "lemma": "Σάμος, Σάμου, ἡ",
        "parse": "sg.acc.f.",
        "principalParts": "–",
        "gloss_kr": "사모스를",
        "gloss_en": "Samos",
        "syntax": "LFG f-구조에서 Σάμον은 전치사 ἐς의 목적어(OBL)로서 [OBL [PRED 'Σάμος', CASE acc, NUM sg]]의 속성-값 행렬을 갖는다. 생성문법적으로는 고유명사로서 구문 내부에서 독립된 DP를 구성하며 대격 지배를 받는다. 지리적 목적지를 명시하는 통사적 단위다.",
        "background": "에게해의 주요 섬 중 하나인 사모스를 가리킨다. 트로이아 전쟁 포로들이 본토와는 단절된 이국적인 섬들로 팔려가 노예로 삼아졌음을 보여주는 구체적인 지명이다.",
        "etymology": "선그리스어(Pre-Greek) 지명 기층에 기원하며, '높은 곳, 산등성이'를 뜻하는 지명 접미사구조를 지닌다[cite: 1]. Beekes(EDG)는 이 지명이 인도유럽어 유입 이전 에게해 지역의 토착 지명 기층에서 유래했음을 실명 인용하여 입증한다[cite: 1]. 음운사적으로 그리스어 명사 2변화 여성형 패러다임에 동화되는 형태론적 적응을 겪었다[cite: 1]. 현대 그리스어 지명 '사모스'로 그대로 그 명맥이 이어지고 있다[cite: 1]."
      },
      {
        "g": "ἐς",
        "pos": "전치사",
        "lemma": "εἰς / ἐς",
        "parse": "prep. taking acc.",
        "principalParts": "–",
        "gloss_kr": "~로",
        "gloss_en": "to, into",
        "syntax": "LFG f-구조에서 두 번째 ἐς 역시 전치사로서 병렬된 지명 Ἴμβρον을 지배하며 [OBL [PRED 'εἰς', CASE acc]]의 구조를 반복한다. 생성문법적으로는 연쇄적인 PP 구조를 이루며, 동일한 통사적 격 지배 규칙에 따라 대격 명사구를 이끈다.",
        "background": "나열법을 통해 포로들이 팔려간 여러 섬들의 목록을 리듬감 있게 확장한다. 청중에게 비극의 규모가 단일 지역에 국한되지 않고 에게해 전역으로 퍼졌음을 각인시킨다.",
        "etymology": "앞서 등장한 ἐς와 동일한 PIE 재구형 *ens에 기원하며, 동일한 음운적 발달 경로를 거쳤다[cite: 1]. Chantraine(DELG)의 설명에 따르며, 그리스 시가에서 구문의 리듬과 대칭성을 유지하기 위해 반복 사용되는 대표적인 문법 형태소다[cite: 1]."
      },
      {
        "g": "Ἴμβρον",
        "pos": "명사",
        "lemma": "Ἴμβρος, Ἴμβρου, ἡ",
        "parse": "sg.acc.f.",
        "principalParts": "–",
        "gloss_kr": "임브로스를",
        "gloss_en": "Imbros",
        "syntax": "LFG f-구조에서 Ἴμβρον은 전치사의 목적어로서 [OBL [PRED 'Ἴμβρος', CASE acc, NUM sg]]의 속성-값 행렬을 형성한다. 생성문법적으로 고유명사 DP로서 목적격 자리를 점하며 전치사의 통사적 지배를 받는다.",
        "background": "다르다넬스 해협 근처에 위치한 섬으로, 고대 그리스 세계에서 트로이아와 지리적으로 인접한 거점 중 하나다. 포로들이 유배되거나 팔려가는 현실적인 지리 공간을 제공한다.",
        "etymology": "선그리스어(Pre-Greek) 지명 기층에 속하며, 토착 지명 특유의 음운 구조를 지닌다[cite: 1]. Beekes(EDG)는 이 지명 역시 에게해 연안의 고대 지명 기층에서 유래하여 그리스인들에게 수용된 것으로 실명 인용하여 분석한다[cite: 1]. 음운사적으로 그리스어 명사 체계에 편입되는 변화를 겪었다[cite: 1]."
      },
      {
        "g": "καὶ",
        "pos": "접속사",
        "lemma": "καί",
        "parse": "coord.conj.",
        "principalParts": "–",
        "gloss_kr": "그리고",
        "gloss_en": "and",
        "syntax": "LFG f-구조에서 καὶ는 등위접속사로서 앞서 나열된 섬들과 마지막 섬을 연결하며 [COORD] 기능을 수행한다. 생성문법적으로는 ConjP의 핵으로 작용하여 명사구들을 동등한 자격으로 병합(merge)하는 역할을 맡는다. 통사적 평행 구조를 완성하는 필수 요소다.",
        "background": "섬들의 나열을 마무리 짓는 접속사로, 열거의 종결을 알리며 청중의 호흡을 정돈한다. 비극적 장소들의 목록을 하나로 묶어 거대한 유배의 지도를 완성한다.",
        "etymology": "PIE 내부에 단일 명확한 재구형이 확정되지 않았으며, 그리스어 독자적 어원 발달 또는 강조사적 기원을 갖는다[cite: 1]. Chantraine(DELG)은 이 단어의 기원이 고대 구어체의 첨가적 강조사에서 등위접속사로 문법화된 것으로 실명 인용하여 설명한다[cite: 1]. 음운사적으로 단음절 소사로서 다양한 환경에서 음운 탈락이나 결합을 겪었다[cite: 1]."
      },
      {
        "g": "Λῆμνον",
        "pos": "명사",
        "lemma": "Λῆμνος, Λήμνου, ἡ",
        "parse": "sg.acc.f.",
        "principalParts": "–",
        "gloss_kr": "렘노스를",
        "gloss_en": "Lemnos",
        "syntax": "LFG f-구조에서 Λῆμνον은 전치사의 목적어로서 [OBL [PRED 'Λῆμνος', CASE acc, NUM sg]]의 속성-값 행렬을 구성한다. 생성문법적으로 고유명사 DP로서 대격 지배를 받으며 전치사구의 보어 자리를 채운다.",
        "background": "헤파이스토스의 신화가 깃든 거칠고 화산성인 섬이자 고대 그리스 세계에서 독특한 위치를 차지하는 섬이다. 트로이아 전쟁과 관련하여 종종 포로 수용이나 보급 기지로 언급되는 장소다.",
        "etymology": "선그리스어(Pre-Greek) 기층 지명으로, 트라키아 또는 아나톨리아 계열의 어원적 잔재를 지닌다[cite: 1]. Beekes(EDG)는 이 지명이 그리스어 어원으로는 설명되지 않는 전(前)그리스 시대의 토착 명칭임을 실명 인용하여 확증한다[cite: 1]. 음운사적으로 그리스어 음운 규칙에 적응하여 2변화 여성형 명사로 고착되었다[cite: 1]."
      },
      {
        "g": "ἀμιχθαλόεσσαν:",
        "pos": "형용사",
        "lemma": "ἀμιχθαλόεις, ἀμιχθαλόεσσα, ἀμιχθαλόεν",
        "parse": "sg.acc.f.",
        "principalParts": "–",
        "gloss_kr": "안개 낀, 험준한",
        "gloss_en": "misty, inhospitable",
        "syntax": "LFG f-구조에서 ἀμιχθαλόεσσαν는 명사 Λῆμνον을 수식하는 형용사로 [ADJUNCT [PRED 'ἀμιχθαλόεις', CASE acc, NUM sg, GEND f]]의 속성-값 행렬을 갖는다. 생성문법적으로 DP 내부에서 명사와 성·수·격 일치를 이루며, 복합 형용사구의 후치 수식어 통사 지위를 갖는다.",
        "background": "렘노스 섬의 황량하고 안개에 싸인 험준한 지형적 특성을 묘사한다. 포로들이 팔려간 곳이 단순히 먼 곳일뿐만 아니라 인간에게 냉혹하고 쓸쓸한 고립의 공간임을 시각적으로 강조한다.",
        "etymology": "안개와 어둠을 뜻하는 선그리스어 또는 인도유럽어 기층 어근에 형용사 접사 -όεις가 결합한 형태다[cite: 1]. Frisk(GEW)는 이 단어의 전반부 어근이 불투명하며 기층 언어에서 유래한 시적 형용사임을 실명 인용하여 논의한다[cite: 1]. 음운사적으로 호메로스 방언 특유의 파생 접사 결합과 음절 장단 조절을 겪었다[cite: 1]."
      }
    ]
  },
  {
    "ref": "Iliad 23.754",
    "trans": "그러나 당신의 아들(헥토르)은 날카로운 청동 무기로 생명을 거두어 가신 뒤에,",
    "words": [
      {
        "g": "σεῦ",
        "pos": "대명사",
        "lemma": "σύ",
        "parse": "sg.gen.",
        "principalParts": "–",
        "gloss_kr": "당신의, 그대의",
        "gloss_en": "your",
        "syntax": "LFG f-구조에서 σεῦ는 소유격을 나타내는 대명사로서 명사 ψυχὴν을 수식하며 [SPEC [PRED 'σύ', PERS 2, NUM sg, CASE gen]]의 속성-값 행렬을 구성한다. 생성문법적으로는 DP 내부의 지정어 자리를 점하며, 소유격 지배(genitive Case assignment)를 통해 화자와 청중 간의 혈연적 소유 관계를 통사적으로 확립한다.",
        "background": "프리아모스가 아킬레우스에게 직접 '당신'이라고 지칭하며, 아킬레우스가 빼앗아 간 대상이 바로 이 국왕의 친자식(헥토르)임을 정조준한다. 개인적 존엄과 비극적 상실의 초점을 청중 앞에 선명하게 드러낸다.",
        "etymology": "PIE 2인칭 대명사 재구형 *tu-의 속격 형태 *tew에 기원한다[cite: 1]. 라틴어 tuī 및 산스크리트어 táva('너의')와 완벽한 동계어다[cite: 1]. 음운사적으로 호메로스 방언에 보존된 축약형 속격 대명사 형태로서, 고대 그리스어 방언 발달 과정에서 음운 변동을 겪었다[cite: 1]. Chantraine(DELG)은 이 대명사 패러다임이 인도유럽어 공통의 인칭대명사 체계를 충실히 반영함을 실명 인용하여 증명한다[cite: 1]."
      },
      {
        "g": "δ᾽",
        "pos": "소사",
        "lemma": "δέ",
        "parse": "coord.conj.",
        "principalParts": "–",
        "gloss_kr": "그러나, 그리고",
        "gloss_en": "and, but",
        "syntax": "LFG f-구조에서 δ'는 등위접속사로서 앞서의 '다른 아들들'에 대한 처우와 '당신의 아들(헥토르)'에 대한 가혹한 처우를 극적으로 전환하는 대조(adversative coordination) 기능을 수행한다. 생성문법적으로는 CP의 외곽에 위치하여 문장 간의 전환을 이끄는 통사적 표지다.",
        "background": "앞선 구절의 일반적인 포로 매매 이야기에서 프리아모스 자신의 아들인 헥토르의 참혹한 죽음으로 시선을 급격히 전환하는 전환점이다. 이야기의 무게중심을 전체 전쟁사에서 개인적 비극으로 옮겨놓는다.",
        "etymology": "PIE 지시적 기원을 가진 소사 계통에 속하며 명확한 후두음은 없다[cite: 1]. Chantraine(DELG)은 이 단어가 문장 간 대조를 나타내는 고유의 불변화사로 조기에 문법화되었음을 실명 인용하여 설명한다[cite: 1]. 음운사적으로 후행 모음 앞에서 엘리전(elision)을 겪는 음운 규칙을 충실히 따른다[cite: 1]."
      },
      {
        "g": "ἐπεὶ",
        "pos": "접속사",
        "lemma": "ἐπεί",
        "parse": "subord.conj.",
        "principalParts": "–",
        "gloss_kr": "~후에, ~하므로",
        "gloss_en": "when, since, after",
        "syntax": "LFG f-구조에서 ἐπεὶ는 종속 접속사로서 시간적 선후 관계를 나타내는 부사절(ADJUNCT)을 이끌며 [ADJUNCT [PRED 'ἐπεί', COMP clause]]의 구조를 갖는다. 생성문법적으로는 시간절을 지배하는 종속절 핵(C)으로 작용하여 주절과의 통사적 위계 및 시제 일치를 조율한다.",
        "background": "헥토르의 목숨이 끊어진 시점을 명시하며, 죽음 이후에 가해진 모독 행위가 어떤 맥락에서 벌어졌는지를 시간적으로 규정한다. 비극의 원인이 되는 결정적 사건의 선행을 알린다.",
        "etymology": "전치사 ἐπί와 접속사 ὅτε 계통의 요소가 결합한 복합 형태에 기원한다[cite: 1]. Chantraine(DELG)은 이 복합 접속사가 시간과 원인을 동시에 나타내는 부사절 접속사로 정착하는 과정을 실명 인용하여 설명한다[cite: 1]. 음운사적으로 두 형태소의 융합 과정에서 모음 축약과 악센트 이동을 겪었다[cite: 1]."
      },
      {
        "g": "ἐξέλετο",
        "pos": "동사",
        "lemma": "ἐξαιρέω",
        "parse": "3rd.sg.aor.ind.mid.",
        "principalParts": "ἐξαιρέω – ἐξαιρήσω – ἐξεῖλον – ἐῄρηκα – ἐῄρημαι – ἐῄρέθην",
        "gloss_kr": "빼앗았다, 거두어 갔다",
        "gloss_en": "took away, reft",
        "syntax": "LFG f-구조에서 ἐξέλετο는 중간태 서술어로서 [PRED 'ἐξαιρέω<SUBJ,OBJ,OBL>', SUBJ Ἀχιλλεύς, OBJ ψυχὴν]의 논항 구조를 지배한다. 생성문법적으로는 중간태(middle voice) 형태소의 통사적 실현으로 주어의 이해관계가 깊게 개입된 행위를 나타내며, [TP T [vP 주어 [VP V 목적어]]]의 격 지배 구조를 갖는다.",
        "background": "목숨을 단순한 살인의 결과로 표현하는 것이 아니라 '영혼을 몸에서 빼앗아 갔다'는 표현으로 신체와 영혼의 분리를 강조한다. 아킬레우스가 헥토르의 생명을 강탈한 주체임을 엄숙하게 고발한다.",
        "etymology": "전치사 ἐκ과 어근 *sel-('취하다')의 합성어로 재구된다[cite: 1]. 라틴어 ex-와 어원적 연결고리를 지닌다[cite: 1]. 음운사적으로 아오리스(aorist) 어간 형성과 중세 그리스어 중간태 어미 결합에 따른 음운 변동을 거쳤다[cite: 1]. Frisk(GEW)는 이 복합동사의 의미가 물리적 탈취에서 생명의 박탈로 확장된 전이를 실명 인용하여 설명한다[cite: 1]."
      },
      {
        "g": "ψυχὴν",
        "pos": "명사",
        "lemma": "ψυχή, ψυχῆς, ἡ",
        "parse": "sg.acc.f.",
        "principalParts": "–",
        "gloss_kr": "목숨을, 영혼을",
        "gloss_en": "life, soul",
        "syntax": "LFG f-구조에서 ψυχὴν은 동사 ἐξέλετο의 목적어(OBJ)로서 [PRED 'ψυχή', CASE acc, NUM sg]의 속성-값 행렬을 구성한다. 생성문법적으로는 대격 지배를 받는 목적어 DP이며, 생명의 박탈이라는 환유적 서술의 핵심 논항 자리를 점한다.",
        "background": "여기서 ψυχή는 추상적인 영혼이라기보다는 육체와 결합하여 숨 쉬던 '목숨'과 '생명력' 그 자체를 의미한다. 영웅이 지니던 생명의 소중함이 폭력 앞에 얼마나 쉽게 꺼져버렸는지를 보여준다.",
        "etymology": "PIE 재구형 *bhes-('숨쉬다, 불다')에서 파생된 명사 어근에 기원한다[cite: 1]. 산스크리트어 bhas-('숨쉬다')와 동계어 관계를 형성한다[cite: 1]. 음운사적으로 호흡을 뜻하는 원시 의미에서 생명과 영혼을 뜻하는 추상적 의미로의 의미 전이를 겪었다[cite: 1]. Beekes(EDG)는 이 단어가 인간의 생명력을 나타내는 인도유럽어의 대표적 신체/정신 어휘임을 실명 인용하여 확인한다[cite: 1]."
      },
      {
        "g": "ταναήκεϊ",
        "pos": "형용사",
        "lemma": "ταναηκής, ταναηκέες",
        "parse": "sg.dat.m.",
        "principalParts": "–",
        "gloss_kr": "날카로운, 길쭉한 날의",
        "gloss_en": "long-edged, sharp",
        "syntax": "LFG f-구조에서 ταναήκεϊ는 도구를 나타내는 여격 형용사 보어로서 [ADJUNCT [PRED 'ταναηκής', CASE dat, NUM sg, GEND m]]의 속성-값 행렬을 갖는다. 생성문법적으로는 여격 지배(dative Case assignment)를 받는 수식어구로서, 수단(instrument)의 θ-역할을 통사적으로 실현한다.",
        "background": "청동 무기의 날카로움을 수식하는 호메로스식 시적 수식어로, 살육에 사용된 무기의 실체적 잔인함을 부각시킨다. 번뜩이는 청동 검이나 창의 이미지를 시청각적으로 전달한다.",
        "etymology": "길쭉함을 뜻하는 *tano-('긴')와 날을 뜻하는 *h₂ék-('날카로운')의 합성어로 재구된다[cite: 1]. 라틴어 tenuis('가는') 및 그리스어 τένος와 어원적 친족성을 지닌다[cite: 1]. 음운사적으로 두 어근의 합성 과정에서 모음 탈락과 호메로스 방언 특유의 여격 단수 어미 변화를 거쳤다[cite: 1]. Chantraine(DELG)은 이 복합어가 무기의 물리적 특성을 묘사하기 위해 시인들이 발명한 전형적인 서사시적 형용사임을 실명 인용하여 설명한다[cite: 1]."
      },
      {
        "g": "χαλκῷ,",
        "pos": "명사",
        "lemma": "χαλκός, χαλκοῦ, ὁ",
        "parse": "sg.dat.m.",
        "principalParts": "–",
        "gloss_kr": "청동 무기로, 청동으로",
        "gloss_en": "with bronze, bronze weapon",
        "syntax": "LFG f-구조에서 χαλκῷ는 도구 여격(dative of instrument)으로서 [OBL [PRED 'χαλκός', CASE dat, NUM sg]]의 속성-값 행렬을 구성한다. 생성문법적으로는 PP나 전치사 없이 여격 격어미만으로 수단 논항을 실현하며, [vP V 도구여격]의 통사적 관계를 맺는다.",
        "background": "청동기 시대의 무기를 상징하며, 영웅들의 전투에서 사용된 실제 물질적 매개체를 드러낸다. 무기의 차가운 물성이 생명을 빼앗는 도구로 기능함을 극적으로 보여준다.",
        "etymology": "선그리스어(Pre-Greek) 광물 기층 어휘에 기원하며, 인도유럽어 자체 어원보다는 지중해 금속 명칭 기층에서 유입되었다[cite: 1]. Beekes(EDG)는 이 단어가 청동기 교역과 관련된 토착 광물 명칭임을 실명 인용하여 확증한다[cite: 1]. 음운사적으로 그리스어 명사 2변화 남성형 패러다임에 편입되면서 여격 단수 어미를 획득하는 형태론적 변화를 겪었다[cite: 1]."
      }
    ]
  },
  {
    "ref": "Iliad 23.755",
    "trans": "내 친구(헥토르)의 무덤 주위를 (아킬레우스는) 사정없이 끌고 다녔었지오.",
    "words": [
      {
        "g": "πολλὰ",
        "pos": "부사",
        "lemma": "πολύς, πολλή, πολύ",
        "parse": "pl.acc.n. (used adverbially)",
        "principalParts": "–",
        "gloss_kr": "자주, 몹시, 거듭",
        "gloss_en": "many times, often",
        "syntax": "LFG f-구조에서 πολλὰ는 부사적 대격(adverbial accusative)으로서 [ADJUNCT [PRED 'πολύς', CASE acc, NUM pl, GEND n]]의 속성-값 행렬을 형성한다. 생성문법적으로는 동사구(VP)의 빈도나 양태를 수식하는 부사적 수식어구 위치를 점하며, 반복적 행동의 강도를 통사적으로 증폭시킨다.",
        "background": "한 번으로 끝난 것이 아니라 반복적으로, 그리고 끈질기게 시신 모독이 이루어졌음을 강조한다. 슬픔에 잠긴 아버지의 입장에서 아들이 겪어야 했던 참혹한 수모의 빈도를 고발한다.",
        "etymology": "PIE 재구형 *pl̥h₁u-('많은', 후두음 *h₁과 영급 어간 포함)에 기원한다[cite: 1]. 산스크리트어 purú('많은') 및 영어 full과 명백한 동계어다[cite: 1]. 음운사적으로 후두음의 영향과 양성모음화 과정을 거쳐 그리스어 형용사의 중성 복수 대격이 부사로 전용되는 통사적 의미 전이를 겪었다[cite: 1]. Chantraine(DELG)은 이 단어가 인도유럽어의 양(quantity)을 나타내는 가장 보편적인 어근임을 실명 인용하여 증명한다[cite: 1]."
      },
      {
        "g": "ῥυστάζεσκεν",
        "pos": "동사",
        "lemma": "ῥυστάζω",
        "parse": "3rd.sg.impf.ind.act. (iterative ending -σκ- added)",
        "principalParts": "ῥυστάζω – ῥυστάσω – ἐρύσταξα – – – ἐρυστάχθην",
        "gloss_kr": "질질 끌고 다녔다",
        "gloss_en": "kept dragging about, maltreated",
        "syntax": "LFG f-구조에서 ῥυστάζεσκεν는 주절의 서술어로서 [PRED 'ῥυστάζω<SUBJ,OBJ,OBL>', SUBJ Ἀχιλλεύς, OBJ 헥토르(생략), OBL σῆμ']의 논항 구조를 지배한다. 생성문법적으로 반복상 접사 -σκ-와 과거 시제 핵의 결합을 보여주며, [TP T [vP 주어 [VP V 목적어 처소부사구]]]의 통사적 구성을 이룬다.",
        "background": "전차 뒤에 시신을 묶어 파트로클로스의 무덤 주변을 거칠게 끌고 다녔던 잔인한 모독 행위를 생생하게 묘사한다. 영웅의 분노가 죽음 이후에도 멈추지 않고 시신을 향한 폭력으로 이어졌음을 보여주는 핵심 동사다.",
        "etymology": "끌다를 뜻하는 어근 *ruad- 또는 *reus- 계통의 파생 동사로 재구되며, 반복상 접사가 결합한 형태다[cite: 1]. Frisk(GEW)는 이 동사의 어원이 신체나 물체를 거칠게 끌고 다니는 동작을 나타내는 의태어적 기원과 연관이 있음을 실명 인용하여 설명한다[cite: 1]. 음운사적으로 호메로스 방언 특유의 미완료 반복 과거 어미(-σκ- + -εν)가 결합하는 형태론적 특징을 보여준다[cite: 1]."
      },
      {
        "g": "ἑοῦ",
        "pos": "대명사",
        "lemma": "ός, ἥ, ὅ / ἑός",
        "parse": "sg.gen.m.",
        "principalParts": "–",
        "gloss_kr": "자신의, 그의",
        "gloss_en": "his own",
        "syntax": "LFG f-구조에서 ἑοῦ는 소유 대명사로서 명사 σῆμ'를 수식하며 [SPEC [PRED 'ἑός', CASE gen, NUM sg]]의 속성-값 행렬을 구성한다. 생성문법적으로는 DP 내부의 지정어 자리를 점하며, 주어와 결속(binding) 관계를 맺는 재귀적 소유격의 통사적 분포를 보인다.",
        "background": "파트로클로스가 자신의 소중한 전우이자 분신이었음을 강조하며, 아킬레우스가 그토록 격렬하게 분노하고 복수하려 했던 감정의 원천을 지칭한다.",
        "etymology": "PIE 재구형 *se-('자기 자신')에서 파생된 소유대명사 재구형에 기원한다[cite: 1]. 라틴어 sui/suus('자신의')와 밀접한 동계어 관계를 이룬다[cite: 1]. 음운사적으로 고대 그리스어에서 기식음과 탈락 현상을 겪으며 3인칭 재귀 소유사로 정착했다[cite: 1]. Chantraine(DELG)은 이 형태가 인도유럽어의 대명사 결속 체계를 충실히 반영하고 있음을 실명 인용하여 확인한다[cite: 1]."
      },
      {
        "g": "περὶ",
        "pos": "전치사",
        "lemma": "περί",
        "parse": "prep. taking gen.",
        "principalParts": "–",
        "gloss_kr": "~주위에, ~에 관하여",
        "gloss_en": "around, about",
        "syntax": "LFG f-구조에서 περὶ는 전치사로서 후행하는 명사 σῆμ'를 지배하며 [OBL [PRED 'περί', CASE gen]]의 논항 구조를 형성한다. 생성문법적으로는 PP의 핵으로 기능하며, 무덤 주변을 도는 공간적 회전 및 근접을 나타내는 처소 부사구를 통사적으로 이끈다.",
        "background": "파트로클로스의 무덤이라는 특정한 장소를 중심으로 시신 모독의 회전 운동이 일어났음을 공간적으로 한정한다. 죽은 자와 산 자의 영혼이 얽히는 비극적 무대를 시각화한다.",
        "etymology": "PIE 재구형 *peri('~의 주위에, ~를 넘어서')에 기원하며, 공간적 확장성을 뜻한다[cite: 1]. 산스크리트어 pári('주위에') 및 라틴어 per('통하여')와 완벽한 동계어다[cite: 1]. 음운사적으로 전치사로서 다양한 격(속격, 여격, 대격)을 지배하며 의미가 분화되는 문법화 과정을 거쳤다[cite: 1]. Beekes(EDG)는 이 전치사가 인도유럽어의 공간 지시 전치사 중 가장 안정적인 형태를 유지함을 실명 인용하여 증명한다[cite: 1]."
      },
      {
        "g": "σῆμ᾽",
        "pos": "명사",
        "lemma": "σῆμα, σήματος, τό",
        "parse": "sg.gen.n.",
        "principalParts": "–",
        "gloss_kr": "무덤의, 분묘의",
        "gloss_en": "of the tomb, barrow",
        "syntax": "LFG f-구조에서 σῆμ'는 전치사 περὶ의 목적어(OBL)로서 [OBL [PRED 'σῆμα', CASE gen, NUM sg]]의 속성-값 행렬을 갖는다. 생성문법적으로는 속격 지배를 받는 DP이며, 무덤이라는 기념비적 공간을 나타내는 명사구 핵의 위치를 점한다.",
        "background": "전사한 파트로클로스를 기리기 위해 세운 봉분(무덤)을 가리킨다. 친구의 죽음을 기리는 신성한 장소가 원수에 대한 복수와 시신 모독의 무대로 변질되어 버린 비극적 아이러니를 상징한다.",
        "etymology": "선그리스어(Pre-Greek) 기층 어휘 또는 인도유럽어 어근 *dhyā-('보다, 나타내다') 계통과의 연관성이 논의된다[cite: 1]. Beekes(EDG)는 이 단어가 기층 언어에서 유입되었을 가능성이 높으며 형태론적으로 중성 3변화 명사로 정착했음을 실명 인용하여 설명한다[cite: 1]. 음운사적으로 어말 모음의 엘리전을 겪으며 시가 운율에 적응하는 음운 변동을 거쳤다[cite: 1]."
      },
      {
        "g": "ἑτάροιο",
        "pos": "명사",
        "lemma": "ἑταῖρος, ἑταίρου, ὁ",
        "parse": "sg.gen.m.",
        "principalParts": "–",
        "gloss_kr": "전우의, 친구의",
        "gloss_en": "of the companion, comrade",
        "syntax": "LFG f-구조에서 ἑτάροιο는 명사 σῆμα를 수식하는 소유격 보어로서 [SPEC [PRED 'ἑταῖρος', CASE gen, NUM sg]]의 속성-값 행렬을 구성한다. 생성문법적으로는 명사구 내부의 소유격 지배를 받으며, 무덤의 주인이 누구인지 명시하는 결속 관계를 완성한다.",
        "background": "아킬레우스에게는 분신과도 같았던 파트로클로스를 가리킨다. 이 전우의 죽음이 모든 비극적 분노와 잔혹한 복수의 도화선이었음을 상기시키며, 서사의 감정적 정점을 마무리한다.",
        "etymology": "PIE 재구형 *swet-aro-('자신의 사람, 동료')에 기원하며, 재귀대명사 어근에서 파생된 사회적 관계 어휘다[cite: 1]. 산스크리트어 svá-('자신의')와 어원적 친족성을 지닌다[cite: 1]. 음운사적으로 호메로스 방언 특유의 장모음 속격 어미(-οιο)가 결합하여 고전 그리스어의 *-ου로 축약되기 이전의 형태를 고스란히 보존하고 있다[cite: 1]. Chantraine(DELG)은 이 단어가 고대 그리스 영웅 사회의 전우애와 사회적 결속을 나타내는 핵심 어휘임을 실명 인용하여 확증한다[cite: 1]."
      }
    ]
  },
  {
    "ref": "Iliad 24.756",
    "trans": "너는 그를 죽였으나, 그래도 그를 살려내지는 못했다.",
    "words": [
      {
        "g": "Πατρόκلو",
        "pos": "명사",
        "lemma": "Πάτροκλος, Πατρόκλου, ὁ",
        "parse": "sg.gen.m.",
        "gloss_kr": "파트로나클로스 (고유명사)",
        "gloss_en": "Patroclus",
        "syntax": "LFG 관점에서 Πατρόκلو는 호격적 용법 혹은 속격 소유/대상의 기능을 하며, 여기서는 시적 호격으로 [PRED 'Πάτροκλος', CASE gen, θ-ROLE THEME/PATIENT] 자질을 갖는다. c-구조상 NP 내부에서 보문소 또는 직접 호격의 변이형으로 분석되며, 괄호 트리로는 [DP [D' [NP Πατρόκلو]]]로 나타낼 수 있다. 아킬레우스의 연인이자 전우인 파트로클로스의 이름이 속격 형태로 직접 호명 기능을 수행한다.",
        "background": "Πάτροκλος는 메네이티오스의 아들이자 아킬레우스의 가장 친한 전우이며, 헥토르에게 죽임을 당함으로 인해 아킬레우스를 다시 전투로 이끌어내는 서사적 촉매 역할을 한다. 본 행에서 헬레베는 파트로클로스의 죽음을 다시금 상기시키며 그가 아킬레우스의 손에 의해 직접 살해된 것은 아니나 헥토르의 손에 죽도록 방치된 비극적 맥락을 되짚는다. 호메로스 서사시 전반에서 파트로클로스의 죽음은 비극성의 정점을 이루는 핵심 서사 축이다.",
        "etymology": "① PIE 조어형 *ph₂tér-('아버지')와 *kléwos('명예, 영광')의 합성어 계열인 *Patro-kléwos('아버지의 영광')에서 유래하며, 에블라우트는 o급 및 영급의 결합 구조를 보인다. ② 동계어로 산스크리트어 Pitṛ́-śravas('조상의 영광'), 고대 그리스어 Ἀγακλέης 등이 있다. ③ 그리스어 내부의 음운 규칙에 따라 복합어 단축 및 모음 축약 과정을 거쳐 호메로с 시적 형태가 확립되었다. ④ 현대 유럽어의 인명 Patroclus 및 지명 등의 어원이 되었다. 실명 인용: Beekes (EDG)와 Chantraine (DELG)."
      },
      {
        "g": "τὸν",
        "pos": "관사",
        "lemma": "ὁ, ἡ, τό",
        "parse": "sg.acc.m.",
        "gloss_kr": "그를",
        "gloss_en": "him",
        "syntax": "HPSG 자질구조상 [HEAD det, CASE acc, AGR sg.m.]로 지정되며, 여기서는 명사적 대명사 기능을 수행하여 [PRED 'pro']의 지시 대상인 파트로클로스를 한정한다. 통사적으로는 대절 안에서 목적어 NP의 [COMP spec] 자리를 점하며, 후행하는 관계절 또는 지시적 대명사 용법과 결합한다.",
        "background": "호메로스 시어에서 정관사 ὁ, ἡ, τό는 고전 그리스어와 달리 지시 대명사의 성격을 강하게 띠며, 여기서는 앞서 언급된 파트로클로스를 명확히 가리키는 지시적 기능을 한다. 서사시의 흐름 속에서 청중의 시선을 특정 인물에게 집중시키는 수사적 장치로 기능한다.",
        "etymology": "① PIE 지시 대명사 어근 *to- / *te- (e급)에서 유래한다. ② 동계어로 산스크리트어 tá-, 고대 영문서의 th- 계열 대명사/관사, 라틴어 iste/istud 등이 있다. ③ 그리스어 진화 과정에서 초기 발음상의 *s-가 기식음(rough breathing)으로 변하는 음운 규칙을 겪었다. ④ 영어의 the, this 등의 지시어 계열과 궁극적인 동계 관계를 형성한다. 실명 인용: Chantraine (DELG)."
      },
      {
        "g": "ἔπεφνες",
        "pos": "동사",
        "lemma": "τείνω의 동족 혹은 φένω (중세/시적 어근)",
        "principalParts": "φένω – (미상) – ἔπεφνον – πέφαται – (미상) – (미상)",
        "parse": "2nd.sg.aor.ind.act.",
        "gloss_kr": "죽였다",
        "gloss_en": "you killed",
        "syntax": "LFG AVM 구조상 [PRED 'φένω<SUBJ,OBJ>', TENSE past, ASPECT aor, SUBJ [PRED 'pro', PERS 2, NUM sg], OBJ [PRED 'pro', PERS 3, NUM sg, CASE acc]]로 분석된다. 2인칭 단수 주어 '너(아킬레우스)'가 동사 어미 -ες를 통해 통사적으로 포착되며, 생성문법적으로는 [TP pro_2sg [T' ἔπεφνες [vP t_2sg [VP t_v OBJ]]]]의 이동 및 격 부여 구조를 갖는다.",
        "background": "ἔπεφνες는 호메로스 시어에서만 주로 발견되는 아오리스 중복거거형(reduplicated aorist)의 시적 형태이다. 파트로클로스를 직접 살해한 이는 헥토르이지만, 헬레네는 아킬레우스의 분노와 이로 인한 전황의 흐름 속에서 간접적·궁극적 원인 제공자로서 아킬레우스의 책임을 비유적으로 묻고 있다. 비극적 아이러니를 극대화하는 수사적 표현이다.",
        "etymology": "① PIE 어근 *gʷhen-('치다, 죽다, 살해하다')의 o급 중복거거형 재구 *gʷhe-gʷhon-에 기원하며, 후두음 및 중복음 변화를 거쳤다. ② 동계어로 산스크리트어 hánti('때리다, 죽이다'), 히타이트어 kuenzi('죽인다')가 있다. ③ 그리스어 음운 변화 규칙에 따라 유기음의 탈락 및 음절 개성화 현상을 겪었다. ④ 현대 영어의 -fend (defend 등에서 잔존) 및 살해 관련 인도유럽어 계열 단어들과 깊은 연관이 있다. 실명 인용: Frisk (GEW) 및 Beekes (EDG)."
      },
      {
        "g": "ἀνέστησεν",
        "pos": "동사",
        "lemma": "ἀνίστημι",
        "principalParts": "ἀνίστημι – ἀναστήσω – ἀνέστησα / ἀνέστην – ἀνέστηκα – ἀνέσταμαι – ἀνestáθην",
        "parse": "3rd.sg.aor.ind.act.",
        "gloss_kr": "일으켜 세웠다, 살려내었다",
        "gloss_en": "he raised up, brought back to life",
        "syntax": "LFG 구조상 [PRED 'ἀνίστημι<SUBJ,OBJ>', TENSE past, ASPECT aor, VOICE act, SUBJ [PRED 'pro', PERS 3, NUM sg], OBJ [PRED 'pro']]로 나타낸다. 전치사적 접두사 ἀνά가 동사 ἵστημι와 결합하여 합성동사를 이루며, 생성문법적으로는 [vP ἀνέστησεν [VP t_v OBJ]] 형태로 목적어를 상향 이동시키는 통사 구조를 가진다.",
        "background": "ἀνίστημι는 물리적으로 '일으켜 세우다'라는 뜻이나, 여기서는 죽은 자를 되살리거나 원상태로 돌이키려는 시도가 허사임을 나타내는 표현이다. 헬레네는 파트로클로스를 잃은 슬픔 속에서 죽음의 불가역성을 강조하며 아무리 영웅이라도 죽은 자를 되돌릴 수 없음을 탄식한다.",
        "etymology": "① PIE 어근 *sta-('서다')의 사역동사/능동형 파생 및 전치사 *h₂en-('위로')의 결합으로 재구된다. ② 동계어로 라틴어 stāre('서 있다'), 산스크리트어 tiṣṭhati('서다'), 영어 stand가 있다. ③ 그리스어 내부에 전치사 복합화 과정 및 어근 장음화 규칙(Haplology 등)이 적용되었다. ④ 영어 stand, station, state 및 현대 그리스어 ἀναστάσιος('부활의') 등의 어원이 되었다. 실명 인용: Chantraine (DELG)."
      },
      {
        "g": "δέ",
        "pos": "접속사",
        "lemma": "δέ",
        "parse": "coord.conj.",
        "gloss_kr": "그러나, 그리고",
        "gloss_en": "and, but",
        "syntax": "HPSG 자질구조상 [HEAD conj, TYPE coordinating, POSTITION postpositive]로 정의되며, 문장 간 또는 구절 간 대조·순접 관계를 맺는다. 통사적으로 두 번째 위치(Wackernagel's law)에 고정되는 전접어(enclitic)적 특성을 지닌다.",
        "background": "δέ는 호메로스 시문학에서 앞 절의 내용과 대조되거나 새로운 진술을 이어받는 가장 빈번한 접속사이다. 본 행에서는 앞선 행의 죽음과 뒤따르는 무력한 되살림 시도의 실패를 극적으로 연결하는 대조의 고리 역할을 한다.",
        "etymology": "① PIE 지시/연결 입자 *de에서 유래하며, 명확한 어원적 분화는 선그리스어 이전 단계로 거슬러 올라간다. ② 동계어로 고대 슬라브어 de, 리투아니아어 -de 등이 있다. ③ 그리스어 안에서 후치사(postpositive) 위치 규칙이 고착화되는 음운·통사적 변화를 겪었다. ④ 현대 그리스어에서는 직접적인 단독 접속사보다는 복합형태로 제한적으로 잔존한다. 실명 인용: Beekes (EDG)."
      },
      {
        "g": "μιν",
        "pos": "대명사",
        "lemma": "μιν (3인칭 단수 대명사)",
        "parse": "sg.acc.m.",
        "gloss_kr": "그를",
        "gloss_en": "him",
        "syntax": "LFG 관점에서 μιν은 [PRED 'pro', PERSON 3, NUMBER sg, CASE acc] 자질을 가지며 앞서 언급된 Πατρόκلو를 수령하는 대명사 목적어이다. 통사적으로는 비강세 전접어로서 동사 뒤에 위치하며 괄호 트리로는 [DP [D' μιν]]으로 분석된다.",
        "background": "μιν은 호메로스 및 서사시 시어에서만 주로 사용되는 비강세 3인칭 단수 대명사(여격·대격 공용이나 주로 대격)이다. 운율을 맞추고 문장의 리듬감을 유지하는 데 필수적인 구송적 장치로 작용하며, 인물의 지시 대상 선행사를 긴밀하게 이어준다.",
        "etymology": "① PIE 대명사 어근 *mi- / *sm- 계열에서 파생된 것으로 추정된다. ② 동계어로 산스크리트어 동격 대명사 형태 및 구 인도유럽어 지시어 잔재가 있다. ③ 그리스어 구송 시가 전통 속에서 형태가 고정되어 대명사 패러다임의 일부로 보존되었다. ④ 고전 Attic 그리스어 이후에는 소실되어 후대 문헌에는 나타나지 않는 화석화된 호메로스어이다. 실명 인용: Chantraine (DELG)."
      },
      {
        "g": "οὐδ᾽",
        "pos": "소사",
        "lemma": "οὐδέ",
        "parse": "neg.conj.",
        "gloss_kr": "~도 아니었다, 그리고 ~않았다",
        "gloss_en": "not even, nor",
        "syntax": "HPSG 자질구조상 [HEAD adv/conj, POLARITY negative]으로 분석되며, 부정 소사 οὐ와 접속사 δέ의 크라시스(elision) 결합형이다. 통사적으로 술어 동사 구를 부정하면서 앞 문장과 대조 연결을 동시에 수행한다.",
        "background": "οὐδέ는 단순한 부정과 접속의 결합을 넘어 '조금도 ~않다', '~조차 아니다'라는 강한 부정적 강조 효과를 낸다. 헬레네의 탄식 속에서 어떤 영웅적인 노력이나 신적 위무도 죽음을 되돌릴 수 없다는 절대적 무력감을 부각시킨다.",
        "etymology": "① 부정어 *ne / ou와 접속사 *de의 결합에서 유래한다. ② 동계어로 산스크리트어 na 및 라틴어 ne- 계열 복합어들이 있다. ③ 모음 충돌을 피하기 위해 시적 구송 과정에서 엘리전(elision) 규칙이 적용되어 οὐδ' 형태가 되었다. ④ 고전 및 현대 그리스어 전반에 걸쳐 부정·양보의 복합사로 이어져 내려온다. 실명 인용: Frisk (GEW)."
      },
      {
        "g": "ὧς",
        "pos": "부사",
        "lemma": "ὧς",
        "parse": "adv.",
        "gloss_kr": "그렇게, 이처럼",
        "gloss_en": "thus, so",
        "syntax": "LFG 관점에서 ὧς는 양태 부사로서 [PRED 'ὧς', MODAL-TYPE manner] 자질을 가지며, 술어의 방식을 수식한다. 통사적으로는 부사구(AdvP)를 형성하여 [VP 내부의 상태를 규정한다.",
        "background": "ὧς는 '이와 같이', '그렇게'라는 뜻으로 앞선 상황이나 문맥을 가리키는 지시적 부사이다. οὐδ' ὧς(그렇게 해도 역시 ~않았다)라는 관용적 표현을 이루어, 어떤 조건을 붙여도 결과가 변하지 않는 비극적 필연성을 강조한다.",
        "etymology": "① PIE 지시 대명사적 부사 어근 *swē- / *swe-에서 유래한다. ② 동계어로 산스크리트어 svá('자신의'), 라틴어 suus('자신의')와 어원적 친연성이 있다. ③ 그리스어 음운 변화를 거쳐 시적 방언 형태인 ὧς(고전 ὡς의 장모음 형태)로 정착되었다. ④ 현대 그리스어의 ὡς 및 관련 부사 표현들의 어원이 되었다. 실명 인용: Beekes (EDG)."
      }
    ]
  },
  {
    "ref": "Iliad 24.757",
    "trans": "그러나 지금 내 방에서 그대는 이슬에 젖은 듯 싱싱하고 방금 누운 것처럼 누워 있으니,",
    "words": [
      {
        "g": "νῦν",
        "pos": "부사",
        "lemma": "νῦν",
        "parse": "adv.",
        "gloss_kr": "지금, 현재",
        "gloss_en": "now",
        "syntax": "LFG 관점에서 νῦν은 시제적 담화 수식어로 [PRED 'νῦν', TENSE-MODIFIER present] 자질을 갖는다. 통사적으로 문장 부사구(AdvP)로서 문두 또는 주요 술어 영역을 수식하며, 과거의 죽음과 현재의 시신 상태를 대비시키는 대조 정보구조의 축을 이룬다.",
        "background": "νῦν은 헬레네의 슬픈 독백 속에서 과거(전투 속에서의 죽음과 처참함)와 현재(세심하게 안치되어 신선함을 유지하는 시신의 모습)를 극적으로 대비시키는 시간적 표지이다. 헥토르의 시신이 아폴론의 가호로 썩지 않고 보존된 기적 같은 현상을 가리킨다.",
        "etymology": "① PIE 부사 어근 *nu('지금')에서 유래한다. ② 동계어로 산스크리트어 nú / nūnám, 라틴어 nunc, 영어 now가 있다. ③ 그리스어 내부에 어간 확장과 악센트 고정 규칙을 거쳐 현재형으로 굳어졌다. ④ 영어 now, 현대 그리스어 νῦν 또는 νύν 계통 표현들의 직접적인 조상이다. 실명 인용: Chantraine (DELG)."
      },
      {
        "g": "δέ",
        "pos": "접속사",
        "lemma": "δέ",
        "parse": "coord.conj.",
        "gloss_kr": "그리고, 그러나",
        "gloss_en": "and, but",
        "syntax": "HPSG 자질구조상 [HEAD conj, TYPE coordinating]으로 분석되며, 앞 행의 탄식 내용과 현재의 시신 상태를 연결하는 대조적 접속 기능을 수행한다.",
        "background": "앞서 다룬 756행의 δέ와 동일한 통사·수사적 기능으로, 헬레네의 감정선 속에서 과거의 비극과 현재의 경이로운 시신 상태를 이어주는 교량 역할을 한다.",
        "etymology": "① PIE 연결 입자 *de에서 유래한다. (756행 참조)",
        "etymology": "① PIE 연결 입자 *de에서 유래한다. (756행 참조)"
      },
      {
        "g": "μοι",
        "pos": "대명사",
        "lemma": "ἐγώ",
        "parse": "sg.dat.m./f.",
        "gloss_kr": "나에게, 나의 (소유여격)",
        "gloss_en": "to me, my",
        "syntax": "LFG 관점에서 μοι는 [PRED 'pro', PERSON 1, NUMBER sg, CASE dat, θ-ROLE BENEFICIARY/POSSESSOR] 자질을 지닌 여격 대명사이다. 통사적으로는 소유여격(dativus possessivus) 또는 윤리적 여격(dativus ethicus)으로 작용하여 헬레네의 주관적 정서와 저택(μεγάροισι)과의 밀접한 영유 관계를 나타낸다.",
        "background": "여기서의 μοι는 단순한 간접목적어가 아니라 화자 헬레네의 깊은 슬픔과 애정이 담긴 소유여격으로, 헥토르가 놓여 있는 공간이 그녀의 삶과 슬픔의 영역임을 감정적으로 각인시킨다.",
        "etymology": "① PIE 1인칭 단수 여격 대명사 재구형 *moi에서 유래한다. ② 동계어로 산스크리트어 mé, 라틴어 mihi, 고대 슬라브어 mi가 있다. ③ 그리스어 음운 변화를 거쳐 비강세 전접어 형태로 고정되었다. ④ 인도유럽어족 전반에 공통으로 남은 1인칭 여격 형태이다. 실명 인용: Beekes (EDG)."
      },
      {
        "g": "ἑρσήεις",
        "pos": "형용사",
        "lemma": "ἑρσήεις, ἑρσήεσσα, ἑρσήεντος",
        "parse": "sg.nom.m.",
        "gloss_kr": "이슬에 젖은, 싱싱한, 생기 있는",
        "gloss_en": "dewy, fresh, youthful",
        "syntax": "LFG 관점에서 ἑρσήεις는 [PRED 'ἑρσήεις', CASE nom, GENDER m, NUMBER sg, TH-ROLE ATTR] 자질을 지닌 형용사 서술어 또는 수식어이다. 통사적으로 주어인 헥토르의 시신(κεῖσαι의 주어)과 성·수·격 일치(agreement)를 이루며 주격 보어 역할을 한다.",
        "background": "ἑρσήεις는 원래 '이슬 내린', '촉촉한' 뜻이나, 여기서는 신들(특히 아폴론)의 보호로 시신이 부패하지 않고 아침 이슬처럼 싱그럽고 생기 있는 상태를 유지하고 있음을 비유적으로 표현한 시적 수사이다.",
        "etymology": "① 명사 ἕρση('이슬')에서 파생된 형용사 접미사 -εις 결합형으로, PIE 어근 *wers-('젖다, 이슬 내리다')에서 유래한다. ② 동계어로 산스크리트어 varṣá('비'), 리투아니아어 vė́rsa 등이 있다. ③ 그리스어 내부의 접미사 생산성과 모음 연장 규칙을 거쳐 시적 형용사로 정착되었다. ④ 고대 시가 문헌에 국한되어 쓰이다가 사멸한 호메로스적 어휘이다. 실명 인용: Chantraine (DELG)."
      },
      {
        "g": "καὶ",
        "pos": "소사",
        "lemma": "καί",
        "parse": "coord.conj.",
        "gloss_kr": "그리고, 또한",
        "gloss_en": "and, also",
        "syntax": "HPSG 자질구조상 [HEAD conj, TYPE coordinating]으로 분석되며, 두 개의 형용사 수식어(ἑρσήεις와 πρόσφατος)를 대등하게 연결하는 첨가 소사 역할을 한다.",
        "background": "καί는 문장 내에서 동등한 자격의 수식어들을 매끄럽게 결합하여 헬레네가 바라보는 헥토르 시신의 경이로운 두 가지 특징(싱그러움과 방금 누운 듯함)을 강조한다.",
        "etymology": "① 어원적으로 명확한 PIE 단일 재구가 불확실하며, 그리스어 고유의 전치/접속 입자 발전으로 본다. ② 동계어는 타 언어에서 직접 대응형을 찾기 어렵고 그리스어 독자적 발달로 간주된다. ③ 고전 및 현대 그리스어에 이르기까지 가장 보편적인 접속사/부사로 정착했다. 실명 인용: Frisk (GEW)."
      },
      {
        "g": "πρόσφατος",
        "pos": "형용사",
        "lemma": "πρόσφατος, πρόσφατον",
        "parse": "sg.nom.m.",
        "gloss_kr": "방금 일어난, 싱싱한, 방금 죽은 듯한",
        "gloss_en": "recent, fresh, newly slain",
        "syntax": "LFG 관점에서 πρόσφατος는 [PRED 'πρόσφατος', CASE nom, GENDER m, NUMBER sg] 자질을 지니며 주어 보어로서 κεῖσαι와 호응한다. 통사적으로 [AP [A' πρόσφατος]] 구조를 이룬다.",
        "background": "πρόσφατος는 '방금 만들어진', '신선한' 뜻으로, 헥토르가 사망한 지 여러 날이 지났음에도 불구하고 방금 숨을 거둔 것처럼 평온하고 깨끗한 시신의 상태를 찬탄하는 표현이다.",
        "etymology": "① 전치사 πρό('앞에')와 어근 *spha- / *phen-('죽이다, 치다' 또는 '찰나의')의 결합으로 추정되나 어원 논쟁이 있다. ② 동계어로 인도유럽어족 내의 시간/공간적 전치 복합어들이 있다. ③ 그리스어 내부에 복합 형용사 형성 규칙을 거쳐 의미가 '신선한, 최근의'로 확립되었다. ④ 현대 그리스어 πρόσφατος('최근의, 최근의 것')로 이어져 현재까지 일상어로 활발히 쓰인다. 실명 인용: Beekes (EDG)."
      },
      {
        "g": "ἐν",
        "pos": "전치사",
        "lemma": "ἐν",
        "parse": "prep.+dat.",
        "gloss_kr": "안에, ~에서",
        "gloss_en": "in, within",
        "syntax": "LFG 관점에서 ἐν은 [PRED 'ἐν<OBJ>', CASE dat] 자질을 가지며 지배하는 명사구(μεγάροισι)에 여격(dat.)을 요구하는 통사적 격 지배(case government)를 수행한다. 생성문법적으로는 [PP ἐν [DP μεγάροισι]] 전치사구를 구성한다.",
        "background": "ἐν 전치사는 공간적 내부 위치를 나타내며, 여기서는 헬레네의 거처인 트로이아 궁전 내부라는 장소적 배경을 한정한다.",
        "etymology": "① PIE 전치사/부사 재구형 *en('안에')에서 유래한다. ② 동계어로 라틴어 in, 영어 in, 고대 슬라브어 vŭ가 있다. ③ 그리스어 음운 변화를 거쳐 단음절 전치사로 고정되었다. ④ 영어 in, 현대 그리스어 ἐν / σε 등의 조상이다. 실명 인용: Chantraine (DELG)."
      },
      {
        "g": "μεγάροισι",
        "pos": "명사",
        "lemma": "μέγαρον, μεγάροιο/μεγάροισι, τό",
        "parse": "pl.dat.n. (Homeric dative plural)",
        "gloss_kr": "큰 홀, 궁전, 방",
        "gloss_en": "in the halls, palaces",
        "syntax": "LFG 관점에서 μεγάροισι는 전치사 ἐν의 지배를 받는 여격 목적어로서 [PRED 'μέγαρον', CASE dat, NUMBER pl, θ-ROLE LOCATIVE] 자질을 가진다. 통사적으로 PP의 보충어(COMP) 역할을 하며 괄호 트리로는 [PP ἐν [DP [D' [NP μεγάροισι]]]]로 분석된다.",
        "background": "μέγαρον은 미케네 시대 궁전의 중앙 홀이나 저택의 대청마루를 가리키며, 호메로스 서사시에서는 영웅들의 거처이자 가부장적 공간의 중심을 상징한다. 헬레네가 머무는 트로이아 궁전의 공간 속에서 헥토르의 시신이 안치된 상황을 생생하게 그린다.",
        "etymology": "① PIE 어근 *meg-('큰')와 연관된 건축 명칭 파생어로 추정되며, 선그리스어 기층 어휘설도 제기된다. ② 동계어로 고대 아일랜드어 mrug('땅'), 라틴어 magnus(어근 공유) 등이 거론된다. ③ 그리스어 내부의 중성 명사 복수 여격 어미(-οισι, 호메로스 이형태) 결합 규칙을 거쳤다. ④ 현대 그리스어 및 고전 지명 연구에 흔적을 남긴다. 실명 인용: Beekes (EDG) (선그리스어 기층 가능성 언급)."
      }
    ]
  },
  {
    "ref": "Iliad 24.758",
    "trans": "누워 있으니, 그 모습은 은궁의 아폴론께서",
    "words": [
      {
        "g": "κεῖσαι",
        "pos": "동사",
        "lemma": "κεῖμαι",
        "principalParts": "κεῖμαι – κείσομαι – (미상) – (미상) – (미상) – (미상)",
        "parse": "2nd.sg.pres.ind.mid/pass.",
        "gloss_kr": "누워 있다",
        "gloss_en": "you lie",
        "syntax": "LFG AVM 구조상 [PRED 'κεῖμαι<SUBJ>', TENSE pres, VOICE mid/pass, SUBJ [PRED 'pro', PERS 2, NUM sg, CASE nom]]로 분석된다. 2인칭 단수 주어(헥토르를 지칭하는 화자의 대상 지시)가 동사 어미 -σαι를 통해 통사적으로 실현되며, 생성문법적으로는 [TP pro_2sg [T' κεῖσαι [vP t_2sg [VP t_v]]]] 구조를 가진다.",
        "background": "κεῖμαι는 신체적 상태나 전사자의 시신이 누워 있는 모습을 나타내는 전형적인 동사이다. 살아 있는 이에게 향한 발화이나 대상은 죽은 헥토르의 시신이므로, 상태동사의 비대격적(unaccusative) 성격이 강하게 드러난다.",
        "etymology": "① PIE 어근 *kei-('눕다, 쉬다')에서 유래한다. ② 동계어로 산스크리트어 śéte('눕다'), 고대 슬라브어 sinati 등이 있다. ③ 그리스어 안에서 중수동태 어미 체계와 결합하여 상태를 나타내는 탈형태적(deponent) 동사로 고정되었다. ④ 영어 cemetery(< 그리스어 κοιμητήριον, '잠자는/눕는 곳')가 이 어근의 후손이다. 실명 인용: Chantraine (DELG)."
      },
      {
        "g": "τῷ",
        "pos": "대명사",
        "lemma": "ὁ, ἡ, τό (지시/관계대명사)",
        "parse": "sg.dat.m.",
        "gloss_kr": "그와, ~와 같은",
        "gloss_en": "to him, like him",
        "syntax": "LFG 관점에서 τῷ는 형용사 ἴκελος가 지배하는 여격 보충어로서 [PRED 'pro', CASE dat, θ-ROLE COMP] 자질을 가진다. 통사적으로 형용사구(AP) 내에서 비교 대상의 기준점을 제시하는 여격 통사 지배를 수행한다.",
        "background": "지시대명사의 여격형으로 후행하는 비교 형용사 ἴκελος와 호응하여 '~와 닮은'이라는 구문을 이룬다. 헥토르의 시신이 신과 같은 경이로운 아름다움을 지녔음을 비유하는 핵심 연결고리이다.",
        "etymology": "① PIE 지시 대명사 어근 *to-에서 유래한다. (756행 τόν 참조)",
        "etymology": "① PIE 지시 대명사 어근 *to-에서 유래한다. (756행 참조)"
      },
      {
        "g": "ἴκελος",
        "pos": "형용사",
        "lemma": "ἴκελος, ἴκελη, ἴκελον",
        "parse": "sg.nom.m.",
        "gloss_kr": "~와 닮은, 흡사한",
        "gloss_en": "like, resembling",
        "syntax": "LFG 관점에서 ἴκελος는 [PRED 'ἴκελος<OBJ_DAT>', CASE nom, GENDER m, NUMBER sg] 자질을 가지며, 주절의 주어 상태를 보충하는 서술형용사이다. 여격 명사구(τῷ)를 보충어로 취하는 통사적 특징을 지닌다.",
        "background": "ἴκελος는 호메로스 시가에서 인물이나 사물이 신이나 다른 위대한 대상과 시각적으로 닮았음을 비유할 때 쓰는 정형적 형용사이다. 헥토르의 죽은 시신이 아폴론의 축복으로 신에 버금가는 아름다움을 띠고 있음을 극적으로 찬탄한다.",
        "etymology": "① PIE 어근 *eikʷ-('보다, 닮다')에서 유래하는 것으로 추정된다. ② 동계어로 라틴어 imago('형상, 이미지' - 어원적 연관성 논쟁 있음) 및 기타 발트슬라브어 동계어들이 있다. ③ 그리스어 내부에 형용사 파생 접미사 결합 과정을 거쳤다. ④ 고대 시가어에 주로 쓰였으며 현대 그리스어에는 직접 생존하지 않는다. 실명 인용: Beekes (EDG)."
      },
      {
        "g": "ὅν",
        "pos": "대명사",
        "lemma": "ὅς, ἥ, ὅ",
        "parse": "sg.acc.m.",
        "gloss_kr": "그를 (관계대명사)",
        "gloss_en": "whom",
        "syntax": "LFG 관점에서 ὅν은 관계절 내의 목적어로서 [PRED 'pro', CASE acc, ANTECEDENT Ἀπόλλων] 자질을 가진다. 생성문법적으로는 [CP ὅνᵢ [C' ... [VP κατέπεφνεν tᵢ]]] 구조에서 목적어가 관계절 문두로 A'-이동(wh-movement)한 것으로 분석된다.",
        "background": "관계대명사로 아폴론이 화살로 명중시켜 쓰러뜨린 대상을 선행사 헥토르 또는 일반적 맥락과 연결한다. 헬레네의 발화 속에서 아폴론의 신성한 화살이 지닌 성격(고통 없는 죽음이나 신의 은총적 처분)을 암시한다.",
        "etymology": "① PIE 관계 대명사 어근 *yo-에서 유래한다. ② 동계어로 산스크리트어 yás('~하는 자'), 아베스타어 yō가 있다. ③ 그리스어 음운 변화를 거쳐 초기 기식음 표기로 정착되었다. ④ 고전 및 현대 그리스어 대명사 체계의 기틀이 되었다. 실명 인용: Chantraine (DELG)."
      },
      {
        "g": "τ᾽",
        "pos": "소사",
        "lemma": "τε",
        "parse": "coord.conj.",
        "gloss_kr": "그리고 (첨가/보조 소사)",
        "gloss_en": "and",
        "syntax": "HPSG 자질구조상 [HEAD conj, TYPE enclitic coordinating]으로 분석되며, 전접어로서 선행하는 단어에 부착된다. 시적 구송에서 구절과 수식어를 연결하는 리듬적 기능을 수행한다.",
        "background": "호메로스 시가에서 운율과 통사적 연결을 부드럽게 만들기 위해 자주 쓰이는 전접 접속사이다. 여기서는 관계절의 흐름을 자연스럽게 엮어준다.",
        "etymology": "① PIE 접속/연결 입자 *kʷe에서 유래한다. ② 동계어로 라틴어 -que, 산스크리트어 ca, 고대 아일랜드어 -ch가 있다. ③ 그리스어 음운 변화 과정에서 구순음적 성격이 탈락하고 경구개음화되어 τε로 정착했다. ④ 인도의 -ca나 라틴어 -que와 정확히 대응하는 전형적인 인도유럽어 유산이다. 실명 인용: Frisk (GEW)."
      },
      {
        "g": "ἀργυρότοξος",
        "pos": "형용사",
        "lemma": "ἀργυρότοξος, ἀργυρότοξον",
        "parse": "sg.nom.m.",
        "gloss_kr": "은빛 활을 가진",
        "gloss_en": "silver-bowed",
        "syntax": "LFG 관점에서 ἀργυρότοξος는 [PRED 'ἀργυρότοξος', CASE nom, GENDER m, NUMBER sg] 자질을 지닌 복합 형용사 서술어/수식어이며, 고유명사 Ἀπόλλων의 전통적 수식어(epithet)로 기능한다.",
        "background": "ἀργυρότοξος는 아폴론을 수식하는 가장 대표적인 호메로스식 정형구 수식어(epithet) 중 하나이다. 아폴론의 신성한 무기인 은빛 활과 빛나는 속성을 상징하며, 전사자에게 부드럽고 고통 없는 죽음을 내리는 신의 권능을 떠올리게 한다.",
        "etymology": "① 명사 ἄργυρος('은')와 τόξον('활')의 합성어로, PIE 어근 *h₂erǵ-('빛나다, 은')와 조어형 활 관련 어근의 결합이다. ② 동계어로 산스크리트어 rajatá('은'), 라틴어 argentum('은') 등이 있다. ③ 그리스어 복합어 형성 규칙(중간 모음 -ο- 삽입)을 거쳐 시적 수식어로 고정되었다. ④ 현대 그리스어 아르헨티나(Argentina, 지명 어원 공유) 및 은 관련 어휘들의 친족 관계를 이룬다. 실명 인용: Beekes (EDG)."
      },
      {
        "g": "Ἀπόλλων",
        "pos": "명사(고유)",
        "lemma": "Ἀπόλλων, Ἀπόλλωνος, ὁ",
        "parse": "sg.nom.m.",
        "gloss_kr": "아폴론 (고유명사)",
        "gloss_en": "Apollo",
        "syntax": "LFG 관점에서 Ἀπόλλων은 관계절의 주어로서 [PRED 'Ἀπόλλων', CASE nom, TH-ROLE AGENT] 자질을 가진다. 생성문법적으로는 [TP Ἀπόλλων [T' κατέπεφνεν [vP t_Apollo [VP OBJ]]]] 구조에서 주격 지정을 받는다.",
        "background": "Ἀπόλλων은 제우스와 레토의 아들이며, 궁술·음악·예언·치유와 역병의 신이다. 트로이아 전쟁에서 트로이아측(특히 헥토르와 에네이아스)을 열렬히 수호하였으며, 헥토르가 죽은 뒤에도 그의 시신이 썩거나 훼손되지 않도록 신성한 보호막을 쳐준 주된 신이다.",
        "etymology": "① 어원에 대해서는 고대부터 이설이 많으며, 비인도유럽어(선그리스어) 기층 기원설 혹은 '파괴하다'를 뜻하는 ὄλλυμι와의 연관성이 논쟁적이다. ② Beekes (EDG)는 선그리스어 신명 기원설을 지지하며, Chantraine (DELG) 역시 인도유럽어 내의 단순 어원 설정을 유보한다. ③ 그리스어 음운 발전 과정에서 장모음화 및 악센트 이동을 겪었다. ④ 현대 서구 언어들의 Apollo 및 관련 예술·과학 지명의 어원이 되었다. 실명 인용: Beekes (EDG) 및 Chantraine (DELG)."
      }
    ]
  },
  {
    "ref": "Iliad 24.759",
    "trans": "자신의 온화한 화살들로 다가와 죽였던 그 이와 같이 말이다.\"",
    "words": [
      {
        "g": "οἷς",
        "pos": "대명사",
        "lemma": "ὅς, ἥ, ὅ (관계대명사)",
        "parse": "pl.dat.m.",
        "gloss_kr": "그의, 자신의 (관계대명사의 도구여격)",
        "gloss_en": "with which, his own",
        "syntax": "LFG 관점에서 οἷς는 분사 분사구의 도구여격(instrumental dative) 목적어로서 [PRED 'pro', CASE dat, NUMBER pl, TH-ROLE INSTRUMENT] 자질을 가진다. 통사적으로 수단·도구를 나타내는 격 지배 규칙을 따른다.",
        "background": "관계대명사의 복수 여격형으로 아폴론이 사용하는 신성한 화살들을 지칭한다. 아폴론의 화살은 무자비한 역병이나 죽음을 가져오기도 하지만, 여기서는 헥토르에게 평온하고 깨끗한 죽음(고통 없는 최후)을 선사한 신적 수단을 의미한다.",
        "etymology": "① PIE 관계 대명사 어근 *yo-에서 유래한다. (758행 ὅν 참조)",
        "etymology": "① PIE 관계 대명사 어근 *yo-에서 유래한다. (758행 ὅν 참조)"
      },
      {
        "g": "ἀγανοῖσι",
        "pos": "형용사",
        "lemma": "ἀγανός, ἀγανή, ἀγανόν",
        "parse": "pl.dat.n.",
        "gloss_kr": "온화한, 부드러운, 고통 없는",
        "gloss_en": "gentle, mild",
        "syntax": "LFG 관점에서 ἀγανοῖσι는 [PRED 'ἀγανός', CASE dat, NUMBER pl, GENDER n] 자질을 지니며 명사 βέλεσσιν과 성·수·격 일치(agreement)를 이루는 수식어 형용사이다.",
        "background": "ἀγανός는 '부드러운', '온화한' 뜻으로, 아폴론의 화살이 잔인한 고통을 주지 않고 평온하게 생명을 거두어간 성격을 수식한다. 신이 내린 죽음의 자비로움을 역설적으로 보여주는 시적 표현이다.",
        "etymology": "① PIE 어근 *ag- 또는 *h₂eng-('부드럽다, 유연하다')에서 유래하는 것으로 추정된다. ② 동계어로 산스크리트어 agra- 및 기타 유럽어의 부드러움 관련 어휘들이 거론된다. ③ 그리스어 형용사 파생 규칙에 따라 복수 여격 어미(-οῖσι, 호메로스 이형태)가 결합했다. ④ 고대 시가어에 국한되어 전해지며 현대 그리스어에는 직접 남지 않았다. 실명 인용: Chantraine (DELG)."
      },
      {
        "g": "βέλεσσιν",
        "pos": "명사",
        "lemma": "βέλος, βέλεος / βέλεσιν, τό",
        "parse": "pl.dat.n. (Homeric dative plural with movable -ν)",
        "gloss_kr": "화살들로, 투사체들로",
        "gloss_en": "with arrows, darts",
        "syntax": "LFG 관점에서 βέλεσσιν은 도구여격 명사구로서 [PRED 'βέλος', CASE dat, NUMBER pl, TH-ROLE INSTRUMENT] 자질을 가지며, 분사 ἐποιχόμενος의 행위 수단을 규정한다. 괄호 트리로는 [PP [DP [NP βέλεσσιν]]] 구조를 갖는다.",
        "background": "βέλος는 활이나 창 등의 '투사체' 또는 '화살'을 뜻하며, 아폴론과 아르테미스가 인간의 생명을 거둘 때 사용하는 신성한 무기를 상징한다. 헥토르가 전사할 때 직접 화살에 맞은 것은 아니나, 아폴론의 보호와 신적 개입 아래 죽음에 이르게 된 과정을 은유한다.",
        "etymology": "① PIE 어근 *gʷelḥ₂-('던지다, 찌르다')에서 유래한다. ② 동계어로 그리스어 βλήτρα, 고대 아일랜드어 biáil, 슬라브어 계열의 투척 관련 어휘들이 있다. ③ 그리스어 음운 변화 규칙(시그마 탈락 및 모음 축약, 호메로스식 중복 자음 -σσ-)을 거쳐 정착했다. ④ 현대 그리스어에는 직접 쓰이지 않으나 고전문헌학 연구에서 투사체 어원의 대표적례로 꼽힌다. 실명 인용: Beekes (EDG)."
      },
      {
        "g": "ἐποιχόμενος",
        "pos": "분사",
        "lemma": "ἐποίχομαι",
        "principalParts": "ἐποίχομαι – ἐποίσομαι – (미상) – (미상) – (미상) – (미상)",
        "parse": "pres.mid.part.sg.nom.m.",
        "gloss_kr": "다가가며, 찾아가며",
        "gloss_en": "approaching, visiting",
        "syntax": "LFG AVM 구조상 [PRED 'ἐποίχομαι<SUBJ>', TENSE pres, VOICE mid, ASPECT imperfective, SUBJ [PRED 'pro', GENDER m, NUMBER sg, CASE nom]]로 분석되며, 주절 주어 아폴론을 수식하는 동시상황 분사(circumstantial participle) 구문이다. 생성문법적으로는 [TP [VP ἐποιχόμενος ...]] 부사적 분사구로 통사적 위치를 점한다.",
        "background": "ἐποίχομαι는 '~에게 다가간다', '방문한다'는 뜻으로, 신이 인간에게 다가와 운명을 집행하는 모습을 생생하게 그린다. 아폴론이 헥토르에게 임하여 그의 시신을 지키고 보호하는 신성한 순행의 이미지를 담고 있다.",
        "etymology": "① 전치사 ἐπί('~에게, 향하여')와 어근 *ei-('가다')의 복합동사 ἴχομαι/οἴχομαι에서 유래한다. ② 동계어로 산스크리트어 éti('간다'), 라틴어 īre('가다'), 영어 입자 관련 어원들이 있다. ③ 그리스어 합성 동사 형성 및 현재분사 접미사(-μενο-) 결합 규칙을 거쳤다. ④ 고대 시가어에 주로 쓰인 후 축소되었다. 실명 인용: Chantraine (DELG)."
      },
      {
        "g": "κατέπεφνεν",
        "pos": "동사",
        "lemma": "καταφένω",
        "principalParts": "καταφένω – (미상) – κατέπεφνον – (미상) – (미상) – (미상)",
        "parse": "3rd.sg.aor.ind.act.",
        "gloss_kr": "쳐죽였다, 쓰러뜨렸다",
        "gloss_en": "killed, struck down",
        "syntax": "LFG AVM 구조상 [PRED 'καταφένω<SUBJ,OBJ>', TENSE past, ASPECT aor, VOICE act, SUBJ [PRED 'pro', PERS 3, NUM sg], OBJ [PRED 'pro']]로 분석된다. 전치사적 접두사 κατα와 중복거거형 아오리스 동사 어근이 결합하여 완성된 주절 술어이다.",
        "background": "κατέπεφνεν은 앞서 756행에서 다룬 'πέφνεν/ἔπεφνες'의 3인칭 아오리스 형태에 전치사 κατα-가 붙은 복합형태이다. 신이 인간의 생명을 거두어들이는 궁극적이고 치명적인 타격을 나타내며, 헬레네가 헥토르의 죽음 배후에 작용한 신의 섭리를 회고하는 절정을 이룬다.",
        "etymology": "① PIE 어근 *gʷhen-('치다, 살해하다')의 합성 복합거거형 형태에 전치사 *kata-('아래로, 완전히')가 결합한 구조이다. ② 동계어로 756행의 ἔπεφνες와 동일한 어근 계통을 공유한다. ③ 그리스어 구송 시가 전통 속에서 의미가 강화된 시적 완성형태로 고정되었다. ④ 인도유럽어족 살해·타격 관련 어휘 연구의 핵심 사례로 다뤄진다. 실명 인용: Frisk (GEW)."
      }
    ]
  },
  {
    "ref": "Iliad 24.760",
    "trans": "울며 이렇게 말하니, 그녀는 끊임없는 통곡을 자아냈다.",
    "words": [
      {
        "g": "ὣς",
        "pos": "부사",
        "lemma": "ὧς",
        "parse": "adv.",
        "gloss_kr": "이렇게, 이와 같이",
        "gloss_en": "thus, so",
        "syntax": "LFG 관점에서 ὣς는 양태 부사로서 [PRED 'ὧς', MODAL-TYPE manner] 자질을 가지며 분사 ἔφατο의 방식을 수식한다. 통사적으로 직접화법 직후에 위치하여 앞선 발화 전체를 가리키는 담화 지시어 역할을 한다.",
        "background": "ὣς ἔφατο는 호메로스 서사시 전반에서 인물의 연설이나 탄식이 끝났음을 알리는 가장 대표적인 정형구(formula) 표현이다. 청중으로 하여금 대화 장면에서 서사적 내레이션으로 시점이 전환됨을 명확히 인식시킨다.",
        "etymology": "① PIE 지시 대명사적 부사 어근 *swē-에서 유래한다. (758행 ὧς 참조)",
        "etymology": "① PIE 지시 대명사적 부사 어근 *swē-에서 유래한다. (758행 ὧς 참조)"
      },
      {
        "g": "ἔφατο",
        "pos": "동사",
        "lemma": "φημί",
        "principalParts": "φημί – φήσω – ἔφησα – (미상) – (미상) – (미상)",
        "parse": "3rd.sg.impf.ind.mid. (Homeric middle form)",
        "gloss_kr": "말하였다",
        "gloss_en": "she spoke",
        "syntax": "LFG AVM 구조상 [PRED 'φημί<SUBJ>', TENSE past, ASPECT impf, VOICE mid, SUBJ [PRED 'Helen', PERS 3, NUM sg, CASE nom]]로 분석된다. 주어는 헬레네(Ἑλένη)이며, 미완료중수동태 형태를 통해 발화 행위의 지속적 여운을 나타낸다.",
        "background": "ἔφατο(또는 ἔφη)는 직전까지 이어진 헬레네의 슬픈 애도 연설을 매듭짓는 필수적인 서사 정형구이다. 헬레네가 트로이아 성벽 위에서 헥토르를 추모하며 흘린 눈물과 탄식의 절정을 마무리한다.",
        "etymology": "① PIE 어근 *bʰeh₂-('말하다')에서 유래한다. (프롬프트 예시 φημί 항목 참조)",
        "etymology": "① PIE 어근 *bʰeh₂-('말하다')에서 유래한다. (프롬프트 예시 φημί 항목 참조)"
      },
      {
        "g": "κλαίουσα",
        "pos": "분사",
        "lemma": "κλαίω",
        "principalParts": "κλαίω – κλαύσομαι / κλαυσοῦμαι – ἔκλαυσα – (미상) – κκέκλαυμαι – ἐκλαύσθην",
        "parse": "pres.act.part.sg.nom.f.",
        "gloss_kr": "울면서, 눈물을 흘리며",
        "gloss_en": "weeping, crying",
        "syntax": "LFG 관점에서 κλαίουσα는 [PRED 'κλαίω<SUBJ>', TENSE pres, VOICE act, GENDER f, NUMBER sg, CASE nom] 자질을 지니며 주어(헬레네)의 부수적 상태를 나타내는 동시상황 분사(circumstantial participle)이다. 생성문법적으로는 [TP [VP κλαίουσα ...]] 부사구로 주절 술어를 수식한다.",
        "background": "κλαίουσα는 헬레네가 헥토르의 시신 앞에서 비통하게 눈물 흘리는 모습을 시각적으로 형상화한다. 일리아스 전반에서 그녀의 슬픔은 단순한 개인적 비탄을 넘어 트로이아 전체의 파멸을 슬퍼하는 집단적 비극의 상징성을 띤다.",
        "etymology": "① PIE 어근 *kleu-('소리치다, 울부짖다')와 연관되거나 의성어적 기원에서 파생된 것으로 추정된다. ② 동계어로 라틴어 clāmō('소리치다'), 영어 claim 등이 어원적 사촌격에 해당한다. ③ 그리스어 내부에 현재분사 접미사(-οντ- > -ουσ-) 결합 및 음운 단축 규칙을 거쳤다. ④ 현대 그리스어 κλαίω('울다')로 직계 계승되어 살아 있는 일상어이다. 실명 인용: Beekes (EDG)."
      },
      {
        "g": "γόον",
        "pos": "명사",
        "lemma": "γόος, γόου, ὁ",
        "parse": "sg.acc.m.",
        "gloss_kr": "통곡, 비탄의 소리",
        "gloss_en": "lamentation, wailing",
        "syntax": "LFG 관점에서 γόον은 타동사 ὄρινε의 직접 목적어로서 [PRED 'γόος', CASE acc, NUMBER sg, TH-ROLE PATIENT] 자질을 가진다. c-구조상 [VP [V' ὄρινε [DP γόον]]]의 통사 구조를 이룬다.",
        "background": "γόος는 죽은 자를 애도하며 부르는 의식적인 비탄의 노래나 통곡 소리를 뜻한다. 헬레네의 탄식에 이어 궁전 안의 여인들 전체가 함께 슬픔을 터뜨리며 비극적 정서의 파장을 확산시키는 매개체 역할을 한다.",
        "etymology": "① 의성어적 기원 또는 PIE 어근 *gʷou- / *gēu-('부르짖다, 울다') 계통에서 파생된 것으로 추정된다. ② 동계어로 고대 인도유럽어의 비탄·울음 관련 어휘들이 거론된다. ③ 그리스어 명사 패러다임(2변화 남성 명사) 규칙에 따라 대격 단수 형태로 정착했다. ④ 고전 문헌 및 비극 시가에 빈번히 쓰인 시적 어휘이다. 실명 인용: Chantraine (DELG)."
      },
      {
        "g": "δ᾽",
        "pos": "접속사",
        "lemma": "δέ",
        "parse": "coord.conj.",
        "gloss_kr": "그리고",
        "gloss_en": "and",
        "syntax": "HPSG 자질구조상 [HEAD conj, TYPE coordinating]으로 분석되며, 앞선 분사구와 주절 동사구 간의 매끄러운 순접/대조 연결을 담당하는 전접 접속사이다.",
        "background": "서사시의 문장 전개를 이어주는 가장 보편적인 접속사로, 헬레네의 눈물 흘림과 그로 인해 주변의 통곡이 촉발되는 인과적·서사적 전환을 긴밀하게 연결한다.",
        "etymology": "① PIE 연결 입자 *de에서 유래한다. (756행 δέ 참조)",
        "etymology": "① PIE 연결 입자 *de에서 유래한다. (756행 δέ 참조)"
      },
      {
        "g": "ἀλίαστον",
        "pos": "형용사",
        "lemma": "ἀλίαστος, ἀλίαστον",
        "parse": "sg.acc.m./f.",
        "gloss_kr": "끊임없는, 멈추지 않는, 쉼 없는",
        "gloss_en": "uncessant, unremitting",
        "syntax": "LFG 관점에서 ἀλίαστος는 [PRED 'ἀλίαστος', CASE acc, GENDER m/f, NUMBER sg] 자질을 지니며 목적어 명사 γόον을 수식하는 형용사 보충어이다. 통사적으로 [AP [A' ἀλίαστον]] 구조를 형성한다.",
        "background": "ἀλίαστος는 '물러서지 않는', '끊이지 않는' 뜻으로, 헥토르의 죽음 앞에 터져 나온 슬픔과 통곡이 그칠 줄 모르고 계속해서 이어지는 비극적 상황의 지속성을 시각·청각적으로 강조한다.",
        "etymology": "① 부정 접두사 ἀ-('~아닌')와 동사 λίζω / ἄζομαι('물러서다, 지치다')의 어근 결합으로 재구된다. ② 동계어로 인도유럽어족 내의 휴식·단념 관련 어휘들이 거론된다. ③ 그리스어 복합 형용사 형성 규칙을 거쳐 '끊임없는'이라는 시적 의미로 고정되었다. ④ 고전 시가어에 주로 쓰이며 후세 문헌 연구 대상이 되었다. 실명 인용: Frisk (GEW)."
      },
      {
        "g": "ὄρινε",
        "pos": "동사",
        "lemma": "ὀρίνω",
        "principalParts": "ὀρίνω – ὀρινῶ – ὤρινα – (미상) – (미상) – ὠρίνθην",
        "parse": "3rd.sg.impf.ind.act. (or aorist in Homeric contraction)",
        "gloss_kr": "불러일으켰다, 자극했다",
        "gloss_en": "roused, stirred up",
        "syntax": "LFG AVM 구조상 [PRED 'ὀρίνω<SUBJ,OBJ>', TENSE past, ASPECT impf/aor, VOICE act, SUBJ [PRED 'Helen's speech', CASE nom], OBJ [PRED 'γόος', CASE acc]]로 분석된다. 주어인 헬레네의 발화가 유발한 결과로서 통곡(γόον)을 객체로 지배하며, 생성문법적으로는 [TP [vP ὄρινε [VP γόον]]] 격 부여 구조를 갖는다.",
        "background": "ὀρίνω는 바람이나 감정이 '거세게 일으키다', '요동치게 하다'라는 뜻이다. 헬레네의 비통한 애도 연설이 궁전 안의 모든 사람들(특히 여인들과 원로들) 마음속에 묻어두었던 슬픔의 통곡을 거세게 되살려냈음을 묘사하며, 일리아스 대서사의 마지막 장을 장식하는 비극적 여운의 정점을 이룬다.",
        "etymology": "① PIE 어근 *er-('움직이다, 솟아오르다')에서 유래하며, 산스크리트어 ṛṇóti와 동계이다. ② 동계어로 라틴어 oriri('일어나다, 기원하다'), 영어 origin이 있다. ③ 그리스어 내부의 음운 변천과 자음 접미사 결합 과정을 거쳐 동사 체계로 정착했다. ④ 영어 origin, oriental 및 관련 어휘들의 직접적 조상이다. 실명 인용: Chantraine (DELG)."
      }
    ]
  },
  {
    "ref": "Iliad 24.761",
    "trans": "그러자 이어서 그들 중에서 헬레네가 세 번째로 애도를 시작했다.",
    "words": [
      {
        "g": "τῇσι",
        "pos": "대명사",
        "lemma": "ὅς, ἥ, ὅ",
        "parse": "pl.dat.f.",
        "gloss_kr": "그 여자들(에게)",
        "gloss_en": "to them",
        "syntax": "LFG 관점에서 τῇσι는 호칭·참여를 나타내는 여격(dative of participant)으로서 3인칭 복수 여성 대명사의 형태를 띠며, [PRED 'ὅς<OBJ>', CASE dat] 자질구조를 갖는다. c-구조상 부사적 여격구로서 동사구 외곽에 위치하며, 생성문법적으로는 [PP [P t] [DP τῇσι]]의 구조로 분석된다.",
        "background": "여기서 τῇσι(그 여자들)는 헤쿠바와 안드로마케를 가리키며, 헥토르의 시신 주위에 모여 슬퍼하는 여인들의 공동체적 애도 행렬을 구성한다. 헬레네가 이들의 애도에서 마지막(세 번째) 주자로 나서는 것은 그녀 자신의 복잡한 처지와 헥토르와의 특별한 유대를 부각시키는 서사적 장치다.",
        "etymology": "PIE 지시대명사 어근 *so-/*to-에서 유래하며, 그리스어 정관사 및 대명사 계열의 조상이다. 산스크리트어 *tās-*, 고딕어 *þōs*와 동계이며, 게르만어파의 정관사/지시대명사(영어 the, 독일어 der/die/das)와 어원을 같이 한다. Chantraine(DELG)에 따르면 호메로스어에서 지시대명사와 정관사의 기능이 아직 완전히 분리되지 않은 과도기적 용법을 보여 준다. 현대 그리스어에는 고전어 대명사의 잔재가 지시대명사 및 관사 체계로 이어져 있다."
      },
      {
        "g": "δ᾽",
        "pos": "접속사",
        "lemma": "δέ",
        "parse": "coord.conj.",
        "gloss_kr": "그리고, 반면에",
        "gloss_en": "and, but",
        "syntax": "HPSG 관점에서 δέ는 두 구절을 대등하게 연결하는 등위접속사로 [HEAD conj, COMPS < >] 자질을 가지며, 후접어(enclitic)로서 문장 내 두 번째 위치(Wackernagel's position)에 제약된다. 통사적으로 [CP [CP ...] δέ [CP ...]] 구조를 매개하며, 앞선 문장과의 대조적 의미 관계를 설정한다.",
        "background": "앞선 안드로마케의 애도가 끝나고 곧바로 헬레네의 애도로 장면이 전환됨을 매끄럽게 이어주는 접속사다. 호메로스 서사시에서 서사 단위를 교체하거나 인물의 발화를 이어갈 때 필수적으로 사용되는 전형적인 연결어다.",
        "etymology": "PIE 어원 확정이 어렵으나, 공간적·시간적 전진을 나타내는 입자에서 발전한 것으로 추정된다. Beekes(EDG)는 선그리스어 또는 인도유럽어 계통의 오래된 담화 표지로 본다. 라틴어 autem이나 고딕어 *þan* 등과 기능적으로 비교되나 직접적인 음운 동계어는 불명확하다. 직접 남은 형태는 고전 그리스어 및 비문 문헌에 국한되며 현대 그리스어에는 생존하지 않는다."
      },
      {
        "g": "ἔπειθ᾽",
        "pos": "부사",
        "lemma": "ἔπειτα",
        "parse": "adv.",
        "gloss_kr": "그리고 나서, 그 후에",
        "gloss_en": "then, thereafter",
        "syntax": "LFG 관점에서 ἔπειθ᾽는 시간적 순서를 지시하는 부사 부속어로 [ADJUNCT [PRED 'ἔπειτα', SEM time]] 기능을 수행하며, 후행 모음 앞에서 엘리전(elision)을 겪어 τ᾽로 표기되었다. 생성문법적으로는 [VP [AdvP ἔπειτα] [V' ...]]로 부가어(adjunct) 위치에 adjunction된다.",
        "background": "앞서 두 여인(안드로마케, 헤쿠바)의 애도가 있은 뒤에 헬레네가 비로소 애도의 대열에 합류하는 순차성을 명확히 드러낸다. 트로이아 장례식의 서사적 절정부에서 인물들의 순서 배치를 구조화하는 역할을 한다.",
        "etymology": "ἐπί('~ 위에, 후에')와 εἶτα('그 다음에는')의 합성어로, PIE 전치사 *epi와 지시사 어근의 결합에서 유래한다. Chantraine(DELG)은 이 단어의 형태론적 결합이 그리스어 내부에서 완성된 것으로 설명한다. 동계어로 산스크리트어 *ápi* 및 고대 슬라브어 *po* 등이 있다. 영어에는 직접 차용되지 않았으나 그리스어 합성어 요소를 통해 학술 용어에 반영되어 있다."
      },
      {
        "g": "Ἑλένη",
        "pos": "명사(고유)",
        "lemma": "Ἑλένη, Ἑλένης, ἡ",
        "parse": "sg.nom.f.",
        "gloss_kr": "헬레네",
        "gloss_en": "Helen",
        "syntax": "LFG 관점에서 Ἑλένη는 주절의 주어로서 [PRED 'Ἑλένη', CASE nom, θ-ROLE AGENT] 자질을 가지며, 동사 ἐξῆρχε와 인칭·수(3인칭 단수)가 일치한다. c-구조상 [IP Ἑλένηᵢ [I' ...]]의 주어 위치에 위치하며, 생성문법적으로 [vP Ἑλένη [v' ἐξῆρχε ...]]에서 주어가 VP 내에서 기저 생성되어 TP로 V-to-T 이동하거나 주어 자리로 이동한 것으로 분석된다.",
        "background": "스파르타의 왕비이자 트로이아 전쟁의 원인이 된 인물로, 헥토르 생전에는 그로부터 유일하게 따뜻한 보호와 이해를 받았던 대상이다. 그녀가 애도하는 장면은 자신의 처지에 대한 비탄과 헥토르에 대한 진심 어린 애정을 동시에 드러내는 일리아스 후반부의 감정적 정점이다.",
        "etymology": "PIE 어근 *wel-('돌다, 덮다') 또는 *swel-과 연관되어 '달빛' 혹은 '눈부시게 아름다운 여자'를 뜻하는 것으로 학계에서 논의된다. Beekes(EDG)는 비인도유럽어(선그리스어) 기층에서 유입된 지명 또는 신화적 인물 이름일 가능성을 배제하지 않는다. 동계어로 산스크리트어 *saranyu*(구름의 여신)를 들 수 있다. 영어 Helen, French Hélène으로 이어지며, 현대 그리스어에서도 여성 인명 Ἑλένη(엘레니)로 널리 쓰인다."
      },
      {
        "g": "τριτάτη",
        "pos": "형용사",
        "lemma": "τρίτος, τρίτη, τρίτον",
        "parse": "sg.nom.f.",
        "gloss_kr": "세 번째로",
        "gloss_en": "third",
        "syntax": "LFG 관점에서 τριτάτη는 주어 Ἑλένη의 주격 수식어로서 술어적 부사 구실을 하며, [PRED 'τρίτος', ADJ-TYPE secondary predicate, CASE nom, NUM sg, GEND f] 자질을 갖는다. c-구조상 [NP Ἑλένη]와 호응하는 보충어적 형용사구로 분석된다.",
        "background": "헤쿠바와 안드로마케에 이어 애도를 시작하는 순서가 세 번째임을 강조하여, 슬픔의 발화가 질서 정연하게 이루어지고 있음을 보여 준다. 호메로스 서사시의 전형적인 수치적 수사법을 드러낸다.",
        "etymology": "PIE 서수사 어근 *trito-('세 번째의')에서 유래하며, 기수사 *tri-('셋')에 접사가 결합한 형태이다. Chantraine(DELG)에 따르면 산스크리트어 *tṛtīya-*, 라틴어 *tertius*, 고딕어 *þridja*와 완벽한 음운론적 동계 관계를 이룬다. 그림 법칙과 버그의 법칙을 거쳐 게르만어파에서 *third*로 발전했다. 영어 third, 라틴어 계열 tertian 등과 동계이며, 현대 그리스어 τρίτος와 직접 이어짐."
      },
      {
        "g": "ἐξῆρχε",
        "pos": "동사",
        "lemma": "ἐξάρχω",
        "principalParts": "ἐξάρχω – ἐξάρξω – ἐξῆρξα – (미상) – (미상) – (미상)",
        "parse": "3rd.sg.impf.ind.act.",
        "gloss_kr": "선창했다, 시작했다",
        "gloss_en": "began, led off",
        "syntax": "LFG 관점에서 ἐξῆρχε는 주절의 술어로서 [PRED 'ἐξάρχω<SUBJ,OBJ>', TENSE past, ASPECT impf, SUBJ [PRED 'Ἑλένη'], OBJ [PRED 'γόος', CASE gen]] 자질 구조를 가진다. 목적격 대신 속격(γόοιο)을 지배하는 통사적 특성을 보이며, 생성문법적으로 [TP [T' ἐξῆρχε [vP t_subj [VP t_v γόοιο]]]]로 분석된다.",
        "background": "고대 그리스 장례 의식에서 애도나 비가를 선창(goos)하는 지도자적 역할을 뜻하는 전문 용어다. 헬레네가 수동적인 객체가 아니라 애가(thrēnos)의 주도적 주체로서 목소리를 내는 순간을 포착한다.",
        "etymology": "ἐκ('밖으로')과 ἄρχω('시작하다, 지배하다')의 합성어로, PIE 어근 *h₂erk-('잡다, 통치하다')에서 유래한다. Beekes(EDG)와 Chantraine(DELG)은 ἄρχω의 어근이 인도유럽어 공통의 권력 및 시작을 뜻하는 어휘에서 발전했다고 본다. 영어 arch-, monarch(< μόνος + ἄρχω) 등의 어근과 동계이며, 현대 그리스어 αρχή('시작, 권력')와 이어진다."
      },
      {
        "g": "γόοιο",
        "pos": "명사",
        "lemma": "γόος, γόου, ὁ",
        "parse": "sg.gen.m. (Homeric long-vowel genitive)",
        "gloss_kr": "애도, 통곡",
        "gloss_en": "lament, wailing",
        "syntax": "LFG 관점에서 γόοιο는 동사 ἐξῆρχε의 속격 목적어를 지배하며, [PRED 'γόος', CASE gen, θ-ROLE THEME] 자질을 갖는다. c-구조상 [NP γόοιο]는 동사의 보충어로 기능하며, 호메로스 특유의 장모음 속격(-οιο) 형태를 취한다. 생성문법적으로 [VP V [DP γόοιο]] 구성을 이룬다.",
        "background": "장례식에서 부르는 비가와 통곡을 의미하며, 단순한 슬픔의 표현을 넘어 죽은 자의 업적을 기리고 비극성을 극대화하는 의식적 행위다. 헬레네의 입을 통해 터져 나오는 이 통곡은 트로이아 전체의 비극을 응축한다.",
        "etymology": "PIE 어근 *gow-('울부짖다, 소리치다')에서 유래한 의성어 계열 명사로, Chantraine(DELG)은 고대 그리스어 동사 γόος의 형성과정을 설명한다. 산스크리트어 *gu-* 계열 및 게르만어파의 울음소리 관련 어휘들과 음운적 유사성을 보인다. 현대 그리스어에는 고어 형태로만 잔존하며 일상어에서는 쓰이지 않는다."
      }
    ]
  },
  {
    "ref": "Iliad 24.762",
    "trans": "헥토레이, 내 마음에 시동생들 중 그 누구보다도 훨씬 더 소중했던 이여,",
    "words": [
      {
        "g": "Ἕκτορ",
        "pos": "명사(고유)",
        "lemma": "Ἕκτωρ, Ἕκτορος, ὁ",
        "parse": "sg.voc.m.",
        "gloss_kr": "헥토르여",
        "gloss_en": "O Hector",
        "syntax": "LFG 관점에서 Ἕκτορ는 직접 호격(vocative)으로서 통사 구조 바깥에 독립된 담화 표지구 [PRED 'Ἕκτωρ', CASE voc]로 분석되며, 문장 내부의 논항 구조에는 직접 참여하지 않는다. 생성문법적으로는 [CP [DP Ἕκτορᵢ] [C' ...]]와 같이 좌측 주변부(Left Periphery)의 호격 구(Vocative Phrase)에 위치한다.",
        "background": "트로이아의 위대한 수호자이자 헬레네를 유일하게 비난하지 않고 감싸주었던 헥토르를 향한 헬레네의 애끓는 호명이다. 전쟁의 비극 속에서 두 사람 사이에 존재했던 깊은 연민과 신뢰를 함축한다.",
        "etymology": "어근 *heg- 또는 *segh-('붙잡다, 지탱하다')에서 파생되어 '도시를 지탱하는 자'라는 의미를 지닌다. Beekes(EDG)와 Chantraine(DELG)은 이 이름이 호메로스 서사시를 위해 발명되었거나 오랜 인도유럽어 명명 관버버에 기원한다고 본다. 히타이트어 기록의 인명과의 연관성은 명확하지 않다. 영어 Hector 및 현대 그리스어 인명 Ἕκτωρ으로 이어진다.",
        "principalParts": "해당없음"
      },
      {
        "g": "ἐμῷ",
        "pos": "형용사",
        "lemma": "ἐμός, ἐμή, ἐμόν",
        "parse": "sg.dat.m.",
        "gloss_kr": "나의",
        "gloss_en": "my",
        "syntax": "LFG 관점에서 ἐμῷ는 소유 형용사로서 명사 θυμῷ를 수식하며, [PRED 'ἐμός', SPECIFIER +, CASE dat, NUM sg, GEND m] 자질을 갖는다. c-구조상 [DP [Spec DP ἐμῷ] [NP θυμῷ]]의 한정어 자리를 점하며, 성·수·격 일치 제약을 만족한다.",
        "background": "헬레네가 자신의 가장 깊은 내면(θυμός)을 강조하며 헥토르와의 개인적이고 정서적인 유대를 드러내는 표현이다. 파리스의 아내라는 공인된 신분과 달리, 마음속 진정한 유대는 헥토르와 있었음을 고백한다.",
        "etymology": "PIE 1인칭 대명사 속격형 *me-에서 파생된 소유 형용사로, 그리스어 내에서 접사 *-mo-가 결합해 형성되었다. Chantraine(DELG)에 따르면 산스크리트어 *mama* 및 라틴어 *meus*와 동계이다. 영어 my 및 라틴어계 소유 대명사 체계와 계통을 같이 하며, 현대 그리스어 소유 대명사 ἐμός/μου의 기원이 된다."
      },
      {
        "g": "θυμῷ",
        "pos": "명사",
        "lemma": "θυμός, θυμοῦ, ὁ",
        "parse": "sg.dat.m.",
        "gloss_kr": "마음속에, 영혼에",
        "gloss_en": "in heart, soul",
        "syntax": "LFG 관점에서 θυμῷ는 처소적 여격(dative of place/locative)으로서 [PRED 'θυμός', CASE dat, θ-ROLE LOCATIVE] 자질을 가지며, 형용사 ἐμῷ의 수식을 받는다. 생성문법적으로는 [PP [P t] [DP θυμῷ]] 구조를 이루어 심리적 상태의 영역을 한정한다.",
        "background": "호메로스 심리학에서 θυμός는 감정, 생명력, 의지가 거주하는 내면의 중심 자리를 뜻한다. 헬레네가 자신의 가장 깊은 영혼의 결에서 헥토르를 기억하고 있음을 선언하는 핵심 단어다.",
        "etymology": "PIE 어근 *dhuH-('숨쉬다, 연기 나다, 격노하다')에서 유래하며, '숨, 생기, 마음'으로 의미가 전이되었다. Beekes(EDG)와 Chantraine(DELG)은 라틴어 *fumus*(연기)와 리투아니아어 *dūmai* 등과의 동계 관계를 입증한다. 영어 fume, thymol 등의 어휘 및 고대 의학 용어의 기원이 되며, 현대 그리스어 θυμός('분노, 성질')로 의미가 변화하여 남아 있다."
      },
      {
        "g": "δαέρων",
        "pos": "명사",
        "lemma": "δαήρ, δαέρος, ὁ",
        "parse": "pl.gen.m.",
        "gloss_kr": "시동생들 중에서",
        "gloss_en": "among brothers-in-law",
        "syntax": "LFG 관점에서 δαέρων는 부분격 속격(partitive genitive)으로서 [PRED 'δαήρ', CASE gen, θ-ROLE PARTITIVE] 자질을 갖는다. 최상급 형용사 φίλτατε의 비교 집단을 한정하며, 생성문법적으로 [DP [DP φίλτατε] [PP of [DP δαέρων]]]의 소유·부분 관계를 구성한다.",
        "background": "프리아모스의 아들들, 즉 파리스의 형제들이자 헬레네의 시동생들을 가리킨다. 이 집단 속에서 헥토르가 유일하게 가장 사랑스러웠다는 대조를 통해 헬레네가 처한 궁궐 내 인간관계를 드러낸다.",
        "etymology": "PIE 어근 *dayēr-('남편의 형제, 시동생')에서 유래하며 인도유럽어족 전반에 걸쳐 친족 호칭으로 보존된다. Chantraine(DELG)과 Beekes(EDG)에 따르면 산스크리트어 *devar-*, 라틴어 *lēvir*, 리투아니아어 *dieveris*와 완벽한 음운 대응을 보인다. 그림 법칙의 적용 대상이며, 영어에는 직계 동계어가 소실되었으나 슬라브어파와 로망스어파 등지에 광범위하게 잔존한다."
      },
      {
        "g": "πολὺ",
        "pos": "부사",
        "lemma": "πολύς, πολλή, πολύ",
        "parse": "sg.neut.acc. as adv.",
        "gloss_kr": "훨씬, 대단히",
        "gloss_en": "much, far",
        "syntax": "LFG 관점에서 πολὺ는 최상급 형용사 φίλτατε를 수식하는 정도 부사(adverb of degree)로 [PRED 'πολύS', ADJ-TYPE degree] 기능을 수행한다. c-구조상 [AP [AdvP πολὺ] [A' φίλτατε]] 구조를 형성한다.",
        "background": "단순한 비교를 넘어 다른 모든 시동생들과 헥토르 사이의 격차를 극적으로 벌려주는 강조 수사다. 헬레네의 애정이 얼마나 절대적이었는지를 수량적으로 증폭시킨다.",
        "etymology": "PIE 어근 *pelh₁-('채우다, 많다')에서 유래하며, e급/영급 교체를 보여준다. Beekes(EDG)와 Chantraine(DELG)에 따르면 산스크리트어 *puru-*, 고딕어 *filu*와 동계이다. 영어 full, polel-, poly- 등의 접두사 기원이 되며, 현대 그리스어 πολύ('많이')로 직계 계승된다."
      },
      {
        "g": "φίλτατε",
        "pos": "형용사",
        "lemma": "φίλος, φίλη, φίλον",
        "parse": "sg.voc.m. superlative",
        "gloss_kr": "가장 사랑하는 이여",
        "gloss_en": "most beloved",
        "syntax": "LFG 관점에서 φίλτατε는 최상급 호격 형용사로서 [PRED 'φίλος', DEGREE superlative, CASE voc, NUM sg, GEND m] 자질을 갖추고 호칭 Ἕκτορ를 수식 또는 동치한다. c-구조상 호격 구 안에서 명사를 수식하는 최상급 서술어구로 분석된다.",
        "background": "파리스의 형제들이자 수많은 시동생들 가운데 헥토르가 그녀에게 정신적으로 가장 소중하고 친밀한 존재였음을 고백하는 찬사이자 애도다. 트로이아에서 그녀가 겪은 고립 속에서 유일한 안식처였음을 보여 준다.",
        "etymology": "PIE 어근 *phil-('사랑하다, 친애하다') 또는 명사 *bʰil-에서 유래하는 것으로 논의되나, Beekes(EDG)는 어원의 불확실성으로 인해 선그리스어 기층 어휘 가능성도 제기한다. Chantraine(DELG)은 고대 그리스어 내부에서 애칭 접미사 *-tatos가 결합한 최상급 형용사 형성으로 설명한다. 영어 philo-, philosophy 등의 어근으로 쓰이며, 현대 그리스어 φίλος('친구')와 밀접한 연관이 있다."
      },
      {
        "g": "πάντων",
        "pos": "형용사",
        "lemma": "πᾶς, πᾶσα, πᾶν",
        "parse": "pl.gen.m.",
        "gloss_kr": "모든 이들보다",
        "gloss_en": "of all",
        "syntax": "LFG 관점에서 πάντων는 최상급 형용사(φίλτατε)가 지배하는 비교 기준 속격(genitive of comparison)으로서 [PRED 'πᾶς', CASE gen, θ-ROLE STANDARD] 자질을 갖는다. 생성문법적으로 [DP φίλτατε [PP than [DP πάντων]]]의 비교 구문 구조를 이룬다.",
        "background": "모든 시동생들을 총칭하여 그 누구도 예외 없이 헥토르와 비교될 수 없음을 강조한다. 헬레네의 시선에서 트로이아 궁정의 남성들 전체와 헥토르의 절대적 우월성을 대비시킨다.",
        "etymology": "PIE 어근 *peh₂nt-('모든, 전체의')에서 유래하며, 산스크리트어 동계어는 확인이 까다로우나 게르만어파의 *faina-* 등과 비교된다. Chantraine(DELG)에 따르면 그리스어 음운 변화를 거쳐 전형적인 총칭 대명사/형용사로 정착했다. 영어 pan-, pantheon 등의 접두사 기원이 되며, 현대 그리스어 πάντες/όλοι로 이어진다."
      }
    ]
  },
  {
    "ref": "Iliad 24.763",
    "trans": "실로 나의 남편은 신처럼 아름다운 알렉산드로스이지만,",
    "words": [
      {
        "g": "ἦ",
        "pos": "소사",
        "lemma": "ἦ",
        "parse": "discourse.particle",
        "gloss_kr": "실로, 참으로",
        "gloss_en": "truly, indeed",
        "syntax": "HPSG 관점에서 ἦ는 문장 부사 또는 담화 표지로서 [HEAD particle, MOD clause] 자질을 가지며, 진리치나 발화의 확실성을 강조하는 기능을 수행한다. c-구조상 [CP [C' ἦ [IP ...]]]의 최상위 좌측에 부착된다.",
        "background": "자신의 공식 남편인 파리스(알렉산드로스)를 언급하기 앞서 강한 어조로 진실을 환기하는 수사적 장치다. 외모와 실제 인격·역할 사이의 극명한 아이러니를 도입하는 전조가 된다.",
        "etymology": "PIE 감탄사 및 확증 입자 *ē에서 유래하며, 고대 그리스어 진술 강조 소사로 정착했다. Chantraine(DELG)에 따르면 호메로스어에서 서사적 진정성을 부여하는 데 빈번히 사용된다. 다른 인도유럽어에서는 음운적으로 마멸되었으나 그리스어 문헌학에서 그 용법이 상세히 연구되어 있다."
      },
      {
        "g": "μέν",
        "pos": "소사",
        "lemma": "μέν",
        "parse": "correlative.particle",
        "gloss_kr": "한편으로는, 비록 ~이지만",
        "gloss_en": "on the one hand",
        "syntax": "HPSG 관점에서 μέν는 대조 접속 소사로서 [HEAD particle, DEPENDENCY correlative] 자질을 가지며, 후행하는 δέ(764행 등 혹은 대조 구문)와 상응 관계를 이룬다. c-구조상 문장 내 두 번째 위치에 위치하여 초점(focus)을 표시한다.",
        "background": "남편인 파리스의 외모적 장점(신과 같은 아름다움)을 인정하면서도, 곧이어 이어질 비판이나 비극적 대비를 예고하는 양보적·대조적 구문의 전반부를 구성한다.",
        "etymology": "PIE 입자 *men에서 유래하며, 강조 및 대조 기능을 담당한다. Beekes(EDG)와 Chantraine(DELG)은 이 입자가 고대 그리스어의 담화 구조화에 핵심적인 역할을 한다고 설명한다. 라틴어 immo 등과 기능적으로 비교되며, 고전 그리스어 전반에 걸쳐 광범위하게 쓰였다."
      },
      {
        "g": "μοι",
        "pos": "대명사",
        "lemma": "ἐγώ",
        "parse": "sg.dat.comitative/possessive",
        "gloss_kr": "나에게, 나의",
        "gloss_en": "to me, my",
        "syntax": "LFG 관점에서 μοι는 소유 여격 또는 이익의 여격(dative of possession/interest)으로서 [PRED 'ἐγώ', CASE dat, θ-ROLE BENEFICIARY/POSSESSOR] 자질을 갖는다. c-구조상 [IP [PP μοι] [I' πόσις ἐστὶν ...]] 형태로 주어 명사구의 소유 관계를 나타낸다.",
        "background": "공식적으로 파리스가 '나의 남편'이라는 점을 객관적 사실로 인정하는 대목이다. 그러나 이 소유격/여격 표현은 마음에 품은 헥토르와의 대비 속에서 비극적 아이러니를 자아낸다.",
        "etymology": "PIE 1인칭 단수 대명사 여격형 *moi에서 유래하며, 인도유럽어족 전반에 걸쳐 일치한다. Chantraine(DELG)에 따르면 산스크리트어 *me*, 라틴어 *mihi*와 동계이다. 영어 me 및 로망스어파의 1인칭 여격 대명사와 계통을 같이 하며, 현대 그리스어 μου로 직계 계승된다."
      },
      {
        "g": "πόσις",
        "pos": "명사",
        "lemma": "πόσις, πόσιος, ὁ",
        "parse": "sg.nom.m.",
        "gloss_kr": "남편",
        "gloss_en": "husband",
        "syntax": "LFG 관점에서 πόσις는 주절의 주어로서 [PRED 'πόσις', CASE nom, θ-ROLE THEME] 자질을 가지며, 계사 ἐστὶν과 결합하여 술어 명사구(subject)를 형성한다. 생성문법적으로 [TP πόσις [T' ἐστὶν [vP t]]] 구조로 분석된다.",
        "background": "아내로서 부르는 남편의 호칭이지만, 전쟁을 일으킨 당사자이자 무력한 파리스를 가리킬 때 사용되어 영웅적 덕목을 지닌 헥토르와 대비되는 비판적 함의를 담고 있다.",
        "etymology": "PIE 어근 *pótis('주인, 남편')에서 유래하며, '집안의 주인'을 뜻한다. Beekes(EDG)와 Chantraine(DELG)은 산스크리트어 *pati-*, 라틴어 *potis*(~할 수 있는, 주인), 리투아니아어 *pats*와 완벽한 동계어임을 밝힌다. 영어 potent, despot(< δεσπότης) 등의 어근과 동계이며, 고대 그리스어의 법률 및 친족 어휘의 기초를 이룬다."
      },
      {
        "g": "ἐστὶν",
        "pos": "동사",
        "lemma": "εἰμί",
        "principalParts": "εἰμί – ἔσομαι – (미상) – (미상) – (미상) – (미상)",
        "principalParts": "εἰμί – ἔσομαι – (미상) – (미상) – (미상) – (미상)",
        "parse": "3rd.sg.pres.ind.act.",
        "gloss_kr": "~이다",
        "gloss_en": "is",
        "syntax": "LFG 관점에서 ἐστὶν는 계사(copula)로서 [PRED 'εἰμί<SUBJ,ATTR>', TENSE present, ASPECT impf/state, SUBJ [PRED 'πόσις'], ATTR [PRED 'Ἀλέξανδρος']] 자질 구조를 갖는다. c-구조상 주어와 주격 보어를 매개하는 역할을 하며, 후행 모음 앞에서 음운론적 은닉(N-ephelisticum)을 수반한다.",
        "background": "현재시제를 사용하여 파리스가 현재 자신의 법적 남편이라는 변할 수 없는 현실을 규정한다. 그러나 이 현실적 사실은 그녀가 진정으로 원하는 바와 괴리되어 비극성을 심화시킨다.",
        "etymology": "PIE 계사 어근 *h₁es-('이다, 존재하다')에서 유래한다. Beekes(EDG)와 Chantraine(DELG)에 따르면 산스크리트어 *asti*, 라틴어 *est*, 고딕어 *ist*와 완벽한 음운 대응을 이룬다. 그림 법칙 및 베르너의 법칙과 관련된 인도유럽어 비교언어학의 대표적 표준 단어이다. 영어 is, 독일어 ist와 동계이며, 현대 그리스어 εἶναι로 이어진다."
      },
      {
        "g": "Ἀλέξανδρος",
        "pos": "명사(고유)",
        "lemma": "Ἀλέξανδρος, Ἀλεξάνδρου, ὁ",
        "parse": "sg.nom.m.",
        "gloss_kr": "알렉산드로스(파리스)",
        "gloss_en": "Alexander (Paris)",
        "syntax": "LFG 관점에서 Ἀλέξανδρος는 계사구의 주격 보어(predicate nominative)로서 [PRED 'Ἀλέξανδρος', CASE nom, θ-ROLE ATTRIBUTE] 자질을 갖는다. c-구조상 [IP πόσις ἐστὶν Ἀλέξανδρος]의 주어와 상호 지시적(coreferential) 관계를 맺는다.",
        "background": "파리스의 본명인 알렉산드로스로, 호메로스 서사시에서 그의 영웅적이지 못한 면모와 대조되는 화려한 이름을 뜻한다. 헬레네가 그를 남편으로 지칭할 때 파리스라는 애칭 대신 이 이름을 씀으로써 객관적이고 거리감 있는 태도를 취한다.",
        "etymology": "ἀλέξω('방어하다, 물리치다')와 ἀνδρός(aner, '남자, 전사')의 합성어로 '인간들을 방어하는 자'라는 뜻이다. Chantraine(DELG)과 Beekes(EDG)에 따르면 미케네어 선문자 B *A-re-ka-sa-da-ra*(여성형 알렉산드라)로 이미 존재했던 유서 깊은 인도유럽어 명명법이다. 히타이트 기록의 *Alakšandu*(윌루사의 군주)와 동명이인으로 역사적 언어학 연구에서 중요하게 다뤄진다. 영어 Alexander 및 현대 그리스어 Ἀλέξανδρος로 직계 계승된다."
      },
      {
        "g": "θεοειδής",
        "pos": "형용사",
        "lemma": "θεοειδής, θεοειδές",
        "parse": "sg.nom.m.",
        "gloss_kr": "신과 같은 모습을 한, 용모가 수려한",
        "gloss_en": "godlike in appearance",
        "syntax": "LFG 관점에서 θεοειδής는 Ἀλέξανδρος를 수식하는 형용사구의 술어로서 [PRED 'θεοειδής', CASE nom, NUM sg, GEND m] 자질을 갖는다. c-구조상 [AP Ἀλέξανδρος [AP θεοειδής]]의 구조로 외견상의 아름다움을 묘사한다.",
        "background": "파리스의 외모가 신들처럼 빼어나게 아름답다는 점을 인정하는 수식어다. 그러나 이 외모의 수려함이 내면적 용기나 책임감과 일치하지 않음을 암시하는 반어적 뉘앙스를 품는다.",
        "etymology": "θεός('신')와 εἶδος('모습, 형상')의 합성어로, PIE 어근 *dʰes-('신성한')와 *weyd-('보다, 알다')의 결합에서 유래한다. Beekes(EDG)와 Chantraine(DELG)은 이 단어가 호메로스 시가에서 영웅들의 외모를 찬양하는 전형적인 정형구 형용사로 쓰인다고 설명한다. 영어 idea, video(< *weyd-) 등의 어근과 간접적 연관이 있으며, 고전 그리스어 이후 기독교 문헌에서 '신과 닮은'이라는 종교적 의미로 전이되었다."
      }
    ]
  },
  {
    "ref": "Iliad 24.764",
    "trans": "그가 나를 트로이아로 데려왔으니 차라리 그전에 내가 죽었어야 했는데.",
    "words": [
      {
        "g": "ὅς",
        "pos": "대명사",
        "lemma": "ὅς, ἥ, ὅ",
        "parse": "sg.nom.m. relative",
        "gloss_kr": "그는 (그리고 그가)",
        "gloss_en": "who",
        "syntax": "LFG 관점에서 ὅς는 관계절의 주어로서 [PRED 'ὅς', REL-CORR Ἀλέξανδρος, CASE nom, TH-ROLE AGENT] 자질을 가지며, 후행하는 절을 선행사 Ἀλέξανδρος에 결속시킨다. 생성문법적으로는 [CP [DP ὅςᵢ] [C' [IP tᵢ ἄγαγε ...]]]의 이동과 연쇄를 형성한다.",
        "background": "자신을 스파르타에서 트로이아로 유괴해 온(또는 데려온) 파리스의 행동을 주어로 삼아 전쟁의 근본 원인을 환기한다. 이 대목에서 헬레네는 자신의 운명이 파리스의 선택에 의해 틀어졌음을 한탄한다.",
        "etymology": "PIE 관계대명사/지시대명사 어근 *yo-에서 유래하며, 그리스어에서 관계대명사 체계의 기초를 이룬다. Chantraine(DELG)에 따르면 산스크리트어 *ya-*와 완벽한 동계어이며, 호메로스어에서 지시적 용법과 관계적 용법이 교차한다. 현대 그리스어에서는 관계대명사 체계가 재편되어 직접 쓰이지 않는다."
      },
      {
        "g": "μ᾽",
        "pos": "대명사",
        "lemma": "ἐγώ",
        "parse": "sg.acc.",
        "gloss_kr": "나를",
        "gloss_en": "me",
        "syntax": "LFG 관점에서 μ᾽는 동사 ἄγαγε의 목적어로서 [PRED 'ἐγώ', CASE acc, θ-ROLE PATIENT] 자질을 가지며, 모음 앞에서 엘리전되어 ᾽로 표기되었다. 생성문법적으로 [VP ἄγαγε [DP μ᾽]]의 내부항 구조를 이룬다.",
        "background": "파리스에 의해 객체로서 트로이아로 끌려오게 된 자신의 무력한 처지를 드러낸다. 자발적 도망이었든 유괴였든 간에 트로이아 비극의 중심에 자신이 강제로 연루되었음을 강조한다.",
        "etymology": "PIE 1인칭 단수 대명사 대격형 *me에서 유래하며, 인도유럽어족 전반에 걸쳐 보존된다. Chantraine(DELG)에 따르면 산스크리트어 *mām*, 라틴어 *mē*와 동계이다. 영어 me 및 로망스어파의 대격 대명사와 계통을 같이 하며, 현대 그리스어 με로 직계 계승된다."
      },
      {
        "g": "ἄγαγε",
        "pos": "동사",
        "lemma": "ἄγω",
        "principalParts": "ἄγω – ἤξω – ἤγαγον – ἦχα – ἦγμαι – ἤχθην",
        "parse": "3rd.sg.aor.ind.act.",
        "gloss_kr": "데려왔다",
        "gloss_en": "brought",
        "syntax": "LFG 관점에서 ἄγαγε는 관계절의 술어로서 [PRED 'ἄγω<SUBJ,OBJ,OBL>', TENSE past, ASPECT aor, MOOD ind, SUBJ [PRED 'ὅς'], OBJ [PRED 'ἐγώ']] 자질 구조를 갖는다. c-구조상 과도거(aorist) 어간과 증강(augment)을 동반하여 과거의 단회적 사건을 서술한다.",
        "background": "스파르타에서 트로이아로 건너오게 된 결정적 사건을 서술하는 동사다. 이 이동 하나로 인해 수많은 영웅들이 목숨을 잃고 트로이아가 파멸의 길로 접어들었음을 함축한다.",
        "etymology": "PIE 어근 *h₂eǵ-('이끌다, 몰다')에서 유래하며, 그리스어 전반에 걸쳐 이동과 행위를 나타내는 기본 어휘다. Beekes(EDG)와 Chantraine(DELG)에 따르면 산스크리트어 *ajati*, 라틴어 *agere*, 고딕어 *akan*과 완벽한 음운 대응을 이룬다. 그림 법칙에 따라 게르만어파에서 *ake*- 계통으로 발전했다. 영어 act, agent, synagogue(< σύν + ἄγω) 등의 어근이 되며, 현대 그리스어 άγω/άγομαι로 이어진다."
      },
      {
        "g": "Τροίηνδ᾽",
        "pos": "명사(고유)",
        "lemma": "Τροία, Τροίας, ἡ",
        "parse": "sg.acc.f. + directional suffix -δε",
        "gloss_kr": "트로이아로",
        "gloss_en": "to Troy",
        "syntax": "LFG 관점에서 Τροίηνδ᾽는 방향을 나타내는 목적격 명사구에 방향 접사 -δε가 결합한 형태로서 [PRED 'Τροία', CASE acc, DIRECTIONAL +, θ-ROLE GOAL] 자질을 갖는다. 생성문법적으로 [PP [P Τροίην] [DegP -δε]] 또는 부사적 목적격 구로 분석된다.",
        "background": "유괴 또는 도주의 최종 목적지이자, 앞으로 파멸을 맞이할 저주받은 도시 트로이아를 가리킨다. 헬레네가 이 도시에 도착한 것이 모든 비극의 시작점이었음을 공간적으로 확정한다.",
        "etymology": "그리스어 지명 Τροία로, 선그리스어(Pre-Greek) 기층 지명에서 유래했을 가능성이 높으며 히타이트어 기록의 *Wiluša* 또는 *Taruisa*와 연관성이 논의된다. Beekes(EDG)는 지명의 기층적 성격을 강조하며 PIE 고유 어원 설정을 유보한다. 영어 Troy, 프랑스어 Troie 등으로 이어지며, 현대 그리스어 Τροία로 남았다. 접사 -δε는 인도유럽어 방향 지시 부사형 접미사의 화석화된 형태이다."
      },
      {
        "g": "ὡς",
        "pos": "부사",
        "lemma": "ὡς",
        "parse": "adv. (modal/exclamatory)",
        "gloss_kr": "아, 차라리",
        "gloss_en": "how, would that",
        "syntax": "HPSG 관점에서 ὡς는 감탄 또는 소망을 유도하는 양태 부사로서 [HEAD adv, MOD clause] 자질을 갖추며, 직설법 미완료 과거와 결합하여 실현되지 못한 과거의 소망(unrealized past wish)을 표현한다. c-구조상 [CP [C' ὡς [IP ...]]]의 감탄절 구조를 이끈다.",
        "background": "과거로 돌아가 그날 트로이아로 오지 않았어야 했다는 뼈저린 후회와 탄식을 자아내는 감탄사다. 헬레네의 비탄이 절정에 달했음을 보여주는 수사적 장치다.",
        "etymology": "PIE 지시대명사/관계대명사 어근에서 발전한 부사로, 방법 및 정도를 나타낸다. Chantraine(DELG)에 따르면 호메로스어에서 감탄 및 비교 용법으로 분화되었다. 다른 인도유럽어 동계어와의 직접 비교보다는 그리스어 내부의 문법화 과정으로 설명된다."
      },
      {
        "g": "πρὶν",
        "pos": "부사",
        "lemma": "πρίν",
        "parse": "adv. / conjunction",
        "gloss_kr": "그보다 먼저, 차라리",
        "gloss_en": "before, rather",
        "syntax": "LFG 관점에서 πρὶν는 시간적 선행을 나타내는 부사 또는 접속사로서 [PRED 'πρίν', SEM time-prior] 자질을 가지며, 후행하는 부정사 ὀλέσθαι와 함께 '그 이전에 ~했어야 했다'는 선후 관계의 소망 구문을 이룬다.",
        "background": "파리스를 만나 트로이아로 오기 전의 시점을 가리키며, 그 당시 차라리 목숨을 잃었더라면 지금의 이 비극을 보지 않았을 것이라는 처절한 자책을 담고 있다.",
        "etymology": "PIE 전치사/부사 어근 *prei-('앞에, 먼저')에서 유래하며, 비교급 접미사와 연관된다. Chantraine(DELG)과 Beekes(EDG)에 따르면 산스크리트어 *prāk*, 라틴어 *prior*, *prīmus*와 동계이다. 영어 prior, prime 등의 어근과 깊은 연관이 있으며, 고대 그리스어의 시간적 선후 관계 표현의 핵심 어휘다."
      },
      {
        "g": "ὤφελλον",
        "pos": "동사",
        "lemma": "ὀφείλω",
        "principalParts": "ὀφείλω – ὀφειλήσω – ὠφείλησα – (미상) – (미상) – ὠφειλήθην",
        "parse": "1st.sg.impf.ind.act. (Homeric augment form for wish)",
        "gloss_kr": "~했어야만 했는데 (실제로는 그렇지 못함)",
        "gloss_en": "I ought to have, would that I had",
        "syntax": "LFG 관점에서 ὤφελλον는 실현되지 않은 과거 소망을 나타내는 조동사적 술어로서 [PRED 'ὀφείλω<SUBJ,COMP>', TENSE past, ASPECT impf, MOOD ind, SUBJ [PRED 'ἐγώ', PERS 1, NUM sg], COMP [PRED 'ὀλέσθαι']] 자질 구조를 갖는다. c-구조상 감탄 부사 ὡς와 결합하여 불가능한 소망문(unrealizable wish)을 통사적으로 완성한다.",
        "background": "과거에 이루어지지 못한 일에 대한 강렬한 아쉬움과 비탄을 나타내는 호메로스어의 대표적 표현이다. 헬레네가 자신의 존재 자체를 저주하며 과거로 시간을 되돌리고 싶어 하는 비극적 심정을 대변한다.",
        "etymology": "PIE 어근 *ophel-('빚지다, 채무가 있다, 자라나다')에서 유래하며, 의무와 당위에서 '마땅히 ~했어야 했다'는 소망의 의미로 의미 전이가 일어났다. Chantraine(DELG)과 Beekes(EDG)에 따르면 산스크리트어 및 타 인도유럽어와의 직접적 동계어 대비보다는 그리스어 내부의 독특한 양태 조동사화 과정을 거쳤다. 현대 그리스어에는 직계 형태가 소실되었으나 고전 고문헌 연구에서 소망문의 핵심 문법 요소로 다뤄진다."
      },
      {
        "g": "ὀλέσθαι",
        "pos": "부정사",
        "lemma": "ὄλλυμι",
        "principalParts": "ὄλλυμι – ὀλῶ – ὤλεσα – ὀλώλεχα – ὀλώλεμαι – (미상)",
        "parse": "aor.mid.inf.",
        "gloss_kr": "멸망하다, 죽다",
        "gloss_en": "to perish, to die",
        "syntax": "LFG 관점에서 ὀλέσθαι는 조동사 ὤφελλον의 보충어(COMP)인 부정사구의 핵심 술어로서 [PRED 'ὄλλυμι<SUBJ>', ASPECT aor, VOICE mid, SUBJ [PRED 'ἐγώ', PERS 1, NUM sg]] 자질 구조를 갖는다. c-구조상 [VP ὤφελλον [TP [VP ὀλέσθαι t]]]의 보충어 절을 형성하며, 중간태(middle voice)를 통해 주체가 자기 파멸의 경험을 겪음을 나타낸다.",
        "background": "파리스를 따라 트로이아로 오기 전에 차라리 목숨을 잃거나 비참하게 사라졌어야 했다는 헬레네의 궁극적인 자기 부정과 죽음에 대한 갈망을 표현한다. 헥토르의 죽음 앞에서 자신의 존재 이유를 상실한 자의 통곡이다.",
        "etymology": "PIE 어근 *h₃el-('파괴하다, 죽이다, 사라지다')에서 유래한다. Beekes(EDG)와 Chantraine(DELG)에 따르면 히타이트어 및 타 인도유럽어의 파괴 관련 어휘들과 비교되며, 그리스어 내부에서 접미사 *-nu-가 결합한 동사로 발전했다. 영어에는 직접 유래어가 드물지만 학술 용어의 파생어로 일부 남아 있다. 고대 그리스어 시가 문헌에서 파멸과 죽음을 뜻하는 가장 강력한 시적 어휘 중 하나다."
      }
    ]
  },
  {
    "ref": "Iliad 24.765",
    "trans": "어느덧 내게 이 스무 번째 해가 흘러갔구나,",
    "words": [
      {
        "g": "ἤδη",
        "pos": "부사",
        "lemma": "ἤδη",
        "parse": "adv.",
        "gloss_kr": "이미, 벌써",
        "gloss_en": "already",
        "syntax": "LFG 관점에서 ἤδη는 시간적 국면을 나타내는 부사로 [PRED 'ἤδη', SEM time-aspect] 기능을 수행하며, c-구조상 [VP [AdvP ἤδη] [V' ...]] 위치에 부가어(adjunct)로 참여한다. 생성문법적으로 [TP ἤδη [T' ...]]에서 시간 지시적 초점을 형성한다.",
        "background": "트로이아에 도착한 이후 얼마나 오랜 세월이 흘렀는지를 강조하는 시간적 표지다. 헬레네가 겪은 고통과 세월의 무게가 얼마나 무거운지 환기한다.",
        "etymology": "PIE 지시사 및 시제 어근에서 유래하여 그리스어 내에서 '이미, 벌써'라는 시간 부사로 정착했다. Chantraine(DELG)에 따르면 호메로스어 및 고전 그리스어에서 빈번히 쓰이는 담화 지시어이다. 현대 그리스어 ήδη('벌써')로 직계 계승된다."
      },
      {
        "g": "γὰρ",
        "pos": "소사",
        "lemma": "γάρ",
        "parse": "expl.conj.",
        "gloss_kr": "왜냐하면, 실로",
        "gloss_en": "for, indeed",
        "syntax": "HPSG 관점에서 γὰρ는 설명 또는 이유를 나타내는 후접어(enclitic) 소사로 [HEAD conj, SUB-TYPE explanatory] 자질을 갖는다. 문장 내 두 번째 위치(Wackernagel's position)에 제약되며, 앞선 탄식의 근거를 제시하는 절을 이끈다.",
        "background": "자신이 왜 그렇게 일찍 죽었어야 했는지에 대한 구체적인 시간적 근거를 설명하는 연결고리다. 트로이아에 머문 세월의 길이를 서술하며 비극성을 고조시킨다.",
        "etymology": "PIE 입자적 요소에서 유래한 것으로 추정되며, 그리스어 내부에서 인과 관계를 나타내는 담화 표지로 발전했다. Beekes(EDG)와 Chantraine(DELG)에 따르면 고전 그리스어의 문장 연결 구조에서 핵심적인 역할을 한다."
      },
      {
        "g": "νῦν",
        "pos": "부사",
        "lemma": "νῦν",
        "parse": "adv.",
        "gloss_kr": "지금, 현재",
        "gloss_en": "now",
        "syntax": "LFG 관점에서 νῦν는 발화시점(deictic center)을 지시하는 시간 부사로 [PRED 'νῦν', SEM time-deixis] 기능을 수행한다. c-구조상 [IP νῦν [I' ...]]의 주절 내에서 시간적 배경을 설정한다.",
        "background": "헥토르의 죽음이라는 현재의 비극적 순간과 자신이 트로이아에 발을 디딘 과거를 연결하는 시점 표지다. 세월의 흐름 끝에 남은 것이 파멸뿐임을 지적한다.",
        "etymology": "PIE 시간 부사 어근 *nu-('지금')에서 유래한다. Chantraine(DELG)과 Beekes(EDG)에 따르면 산스크리트어 *nu*, 라틴어 *nunc*, 고딕어 *nu*와 완벽한 음운 동계 관계를 이룬다. 그림 법칙을 거쳐 영어 now, 독일어 nun으로 발전했으며, 현대 그리스어 νῦν/τώρα로 이어진다."
      },
      {
        "g": "μοι",
        "pos": "대명사",
        "lemma": "ἐγώ",
        "parse": "sg.dat.ineffable/experiencer",
        "gloss_kr": "내게(는)",
        "gloss_en": "to me, for me",
        "syntax": "LFG 관점에서 μοι는 경험주 여격(dative of experiencer)으로서 [PRED 'ἐγώ', CASE dat, θ-ROLE EXPERIENCER] 자질을 가지며, 시간의 경과를 체감하는 주체를 나타낸다. c-구조상 [IP [PP μοι] [I' ...]] 구조를 이룬다.",
        "background": "세월의 흐름이 객관적인 달력상의 시간이 아니라, 자신이 직접 겪어낸 고통스러운 체험의 시간임을 강조하는 헬레네의 주관적 시점을 드러낸다.",
        "etymology": "PIE 1인칭 단수 대명사 여격형 *moi에서 유래하며, 그리스어 전반에 걸쳐 경험 및 소유의 여격으로 널리 쓰인다."
      },
      {
        "g": "τόδε",
        "pos": "대명사",
        "lemma": "ὅδε, ἥδε, τόδε",
        "parse": "sg.nom.n. demonstrative",
        "gloss_kr": "이",
        "gloss_en": "this",
        "syntax": "LFG 관점에서 τόδε는 지시 형용사로서 명사 ἔτος를 수식하며, [PRED 'ὅδε', SPECIFIER +, CASE nom, NUM sg, GEND n] 자질을 갖는다. c-구조상 명사구의 한정어 자리를 점하며 후행하는 명사와 일치한다.",
        "background": "바로 지금 눈앞에 펼쳐진 현실이자 자신이 겪은 세월을 직접적으로 지시하는 지시사다. 추상적인 시간이 아니라 구체적인 현실의 무게를 부여한다.",
        "etymology": "PIE 지시대명사 어근 *so-에 강조 입자 *-de가 결합한 형태이다. Chantraine(DELG)에 따르면 그리스어 특유의 현시적 지시사 체계를 형성한다."
      },
      {
        "g": "εἰκοστὸν",
        "pos": "형용사",
        "lemma": "εἰκοστός, εἰκοστή, εἰκοστόν",
        "parse": "sg.nom.n.",
        "gloss_kr": "스무 번째의",
        "gloss_en": "twentieth",
        "syntax": "LFG 관점에서 εἰκοστὸν는 서수 형용사로서 [PRED 'εἰκοστός', CASE nom, NUM sg, GEND n] 자질을 가지며, 명사 ἔτος를 수식한다. c-구조상 [NP τόδε [AP εἰκοστὸν] ἔτος]의 구조를 이룬다.",
        "background": "트로이아 전쟁이 발발하고 자신이 고향을 떠나 이 도시에 머문 지 정확히 20년이 되었음을 명시한다. 오디세이아와 일리아스가 공유하는 트로이아 전쟁의 전체 기간(10년의 전쟁 + 기타 기간 등 서사적 연대) 속에서 헬레네의 체류 기간을 확정한다.",
        "etymology": "기수사 *εἴκοσι('스물')에 파생 접사 *-stós가 결합한 서수사 형태이다. Beekes(EDG)와 Chantraine(DELG)에 따르면 인도유럽어족의 수사 파생 규칙을 충실히 따르며, 라틴어 *vīcēsimus* 등과 비교된다."
      },
      {
        "g": "ἔτος",
        "pos": "명사",
        "lemma": "ἔτος, ἔτους, τό",
        "parse": "sg.nom.n.",
        "gloss_kr": "해, 년",
        "gloss_en": "year",
        "syntax": "LFG 관점에서 ἔτος는 주절의 주격 보어(predicate nominative/subject complement)로서 [PRED 'ἔτος', CASE nom, NUM sg, GEND n] 자질을 가지며, 계사구의 핵심 명사 역할을 한다. 생성문법적으로 [TP τόδε εἰκοστὸν ἔτος [T' ἐστὶν [vP ...]]] 구조를 이룬다.",
        "background": "시간의 단위인 '해'를 뜻하며, 헬레네가 트로이아에 유폐되듯 살아온 긴긴 세월의 단위를 측정하는 척도다.",
        "etymology": "PIE 어근 *wet-('해, 년')에서 유래하며, 모음 사이의 *s 탈락 현상을 겪은 형태이다. Chantraine(DELG)과 Beekes(EDG)에 따르면 라틴어 *vetus*(나이 먹은, 낡은) 및 산스크리트어 *vatsa-*('송아지, 해')와 동계이다. 영어 wether(거세한 숫양) 등의 어근과 관련되며, 현대 그리스어 έτος('해, 년')로 직계 계승된다."
      },
      {
        "g": "ἐστὶν",
        "pos": "동사",
        "lemma": "εἰμί",
        "principalParts": "εἰμί – ἔσομαι – (미상) – (미상) – (미상) – (미상)",
        "parse": "3rd.sg.pres.ind.act.",
        "gloss_kr": "되어 있다, 흘렀다",
        "gloss_en": "is",
        "syntax": "LFG 관점에서 ἐστὶν는 계사로서 [PRED 'εἰμί<SUBJ,ATTR>', TENSE present, ASPECT state, SUBJ [PRED 'ἔτος']] 자질 구조를 가지며, 시간의 누적 상태를 현재 시제로 포착한다.",
        "background": "과거에 시작된 세월이 현재까지 끊어지지 않고 이어져 있음을 나타내며, 헬레네의 비극이 일시적인 사건이 아니라 삶의 대부분을 채운 지속적 현실임을 강조한다.",
        "etymology": "PIE 계사 어근 *h₁es-에서 유래한 형태 (앞서 763행의 ἐστὶν 항목 참조)."
      }
    ]
  },
  {
"ref": "Iliad 24.766",
"trans": "내가 저곳에서 떠나 나의 고향을 떠나온 이후로,",
"words": [
{
"g": "ἐξ",
"pos": "전치사",
"lemma": "ἐκ",
"parse": "prep.+gen.",
"gloss_kr": "~로부터",
"gloss_en": "from",
"syntax": "속격(genitive) 명사구를 지배하여 기점(source)의 의미를 부여하는 전치사이다. LFG f-구조에서 [OBL-FROM [PRED 'ἐκ', OBJ [PRED 'πάτρα', CASE gen]]]로 자질이 할당되며, 통사적 기저에서 출발점의 위치 격 지배를 실현한다.",
"background": "시간적·공간적 기점을 나타내는 전형적인 용법으로, 스파르타를 떠나 트로이아에 온 과거의 결정적 순간을 가리킨다. 화자(헬레네)가 자신의 고향과 단절된 삶의 이력을 회상하는 서사적 맥락의 출발점이다.",
"etymology": "PIE 조어형 *eǵs('밖으로, ~로부터')에서 유래하며, 제로급 또는 모음 강화형과 연관된다. 동계어로 라틴어 ex, 고대 아일랜드어 ess- 등이 있다. 음운 변화 상 그리스어에서어말자음 탈락 및 사일런트 세티어 계열의 구개음화 분기와 관련하여 Lejeune의 법칙 등이 논의된다. LSJ 및 Chantraine(DELG)에 따르면 공간적·시간적 출발점을 나타내는 기본 전치사로 널리 쓰였다."
},
{
"g": "οὗ",
"pos": "대명사",
"lemma": "ὅς, ἥ, ὅ",
"parse": "sg.gen.m.",
"gloss_kr": "~한 때부터",
"gloss_en": "since which time",
"syntax": "관계대명사의 속격 단수 남성형으로, 선행사 또는 시간 부사구와의 관계 속에서 시간적 종속절을 이끈다. 생성문법의 둥지 구조에서 [CP [DP οὗ]ᵢ [C' ... [TP ἔβην tᵢ]]]와 같이 A'-이동에 따른 흔적(trace)과 연동된 관계사구의 문법적 격 지배를 보여준다.",
"background": "전치사 ἐξ와 결합하여 '...한 이후로'라는 시간적 접속 표현을 구성하는 핵심 관계대명사이다. 파리스에 의해 스파르타를 떠난 그날 이후로 겪은구구절절한 세월을 함축한다.",
"etymology": "PIE 지시·관계대명사 어근 *yo-에서 발달하였다. 그리스어에서 후기 인도유럽어의 성(gender)과 수(number) 일치 규칙을 따르며, 구 그리스어 단계에서 기식음(rough breathing)으로 변형되었다. Beekes(EDG)는 이 대명사 계열의 선그리스어 이전 기층 유입 가능성을 배제하고 전형적인 PIE 유산을 본다. 영어의 the(중세 영어 통일 과정에서의 변형) 등과 궁극적 동계이다."
},
{
"g": "κεῖθεν",
"pos": "부사",
"lemma": "κεῖθεν",
"parse": "adv.",
"gloss_kr": "저곳에서, 거기서",
"gloss_en": "from there",
"syntax": "지시부사로 장소적 출처를 나타내며, 문장 내에서 부사구(ADJUNCT)로 기능한다. LFG 통사 구조에서 [ADJUNCT [PRED 'κεῖθεν']] 자질을 점하며 동사구의 행위 배경을 한정한다.",
"background": "고향이자 원래의 거주지였던 라케다이몬(스파르타)을 지시하며, 트로이아와 대비되는 공간적 거리감을 형성한다. 헬레네의 입장에서 머나먼 이국 땅으로 오게 된 지리적 궤적을 강조한다.",
"etymology": "지시형용사 κεῖνος('저기 있는')에 처격/탈격적 접미사 *-θεν('~로부터')이 결합된 형태이다. PIE 지시어 어근 *ko-/*ki-와 연관되며, 그리스어 내부의 장소 부사 파생 규칙을 따른다. Frisk(GEW)와 Chantraine(DELG)은 이 접미사 파생이 호메로스 시기에 매우 생산적으로 활용되었음을 지적한다. 현대 그리스어에는 직접적인 이형태 대신 다른 지시 부사 체계가 발달해 있다."
},
{
"g": "ἔβην",
"pos": "동사",
"lemma": "βαίνω",
"principalParts": "βαίνω – βήσομαι – ἔβην – βέβηκα – (미상) – (미상)",
"parse": "1st.sg.aor.ind.act.",
"gloss_kr": "갔다, 떠났다",
"gloss_en": "I went, I departed",
"syntax": "주절의 술어로서 LFG AVM 자질구조 [PRED 'βαίνω<SUBJ,OBL>', TENSE past, ASPECT aor, SUBJ [PRED 'pro', PERS 1, NUM sg]]를 갖는다. 주어는 1인칭 단수 대명사로 생략되어 있으며, 비어 있는 자리를 어미 *-ν이 포착한다.",
"background": "트로이아로 향했던 과거의 이동 행위를 단적인 부정과거(aorist)로 표현하여 완결된 사건으로 부각한다. 헬레네가 자신의 운명을 바꾼 중대한 이동을 회고하는 대목이다.",
"etymology": "PIE 어근 *gʷem-('가다, 오다')에서 유래한다. 비법칙적 부정과거 ἔβην은 영급 어간 *gʷm-에 기초하며, 그라스만의 법칙이나 음운적 축약 과정을 거쳐 형태가 고정되었다. 동계어로 라틴어 veniō('오다'), 영어 come(기 гер만어 *kweman-) 등이 있다. Chantraine(DELG)과 Beekes(EDG)는 이 어근이 인도유럽어족 전반에 걸쳐 매우 오래된 기본 이동 동사임을 강조한다."
},
{
"g": "καὶ",
"pos": "소사",
"lemma": "καί",
"parse": "coord.conj.",
"gloss_kr": "그리고, 게다가",
"gloss_en": "and, also",
"syntax": "대등접속사로 두 동사구(ἔβην과 ἀπελήλυθα)를 긴밀하게 연결한다. HPSG 자질 구조에서 [HEAD conjunction]으로서 양쪽의 통사적 지위를 대등하게 조율한다.",
"background": "단순한 병렬을 넘어 이동한 행위와 그 결과로서 고향을 떠난 상태가 지속되는 것을 연결하는 수사적 기능을 수행한다.",
"etymology": "어원적으로 명확한 PIE 재구가 논쟁적이며, 선그리스어 기층의 영향 가능성도 일부 제기된다(Beekes EDG). 그리스어 내부에서 전치·접속 기능으로 분화되었다. 다른 인도유럽어족 언어에서 직접 대응하는 동계어를 찾기 어렵고 그리스어 독자적 발달로 보는 시각이 우세하다."
},
{
"g": "ἐμῆς",
"pos": "형용사",
"lemma": "ἐμός, ἐμή, ἐμόν",
"parse": "sg.gen.f.",
"gloss_kr": "나의",
"gloss_en": "my",
"syntax": "소유형용사로 여성 단수 속격인 πάτρης를 수식한다. 괄호 트리 [DP [D' ἐμῆς πάτρης]] 구조 속에서 지정어(specifier) 위치에 병합되어 격 일치를 이룬다.",
"background": "화자 자신의 정체성과 원고향에 대한 애착을 개인화하여 드러내는 소유 표현이다. 객관적 고향이 아니라 '나의' 고향임을 강조한다.",
"etymology": "PIE 대격 인칭대명사 *e-mo-에서 파생된 소유형용사이다. 그리스어 내에서 1인칭 단수 대명사 *eǵh₂의 사격 어간과 결합하여 발달했다. 동계어로 라틴어 meus('나의')가 있다. Chantraine(DELG)에 따르면 호메로스 시기부터 고전 그리스어까지 소유 표현의 주된 수단으로 정착하였다."
},
{
"g": "ἀπελήλυθα",
"pos": "동사",
"lemma": "ἀπέρχομαι",
"principalParts": "ἀπέρχομαι – ἀπελεύσομαι – ἀπῆλθον – ἀπελήλυθα – (미상) – (미상)",
"parse": "1st.sg.perf.ind.act.",
"gloss_kr": "떠나와 있다",
"gloss_en": "I have gone away",
"syntax": "완료시제의 주절 술어로, LFG [PRED 'ἀπέρχομαι', TENSE present-state, ASPECT perf, SUBJ [PRED 'pro']]로 분석된다. 과거의 행위가 현재까지 지속되는 상태(state resulting from past action)를 통사적으로 표상한다.",
"background": "과거에 고향을 떠난 행위가 현재까지 영구적인 이원(離원의 상태로 지속되고 있음을 완료시제를 통해 극적으로 강조한다. 헬레네의 비극적 처지를 시사하는 핵심 서술이다.",
"etymology": "전치사 ἀπό와 동사 ἔρχομαι('가다')의 합성어이다. 어근 *er-/*el- 계열과 연결되며, 완료형에서 중복음(reduplication) *-ληλυ- 형태를 취하는 독특한 음운적 변이를 보인다. Chantraine(DELG)과 LSJ는 이 완료형이 호메로스어에서 상태의 지속을 나타내는 데 특화되어 있음을 설명한다."
},
{
"g": "πάτρης",
"pos": "명사",
"lemma": "πάτρα, τῆς",
"parse": "sg.gen.f.",
"gloss_kr": "고향, 조국",
"gloss_en": "fatherland",
"syntax": "전치사적 혹은 동사의 의미적 지배에 따른 속격 명사구로, 탈출과 분리의 대상(source)을 나타낸다. LFG f-구조에서 [OBJ [PRED 'πάτρα', CASE gen, θ-ROLE SOURCE]]로 배당된다.",
"background": "스파르타라는 물리적 고향이자 혈연과 기억이 담긴 조국을 의미하며, 트로이아 성 안에서 이민자와 같은 처지로 살아가는 헬레네의 근원적 상실감을 상징한다.",
"etymology": "명사 πατήρ('아버지')의 어간에서 파생된 여성 명사로, PIE *ph₂tḗr에서 유래한다. 후두음 *h₂의 탈락 및 음운 변화를 거쳤으며, '아버지의 땅'이라는 원뜻을 지닌다. 동계어로 라틴어 patria('조국'), 영어 fatherland 등이 있다. Beekes(EDG)와 Chantraine(DELG)은 인도유럽어족 공통의 친족·토지 명명 체계의 전형으로 다룬다."
}
]
},
{
"ref": "Iliad 24.767",
"trans": "그러나 나는 그대에게서 단 한 번도 나쁜 말이나 모욕적인 말을 들은 적이 없었네.",
"words": [
{
"g": "ἀλλ᾽",
"pos": "접속사",
"lemma": "ἀλλά",
"parse": "coord.conj.",
"gloss_kr": "그러나, 하지만",
"gloss_en": "but",
"syntax": "대조 접속사로 앞선 슬픔의 진술과 대비되는 긍정적 사실(비난받지 않은 삶)을 전환하여 이끈다. HPSG [HEAD conjunction] 자질을 통해 두 문장 간의 의미론적 양보·대조 관계를 확립한다.",
"background": "시적 전환을 일으키며 헥토르의 고결한 인품을 강조하기 직전의 국면을 연다. 비참한 처지 속에서도 유일하게 위로가 되었던 관계를 부각한다.",
"etymology": "다른 대등접속사 ἄλλος('다른')의 중성 복수 대격 형태에서 부사화 및 접속사화된 것으로 분석된다. Chantraine(DELG)에 따르면 그리스어 고유의 대조 표지로서 PIE 접속사 체계와는 독자적인 경로로 발달했다."
},
{
"g": "οὔ",
"pos": "부사",
"lemma": "οὐ",
"parse": "neg.adv.",
"gloss_kr": "아니오, 결코 ~않다",
"gloss_en": "not",
"syntax": "직설법 동사 ἄκουσα를 수식하는 부정부사이다. 생성문법에서 NegP의 지정어 위치를 점하여 명제 전체에 대한 진리치를 부정한다.",
"background": "단호한 어조로 헥토르로부터 모욕을 당한 적이 없음을 강조하는 절대적 부정의 기능을 수행한다.",
"etymology": "PIE 부정어구 *ne h₂oi-('결코 ~않다')에서 축약되어 발달했다. 후두음 소실 및 모음 축약 과정을 거쳐 고전 그리스어의 기본 부정사로 정착했다. 동계어로 산스크리트어 a-, 라틴어 nōn 등과 연관된다."
},
{
"g": "πω",
"pos": "소사",
"lemma": "πω",
"parse": "enclitic.adv.",
"gloss_kr": "아직도, 지금까지",
"gloss_en": "yet, ever",
"syntax": "전접어(enclitic) 부사로 부정어 οὔ와 결합하여 '아직까지 결코 ~않다'라는 시제적 한정을 나타낸다. LFG 자질구조에서 [ADJUNCT [POLARITY negative-temporal]]로 처리된다.",
"background": "과거부터 현재에 이르기까지의 긴 세월 동안 단 한 번의 예외도 없었음을 강조하는 한정사적 어감을 더한다.",
"etymology": "PIE 미상 어근에 기원하며, 시간적 미정을 나타내는 enclitic 입자이다. Chantraine(DELG)은 인도유럽어 제어의 부정어구 연동 한정사들과 비교하며 그리스어 독자적 형태 발달로 설명한다."
},
{
"g": "σεῦ",
"pos": "대명사",
"lemma": "σύ",
"parse": "sg.gen.m.",
"gloss_kr": "그대에게서, 그대의",
"gloss_en": "from you",
"syntax": "2인칭 단수 대명사의 호메로스 이형태 속격(Homeric genitive)이다. 동사 ἄκουσα의 감각·청취 동사 지배에 따른 속격 목적어구로, LFG에서 [OBJ-GEN [PRED 'σύ', CASE gen, θ-ROLE SOURCE]]로 기능한다.",
"background": "살아생전 자신에게 유일하게 따뜻했던 시동생 헥토르를 직접 지칭하며, 그의 인격적 온기를 환기한다.",
"etymology": "PIE 2인칭 대명사 어근 *tu-의 속격형 *tewso스/teus에서 유래한다. 그리스어 내부에서 모음 탈락과 장음화 과정을 거쳐 호메로스식 σεῦ형태가 고정되었다. 동계어로 라틴어 tuī, 영어 thou 등이 있다."
},
{
"g": "ἄκουσα",
"pos": "동사",
"lemma": "ἀκούω",
"principalParts": "ἀκούω – ἀκούσομαι – ἤκουσα – ἀκήκοα – (미상) – ἠκούσθην",
"parse": "1st.sg.aor.ind.act.",
"gloss_kr": "들었다",
"gloss_en": "I heard",
"syntax": "주절의 술어 동사로 [PRED 'ἀκούω<SUBJ,OBJ>', TENSE past, ASPECT aor, SUBJ [PRED 'pro', PERS 1], OBJ [PRED 'ἔπος', CASE acc]]의 LFG 구조를 갖는다. 청각적 경험을 통한 인지 행위를 나타낸다.",
"background": "언어적 소통의 부재, 즉 비난이나 모욕적인 언사를 결코 들은 적이 없다는 사실을 회고하는 중대한 서술어이다.",
"etymology": "PIE 어근 *h₂k-('날카롭다, 듣다/지각하다')에서 유래한다. 청각적 예민함과 연관된 어원으로, 산스크리트어 ā-śru-('듣다')와 동계이다. Chantraine(DELG)은 이 어근이 신체 감각 명사 및 동사군을 형성하는 핵심 요소임을 밝힌다."
},
{
"g": "κακὸν",
"pos": "형용사",
"lemma": "κακός, κακή, κακόν",
"parse": "sg.acc.n.",
"gloss_kr": "나쁜, 모욕적인",
"gloss_en": "bad, evil",
"syntax": "형용사로 중성 단수 대격이며 명사 ἔπος를 수식한다. 괄호 트리 [DP [D' κακὸν ἔπος]]의 수식어 구조를 이룬다.",
"background": "타인들로부터 받을 수 있는 악의적이거나 상처를 주는 언어적 폭력을 수식하는 형용사이다.",
"etymology": "그리스어 고유의 어원으로 확실한 PIE 재구가 어렵고 선그리스어 기층 어휘일 가능성이 높다고 Beekes(EDG)는 지적한다. 호메로스 시기부터 도덕적·물리적 악을 두루 나타내는 기본 어휘로 쓰였다."
},
{
"g": "ἔπος",
"pos": "명사",
"lemma": "ἔπος, ἔπεος, τό",
"parse": "sg.acc.n.",
"gloss_kr": "말, 언사",
"gloss_en": "word, speech",
"syntax": "동사 ἄκουσα의 직접목적어인 중성 명사 대격이다. LFG f-구조에서 [OBJ [PRED 'ἔπος', CASE acc, θ-ROLE PATIENT]]로 기능한다.",
"background": "구체적인 발화나 단어를 의미하며, 트로이아 궁정 내에서 헬레네가 겪었을 잠재적 언어폭력의 대상을 가리킨다.",
"etymology": "PIE 어근 *wekʷ-('말하다')에서 유래하며, 제로급 *wkʷ-에 접사가 붙어 그리스어에서 e-급 형성이 일어났다. 동계어로 라틴어 vōx('목소리'), 산스크리트어 vāk 등이 있다. Chantraine(DELG)은 시적 용례에서 '서사시의 구절'이나 '엄숙한 말'로 의미가 확장되었음을 설명한다."
},
{
"g": "οὐδ᾽",
"pos": "소사",
"lemma": "οὐδέ",
"parse": "coord.conj.",
"gloss_kr": "그리고 ~도 아니다, 심지어 ~도 않다",
"gloss_en": "nor, and not",
"syntax": "부정 대등접속사로 앞의 부정구와 뒤의 명사구를 연결한다. HPSG 구조에서 대등한 부정 항을 확장하는 접속 기능을 수행한다.",
"background": "부정의 범위를 점진적으로 확장하여 어떠한 형태의 모욕도 없었음을 거듭 확증한다.",
"etymology": "부정사 οὐ와 접속사 δέ의 합성어이다. 그리스어 내부의 축약 및 엘리전(elision)을 거쳐 οὐδ᾽로 실현된다."
},
{
"g": "ἀσύφηλον",
"pos": "형용사",
"lemma": "ἀσύφηλος, ἀσύφηλον",
"parse": "sg.acc.n.",
"gloss_kr": "모욕적인, 함부로 하는, 무례한",
"gloss_en": "abusive, outrageous, insulting",
"syntax": "형용사로 중성 단수 대격이며 앞의 ἔπος와 성·수·격 일치를 이룬다. 통사적으로 ἔπος를 수식하는 병치 수식어로 기능한다.",
"background": "단순한 비난을 넘어 타인의 존엄성을 짓밟는 거칠고 모욕적인 언행을 가리키는 호메로스 특유의 심화된 어휘이다.",
"etymology": "부정 접두사 ἀ-와 불명확한 어근의 결합으로, LSJ와 Chantraine(DELG)은 수신(sēphēlos) 계열과의 연관성을 논의하나 어원이 완전히 투명하지는 않다. 호메로스 시기에만 국한되어 나타나는 시적 희귀어(hapax legomenon 성격의 고유 어휘) 중 하나이다."
}
]
},
{
"ref": "Iliad 24.768",
"trans": "만약 내전(안방)에서 다른 누군가가 나를 꾸짖는 일이 있더라도,",
"words": [
{
"g": "ἀλλ᾽",
"pos": "접속사",
"lemma": "ἀλλά",
"parse": "coord.conj.",
"gloss_kr": "그러나, 하지만",
"gloss_en": "but",
"syntax": "조건절을 이끄는 문맥 전환 접속사로, 자신을 향한 일반적인 궁정 내 다른 사람들의 태도(가정적 상황)를 도입한다.",
"background": "자신이 헥토르 외의 다른 가족들에게는 비난을 받았을 수 있음을 가정하며 이야기의 초점을 확장한다.",
"etymology": "ἀλλά 항목 참조."
},
{
"g": "εἴ",
"pos": "접속사",
"lemma": "εἰ",
"parse": "subord.conj.",
"gloss_kr": "만약 ~라면",
"gloss_en": "if",
"syntax": "조건절(protasis)을 이끄는 종속접속사이다. 희구법(optative) 동사 ἐνίπτοι와 결합하여 가정법적 조건문을 형성한다.",
"background": "현실에서 일어난 일이 아니라 잠재적 혹은 가정적인 상황을 설정하여 헥토르의 태도가 얼마나 예외적이고 소중했는지를 대조적으로 부각한다.",
"etymology": "PIE 조건접속사 어근 *ei('만약')에서 유래한다. 산스크리트어 yadi 등과 동계이며, 그리스어에서 조건문을 구성하는 가장 기본적인 문법 요소이다."
},
{
"g": "τίς",
"pos": "대명사",
"lemma": "τίς, τί",
"parse": "sg.nom.m.",
"gloss_kr": "누군가, 어떤 이가",
"gloss_en": "someone, anyone",
"syntax": "부정대명사(indefinite pronoun) 주격으로 조건절의 주어 역할을 한다. LFG f-구조에서 [SUBJ [PRED 'tis', CASE nom]]로 지정된다.",
"background": "특정한 특정인을 지목하기보다 궁정 내에 있는 불특정 다수의 가족 구성원을 가리키는 대명사적 표현이다.",
"etymology": "PIE 의문/부정대명사 어근 *kʷi-/*kʷo-에서 유래한다. 동계어로 라틴어 quis, 영어 who 등이 있다. Chantraine(DELG)에 따르면 인도유럽어족 전반에 걸쳐 공통으로 발달한 의문·부정 대명사 체계에 속한다."
},
{
"g": "με",
"pos": "대명사",
"lemma": "ἐγώ",
"parse": "sg.acc.",
"gloss_kr": "나를",
"gloss_en": "me",
"syntax": "1인칭 단수 대명사의 대격 단축형이다. 동사 ἐνίπτοι의 직접목적어로 LFG [OBJ [PRED 'pro', CASE acc, θ-ROLE PATIENT]] 기능을 수행한다.",
"background": "비난의 화살이 집중되는 대상인 화자 자신의 처지를 객관화하여 보여준다.",
"etymology": "PIE 1인칭 대명사 사격 어근 *me-에서 유래한다. 라틴어 mē, 영어 me와 직접 동계이다."
},
{
"g": "καὶ",
"pos": "소사",
"lemma": "καί",
"parse": "adv.",
"gloss_kr": "심지어, ~조차도",
"gloss_en": "even",
"syntax": "부사적 강조 소사로 대명사 ἄλλος와 결합하여 '심지어 다른 누군가조차'라는 의미의 강세를 형성한다.",
"background": "가족 구성원 중 누군가가 자신을 나무라는 상황을 가정할 때 그 가능성을 강조하는 수사적 장치이다.",
"etymology": "καί 항목 참조."
},
{
"g": "ἄλλος",
"pos": "형용사",
"lemma": "ἄλλος, ἄλλη, ἄλλον",
"parse": "sg.nom.m.",
"gloss_kr": "다른",
"gloss_en": "other, another",
"syntax": "형용사로 명사적 용법으로 쓰여 주어 τίς를 수식하거나 동격 관계를 이룬다. 괄호 트리 [DP [D' ἄλλος τίς]] 구조를 형성한다.",
"background": "헥토르를 제외한 트로이아의 다른 왕족들을 포괄적으로 가리키는 표현이다.",
"etymology": "PIE 어근 *al-('다른')에서 유래한다. 라틴어 alius, 고대 아일랜드어 aile 등과 동계이다. Chantraine(DELG)에 따르면 인도유럽어족 전반에서 대명사적 형용사로 널리 쓰였다."
},
{
"g": "ἐνὶ",
"pos": "전치사",
"lemma": "ἐν",
"parse": "prep.+dat.",
"gloss_kr": "~안에, ~에서",
"gloss_en": "in, within",
"syntax": "여격(dative)을 지배하는 전치사로 호메로스 이형태인 ἐνί로 쓰였다. 장소적 처소를 나타내며 [OBL-LOC [PRED 'ἐν', OBJ [PRED 'μέγαρον', CASE dat]]]로 분석된다.",
"background": "트로이아 왕궁의 내부 공간을 지칭하며, 프리아모스의 거대한 궁궐 안에서 벌어지는 일상적 갈등의 배경을 시사한다.",
"etymology": "PIE 전치사 *en('~안에')에서 유래한다. 라틴어 in, 영어 in과 동계이다. 그리스어 시적 용례에서 운율적 필요에 따라 장음 형태인 ἐνί가 빈번히 쓰였다."
},
{
"g": "μεγάροισιν",
"pos": "명사",
"lemma": "μέγαρον, τοῦ",
"parse": "pl.dat.n.",
"gloss_kr": "저택에서, 안방에서, 궁궐에서",
"gloss_en": "in the halls, palaces",
"syntax": "전치사 ἐνὶ의 지배를 받는 중성 복수 여격 명사이다. 장소 부사구로서 행위가 일어나는 공간적 처소를 한정한다.",
"background": "프리아모스 왕의 웅장한 궁전이자 트로이아 왕족들이 모여 사는 거주 공간인 메가론(megaron)을 가리킨다.",
"etymology": "선그리스어 기층 어휘일 가능성이 높다고 Beekes(EDG)가 논의하며, 동양적 건축 양식의 유입과 함께 그리스어로 정착했을 것으로 추정된다. 호메로스 시기 왕궁 건축물을 뜻하는 대표적 명사이다."
},
{
"g": "ἐνίπτοι",
"pos": "동사",
"lemma": "ἐννίπτω",
"principalParts": "ἐννίπτω – (미상) – ἠνίπαπον – (미상) – (미상) – (미상)",
"parse": "3rd.sg.aor.opt.act. (Homeric iterative/optative form)",
"gloss_kr": "꾸짖을지라도, 나무랄지라도",
"gloss_en": "might rebuke, might chide",
"syntax": "가정법 조건문의 종속절 술어로, 3인칭 단수 과거희구법(optative) 형태이다. LFG [PRED 'ἐννίπτω<SUBJ,OBJ>', MOOD optative, TENSE past, SUBJ [PRED 'tis'], OBJ [PRED 'me']] 자질 구조를 갖는다.",
"background": "가정적이고 부드러운 어조로 타인들의 비난 가능성을 열어두면서, 그러한 상황에서도 헥토르는 결코 자신을 비난하지 않았다는 점을 돋보이게 한다.",
"etymology": "PIE 어근에 기원하며 호메로스 시기 구송 시에서 꾸짖다, 책망하다의 의미로 특화된 동사이다. Chantraine(DELG)은 이 동사의 과거형 및 희구법 활용이 시적 전통 속에서 보존된 고유 형태임을 설명한다."
}
]
},
{
"ref": "Iliad 24.769",
"trans": "시누이들이나 아름다운 옷을 입은 남편의 누이들 혹은 시어머니가,",
"words": [
{
"g": "δαέρων",
"pos": "명사",
"lemma": "δἀήρ, δαέρος, ὁ",
"parse": "pl.gen.m.",
"gloss_kr": "시동생들의, 남편 형제들의",
"gloss_en": "of brothers-in-law",
"syntax": "소유격 복수 남성형으로 뒤의 명사구들과 함께 부분격 또는 주체 속격을 이룬다. LFG f-구조에서 친족 명사구의 병렬 구조 내 한 축을 담당한다.",
"background": "남편의 형제들(시동생과 시아주버니)을 가리키며, 트로이아 왕궁 내에서 헬레네를 바라보는 복잡한 시선 주체들 중 하나이다.",
"etymology": "PIE 친족 명칭 어근 *deh₂iwr̥('남편의 형제/시동생')에서 유래한다. 산스크리트어 devar-, 라틴어 lēvir(음위 교체 발생), 리투아니아어 dieveris 등과 완벽하게 일치하는 대표적인 인도유럽어족 공통 친족 어휘이다. Beekes(EDG)와 Chantraine(DELG)은 이 단어가 인도유럽조어의 가부장제 친족 체계를 보여주는 가장 오래된 화석 중 하나임을 강조한다."
},
{
"g": "ἤ",
"pos": "접속사",
"lemma": "ἤ",
"parse": "coord.conj.",
"gloss_kr": "또는, 혹은",
"gloss_en": "or",
"syntax": "선택 접속사로 친족 명사구들을 대등하게 열거·연결한다. HPSG [HEAD conjunction] 자질을 통해 동등한 자격의 명사구들을 선택적으로 나열한다.",
"background": "궁정 내에서 헬레네를 책망할 수 있는 다양한 여성 친족들의 범위를 열거하는 나열 구문의 접속사이다.",
"etymology": "그리스어 고유의 선택 접속사로 PIE 분기에서 독립적으로 발달했다. Chantraine(DELG)에 따르면 문장 연결 및 선택 관계를 나타내는 데 필수적인 요소이다."
},
{
"g": "γαλόων",
"pos": "명사",
"lemma": "γάλως, γαλόω, ἡ",
"parse": "pl.gen.f.",
"gloss_kr": "남편의 누이들의, 시누이들의",
"gloss_en": "of sisters-in-law (husband's sisters)",
"syntax": "여성 명사 복수 속격으로 시누이들을 지칭하며 대등 접속에 의해 속격 병렬을 이룬다.",
"background": "남편 파리스의 누이들(트로이아의 공주들, 예컨대 카산드라 등)을 포함하여 왕궁 내 여성 친족들의 시선을 대변한다.",
"etymology": "PIE 친족 어근에서 유래하며, 그리스어 고유의 친족 명칭 발달 과정을 보여준다. Chantraine(DELG)과 Beekes(EDG)는 이 단어가 인도유럽어족 내에서 드물게 보존된 여성형 인척 명사임을 지적한다."
},
{
"g": "ἤ",
"pos": "접속사",
"lemma": "ἤ",
"parse": "coord.conj.",
"gloss_kr": "혹은",
"gloss_en": "or",
"syntax": "선택 접속사로 앞선 구와 다음 친족 명사구를 연결한다.",
"background": "친족 열거의 연속성을 유지하는 접속어이다.",
"etymology": "ἤ 항목 참조."
},
{
"g": "εἰνατέρων",
"pos": "명사",
"lemma": "ἰνάτηρ, εἰνατέρος, ἡ",
"parse": "pl.gen.f.",
"gloss_kr": "남편 형제의 아내들의, 동서들의",
"gloss_en": "of wives of brothers-in-law",
"syntax": "여성 명사 복수 속격으로 남편 형제들의 아내들을 가리킨다. 통사적으로 앞선 속격들가 동등하게 묶인다.",
"background": "트로이아 왕가에서 시동생이나 아주버니들의 아내들, 즉 동서 관계에 있는 여인들을 뜻하며 궁정 내 복잡한 여성 네트워크를 보여준다.",
"etymology": "PIE 친족 어근 *yenətér-('남편 형제의 아내')에서 유래한다. 산스크리트어 yātar-, 라틴어 ianitrīcēs 등과 동계이다. Beekes(EDG)는 이 단어가 완벽한 인도유럽어 친족 명칭의 유산임을 강조하며, 그리스어에서 모음 첨가(prothesis) 현상으로 e-가 붙은 형태임을 설명한다."
},
{
"g": "εὐπέπλων",
"pos": "형용사",
"lemma": "εὔπεπλος, εὔπεπλον",
"parse": "pl.gen.f.",
"gloss_kr": "아름다운 옷을 입은, 고운 옷자락의",
"gloss_en": "fair-robed, well-robed",
"syntax": "형용사 복수 여성 속격으로 앞의 명사들(특히 εἰνατέρων 등)을 수식하는 수식어구이다. 괄호 트리 [DP [D' εὐπέπλων εἰνατέρων]] 구조를 이룬다.",
"background": "호메로스 서사시에서 고귀하고 품위 있는 여인들을 묘사할 때 자주 쓰이는 전형적 수식어(epithet)로, 트로이아 귀족 부인들의 화려한 의복 문화를 반영한다.",
"etymology": "접두사 εὖ('좋은, 아름다운')와 명사 πέπλος('페플로스, 겉옷')의 합성어이다. πέπλος는 선그리스어 기층 어휘일 가능성이 높다고 Beekes(EDG)가 분석하며, 지중해 문화권의 직물 및 의생활 용어에서 유입되었다."
}
]
},
{
"ref": "Iliad 24.770",
"trans": "또는 시어머니가 그랬을지라도, 시아버지는 언제나 아버지처럼 온화하셨으니,",
"words": [
{
"g": "ἤ",
"pos": "접속사",
"lemma": "ἤ",
"parse": "coord.conj.",
"gloss_kr": "혹은",
"gloss_en": "or",
"syntax": "선택 접속사로 친족 열거의 마지막 항목인 ἑκυρή를 도입한다.",
"background": "여성 친족들의 마지막 대상인 시어머니를 연결하며 가족 구성원 전체의 범위를 완성한다.",
"etymology": "ἤ 항목 참조."
},
{
"g": "ἑκυρή",
"pos": "명사",
"lemma": "ἑκυρά, τῆς",
"parse": "sg.nom.f.",
"gloss_kr": "시어머니가",
"gloss_en": "mother-in-law",
"syntax": "여성 명사 단수 주격으로 조건절 속의 또 다른 주어 역할을 한다. LFG [SUBJ [PRED 'ἑκυρά', CASE nom]]로 지정된다.",
"background": "프리아모스의 아내이자 헥토르의 어머니인 헤카베를 가리키며, 헬레네에게 때로는 차갑거나 복잡한 감정을 가질 수 있는 시어머니를 뜻한다.",
"etymology": "PIE 친족 어근 *swékuros('시아버지')의 여성형 *swékurih₂('시어머니')에서 유래한다. 산스크리트어 śvaśrū-, 라틴어 socrus, 독일어 Schwieger와 완벽한 동계이다. Beekes(EDG)와 Chantraine(DELG)은 인류의 가장 보편적인 인척 호칭 체계 중 하나임을 설명한다."
},
{
"g": "ἑκυρὸς",
"pos": "명사",
"lemma": "ἑκυρός, οῦ, ὁ",
"parse": "sg.nom.m.",
"gloss_kr": "시아버지는",
"gloss_en": "father-in-law",
"syntax": "남성 명사 단수 주격으로 대조적인 새로운 절의 주어이다. LFG [SUBJ [PRED 'ἑκυρός', CASE nom]] 기능을 수행하며 앞선 여성 친족들의 비난 가능성과 프리아모스의 태도를 극적으로 대비시킨다.",
"background": "트로이의 왕 프리아모스를 가리키며, 헬레네에게 유독 자상하고 너그러웠던 시아버지의 인품을 찬탈한다.",
"etymology": "PIE 친족 어근 *swékuros('시아버지')에서 유래한다. 산스크리트어 śvaśura-, 라틴어 socer, 영어 father-in-law의 어원적 기반과 연결된다. Chantraine(DELG)은 인도유럽조어의 사회적 친족 구조를 보여주는 핵심 어휘로 평가한다."
},
{
"g": "δέ",
"pos": "접속사",
"lemma": "δέ",
"parse": "coord.conj.",
"gloss_kr": "그리고, 반면에",
"gloss_en": "and, but",
"syntax": "대등/대조 접속사로 앞의 가정적 비난 상황과 시아버지의 온화한 태도를 매끄럽게 연결·대비시킨다. HPSG [HEAD conjunction] 자질을 통해 문장 간의 전환을 유도한다.",
"background": "가족들의 잠재적 비난 속에서도 시아버지 프리아모스만큼은 한결같았다는 반전과 위안의 서사적 전환을 이끈다.",
"etymology": "그리스어 고유의 대조·연결 접속사로 PIE 분기 이후 독자적 발달을 거쳤다. 문장 연쇄에서 후치사(postpositive)로 기능한다."
},
{
"g": "πατὴρ",
"pos": "명사",
"lemma": "πατήρ, πατρός, ὁ",
"parse": "sg.nom.m.",
"gloss_kr": "아버지가",
"gloss_en": "father",
"syntax": "남성 명사 단수 주격으로 ἑκυρός와 동격 관계를 이루거나 서술적 주어로 기능한다. 괄호 트리 [DP [D' ἑκυρὸς πατὴρ]] 구조를 형성한다.",
"background": "친아버지가 아님에도 친아버지처럼 자신을 아껴주었던 프리아모스 왕의 자애로운 성품을 강조한다.",
"etymology": "PIE 친족 어근 *ph₂tḗr('아버지')에서 유래한다. 산스크리트어 pitar-, 라틴어 pater, 영어 father와 완벽한 동계이다. Chantraine(DELG)과 Beekes(EDG)는 이 단어가 인류 친족 명칭의 가장 원형적인 형태임을 강조한다."
},
{
"g": "ὣς",
"pos": "부사",
"lemma": "ὡς",
"parse": "adv.",
"gloss_kr": "~처럼, 마치",
"gloss_en": "as, like",
"syntax": "비교 부사로 비유 구문을 이끈다. LFG 통사 구조에서 [ADJUNCT [PRED 'ὡς', COMP [PRED 'πατήρ']]]로 분석되어 동등성 비유를 형성한다.",
"background": "시아버지가 친아버지와 조금도 다름없이 자신을 대해주었음을 비유적으로 표현하는 핵심 수사어이다.",
"etymology": "지시·관계 대명사 어근에서 발달한 부사로, 양태와 비교를 나타내는 그리스어의 대표적 불변화사이다."
},
{
"g": "ἤπιος",
"pos": "형용사",
"lemma": "ἤπιος, ἤπιον",
"parse": "sg.nom.m.",
"gloss_kr": "온화한, 자상한, 다정한",
"gloss_en": "gentle, kindly, mild",
"syntax": "형용사 단수 남성 주격으로 주어 ἑκυρὸς πατὴρ의 서술어(COMP/PRED)로 기능한다. LFG f-구조에서 [PRED 'ἤπιος', SUBJ [PRED 'πατήρ']]로 표상된다.",
"background": "전쟁과 비극의 소용돌이 속에서도 헬레네를 비난하지 않고 친딸처럼 따뜻하게 품어준 프리아모스의 인격을 상징하는 가장 따뜻한 수식어이다.",
"etymology": "그리스어 내부에 확실한 PIE 재구가 논쟁적이며, Beekes(EDG)는 선그리스어 기층 어휘이거나 감정 표현 계열의 고유 파생어로 본다. 호메로스 시기 신들과 자애로운 통치자·어른들의 성품을 묘사하는 데 특화되어 있다."
},
{
"g": "αἰεί",
"pos": "부사",
"lemma": "ἀεί",
"parse": "adv.",
"gloss_kr": "늘, 언제나, 항상",
"gloss_en": "always, ever",
"syntax": "시간 부사로 동사적 상태의 영속성을 한정한다. LFG [ADJUNCT [PRED 'ἀεί', TENSE universal]] 자질을 부여한다.",
"background": "일시적인 친절이 아니라 한결같이 변함없이 자신을 감싸주었던 프리아모스의 영원한 성품을 부각한다.",
"etymology": "PIE 어근 *h₂eyu-('영원, 생명')에서 유래한다. 산스크리트어 āyu('생명, 기간'), 라틴어 aevum('시대, 영원'), 영어 ever와 동계이다. Chantraine(DELG)은 시간의 연속성을 나타내는 인도유럽어족 공통 어원의 대표적 유산으로 설명한다."
}
]
},
  {
    "ref": "Iliad 24.771",
    "trans": "아니라 네가 그를 말들로 다독이며 만류하였으니,",
    "words": [
      {
        "g": "ἀλλὰ",
        "pos": "접속사",
        "lemma": "ἀλλά",
        "parse": "coord.conj.",
        "gloss_kr": "그러나, 아니라",
        "gloss_en": "but",
        "syntax": "LFG f-구조상 문장 간 대조 관계를 맺는 등위접속사(coord.conj.)로 분석되며, 절 전체의 수식어 기능을 수행한다. c-구조에서는 [CP [C' ἀλλὰ [IP ...]]] 형태로 좌측 주변부(left periphery)의 CP 핵 자리를 점한다. 통사적 논항을 직접 요구하지 않으며, 담화 분석 관점에서 앞선 화자의 발화 내용에 대한 반박이나 방향 전환을 표지하는 표지어(discourse marker)로 작동한다.",
        "background": "이 구절은 안드로마케가 헥토르의 시신 앞에서 영웅의 죽음을 애도하며, 생전에 그가 자신을 대하던 따뜻한 태도와 타인들을 대하던 태도를 회상하는 장면의 일부이다. 헥토르는 생전 트로이아의 수호자로서 타인들의 거친 태도 속에서도 안드로마케에게는 늘 다정한 반려자였다. 이 대사는 헥토르의 개인적 다정함과 공동체 안에서의 고립된 위치를 대조하여 비극성을 극대화한다.",
        "etymology": "PIE 재구형 *h₂el-('다른')의 중성 복수 대격 형태에서 발달한 것으로, Chantraine(DELG)은 어원적으로 ἄλλος('다른')와 직결된다고 본다. 어원적 의미인 '다른 것'에서 '다른 한편으로'라는 대조의 의미로 전이되었으며, 호메로스 그리스어 단계부터 문장 전환을 이끄는 대표적 접속사로 고착되었다. 후대 그리스어에서도 ἀλλά로 그대로 이어져 현대 그리스어까지 대조와 반박을 나타내는 가장 흔한 접속사로 남아 있다."
      },
      {
        "g": "σὺ",
        "pos": "대명사",
        "lemma": "σύ, σοῦ, ὁ/ἡ",
        "parse": "sg.nom.m.",
        "gloss_kr": "너는",
        "gloss_en": "thou, you",
        "syntax": "LFG f-구조에서 주어(SUBJ) 기능을 담당하며, [PRED 'προσηύδα<SUBJ>', SUBJ [PRED 'σύ', CASE nom, PERS 2nd, NUM sg]]와 같이 속성-값 행렬로 표현된다. 생성문법적으로는 비제보적 주어(non-null subject)로서 [Spec,IP] 자리에 병합되며, 명시적인 2인칭 주격 형태를 통해 화자의 청자에 대한 직접적인 호칭과 감정적 몰입을 통사적으로 드러낸다. 격 지배 관점에서 정동사 katerykes의 주어로서 주격(nominative)을 필수적으로 요구받는다.",
        "background": "안드로마케가 죽은 남편 헥토르를 직접 2인칭 '너(σὺ)'로 부르며 말을 건네는 장면이다. 죽음으로 인해 단절된 소통을 호소법과 2인칭 대명사를 통해 생생하게 복원하려는 비극적 수사가 담겨 있다. 이 호칭은 남편에 대한 친밀함과 상실의 아픔을 동시에 환기한다.",
        "etymology": "PIE 재구형 *tuH('너', e급 어간)에서 유래하였으며, 후두음 *H의 영향 및 형태론적 재구조화를 거쳤다. Beekes(EDG)는 아나톨리아어파 및 인도유럽어족 전반에 걸쳐 2인칭 단수 대명사의 어근이 매우 보존적으로 유지되었음을 지적한다. 산스크리트어 tvam, 라틴어 tū, 고대 교회 슬라브어 ty와 직접 동계어이다. 현대 그리스어에서는 에라스무스식 발음 변화와 형태론적 간소화를 거쳐 esy(εσύ) 형태로 명맥을 유지하고 있다."
      },
      {
        "g": "τὸν",
        "pos": "관사",
        "lemma": "ὁ, ἡ, τό",
        "parse": "sg.acc.m.",
        "gloss_kr": "그를",
        "gloss_en": "him",
        "syntax": "LFG f-구조에서 목적어(OBJ) 기능을 수행하며, [PRED 'κατέρυκες', OBJ [PRED 'pronoun', CASE acc, NUM sg, GEND m]] 형태로 환원된다. c-구조상 NP 내부의 지정어(Spec,NP) 혹은 독립된 지시 대명사로 기능하며, 여기서는 호메로스어의 오래된 지시사 용법을 유지하여 앞에 언급된 헥토르를 가리킨다. 동사 katerykes의 대격 지배(accusative government)를 받아 대격 형태를 띤다.",
        "background": "여기서 '그'는 전쟁터로 나가려는 헥토르를 가리키며, 안드로마케가 그를 만류하려 애썼던 과거의 기억을 지시한다. 헥토르의 죽음 앞에서 안드로마케는 자신이 그를 보호하려 했던 기억을 떠올리며 비탄에 잠긴다. 이 지시사는 청자와 화자 모두가 공유하는 대상에 대한 강한 회상을 이끌어낸다.",
        "etymology": "PIE 지시재구형 *to-/to-m(e급 어간)에서 유래하였으며, 명사화 경향과 함께 정관사로 발달하였다. Chantraine(DELG)은 호메로스 시가에서 이 형태가 여전히 지시사의 성격(그 사람, 그 것)을 강하게 띠고 있음을 강조한다. 산스크리트어 tá-, 고대 아일랜드어 to 와 동계어이다. 후대 그리스어 및 비문 증거를 통해 정관사 체계로 완전히 흡수되었음이 확인된다."
      },
      {
        "g": "ἐπέεσσι",
        "pos": "명사",
        "lemma": "ἔπος, εὔεος, τό",
        "parse": "pl.dat.n.",
        "gloss_kr": "말들로",
        "gloss_en": "with words",
        "principalParts": [
          "(미상)",
          "(미상)",
          "(미상)",
          "(미상)",
          "(미상)",
          "(미상)"
        ],
        "syntax": "LFG f-구조에서 도구적 부사어(OBL_INST) 기능을 담당하며, [PRED 'κατέρυκες', OBL_INST [PRED 'ἔπος', CASE dat, NUM pl, θ-ROLE INSTRUMENT]]로 나타낸다. c-구조상 PP 또는 탈격/여격 명사구로 실현되며, 수단과 도구를 나타내는 여격(instrumental dative)의 통사적 기능을 수행한다. 생성문법적 격 이론에 따라 어간에 부가어 격 자질이 할당되어 동사구(VP) 내부에 부가된다.",
        "background": "말(ἔπος)은 물리적인 무기가 아니라 헥토르를 진정시키고 만류하기 위해 안드로마케가 사용했던 유일한 수단이었다. 폭력이 지배하는 트로이아 전쟁터에서 이 말들은 평화와 가정적 유대를 상징한다. 그러나 그 말들도 결국 헥토르의 출전을 막지 못했다는 점에서 비극성이 배가된다.",
        "etymology": "PIE 재구형 *wekʷ-('말하다', e급 어간)에서 유래하였으며, 후두음 탈락과 모음 교체를 거쳤다. Chantraine(DELG)은 어근 *wekʷ-이 그리스어에서 ἔπος(말)와 εἶπον(말하였다)으로 분화되었음을 밝힌다. 산스크리트어 vácas('말'), 라틴어 vōx('목소리')와 동계어이다. 호메로스어의 여격 복수형 -εσσι는 이음절적 확장형으로 운율적 필요에 의해 보존된 고형이다."
      },
      {
        "g": "παραιφάμενος",
        "pos": "동사(분사)",
        "lemma": "παραιφάμαι",
        "parse": "pres.mid.part.sg.nom.m.",
        "gloss_kr": "위로하며, 권하며",
        "gloss_en": "exhorting, consoling",
        "principalParts": [
          "παραιφάμαι",
          "παραιφήσω",
          "παραιφάμην",
          "(미상)",
          "(미상)",
          "(미상)"
        ],
        "syntax": "LFG f-구조에서 주어의 부대 상황을 나타내는 ADJUNCT(분사구문)로 분석되며, [PRED 'παραιφάομαι', SUBJ 주어(σὺ), XCOMP ... ] 형태로 기술된다. c-구조상 [VP 분사구]가 주절 동사를 수식하는 부사절 역할을 하며, 중간태(middle voice)를 통해 주어의 주체적이고 내적인 관여를 통사적으로 표지한다. 격 지배상 주어의 주격(nominative)과 일치(concord)를 이룬다.",
        "background": "παραιφάμενος은 남편을 설득하고 위로하려던 안드로마케의 간절한 노력을 보여주는 분사다. 그녀는 헥토르에게 성벽 안에 머물며 아킬레우스와 맞서지 말라고 설득하곤 했다. 이 분사는 그녀가 단순한 방관자가 아니라 적극적으로 남편의 생명을 지키려 했던 인물임을 강조한다.",
        "etymology": "접두사 παρά('옆에')와 어근 *bha-('말하다', e급)의 합성 동사에서 파생되었다. Beekes(EDG)는 인도유럽어족 전반에 걸쳐 '말하다, 밝히다'를 뜻하는 *bha- 어근(cf. 라틴어 fārī)의 파생형으로 본다. 산스크리트어 bhā-('빛나다, 말하다')와 동계어이다. 호메로스어 특유의 중간태 분사 어미 -μενος가 결합하여 시적 격식체를 형성한다."
      },
      {
        "g": "κατέρυκες",
        "pos": "동사",
        "lemma": "κατερύκω",
        "parse": "2nd.sg.impf.ind.act.",
        "gloss_kr": "너는 만류하곤 했다",
        "gloss_en": "you used to hold back",
        "principalParts": [
          "κατερύκω",
          "κατερύξω",
          "κατέρυξα",
          "(미상)",
          "(미상)",
          "κατερύχθην"
        ],
        "syntax": "LFG f-구조에서 주절의 PRED 기능을 하며, [PRED 'κατερύκω<SUBJ,OBJ,OBL>', SUBJ [PRED 'σύ'], OBJ [PRED 'τὸν']] 형태의 논항 구조를 지배한다. c-구조상 [IP ... V]의 핵(head) 자리를 차지하며, 미완료시제(imperfect)와 능동태(active) 자질을 통해 과거의 지속적·반복적 행위를 통사적으로 실현한다. 주어와의 인칭·수 일치(2인칭 단수)를 강제한다.",
        "background": "카테루케스(κατέρυκες)는 과거의 반복적인 만류 행위를 나타내는 미완료시제로, 헥토르가 출전할 때마다 그를 붙잡으려 했던 안드로마케의 일상을 환기한다. 이 과거의 반복은 현재의 영원한 상실과 대비되어 비극적 여운을 강하게 남긴다.",
        "etymology": "전치사 κατά('아래로, 억누르며')와 어근 *rewk-('막다, 당기다')의 합성어로, Chantraine(DELG)은 고대 인도유럽어의 장애물 관련 어휘 계열로 분류한다. 게르만어파(예: 고대 고지 독일어 rūhhan)와의 연관성이 논의된 바 있으나 음운론적 난점이 존재한다. 호메로스 시가에서 미완료시제 가증모음(augment)과 반복적 어미가 결합하여 시적 구문으로 고정되었다."
      }
    ]
  },
  {
    "ref": "Iliad 24.772",
    "trans": "나의 이 가운대함과 네의 그 다정한 말들로.",
    "words": [
      {
        "g": "σῇ",
        "pos": "형용사",
        "lemma": "σός, σή, σόν",
        "parse": "sg.dat.f.",
        "gloss_kr": "너의",
        "gloss_en": "thy, your",
        "syntax": "LFG f-구조에서 명사 ἀγανοφροσύνῃ를 수식하는 한정사/소유형용사(possessive adjective)로 기능하며, [SPEC [POSS 2nd.sg]] 속성을 부여한다. c-구조상 NP 내부의 지정어 자리에 위치하며, 수식하는 명사의 성·수·격(여성 단수 여격)과 일치(concord)한다.",
        "background": "소유형용사 '너의(σῇ)'를 사용하여 헥토르 개인의 성품과 말버릇을 친밀하게 상기시킨다. 이 소유 표현은 남편과의 깊은 심리적 유대감을 드러내며, 타인들이 주는 공포와 차가움에 대비되는 유일한 온기로 기능한다.",
        "etymology": "PIE 소유대명사 재구형 *tewos('너의')에서 유래하였으며, 그리스어 음운 변화를 거쳐 시적 형태로 정착했다. Beekes(EDG)는 이 형태가 이탈리아어파 및 다른 인도유럽어족의 소유격 파생어와 평행을 이룬다고 설명한다. 산스크리트어 táva('너의')와 동계어이다. 호메로스 시가에서 소유대명사는 종종 인칭대명사의 소유격보다 형용사적 용법으로 빈번하게 쓰인다."
      },
      {
        "g": "τ᾽",
        "pos": "접속사",
        "lemma": "τε",
        "parse": "coord.conj.",
        "gloss_kr": "그리고",
        "gloss_en": "and",
        "syntax": "LFG f-구조상 등위접속사로 두 전치사구 혹은 명사구를 연결하며, [COORD [ἀγανοφροσύνῃ, ἐπέεσσι]] 구조를 형성한다. c-구조상 후치사(enclitic)로서 첫 번째 구성요소 뒤에 부속되어 구(phrase) 단위의 결합을 매개한다. 통사적 독립성이 없어 음운론적 클리틱(clitic)으로 처리된다.",
        "background": "접속사 '테(τε)'는 헥토르의 인품(ἀγανοφροσύνη)과 다정한 말(ἔπεα)을 긴밀하게 연결하여 두 요소가 하나로 결합된 그의 본질임을 보여준다. 이 결합은 안드로마케가 기억하는 헥토르의 입체적인 인격적 매력을 구성한다.",
        "etymology": "PIE 재구형 *kʷe('그리고')에서 유래하였으며, 라틴어 -que, 산스크리트어 ca와 정확히 대응하는 고유 인도유럽어 공통 어휘이다. Chantraine(DELG)은 이 단어가 문장 내에서 어구들을 유기적으로 엮어주는 가장 오래된 접속사 기제임을 강조한다. 그리스어에서 후치사로 고착되어 독자적인 강세를 잃고 선행 어휘에 의존하게 되었다."
      },
      {
        "g": "ἀγανοφροσύνῃ",
        "pos": "명사",
        "lemma": "ἀγανοφροσύνη, τῆς, ἡ",
        "parse": "sg.dat.f.",
        "gloss_kr": "다정함으로, 온유함으로",
        "gloss_en": "with gentleness, kindness",
        "syntax": "LFG f-구조에서 도구적 부사어(OBL_INST) 기능을 하며, [PRED 'ἀγανοφροσύνη', CASE dat, NUM sg, θ-ROLE INSTRUMENT]로 분석된다. c-구조상 여격 명사구로 실현되며, 동반된 수단이나 태도를 나타낸다. 파생 명사로서 추상적 성품을 나타내는 통사적 자질을 지닌다.",
        "background": "ἀγανοφροσύνη는 호메로스 시가에서 타인에 대한 부드러움과 온유함을 뜻하는 핵심 윤리적 개념이다. 헥토르는 전쟁터의 무자비함 속에서도 아내와 가족에게는 이 온유함을 잃지 않았다. 이 단어는 거친 전쟁의 세계와 대비되는 가정적 평화의 가치를 상징한다.",
        "etymology": "형용사 ἀγανός('부드러운, 다정한')와 명사 접미사 -φροσύνη('~의 마음/상태', cf. φρήν '마음')의 합성어로, Chantraine(DELG)은 감정이나 성품을 나타내는 호메로스 후기-고전기 복합 명사 유형으로 분류한다. 어근 *hag- 또는 관련 PIE 기층 어원에서 비롯되었으며, 그리스어 내부에서 생산적으로 확장된 형태이다. 현대 그리스어에서는 고전 어휘로 취급되어 일상어에서 직접 쓰이지 않는다."
      },
      {
        "g": "καὶ",
        "pos": "접속사",
        "lemma": "καί",
        "parse": "coord.conj.",
        "gloss_kr": "그리고",
        "gloss_en": "and",
        "syntax": "LFG f-구조에서 구나 절을 연결하는 등위접속사로, 앞선 771행의 표현을 772행과 대등하게 연결하거나 수식어구를 부가한다. c-구조상 [conjP [conj' καί ...]] 구조를 이룬다. 통사적으로 상위 구조와 하위 구성요소를 매개하는 표준적인 접속 기능 수행한다.",
        "background": "카이(καὶ)는 앞서 언급한 헥토르의 다정함에 이어 그의 다정한 말들을 한 번 더 강조하며 반복·확장하는 수사적 기능을 한다. 이 반복은 슬픔에 잠긴 화자의 감정이 북에 오름을 보여주는 호메로스 시가의 전형적인 기법이다.",
        "etymology": "그리스어 고유의 어원으로, 선그리스어 기층과의 연관성이나 인도유럽어 어근과의 연결에 대해 학설이 분분하다. Chantraine(DELG)과 Beekes(EDG)는 인도유럽어 내외부의 확실한 동계어를 찾기 어렵다고 보며, 그리스어 독자적 발달 혹은 오래된 차용어로 추정한다. 고전 그리스어 전반에 걸쳐 가장 보편적인 '그리고, 도'의 의미로 정착했다."
      },
      {
        "g": "σοῖς",
        "pos": "형용사",
        "lemma": "σός, σή, σόν",
        "parse": "pl.dat.m.",
        "gloss_kr": "너의",
        "gloss_en": "thy, your",
        "syntax": "LFG f-구조에서 명사 ἐπέεσσι를 수식하는 소유형용사로, [SPEC [POSS 2nd.sg]] 자리를 점한다. c-구조상 NP 내부의 지정어이며, 수식하는 명사의 성·수·격(남성 복수 여격)과 일치(concord)한다.",
        "background": "복수 여격 '너의(σοῖς)'는 헥토르가 건넸던 수많은 따뜻한 말들을 가리키며, 일회성이 아니라 지속적이었던 그의 애정을 강조한다. 이 소유형용사의 반복은 안드로마케의 기억 속에 살아있는 남편의 음성을 선명하게 부각시킨다.",
        "etymology": "PIE 소유대명사 재구형 *tewos('너의')의 복수 여격 남성형으로 발달하였다. Beekes(EDG)는 인도유럽어 소유대명사의 격변화 패러다임 안에서 설명한다. 산스크리트어의 소유격 형태와 음운론적 대응을 이룬다. 그리스어 시가에서 운율적 요구와 수사적 강조를 위해 대명사 소유격 대신 빈번하게 활용된다."
      },
      {
        "g": "ἀγανοῖς",
        "pos": "형용사",
        "lemma": "ἀγανός, ἀγανή, ἀγανόν",
        "parse": "pl.dat.m.",
        "gloss_kr": "다정한, 온유한",
        "gloss_en": "gentle, kind",
        "syntax": "LFG f-구조에서 명사 ἐπέεσσι를 수식하는 한정형용사(attributive adjective)로, [PRED 'ἀγανός', MOD ἐπέεσσι] 기능을 한다. c-구조상 [NP [AP ἀγανοῖς] ἐπέεσσι] 구조를 이루며, 수식어와 피수식어 간의 성·수·격(남성 복수 여격) 일치를 보인다.",
        "background": "ἀγανοῖς는 헥토르의 말이 지닌 성격을 규정하는 핵심 형용사로, 폭력과 증오가 지배하는 트로이아 성 안에서 유일하게 온유했던 소통의 방식을 대변한다. 이 형용사는 비극적 영웅의 부드러운 내면을 시청각적으로 형상화한다.",
        "etymology": "어원적으로 PIE *hag- 또는 관련 기층 어원에서 유래한 것으로 추정되며, Beekes(EDG)는 선그리스어 기층 어휘일 가능성도 배제하지 않는다. Chantraine(DELG)은 '빛나는, 부드러운'에서 의미가 전이되어 마음이나 태도가 온유함을 뜻하게 되었다고 설명한다. 고전 시가에서 주로 신체적·성격적 부드러움을 나타내는 시어 주로 사용된다."
      },
      {
        "g": "ἐπέεσσι",
        "pos": "명사",
        "lemma": "ἔπος, εὔεος, τό",
        "parse": "pl.dat.n.",
        "gloss_kr": "말들로",
        "gloss_en": "with words",
        "principalParts": [
          "(미상)",
          "(미상)",
          "(미상)",
          "(미상)",
          "(미상)",
          "(미상)"
        ],
        "syntax": "LFG f-구조에서 도구적 부사어(OBL_INST) 기능을 수행하며, [PRED 'ἔπος', CASE dat, NUM pl, θ-ROLE INSTRUMENT]로 분석된다. c-구조상 여격 명사구로서 앞선 771행의 표현이 반복된 형태이며, 시적 수사법인 에피제시스(epizeuxis) 혹은 반복법을 구성한다.",
        "background": "771행에 이어 다시 한번 '말들(ἐπέεσσι)'을 강조함으로써, 안드로마케는 남편의 물리적 부재 속에서 그의 목소리와 대화만을 유일한 위안이자 실체로 붙들고 있음을 드러낸다. 이 반복은 청중에게 헥토르의 다정함을 각인시키는 극적 효과를 낸다.",
        "etymology": "PIE 재구형 *wekʷ-('말하다')에서 유래한 명사 ĕpos의 여격 복수형이다. Chantraine(DELG)은 호메로스 시가에서 동일 어휘의 반복이 구송시(oral poetry)의 리듬과 감정 고조를 위해 빈번하게 사용된다고 분석한다. 산스크리트어 vácas와 동계어이며, 인도유럽어족의 '말' 관련 어휘 중 가장 오래된 형태 중 하나이다."
      }
    ]
  },
  {
    "ref": "Iliad 24.773",
    "trans": "그러므로 나는 너를 함께 울고, 슬퍼하는 마음으로 나 또한 의지할 데 없는 처지를 운다.",
    "words": [
      {
        "g": "τὼ",
        "pos": "부사",
        "lemma": "τῶ",
        "parse": "adv.",
        "gloss_kr": "그러므로, 따라서",
        "gloss_en": "therefore, thus",
        "syntax": "LFG f-구조에서 문장 전체를 수식하는 부사적 수식어(ADJUNCT)로, [ADJUNCT [PRED 'τῶ', TYPE cause/result]] 기능을 한다. c-구조상 [CP [AdvP τῶ] [IP ...]] 형태로 문장 선두에 위치하여 앞선 인과관계의 결론을 이끈다. 지시사의 속격 형태에서 고착된 부사적 용법이다.",
        "background": "인과관계를 나타내는 '그러므로(τὼ)'는 헥토르의 죽음과 그의 따뜻했던 기억으로부터 도출되는 피할 수 없는 슬픔의 결론을 잇는다. 이 접속부사는 안드로마케가 개인의 비극을 사회적·존재론적 고립으로 확장하는 전환점을 제공한다.",
        "etymology": "PIE 지시사 어근 *to-의 단수 여격 혹은 도구격 형태에서 발달한 호메로스 시어이다. Chantraine(DELG)은 이 형태가 고전 그리스어의 τῷ(그러므로, 이 때문에)의 호메로스식 단축·변형 표기로서 인과관계를 나타내는 부사로 굳어졌음을 밝힌다. 인도유럽어 지시사 패러다임 내에서 격형이 부사화된 전형적인 사례이다."
      },
      {
        "g": "σέ",
        "pos": "대명사",
        "lemma": "σύ, σοῦ, ὁ/ἡ",
        "parse": "sg.acc.m.",
        "gloss_kr": "너를",
        "gloss_en": "thee, you",
        "syntax": "LFG f-구조에서 동사 κλαίω의 직접 목적어(OBJ) 기능을 하며, [PRED 'κλαίω<SUBJ,OBJ>', OBJ [PRED 'σύ', CASE acc, NUM sg, θ-ROLE PATIENT]]로 분석된다. c-구조상 목적격 대명사로 [VP V NP] 구조를 이룬다. 격 지배상 타동사 klaio의 대격 지배를 받는다.",
        "background": "목적어 '너를(σέ)'은 죽은 헥토르를 직접 지칭하며, 슬픔의 대상이 객관적 죽음이 아니라 구체적인 '너'라는 인격체임을 강조한다. 안드로마케의 애도는 추상적인 죽음에 대한 슬픔이 아니라 남편이라는 고유한 존재와의 영원한 이별에 대한 통곡이다.",
        "etymology": "PIE 2인칭 대명사 재구형 *twé(목적격)에서 유래하였다. Beekes(EDG)는 인도유럽어족 전반에 걸쳐 대명사의 사격(oblique cases) 형태가 강세형과 약세형(enclitic)으로 분화되어 발달했음을 설명한다. 산스크리트어 tvā(목적격)와 정확히 일치한다. 그리스어에서 후치사적 또는 독립적 목적격 형태로 두루 사용되었다."
      },
      {
        "g": "θ᾽",
        "pos": "접속사",
        "lemma": "τε",
        "parse": "coord.conj.",
        "gloss_kr": "그리고",
        "gloss_en": "and",
        "syntax": "LFG f-구조상 상관접속사 구문을 형성하여 σέ와 ἔμ᾽(나를)을 대등하게 연결하며, [COORD [σέ, ἔμ᾽]] 구조를 이룬다. c-구조상 후치사로서 첫 번째 목적어 뒤에 붙어 양자 간의 병렬 관계를 통사적으로 매개한다.",
        "background": "상관접속사 τε는 너와 나를 하나의 공동 운명체로 묶어주는 수사적 장치다. 헥토르의 죽음이 곧 안드로마케 자신의 죽음과 다름없다는 일체감을 이 작은 접속사를 통해 강렬하게 표현한다.",
        "etymology": "앞서 등장한 PIE *kʷe('그리고')의 후치사형이다. Chantraine(DELG)은 두 대상이나 절을 짝지어 연결하는 τε... τε 또는 단독 후치 용법이 호메로스 헥사메트로스의 리듬 속에서 대칭 구조를 형성하는 데 핵심적 역할을 한다고 설명한다."
      },
      {
        "g": "ἅμα",
        "pos": "부사",
        "lemma": "ἅμα",
        "parse": "adv.",
        "gloss_kr": "함께, 동시에",
        "gloss_en": "together, at the same time",
        "syntax": "LFG f-구조에서 동반 관계를 나타내는 부사적 수식어(ADJUNCT)로, [ADJUNCT [PRED 'ἅμα', TYPE concomitant]] 기능을 수행한다. c-구조상 [VP AdvP V] 구조에서 동사의 동작이 수반되는 양상을 수식한다. 의미적으로 '너를 우는 것'과 '나를 우는 것'의 동시성을 보장한다.",
        "background": "함께(ἅμα)라는 부사는 남편의 죽음을 애도하는 통곡이 곧 살아남은 아내 자신의 처지를 향한 통곡과 분리될 수 없음을 보여준다. 두 슬픔은 시간적으로나 공간적으로 완전히 포개져 있으며, 이는 운명의 공동체임을 나타낸다.",
        "etymology": "PIE 재구형 *sm̥-('함께, 하나의', 영급 어간)에서 유래하였으며, 그리스어에서 호격·부사적 형태로 정착했다. Beekes(EDG)는 산스크리트어 sa-/sam('함께'), 라틴어 simul('동시에')와 직결되는 인도유럽어 공통의 연대기적 동계어임을 밝힌다. 고전 그리스어에서 동반과 동시성을 나타내는 대표적인 부사이자 전치사로 쓰였다."
      },
      {
        "g": "κλαίω",
        "pos": "동사",
        "lemma": "κλαίω",
        "parse": "1st.sg.pres.ind.act.",
        "gloss_kr": "나는 운다",
        "gloss_en": "I weep, I lament",
        "principalParts": [
          "κλαίω",
          "κλαύσω",
          "ἔκλαυσα",
          "(미상)",
          "κεκλαυσμαι",
          "ἐκλαύσθην"
        ],
        "syntax": "LFG f-구조에서 주절의 PRED 기능을 수행하며, [PRED 'κλαίω<SUBJ,OBJ>', SUBJ [PRED 'ἐγώ', CASE nom], OBJ [PRED 'σέ']] 형태의 논항 구조를 지배한다. c-구조상 [IP ... V]의 핵이며, 현재시제(present)와 능동태(active)를 통해 화자가 현재 겪고 있는 생생하고 지속적인 통곡의 행위를 통사적으로 실현한다.",
        "background": "클라이오(κλαίω)는 소리 내어 우는 통곡을 뜻하는 동사로, 안드로마케의 절제되지 않은 비극적 감정을 직접적으로 드러낸다. 이 현재시제 동사는 청중 앞에서 지금 이 순간에도 계속되고 있는 슬픔의 현장성을 부여한다.",
        "etymology": "PIE 재구형 *kleu̯-('소리내다, 듣다')의 파생 어근에서 발달한 것으로, Chantraine(DELG)은 '소리쳐 울다'의 의미 전이를 설명한다. 게르만어파(예: 고대 고지 독일어 hlūen)와의 연관성이 논의된다. 그리스어에서 소리를 내어 우는 행위를 나타내는 전문 동사로 고착되었으며, 현대 그리스어 κλαίω로 그대로 이어진다."
      },
      {
        "g": "καὶ",
        "pos": "접속사",
        "lemma": "καί",
        "parse": "coord.conj.",
        "gloss_kr": "그리고, 또한",
        "gloss_en": "and, also",
        "syntax": "LFG f-구조상 대등한 목적어 절이나 명사구를 연결하는 등위접속사로, [COORD [σέ, ἔμ᾽]]의 병렬을 확장하거나 강조하는 기능을 한다. c-구조상 [conjP [conj' καί ...]] 구조를 이룬다.",
        "background": "두 번째 '카이(καὶ)'는 헥토르를 향한 애도에서 자신을 향한 애도로 시선을 확장하는 다리 역할을 한다. 남편의 죽음이 곧 나의 죽음이라는 대칭적 비극 구조를 매끄럽게 연결해 준다.",
        "etymology": "앞서 772행에서 다룬 바와 같이 인도유럽어 동계어가 불명확한 그리스어 고유의 접속사로, 대등 연결 및 첨가의 기능을 수행한다."
      },
      {
        "g": "ἔμ᾽",
        "pos": "대명사",
        "lemma": "ἐγώ, ἐμοῦ/μου, ὁ/ἡ",
        "parse": "sg.acc.m./f.",
        "gloss_kr": "나를",
        "gloss_en": "me",
        "syntax": "LFG f-구조에서 분사 아χνυμένη의 논항이거나 묵시적 목적어 기능을 하며, [PRED 'pronoun', CASE acc, NUM sg, θ-ROLE PATIENT]로 분석된다. c-구조상 모음 앞에서 엘리전(elision)을 겪은 단축 목적격 대명사 형태이며, 운율적 제약에 따라 축약된 통사적 형태를 띤다.",
        "background": "엘리전이 일어난 '나를(ἔμ᾽)'이라는 표현은 비탄에 겨워 숨이 가쁘거나 말을 잇지 못하는 화자의 절박한 호흡을 반영한다. 남편뿐만 아니라 자신 역시 애도의 대상이자 비극의 희생자임을 고백하는 순간이다.",
        "etymology": "PIE 1인칭 단수 대명사 재구형 *eg(o̯)H 및 사격 어근 *me-에서 유래하였다. Beekes(EDG)는 1인칭 단수 대명사의 주격과 사격이 서로 다른 어원에서 공급되어 패러다임을 이룬다고 설명한다. 산스크리트어 ahám(주격), mām(목적격)과 동계어이다. 그리스어 시가에서 모음 충돌을 피하기 위해 말음 엘리전 형태인 ἔμ᾽로 빈번히 실현된다."
      },
      {
        "g": "ἄμμορον",
        "pos": "형용사",
        "lemma": "ἄμμορος, ἄμμορον",
        "parse": "sg.acc.f.",
        "gloss_kr": "운 없는, 몫이 없는",
        "gloss_en": "hapless, unblest",
        "syntax": "LFG f-구조에서 대명사 ἔμ᾽를 수식하는 서술형용사(secondary predicate) 혹은 한정형용사로, [PRED 'ἄμμορος', MOD ἔμ᾽, CASE acc, GEND f]로 분석된다. c-구조상 NP 내부 또는 부가어 위치에서 명사의 격과 성(여성 단수 목적격)을 일치시킨다.",
        "background": "아모론(ἄμμορος)은 삶의 행복이나 보호받을 권리의 '몫(μοῖρα)이 없는' 상태를 뜻한다. 헥토르의 죽음으로 인해 안드로마케는 사회적 지위, 남편의 보호, 미래의 안정이라는 모든 삶의 몫을 빼앗긴 비참한 처지로 전락했음을 이 한 단어로 압축한다.",
        "etymology": "부정 접두사 ἀν-/ἀ-와 몫·운명을 뜻하는 명사 μόρος의 합성어에서 유래하였다. Chantraine(DELG)은 PIE 어근 *(s)mer-('할당하다, 몫을 주다')에서 파생된 μόρος에 부정사가 붙어 '좋은 몫이 없는, 운명에 버려진' 뜻을 형성했다고 분석한다. 산스크리트어 smár-('운명')와 동계어이며, 호메로스 시가에서 비극적 인물의 처지를 묘사하는 전형적인 형용사로 쓰인다."
      },
      {
        "g": "ἀχνυμένη",
        "pos": "동사(분사)",
        "lemma": "ἄχνυμαι",
        "parse": "pres.mid.part.sg.nom.f.",
        "gloss_kr": "슬퍼하는, 괴로워하는",
        "gloss_en": "grieving, sorrowing",
        "principalParts": [
          "ἄχνυμαι",
          "(미상)",
          "(미상)",
          "(미상)",
          "(미상)",
          "(미상)"
        ],
        "syntax": "LFG f-구조에서 주어의 심리적 상태를 나타내는 부대 상황 ADJUNCT(분사구문)로 분석되며, [PRED 'ἄχνυμαι', SUBJ 주어(ἐγώ), CASE nom, GEND f]로 기술된다. c-구조상 주절의 주어와 성·수·격(여성 단수 주격) 일치를 이루는 분사구로, 화자의 내면적 고통을 통사적으로 수식한다.",
        "background": "아크휘메네(ἀχνυμένη)는 극심한 정신적 고통과 슬픔으로 속이 끓는 상태를 나타내는 분사다. 안드로마케가 단순한 눈물을 흘리는 것을 넘어, 존재의 근흔이 흔들리는 심리적 파탄 상태에 빠져 있음을 보여준다.",
        "etymology": "PIE 어근 *angh-('조이다, 질식시키다, 괴롭히다')에서 유래한 동사 파생형이다. Chantraine(DELG)은 고통이나 슬픔이 목을 조여오는 듯한 신체적 감각에서 심리적 슬픔으로 의미가 전이되었다고 설명한다. 라틴어 angere('괴롭히다'), 독일어 eng('좁은')와 동계어이다. 호메로스 시가에서 비탄에 잠긴 영웅들의 전형적인 상태를 묘사하는 데 쓰인다."
      },
      {
        "g": "κῆρ",
        "pos": "명사",
        "lemma": "κῆρ, κῆρος, τό",
        "parse": "sg.nom.n.",
        "gloss_kr": "마음속에, 가슴으로",
        "gloss_en": "at heart, in spirit",
        "syntax": "LFG f-구조에서 부사적 여격 또는 한정적 대격(adverbial/accusative of respect) 혹은 독립된 주격 성분으로 분석되며, [PRED 'κῆρ', CASE nom/acc, θ-ROLE LOCATIVE/EXPERIENCER]로 나타낸다. c-구조상 심리적 내면의 장소나 감정의 주체를 한정하는 명사구로 기능한다.",
        "background": "케르(κῆρ)는 단순한 육체적 심장이 아니라 인간의 감정과 생명력이 거주하는 가장 깊은 내면을 뜻한다. 슬픔이 마음의 근원까지 깊숙이 파고들었음을 나타내며, 안드로마케의 비극이 일시적 감정이 아니라 내면 전체를 잠식한 상태임을 보여준다.",
        "etymology": "PIE 재구형 *krd-('심장', 영급 어간)에서 유래하였으며, 그리스어에서 자음 변화와 함께 명사 κῆρ(중성) 및 καρδία(여성)로 분화되었다. Beekes(EDG)는 산스크리트어 hṛd-, 라틴어 cor, 영어 heart와 완벽하게 대응하는 인도유럽어족의 대표적 신체어휘 어근임을 강조한다. 호메로스 시가에서 감정의 주체나 중심지를 나타내는 시어로 빈번히 쓰인다."
      }
    ]
  },
  {
    "ref": "Iliad 24.774",
    "trans": "왜냐하면 내게는 이제 넓은 트로ีย에 다른 이 아무도",
    "words": [
      {
        "g": "οὐ",
        "pos": "부사",
        "lemma": "οὐ",
        "parse": "neg.adv.",
        "gloss_kr": "아니, 않다",
        "gloss_en": "not",
        "syntax": "LFG f-구조에서 문장 전체 또는 술어의 부정(NEG) 자질을 부여하는 부정부사로, [ADJUNCT [PRED 'οὐ', TYPE negation]] 기능을 한다. c-구조상 직설법 동사 앞 통사적 위치에 선행하여 명제적 내용 전체를 부정한다.",
        "background": "부정어 '우(οὐ)'는 안드로마케가 마주한 절대적 고립과 예외 없는 단절을 선언하는 문법적 장치다. 이 부정은 트로이아 성 전체에 자신을 보호해 줄 사람이 '단 한 명도 없다'는 극단적인 절망감을 강조한다.",
        "etymology": "PIE 재구형 *h₂e्यू 에서 유래한 부정사로, 그리스어에서 모음 환경에 따라 ou, ouk, oux로 분화되었다. Chantraine(DELG)은 직설법 문장의 객관적 부정을 담당하는 기본 어휘임을 밝힌다. 산스크리트어 avā(아니다, 아래로) 등과 어원적 연관성이 논의된다. 고전 그리스어 전반에 걸쳐 가장 핵심적인 부정사로 기능한다."
      },
      {
        "g": "γάρ",
        "pos": "접속사",
        "lemma": "γάρ",
        "parse": "coord.conj.",
        "gloss_kr": "왜냐하면, 실로",
        "gloss_en": "for, because",
        "syntax": "LFG f-구조상 앞선 발화에 대한 이유나 근거를 제시하는 접속사로, [ADJUNCT [PRED 'γάρ', TYPE causal]] 기능을 수행한다. c-구조상 문장 두 번째 위치(postpositive)에 놓이는 대표적인 후치 접속사이다. 통사적으로 상위 명제와 하위 근거 절을 인과적으로 매개한다.",
        "background": "이유를 나타내는 접속사 '가르(γάρ)'는 자신이 왜 그토록 비참하게 통곡할 수밖에 없는지, 그 객관적이고 잔인한 현실적 근거를 설명하기 시작하는 전환점이다. 감정적 통곡에서 냉혹한 현실 분석으로 논리가 이동한다.",
        "etymology": "그리스어 고유의 어원으로, γε('참으로')와 ἄρα('그러므로')의 결합에서 발달한 것으로 추정된다. Chantraine(DELG)은 두 입자(particle)의 융합을 통해 인과와 설명의 기능을 획득했다고 분석한다. 인도유럽어 내부에 직계 동계어가 명확하지 않으나, 그리스어 서사시와 산문 전반에서 이유를 이끄는 가장 필수적인 후치사로 정착했다."
      },
      {
        "g": "τίς",
        "pos": "대명사",
        "lemma": "τίς, τί",
        "parse": "sg.nom.m./f.",
        "gloss_kr": "어떤 이, 누군가",
        "gloss_en": "anyone, someone",
        "syntax": "LFG f-구조에서 부정어와 결합하여 '아무도 … 않다'의 의미를 구성하는 부정인칭대명사(indefinite pronoun)로, [PRED 'τίς', SUBJ 주어 자리] 기능을 한다. c-구조상 [IP ... 부정어 ... τίς] 구조에서 주어 논항을 형성한다.",
        "background": "부정어와 함께 쓰여 '어떤 이도 없다'는 의미를 자아내는 '티스(τίς)'는 트로이아라는 거대한 도시 안에서 안드로마케가 처한 완전한 인간적 진공 상태를 보여준다. 수많은 사람들이 성 안에 살고 있음에도 그녀에게는 단 한 사람의 타인도 존재하지 않는다.",
        "etymology": "PIE 의문/부정 대명사 재구형 *kʷi-/kʷo-에서 유래하였다. Beekes(EDG)는 라틴어 quis, 산스크리트어 kás와 완벽히 대응하는 인도유럽어족 공통의 대명사 어근임을 밝힌다. 그리스어에서 의문사(τίς; 누구?)뿐만 아니라 부정사와 결합하여 부정인칭대명사(누군가)로 쓰이는 문법적 기능을 발달시켰다."
      },
      {
        "g": "μοι",
        "pos": "대명사",
        "lemma": "ἐγώ, ἐμοῦ/μου, ὁ/ἡ",
        "parse": "sg.dat.",
        "gloss_kr": "나에게",
        "gloss_en": "to me, for me",
        "syntax": "LFG f-구조에서 소유격 또는 이익/피해 여격(dative of advantage/disadvantage 또는 possessive dative)으로 분석되며, [PRED 'pronoun', CASE dat, NUM sg, θ-ROLE EXPERIENCER/POSSESSOR]로 나타낸다. c-구조상 여격 대명사로서 문장 내 심리적 귀속점을 설정한다.",
        "background": "여격 '모이(μοι, 내게는)'는 이 모든 비극과 고립이 객관적 상황이 아니라 안드로마케 자신의 실존적 삶에 직접적으로 가해지는 고통임을 강조한다. 그녀의 주위에는 타인이 없다는 사실이 온전히 그녀의 몫으로 남겨져 있다.",
        "etymology": "PIE 1인칭 단수 대명사 사격 어근 *me-에서 유래한 단축 여격형이다. Chantraine(DELG)과 Beekes(EDG)는 인도유럽어족의 1인칭 단수 여격 형태(*moi)와 직접 일치함을 확인한다. 산스크리트어 me, 라틴어 mihi의 어원적 배경과 평행을 이룬다. 후치사적 성격을 띠어 문장 내에서 가벼운 강세로 발음된다."
      },
      {
        "g": "ἔτ᾽",
        "pos": "부사",
        "lemma": "ἔτι",
        "parse": "adv.",
        "gloss_kr": "더 이상, 아직",
        "gloss_en": "longer, still",
        "syntax": "LFG f-구조에서 시간적 지속 혹은 부정어와 결합해 '더 이상 ~않다'를 뜻하는 양태 부사(ADJUNCT)로, [ADJUNCT [PRED 'ἔτι', TYPE temporal/aspectual]] 기능을 한다. c-구조상 모음 앞에서 엘리전을 겪은 ἔτ᾽ 형태로 부사적 수식어 자리를 점한다.",
        "background": "부정어와 결합하여 '더 이상(ἔτι)'이라는 시간적 단절을 나타낸다. 과거에는 보호자가 있었으나 이제는 그마저도 영원히 사라졌다는 과거와 현재의 극적 단절을 통사적 장치를 통해 보여준다.",
        "etymology": "PIE 재구형 *eti('게다가, 더욱이, 아직')에서 유래하였다. Beekes(EDG)는 라틴어 et('그리고'), 산스크리트어 áti('넘어서, 초과하여')와 동계어임을 밝힌다. 그리스어에서 시간적 지속이나 '여전히, 아직도'를 뜻하다가 부정어와 만나 '더 이상 ~않다'라는 의미 영역으로 확장되었다."
      },
      {
        "g": "ἄλλος",
        "pos": "형용사",
        "lemma": "ἄλλος, ἄλλη, ἄλλο",
        "parse": "sg.nom.m.",
        "gloss_kr": "다른",
        "gloss_en": "other, another",
        "syntax": "LFG f-구조에서 명사 주어를 수식하는 한정형용사로, [PRED 'ἄλλος', MOD ἄλλος, GEND m, CASE nom] 기능을 한다. c-구조상 주어 명사구 내부의 수식어 자리를 점하며, 유일한 보호자였던 헥토르 이외의 '다른' 존재를 배제하는 통사적 수단이 된다.",
        "background": "알로스(ἄλλος)는 헥토르를 대체할 수 있는 '다른 사람'의 존재 가능성을 원천적으로 차단한다. 트로이아 성 전체를 통틀어 헥토르와 같은 위치에 설 수 있는 인간은 단 한 명도 없다는 절대적 유일성을 강조한다.",
        "etymology": "PIE 재구형 *h₂el-('다른')에서 유래한 형용사로, 라틴어 alius, 고대 아일랜드어 aile과 직결된다. Chantraine(DELG)은 인도유럽어족 전반에 걸쳐 '다른'이라는 개념을 나타내는 표준 어근임을 설명한다. 그리스어에서 명사화되거나 형용사로 쓰여 타자성을 표현하는 핵심 어휘로 정착했다."
      },
      {
        "g": "ἐνὶ",
        "pos": "전치사",
        "lemma": "ἐν",
        "parse": "prep.",
        "gloss_kr": "~안에, ~에서",
        "gloss_en": "in, among",
        "syntax": "LFG f-구조에서 처소적 의미를 지배하는 전치사구의 핵(head)이며, [OBL_LOC [PRED 'ἐν', OBJ [PRED 'Τροίῃ', CASE dat]]]로 분석된다. c-구조상 여격 명사구를 지배하는 전치사로 호메로스어의 확장형 ἐνί 형태를 띤다.",
        "background": "전치사 '에니(ἐνὶ)'는 트로이아라는 물리적 공간 안을 구체적으로 한정한다. 성벽 안의 넓은 공간이 그녀에게는 보호와 안식이 아니라 고립과 두려움의 감옥으로 작용하고 있음을 공간적 배경을 통해 드러낸다.",
        "etymology": "PIE 재구형 *en('~안에')의 확장 형태이다. Beekes(EDG)는 라틴어 in, 영어 in과 완벽히 대응하는 인도유럽어 공통의 처소 전치사임을 밝힌다. 그리스어 시가에서 운율 조절과 호메로스적 격식체를 위해 단음절 ἐν 대신 이음절 ἐνί가 빈번히 활용된다."
      },
      {
        "g": "Τροίῃ",
        "pos": "명사",
        "lemma": "Τροίη, Τροίης, ἡ",
        "parse": "sg.dat.f.",
        "gloss_kr": "트로이아에서, 트로이아 안에",
        "gloss_en": "in Troy",
        "syntax": "LFG f-구조에서 전치사 ἐνὶ의 목적어(OBL_LOC의 OBJ) 기능을 수행하며, [PRED 'Τροίη', CASE dat, NUM sg, GEND f]로 분석된다. c-구조상 고유명사 여격 형태로서 처소 부사구의 핵을 이룬다.",
        "background": "트로이아(Τροίη)는 전쟁의 중심이자 멸망을 향해 치닫는 저주받은 도시 공간이다. 안드로마케에게 이 거대한 도시는 남편을 잃고 적들 사이에서 홀로 방치된 거대한 유배지와 같다.",
        "etymology": "그리스 신화의 영웅 트로스(Τρώς)의 이름에서 파생된 지명으로, 선그리스어 기층 지명 요소가 포함되어 있을 가능성이 제기된다. Chantraine(DELG)은 트로이아 전쟁의 배경이 되는 소아시아의 고대 도시 이름으로 고전 그리스어 및 서사시 전반에 고정되었다고 설명한다."
      },
      {
        "g": "εὐρείῃ",
        "pos": "형용사",
        "lemma": "εὐρύς, εὐρεῖα, εὐρύ",
        "parse": "sg.dat.f.",
        "gloss_kr": "넓은, 광활한",
        "gloss_en": "broad, wide",
        "syntax": "LFG f-구조에서 고유명사 Τροίῃ를 수식하는 한정형용사로, [PRED 'εὐρύς', MOD Τροίῃ, CASE dat, GEND f] 기능을 한다. c-구조상 수식어와 피수식어 간의 성·수·격(여성 단수 여격) 일치를 이룬다.",
        "background": "형용사 '유레이에(εὐρείῃ, 넓은)'는 트로이아의 물리적 광대함을 뜻하지만, 아이러니하게도 안드로마케에게는 그 넓음이 곧 안식처 없는 허허벌판과 같은 절대적 고독을 시각화하는 수식어로 기능한다. 공간이 넓을수록 그 안에 홀로 남겨진 외로움은 극대화된다.",
        "etymology": "PIE 재구형 *u̯ruH-('넓은, 광대한', e급 어간)에서 유래하였다. Beekes(EDG)는 산스크리트어 urú-('넓은')와 완벽히 대응하는 인도유럽어 공통 어휘임을 밝힌다. 그리스어에서 물리적 공간이나 대지를 수식하는 고정된 서사시적 수식어(epithet)로 광범위하게 쓰인다."
      }
    ]
  },
  {
    "ref": "Iliad 24.775",
    "trans": "다정하지도, 친근하지도 않으니, 모든 이들이 내게 공포를 느끼기 때문이라오.",
    "words": [
      {
        "g": "ἤπιος",
        "pos": "형용사",
        "lemma": "ἤπιος, ἤπιον",
        "parse": "sg.nom.m.",
        "gloss_kr": "다정한, 상냥한",
        "gloss_en": "gentle, kindly",
        "syntax": "LFG f-구조에서 술어(PRED) 또는 보어 역할을 하며, [PRED 'ἤπιος', SUBJ (내게 다정한 이), CASE nom] 구조를 이룬다. c-구조상 서술격 형용사로 주어와 성·수·격(남성 단수 주격) 일치를 보이며, 인간적 온정의 부재를 선언한다.",
        "background": "에피오스(ἤπιος)는 타인에게 베푸는 온화하고 자애로운 태도를 뜻한다. 성 안의 그 누구도 자신에게 이런 온정을 베풀어주지 않는다는 호소는, 헥토르의 죽음이 단순히 한 남자의 상실이 아니라 성 전체로부터의 사회적 추방을 의미함을 보여준다.",
        "etymology": "PIE 재구형 *yēw- 또는 관련 어근에서 유래한 것으로 추정되며, Chantraine(DELG)은 어원적 기원이 명확하지 않으나 그리스어 시가에서 마음에 평안을 주는 성품을 나타내는 고유 어휘로 정착했다고 본다. 고전 그리스어에서 신이나 가족이 인간에게 베푸는 자애로움을 표현하는 핵심 형용사이다.",
        "principalParts": [
          "(미상)",
          "(미상)",
          "(미상)",
          "(미상)",
          "(미상)",
          "(미상)"
        ]
      },
      {
        "g": "οὐδὲ",
        "pos": "접속사",
        "lemma": "οὐδέ",
        "parse": "coord.conj.",
        "gloss_kr": "~도 아니요, 그리고 ~않다",
        "gloss_en": "nor, and not, not even",
        "syntax": "LFG f-구조상 부정의 병렬을 이끄는 접속사로, [COORD [ἤπιος, φίλος]]를 대등하게 연결하며 부정의 의미를 전개한다. c-구조상 [conjP [conj' οὐδέ ...]] 구조를 형성한다.",
        "background": "우데(οὐδὲ)는 헥토르를 제외한 트로이아인들이 자애롭지도 않고 친근하지도 않다는 점을 거듭 강조하며, 두 가지 결핍(다정함과 친밀함)을 연쇄적으로 부정하는 수사적 연결사다.",
        "etymology": "부정부사 οὐ와 첨가/대등 접속사 δέ의 융합형이다. Chantraine(DELG)은 두 요소의 결합을 통해 '~도 아니다, 그리고 ~않다'라는 누적적 부정의 기능을 획득했다고 설명한다. 그리스어 산문과 시가 전반에 걸쳐 부정의 범위를 확장하거나 대상을 추가할 때 빈번히 사용된다."
      },
      {
        "g": "φίλος",
        "pos": "형용사",
        "lemma": "φίλος, φίλη, φίλον",
        "parse": "sg.nom.m.",
        "gloss_kr": "친근한, 사랑스러운",
        "gloss_en": "dear, friendly, beloved",
        "syntax": "LFG f-구조에서 술어 보어 역할을 하며, [PRED 'φίλος', SUBJ (내게 친근한 이), CASE nom]로 분석된다. c-구조상 서술격 형용사로 주어와 성·수·격 일치를 이루며, 인간적 유대 관계의 단절을 표현한다.",
        "background": "필로스(φίλος)는 단순한 친구를 넘어 혈연이나 깊은 애정으로 맺어진 친밀한 관계를 뜻한다. 트로이아 성 안에 자신을 진정한 '내 사람'이나 친구로 여겨줄 사람이 단 한 명도 없다는 고백은 난공불락의 성에 갇힌 이방인과 같은 고독을 드러낸다.",
        "etymology": "PIE 재구형 *pheli-('사랑하다, 친근하다')에서 유래한 것으로 추정되며, Beekes(EDG)는 인도유럽어족 내에서 애정과 소속을 나타내는 대표적 어근으로 분류한다. 산스크리트어 priyá-('사랑스러운, 친근한')와 직접적인 음운론적·의미론적 동계어이다. 그리스어에서 친밀한 관계와 소유를 나타내는 핵심 형용사이자 명사로 발달했다."
      },
      {
        "g": "πάντες",
        "pos": "형용사",
        "lemma": "πᾶς, πᾶσα, πᾶν",
        "parse": "pl.nom.m.",
        "gloss_kr": "모든 이들이",
        "gloss_en": "all",
        "syntax": "LFG f-구조에서 주어 논항인 명사구의 핵 또는 수식어로, [PRED 'πᾶς', SUBJ 주어 자리, CASE nom, NUM pl, GEND m] 기능을 수행한다. c-구조상 주어 NP의 한정사 위치에서 예외 없는 전체 집합을 지칭한다.",
        "background": "판테스(πάντες, 모든 이들이)는 트로이아의 왕족, 시민, 남녀노소를 막론하고 성 안의 모든 사람이 안드로마케에게 등을 돌렸음을 선언한다. 예외가 전혀 없다는 점에서 이 고립은 구조적이고 절대적이다.",
        "etymology": "PIE 재구형 *plet- 또는 *paNt-('모든, 전체의')에서 유래하였다. Chantraine(DELG)은 라틴어 pūrus나 게르만어파의 관련 어휘들과의 연관성을 검토하나 그리스어 고유의 전형적인 형용사 변화 패러다임으로 정착했다고 본다. 고전 그리스어 전체에서 총체성과 전체 집합을 나타내는 가장 보편적인 대명사적 형용사이다."
      },
      {
        "g": "δέ",
        "pos": "접속사",
        "lemma": "δέ",
        "parse": "coord.conj.",
        "gloss_kr": "그리고, 반면에",
        "gloss_en": "and, but",
        "syntax": "LFG f-구조상 앞선 절과 대조적 혹은 순행적 연결을 맺는 등위접속사로, [ADJUNCT [PRED 'δέ', TYPE coordinating]] 기능을 한다. c-구조상 문장 내 두 번째 위치(postpositive)에 놓이는 후치사이다.",
        "background": "접속사 '데(δέ)'는 앞서 나열된 부재의 상태(다정함과 친밀함의 결여)에 이어, 모든 사람들이 그녀를 향해 보이는 능동적이고 두려운 반응을 대조적으로 이끌어낸다.",
        "etymology": "PIE 대조·연결 입자에서 유래한 것으로 추정되며, Chantraine(DELG)은 문장 간의 가벼운 연결이나 대조를 나타내는 데 필수적인 후치 접속사임을 밝힌다. 인도유럽어 내에서 독립된 어원이 명확하지 않으나 그리스어 산문과 운문 전반에 광범위하게 쓰인다."
      },
      {
        "g": "με",
        "pos": "대명사",
        "lemma": "ἐγώ, ἐμοῦ/μου, ὁ/ἡ",
        "parse": "sg.acc.",
        "gloss_kr": "나를",
        "gloss_en": "me",
        "syntax": "LFG f-구조에서 동사 πεφρίκασιν의 목적어(OBJ) 기능을 하며, [PRED 'πεφρίκασιν<SUBJ,OBJ>', OBJ [PRED 'ἐγώ', CASE acc, NUM sg, θ-ROLE PATIENT]]로 분석된다. c-구조상 목적격 대명사로 타동사의 직접 지배를 받는다.",
        "background": "목적어 '메(με, 나를)'는 타인들의 두려움과 회피의 대상이 바로 이 가엾은 화자 자신임을 명시한다. 남편의 죽음 이후 그녀는 보호받아야 할 아내가 아니라, 재앙을 불러온 장본인이나 두려운 존재로 성 안 사람들에게 인식되고 있음을 보여준다.",
        "etymology": "앞서 다룬 PIE 1인칭 단수 사격 대명사 어근 *me-의 목적격 형태이다. Chantraine(DELG)과 Beekes(EDG)에 따르면 인도유럽어족 전반에 걸쳐 대명사 목적격의 보편적 형태를 유지한다."
      },
      {
        "g": "πεφρίκασιν",
        "pos": "동사",
        "lemma": "φρίσσω",
        "parse": "3rd.pl.perf.ind.act.",
        "gloss_kr": "몸서리치며 두려워한다",
        "gloss_en": "they have shuddered at, they shrink from",
        "principalParts": [
          "φρίσσω",
          "φρίξω",
          "ἔφριξα",
          "πεφρικα",
          "(미상)",
          "(미상)"
        ],
        "syntax": "LFG f-구조에서 주절의 PRED 기능을 수행하며, [PRED 'φρίσσω<SUBJ,OBJ>', SUBJ [PRED 'πάντες', CASE nom, NUM pl], OBJ [PRED 'ἐγώ', CASE acc]] 형태의 논항 구조를 지배한다. c-구조상 [IP ... V]의 핵이며, 완료시제(perfect)를 통해 과거의 충격과 공포가 현재까지 지속되어 온태도를 통사적으로 나타낸다.",
        "background": "페프리카신(πεφρίκασιν)은 공포나 추위로 인해 피부가 곤두서고 몸서리치는 상태를 뜻하는 완료시제 동사다. 트로이아인들이 안드로마케를 대할 때 단순한 연민이 아니라 그녀를 마치 재앙의 전조처럼 여겨 몸서리치며 피하고 있음을 보여준다. 이 동사는 그녀의 고립이 정점에 달했음을 비극적으로 각인시키며 일리아스의 마지막 비탄을 완성한다.",
        "etymology": "PIE 어근 *preg- 또는 관련 음운 교체형에서 유래한 것으로 추정되며, Chantraine(DELG)은 '털이 곤두서다, 몸서리치다'라는 신체적 반응에서 심리적 공포로 의미가 전이되었다고 설명한다. 라틴어 horrēre의 일부 음운-의미적 평행을 이룬다. 호메로스 시가에서 공포나 경외감으로 인해 신체적 전율을 일으키는 상태를 묘사하는 고유 시어이다."
      }
    ]
  },
  {
    "ref": "Iliad 6.776",
    "trans": "그렇게 울며 말하니, 끝없는 백성들이 그 뒤에서 흐느껴 울었다.",
    "words": [
      {
        "g": "ὣς",
        "pos": "부사",
        "lemma": "ὣς",
        "parse": "demons.adv.",
        "gloss_kr": "이와 같이, 그렇게",
        "gloss_en": "thus, so",
        "syntax": "LFG f-구조에서 이 지시부사는 ADJUNCT 기능을 수행하며, [ADJUNCT [PRED 'ὣς', MOD ἳς-clause]] 형태로 서술절 전체를 수식한다. 생성문법적 관점에서 이는 상위 접속사구(CP)의 지정어 자리나 전치된 부사구 위치에 병합된 것으로 분석되며, 괄호 구조로는 [AdP ὣςᵢ] [IP tᵢ ...]]와 같이 이동 또는 구형상 상위 수식어로 처리된다. 레빈슨式 화용론에서는 앞선 담화 맥락을 가리키는 전향 직시(anaphora) 기능을 담당하여 담화 응집성을 높인다.",
        "background": "이 구절은 헥토르의 아내 안드로마케가 남편의 죽음을 예감하며 울부짖는 장면에 이어진다. 백성들의 집단적 흐느낌은 한 영웅의 죽음이 단순히 한 가정의 비극을 넘어 트로이아 공동체 전체의 파멸을 예고하는 거대한 사건임을 극적으로 보여준다. 호메로스는 개인의 비탄을 대중의 비탄과 교차시켜 서사의 정서적 울림을 극대화한다.",
        "etymology": "PIE 지시 대명어 어근 *swō- 또는 *so-에 기원하며, 후두음이론 관점에서 직시형 *s-에 조어적 형태가 파생된 것으로 본다. Chantraine(DELG)은 이 형태가 그리스어 내에서 부사화 접미사와 결합하여 고정된 양태 부사로 발달했다고 설명한다. 라틴어 sic 및 고대 고지독일어 sus와 동계어이며, 인도유럽어족 전반에 걸쳐 공통으로 잔존하는 지시적 양태 표현이다. 현대 그리스어에서는 고전 시문학 인용이나 격식체 표현인 'ὡς' 및 관련 복합 부사 형태로 명맥이 이어진다."
      },
      {
        "g": "ἔφατο",
        "pos": "동사",
        "lemma": "φημί",
        "principalParts": "φημί – φήσω – ἔφησα – – – (미상)",
        "parse": "3rd.sg.impf.ind.mid.",
        "gloss_kr": "말하였다",
        "gloss_en": "she spoke",
        "syntax": "LFG f-구조에서 이 동사는 PRED이며, [PRED 'φημί<SUBJ>', SUBJ [PRED 'γυνή/andro.', CASE nom, θ-ROLE AGENT]] 형태로 주어 논항을 지배한다. 생성문법적 격 이론에 따라 주어는 [Spec, IP]에서 주격(nominative)을 부여받으며, 미드-패시브(middle voice) 형태는 행위의 주체와 영향 받는 지점이 밀접히 연관된 호메로스 서사시적 용법을 반영한다. 구조적으로는 V-to-T 이동이 일어난 구문으로 분석된다.",
        "background": "인물들의 직접 화법을 도입하거나 매듭짓는 호메로스 서사시의 전형적인 화행 공식구(formulaic expression)다. 안드로마케의 비통한 대사를 감싸며 청중의 감정을 환기시키는 서사적 장치로 기능한다. 구비문학 전통 속에서 음유시인들이 서사의 흐름을 조절하기 위해 빈번하게 사용하는 필수적인 틀이다.",
        "etymology": "PIE 어근 *bʰeh₂-('말하다')에서 유래하며, e급 어간과 후두음 *h₂를 포함한다(상세 논의는 Chantraine, DELG 참조). 라틴어 fari('말하다'), 영어 ban 및 12월을 뜻하는 fate 등의 어원과 연결되는 강력한 인도유럽어 동계어다. 그리스어 내에서 이 동사는 비인칭 또는 인칭 형태의 다양한 담화 표지 역할을 하도록 의미가 분화되었다. 현대 그리스어에서는 동사 형태 자체가 직접 쓰이기보다 'φανερός'(명백한) 등 파생 어휘를 통해 어간의 흔적이 남아 있다."
      },
      {
        "g": "κλαίουσ᾽",
        "pos": "동사(분사)",
        "lemma": "κλαίω",
        "principalParts": "κλαίω – κλαύσομαι / κλαυσοῦμαι – ἔκλαυσα – κέκλαυμαι – κέκλαυσμαι – ἐκλαύσθην",
        "parse": "pres.act.part.sg.nom.f.",
        "gloss_kr": "울면서",
        "gloss_en": "weeping",
        "syntax": "LFG f-구조에서 이 분사는 ADJUNCT(부사절 분사) 기능을 하며, 주절 동사 ἔφατο의 주어와 주체 일치를 이루는 [XADJUNCT]로 통사 관계를 맺는다. 생성문법적으로는 비정형 절(small clause/participial phrase)을 형성하여 [TP PROᵢ [VP κλαίουσα tᵢ]] 구조로 주어와 제어(control) 관계에 놓인다. 시제상 주절 동사와 동시적 상황(simultaneity)을 나타낸다.",
        "background": "안드로마케가 남편의 비참한 최후와 유아로 남을 아스티아낙스의 운명을 슬퍼하며 눈물 흘리는 처절한 모습을 시각화한다. 호메로스는 인물의 물리적 행동과 발화를 동시에 묘사하여 비극성을 극대화한다. 이 눈물은 단순한 슬픔을 넘어 트로이아 성 전체가 직면한 종말의 암시다.",
        "etymology": "PIE 재구형 *kleu̯-('소리치다, 울부짖다')에 기반하며, 비음 확장 또는 이중모음 어간 교체 양상을 보인다(Beekes, EDG 참조). 라틴어 clare('소리치다')의 어원적 계열과 연결되거나 청각적 반응에서 감정적 울음으로 의미 전이가 일어났다. 음운론적으로 호메로스 방언에서 모음 축약과 엘리전(κλαίουσα > κλαίουσ᾽)을 겪으며 운율에 맞추어 변형되었다. 현대 그리스어 'κλαίω'(울다)로 직접 이어져 일상어의 핵심 어휘로 살아남아 있다."
      },
      {
        "g": "ἐπὶ",
        "pos": "전치사",
        "lemma": "ἐπί",
        "parse": "prep. (governing gen.)",
        "gloss_kr": "~에 덧붙여, ~에 대항하여 / 이어서",
        "gloss_en": "upon, besides, in addition to",
        "syntax": "LFG f-구조에서 이 전치사는 OBL(지배어) 또는 ADJUNCT를 구성하며, 후행하는 속격 명사 구를 격 지배(case government)하여 처소적·방향적·첨가적 의미를 부여한다. 생성문법적으로는 P' 구문의 핵(head)으로 기능하며, 보어인 PP 안에서 DP의 속격을 허가(license)한다. 어순상 전치사 본래의 위치이나 호메로스 시문학에서는 때로 도치(anastrophe)되기도 한다.",
        "background": "비탄에 잠긴 안드로마케의 울음 위에 백성들의 곡성이 겹쳐지는 공명(resonance)의 공간을 설정한다. 시각적 슬픔이 청각적 비탄으로 확장되는 전향적 연결고리 역할을 한다. 트로이아 백성들의 반응이 왕비의 슬픔과 유기적으로 결합됨을 보여준다.",
        "etymology": "PIE 접두사/전치사 재구형 *epi 또는 *opi('~ 위에, 가까이에')에서 기원한다(Chantraine, DELG). 산스크리트어 ápi('또한, ~에')와 아베스타어 aipi와 정확히 대응하는 인도유럽어 공통 유산이다. 음운론적으로 강세 위치에 따라 악센트 이동(anastrophe) 현상을 겪으며 고전 그리스어 통사론의 골격을 형성했다. 현대 그리스어 전치사 및 접두사 'επί-'로 계승되어 '위에, 담당하여' 등의 의미로 널리 쓰인다."
      },
      {
        "g": "δ᾽",
        "pos": "접속사",
        "lemma": "δέ",
        "parse": "coord.conj.",
        "gloss_kr": "그리고, 그러나",
        "gloss_en": "and, but",
        "syntax": "LFG f-구조에서 두 절을 대등하게 연결하는 [COORD-CONJ] 자리를 차지하며, 문장 간 비대칭적 정보 구조를 매개한다. 생성문법적으로는 좌측 전위된 구문이나 두 개의 독립된 IP/CP를 결합하는 좌표 접속 핵(Coordinating Head)으로 분석된다. 후치사(postpositive) 성격으로 인해 문장 두 번째 자리에 고정되는 통사적 제약을 받는다.",
        "background": "개인의 곡성(안드로마케)과 대중의 곡성(백성들)을 매끄럽게 접속하면서도 대조적 울림을 부여하는 장치다. 호메로스 서사시가 거대한 군중의 반응으로 시선을 확장할 때 필수적으로 동원되는 문장 연결 고리다. 서사의 리듬감을 유지하는 핵심 역할을 한다.",
        "etymology": "PIE 지시적·대조적 불변화사 계열에 기원하며, 명확한 단독 재구형보다는 유력한 축약형 파생물로 본다(Beekes, EDG). 인도유럽어족 내에서 대조와 병렬을 나타내는 공통 기능을 담당해왔다. 그리스어 문장 구조 안에서 후치사로 고착되는 음운·통사적 변화를 겪었다. 현대 그리스어에서는 구어체와 문어체 전반에서 대조·접속 기능의 'δὲ / δ'로 그 전통이 이어지고 있다."
      },
      {
        "g": "ἔστενε",
        "pos": "동사",
        "lemma": "στενάζω",
        "principalParts": "στενάζω – στενάξω – ἐστέναξα – – – (미상)",
        "parse": "3rd.sg.impf.ind.act.",
        "gloss_kr": "흐느껴 울었다, 신음하였다",
        "gloss_en": "groaned, wailed",
        "syntax": "LFG f-구조에서 이 동사는 PRED 논항구조 [PRED 'στενάζω<SUBJ>', SUBJ [PRED 'δῆμος', CASE nom, θ-ROLE AGENT]]를 지배한다. 생성문법적으로는 미완료시제(imperfect)의 상(aspect)적 특성을 지녀, 과거 일정 시점에 지속적으로 일어난 배경적 행위를 나타내며 [TP T [vP 주어 [VP tv ]]] 구조에서 시제 핵과 결합한다. 주어와 수 사이의 일치(agreement)가 엄격히 지켜진다.",
        "background": "왕비의 개인적 곡성에 반응하여 트로이아 전체 백성들이 터뜨리는 거대한 비탄의 소리를 형상화한다. 국가적 재난 앞에서 왕과 백성이 일체화되어 슬픔을 나누는 유대감을 보여준다. 이 신음 소리는 트로이아의 운명이 기울었음을 알리는 청각적 상징이다.",
        "etymology": "PIE 온성 자음 또는 의성어 계열 어근 *sten-('신음하다, 쿵 소리를 내다')에서 유래한다(Chantraine, DELG). 산스크리트어 stanati('소리 내다, 우렁차게 울다')와 고대 고지독일어 stonan과 직접 동계어다. 음운론적으로 현재형 파생 과정에서 접미사 확장과 불완전 과거 시제의 접두음(augment) 'ἐ-' 결합 규칙을 충실히 따른다. 현대 그리스어에서는 'στενάζω'(한숨 쉬다, 신음하다)의 형태로 남아 일상 생활에서 비탄의 감정을 나타내는 데 쓰인다."
      },
      {
        "g": "δῆμος",
        "pos": "명사",
        "lemma": "δῆμος, δῆμου, ὁ",
        "parse": "sg.nom.m.",
        "gloss_kr": "백성, 민중",
        "gloss_en": "people, crowd",
        "syntax": "LFG f-구조에서 이 명사는 문장의 SUBJ 기능을 수행하며, [PRED 'δῆμος', CASE nom, θ-ROLE AGENT] 자격으로 동사 ἔστενε의 논항을 채운다. 생성문법적으로는 [Spec, IP]에 위치하여 주격 자질을 확인받는다. 집합명사이면서도 단수형태로 복수적 의미의 군중을 지칭하는 통사적 특성을 보인다.",
        "background": "귀족이나 영웅 중심의 서사에서 이례적으로 트로이아의 일반 대중(민중)의 집단적 슬픔을 조명하는 단어다. 전쟁의 참혹함이 특정 영웅 개인에게만 국한되지 않고 성 안의 모든 백성에게 가해지는 고통임을 폭로한다. 훗날 아테네 민주정의 기초가 되는 '데모스(demos)' 개념의 서사시적 기원을 보여준다.",
        "etymology": "PIE 재구형 *deh₂-('자르다, 나누다') 또는 토지·구역 분할을 뜻하는 어근에서 파생된 것으로 추정되며, Beekes(EDG)는 인도유럽어 전통 속에서 '땅을 공유하는 공동체/사람들'로 의미가 전이되었다고 본다. 라틴어 liber의 어원적 배경이나 타 인도유럽어의 '영토·민중' 의미군과 비교된다. 그리스어 내에서 정치적 단위 및 일반 민중을 뜻하는 핵심 어휘로 발달했다. 현대 그리스어 지명 접미사 및 'δήμος'(지자체, 자치구)로 이어져 행정·지리 용어로 깊이 뿌리내리고 있다."
      },
      {
        "g": "ἀπείρων.",
        "pos": "형용사",
        "lemma": "ἄπειρος, ἄπειρον",
        "parse": "sg.nom.m.",
        "gloss_kr": "끝없는, 무수한",
        "gloss_en": "boundless, endless, countless",
        "syntax": "LFG f-구조에서 이 형용사는 명사 δῆμος의 ADJUNCT(속성 수식어) 또는 아포지션적 서술격으로 작용하며, [MOD δῆμος, CASE nom, GENDER m] 관계를 형성한다. 생성문법적으로는 NP 내부의 N' 스펙시파이어 또는 후치 수식 위치에서 성·수·격 일치(agreement)를 만족한다. 의미상 군중의 규모와 비탄의 영원성을 강조한다.",
        "background": "끝없이 밀려들며 슬퍼하는 백성들의 압도적인 규모와 그들이 겪을 비극의 끝이 보이지 않음을 수식하는 시적 표현이다. 한정된 공간인 트로이아 성 내부의 비극을 우주적이고 영원한 차원으로 확장한다. 호메로스 서사시 특유의 장엄한 분위기를 조성하는 수식어구다.",
        "etymology": "부정 접두사 a-와 '끝, 한계'를 뜻하는 명사 πεῖρας의 합성어로, PIE 재구적 어근 *per-('건너다, 한계에 도달하다')에 기반한다(Chantraine, DELG). 산스크리트어 param('저편의')과 라틴어 peritus 등의 어원적 계열과 상통한다. 음운론적으로 복합어 형성 과정에서 모음 탈락과 강세 조정을 겪었다. 현대 그리스어 'άπειρος'(무한한)로 직접 계승되어 수학·철학 및 일상적 수량 표현으로 널리 쓰인다."
      }
    ]
  },
  {
    "ref": "Iliad 6.777",
    "trans": "백성들 가운데서 늙은이 프리아모스가 그들에게 말을 꺼내어 일렀다.",
    "words": [
      {
        "g": "λαοῖσιν",
        "pos": "명사",
        "lemma": "λαός, λαοῦ, ὁ",
        "parse": "pl.dat.m.",
        "gloss_kr": "백성들에게, 군중에게",
        "gloss_en": "to the people, to the host",
        "syntax": "LFG f-구조에서 이 명사는 OBL(간접목적어/여격 논항) 기능을 수행하며, [PRED 'λαός', CASE dat, θ-ROLE RECIPIENT/GOAL] 자격으로 동사 ἔειπεν의 방향 논항을 채운다. 생성문법적으로는 VP 내부 또는 vP 외곽의 여격 자질을 할당받으며, 집단적 청중을 지시하는 복수형 격 표지를 지닌다.",
        "background": "앞서 언급된 δῆμος와 유사하면서도, 특히 전쟁터에 모이거나 왕의 말을 경청하기 위해 집결한 백성들(군대와 민중의 복합체)을 지칭한다. 왕 프리아모스가 이들 무리 한가운데서 지도자로서 발언권을 행사하는 엄숙한 국면을 연출한다. 지도자와 민중 간의 일체감을 보여주는 매개체다.",
        "etymology": "PIE 재구형 *lāwo-('군대, 모인 무리')에 기원하며, 미케네어 *rawa(ra-wo)에서 이미 확고한 형태가 확인된다(Beekes, EDG). 선그리스어 기층 어휘일 가능성과 인도유럽어 고유어설이 대립하나, 미케네어 증거로 인해 고대 그리스어의 핵심 군사·사회 용어로 공인된다. 음운론적으로 호메로스 방언의 특징인 장모음 여격 복수형(-οῖσιν) 어미를 취한다. 현대 그리스어 'λαός'(민중, 백성)로 살아남아 정치·사회·문화적 어휘의 중심을 이룬다.",
        "textcrit": "사본전승상 일부 후대 사본에서 운율적 편의나 어휘 평준화를 위해 동의어 계열로 치환하려는 시도가 있었으나, 알라마르 등 고대 문헌학자들은 호메로스 고유의 여격 복수형 형태를 확고한 정본으로 채택하였다."
      },
      {
        "g": "δ᾽",
        "pos": "접속사",
        "lemma": "δέ",
        "parse": "coord.conj.",
        "gloss_kr": "그리고",
        "gloss_en": "and",
        "syntax": "LFG f-구조에서 대등 접속 기능을 하며, [COORD-CONJ]로서 앞선 장면(백성들의 슬픔)과 프리아모스의 발화 행위를 유기적으로 연결한다. 생성문법적으로는 두 절 사이의 CP 접속 핵을 점하며 후치사적 특성에 따라 절 내 두 번째 위치에 배치된다.",
        "background": "슬픔에 잠긴 백성들의 분위기 속에서 곧바로 왕의 연설 국면으로 전환시키는 서사적 이행 장치다. 비탄의 정서에서 실질적인 행동 지침(나뭇가지 채집)으로 담화의 초점이 이동함을 보여준다.",
        "etymology": "(Iliad 6.776의 댸 'δέ' 항목 참조)"
      },
      {
        "g": "ὃ",
        "pos": "대명사",
        "lemma": "ὁ, ἡ, τό",
        "parse": "sg.nom.m.",
        "gloss_kr": "그, 저 (사람)",
        "gloss_en": "he, that one",
        "syntax": "LFG f-구조에서 이 지시/관사적 대명사는 문장의 SUBJ 기능을 수행하며, [PRED 'pronoun', CASE nom, TH-ROLE AGENT]로서 동사 ἔειπεν의 주어 논항을 명시화한다. 생성문법적으로는 [Spec, IP]에 위치하며, 앞에 나온 프리아모스라는 고유명사를 지시하는 응고된 대명사(pronominal subject)로 분석된다.",
        "background": "집단 속에서 비로소 행동에 나서는 최고 지도자 프리아모스의 존재감을 극적으로 부각시키는 지시사다. 군중의 무기력한 흐느낌과 대비되어, 결단을 내리는 왕의 위엄을 시각적으로 집중시킨다.",
        "etymology": "PIE 지시 대명사 *so / *sā / *tod 계열에서 유래하며, 그리스어에서 초기에는 지시사로, 고전기 이후 정관사로 기능이 분화되었다(Chantraine, DELG). 산스크리트어 sá / sā 와 완벽히 대응한다. 호메로스 시문학에서는 여전히 강력한 지시 대명사(그는, 저 사람은)로서의 용법이 우세하게 유지된다. 현대 그리스어에서는 정관사 'ὁ/ἡ/τό'의 형태로 모든 명사구 체계의 근간을 이룬다."
      },
      {
        "g": "γέρων",
        "pos": "명사",
        "lemma": "γέρων, γέροντος, ὁ",
        "parse": "sg.nom.m.",
        "gloss_kr": "노인, 원로",
        "gloss_en": "old man, elder",
        "syntax": "LFG f-구조에서 이 명사는 주어의 apposition(동격) 또는 주격 수식어로서 [PRED 'γέρων', CASE nom, θ-ROLE AGENT] 기능을 한다. 생성문법적으로는 주어 명사구 내부의 수식어 또는 병렬 명사구로 구조화되며, 나이와 지혜를 상징하는 의미 자질을 지닌다.",
        "background": "트로이아의 최고 통치자이자 아버지인 프리아모스의 연로한 육체적 상태를 강조하는 동시에, 원로원(gerousia)의 수장으로서 지니는 권위와 지혜를 상징한다. 젊은 전사들의 무모함이나 비탄에 휩여 있는 군중과 달리, 실질적인 수습책을 지시하는 노련함의 대명사다.",
        "etymology": "PIE 재구형 *ǵerH-('늙다')에 명사 파생 접미사가 결합한 형태로, 후두음 *H₂의 존재가 발음 및 형태 변화에 영향을 미쳤다(Beekes, EDG). 산스크리트어 járant-('늙어가는')와 어원적 동계어다. 그리스어 내에서 존경과 연륜을 뜻하는 사회적 용어로 정착했다. 현대 그리스어 'γέρος'(노인) 및 의학·생물학 용어인 'gerontology'(노인학)의 어원으로 명맥이 이어진다."
      },
      {
        "g": "Πρίαμος",
        "pos": "명사",
        "lemma": "Πρίαμος, Πριάμου, ὁ",
        "parse": "sg.nom.m.",
        "gloss_kr": "프리아모스 (트로이아의 왕)",
        "gloss_en": "Priam",
        "syntax": "LFG f-구조에서 이 고유명사는 주어 NP의 핵심 PRED이자 주체이며, [PRED 'Πρίαμος', CASE nom, θ-ROLE AGENT] 논항을 완성한다. 생성문법적으로는 고유명사구(proper DP)로서 고유의 성·수·격 자질을 지니고 이동 없이 기저 자리에서 주격 자질을 할당받는다.",
        "background": "트로이아 전쟁의 비극을 상징하는 노왕 프리아모스는 헥토르의 아버지이자 수많은 자식을 잃은 비운의 군주다. 이 장면에서 그는 슬픔에 잠겨만 있지 않고 아들의 시신 수습을 위해 직접 행동에 나서는 결단력을 보여준다. 그의 리더십은 성 안의 백성들을 실질적인 생존과 장례 절차로 인도한다.",
        "etymology": "어원의 기원은 비인도유럽어(선그리스어 또는 아나톨리아 기층 언어)로 추정되며, 히타이트 기록과의 연관성 속에서 논구된다(Beekes, EDG). 그리스 신화적 전통 속에서 '속박에서 풀려난 자'라는 민간어원적 해석이 붙기도 했으나 학술적으로는 기층 고유명사로 분류된다. 그리스 문학 전반을 통해 트로이아 왕권의 대명사로 각인되었다. 현대 고전문학 수용 과정에서 트래저리 및 지명·인명 어휘로 인용된다."
      },
      {
        "g": "μετὰ",
        "pos": "전치사",
        "lemma": "μετά",
        "parse": "prep. (governing dat.)",
        "gloss_kr": "~의 가운데에, ~와 함께",
        "gloss_en": "among, in the midst of",
        "syntax": "LFG f-구조에서 이 전치사는 OBL 기능을 하며, 후행하는 여격 명사구(λαοῖσιν)를 지배하여 처소적·공동적 관계를 나타낸다. 생성문법적으로는 P' 핵으로 작용하여 여격 명사구에 격을 부여한다. 시적 용법에서 여격과 결합할 때 '~의 한가운데서'라는 공동·위치적 의미를 강하게 띤다.",
        "background": "왕이 높은 곳에 군림하는 권력자가 아니라, 비통에 잠긴 백성들의 한가운데 직접 걸어 들어가 그들과 호흡을 같이하며 말을 건네는 친밀하고도 비장한 공간적 배치를 보여준다.",
        "etymology": "PIE 재구형 *me-ta('중간에, ~를 향하여')에서 기원하며, 공간적 거리나 공동체를 뜻하는 부사·전치사 계열이다(Chantraine, DELG). 고딕어 mith, 독일어 mit와 동계어다. 그리스어 내에서 격 지배에 따라 '중간에(~ among)'와 '이후에(~ after)'로 의미가 분화되었다. 현대 그리스어 접두사 및 전치사 'μετά'로 계승되어 '~와 함께, ~후에'의 의미로 활발히 쓰인다."
      },
      {
        "g": "μῦθον",
        "pos": "명사",
        "lemma": "μῦθος, μύθου, ὁ",
        "parse": "sg.acc.f./m. (here sg.acc.m.)",
        "gloss_kr": "말, 연설, 이야기",
        "gloss_en": "word, speech, tale",
        "syntax": "LFG f-구조에서 이 명사는 OBJ 기능을 수행하며, [PRED 'μῦθος', CASE acc, θ-ROLE THEME/PATIENT]로서 동사 ἔειπεν의 직접목적어 논항을 이룬다. 생성문법적으로는 VP의 보어(complement)로서 대격(accusative) 자질을 할당받는다.",
        "background": "단순한 일상적 대화(ἔπος)와 달리, 권위 있는 인물이 공식적인 자리에서 선언하는 무게 있는 연설이나 신성한 담론을 가리킨다. 프리아모스가 백성들에게 내리는 실질적인 지시사항의 서막을 여는 핵심 객체다.",
        "etymology": "선그리스어 기층 어휘설과 인도유럽어 고유어설이 공존하며, Beekes(EDG)는 명확한 PIE 재구를 유보한 채 에게해 기층 언어 유산일 가능성을 시사한다. 고전 그리스어에서 '말'에서 '신화'로 의미가 대전환을 겪었다. 서사시적 구호에서 연설을 뜻하는 핵심 어휘로 기능한다. 현대어 'myth'(신화)의 직접적인 어원으로, 오늘날 전 세계 언어학 및 인문학 용어로 널리 쓰인다."
      },
      {
        "g": "ἔειπεν:",
        "pos": "동사",
        "lemma": "λέγω / εἶπον",
        "principalParts": "εἶπον – ἐρέω – εἶπον – εἴρηκα – εἴρημαι – ἐρρήθην",
        "parse": "3rd.sg.aor.ind.act.",
        "gloss_kr": "말하였다",
        "gloss_en": "he spoke, uttered",
        "syntax": "LFG f-구조에서 이 동사는 PRED 핵이며, [PRED 'εἶπον<SUBJ,OBJ>', SUBJ [PRED 'Πρίαμος', CASE nom], OBJ [PRED 'μῦθος', CASE acc]] 구조를 완벽히 지배한다. 생성문법적으로는 부정과거(aorist) 시제의 완료상적 의미를 지니며, V-to-T 이동과 함께 주어와의 인칭·수 일치를 충족한다.",
        "background": "왕이 비탄에 잠긴 군중을 향해 침묵을 깨고 실질적인 생존의 계책을 공표하는 결정적인 발화 행위를 포착한다. 서사의 국면이 단순한 애도에서 장례 준비라는 행동 지향적 단계로 전환되는 중대한 분기점이다.",
        "etymology": "PIE 어근 *wekʷ-('말하다')의 상호보완적 완료/부정과거 어간 형태(aorist *wep- / *wekw-)에서 유래한다(Chantraine, DELG; Beekes, EDG). 산스크리트어 vácati('말하다')와 라틴어 vocare('부르다')의 어원적 친척이다. 호메로스 방언 특유의 증강(augment) 형태와 이형태 어간 교체를 보여준다. 현대 그리스어에서는 동사 'λέγω' 계열로 흡수되어 일상 발화의 기본 어휘로 남아 있다."
      }
    ]
  },
  {
    "ref": "Iliad 6.778",
    "trans": "“트이아인들이여, 이제 성 안으로 나무를 끌고 오라, 마음속으로",
    "words": [
      {
        "g": "‘ἄξετε",
        "pos": "동사",
        "lemma": "ἄγω",
        "principalParts": "ἄγω – ἄξω – ἤγαγον – ἦχα – ἦγμαι – ἤχθην",
        "parse": "2nd.pl.aor.impv.act.",
        "gloss_kr": "끌어오라, 데려오라",
        "gloss_en": "bring, lead",
        "syntax": "LFG f-구조에서 이 명령법 동사는 PRED이며, [PRED 'ἄγω<SUBJ,OBJ>', SUBJ [PRED 'Τρῶες', CASE voc], OBJ [PRED 'ξύλα', CASE acc]] 구조를 통해 청자들을 직접 지배한다. 생성문법적으로는 명령법(imperative) 불변화 자질과 2인칭 복수 주어 자질을 허가하며, 절의 최상위 핵으로 기능한다.",
        "background": "헥토르의 장례를 치르기 위해 목재를 이다 산에서 성 안으로 운반해 와야 하는 긴급하고 구체적인 실무 지시를 내린다. 슬픔에 잠겨 발을 구르는 백성들에게 왕이 내리는 첫 번째 생존과 명예의 지침이다.",
        "etymology": "PIE 어근 *agʰ- 또는 *eǵ-('끌다, 몰다, 가다')에 기원하며, 후두음 또는 모음 교체 양상을 거쳤다(Chantraine, DELG). 라틴어 agere('몰다, 행하다')와 산스크리트어 ájati('몰다')와 정확히 대응하는 인도유럽어 최상급 동계어다. 고전 그리스어에서 이동과 운반을 뜻하는 가장 보편적인 동사로 정착했다. 현대 그리스어 'άγω'(이끌다) 및 파생어구 'άγομαι' 등으로 학술·격식 어휘에 흔적을 남긴다."
      },
      {
        "g": "νῦν",
        "pos": "부사",
        "lemma": "νῦν",
        "parse": "temp.adv.",
        "gloss_kr": "이제, 지금",
        "gloss_en": "now",
        "syntax": "LFG f-구조에서 이 시간 부사는 ADJUNCT 기능을 하며, [ADJUNCT [PRED 'νῦν', TENSE present]] 형태로 발화 시점과 행위 시점의 일치를 지시한다. 생성문법적으로는 T' 또는 IP 외곽의 시간 지정어 자리에 병합되어 절 전체의 시간적 앵커링(temporal anchoring)을 제공한다.",
        "background": "과거의 비탄이나 막연한 절망에서 벗어나, 바로 이 순간부터 즉각적으로 행동에 착수해야 함을 강조하는 시점 한정사다. 위기 상황 속에서 신속한 결단과 실천의 절박성을 드러낸다.",
        "etymology": "PIE 재구형 *nu('지금')에 시간 부사적 확장 성분이 결합한 형태로, 후두음 및 모음 연장 양상을 보인다(Beekes, EDG). 산스크리트어 nú / nūnám, 라틴어 nunc, 영어 now와 완벽하게 일치하는 범-인도유럽어 공통 유산이다. 그리스어 문법 안에서 변함없이 시간 부사의 핵심으로 기능해왔다. 현대 그리스어 'νῦν' 또는 구어체 'τώρα'의 기저 시간 개념을 형성하며 오랜 생명력을 유지하고 있다."
      },
      {
        "g": "Τρῶες",
        "pos": "명사",
        "lemma": "Τρώς, Τρώός, ὁ",
        "parse": "pl.voc.m.",
        "gloss_kr": "트로이아인들이여",
        "gloss_en": "Trojans",
        "syntax": "LFG f-구조에서 이 명사는 VOC(호격) 기능을 하며, 통사적 주어-술어 구조 외부에 위치하여 [VOC-TARGET Τρῶες]로서 발화의 직접적 청자를 지정한다. 생성문법적으로는 격 할당 체계에서 이탈된 독립된 담화 성분(vocative DP)으로 분석된다.",
        "background": "왕이 국가의 위기 앞에서 트로이아 동포들을 공식적으로 호명하며 공동체의 단결과 의무를 일깨운다. 개별 가문의 슬픔을 넘어 트로이아 민족 전체가 총동원되어 영웅의 장례를 치러야 한다는 공동체적 책임을 강조한다.",
        "etymology": "아나톨리아어파 및 선그리스어 기층의 트로이아 고유명사 계열로, 히타이트어 기록의 *Taruwisa 또는 Wiluša와의 지리적·어원적 연관성이 학계(Beekes, EDG 등)에서 논의된다. 그리스 신화 속 시조 트로스(Tros)의 이름에서 유래했다는 전승을 지닌다. 그리스 문학 전반에서 트로이아인들을 가리키는 고유 명칭으로 굳어졌다. 현대 고고학 및 역사학 서적에서 트로이아 문명을 지칭하는 국제적 어휘로 쓰인다."
      },
      {
        "g": "ξύλα",
        "pos": "명사",
        "lemma": "ξύλον, ξύλου, τό",
        "parse": "pl.acc.n.",
        "gloss_kr": "나무들을, 땔감을",
        "gloss_en": "wood, logs, timber",
        "syntax": "LFG f-구조에서 이 명사는 OBJ 기능을 하며, [PRED 'ξύλον', CASE acc, θ-ROLE PATIENT]로서 동사 ἄξετε의 직접목적어 논항을 충족한다. 생성문법적으로는 VP의 보어로 대격 자질을 할당받으며, 복수 중성 명사로서 격과 수의 일치 규칙을 따른다.",
        "background": "화장(cremation)을 통해 영웅 헥토르의 육신을 신들에게 돌려보내고 명예를 완성하기 위해 필수적인 장작불의 재료다. 슬픔의 눈물을 거두고 실질적인 장례 준비라는 물리적 노동에 돌입하는 시발점이다.",
        "etymology": "PIE 재구형이 불명확하며, Beekes(EDG)는 선그리스어(Pre-Greek) 기층 어휘로 분류한다. 초기에는 '잘라낸 나뭇조각, 통나무'를 뜻하다가 고전기 이후 '목재, 나무' 일반을 가리키는 단어로 확장되었다. 인도유럽어 고유 어원보다는 에게해 지역의 식물 명칭 기층에 닿아 있다. 현대 그리스어 'ξύλο'(나무, 목재)로 직계 계승되어 일상 건축·목공 용어로 활발히 쓰인다."
      },
      {
        "g": "ἄστυ",
        "pos": "명사",
        "lemma": "ἄστυ, ἄστεος, τό",
        "parse": "sg.acc.n.",
        "gloss_kr": "도시로, 성 안으로",
        "gloss_en": "to the city, town",
        "syntax": "LFG f-구조에서 이 명사는 OBL(처소/방향 부사어) 기능을 하며, [PRED 'ἄστυ', CASE acc, θ-ROLE GOAL]로서 이동의 목적지를 나타낸다. 생성문법적으로는 전치사 없이 대격만으로 방향성을 나타내는 고대 그리스어 특유의 처소 대격(accusative of direction/goal) 통사 기제를 따른다.",
        "background": "외부의 산림 지대에서 벌목한 목재를 적들의 위협 속에서도 안전한 성채 내부로 끌고 들어와야 하는 긴박한 공간적 이동을 보여준다. 트로이아 성벽 내부야말로 백성들과 영웅의 유해가 보호받는 최후의 보루다.",
        "etymology": "PIE 재구형 *wastu-('거주지, 성읍')에 기원하며, 후두음 탈락과 모음 교체 과정을 거쳤다(Chantraine, DELG; Beekes, EDG). 산스크리트어 vástu('집, 거주지')와 산스크리트어/베다어 어원군과 정확히 일치하는 인도유럽어 공통 유산이다. 그리스어 내에서 성벽으로 둘러싸인 도시를 뜻하는 핵심 어휘로 정착했다. 현대 그리스어에서는 직접적인 일상어로는 드물지만 지명 및 고어적 도시 명칭(예: 아스티)으로 흔적이 남아 있다."
      },
      {
        "g": "δέ,",
        "pos": "접속사",
        "lemma": "δέ",
        "parse": "coord.conj.",
        "gloss_kr": "그리고",
        "gloss_en": "and",
        "syntax": "LFG f-구조에서 대등 접속 핵으로 작용하며, [COORD-CONJ]로서 앞선 지시(나무를 끌고 오라)와 이어지는 경고/권고 절을 매개한다. 생성문법적으로는 절 간 결합을 담당하는 좌표 접속 핵 위치에 배치된다.",
        "background": "나무 운반이라는 실무적 지시와 함께 백성들이 느낄 수 있는 적군의 공포를 사전에 차단하기 위한 심리적 안정책을 매끄럽게 이어주는 접속 장치다.",
        "etymology": "(Iliad 6.776의 댸 'δέ' 항목 참조)"
      },
      {
        "g": "μὴ",
        "pos": "부사",
        "lemma": "μή",
        "parse": "neg.adv.",
        "gloss_kr": "~하지 마라",
        "gloss_en": "not",
        "syntax": "LFG f-구조에서 이 부정사는 부정 수식어(NEG) 기능을 하며, 명령법 동사와 결합하여 금지(prohibition) 양상을 나타낸다. 생성문법적으로는 CP 또는 NegP의 핵을 점하며, 명령법 2인칭 부정 명령(aorist subjunctive with μή 또는 imperative) 구문을 허가한다.",
        "background": "아카이오이(그리스) 군대의 급습이나 매복에 대한 백성들의 공포를 사전에 억누르며 왕으로서 군중의 심리적 동요를 통제하는 강력한 금지 명령이다.",
        "etymology": "PIE 부정 대명사/부사 재구형 *mē('~가 아니기를')에 기원하며, 진술문 부정 οὐ와 구별되는 비현실·의지·명령문 전용 부정사로 발달했다(Chantraine, DELG). 산스크리트어 mā('~하지 마라')와 정확히 일치하는 인도유럽어 최상급 동계어다. 그리스어 문법 체계에서 금지와 가정법의 핵심 부정 요소로 고착되었다. 현대 그리스어 부정사 'μην'으로 직계 계승되어 일상 금지문 표현에 필수적으로 쓰인다."
      },
      {
        "g": "δέ",
        "pos": "접속사",
        "lemma": "δέ",
        "parse": "coord.conj.",
        "gloss_kr": "그리고, 마냥",
        "gloss_en": "and, but",
        "syntax": "LFG f-구조에서 연결 기능을 하며, 여기서는 앞의 부정사와 결합하여 강조 및 대조의 뉘앙스를 더하는 담화 접속사로 작동한다. 생성문법적으로는 절 내 후치사 위치에서 접속 지점을 명시한다.",
        "background": "금지 명령의 어조를 강화하면서 다음 구절로 자연스럽게 이유와 보증을 연결해 주는 수사적 접속 장치다.",
        "etymology": "(Iliad 6.776의 댸 'δέ' 항목 참조)"
      },
      {
        "g": "τι",
        "pos": "대명사",
        "lemma": "τίς, τί",
        "parse": "sg.acc.n.",
        "gloss_kr": "조금도, 무엇을",
        "gloss_en": "at all, anything, in any way",
        "syntax": "LFG f-구조에서 이 부정대명사는 ADJUNCT(부사적 대격/정도 부사) 기능을 하며, [MOD δείσητε, CASE acc] 형태로 두려움의 정도를 약화시키는 부사적 한정을 담당한다. 생성문법적으로는 대격 자질을 지닌 부사적 수식어(adverbial accusative)로 분석된다.",
        "background": "백성들이 마음속으로 가질 수 있는 자잘한 두려움의 파편조차 완전히 떨쳐내도록 독려하는 심리적 안전장치다.",
        "etymology": "PIE 의문/부정 대명사 어근 *kʷi- / *kʷo-에 기원하며, 무정부사적 용법으로 발달했다(Beekes, EDG). 라틴어 quid와 산스크리트어 kím과 동계어다. 그리스어 내에서 부정사와 결합하여 '조금도 ~않다'라는 관용적 부사구로 굳어졌다. 현대 그리스어 의문사 및 부정 대명사 계열로 그 형태적 흔적이 이어진다."
      },
      {
        "g": "θυμῷ",
        "pos": "명사",
        "lemma": "θυμός, θυμοῦ, ὁ",
        "parse": "sg.dat.m.",
        "gloss_kr": "마음속에, 감정에",
        "gloss_en": "in heart, in spirit",
        "syntax": "LFG f-구조에서 이 명사는 OBL(처소적 여격) 기능을 하며, [PRED 'θυμός', CASE dat, θ-ROLE LOCATIVE]로서 두려움이 머무는 장소를 지정한다. 생성문법적으로는 여격 자질을 할당받아 내면 심리 상태를 나타내는 처소 부사구(locative PP)로 구조화된다.",
        "background": "외부의 물리적 위협보다 백성들의 내면에서 피어오르는 심리적 공포와 불안을 통제해야 함을 지적하는 프리아모스의 통찰력 있는 심리 묘사다.",
        "etymology": "PIE 재구형 *dhu-mo-('숨결, 연기, 격정')에 기원하며, 어근 *dheu̯-('움직이다, 피어오르다')와 연결된다(Chantraine, DELG). 라틴어 fumus('연기') 및 리투아니아어 dùmės와 동계어다. 그리스어에서 '숨결'에서 '영혼, 마음, 감정'으로 의미가 전이되었다. 현대 그리스어 철학·심리학 용어 및 복합어의 어근으로 살아남아 있다."
      }
    ]
  },
  {
    "ref": "Iliad 6.779",
    "trans": "아르골리스인들의 은밀한 매복을 두려워 마라. 진실로 아킬레우스가",
    "words": [
      {
        "g": "δείσητ᾽",
        "pos": "동사",
        "lemma": "δείδω",
        "principalParts": "δείδω – δείσω – ἔδεισα – δέδοικα / δείδια – – (미상)",
        "parse": "2nd.pl.aor.subj.act.",
        "gloss_kr": "두려워하다, 겁내다",
        "gloss_en": "fear, be afraid",
        "syntax": "LFG f-구조에서 이 접속법 동사는 PRED 핵이며, [PRED 'δείδω<SUBJ,OBJ>', SUBJ [PRED 'Τρῶες', CASE voc], OBJ [PRED 'λόχον', CASE acc]] 구조를 지배한다. 생성문법적으로는 부정사 μή와 결합하여 금지 명령을 구성할 때 부정과거 접속법(aorist subjunctive)을 요구하는 문법 규칙에 따라 [TP T [vP ...]] 구조의 상적 핵을 채운다.",
        "background": "그리스군(아르골리스인들)이 휴전 약속을 어기고 매복해 있을 것이라는 백성들의 합리적인 공포를 일축하며, 아킬레우스가 보증한 안전을 믿으라고 설득하는 장면이다.",
        "etymology": "PIE 재구형 *dwei-('두려워하다, 놀라다')에 기원하며, 중복(reduplication) 현재 및 완료형 어간 발달 양상을 보인다(Beekes, EDG; Chantraine, DELG). 산스크리트어 dvēṣṭi('미워하다')와 고대 아일랜드어 díth와 동계어다. 그리스어 내에서 공포와 경외를 뜻하는 핵심 동사로 정착했다. 현대 그리스어에서는 직계 일상 동사로는 드물지만 관련 고어 인용구 및 파생 어휘로 명맥이 이어진다."
      },
      {
        "g": "Ἀργείων",
        "pos": "명사",
        "lemma": "Ἀργεῖος, Ἀργείου, ὁ",
        "parse": "pl.gen.m.",
        "gloss_kr": "아르골리스인들(그리스군)의",
        "gloss_en": "of the Argives (Greeks)",
        "syntax": "LFG f-구조에서 이 명사는 ADJUNCT(소유격 수식어) 기능을 하며, [MOD λόχον, CASE gen, θ-ROLE POSSESSOR/SOURCE]로서 매복의 주체를 나타낸다. 생성문법적으로는 명사구 내부의 지정어 위치에서 속격 자질을 할당받는다.",
        "background": "트로이아인들이 가장 두려워하는 적대 세력인 그리스 연합군(아르골리스인)을 지칭하며, 휴전 기간에도 언제든 기습할 수 있는 적의 실체적 위협을 상기시킨다.",
        "etymology": "펠로폰네소스의 핵심 도시 아르고스(Ἄργος)의 지명에서 유래한 파생형으로, PIE 지명 형성 접미사와 결합했다(Beekes, EDG). 그리스 전체를 통칭하는 호메로스식 민족 명칭 중 하나다. 그리스 고고학 및 역사학 서적에서 초기 헬라스인들을 가리키는 표준 어휘로 굳어졌다. 현대 그리스 지명 아르고스 및 관련 역사 용어로 이어지고 있다."
      },
      {
        "g": "πυκινὸν",
        "pos": "형용사",
        "lemma": "πυκινός, πυκινή, πυκινόν",
        "parse": "sg.acc.m.",
        "gloss_kr": "조밀한, 은밀한, 치밀한",
        "gloss_en": "dense, close, secret",
        "syntax": "LFG f-구조에서 이 형용사는 ADJUNCT 기능을 하며, [MOD λόχον, CASE acc, GENDER m]로서 명사 λόχον의 성·수·격 일치를 충족한다. 생성문법적으로는 NP 내부의 수식어 위치에서 성분 자질을 공유한다.",
        "background": "적들의 매복이 단순히 대충 숨어있는 것이 아니라 촘촘하고 치밀하게 계획된 전술적 위협임을 묘사하여, 백성들이 경계를 늦추지 말아야 하면서도 왕의 보증을 믿어야 하는 이유를 뒷받침한다.",
        "etymology": "PIE 재구형 *puk- / *peuk-('단단히 뭉치다, 빽빽하다')에 기원하며, 수목이나 조직의 밀집성을 뜻하는 어근에서 발달했다(Chantraine, DELG). 산스크리트어 picula('뭉치')와 연관성이 제기된다. 그리스어에서 물리적 밀도와 지적 치밀함(음모, 지혜) 양쪽으로 의미가 확장되었다. 현대 그리스어 'πυκνός'(빽빽한, 조밀한)로 직계 계승되어 과학·기상·물리 용어로 널리 쓰인다."
      },
      {
        "g": "λόχον:",
        "pos": "명사",
        "lemma": "λόχος, λόχου, ὁ",
        "parse": "sg.acc.m.",
        "gloss_kr": "매복, 잠복 부대",
        "gloss_en": "ambush, ambuscade",
        "syntax": "LFG f-구조에서 이 명사는 OBJ 기능을 하며, [PRED 'λόχος', CASE acc, θ-ROLE THEME]로서 동사 δείσητε의 직접목적어 논항을 이룬다. 생성문법적으로는 VP의 보어로 대격 자질을 할당받는다.",
        "background": "트로이아 전쟁 전반에 걸쳐 영웅들이 가장 경계하는 기습 전술인 매복을 가리킨다. 정정당당한 회전(會戰)이 아니라 은밀하게 숨어서 노리는 적의 잔혹한 전술적 공포를 상징한다.",
        "etymology": "PIE 어근 *lekh-('눕다, 잠복하다')에서 유래하며, 은신처나 누워있는 상태를 뜻하는 명사 파생형이다(Beekes, EDG; Chantraine, DELG). 라틴어 lectus('침대')와 영어 lair의 어원적 친척이다. 그리스어 내에서 군사적 매복 부대 및 잠복 작전을 뜻하는 전문 용어로 정착했다. 현대 그리스어 고어 인용 및 군사 역사 용어로 명맥이 이어진다."
      },
      {
        "g": "ἦ",
        "pos": "부사",
        "lemma": "ἦ",
        "parse": "assert.adv.",
        "gloss_kr": "진실로, 참으로",
        "gloss_en": "truly, verily, indeed",
        "syntax": "LFG f-구조에서 이 확언 부사는 ADJUNCT(담화 표지/양상 부사) 기능을 하며, [ADJUNCT [PRED 'ἦ', SCOPE clause]] 형태로 절 전체의 진리치(truth value)를 강하게 보증한다. 생성문법적으로는 CP의 상위 스펙시파이어 또는 진리치 확인 핵 위치에 병합된다.",
        "background": "프리아모스가 백성들에게 적들의 기습을 두려워하지 말라고 확신을 주는 결정적인 담화 표지다. 아킬레우스가 직접 안전을 보장했다는 사실이 허황된 위로가 아니라 엄연한 진실임을 선언한다.",
        "etymology": "PIE 감탄사/확언사 재구형에 기원하며, 호메로스 시문학 및 고전 그리스어에서 진실성을 담보하는 담화 입자로 굳어졌다(Chantraine, DELG). 인도유럽어족 전반에 걸쳐 확실성을 나타내는 공통 음운 제스처의 일종이다. 고전 시문학의 수사적 설득력을 높이는 핵심 장치로 기능해왔다."
      },
      {
        "g": "γὰρ",
        "pos": "접속사",
        "lemma": "γάρ",
        "parse": "coord.conj. (causal)",
        "gloss_kr": "왜냐하면",
        "gloss_en": "for, because",
        "syntax": "LFG f-구조에서 이 인과 접속사는 COORD-CONJ(이유 절 연결) 기능을 하며, [REASON-CLAUSE 앞선 명령의 근거]를 도입한다. 생성문법적으로는 후치사적 성격으로 인해 인과 절의 두 번째 위치에 배치되어 인과적 종속·대등 관계를 허가한다.",
        "background": "백성들이 매복을 두려워하지 말아야 하는 객관적이고 확실한 근거(아킬레우스의 직접적인 명령과 보증)를 제시하는 논리적 전환점이다.",
        "etymology": "기원적으로 γε(강조)와 ἄρα(결과/인과)의 결합형에서 축약·발달한 복합 담화 입자다(Beekes, EDG; Chantraine, DELG). 그리스어 문장 구조 안에서 인과관계를 나타내는 가장 보편적인 접속사로 고착되었다. 인도유럽어 내에서 독특한 형태 발달 과정을 거친 고유 문법 요소다."
      },
      {
        "g": "Ἀχιλλεὺς",
        "pos": "명사",
        "lemma": "Ἀχιλλεύς, Ἀχιλλέως, ὁ",
        "parse": "sg.nom.m.",
        "gloss_kr": "아킬레우스가",
        "gloss_en": "Achilles",
        "syntax": "LFG f-구조에서 이 고유명사는 인과 절의 SUBJ 기능을 수행하며, [PRED 'Ἀχιλλεύς', CASE nom, θ-ROLE AGENT]로서 동사 ἐπέτελλε의 주어 논항을 이룬다. 생성문법적으로는 [Spec, IP]에 위치하여 주격 자질을 할당받는다.",
        "background": "트로이아 측의 가장 치명적인 적이자 공포의 대상인 아킬레우스가 이 순간만큼은 트로이아 왕에게 휴전과 안전을 보장해 주는 역설적 구원자로 등장한다. 적장과의 신뢰를 통해 헥토르의 장례가 가능해짐을 보여주는 서사의 핵심 인물이다.",
        "etymology": "선그리스어 기층 고유명사로 분류되며, Beekes(EDG)는 인도유럽어 어원설(예: ἄχος '슬픔'과 λαός '백성'의 합성어라는 민간어원)을 기각하고 에게해 기층 기원의 영웅 이름으로 본다. 그리스 신화 속 가장 위대한 반신의 이름으로 전 세계 문학사에 각인되었다. 현대 인문학 및 서구 언어에서 타협 없는 용맹과 유일한 약점(아킬레스건)의 상징 어휘로 널리 쓰인다."
      }
    ]
  },
  {
    "ref": "Iliad 6.780",
    "trans": "나를 보낼 때 검은 배들로부터 이같이 명령하셨기 때문이다.”",
    "words": [
      {
        "g": "πέμπων",
        "pos": "동사(분사)",
        "lemma": "πέμπω",
        "principalParts": "πέμπω – πέμψω – ἔπεμψα – πέπομφα – πέπεμμαι – ἐπέμφθην",
        "parse": "pres.act.part.sg.nom.m.",
        "gloss_kr": "보내면서, 떠나보낼 때",
        "gloss_en": "sending, when dispatching",
        "syntax": "LFG f-구조에서 이 분사는 ADJUNCT(시간적 상황 분사) 기능을 하며, 주절 동사 ἐπέτελλε의 주어(아킬레우스)와 주체 일치를 이루는 [XADJUNCT] 관계를 맺는다. 생성문법적으로는 비정형 분사구문으로 구조화되어 주절 시점과 일치하는 행위를 수식한다.",
        "background": "아킬레우스가 프리아모스를 자신의 진영에서 다시 트로이아 성으로 돌려보내며 장례 기간 동안의 안전을 약속했던 역사적 순간을 환기시킨다. 적장의 자비와 약속이 담긴 출국 조치를 상기시킨다.",
        "etymology": "PIE 재구형 *pemp-('길을 내다, 보내다')에 기원하며, 수사 '다섯(pénte)'과의 어원적 관련성(다섯 손가락으로 가리키거나 인도하다는 설)이 논의된다(Chantraine, DELG). 라틴어에는 동계어가 직접 남아있지 않으나 게르만어파 등과 비교된다. 그리스어 내에서 이동과 파견을 뜻하는 핵심 동사로 정착했다. 현대 그리스어 'πέμπω'(보내다) 및 파생어 'πομπή'(행렬, 퍼레이드)로 활발히 쓰인다."
      },
      {
        "g": "μ᾽",
        "pos": "대명사",
        "lemma": "ἐγώ",
        "parse": "sg.acc.m./f.",
        "gloss_kr": "나를",
        "gloss_en": "me",
        "syntax": "LFG f-구조에서 이 인칭대명사는 OBJ 기능을 하며, [PRED 'pronoun', CASE acc, θ-ROLE PATIENT]로서 분사 πέμπων의 직접목적어 논항을 이룬다. 생성문법적으로는 대격 자질을 할당받는 클리틱(clitic) 형태의 대명사로 분석된다.",
        "background": "적진 한가운데로 홀로 찾아갔던 노왕 프리아모스 자신이 아킬레우스에게 직접 보호받으며 돌아오게 된 당사자임을 증언하는 인칭 대명사다. 왕 자신의 생생한 경험이 백성들을 안심시키는 가장 강력한 설득 근거가 된다.",
        "etymology": "PIE 1인칭 단수 대명사 재구형 *eǵ(oH)의 대격 형태 *me에 기원하며, 범-인도유럽어 공통 유산이다(Beekes, EDG; Chantraine, DELG). 산스크리트어 mām과 라틴어 me와 완벽히 일치한다. 그리스어 문법 체계에서 1인칭 단수 대명사의 핵심 대격/여격 클리틱으로 고착되었다. 현대 그리스어 1인칭 대격 대명사 'με'로 직계 계승되어 일상어의 필수 골격을 이룬다."
      },
      {
        "g": "ὧδ᾽",
        "pos": "부사",
        "lemma": "ὧδε",
        "parse": "demons.adv.",
        "gloss_kr": "이렇게, 이와 같이",
        "gloss_en": "thus, in this way",
        "syntax": "LFG f-구조에서 이 양태 부사는 ADJUNCT 기능을 하며, [ADJUNCT [PRED 'ὧδε', MOD ἐπέτελλε]]로서 명령의 구체적 양상을 수식한다. 생성문법적으로는 부사구 지정어 위치에 병합되어 뒤이어 나오는 명령 내용과 지시적 상관관계를 형성한다.",
        "background": "아킬레우스가 단순히 말로만 위로한 것이 아니라, 구체적이고 엄정한 지시사항을 내려보냈음을 강조하여 백성들의 신뢰를 이끌어내는 수사적 표현이다.",
        "etymology": "지시사 어근 *ho-와 양태 확장사 *-de의 결합으로 형성된 그리스어 고유의 지시 부사형이다(Chantraine, DELG). 인도유럽어 지시 대명사 체계 속에서 공간적·담화적 근접성을 나타내는 파생 어휘로 발달했다. 고전 시문학 및 산문 전반에서 인용구 도입이나 상황 묘사에 빈번히 쓰인다."
      },
      {
        "g": "ἐπέτελλε",
        "pos": "동사",
        "lemma": "ἐπστέλλω",
        "principalParts": "ἐπιστέλλω – ἐπιστελῶ – ἐπέστειλα – ἐπέσταλκα – ἐπέσταλμαι – ἐπεστάλην",
        "parse": "3rd.sg.impf.ind.act.",
        "gloss_kr": "명령하였다, 당부하였다",
        "gloss_en": "commanded, enjoined, charged",
        "syntax": "LFG f-구조에서 이 동사는 PRED 핵이며, [PRED 'ἐπιστέλλω<SUBJ,OBJ>', SUBJ [PRED 'Ἀχιλλεὺς', CASE nom], OBJ [PRED 'ἐπιστολή/command', CASE acc]] 구조를 지배한다. 생성문법적으로는 미완료시제(imperfect)를 통해 아킬레우스가 떠나보낼 당시 엄숙하고도 지속적으로 당부했던 왕의 지시 내용을 회상하는 통사적 상(aspect)적 특징을 보여준다.",
        "background": "적장 아킬레우스가 적의 왕에게 내린 명령은 단순한 굴욕적 복종이 아니라, 영웅의 장례를 보장하는 거룩한 신뢰의 약속이다. 이 당부 덕분에 트로이아인들은 안심하고 목재를 구하러 나설 수 있게 된다.",
        "etymology": "전치사 ἐπί와 어근 *stel-('놓다, 보내다, 준비하다')의 합성어로, PIE 재구형 *stel-에 기원한다(Beekes, EDG; Chantraine, DELG). 고대 고지독일어 stellen('세우다') 및 영어 stall과 어원적 친척이다. 그리스어에서 '명령을 전달하다, 편지를 보내다'로 의미가 분화되었다. 현대 그리스어 'επιστέλλω'(발송하다, 지시하다)로 이어져 공식 문서 및 행정 어휘로 쓰인다."
      },
      {
        "g": "μελαινάων",
        "pos": "형용사",
        "lemma": "μέλας, μέλαινα, μέλαν",
        "parse": "pl.gen.f.",
        "gloss_kr": "검은, 시커먼",
        "gloss_en": "black, dark",
        "syntax": "LFG f-구조에서 이 형용사는 ADJUNCT(소유격 수식어) 기능을 하며, [MOD νηῶν, CASE gen, GENDER f]로서 명사 νηῶν의 성·수·격 일치를 충족한다. 생성문법적으로는 명사구 내부 수식어 위치에서 속격 자질을 공유한다.",
        "background": "그리스군의 함선들을 수식하는 호메로스 시문학의 전통적인 고정 수식어(epithet)다. 바다의 색채를 반영하는 동시에, 트로이아인들에게는 공포와 죽음의 상징인 적의 군함들이 거칠게 진압해 있는 해변의 풍경을 생생하게 환기시킨다.",
        "etymology": "PIE 재구형 *mela-n-('검은, 어두운')에 기원하며, 피부나 사물의 어두운 색채를 나타내는 어근에서 발달했다(Beekes, EDG; Chantraine, DELG). 산스크리트어 malína('더러운, 검은')와 어원적 동계어다. 그리스어에서 색채를 뜻하는 핵심 형용사로 정착했다. 현대 그리스어 'μαύρος'(검은)의 고전적 어원 계열 및 과학 용어(예: 멜라닌)의 기저를 이룬다."
      },
      {
        "g": "ἀπὸ",
        "pos": "전치사",
        "lemma": "ἀπό",
        "parse": "prep. (governing gen.)",
        "gloss_kr": "~로부터, ~에서",
        "gloss_en": "from, away from",
        "syntax": "LFG f-구조에서 이 전치사는 OBL(출발점/분리 부사구) 기능을 하며, 후행하는 속격 명사구(νηῶν)를 지배하여 기점(source)을 나타낸다. 생성문법적으로는 P' 핵으로 작용하여 속격 자질을 허가한다.",
        "background": "그리스군의 해변 진영(검은 배들)이라는 적대적이고 위험한 공간에서부터 명령이 하달되어 안전하게 성 안으로 전달되었음을 공간적 기점으로 증명한다.",
        "etymology": "PIE 재구형 *apo('~로부터, 멀리')에 기원하며, 공간적 분리를 나타내는 범-인도유럽어 공통 유산이다(Chantraine, DELG). 산스크리트어 ápa, 라틴어 ab, 영어 off/from과 완벽히 대응한다. 그리스어 문법 체계에서 출발과 분리를 나타내는 핵심 전치사로 고착되었다. 현대 그리스어 접두사 및 전치사 'από'로 활발히 쓰인다."
      },
      {
        "g": "νηῶν",
        "pos": "명사",
        "lemma": "ναῦς, νεώς, ἡ",
        "parse": "pl.gen.f.",
        "gloss_kr": "배들로부터, 함선들로부터",
        "gloss_en": "from the ships",
        "syntax": "LFG f-구조에서 이 명사는 OBL의 보어 기능을 하며, [PRED 'ναῦς', CASE gen, θ-ROLE SOURCE]로서 전치사 ἀπό의 논항을 완성한다. 생성문법적으로는 불규칙 3변화 명사의 속격 복수형태로서 P' 구문 내부에서 속격 자질을 할당받는다.",
        "background": "아킬레우스가 거느린 그리스 연합군의 함선 진영은 트로이아 전쟁의 전초기지이자 적대 세력의 심장부다. 바로 그 적진의 중심부에서 왕이 무사히 돌아와 명령을 전하고 있다는 사실은 이 시점에서의 극적인 휴전 성립을 시각적으로 확증한다.",
        "etymology": "PIE 재구형 *nāu-('배, 함선')에 기원하며, 인도유럽어족 전반에 걸쳐 가장 오래된 해양 어휘 중 하나다(Beekes, EDG; Chantraine, DELG). 산스크리트어 nā́us, 라틴어 navis, 영어 navy와 완벽하게 일치한다. 그리스어에서 불규칙 3변화(ναῦς / νεώς)를 겪으며 해양 문민의 핵심 어휘로 남았다. 현대 그리스어 'ναύτης'(선원) 및 해운 관련 어휘의 어원을 형성한다."
      }
    ]
  },
  {
    "ref": "Iliad 24.781",
    "trans": "열두 번째 아침이 오기 전에는 해치지 않겠노라고.’",
    "words": [
      {
        "g": "μὴ",
        "pos": "부사",
        "lemma": "μή",
        "parse": "neg.adv.",
        "gloss_kr": "~하지 않도록, ~않노라고",
        "gloss_en": "not, lest",
        "syntax": "LFG 관점에서 μὴ는 동사 파생 부정사 πημανέειν을 부정하는 부사적 부속어(ADJUNCT)로 기능하며, [ADJUNCT [PRED 'μή']]로 표상된다. 생성문법적으로는 간접 화법 구문에서 부정사절의 Cº 위치 또는 NegP의 핵(Head)에 배치되어 명세어(Specifier) 위치의 부정어를 허가한다: [NegP [Neg' μὴ [VP πημανέειν]]]. 화용론적으로는 맹세 및 약속 구문에서 금지 및 거부의 강한 양태적 어조를 부여한다.",
        "background": "프리아모스가 아킬레우스와의 협상에서 헥토르의 장례를 치르기 위한 11일간의 휴전을 약속받는 장면이다. 아킬레우스가 그리스군이 헥토르의 장례 기간 동안 트로이아를 공격하지 않겠다고 맹세한 내용을 프리아모스가 주민들에게 전달하는 핵심적 담화 구절이다.",
        "etymology": "PIE 금지 부사 재구형 *meh₁에서 유래한 것으로, 후두음 *h₁을 포함하며 어간 교체 없이 모음 길이가 유지된 형태로 분석된다. 산스크리트어 mā(मा), 고대 페르시아어 mā, 아르메니아어 mi와 직접적인 동계어 관계를 형성한다. Chantraine(DELG)에 따르면, 정언적 부정을 나타내는 οὐ와 달리 상상·의지·조건·금지의 양태적 부정을 전담하는 PIE 시대의 금지 소사(prohibitive particle)가 고대 그리스어 문법 체계에 보존된 사례이다. 현대 그리스어에서도 접속법 부정 소사 μη(ν)으로 이어져 그 통사적 기능이 유지되고 있다."
      },
      {
        "g": "πρὶν",
        "pos": "접속사",
        "lemma": "πρίν",
        "parse": "coord.conj.",
        "gloss_kr": "~하기 전에",
        "gloss_en": "before",
        "syntax": "LFG 관점에서 πρὶν은 주절의 동작에 대한 시간적 한계를 설정하는 종속 접속사로, 후행하는 부정사절 및 희구법/접속법 절을 이끌어 [ADJUNCT [PRED 'πρίν<COMP>']]의 AVM 구조를 형성한다. 생성문법적으로는 시간절 CP의 Cº 핵으로 기능하며, 하위의 부정사절 πημανέειν을补部(COMP)로 취한다: [CP [C' πρὶν [IP PRO πημανέειν]]]. 본 구문에서는 전치된 시간 접속부로 기능하여 시간적 한계 조건을 통사적으로 전면화한다.",
        "background": "장례 휴전 기간의 명확한 시한을 설정하는 단어로, 11일간의 장례 의식이 완전히 끝나는 '열두 번째 날' 전까지는 전쟁이 재개되지 않음을 엄격히 규정한다.",
        "etymology": "Beekes(EDG)는 PIE 비교급 어근 *p<sup>r</sup>h₂i-('앞선, 먼저')에서 유래한 것으로 재구하며, 후두음 *h₂를 포함한 접두사적 어근으로 본다. 고대 인도어 purā, 고대 영어 furðor(현대 영어 further)와 어원적으로 연결된다. 호메로스 언어에서는 부사적 용법과 접속사적 용법이 상호 이동하는 과행기적 특성을 보이며, 전치사적 격 지배 구조로 확장되기도 하였다. 현대 그리스어에서는 전치사 πριν(before)으로 지속되어 시간 부속절 및 명사구를 이끄는 주된 수단으로 사용된다."
      },
      {
        "g": "πημανέειν",
        "pos": "동사",
        "lemma": "πημαίνω",
        "principalParts": "πημαίνω – πημανῶ – ἐπήμηνα – (미상) – (미상) – ἐπημάνθην",
        "parse": "fut.act.inf.",
        "gloss_kr": "해치다, 피해를 주다",
        "gloss_en": "to harm, to damage",
        "syntax": "LFG 관점에서 πημανέειν은 주절의 의지/맹세 의미를 완성하는 XCOMP(보충어) 기능을 담당하며, [PRED 'πημαίνω<SUBJ,OBJ>', SUBJ [PRED 'PRO'], OBJ [PRED 'pro']]로 표상된다. 생성문법 통사론상 통제 구문(Control structure)의 하위 부정사로, 통제어(Controller)인 아킬레우스/그리스군이 공범주 PRO를 통제한다: [IP PROᵢ πημανέειν]. 서사시적 미래 부정사 어미 -έειν(-έειν < *-εσ-εν)을 취하여 장래의 행위 불발생 결의를 나타낸다.",
        "background": "아킬레우스가 트로이아인들에게 해를 가하지 않겠다는 약속을 직접적으로 나타내는 동사다. 이전에 트로이아군에게 가했던 파괴적 분노와 대비되는 휴전 선언의 핵심 행위어이다.",
        "etymology": "명사 πῆμα('재앙, 고통', PIE 어근 *keh₂- '해치다' 또는 선그리스어 기층 어휘)에서 파생된 데노미날(denominational) 동사이다. Frisk(GEW)는 형상 어근 *peh₂-('상해하다')와의 연관성을 논의하나, Beekes(EDG)는 -αν- 접미사가 결합된 어간 구조를 감안할 때 선그리스어(Pre-Greek) 어휘일 가능성이 높다고 지적한다. 호메로스 운율상 미음절 축약형 -έειν 형태를 유지하였으며, 고전기 아티카 방언에서는 πημαίνειν으로 통합되었다. 현대 그리스어에서는 보존되지 않고 신어 및 문학적 표현으로만 잔재한다."
      },
      {
        "g": "πρὶν",
        "pos": "접속사",
        "lemma": "πρίν",
        "parse": "coord.conj.",
        "gloss_kr": "~하기까지는, ~할 때까지",
        "gloss_en": "until",
        "syntax": "LFG 관점에서 두 번째 πρὶν은 주절 부정사 구문의 한계점을 정밀하게 특정하는 종속 접속사로, [ADJUNCT [PRED 'πρίν<COMP>']] 구조를 형성한다. 생성문법적으로는 정동사절(접속법/희구법 절)을 취하는 CP 핵으로 기능하며: [CP [C' πρὶν [TP δωδεκάτη μόλῃ ἠώς]]]. 문맥상 첫 번째 πρὶν과 상관(correlative) 구조를 형성하여 'A하기 전에는 B하지 않다'는 강조 구문을 완결짓는다.",
        "background": "앞선 πρὶν과 상관을 이루어 시간적 정합성을 중복 강조하는 수사적 표현이다. 고대 서사시 구전 전통에서 시간 조건의 명확한 구획을 청중에게 각인시키는 효과를 지닌다.",
        "etymology": "앞선 πρὶν과 동일 표제어로, Beekes(EDG)에 따른 PIE 재구형은 *p<sup>r</sup>h₂i-이다. 호메로스 전통에서 πρὶν ... πρὶν 절 구문은 시간 연쇄의 절대적 경계를 선언하는 상투적 상관구문(correlative construction)으로 발달하였다. 부사적 πρὶν과 접속사적 πρὶν의 이중 배치는 구전 서사시 특유의 정형구(formulaic pattern)를 반영한다."
      },
      {
        "g": "δωδεκάτη",
        "pos": "형용사",
        "lemma": "δωδέκατος, δωδεκάτη, δωδέκατον",
        "parse": "sg.nom.f.",
        "gloss_kr": "열두 번째의",
        "gloss_en": "twelfth",
        "syntax": "LFG 관점에서 δωδεκάτη는 명사 ἠώς를 직접 수식하는 제한적 부속어(ADJUNCT)로 기능하며, [ADJUNCT [PRED 'δωδέκατος']]의 AVM 구조를 이루어 주어 NP의 속성을 한정한다. 생성문법적으로는 명사구(DP) 내부의 AP 수식어로, [DP [AP δωδεκάτη] [D' [NP ἠώς]]] 구조에서 주격 여성을 지배받아 일치(agreement)를 형성한다.",
        "background": "그리스 신화 및 서사시 전통에서 '12'는 완결과 전환을 의미하는 수사적/종교적 숫자이다. 11일간의 장례 의식(통곡, 목재 운반, 화장, 장사)이 끝나고 전쟁이 재개되는 운명의 날을 가리킨다.",
        "etymology": "복합 수사 δώδεκα('12', δύω '2' + δέκα '10')에 서열 접미사 -τος가 결합한 형태이다. PIE 어근 *dwoh₁('2', 후두음 *h₁ 포함)와 *deḱm̥('10')의 합성어에 기반한다. Chantraine(DELG)은 어간 변형 없이 완벽한 정수 합성 구조를 유지한 전형적 서열수사로 설명한다. 라틴어 duodecim, 산스크리트어 dvādaśa와 직접적인 대응 관계를 보이며, 현대 그리스어 δωδέκατος 및 영어 dodeca- 접두사 형태로 살아있다."
      },
      {
        "g": "μόλῃ",
        "pos": "동사",
        "lemma": "βλώσκω",
        "principalParts": "βλώσκω – μολοῦμαι – ἔμολον – μέμβλωκα – (미상) – (미상)",
        "parse": "3rd.sg.aor.subj.act.",
        "gloss_kr": "오다, 도달하다",
        "gloss_en": "to come, to arrive",
        "syntax": "LFG f-구조에서 μόλῃ는 종속절의 PRED로 기능하며, [PRED 'βλώσκω<SUBJ>', SUBJ [PRED 'ἠώς', CASE nom]]으로 표상된다. 생성문법적으로는 접속사 πρὶν이 이끄는 시간절 CP 내부의 TP 핵(Tº)에 위치하며, 주어 ἠώς와의 격 및 인칭 일치를 매개한다: [TP [DP ἠώς] [T' μόλῃ [VP t ]]]. 부정과거 접속법(aorist subjunctive) 형태로서 아직 실현되지 않은 미래 시간점의 도래를 상정하는 조건적 양태성을 띤다.",
        "background": "새날의 도래를 의미하는 핵심 동사로, 단순한 시간의 경과가 아니라 약속된 장례 휴전의 끝과 새로운 사건의 시작을 촉발하는 사건성을 포함한다.",
        "etymology": "PIE 어근 *mloh₃- / *mleh₃-('나아가다, 나타나다')의 영급(zero-grade) 어간 *mlh₃-에서 유래하였다. Beekes(EDG)는 자음군 *ml- 앞에 비음 및 양순음화 현상이 일어나는 음운론적 과정을 지적하며, 현재어간 βλώσκω(*mlō-skō > βλώσκω)와 부정과거어간 ἔμολον(*ml-o-n > ἔμολον)의 어간 이형성을 설명한다. 고전 아티카 방언에 비해 호메로스 시어에서 부정과거 접속법 용법이 고형(archaic form)을 보존하고 있다."
      },
      {
        "g": "ἠώς.’",
        "pos": "명사",
        "lemma": "ἠώς, ἠοῦς, ἡ",
        "parse": "sg.nom.f.",
        "gloss_kr": "새벽, 아침, 날",
        "gloss_en": "dawn, morning, day",
        "syntax": "LFG f-구조에서 ἠώς는 종속절의 SUBJ 기능어이며, [PRED 'ἠώς', CASE nom, GEND fem, NUM sg]의 AVM 속성을 지닌다. 생성문법 통사론상 종속절 [Spec,TP] 자리를 차지하여 주격(nominative)을 주관받는다: [TP [DP ἠώς]ᵢ [T' μόλῃ [VP tᵢ]]]. 동사 뒤에 배치된 도치 어순으로, 문장 말구에서 시간 주체의 등장 효과를 극대화한다.",
        "background": "호메로스 서사시에서 '새벽'은 단순한 자연 현상이 아니라 신격화된 존재(Eos)이자 하루 단위의 사건 경과를 표시하는 대표적인 서사적 장치이다.",
        "etymology": "PIE 재구형 *h₂ews-ōs('새벽, 빛나다')에서 유래한 것으로, 어두에 후두음 *h₂를 명확히 포함한다. 라틴어 Aurōra(*ausōs-ā), 산스크리트어 uṣas(उषस्), 고대 영어 Ēastre(현대 영어 Easter)와 완전한 동계어 관계를 이룬다. Chantraine(DELG)에 의하면 모음간 자음 *s의 탈락(rhotacism 미발생)과 모음 신장 과정(*h₂ewsōs > ἠώς)을 거친 Ionic-Attic 방언 형태이다. 현대 그리스어에서는 보존되지 않으며 현대어 αυγή로 대체되었다."
      }
    ]
  },
  {
    "ref": "Iliad 24.782",
    "trans": "이렇게 그가 말하니, 그들은 수레에 노새와 소들을 멍에 매고",
    "words": [
      {
        "g": "ὣς",
        "pos": "부사",
        "lemma": "ὥς",
        "parse": "pos.adv.",
        "gloss_kr": "이와 같이, 이렇게",
        "gloss_en": "thus, so",
        "syntax": "LFG 관점에서 ὣς는 주절 동사 ἔφατο를 수식하는 상황적 부속어(ADJUNCT)로 [ADJUNCT [PRED 'ὥς']] 구조를 형성한다. 생성문법적으로는 VP 내부의 부사적 수식어로 기능하다가 정보구조적 담화 연결을 위해 CP/TP 영역으로 전위된 것으로 분석된다: [CP ὣςᵢ [TP ... [VP ἔφατο tᵢ]]]. 전행 담화(프리아모스의 연설) 전체를 가리키는 직시적(deictic) 수사어이다.",
        "background": "연설이나 대사가 끝난 후 서사 장면의 전환을 알리는 호메로스 서사시의 정형적 정형구(formula) 시작 단어이다.",
        "etymology": "지시대명사 어근 *so- / *to-의 화석화된 도구격/방법 부사 형태 *swō-s에서 유래하였다. Beekes(EDG)는 지식/방향을 나타내는 PIE 부사 파생형으로 본다. 악센트 유무에 따라 지시부사 ὥς('이와 같이')와 비교 접속사 ὡς('~처럼')로 분화하였다. 현대 그리스어에서는 고형 부사로 보존되지 않고 전치사 및 접속사 ως로 변형되었다."
      },
      {
        "g": "ἔφαθ᾽,",
        "pos": "동사",
        "lemma": "φημί",
        "principalParts": "φημί – φήσω – ἔφησα – (미상) – (미상) – (미상)",
        "parse": "3rd.sg.impf.ind.mp.",
        "gloss_kr": "그가 말했다",
        "gloss_en": "he spoke, he said",
        "syntax": "LFG f-구조에서 ἔφατο(엘리전 ἔφαθ')는 PRED 역할을 담당하며, [PRED 'φημί<SUBJ>', SUBJ [PRED 'pro', CASE nom]]으로 표상되는 생략된 주어를 취한다. 생성문법적으로는 Tº 핵에 위치하여 주어 pro와의 인칭/수 일치를 점검한다: [TP pro [T' ἔφατο [VP t ]]]. 중간태 어미 -το를 취하여 담화 종료의 완결적 상태를 나타낸다.",
        "background": "프리아모스의 연설이 완료되었음을 선언하며, 이에 따른 트로이아 주민들의 즉각적인 행동 실행으로 넘어가는 담화적 교량 역할을 한다.",
        "etymology": "PIE 어근 *b<sup>h</sup>eh₂-('말하다', e급 어간에 후두음 *h₂ 포함)에서 유래하였다. Chantraine(DELG)에 따르면, 라틴어 fārī('말하다'), fāma('소문'), 산스크리트어 bhāṣā와 직접 동계어이다. 어두 증음(augment)이 생략된 호메로스식 미증음 미완료 형태(unaugmented imperfect)이며, 모음으로 시작하는 후행어 (οἳ) 앞에서 어말 모음 ο가 탈락(elision)하여 ἔφαθ'로 표기되었다."
      },
      {
        "g": "οṳ",
        "pos": "대명사",
        "lemma": "ὁ, ἡ, τό",
        "parse": "pl.nom.m.",
        "gloss_kr": "그들은",
        "gloss_en": "they",
        "syntax": "LFG f-구조에서 οἳ는 주절의 SUBJ 기능어로 [PRED 'pro', GEND masc, NUM pl, CASE nom] 속성을 지닌다. 생성문법 통사론상 관사 이전의 고형 지시대명사(demonstrative pronoun)로 기능하여 [Spec,TP] 자리에 병합된다: [TP [DP οἳ] [T' ... ζεύγνυσαν]]. 접어 δ᾽와의 결합을 통해 담화의 새로운 행위 주체(트로이아 주민들)를 전면화한다.",
        "background": "프리아모스의 말을 듣고 행동에 나서는 트로이아 백성 전체를 가리키는 주어이다.",
        "etymology": "PIE 지시대명사 어근 *so- (남성 주격 단수 *so, 복수 *soi)에서 유래하였다. 어두 *s-가 그리스어 특유의 기식음(rough breathing) h-로 음운 변형(*soi > hoι > οἳ)을 겪었다. Beekes(EDG)는 호메로스 언어에서 이 형태가 아직 후대의 한정관사(definite article)가 아닌 독립된 인칭/지시대명사로 기능함을 지적한다."
      },
      {
        "g": "δ᾽",
        "pos": "접속사",
        "lemma": "δέ",
        "parse": "coord.conj.",
        "gloss_kr": "그리고, 한편",
        "gloss_en": "and, but",
        "syntax": "LFG 관점에서 δέ(엘리전 δ')는 절과 절을 연결하는 대등 접속사로, 절 전체의 coordination 구조를 형성한다. 통사적으로 Wackernagel 법칙에 따라 문두 제2위치(second position)에 놓이는 후행접어(enclitic/postpositive particle)로 작동한다: [CP οἳ [C' δ᾽ [TP ...]]].",
        "background": "담화의 전개에서 이전 장면(연설)과 다음 행동(장례 준비)을 전환 연결하는 문맥 소사이다.",
        "etymology": "PIE 지시 소사 *de / *do에서 유래하였다. Frisk(GEW)는 이 소사가 문맥상의 경미한 대조 또는 전환적 연결을 나타내는 핵심 소사로 고대 그리스어 전체에 확립되었다고 설명한다. 후행하는 모음(ὑπό) 앞에서 어말 모음 ε가 탈락하여 δ' 형태가 되었다."
      },
      {
        "g": "ὑπ᾽",
        "pos": "전치사",
        "lemma": "ὑπό",
        "parse": "postpos.prep.",
        "gloss_kr": "~아래에, ~에",
        "gloss_en": "under, under the yoke of",
        "syntax": "LFG f-구조에서 ὑπό(엘리전 ὑπ')는 여격 명사구 ἀμάξῃσιν과 결합하여 공간적/도구적 부속어 [OBL_LOC [PRED 'ὑπό<OBJ>', OBJ [PRED 'ἅμαξα']]]를 형성한다. 생성문법적으로는 PP의 핵(Pº)으로 기능하며, 여격 보충어를 지배한다: [PP [P' ὑπ᾽ [DP ἀμάξῃσιν]]]. 마차 멍에 아래에 동물을 결속시키는 도구적 여격 구문이다.",
        "background": "수레에 짐승의 멍에를 매는 구체적인 물리적 장형 및 가목(멍에) 설치 위치를 지정하는 전치사이다.",
        "etymology": "PIE 재구형 *up-o('아래에서 위로, 아래에')에서 유래하였다. 어두 기식음 h-는 PIE 접두사 *su-와의 혼합 또는 모음 어두 기식화 현상에 기인한다. 라틴어 sub, 산스크리트어 upa, 고대 영어 uf(현대 영어 up)와 완전한 동계어 관계를 이룬다. Chantraine(DELG)에 따르면 여격과 결합하여 위치 및 종속 상태를 나타내는 전형적인 격지배 전치사이다."
      },
      {
        "g": "ἀμάξῃσιν",
        "pos": "명사",
        "lemma": "ἅμαξα, ἀμάξης, ἡ",
        "parse": "pl.dat.f.",
        "gloss_kr": "수레에, 마차에",
        "gloss_en": "to the wagons, under the carts",
        "syntax": "LFG f-구조에서 ἀμάξῃσιν은 전치사 ὑπό의 OBJ 보충어로 [PRED 'ἅμαξα', CASE dat, NUM pl, GEND fem] 속성을 갖는다. 생성문법 통사론상 PP 내부의 NP 보충어 자리를 차지한다. 서사시 전형의 -ῃσιν 서사시적 여격 복수 어미(epic dative plural ending)를 취하고 있다.",
        "background": "산에서 나무를 실어 나르기 위해 동원된 트로이아의 목재 운반용 대형 수레들을 가리킨다.",
        "etymology": "복합어 *sm̥-aǵ<sup>h</sup>-s-ah₂('함께 바퀴 축을 매어 이끄는 것')에서 유래한 것으로 추정된다. 어근 *sa- / *sm̥-('함께', PIE *sem-)와 *aǵ-('이끌다, 운반하다', PIE *h₂eǵ-)의 결합이다. Beekes(EDG)는 축과 바퀴가 결합된 고대 이륜/사륜 수레 구조에서 명칭이 파생된 것으로 본다. 호메로스 특유의 미음절 -ῃσιν 어미가 접속되어 운율적 장단(장음절)을 형성한다."
      },
      {
        "g": "βόας",
        "pos": "명사",
        "lemma": "βοῦς, βοός, ὁ/ἡ",
        "parse": "pl.acc.m.",
        "gloss_kr": "소들을",
        "gloss_en": "oxen, cattle",
        "syntax": "LFG f-구조에서 βόας는 동사 ζεύγνυσαν의 direct OBJ 기능을 담당하며, [PRED 'βοῦς', CASE acc, NUM pl]의 속성을 지닌다. 후행하는 ἡμιόνους τε와 대등 접속 구문 [OBJ [COORD βόας, ἡμιόνους]]을 구성한다. 생성문법적으로는 VP 내부의 직접목적어 DP이다.",
        "background": "장례용 땔나무를 운반하기 위해 수레에 멍에를 맸던 주된 견인 동물 중 하나인 소들을 가리킨다.",
        "etymology": "PIE 양순연구음 어근 *gʷow-s('소')에서 유래하였다. 음운 변화 *gʷ > β 규칙에 따라 그리스어 βοῦς로 발달하였다. 산스크리트어 gaus(गौः), 라틴어 bōs, 고대 영어 cū(현대 영어 cow)와 직접 동계어이다. Chantraine(DELG)에 따라 삼변화 명사 어간 *gʷow-에 대격 복수 어미 -ας가 결합하여 βόας 형태가 되었다."
      },
      {
        "g": "ἡμιόνους",
        "pos": "명사",
        "lemma": "ἡμίονος, ἡμιόνου, ὁ/ἡ",
        "parse": "pl.acc.m.",
        "gloss_kr": "노새들을",
        "gloss_en": "mules",
        "syntax": "LFG f-구조에서 ἡμιόνους는 접속사 τε에 의해 βόας와 대등 결합한 OBJ 구문 요소이다. [PRED 'ἡμίονος', CASE acc, NUM pl]의 AVM 구조를 갖는다. 생성문법상 [Conjp [DP βόας] [Conj' [DP ἡμιόνους] [Conj τε]]] 내의 오른쪽 접속항(Right conjunct)이다.",
        "background": "고대 근동 및 그리스에서 험준한 산악 지형의 짐 운반에 소보다 유용하게 쓰였던 노새들을 가리킨다.",
        "etymology": "접두사 ἡμι-('반, half', PIE *sēmi-)와 명사 ἵππος/ὄνος의 합성 구조로, '반(半) 당나귀' 즉 노새를 뜻하는 복합어이다. Beekes(EDG)는 PIE *sēmi-('반')가 라틴어 semi-, 산스크리트어 sāmi와 일치한다고 설명한다. 고대 그리스 농경 사회의 대표적 짐승을 나타내는 복합 어휘이다."
      },
      {
        "g": "τε",
        "pos": "접속사",
        "lemma": "τε",
        "parse": "coord.conj.",
        "gloss_kr": "그리고",
        "gloss_en": "and",
        "syntax": "LFG 관점에서 τε는 병렬 명사구 βόας와 ἡμιόνους를 결합하는 대등 접속사이다. Wackernagel 법칙에 의해 두 번째 병합 요소 ἡμιόνους 뒤에 오는 후행접어(enclitic)로 통사적 위치를 차지한다: [DP ἡμιόνους [C τε]].",
        "background": "두 대상(소와 노새)을 지칭할 때 호메로스 전통에서 자주 쓰이는 병렬 접속 접어이다.",
        "etymology": "PIE 양순연구음 접속 소사 *kʷe('그리고')에서 유래하였다. 자음 변화 *kʷ > τ 규칙에 따라 그리스어 τε가 되었다. 라틴어 -que, 산스크리트어 ca(च)와 완전한 동계어이다. Frisk(GEW)에 따르면 고대 인도유럽어의 대표적인 후행 결합 소사가 보존된 형태이다."
      }
    ]
  },
  {
    "ref": "Iliad 24.783",
    "trans": "멍에를 맸고, 곧이어 도시 앞에 모여들었다.",
    "words": [
      {
        "g": "ζεύγνυσαν,",
        "pos": "동사",
        "lemma": "ζεύνυμι",
        "principalParts": "ζεύνυμι – ζεύξω – ἔζευξα – (미상) – ἔζευγμαι – ἐζύγην / ἐζεύχθην",
        "parse": "3rd.pl.aor.ind.act.",
        "gloss_kr": "멍에를 맸다, 수레에 매었다",
        "gloss_en": "they yoked, they harnessed",
        "syntax": "LFG f-구조에서 ζεύγνυσαν은 주절의 PRED로 기능하며, [PRED 'ζεύγνυσαν<SUBJ,OBJ>', SUBJ [PRED 'pro'], OBJ [COORD βόας, ἡμιόνους]] 구조를 이룬다. 생성문법적으로는 Tº 핵에 위치하여 문맥상 주어(트로이아인들)와 인칭/수 일치를 형성한다: [TP pro [T' ζεύγνυσαν [VP t OBJ]]]. -νυ- 현재 어간 확장에 기반한 부정과거형(또는 미완료 나열형) 어미 -σαν을 취한다.",
        "background": "가축들에게 멍에를 얹고 수레를 결속시키는 구체적인 작업 행위를 완료함을 나타낸다.",
        "etymology": "PIE 어근 *yewg-('멍에 매다, 결합하다')에서 유래하였다. 비음 어간 확장 접미사 *-neu- / *-nu-가 결합한 -νυ- 나열 동사이다. Beekes(EDG)에 따르면, 라틴어 iungō, 산스크리트어 yuj(युज्), 고대 영어 geoc(현대 영어 yoke)와 완전한 동계어이다. 어근 모음 e급(e-grade *yewg- > ζευγ-)을 보존하고 있다."
      },
      {
        "g": "αἶψα",
        "pos": "부사",
        "lemma": "αἶψα",
        "parse": "pos.adv.",
        "gloss_kr": "곧, 즉시, 재빨리",
        "gloss_en": "quickly, forthwith",
        "syntax": "LFG f-구조에서 αἶψα는 동사 ἠγερέθοντο를 수식하는 시간/양태 부속어 [ADJUNCT [PRED 'αἶψα']]로 기능한다. 생성문법 통사론상 VP 내부의 부사적 수식어로 병합되어 동작의 신속성을 부여한다.",
        "background": "프리아모스의 명령에 따라 트로이아 주민들이 지체 없이 일망타진하듯 일어나는 신속한 행동성을 서사적으로 강조한다.",
        "etymology": "어원학적으로 불확실하나, Frisk(GEW)는 어근 *ayk-('신속하다') 또는 *ay-s-와의 연관성을 제기한다. Beekes(EDG)는 확실한 PIE 재구형이 부재함을 이유로 선그리스어(Pre-Greek) 기층 어휘 가능성을 고려한다. 호메로스 시어에서 신속한 사건 전개를 나타내는 정형적 부사로 상용된다."
      },
      {
        "g": "δ᾽",
        "pos": "접속사",
        "lemma": "δέ",
        "parse": "coord.conj.",
        "gloss_kr": "그리고",
        "gloss_en": "and then",
        "syntax": "LFG 관점에서 δέ는 절 연쇄(clause chaining)를 이끄는 대등 접속사로, 앞선 멍에 매기 행위와 집결 행위를 순차적으로 연결한다. Wackernagel 위치 [CP αἶψα [C' δ᾽ [TP ...]]]에 위치한다.",
        "background": "멍에 매는 준비 단계에서 집결이라는 본격적인 실행 단계로 전개되는 절 문맥을 연결한다.",
        "etymology": "PIE 지시 소사 *de에서 유래한 접속사로, 모음 어두(ἔπειτα) 앞에서 어말 모음 ε가 탈락하여 δ'로 이형태화되었다."
      },
      {
        "g": "ἔπειτα",
        "pos": "부사",
        "lemma": "ἔπειτα",
        "parse": "pos.adv.",
        "gloss_kr": "그 다음에, 이어서",
        "gloss_en": "then, thereupon",
        "syntax": "LFG 관점에서 ἔπειτα는 αἶψα와 함께 결합하여 동작의 시간적 순차성을 한정하는 부속어 [ADJUNCT [PRED 'ἔπειτα']]로 작동한다. 생성문법상 VP 수식어로 위치한다.",
        "background": "시간의 선후 관계를 명확히 하여 준비 작업 후의 집결 행위를 시간적 보충으로 설명한다.",
        "etymology": "전치사 ἐπί('위에, 이어서')와 지시 부사 εἶτα('그 후')의 합성어(ἐπ-είτα)이다. Chantraine(DELG)에 따르면 시간적 계송성(temporal succession)을 나타내는 대표적인 복합 부사로 발달하였다."
      },
      {
        "g": "πρὸ",
        "pos": "전치사",
        "lemma": "πρό",
        "parse": "prep.gen.",
        "gloss_kr": "~ 앞에, ~ 외곽에",
        "gloss_en": "before, in front of",
        "syntax": "LFG f-구조에서 πρό는 속격 명사 ἄστεος를 지배하여 공간적 부속어 [OBL_LOC [PRED 'πρό<OBJ>', OBJ [PRED 'ἄστυ']]]를 구성한다. 생성문법적으로는 PP의 핵(Pº)이다.",
        "background": "목재를 운반하러 이다 산으로 출발하기 위해 성문 밖, 즉 트로이아 도시 앞 성문 광장에 모이는 위치적 장소를 나타낸다.",
        "etymology": "PIE 어근 *pro('앞으로, 앞선')에서 유래하였다. 산스크리트어 pra, 라틴어 pro, 고대 영어 for(현대 영어 for/fore)와 완전 동계어이다. Beekes(EDG)에 따르면 공간적/시간적 전방성을 가리키는 원형적 전치사이다."
      },
      {
        "g": "ἄστεος",
        "pos": "명사",
        "lemma": "ἄστυ, ἄστεος / ἄστεως, τό",
        "parse": "sg.gen.n.",
        "gloss_kr": "도시의, 성채의",
        "gloss_en": "of the city, town",
        "syntax": "LFG f-구조에서 ἄστεος는 전치사 πρό의 속격 OBJ 보충어로 [PRED 'ἄστυ', CASE gen, NUM sg, GEND neut] 속성을 지닌다. 서사시적 -εος 속격 어미를 유지하고 있다.",
        "background": "트로이아 요새 도시 자체를 지칭하는 명사이다.",
        "etymology": "PIE 어근 *wes-('거주하다, 머물다')에서 파생된 *wastu-('거주지, 도시')에서 유래하였다. 산스크리트어 vastu('집, 터')와 직접 동계어이다. 어두 디감마(*w-)가 탈락하여 호메로스 텍스트에서는 ἄστυ로 표기되며, 어간 모음 교체에 따라 속격 ἄστεος가 형성되었다. Chantraine(DELG)을 참조한다."
      },
      {
        "g": "ἠγερέθοντο.",
        "pos": "동사",
        "lemma": "ἀγείρω",
        "principalParts": "ἀγείρω – ἀγερῶ – ἤγειρα – (미상) – ἀγήγερμαι – ἠγέρθην",
        "parse": "3rd.pl.impf.ind.mp.",
        "gloss_kr": "모여들었다, 집결하였다",
        "gloss_en": "they gathered together, assembled",
        "syntax": "LFG f-구조에서 ἠγερέθοντο는 주절의 PRED로 [PRED 'ἀγείρω<SUBJ>', SUBJ [PRED 'pro', NUM pl]] 구조를 형성한다. 생성문법상 Tº 핵에 위치하여 주어와 일치한다. 서사시적 연장어간 형태 접미사 -εθ-가 결합된 미완료 중동태(imperfect middle) 형태이다.",
        "background": "트로이아 주민들이 성문 앞에 군중을 이루어 모여드는 장면의 지속적/반복적 행동을 미완료 시제로 묘사한다.",
        "etymology": "PIE 어근 *ger-('모으다, 함께 잡다')에서 파생되었다. Beekes(EDG)에 따르면 어두 아티카 재중복 및 연장 어간 접미사 -εθ-(epic lengthening suffix -eth-)가 결합하여 ἠγερέθονται/ἠγερέθοντο 형태가 발달하였다. 고대 그리스어 명사 ἀγορά('광장, 집회')와 동일 어근을 공유한다."
      }
    ]
  },
  {
    "ref": "Iliad 24.784",
    "trans": "나인동안은 그들이 엄청난 양의 땔나무를 날라 왔다.",
    "words": [
      {
        "g": "ἐννῆμαρ",
        "pos": "부사",
        "lemma": "ἐννῆμαρ",
        "parse": "pos.adv.",
        "gloss_kr": "아홉 날 동안",
        "gloss_en": "for nine days",
        "syntax": "LFG f-구조에서 ἐννῆμαρ는 동사 ἀγίνεον의 시간적 기간을 한정하는 부속어 [ADJUNCT [PRED 'ἐννῆμαρ']]로 기능한다. 생성문법 통사론상 VP 내부의 대격 상당 시간 부사구(accusative of duration)로 병합된다.",
        "background": "호메로스 서사시에서 '9일'은 정형화된 과도기 기간이다. 9일 동안 목재를 모으고 10일째에 화장하며 11일째에 무덤을 만들고 12일째에 전쟁을 재개하는 전형적 서사 구조를 이룬다.",
        "etymology": "수사 ἐννέα('9', PIE *h₁newn̥)와 명사 ἦμαρ('날, day', PIE *h₂ah₁mr̥ / 선그리스어)의 합성어이다. Chantraine(DELG)에 따르면 서사시 고유의 일수 측정 합성 부사이다."
      },
      {
        "g": "μὲν",
        "pos": "소사",
        "lemma": "μέν",
        "parse": "postpos.prep.",
        "gloss_kr": "~한편, 우선",
        "gloss_en": "on the one hand, indeed",
        "syntax": "LFG 관점에서 μέν은 뒤따르는 ἀλλ᾽ ὅτε(785행)와 상관 구조(correlative structure)를 형성하는 화용론적 담화 소사이다: [CORREL μέν ... ἀλλά]. 후행접어로 문두 제2위치에 위치한다.",
        "background": "9일간의 준비 기간(μὲν)과 10일째의 핵심 사건 발생(ἀλλ᾽)을 대비적으로 상술하는 담화 구조어이다.",
        "etymology": "PIE 확증 소사 *men-('참으로, 분명히')에서 유래하였다. 라틴어 meminī, 산스크리트어 man와 동일 어근 체계에 속한다. Frisk(GEW)를 참조한다."
      },
      {
        "g": "τοί",
        "pos": "대명사",
        "lemma": "ὁ, ἡ, τό",
        "parse": "pl.nom.m.",
        "gloss_kr": "그들은",
        "gloss_en": "they",
        "syntax": "LFG f-구조에서 서사시적 지시대명사 τοί(아티카 οἱ)는 주절의 SUBJ [PRED 'pro', CASE nom, NUM pl]를 구성한다. 생성문법상 [Spec,TP] 자리에 위치한다.",
        "background": "목재 운반 작업에 동원된 트로이아 주민 전체를 지칭한다.",
        "etymology": "PIE 지시대명사 어근 *to-의 남성 주격 복수 형태 *toi에서 유래하였다. 서사시-이오니아 방언 특유의 어두 τ- 보존 형태이다. 라틴어 iste, 산스크리트어 te와 동계어이다. Beekes(EDG) 참조."
      },
      {
        "g": "γε",
        "pos": "소사",
        "lemma": "γέ",
        "parse": "postpos.prep.",
        "gloss_kr": "적어도, 바로 그들은",
        "gloss_en": "at least, indeed",
        "syntax": "LFG 관점에서 γέ는 주어 대명사 τοί를 통사·화용적으로 한정/강조하는 한정 부속어 [FOCUS [PRED 'γέ']]로 기능한다. 후행 접어로 작동한다.",
        "background": "주어 '그들(트로이아인들)'의 주체적 행위를 한정하여 강조하는 한정 소사이다.",
        "etymology": "PIE 한정 소사 *ge / *ghi에서 유래하였다. 고대 인도어 hi와 동계어 관계를 보이며, 특정 통사 성분을 한정 강조하는 역할을 담당한다. Frisk(GEW) 참조."
      },
      {
        "g": "ἀγίνεον",
        "pos": "동사",
        "lemma": "ἀγινέω",
        "principalParts": "ἀγινέω – (미상) – (미상) – (미상) – (미상) – (미상)",
        "parse": "3rd.pl.impf.ind.act.",
        "gloss_kr": "나날이 날라 왔다, 계속 이송했다",
        "gloss_en": "they brought, kept carrying",
        "syntax": "LFG f-구조에서 ἀγίνεον은 주절 PRED이며, [PRED 'ἀγινέω<SUBJ,OBJ>', SUBJ [PRED 'τοί'], OBJ [PRED 'ὕλη']]의 AVM 속성을 갖는다. 생성문법상 Tº 위치의 미완료 시제로 9일간 반복 실행된 운반 행위의 지속성(durative aspect)을 표현한다.",
        "background": "이달 산에서 나무를 베어 수레로 도시 안으로 실어 오는 9일간의 노역을 미완료 시제로 생생히 묘사한다.",
        "etymology": "동사 ἄγω('이끌다, 운반하다', PIE *h₂eǵ-)의 빈복(frequentative/iterative) 파생 동사 *ἀγίνω / ἀγινέω이다. Beekes(EDG)에 따르면 반복적·지속적 이송 동작을 나타내기 위해 -ιν- 접미사가 확장된 호메로스 시어 형태이다."
      },
      {
        "g": "ἄσπετον",
        "pos": "형용사",
        "lemma": "ἄσπετος, ἄσπετον",
        "parse": "sg.acc.f.",
        "gloss_kr": "엄청난, 말로 다 할 수 없는",
        "gloss_en": "immense, unspeakable",
        "syntax": "LFG f-구조에서 ἄσπετον은 명사 ὕλην을 수식하는 부속어 [ADJUNCT [PRED 'ἄσπετος']]이다. 생성문법상 NP 내부의 AP 수식어 구조를 이룬다.",
        "background": "헥토르의 거대한 화장작대(pyre)를 쌓기 위해 모아진 목재의 막대한 수량을 수사적으로 기술한다.",
        "etymology": "부정 접두사 α-('not', PIE *n̥-)와 어근 *sekʷ-('말하다', PIE *sekʷ-, 그리스어 ἔννεπε / ἐνέπω)의 결합형 *α-σπε-τος('말로 다 말할 수 없는')에서 유래하였다. Chantraine(DELG)에 따르면 '너무나 엄청나서 말로 표현할 수 없는'이라는 원뜻에서 '막대한, 엄청난'의 의미로 확장되었다."
      },
      {
        "g": "ὕλην:",
        "pos": "명사",
        "lemma": "ὕλη, ὕλης, ἡ",
        "parse": "sg.acc.f.",
        "gloss_kr": "목재를, 땔나무를",
        "gloss_en": "wood, timber",
        "syntax": "LFG f-구조에서 ὕλην은 동사 ἀγίνεον의 직접목적어(OBJ)로 [PRED 'ὕλη', CASE acc, NUM sg, GEND fem] 속성을 갖는다. 생성문법상 VP 내부의 DP 보충어이다.",
        "background": "화장용으로 쓰일 숲의 땔나무 및 목재 자원 전체를 가리킨다.",
        "etymology": "PIE 어근 *swul- / *sul-('숲, 나무')에서 유래한 것으로 추정되며, 라틴어 silva(*swilwa)와 동계어 관계를 이룬다. Beekes(EDG)는 어두 기식음 h-가 PIE *s-의 약화 결과임을 지적한다. 고전기 그리스어에서는 '물질, 재료(matter)'라는 철학적 개념어로 진화하였다."
      }
    ]
  },
  {
    "ref": "Iliad 24.785",
    "trans": "하지만 열두 번째 새벽이 빛을 가져오며 떠올랐을 때,",
    "words": [
      {
        "g": "ἀλλ᾽",
        "pos": "접속사",
        "lemma": "ἀλλά",
        "parse": "coord.conj.",
        "gloss_kr": "하지만, 마침내",
        "gloss_en": "but, now when",
        "syntax": "LFG f-구조에서 ἀλλά(엘리전 ἀλλ᾽)는 784행의 μέν과 대응하여 담화의 결정적 반전 및 절정 단계를 도입하는 역접 접속사이다.",
        "background": "9일간의 지속적인 준비 노역이 끝나고, 10일째 장례 화장이 집행되는 핵심 사건으로 전환됨을 알린다.",
        "etymology": "형용사 ἄλλος('다른', PIE *al-yo-)의 복수 중격 대격 화석화 형태 ἄλλα에서 유래하였다. Chantraine(DELG)을 참조한다."
      },
      {
        "g": "ὅτε",
        "pos": "접속사",
        "lemma": "ὅτε",
        "parse": "coord.conj.",
        "gloss_kr": "~했을 때",
        "gloss_en": "when",
        "syntax": "LFG f-구조에서 ὅτε는 종속 시간절 전체를 이끄는 Cº 접속사로, [ADJUNCT [PRED 'ὅτε<COMP>']] 구조를 형성한다. 생성문법상 CP 핵에 위치한다.",
        "background": "특정한 시간점(10일째 새벽)의 도래를 시점적으로 특정하는 접속어이다.",
        "etymology": "관계대명사 어근 *yo-와 시간 접미사 *-te의 합성어 *yo-te에서 유래하였다. 산스크리트어 yadā와 기능적으로 대응한다. Beekes(EDG) 참조."
      },
      {
        "g": "δὴ",
        "pos": "소사",
        "lemma": "δή",
        "parse": "postpos.prep.",
        "gloss_kr": "정말로, 마침내",
        "gloss_en": "indeed, now",
        "syntax": "LFG 관점에서 δή는 시간 접속사 ὅτε를 화용론적으로 강조하는 양태 부속어 [FOCUS [PRED 'δή']]로 기능한다.",
        "background": "오랜 기다림 끝에 마침내 10일째 날이 밝았음을 서사적으로 부각한다.",
        "etymology": "PIE 지시/시간 소사 *do / *da에서 유래하였다. 서사시에서 시간점의 정점을 강조할 때 ὅτε와 빈번히 결합한다. Frisk(GEW) 참조."
      },
      {
        "g": "δεκάτη",
        "pos": "형용사",
        "lemma": "δέκατος, δεκάτη, δέκατον",
        "parse": "sg.nom.f.",
        "gloss_kr": "열 번째의",
        "gloss_en": "tenth",
        "syntax": "LFG f-구조에서 δεκάτη는 주어 ἠώς를 수식하는 ADJUNCT이다. 생성문법상 DP 내부의 AP 수식어 구조를 형성한다.",
        "background": "장례 일정의 정점이 되는 '열 번째 날'을 특정하는 서열 수사이다.",
        "etymology": "수사 δέκα('10', PIE *deḱm̥)에 서열 접미사 -τος가 결합한 형태이다. 라틴어 decimus, 산스크리트어 daśama와 동계어이다. Chantraine(DELG) 참조."
      },
      {
        "g": "ἐφάνη",
        "pos": "동사",
        "lemma": "φαίνω",
        "principalParts": "φαίνω – φανῶ – ἔφηνα – πέφαγκα / πέφηνα – πέφασμαι – ἐφάνην / ἐφάνθην",
        "parse": "3rd.sg.aor.ind.pass.",
        "gloss_kr": "밝아왔다, 모습을 드러냈다",
        "gloss_en": "appeared, shone forth",
        "syntax": "LFG f-구조에서 ἐφάνη는 종속절의 PRED이며, [PRED 'φαίνω<SUBJ>', SUBJ [PRED 'ἠώς', CASE nom]]의 속성을 갖는다. 생성문법상 Tº 핵에 위치하여 부정과거 수동태(제2부정과거 ἐφάνην) 어미를 통해 새벽이 수동적으로 밝아오는 자연적 현상을 표현한다.",
        "background": "새벽의 빛이 세상을照照하며 사건의 무대가 열리는 광경을 묘사한다.",
        "etymology": "PIE 어근 *b<sup>h</sup>eh₂-('빛나다, 밝다', 후두음 *h₂ 포함)에서 유래하였다. 어근 영급 *b<sup>h</sup>h₂-에서 파생된 제2부정과거 어간 φαν-에 수동 어미 -η가 결합하였다. Beekes(EDG)에 따르면 라틴어 manifestus, 산스크리트어 bhānumant와 동계어이다."
      },
      {
        "g": "φαεσίμβροτος",
        "pos": "형용사",
        "lemma": "φαεσίμβροτος, φαεσίμβροτον",
        "parse": "sg.nom.f.",
        "gloss_kr": "인간에게 빛을 가져다주는",
        "gloss_en": "bringing light to mortals",
        "syntax": "LFG f-구조에서 φαεσίμβροτος는 명사 ἠώς를 직접 수식하는 서사시적 동형 수식어 [ADJUNCT [PRED 'φαεσίμβροτος']]이다. 생성문법상 명사구 내 AP 수식어이다.",
        "background": "새벽(Eos) 또는 태양(Helios)을 수식하는 호메로스 고유의 정형적 수식어(epic epithet)이다.",
        "etymology": "명사 φάος / φῶς('빛', PIE *b<sup>h</sup>eh₂-es-)와 명사 βροτός('죽을 수밖에 없는 인간', PIE *mrotós < *mr̥-tós '죽는 자')의 합성어이다. Chantraine(DELG)에 따르면 '죽을 인간들에게 빛을 비추는'이라는 완벽한 서사시 합성 수식어 구조를 이루고 있다."
      },
      {
        "g": "ἠώς,",
        "pos": "명사",
        "lemma": "ἠώς, ἠοῦς, ἡ",
        "parse": "sg.nom.f.",
        "gloss_kr": "새벽이",
        "gloss_en": "dawn",
        "syntax": "LFG f-구조에서 ἠώς는 시간 종속절의 SUBJ 기능어 [PRED 'ἠώς', CASE nom, NUM sg, GEND fem]이다. 생성문법상 [Spec,TP] 자리를 차지한다.",
        "background": "10일째 장례 당일의 시작을 알리는 주체로서의 새벽이다.",
        "etymology": "PIE *h₂ews-ōs('새벽')에서 유래한 명사로, 781행의 ἠώς 항목 분석을 참조한다."
      }
    ]
  },
  {
    "ref": "Iliad 24.786",
    "trans": "그리고 그때 그들은 눈물을 흘리며 용맹한 헥토르를 밖으로 실어 나왔고,",
    "words": [
      {
        "g": "καὶ",
        "pos": "접속사",
        "lemma": "καί",
        "parse": "coord.conj.",
        "gloss_kr": "그리고",
        "gloss_en": "and",
        "syntax": "LFG 관점에서 καὶ는 절 단위 연결을 담당하는 등이접속사(coordinating conjunction)로, 이전 행의 사태 서술과 본 행의 사태를 구조적으로 연결하며 [FORM 'καί', COORD_TYPE clausal]과 같은 접속 자질을 통사 구조에 부여한다. 생성문법적으로는 두 TP를 상위 ConjP 구조로 묶어주는 구구조 핵(head Conj) 위치에 배치되며, [ConjP [TP₁ ...] [Conj' καὶ [TP₂ ...]]]의 계층적 구조를 생성한다. 정보구조상 후행하는 시간 부사 clause와 결합하여 새로운 사건의 발생을 연속적으로 도입하는 결합자 역할을 수행한다.",
        "background": "헥토르의 시신을 장례 장작더미로 운반하는 서사의 새로운 단계가 시작됨을 알리는 전환적 접속사이다. 9일간의 목재 수송 작업이 끝난 뒤 10일째 아침에 펼쳐지는 비극적 장례 운구를 부드럽게 이어준다. 청중에게 장례의 최고조 단계로 서사가 전환되었음을 음성적으로 전달하는 신호다.",
        "etymology": "PIE 어근 *kʷe('그리고', cf. 라틴어 -que, 산스크리트어 ca)에서 파생된 부류와 연관성을 지니며, Chantraine(DELG)은 어원적 기원을 인도유럽조어 접속사 형태소의 아티카-이오니아 변형으로 분석한다. Beekes(EDG)는 PIE *kʷm̥- 또는 접속 부사적 형태 *k(ʷ)a-와의 관련성을 검토하지만 정확한 음운 과정에 대해서는 유보적인 입장을 취한다. 미케네어(Linear B) 선상 B 문자 텍스트에서는 문미 접어 -qe 형태로 나타나며, 고전기 그리스어에서는 완벽하게 독립적인 선행 접속사 καί로 정착하였다. 현대 그리스어에서도 문장 및 단어 연결 접속사 και(ke)로 완벽히 존속하여 사용되고 있다."
      },
      {
        "g": "τότ᾽",
        "pos": "부사",
        "lemma": "τότε",
        "parse": "temp.adv.",
        "gloss_kr": "그때",
        "gloss_en": "then",
        "syntax": "LFG f-구조에서 시간 부사어 ADJUNCT 기능을 수행하며, [ADJUNCT [PRED 'τότε', TIME distant_past]] 형태의 속성-값 행렬로 분석된다. 생성문법적으로는 TP의 수식어 위치(Spec,TP 또는 VP-adjunct)에 병합되며 [TP τότ᾽ [TP ... [VP ἐξέφερον ...]]]와 같이 절 전체의 시간적 기준점(temporal reference point)을 규정한다. 후행하는 소사 ἄρα와의 결합을 통해 서사적 결과성 및 당위성을 담은 시간 접속 구성을 강화한다.",
        "background": "장례 목재 마련을 위해 지정된 9일간의 유예 기간이 마침내 끝나고, 실제 화장이 이루어지는 10일째 아침의 결정적 순간을 가리킨다. 프리아모스가 아킬레우스와의 협상에서 약속받은 기간의 완료와 비극의 최종 장을 시각화하는 시점이다. 트로이아 주민 전체가 비통함 속에서 움직이기 시작하는 서사적 시점을 고정한다.",
        "etymology": "PIE 지시대명사 어근 *to-(cf. 라틴어 tum, 영어 that)에 시간 접미사 *-te가 결합하여 형성된 부사다. Beekes(EDG)는 PIE *to-ti 또는 *to-te 구조에서 유래한 지시적 시간 부사로 파악하며, Chantraine(DELG) 역시 지시어간 *to-의 시상적 확장형으로 파악한다. 모음 탈락(elision) 현상에 의해 후행 모음 ἄρ 앞에서 final 모음 -ε가 탈락하여 τότ᾽ 형태를 띠게 되었다. 현대 그리스어에서는 식별 가능한 고어형 지사로 남아있거나 일상어에서는 τότε(tote) 형태로 변함없이 사용된다."
      },
      {
        "g": "ἄρ᾽",
        "pos": "소사",
        "lemma": "ἄρα",
        "parse": "part.",
        "gloss_kr": "과연, 마침내, 이에",
        "gloss_en": "then, so, as it turned out",
        "syntax": "LFG 통사 구조에서 절 전체를 수식하는 ADJUNCT 내지 담화 소사 자질(D-PARTICLE)로 기능하며, f-구조상 [DISCOURSE [PARTICLE 'ἄρα', INFERENTIAL +]]로 표현된다. 생성문법 관점에서는 C° 위치 또는 2위치(Wackernagel's position)에 배치되는 접어(clitic) 형태소로 분석되며 [CP ... C°[ἄρα] [TP ...]]의 괄호 구조를 형성한다. 문맥상 이전의 9일간 준비 작업이 완결됨에 따라 당연히 뒤따르는 자연스러운 서사적 귀결을 표시하는 화용론적 기능을 담당한다.",
        "background": "호메로스 서사시에서 ἄρα는 독자/청중에게 앞선 예고나 논리적 흐름에 따라 다음 사건이 지체 없이 실현됨을 환기시키는 핵심적인 구술 서사 소사이다. 프리아모스가 명한 준비 기간이 끝나자 약속대로 운구가 시작됨을 나타낸다. 서사적 운명의 필연적 집행을 음운적으로 경쾌하게 연결한다.",
        "etymology": "PIE 어근 *ar-('결합하다', '맞추다', cf. 그리스어 ἁρμόζω, 라틴어 artus)에서 유래한 어휘로, '절묘하게 맞아떨어짐'을 뜻하던 원형이 담화 접속 소사로 발달하였다. Chantraine(DELG)은 어근 *ar-에서 파생하여 논리적 및 시간적 적합성을 나타내는 소사로의 의미 확장을 설명한다. Beekes(EDG) 또한 PIE *ar-와의 구체적 연관성을 지지하며 선그리스어적 요소가 아닌 명확한 PIE 유산으로 분류한다. 모음 탈락에 따라 ἄρα에서 ἄρ᾽로 축소되었으며, 현대 그리스어에서는 독립 어휘로 쓰이지 않고 고전 문헌상의 표상으로 남아 있다."
      },
      {
        "g": "ἐξέφερον",
        "pos": "동사",
        "lemma": "ἐκφέρω",
        "principalParts": "ἐκφέρω – ἐξοίσω – ἐξήνεγκα – ἐξενήνοχα – ἐξενήνεγμαι – ἐξενεχθήσομαι / ἐξηνέχθην",
        "parse": "3rd.pl.impf.ind.act.",
        "gloss_kr": "운구하고 있었다, 밖으로 실어 나르고 있었다",
        "gloss_en": "they were carrying out (for burial)",
        "syntax": "LFG f-구조에서 문장의 주술 관계 핵심인 PRED를 형성하며, [PRED 'ἐκφέρω<SUBJ,OBJ>', SUBJ [PRO, NUM pl, PERS 3], OBJ [PRED 'Ἕκτωρ', CASE acc]]로 표현된다. 생성문법적으로는 미완료 시제의 지속성을 반영하여 vP 내부에서 T°로의 이동을 거친 구구조 [TP T°[ἐξ-έ-φερον] [vP v° [VP V° tᵢ OBJ]]]로 나타난다. 통사적으로 ἐκ- 전치사 접두사로 인해 격 지배 능력이 보강되며, 시상의 미완료성(imperfective aspect)을 통해 운구 행위의 진행 과정과 시간적 길이를 생생하게 묘사한다.",
        "background": "ἐκφέρω는 단순히 '밖으로 옮기다'라는 뜻을 넘어, 성문 밖 장작더미나 무덤으로 시신을 실어 내오는 '운구(extratio/pompa)'라는 장례 전용 기술 어휘이다. 트로이아 성내에서 성밖의 화장장으로 헥토르를 옮기는 구체적이고 정중한 장례 행위를 입체적으로 보여준다. 미완료 시제를 사용하여 운구 행진의 지속되는 장엄한 광경을 시각화한다.",
        "etymology": "접두사 ἐκ('밖으로')와 PIE 어근 *bher-('나르다, 이끌다', cf. 라틴어 fero, 영어 bear, 산스크리트어 bhṛ-)에서 유래한 어간 φέρω가 결합한 합성 동사이다. Chantraine(DELG)은 PIE *bher- 어근의 모음 교체(ablaut) e-급 형태 *bher-o-가 그리스어 φέρω로 정착한 과정을 상세히 제시한다. Beekes(EDG) 역시 PIE *bher-에서 출화한 정통 동사로 보며 과거 시상 표지인 가중(augment) ἐ-가 접두사와 어간 사이에 삽입된 ἐξ-έ-φερον 형태의 유래를 밝힌다. 현대 그리스어에서도 εκφέρω(ekfero - 발음하다, 운구하다)라는 어휘로 고전적 의미와 비유적 의미를 모두 유지하며 사용되고 있다."
      },
      {
        "g": "θρασὺν",
        "pos": "형용사",
        "lemma": "θρασύς, θρασεῖα, θρασύ",
        "parse": "sg.acc.m.",
        "gloss_kr": "용맹한, 담대한",
        "gloss_en": "bold, spirited",
        "syntax": "LFG f-구조에서 Ἕκτορα를 수식하는 ADJUNCT 기능을 수행하며, [ADJUNCT [PRED 'θρασύς', CASE acc, GEND m, NUM sg]]의 속성구조를 띤다. 생성문법적으로는 NP 내부의 수식어 위치에 병합되어 [DP [NP [AP θρασὺν] [N' Ἕκτορα]]] 구조를 이룬다. 형용사의 일격(agreement) 원칙에 따라 피수식어 명사 Ἕκτορα의 대격, 남성, 단수 자질과 완전히 일치한다.",
        "background": "헥토르를 꾸미는 전형적인 호메로스 수식어(epithet) 중 하나로, 그의 생전 용맹함과 영웅적 성격을 상징한다. 서사시의 마지막 장에서 주검이 된 그에게 이 수식어를 부여함으로써, 그의 비극적 죽음과 대비되는 위대한 영웅으로서의 면모를 다시 한번 부각한다. 죽음 앞에서도 빛나던 트로이아 최고 전사의 기개를 기리는 표현이다.",
        "etymology": "PIE 어근 *dhrs-('감행하다, 용기를 내다', cf. 산스크리트어 dhṛṣṇú, 고대 영어 durran, 영어 dare)의 영급(zero-grade) 어간 *dhr̥s-u-에서 파생되었다. Chantraine(DELG)은 PIE 영급 성음적 자음 *r̥가 그리스어에서 ας/ρα로 발달함에 따라 θρασύς가 형성된 음운 법칙을 명시한다. Beekes(EDG)는 PIE *dʰers- (e-급) / *dʰr̥s- (영급) 애블라우트 체계를 바탕으로 이 형용사의 구조를 증명한다. 음운적 발달 과정에서 음위전환 및 영급 모음화가 일어났으며, 현대 그리스어에서는 통용어 θρασύς(thrasys - 무모한, 버릇없는)로 의미적 악화(pejoration)를 겪은 채 존속한다."
      },
      {
        "g": "Ἕκτορα",
        "pos": "명사",
        "lemma": "Ἕκτωρ, Ἕκτορος, ὁ",
        "parse": "sg.acc.m.",
        "gloss_kr": "헥토르를",
        "gloss_en": "Hector",
        "syntax": "LFG f-구조에서 타동사 ἐξέφερον의 직접목적어(OBJ) 역할을 담당하며 [OBJ [PRED 'Ἕκτωρ', CASE acc, GEND m, NUM sg, θ-ROLE PATIENT]]로 표시된다. 생성문법상 VP의 내적 논항(internal argument)으로 병합된 형태 구구조 [VP [V° ἐξέφερον] [DP Ἕκτορα]]를 가진다. 3변화 명사의 단수 대격 어미 -α를 취하여 동사의 인과적 작용을 받는 대상을 통사적으로 명시한다.",
        "background": "일리아스 전체를 이끌어온 트로이아 측의 핵심 영웅이자 프리아모스의 국왕으로서의 장남이다. 그의 죽음과 장례는 트로이아 함락의 예고편이며, 일리아스 24권은 아킬레우스의 분노가 진정되고 헥토르의 유해가 격식 있게 안치되는 과정을 통해 서사의 대단원을 맞이한다. 이 이름의 제시 자체로 청중에게 무거운 문학적 무게감을 전달한다.",
        "etymology": "동사 ἔχω('가지다, 지키다, 받치다')의 어근 *seĝʰ-('지탱하다, 승리하다', cf. 산스크리트어 sah-)에서 유래한 행위자 명사(agent noun) 형이다. Chantraine(DELG)은 어근 *seĝʰ-에 행위자 접미사 -τωρ가 결합하여 *Séĝʰ-tōr > ᝁκτωρ('도시나 백성을 지탱하는 자, 방어자')가 되었음을 입증한다. Beekes(EDG)도 PIE *seĝʰ- / *sgʰ- 어근 분석을 통해 고유명사 Ἕκτωρ의 명확한 인도유럽어적 어원을 밝힌다. 트로이아어 기층설이 논의되기도 하나 어원학적으로는 명백한 그리스어 행위자 명사 구조다. 현대 그리스어에서도 영웅적 고유명사 Έκτορας(Ektoras)로 존속하고 있다."
      },
      {
        "g": "δάκρυ",
        "pos": "명사",
        "lemma": "δάκρυ, δάκρυος, τό",
        "parse": "sg.acc.n.",
        "gloss_kr": "눈물을",
        "gloss_en": "tear",
        "syntax": "LFG f-구조에서 분사 χέοντες의 직접목적어(OBJ)로 기능하며 [OBJ [PRED 'δάκρυ', CASE acc, GEND n, NUM sg, θ-ROLE PATIENT]]로 분석된다. 생성문법적으로 분사구 내부 VP의 내적 논항 위치 [VP [V° χέοντες] [DP δάκρυ]]에 위치한다. 집합적 의미(collective noun)를 지녀 단수형 형태이지만 '눈물방울들' 또는 '눈물 흘림' 전체를 대표하는 동질적 통사 기능을 수행한다.",
        "background": "호메로스 서사시에서 영웅과 백성들이 흘리는 눈물은 감정의 사소한 유약함이 아니라, 지극한 슬픔과 상실감, 그리고 상대에 대한 유대감을 표현하는 숭고한 행위이다. 헥토르를 잃은 트로이아 온 백성의 통곡을 상징하는 시적 어휘다. 비극적 장례 분위기를 온전히 조성하는 수사적 장치다.",
        "etymology": "PIE 어근 *daḱru-('눈물', cf. 라틴어 lacrima, 고대 영어 tēar, 영어 tear, 고대 아일랜드어 dér)에서 유래하였다. Chantraine(DELG)은 PIE 어휘 *daḱru-가 그리스어에서 중성 명사 δάκρυ 및 3변화 명사 δάκρυον으로 분화하는 과정을 서술한다. Beekes(EDG)는 라틴어 lacrima와의 d/l 설측음화 교체(dacrima > lacrima) 현상을 지적하며 PIE *daḱru- 재구형의 타당성을 입증한다. 현대 그리스어에서는 확장형 δάκρυο(dakryo) 및 집합명사 δάκρυα로 활발히 사용되고 있다."
      },
      {
        "g": "χέοντες",
        "pos": "동사",
        "lemma": "χέω",
        "principalParts": "χέω – χέω – ἔχεα – κέχυκα – κέχυμαι – ἐχύθην",
        "parse": "pres.act.part.pl.nom.m.",
        "gloss_kr": "흘리면서, 쏟으며",
        "gloss_en": "shedding, pouring",
        "syntax": "LFG f-구조에서 주어의 동시적 상태 및 부수적 행위를 수식하는 ADJUNCT(부대상황 분사)로 작동하며, [ADJUNCT [PRED 'χέω<SUBJ,OBJ>', SUBJ [PRO], OBJ [PRED 'δάκρυ'], TENSE pres]] 구조를 형성한다. 생성문법적으로는 vP/TP에 부가된 부사적 분사구(adverbial participle clause)로서 [vP [vP ... ἐξέφερον ...] [PartP χέοντες δάκρυ]]의 괄호 구조를 형성한다. 주어(운구하는 사람들)의 성·수·격(남성 복수 주격)에 일치하여 본동사의 동작과 동시에 일어나는 슬픔의 발현을 통사적으로 수식한다.",
        "background": "액체를 붓거나 쏟아붓는 행위를 뜻하는 χέω가 눈물(δάκρυ)과 결합하여 '눈물을 억수같이 쏟다'라는 감정의 격렬한 분출을 시각적으로 묘사한다. 단순한 슬픔을 넘어 장례 의식의 한 부분으로서 눈물 흘림이 갖는 의례적 의미를 부각한다. 백성들의 슬픔이 끊임없이 지속되고 있음을 보여준다.",
        "etymology": "PIE 어근 *ĝheu-('쏟다, 붓다', cf. 산스크리트어 hotṛ, 라틴어 fundo, 고대 영어 ġēotan)에서 파생되었다. Chantraine(DELG)은 PIE 유음 자음 어간 *ĝheu-의 e-급 모음 교체 형태 *ĝhev-e/o-에서 모음 간 자음 ϝ(digamma)가 탈락함에 따라 χέϝω > χέω가 된 음운 변천을 설명한다. Beekes(EDG)는 PIE *ĝheu- 어근 재구를 명시하고 단모음화 및 모음축합 과정을 체계적으로 증명한다. 현대 그리스어에서는 χύνω(chyno - 쏟다, 분출하다) 형태로 어간이 개편되어 사용된다."
      }
    ]
  },
  {
    "ref": "Iliad 24.787",
    "trans": "그리고 가장 높은 장작더미 위에 시신을 올려놓고, 불을 붙였다.",
    "words": [
      {
        "g": "ἐν",
        "pos": "전치사",
        "lemma": "ἐν",
        "parse": "postpos.prep. (anastrophe, originally ἐν)",
        "gloss_kr": "~ 위에, ~ 속에",
        "gloss_en": "in, on, upon",
        "syntax": "LFG f-구조에서 장소적 ADJUNCT 구문의 핵(head)을 이루며, [ADJUNCT [PRED 'ἐν<OBL>', OBL [PRED 'πυρή', CASE dat]]] 속성 구조를 부여한다. 생성문법적으로는 PP 구구조의 핵(P°)으로서 여격 명사구 πυρῇ ὑπάτῃ를 논항으로 지배한다: [PP [P° ἐν] [DP πυρῇ ὑπάτῃ]]. 동사 compound 요소로 쓰이거나 전치하여 처소격(locative) 의미를 엄격하게 부여하는 기능을 수행한다.",
        "background": "장작더미(πυρή)라는 특정 공간적 범주 내에 헥토르의 시신이 안치됨을 나타내는 처소 전치사이다. 장례의 핵심 공간인 파이라(pyre) 중심부에 시신이 도달했음을 보여준다. 고대 그리스 장례 의식의 공간적 정밀함을 반영한다.",
        "etymology": "PIE 처소격 전치사 *en('~ 안에', cf. 라틴어 in, 고대 영어 in, 영어 in)에서 유래하였다. Chantraine(DELG)은 PIE *en 및 이형태 *eni/*en-ti가 그리스어 Dialect들(아카도-시프루스, 아티카 등)에서 ἐν으로 통일된 과정을 기술한다. Beekes(EDG)는 인도유럽어족 전반에 걸친 가장 보편적인 처소 전치사 어근으로 재구한다. 현대 그리스어에서도 전치사 σε(se < εἰς)에 밀려 격식체나 고어적 관용구(예: ἐν τάξει) 속에 존속한다."
      },
      {
        "g": "δὲ",
        "pos": "소사",
        "lemma": "δέ",
        "parse": "coord.conj.",
        "gloss_kr": "그리고, 한편",
        "gloss_en": "and, but",
        "syntax": "LFG 통사 분석상 절 연결 자질을 담는 등이접속사 내지 담화 소사이며, f-구조상 [FORM 'δέ', CLAUSE_CONNECT +]로 처리된다. 생성문법에서는 Wackernagel 법칙에 따라 절의 두 번째 위치(postpositive position)에 의무적으로 삽입되는 접어(clitic)로 분석되며 [CP ... [C' C°[δὲ] [TP ...]]]의 괄호 구조를 지닌다. 대조(contrast) 또는 단순한 서사적 진행(continuation)을 연결하는 구문론적 도구이다.",
        "background": "앞선 행(운구 행위)에 이어 장작더미 위에 시신을 올리는 다음 동작으로 순차적으로 이행함을 보여주는 경쾌한 서사적 접속어이다. 과도한 문맥 단절 없이 행동의 순제를 빠르게 전개한다. 호메로스 운율 구성을 돕는 필수 소사이다.",
        "etymology": "PIE 지사 어근 *de/ *do-(cf. 영어 to, 라틴어 -do)에서 유래된 문장 접속 소사이다. Chantraine(DELG)은 지시적 성격의 PIE *de 소사가 그리스어에서 문장 2위치 후행 접속사로 발달했다고 설명한다. Beekes(EDG)도 PIE *de/ *do 어원적 재구를 입증하며 대조 및 첨가 기능을 수행하게 된 어휘화 과정을 밝힌다. 현대 그리스어에서는 대조 접속사 δα(da) 또는 대조적 관용 표현 속에서 그 흔적을 찾을 수 있다."
      },
      {
        "g": "πυρῇ",
        "pos": "명사",
        "lemma": "πυρή, πυρῆς, ἡ",
        "parse": "sg.dat.f.",
        "gloss_kr": "장작더미에, 화장대에",
        "gloss_en": "funeral pyre",
        "syntax": "LFG f-구조에서 전치사 ἐν의 전치사 목적어(OBL) 역할을 지배받아 [OBL [PRED 'πυρή', CASE dat, GEND f, NUM sg]]로 처리된다. 생성문법상 PP의 내적 DP 구조 [PP [P° ἐν] [DP [NP πυρῇ]]]에 병합된다. 전치사 ἐν과의 결합을 통해 정지된 처소적 위치(locational datis)를 정확히 명시한다.",
        "background": "그리스 장례 문화에서 영웅의 시신을 화장하기 위해 목재를 겹겹이 쌓아 올린 장작더미(pyre)를 뜻한다. 9일간 트로이아 백성들이 산에서 끊임없이 실어 나른 목재로 구축된 웅장한 구조물이다. 시신이 불길을 통해 정화되고 신들의 세계/하데스로 이전하는 의례적 공간이다.",
        "etymology": "명사 πῦρ('불', PIE *púːr)에서 파생된 파생 명사이다. Chantraine(DELG)은 PIE 집합/장소 명사 형성 접미사 *-ā가 불(πῦρ) 어근에 결합하여 '불을 피우는 장소, 장작더미'라는 장소 명사 πυρή가 형성되었음을 서술한다. Beekes(EDG)는 PIE *pūr / *pwer- (불) 어근 재구를 기반으로 그리스어 내 파생 구조를 명확히 밝힌다. 현대 그리스어에서는 πυρά(pyra - 장작더미, 화장대)라는 형태로 정착하여 사용되고 있다."
      },
      {
        "g": "ὑπάτῃ",
        "pos": "형용사",
        "lemma": "ὕπατος, ὑπάτη, ὕπατον",
        "parse": "sg.dat.f.",
        "gloss_kr": "가장 높은",
        "gloss_en": "highest, topmost",
        "syntax": "LFG f-구조에서 명사 πυρῇ를 수식하는 ADJUNCT로 기능하며 [ADJUNCT [PRED 'ὕπατος', CASE dat, GEND f, NUM sg]]의 구조를 가진다. 생성문법 관점에서는 NP 수식어구로서 [DP [NP [AP ὑπάτῃ] [N' πυρῇ]]] 위치에 배치된다. 형용사-명사 일격 원칙에 따라 여격, 여성, 단수 형태를 엄격히 준수한다.",
        "background": "장작더미의 맨 꼭대기 위치를 가리킨다. 왕자이자 최고 전사인 헥토르의 시신을 장작더미의 최상단에 올리는 것은 그의 고귀한 신분과 영웅적 존엄을 최고도로 예우하는 의례적 행위이다. 시신이 하늘과 가장 가까운 곳에서 화장됨을 시각적으로 강조한다.",
        "etymology": "전치사/부사 ὑπό('아래에')의 최상급 형태형(*sup-atos, cf. 라틴어 summus < *sup-mos)에서 유래하였다. Chantraine(DELG)은 위치 전치사 ὑπό의 고대 최상급 형성 방식인 *-tm̥- / *-to- 접미사 결합을 통해 ὕπατος('가장 위쪽의, 최고위의')가 정착한 음운론적 과정을 명시한다. Beekes(EDG) 역시 PIE *up- / *sup-('위로, 아래에서 위로') 어근의 최상급 파생으로 입증한다. 라틴어 집정관(consul)을 그리스어로 번역할 때 ὕπατος를 사용했던 역사적 어휘이며, 현대 그리스어에서는 Υπάτη(지명) 및 고어적 격식 어휘로 남아 있다."
      },
      {
        "g": "νεκρὸν",
        "pos": "명사",
        "lemma": "νεκρός, νεκροῦ, ὁ",
        "parse": "sg.acc.m.",
        "gloss_kr": "시신을, 죽은 자를",
        "gloss_en": "corpse, dead body",
        "syntax": "LFG f-구조에서 동사 θέσαν의 직접목적어(OBJ) 역할을 담당하며 [OBJ [PRED 'νεκρός', CASE acc, GEND m, NUM sg, θ-ROLE PATIENT]]로 표현된다. 생성문법상 VP의 내적 논항 구조 [VP [V° θέσαν] [DP νεκρὸν]]을 형성한다. 대격 어미 -ον을 통해 동작이 직접 가해지는 대상임을 통사적으로 제시한다.",
        "background": "생명력을 잃은 인간의 물리적 유해/시신을 뜻하는 전문 어휘이다. 아킬레우스에 의해 훼손될 위험에 처했던 헥토르의 시신이 신들의 보살핌으로 완벽히 보존된 상태에서 마침내 정당한 장례 장작더미 위에 놓임을 보여준다. 영웅의 육신이 거치는 마지막 물질적 형태이다.",
        "etymology": "PIE 어근 *neḱ-('죽음, 시체', cf. 라틴어 nex, neco, 산스크리트어 naś-, 아베스타어 nasu-)에서 유래하였다. Chantraine(DELG)은 PIE 어근 *neḱ-에 형용사/명사 형성 접미사 *-ro-가 결합하여 νεκρός('죽은 자, 시체')가 되었음을 입증한다. Beekes(EDG)도 PIE *neḱ- 어근의 어원적 정당성을 지지하며 동계어 체계를 제시한다. 현대 그리스어에서 νεκρός(nekros - 죽은, 시신)로 일상적으로 활발히 사용되고 있으며, 의학/학술 어휘(necrosis 등)의 어원이 되었다."
      },
      {
        "g": "θέσαν",
        "pos": "동사",
        "lemma": "τίθημι",
        "principalParts": "τίθημι – θήσω – ἔθηκα – τέθεικα – τέθειμαι – ἐτέθην",
        "parse": "3rd.pl.aor.ind.act.",
        "gloss_kr": "놓았다, 안치했다",
        "gloss_en": "they placed, put",
        "syntax": "LFG f-구조에서 문장의 주술 관계 핵(PRED) 역할을 수행하며, [PRED 'τίθημι<SUBJ,OBJ,OBL>', SUBJ [PRO], OBJ [PRED 'νεκρός'], OBL [PRED 'ἐν']]의 논항 구조를 가진다. 생성문법상 단근 부정과거(root aorist) 형태로서 vP에서 T°로 이동한 [TP T°[θέ-σαν] [vP [VP tᵢ OBJ OBL]]] 구조를 보인다. 부정과거 시제를 사용하여 시신을 올려 놓은 특정 순간의 완결된 행동(aoristic aspect)을 단정적으로 서술한다.",
        "background": "시신을 장작더미 위에 정중히 올리는 결정적 동작을 표현한다. 호메로스 언어에서 정동사 τίθημι의 부정과거형 ἔθεσαν / θέσαν(증대 없는 형태)은 의례적 안치 행위를 서술할 때 반복적으로 등장하는 핵심 동사이다. 장례의 필수 절차가 완결되었음을 알린다.",
        "etymology": "PIE 어근 *dʰeh₁-('놓다, 세우다, 만들다', cf. 산스크리트어 dhā-, 라틴어 feci, 고대 영어 dōn, 영어 do)에서 유래된 어간 단모음화 형태이다. Chantraine(DELG)은 PIE 어근 *dʰeh₁-의 e-급 및 영급(*dʰh₁-) 변형을 설명하며, 그리스어 현재 어간의 중복(τί-θη-μι)과 부정과거 어간 ἔ-θη-κα / ἔ-θε-σαν의 모음 교체 체계를 서술한다. Beekes(EDG)는 후두음 h₁을 포함한 PIE *dʰeh₁- 어근을 정확히 재구하여, 복수 어간에서 나타나는 영급 모음 *dʰh₁- > θε-의 발달 과정을 입증한다. 현대 그리스어에서는 θέτω(theto) 및 접두사 결합형 동사들 속에 유산이 깊게 남아 있다."
      },
      {
        "g": "ἐν",
        "pos": "부사",
        "lemma": "ἐν",
        "parse": "adv. (used as tmesis / adverbial prefix)",
        "gloss_kr": "그 안에, 거기에",
        "gloss_en": "therein, in it",
        "syntax": "LFG 통사 분석에서 동사 ἔβαλον과 결합하는 부사적 ADJUNCT 내지 분리된 동사 접두사(tmesis)로 분석되며 [ADJUNCT [PRED 'ἐν', TYPE locative_adverb]]의 속성을 갖는다. 생성문법적으로는 동사 어간과 분리된 부사적 전치사구(P-element)로서 [VP [P° ἐν] [VP [V° ἔβαλον] [DP πῦρ]]] 의 트메시스(tmesis) 구구조를 구축한다. 뒤따르는 ἔβαλον과의 의미적 결합을 통해 '그 내부에 던져 넣었다'라는 합성 의미를 완성한다.",
        "background": "독립된 부사처럼 사용되어 바로 앞서 언급된 장작더미(πυρή) 내부로 불을 던져 넣었음을 가리키는 고체 시어적 트메시스(tmesis) 용법이다. 불길이 시신과 장작더미 전체로 번져나가는 순간을 생생하게 연결한다.",
        "etymology": "앞서 언급된 전치사 ἐν과 동일한 PIE 어근 *en에서 유래하였다. Chantraine(DELG)은 호메로스 서사시에서 전치사가 동사 접두사로 완전 합성되기 전, 독립된 부사적 성격을 유지하던 트메시스(tmesis) 단계의 완벽한 예시로 설명한다. Beekes(EDG) 역시 PIE *en의 독자적 부사 용법이 호메로스 문법의 고풍스러운 특징임을 증명한다."
      },
      {
        "g": "δ᾽",
        "pos": "소사",
        "lemma": "δέ",
        "parse": "coord.conj.",
        "gloss_kr": "그리고",
        "gloss_en": "and",
        "syntax": "LFG f-구조상 절과 절을 대등하게 연결하는 등이접속사 기능을 수행하여 [FORM 'δέ'] 자질을 부여한다. 생성문법상 C°/Wackernagel 위치에 배치되는 접어로 [CP ... C°[δ᾽] [TP ...]]의 트리를 형성한다. 모음 탈락(elision)에 의해 ἔβαλον의 초기 모음 앞에서 δ᾽ 형태를 취하며 연속적 사태 발생을 매끄럽게 잇는다.",
        "background": "시신 안치 동작과 불을 붙이는 동작을 신속하게 연결해주는 접속 소사이다. 장례 의식의 절차들이 지체 없이 순차적으로 실행되고 있음을 문장구조상으로 뒷받침한다.",
        "etymology": "앞선 δὲ 항목과 동일한 PIE 지사 어근 *de/ *do- 유래 소사이다. Chantraine(DELG) 및 Beekes(EDG)에 따라 서사시의 음률적 흐름과 모음 탈락 규칙을 반영하는 접어 접속사로 파악된다."
      },
      {
        "g": "ἔβαλον",
        "pos": "동사",
        "lemma": "βάλλω",
        "principalParts": "βάλλω – βαλῶ – ἔβαλον – βέβληκα – βέβλημαι – ἐβλήθην",
        "parse": "3rd.pl.aor.ind.act.",
        "gloss_kr": "던졌다, 가했다",
        "gloss_en": "they cast, threw",
        "syntax": "LFG f-구조에서 절의 PRED를 형성하며 [PRED 'βάλλω<SUBJ,OBJ>', SUBJ [PRO], OBJ [PRED 'πῦρ', CASE acc]]의 속성을 갖는다. 생성문법적으로는 2부정과거(thematic second aorist) 형태로서 어간 모음 탈락 형태가 반영되어 [TP T°[ἔ-βαλ-ον] [vP v° [VP V° OBJ]]] 구조를 형성한다. 부정과거 시상을 통해 점층적이고 단호한 불 지르기 행위의 순간적 완결을 표현한다.",
        "background": "장작더미에 횃불을 대어 불을 붙이는 역동적인 행위를 나타낸다. 불을 '던지다(ἔβαλον)'라는 표현은 불길이 강렬하게 장작더미 전체로 번져나가는 장엄하고 파괴적인 장례의 순간을 시각적으로 묘사하는 호메로스 특유의 역동적 어휘 선택이다.",
        "etymology": "PIE 어근 *gʷelH- / *gʷel-('던지다, 쏘다', cf. 산스크리트어 galati, 고대 고지 독일어 quellan)에서 유래하였다. Chantraine(DELG)은 PIE 어근 *gʷel-의 순성음 *gʷ가 그리스어 치음/순음 발달 법칙에 따라 β로 변화하고, 현재 어간에서 *-j- 접미사 결합(*gʷa-n-jō > βάλλω) 및 부정과거 어간 ἔ-βαλ-ον의 영급 형성을 상세히 분석한다. Beekes(EDG)는 후두음 H를 포함한 PIE *gʷelH- 어근을 명시하여 그리스어 어간 교체 체계를 엄밀히 입증한다. 현대 그리스어에서는 βάζω(bazo - 넣다) 및 βάλλομαι 등 수많은 파생어로 존속한다."
      },
      {
        "g": "πῦρ",
        "pos": "명사",
        "lemma": "πῦρ, πυρός, τό",
        "parse": "sg.acc.n.",
        "gloss_kr": "불을",
        "gloss_en": "fire",
        "syntax": "LFG f-구조상 타동사 ἔβαλον의 직접목적어(OBJ)로 일치하며 [OBJ [PRED 'πῦρ', CASE acc, GEND n, NUM sg, θ-ROLE PATIENT]]로 분석된다. 생성문법상 VP 내적 논항 위치 [VP [V° ἔβαλον] [DP πῦρ]]를 점유한다. 불변화 중성 대격 형태를 통해 행위의 직접 대상을 표현한다.",
        "background": "시신을 화장하는 정화와 소멸의 불을 의미한다. 그리스 고대 장례에서 불은 육신을 승화시켜 영혼이 하데스의 음부로 온전히 이동할 수 있도록 돕는 필수적인 의례 요소이다. 야간 혹은 불길이 치솟는 장엄한 비극의 하이라이트를 완성한다.",
        "etymology": "PIE 불변화/동력적 이질어간 중성 명사 *púːr / *pwer-('불', cf. 고대 영어 fȿr, 영어 fire, 고대 고지 독일어 fiur, 움브리아어 pir)에서 유래하였다. Chantraine(DELG)은 PIE 중성 어근 *púːr가 그리스어 3변화 단수 πῦρ 및 복수 파생형 πυρά로 분화하는 과정을 밝힌다. Beekes(EDG)는 라틴어 ignis(활성 불)와 달리 무생물적/원소적 불을 가리키는 PIE *púːr 어근의 어원적 정당성을 강조한다. 현대 그리스어에서는 πυρ(pyr - 불, 총성) 및 집합어 πυρκαγιά(화재) 등으로 지속적으로 사용된다."
      }
    ]
  },
  {
    "ref": "Iliad 24.788",
    "trans": "이른 아침에 태어난 손가락이 장미빛인 에오스(새벽)가 나타났을 때,",
    "words": [
      {
        "g": "ἦμος",
        "pos": "접속사",
        "lemma": "ἦμος",
        "parse": "subord.conj.",
        "gloss_kr": "~할 때에 (when)",
        "gloss_en": "when",
        "syntax": "LFG 통사 분석에서 시간 종속절(temporal adverbial clause)을 이끄는 종속접속사(SUBORD-CONJ)로 기능하며, f-구조상 [ADJUNCT [REL 'WHEN', CLAUSE [PRED 'φαίνω']]]의 접속 속성을 부여한다. 생성문법적으로는 시간 부사절 C° 위치에 위치하여 [CP [C° ἦμος] [TP ἠριγένεια φάνη ...]]의 종속절 괄호 구조를 이끈다. 다음 행의 상관 부사 τῆμος('그때에')와 구문론적으로 호응하는 상관 접속 체계(correlative construction)의 앞부분을 형성한다.",
        "background": "날짜의 변경과 새로운 시간적 서사 단위의 시작을 알리는 공식적인 서사시적 시간 접속사이다. 밤새 피어오른 장작더미의 불길이 어느 정도 진정되고, 11일째 날이 밝아오는 전환점을 명확히 구획한다.",
        "etymology": "PIE 관계/상관 지시 어근 *i- / *e- 또는 관계대명사 어근 *yō-에서 유래한 시간 부사적 접속사이다. Chantraine(DELG)은 상관 부사 쌍 ἦμος... τῆμος...의 형성을 도리스어/호메로스 방언 특유의 시상 어휘 형성 법칙으로 풀이한다. Beekes(EDG)는 PIE 관계 어간 *yō-m-os 기원설을 제시하며 시간적 한계를 지정하는 그리스어 고유의 문법화 과정으로 설명한다. 고전 아티카 산문에서는 ὅτε로 대체되어 소멸하였고 호메로스/시적 어휘로 화석화되었다."
      },
      {
        "g": "δ᾽",
        "pos": "소사",
        "lemma": "δέ",
        "parse": "coord.conj.",
        "gloss_kr": "그리고, 한편",
        "gloss_en": "and, now",
        "syntax": "LFG f-구조에서 문맥적 전환 및 순차성을 매개하는 담화 소사 자질 [FORM 'δέ']로 작동한다. 생성문법상 종속접속사 ἦμος 바로 뒤의 2위치 접어로 병합되어 [CP [C° ἦμος+δ᾽] [TP ...]] 구조를 이룬다. 앞선 밤의 화장 장면과 아침의 재 수습 장면 사이의 시간적 경계를 매끄럽게 연결한다.",
        "background": "새로운 날의 시작을 앞 행의 밤 장면과 부드럽게 대조시키며 잇는 담화적 도구이다. 호메로스 시인이 장면 전환 시 사용하는 전형적인 음운론적 소사이다.",
        "etymology": "앞선 δέ 항목과 동일하게 PIE *de 어근에서 유래된 접어 접속 소사이며, ἦμος 뒤에서 모음 탈락을 겪은 형태이다."
      },
      {
        "g": "ἠριγένεια",
        "pos": "형용사",
        "lemma": "ἠριγένεια, ἠριγενείας, ἡ",
        "parse": "sg.nom.f.",
        "gloss_kr": "이른 아침에 태어난",
        "gloss_en": "early-born",
        "syntax": "LFG f-구조에서 주어 Ἠώς를 수식하는 한정적/수사적 ADJUNCT로 기능하며 [ADJUNCT [PRED 'ἠριγένεια', CASE nom, GEND f, NUM sg]]의 속성을 갖는다. 생성문법상 NP 내부 수식어구로서 [DP [NP [AP ἠριγένεια] [N' Ἠώς]]] 구조에 속한다. 주격, 여성, 단수 형식을 지켜 Ἠώς와 일치한다.",
        "background": "새벽의 여신 에오스(Ἠώς)를 수식하는 대표적인 호메로스 전통 수식어(epithet)이다. '아침 일찍(ἦρι) 태어난 자(γένεια)'라는 뜻으로, 매일 아침 동쪽 하늘에서 새롭게 피어나는 새벽빛의 신선함과 신성한 자연 현상을 비유적으로 인격화한 영속적 수식어다.",
        "etymology": "부사 ἦρι('일찍', PIE *āyeri, cf. 아베스타어 ayarə, 고대 영어 ǣr, 영어 early)와 어근 *genh₁-('태어나다, 생기다', cf. 그리스어 γίγνομαι, 라틴어 gigno, genus)의 여합 합성어이다. Chantraine(DELG)은 부사 ἦρι와 행위자/성질 형용사 접미사 -γένεια(*genh₁-j-a)의 결합 구조를 서술한다. Beekes(EDG)는 PIE *āyeri-(아침에) + *genh₁-(태어난)의 정확한 어근 재구를 제시하며 후두음 h₁의 소멸과 모음 발달을 증명한다. 서사시 전용의 고풍스러운 시적 형용사이다."
      },
      {
        "g": "φάνη",
        "pos": "동사",
        "lemma": "φαίνω",
        "principalParts": "φαίνω – φανῶ – ἔφηνα – πέφαγκα / πέφηνα – πέφασμαι – ἐφάνην / ἐφάνθην",
        "parse": "3rd.sg.aor.ind.pass.",
        "gloss_kr": "나타났다, 모습을 드러냈다",
        "gloss_en": "appeared, shone forth",
        "syntax": "LFG f-구조에서 종속절의 PRED로 기능하며 [PRED 'φαίνω<SUBJ>', SUBJ [PRED 'Ἠώς', CASE nom]]의 자동사적 논항 구조를 형성한다. 생성문법적으로는 2부정과거 수동 어간(수동 형태지만 능동/중동의 중간적 의미)이 반영되어 vP에서 T°로 이동한 [TP T°[φάνη] [vP [VP V° SUBJ]]] 구조로 분석된다. 부정과거 시제를 사용하여 동녘 하늘에 새벽빛이 찰나에 시각적으로 출현한 완료된 사태를 표시한다.",
        "background": "새벽빛이 어둠을 가르고 세상에 신속하게 도래하는 시각적 출현을 서술한다. 3인칭 단수 수동 부정과거형 φάνη(증대 없는 형태)는 자연 현상이나 신의 나타남(epiphany)을 서술할 때 호메로스가 즐겨 사용하는 시적 어휘 표현이다.",
        "etymology": "PIE 어근 *bheh₂-('빛나다, 밝아지다', cf. 산스크리트어 bhāti, 라틴어 fari, 영어 photo-의 어원)에서 유래하였다. Chantraine(DELG)은 PIE *bheh₂- 어근에 *-j- 접미사가 결합하여 현재 어간 *bʰah₂-j-ō > φαίνω가 되고, 2부정과거 수동 어간 *bʰh₂-eh₁- > ἐφάνην / φάνη가 형성된 과정을 설명한다. Beekes(EDG)는 후두음 h₂ 및 h₁을 명시한 PIE *bheh₂- 재구를 통해 모음 음운 변화를 증명한다. 현대 그리스어에서는 φαίνομαι(fainomai - 보이다, 나타나다)로 완전히 존속하고 있다."
      },
      {
        "g": "ῥοδοδάκτυλος",
        "pos": "형용사",
        "lemma": "ῥοδοδάκτυλος, ῥοδοδάκτυλον",
        "parse": "sg.nom.f.",
        "gloss_kr": "손가락이 장미빛인",
        "gloss_en": "rosy-fingered",
        "syntax": "LFG f-구조에서 주어 Ἠώς를 수식하는 두 번째 한정적 ADJUNCT로 작용하며 [ADJUNCT [PRED 'ῥοδοδάκτυλος', CASE nom, GEND f, NUM sg]] 속성을 갖는다. 생성문법상 AP 위치에서 NP를 수식하는 [DP [NP [AP ῥοδοδάκτυλος] [N' Ἠώς]]] 구조를 이룬다. 2변화 형용사이지만 어미 -ος가 여성 명사 Ἠώς의 주격 단수 자질을 동등하게 수용하는 2성 형용사(two-termination adjective)의 통사 특성을 보여준다.",
        "background": "호메로스 서사시 전체에서 가장 유명하고 아름다운 고정 수식어(formulaic epithet) 중 하나이다. 동쪽 하늘로 퍼져나가는 붉은 새벽 빛줄기들을 여신의 '장미빛 손가락'으로 형상화한 뛰어난 시적 비유이다. 비극적이고 어두운 장례식의 밤 뒤에 어김없이 찾아오는 자연의 영원한 아름다움과 순환을 대조적으로 보여준다.",
        "etymology": "명사 ῥόδον('장미')과 δάκτυλος('손가락')이 결합한 소유 복합어(bahuvrihi compound)이다. Chantraine(DELG)은 ῥόδον(선그리스어 또는 동방 차용 어휘 *wrodo-, cf. 페르시아어 gul, 아르메니아어 vard)과 PIE *deḱ-('받아들이다/손', cf. δάκτυλος)의 결합 구조를 설명한다. Beekes(EDG)는 ῥόδον의 아시아계 차용 어원 가능성을 검토하며, 복합어 ῥοδοδάκτυλος가 호메로스 운율 육보격의 미적 완성을 위해 구성된 시적 어휘임을 증명한다. 현대 언어들에서도 'rosy-fingered'라는 직역 표현으로 깊이 받아들여졌다."
      },
      {
        "g": "Ἠώς",
        "pos": "명사",
        "lemma": "Ἠώς, Ἠοῦς, ἡ",
        "parse": "sg.nom.f.",
        "gloss_kr": "에오스가 (새벽이)",
        "gloss_en": "Dawn, Eos",
        "syntax": "LFG f-구조에서 종속절의 문법적 주어(SUBJ) 기능을 담당하며 [SUBJ [PRED 'Ἠώς', CASE nom, GEND f, NUM sg, θ-ROLE AGENT/THEME]]로 표현된다. 생성문법상 vP/VP의 논항 위치에 병합된 후 T°와의 일격을 거치는 [TP [DP Ἠώς]ᵢ [T' φάνη tᵢ]] 구조로 분석된다. 주격 어미 형태를 통해 문장의 주체임을 확실히 명시한다.",
        "background": "새벽을 의인화한 그리스 신화의 여신이다. 호메로스 서사시에서 Ἠώς의 출현은 단순한 시각적 아침이 아니라, 새로운 서사적 사건들이 활발하게 펼쳐지는 공식적인 하루의 시작을 선언하는 정형화된 구술 문구의 핵심 단어이다. 헥토르 장례의 최종 수습 절차가 진행될 11일째 아침을 연다.",
        "etymology": "PIE 어근 *h₂ews- / *h₂ws-('빛나다, 밝아지다', cf. 산스크리트어 uṣas-, 라틴어 aurora < *ausosa, 고대 영어 Ēastre, 영어 east)에서 유래하였다. Chantraine(DELG)은 PIE *h₂ews-ōs(여성 모음 어간)가 그리스어 방언들에서 Ἠώς(아티카/이오니아), Ἀώς(도리스), Αὔως(아이올리스)로 분화하는 음운 과정을 기술한다. Beekes(EDG)는 초기 후두음 h₂를 포함한 PIE *h₂ews-ōs를 정확히 재구하여 모음 간 s 탈락(*āusōs > *āuōs > ἠώς) 현상을 증명한다. 현대 그리스어에서는 Ανατολή(동쪽)에 자리를 내주었으나 학술적/시적 어휘로 존속한다."
      }
    ]
  },
  {
    "ref": "Iliad 24.789",
    "trans": "그때 영광스러운 헥토르의 장작더미 주위로 백성들이 모겨들었다.",
    "words": [
      {
        "g": "τῆμος",
        "pos": "부사",
        "lemma": "τῆμος",
        "parse": "dem.adv.",
        "gloss_kr": "그때에 (then)",
        "gloss_en": "then",
        "syntax": "LFG 통사 분석에서 주절의 시간 ADJUNCT로 기능하며, 앞 행의 종속접속사 ἦμος와 상호 응응하여 [ADJUNCT [REL 'THEN', CORRELATIVE_WITH 'ἦμος']]의 속성 구조를 형성한다. 생성문법적으로는 주절 TP의 전두 수식어 위치(Spec,TP)에 배치되어 [TP τῆμος [TP ... ἔγρετο λαός]]의 상관 구문을 완성한다. 시간적 조건의 성립에 따른 주절 사건의 즉각적 발생을 매개한다.",
        "background": "앞 행의 '새벽이 밝아왔을 때(ἦμος)'라는 시간적 전제 조건에 직접 응답하여 '바로 그때(τῆμος)' 백성들이 행동에 나섰음을 보여주는 지시 부사이다. 서사시의 상관적 서술 구조를 완성하며 장면의 전환을 선명하게 연결한다.",
        "etymology": "PIE 지시 대명사 어근 *to- / *te-에서 유래한 시간 지시 부사이다. Chantraine(DELG)은 ἦμος... τῆμος... 상관 어휘 체계가 호메로스 양식의 고유한 통사적 특징임을 서술한다. Beekes(EDG)는 PIE 지사 어간 *to-m-os 형성을 명시하며, ἦμος와의 형상적 평행성에 의해 유지된 도리스/이오니아 시어적 유산으로 파악한다. 고전 산문 시대에 이르러 τότε로 대체되었다."
      },
      {
        "g": "ἄρ᾽",
        "pos": "소사",
        "lemma": "ἄρα",
        "parse": "part.",
        "gloss_kr": "과연, 마침내",
        "gloss_en": "then, so",
        "syntax": "LFG f-구조에서 담화 연결 자질 [DISCOURSE [PARTICLE 'ἄρα']]을 담당하는 ADJUNCT 소사이다. 생성문법적으로 주절의 2위치 접어로 병합되어 [TP τῆμος+ἄρ᾽ [TP ...]]의 구구조를 이룬다. 아침이 밝아옴에 따라 백성들이 장작더미로 모여드는 행위가 지극히 당연하고 예정된 서사적 귀결임을 서술적으로 연유화한다.",
        "background": "날이 밝자 트로이아 백성들이 헥토르의 유골을 수습하기 위해 장작더미로 모여드는 행동의 당연성과 자연스러움을 청중에게 전달하는 화용론적 서사 소사이다.",
        "etymology": "앞서 서술된 ἄρα 항목과 동일하며, PIE 어근 *ar-('맞아떨어지다')에서 파생하여 사건의 순리적 진행을 나타내는 접어 형태소이다."
      },
      {
        "g": "ἀμφὶ",
        "pos": "전치사",
        "lemma": "ἀμφί",
        "parse": "prep.",
        "gloss_kr": "~ 둘레에, ~ 주위에",
        "gloss_en": "around, about",
        "syntax": "LFG f-구조에서 장소적 OBL/ADJUNCT 구문의 핵으로 작용하며 [ADJUNCT [PRED 'ἀμφί<OBL>', OBL [PRED 'πυρή', CASE acc]]]의 자질을 지배한다. 생성문법상 PP의 핵(P°)으로서 대격 명사구 πυρὴν을 논항으로 취한다: [PP [P° ἀμφὶ] [DP πυρὴν]]. 장작더미를 중심으로 한 공간적 에워쌈의 구도를 통사적으로 설정한다.",
        "background": "헥토르의 장작더미를 중심으로 트로이아 백성들이 원형으로 둘러싸 모여드는 입체적 광경을 연출하는 전치사이다. 시신 수습이라는 공동의 슬픈 의식을 위해 온 백성이 모여든 동심원적 공간 구도를 잘 보여준다.",
        "etymology": "PIE 양쪽/주위 전치사 *am-bʰi('양쪽으로, 주위에', cf. 라틴어 ambi-, 고대 영어 ymbe, 독일어 um, 산스크리트어 abhí)에서 유래하였다. Chantraine(DELG)은 PIE 어근 *ant-bʰi(위치 격 확장형)에서 그리스어 ἀμφί가 정착한 음운론적 과정을 명시한다. Beekes(EDG)도 PIE *ambʰi 재구를 지지하며 양측 및 주위 둘레를 가리키는 고대 인도유럽어 보편 전치사임을 증명한다. 현대 그리스어에서는 αμφι-(amphi-) 접두사로 수많은 학술 어휘(amphitheater 등) 속에 깊이 존속한다."
      },
      {
        "g": "πυρὴν",
        "pos": "명사",
        "lemma": "πυρή, πυρῆς, ἡ",
        "parse": "sg.acc.f.",
        "gloss_kr": "장작더미 주위로",
        "gloss_en": "funeral pyre",
        "syntax": "LFG f-구조에서 전치사 ἀμφὶ의 전치사 목적어(OBL)로 기능하며 [OBL [PRED 'πυρή', CASE acc, GEND f, NUM sg]]로 처리된다. 생성문법상 PP 내적 DP 구조 [PP [P° ἀμφὶ] [DP πυρὴν]]에 병합된다. 전치사 ἀμφὶ가 요구하는 대격 어미 -ὴν을 취하여 운동성이 부여된 주위 모임의 장소를 나타낸다.",
        "background": "앞 행(787행)에 이어 다시 등장하는 헥토르의 장작더미이다. 밤새 불타오른 뒤 이제 재와 유골이 남은 화장 공간으로서, 백성들의 모임과 유골 수습 행위의 중심 공간이 된다.",
        "etymology": "앞선 πυρῇ 항목 참조. 명사 πῦρ에서 파생된 장소 명사 형태이며, 이오니아 방언 특유의 긴 ā > ē 변화 규칙에 따라 -ὴν 어미를 취하고 있다."
      },
      {
        "g": "κλυτοῦ",
        "pos": "형용사",
        "lemma": "κλυτός, κλυτή, κλυτόν",
        "parse": "sg.gen.m.",
        "gloss_kr": "영광스러운, 이름난",
        "gloss_en": "famous, glorious",
        "syntax": "LFG f-구조에서 소유격 명사 Ἕκτορος를 수식하는 한정적 ADJUNCT로 작동하며 [ADJUNCT [PRED 'κλυτός', CASE gen, GEND m, NUM sg]] 속성을 갖는다. 생성문법상 NP 수식어로서 [DP [NP [AP κλυτοῦ] [N' Ἕκτορος]]] 구조를 이룬다. 속격, 남성, 단수 어미 -οῦ를 취하여 Ἕκτορος와 엄격하게 일치한다.",
        "background": "헥토르의 영웅적 명성과 고귀한 신분을 기리는 영속적 수식어이다. 죽어서 재가 된 순간에도 그가 '영광스럽고 이름난(κλυτός)' 영웅임을 강조함으로써, 트로이아 백성들이 그에게 바치는 지극한 존경과 비통함을 수사적으로 증폭시킨다.",
        "etymology": "PIE 어근 *ḱlew-('듣다', cf. 산스크리트어 śrutá-, 라틴어 inclutus, 고대 아일랜드어 cloth, 고대 슬라브어 slovo)의 영급 어간 *ḱlu-에 형용사/수동분사 접미사 *-to-가 결합한 파생형(*ḱlu-tó-s)이다. Chantraine(DELG)은 PIE 어근 *ḱlew-의 영급 어간에서 '칭송을 듣는, 이름난'이라는 뜻의 κλυτός가 발달한 과정을 설명한다. Beekes(EDG) 역시 PIE *ḱlu-tó-s의 어원적 타당성을 확증한다. 고전 시어에 널리 쓰였으며 현대 그리스어에서는 고유명사 Κλυταιμνήστρα(클리타임네스트라) 등의 어원으로 유산이 남아 있다."
      },
      {
        "g": "Ἕκτορος",
        "pos": "명사",
        "lemma": "Ἕκτωρ, Ἕκτορος, ὁ",
        "parse": "sg.gen.m.",
        "gloss_kr": "헥토르의",
        "gloss_en": "of Hector",
        "syntax": "LFG f-구조에서 명사 πυρὴν을 한정하는 소유격 ADJUNCT/POSS 기능을 수행하며 [POSS [PRED 'Ἕκτωρ', CASE gen, GEND m, NUM sg]]의 구조를 갖는다. 생성문법상 중심 명사구 내의 속격 수식어 DP로서 [DP πυρὴν [DP Ἕκτορος]] 구조를 형성한다. 3변화 속격 어미 -ος를 취하여 장작더미의 소유 주체를 통사적으로 밝힌다.",
        "background": "장작더미가 다름 아닌 그들의 위대한 영웅 헥토르의 것임을 명시한다. 백성들이 모여드는 공간적 목적지가 헥토르의 유해가 있는 곳임을 확실히 구획한다.",
        "etymology": "앞선 Ἕκτορα 항목 참조. 어근 *seĝʰ-('지탱하다')에서 파생된 행위자 명사의 3변화 속격 단수 형태이다."
      },
      {
        "g": "ἔγρετο",
        "pos": "동사",
        "lemma": "ἐγείρω",
        "principalParts": "ἐγείρω – ἐγερῶ – ἤγειρα – ἐγρήγορα – ἐγήγερμαι – ἠγέρθην",
        "parse": "3rd.sg.aor.ind.mid.",
        "gloss_kr": "모여들었다, 깨어 일어났다",
        "gloss_en": "gathered, awoke, assembled",
        "syntax": "LFG f-구조에서 주절의 PRED 역할을 맡으며 [PRED 'ἐγείρω<SUBJ>', SUBJ [PRED 'λαός', CASE nom]]의 중간태(middle) 자동사 구조를 형성한다. 생성문법상 2부정과거 중간태 어간 형태로서 vP에서 T°로 이동한 [TP T°[ἔγρ-ε-το] [vP [VP V° SUBJ]]] 구조를 나타낸다. 주어 λαός(집합명사, 단수)와의 통사적 일격을 위해 3인칭 단수 어미 -το를 취한다.",
        "background": "백성들이 잠에서 깨어나 스스로 장작더미 둘레로 모여드는 자발적이고 주체적인 행위를 중간태(middle voice) 형태 ἔγρετο를 통해 생생하게 표현한다. 슬픔 속에서 유골 수습을 위해 하나로 결집하는 트로이아 공동체의 모습을 시각화한다.",
        "etymology": "PIE 어근 *heg- / *hger-('깨어나다, 모으다', cf. 산스크리트어 jāgarti)에서 유래하였다. Chantraine(DELG)은 아티카 재중복(Attic reduplication) 및 영급 모음 교체 형태 *e-gr-e-to > ἔγρετο(부정과거 중간태)의 발달 과정을 상세히 서술한다. Beekes(EDG)는 초기 후두음을 고려한 PIE *h₁ger- 어근 재구를 제시하여, 모음 축약 및 영급 어간 *h₁gr-의 유래를 입증한다. 현대 그리스어에서는 ἐγείρω 어근이 εγείρω(egeiro - 일으키다, 제기하다) 및 명사 εγερτήριο(나팔소리, 깨움) 등으로 존속한다."
      },
      {
        "g": "λαός",
        "pos": "명사",
        "lemma": "λαός, λαοῦ, ὁ",
        "parse": "sg.nom.m.",
        "gloss_kr": "백성들이, 군중이",
        "gloss_en": "people, host, assembled crowd",
        "syntax": "LFG f-구조에서 주절의 문법적 주어(SUBJ) 기능을 담당하며 [SUBJ [PRED 'λαός', CASE nom, GEND m, NUM sg, θ-ROLE AGENT]]로 표현된다. 생성문법상 vP의 주어 위치에 병합된 후 T°로 이동한 [TP [DP λαός]ᵢ [T' ἔγρετο tᵢ]] 구조를 형성한다. 집합명사이므로 단수 형태이지만 통사적으로 백성 전체의 군집을 내포한다.",
        "background": "트로이아의 온 백성과 전사들의 집합체이다. 헥토르는 단지 왕가만의 아들이 아니라 트로이아 백성 전체의 수호자였기에, 그의 장례에는 온 백성(λαός)이 주체적으로 참여하여 슬픔을 나눈다. 호메로스 서사시에서 영웅과 백성 간의 유대감을 보여주는 핵심 명사이다.",
        "etymology": "PIE 어근 *leh₂-wo-('백성, 군대', cf. 히타이트어 laḫḫa- '전쟁, 원정', 고대 포르투갈어/카스티야어 동계어 논의)에서 유래하였다. Chantraine(DELG)은 미케네어(Linear B) ra-wo(lawos) 표기를 제시하며, '무장한 백성, 군대'를 뜻하던 원형이 정치적/사회적 집합명사 λαός로 발전한 과정을 서술한다. Beekes(EDG)는 PIE *leh₂-wo- 어근 재구를 확증하며 후두음 h₂의 영향을 설명한다. 현대 그리스어에서는 λαός(laos - 백성, 민족, 대중)로 완벽하게 살아있으며, 영어 laity, laic 등의 어원이 되었다."
      }
    ]
  },
  {
    "ref": "Iliad 24.790",
    "trans": "그리하여 그들이 함께 모여들고 함께 모이게 되었을 때,",
    "words": [
      {
        "g": "αὐτὰρ",
        "pos": "접속사",
        "lemma": "αὐτάρ",
        "parse": "coord.conj.",
        "gloss_kr": "하지만, 그리고, 그리하여",
        "gloss_en": "but, then, moreover",
        "syntax": "LFG 통사 구조에서 전환적/진행적 절 연결을 담당하는 등이접속사(coordinating conjunction)로, [FORM 'αὐτάρ', CLAUSE_CONNECT +] 자질을 부여한다. 생성문법적으로 절 전체의 C°/전두 위치에 배치되는 [CP [C° αὐτὰρ] [TP ...]] 구구조를 이끈다. 앞선 모여드는 과정(789행)을 받아 집결이 완료된 후의 다음 단계 동작으로 서사를 진전시키는 화용론적 전환 장치이다.",
        "background": "호메로스 전통 구술 서사에서 대화나 행동의 한 단락이 완결되고 새로운 정률적 행동이 시작됨을 알리는 대표적인 서사 접속사이다. 백성들의 모임이 완성된 상태를 선언하고 본격적인 불 끄기 및 유골 수습 절차로 시선을 이동시킨다.",
        "etymology": "지시/인칭 대명사 어근 αὐτός와 대조 소사 ἄρ / ἀτάρ가 결합한 합성 접속 소사이다. Chantraine(DELG)은 αὐτός + ἄρα의 결합 형태인 αὐτάρ가 호메로스 운율 체계에서 문두 운각을 구성하는 핵심 시어 접속사로 발전한 음운적 과정을 설명한다. Beekes(EDG)도 지시 어근 αὐτός와의 완벽한 연관성을 입증한다. 서사시 전용 어휘로서 후대 아티카 산문에서는 ἀλλά 또는 αὖτε로 대체되었다."
      },
      {
        "g": "ἐπεὶ",
        "pos": "접속사",
        "lemma": "ἐπεί",
        "parse": "subord.conj.",
        "gloss_kr": "~했을 때, ~하고 나서",
        "gloss_en": "when, after, since",
        "syntax": "LFG f-구조에서 시간/이유 종속절을 이끄는 종속접속사(SUBORD-CONJ)로 기능하며, [ADJUNCT [REL 'AFTER', CLAUSE [PRED 'ἀγείρω']]] 자질을 형성한다. 생성문법상 종속절 C° 위치에 구조화되어 [CP [C° ἐπεὶ] [TP ἤγερθεν ...]] 구조를 이끈다. 후행하는 완료적 부정과거 동사들과 결합하여 '집결 완료'라는 선행 사건을 설정한다.",
        "background": "백성들의 집결이라는 선행 사건이 완전히 이루어졌음을 확정하는 시간 접속사이다. 이 행 전체는 호메로스 서사시에서 군중이나 백성이 모여 다음 동작을 취할 때 반사적으로 사용되는 유명한 정형구(formulaic line)의 시작이다.",
        "etymology": "전치사 ἐπί('~ 위에, ~에 이어')와 관계/지시 소사 εἰ/swi가 결합한 복합 시간 접속사이다. Chantraine(DELG)은 ἐπί + εἰ > ἐπεί('그에 이어 ~할 때')의 문법화(grammaticalization) 과정을 명시한다. Beekes(EDG) 역시 전치사 ἐπί 어근과의 어원적 일치성을 증명한다. 현대 그리스어에서는 επειδή(epeidi - ~때문에)라는 이유 접속사로 발전하여 사용되고 있다."
      },
      {
        "g": "ῥ᾽",
        "pos": "소사",
        "lemma": "ἄρα",
        "parse": "part.",
        "gloss_kr": "과연, 마침내",
        "gloss_en": "then, so",
        "syntax": "LFG f-구조에서 종속절 내부에 삽입된 담화 소사 ADJUNCT로 [DISCOURSE [PARTICLE 'ἄρα']]로 표시된다. 생성문법상 접속사 ἐπεὶ 바로 뒤의 2위치 접어로 병합되는 [CP [C° ἐπεὶ+ῥ᾽] [TP ...]] 구조를 가진다. ἐπεὶ 뒤에서 모음 탈락 및 유음화에 의해 ῥ᾽ 형태를 띤다.",
        "background": "시간 접속사 ἐπεὶ 뒤에 붙어 집결 행위의 마침과 순리적 진행을 음운론적으로 매끄럽게 보완하는 서사시 정형 구문의 일부이다.",
        "etymology": "앞서 서술된 ἄρα 항목의 모음 탈락형(elided form)이며, PIE 어근 *ar- 기원이다."
      },
      {
        "g": "ἤγερθεν",
        "pos": "동사",
        "lemma": "ἀγείρω",
        "principalParts": "ἀγείρω – ἀγερώ – ἤγειρα – (미상) – ἀγήγερμαι – ἠγέρθην",
        "parse": "3rd.pl.aor.ind.pass.",
        "gloss_kr": "그들이 모여들었다",
        "gloss_en": "they were assembled, gathered",
        "syntax": "LFG f-구조에서 종속절의 첫 번째 PRED로 작동하며 [PRED 'ἀγείρω<SUBJ>', SUBJ [PRO, NUM pl, PERS 3]]의 수동/자동사적 구성을 갖는다. 생성문법적으로 서사시 특유의 서미 탈락 수동 부정과거 형태(-θησαν > -θεν)를 보여주며 [TP T°[ἤγερ-θεν] [vP [VP V° SUBJ]]] 구조를 형성한다. 부정과거 시상을 통해 집결 완료 상태의 정황을 단정적으로 서술한다.",
        "background": "백성들이 장작더미 둘레에 완전히 모여든 상태를 나타낸다. 서미형 -θεν을 취하는 3인칭 복수 부정과거형 ἤγερθεν은 호메로스 서사시의 전형적인 고형(archaism) 문법 표지이다. 공동체의 집결을 완료형 시상으로 강조한다.",
        "etymology": "PIE 어근 *hger-('모으다, 한데 모이다', cf. 그리스어 ἀγορά, 라틴어 grex)에서 유래하였다. Chantraine(DELG)은 PIE 어근 *hger-에 모음 전치 접두사 α-가 결합한 *a-ger-j-ō > ἀγείρω의 형성 및 수동 부정과거 ἠγέρθην의 시인용 단축형 ἤγερθεν의 음운 법칙을 밝힌다. Beekes(EDG)는 PIE *h₁ger- 재구를 확증하며 모음 교체 및 자음 결합 구조를 증명한다. 현대 그리스어에서는 αθροίζω 등에 밀렸으나 ἀγορά(시장, 광장)라는 명사 어원으로 확고히 남아 있다."
      },
      {
        "g": "ὁμηγερέες",
        "pos": "형용사",
        "lemma": "ὁμηγερής, ὁμηγερές",
        "parse": "pl.nom.m.",
        "gloss_kr": "한데 모여서, 함께 집결하여",
        "gloss_en": "assembled together",
        "syntax": "LFG f-구조에서 복수 주어(PRO)의 상태를 보완 수식하는 주격 보어/ADJUNCT로 기능하며 [ADJUNCT [PRED 'ὁμηγερής', CASE nom, GEND m, NUM pl]] 속성을 지닌다. 생성문법상 AP 위치에서 동사 ἐγένοντο의 서술 보어(predicative complement) 구조 [VP [V° ἐγένοντο] [AP ὁμηγερέες]]를 형성한다. 3변화 복수 주격 미축약 어미 -έες를 보존하고 있다.",
        "background": "단순히 개별적으로 모여든 것을 넘어 '완전히 하나로 결집한' 군중의 밀집 상태를 묘사하는 정형적 형용사이다. 헥토르의 유골 수습이라는 중대한 과업을 앞두고 트로이아 백성 전체가 완전한 질서와 유대감 속에서 집결했음을 정밀하게 보여준다.",
        "etymology": "결합 접두사 ὁμο-('함께', PIE *som-H-, cf. 산스크리트어 sam-, 영어 same)와 동사 어근 ἀγείρω('모으다', PIE *hger-)가 결합한 복합 형용사이다. Chantraine(DELG)은 *ὁμο-αγερ-ής > ὁμηγερής에서 나타나는 아티카/이오니아식 내적 모음 장음화(장모음 η 발달) 과정을 서술한다. Beekes(EDG) 역시 PIE *som- + *h₁ger-의 완벽한 결합 재구를 증명한다. 서사시 구술 운율을 위해 유지된 대표적 고풍적 시적 형용사이다."
      },
      {
        "g": "τ᾽",
        "pos": "소사",
        "lemma": "τε",
        "parse": "coord.conj.",
        "gloss_kr": "그리고 (and)",
        "gloss_en": "and",
        "syntax": "LFG 통사 분석상 절 내 두 동사/보어성 성분(ἤγερθεν과 ὁμηγερέες t᾽ ἐγένοντο)을 등이 연결하는 접어 접속사로 [FORM 'τε', COORD_TYPE element]로 작동한다. 생성문법적으로 후행 어휘에 병합되는 접어로서 [AP [AP ὁμηγερέες] [Conj' τ᾽ [VP ἐγένοντο]]] 의 결합 구도를 이룬다. 모음 탈락으로 τ᾽ 형태를 띤다.",
        "background": "앞선 동사 ἤγερθεν(모였다)과 뒤의 ἐγένοντο(되었다)를 밀접하게 묶어주는 호메로스 정형구적 접속 소사이다.",
        "etymology": "PIE 문미 접어 접속사 *kʷe('그리고', cf. 라틴어 -que, 산스크리트어 ca)에서 유래하였다. Chantraine(DELG)은 PIE 순구개음 *kʷe가 그리스어 치음 발달 법칙에 따라 τε가 된 과정을 명시한다. Beekes(EDG)도 PIE *kʷe 재구를 확증하며 미케네어 -qe 표기와 완벽히 연결한다."
      },
      {
        "g": "ἐγένοντο",
        "pos": "동사",
        "lemma": "γίγνομαι",
        "principalParts": "γίγνομαι – γενήσομαι – ἐγενόμην – γέγονα – γεγένημαι – ἐγενήθην",
        "parse": "3rd.pl.aor.ind.mid.",
        "gloss_kr": "되었다",
        "gloss_en": "they became, were",
        "syntax": "LFG f-구조에서 종속절의 두 번째 PRED로 작용하며 [PRED 'γίγνομαι<SUBJ,XCOMP>', SUBJ [PRO], XCOMP [PRED 'ὁμηγερής']]의 2항 계사(copula-like) 구조를 형성한다. 생성문법상 2부정과거 중간태 어간 형태로서 vP에서 T°로 이동한 [TP T°[ἐ-γέν-οντο] [vP v° [VP V° AP]]] 구조를 형성한다. 부정과거 시상을 통해 집결 상태가 완결된 상태로 귀결되었음을 선언한다.",
        "background": "백성들이 '한데 모인 상태가 되었다(ὁμηγερέες τ᾽ ἐγένοντο)'라는 정형 구문의 완결 동사이다. 이 행이 마무리됨으로써 트로이아 백성 전체의 집결이 완료되고, 바로 다음 행(791행 이하)부터 장작더미의 불을 포도주로 끄고 헥토르의 뼈를 거두는 장례의 구체적 실행 단계로 서사가 넘어가게 된다.",
        "etymology": "PIE 어근 *genh₁-('태어나다, 되다', cf. 산스크리트어 jajanti, 라틴어 gigno, genus, 영어 gift, kin)에서 유래하였다. Chantraine(DELG)은 현재 어간의 중복(*gi-gn-omai)과 2부정과거 어간 *e-gen-onto > ἐγένοντο의 모음 교체(e-급) 과정을 상세히 기술한다. Beekes(EDG)는 후두음 h₁을 포함한 PIE *genh₁- 어근 분석을 통해 영급 어간과 e-급 어간의 교체 체계를 완벽히 증명한다. 현대 그리스어에서는 γίνομαι(ginomai - 되다) 형태로 일상어에서 가장 빈번하게 사용되는 핵심 동사로 살아있다."
      }
    ]
  }
];

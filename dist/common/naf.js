"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const naf = [
    {
        code: "01.11Z",
        legend: "Culture de c\u00e9r\u00e9ales (\u00e0 l'exception du riz), de l\u00e9gumineuses et de graines ol\u00e9agineuses",
    },
    { code: "01.12Z", legend: "Culture du riz" },
    {
        code: "01.13Z",
        legend: "Culture de l\u00e9gumes, de melons, de racines et de tubercules",
    },
    { code: "01.14Z", legend: "Culture de la canne \u00e0 sucre" },
    { code: "01.15Z", legend: "Culture du tabac" },
    { code: "01.16Z", legend: "Culture de plantes \u00e0 fibres" },
    { code: "01.19Z", legend: "Autres cultures non permanentes" },
    { code: "01.21Z", legend: "Culture de la vigne" },
    { code: "01.22Z", legend: "Culture de fruits tropicaux et subtropicaux" },
    { code: "01.23Z", legend: "Culture d'agrumes" },
    {
        code: "01.24Z",
        legend: "Culture de fruits \u00e0 p\u00e9pins et \u00e0 noyau",
    },
    {
        code: "01.25Z",
        legend: "Culture d'autres fruits d'arbres ou d'arbustes et de fruits \u00e0 coque",
    },
    { code: "01.26Z", legend: "Culture de fruits ol\u00e9agineux" },
    { code: "01.27Z", legend: "Culture de plantes \u00e0 boissons" },
    {
        code: "01.28Z",
        legend: "Culture de plantes \u00e0 \u00e9pices, aromatiques, m\u00e9dicinales et pharmaceutiques",
    },
    { code: "01.29Z", legend: "Autres cultures permanentes" },
    { code: "01.30Z", legend: "Reproduction de plantes" },
    { code: "01.41Z", legend: "\u00c9levage de vaches laiti\u00e8res" },
    { code: "01.42Z", legend: "\u00c9levage d'autres bovins et de buffles" },
    {
        code: "01.43Z",
        legend: "\u00c9levage de chevaux et d'autres \u00e9quid\u00e9s",
    },
    {
        code: "01.44Z",
        legend: "\u00c9levage de chameaux et d'autres cam\u00e9lid\u00e9s",
    },
    { code: "01.45Z", legend: "\u00c9levage d'ovins et de caprins" },
    { code: "01.46Z", legend: "\u00c9levage de porcins" },
    { code: "01.47Z", legend: "\u00c9levage de volailles" },
    { code: "01.49Z", legend: "\u00c9levage d'autres animaux" },
    { code: "01.50Z", legend: "Culture et \u00e9levage associ\u00e9s" },
    { code: "01.61Z", legend: "Activit\u00e9s de soutien aux cultures" },
    {
        code: "01.62Z",
        legend: "Activit\u00e9s de soutien \u00e0 la production animale",
    },
    { code: "01.63Z", legend: "Traitement primaire des r\u00e9coltes" },
    { code: "01.64Z", legend: "Traitement des semences" },
    { code: "01.70Z", legend: "Chasse, pi\u00e9geage et services annexes" },
    {
        code: "02.10Z",
        legend: "Sylviculture et autres activit\u00e9s foresti\u00e8res",
    },
    { code: "02.20Z", legend: "Exploitation foresti\u00e8re" },
    {
        code: "02.30Z",
        legend: "R\u00e9colte de produits forestiers non ligneux poussant \u00e0 l'\u00e9tat sauvage",
    },
    {
        code: "02.40Z",
        legend: "Services de soutien \u00e0 l'exploitation foresti\u00e8re",
    },
    { code: "03.11Z", legend: "P\u00eache en mer" },
    { code: "03.12Z", legend: "P\u00eache en eau douce" },
    { code: "03.21Z", legend: "Aquaculture en mer" },
    { code: "03.22Z", legend: "Aquaculture en eau douce" },
    { code: "05.10Z", legend: "Extraction de houille" },
    { code: "05.20Z", legend: "Extraction de lignite" },
    { code: "06.10Z", legend: "Extraction de p\u00e9trole brut" },
    { code: "06.20Z", legend: "Extraction de gaz naturel" },
    { code: "07.10Z", legend: "Extraction de minerais de fer" },
    { code: "07.21Z", legend: "Extraction de minerais d'uranium et de thorium" },
    {
        code: "07.29Z",
        legend: "Extraction d'autres minerais de m\u00e9taux non ferreux",
    },
    {
        code: "08.11Z",
        legend: "Extraction de pierres ornementales et de construction, de calcaire industriel, de gypse, de craie et d'ardoise",
    },
    {
        code: "08.12Z",
        legend: "Exploitation de gravi\u00e8res et sabli\u00e8res, extraction d\u2019argiles et de kaolin",
    },
    {
        code: "08.91Z",
        legend: "Extraction des min\u00e9raux chimiques et d'engrais min\u00e9raux ",
    },
    { code: "08.92Z", legend: "Extraction de tourbe" },
    { code: "08.93Z", legend: "Production de sel " },
    { code: "08.99Z", legend: "Autres activit\u00e9s extractives n.c.a." },
    {
        code: "09.10Z",
        legend: "Activit\u00e9s de soutien \u00e0 l'extraction d'hydrocarbures",
    },
    {
        code: "09.90Z",
        legend: "Activit\u00e9s de soutien aux autres industries extractives ",
    },
    {
        code: "10.11Z",
        legend: "Transformation et conservation de la viande de boucherie",
    },
    {
        code: "10.12Z",
        legend: "Transformation et conservation de la viande de volaille",
    },
    {
        code: "10.13A",
        legend: "Pr\u00e9paration industrielle de produits \u00e0 base de viande",
    },
    { code: "10.13B", legend: "Charcuterie" },
    {
        code: "10.20Z",
        legend: "Transformation et conservation de poisson, de crustac\u00e9s et de mollusques",
    },
    {
        code: "10.31Z",
        legend: "Transformation et conservation de pommes de terre",
    },
    {
        code: "10.32Z",
        legend: "Pr\u00e9paration de jus de fruits et l\u00e9gumes",
    },
    {
        code: "10.39A",
        legend: "Autre transformation et conservation de l\u00e9gumes",
    },
    { code: "10.39B", legend: "Transformation et conservation de fruits" },
    { code: "10.41A", legend: "Fabrication d'huiles et graisses brutes" },
    { code: "10.41B", legend: "Fabrication d'huiles et graisses raffin\u00e9es" },
    {
        code: "10.42Z",
        legend: "Fabrication de margarine et graisses comestibles similaires",
    },
    {
        code: "10.51A",
        legend: "Fabrication de lait liquide et de produits frais",
    },
    { code: "10.51B", legend: "Fabrication de beurre" },
    { code: "10.51C", legend: "Fabrication de fromage" },
    { code: "10.51D", legend: "Fabrication d'autres produits laitiers" },
    { code: "10.52Z", legend: "Fabrication de glaces et sorbets" },
    { code: "10.61A", legend: "Meunerie" },
    { code: "10.61B", legend: "Autres activit\u00e9s du travail des grains" },
    { code: "10.62Z", legend: "Fabrication de produits amylac\u00e9s" },
    {
        code: "10.71A",
        legend: "Fabrication industrielle de pain et de p\u00e2tisserie fra\u00eeche",
    },
    { code: "10.71B", legend: "Cuisson de produits de boulangerie" },
    { code: "10.71C", legend: "Boulangerie et boulangerie-p\u00e2tisserie" },
    { code: "10.71D", legend: "P\u00e2tisserie" },
    {
        code: "10.72Z",
        legend: "Fabrication de biscuits, biscottes et p\u00e2tisseries de conservation",
    },
    { code: "10.73Z", legend: "Fabrication de p\u00e2tes alimentaires" },
    { code: "10.81Z", legend: "Fabrication de sucre" },
    {
        code: "10.82Z",
        legend: "Fabrication de cacao, chocolat et de produits de confiserie",
    },
    { code: "10.83Z", legend: "Transformation du th\u00e9 et du caf\u00e9" },
    { code: "10.84Z", legend: "Fabrication de condiments et assaisonnements" },
    { code: "10.85Z", legend: "Fabrication de plats pr\u00e9par\u00e9s" },
    {
        code: "10.86Z",
        legend: "Fabrication d'aliments homog\u00e9n\u00e9is\u00e9s et di\u00e9t\u00e9tiques",
    },
    {
        code: "10.89Z",
        legend: "Fabrication d'autres produits alimentaires n.c.a.",
    },
    { code: "10.91Z", legend: "Fabrication d'aliments pour animaux de ferme" },
    {
        code: "10.92Z",
        legend: "Fabrication d'aliments pour animaux de compagnie",
    },
    {
        code: "11.01Z",
        legend: "Production de boissons alcooliques distill\u00e9es",
    },
    { code: "11.02A", legend: "Fabrication de vins effervescents" },
    { code: "11.02B", legend: "Vinification" },
    { code: "11.03Z", legend: "Fabrication de cidre et de vins de fruits " },
    {
        code: "11.04Z",
        legend: "Production d'autres boissons ferment\u00e9es non distill\u00e9es",
    },
    { code: "11.05Z", legend: "Fabrication de bi\u00e8re" },
    { code: "11.06Z", legend: "Fabrication de malt" },
    { code: "11.07A", legend: "Industrie des eaux de table" },
    { code: "11.07B", legend: "Production de boissons rafra\u00eechissantes" },
    { code: "12.00Z", legend: "Fabrication de produits \u00e0 base de tabac" },
    { code: "13.10Z", legend: "Pr\u00e9paration de fibres textiles et filature" },
    { code: "13.20Z", legend: "Tissage" },
    { code: "13.30Z", legend: "Ennoblissement textile" },
    { code: "13.91Z", legend: "Fabrication d'\u00e9toffes \u00e0 mailles" },
    {
        code: "13.92Z",
        legend: "Fabrication d'articles textiles, sauf habillement",
    },
    { code: "13.93Z", legend: "Fabrication de tapis et moquettes" },
    { code: "13.94Z", legend: "Fabrication de ficelles, cordes et filets" },
    {
        code: "13.95Z",
        legend: "Fabrication de non-tiss\u00e9s, sauf habillement",
    },
    {
        code: "13.96Z",
        legend: "Fabrication d'autres textiles techniques et industriels",
    },
    { code: "13.99Z", legend: "Fabrication d'autres textiles n.c.a." },
    { code: "14.11Z", legend: "Fabrication de v\u00eatements en cuir" },
    { code: "14.12Z", legend: "Fabrication de v\u00eatements de travail" },
    { code: "14.13Z", legend: "Fabrication de v\u00eatements de dessus" },
    { code: "14.14Z", legend: "Fabrication de v\u00eatements de dessous" },
    {
        code: "14.19Z",
        legend: "Fabrication d'autres v\u00eatements et accessoires",
    },
    { code: "14.20Z", legend: "Fabrication d'articles en fourrure" },
    {
        code: "14.31Z",
        legend: "Fabrication d'articles chaussants \u00e0 mailles",
    },
    { code: "14.39Z", legend: "Fabrication d'autres articles \u00e0 mailles" },
    {
        code: "15.11Z",
        legend: "Appr\u00eat et tannage des cuirs ; pr\u00e9paration et teinture des fourrures",
    },
    {
        code: "15.12Z",
        legend: "Fabrication d'articles de voyage, de maroquinerie et de sellerie",
    },
    { code: "15.20Z", legend: "Fabrication de chaussures" },
    {
        code: "16.10A",
        legend: "Sciage et rabotage du bois, hors impr\u00e9gnation",
    },
    { code: "16.10B", legend: "Impr\u00e9gnation du bois" },
    { code: "16.21Z", legend: "Fabrication de placage et de panneaux de bois" },
    { code: "16.22Z", legend: "Fabrication de parquets assembl\u00e9s" },
    {
        code: "16.23Z",
        legend: "Fabrication de charpentes et d'autres menuiseries",
    },
    { code: "16.24Z", legend: "Fabrication d'emballages en bois" },
    {
        code: "16.29Z",
        legend: "Fabrication d'objets divers en bois ; fabrication d'objets en li\u00e8ge, vannerie et sparterie",
    },
    { code: "17.11Z", legend: "Fabrication de p\u00e2te \u00e0 papier" },
    { code: "17.12Z", legend: "Fabrication de papier et de carton" },
    { code: "17.21A", legend: "Fabrication de carton ondul\u00e9" },
    { code: "17.21B", legend: "Fabrication de cartonnages " },
    { code: "17.21C", legend: "Fabrication d'emballages en papier" },
    {
        code: "17.22Z",
        legend: "Fabrication d'articles en papier \u00e0 usage sanitaire ou domestique",
    },
    { code: "17.23Z", legend: "Fabrication d'articles de papeterie" },
    { code: "17.24Z", legend: "Fabrication de papiers peints" },
    {
        code: "17.29Z",
        legend: "Fabrication d'autres articles en papier ou en carton",
    },
    { code: "18.11Z", legend: "Imprimerie de journaux" },
    { code: "18.12Z", legend: "Autre imprimerie (labeur)" },
    { code: "18.13Z", legend: "Activit\u00e9s de pr\u00e9-presse " },
    { code: "18.14Z", legend: "Reliure et activit\u00e9s connexes" },
    { code: "18.20Z", legend: "Reproduction d'enregistrements" },
    { code: "19.10Z", legend: "Cok\u00e9faction" },
    { code: "19.20Z", legend: "Raffinage du p\u00e9trole" },
    { code: "20.11Z", legend: "Fabrication de gaz industriels" },
    { code: "20.12Z", legend: "Fabrication de colorants et de pigments" },
    {
        code: "20.13A",
        legend: "Enrichissement et  retraitement de mati\u00e8res nucl\u00e9aires",
    },
    {
        code: "20.13B",
        legend: "Fabrication d'autres produits chimiques inorganiques de base n.c.a.",
    },
    {
        code: "20.14Z",
        legend: "Fabrication d'autres produits chimiques organiques de base",
    },
    {
        code: "20.15Z",
        legend: "Fabrication de produits azot\u00e9s et d'engrais",
    },
    { code: "20.16Z", legend: "Fabrication de mati\u00e8res plastiques de base" },
    { code: "20.17Z", legend: "Fabrication de caoutchouc synth\u00e9tique" },
    {
        code: "20.20Z",
        legend: "Fabrication de pesticides et d\u2019autres produits agrochimiques",
    },
    {
        code: "20.30Z",
        legend: "Fabrication de peintures, vernis, encres et mastics",
    },
    {
        code: "20.41Z",
        legend: "Fabrication de savons, d\u00e9tergents et produits d'entretien",
    },
    {
        code: "20.42Z",
        legend: "Fabrication de parfums et de produits pour la toilette",
    },
    { code: "20.51Z", legend: "Fabrication de produits explosifs" },
    { code: "20.52Z", legend: "Fabrication de colles" },
    { code: "20.53Z", legend: "Fabrication d'huiles essentielles" },
    { code: "20.59Z", legend: "Fabrication d'autres produits chimiques n.c.a." },
    {
        code: "20.60Z",
        legend: "Fabrication de fibres artificielles ou synth\u00e9tiques",
    },
    { code: "21.10Z", legend: "Fabrication de produits pharmaceutiques de base" },
    {
        code: "21.20Z",
        legend: "Fabrication de pr\u00e9parations pharmaceutiques",
    },
    { code: "22.11Z", legend: "Fabrication et rechapage de pneumatiques" },
    { code: "22.19Z", legend: "Fabrication d'autres articles en caoutchouc" },
    {
        code: "22.21Z",
        legend: "Fabrication de plaques, feuilles, tubes et profil\u00e9s en mati\u00e8res plastiques",
    },
    {
        code: "22.22Z",
        legend: "Fabrication d'emballages en mati\u00e8res plastiques",
    },
    {
        code: "22.23Z",
        legend: "Fabrication d'\u00e9l\u00e9ments en mati\u00e8res plastiques pour la construction",
    },
    {
        code: "22.29A",
        legend: "Fabrication de pi\u00e8ces techniques \u00e0 base de mati\u00e8res plastiques",
    },
    {
        code: "22.29B",
        legend: "Fabrication de produits de consommation courante en mati\u00e8res plastiques",
    },
    { code: "23.11Z", legend: "Fabrication de verre plat" },
    { code: "23.12Z", legend: "Fa\u00e7onnage et transformation du verre plat" },
    { code: "23.13Z", legend: "Fabrication de verre creux" },
    { code: "23.14Z", legend: "Fabrication de fibres de verre" },
    {
        code: "23.19Z",
        legend: "Fabrication et fa\u00e7onnage d'autres articles en verre, y compris verre technique",
    },
    { code: "23.20Z", legend: "Fabrication de produits r\u00e9fractaires" },
    { code: "23.31Z", legend: "Fabrication de carreaux en c\u00e9ramique" },
    {
        code: "23.32Z",
        legend: "Fabrication de briques, tuiles et produits de construction, en terre cuite",
    },
    {
        code: "23.41Z",
        legend: "Fabrication d'articles c\u00e9ramiques \u00e0 usage domestique ou ornemental",
    },
    {
        code: "23.42Z",
        legend: "Fabrication d'appareils sanitaires en c\u00e9ramique",
    },
    {
        code: "23.43Z",
        legend: "Fabrication d'isolateurs et pi\u00e8ces isolantes en c\u00e9ramique",
    },
    {
        code: "23.44Z",
        legend: "Fabrication d'autres produits c\u00e9ramiques \u00e0 usage technique",
    },
    { code: "23.49Z", legend: "Fabrication d'autres produits c\u00e9ramiques" },
    { code: "23.51Z", legend: "Fabrication de ciment" },
    { code: "23.52Z", legend: "Fabrication de chaux et pl\u00e2tre" },
    {
        code: "23.61Z",
        legend: "Fabrication d'\u00e9l\u00e9ments en b\u00e9ton pour la construction",
    },
    {
        code: "23.62Z",
        legend: "Fabrication d'\u00e9l\u00e9ments en pl\u00e2tre pour la construction",
    },
    {
        code: "23.63Z",
        legend: "Fabrication de b\u00e9ton pr\u00eat \u00e0 l'emploi",
    },
    { code: "23.64Z", legend: "Fabrication de mortiers et b\u00e9tons secs" },
    { code: "23.65Z", legend: "Fabrication d'ouvrages en fibre-ciment" },
    {
        code: "23.69Z",
        legend: "Fabrication d'autres ouvrages en b\u00e9ton, en ciment ou en pl\u00e2tre",
    },
    { code: "23.70Z", legend: "Taille, fa\u00e7onnage et finissage de pierres" },
    { code: "23.91Z", legend: "Fabrication de produits abrasifs" },
    {
        code: "23.99Z",
        legend: "Fabrication d'autres produits min\u00e9raux non m\u00e9talliques n.c.a.",
    },
    { code: "24.10Z", legend: "Sid\u00e9rurgie" },
    {
        code: "24.20Z",
        legend: "Fabrication de tubes, tuyaux, profil\u00e9s creux et accessoires correspondants en acier ",
    },
    { code: "24.31Z", legend: "\u00c9tirage \u00e0 froid de barres" },
    { code: "24.32Z", legend: "Laminage \u00e0 froid de feuillards" },
    { code: "24.33Z", legend: "Profilage \u00e0 froid par formage ou pliage" },
    { code: "24.34Z", legend: "Tr\u00e9filage \u00e0 froid" },
    { code: "24.41Z", legend: "Production de m\u00e9taux pr\u00e9cieux" },
    { code: "24.42Z", legend: "M\u00e9tallurgie de l'aluminium" },
    {
        code: "24.43Z",
        legend: "M\u00e9tallurgie du plomb, du zinc ou de l'\u00e9tain",
    },
    { code: "24.44Z", legend: "M\u00e9tallurgie du cuivre" },
    {
        code: "24.45Z",
        legend: "M\u00e9tallurgie des autres m\u00e9taux non ferreux",
    },
    {
        code: "24.46Z",
        legend: "\u00c9laboration et transformation de mati\u00e8res nucl\u00e9aires",
    },
    { code: "24.51Z", legend: "Fonderie de fonte" },
    { code: "24.52Z", legend: "Fonderie d'acier" },
    { code: "24.53Z", legend: "Fonderie de m\u00e9taux l\u00e9gers" },
    { code: "24.54Z", legend: "Fonderie d'autres m\u00e9taux non ferreux" },
    {
        code: "25.11Z",
        legend: "Fabrication de structures m\u00e9talliques et de parties de structures",
    },
    {
        code: "25.12Z",
        legend: "Fabrication de portes et fen\u00eatres en m\u00e9tal",
    },
    {
        code: "25.21Z",
        legend: "Fabrication de radiateurs et de chaudi\u00e8res pour le chauffage central",
    },
    {
        code: "25.29Z",
        legend: "Fabrication d'autres r\u00e9servoirs, citernes et conteneurs m\u00e9talliques",
    },
    {
        code: "25.30Z",
        legend: "Fabrication de g\u00e9n\u00e9rateurs de vapeur, \u00e0 l'exception des chaudi\u00e8res pour le chauffage central",
    },
    { code: "25.40Z", legend: "Fabrication d'armes et de munitions" },
    {
        code: "25.50A",
        legend: "Forge, estampage, matri\u00e7age ; m\u00e9tallurgie des poudres",
    },
    { code: "25.50B", legend: "D\u00e9coupage, emboutissage" },
    { code: "25.61Z", legend: "Traitement et rev\u00eatement des m\u00e9taux" },
    { code: "25.62A", legend: "D\u00e9colletage" },
    { code: "25.62B", legend: "M\u00e9canique industrielle" },
    { code: "25.71Z", legend: "Fabrication de coutellerie" },
    { code: "25.72Z", legend: "Fabrication de serrures et de ferrures" },
    { code: "25.73A", legend: "Fabrication de moules et mod\u00e8les" },
    { code: "25.73B", legend: "Fabrication d'autres outillages" },
    {
        code: "25.91Z",
        legend: "Fabrication de f\u00fbts et emballages m\u00e9talliques similaires",
    },
    {
        code: "25.92Z",
        legend: "Fabrication d'emballages m\u00e9talliques l\u00e9gers",
    },
    {
        code: "25.93Z",
        legend: "Fabrication d'articles en fils m\u00e9talliques, de cha\u00eenes et de ressorts",
    },
    { code: "25.94Z", legend: "Fabrication de vis et de boulons" },
    {
        code: "25.99A",
        legend: "Fabrication d'articles m\u00e9talliques m\u00e9nagers",
    },
    { code: "25.99B", legend: "Fabrication d'autres articles m\u00e9talliques" },
    { code: "26.11Z", legend: "Fabrication de composants \u00e9lectroniques" },
    {
        code: "26.12Z",
        legend: "Fabrication de cartes \u00e9lectroniques assembl\u00e9es",
    },
    {
        code: "26.20Z",
        legend: "Fabrication d'ordinateurs et d'\u00e9quipements p\u00e9riph\u00e9riques",
    },
    {
        code: "26.30Z",
        legend: "Fabrication d'\u00e9quipements de communication ",
    },
    {
        code: "26.40Z",
        legend: "Fabrication de produits \u00e9lectroniques grand public",
    },
    {
        code: "26.51A",
        legend: "Fabrication d'\u00e9quipements d'aide \u00e0 la navigation",
    },
    {
        code: "26.51B",
        legend: "Fabrication d'instrumentation scientifique et technique",
    },
    { code: "26.52Z", legend: "Horlogerie" },
    {
        code: "26.60Z",
        legend: "Fabrication d'\u00e9quipements d'irradiation m\u00e9dicale, d'\u00e9quipements \u00e9lectrom\u00e9dicaux et \u00e9lectroth\u00e9rapeutiques ",
    },
    {
        code: "26.70Z",
        legend: "Fabrication de mat\u00e9riels optique et photographique",
    },
    {
        code: "26.80Z",
        legend: "Fabrication de supports magn\u00e9tiques et optiques",
    },
    {
        code: "27.11Z",
        legend: "Fabrication de moteurs, g\u00e9n\u00e9ratrices et transformateurs \u00e9lectriques",
    },
    {
        code: "27.12Z",
        legend: "Fabrication de mat\u00e9riel de distribution et de commande \u00e9lectrique",
    },
    {
        code: "27.20Z",
        legend: "Fabrication de piles et d'accumulateurs \u00e9lectriques",
    },
    { code: "27.31Z", legend: "Fabrication de c\u00e2bles de fibres optiques" },
    {
        code: "27.32Z",
        legend: "Fabrication d'autres fils et c\u00e2bles \u00e9lectroniques ou \u00e9lectriques",
    },
    {
        code: "27.33Z",
        legend: "Fabrication de mat\u00e9riel d'installation \u00e9lectrique",
    },
    {
        code: "27.40Z",
        legend: "Fabrication d'appareils d'\u00e9clairage \u00e9lectrique",
    },
    {
        code: "27.51Z",
        legend: "Fabrication d'appareils \u00e9lectrom\u00e9nagers",
    },
    {
        code: "27.52Z",
        legend: "Fabrication d'appareils m\u00e9nagers non \u00e9lectriques",
    },
    {
        code: "27.90Z",
        legend: "Fabrication d'autres mat\u00e9riels \u00e9lectriques",
    },
    {
        code: "28.11Z",
        legend: "Fabrication de moteurs et turbines, \u00e0 l'exception des moteurs d\u2019avions et de v\u00e9hicules",
    },
    {
        code: "28.12Z",
        legend: "Fabrication d'\u00e9quipements hydrauliques et pneumatiques",
    },
    { code: "28.13Z", legend: "Fabrication d'autres pompes et compresseurs" },
    { code: "28.14Z", legend: "Fabrication d'autres articles de robinetterie" },
    {
        code: "28.15Z",
        legend: "Fabrication d'engrenages et d'organes m\u00e9caniques de transmission",
    },
    { code: "28.21Z", legend: "Fabrication de fours et br\u00fbleurs" },
    {
        code: "28.22Z",
        legend: "Fabrication de mat\u00e9riel de levage et de manutention",
    },
    {
        code: "28.23Z",
        legend: "Fabrication de machines et d'\u00e9quipements de bureau (\u00e0 l'exception des ordinateurs et \u00e9quipements p\u00e9riph\u00e9riques)",
    },
    {
        code: "28.24Z",
        legend: "Fabrication d'outillage portatif \u00e0 moteur incorpor\u00e9",
    },
    {
        code: "28.25Z",
        legend: "Fabrication d'\u00e9quipements a\u00e9rauliques et frigorifiques industriels",
    },
    {
        code: "28.29A",
        legend: "Fabrication d'\u00e9quipements d'emballage, de conditionnement et de pesage ",
    },
    {
        code: "28.29B",
        legend: "Fabrication d'autres machines d'usage g\u00e9n\u00e9ral",
    },
    {
        code: "28.30Z",
        legend: "Fabrication de machines agricoles et foresti\u00e8res",
    },
    {
        code: "28.41Z",
        legend: "Fabrication de machines-outils pour le travail des m\u00e9taux",
    },
    { code: "28.49Z", legend: "Fabrication d'autres machines-outils " },
    {
        code: "28.91Z",
        legend: "Fabrication de machines pour la m\u00e9tallurgie",
    },
    {
        code: "28.92Z",
        legend: "Fabrication de machines pour l'extraction ou la construction",
    },
    {
        code: "28.93Z",
        legend: "Fabrication de machines pour l'industrie agro-alimentaire",
    },
    {
        code: "28.94Z",
        legend: "Fabrication de machines pour les industries textiles",
    },
    {
        code: "28.95Z",
        legend: "Fabrication de machines pour les industries du papier et du carton",
    },
    {
        code: "28.96Z",
        legend: "Fabrication de machines pour le travail du caoutchouc ou des plastiques",
    },
    { code: "28.99A", legend: "Fabrication de machines d'imprimerie" },
    {
        code: "28.99B",
        legend: "Fabrication d'autres machines sp\u00e9cialis\u00e9es",
    },
    { code: "29.10Z", legend: "Construction de v\u00e9hicules automobiles" },
    { code: "29.20Z", legend: "Fabrication de carrosseries et remorques" },
    {
        code: "29.31Z",
        legend: "Fabrication d'\u00e9quipements \u00e9lectriques et \u00e9lectroniques automobiles",
    },
    {
        code: "29.32Z",
        legend: "Fabrication d'autres \u00e9quipements automobiles",
    },
    {
        code: "30.11Z",
        legend: "Construction de navires et de structures flottantes",
    },
    { code: "30.12Z", legend: "Construction de bateaux de plaisance" },
    {
        code: "30.20Z",
        legend: "Construction de locomotives et d'autre mat\u00e9riel ferroviaire roulant ",
    },
    { code: "30.30Z", legend: "Construction a\u00e9ronautique et spatiale " },
    {
        code: "30.40Z",
        legend: "Construction de v\u00e9hicules militaires de combat ",
    },
    { code: "30.91Z", legend: "Fabrication de motocycles" },
    {
        code: "30.92Z",
        legend: "Fabrication de bicyclettes et de v\u00e9hicules pour invalides",
    },
    {
        code: "30.99Z",
        legend: "Fabrication d\u2019autres \u00e9quipements de transport n.c.a.",
    },
    { code: "31.01Z", legend: "Fabrication de meubles de bureau et de magasin" },
    { code: "31.02Z", legend: "Fabrication de meubles de cuisine " },
    { code: "31.03Z", legend: "Fabrication de matelas" },
    {
        code: "31.09A",
        legend: "Fabrication de si\u00e8ges d'ameublement d'int\u00e9rieur",
    },
    {
        code: "31.09B",
        legend: "Fabrication d\u2019autres meubles et industries connexes de l\u2019ameublement",
    },
    { code: "32.11Z", legend: "Frappe de monnaie" },
    {
        code: "32.12Z",
        legend: "Fabrication d\u2019articles de joaillerie et bijouterie",
    },
    {
        code: "32.13Z",
        legend: "Fabrication d\u2019articles de bijouterie fantaisie et articles similaires",
    },
    { code: "32.20Z", legend: "Fabrication d'instruments de musique" },
    { code: "32.30Z", legend: "Fabrication d'articles de sport" },
    { code: "32.40Z", legend: "Fabrication de jeux et jouets" },
    {
        code: "32.50A",
        legend: "Fabrication de mat\u00e9riel m\u00e9dico-chirurgical et dentaire",
    },
    { code: "32.50B", legend: "Fabrication de lunettes" },
    { code: "32.91Z", legend: "Fabrication d\u2019articles de brosserie" },
    {
        code: "32.99Z",
        legend: "Autres activit\u00e9s manufacturi\u00e8res n.c.a. ",
    },
    { code: "33.11Z", legend: "R\u00e9paration d'ouvrages en m\u00e9taux" },
    {
        code: "33.12Z",
        legend: "R\u00e9paration de machines et \u00e9quipements m\u00e9caniques",
    },
    {
        code: "33.13Z",
        legend: "R\u00e9paration de mat\u00e9riels \u00e9lectroniques et optiques",
    },
    {
        code: "33.14Z",
        legend: "R\u00e9paration d'\u00e9quipements \u00e9lectriques",
    },
    { code: "33.15Z", legend: "R\u00e9paration et maintenance navale" },
    {
        code: "33.16Z",
        legend: "R\u00e9paration et maintenance d'a\u00e9ronefs et d'engins spatiaux ",
    },
    {
        code: "33.17Z",
        legend: "R\u00e9paration et maintenance d'autres \u00e9quipements de transport",
    },
    { code: "33.19Z", legend: "R\u00e9paration d'autres \u00e9quipements" },
    {
        code: "33.20A",
        legend: "Installation de structures m\u00e9talliques, chaudronn\u00e9es et de tuyauterie",
    },
    {
        code: "33.20B",
        legend: "Installation de machines et \u00e9quipements m\u00e9caniques",
    },
    {
        code: "33.20C",
        legend: "Conception d'ensemble et assemblage sur site industriel d'\u00e9quipements de contr\u00f4le des processus industriels ",
    },
    {
        code: "33.20D",
        legend: "Installation d'\u00e9quipements \u00e9lectriques, de mat\u00e9riels \u00e9lectroniques et optiques ou d'autres mat\u00e9riels",
    },
    { code: "35.11Z", legend: "Production d'\u00e9lectricit\u00e9" },
    { code: "35.12Z", legend: "Transport d'\u00e9lectricit\u00e9" },
    { code: "35.13Z", legend: "Distribution d'\u00e9lectricit\u00e9" },
    { code: "35.14Z", legend: "Commerce d'\u00e9lectricit\u00e9" },
    { code: "35.21Z", legend: "Production de combustibles gazeux" },
    {
        code: "35.22Z",
        legend: "Distribution de combustibles gazeux par conduites",
    },
    { code: "35.23Z", legend: "Commerce de combustibles gazeux par conduites" },
    {
        code: "35.30Z",
        legend: "Production et distribution de vapeur et d'air conditionn\u00e9 ",
    },
    { code: "36.00Z", legend: "Captage, traitement et distribution d'eau" },
    { code: "37.00Z", legend: "Collecte et traitement des eaux us\u00e9es" },
    { code: "38.11Z", legend: "Collecte des d\u00e9chets non dangereux" },
    { code: "38.12Z", legend: "Collecte des d\u00e9chets dangereux" },
    {
        code: "38.21Z",
        legend: "Traitement et \u00e9limination des d\u00e9chets non dangereux",
    },
    {
        code: "38.22Z",
        legend: "Traitement et \u00e9limination des d\u00e9chets dangereux",
    },
    { code: "38.31Z", legend: "D\u00e9mant\u00e8lement d'\u00e9paves" },
    {
        code: "38.32Z",
        legend: "R\u00e9cup\u00e9ration de d\u00e9chets tri\u00e9s",
    },
    {
        code: "39.00Z",
        legend: "D\u00e9pollution et autres services de gestion des d\u00e9chets",
    },
    { code: "41.10A", legend: "Promotion immobili\u00e8re de logements" },
    { code: "41.10B", legend: "Promotion immobili\u00e8re de bureaux" },
    {
        code: "41.10C",
        legend: "Promotion immobili\u00e8re d'autres b\u00e2timents",
    },
    { code: "41.10D", legend: "Supports juridiques de programmes" },
    { code: "41.20A", legend: "Construction de maisons individuelles" },
    { code: "41.20B", legend: "Construction d'autres b\u00e2timents" },
    { code: "42.11Z", legend: "Construction de routes et autoroutes" },
    {
        code: "42.12Z",
        legend: "Construction de voies ferr\u00e9es de surface et souterraines",
    },
    { code: "42.13A", legend: "Construction d'ouvrages d'art" },
    { code: "42.13B", legend: "Construction et entretien de tunnels" },
    { code: "42.21Z", legend: "Construction de r\u00e9seaux pour fluides" },
    {
        code: "42.22Z",
        legend: "Construction de r\u00e9seaux \u00e9lectriques et de t\u00e9l\u00e9communications",
    },
    { code: "42.91Z", legend: "Construction d'ouvrages maritimes et fluviaux" },
    {
        code: "42.99Z",
        legend: "Construction d'autres ouvrages de g\u00e9nie civil n.c.a.",
    },
    { code: "43.11Z", legend: "Travaux de d\u00e9molition" },
    {
        code: "43.12A",
        legend: "Travaux de terrassement courants et travaux pr\u00e9paratoires",
    },
    {
        code: "43.12B",
        legend: "Travaux de terrassement sp\u00e9cialis\u00e9s ou de grande masse",
    },
    { code: "43.13Z", legend: "Forages et sondages" },
    {
        code: "43.21A",
        legend: "Travaux d'installation \u00e9lectrique dans tous locaux",
    },
    {
        code: "43.21B",
        legend: "Travaux d'installation \u00e9lectrique sur la voie publique",
    },
    {
        code: "43.22A",
        legend: "Travaux d'installation d'eau et de gaz en tous locaux",
    },
    {
        code: "43.22B",
        legend: "Travaux d'installation d'\u00e9quipements thermiques et de climatisation",
    },
    { code: "43.29A", legend: "Travaux d'isolation" },
    { code: "43.29B", legend: "Autres travaux d'installation n.c.a." },
    { code: "43.31Z", legend: "Travaux de pl\u00e2trerie" },
    { code: "43.32A", legend: "Travaux de menuiserie bois et PVC" },
    {
        code: "43.32B",
        legend: "Travaux de menuiserie m\u00e9tallique et serrurerie",
    },
    { code: "43.32C", legend: "Agencement de lieux de vente" },
    { code: "43.33Z", legend: "Travaux de rev\u00eatement des sols et des murs" },
    { code: "43.34Z", legend: "Travaux de peinture et vitrerie" },
    { code: "43.39Z", legend: "Autres travaux de finition" },
    { code: "43.91A", legend: "Travaux de charpente" },
    { code: "43.91B", legend: "Travaux de couverture par \u00e9l\u00e9ments" },
    { code: "43.99A", legend: "Travaux d'\u00e9tanch\u00e9ification" },
    {
        code: "43.99B",
        legend: "Travaux de montage de structures m\u00e9talliques",
    },
    {
        code: "43.99C",
        legend: "Travaux de ma\u00e7onnerie g\u00e9n\u00e9rale et gros \u0153uvre de b\u00e2timent",
    },
    {
        code: "43.99D",
        legend: "Autres travaux sp\u00e9cialis\u00e9s de construction",
    },
    {
        code: "43.99E",
        legend: "Location avec op\u00e9rateur de mat\u00e9riel de construction",
    },
    {
        code: "45.11Z",
        legend: "Commerce de voitures et de v\u00e9hicules automobiles l\u00e9gers",
    },
    { code: "45.19Z", legend: "Commerce d'autres v\u00e9hicules automobiles" },
    {
        code: "45.20A",
        legend: "Entretien et r\u00e9paration de v\u00e9hicules automobiles l\u00e9gers",
    },
    {
        code: "45.20B",
        legend: "Entretien et r\u00e9paration d'autres v\u00e9hicules automobiles",
    },
    { code: "45.31Z", legend: "Commerce de gros d'\u00e9quipements automobiles" },
    {
        code: "45.32Z",
        legend: "Commerce de d\u00e9tail d'\u00e9quipements automobiles",
    },
    { code: "45.40Z", legend: "Commerce et r\u00e9paration de motocycles" },
    {
        code: "46.11Z",
        legend: "Interm\u00e9diaires du commerce en mati\u00e8res premi\u00e8res agricoles, animaux vivants, mati\u00e8res premi\u00e8res textiles et produits semi-finis",
    },
    { code: "46.12A", legend: "Centrales d'achat de carburant" },
    {
        code: "46.12B",
        legend: "Autres interm\u00e9diaires du commerce en combustibles, m\u00e9taux, min\u00e9raux et produits chimiques",
    },
    {
        code: "46.13Z",
        legend: "Interm\u00e9diaires du commerce en bois et mat\u00e9riaux de construction",
    },
    {
        code: "46.14Z",
        legend: "Interm\u00e9diaires du commerce en machines, \u00e9quipements industriels, navires et avions",
    },
    {
        code: "46.15Z",
        legend: "Interm\u00e9diaires du commerce en meubles, articles de m\u00e9nage et quincaillerie",
    },
    {
        code: "46.16Z",
        legend: "Interm\u00e9diaires du commerce en textiles, habillement, fourrures, chaussures et articles en cuir",
    },
    { code: "46.17A", legend: "Centrales d'achat alimentaires" },
    {
        code: "46.17B",
        legend: "Autres interm\u00e9diaires du commerce en denr\u00e9es, boissons et tabac",
    },
    {
        code: "46.18Z",
        legend: "Interm\u00e9diaires sp\u00e9cialis\u00e9s dans le commerce d'autres produits sp\u00e9cifiques",
    },
    { code: "46.19A", legend: "Centrales d'achat non alimentaires" },
    {
        code: "46.19B",
        legend: "Autres interm\u00e9diaires du commerce en produits divers",
    },
    {
        code: "46.21Z",
        legend: "Commerce de gros (commerce interentreprises) de c\u00e9r\u00e9ales, de tabac non manufactur\u00e9, de semences et d'aliments pour le b\u00e9tail ",
    },
    {
        code: "46.22Z",
        legend: "Commerce de gros (commerce interentreprises) de fleurs et plantes",
    },
    {
        code: "46.23Z",
        legend: "Commerce de gros (commerce interentreprises) d'animaux vivants",
    },
    {
        code: "46.24Z",
        legend: "Commerce de gros (commerce interentreprises) de cuirs et peaux",
    },
    {
        code: "46.31Z",
        legend: "Commerce de gros (commerce interentreprises) de fruits et l\u00e9gumes",
    },
    {
        code: "46.32A",
        legend: "Commerce de gros (commerce interentreprises) de viandes de boucherie",
    },
    {
        code: "46.32B",
        legend: "Commerce de gros (commerce interentreprises) de produits \u00e0 base de viande",
    },
    {
        code: "46.32C",
        legend: "Commerce de gros (commerce interentreprises) de volailles et gibier",
    },
    {
        code: "46.33Z",
        legend: "Commerce de gros (commerce interentreprises) de produits laitiers, \u0153ufs, huiles et mati\u00e8res grasses comestibles",
    },
    {
        code: "46.34Z",
        legend: "Commerce de gros (commerce interentreprises) de boissons",
    },
    {
        code: "46.35Z",
        legend: "Commerce de gros (commerce interentreprises) de produits \u00e0 base de tabac",
    },
    {
        code: "46.36Z",
        legend: "Commerce de gros (commerce interentreprises) de sucre, chocolat et confiserie",
    },
    {
        code: "46.37Z",
        legend: "Commerce de gros (commerce interentreprises) de caf\u00e9, th\u00e9, cacao et \u00e9pices",
    },
    {
        code: "46.38A",
        legend: "Commerce de gros (commerce interentreprises) de poissons, crustac\u00e9s et mollusques",
    },
    {
        code: "46.38B",
        legend: "Commerce de gros (commerce interentreprises) alimentaire sp\u00e9cialis\u00e9 divers",
    },
    {
        code: "46.39A",
        legend: "Commerce de gros (commerce interentreprises) de produits surgel\u00e9s",
    },
    {
        code: "46.39B",
        legend: "Commerce de gros (commerce interentreprises) alimentaire non sp\u00e9cialis\u00e9",
    },
    {
        code: "46.41Z",
        legend: "Commerce de gros (commerce interentreprises) de textiles",
    },
    {
        code: "46.42Z",
        legend: "Commerce de gros (commerce interentreprises) d'habillement et de chaussures",
    },
    {
        code: "46.43Z",
        legend: "Commerce de gros (commerce interentreprises) d'appareils \u00e9lectrom\u00e9nagers",
    },
    {
        code: "46.44Z",
        legend: "Commerce de gros (commerce interentreprises) de vaisselle, verrerie et produits d'entretien",
    },
    {
        code: "46.45Z",
        legend: "Commerce de gros (commerce interentreprises) de parfumerie et de produits de beaut\u00e9",
    },
    {
        code: "46.46Z",
        legend: "Commerce de gros (commerce interentreprises) de produits pharmaceutiques",
    },
    {
        code: "46.47Z",
        legend: "Commerce de gros (commerce interentreprises) de meubles, de tapis et d'appareils d'\u00e9clairage ",
    },
    {
        code: "46.48Z",
        legend: "Commerce de gros (commerce interentreprises) d'articles d'horlogerie et de bijouterie",
    },
    {
        code: "46.49Z",
        legend: "Commerce de gros (commerce interentreprises) d'autres biens domestiques ",
    },
    {
        code: "46.51Z",
        legend: "Commerce de gros (commerce interentreprises) d'ordinateurs, d'\u00e9quipements informatiques p\u00e9riph\u00e9riques et de logiciels",
    },
    {
        code: "46.52Z",
        legend: "Commerce de gros (commerce interentreprises) de composants et d'\u00e9quipements \u00e9lectroniques et de t\u00e9l\u00e9communication",
    },
    {
        code: "46.61Z",
        legend: "Commerce de gros (commerce interentreprises) de mat\u00e9riel agricole",
    },
    {
        code: "46.62Z",
        legend: "Commerce de gros (commerce interentreprises) de machines-outils",
    },
    {
        code: "46.63Z",
        legend: "Commerce de gros (commerce interentreprises) de machines pour l'extraction, la construction et le g\u00e9nie civil ",
    },
    {
        code: "46.64Z",
        legend: "Commerce de gros (commerce interentreprises) de machines pour l'industrie textile et l'habillement",
    },
    {
        code: "46.65Z",
        legend: "Commerce de gros (commerce interentreprises) de mobilier de bureau",
    },
    {
        code: "46.66Z",
        legend: "Commerce de gros (commerce interentreprises) d'autres machines et \u00e9quipements de bureau ",
    },
    {
        code: "46.69A",
        legend: "Commerce de gros (commerce interentreprises) de mat\u00e9riel \u00e9lectrique",
    },
    {
        code: "46.69B",
        legend: "Commerce de gros (commerce interentreprises) de fournitures et \u00e9quipements industriels divers",
    },
    {
        code: "46.69C",
        legend: "Commerce de gros (commerce interentreprises) de fournitures et \u00e9quipements divers pour le commerce et les services",
    },
    {
        code: "46.71Z",
        legend: "Commerce de gros (commerce interentreprises) de combustibles et de produits annexes",
    },
    {
        code: "46.72Z",
        legend: "Commerce de gros (commerce interentreprises) de minerais et m\u00e9taux",
    },
    {
        code: "46.73A",
        legend: "Commerce de gros (commerce interentreprises) de bois et de mat\u00e9riaux de construction ",
    },
    {
        code: "46.73B",
        legend: "Commerce de gros (commerce interentreprises) d'appareils sanitaires et de produits de d\u00e9coration",
    },
    {
        code: "46.74A",
        legend: "Commerce de gros (commerce interentreprises) de quincaillerie",
    },
    {
        code: "46.74B",
        legend: "Commerce de gros (commerce interentreprises) de fournitures pour la plomberie et le chauffage",
    },
    {
        code: "46.75Z",
        legend: "Commerce de gros (commerce interentreprises) de produits chimiques",
    },
    {
        code: "46.76Z",
        legend: "Commerce de gros (commerce interentreprises) d'autres produits interm\u00e9diaires",
    },
    {
        code: "46.77Z",
        legend: "Commerce de gros (commerce interentreprises) de d\u00e9chets et d\u00e9bris",
    },
    {
        code: "46.90Z",
        legend: "Commerce de gros (commerce interentreprises) non sp\u00e9cialis\u00e9",
    },
    {
        code: "47.11A",
        legend: "Commerce de d\u00e9tail de produits surgel\u00e9s",
    },
    { code: "47.11B", legend: "Commerce d'alimentation g\u00e9n\u00e9rale" },
    { code: "47.11C", legend: "Sup\u00e9rettes" },
    { code: "47.11D", legend: "Supermarch\u00e9s" },
    { code: "47.11E", legend: "Magasins multi-commerces" },
    { code: "47.11F", legend: "Hypermarch\u00e9s" },
    { code: "47.19A", legend: "Grands magasins" },
    {
        code: "47.19B",
        legend: "Autres commerces de d\u00e9tail en magasin non sp\u00e9cialis\u00e9",
    },
    {
        code: "47.21Z",
        legend: "Commerce de d\u00e9tail de fruits et l\u00e9gumes en magasin sp\u00e9cialis\u00e9",
    },
    {
        code: "47.22Z",
        legend: "Commerce de d\u00e9tail de viandes et de produits \u00e0 base de viande en magasin sp\u00e9cialis\u00e9",
    },
    {
        code: "47.23Z",
        legend: "Commerce de d\u00e9tail de poissons, crustac\u00e9s et mollusques en magasin sp\u00e9cialis\u00e9",
    },
    {
        code: "47.24Z",
        legend: "Commerce de d\u00e9tail de pain, p\u00e2tisserie et confiserie en magasin sp\u00e9cialis\u00e9",
    },
    {
        code: "47.25Z",
        legend: "Commerce de d\u00e9tail de boissons en magasin sp\u00e9cialis\u00e9",
    },
    {
        code: "47.26Z",
        legend: "Commerce de d\u00e9tail de produits \u00e0 base de tabac en magasin sp\u00e9cialis\u00e9",
    },
    {
        code: "47.29Z",
        legend: "Autres commerces de d\u00e9tail alimentaires en magasin sp\u00e9cialis\u00e9 ",
    },
    {
        code: "47.30Z",
        legend: "Commerce de d\u00e9tail de carburants en magasin sp\u00e9cialis\u00e9",
    },
    {
        code: "47.41Z",
        legend: "Commerce de d\u00e9tail d'ordinateurs, d'unit\u00e9s p\u00e9riph\u00e9riques et de logiciels en magasin sp\u00e9cialis\u00e9",
    },
    {
        code: "47.42Z",
        legend: "Commerce de d\u00e9tail de mat\u00e9riels de t\u00e9l\u00e9communication en magasin sp\u00e9cialis\u00e9",
    },
    {
        code: "47.43Z",
        legend: "Commerce de d\u00e9tail de mat\u00e9riels audio et vid\u00e9o en magasin sp\u00e9cialis\u00e9",
    },
    {
        code: "47.51Z",
        legend: "Commerce de d\u00e9tail de textiles en magasin sp\u00e9cialis\u00e9",
    },
    {
        code: "47.52A",
        legend: "Commerce de d\u00e9tail de quincaillerie, peintures et verres en petites surfaces (moins de 400 m2)",
    },
    {
        code: "47.52B",
        legend: "Commerce de d\u00e9tail de quincaillerie, peintures et verres en grandes surfaces (400 m2et plus)",
    },
    {
        code: "47.53Z",
        legend: "Commerce de d\u00e9tail de tapis, moquettes et rev\u00eatements de murs et de sols en magasin sp\u00e9cialis\u00e9",
    },
    {
        code: "47.54Z",
        legend: "Commerce de d\u00e9tail d'appareils \u00e9lectrom\u00e9nagers en magasin sp\u00e9cialis\u00e9",
    },
    { code: "47.59A", legend: "Commerce de d\u00e9tail de meubles" },
    {
        code: "47.59B",
        legend: "Commerce de d\u00e9tail d'autres \u00e9quipements du foyer",
    },
    {
        code: "47.61Z",
        legend: "Commerce de d\u00e9tail de livres en magasin sp\u00e9cialis\u00e9",
    },
    {
        code: "47.62Z",
        legend: "Commerce de d\u00e9tail de journaux et papeterie en magasin sp\u00e9cialis\u00e9",
    },
    {
        code: "47.63Z",
        legend: "Commerce de d\u00e9tail d'enregistrements musicaux et vid\u00e9o en magasin sp\u00e9cialis\u00e9",
    },
    {
        code: "47.64Z",
        legend: "Commerce de d\u00e9tail d'articles de sport en magasin sp\u00e9cialis\u00e9",
    },
    {
        code: "47.65Z",
        legend: "Commerce de d\u00e9tail de jeux et jouets en magasin sp\u00e9cialis\u00e9",
    },
    {
        code: "47.71Z",
        legend: "Commerce de d\u00e9tail d'habillement en magasin sp\u00e9cialis\u00e9",
    },
    { code: "47.72A", legend: "Commerce de d\u00e9tail de la chaussure" },
    {
        code: "47.72B",
        legend: "Commerce de d\u00e9tail de maroquinerie et d'articles de voyage",
    },
    {
        code: "47.73Z",
        legend: "Commerce de d\u00e9tail de produits pharmaceutiques en magasin sp\u00e9cialis\u00e9",
    },
    {
        code: "47.74Z",
        legend: "Commerce de d\u00e9tail d'articles m\u00e9dicaux et orthop\u00e9diques en magasin sp\u00e9cialis\u00e9",
    },
    {
        code: "47.75Z",
        legend: "Commerce de d\u00e9tail de parfumerie et de produits de beaut\u00e9 en magasin sp\u00e9cialis\u00e9",
    },
    {
        code: "47.76Z",
        legend: "Commerce de d\u00e9tail de fleurs, plantes, graines, engrais, animaux de compagnie et aliments pour ces animaux en magasin sp\u00e9cialis\u00e9",
    },
    {
        code: "47.77Z",
        legend: "Commerce de d\u00e9tail d'articles d'horlogerie et de bijouterie en magasin sp\u00e9cialis\u00e9",
    },
    { code: "47.78A", legend: "Commerces de d\u00e9tail d'optique" },
    {
        code: "47.78B",
        legend: "Commerces de d\u00e9tail de charbons et combustibles",
    },
    {
        code: "47.78C",
        legend: "Autres commerces de d\u00e9tail sp\u00e9cialis\u00e9s divers",
    },
    {
        code: "47.79Z",
        legend: "Commerce de d\u00e9tail de biens d'occasion en magasin",
    },
    {
        code: "47.81Z",
        legend: "Commerce de d\u00e9tail alimentaire sur \u00e9ventaires et march\u00e9s",
    },
    {
        code: "47.82Z",
        legend: "Commerce de d\u00e9tail de textiles, d'habillement et de chaussures sur \u00e9ventaires et march\u00e9s",
    },
    {
        code: "47.89Z",
        legend: "Autres commerces de d\u00e9tail sur \u00e9ventaires et march\u00e9s",
    },
    {
        code: "47.91A",
        legend: "Vente \u00e0 distance sur catalogue g\u00e9n\u00e9ral",
    },
    {
        code: "47.91B",
        legend: "Vente \u00e0 distance sur catalogue sp\u00e9cialis\u00e9",
    },
    { code: "47.99A", legend: "Vente \u00e0 domicile" },
    {
        code: "47.99B",
        legend: "Vente par automates et autres commerces de d\u00e9tail hors magasin, \u00e9ventaires ou march\u00e9s n.c.a.",
    },
    { code: "49.10Z", legend: "Transport ferroviaire interurbain de voyageurs" },
    { code: "49.20Z", legend: "Transports ferroviaires de fret " },
    { code: "49.31Z", legend: "Transports urbains et suburbains de voyageurs" },
    { code: "49.32Z", legend: "Transports de voyageurs par taxis" },
    { code: "49.39A", legend: "Transports routiers r\u00e9guliers de voyageurs" },
    { code: "49.39B", legend: "Autres transports routiers de voyageurs " },
    {
        code: "49.39C",
        legend: "T\u00e9l\u00e9ph\u00e9riques et remont\u00e9es m\u00e9caniques",
    },
    { code: "49.41A", legend: "Transports routiers de fret interurbains" },
    { code: "49.41B", legend: "Transports routiers de fret de proximit\u00e9" },
    { code: "49.41C", legend: "Location de camions avec chauffeur" },
    { code: "49.42Z", legend: "Services de d\u00e9m\u00e9nagement" },
    { code: "49.50Z", legend: "Transports par conduites" },
    {
        code: "50.10Z",
        legend: "Transports maritimes et c\u00f4tiers de passagers",
    },
    { code: "50.20Z", legend: "Transports maritimes et c\u00f4tiers de fret" },
    { code: "50.30Z", legend: "Transports fluviaux de passagers" },
    { code: "50.40Z", legend: "Transports fluviaux de fret " },
    { code: "51.10Z", legend: "Transports a\u00e9riens de passagers" },
    { code: "51.21Z", legend: "Transports a\u00e9riens de fret" },
    { code: "51.22Z", legend: "Transports spatiaux" },
    { code: "52.10A", legend: "Entreposage et stockage frigorifique" },
    { code: "52.10B", legend: "Entreposage et stockage non frigorifique" },
    { code: "52.21Z", legend: "Services auxiliaires des transports terrestres" },
    { code: "52.22Z", legend: "Services auxiliaires des transports par eau" },
    {
        code: "52.23Z",
        legend: "Services auxiliaires des transports a\u00e9riens",
    },
    { code: "52.24A", legend: "Manutention portuaire" },
    { code: "52.24B", legend: "Manutention non portuaire" },
    { code: "52.29A", legend: "Messagerie, fret express" },
    {
        code: "52.29B",
        legend: "Affr\u00e8tement et organisation des transports ",
    },
    {
        code: "53.10Z",
        legend: "Activit\u00e9s de poste dans le cadre d'une obligation de service universel ",
    },
    { code: "53.20Z", legend: "Autres activit\u00e9s de poste et de courrier" },
    { code: "55.10Z", legend: "H\u00f4tels et h\u00e9bergement similaire " },
    {
        code: "55.20Z",
        legend: "H\u00e9bergement touristique et autre h\u00e9bergement de courte dur\u00e9e ",
    },
    {
        code: "55.30Z",
        legend: "Terrains de camping et parcs pour caravanes ou v\u00e9hicules de loisirs",
    },
    { code: "55.90Z", legend: "Autres h\u00e9bergements " },
    { code: "56.10A", legend: "Restauration traditionnelle" },
    { code: "56.10B", legend: "Caf\u00e9t\u00e9rias et autres libres-services" },
    { code: "56.10C", legend: "Restauration de type rapide" },
    { code: "56.21Z", legend: "Services des traiteurs " },
    { code: "56.29A", legend: "Restauration collective sous contrat" },
    { code: "56.29B", legend: "Autres services de restauration n.c.a." },
    { code: "56.30Z", legend: "D\u00e9bits de boissons" },
    { code: "58.11Z", legend: "\u00c9dition de livres" },
    {
        code: "58.12Z",
        legend: "\u00c9dition de r\u00e9pertoires et de fichiers d'adresses",
    },
    { code: "58.13Z", legend: "\u00c9dition de journaux" },
    { code: "58.14Z", legend: "\u00c9dition de revues et p\u00e9riodiques" },
    { code: "58.19Z", legend: "Autres activit\u00e9s d'\u00e9dition" },
    { code: "58.21Z", legend: "\u00c9dition de jeux \u00e9lectroniques" },
    {
        code: "58.29A",
        legend: "\u00c9dition de logiciels syst\u00e8me et de r\u00e9seau",
    },
    {
        code: "58.29B",
        legend: "Edition de logiciels outils de d\u00e9veloppement et de langages",
    },
    { code: "58.29C", legend: "Edition de logiciels applicatifs" },
    {
        code: "59.11A",
        legend: "Production de films et de programmes pour la t\u00e9l\u00e9vision ",
    },
    {
        code: "59.11B",
        legend: "Production de films institutionnels et publicitaires",
    },
    { code: "59.11C", legend: "Production de films pour le cin\u00e9ma" },
    {
        code: "59.12Z",
        legend: "Post-production de films cin\u00e9matographiques, de vid\u00e9o et de programmes de t\u00e9l\u00e9vision",
    },
    { code: "59.13A", legend: "Distribution de films cin\u00e9matographiques" },
    { code: "59.13B", legend: "Edition et distribution vid\u00e9o" },
    { code: "59.14Z", legend: "Projection de films cin\u00e9matographiques" },
    { code: "59.20Z", legend: "Enregistrement sonore et \u00e9dition musicale " },
    { code: "60.10Z", legend: "\u00c9dition et diffusion de programmes radio" },
    { code: "60.20A", legend: "Edition de cha\u00eenes g\u00e9n\u00e9ralistes" },
    { code: "60.20B", legend: "Edition de cha\u00eenes th\u00e9matiques" },
    { code: "61.10Z", legend: "T\u00e9l\u00e9communications filaires" },
    { code: "61.20Z", legend: "T\u00e9l\u00e9communications sans fil " },
    { code: "61.30Z", legend: "T\u00e9l\u00e9communications par satellite" },
    {
        code: "61.90Z",
        legend: "Autres activit\u00e9s de t\u00e9l\u00e9communication ",
    },
    { code: "62.01Z", legend: "Programmation informatique" },
    {
        code: "62.02A",
        legend: "Conseil en syst\u00e8mes et logiciels informatiques",
    },
    {
        code: "62.02B",
        legend: "Tierce maintenance de syst\u00e8mes et d\u2019applications informatiques",
    },
    { code: "62.03Z", legend: "Gestion d'installations informatiques" },
    { code: "62.09Z", legend: "Autres activit\u00e9s informatiques" },
    {
        code: "63.11Z",
        legend: "Traitement de donn\u00e9es, h\u00e9bergement et activit\u00e9s connexes",
    },
    { code: "63.12Z", legend: "Portails Internet" },
    { code: "63.91Z", legend: "Activit\u00e9s des agences de presse" },
    { code: "63.99Z", legend: "Autres services d'information n.c.a." },
    { code: "64.11Z", legend: "Activit\u00e9s de banque centrale" },
    { code: "64.19Z", legend: "Autres interm\u00e9diations mon\u00e9taires" },
    { code: "64.20Z", legend: "Activit\u00e9s des soci\u00e9t\u00e9s holding" },
    {
        code: "64.30Z",
        legend: "Fonds de placement et entit\u00e9s financi\u00e8res similaires",
    },
    { code: "64.91Z", legend: "Cr\u00e9dit-bail " },
    { code: "64.92Z", legend: "Autre distribution de cr\u00e9dit" },
    {
        code: "64.99Z",
        legend: "Autres activit\u00e9s des services financiers, hors assurance et caisses de retraite, n.c.a.",
    },
    { code: "65.11Z", legend: "Assurance vie" },
    { code: "65.12Z", legend: "Autres assurances" },
    { code: "65.20Z", legend: "R\u00e9assurance" },
    { code: "65.30Z", legend: "Caisses de retraite" },
    { code: "66.11Z", legend: "Administration de march\u00e9s financiers" },
    {
        code: "66.12Z",
        legend: "Courtage de valeurs mobili\u00e8res et de marchandises",
    },
    {
        code: "66.19A",
        legend: "Supports juridiques de gestion de patrimoine mobilier",
    },
    {
        code: "66.19B",
        legend: "Autres activit\u00e9s auxiliaires de services financiers, hors assurance et caisses de retraite, n.c.a.",
    },
    { code: "66.21Z", legend: "\u00c9valuation des risques et dommages" },
    {
        code: "66.22Z",
        legend: "Activit\u00e9s des agents et courtiers d'assurances",
    },
    {
        code: "66.29Z",
        legend: "Autres activit\u00e9s auxiliaires d'assurance et de caisses de retraite",
    },
    { code: "66.30Z", legend: "Gestion de fonds" },
    {
        code: "68.10Z",
        legend: "Activit\u00e9s des marchands de biens immobiliers",
    },
    { code: "68.20A", legend: "Location de logements" },
    {
        code: "68.20B",
        legend: "Location de terrains et d'autres biens immobiliers",
    },
    { code: "68.31Z", legend: "Agences immobili\u00e8res" },
    {
        code: "68.32A",
        legend: "Administration d'immeubles et autres biens immobiliers",
    },
    {
        code: "68.32B",
        legend: "Supports juridiques de gestion de patrimoine immobilier",
    },
    { code: "69.10Z", legend: "Activit\u00e9s juridiques" },
    { code: "69.20Z", legend: "Activit\u00e9s comptables" },
    { code: "70.10Z", legend: "Activit\u00e9s des si\u00e8ges sociaux" },
    { code: "70.21Z", legend: "Conseil en relations publiques et communication" },
    {
        code: "70.22Z",
        legend: "Conseil pour les affaires et autres conseils de gestion",
    },
    { code: "71.11Z", legend: "Activit\u00e9s d'architecture " },
    { code: "71.12A", legend: "Activit\u00e9 des g\u00e9om\u00e8tres" },
    { code: "71.12B", legend: "Ing\u00e9nierie, \u00e9tudes techniques" },
    { code: "71.20A", legend: "Contr\u00f4le technique automobile" },
    { code: "71.20B", legend: "Analyses, essais et inspections techniques" },
    { code: "72.11Z", legend: "Recherche-d\u00e9veloppement en biotechnologie" },
    {
        code: "72.19Z",
        legend: "Recherche-d\u00e9veloppement en autres sciences physiques et naturelles",
    },
    {
        code: "72.20Z",
        legend: "Recherche-d\u00e9veloppement en sciences humaines et sociales",
    },
    { code: "73.11Z", legend: "Activit\u00e9s des agences de publicit\u00e9" },
    { code: "73.12Z", legend: "R\u00e9gie publicitaire de m\u00e9dias" },
    { code: "73.20Z", legend: "\u00c9tudes de march\u00e9 et sondages" },
    { code: "74.10Z", legend: "Activit\u00e9s sp\u00e9cialis\u00e9es de design" },
    { code: "74.20Z", legend: "Activit\u00e9s photographiques" },
    { code: "74.30Z", legend: "Traduction et interpr\u00e9tation" },
    {
        code: "74.90A",
        legend: "Activit\u00e9 des \u00e9conomistes de la construction",
    },
    {
        code: "74.90B",
        legend: "Activit\u00e9s sp\u00e9cialis\u00e9es, scientifiques et techniques diverses",
    },
    { code: "75.00Z", legend: "Activit\u00e9s v\u00e9t\u00e9rinaires" },
    {
        code: "77.11A",
        legend: "Location de courte dur\u00e9e de voitures et de v\u00e9hicules automobiles l\u00e9gers",
    },
    {
        code: "77.11B",
        legend: "Location de longue dur\u00e9e de voitures et de v\u00e9hicules automobiles l\u00e9gers",
    },
    { code: "77.12Z", legend: "Location et location-bail de camions" },
    {
        code: "77.21Z",
        legend: "Location et location-bail d'articles de loisirs et de sport ",
    },
    {
        code: "77.22Z",
        legend: "Location de vid\u00e9ocassettes et disques vid\u00e9o",
    },
    {
        code: "77.29Z",
        legend: "Location et location-bail d'autres biens personnels et domestiques",
    },
    {
        code: "77.31Z",
        legend: "Location et location-bail de machines et \u00e9quipements agricoles",
    },
    {
        code: "77.32Z",
        legend: "Location et location-bail de machines et \u00e9quipements pour la construction",
    },
    {
        code: "77.33Z",
        legend: "Location et location-bail de machines de bureau et de mat\u00e9riel informatique",
    },
    {
        code: "77.34Z",
        legend: "Location et location-bail de mat\u00e9riels de transport par eau",
    },
    {
        code: "77.35Z",
        legend: "Location et location-bail de mat\u00e9riels de transport a\u00e9rien",
    },
    {
        code: "77.39Z",
        legend: "Location et location-bail d'autres machines, \u00e9quipements et biens mat\u00e9riels n.c.a. ",
    },
    {
        code: "77.40Z",
        legend: "Location-bail de propri\u00e9t\u00e9 intellectuelle et de produits similaires, \u00e0 l'exception des \u0153uvres soumises \u00e0 copyright",
    },
    {
        code: "78.10Z",
        legend: "Activit\u00e9s des agences de placement de main-d'\u0153uvre ",
    },
    {
        code: "78.20Z",
        legend: "Activit\u00e9s des agences de travail temporaire ",
    },
    {
        code: "78.30Z",
        legend: "Autre mise \u00e0 disposition de ressources humaines",
    },
    { code: "79.11Z", legend: "Activit\u00e9s des agences de voyage" },
    { code: "79.12Z", legend: "Activit\u00e9s des voyagistes" },
    {
        code: "79.90Z",
        legend: "Autres services de r\u00e9servation et activit\u00e9s connexes",
    },
    {
        code: "80.10Z",
        legend: "Activit\u00e9s de s\u00e9curit\u00e9 priv\u00e9e ",
    },
    {
        code: "80.20Z",
        legend: "Activit\u00e9s li\u00e9es aux syst\u00e8mes de s\u00e9curit\u00e9 ",
    },
    { code: "80.30Z", legend: "Activit\u00e9s d'enqu\u00eate" },
    {
        code: "81.10Z",
        legend: "Activit\u00e9s combin\u00e9es de soutien li\u00e9 aux b\u00e2timents ",
    },
    { code: "81.21Z", legend: "Nettoyage courant des b\u00e2timents" },
    {
        code: "81.22Z",
        legend: "Autres activit\u00e9s de nettoyage des b\u00e2timents et nettoyage industriel",
    },
    {
        code: "81.29A",
        legend: "D\u00e9sinfection, d\u00e9sinsectisation, d\u00e9ratisation",
    },
    { code: "81.29B", legend: "Autres activit\u00e9s de nettoyage n.c.a." },
    { code: "81.30Z", legend: "Services d'am\u00e9nagement paysager " },
    { code: "82.11Z", legend: "Services administratifs combin\u00e9s de bureau" },
    {
        code: "82.19Z",
        legend: "Photocopie, pr\u00e9paration de documents et autres activit\u00e9s sp\u00e9cialis\u00e9es de soutien de bureau",
    },
    { code: "82.20Z", legend: "Activit\u00e9s de centres d'appels" },
    {
        code: "82.30Z",
        legend: "Organisation de foires, salons professionnels et congr\u00e8s",
    },
    {
        code: "82.91Z",
        legend: "Activit\u00e9s des agences de recouvrement de factures et des soci\u00e9t\u00e9s d'information financi\u00e8re sur la client\u00e8le",
    },
    { code: "82.92Z", legend: "Activit\u00e9s de conditionnement" },
    {
        code: "82.99Z",
        legend: "Autres activit\u00e9s de soutien aux entreprises n.c.a.",
    },
    { code: "84.11Z", legend: "Administration publique g\u00e9n\u00e9rale" },
    {
        code: "84.12Z",
        legend: "Administration publique (tutelle) de la sant\u00e9, de la formation, de la culture et des services sociaux, autre que s\u00e9curit\u00e9 sociale ",
    },
    {
        code: "84.13Z",
        legend: "Administration publique (tutelle) des activit\u00e9s \u00e9conomiques",
    },
    { code: "84.21Z", legend: "Affaires \u00e9trang\u00e8res" },
    { code: "84.22Z", legend: "D\u00e9fense" },
    { code: "84.23Z", legend: "Justice" },
    {
        code: "84.24Z",
        legend: "Activit\u00e9s d\u2019ordre public et de s\u00e9curit\u00e9",
    },
    { code: "84.25Z", legend: "Services du feu et de secours" },
    {
        code: "84.30A",
        legend: "Activit\u00e9s g\u00e9n\u00e9rales de s\u00e9curit\u00e9 sociale",
    },
    { code: "84.30B", legend: "Gestion des retraites compl\u00e9mentaires" },
    { code: "84.30C", legend: "Distribution sociale de revenus" },
    { code: "85.10Z", legend: "Enseignement pr\u00e9-primaire" },
    { code: "85.20Z", legend: "Enseignement primaire" },
    { code: "85.31Z", legend: "Enseignement secondaire g\u00e9n\u00e9ral" },
    {
        code: "85.32Z",
        legend: "Enseignement secondaire technique ou professionnel",
    },
    { code: "85.41Z", legend: "Enseignement post-secondaire non sup\u00e9rieur" },
    { code: "85.42Z", legend: "Enseignement sup\u00e9rieur" },
    {
        code: "85.51Z",
        legend: "Enseignement de disciplines sportives et d'activit\u00e9s de loisirs",
    },
    { code: "85.52Z", legend: "Enseignement culturel" },
    { code: "85.53Z", legend: "Enseignement de la conduite" },
    { code: "85.59A", legend: "Formation continue d'adultes" },
    { code: "85.59B", legend: "Autres enseignements" },
    { code: "85.60Z", legend: "Activit\u00e9s de soutien \u00e0 l'enseignement" },
    { code: "86.10Z", legend: "Activit\u00e9s hospitali\u00e8res" },
    {
        code: "86.21Z",
        legend: "Activit\u00e9 des m\u00e9decins g\u00e9n\u00e9ralistes",
    },
    {
        code: "86.22A",
        legend: "Activit\u00e9s de radiodiagnostic et de radioth\u00e9rapie",
    },
    { code: "86.22B", legend: "Activit\u00e9s chirurgicales" },
    {
        code: "86.22C",
        legend: "Autres activit\u00e9s des m\u00e9decins sp\u00e9cialistes",
    },
    { code: "86.23Z", legend: "Pratique dentaire" },
    { code: "86.90A", legend: "Ambulances" },
    { code: "86.90B", legend: "Laboratoires d'analyses m\u00e9dicales" },
    { code: "86.90C", legend: "Centres de collecte et banques d'organes" },
    {
        code: "86.90D",
        legend: "Activit\u00e9s des infirmiers et des sages-femmes",
    },
    {
        code: "86.90E",
        legend: "Activit\u00e9s des professionnels de la r\u00e9\u00e9ducation, de l\u2019appareillage et des p\u00e9dicures-podologues",
    },
    {
        code: "86.90F",
        legend: "Activit\u00e9s de sant\u00e9 humaine non class\u00e9es ailleurs",
    },
    {
        code: "87.10A",
        legend: "H\u00e9bergement m\u00e9dicalis\u00e9 pour personnes \u00e2g\u00e9es",
    },
    {
        code: "87.10B",
        legend: "H\u00e9bergement m\u00e9dicalis\u00e9 pour enfants handicap\u00e9s ",
    },
    {
        code: "87.10C",
        legend: "H\u00e9bergement m\u00e9dicalis\u00e9 pour adultes handicap\u00e9s et autre h\u00e9bergement m\u00e9dicalis\u00e9 \n",
    },
    {
        code: "87.20A",
        legend: "H\u00e9bergement social pour handicap\u00e9s mentaux et malades mentaux ",
    },
    { code: "87.20B", legend: "H\u00e9bergement social pour toxicomanes" },
    {
        code: "87.30A",
        legend: "H\u00e9bergement social pour personnes \u00e2g\u00e9es",
    },
    {
        code: "87.30B",
        legend: "H\u00e9bergement social pour handicap\u00e9s  physiques",
    },
    {
        code: "87.90A",
        legend: "H\u00e9bergement social pour enfants en difficult\u00e9s ",
    },
    {
        code: "87.90B",
        legend: "H\u00e9bergement social pour adultes et familles en difficult\u00e9s et autre h\u00e9bergement social ",
    },
    { code: "88.10A", legend: "Aide \u00e0 domicile  " },
    {
        code: "88.10B",
        legend: "Accueil ou accompagnement sans h\u00e9bergement d\u2019adultes handicap\u00e9s ou de  personnes \u00e2g\u00e9es",
    },
    { code: "88.10C", legend: "Aide par le travail " },
    { code: "88.91A", legend: "Accueil de jeunes enfants" },
    {
        code: "88.91B",
        legend: "Accueil ou accompagnement sans h\u00e9bergement d\u2019enfants handicap\u00e9s",
    },
    {
        code: "88.99A",
        legend: "Autre accueil ou accompagnement sans h\u00e9bergement d\u2019enfants\n et d\u2019adolescents\n",
    },
    { code: "88.99B", legend: "Action sociale sans h\u00e9bergement n.c.a." },
    { code: "90.01Z", legend: "Arts du spectacle vivant" },
    { code: "90.02Z", legend: "Activit\u00e9s de soutien au spectacle vivant" },
    {
        code: "90.03A",
        legend: "Cr\u00e9ation artistique relevant des arts plastiques",
    },
    { code: "90.03B", legend: "Autre cr\u00e9ation artistique" },
    { code: "90.04Z", legend: "Gestion de salles de spectacles" },
    { code: "91.01Z", legend: "Gestion des biblioth\u00e8ques et des archives" },
    { code: "91.02Z", legend: "Gestion des mus\u00e9es" },
    {
        code: "91.03Z",
        legend: "Gestion des sites et monuments historiques et des attractions touristiques similaires",
    },
    {
        code: "91.04Z",
        legend: "Gestion des jardins botaniques et zoologiques et des r\u00e9serves naturelles",
    },
    { code: "92.00Z", legend: "Organisation de jeux de hasard et d'argent" },
    { code: "93.11Z", legend: "Gestion d'installations sportives" },
    { code: "93.12Z", legend: "Activit\u00e9s de clubs de sports" },
    { code: "93.13Z", legend: "Activit\u00e9s des centres de culture physique" },
    { code: "93.19Z", legend: "Autres activit\u00e9s li\u00e9es au sport" },
    {
        code: "93.21Z",
        legend: "Activit\u00e9s des parcs d'attractions et parcs \u00e0 th\u00e8mes",
    },
    {
        code: "93.29Z",
        legend: "Autres activit\u00e9s r\u00e9cr\u00e9atives et de loisirs",
    },
    {
        code: "94.11Z",
        legend: "Activit\u00e9s des organisations patronales et consulaires",
    },
    {
        code: "94.12Z",
        legend: "Activit\u00e9s des organisations professionnelles",
    },
    { code: "94.20Z", legend: "Activit\u00e9s des syndicats de salari\u00e9s" },
    { code: "94.91Z", legend: "Activit\u00e9s des organisations religieuses" },
    { code: "94.92Z", legend: "Activit\u00e9s des organisations politiques" },
    {
        code: "94.99Z",
        legend: "Autres organisations fonctionnant par adh\u00e9sion volontaire",
    },
    {
        code: "95.11Z",
        legend: "R\u00e9paration d'ordinateurs et d'\u00e9quipements p\u00e9riph\u00e9riques",
    },
    {
        code: "95.12Z",
        legend: "R\u00e9paration d'\u00e9quipements de communication",
    },
    {
        code: "95.21Z",
        legend: "R\u00e9paration de produits \u00e9lectroniques grand public",
    },
    {
        code: "95.22Z",
        legend: "R\u00e9paration d'appareils \u00e9lectrom\u00e9nagers et d'\u00e9quipements pour la maison et le jardin",
    },
    {
        code: "95.23Z",
        legend: "R\u00e9paration de chaussures et d'articles en cuir",
    },
    {
        code: "95.24Z",
        legend: "R\u00e9paration de meubles et d'\u00e9quipements du foyer",
    },
    {
        code: "95.25Z",
        legend: "R\u00e9paration d'articles d'horlogerie et de bijouterie",
    },
    {
        code: "95.29Z",
        legend: "R\u00e9paration d'autres biens personnels et domestiques",
    },
    { code: "96.01A", legend: "Blanchisserie-teinturerie de gros" },
    { code: "96.01B", legend: "Blanchisserie-teinturerie de d\u00e9tail" },
    { code: "96.02A", legend: "Coiffure" },
    { code: "96.02B", legend: "Soins de beaut\u00e9" },
    { code: "96.03Z", legend: "Services fun\u00e9raires" },
    { code: "96.04Z", legend: "Entretien corporel" },
    { code: "96.09Z", legend: "Autres services personnels n.c.a." },
    {
        code: "97.00Z",
        legend: "Activit\u00e9s des m\u00e9nages en tant qu'employeurs de personnel domestique",
    },
    {
        code: "98.10Z",
        legend: "Activit\u00e9s indiff\u00e9renci\u00e9es des m\u00e9nages en tant que producteurs de biens pour usage propre",
    },
    {
        code: "98.20Z",
        legend: "Activit\u00e9s indiff\u00e9renci\u00e9es des m\u00e9nages en tant que producteurs de services pour usage propre",
    },
    {
        code: "99.00Z",
        legend: "Activit\u00e9s des organisations et organismes extraterritoriaux",
    },
];
exports.default = naf;

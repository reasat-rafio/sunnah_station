import { GetStaticProps } from "next";
import Head from "next/head";
import ReactMarkdown from "react-markdown";
import { InitialLayout } from "../Components/Layouts/InitialLayout";
import axios from "axios";
import Image from "next/image";

export default function Home({ data }) {
   return (
      <InitialLayout>
         <Head>
            <title>Home - Sunnah Station</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <main className="w-full">
            <section className="container mx-auto">
               <div className="lg:min-h-screen h-auto pt-32 md:pt-44  ">
                  <Image
                     className="rounded-3xl "
                     src="https://res.cloudinary.com/dapjxqk64/image/upload/v1616399374/sunnah%20statoin/Screenshot_2021-03-22_134155_mflxo3.png"
                     height="3"
                     width="6"
                     layout="responsive"
                  />
               </div>
            </section>
         </main>
         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero,
         sapiente ducimus soluta suscipit sint quis molestias voluptates at
         aperiam neque sequi rerum facere expedita rem adipisci voluptatem?
         Architecto deleniti molestias delectus repudiandae facere veniam iure
         ab, error natus illum blanditiis, nulla ea dolorum nesciunt totam optio
         voluptatum, distinctio hic dolore ex quam. Excepturi ipsam atque quas
         possimus? Exercitationem autem voluptates odio, voluptatum veritatis
         aperiam, soluta dolore id alias pariatur, sit quidem inventore. Et id
         culpa officiis eum voluptatum explicabo nemo, fugiat sapiente quaerat
         deserunt beatae accusamus asperiores perferendis voluptatem earum. Nisi
         ipsam ex quisquam veniam laboriosam incidunt saepe iure, aut a ratione,
         consectetur vero ipsa porro. Earum amet dolor beatae ea eum reiciendis
         aut fuga, ab sit perspiciatis odit tenetur dolore reprehenderit facilis
         sapiente soluta commodi cum. Ducimus voluptates amet nesciunt odio quis
         qui, sint quidem itaque, perspiciatis vero aliquid corrupti sequi
         repellat temporibus, dolore maxime. Eius ipsum saepe similique eos
         corporis. Voluptatum libero aperiam excepturi quisquam consequatur
         molestias laudantium sequi quasi placeat obcaecati iste reiciendis
         expedita sapiente, repellat harum facere ad veritatis quaerat? Quisquam
         necessitatibus quia maiores et. Ipsum aliquid corrupti in vel culpa
         consequatur dolorum molestiae assumenda, sapiente, voluptatum placeat,
         sequi voluptates nemo porro. Quisquam explicabo esse recusandae
         repellat perspiciatis in voluptatum nobis odit similique veniam ipsa id
         repellendus dolorum, laudantium nisi, eaque molestiae! Saepe amet
         quidem cupiditate magni corporis officiis reprehenderit, suscipit dolor
         dignissimos assumenda sequi, voluptatibus fugiat quasi, iusto rerum
         debitis deleniti cumque? Recusandae optio enim eveniet inventore illum,
         numquam ea blanditiis, voluptatem laudantium consectetur quaerat
         aliquam. Tempore sed ipsa blanditiis asperiores illo nostrum rerum
         veniam repellat commodi sunt aut, maiores delectus eligendi, sequi
         pariatur eveniet id tempora laboriosam? Consequuntur, ea consequatur!
         Tenetur voluptatum magnam voluptas ipsum optio maiores aspernatur fugit
         quidem pariatur ducimus consectetur nihil, possimus voluptatibus atque
         culpa veniam dolorum harum explicabo libero est? Tenetur facere
         inventore cum, vel facilis incidunt numquam mollitia harum repellat
         quos modi explicabo libero quasi deleniti ex tempore molestias cumque
         voluptatibus necessitatibus? Facilis earum optio obcaecati consequatur
         illum veritatis quam perferendis rem dicta esse architecto molestiae
         nostrum unde, consequuntur doloremque laborum blanditiis iste ducimus
         fugit labore. A ea id culpa expedita consequuntur, quidem doloremque
         facilis neque modi blanditiis laudantium ut impedit voluptatum nemo
         fugit earum nobis repudiandae magnam velit, excepturi tempore
         aspernatur? Veniam rerum ullam aspernatur modi inventore, voluptatibus
         laboriosam officia quis nobis molestias, minima beatae odit esse quam
         ipsum vitae nostrum non maiores sed, voluptates doloribus voluptatum
         architecto blanditiis. Vero, quam quae! Eligendi, dolor ipsa
         consequuntur accusamus voluptas assumenda quibusdam pariatur dolorem
         velit commodi aliquam, reprehenderit dicta, quisquam quo enim quasi
         aperiam nobis aspernatur quas delectus. Doloribus libero iure velit
         beatae, provident consectetur rerum sit numquam nulla nostrum illo
         praesentium architecto odit repellat aperiam. Harum sequi architecto
         culpa eum repudiandae ea ut laborum pariatur voluptatum consequatur
         dolores nisi eos eligendi dicta consequuntur, aperiam sunt quas quasi
         laboriosam a velit. Nesciunt, neque quo debitis iusto dicta harum
         maiores numquam illum! Qui quis nobis itaque eum iusto repellat nihil
         laboriosam explicabo quo, quia consequatur voluptas quaerat? Iusto
         numquam veritatis animi repellat quo explicabo corrupti, nisi enim?
         Veritatis adipisci dolorem ut nobis blanditiis similique nostrum
         facilis aperiam dignissimos, iusto, porro asperiores molestias et
         minima, mollitia incidunt sint amet perspiciatis odio quas temporibus
         ipsam impedit nesciunt! Rem reprehenderit laborum eum, rerum,
         temporibus hic molestias odit praesentium alias natus quisquam quis
         facilis possimus sapiente! Alias aliquid vel optio, perspiciatis iste
         velit? Quo numquam, adipisci corporis commodi iusto doloremque ipsa
         maiores, deleniti ea at optio distinctio. Sed optio corrupti iure ex ut
         similique voluptatum saepe quisquam! Sunt dolorem voluptate laboriosam
         saepe consectetur maxime obcaecati culpa quia blanditiis quae similique
         veritatis iste cupiditate eaque doloribus, aperiam eveniet excepturi?
         Delectus natus tempora fugit velit amet quidem, dolor assumenda
         perspiciatis at voluptate beatae obcaecati distinctio. Expedita ab amet
         adipisci tempora nobis voluptates recusandae incidunt aspernatur
         voluptatibus aut distinctio obcaecati exercitationem nisi
         reprehenderit, similique aperiam quo. Cupiditate, pariatur? Ab totam
         nisi minima excepturi similique atque maxime adipisci error at, ut
         dicta, harum ullam! Illo, cum laudantium! Assumenda error ipsam
         eveniet, id incidunt officiis architecto pariatur soluta animi
         molestias excepturi saepe fugit adipisci quos perspiciatis laudantium
         iste sapiente, dolor nobis enim, doloremque asperiores sit? Sed
         veritatis nesciunt unde consectetur aspernatur nulla tenetur nostrum
         error? Officiis unde possimus cumque quos voluptatum. Commodi
         dignissimos odit beatae cumque sunt error a id molestiae culpa
         inventore officia consequuntur quae, quo, repellendus at eum? Sint
         obcaecati sit non officiis, tenetur qui facere sunt voluptatum placeat
         dolores dolorem possimus nihil accusantium aspernatur ab enim
         repudiandae ea labore odio dolore architecto mollitia? Culpa explicabo
         sequi minima in facere natus magni officia ab iste pariatur. Accusamus
         laudantium beatae est explicabo, temporibus aspernatur minus ab veniam
         impedit praesentium quidem tempora ut dolores possimus eos cupiditate
         aliquid suscipit adipisci tempore officia voluptates amet quo libero!
         Possimus numquam veniam hic excepturi sint nobis provident corporis
         similique dolor ad, voluptatem soluta quaerat repudiandae, quos odit
         id! Veritatis aperiam, cumque earum esse, fuga sed, dolor nesciunt
         necessitatibus rem quas unde aliquam reiciendis quis placeat voluptas
         maxime dicta debitis maiores quod animi vitae. Id cum reiciendis vel
         harum vitae, reprehenderit quis non! Nisi mollitia aut ducimus in
         dolorem reiciendis deserunt quae natus eaque perferendis rem laboriosam
         impedit consectetur voluptatum est nam non molestiae aliquid dolore,
         quis porro excepturi? Consequatur est qui et molestiae eum illum vitae
         impedit voluptas odit delectus assumenda aut accusantium quos doloribus
         ex, aliquam voluptates ab, eius repellat. Quam voluptas eos pariatur
         minus minima alias sit? Est voluptate praesentium quidem dolorem esse
         placeat voluptatem, unde molestiae nostrum ab dicta error sit deserunt
         fugit minima, tempora architecto. Nostrum, autem id. Perspiciatis,
         alias veritatis facere reprehenderit ut cumque eveniet consectetur
         autem delectus error cupiditate cum, commodi voluptatibus vero ipsam
         inventore minima tempore fugiat obcaecati expedita eos non! Voluptatum
         possimus corporis saepe, harum, cupiditate expedita vero quibusdam
         consequatur quo pariatur qui ea asperiores numquam illo ullam?
         Inventore ipsam at doloremque earum dolorum aut delectus ducimus, vero
         quisquam, suscipit consectetur possimus nulla cumque assumenda iusto
         placeat praesentium unde minus laborum aliquam? Harum necessitatibus
         quos, laudantium minima a iure laborum ipsa maiores tempora autem
         molestiae distinctio nostrum, consectetur iste sequi, dolorem nemo quo
         dicta vitae! Quos dolorum quod nulla id consequatur ipsum temporibus
         cum dolor, animi ipsa maxime possimus saepe mollitia provident expedita
         sed. Officiis quam et excepturi harum accusantium alias eum debitis
         deserunt laborum? Sequi fuga, minus sed quas quae, vitae repellendus
         qui dicta ad, eius est! Vero ratione odit ducimus, nemo rem quam
         impedit hic. Quidem aliquid, iusto recusandae repellendus eveniet
         nesciunt necessitatibus accusantium suscipit perspiciatis. Ullam labore
         ducimus ut odio aperiam nihil est corporis nobis optio fuga debitis
         pariatur, excepturi dolor corrupti aut numquam, necessitatibus non
         fugit, maiores voluptas qui vero? Expedita, temporibus a nesciunt
         commodi quisquam nemo tempore enim culpa obcaecati? Magni, a quisquam!
         Corporis veniam assumenda perferendis! Molestiae cupiditate, saepe
         porro ducimus animi qui ipsam eum nemo placeat, doloremque veritatis
         eveniet facilis veniam! Fuga velit beatae libero cumque harum illo,
         perspiciatis nemo blanditiis sunt tenetur, voluptatum nesciunt voluptas
         laborum quas exercitationem? Aliquid eveniet modi sit reiciendis
         dolorum. Nostrum, officiis? Nobis maiores harum excepturi eius? Cumque
         nihil recusandae aperiam unde qui! Veniam, eos. Id laboriosam excepturi
         dicta et blanditiis dolorem adipisci minus necessitatibus corrupti quae
         cum nesciunt voluptate doloremque earum facere voluptatum repellat
         aliquid distinctio atque nobis, deserunt deleniti magnam assumenda.
         Eius reiciendis eos velit vero, eveniet, eaque reprehenderit ratione
         quae, numquam aliquid nobis rem id omnis obcaecati nemo. Animi corrupti
         nostrum earum numquam officiis cum dolor voluptates soluta fugit vel
         esse aliquam, ut aut ullam ipsa saepe, minima tempore dolorum quo?
         Recusandae consequatur consectetur impedit nihil numquam esse
         voluptatem commodi? Distinctio pariatur consectetur eius illum
         deserunt, saepe quia fuga minus quam voluptate perferendis quidem
         nostrum. Blanditiis corrupti iste excepturi consequatur officiis fuga
         assumenda dolores, eos nemo, fugiat aspernatur dolore quod expedita
         enim? Commodi, quia! Minima vero amet deleniti commodi odit odio, sunt
         quia, qui iusto dolor necessitatibus natus sed optio est, vel eaque
         perferendis porro! Ipsa perspiciatis ea assumenda quo voluptas earum
         voluptate labore adipisci in accusantium pariatur eius velit alias rem,
         eum commodi. Facere fugit culpa, repudiandae commodi molestias velit
         mollitia, soluta ipsam, fuga ullam ex! Optio laboriosam sed inventore
         iusto non, nihil magni incidunt vitae fuga quo voluptatibus
         exercitationem asperiores itaque repellendus animi esse deserunt
         aliquam ducimus suscipit nostrum temporibus, nesciunt accusantium.
         Dolores vitae velit quas laudantium beatae rem sit quam perspiciatis
         mollitia vero soluta ipsum, enim nam asperiores quaerat fuga. Officia
         tenetur aperiam, voluptatum non est enim beatae nostrum animi
         repellendus illum esse incidunt. Ipsam, nulla autem mollitia, tempora
         quis exercitationem, quasi quod aliquid voluptate dicta dignissimos
         pariatur non placeat architecto nam obcaecati culpa perferendis odio
         voluptatum. Facere quibusdam pariatur incidunt eaque soluta quisquam
         magni cumque minima tenetur, at quaerat voluptatum dignissimos dolorem
         neque sapiente deserunt voluptate veniam tempora consectetur veritatis
         quia vitae quidem iusto placeat. Porro esse possimus dicta illum, a,
         exercitationem amet officia ea, ex accusamus placeat tempora dolor
         deleniti beatae architecto cupiditate excepturi quod vitae iste
         necessitatibus. Nulla veritatis deserunt, cum quisquam voluptatibus rem
         ducimus libero aliquid, ea ut iure repellendus beatae eius quidem quae
         eos. Minus quasi quaerat fugiat quis omnis dolor, exercitationem
         voluptas labore, aut pariatur eum, dolorum alias. Quos neque deleniti
         distinctio ex perspiciatis molestiae voluptates porro, vel debitis,
         eius sint in nobis sequi sunt eveniet architecto ea aut molestias
         voluptatibus. Consectetur ratione molestiae cupiditate iste ex nisi!
         Molestiae nemo fugit eum ipsa hic velit! Vitae ratione adipisci
         suscipit. Sit maiores cumque blanditiis suscipit itaque minima nihil
         eaque dolor at, quisquam culpa facere nesciunt tenetur consequuntur
         deleniti excepturi impedit ducimus. Eaque fugiat qui in repudiandae
         dicta nemo dolores fuga ab dolore consequuntur, quo, doloremque ad
         facere! Aut ea qui, tenetur minima libero quaerat, modi doloremque
         eligendi voluptas odit quos rerum natus quibusdam culpa voluptatum
         nobis quidem quasi enim et necessitatibus tempora esse? Minus natus
         unde libero atque officiis, totam quis recusandae doloribus ducimus
         odit perspiciatis sint soluta pariatur velit sequi distinctio quae vero
         ut corrupti obcaecati vel iste et. Autem veritatis quod commodi veniam
         voluptate reiciendis nostrum sapiente fuga consectetur quidem, id alias
         debitis delectus praesentium quo doloremque totam pariatur. Est neque
         sequi aperiam eius ratione, hic quas numquam aliquid. Excepturi
         similique ipsum at cupiditate reiciendis eaque eligendi, vero
         exercitationem harum non voluptatibus aspernatur praesentium ut odit
         minus et ipsam. Suscipit praesentium explicabo, sed cumque provident
         ex, officiis asperiores nesciunt tempora sapiente non esse.
         Exercitationem possimus dolore facere dolorem ullam, quae corporis
         voluptatum quis tenetur sequi illo rerum. Ratione maiores quas id
         quasi, magnam nihil, enim, at obcaecati assumenda alias possimus
         facilis. Vero reprehenderit voluptatibus accusantium tempora earum
         libero, iusto enim rem fugit, aliquam exercitationem nesciunt odio
         doloribus, magnam saepe aut consectetur sint quam harum voluptates
         quae. Nihil reprehenderit quasi quo libero! Culpa quas quae eveniet
         fugiat perferendis quo, repudiandae dolores laboriosam laborum
         voluptatem? Amet veritatis repellat repellendus tempore dolores soluta
         corporis quia itaque facere eveniet, ipsum repudiandae. Perspiciatis
         debitis quidem id facere. Cumque, laboriosam perferendis reiciendis
         vero iste sed animi necessitatibus sapiente. Officia eum repudiandae
         doloribus velit sequi inventore atque natus fugiat itaque ab.
         Voluptatibus rerum molestiae quos fugit sed earum ipsum vel. Magnam,
         officia ad cupiditate odit maxime quaerat nulla distinctio eius non,
         hic vitae voluptatem eum necessitatibus sapiente adipisci! Pariatur
         nisi fuga illo possimus delectus ipsa iste eos harum esse, ducimus
         maiores odio aliquid laborum fugit, quam, vel perspiciatis unde nobis
         perferendis. Animi, non quis ea reprehenderit unde iste itaque
         accusamus debitis pariatur odio aut ratione, molestiae ad hic qui!
         Explicabo ipsum repellendus quia itaque voluptatum iusto, possimus
         facilis laboriosam repudiandae nulla tempore suscipit expedita animi
         quasi nesciunt cum consequatur reprehenderit atque quas qui ratione
         sequi tenetur corrupti. Dolore eius at, minima quis quibusdam ab
         placeat nihil voluptate repellendus. Tempore aliquam excepturi dolor,
         quam atque molestiae est quaerat totam alias magnam, vero consequuntur
         nam cupiditate cum ipsa odit eius sunt, doloribus expedita blanditiis
         recusandae. Alias vitae magnam recusandae illum debitis ad cumque
         cupiditate perferendis libero repudiandae! Accusamus odit corporis,
         laborum sunt rem aliquam voluptas cupiditate beatae perspiciatis iure
         eveniet quae, aspernatur accusantium, consequatur ut libero perferendis
         in mollitia nisi voluptate impedit eos. Ratione corrupti voluptatibus
         animi quaerat vel cumque facilis odit ducimus asperiores corporis
         architecto illum doloribus deserunt temporibus culpa, explicabo minima
         esse quo. Sint alias ad neque reiciendis eum consequuntur blanditiis,
         explicabo facere officia dignissimos doloremque praesentium atque,
         voluptatum assumenda error nemo iste iure quidem recusandae ipsam
         ducimus accusamus in reprehenderit. Magnam, velit nemo incidunt
         deleniti odit necessitatibus facilis id eaque asperiores aut rerum
         suscipit fuga laboriosam qui unde rem illum nesciunt soluta sunt ut
         consectetur saepe dolorem voluptates quidem? Minus, voluptatem sunt
         corporis incidunt voluptate facilis quisquam quaerat ullam laudantium
         ad, ipsum perspiciatis est? Quia, eaque! Quos aliquam error expedita
         veniam ad deleniti, quo excepturi vel illum quisquam corporis
         repellendus sunt, repudiandae perferendis ipsum recusandae suscipit
         molestiae neque tempore dicta exercitationem eum totam earum odit. Quas
         accusamus quasi soluta harum non a repellendus, debitis fugiat
         cupiditate quod officia ducimus quia at iste quibusdam dicta. Quia est
         consequatur eaque totam odio labore laborum cupiditate non praesentium
         iusto libero dolore eos quam at sint inventore sed adipisci optio quis
         a et facere, ipsam ratione facilis! Rem vero id odit eius reiciendis,
         optio atque corporis quas delectus asperiores facere molestias.
         Deleniti suscipit, veniam tempore reiciendis vero quod laboriosam nam
         amet eligendi quam illum fuga soluta! Explicabo officia sunt, nemo
         sapiente iure incidunt cupiditate perspiciatis soluta natus? Unde
         suscipit ducimus, cum earum quae ipsam temporibus eos consectetur
         deleniti cupiditate quas tempora qui, quasi provident est natus
         deserunt amet odio, doloribus quam vel. Saepe aspernatur assumenda
         illum error earum tempora, ab repudiandae? Accusantium omnis facere
         commodi nisi perspiciatis, sequi vero aspernatur doloribus culpa iusto
         voluptatem temporibus neque illum quo nesciunt ipsam esse aliquam natus
         mollitia! Natus dignissimos est totam libero magni rerum ab ipsum
         saepe, consequatur vitae aliquid temporibus architecto similique
         corporis nihil veniam facere nobis. Possimus debitis perferendis
         incidunt nobis, tempore aliquid voluptatum impedit eum pariatur illo
         sunt! Cumque est natus officia odio repellendus ipsum necessitatibus
         aliquid explicabo eveniet dicta debitis consectetur itaque distinctio
         similique doloribus in quam reprehenderit dolorem beatae, quae commodi
         molestiae? Voluptates labore ipsam laudantium eum expedita tenetur
         necessitatibus eaque sed, dolorem similique aut voluptatum totam neque
         quidem quis nemo repudiandae suscipit delectus rem! Iure voluptate enim
         delectus repudiandae quos? Asperiores at numquam libero est, mollitia
         cupiditate fugit facere pariatur, iusto, eligendi illum. Qui non
         dolorum dolorem odio, ipsam aut deserunt, necessitatibus veritatis
         voluptatibus iusto, dolores id culpa. Dolorem illum amet exercitationem
         iste ex ducimus magni beatae, esse ab eos adipisci eum nostrum
         necessitatibus minima. Similique facere odit nisi beatae, dolor sunt
         consectetur adipisci eius sapiente, facilis voluptate magnam
         voluptatibus quod consequuntur possimus molestiae? Laudantium doloribus
         deleniti quisquam, harum temporibus veritatis sunt nobis laborum quae
         ipsam voluptas voluptatem expedita dolor? Minima, neque dignissimos ea
         architecto, optio harum iste obcaecati iusto adipisci nobis odit
         veritatis amet natus reprehenderit itaque. Ipsa ipsum saepe repellendus
         aliquid assumenda architecto delectus, quibusdam voluptates
         dignissimos, unde fuga incidunt perferendis laboriosam sapiente
         obcaecati veritatis? Eum cumque explicabo error pariatur inventore
         perspiciatis aperiam magnam repellat aliquid incidunt, nesciunt
         deserunt corporis numquam assumenda quod ex nulla! Fuga est voluptatem
         maiores ad provident ipsam, ea repellendus illum beatae incidunt, iure
         consequuntur cum aliquid dolorem. Illum cumque inventore nesciunt
         recusandae consequatur sapiente blanditiis suscipit. Repellendus,
         cumque. Possimus, deserunt hic, doloribus atque beatae obcaecati
         repellendus magni rerum, omnis sit odio nihil maxime dolor. Nemo
         voluptates quas vitae accusantium illum tempore porro mollitia maxime
         voluptas magnam quia expedita neque doloribus suscipit ex, nostrum
         reiciendis? Quidem quos sed eius, quod, commodi quas a accusamus
         blanditiis tempora aspernatur dolor dolore eveniet quibusdam ex ipsa!
         Temporibus rerum enim porro architecto autem! Perspiciatis, delectus
         et? Fuga molestiae est saepe laborum. Esse accusantium obcaecati in
         iste sunt animi earum vero rerum consequuntur minus dolore molestiae
         inventore fuga harum iure eos, repellendus corporis id excepturi
         impedit. Delectus voluptas dolore maiores repellendus earum voluptatum.
         Consequatur, esse consectetur tempora rerum quis voluptatem illum
         incidunt ex veritatis totam assumenda quo. Molestias doloremque tenetur
         corporis laboriosam molestiae facilis accusantium eos fuga nisi omnis
         consequatur similique, accusamus ut nostrum, ipsum mollitia dignissimos
         perspiciatis excepturi exercitationem. Necessitatibus eaque vero id
         fugit eligendi, magni doloribus ratione perferendis natus rerum
         repellat dolores harum architecto nobis expedita, quas exercitationem
         explicabo, fuga fugiat possimus esse. Itaque ipsa distinctio rem
         tempore totam ad alias voluptatem inventore tenetur animi saepe iure
         libero placeat quisquam praesentium a nemo maxime aspernatur mollitia
         dolorum nihil, deserunt eligendi blanditiis similique? Obcaecati quasi,
         enim corrupti molestiae maxime iure? Maxime esse unde vero rem quod,
         omnis labore aliquam dolores beatae accusamus delectus perferendis
         doloribus pariatur laudantium nemo odio dignissimos dolorum quis vel
         quam similique ipsa nobis ratione? Dolore fuga neque facere, aliquam
         doloribus aliquid non esse provident sapiente illum error vitae!
         Temporibus vero, molestiae quia debitis voluptatem adipisci, eligendi,
         quibusdam nihil quod in culpa sed atque accusantium corrupti ullam est
         aliquid esse magnam harum voluptatum libero magni ex aliquam fuga.
         Laudantium, velit odit voluptatem id et iure commodi assumenda deserunt
         unde fugit dolor! Quasi eius ratione, dignissimos consectetur minus
         repellat minima magni animi dolore. Aliquam soluta repellendus quisquam
         unde in nulla magni voluptas. Eveniet quasi aperiam magnam commodi
         cupiditate. Id error aliquam obcaecati sapiente, deleniti quibusdam
         enim ea beatae ab delectus soluta. Officiis exercitationem aliquid
         laboriosam voluptatem corporis, expedita dolorem beatae, veniam commodi
         eligendi eum odit modi quam ea provident cumque non sed laudantium
         totam, ducimus ut natus! Delectus dolorum illum quaerat facilis est,
         velit iure molestiae? Sunt, incidunt quod necessitatibus eveniet fugit
         ratione nobis tempora obcaecati consequatur error voluptate? Amet
         accusamus aut voluptas ad illo? Ipsum, vel! Sequi, impedit non
         veritatis nulla ipsum aliquid? Non tempora doloremque ducimus quas hic
         officiis iure exercitationem quam repellendus officia excepturi
         corrupti ea tempore illum blanditiis, aspernatur voluptatibus suscipit
         sint eaque natus odio. Quo obcaecati doloremque quos vitae illo aut
         laboriosam magnam neque, repellendus suscipit incidunt consequatur
         facilis esse voluptatibus, enim facere inventore quas rem cumque itaque
         quis mollitia sunt qui! Eligendi voluptas laudantium nobis asperiores
         nostrum officia provident facere consectetur? Quis impedit recusandae
         ducimus autem perspiciatis omnis et repudiandae sint veniam qui? Ad
         cumque quaerat laudantium odio molestiae exercitationem ullam tenetur
         deleniti nostrum. Quibusdam eaque maiores vel enim. Placeat ut qui
         sequi nemo enim dolorum voluptate facere, labore cumque veritatis
         perferendis dolor magnam! Minima, suscipit dicta?
         {/* <ReactMarkdown
            className="markdown"
            source={data[0].details}
            escapeHtml={false}
         /> */}
      </InitialLayout>
   );
}

export const getStaticProps: GetStaticProps = async (ctx) => {
   // const { data } = await axios.get("http://localhost:1337/main-cover-images");
   return {
      props: { data: "data[0].img[0]" },
   };
};

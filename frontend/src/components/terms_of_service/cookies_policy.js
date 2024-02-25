import { render_term_service_custom_text } from "./utils";

export const get_intro_items = (data) => {
    return {
        intro: {
            ar: `ملفات تعريف الارتباط عبارة عن أجزاء نصية صغيرة يتم استخدامها لتخزين المعلومات على متصفحات الويب. يتم استخدام ملفات تعريف الارتباط لتخزين المعرفات والمعلومات الأخرى واستلامها على أجهزة الكمبيوتر والهواتف المحمولة والأجهزة الأخرى. ويتم استخدام تقنيات أخرى، بما في ذلك البيانات التي نقوم بتخزينها على متصفح الويب أو الجهاز لديّك والمعرفات المرتبطة بجهازك وغير ذلك من البرامج، لأغراض مماثلة. في هذه السياسة، نشير إلى كل هذه التقنيات باسم "ملفات تعريف الارتباط".<br/>نستخدم ملفات تعريف الارتباط إذا كان لديك حساب على ${render_term_service_custom_text(data.site_name || "site_name")} أو كنت تستخدم منتجات ${render_term_service_custom_text(data.site_name || "site_name")} بما في ذلك موقعنا على الويب وتطبيقاتنا، أو عند زيارة مواقع الويب والتطبيقات الأخرى التي تستخدم منتجات ${render_term_service_custom_text(data.site_name || "site_name")}. تتيح ملفات تعريف الارتباط ل${render_term_service_custom_text(data.site_name || "site_name")} إمكانية توفير منتجات ${render_term_service_custom_text(data.site_name || "site_name")} لك والتعرف على المعلومات التي نتلقاها عنك، بما في ذلك المعلومات ذات الصلة باستخدامك لمواقع الويب والتطبيقات الأخرى، بصرف النظر عما إذا كنت قد قمت بالتسجيل أو تسجيل الدخول أم لا.<br/>توضّح هذه السياسة كيفية استخدامنا لملفات تعريف الارتباط والخيارات المتاحة لك. ما لم تنص هذه السياسة على خلاف ذلك، سيتم تطبيق سياسة البيانات على طريقة معالجتنا للبيانات التي نجمعها عبر ملفات تعريف الارتباط.`,
            en: `Cookies are small pieces of text used to store information on web browsers. Cookies are used to store and receive identifiers and other information on computers, phones and other devices. Other technologies, including data that we store on your web browser or device, identifiers associated with your device and other software, are used for similar purposes. In this policy, we refer to all of these technologies as « cookies ».<br/>We use cookies if you have a ${render_term_service_custom_text(data.site_name || "site_name")} account, use the ${render_term_service_custom_text(data.site_name || "site_name")} products, including our website and apps, or visit other websites and apps that use the ${render_term_service_custom_text(data.site_name || "site_name")} products. Cookies enable ${render_term_service_custom_text(data.site_name || "site_name")} to offer the ${render_term_service_custom_text(data.site_name || "site_name")} products to you and to understand the information that we receive about you, including information about your use of other websites and apps, whether or not you are registered or logged in.<br/>This policy explains how we use cookies and the choices you have. Except as otherwise stated in this policy, the Data Policy will apply to our processing of the data that we collect via cookies.`,
            fr: `Les cookies sont de petits éléments de texte qui servent à stocker des informations sur les navigateurs web. Les cookies sont notamment utilisés pour stocker et recevoir des identifiants et d'autres informations sur des appareils comme les ordinateurs ou les téléphones. D'autres technologies, dont les données que nous stockons sur votre navigateur web ou sur votre appareil, les identifiants associés à votre appareil et d'autres logiciels, sont utilisées dans des buts similaires. Dans la présente politique, nous désignons toutes ces technologies par le terme « cookies ».<br/>Nous utilisons des cookies si vous avez un compte ${render_term_service_custom_text(data.site_name || "site_name")}, si vous utilisez les produits ${render_term_service_custom_text(data.site_name || "site_name")}, y compris notre site web et nos applications, ou si vous consultez d'autres sites web et applications qui ont recours aux produits ${render_term_service_custom_text(data.site_name || "site_name")}. Les cookies permettent à ${render_term_service_custom_text(data.site_name || "site_name")} de vous proposer les produits ${render_term_service_custom_text(data.site_name || "site_name")} et de comprendre les informations reçues de votre part, notamment les informations concernant votre utilisation des autres sites web et applications, que vous soyez ou non inscrit ou connecté.<br/>La présente politique explique comment nous utilisons les cookies et présente les choix dont vous disposez à cet égard. Sauf indication contraire dans la présente politique, la Politique d'utilisation des données s'appliquera à nos traitements des données que nous recueillons au moyen des cookies.`,
        },
        items: [
            {
                title: {
                    ar: "لماذا نستخدم ملفات تعريف الارتباط؟",
                    en: "Why do we use cookies?",
                    fr: "Pourquoi utilisons-nous des cookies ?",
                },
                intro: {
                    ar: `تساعدنا ملفات تعريف الارتباط على توفير منتجات ${render_term_service_custom_text(data.site_name || "site_name")} وحمايتها وتحسينها، على سبيل المثال، عن طريق إضفاء طابع شخصي على المحتوى وتخصيص الإعلانات وقياسها وتقديم تجربة أكثر أمانًا. تتضمن ملفات تعريف الارتباط التي نستخدمها ملفات تعريف ارتباط الجلسات، والتي يتم حذفها عند إغلاق المتصفح، وملفات تعريف الارتباط الدائمة، والتي تبقى على المتصفح حتى تنتهي صلاحيتها أو يتم حذفها. ونظرًا لتغير أسماء ملفات تعريف الارتباط التي نستخدمها من حين لآخر أثناء تحسين منتجات ${render_term_service_custom_text(data.site_name || "site_name")} التي نقدمها وتحديثها، نستخدم ملفات تعريف الارتباط للأغراض التالية:`,
                    en: `Cookies help us provide, protect and improve the ${render_term_service_custom_text(data.site_name || "site_name")} products, such as by personalising content, tailoring and measuring ads, and providing a safer experience. The cookies that we use include session cookies, which are deleted when you close your browser, and persistent cookies, which stay in your browser until they expire or you delete them. While the cookies that we use may change from time to time as we improve and update the ${render_term_service_custom_text(data.site_name || "site_name")} products, we use them for the following purposes:`,
                    fr: `Les cookies nous aident à proposer, à protéger et à améliorer les produits ${render_term_service_custom_text(data.site_name || "site_name")} (par exemple en personnalisant le contenu), ainsi qu'à adapter et à mesurer les publicités, et à offrir une expérience plus sûre. Les cookies que nous utilisons comprennent des cookies de session, qui sont supprimés lorsque vous fermez votre navigateur, et des cookies permanents, qui restent sur votre navigateur jusqu'à ce qu'ils expirent ou que vous les supprimiez. Bien que les cookies que nous utilisons puissent changer au fil des améliorations et des mises à jour des produits ${render_term_service_custom_text(data.site_name || "site_name")}, nous les utilisons aux fins suivantes :`,
                },
                paragraphs: [
                    {
                        ar: `<b>المصادقة</b>`,
                        en: `<b>Authentication</b>`,
                        fr: `<b>Authentification</b>`,
                        list_items: [
                            {
                                ar: `نستخدم ملفات تعريف الارتباط للتحقق من حسابك وتحديد وقت تسجيل دخولك، و ذلك حتى نتمكن من جعل عملية وصولك إلى منتجات ${render_term_service_custom_text(data.site_name || "site_name")} أكثر سهولة بالإضافة إلى منحك الميزات وتجربة الاستخدام المناسبة.`,
                                en: `We use cookies to verify your account and determine when you're logged in so that we can make it easier for you to access the ${render_term_service_custom_text(data.site_name || "site_name")} products and show you the appropriate experience and features.`,
                                fr: `Nous utilisons des cookies pour vérifier votre compte et pour déterminer les moments où vous êtes connecté, de façon à faciliter votre accès aux produits ${render_term_service_custom_text(data.site_name || "site_name")} et à vous proposer une expérience et des fonctionnalités adaptées à votre utilisation.`,
                            },
                        ],
                    },
                    {
                        ar: `<b>الأمان والموقع وسلامة المنتج</b>`,
                        en: `<b>Security, site and product integrity</b>`,
                        fr: `<b>Sécurité du site et intégrité des produits</b>`,
                        list_items: [
                            {
                                ar: `نستخدم ملفات تعريف الارتباط للمساعدة في الحفاظ على أمان الحساب والبيانات ومنتجات ${render_term_service_custom_text(data.site_name || "site_name")} وسلامتها.`,
                                en: `We use cookies to help us keep your account, data and the ${render_term_service_custom_text(data.site_name || "site_name")} products safe and secure.`,
                                fr: `Nous utilisons des cookies pour garantir la sécurité de votre compte, de vos données et des produits ${render_term_service_custom_text(data.site_name || "site_name")}.`,
                            },
                            {
                                ar: `نستخدم أيضًا ملفات تعريف الارتباط لمواجهة الأنشطة التي تمثل انتهاكًا لسياساتنا أو التي تحد من قدرتنا على تقديم منتجات ${render_term_service_custom_text(data.site_name || "site_name")} بكفاءة.`,
                                en: `We also use cookies to combat activity that violates our policies or otherwise degrades our ability to provide the ${render_term_service_custom_text(data.site_name || "site_name")} products.`,
                                fr: `Les cookies nous permettent également de lutter contre les activités qui enfreignent nos politiques ou qui dégradent notre capacité à fournir les produits ${render_term_service_custom_text(data.site_name || "site_name")}.`,
                            },
                        ],
                    },
                    {
                        ar: `<b>الإعلان والتوصيات والرؤى والقياس</b>`,
                        en: `<b>Advertising, recommendations, insights and measurement</b>`,
                        fr: `<b>Publicités, recommandations, statistiques et mesures</b>`,
                        list_items: [
                            {
                                ar: `نستخدم ملفات تعريف الارتباط لتساعدنا على عرض إعلانات الأنشطة التجارية وغيرها من المؤسسات وعرض توصيات خاصة بها أمام الأشخاص الذين يُحتمل اهتمامهم بالمنتجات أو الخدمات أو القضايا التي يروجون لها.`,
                                en: `We use cookies to help us show ads and to make recommendations for businesses and other organisations to people who may be interested in the products, services or causes they promote.`,
                                fr: `Nous utilisons des cookies afin de proposer des publicités et de faire des recommandations pour des entreprises et d'autres organisations à des gens qui pourraient être intéressés par leurs produits, leurs services ou les causes qu'elles soutiennent.`,
                            },
                        ],
                    },
                    {
                        ar: `<b>ميزات وخدمات الموقع</b>`,
                        en: `<b>Site features and services</b>`,
                        fr: `<b>Fonctionnalités et services du site</b>`,
                        list_items: [
                            {
                                ar: `نستخدم ملفات تعريف الارتباط لتمكين الوظيفة التي تساعدنا على تقديم منتجات ${render_term_service_custom_text(data.site_name || "site_name")}.`,
                                en: `We use cookies to enable the functionality that helps us provide the ${render_term_service_custom_text(data.site_name || "site_name")} products.`,
                                fr: `Nous utilisons des cookies pour mettre en place des fonctionnalités qui nous aident à proposer les produits ${render_term_service_custom_text(data.site_name || "site_name")}.`,
                            },
                            {
                                ar: `كما نستخدم ملفات تعريف الارتباط أيضًا للمساعدة في تزويدك بالمحتوى الذي يتناسب مع لغتك وإعداداتك المحلية.`,
                                en: `We also use cookies to help provide you with content relevant to your locale.`,
                                fr: `Nous utilisons également des cookies pour vous proposer un contenu qui correspond à votre région.`,
                            },
                        ],
                    },
                    {
                        ar: `<b>الأداء</b>`,
                        en: `<b>Performance</b>`,
                        fr: `<b>Performance</b>`,
                        list_items: [
                            {
                                ar: `نستخدم ملفات تعريف الارتباط لتوفير أفضل تجربة استخدام ممكنة.`,
                                en: `We use cookies to provide you with the best experience possible.`,
                                fr: `Les cookies nous servent à rendre votre utilisation du site aussi agréable que possible.`,
                            },
                        ],
                    },
                    {
                        ar: `<b>التحليلات والبحث</b>`,
                        en: `<b>Analytics and research</b>`,
                        fr: `<b>Analyse et recherche</b>`,
                        list_items: [
                            {
                                ar: `نستخدم ملفات تعريف الارتباط من أجل فهم طبيعة استخدام الأشخاص لمنتجات ${render_term_service_custom_text(data.site_name || "site_name")} حتى نتمكن من تحسينها لهم.`,
                                en: `We use cookies to better understand how people use the ${render_term_service_custom_text(data.site_name || "site_name")} products so that we can improve them.`,
                                fr: `Nous utilisons des cookies pour mieux comprendre comment les gens se servent des produits ${render_term_service_custom_text(data.site_name || "site_name")}, afin de pouvoir les améliorer.`,
                            },
                        ],
                    },
                    {
                        ar: `<b>مواقع الويب والتطبيقات الخارجية</b>`,
                        en: `<b>Third-party websites and apps</b>`,
                        fr: `<b>Sites web et applications externes</b>`,
                        list_items: [
                            {
                                ar: `قد يختار شركاء الأعمال التابعين لنا أيضًا مشاركة المعلومات مع ${render_term_service_custom_text(data.site_name || "site_name")} من ملفات تعريف الارتباط التي تم تعيينها في نطاقات مواقع الويب الخاصة بهم، سواء كان لديك حساب على ${render_term_service_custom_text(data.site_name || "site_name")} أم لا أو سجلت دخولك أم لا. وعلى وجه التحديد، قد يتم تعيين ملفات تعريف الارتباط التي تحمل اسم _hkc على نطاق شريك أعمال ${render_term_service_custom_text(data.site_name || "site_name")} الذي تزور موقعه. وعلى عكس ملفات تعريف الارتباط التي يتم تعيينها على النطاقات الخاصة ب${render_term_service_custom_text(data.site_name || "site_name")}، لا يمكن الوصول إلى ملفات تعريف الارتباط هذه بواسطة ${render_term_service_custom_text(data.site_name || "site_name")} عندما تزور موقعًا آخر غير الموقع الذي تم تعيين ملفات تعريف الارتباط عليه، بما في ذلك عندما تكون على أحد نطاقاتنا. وتخدم نفس أغراض ملفات تعريف الارتباط التي يتم تعيينها في النطاق الخاص ب${render_term_service_custom_text(data.site_name || "site_name")}، والتي تهدف إلى إضفاء طابع شخصي على المحتوى (بما في ذلك الإعلانات)، وقياس أدائها، وتوفير التحليلات، وتجربة أكثر أمانًا، كما هو موضح في سياسة ملفات تعريف الارتباط هذه.`,
                                en: `Our business partners may also choose to share information with ${render_term_service_custom_text(data.site_name || "site_name")} from cookies set in their own websites' domains, whether or not you have a ${render_term_service_custom_text(data.site_name || "site_name")} account or are logged in. Specifically, cookies named _hkc may be set on the domain of the ${render_term_service_custom_text(data.site_name || "site_name")} business partner whose site you're visiting. Unlike cookies that are set on ${render_term_service_custom_text(data.site_name || "site_name")}'s own domains, these cookies aren't accessible by ${render_term_service_custom_text(data.site_name || "site_name")} when you're on a site other than the one on which they were set, including when you are on one of our domains. They serve the same purposes as cookies set in ${render_term_service_custom_text(data.site_name || "site_name")}'s own domain, which are to personalise content (including ads), measure ads, produce analytics and provide a safer experience, as set out in this Cookies Policy.`,
                                fr: `Nos partenaires commerciaux peuvent également choisir de partager leurs informations avec ${render_term_service_custom_text(data.site_name || "site_name")} à l'aide de cookies placés sur les domaines de leurs propres sites web, que vous ayez ou non un compte ${render_term_service_custom_text(data.site_name || "site_name")} ou que vous soyez connecté(e) ou non. Plus précisément, des cookies nommés _hkc peuvent être placés sur le domaine du partenaire commercial de ${render_term_service_custom_text(data.site_name || "site_name")} dont vous consultez le site. Contrairement aux cookies installés sur les domaines appartenant à ${render_term_service_custom_text(data.site_name || "site_name")}, ${render_term_service_custom_text(data.site_name || "site_name")} ne peut pas accéder à ces cookies lorsque vous êtes sur un autre site que celui sur lequel ils sont installés, y compris lorsque vous vous trouvez sur l'un de nos domaines. Ils ont les mêmes fonctions que les cookies placés sur les domaines de ${render_term_service_custom_text(data.site_name || "site_name")}, c'est-à-dire de personnaliser le contenu (y compris les publicités), d'adapter et de mesurer les publicités, de produire des données d'analyse et de proposer une expérience plus sécurisée, comme indiqué en détail dans cette Politique d'utilisation des cookies.`,
                            },
                        ],
                    },
                ]
            },
            {
                title: {
                    ar: "أين نستخدم ملفات تعريف الارتباط؟",
                    en: "Where do we use cookies?",
                    fr: "Quand utilisons-nous des cookies ?",
                },
                intro: {
                    ar: `يجوز لنا وضع ملفات تعريف الارتباط على جهاز الكمبيوتر أو أي جهاز آخر تستخدمه واستلام المعلومات التي يتم تخزينها داخل تلك الملفات، وذلك عند استخدام أو زيارة:`,
                    en: `We may place cookies on your computer or device and receive information stored in cookies when you use or visit:`,
                    fr: `Nous pouvons placer des cookies sur votre ordinateur ou votre appareil et recevoir les informations stockées dans des cookies lorsque vous utilisez ou consultez :`,
                },
                paragraphs: [
                    {
                        ar: `منتجات ${render_term_service_custom_text(data.site_name || "site_name")}`,
                        en: `The ${render_term_service_custom_text(data.site_name || "site_name")} products;`,
                        fr: `Les produits ${render_term_service_custom_text(data.site_name || "site_name")} ;`,
                    },
                    {
                        ar: `مواقع الويب والتطبيقات التي توفرها الشركات الأخرى التي تستخدم منتجات ${render_term_service_custom_text(data.site_name || "site_name")}. تستخدم ${render_term_service_custom_text(data.site_name || "site_name")} ملفات تعريف الارتباط وتتلقى المعلومات عند زيارتك لمواقع الويب والتطبيقات هذه، بما في ذلك معلومات الجهاز والمعلومات ذات الصلة بنشاطك، دون مطالبتك باتخاذ أي إجراء. ويتم ذلك كله بصرف النظر عما إذا كان لديك حساب على ${render_term_service_custom_text(data.site_name || "site_name")} أم لا، أو كنت قد قمت بتسجيل الدخول إلى ${render_term_service_custom_text(data.site_name || "site_name")} أم لا.`,
                        en: `Websites and apps provided by other companies that use the ${render_term_service_custom_text(data.site_name || "site_name")} products. ${render_term_service_custom_text(data.site_name || "site_name")} uses cookies and receives information when you visit those sites and apps, including device information and information about your activity, without any further action from you. This occurs whether or not you have a ${render_term_service_custom_text(data.site_name || "site_name")} account or are logged in.`,
                        fr: `Des sites web et des applications proposés par d'autres entreprises qui utilisent les produits ${render_term_service_custom_text(data.site_name || "site_name")}. ${render_term_service_custom_text(data.site_name || "site_name")} utilise des cookies et reçoit des informations lorsque vous consultez ces sites et ces applications, notamment des informations sur les appareils et des informations à propos de votre activité, sans autre action de votre part. Cela se produit que vous ayez ou non un compte ${render_term_service_custom_text(data.site_name || "site_name")} et que vous soyez ou non connecté.`,
                    },
                ]
            },
            {
                title: {
                    ar: `هل تستخدم الشركات الأخرى ملفات تعريف الارتباط فيما يتعلق بمنتجات ${render_term_service_custom_text(data.site_name || "site_name")}`,
                    en: `Do other companies use cookies in connection with the ${render_term_service_custom_text(data.site_name || "site_name")} products?`,
                    fr: `D'autres entreprises utilisent-elles des cookies en lien avec les produits ${render_term_service_custom_text(data.site_name || "site_name")} ?`,
                },
                intro: {
                    ar: `نعم، تستخدم الشركات الأخرى ملفات تعريف الارتباط على منتجات ${render_term_service_custom_text(data.site_name || "site_name")} لتقديم خدمات الإعلانات والقياس والتسويق والتحليلات إلينا، ولتوفير ميزات معينة وتحسين خدماتنا من أجلك.<br/>تستخدم الشركات الخارجية أيضًا ملفات تعريف الارتباط في مواقعها على الويب وتطبيقاتها فيما يتعلق بمنتجات ${render_term_service_custom_text(data.site_name || "site_name")}. لفهم كيفية استخدام الشركات الأخرى لملفات تعريف الارتباط، يرجى مراجعة سياسات الخصوصية لكل منها.`,
                    en: `Yes, other companies use cookies on the ${render_term_service_custom_text(data.site_name || "site_name")} products to provide advertising, measurement, marketing and analytics services to us, and to provide certain features and improve our services for you.<br/>Third-party companies also use cookies on their own sites and apps in connection with the ${render_term_service_custom_text(data.site_name || "site_name")} products. To understand how other companies use cookies, please review their policies.`,
                    fr: `Oui, d'autres entreprises utilisent des cookies sur les produits ${render_term_service_custom_text(data.site_name || "site_name")} pour nous fournir des services de publicité, de mesure, de marketing et d'analyse, ainsi que pour fournir certaines fonctionnalités et améliorer nos services pour vous.<br/>Des entreprises tierces peuvent également utiliser des cookies sur leurs propres sites et applications en lien avec les produits ${render_term_service_custom_text(data.site_name || "site_name")}. Pour comprendre comment ces entreprises utilisent les cookies, veuillez consulter leurs politiques.`,
                },
                paragraphs: [

                ],
            },
            {
                title: {
                    ar: "كيف يمكنك التحكم في معلوماتك؟",
                    en: "How can you control your information?",
                    fr: "Comment pouvez-vous contrôler vos informations ?",
                },
                intro: {
                    ar: `نستخدم ملفات تعريف الارتباط لإضفاء طابع شخصي على المحتوى والخدمات وتحسينها، وتوفير تجربة أكثر أمنًا وعرض إعلانات مفيدة وملائمة لك داخل ${render_term_service_custom_text(data.site_name || "site_name")} وخارجه. يمكنك التحكم في طريقة استخدامنا للبيانات لعرض الإعلانات عليك وغير ذلك باستخدام الأدوات الموضّحة أدناه.`,
                    en: `We use cookies to help personalise and improve content and services, provide a safer experience and to show you useful and relevant ads on and off ${render_term_service_custom_text(data.site_name || "site_name")}. You can control how we use data to show you ads and more by using the tools described below.`,
                    fr: `Nous utilisons des cookies pour vous aider à personnaliser et améliorer le contenu et les services, fournir une expérience plus sécurisée et vous montrer des publicités utiles et pertinentes sur ${render_term_service_custom_text(data.site_name || "site_name")} et en dehors. Vous pouvez contrôler la manière dont nous exploitons les données pour vous proposer des publicités et plus, grâce aux outils décrits ci-dessous.`,
                },
                paragraphs: [
                    {
                        ar: `<b>عناصر التحكم في ملفات تعريف الارتباط للمتصفح:</b>`,
                        en: `<b>Browser cookie controls:</b>                        `,
                        fr: `<b>Contrôle des cookies de navigateur :</b>`,
                        list_items: [
                            {
                                ar: `قد يوفر المتصفح أو الجهاز مجموعة من الإعدادات التي يمكنك من خلالها اختيار تعيين ملفات تعريف الارتباط للمتصفح أو حذفها. تتنوع عناصر التحكم حسب المتصفح، وقد تقوم الجهات المصنّعة بتغيير الإعدادات التي يوفرونها وكيفية عمل تلك الإعدادات في أي وقت. يمكنك العثور على معلومات إضافية عن عناصر التحكم التي توفرها المتصفحات الشهيرة في روابطها. قد لا تعمل بعض أجزاء منتجات ${render_term_service_custom_text(data.site_name || "site_name")} بشكل صحيح في حالة تعطيل استخدام ملفات تعريف الارتباط بالمتصفح. يرجى العلم بأن عناصر التحكم تلك تختلف عن عناصر التحكم التي يوفرها ${render_term_service_custom_text(data.site_name || "site_name")} لك.`,
                                en: `Your browser or device may offer settings that allow you to choose whether browser cookies are set and to delete them. These controls vary by browser, and manufacturers may change both the settings that they make available and how they work at any time. You may find additional information about the controls offered by popular browsers at it's links. Certain parts of the ${render_term_service_custom_text(data.site_name || "site_name")} products may not work properly if you have disabled browser cookie use. Please be aware that these controls are distinct from the controls that ${render_term_service_custom_text(data.site_name || "site_name")} offers you.`,
                                fr: `De plus, votre navigateur ou votre appareil propose peut-être des paramètres vous permettant de choisir si les cookies du navigateur sont activés et de les supprimer. Ces contrôles varient en fonction du navigateur et les fabricants peuvent modifier les paramètres disponibles et le fonctionnement de ceux-ci à tout moment. Vous pouvez trouver des informations supplémentaires sur les contrôles proposés par les navigateurs les plus populaires en consultant leurs liens. Certaines parties des produits ${render_term_service_custom_text(data.site_name || "site_name")} peuvent ne pas fonctionner correctement si vous avez désactivé l'utilisation des cookies dans votre navigateur. Soyez conscient que ces contrôles sont distincts de ceux que ${render_term_service_custom_text(data.site_name || "site_name")} vous propose.`,
                            },
                        ],
                    },
                ]
            },
        ]
    };
};

import { render_term_service_custom_text } from "./utils";

export const get_intro_items = (data) => {
    return {
        intro: {
            ar: `توضح هذه السياسة المعلومات التي نتولى معالجتها بهدف دعم ${render_term_service_custom_text(data.site_name || "site_name")} وغيرها من المنتجات والميزات التي تقدمها شركة ${render_term_service_custom_text(data.company_name || "company_name")}.`,
            en: `This Policy describes the information we process to support ${render_term_service_custom_text(data.site_name || "site_name")} and other products and features offered by ${render_term_service_custom_text(data.company_name || "company_name")}.`,
            fr: `La présente politique décrit les informations que nous traitons pour le fonctionnement de ${render_term_service_custom_text(data.site_name || "site_name")} et d'autres fonctionnalités et produits proposés par ${render_term_service_custom_text(data.company_name || "company_name")}.`,
        },
        items: [
            {
                title: {
                    ar: "ما أنواع المعلومات التي نجمعها؟",
                    en: "What kinds of information do we collect?",
                    fr: "Quels types d'informations recueillons-nous ?",
                },
                intro: {
                    ar: `حتى نتمكن من توفير خدمات ${render_term_service_custom_text(data.site_name || "site_name")}، يجب علينا معالجة معلومات عنك. وتعتمد أنواع المعلومات التي نجمعها على طبيعة استخدامك لمنتجاتنا.`,
                    en: `To provide the ${render_term_service_custom_text(data.site_name || "site_name")} services, we must process information about you. The type of information that we collect depends on how you use our products.`,
                    fr: `Pour fournir les services ${render_term_service_custom_text(data.site_name || "site_name")}, nous devons traiter des informations vous concernant. Les types d'informations que nous recueillons dépendent de la manière dont vous utilisez nos produits.`,
                },
                paragraphs: [
                    {
                        ar: `<b>الأمور التي تقوم بها وتقدم معلومات عنها.</b>`,
                        en: `<b>Things that you do and provide.</b>`,
                        fr: `<b>Informations et contenus que vous fournissez.</b>`,
                        list_items: [
                            {
                                ar: `<b>المعلومات وعناصر المحتوى التي تقدمها.</b> نجمع عناصر المحتوى والاتصالات والمعلومات الأخرى التي توفرها عند استخدام منتجاتنا، بما في ذلك عند قيامك بالتسجيل للحصول على حساب. ويمكن لذلك أن يتضمن المعلومات الموجودة في المحتوى الذي توفره أو معلومات عن هذا المحتوى (كبيانات التعريف) مثل موقع صورة وتاريخ إنشاء الملف. تقوم أنظمتنا تلقائيًا بمعالجة المحتوى والاتصالات التي تقدمها أنت والآخرون لتحليل السياق وما يتضمنه المحتوى والاتصالات للأغراض الموضّحة أدناه.`,
                                en: `<b>Information and content you provide.</b> We collect the content, communications and other information you provide when you use our products, including when you sign up for an account, create or share content and message or communicate with others. Our systems automatically process content and communications that you and others provide to analyse context and what's in them for the purposes described below.`,
                                fr: `<b>Informations et contenus que vous fournissez.</b> Nous recueillons le contenu, les communications ainsi que d'autres informations que vous fournissez lorsque vous utilisez nos produits, notamment lorsque vous créez un compte. Nos systèmes traitent automatiquement le contenu et les communications que vous et d'autres fournissez afin d'analyser le contexte et ce qu'ils contiennent aux fins décrites ci-dessous.`,
                            },
                            {
                                ar: `<b>استخدامك.</b> نجمع المعلومات التي تتعلق باستخدامك لمنتجاتنا، مثل أنواع المحتوى التي تعرضها أو تتفاعل معها والميزات التي تستخدمها وكذلك أوقات الأنشطة التي تقوم بها ومعدل تكرارها والمدة الزمنية لها. على سبيل المثال، نقوم بتسجيل وقت استخدامك لمنتجاتنا ومتى كانت آخر مرة قمت فيها باستخدامها.`,
                                en: `<b>Your usage.</b> We collect information about how you use our products, such as the types of content that you view or engage with, the features you use, the actions you take, frequency and duration of your activities. For example, we log when you're using and have last used our products.`,
                                fr: `<b>Votre utilisation.</b> Nous recueillons des informations concernant la manière dont vous utilisez nos produits, telles que les types de contenu que vous consultez ou avec lesquels vous interagissez, les fonctionnalités que vous utilisez, les actions que vous réalisez, et l'heure, la fréquence et la durée de vos activités. Par exemple, nous enregistrons quand vous utilisez et quand vous avez utilisé pour la dernière fois nos produits.`,
                            },
                        ],
                    },
                    {
                        ar: `<b>معلومات الجهاز.</b>`,
                        en: `<b>Device information.</b>`,
                        fr: `<b>Informations sur les appareils.</b>`,
                        list_items: [
                            {
                                ar: `كما هو موضح أدناه، نجمع معلومات من وعن أجهزة الكمبيوتر والهواتف المحمولة وأجهزة التلفزيون المتصلة بالإنترنت والأجهزة الأخرى المتصلة بالإنترنت التي تستخدمها للوصول إلى منتجاتنا ونجمع هذه المعلومات عبر مختلف الأجهزة التي تستخدمها. على سبيل المثال، نستخدم المعلومات التي يتم تجميعها وتتعلق باستخدامك لمنتجاتنا من هاتفك بهدف إضفاء طابع شخصي أفضل على المحتوى (بما في ذلك الإعلانات) أو الميزات التي تظهر لك عند استخدام منتجاتنا على جهاز آخر، مثل كمبيوتر محمول أو جهاز لوحي، أو بهدف قياس ما إذا كنت قد اتخذت إجراء استجابةً لإعلان قمنا بعرضه عليك في هاتفك أو عبر جهاز آخر. تتضمن المعلومات التي نحصل عليها من هذه الأجهزة على ما يلي:`,
                                en: `As described below, we collect information from and about the computers, phones, connected TVs and other web-connected devices you use that integrate with our products, and we combine this information across different devices that you use. For example, we use information collected about your use of our products on your phone to better personalise the content (including ads) or features that you see when you use our products on another device, such as your laptop or tablet, or to measure whether you took an action in response to an ad that we showed you on your phone on a different device. Information that we obtain from these devices includes:`,
                                fr: `Comme décrit ci-dessous, nous recueillons des informations concernant les ordinateurs, téléphones, téléviseurs connectés et autres appareils connectés au web que vous utilisez et qui s'intègrent à nos produits et depuis lesdits appareils, et nous combinons ces informations sur les différents appareils que vous utilisez. Par exemple, nous utilisons les informations recueillies concernant votre utilisation de nos produits sur votre téléphone afin de mieux personnaliser le contenu (notamment les publicités) ou les fonctionnalités qui s'affichent lorsque vous utilisez nos produits sur un autre appareil, notamment votre ordinateur portable ou votre tablette, ou afin d'évaluer si vous avez effectué sur un autre appareil une action en réaction à une publicité que nous vous avions montrée sur votre téléphone. Les informations que nous obtenons de ces appareils comprennent :`,
                                sub_list_items: [
                                    {
                                        ar: `<b>سمات الجهاز:</b> معلومات مثل نظام التشغيل والأجهزة وإصدارات البرامج ومستوى شحن البطارية وقوة الإشارة ومساحة التخزين المتوفرة ونوع المتصفح وأسماء وأنواع التطبيقات والملفات والمكونات الإضافية.`,
                                        en: `<b>Device attributes:</b> information such as the operating system, hardware and software versions, battery level, signal strength, available storage space, browser type, app and file names and types, and plugins.`,
                                        fr: `<b>Attributs des appareils :</b> des informations telles que le système d'exploitation, les versions matérielles et logicielles, le niveau de batterie, l'intensité du signal, l'espace de stockage disponible, le type de navigateur, le nom et le type des applications et des fichiers, ainsi que les plugins.`,
                                    },
                                    {
                                        ar: `<b>عمليات تشغيل الجهاز:</b> المعلومات التي تتعلق بعمليات التشغيل والسلوكيات التي يتم إجراؤها على الجهاز، على سبيل المثال هل يتم عرض الإطار في المقدمة أم يتم إرساله إلى الخلفية، أو حركات الماوس (والتي يمكن أن تساعد في تمييز المستخدمين البشريين من البرامج التلقائية).`,
                                        en: `<b>Device operations:</b> information about operations and behaviours performed on the device, such as whether a window is in the foreground or background, or mouse movements (which can help distinguish humans from bots).`,
                                        fr: `<b>Activités sur l'appareil :</b> les informations concernant les opérations et les comportements sur l'appareil, par exemple, lorsqu'une fenêtre est mise au premier plan ou en arrière plan, ainsi que les mouvements de la souris (permettant de différencier les humains des bots).`,
                                    },
                                    {
                                        ar: `<b>المعرفات:</b> المعرفات الفريدة ومعرفات الأجهزة وغيرها من المعرفات، مثل معرفات الألعاب أو التطبيقات أو الحسابات التي تستخدمها، ومعرفات الجهاز العائلي (أو غيرها من المعرفات الفريدة بالنسبة إلى منتجات ${render_term_service_custom_text(data.site_name || "site_name")} التي ترتبط بنفس الجهاز أو الحساب).`,
                                        en: `<b>Identifiers:</b> unique identifiers, device IDs and other identifiers, such as from games, apps or accounts that you use, and Family Device IDs (or other identifiers unique to ${render_term_service_custom_text(data.site_name || "site_name")} products associated with the same device or account).`,
                                        fr: `<b>Identifiants :</b> les identifiants uniques, identifiants d'appareils et autres identifiants, notamment ceux provenant de jeux, d'applications ou de comptes que vous utilisez, et les identifiants d'appareils familiaux (ou autres identifiants propres aux produits des entités ${render_term_service_custom_text(data.site_name || "site_name")} associés à un même appareil ou compte).`,
                                    },
                                    {
                                        ar: `<b>إشارات الجهاز:</b> إشارات Bluetooth والمعلومات التي تتعلق بأقرب نقاط وصول إلى Wi-Fi أو الإشارات الخاصة به أو أبراج الهواتف الخلوية.`,
                                        en: `<b>Device signals:</b> Bluetooth signals, information about nearby Wi-Fi access points, beacons and mobile phone masts.`,
                                        fr: `<b>Signaux des appareils :</b> signaux Bluetooth et informations concernant les points d'accès Wi-Fi, les balises et les tours de télécommunication à proximité.`,
                                    },
                                    {
                                        ar: `<b>بيانات من إعدادات الجهاز:</b> المعلومات التي تسمح لنا بتلقيها من إعدادات الجهاز التي تقوم بتشغيلها، مثل الوصول إلى موقعك عبر نظام تحديد المواقع العالمي "GPS" أو الكاميرا أو الصور.`,
                                        en: `<b>Data from device settings:</b> information you allow us to receive through device settings that you turn on, such as access to your GPS location, camera or photos.`,
                                        fr: `<b>Données issues des paramètres de l'appareil :</b> les informations que vous nous autorisez à recevoir par le biais des paramètres de l'appareil que vous activez, notamment l'accès à votre localisation GPS, à votre appareil photo ou à vos photos.`,
                                    },
                                    {
                                        ar: `<b>الشبكة وعمليات الاتصال:</b> معلومات مثل اسم شركة تشغيل هاتفك المحمول أو موفر خدمة الإنترنت واللغة والمنطقة الزمنية ورقم الهاتف المحمول وعنوان IP وسرعة الاتصال بالإنترنت، و في بعض الحالات، معلومات حول الأجهزة الأخرى الموجودة بالجوار أو المتصلة بنفس الشبكة التي تستخدمها.`,
                                        en: `<b>Network and connections:</b>  information such as the name of your mobile operator or ISP, language, time zone, mobile phone number, IP address, connection speed and, in some cases, information about other devices that are nearby or on your network.`,
                                        fr: `<b>Réseau et connexion :</b> des informations telles que le nom de votre opérateur mobile ou de votre fournisseur d'accès à Internet, votre langue, votre fuseau horaire, votre numéro de téléphone mobile, votre adresse IP, votre vitesse de connexion et, dans certains cas, des informations concernant d'autres appareils situés à proximité ou sur votre réseau.`,
                                    },
                                    {
                                        ar: `<b>بيانات ملفات تعريف الارتباط:</b> البيانات التي يتم تخزينها من ملفات تعريف الارتباط على جهازك، بما في ذلك معرفات ملفات تعريف الارتباط والإعدادات.`,
                                        en: `<b>Cookie data:</b> data from cookies stored on your device, including cookie IDs and settings.`,
                                        fr: `<b>Données issues des cookies :</b> données provenant des cookies enregistrés sur votre appareil, notamment les identifiants et paramètres des cookies.`,
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        ar: `<b>معلومات من الشركاء.</b>`,
                        en: `<b>Information from partners.</b>`,
                        fr: `<b>Informations fournies par les partenaires.</b>`,
                        list_items: [
                            {
                                ar: `...`,
                                en: `...`,
                                fr: `...`,
                            },
                        ],
                    },
                ]
            },
            {
                title: {
                    ar: "كيف نستخدم هذه المعلومات؟",
                    en: "How do we use this information?",
                    fr: "Comment utilisons-nous ces informations ?",
                },
                intro: {
                    ar: `نستخدم المعلومات التي نحصل عليها (وفقًا للاختيارات التي تحددها) بهدف توفير ودعم منتجات ${render_term_service_custom_text(data.site_name || "site_name")} والخدمات المرتبطة بها. وفيما يلي طريقة القيام بذلك:`,
                    en: `We use the information that we have (subject to choices you make) to provide and support the ${render_term_service_custom_text(data.site_name || "site_name")} products and related services. Here's how:`,
                    fr: `Nous utilisons les informations à notre disposition (en fonction des choix que vous effectuez) afin de fournir et d'assurer le fonctionnement des produits ${render_term_service_custom_text(data.site_name || "site_name")} et les services associés. Nous procédons comme suit :`,
                },
                paragraphs: [
                    {
                        ar: `<b>توفير منتجاتنا وإضفاء طابع شخصي عليها وتحسينها.</b>`,
                        en: `<b>Provide, personalise and improve our products.</b>`,
                        fr: `<b>Proposer, personnaliser et améliorer nos produits.</b>`,
                        list_items: [
                            {
                                ar: `نستخدم المعلومات التي نحصل عليها من أجل توفير منتجاتنا، وهو ما يتضمن إضفاء طابع شخصي على الميزات والمحتوى وتقديم الاقتراحات إليك داخل منتجاتنا وخارجها. وحتى نتمكن من إنشاء منتجات ذات طابع شخصي تتناسب معك بشكل فريد، نستخدم جهات اتصالك وتفضيلاتك واهتماماتك وأنشطتك استنادًا إلى البيانات التي نجمعها ونعلمها منك ومن الآخرين (بما في ذلك أي بيانات تتمتع بحقوق حماية خاصة تختار توفيرها لنا)؛ وكيفية استخدامك لمنتجاتنا وتفاعلك معها؛ والأشخاص أو الأماكن أو الأشياء التي ترتبط بها وتهتم بها داخل منتجاتنا وخارجها.`,
                                en: `We use the information we have to deliver our products, including to personalise features and content and make suggestions for you on and off our products. To create personalised products that are unique and relevant to you, we use your connections, preferences, interests and activities based on the data that we collect and learn from you and others (including any data with special protections you choose to provide); how you use and interact with our products; and the people, places or things that you're connected to and interested in on and off our products.`,
                                fr: `Nous utilisons les informations à notre disposition pour fournir nos produits, notamment pour en personnaliser les fonctionnalités et le contenu et pour vous faire des suggestions (comme des groupes ou des évènements susceptibles de vous intéresser ou des sujets que vous pourriez avoir envie de suivre) sur nos produits et en dehors. Pour créer des produits personnalisés à la fois uniques et pertinents, nous utilisons vos connexions, vos préférences, vos centres d'intérêt et vos activités à partir des données que nous recueillons, des informations que vous ou des tiers nous fournissez et d'autres renseignements (notamment les données bénéficiant de protections spéciales que vous choisissez de nous communiquer). Nous nous servons également des données concernant votre utilisation de nos produits et vos interactions avec ceux-ci, ainsi que des données concernant les personnes, les lieux ou les éléments avec lesquels vous êtes connecté(e) ou qui vous intéressent sur nos produits et en dehors.`,
                                sub_list_items: [
                                    {
                                        ar: `<b>معلومات على منتجات ${data.site_name || "site_name"} والأجهزة:</b> نقوم بربط المعلومات التي تتعلق بأنشطتك التي تقوم بها على الأجهزة ومنتجات ${render_term_service_custom_text(data.site_name || "site_name")} المختلفة بهدف تقديم تجربة أكثر تفصيلاً وملاءمة واتساقًا على جميع منتجات ${render_term_service_custom_text(data.site_name || "site_name")} التي تستخدمها. على سبيل المثال يمكننا أن نجعل تجربتك أكثر سلاسة، على سبيل المثال، من خلال القيام تلقائيًا بتعبئة معلومات التسجيل الخاصة بك (مثل رقم هاتفك) من أحد منتجات ${render_term_service_custom_text(data.site_name || "site_name")} عند التسجيل للحصول على حساب في منتج آخر.`,
                                        en: `<b>Information across ${data.site_name || "site_name"} products and devices:</b> We connect information about your activities on different ${render_term_service_custom_text(data.site_name || "site_name")} products and devices to provide a more tailored and consistent experience on all ${render_term_service_custom_text(data.site_name || "site_name")} products that you use, wherever you use them. For example, we can make your experience more seamless, for example, by automatically filling in your registration information (such as your phone number) from one ${render_term_service_custom_text(data.site_name || "site_name")} product when you sign up for an account on a different product.`,
                                        fr: `<b>Informations sur l'ensemble des produits ${data.site_name || "site_name"} et des appareils :</b> nous relions les informations concernant vos activités sur les différents produits ${render_term_service_custom_text(data.site_name || "site_name")} et appareils afin de vous fournir une expérience plus personnalisée et plus cohérente sur l'ensemble des produits ${render_term_service_custom_text(data.site_name || "site_name")} que vous utilisez, quel que soit le support sur lequel vous les utilisez. Par exemple, nous pouvons faire en sorte que votre expérience soit plus fluide, par exemple en remplissant automatiquement vos informations d'inscription (notamment votre numéro téléphone) à partir d'un produit ${render_term_service_custom_text(data.site_name || "site_name")} lorsque vous créez un compte sur un autre produit.`,
                                    },
                                    {
                                        ar: `<b>معلومات مرتبطة بالموقع:</b> نستخدم المعلومات المرتبطة بالموقع - مثل الموقع الحالي ومكان إقامتك والأماكن التي تفضل الذهاب إليها، بهدف توفير منتجاتنا وإضفاء طابع شخصي عليها وتحسينها، بما في ذلك الإعلانات، لك وللآخرين. قد تستند المعلومات المرتبطة بالموقع إلى أشياء مثل موقع الجهاز المحدد بدقة (إذا سمحت لنا بالحصول عليه) وعناوين IP والمعلومات التي يتم الحصول عليها من استخدامك واستخدام الآخرين لمنتجات ${render_term_service_custom_text(data.site_name || "site_name")}.`,
                                        en: `<b>Location-related information:</b> We use location-related information – such as your current location, where you live, the places you like to go – to provide, personalise and improve our products, including ads, for you and others. Location-related information can be based on things such as precise device location (if you've allowed us to collect it), IP addresses and information from your and others' use of ${render_term_service_custom_text(data.site_name || "site_name")} products.`,
                                        fr: `<b>Informations géographiques :</b> nous utilisons des informations géographiques (comme votre position actuelle, le lieu où vous résidez, les endroits où vous aimez aller) afin de proposer, de personnaliser et d'améliorer nos produits, notamment les publicités, pour vous et les autres. Ces informations géographiques peuvent provenir notamment de l'emplacement précis des appareils (si vous nous avez autorisés à les recueillir), des adresses IP et des informations concernant votre utilisation (et celle des autres) des produits ${render_term_service_custom_text(data.site_name || "site_name")}.`,
                                    },
                                    {
                                        ar: `<b>أبحاث وتطوير المنتجات:</b> نستخدم المعلومات المتوفرة لدينا من أجل تطوير منتجاتنا واختبارها وتحسينها، بما في ذلك من خلال تنفيذ استطلاعات الرأي والأبحاث واختبار المنتجات والميزات الجديدة واستكشاف المشكلات المرتبطة بها وحلها.`,
                                        en: `<b>Product research and development:</b> We use the information we have to develop, test and improve our products, including by conducting surveys and research, and testing and troubleshooting new products and features.`,
                                        fr: `<b>Recherche et développement des produits :</b> Nous utilisons les informations à notre disposition pour développer, tester et améliorer nos produits, notamment en réalisant des sondages et des recherches, et en testant et en dépannant les nouveaux produits et les nouvelles fonctionnalités.`,
                                    },
                                    {
                                        ar: `<b>الإعلانات وغيرها من المحتوى المُموَّل:</b> نستخدم المعلومات المتوفرة لدينا عنك، بما في ذلك المعلومات المتعلقة باهتماماتك وإجراءاتك وجهات التواصل، لتحديد الإعلانات والعروض وغيرها من المحتوى المُموَّل الذي نعرضه عليك وإضفاء طابع شخصي عليها.`,
                                        en: `<b>Ads and other sponsored content:</b> We use the information we have about you – including information about your interests, actions and connections – to select and personalise ads, offers and other sponsored content that we show you.`,
                                        fr: `<b>Publicités et autres contenus sponsorisés :</b> nous utilisons les informations vous concernant à notre disposition (notamment les informations concernant vos centres d'intérêt, vos actions et vos connexions) pour sélectionner et pour personnaliser les publicités, les offres et les autres contenus sponsorisés que nous vous montrons.`,
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        ar: `<b>توفير خدمات القياس والتحليلات وغيرها من خدمات الأنشطة التجارية.</b>`,
                        en: `<b>Providing measurement, analytics and other business services.</b>`,
                        fr: `<b>Fournir des mesures, des analyses et d'autres services professionnels.</b>`,
                        list_items: [
                            {
                                ar: `نستخدم المعلومات المتوفرة لدينا (بما في ذلك نشاطك خارج منتجاتنا، مثل مواقع الويب التي تقوم بزيارتها والإعلانات التي تشاهدها) لمساعدة المعلنين وغيرهم من الشركاء في قياس مدى فعّالية إعلاناتهم وخدماتهم وكيفية توزيعها، بالإضافة إلى فهم طبيعة وفئات الأشخاص الذين يستخدمون خدماتهم وكيفية تفاعل الأشخاص مع مواقعهم على الويب وتطبيقاتهم وخدماتهم.`,
                                en: `We use the information that we have (including your activity off our products, such as the websites you visit and ads you see) to help advertisers and other partners measure the effectiveness and distribution of their ads and services, and understand the types of people who use their services and how people interact with their websites, apps and services.`,
                                fr: `Nous utilisons les informations à notre disposition (notamment concernant votre activité ne concernant pas nos produits, par exemple les sites web que vous consultez et les publicités que vous visualisez) pour aider les annonceurs et d'autres partenaires à mesurer l'efficacité et la diffusion de leurs publicités et de leurs services, et à comprendre les types de personnes qui utilisent leurs services et la façon dont ces personnes interagissent avec leurs sites web, leurs applications et leurs services. `,
                            },
                        ],
                    },
                    {
                        ar: `<b>تعزيز السلامة والنزاهة والأمان.</b>`,
                        en: `<b>Promoting safety, integrity and security.</b>`,
                        fr: `<b>Favoriser la sûreté, l'intégrité et la sécurité.</b>`,
                        list_items: [
                            {
                                ar: `نستخدم المعلومات المتوفرة لدينا للتحقق من الحسابات والأنشطة ومواجهة السلوكيات الضارة واكتشاف محاولات تقديم محتوى غير مهم أو احتيالي وغيرها من التجارب السيئة ومنعها، والمحافظة على نزاهة منتجاتنا، بالإضافة إلى تعزيز السلامة والأمان داخل منتجات ${render_term_service_custom_text(data.site_name || "site_name")} وخارجها. `,
                                en: `We use the information that we have to verify accounts and activity, combat harmful conduct, detect and prevent spam and other bad experiences, maintain the integrity of our products, and promote safety and security on and off of ${render_term_service_custom_text(data.site_name || "site_name")} products.`,
                                fr: `Nous utilisons les informations à notre disposition pour vérifier les comptes et les activités, pour lutter contre les comportements dangereux, pour détecter et prévenir le contenu indésirable et toutes autres expériences négatives, pour préserver l'intégrité de nos produits et pour favoriser la sûreté et la sécurité sur les produits ${render_term_service_custom_text(data.site_name || "site_name")} et en dehors de ceux-ci.`,
                            },
                        ],
                    },
                    {
                        ar: `<b>التواصل معك.</b>`,
                        en: `<b>Communicate with you.</b>`,
                        fr: `<b>Communiquer avec vous.</b>`,
                        list_items: [
                            {
                                ar: `نستعين بالمعلومات المتوفرة لدينا في إرسال مراسلات تسويقية إليك والتواصل معك بخصوص منتجاتنا وإطلاعك على سياساتنا وشروطنا. كما نستخدم معلوماتك للرد عليك عندما تتواصل معنا.`,
                                en: `We use the information that we have to send you marketing communications, communicate with you about our products and let you know about our Policies and Terms. We also use your information to respond to you when you contact us.`,
                                fr: `Nous utilisons les informations à notre disposition pour vous envoyer des communications commerciales, vous parler de nos produits et vous faire part de nos conditions et de nos règlements. Nous nous servons également de vos informations pour vous répondre lorsque vous nous contactez.`,
                            },
                        ],
                    },
                    {
                        ar: `<b>الأبحاث والابتكار للأعمال الخيرية.</b>`,
                        en: `<b>Researching and innovating for social good.</b>`,
                        fr: `<b>Faire de la recherche et innover pour le bien-être social.</b>`,
                        list_items: [
                            {
                                ar: `نستخدم المعلومات المتوفرة لدينا (بما في ذلك المعلومات التي نحصل عليها من شركاء الأبحاث الذين نتعاون معهم) لإجراء ودعم الأبحاث والابتكارات ذات الصلة بموضوعات تحسين مستوى خدماتنا بوجه عام والتطوير التكنولوجي والمصلحة العامة والصحة والسلامة.`,
                                en: `We use the information that we have (including from research partners we collaborate with) to conduct and support research and innovation on our services generally, technological advancement, public interest, health and well-being.`,
                                fr: `Nous utilisons les informations à notre disposition (notamment celles de partenaires de recherches avec lesquels nous collaborons) pour orienter et appuyer la recherche et l'innovation sur nos services en général, l'avancement technologique, l'intérêt public, la santé et le bien-être.`,
                            },
                        ],
                    },
                ]
            },
            {
                title: {
                    ar: "كيف تتم مشاركة هذه المعلومات؟",
                    en: "How is this information shared?",
                    fr: "Comment ces informations sont-elles partagées ?",
                },
                intro: {
                    ar: `تتم مشاركة معلوماتك مع الآخرين من خلال الطرق التالية:`,
                    en: `Your information is shared with others in the following ways:`,
                    fr: `Vos informations sont partagées avec d'autres personnes des manières suivantes :`,
                },
                paragraphs: [
                    {
                        ar: `<b>المشاركة على منتجات ${data.site_name || "site_name"}</b>`,
                        en: `<b>Sharing on ${data.site_name || "site_name"} products</b>`,
                        fr: `<b>Partage sur les produits ${data.site_name || "site_name"}</b>`,
                        list_items: [
                            {
                                ar: `<b>المعلومات العامة:</b>`,
                                en: `<b>Public information</b>`,
                                fr: `<b>Les informations publiques</b>`,
                                sub_list_items: [
                                    {
                                        ar: `المعلومات العامة يمكن لأي شخص رؤيتها سواء كان داخل أو خارج منتجاتنا، حتى وإن لم يكن له حساب لدينا. وتتضمن هذه المعلومات العامة اسم المستخدم وأي معلومات تقوم بمشاركتها مع الجمهور العام والمعلومات المتوفرة في ملفك الشخصي العام. يمكنك أنت والأشخاص الآخرون الذين يستخدمون ${render_term_service_custom_text(data.site_name || "site_name")}، وكذلك نحن توفير صلاحية الوصول إلى المعلومات العامة أو إرسالها إلى أي شخص داخل منتجاتنا أو خارجها، بما في ذلك في منتجات ${render_term_service_custom_text(data.site_name || "site_name")} الأخرى، أو في نتائج البحث، أو عبر الأدوات وواجهات API. ويمكن كذلك ظهور المعلومات العامة أو الوصول إليها أو إعادة مشاركتها أو تنزيلها عبر خدمات تابعة لجهات خارجية مثل محركات البحث وواجهات API والوسائط غير المتصلة بالإنترنت مثل التلفزيون، وعبر التطبيقات ومواقع الويب والخدمات الأخرى التي تندمج مع منتجاتنا.`,
                                        en: `Public information can be seen by anyone, on or off our products, including if they don't have an account. This includes your username, any information you share with a public audience, information in your public profile. You, other people using ${render_term_service_custom_text(data.site_name || "site_name")}, and we can provide access to or send public information to anyone on or off our products, including in other ${render_term_service_custom_text(data.site_name || "site_name")} products, in search results or through tools and APIs. Public information can also be seen, accessed, reshared or downloaded through third-party services such as search engines, APIs and offline media such as TV, and by apps, websites and other services that integrate with our products.`,
                                        fr: `Les informations publiques peuvent être vues par tout le monde, sur nos produits ou en dehors, même par les personnes qui n'ont pas de compte. Cela inclut votre nom d'utilisateur, toute information publique que vous partagez avec tout le monde, les informations figurant dans votre profil public. Vous, d'autres personnes utilisant ${render_term_service_custom_text(data.site_name || "site_name")}, et nous pouvons accorder un accès à des informations publiques ou envoyer de telles informations à n'importe qui sur nos produits ou en dehors, y compris sur les autres produits des entités ${render_term_service_custom_text(data.site_name || "site_name")}, dans les résultats de recherche ou par le biais des outils et des API. Il est également possible de consulter, de repartager ou de télécharger les informations publiques au moyen de services tiers, notamment les moteurs de recherche, les API et les médias hors ligne comme la télévision, et au moyen d'applications, de sites web et d'autres services intégrés dans nos produits.`,
                                    },
                                ],
                            },
                            {
                                ar: `<b>الأشخاص والحسابات الذين تتواصل معهم وتشارك معهم عناصر المحتوى.</b>`,
                                en: `<b>People and accounts that you share and communicate with</b>`,
                                fr: `<b>Personnes et comptes avec lesquels vous communiquez et partagez du contenu</b>`,
                                sub_list_items: [
                                    {
                                        ar: `عندما تقوم بالمشاركة والتواصل باستخدام منتجاتنا مع الأشخاص أو الأنشطة التجارية، يتمكن هؤلاء الأشخاص وتلك الأنشطة التجارية من رؤية المحتوى الذي تقوم بإرساله.`,
                                        en: `When you share and communicate using our products with people or businesses, those people and businesses can see the content you send.`,
                                        fr: `Lorsque vous partagez et communiquez à l'aide de nos produits avec des personnes ou des entreprises, ces dernières peuvent voir le contenu que vous envoyez.`,
                                    },
                                ],
                            },
                            {
                                ar: `<b>المعلومات المتعلقة بحالة نشاطك أو تواجدك على منتجاتنا.</b>`,
                                en: `<b>Information about your active status or presence on our products.</b>`,
                                fr: `<b>Informations relatives à votre statut actif ou à votre présence sur nos produits.</b>`,
                                sub_list_items: [
                                    {
                                        ar: `يستطيع الأشخاص ضمن شبكة معارفك والجهات التي تتواصل معها رؤية إشارات تخبرهم بما إذا كنت نشطًا على منتجاتنا أم لا، والتي تتضمن ما إذا كنت نشطًا حاليًا ، أو آخر مرة استخدمت فيها منتجاتنا.`,
                                        en: `People in your networks can see signals telling them whether you are active on our products, including whether you are currently active, or when you last used our products.`,
                                        fr: `Les membres de votre réseau peuvent voir des signaux leur indiquant si vous êtes actif ou non sur nos produits, y compris si vous êtes actuellement actif, ou à quel moment vous avez utilisé nos produits pour la dernière fois.`,
                                    },
                                ],
                            },
                            {
                                ar: `<b>التطبيقات أو المواقع أو الخدمات الأخرى التابعة لجهات خارجية والتي تستخدم منتجاتنا أو تتكامل معها.</b>`,
                                en: `<b>Apps, websites and third-party integrations on or using our products.</b>`,
                                fr: `<b>Applications, sites web et services tiers intégrés à nos produits ou utilisant nos produits.</b>`,
                                sub_list_items: [
                                    {
                                        ar: `عندما تختار استخدام تطبيقات أو مواقع أو خدمات أخرى تابعة لجهات خارجية تستخدم منتجاتنا، أو تتكامل معها، فقد تحصل هذه المواقع أو التطبيقات على معلومات حول المحتوى الذي قمت بنشره أو مشاركته.`,
                                        en: `When you choose to use third-party apps, websites or other services that use, or are integrated with, our products, they can receive information about what you post or share.`,
                                        fr: `Lorsque vous choisissez de recourir à des applications, des sites web ou d'autres services tiers qui utilisent nos produits ou qui y sont intégrés, ces derniers peuvent recevoir des informations sur ce que vous publiez ou partagez.`,
                                    },
                                ],
                            },
                            {
                                ar: `<b>مالك جديد.</b>`,
                                en: `<b>New owner.</b>`,
                                fr: `<b>Nouveau propriétaire.</b>`,
                                sub_list_items: [
                                    {
                                        ar: `إذا تغيرت ملكية منتجاتنا أو الأصول التابعة لها كليًا أو جزئيًا أو أُسند التحكم فيها لجهة أخرى، يجوز لنا نقل معلوماتك إلى المالك الجديد.`,
                                        en: `If the ownership or control of all or part of our products or their assets changes, we may transfer your information to the new owner.`,
                                        fr: `Si les droits de propriété ou le contrôle d'une partie ou de l'intégralité de nos produits ou de leurs éléments changent, nous avons la possibilité de communiquer vos informations au nouveau propriétaire.`,
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        ar: `<b>المشاركة مع شركاء تابعين لجهات خارجية</b><br/>نتعاون مع شركاء تابعيين لجهات خارجية يساعدوننا في تقديم منتجاتنا وتحسينها، حتى نتمكن من توفير خدماتنا للجميع في كافة أنحاء العالم. لا نبيع أيًا من معلوماتك إلى أي شخص، ولن يحدث هذا مطلقًا. كما نفرض أيضًا قيودًا صارمة على كيفية استخدام شركائنا للبيانات التي نوفرها لهم وكيفية الإفصاح عنها. وفيما يلي أنواع الجهات الخارجية التي نشارك المعلومات معها:`,
                        en: `<b>Sharing with third-party partners</b><br/>We work with third-party partners who help us and improve our products, which makes it possible to provide services to all people around the world. We don't sell any of your information to anyone and we never will. We also impose strict restrictions on how our partners can use and disclose the data we provide. Here are the types of third parties that we share information with:`,
                        fr: `<b>Partage avec des partenaires tiers</b><br/>Nous collaborons avec des partenaires tiers qui nous aident à améliorer nos produits, ce qui nous permet de proposer des services dans le monde entier. Nous ne vendons aucune de vos informations à quiconque et nous ne le ferons jamais. Nous imposons également des restrictions strictes quant à la façon dont les partenaires peuvent utiliser et révéler les données que nous leur communiquons. Voici les types de tiers avec lesquels nous partageons des informations :`,
                        list_items: [
                            {
                                ar: `<b>الشركاء الذين يستخدمون خدمات التحليل التي نوفرها.</b>`,
                                en: `Partners who use our analytics services.`,
                                fr: `Partenaires qui utilisent le service d'analyse.`,
                                sub_list_items: [
                                    {
                                        ar: `نقوم بتوفير إحصاءات ورؤى مجمعة تساعد الأشخاص والأنشطة التجارية على فهم طبيعة تفاعل الأشخاص مع المنشورات وقوائم المعروضات...`,
                                        en: `We provide aggregated statistics and insights that help people and businesses understand how people are engaging with their posts, listings...`,
                                        fr: `Nous fournissons des statistiques et des informations (insights) agrégées qui permettent aux individus et aux entreprises de comprendre la façon dont les gens interagissent avec leurs publications, leurs annonces...`,
                                    },
                                ],
                            },
                            {
                                ar: `<b>المعلنون.</b>`,
                                en: `<b>Advertisers.</b>`,
                                fr: `<b>Annonceurs.</b>`,
                                sub_list_items: [
                                    {
                                        ar: `نزود المعلنين بتقارير عن أنواع الأشخاص الذين يشاهدون إعلاناتهم ومستوى أداء إعلاناتهم، ولكننا لا نشارك معهم أي معلومات تحديد الهوية الشخصية لك (معلومات مثل اسمك أو عنوان البريد الإلكتروني الذي يمكن استخدامه بذاته للتواصل معك أو تحديد شخصيتك) ما لم تمنحنا إذنًا بذلك.`,
                                        en: `We provide advertisers with reports about the kinds of people seeing their ads and how their ads are performing, but we don't share information that personally identifies you (information such as your name or email address that by itself can be used to contact you or identifies who you are) unless you give us permission.`,
                                        fr: `Nous fournissons aux annonceurs des rapports sur les types de personnes qui voient leurs publicités et sur les performances de leurs publicités, mais nous ne partageons pas d'informations permettant de vous identifier personnellement (des informations telles que votre nom ou votre adresse e-mail qui peuvent être en elles-mêmes utilisées pour vous contacter ou vous identifier), sauf si vous nous en donnez l'autorisation.`,
                                    },
                                ],
                            },
                            {
                                ar: `<b>شركاء القياس.</b>`,
                                en: `<b>Measurement partners.</b>`,
                                fr: `<b>Partenaires de mesure.</b>`,
                                sub_list_items: [
                                    {
                                        ar: `نقوم بمشاركة المعلومات المتعلقة بك مع الشركات التي تقوم بتجميعها بهدف تقديم تحليلات وتقارير قياس لشركائنا.`,
                                        en: `We share information about you with companies that aggregate it to provide analytics and measurement reports to our partners.`,
                                        fr: `Nous partageons des informations vous concernant avec des entreprises qui les regroupent pour fournir des analyses et des rapports de mesure à nos partenaires.`,
                                    },
                                ],
                            },
                            {
                                ar: `<b>الباحثون والأكاديميون.</b>`,
                                en: `<b>Researchers and academics.</b>`,
                                fr: `<b>Chercheurs et universitaires.</b>`,
                                sub_list_items: [
                                    {
                                        ar: `كما نوفر المعلومات والمحتوى أيضًا إلى شركاء الأبحاث والأكاديميين لإجراء الأبحاث التي من شأنها تحسين البحث العلمي والابتكار الذي يدعم نشاطنا التجاري أو مهمتنا، كما يعمل على تحسين الاكتشاف والابتكار حول الموضوعات ذات الطبيعة الاجتماعية الخيرية والتقدم التكنولوجي والمصلحة العامة والصحة والسلامة.`,
                                        en: `We also provide information and content to research partners and academics to conduct research that advances scholarship and innovation that supports our business or mission and enhances discovery and innovation on topics of general social welfare, technological advancement, public interest, health and well-being.`,
                                        fr: `Nous communiquons également des informations et du contenu à des partenaires de recherche et à des universitaires pour réaliser des études faisant progresser l'érudition et l'innovation qui soutiennent notre activité ou notre mission et améliorant la découverte et l'innovation dans les domaines du bien-être social général, de l'avancement technologique, de l'intérêt public, de la santé et du bien-être.`,
                                    },
                                ],
                            },
                            {
                                ar: `<b>إنفاذ القانون أو المتطلبات القانونية.</b>`,
                                en: `<b>Law enforcement or legal requests.</b>`,
                                fr: `<b>Forces de l'ordre ou demandes légales.</b>`,
                                sub_list_items: [
                                    {
                                        ar: `نشارك المعلومات مع جهات تنفيذ القانون أو استجابةً للطلبات القانونية التي نتلقاها.`,
                                        en: `We share information with law enforcement or in response to legal requests.`,
                                        fr: `Nous partageons des informations avec les forces de l'ordre ou en réponse à des demandes légales.`,
                                    },
                                ],
                            },
                        ],
                    },
                ]
            },
            {
                title: {
                    ar: "كيف يمكنني إدارة المعلومات الخاصة بيّ أو حذفها؟",
                    en: "How can I manage or delete information about me?",
                    fr: "Comment puis-je gérer ou supprimer les informations me concernant ?",
                },
                paragraphs: [
                    {
                        ar: `نتيح لك إمكانية الوصول إلى بياناتك وتصحيحها ومعالجتها ومسحها.`,
                        en: `We provide you with the ability to access, rectify, port and delete your data.`,
                        fr: `Nous vous offrons la possibilité de consulter, rectifier, transférer et effacer vos données.`,
                    },
                    {
                        ar: `نحتفظ بالبيانات إلى أن تصبح غير ضرورية لتقديم خدماتنا، أو إلى أن يتم حذف حسابك.`,
                        en: `We store data until it is no longer necessary to provide our services or until your account is deleted.`,
                        fr: `Nous conservons les données jusqu'à ce qu'il ne soit plus nécessaire de fournir nos services, ou jusqu'à ce que votre compte soit supprimé.`,
                    },
                ]
            },
        ]
    };
};

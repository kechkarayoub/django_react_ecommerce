import { render_term_service_custom_text, render_term_service_url } from "./utils";

export const get_articles = (data) => {
    return [
        {
            title: {
                ar: "الموضوع",
                en: "Object",
                fr: "Objet",
            },
            paragraphs: [
                {
                    ar: `الغرض من "شروط الاستخدام العامة" هذه هو توفير إطار قانوني لاستخدام موقع ${render_term_service_url(data.site_url || "site_url", data.site_url || "site_url")} وخدماته.`,
                    en: `The purpose of these "general conditions of use" is to provide a legal framework for the use of the site ${render_term_service_url(data.site_url || "site_url", data.site_url || "site_url")} and its services.`,
                    fr: `Les présentes « conditions générales d'utilisation » ont pour objet l'encadrement juridique de l'utilisation du site ${render_term_service_url(data.site_url || "site_url", data.site_url || "site_url")} et de ses services.`,
                },
                {
                    ar: `يُبرم هذا العقد بين:`,
                    en: `This contract is concluded between:`,
                    fr: `Ce contrat est conclu entre :`,
                },
                {
                    ar: `مدير الموقع ، المشار إليه فيما يلي باسم "الناشر" ،`,
                    en: `The manager of the website, hereinafter referred to as "the Publisher",`,
                    fr: `Le gérant du site internet, ci-après désigné « l'Éditeur »,`,
                },
                {
                    ar: `أي شخص طبيعي أو اعتباري يرغب في الوصول إلى الموقع وخدماته ، المشار إليه فيما بعد باسم "المستخدم".`,
                    en: `Any natural or legal person wishing to access the site and its services, hereinafter referred to as "the User".`,
                    fr: `Toute personne physique ou morale souhaitant accéder au site et à ses services, ci-après appelé « l'Utilisateur ».`,
                },
                {
                    ar: `يجب قبول الشروط العامة للاستخدام من قبل أي مستخدم ، ويشكل الوصول إلى الموقع قبولًا لهذه الشروط.`,
                    en: `The general conditions of use must be accepted by any User, and access to the site constitutes acceptance of these conditions.`,
                    fr: `Les conditions générales d'utilisation doivent être acceptées par tout Utilisateur, et son accès au site vaut acceptation de ces conditions.`,
                },
            ]
        },
        {
            title: {
                ar: "إشعار قانوني",
                en: "Legal Notice",
                fr: "Mentions légales",
            },
            paragraphs: [
                {
                    ar: `للأشخاص الاعتباريين:`,
                    en: `For legal persons:`,
                    fr: `Pour les personnes morales :`,
                },
                {
                    ar: `يتم نشر موقع ${render_term_service_url(data.site_url || "site_url", data.site_url || "site_url")} من قبل شركة ${render_term_service_custom_text(data.company_legal_status || "company_legal_status")} ، ${render_term_service_custom_text(data.company_name || "company_name")}  برأس مال قدره ${render_term_service_custom_text(data.company_capital || "company_capital")} د.م ، التي يقع مكتبها الرئيسي في ${render_term_service_custom_text(data.company_address || "company_capital")}.`,
                    en: `The site ${render_term_service_url(data.site_url || "site_url", data.site_url || "site_url")} is published by the company ${render_term_service_custom_text(data.company_name || "company_name")}, ${render_term_service_custom_text(data.company_legal_status || "company_legal_status")} with a capital of ${render_term_service_custom_text(data.company_capital || "company_capital")} MAD, whose head office is located at ${render_term_service_custom_text(data.company_address || "company_capital")}.`,
                    fr: `Le site ${render_term_service_url(data.site_url || "site_url", data.site_url || "site_url")} est édité par la société ${render_term_service_custom_text(data.company_name || "company_name")}, ${render_term_service_custom_text(data.company_legal_status || "company_legal_status")} au capital de ${render_term_service_custom_text(data.company_capital || "company_capital")} MAD, dont le siège social est situé au ${render_term_service_custom_text(data.company_address || "company_capital")}.`,
                },
                {
                    ar: `ويمثل الشركة ${render_term_service_custom_text(data.responsable_full_name || "responsable_full_name")}.`,
                    en: `The company is represented by ${render_term_service_custom_text(data.responsable_full_name || "responsable_full_name")}.`,
                    fr: `La société est représentée par ${render_term_service_custom_text(data.responsable_full_name || "responsable_full_name")}.`,
                },
                {
                    ar: `للأفراد:`,
                    en: `For individuals:`,
                    fr: `Pour les personnes physiques :`,
                },
                {
                    ar: `يتم تحرير موقع ${render_term_service_url(data.site_url || "site_url", data.site_url || "site_url")} بواسطة ${render_term_service_custom_text(data.responsable_full_name || "responsable_full_name")} ، ومقره في ${render_term_service_custom_text(data.responsable_address || "responsable_address")}.`,
                    en: `The ${render_term_service_url(data.site_url || "site_url", data.site_url || "site_url")} site is edited by ${render_term_service_custom_text(data.responsable_full_name || "responsable_full_name")}, domiciled at ${render_term_service_custom_text(data.responsable_address || "responsable_address")}.`,
                    fr: `Le site ${render_term_service_url(data.site_url || "site_url", data.site_url || "site_url")} est édité par ${render_term_service_custom_text(data.responsable_full_name || "responsable_full_name")}, domicilié au ${render_term_service_custom_text(data.responsable_address || "responsable_address")}.`,
                },
            ]
        },
        {
            title: {
                ar: "الوصول إلى الخدمات",
                en: "Access to services",
                fr: "Accès aux services",
            },
            paragraphs: [
                {
                    ar: `مستخدم الموقع ${render_term_service_url(data.site_url || "site_url", data.site_url || "site_url")} لديه حق الوصول إلى الخدمات التالية:`,
                    en: `The User of the site ${render_term_service_url(data.site_url || "site_url", data.site_url || "site_url")} has access to the following services:`,
                    fr: `L'Utilisateur du site ${render_term_service_url(data.site_url || "site_url", data.site_url || "site_url")} a accès aux services suivants :`,
                    list_items: [
                        {
                            ar: "إمكانية إنشاء حساب.",
                            en: "Possibility to create an account.",
                            fr: "Possibilité de créer un compte.",
                        },
                        {
                            ar: `يمكن للمستخدم الوصول إلى محتوى الموقع ${render_term_service_url(data.site_url || "site_url", data.site_url || "site_url")} بثلاث لغات: العربية ،الإنجليزية والفرنسية.`,
                            en: `The User can access the content of the site ${render_term_service_url(data.site_url || "site_url", data.site_url || "site_url")} in three languages: Arabic, English and French.`,
                            fr: `L'Utilisateur peut accéder au contenu du site ${render_term_service_url(data.site_url || "site_url", data.site_url || "site_url")} en trois langues : Arabe, Anglais et Français.`,
                        },
                        {
                            ar: "...",
                            en: "...",
                            fr: "...",
                        },
                    ],
                },
                {
                    ar: `يمكن لأي مستخدم لديه اتصال بالإنترنت الوصول إلى الموقع مجانًا ومن أي مكان. التكاليف التي يتكبدها المستخدم للوصول إليه (اتصال الإنترنت ، أجهزة الكمبيوتر ، إلخ) ليست من مسؤولية الناشر.`,
                    en: `Any User with internet access can access the site for free and from anywhere. The costs incurred by the User to access it (internet connection, computer equipment, etc.) are not the responsibility of the Publisher.`,
                    fr: `Tout Utilisateur ayant accès a internet peut accéder gratuitement et depuis n'importe où au site. Les frais supportés par l'Utilisateur pour y accéder (connexion internet, matériel informatique, etc.) ne sont pas à la charge de l'Éditeur.`,
                },
                {
                    ar: `لا يمكن للمستخدم الوصول إلى الخدمات التالية ما لم يكن عضوًا في الموقع (أي يتم تحديد هويته باستخدام تفاصيل تسجيل الدخول الخاصة به):`,
                    en: `The following services are not accessible to the User unless he is a member of the site (i.e. he is identified using his login details):`,
                    fr: `Les services suivants ne sont pas accessible pour l'Utilisateur que s'il est membre du site (c'est-à-dire qu'il est identifié à l'aide de ses identifiants de connexion) :`,
                    list_items: [
                        {
                            ar: "تسجيل الدخول إلى حسابه الخاص",
                            en: "Log in to his own account",
                            fr: "Se connecter à son propre compte",
                        },
                        {
                            ar: "تسجيل الخروج من حسابه الخاص",
                            en: "Log out from his own account",
                            fr: "Se déconnecter de son propre compte",
                        },
                        {
                            ar: "...",
                            en: "...",
                            fr: "...",
                        },
                    ],
                },
                {
                    ar: `قد يتم ايقاف الموقع وخدماته المختلفة أو تعليقها من قبل الناشر ، ولا سيما أثناء الصيانة ، دون إشعار أو مبرر.`,
                    en: `The site and its various services may be interrupted or suspended by the Publisher, in particular during maintenance, without notice or justification.`,
                    fr: `Le site et ses différents services peuvent être interrompus ou suspendus par l'Éditeur, notamment à l'occasion d'une maintenance, sans obligation de préavis ou de justification.`,
                },
            ]
        },
        {
            title: {
                ar: "مسؤولية المستخدم",
                en: "Responsibility of the User",
                fr: "Responsabilité de l'Utilisateur",
            },
            paragraphs: [
                {
                    ar: `المستخدم مسؤول عن المخاطر المرتبطة باستخدام معرف تسجيل الدخول وكلمة المرور الخاصة به.`,
                    en: `The User is responsible for the risks associated with the use of his login identifier and password.`,
                    fr: `L'Utilisateur est responsable des risques liés à l'utilisation de son identifiant de connexion et de son mot de passe.`,
                },
                {
                    ar: `يجب أن تظل كلمة مرور المستخدم سرية. في حالة الكشف عن كلمة المرور ، يرفض الناشر كل المسؤولية.`,
                    en: `The User's password must remain secret. In the event of password disclosure, the Publisher declines all responsibility.`,
                    fr: `Le mot de passe de l'Utilisateur doit rester secret. En cas de divulgation de mot de passe, l'Éditeur décline toute responsabilité.`,
                },
                {
                    ar: `يتحمل المستخدم المسؤولية الكاملة عن استخدامه للمعلومات والمحتوى الموجود على الموقع ${render_term_service_url(data.site_url || "site_url", data.site_url || "site_url")}.`,
                    en: `The User assumes full responsibility for the use he makes of the information and content on the site ${render_term_service_url(data.site_url || "site_url", data.site_url || "site_url")}.`,
                    fr: `L'Utilisateur assume l'entière responsabilité de l'utilisation qu'il fait des informations et contenus présents sur le site ${render_term_service_url(data.site_url || "site_url", data.site_url || "site_url")}.`,
                },
                {
                    ar: `أي استخدام للخدمة من قبل المستخدم يؤدي بشكل مباشر أو غير مباشر إلى الضرر يجب أن يتم تعويضه لصالح الموقع.`,
                    en: `Any use of the service by the User directly or indirectly resulting in damage must be compensated for the benefit of the site.`,
                    fr: `Tout usage du service par l'Utilisateur ayant directement ou indirectement pour conséquence des dommages doit faire l'objet d'une indemnisation au profit du site.`,
                },
            ]
        },
        {
            title: {
                ar: "مسؤولية الناشر",
                en: "Responsibility of the Publisher",
                fr: "Responsabilité de l'Éditeur",
            },
            paragraphs: [
                {
                    ar: `لا يمكن لأي عطل في الخادم أو الشبكة تحميل المسؤولية للناشر.`,
                    en: `Any malfunction of the server or the network cannot engage the responsibility of the Publisher.`,
                    fr: `Tout dysfonctionnement du serveur ou du réseau ne peut engager la responsabilité de l'Éditeur.`,
                },
                {
                    ar: `وبالمثل ، لا يمكن تحميل الموقع المسؤولية في حالة القوة القاهرة أو الحقيقة غير المتوقعة والتي لا يمكن التغلب عليها لطرف ثالث.`,
                    en: `Likewise, the site cannot be held liable in the event of force majeure or the unforeseeable and insurmountable fact of a third party.`,
                    fr: `De même, la responsabilité du site ne peut être engagée en cas de force majeure ou du fait imprévisible et insurmontable d'un tiers.`,
                },
                {
                    ar: `يتعهد الموقع ${render_term_service_url(data.site_url || "site_url", data.site_url || "site_url")} بتنفيذ جميع الوسائل اللازمة لضمان أمن وسرية البيانات. ومع ذلك ، فإنه لا يوفر ضمانًا للأمان الكامل.`,
                    en: `The site ${render_term_service_url(data.site_url || "site_url", data.site_url || "site_url")} undertakes to implement all necessary means to guarantee the security and confidentiality of data. However, it does not provide a guarantee of total security.`,
                    fr: `Le site ${render_term_service_url(data.site_url || "site_url", data.site_url || "site_url")} s'engage à mettre en œuvre tous les moyens nécessaires pour garantir la sécurité et la confidentialité des données. Toutefois, il n'apporte pas une garantie de sécurité totale.`,
                },
                {
                    ar: `يحتفظ الناشر بالحق في عدم ضمان موثوقية المصادر ، على الرغم من أن المعلومات المنشورة على الموقع تعتبر موثوقة.`,
                    en: `The Publisher reserves the right to not guarantee the reliability of the sources, although the information disseminated on the site is deemed reliable.`,
                    fr: `L'Éditeur se réserve la faculté d'une non-garantie de la fiabilité des sources, bien que les informations diffusées su le site soient réputées fiables.`,
                },
            ]
        },
        {
            title: {
                ar: "الملكية الفكرية",
                en: "Intellectual property",
                fr: "Propriété intellectuelle",
            },
            paragraphs: [
                {
                    ar: `محتويات الموقع ${render_term_service_url(data.site_url || "site_url", data.site_url || "site_url")} (الشعارات والنصوص والرسومات ومقاطع الفيديو وما إلى ذلك) محمية بموجب حقوق النشر بموجب قانون الملكية الفكرية.`,
                    en: `The contents of the site ${render_term_service_url(data.site_url || "site_url", data.site_url || "site_url")} (logos, texts, graphics, videos, etc.) are protected by copyright, under the Intellectual Property Code.`,
                    fr: `Les contenus du site ${render_term_service_url(data.site_url || "site_url", data.site_url || "site_url")} (logos, textes, éléments graphiques, vidéos, etc.) son protégés par le droit d'auteur, en vertu du Code de la propriété intellectuelle.`,
                },
                {
                    ar: `يجب على المستخدم الحصول على إذن من ناشر الموقع قبل أي إعادة إنتاج أو نسخ أو نشر لهذه المحتويات المختلفة.`,
                    en: `The User must obtain the authorization of the site editor before any reproduction, copy or publication of these various contents.`,
                    fr: `L'Utilisateur devra obtenir l'autorisation de l'éditeur du site avant toute reproduction, copie ou publication de ces différents contenus.`,
                },
                {
                    ar: `يمكن استخدامها من قبل المستخدمين لأغراض خاصة ؛ يحظر جميع الاستخدامات التجارية.`,
                    en: `These can be used by users for private purposes; all commercial use is prohibited.`,
                    fr: `Ces derniers peuvent être utilisés par les utilisateurs à des fins privées ; tout usage commercial est interdit.`,
                },
                {
                    ar: `يتحمل المستخدم المسؤولية الكاملة عن أي محتوى يضعه على الإنترنت ويتعهد بعدم إلحاق الضرر بأي طرف ثالث.`,
                    en: `The User is entirely responsible for any content that he puts online and he undertakes not to harm a third party.`,
                    fr: `L'Utilisateur est entièrement responsable de tout contenu qu'il met en ligne et il s'engage à ne pas porter atteinte à un tiers.`,
                },
                {
                    ar: `يحتفظ محرر الموقع بالحق في تعديل أو حذف المحتوى الذي ينشره المستخدمون بحرية في أي وقت ، دون مبرر.`,
                    en: `The Site Editor reserves the right to freely moderate or delete the content posted by users at any time, without justification.`,
                    fr: `L'Éditeur du site se réserve le droit de modérer ou de supprimer librement et à tout moment les contenus mis en ligne par les utilisateurs, et ce sans justification.`,
                },
            ]
        },
        {
            title: {
                ar: "البيانات الشخصية",
                en: "Personal data",
                fr: "Données personnelles",
            },
            paragraphs: [
                {
                    ar: `يجب على المستخدم تقديم معلومات شخصية من أجل التسجيل في الموقع.`,
                    en: `The User must provide personal information in order to register on the site.`,
                    fr: `L'Utilisateur doit obligatoirement fournir des informations personnelles pour procéder à son inscription sur le site.`,
                },
                {
                    ar: `قد يتم استخدام العنوان الإلكتروني للمستخدم على وجه الخصوص بواسطة الموقع ${render_term_service_url(data.site_url || "site_url", data.site_url || "site_url")} لتوصيل المعلومات المختلفة وإدارة الحساب.`,
                    en: `The User's electronic address (e-mail) may in particular be used by the site ${render_term_service_url(data.site_url || "site_url", data.site_url || "site_url")} for the communication of various information and the management of the account.`,
                    fr: `L'adresse électronique (e-mail) de l'Utilisateur pourra notamment être utilisée par le site ${render_term_service_url(data.site_url || "site_url", data.site_url || "site_url")} pour la communication d'informations diverses et la gestion du compte.`,
                },
                {
                    ar: `يضمن ${render_term_service_url(data.site_url || "site_url", data.site_url || "site_url")} احترام خصوصية المستخدم ، وفقًا للقانون رقم 09-08 بشأن حماية الأفراد فيما يتعلق بمعالجة البيانات الشخصية.`,
                    en: `${render_term_service_url(data.site_url || "site_url", data.site_url || "site_url")} guarantees respect for the User's privacy, in accordance with Law No. 09-08 on the protection of individuals with regard to the processing of personal data.`,
                    fr: `${render_term_service_url(data.site_url || "site_url", data.site_url || "site_url")} garantie le respect de la vie privée de l'Utilisateur, conformément à la loi n°09-08 relative à la protection des personnes physiques à l'égard du traitement des données à caractère personnel.`,
                },
                {
                    ar: `يتم الإعلان عن الموقع إلى اللجنة الوطنية لحماية البيانات الشخصية (CNDP) تحت الرقم التالي: ${render_term_service_custom_text(data.cndp_declaration_number || "cndp_declaration_number")}.`,
                    en: `The site is declared to the National Commission for the Protection of Personal Data (CNDP) under the following number: ${render_term_service_custom_text(data.cndp_declaration_number || "cndp_declaration_number")}.`,
                    fr: `Le site est déclaré auprès de la Commission Nationale de Contrôle de la Protection des Données à Caractère Personnel (CNDP) sous le numéro suivant : ${render_term_service_custom_text(data.cndp_declaration_number || "cndp_declaration_number")}.`,
                },
                // {
                //     ar: `يحق للمستخدم الوصول إلى بياناته الشخصية وتصحيحها وحذفها والاعتراض عليها. يمارس المستخدم هذا الحق عن طريق:`,
                //     en: `The User has the right to access, rectify, delete and oppose his personal data. The User exercises this right via:`,
                //     fr: `L'Utilisateur dispose du droit d'accès, de rectification, de suppression et d'opposition de ses données personnelles. L'Utilisateur exerce ce droit via :`,
                // },
                {
                    ar: `يحق للمستخدم الوصول إلى بياناته الشخصية وتصحيحها وحذفها والاعتراض عليها.`,
                    en: `The User has the right to access, rectify, delete and oppose his personal data.`,
                    fr: `L'Utilisateur dispose du droit d'accès, de rectification, de suppression et d'opposition de ses données personnelles.`,
                },
            ]
        },
        {
            title: {
                ar: "الروابط التشعبية",
                en: "Hypertext links",
                fr: "Liens hypertextes",
            },
            paragraphs: [
                {
                    ar: `المجالات التي تؤدي إليها روابط النص التشعبي على الموقع ليست من مسؤولية ناشر ${render_term_service_url(data.site_url || "site_url", data.site_url || "site_url")} ، الذي لا يتحكم في هذه الروابط.`,
                    en: `The domains to which the hypertext links on the site lead are not the responsibility of the Publisher of ${render_term_service_url(data.site_url || "site_url", data.site_url || "site_url")}, who has no control over these links.`,
                    fr: `Les domaines vers lesquels mènent les liens hypertextes présents sur le site n'engagent pas la responsabilité de l'Éditeur de ${render_term_service_url(data.site_url || "site_url", data.site_url || "site_url")}, qui n'a pas de contrôle sur ces liens.`,
                },
                {
                    ar: `من الممكن لطرف ثالث إنشاء رابط لصفحة على الموقع ${render_term_service_url(data.site_url || "site_url", data.site_url || "site_url")} بدون إذن صريح من الناشر.`,
                    en: `It is possible for a third party to create a link to a page on the site ${render_term_service_url(data.site_url || "site_url", data.site_url || "site_url")} without the express permission of the publisher.`,
                    fr: `Il est possible pour un tiers de créer un lien vers une page du site ${render_term_service_url(data.site_url || "site_url", data.site_url || "site_url")} sans autorisation expresse de l'éditeur.`,
                },
            ]
        },
        {
            title: {
                ar: "تطور الشروط العامة للاستخدام",
                en: "Evolution of the general conditions of use",
                fr: "Évolution des conditions générales d'utilisation",
            },
            paragraphs: [
                {
                    ar: `يحتفظ الموقع ${render_term_service_url(data.site_url || "site_url", data.site_url || "site_url")} بالحق في تعديل بنود هذه الشروط العامة للاستخدام في أي وقت وبدون مبرر.`,
                    en: `The site ${render_term_service_url(data.site_url || "site_url", data.site_url || "site_url")} reserves the right to modify the clauses of these general conditions of use at any time and without justification.`,
                    fr: `Le site ${render_term_service_url(data.site_url || "site_url", data.site_url || "site_url")} se réserve le droit de modifier les clauses de ces conditions générales d'utilisation à tout moment et sans justification.`,
                },
            ]
        },
        {
            title: {
                ar: "مدة العقد",
                en: "Contract length",
                fr: "Durée du contrat",
            },
            paragraphs: [
                {
                    ar: `مدة هذا العقد غير محددة. ينتج عن العقد آثاره فيما يتعلق بالمستخدم من بداية استخدام الخدمة.`,
                    en: `The duration of this contract is indefinite. The contract produces its effects with regard to the User from the start of the use of the service.`,
                    fr: `La durée du présent contrat est indéterminée. Le contrat produit ses effets à l'égard de l'Utilisateur à compter du début de l'utilisation du service.`,
                },
            ]
        },
        {
            title: {
                ar: "القانون الواجب التطبيق والاختصاص القضائي",
                en: "Applicable law and competent jurisdiction",
                fr: "Droit applicable et juridiction compétente",
            },
            paragraphs: [
                {
                    ar: `هذا العقد يعتمد على التشريع المغربي. في حالة وجود نزاع لم يتم حله وديًا بين المستخدم والناشر ، فإن المحاكم المغربية هي المختصة بتسوية النزاع.`,
                    en: `This contract depends on Moroccan legislation. In the event of a dispute not resolved amicably between the User and the Publisher, the courts of Morocco are competent to settle the dispute.`,
                    fr: `Le présent contrat dépend de la législation marocaine. En cas de litige non résolu à l'amiable entre l'Utilisateur et l'Éditeur, les tribunaux de Maroc sont compétents pour régler le contentieux.`,
                },
            ]
        },
    ];
};

export const get_terms_service_notice = (props) => {
    return {
        ar: `بالضغط على <b>${props.registration_label}</b> ، فإنك توافق على <span class="span_link term_of_service_span">شروط الخدمة</span> الخاصة بنا ، و<span class="span_link data_use_policy_span">سياسة استخدام البيانات</span> و<span class="span_link cookie_policy_span">سياسة ملفات تعريف الارتباط</span> الخاصة بنا.`,
        en: `By pressing <b>${props.registration_label}</b>, you agree to our <span class="span_link term_of_service_span">Terms of service</span>, our <span class="span_link data_use_policy_span">Data Use Policy</span> and our <span class="span_link cookie_policy_span">Cookie Policy</span>.`,
        fr: `En appuyant sur <b>${props.registration_label}</b>, vous acceptez nos <span class="span_link term_of_service_span">Conditions d'utilisation</span>, notre <span class="span_link data_use_policy_span">Politique d'utilisation des données</span> et notre <span class="span_link cookie_policy_span">Politique d'utilisation des cookies</span>.`,
    };
};

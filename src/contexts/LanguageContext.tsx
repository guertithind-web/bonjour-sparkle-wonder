import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type Lang = "fr" | "ar" | "en";

type Dict = Record<string, string | string[]>;

const translations: Record<Lang, Dict> = {
  fr: {
    "nav.solutions": "Solutions",
    "nav.advantages": "Avantages",
    "nav.cta": "Demande de devis",

    "hero.title.with": "Avec",
    "hero.title.rest": ", vous disposez d'une solution de paiement moderne, flexible et 100% digitale.",
    "hero.subtitle":
      "Que vous vendiez en magasin, en ligne ou en déplacement, nous vous offrons les outils essentiels pour encaisser, suivre et développer votre activité.",
    "hero.cta": "Parler à un expert",

    "solutions.title.l1": "Des solutions de paiement intelligentes",
    "solutions.title.l2.pre": "pour",
    "solutions.title.l2.highlight": "développer votre activité.",

    "sol.1.title": "Compte professionnel digital",
    "sol.1.desc":
      "Ouvrez votre compte pro en quelques minutes et accédez à une plateforme sécurisée, conçue pour optimiser vos flux financiers et accélérer votre croissance.",
    "sol.2.title": "Carte bancaire LaCaissePay",
    "sol.2.desc":
      "Centralisez toutes vos dépenses, contrôlez vos paiements et gardez une visibilité totale grâce à une interface 100% digitale et intuitive.",
    "sol.3.title": "QR Code de paiement",
    "sol.3.desc":
      "Une technologie simple et efficace : vos clients scannent, vous encaissez instantanément. Idéal pour les commerces rapides et les services mobiles.",
    "sol.4.title": "Terminal de paiement (Soft POS)",
    "sol.4.desc":
      "Un TPE intelligent, compact et connecté, pensé pour des encaissements rapides, fiables et adaptés aux environnements à fort trafic.",
    "sol.5.title": "Intégration paiement e-commerce",
    "sol.5.desc":
      "Activez le paiement en ligne sur votre site de commande grâce à une intégration simple via plugin WordPress ou API. Une solution flexible pour adapter LaCaissePay à votre parcours d'achat digital.",
    "sol.6.title": "Lien de paiement instantané",
    "sol.6.desc":
      "Transformez vos conversations WhatsApp, SMS ou email en transactions sécurisées. Un outil puissant pour les ventes à distance et les paiements rapides.",

    "why.title.pre": "Pourquoi choisir",
    "why.title.brand": "LaCaissePay",
    "why.title.suffix": "?",
    "why.1.title": "Conçu pour les professionnels marocains",
    "why.1.desc": "Auto-entrepreneurs, commerçants, indépendants : nous comprenons vos besoins.",
    "why.2.title": "Rapide et sans complications",
    "why.2.desc": "Pas de paperasse, pas de procédures lourdes. Tout est pensé pour vous simplifier la vie.",
    "why.3.title": "Sécurité maximale",
    "why.3.desc": "Vos données et transactions sont protégées par les standards les plus avancés du secteur.",
    "why.4.title": "Une solution tout-en-un",
    "why.4.desc":
      "Plus besoin de jongler entre plusieurs services : vos paiements, votre compte pro et votre gestion financière sont regroupés au même endroit.",
    "why.cta": "Je suis intéressé",

    "sec.title.pre": "Vos fonds sont en",
    "sec.title.highlight": "sécurité",
    "sec.1.title": "Transparence totale",
    "sec.1.desc":
      "Aucun frais caché, aucune surprise. Vous gardez une visibilité complète sur vos coûts et savez exactement ce que vous payez.",
    "sec.2.title": "Sécurité de niveau bancaire",
    "sec.2.desc":
      "Vos fonds sont protégés selon les mêmes standards que les établissements financiers marocains. Notre infrastructure garantit une protection maximale de votre argent et de vos transactions.",
    "sec.3.title": "Conforme aux exigences de Bank Al-Maghrib",
    "sec.3.desc":
      "LacaissePay applique les directives réglementaires marocaines pour assurer fiabilité, transparence et conformité à chaque étape de vos opérations.",
    "sec.4.title": "Un cadre réglementé et supervisé",
    "sec.4.desc":
      "Nous opérons dans le cadre d'un agent d'institution de paiement, en collaboration avec des partenaires financiers agréés au Maroc. Chaque transaction respecte les protocoles en vigueur.",

    "contact.title": "Contactez-nous",
    "contact.name": "Nom & Prénom",
    "contact.email": "Email",
    "contact.phone": "Téléphone",
    "contact.volume": "Estimation du chiffre d'affaires mensuel",
    "contact.vol.1": "0 à 20 000 MAD",
    "contact.vol.2": "20 000 à 100 000 MAD",
    "contact.vol.3": "Plus de 100 000 MAD",
    "contact.message": "Message",
    "contact.send": "Envoyez",
    "contact.sending": "Envoi en cours...",
    "contact.toast.title": "Message envoyé !",
    "contact.toast.desc": "Nous reviendrons vers vous rapidement.",

    "footer.intro":
      "– La solution de paiement digitale qui simplifie votre activité au Maroc. Encaissez plus simplement, gérez votre argent plus intelligemment et gardez le contrôle total sur votre activité.",
    "footer.info": "Informations",
    "footer.callus": "Appelez-nous",
    "footer.email": "E-mail",
    "footer.rights": "Tous droits réservés.",
  },

  en: {
    "nav.solutions": "Solutions",
    "nav.advantages": "Advantages",
    "nav.cta": "Request a quote",

    "hero.title.with": "With",
    "hero.title.rest": ", you get a modern, flexible and 100% digital payment solution.",
    "hero.subtitle":
      "Whether you sell in-store, online or on the go, we provide the essential tools to collect payments, track and grow your business.",
    "hero.cta": "Talk to an expert",

    "solutions.title.l1": "Smart payment solutions",
    "solutions.title.l2.pre": "to",
    "solutions.title.l2.highlight": "grow your business.",

    "sol.1.title": "Digital business account",
    "sol.1.desc":
      "Open your business account in minutes and access a secure platform designed to optimize your cash flow and accelerate growth.",
    "sol.2.title": "LaCaissePay bank card",
    "sol.2.desc":
      "Centralize every expense, control your payments and keep full visibility through a 100% digital and intuitive interface.",
    "sol.3.title": "Payment QR Code",
    "sol.3.desc":
      "A simple, efficient technology: your customers scan, you get paid instantly. Perfect for fast retail and mobile services.",
    "sol.4.title": "Payment terminal (Soft POS)",
    "sol.4.desc":
      "A smart, compact and connected POS, designed for fast and reliable transactions in high-traffic environments.",
    "sol.5.title": "E-commerce payment integration",
    "sol.5.desc":
      "Enable online payments on your store with a simple integration via WordPress plugin or API. A flexible way to embed LaCaissePay into your digital checkout.",
    "sol.6.title": "Instant payment link",
    "sol.6.desc":
      "Turn your WhatsApp, SMS or email conversations into secure transactions. A powerful tool for remote sales and quick payments.",

    "why.title.pre": "Why choose",
    "why.title.brand": "LaCaissePay",
    "why.title.suffix": "?",
    "why.1.title": "Built for Moroccan professionals",
    "why.1.desc": "Self-employed, merchants, freelancers: we understand your needs.",
    "why.2.title": "Fast and hassle-free",
    "why.2.desc": "No paperwork, no heavy processes. Everything is designed to make your life easier.",
    "why.3.title": "Maximum security",
    "why.3.desc": "Your data and transactions are protected by the most advanced standards in the industry.",
    "why.4.title": "An all-in-one solution",
    "why.4.desc":
      "No more juggling between services: your payments, your business account and your financial management are all in one place.",
    "why.cta": "I'm interested",

    "sec.title.pre": "Your funds are",
    "sec.title.highlight": "secure",
    "sec.1.title": "Full transparency",
    "sec.1.desc":
      "No hidden fees, no surprises. You keep full visibility on your costs and know exactly what you pay.",
    "sec.2.title": "Bank-grade security",
    "sec.2.desc":
      "Your funds are protected at the same standards as Moroccan financial institutions. Our infrastructure guarantees maximum protection for your money and transactions.",
    "sec.3.title": "Compliant with Bank Al-Maghrib requirements",
    "sec.3.desc":
      "LacaissePay applies Moroccan regulatory guidelines to ensure reliability, transparency and compliance at every step of your operations.",
    "sec.4.title": "A regulated and supervised framework",
    "sec.4.desc":
      "We operate as a payment institution agent, in collaboration with licensed financial partners in Morocco. Every transaction follows the protocols in force.",

    "contact.title": "Contact us",
    "contact.name": "Full name",
    "contact.email": "Email",
    "contact.phone": "Phone",
    "contact.volume": "Estimated monthly revenue",
    "contact.vol.1": "0 to 20,000 MAD",
    "contact.vol.2": "20,000 to 100,000 MAD",
    "contact.vol.3": "More than 100,000 MAD",
    "contact.message": "Message",
    "contact.send": "Send",
    "contact.sending": "Sending...",
    "contact.toast.title": "Message sent!",
    "contact.toast.desc": "We will get back to you shortly.",

    "footer.intro":
      "– The digital payment solution that simplifies your business in Morocco. Collect payments more easily, manage your money smarter and keep full control over your activity.",
    "footer.info": "Information",
    "footer.callus": "Call us",
    "footer.email": "E-mail",
    "footer.rights": "All rights reserved.",
  },

  ar: {
    "nav.solutions": "الحلول",
    "nav.advantages": "المزايا",
    "nav.cta": "طلب عرض سعر",

    "hero.title.with": "مع",
    "hero.title.rest": "، تحصل على حل دفع عصري ومرن ورقمي بنسبة 100٪.",
    "hero.subtitle":
      "سواء كنت تبيع في المتجر أو عبر الإنترنت أو أثناء التنقل، نوفر لك الأدوات الأساسية لتحصيل المدفوعات وتتبعها وتطوير نشاطك.",
    "hero.cta": "تحدث إلى خبير",

    "solutions.title.l1": "حلول دفع ذكية",
    "solutions.title.l2.pre": "لـ",
    "solutions.title.l2.highlight": "تطوير نشاطك.",

    "sol.1.title": "حساب احترافي رقمي",
    "sol.1.desc":
      "افتح حسابك المهني في دقائق واستفد من منصة آمنة مصممة لتحسين تدفقاتك المالية وتسريع نموك.",
    "sol.2.title": "بطاقة بنكية LaCaissePay",
    "sol.2.desc":
      "اجمع جميع نفقاتك، تحكم في مدفوعاتك واحتفظ برؤية كاملة بفضل واجهة رقمية بنسبة 100٪ وسهلة الاستخدام.",
    "sol.3.title": "رمز QR للدفع",
    "sol.3.desc":
      "تقنية بسيطة وفعالة: يمسح عملاؤك الرمز، وتتلقى المدفوعات فورًا. مثالي للتجارة السريعة والخدمات المتنقلة.",
    "sol.4.title": "محطة دفع (Soft POS)",
    "sol.4.desc":
      "جهاز TPE ذكي ومتصل ومدمج، مصمم لمعاملات سريعة وموثوقة في البيئات ذات الحركة العالية.",
    "sol.5.title": "تكامل الدفع للتجارة الإلكترونية",
    "sol.5.desc":
      "فعّل الدفع عبر الإنترنت على متجرك بفضل تكامل بسيط عبر إضافة WordPress أو API. حل مرن لدمج LaCaissePay في مسار الشراء الرقمي.",
    "sol.6.title": "رابط دفع فوري",
    "sol.6.desc":
      "حوّل محادثاتك على WhatsApp أو SMS أو البريد الإلكتروني إلى معاملات آمنة. أداة قوية للمبيعات عن بُعد والمدفوعات السريعة.",

    "why.title.pre": "لماذا تختار",
    "why.title.brand": "LaCaissePay",
    "why.title.suffix": "؟",
    "why.1.title": "مصمم للمهنيين المغاربة",
    "why.1.desc": "المقاولون الذاتيون، التجار، المستقلون: نحن نفهم احتياجاتكم.",
    "why.2.title": "سريع وبدون تعقيدات",
    "why.2.desc": "لا أوراق، لا إجراءات معقدة. كل شيء مصمم لتسهيل حياتك.",
    "why.3.title": "أمان قصوى",
    "why.3.desc": "بياناتك ومعاملاتك محمية بأحدث المعايير في القطاع.",
    "why.4.title": "حل شامل",
    "why.4.desc":
      "لا داعي للتنقل بين عدة خدمات: مدفوعاتك، حسابك المهني وإدارتك المالية في مكان واحد.",
    "why.cta": "أنا مهتم",

    "sec.title.pre": "أموالك في",
    "sec.title.highlight": "أمان",
    "sec.1.title": "شفافية كاملة",
    "sec.1.desc":
      "لا رسوم خفية ولا مفاجآت. تحتفظ برؤية كاملة لتكاليفك وتعرف بالضبط ما تدفعه.",
    "sec.2.title": "أمان بمستوى بنكي",
    "sec.2.desc":
      "أموالك محمية بنفس معايير المؤسسات المالية المغربية. توفر بنيتنا التحتية حماية قصوى لأموالك ومعاملاتك.",
    "sec.3.title": "مطابق لمتطلبات بنك المغرب",
    "sec.3.desc":
      "تطبق LacaissePay التوجيهات التنظيمية المغربية لضمان الموثوقية والشفافية والامتثال في كل خطوة من عملياتك.",
    "sec.4.title": "إطار منظم ومراقب",
    "sec.4.desc":
      "نعمل بصفة وكيل مؤسسة دفع، بالتعاون مع شركاء ماليين معتمدين في المغرب. كل معاملة تحترم البروتوكولات المعمول بها.",

    "contact.title": "اتصل بنا",
    "contact.name": "الاسم الكامل",
    "contact.email": "البريد الإلكتروني",
    "contact.phone": "الهاتف",
    "contact.volume": "تقدير رقم المعاملات الشهري",
    "contact.vol.1": "0 إلى 20,000 درهم",
    "contact.vol.2": "20,000 إلى 100,000 درهم",
    "contact.vol.3": "أكثر من 100,000 درهم",
    "contact.message": "الرسالة",
    "contact.send": "إرسال",
    "contact.sending": "جاري الإرسال...",
    "contact.toast.title": "تم إرسال الرسالة!",
    "contact.toast.desc": "سنعاود الاتصال بكم قريبًا.",

    "footer.intro":
      "– حل الدفع الرقمي الذي يبسط نشاطك في المغرب. حصّل بسهولة، أدر أموالك بذكاء واحتفظ بالتحكم الكامل في نشاطك.",
    "footer.info": "معلومات",
    "footer.callus": "اتصل بنا",
    "footer.email": "البريد الإلكتروني",
    "footer.rights": "جميع الحقوق محفوظة.",
  },
};

// Fix accidental quoting issue in Arabic hero rest (the file parser handles RTL fine,
// but ensure value is correct by reassigning programmatically just in case).
(translations.ar as Dict)["hero.title.rest"] =
  "، تحصل على حل دفع عصري ومرن ورقمي بنسبة 100٪.";

interface LangCtx {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
  dir: "ltr" | "rtl";
}

const LanguageContext = createContext<LangCtx | undefined>(undefined);

const STORAGE_KEY = "lcp.lang";

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof window === "undefined") return "fr";
    const saved = window.localStorage.getItem(STORAGE_KEY) as Lang | null;
    return saved && ["fr", "ar", "en"].includes(saved) ? saved : "fr";
  });

  const dir: "ltr" | "rtl" = lang === "ar" ? "rtl" : "ltr";

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
    window.localStorage.setItem(STORAGE_KEY, lang);
  }, [lang, dir]);

  const setLang = (l: Lang) => setLangState(l);

  const t = (key: string) => {
    const v = translations[lang][key];
    if (typeof v === "string") return v;
    const fr = translations.fr[key];
    return typeof fr === "string" ? fr : key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, dir }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLang = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used inside LanguageProvider");
  return ctx;
};
